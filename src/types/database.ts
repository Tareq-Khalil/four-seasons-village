export interface ProfileRow {
    id: string;
    display_name: string | null;
    username: string | null;
    level: number;
    xp: number;
    coins: number;
    current_season: string;
    created_at: string;
    updated_at: string;
}
export interface InventoryRow {
    id: string;
    user_id: string;
    item_id: string;
    quantity: number;
}
export interface PlayerQuestRow {
    id: string;
    user_id: string;
    quest_id: string;
    progress: Record<string, number>;
    completed: boolean;
}
export interface DiscoveryRow {
    id: string;
    user: string;
    item_id: string;
    discovered_at: string;
}
export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: ProfileRow;
                Insert: Partial<ProfileRow> & { id: string };
                Update: Partial<ProfileRow>;
            };
            inventory: {
                Row: InventoryRow;
                Insert: Omit<InventoryRow, "id">;
                Update: Partial <InventoryRow>;
            };
            player_quest: {
                Row: PlayerQuestRow;
                Insert: Omit<PlayerQuestRow, "id">;
                Update: Partial<PlayerQuestRow>;
            };
            discoveries: {
                Row: DiscoveryRow;
                Insert:Omit<DiscoveryRow, "id">;
                Update: Partial<DiscoveryRow>;
            };
        };
    };
}