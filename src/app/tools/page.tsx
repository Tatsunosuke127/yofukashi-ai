"use client";

import { useState } from "react";
import { tools, categories, type Tool } from "@/data/tools";
import FadeIn from "@/components/FadeIn";

type SortMode = "newest" | "recommended";

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("全て");
  const [sortMode, setSortMode] = useState<SortMode>("recommended");

  const filtered = tools.filter(
    (t) => activeCategory === "全て" || t.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortMode === "recommended") {
      return (b.is_recommended ? 1 : 0) - (a.is_recommended ? 1 : 0);
    }
    return 0;
  });

  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h1 className="font-mincho text-2xl md:text-3xl mb-3">
            アイが試したツールたち
          </h1>
          <p className="text-sm text-subtext mb-10">
            ぜんぶ自分で使って確かめてるよ。
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
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

        {/* Sort Buttons */}
        <FadeIn>
          <div className="flex gap-3 mb-10">
            <button
              onClick={() => setSortMode("newest")}
              className={`text-xs transition-colors ${
                sortMode === "newest" ? "text-accent" : "text-subtext hover:text-accent"
              }`}
            >
              新着順
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setSortMode("recommended")}
              className={`text-xs transition-colors ${
                sortMode === "recommended" ? "text-accent" : "text-subtext hover:text-accent"
              }`}
            >
              アイおすすめ順
            </button>
          </div>
        </FadeIn>

        {/* Tool Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {sorted.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <FadeIn>
      <div className="bg-card border border-border rounded-card p-6 flex flex-col h-full">
        <span className="inline-block text-xs text-accent border border-accent/30 px-3 py-0.5 rounded-full w-fit mb-4">
          {tool.category}
        </span>
        <h3 className="font-mincho text-lg mb-2">{tool.name}</h3>
        <p className="text-sm text-subtext italic mb-6 flex-1">
          「{tool.kirara_comment}」
        </p>
        <div className="flex items-center gap-4">
          <a
            href={tool.affiliate_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-text/20 px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            使ってみる &rarr;
          </a>
          <a
            href={tool.note_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-subtext hover:text-accent transition-colors"
          >
            詳しい使い方
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
