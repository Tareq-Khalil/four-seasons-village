import { LogOut, RotateCcw, UserRound, Mail, ShieldCheck } from "lucide-react";
import { useGame } from "../app/GameProvider";
import { Button } from "../components/common/Button";
import { Panel } from "../components/common/Panel";
import { ProgressBar } from "../components/common/ProgressBar";
import { getLevelProgress } from "../utils/progression";
export function ProfilePage() {
    const { player, isAuthenticated, userEmail, signOut, resetDemo, setSeason } = useGame();
    return (
        <div className="space-y-5">
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">Your story</p>
                <h1 className="font-display text-4xl font-bold text-[#304639]">Profile</h1>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
                <Panel>
                    <div className="flex items-center gap-4">
                        <div className="rounded-3xl bg-[#dce8d8] p-4 text-[#4e7257]"><UserRound size={30} /></div>
                        <div>
                            <h2 className="font-display text-2xl font-bold text-[#3d5145]">Village Explorer</h2>
                            <p className="text-sm text-[#7d887f]">{isAuthenticated ? "Account connected" : "Local demo profile"}</p>
                        </div>
                    </div>
                    {isAuthenticated && (
                        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#edf3ea] p-4">
                            <Mail size={19} className="shrink-0 text-[#55775c]" />
                            <div className="min-w-0">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#7d887f]">Email</p>
                                <p className="truncate text-sm font-semibold text-[#3d5145]">{userEmail ?? "No email available"}</p>
                            </div>
                            <ShieldCheck size={18} className="ml-auto shrink-0 text-[#55775c]" />
                        </div>
                    )}
                        <div className="mt-6">
                            <div className="mb-2 flex justify-between text-sm font-semibold text-[#66736b]">
                                <span>Level {player.level}</span>
                                <span>{getLevelProgress(player.xp)} / 1000 XP</span>
                            </div>
                            <ProgressBar value={getLevelProgress(player.xp)} max={1000} />
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div className="rounded-2xl bg-[#f0ede5] p-4 text-center"><p className="text-2xl font-bold text-[#43574b]">{player.xp}</p><p className="text-xs text-[#89918b]">XP</p></div>
                            <div className="rounded-2xl bg-[#f0ede5] p-4 text-center"><p className="text-2xl font-bold text-[#43574b]">{player.coins}</p><p className="text-xs text-[#89918b]">Coins</p></div>
                            <div className="rounded-2xl bg-[#f0ede5] p-4 text-center"><p className="text-2xl font-bold text-[#43574b]">{player.discoveries.length}</p><p className="text-xs text-[#89918b]">Discoveries</p></div>
                        </div>
                    </Panel>
                <Panel>
                    <h2 className="font-display text-2xl font-bold text-[#3d5145]">Seasons</h2>
                    <p className="mt-2 text-sm text-[#7d887f]">Change the active season while testing the game.</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        {(["spring", "summer", "autumn", "winter"] as const).map((season) => (
                            <Button key={season} variant={player.currentSeason === season ? "primary" : "ghost"} onClick={() => setSeason(season)} className="capitalize">{season}</Button>
                        ))}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <Button variant="secondary" onClick={resetDemo} className="flex items-center gap-2"><RotateCcw size={16} /> Reset progress</Button>
                            {isAuthenticated && <Button variant="ghost" onClick={signOut} className="flex items-center gap-2"><LogOut size={16} /> Sign out</Button>}
                        </div>
                    </Panel>
            </div>
        </div>
    );
}
