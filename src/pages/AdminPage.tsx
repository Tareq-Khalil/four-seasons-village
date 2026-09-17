import { useEffect, useState } from "react";
import { Shield, Users, Database, Activity } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useGame } from "../app/GameProvider";
import { Panel } from "../components/common/Panel";
interface AdminUser {
    id: string;
    username: string | null;
    display_name: string | null;
    level: number;
    xp: number;
    coins: number;
}
export function AdminPage() {
    const { isAuthenticated } = useGame();
    const [users, setUsers] = useState<AdminUser[]>([]);
    const [selected, setSelected] = useState<AdminUser | null>(null);
    const [message, setMessage] = useState("");
    useEffect(() => {
        if (!supabase || !isAuthenticated) return;
        supabase.from("profiles").select("id,username,display_name,level,xp,coins").order("level", { ascending: false}).then(({ data, error }) => {
            if (error) setMessage("The current account does not have permission to read admin data.");
            else setUsers((data ?? []) as AdminUser[]);
        });
    }, [isAuthenticated]);
    if (!isAuthenticated) {
        return <Panel><Shield className="text-[#8b6c43]" /><h1 className="mt-3 font-display text-3xl font-bold text-[#3e5045]">Admin Area</h1><p className="mt-2 text-sm text-[#7b867f]">Sign in with an authorized administrator account to view player data.</p></Panel>;
    }
    return (
        <div className="space-y-5">
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">Restricted area</p>
                <h1 className="font-display text-4xl font-bold text-[#304639]">Admin Dashboard</h1>
                <p className="mt-2 text-[#748078]">Monitor player profiles through Supabase-protected queries.</p>
            </div>
            {message && <Panel className="text-sm text-[#875c50]">{message}</Panel>}
            <div className="grid gap-4 sm:grid-cols-3">
                <Panel>
                    <Users className="text-[#5d7d62]" />
                    <p className="mt-4 text-3xl font-bold text-[#3d5145]">{users.length}</p>
                    <p className="text-sm text-[#818b85]">Visible players</p>
                </Panel>
                <Panel>
                    <Activity className="text-[#8c704b]" />
                    <p className="mt-4 text-3xl font-bold text-[#3d5145]">{users.filter((user) => user.level > 1).length}</p>
                    <p className="text-sm text-[#818b85]">Levelled players</p>
                </Panel>
                <Panel>
                    <Database className="text-[#647b88]" />
                    <p className="mt-4 text-3xl font-bold text-[#3d5145]">Supabase</p>
                    <p className="text-sm text-[#818b85]">Data source</p>
                </Panel>
            </div>
            <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
                <Panel>
                    <h2 className="font-display text-2xl font-bold text-[#405348]">Players</h2>
                    <div className="mt-4 space-y-2">
                        {users.map((user) => (
                            <button key={user.id} onClick={() => setSelected(user)} className="flex w-full items-center justify-between rounded-2xl bg-[#f0ede5] p-4 text-left hover:bg-[#e6eadf]">
                                <div>
                                    <p className="font-semibold text-[#45684c]">{user.display_name || user.username || "Unnamed player"}</p>
                                    <p className="text-xs text-[#89918b]">Level {user.level} · {user.xp} XP</p>
                                </div>
                                <span className="text-sm font-bold text-[#80623e]">{user.coins} coins</span>
                            </button>
                        ))}
                    </div>
                </Panel>
                <Panel>
                    {selected ? (
                        <>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">Player details</p>
                            <h2 className="mt-1 font-display text-2xl font-bold text-[#405348]">{selected.display_name || selected.username || "Unnamed player"}</h2>
                            <div className="mt-5 space-y-2 text-sm text-[#65736a]">
                                <p>Level: <strong>{selected.level}</strong></p>
                                <p>XP: <strong>{selected.xp}</strong></p>
                                <p>Coins: <strong>{selected.coins}</strong></p>
                                <p className="break-all">ID: {selected.id}</p>
                            </div>
                        </>
                    ) : (
                        <div className="py-12 text-center text-sm text-[#89918b]">Select a player to inspect their profile.</div>
                    )}
                </Panel>
            </div>
        </div>
    );
    
}