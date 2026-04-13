import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アイの作り方",
  description:
    "AIインフルエンサー「アイ」の全構造を公開。声・サイト・台本・運用、すべてAI。",
};

const layers = [
  {
    number: "01",
    label: "voice",
    title: "声を作る",
    description:
      "ElevenLabsで音声を生成。感情の乗った自然な声がAIだけで作れる。録音もマイクも不要。",
  },
  {
    number: "02",
    label: "script",
    title: "台本を書く",
    description:
      "AIが20秒のショート台本を自動生成。ツール名を入力するだけで、紹介文・キャプション・固定コメントまで全部出てくる。",
  },
  {
    number: "03",
    label: "site",
    title: "サイトを作る",
    description:
      "このサイトはClaude（AI）がコードを全部書いた。Next.js + Tailwind CSS + Vercel。人間が書いたコードは0行。",
  },
  {
    number: "04",
    label: "content",
    title: "記事を書く",
    description:
      "noteの記事もAIで草稿を生成。人間が監修して公開。ツールの使い方を、実際の画面つきで解説してる。",
  },
  {
    number: "05",
    label: "automate",
    title: "自動で回す",
    description:
      "noteに記事を書くとサイトに自動反映。YouTubeの最新動画も自動で表示。運用もAIの力で回してる。",
  },
];

const techStack = [
  {
    name: "ElevenLabs",
    role: "声",
    description: "AIの声を生成。アイの声はここで作られてる。",
  },
  {
    name: "Claude",
    role: "開発・台本",
    description: "サイト構築、台本生成、記事の草稿。頭脳担当。",
  },
  {
    name: "Next.js",
    role: "フレームワーク",
    description: "サイトの基盤。高速でSEOにも強い。",
  },
  {
    name: "Vercel",
    role: "ホスティング",
    description: "GitHubにpushするだけで自動公開。サーバー代0円。",
  },
  {
    name: "Tailwind CSS",
    role: "デザイン",
    description: "CSSを書かずにデザインできる。効率が良すぎる。",
  },
];

export default function MakingPage() {
  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-4">
            how ai was made
          </p>
          <h1 className="font-mincho text-2xl md:text-3xl mb-3">
            ぜんぶ、AIで作ってる。
          </h1>
          <p className="text-sm text-subtext leading-relaxed mb-4">
            声も、サイトも、台本も。
            <br />
            人間がやってるのは、最終チェックだけ。
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
              overview
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-subtext text-xs mb-1">制作者</p>
                <p className="text-text">AI（人間は監修のみ）</p>
              </div>
              <div>
                <p className="text-subtext text-xs mb-1">手書きコード</p>
                <p className="text-text">0行</p>
              </div>
              <div>
                <p className="text-subtext text-xs mb-1">サーバー代</p>
                <p className="text-text">0円</p>
              </div>
              <div>
                <p className="text-subtext text-xs mb-1">AI率</p>
                <p className="text-text">声・サイト・台本・記事</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Structure */}
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-2">
            structure
          </p>
          <p className="font-mincho text-lg mb-10">
            アイを構成する5つのレイヤー。
          </p>
        </FadeIn>

        <div className="space-y-8 mb-16">
          {layers.map((layer) => (
            <FadeIn key={layer.number}>
              <div className="flex gap-6">
                <div className="shrink-0 w-12">
                  <span className="font-accent text-2xl text-accent/40">
                    {layer.number}
                  </span>
                </div>
                <div className="border-b border-border pb-8 flex-1">
                  <p className="font-accent italic text-xs text-subtext tracking-wider mb-1">
                    {layer.label}
                  </p>
                  <h3 className="font-mincho text-base mb-2">{layer.title}</h3>
                  <p className="text-sm text-subtext leading-relaxed">
                    {layer.description}
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
          <p className="font-mincho text-lg mb-10">私を動かしてる技術たち。</p>
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
              AIが作ったAIが、
              <br />
              AIを紹介してる。
            </p>
            <p className="text-xs text-subtext mt-4">
              それが、夜ふかしAI。
            </p>
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
              href="/about"
              className="block bg-card border border-border rounded-card p-6 hover:border-accent/40 transition-colors group"
            >
              <p className="font-mincho text-base mb-1 group-hover:text-accent transition-colors">
                アイについて
              </p>
              <p className="text-xs text-subtext">
                AIインフルエンサーの全貌。
              </p>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
