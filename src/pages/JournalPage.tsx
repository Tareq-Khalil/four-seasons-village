import { items } from "../data/items";
import { useGame } from "../app/GameProvider";
import { Panel } from "../components/common/Panel";
export function JournalPage() {
    const { player } = useGame();
    const discovered = new Set(player.discoveries);
    const categories = [...new Set(items.map((items) => items.category))];
    return (
        <div className="space-y-5">
            <div><p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">Field notes</p><h1 className="font-display text-4xl font-bold text-[#304639]">Village Journal</h1><p className="mt-2 text-[#748078]">{player.discoveries.length} of {items.length} discoveries recorded.</p></div>
            {categories.map((category) => {
                const categoryItems = items.filter((item) => item.category === category);
                return <Panel key={category}><div className="mb-4 flex items-center justify-between"><h2 className="font-display text-2xl font-bold capitalize text-[#405348]">{category}</h2><span className="text-sm font-semibold text-[#859087]">{categoryItems.filter((item) => discovered.has(item.id)).length} / {categoryItems.length}</span></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{categoryItems.map((item) => { const found = discovered.has(item.id); return <div key={item.id} className={`rounded-2xl p-4 text-center ${found ? "bg-[#e8eee3]" : "bg-[#eeece6]"}`}><div className="text-3xl">{found ? item.icon : "?"}</div><p className={`mt-3 text-sm font-semibold ${found ? "text-[#405448]" : "text-[#a0a49f]"}`}>{found ? item.name : "Undiscovered"}</p></div> })}</div></Panel>
            })}
        </div>
    );
}
