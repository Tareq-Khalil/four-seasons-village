import type { Season, SeasonConfig } from "../types/game";
export const seasonData: Record<Season, SeasonConfig> = {
    spring: {
        id: "spring",
        name: "Spring",
        description: "Fresh rain, young blossoms, and the first signs of a new year.",
        palette: {sky: "#cfe6dc", ground: "#b9d5a8", accent: "#6f9e72", glow: "#f4c6d8"},
        weather: ["sunny", "rain", "windy"],
        activities: ["Flower collecting", "Gardening", "Spring gathering"],
        eventId: "flower-destival"
    },
    summer: {
        id: "summer",
        name: "Summer",
        description: "Long golden afternoons, deep green forests, and warm nights beside the lake",
        palette: {sky: "#8ec9df", ground: "#79aa69", accent: "#4d8759", glow: "#f6d77a"},
        weather: ["sunny", "cloudy", "storm"],
        activities: ["Fishing", "Berry collecting", "Lake activities"],
        eventId: "lantern-night"
    },
    autumn: {
        id: "autumn",
        name: "Autumn",
        description: "Golden leaves cover the valley while the village prepares for the harvest.",
        palette: {sky: "#d8b18c", ground: "#aa8c58", accent: "#a65c39", glow: "#f0b45d"},
        weather: ["cloudy", "rain", "windy"],
        activities: ["Mushroom collecting", "Harvesting", "Apple gathering"],
        eventId: "harvest-festival"
    },
    winter: {
        id: "winter",
        name: "Winter",
        description: "Snow settles over the rooftops and warm lights glow against the quiet valley",
        palette: {sky: "#b7cbe0", ground: "#dbe3e6", accent: "#67839c", glow: "#f7dca7"},
        weather: ["snow", "blizzard", "clear"],
        activities: ["Winter gathering", "Animal tracking", "Ice fishing"],
        eventId: "snowlight-festival"
    }
};