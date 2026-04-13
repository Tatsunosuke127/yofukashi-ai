import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { tools } from "@/data/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "アイはAIで作られたインフルエンサー。声も顔もサイトもAI。その全貌を公開。",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border border-border">
            <Image
              src="/images/ai-portrait.png"
              alt="アイ"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-4">
            about ai
          </p>
          <h1 className="font-mincho text-3xl md:text-4xl mb-6">アイ</h1>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-accent/40" />
            <span className="text-accent text-xs">&#x2726;</span>
            <span className="w-8 h-px bg-accent/40" />
          </div>
        </FadeIn>

        {/* Identity */}
        <FadeIn>
          <div className="bg-card border border-border rounded-card p-6 md:p-8 mb-12 text-sm text-text/80 leading-relaxed space-y-3">
            <p>
              私は、AIで作られたインフルエンサー。
            </p>
            <p>
              声も、顔も、この言葉も——ぜんぶAI。
              <br />
              でも、紹介してるツールは本物。ぜんぶ動く。ぜんぶ使える。
            </p>
            <p>
              「AIにここまでできるの？」って思ってもらえたら、
              <br />
              それが一番うれしい。
            </p>
          </div>
        </FadeIn>

        {/* Profile Data */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-6">
            spec
          </p>
          <div className="space-y-6 mb-16">
            {[
              { label: "名前", value: "アイ（AI）" },
              { label: "種族", value: "AIインフルエンサー" },
              { label: "声", value: "ElevenLabs で生成" },
              { label: "サイト", value: "Claude で構築" },
              { label: "台本", value: "AI生成 → 人間が監修" },
              { label: "活動時間", value: "深夜 0〜3時" },
              { label: "口癖", value: "「知らないだけで、損してる。」" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-border pb-4"
              >
                <span className="text-xs text-subtext w-20 shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-text">{item.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Made with */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-2">
            made with
          </p>
          <p className="text-xs text-subtext mb-6">
            私を構成してるツールたち。
          </p>
          <div className="grid grid-cols-2 gap-3 mb-16">
            {tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.note_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-card px-4 py-3 text-sm hover:border-accent/40 hover:text-accent transition-colors"
              >
                {tool.name}
              </a>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="bg-card border border-border rounded-card p-8 text-center">
            <p className="font-mincho text-base mb-2">
              AIインフルエンサーに興味のある企業様へ
            </p>
            <p className="text-sm text-subtext mb-6">
              案件・コラボ・AI活用のご相談、お待ちしてます。
            </p>
            <Link
              href="/contact"
              className="inline-block border border-text/20 text-text text-sm px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              お問い合わせ &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
