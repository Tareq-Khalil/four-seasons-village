import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import type { GameContextValue, PlayerState, Season, TimeOfDay, Weather } from "../types/game";
import { seasonData } from "../data/seasons";
import { items } from "../data/items";
import { locations } from "../data/locations";
import { quests } from "../data/quests";
import { XP_PER_LEVEL, TIME_CYCLE_MS } from "../lib/constants";
import { loadPlayer, savePlayer } from "../utils/storage";
import { getLevel } from "../utils/progression";
import {supabase, isSupabaseConfigured } from "../lib/supabase";
import { loadRemotePlayer, saveRemotePlayer } from "../services/playerService";
const initialPlayer: PlayerState = {
    level: 1,
    xp: 0,
    coins: 100,
    inventory: [],
    discoveries: [],
    visitedLocations: [],
    quests: [],
    currentSeason: "autumn"
};
const GameContext = createContext<GameContextValue | null>(null);
function randomWeather(season: Season): Weather {
    const options = seasonData[season].weather;
    return options[Math.floor(Math.random() * options.length)];
}
function addItem(player: PlayerState, itemId: string, quantity: number) {
    const existing = player.inventory.find((entry) => entry.itemId === itemId);
    const inventory = existing
        ? player.inventory.map((entry) => entry.itemId === itemId ? { ...entry, quantity: entry.quantity + quantity } : entry)
        : [...player.inventory, {itemId, quantity}];
    return { ...player, inventory};
}
function applyXp(player: PlayerState, amount: number) {
    const xp = player.xp + amount;
    return { ...player, xp, level: getLevel(xp) };
}
export function GameProvider({ children}: { children: React.ReactNode}) {
    const [player, setPlayer] = useState<PlayerState>(() => loadPlayer() ?? initialPlayer);
    const [timeTick, setTimeTick] = useState(0);
    const [weather, setWeather] = useState<Weather>(() => randomWeather(player.currentSeason));
    const [userId, setUserId] = useState<string | null>(null);
    const timeOfDay = useMemo(() => {
        const phase = Math.floor((timeTick %4));
        return ["morning", "afternoon", "evening", "night"][phase] as TimeOfDay;
    }, [timeTick]);
    useEffect(() => {
        const timer = window.setInterval(() => setTimeTick((value) => value +1), TIME_CYCLE_MS);
        return () => window.clearInterval(timer);
    }, []);
    useEffect(() => {
        savePlayer(player);
        if (userId) void saveRemotePlayer(userId, player);
    }, [player, userId]);
    useEffect(() => {
        if (!isSupabaseConfigured || !supabase) return;
        supabase.auth.getSession().then(async ({data}) => {
            const id = data.session?.user.id ?? null;
            setUserId(id);
            if (id) {
                const remote = await loadRemotePlayer(id);
                if (remote) setPlayer(remote);
            }
        });
        const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
            const id = session?.user.id ?? null;
            setUserId(id);
            if (id) {
                const remote = await loadRemotePlayer(id);
                if (remote) setPlayer(remote);
            }
        });
        return () => listener.subscription.unsubscribe();
    }, []);
    useEffect(() => {
        setWeather(randomWeather(player.currentSeason));
    }, [player.currentSeason]);
    const collectItem = useCallback((itemId: string, quantity = 1) => {
        const item = items.find((entry) => entry.id === itemId);
        if (!item || !item.seasons.includes(player.currentSeason)) return;
        setPlayer((current) => {
            let next = addItem(current, itemId, quantity);
            if (!next.discoveries.includes(itemId)) {
                next = { ...next, discoveries: [...next.discoveries, itemId]};
                next = applyXp(next, 50);
            } else {
                next = applyXp(next, 10);
            }
            next = next.quests.reduce((state, progress) => {
                const quest = quests.find((entry) => entry.id === progress.questId);
                if (!quest || progress.completed) return state;
                const objective = quest.objectives.find((entry) => entry.targetId === itemId && entry.targetType === "collect");
                if (!objective) return state;
                const currentProgress = progress.progress[objective.id] ?? 0;
                const amount = Math.min(currentProgress + quantity, objective.required);
                const updateQuest = {
                    ...progress,
                    progress: { ...progress.progress, [objective.id]: amount}
                };
                return {
                    ...state,
                    quests: state.quests.map((entry) => entry.questId === progress.questId ? updateQuest: entry)
                };
            }, next);
            return next;
        });
    }, [player.currentSeason]);
    const visitLocation = useCallback((locationId: string) => {
        const location = locations.find((entry) => entry.id === locationId);
        if (!location) return;
        setPlayer((current) => {
            let next = current;
            if (!next.visitedLocations.includes(locationId)) {
                next = { ...next, visitedLocations: [...next.visitedLocations, locationId] };
                next = applyXp(next, 25);
            }
            next = next.quests.reduce((state, progress) => {
                const quest = quests.find((entry) => entry.id === progress.questId);
                if (!quest || progress.completed) return state;
                const objective = quest.objectives.find((entry) => entry.targetType === "visit" && entry.targetId === locationId);
                if (!objective) return state;
                const updateQuest = { ...progress, progress: { ...progress.progress, [objective.id]: 1}};
                return { ...state, quests: state.quests.map((entry) => entry.questId === progress.questId ? updateQuest : entry)};
            }, next);
            return next;
        });
    }, []);
    const startQuest = useCallback((questId: string) => {
        setPlayer((current) => {
            if (current.quests.some((entry) => entry.questId === questId)) return current;
            const quest = quests.find((entry) => entry.id === questId);
            if (!quest || quest.season !== current.currentSeason) return current;
            return {
                ...current,
                quests: [...current.quests, {questId, progress: {}, completed: false}]
            };
        });
    }, []);
    const claimQuest = useCallback((questId: string) => {
        setPlayer((current) => {
            const quest = quests.find((entry) => entry.id === questId);
            const progress = current.quests.find((entry) =>entry.questId === questId);
            if (!quest || !progress || progress.completed) return current;
            const done = quest.objectives.every((objective) => (progress.progress[objective.id] ?? 0) >= objective.required);
            if (!done) return current;
            let next = { ...current, coins: current.coins + quest.rewardCoins, quests: current.quests.map((entry) => entry.questId === questId ? { ...entry, completed: true}:entry)};
            next = applyXp(next,quest.rewardXp);
            if (quest.rewardItemId) next=addItem(next,quest.rewardItemId,1);
            return next;
        });
    }, []);
    const setSeason = useCallback((season: Season) => {
        setPlayer((current) => ({ ...current, currentSeason: season}));
    },[]);
    const resetDemo = useCallback(() => {
        setPlayer(initialPlayer);
        localStorage.removeItem("four-seasons-village-player")
    },[]);
    const signOut = useCallback(async() => {
        if (supabase) await supabase.auth.signOut();
        setUserId(null);
    },[]);
    const value: GameContextValue = {
        player,
        season: seasonData[player.currentSeason],
        timeOfDay,
        weather,
        collectItem,
        visitLocation,
        startQuest,
        claimQuest,
        setSeason,
        resetDemo,
        isAuthenticated: Boolean(userId),
        signOut
    };
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
export function useGame() {
    const value = useContext(GameContext);
    if (!value) throw new Error("useGame must be used inside GameProvider");
    return value;
}