import { motion } from "framer-motion";
import { CloudRain, Leaf, Moon, Snowflake, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useGame } from "../app/GameProvider";


const weatherIcons = {
    sunny: Sun,
    rain: CloudRain,
    windy: Leaf,
    cloudy: CloudRain,
    storm: CloudRain,
    snow: Snowflake,
    blizzard: Snowflake,
    clear: Moon
};
export function HomePage() {
    const { season, weather, timeOfDay } = useGame();
    const WeatherIcon = weatherIcons[weather];
    return (
        <main className= "relative min-h-screen overflow-hidden" style={{background: `linear-gradient(180deg, ${season.palette.sky}, ${season.palette.ground} 70%, #8aa875)`}}>
            <div className="absolute inset-0 opacity-30" style={{background:"radial-gradient(circle at 70% 20%, white 0,transparent 35%)"}}/>
            <div className="absolute bottom-0 left-0 right-0 h-[38vh] bg-[#526f4d]/55" style={{clipPath: "polygon(0 40%, 15% 25%, 31% 42%, 45% 16%, 60% 39%, 74% 23%, 88% 42%, 100% 15%, 100% 100%, 0 100%)"}}/>
            <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
                <div className="max-w-2xl">
                    <motion.p initial={{opacity: 0, y: 10 }} animate={{opacity:1, y: 0}} className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#385847]">A tiny living world</motion.p>
                    <motion.h1 initial={{opacity: 0, y: 20}} animate={{ opacity:1,y :0}} transition={{delay:0.1}} className="font-display text-6xl font-bold leading-[0.92] text-[#263c31] text-shadow-soft md:text-8xl">
                        Four Seasons<br />Village
                    </motion.h1>
                    <motion.p initial={{opacity: 0}} animate={{opacity:1 }} transition={{delay:0.25}} className="mt-7 max-w-xl text-lg leading-8 text-[#365041]">
                        {season.name} has arrived. {season.description} There is always something small waiting to be discovered.
                    </motion.p>
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <Link to="/village"></Link>
                        <div className="flex items-center gap-2 rounded-2xl bg-white/55 px-4 py-3 text-sm font-semibold text-[#3d5548]">
                            <WeatherIcon size={17} /> {weather} · {timeOfDay}
                        </div>
                    </div>
                </div>
            </div>
            <div className= "absolute bottom-7 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-widest text-white/75">SPRING · SUMMER · AUTUMN · WINTER</div>
        </main>
    );
}