/**
 * コンテンツ自動同期スクリプト
 *
 * note.com と YouTube から最新コンテンツを取得し、
 * data/ ファイルを自動更新する。
 *
 * 使い方:
 *   npx tsx scripts/sync-content.ts
 *
 * Vercel デプロイ時に自動実行したい場合は
 * package.json の build コマンドに追加:
 *   "build": "npx tsx scripts/sync-content.ts && next build"
 */

import { writeFileSync } from "fs";
import { join } from "path";

const NOTE_USERNAME = "uohukasi_ai";
const YOUTUBE_HANDLE = "夜ふかしAI";

// ━━━━━━━━━━━━━━━━━━━━━━
// note記事を取得
// ━━━━━━━━━━━━━━━━━━━━━━
interface NoteArticle {
  id: number;
  name: string;
  noteUrl: string;
  price: number;
  publishAt: string;
  hashtags: { hashtag: { name: string } }[];
}

async function fetchNoteArticles(): Promise<NoteArticle[]> {
  const all: NoteArticle[] = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `https://note.com/api/v2/creators/${NOTE_USERNAME}/contents?kind=note&page=${page}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const json = await res.json();
    const contents = json.data?.contents ?? [];
    if (contents.length === 0) break;
    all.push(...contents);
    page++;
  }

  return all;
}

function detectCategory(tags: string[]): string {
  const tagStr = tags.join(" ");
  if (/ゲーム|コントローラー/.test(tagStr)) return "ゲーム";
  if (/車|カスタム|3DTuning/.test(tagStr)) return "カスタム";
  if (/GeoFS|フライト|飛/.test(tagStr)) return "シミュレーター";
  if (/Gamma|資料|スライド|デザイン/.test(tagStr)) return "デザイン";
  if (/arduino|Diode|回路|コード/.test(tagStr)) return "開発";
  if (/テレビ|Netflix|TV/.test(tagStr)) return "エンタメ";
  if (/emergent|アプリ|ビジネス/.test(tagStr)) return "ビジネス効率化";
  if (/音声|ElevenLabs|Udio/.test(tagStr)) return "音声AI";
  if (/動画|Runway/.test(tagStr)) return "動画生成";
  if (/画像|Midjourney/.test(tagStr)) return "画像生成";
  if (/文章|Notion|Claude/.test(tagStr)) return "文章AI";
  return "その他";
}

function extractToolName(title: string, tags: string[]): string {
  // タグからツール名っぽいものを抽出
  const toolTags = tags.filter(
    (t) => /^#?[A-Za-z0-9]/.test(t) && !/^#?(Shorts|short|ai|chatgpt|itツール|web3|海外|smartphone|step)$/i.test(t)
  );
  if (toolTags.length > 0) {
    return toolTags[0].replace(/^#/, "");
  }
  // タイトルから「」内のツール名を抽出
  const match = title.match(/「([^」]+)」/);
  return match ? match[1] : "";
}

// ━━━━━━━━━━━━━━━━━━━━━━
// YouTubeショートを取得
// ━━━━━━━━━━━━━━━━━━━━━━
interface YouTubeShort {
  id: string;
  title: string;
}

async function fetchYouTubeShorts(): Promise<YouTubeShort[]> {
  const url = `https://www.youtube.com/@${encodeURIComponent(YOUTUBE_HANDLE)}/shorts`;
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  const html = await res.text();

  // videoId を抽出
  const idMatches = html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"/g);
  const seen = new Set<string>();
  const shorts: YouTubeShort[] = [];

  for (const m of idMatches) {
    if (!seen.has(m[1])) {
      seen.add(m[1]);
      shorts.push({ id: m[1], title: "" });
    }
  }

  // タイトル抽出を試みる
  const titleMatches = html.matchAll(
    /"title":\{"runs":\[\{"text":"([^"]+)"\}\]/g
  );
  let i = 0;
  for (const m of titleMatches) {
    if (i < shorts.length) {
      shorts[i].title = m[1];
      i++;
    }
  }

  return shorts;
}

// ━━━━━━━━━━━━━━━━━━━━━━
// ファイル生成
// ━━━━━━━━━━━━━━━━━━━━━━
async function main() {
  console.log("📡 note記事を取得中...");
  const articles = await fetchNoteArticles();
  console.log(`  → ${articles.length}件取得`);

  console.log("📡 YouTubeショートを取得中...");
  const shorts = await fetchYouTubeShorts();
  console.log(`  → ${shorts.length}件取得`);

  // notes.ts 生成
  const notesData = articles.map((a) => {
    const tags = a.hashtags.map((h) => h.hashtag.name);
    const category = detectCategory(tags);
    return {
      id: a.noteUrl.split("/").pop() || String(a.id),
      title: a.name,
      category,
      description: "",
      note_url: a.noteUrl,
    };
  });

  const notesTs = `export type NoteArticle = {
  id: string;
  title: string;
  category: string;
  description: string;
  note_url: string;
};

export const notes: NoteArticle[] = ${JSON.stringify(notesData, null, 2)};
`;

  writeFileSync(join(__dirname, "../src/data/notes.ts"), notesTs);
  console.log("✅ src/data/notes.ts を更新しました");

  // videos.ts 生成（最新3本）
  const latestShorts = shorts.slice(0, 3);
  const videosData = latestShorts.map((s, i) => ({
    id: `video-${i + 1}`,
    title: s.title || `ショート動画 ${i + 1}`,
    youtube_id: s.id,
    note_url: `https://note.com/${NOTE_USERNAME}`,
  }));

  const videosTs = `export type Video = {
  id: string;
  title: string;
  youtube_id: string;
  note_url: string;
};

export const latestVideos: Video[] = ${JSON.stringify(videosData, null, 2)};
`;

  writeFileSync(join(__dirname, "../src/data/videos.ts"), videosTs);
  console.log("✅ src/data/videos.ts を更新しました");

  // tools.ts 生成（noteの記事からツールを抽出）
  const toolCategories = new Set<string>();
  const toolsData = articles
    .map((a) => {
      const tags = a.hashtags.map((h) => h.hashtag.name);
      const toolName = extractToolName(a.name, tags);
      const category = detectCategory(tags);
      toolCategories.add(category);
      return {
        id: toolName.toLowerCase().replace(/\s+/g, "-") || String(a.id),
        name: toolName || a.name.substring(0, 20),
        category,
        kirara_comment: a.name.replace(/^知らないだけで、損してる。/, "").substring(0, 30),
        affiliate_url: `TODO_AFFILIATE_${toolName.toUpperCase().replace(/\s+/g, "_") || a.id}`,
        note_url: a.noteUrl,
        is_recommended: false,
      };
    })
    .filter((t) => t.name.length > 0);

  const allCategories = ["全て", ...Array.from(toolCategories)];

  const toolsTs = `export type Tool = {
  id: string;
  name: string;
  category: string;
  kirara_comment: string;
  affiliate_url: string;
  note_url: string;
  is_recommended: boolean;
};

export const categories = ${JSON.stringify(allCategories)} as const;

// affiliate_url: 楽天アフィリエイトURLに差し替えてください
export const tools: Tool[] = ${JSON.stringify(toolsData, null, 2)};
`;

  writeFileSync(join(__dirname, "../src/data/tools.ts"), toolsTs);
  console.log("✅ src/data/tools.ts を更新しました");

  console.log("\n🎉 同期完了！");
}

main().catch(console.error);
