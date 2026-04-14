export type GearItem = {
  id: string;
  name: string;
  category: string;
  comment: string;
  affiliate_url: string;
};

export const gearCategories = [
  "全て",
  "PC",
  "モニター",
  "キーボード・マウス",
  "音響",
  "チェア・デスク",
  "照明",
  "書籍",
] as const;

// 楽天アフィリエイト検索リンク生成ヘルパー
const AFF_ID = "52d4f5c4.462f9a03.52d4f5c5.b68fee35";
function rakutenSearch(keyword: string): string {
  const encoded = encodeURIComponent(keyword);
  return `https://hb.afl.rakuten.co.jp/ichiba/${AFF_ID}/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F${encoded}%2F&link_type=hybrid_url&ut=eyJwYWdlIjoic2VhcmNoIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9`;
}

export const gearItems: GearItem[] = [
  // PC
  {
    id: "macbook-air-m4",
    name: "MacBook Air M4 13インチ",
    category: "PC",
    comment: "深夜の作業はぜんぶこれ。軽い、速い、ファンレス。",
    affiliate_url: rakutenSearch("MacBook Air M4 13インチ"),
  },
  {
    id: "macbook-pro-m4",
    name: "MacBook Pro M4 14インチ",
    category: "PC",
    comment: "動画編集もAI処理も、これ1台で全部できる。",
    affiliate_url: rakutenSearch("MacBook Pro M4 14インチ"),
  },

  // モニター
  {
    id: "dell-u2723qe",
    name: "Dell U2723QE 27インチ 4K",
    category: "モニター",
    comment: "USB-Cケーブル1本で映像も給電も。デスクがすっきりする。",
    affiliate_url: rakutenSearch("Dell U2723QE 4K モニター"),
  },
  {
    id: "lg-27up850n",
    name: "LG 27UP850N-W 27インチ 4K",
    category: "モニター",
    comment: "色が正確でコスパ最強。このモニターで十分。",
    affiliate_url: rakutenSearch("LG 27UP850N 4K モニター"),
  },

  // キーボード・マウス
  {
    id: "mx-keys-s",
    name: "Logicool MX Keys S",
    category: "キーボード・マウス",
    comment: "打鍵感が静かで気持ちいい。深夜の作業に最適。",
    affiliate_url: rakutenSearch("Logicool MX Keys S キーボード"),
  },
  {
    id: "mx-master-4",
    name: "Logicool MX Master 4",
    category: "キーボード・マウス",
    comment: "一度使うと戻れない。スクロールが異次元。",
    affiliate_url: rakutenSearch("Logicool MX Master 4 マウス"),
  },
  {
    id: "hhkb-professional",
    name: "HHKB Professional HYBRID Type-S",
    category: "キーボード・マウス",
    comment: "最高峰の打鍵感。静電容量無接点。一生モノ。",
    affiliate_url: rakutenSearch("HHKB Professional HYBRID Type-S"),
  },

  // 音響
  {
    id: "airpods-pro-3",
    name: "AirPods Pro 3",
    category: "音響",
    comment: "ノイキャンで深夜の集中力が変わる。",
    affiliate_url: rakutenSearch("AirPods Pro 第3世代"),
  },
  {
    id: "sony-wh1000xm6",
    name: "SONY WH-1000XM6",
    category: "音響",
    comment: "長時間つけても疲れない。ノイキャン最強。",
    affiliate_url: rakutenSearch("SONY WH-1000XM6 ヘッドホン"),
  },

  // チェア・デスク
  {
    id: "flexispot-e7",
    name: "FlexiSpot E7 電動昇降デスク",
    category: "チェア・デスク",
    comment: "立ったり座ったり。深夜でも眠くならないコツ。",
    affiliate_url: rakutenSearch("FlexiSpot E7 電動昇降デスク"),
  },
  {
    id: "ergohuman-pro",
    name: "Ergohuman Pro オットマン付き",
    category: "チェア・デスク",
    comment: "腰が終わる前に買って。マジで。",
    affiliate_url: rakutenSearch("Ergohuman Pro オットマン"),
  },

  // 照明
  {
    id: "benq-screenbar",
    name: "BenQ ScreenBar Plus",
    category: "照明",
    comment: "画面に反射しない。目が疲れない。深夜の必需品。",
    affiliate_url: rakutenSearch("BenQ ScreenBar Plus モニターライト"),
  },

  // 書籍
  {
    id: "ai-survival",
    name: "AI時代の生存戦略",
    category: "書籍",
    comment: "AIと一緒に生きる方法が書いてある。",
    affiliate_url: rakutenSearch("AI時代 生存戦略 書籍"),
  },
  {
    id: "prompt-engineering",
    name: "プロンプトエンジニアリング入門",
    category: "書籍",
    comment: "AIに正しく聞く技術。これ知ってるだけで全然違う。",
    affiliate_url: rakutenSearch("プロンプトエンジニアリング 入門 書籍"),
  },
];
