
import type { ReactNode } from "react";
export function Panel({ children, className="" }: {children: ReactNode; className?: string }){
    return <section className={`rounded-3xl border border-white/60 bg-white/72 p-5 shadow-soft backdrop-blur-md ${className}`}>{children}</section>;

}