import type { SeasonalEvent } from "../types/game";
export const events: SeasonalEvent[] = [
    { id: "flower-festival", name: "Flower Festival", season: "spring", description: "villagers gather in the square to celebrate the first full bloom of the year.", activities: ["Flower arranging", "Garden walk", "Spring picnic"], rewardXp: 300, locationId: "square"},
    { id: "lantern-night", name: "Lantern Night", season: "summer", description: "Hundreds of small lanterns float above the village after sunset.", activities: ["Lantern walk", "Firefly hunt", "Lake reflection"], rewardXp: 400, locationId: "lake"},
    { id: "harvest-festival", name: "Harvest Festival", season: "autumn", description: "The year's harvest become a feast shared by the whole village", activities: ["Harvest contest", "Cooking", "Music in the square"], rewardXp: 500, locationId: "square"},
    { id: "snowlight-festival", name: "Snowlight Festival", season: "winter", description: "Warm lights guide villagers through a quiet snowy evening.", activities: ["Snow lanterns", "Winter market", "Shrine visit"], rewardXp: 600, locationId: "shrine"},
];