import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
export function AppShell() {
    return (
        <div className="min-h-screen bg-[#f4efe5]">
            <Navbar />
            <main className="mx-auto max-w-7xl px-4 py-5 pb-24">
                <Outlet />
            </main>
        </div>
    );
}
