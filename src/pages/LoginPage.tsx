import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { Button } from "../components/common/Button";
import { Panel } from "../components/common/Panel";
export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState<"login" | "signup">("login");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    async function submit(event: React.SubmitEvent) {
        event.preventDefault();
        if (!supabase) {
            setMessage("Supabase is not configured. You can continue using local demo mode.");
            return;
        }
        const result = mode === "login"
            ? await supabase.auth.signInWithPassword({ email, password })
            : await supabase.auth.signUp({ email, password });
        if (result.error) {
            setMessage(result.error.message);
            return;
        }
        setMessage(mode === "signup" ? "Account created. Check your email if confirmation is enabled." : "Welcome back.");
        navigate("/village");
    }
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f4efe5] p-5">
            <Panel className="w-full max-w-md">
                <p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">Your village</p>
                <h1 className="mt-1 font-display text-4xl font-bold text-[#304639]">
                    {mode === "login" ? "Welcome back" : "Join the village"}
                </h1>
                <p className="mt-2 text-sm leading-6 text-[#648078]">
                    {isSupabaseConfigured
                        ? "Sign in to keep your progression across devices."
                        : "Supabase is optional during local development."}
                </p>
                <form onSubmit={submit} className="mt-6 space-y-3">
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full rounded-2xl border border-black/5 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#91ad94]"
                    />
                    <input
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full rounded-2xl border border-black/5 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#91ad94]"
                    />
                    <Button type="submit" className="w-full">
                        {mode === "login" ? "Sign in" : "Create account"}
                    </Button>
                </form>
                {message && <p className="mt-4 rounded-2xl bg-[#edf0e9] p-3 text-sm text-[#526259]">{message}</p>}
                <button
                    onClick={() => setMode(mode === "login" ? "signup" : "login")}
                    className="mt-4 text-sm font-semibold text-[#55775c]"
                >
                    {mode === "login" ? "Create an account instead" : "I already have an account"}
                </button>
                <Link to="/village" className="mt-5 block text-center text-sm font-semibold text-[#77827b]">
                    Continue to demo
                </Link>
            </Panel>
        </main>
    );
}