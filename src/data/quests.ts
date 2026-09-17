import type { Quest } from "../types/game";
export const quests: Quest[] = [
    { id: "garden-bloom", title: "A garden in Bloom", description: "Collect wildflowers for the village gardene.r", season: "spring", objectives: [{id: "flowers", description: "Collect 5 wildflowers", targetType: "collect", targetId: "wildflower", required: 5}], rewardXp: 250, rewardCoins: 80},
    { id: "lights-dark", title: "Lights in the Dark", description: "Find firefly jars before the evening festival.", season: "summer", objectives: [{id: "candles", description: "Collect 3 firefly jars", targetType: "collect", targetId: "firefly", required: 3}], rewardXp: 350, rewardCoins: 120},
    { id: "harvest-feast", title: "The Harvest Feast", description: "Gather mushrooms for the village feast.", season: "autumn", objectives: [{id: "crops", description: "Collect 10 mushrooms", targetType: "collect", targetId: "mushroom", required: 10}], rewardXp: 400, rewardCoins: 150},
    { id: "missing-bell", title: "The Missing Bell", description: "Find the missing bell near the frozen lake.", season: "winter", objectives: [{id: "lights", description: "Visit the Moonlit Lake", targetType: "visit", targetId: "lake", required: 1}], rewardXp: 450, rewardCoins: 180, rewardItemId: "ice-crystal"},
    { id: "forest-journal", title: "The Naturalist's Note", description: "Discover three different things in the forest.", season: "spring", objectives: [{id: "entries", description: "Discover 3 forest resources", targetType: "discover", targetId: "forest", required: 3}], rewardXp: 200, rewardCoins: 60}
];
