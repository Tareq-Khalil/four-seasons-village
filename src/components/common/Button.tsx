import type { ButtonHTMLAttributes, ReactNode } from "react";
export function Button ({ children, variant = "primary", className= "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & {children: ReactNode; variant?: "primary" | "secondary" | "ghost"}) {
    const styles = {
        primary: "bg-[#304f40] text-white hover:bg-[#243d31]",
        secondary: "bg-[#eadcc4] text-[#493e30] hover:bg-[#dfcfb4]",
        ghost: "bg-white/55 text-[#33463a] hover:bg-white/80"

    };
    return <button className={`rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`} {...props}>{children}</button>;
}