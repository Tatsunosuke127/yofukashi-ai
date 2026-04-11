import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { tools } from "@/data/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "アイのプロフィール。26歳、IT系OL。深夜にAIを調べてる。",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
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

        <FadeIn>
          <div className="space-y-6 mb-16">
            {[
              { label: "年齢", value: "26歳" },
              { label: "職業", value: "IT企業勤務（平日はふつうの会社員だよ）" },
              { label: "生態", value: "深夜0時から3時の間だけ活動してる。" },
              { label: "口癖", value: "「知らないだけで、損してる。」" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-border pb-4"
              >
                <span className="text-xs text-subtext w-16 shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-text">{item.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Used Tools */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-2">
            tools i use
          </p>
          <p className="text-xs text-subtext mb-6">
            いつも使ってるお気に入りたち。
          </p>
          <div className="grid grid-cols-2 gap-3 mb-16">
            {tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.affiliate_url}
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
              このチャンネルに興味のある企業様へ
            </p>
            <p className="text-sm text-subtext mb-6">
              案件・コラボのご相談、お待ちしてます。
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
