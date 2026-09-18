import { useState } from "react";
import { items } from "../data/items";
import { useGame } from "../app/GameProvider";
import { Panel } from "../components/common/Panel";
export function InventoryPage() {
  const { player } = useGame();
  const [filter, setFilter] = useState("all");
  const entries = player.inventory
    .map((entry) => ({
      ...entry,
      item: items.find((item) => item.id === entry.itemId),
    }))
    .filter(
      (entry) =>
        entry.item && (filter === "all" || entry.item.category === filter),
    );
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#7d887f]">
          Your satchel
        </p>
        <h1 className="font-display text-4xl font-bold text-[#304639]">
          Inventory
        </h1>
        <p className="mt-2 text-[#748078]">
          Everything you have gathered during your walks.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "all",
          "flower",
          "plant",
          "crop",
          "fish",
          "mushroom",
          "mineral",
          "special",
        ].map((value) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`rounded-xl px-3 py-2 text-xs font-bold capitalize ${filter === value ? "bg-[#304f40] text-white" : "bg-white/70 text-[#66736b]"}`}
          >
            {value}
          </button>
        ))}
      </div>
      <Panel>
        {entries.length ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map(
              ({ item, quantity }) =>
                item && (
                  <div key={item.id} className="rounded-2xl bg-[#f1ede3] p-4">
                    <div className="flex items-start justify-between">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="rounded-xl bg-white/70 px-2 py-1 text-xs font-bold text-[#6f7c73]">
                        ×{quantity}
                      </span>
                    </div>
                    <h2 className="mt-5 font-semibold text-[#3c5044]">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-sm leading-5 text-[#7a857e]">
                      {item.description}
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-widest text-[#9a8060]">
                      {item.rarity}
                    </p>
                  </div>
                ),
            )}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="font-display text-2xl font-bold text-[#46584c]">
              Your satchel is quiet.
            </p>
            <p className="mt-2 text-sm text-[#858e88]">
              Explore the village to find your first seasonal resource.
            </p>
          </div>
        )}
      </Panel>
    </div>
  );
}
