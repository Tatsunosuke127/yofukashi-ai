"use client";

import { useState } from "react";
import { gearItems, gearCategories, productLink, type GearItem } from "@/data/gear";
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
          <p className="text-sm text-subtext mb-2">
            深夜の作業を支えてるモノたち。ぜんぶ本気で選んでるよ。
          </p>
          <p className="text-xs text-subtext/70 mb-10">
            ※ 楽天アフィリエイトを含みます。
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
  const affUrl = productLink(item.product_url);
  const isRecommended = item.badge === "アイの一押し";

  return (
    <FadeIn>
      <div
        className={`bg-card border rounded-card p-6 flex flex-col h-full transition-colors ${
          isRecommended
            ? "border-accent/40 shadow-[0_0_0_1px_rgba(196,168,130,0.1)]"
            : "border-border"
        }`}
      >
        {/* Top Row: Category + Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-block text-xs text-accent border border-accent/30 px-3 py-0.5 rounded-full">
            {item.category}
          </span>
          {item.badge && (
            <span className="inline-block text-[10px] text-bg bg-accent font-medium px-3 py-1 rounded-full tracking-wide">
              ✦ {item.badge}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-mincho text-lg mb-3 leading-snug">{item.name}</h3>

        {/* Aiコメント */}
        <p className="text-sm text-subtext italic mb-4 leading-relaxed">
          「{item.comment}」
        </p>

        {/* 買う理由（購買意欲） */}
        <div className="bg-bg/40 border-l-2 border-accent/60 pl-4 py-2 mb-5 flex-1">
          <p className="font-accent italic text-[10px] text-subtext tracking-wider mb-1.5">
            why buy
          </p>
          <p className="text-sm text-text/90 leading-relaxed">
            {item.reason}
          </p>
        </div>

        {/* Price & Rating */}
        {(item.price || item.rating) && (
          <div className="flex items-baseline gap-6 mb-5 border-t border-border pt-4">
            {item.price && (
              <div>
                <p className="text-[10px] text-subtext mb-0.5">参考価格</p>
                <p className="font-accent text-lg text-text">{item.price}</p>
              </div>
            )}
            {item.rating && (
              <div>
                <p className="text-[10px] text-subtext mb-0.5">評価</p>
                <p className="text-sm text-text">
                  <span className="text-accent">★</span> {item.rating.toFixed(1)}
                  <span className="text-xs text-subtext"> / 5.0</span>
                </p>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <a
          href={affUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group flex items-center justify-between text-sm border border-accent bg-accent/5 text-accent px-5 py-3 rounded-full hover:bg-accent hover:text-bg transition-all"
        >
          <span className="font-medium">楽天で最安値をチェック</span>
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
        <p className="text-[10px] text-subtext/60 text-center mt-2">
          商品ページに直接飛ぶよ
        </p>
      </div>
    </FadeIn>
  );
}
