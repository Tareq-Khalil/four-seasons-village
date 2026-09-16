import { XP_PER_LEVEL} from "../lib/constants";
export function getLevel(xp: number) {
    return Math.floor(xp / XP_PER_LEVEL) +1;
}
export function getLevelProgress(xp: number) {
    return xp % XP_PER_LEVEL;
}