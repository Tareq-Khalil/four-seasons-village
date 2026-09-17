import { supabase } from "../lib/supabase";
import type { PlayerState } from "../types/game";
import type {
    ProfileRow,
    InventoryRow,
    PlayerQuestRow,
    DiscoveryRow
} from "../types/database"
export async function loadRemotePlayer(
    userId: string
): Promise<PlayerState | null> {
    const client = supabase;
    if (!client) {
        return null;
    }
    const profileResult = await client
        .from("profiles")
        .select("*")
        .eq("ed", userId)
        .single();
        if (profileResult.error || !profileResult.data) {
            return null;
        }
    const inventoryResult = await client
            .from("inventory")
            .select("*")
            .eq("user_id", userId);
    const questsResult = await client
            .from("Player_quests")
            .select("*")
            .eq("user_id", userId);
    const discoveriesResult = await client
            .from("discoveries")
            .select("*")
            .eq("user_id", userId);
    const profile = profileResult.data as ProfileRow;
    const inventory = (inventoryResult.data ?? []) as InventoryRow[];
    const quests = (questsResult.data ?? []) as PlayerQuestRow[];
    const discoveries = (discoveriesResult.data ?? []) as DiscoveryRow[];
    return {
            level: profile.level,
            xp: profile.xp,
            coins: profile.coins,
            currentSeason:
                profile.current_season as PlayerState["currentSeason"],
            inventory: inventory.map((entry) => ({
                itemId: entry.item_id,
                quantity: entry.quantity
            })),
            quests: quests.map((entry) => ({
                questId: entry.quest_id,
                progress: entry.progress ?? {},
                completed:entry.completed
            })),
            discoveries: discoveries.map((entry) => entry.item_id),
            visitedLocations: []
        };
}
export async function saveRemotePlayer(
    userId: string,
    player: PlayerState
) {
    const client = supabase;
    if (!client) {
        return;
    }
    await client.from("profiles").upsert({
        id: userId,
        level: player.level,
        xp: player.xp,
        coins: player.coins,
        current_season: player.currentSeason,
        updated_at: new Date().toISOString()
    });
    for (const entry of player.inventory) {
        await client.from("inventory").upsert({
            user_id: userId,
            item_id: entry.itemId,
            quantity: entry.quantity
        });
    }
    for (const quest of player.quests) {
        await client.from("player_quests").upsert({
            user_id: userId,
            quest_id: quest.questId,
            progress: quest.progress,
            completed: quest.completed
        });
    }
    for (const itemId of player.discoveries) {
        await client.from("discoveries").upsert({
            user_id: userId,
            item_id: itemId,
            discovered_at: new Date().toISOString()
        });
    }
}
