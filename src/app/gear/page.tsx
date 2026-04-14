"use client";

import { useState } from "react";
import { gearItems, gearCategories, type GearItem } from "@/data/gear";
import FadeIn from "@/components/FadeIn";

export default function GearPage() {
  const [activeCategory, setActiveCategory] = useState<string>("全て");

  const filtered = gearItems.filter(
    (item) => activeCategory === "全て" || item.category === activeCategory
  );

  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-4">
            gear
          </p>
          <h1 className="font-mincho text-2xl md:text-3xl mb-3">
            アイの作業環境
          </h1>
          <p className="text-sm text-subtext mb-10">
            深夜の作業を支えてるモノたち。ぜんぶ本気で選んでるよ。
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-10">
            {gearCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "border-accent text-accent"
                    : "border-border text-subtext hover:border-accent/40 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Gear Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <GearCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GearCard({ item }: { item: GearItem }) {
  return (
    <FadeIn>
      <div className="bg-card border border-border rounded-card p-6 flex flex-col h-full">
        <span className="inline-block text-xs text-accent border border-accent/30 px-3 py-0.5 rounded-full w-fit mb-4">
          {item.category}
        </span>
        <h3 className="font-mincho text-lg mb-2">{item.name}</h3>
        <p className="text-sm text-subtext italic mb-6 flex-1">
          「{item.comment}」
        </p>
        <a
          href={item.affiliate_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm border border-text/20 px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors w-fit"
        >
          楽天で見る &rarr;
        </a>
      </div>
    </FadeIn>
  );
}
