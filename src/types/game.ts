export type Season = "spring" | "summer" | "autumn" | "winter";
export type Weather = "sunny" | "rain" | "windy" | "cloudy" | "storm" | "snow" | "blizzard" | "clear";
export type TimeOfDay = "morning" | "afternoon" | "evening"| "night";
export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
export type ItemCategory = "flower" | "plant" | "crop" | "fish" | "animal" | "mushroom" | "mineral" | "special";
export type QuestStatus = "available" | "active" | "completed";
export interface SeasonConfig{
    id: Season;
    name: string;
    description: string;
    palette: {
        sky: string;
        ground: string;
        accent: string;
        glow: string;
    };
    weather: Weather[];
    activities: string[];
    eventId: string;
}
export interface Location {
    id: string;
    name: string;
    description: string;
    x: number;
    y: number;
    icon: string;
    seasonalNotes: Partial<Record<Season, string>>;
    resources: string[];
}
export interface Item {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: ItemCategory;
    rarity: Rarity;
    seasons: Season[];
    locations: string[];
}
export interface NPC {
    id: string;
    name: string;
    role: string;
    personality: string;
    locationId: string;
    dialogue: Partial<Record<Season, Partial<Record<TimeOfDay, string[]>>>>;
}
export interface QuestObjective {
    id: string;
    description: string;
    targetType: "collect" | "discover" | "visit";
    tarfetId: string;
    required: number;
}
export interface Quest {
    id: string;
    title: string;
    description: string;
    season: Season;
    objectives: QuestObjective[];
    rewardXp: number;
    rewardCoins: number;
    rewardItemd?: string;
}
export interface SeasonalEvent {
    id: string;
    name: string;
    season: Season;
    description: string;
    activities: string[];
    rewardXp: number;
    locationId: string;
}
export interface InventoryEntry {
    itemId: string;
    quantity: number;
}
export interface QuestProgress {
    questId: string;
    progress: Record<string, number>;
    completed: boolean;
}
export interface PlayerState {
    level: number;
    xp: number;
    coins: number;
    inventory: InventoryEntry[];
    discoveries: string[];
    visitedLocations: string[];
    quests: QuestProgress[];
    currentSeason: Season;
}
export interface GameContextValue {
    player: PlayerState;
    season: SeasonConfig;
    TimeOfDay: TimeOfDay;
    weather: Weather;
    collectItem: (itemId: string, quantity: number) => void;
    visitLocation: (locationId: string) => void;
    starQuest: (questId: string) => void;
    claimQuest: (questId: string) => void;
    setSeason: (seasonId: Season) => void;
    reseemon: () => void;
    isAuthenticated: boolean;
    signOut: () => Promise<void>;
}
