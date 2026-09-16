import type { SeasonalEvent } from "../types/game";
export const events: SeasonalEvent[] = [
    { id: "flower-festival", name: "Flower Festival", season: "spring", description: "", activities: ["Flower arranging", "Garden walk", "Spring picnic"], rewardXp: 300, locationId: "square"},
    { id: "lantern-night", name: "Lantern Night", season: "summer", description: "", activities: ["Lantern walk", "Firefly hunt", "Lake reflection"], rewardXp: 400, locationId: "lake"},
    { id: "harvest-festival", name: "Harvest Festival", season: "autumn", description: "", activities: ["Harvest contest", "Cooking", "Music in the square"], rewardXp: 500, locationId: "square"},
    { id: "snowlight-festival", name: "Snowlight Festival", season: "winter", description: "", activities: ["Snow lanterns", "Winter market", "Shrine visit"], rewardXp: 600, locationId: "shrine"},
];