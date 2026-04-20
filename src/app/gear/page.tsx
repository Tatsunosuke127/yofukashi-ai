"use client";

import { useState } from "react";
import { gearItems, gearCategories, getAffiliateUrl, type GearItem } from "@/data/gear";
import FadeIn from "@/components/FadeIn";

export default function GearPage() {
  const [activeCategory, setActiveCategory] = useState<string>("全て");

  const filtered = gearItems.filter(
    (item) => activeCategory === "全て" || item.category === activeCategory
  );

  const recommendedCount = gearItems.filter((i) => i.badge).length;

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
            ※ 楽天アフィリエイトを含みます。購入は楽天市場で完結するので安心。
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

        {/* Bottom CTA */}
        <FadeIn>
          <div className="mt-20 text-center">
            <p className="text-xs text-subtext mb-2">
              {recommendedCount} アイテムに「アイの一押し」バッジがついてるよ。
            </p>
            <p className="text-xs text-subtext/70">
              全部、自分で使って本気で選んでる。
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function GearCard({ item }: { item: GearItem }) {
  const affUrl = getAffiliateUrl(item);
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

        {/* Price & Rating */}
        {(item.price || item.rating) && (
          <div className="flex items-baseline gap-4 mb-4 border-b border-border pb-4">
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

        {/* Comment */}
        <p className="text-sm text-subtext italic mb-6 flex-1 leading-relaxed">
          「{item.comment}」
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2">
          <a
            href={affUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex items-center justify-between text-sm border border-accent bg-accent/5 text-accent px-5 py-3 rounded-full hover:bg-accent hover:text-bg transition-all"
          >
            <span className="font-medium">最安値を楽天でチェック</span>
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <p className="text-[10px] text-subtext/60 text-center">
            楽天ポイントも貯まるよ
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
