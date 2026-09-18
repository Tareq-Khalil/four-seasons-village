import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, PackageOpen, Sparkles } from "lucide-react";
import { locations } from "../data/locations";
import { items } from "../data/items";
import { useGame } from "../app/GameProvider";
import { Button } from "../components/common/Button";
import { Panel } from "../components/common/Panel";
export function MapPage(){
    const { season, collectItem, visitLocation, player} = useGame();
    const [selectedId, setSelectedId] = useState("forest");
    const selected = locations.find((location) => location.id === selectedId) ?? locations[0];
    const availableItems = selected.resources
      .map((id) => items.find((item) => item.id === id))
      .filter ((item): item is (typeof items)[number] => Boolean(item && item.seasons.includes(season.id)));
    function explore() {
        visitLocation(selected.id);
        if (availableItems.length) {
            const item = availableItems[Math.floor(Math.random() * availableItems.length)];
            collectItem(item.id);
        }
    }
    return (
        <div className="space-y-5">
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">Interactive world</p>
                <h1 className="font-display text-4xl font-bold text-[#304639]">The Village Map</h1>
                <p className="mt-2 text-[#748078]">Choose a place and see what this season has waiting there.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-[1.6fr_0.8fr]">
                <Panel className="relative min-h-[600px] overflow-hidden p-0">
                    <div className="absolute inset-0 bg-[#cbdab9]" style={{backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,.45) 0 2px, transparent 3px), radial-gradient(circle at 70% 65%, rgba(63,91,67,.12) 0 2px, transparent 3px)", backgroundSize: "46px 46px, 63px 63px"}} />
                    <div className="absolute inset-[8%] rounded-[45%] border-[20px] border-[#b3ca9f]/80"/>
                    <div className="absolute left-[42%] top-[37%] h-32 w-40 rounded-[50%] bg-[#8db7bd]/70"/>
                    {locations.map((location) => {
                        const active = selectedId === location.id;
                        return (
                            <motion.button key={location.id} whileHover={{scale:1.08}} onClick={() => setSelectedId(location.id)} style={{left: `${location.x}%`, top: `${location.y}%` }} className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-3 py-2 text-left shadow-md transition ${active ? "z-20 border-[#304f40] bg-[#304f40] text-white" : "border-white/80 bg-white/80 text-[#3b5043]"}`}>
                                <div className="flex items-center gap-2"><span className="text-lg">{location.icon}</span><span className="text-xs font-bold">{location.name}</span></div>
                            </motion.button>
                        );
                    })}
                    <div className="absolute bottom-4 left-4 rounded-2xl bg-white/75 px-3 py-2 text-xs font-semibold text-[#5c6b61] backdrop-blur">
                        {player.visitedLocations.length} / {locations.length} places visited
                    </div>
                </Panel>
                <Panel className="h-fit">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#879088]">Selected</p>
                            <h2 className="mt-1 font-display text-2xl font-bold text-[#304639]">{selected.name}</h2>
                        </div>
                        <MapPin className="text-[#668e6c]" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[#6f7b73]">{selected.description}</p>
                    <div className="mt-5 rounded-2xl bg-[#edf0e9] p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#7c877f]">This season</p>
                        <p className="mt-2 text-sm font-semibold text-[#425449]">{selected.seasonalNotes[season.id]}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#7c877f]">Possible finds</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {availableItems.length ? availableItems.map((item) => <span key={item.id} className="rounded-xl bg-[#f0e5d6] px-3 py-1.5 text-xs font-semibold text-[#6d533b]">{item.icon} {item.name}</span>) : <span className="text-sm text-[#879088]">This place has no seasonal resources.</span>}
                        </div>
                    </div>
                    <Button onClick={explore} className="mt-6 flex w-full items-center justify-center gap-2"><PackageOpen size={17} />Explore here</Button>
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#8a938c]"><Sparkles size={14} />Exploring grants XP and may reveal a collection item.</div>
                </Panel>
            </div>
        </div>
    );
}