import { motion } from "framer-motion";
import { Compass, CloudRain, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useGame } from "../app/GameProvider";
import { locations } from "../data/locations";
import { Button } from "../components/common/Button";
import { Panel } from "../components/common/Panel";
export function VillagePage() {
    const { player, season, weather, timeOfDay } = useGame();
    const featured = locations.filter((location) => location.id !== "house").slice(0, 4);
    return (
        <div className = "space-y-5">
            <section className="relative overflow-hidden rounded-[2rem] p-7 text-white shadow-soft" style={{background: `linear-gradient(135deg, ${season.palette.accent}, ${season.palette.ground})`}}>
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
                <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/70">{season.name} · {timeOfDay}</p>
                    <h1 className="mt-2 font-display text-4xl font-bold">Good morning, village explorer.</h1>
                    <p className="mt-3 max-w-2xl text-white/80">{season.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <Link to="/map"><Button variant="secondary" className="flex items-center gap-2"><Compass size={16} />Explore the map</Button></Link>
                        <span className="flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-2 text-sm"><CloudRain size={16} />{weather}</span>
                        <span className="flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-2 text-sm"><Leaf size={16} /> {player.visitedLocations.length} places visited</span>

                    </div>
                </div>
            </section>
            <div className="grid gap-5 lg:grid-cols-[1.5fr-1fr]">
                <Panel>
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">The valley</p>
                            <h2 className="font-display text-2xl font-bold text-[#304639]">Places worth wandering</h2>
                        </div>
                        <Sparkles size={20} className="text-[#c18b4e]" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {featured.map((location, index) => (
                            <motion.div key={location.id} initial={{ opacity:0, y: 8}} animate={{ opacity: 1, y: 0}} transition={{ delay: index * 0.06}} className="rounded-2xl bg-[#f1ede3] p-4">
                                <div className="flex items-start justify-between">
                                    <span className="text-2xl">{location.icon}</span>
                                    <span className="text-xs font-semibold text-[#8a928c]">{location.name}</span>
                                </div>
                                <p className="mt-5 font-semibold text-[#384b40]">{location.seasonalNotes[season.id] ?? location.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Panel>
                <Panel>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">Your journey</p>
                    <h2 className="mt-1 font-display text-2xl font-bold text-[#304639]">Keep exploring</h2>
                    <div className="mt-5 space-y-3">
                        <Link to="/quests" className="block rounded-2xl bg-[#e5eddf] p-4 transition hover:-translate-y-0.5">
                            <p className="font-semibold text-[#385542]">Check your quests</p>
                            <p className="mt-1 text-sm text-[#748078]">{player.quests.filter((q) => !q.completed).length} active or available</p>
                        </Link>
                        <Link to="/inventory" className="block rounded-2xl bg-[#eee5d7] p-4 transition hover:-translate-y-0.5">
                            <p className="font-semibold text-[#5d4937]">Open your satchel</p>
                            <p className="mt-1 text-sm text-[#817365]">{player.inventory.reduce((sum, item)=> sum + item.quantity, 0)} collected items</p>
                        </Link>
                        <Link to="/journal" className="block rounded-2xl bg-[#e5e9e6] p-4 transition hover:-translate-y-0.5">
                            <p className="font-semibold text-[#43564c]">Read your journal</p>
                            <p className="mt-1 text-sm text-[#748078]">{player.discoveries.length} discoveries recorded</p>
                        </Link>
                    </div>
                </Panel>
            </div>
        </div>
    );
}
