import type { Quest } from "../types/game";
export const quests: Quest[] = [
    { id: "garden-bloom", title: "A garden in Bloom", description: "", season: "spring", objectives: [{id: "flowers", description: "", targetType: "collect", targetId: "wildflower", required: 5}], rewardXp: 250, rewardCoins: 80},
    { id: "lights-dark", title: "Lights in the Dark", description: "", season: "summer", objectives: [{id: "candles", description: "", targetType: "collect", targetId: "firefly", required: 3}], rewardXp: 350, rewardCoins: 120},
    { id: "harvest-feast", title: "The Harvest Feast", description: "", season: "autumn", objectives: [{id: "crops", description: "", targetType: "collect", targetId: "mushroom", required: 10}], rewardXp: 400, rewardCoins: 150},
    { id: "missing-bell", title: "The Missing Bell", description: "", season: "winter", objectives: [{id: "lights", description: "", targetType: "visit", targetId: "lake", required: 1}], rewardXp: 450, rewardCoins: 180, rewardItemId: "ice-crystal"},
    { id: "forest-journal", title: "The Naturalist's Note", description: "", season: "spring", objectives: [{id: "entries", description: "", targetType: "discover", targetId: "forest", required: 3}], rewardXp: 200, rewardCoins: 60}
];
