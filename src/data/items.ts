import type { Item } from "../types/game";
export const items: Item[] = [
    { id: "wildflower", name: "Wildflower", description: "A small flower growing beside village paths.", icon: "/assets/icons/wildflower.png", category: "flower", rarity: "common", seasons: ["spring"], locations: ["forest", "farm"] },
    { id: "herb", name: "Meadow Herb", description: " fragrant herb often used by the gardener.", icon: "", category : "plant", rarity: "common", seasons: ["spring", "summer"], locations: ["forest"] },
    { id: "berry", name: "Forest Berry", description: "A sweet berry that grows in sunny summer patches.", icon: "", category: "plant", rarity: "common", seasons: ["summer", "autumn"], locations: ["forest", "lake", "market"] },
    { id: "firefly", name: "Firefly Jar", description: "A gentle glow captured during a summer evening.", icon: "", category: "special", rarity: "rare", seasons: ["summer"], locations: ["forest"]},
    { id: "sunflower", name: "Sunflower", description: "A bright flower that follows the summer sun.", icon: "", category: "flower", rarity: "uncommon", seasons: ["summer"], locations: ["farm"] },
    { id: "trout", name: "Silver Trout", description: "A quick fish found in the clear lake.", icon: "", category: "fish", rarity: "uncommon", seasons: ["summer", "winter"], locations: ["lake"] },
    { id: "mushroom", name: "Autumn Mushroom", description: "A warm-colored mushroom hiding beneath fallen leaves.", icon: "", category: "mushroom", rarity: "common", seasons: ["autumn"], locations: ["forest"] },
    { id: "chestnut", name: "Chestnut", description: "A nut gathered from the old forest trees.", icon: "", category: "crop", rarity: "common", seasons: ["autumn"], locations: ["forest"] },
    { id: "apple", name: "Valley Apple", description: "A crisp apple from the village orchards.", icon: "", category: "crop", rarity: "uncommon", seasons: ["autumn"], locations: ["farm", "market"] },
    { id: "winter-herb", name: "Winter Herb", description: "A hardy plant that survives under snow.", icon: "", category: "plant", rarity: "rare", seasons: ["winter"], locations: ["forest"] },
    { id: "ice-crystal", name: "Ice Crystal", description: "A clear crystal found near frozen water.", icon: "", category: "mineral", rarity: "rare", seasons: ["winter"], locations: ["lake", "mountain"] },
    { id: "iron-ore", name: "Frostberry", description: "Useful ore collected along the mountain trail.", icon: "", category: "mineral", rarity: "uncommon", seasons: ["spring", "summer", "autumn", "winter"], locations: ["workshop", "mountain"] },
    { id: "moonflower", name: "Crystal Shard", description: "A rare flower that opens only after sunset.", icon: "", category: "special", rarity: "epic", seasons: ["spring", "winter"], locations: ["shrine"] }
]