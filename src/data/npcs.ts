import type { NPC } from "../types/game";
export const npcs: NPC[] = [
  { id: "mira", name: "Mira", role: "Village Gardener", personality: "Warm, patient, and endlessly curious about plants.", locationId: "farm", dialogue: {
    spring: { morning: ["The soil is still damp from last night's rain.", "Spring always makes the garden feel twice as large."] },
    summer: { afternoon: ["Keep the young plants watered today.", "The sunflowers are taller than I am now."] },
    autumn: { morning: ["Harvest time makes every early morning worth it."] },
    winter: { evening: ["The garden is sleeping. We will wake it again when the snow melts."] }
  }},
  { id: "ren", name: "Ren", role: "Blacksmith", personality: "Quiet, practical, and secretly fond of village gossip.", locationId: "workshop", dialogue: {
    spring: { afternoon: ["A repaired tool can feel almost new again."] },
    summer: { evening: ["Fishing gear needs more repairs than people think."] },
    autumn: { morning: ["Harvest season is when my workshop gets busiest."] },
    winter: { night: ["The forge is warmer than any blanket."] }
  }},
  { id: "hana", name: "Hana", role: "Librarian", personality: "Thoughtful and fascinated by forgotten village stories.", locationId: "library", dialogue: {
    spring: { morning: ["There is an old book about every plant in this valley."] },
    summer: { afternoon: ["Someone returned a very old fishing journal today."] },
    autumn: { evening: ["The harvest records tell us more than the village stories do."] },
    winter: { night: ["Snow makes everyone remember the old stories."] }
  }},
  { id: "toma", name: "Toma", role: "Fisherman", personality: "Cheerful, observant, and convinced the lake has secrets.", locationId: "lake", dialogue: {
    spring: { morning: ["The water is calm today. Good fishing weather."] },
    summer: { evening: ["Watch the surface when the sun goes down."] },
    autumn: { afternoon: ["The fish move differently when the water cools."] },
    winter: { morning: ["Ice fishing takes patience."] }
  }},
  { id: "sora", name: "Sora", role: "Shopkeeper", personality: "Energetic, welcoming, and always looking for a new trade.", locationId: "market", dialogue: {
    spring: { afternoon: ["Fresh flowers sell quickly this time of year."] },
    summer: { afternoon: ["The berry baskets arrived early today."] },
    autumn: { morning: ["Apples everywhere. I can barely keep the shelves clear."] },
    winter: { evening: ["Warm food is the best thing to trade when the roads are snowy."] }
  }},
  { id: "yuki", name: "Yuki", role: "Shrine Keeper", personality: "Mysterious, gentle, and unusually attentive to the seasons.", locationId: "shrine", dialogue: {
    spring: { evening: ["Every season leaves a message somewhere in the valley."] },
    summer: { night: ["Listen carefully. The bells sound different in summer air."] },
    autumn: { evening: ["Nothing truly disappears. Some things simply change form."] },
    winter: { night: ["The quietest nights are sometimes the most revealing."] }
  }}
]
