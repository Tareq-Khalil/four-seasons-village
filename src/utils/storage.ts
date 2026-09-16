import type { PlayerState } from "../types/game";
import { STORAGE_KEY} from "../lib/constants";
export function loadPlayer(): PlayerState | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw) as PlayerState;
    } catch {
        localStorage.removeItem(STORAGE_KEY);
        return null;
    }
}
export function savePlayer(player: PlayerState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
}