import { notes } from "@/data/notes";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "note記事一覧",
  description: "アイが書いたAIツールの使い方記事。",
};

export default function NotePage() {
  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-mincho text-2xl md:text-3xl mb-3">
            使い方、全部書いてます。
          </h1>
          <p className="text-sm text-subtext mb-10">
            実際に使った手順を、スクショつきで書いてるよ。
          </p>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {notes.map((article) => (
            <FadeIn key={article.id}>
              <a
                href={article.note_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-card p-6 hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-subtext border border-border px-2 py-0.5 rounded-card">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-mincho text-base mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-subtext mb-4">
                  {article.description}
                </p>
                <span className="text-xs text-subtext group-hover:text-accent transition-colors">
                  noteで読む &rarr;
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
