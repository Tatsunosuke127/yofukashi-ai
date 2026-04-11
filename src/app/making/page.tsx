import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサイトの作り方",
  description:
    "夜ふかしAIのWebサイトをAI（Claude）だけで作った方法を全公開。Next.js + Tailwind CSS + Vercel。",
};

const steps = [
  {
    number: "01",
    title: "コンセプトを決める",
    description:
      "「深夜にAIツールを調べるOL」というキャラ設定と、ダークで洗練されたミニマルデザインを設計。カラー・フォント・余白のルールを最初に全部決めた。",
  },
  {
    number: "02",
    title: "AIに全部書いてもらう",
    description:
      "Claude（AI）に仕様書を渡して、コードを全部書いてもらった。Next.js 14 + TypeScript + Tailwind CSS。人間がコードを1行も書かずに完成。",
  },
  {
    number: "03",
    title: "5ページ構成で作る",
    description:
      "TOP / ツール一覧 / note記事 / About / Contact の5ページ。モバイルファースト設計で、スマホで見たときに一番きれいに見えるように。",
  },
  {
    number: "04",
    title: "noteとYouTubeを自動連携",
    description:
      "noteに記事を書くと、このサイトにも自動で反映されるスクリプトを作成。YouTubeのショート動画も自動で最新3本が表示される。",
  },
  {
    number: "05",
    title: "Vercelで無料デプロイ",
    description:
      "GitHubにコードをpushするだけで、自動でサイトが公開される。サーバー代は0円。独自ドメインも設定できる。",
  },
];

const techStack = [
  {
    name: "Next.js 14",
    role: "フレームワーク",
    description: "Reactベースのフレームワーク。高速で、SEOにも強い。",
  },
  {
    name: "TypeScript",
    role: "言語",
    description: "JavaScriptに型をつけたもの。エラーが減る。",
  },
  {
    name: "Tailwind CSS",
    role: "スタイリング",
    description: "CSSを書かずにデザインできる。効率が良すぎる。",
  },
  {
    name: "Vercel",
    role: "ホスティング",
    description: "GitHubと連携するだけで自動デプロイ。無料。",
  },
  {
    name: "Claude",
    role: "AI開発アシスタント",
    description: "コード生成、設計、実装。全部やってもらった。",
  },
];

export default function MakingPage() {
  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-4">
            how i made this
          </p>
          <h1 className="font-mincho text-2xl md:text-3xl mb-3">
            このサイト、AIだけで作ったよ。
          </h1>
          <p className="text-sm text-subtext leading-relaxed mb-4">
            コードは1行も書いてない。
            <br />
            AIに仕様を伝えるだけで、ここまでできる時代。
          </p>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-accent/40" />
            <span className="text-accent text-xs">&#x2726;</span>
            <span className="w-8 h-px bg-accent/40" />
          </div>
        </FadeIn>

        {/* Summary Card */}
        <FadeIn>
          <div className="bg-card border border-border rounded-card p-6 md:p-8 mb-16">
            <p className="font-accent italic text-xs text-subtext tracking-widest mb-4">
              summary
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-subtext text-xs mb-1">制作期間</p>
                <p className="text-text">約1時間</p>
              </div>
              <div>
                <p className="text-subtext text-xs mb-1">コーディング</p>
                <p className="text-text">0行（AIが全部書いた）</p>
              </div>
              <div>
                <p className="text-subtext text-xs mb-1">サーバー代</p>
                <p className="text-text">0円（Vercel無料枠）</p>
              </div>
              <div>
                <p className="text-subtext text-xs mb-1">使ったAI</p>
                <p className="text-text">Claude</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Steps */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-2">
            steps
          </p>
          <p className="font-mincho text-lg mb-10">
            作り方、5ステップで全公開。
          </p>
        </FadeIn>

        <div className="space-y-8 mb-16">
          {steps.map((step) => (
            <FadeIn key={step.number}>
              <div className="flex gap-6">
                <div className="shrink-0">
                  <span className="font-accent text-2xl text-accent/40">
                    {step.number}
                  </span>
                </div>
                <div className="border-b border-border pb-8 flex-1">
                  <h3 className="font-mincho text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-subtext leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tech Stack */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-2">
            tech stack
          </p>
          <p className="font-mincho text-lg mb-10">使った技術たち。</p>
        </FadeIn>

        <div className="space-y-4 mb-16">
          {techStack.map((tech) => (
            <FadeIn key={tech.name}>
              <div className="bg-card border border-border rounded-card p-5">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-mincho text-base">{tech.name}</h3>
                  <span className="text-xs text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                    {tech.role}
                  </span>
                </div>
                <p className="text-sm text-subtext">{tech.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Message */}
        <FadeIn>
          <div className="text-center py-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-6 h-px bg-accent/30" />
              <span className="text-accent/50 text-[10px]">&#x2726;</span>
              <span className="w-6 h-px bg-accent/30" />
            </div>
            <p className="font-mincho text-xl md:text-2xl text-text mb-3 leading-relaxed">
              デザインもコードも、
              <br />
              AIに任せていい時代だよ。
            </p>
            <p className="text-xs text-subtext mt-4">― アイ</p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/tools"
              className="block bg-card border border-border rounded-card p-6 hover:border-accent/40 transition-colors group"
            >
              <p className="font-mincho text-base mb-1 group-hover:text-accent transition-colors">
                ツール一覧を見る
              </p>
              <p className="text-xs text-subtext">
                アイが使ったツールたち。
              </p>
            </Link>
            <Link
              href="/note"
              className="block bg-card border border-border rounded-card p-6 hover:border-accent/40 transition-colors group"
            >
              <p className="font-mincho text-base mb-1 group-hover:text-accent transition-colors">
                note記事を読む
              </p>
              <p className="text-xs text-subtext">
                使い方を詳しく書いてるよ。
              </p>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
