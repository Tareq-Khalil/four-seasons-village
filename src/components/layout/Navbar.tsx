import { NavLink, Link } from "react-router-dom";
import {
    BookOpen,
    Home,
    Map,
    ScrollText,
    UserRound,
    Backpack,
    Shield,
    UserPlus,
}   from "lucide-react";
const nav = [
    { to: "/village", label: "Village", icon: Home},
    { to: "/map", label: "Map", icon: Map },
    { to: "/inventory", label: "Inventory", icon: Backpack },
    { to: "/journal", label: "Journal", icon: BookOpen },
    { to: "/quests", label: "Quests", icon: ScrollText },
    { to: "/profile", label: "Profile", icon: UserRound },
    { to: '/login', label:"Sign up/Log in", icon: UserPlus },
    { to: "/admin", label: "Admin", icon: Shield }
];
export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f2e8]/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
                <Link
                  to="/"
                  className="shrink-0 font-display text-lg font-bold text-[#2f493b] md:text-x1"
                >
                    Four Seasons Village
                </Link>
                <nav className="ml-auto flex items-center gap-1 overflow-x-auto">
                    {nav.map(({ to, label, icon: Icon}) => (
                        <NavLink
                          key={to}
                          to={to}
                          className={({ isActive}) =>
                            `flex shrink-0 items-center gap-2 rounded-x1 px-3 py-2 text-sm font-semibold transition ${
                              isActive
                                ? "bg-[#d9e5d5] text-[#2f513e]"
                                : "text-[#68756d] hover:bg-white/70"
                            }`
                          }
                        >
                            <Icon size={17} />
                            <span className="hidden lg:inline">{label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}
