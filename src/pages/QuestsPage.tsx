import { Check, Circle, Coins, ScrollText, Sparkles } from "lucide-react";
import { quests } from "../data/quests";
import { useGame } from "../app/GameProvider";
import { Button } from "../components/common/Button";
import { Panel } from "../components/common/Panel";
import { ProgressBar } from "../components/common/ProgressBar";
export function QuestsPage() {
    const { player, startQuest, claimQuest } = useGame();
    return (
        <div className="space-y-5">
            <div><p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">Village requests</p><h1 className="font-display text-4xl font-bold text-[#304639]">Quests</h1><p className="mt-2 text-[#748078]">Small tasks that turn wandering into a longer journey.</p></div>
            <div className="grid gap-4">
                {quests.map((quest) => {
                    const progress = player.quests.find((entry) => entry.questId === quest.id);
                    const active = Boolean(progress);
                    const completed = Boolean(progress?.completed);
                    const values = quest.objectives.map((objective) => progress?.progress[objective.id] ?? 0);
                    const overall = quest.objectives.reduce((sum, objective, index) => sum + Math.min(values[index], objective.required), 0);
                    const max = quest.objectives.reduce((sum, objective) => sum + objective.required, 0);
                    const ready = active && !completed && overall >= max;
                    return <Panel key={quest.id} className={completed ? "opacity-65" : ""}><div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="rounded-xl bg-[#e8eee3] p-2 text-[#55765c]"><ScrollText size={17} /></span><div><p className="text-xs font-bold uppercase tracking-widest text-[#89928b]">{quest.season}</p><h2 className="font-display text-2xl font-bold text-[#3d5145]">{quest.title}</h2></div></div><p className="mt-4 text-sm leading-6 text-[#748078]">{quest.description}</p><div className="mt-4 space-y-3">{quest.objectives.map((objective) => { const value = progress?.progress[objective.id] ?? 0; return <div key={objective.id}><div className="mb-1 flex justify-between text-xs font-semibold text-[#6d7971]"><span className="flex items-center gap-2">{value >= objective.required ? <Check size={14} /> : <Circle size={12} />}{objective.description}</span><span>{value}/{objective.required}</span></div><ProgressBar value={value} max={objective.required} /></div>})}</div></div><div className="flex shrink-0 flex-col gap-2 md:w-44"><div className="rounded-2xl bg-[#f0e8dc] p-3 text-xs font-semibold text-[#765f45]"><div className="flex items-center gap-2"><Sparkles size={14} /> {quest.rewardXp} XP</div><div className="mt-2 flex items-center gap-2"><Coins size={14} /> {quest.rewardCoins} coins</div></div>{completed ? <Button variant="ghost" disabled>Completed</Button> : ready ? <Button onClick={() => claimQuest(quest.id)}>Claim reward</Button> : active ? <Button variant="ghost" disabled>In progress</Button> : <Button onClick={() => startQuest(quest.id)}>Accept quest</Button>}</div></div></Panel>
                })}
            </div>
        </div>
    );
}