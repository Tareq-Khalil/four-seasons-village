import type { NPC } from "../types/game";
export const npcs: NPC[] = [
    { id: "npc1", name: "Elder Rowan", role: "Village Elder", personality: "Wise and kind", locationId: "village_square", dialogue: {
        spring: { morning: ["Good morning, traveler! The village is blooming with life."], afternoon: ["The flowers are in full bloom. Have you seen the cherry blossoms?"], evening: ["The sunset is beautiful tonight. Take a moment to enjoy it."] },
        summer: { morning: ["Good morning! The lake is perfect for a swim today."], afternoon: ["It's quite hot today. Make sure to stay hydrated."], evening: ["The fireflies are out tonight. A magical sight indeed."] },
        autumn: { morning: ["Good morning! The harvest season is upon us."], afternoon: ["The leaves are falling beautifully. A perfect time for a walk."], evening: ["The harvest festival is coming soon. Are you ready?"] },
        winter: { morning: ["Good morning! The snow has covered the village in white."], afternoon: ["It's quite chilly today. Keep warm!" ], evening: ["The snowlight festival will be wonderful tonight."] }
    }}
]