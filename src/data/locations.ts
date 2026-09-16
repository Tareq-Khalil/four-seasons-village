import type { Location } from "../types/game";
export const locations: Location[] = [
    {id: "square", name: "Village Square", description: ".", x: 50, y: 55, icon: "/assets/icons/forest.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: []},
    {id: "farm", name: "Farm", description: ".", x: 31, y: 69, icon: "/assets/icons/lake.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: ["wildflower", "sunflower", "apple"]},
    {id: "forest", name: "Whispering Forest", description: ".", x: 24, y: 31, icon: "/assets/icons/farm.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: ["wildflower", "herb", "berry", "firefly", "mushroom", "chestnut", "winter-herb"]},
    {id: "lake", name: "Moonlit Lake", description: ".", x: 75, y: 35, icon: "/assets/icons/market.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: ["trout", "berry", "ice-crystal"]},
    {id: "market", name: "Market", description: ".", x: 67, y: 59, icon: "/assets/icons/mountain.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: ["apple", "berry"]},
    {id: "workshop", name: "Workshop", description: ".", x: 80, y: 72, icon: "/assets/icons/shrine.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: ["iron-ore"]},
    {id: "library", name: "Library", description: ".", x: 58, y: 25, icon: "/assets/icons/shrine.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: []},
    {id: "shrine", name: "Old Shrine", description: ".", x: 43, y: 23, icon: "/assets/icons/shrine.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: ["moonflower"]},
    {id: "mountain", name: "Mountain Trail", description: ".", x: 88, y: 22, icon: "/assets/icons/shrine.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: ["iron-ore", "ice-crystal"]},
    {id: "house", name: "Player's House", description: ".", x: 45, y: 78, icon: "/assets/icons/shrine.png", seasonalNotes: {spring: ".", summer: ".", autumn: ".", winter: "."}, resources: []}
];