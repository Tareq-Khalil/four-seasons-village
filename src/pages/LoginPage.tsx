import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { Button } from "../components/common/Button";
import { Panel } from "../components/common/Panel";
export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState<"login" | "signup">("signup");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const destination = (location.state as { from?: string } | null)?.from ?? "/village";
    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("");
        if (!supabase) {
            setMessage("Account sign-in is unavailable because Supabase is not configured.");
            return;
        }
        const result = mode === "login"
            ? await supabase.auth.signInWithPassword({ email, password })
            : await supabase.auth.signUp({ email, password });
        if (result.error) {
            setMessage(result.error.message);
            return;
        }
        if (mode === "signup" && !result.data.session) {
            setMessage("Account created. Check your email to confirm your account, then sign in.");
            setMode("login");
            return;
        }
        navigate(destination, { replace: true });
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
                        ? "Create an account first, then your village progress can be saved across devices."
                        : "Connect Supabase to enable accounts and village access."}
                </p>
                <form onSubmit={submit} className="mt-6 space-y-3">
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        autoComplete="email"
                        className="w-full rounded-2xl border border-black/5 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#91ad94]"
                    />
                    <input
                        required
                        minLength={6}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        autoComplete={mode === "login" ? "current-password" : "new-password"}
                        className="w-full rounded-2xl border border-black/5 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#91ad94]"
                    />
                    <Button type="submit" className="w-full">
                        {mode === "login" ? "Sign in" : "Create account"}
                    </Button>
                </form>
                {message && <p className="mt-4 rounded-2xl bg-[#edf0e9] p-3 text-sm text-[#526259]">{message}</p>}
                <button
                   onClick={() => {
                    setMessage("");
                    setMode(mode === "login" ? "signup" : "login");
                   }}
                   className="mt-4 text-sm font-semibold text-[#55775c]"
                >
                    {mode === "login" ? "New here? Create an account" : "Already have an account? Sign in"}
                </button>
                <Link to="/" className="mt-5 block text-center text-sm font-semibold text-[#77827b]">
                    Back to home
                </Link>
            </Panel>
        </main>
    );
}