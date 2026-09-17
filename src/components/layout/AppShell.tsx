import {NavLink, Outlet } from "react-router-dom";
import {
    BookOpen,
    Compass,
    Home,
    Map,
    ScrollText,
    Shield,
    UserRound,
    Backpack,
} from "lucide-react";
import { useGame } from "../../app/GameProvider";
import { getLevelProgress } from "../../utils/progression";
import { ProgressBar } from "../common/ProgressBar";
const nav = [
    { to: "/village", label: "Village", icon: Home },
    { to: "/map", label: "Map", icon: Map },
    { to: "/inventory", label: "Inventory", icon: Backpack},
    { to: "/journal", label: "Journal", icon: BookOpen},
    { to: "/quests", label: "Quests", icon: ScrollText},
    { to: "/profile", label: "Profile", icon: UserRound},
    { to: "/admin", label: "Admin", icon: Shield},
];
export function AppShell() {
    const {player, season } = useGame();
    return(
        <div className="min-h-screen bg-[#f4efe5]">
            <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f7f2e8]/90 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
                    <NavLink to="/village" className="min-w-0">
                    <p className="font-display text-xl font-bold text-[#2f493b]">
                        Four Seasons Village
                    </p>
                    <p className="text-xs text-[#758075]">{season.name} valley</p>
                    </NavLink>
                    <div className="hidden w-56 md:block">
                        <div className="mb-1 flex justify-between text-xs font-semibold">
                            <span>Level {player.level}</span>
                            <span>{getLevelProgress(player.xp)} / 1000 XP</span>
                        </div>
                        <ProgressBar value={getLevelProgress(player.xp)} max={1000} />
                    </div>
                    <div className="rounded-2xl bg-white/65 px-3 py-2 text-sm font-semibold text-[#6a5130]">
                        {player.coins} coins
                    </div>
                </div>
            </header>
            <div className="mx-auto flex max-w-7xl gap-5 px-4 py-5">
                <aside className="hidden w-52 shrink-0 md:block">
                    <nav className="sticky top-24 space-y-1.5">
                        {nav.map(({ to, label, icon: Icon }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({isActive}) =>
                                    `flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold transition ${isActive ? "bg-[#d9e5d5] text-[#2f513e]" : "text-[#68756d] hover:bg-white/60"}`
                                }
                            >
                                <Icon size={18} />
                                {label}
                              </NavLink>
                        ))}
                    </nav>
                </aside>
                <main className="min-w-0 flex-1 pb-24 md:pb-8">
                    <Outlet />
                </main>
            </div>
            <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-6 border-t border-black/5 bg-[#f8f4ec]/95 p-2 backdrop-blur-xl md:hidden">
                {nav.slice(0,6).map(({to, label, icon:Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `flex flex-col items-center gap-1 rounded-xl p-2 text-[10px] font-semibold ${isActive ? "bg-[#d9e5d5] text-[#2f513e]" : "text-[#7b847d]"}`
                        }
                    >
                        <Icon size={17} />
                        {label}
                        </NavLink>
                ))}
            </nav>
        </div>

    );
}