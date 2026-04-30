"use client";

import { useState } from "react";
import {
  gearItems,
  gearCategories,
  topPicks,
  productLink,
  type GearItem,
} from "@/data/gear";
import FadeIn from "@/components/FadeIn";

export default function GearPage() {
  const [activeCategory, setActiveCategory] = useState<string>("全て");

  const filtered = gearItems.filter(
    (item) => activeCategory === "全て" || item.category === activeCategory
  );

  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-4">
            gear
          </p>
          <h1 className="font-mincho text-2xl md:text-3xl mb-3 leading-snug">
            深夜の作業を変える、
            <br className="md:hidden" />
            たった14のモノ。
          </h1>
          <p className="text-sm text-subtext mb-2 leading-relaxed">
            あなたが今使ってる道具、本当にベストですか？
            <br />
            アイが3ヶ月以上使って、本気で選びました。
          </p>
          <p className="text-xs text-subtext/70 mb-12">
            ※ 楽天アフィリエイトを含みます。
          </p>
        </FadeIn>

        {/* Top Picks - 損失回避 + 社会的証明で誘導 */}
        <FadeIn>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-accent text-xs">✦</span>
              <p className="font-accent italic text-xs text-accent tracking-widest">
                top 3 picks
              </p>
              <span className="flex-1 h-px bg-accent/20" />
              <span className="text-xs text-subtext">
                迷ったらこれ
              </span>
            </div>
            <p className="font-mincho text-lg mb-2">
              買って後悔してない、本気の3つ。
            </p>
            <p className="text-xs text-subtext mb-6">
              アイが「これ無しの作業に戻れない」と断言するアイテム。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {topPicks.map((item) => (
                <TopPickCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Section divider */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <span className="text-accent text-xs">✦</span>
            <p className="font-accent italic text-xs text-subtext tracking-widest">
              all gear
            </p>
            <span className="flex-1 h-px bg-border" />
            <span className="text-xs text-subtext">
              {filtered.length}アイテム
            </span>
          </div>
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

        {/* Bottom message - 一貫性原理 */}
        <FadeIn>
          <div className="mt-20 max-w-xl mx-auto text-center bg-card border border-border rounded-card p-8">
            <p className="font-mincho text-base mb-3">
              安いものを買い続けて、
              <br />
              結局買い替えてる人へ。
            </p>
            <p className="text-sm text-subtext leading-relaxed">
              一度本物を買えば、5年は悩まない。
              <br />
              「ちょっといいモノ」に投資した時間は、
              <br />
              人生の質をそのまま上げてくれるよ。
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Top Pick Card（コンパクト版・最上部用）
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function TopPickCard({ item }: { item: GearItem }) {
  const affUrl = productLink(item.product_url);
  return (
    <a
      href={affUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block bg-card border border-accent/30 rounded-card p-5 hover:border-accent/70 hover:bg-card/80 transition-all group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-accent tracking-wider">
          {item.category}
        </span>
        {item.rating && item.reviews && (
          <span className="text-[10px] text-subtext">
            ★ {item.rating} ({item.reviews.toLocaleString()})
          </span>
        )}
      </div>
      <p className="font-mincho text-sm mb-2 group-hover:text-accent transition-colors leading-snug">
        {item.name}
      </p>
      <p className="text-xs text-subtext italic mb-3 leading-relaxed">
        「{item.comment}」
      </p>
      <div className="flex items-baseline gap-2">
        {item.list_price && (
          <span className="text-[10px] text-subtext/60 line-through">
            {item.list_price}
          </span>
        )}
        <span className="font-accent text-sm text-accent">{item.price}</span>
      </div>
    </a>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Standard Gear Card（行動心理学フル装備）
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function GearCard({ item }: { item: GearItem }) {
  const affUrl = productLink(item.product_url);
  const isRecommended = item.badge === "アイの一押し";
  const discount =
    item.list_price && item.price
      ? calcDiscount(item.list_price, item.price)
      : null;

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
        <div className="flex items-center justify-between gap-2 mb-3">
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
        <h3 className="font-mincho text-lg mb-2 leading-snug">{item.name}</h3>

        {/* Social Proof: rating + reviews + audience */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-[11px] text-subtext">
          {item.rating && item.reviews && (
            <span>
              <span className="text-accent">★</span> {item.rating.toFixed(1)}{" "}
              <span className="text-subtext/70">
                ({item.reviews.toLocaleString()}件)
              </span>
            </span>
          )}
          {item.audience && (
            <>
              <span className="text-border">|</span>
              <span>{item.audience}</span>
            </>
          )}
        </div>

        {/* Aiコメント */}
        <p className="text-sm text-subtext italic mb-4 leading-relaxed">
          「{item.comment}」
        </p>

        {/* 買う理由（why buy） */}
        <div className="bg-bg/40 border-l-2 border-accent/60 pl-4 py-2 mb-4">
          <p className="font-accent italic text-[10px] text-subtext tracking-wider mb-1.5">
            why buy
          </p>
          <p className="text-sm text-text/90 leading-relaxed">{item.reason}</p>
        </div>

        {/* 損失回避（why not） */}
        {item.loss && (
          <div className="border border-border/60 rounded-md px-4 py-3 mb-5 flex-1">
            <p className="font-accent italic text-[10px] text-subtext/80 tracking-wider mb-1.5">
              if you skip this
            </p>
            <p className="text-xs text-text/70 leading-relaxed">{item.loss}</p>
          </div>
        )}

        {/* Price block - アンカリング */}
        <div className="border-t border-border pt-4 mb-4">
          <div className="flex items-baseline gap-3 mb-1">
            {item.list_price && discount && (
              <span className="text-xs text-subtext/60 line-through">
                {item.list_price}
              </span>
            )}
            {item.price && (
              <span className="font-accent text-xl text-text">
                {item.price}
              </span>
            )}
            {discount && (
              <span className="text-[10px] text-accent border border-accent/40 px-2 py-0.5 rounded-full">
                -{discount}%
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-subtext">
            {item.point_rate && (
              <span>
                <span className="text-accent">●</span> 楽天ポイント
                {item.point_rate}
              </span>
            )}
            <span>送料無料</span>
            <span className="text-subtext/70">5と0のつく日でさらに+2倍</span>
          </div>
        </div>

        {/* CTA - 行動促進ボタン */}
        <a
          href={affUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group flex items-center justify-between text-sm border border-accent bg-accent/10 text-accent px-5 py-3 rounded-full hover:bg-accent hover:text-bg transition-all"
        >
          <span className="font-medium">楽天で最安値を見る</span>
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
        <p className="text-[10px] text-subtext/60 text-center mt-2">
          1クリックで商品ページへ・ポイント還元込み
        </p>
      </div>
    </FadeIn>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 割引率計算ヘルパー
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function calcDiscount(listStr: string, priceStr: string): number | null {
  const list = parseInt(listStr.replace(/[^0-9]/g, ""), 10);
  const price = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  if (!list || !price || list <= price) return null;
  return Math.round(((list - price) / list) * 100);
}
