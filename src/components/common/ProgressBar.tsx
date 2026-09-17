export function ProgressBar({ value,max =100 }:{value:number; max?: number }) {
    const width = Math.max(0, Math.min(100, (value / max) * 100));
    return <div className="h-2.5 overflow-hidden rounded-full bg-black/10"><div className="h-full rounded-full bg-[#668e6c] transition-all duration-500" style={{ width: `${width}%` }}/></div>;
}