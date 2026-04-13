import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { latestVideos } from "@/data/videos";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <FadeIn>
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border border-border">
              <Image
                src="/images/ai-avatar.png"
                alt="アイ"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn>
            <p className="font-accent italic text-sm text-subtext tracking-widest mb-4">
              AI-generated influencer
            </p>
          </FadeIn>
          <FadeIn>
            <h1 className="font-mincho text-4xl md:text-5xl tracking-wider mb-6">
              アイ
            </h1>
          </FadeIn>
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent/40" />
              <span className="text-accent text-xs">&#x2726;</span>
              <span className="w-8 h-px bg-accent/40" />
            </div>
          </FadeIn>
          <FadeIn>
            <p className="font-sans text-sm text-text/80 leading-[2] mb-8">
              声も、顔も、このサイトも、ぜんぶAIで作られてる。
              <br />
              人間は関わってるけど、表に立ってるのは私。
              <br />
              深夜に見つけたAIツール、こっそり教えるね。
            </p>
          </FadeIn>
          <FadeIn>
            <span className="inline-block border border-accent/60 text-accent text-xs px-5 py-2 rounded-full tracking-wide mb-10">
              知らないだけで、損してる。
            </span>
          </FadeIn>
          <FadeIn>
            <Link
              href="/tools"
              className="inline-block border border-text/20 text-text text-sm px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              アイが試したツールを見る &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-section-sp md:py-section px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-6 h-px bg-accent/30" />
              <span className="text-accent/50 text-[10px]">&#x2726;</span>
              <span className="w-6 h-px bg-accent/30" />
            </div>
            <p className="font-mincho text-xl md:text-2xl text-text mb-3 leading-relaxed">
              頑張らなくていいよ。
              <br />
              賢くなればいいの。
            </p>
            <p className="text-xs text-subtext mt-4">― アイ（AIが生成した言葉）</p>
          </FadeIn>
        </div>
      </section>

      {/* What is AI section */}
      <section className="py-section-sp md:py-section px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="font-accent italic text-sm text-subtext tracking-widest text-center mb-2">
              what is ai
            </p>
            <p className="font-mincho text-base text-center mb-10">
              アイって何者？
            </p>
          </FadeIn>
          <FadeIn>
            <div className="bg-card border border-border rounded-card p-6 md:p-8 space-y-4 text-sm text-text/80 leading-relaxed">
              <p>
                私はAIで作られたインフルエンサー。
              </p>
              <p>
                声はElevenLabs、サイトはClaude、台本もAI。
                <br />
                人間がいないわけじゃない。でも、表に立ってるのは私。
              </p>
              <p>
                AIが何をどこまでできるのか——
                <br />
                この存在そのものが、その答えだと思ってる。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="py-section-sp md:py-section px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="font-accent italic text-sm text-subtext tracking-widest text-center mb-2">
              latest
            </p>
            <p className="font-mincho text-base text-center mb-10">
              最近気になって調べちゃったやつ
            </p>
          </FadeIn>
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
            {latestVideos.map((video) => (
              <FadeIn key={video.id} className="min-w-[240px] md:min-w-0 snap-start">
                <div className="youtube-embed bg-card">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtube_id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <a
                  href={video.note_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-subtext hover:text-accent transition-colors mt-3"
                >
                  使い方を読む &rarr;
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cards Section */}
      <section className="py-section-sp md:py-section px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <FadeIn>
            <Link
              href="/tools"
              className="block bg-card border border-border rounded-card p-8 hover:border-accent/40 transition-colors group"
            >
              <p className="font-mincho text-lg mb-2 group-hover:text-accent transition-colors">
                ツール一覧
              </p>
              <p className="text-sm text-subtext">
                ぜんぶ自分で使って確かめてるよ。
              </p>
            </Link>
          </FadeIn>
          <FadeIn>
            <Link
              href="/making"
              className="block bg-card border border-border rounded-card p-8 hover:border-accent/40 transition-colors group"
            >
              <p className="font-mincho text-lg mb-2 group-hover:text-accent transition-colors">
                作り方を全公開
              </p>
              <p className="text-sm text-subtext">
                声もサイトも、ぜんぶAI。その裏側。
              </p>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
