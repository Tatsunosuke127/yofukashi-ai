export type GearItem = {
  id: string;
  name: string;
  category: string;
  comment: string;
  /** 楽天の商品ページURL（https://item.rakuten.co.jp/...）を指定。空の場合はsearch_keywordで検索 */
  product_url?: string;
  /** product_urlが無い場合、この検索キーワードでランキングページに飛ばす */
  search_keyword?: string;
  /** 商品画像URL（楽天の画像URLをそのまま） */
  image_url?: string;
  /** 価格帯表示（例: "¥198,800〜"） */
  price?: string;
  /** 評価（5点満点の数値、例: 4.6） */
  rating?: number;
  /** バッジ表示（例: "アイの一押し", "売れ筋No.1", "深夜の相棒"） */
  badge?: string;
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

// 楽天アフィリエイトID
const AFF_ID = "52d4f5c4.462f9a03.52d4f5c5.b68fee35";

// ut パラメータ（固定値 / base64({"page":"item","type":"hybrid_url","col":1}) 相当）
const UT_ITEM = "eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwiY29sIjoxfQ==";
const UT_RANKING = "eyJwYWdlIjoicmFua2luZyIsInR5cGUiOiJoeWJyaWRfdXJsIiwiY29sIjoxfQ==";

/** 個別商品ページへのアフィリリンク */
export function productLink(productUrl: string): string {
  const encoded = encodeURIComponent(productUrl);
  return `https://hb.afl.rakuten.co.jp/ichiba/${AFF_ID}/?pc=${encoded}&link_type=hybrid_url&ut=${UT_ITEM}`;
}

/** 売れ筋ランキングページへのアフィリリンク（検索より購買に繋がりやすい） */
export function rankingLink(keyword: string): string {
  const encoded = encodeURIComponent(keyword);
  const targetUrl = encodeURIComponent(
    `https://ranking.rakuten.co.jp/keyword/${encoded}/`
  );
  return `https://hb.afl.rakuten.co.jp/ichiba/${AFF_ID}/?pc=${targetUrl}&link_type=hybrid_url&ut=${UT_RANKING}`;
}

/** gearItem から最終的な遷移先URLを算出 */
export function getAffiliateUrl(item: GearItem): string {
  if (item.product_url) return productLink(item.product_url);
  if (item.search_keyword) return rankingLink(item.search_keyword);
  return rankingLink(item.name);
}

export const gearItems: GearItem[] = [
  // PC ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "macbook-air-m4",
    name: "MacBook Air M4 13インチ",
    category: "PC",
    comment: "深夜の作業はぜんぶこれ。軽い、速い、ファンレス。",
    search_keyword: "MacBook Air M4 13インチ",
    price: "¥164,800〜",
    rating: 4.7,
    badge: "アイの一押し",
  },
  {
    id: "macbook-pro-m4",
    name: "MacBook Pro M4 14インチ",
    category: "PC",
    comment: "動画編集もAI処理も、これ1台で全部できる。",
    search_keyword: "MacBook Pro M4 14インチ",
    price: "¥248,800〜",
    rating: 4.8,
  },

  // モニター ━━━━━━━━━━━━━━━━━━━━━
  {
    id: "dell-u2723qe",
    name: "Dell U2723QE 27インチ 4K",
    category: "モニター",
    comment: "USB-Cケーブル1本で映像も給電も。デスクがすっきりする。",
    search_keyword: "Dell U2723QE",
    price: "¥79,800〜",
    rating: 4.6,
    badge: "在宅の定番",
  },
  {
    id: "lg-27up850n",
    name: "LG 27UP850N-W 27インチ 4K",
    category: "モニター",
    comment: "色が正確でコスパ最強。このモニターで十分。",
    search_keyword: "LG 27UP850N",
    price: "¥45,800〜",
    rating: 4.5,
  },

  // キーボード・マウス ━━━━━━━━━━━━━
  {
    id: "mx-keys-s",
    name: "Logicool MX Keys S",
    category: "キーボード・マウス",
    comment: "打鍵感が静かで気持ちいい。深夜の作業に最適。",
    search_keyword: "Logicool MX Keys S",
    price: "¥15,800〜",
    rating: 4.6,
  },
  {
    id: "mx-master-4",
    name: "Logicool MX Master 4",
    category: "キーボード・マウス",
    comment: "一度使うと戻れない。スクロールが異次元。",
    search_keyword: "Logicool MX Master 4",
    price: "¥16,500〜",
    rating: 4.7,
    badge: "売れ筋No.1",
  },
  {
    id: "hhkb-professional",
    name: "HHKB Professional HYBRID Type-S",
    category: "キーボード・マウス",
    comment: "最高峰の打鍵感。静電容量無接点。一生モノ。",
    search_keyword: "HHKB Professional HYBRID Type-S",
    price: "¥36,850〜",
    rating: 4.8,
    badge: "深夜の相棒",
  },

  // 音響 ━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "airpods-pro-3",
    name: "AirPods Pro 3",
    category: "音響",
    comment: "ノイキャンで深夜の集中力が変わる。",
    search_keyword: "AirPods Pro 第3世代",
    price: "¥39,800〜",
    rating: 4.7,
    badge: "アイの一押し",
  },
  {
    id: "sony-wh1000xm6",
    name: "SONY WH-1000XM6",
    category: "音響",
    comment: "長時間つけても疲れない。ノイキャン最強。",
    search_keyword: "SONY WH-1000XM6",
    price: "¥54,800〜",
    rating: 4.8,
  },

  // チェア・デスク ━━━━━━━━━━━━━━━━
  {
    id: "flexispot-e7",
    name: "FlexiSpot E7 電動昇降デスク",
    category: "チェア・デスク",
    comment: "立ったり座ったり。深夜でも眠くならないコツ。",
    search_keyword: "FlexiSpot E7 電動昇降デスク",
    price: "¥55,000〜",
    rating: 4.6,
    badge: "売れ筋No.1",
  },
  {
    id: "ergohuman-pro",
    name: "Ergohuman Pro オットマン付き",
    category: "チェア・デスク",
    comment: "腰が終わる前に買って。マジで。",
    search_keyword: "Ergohuman Pro オットマン",
    price: "¥108,000〜",
    rating: 4.5,
  },

  // 照明 ━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "benq-screenbar",
    name: "BenQ ScreenBar Plus",
    category: "照明",
    comment: "画面に反射しない。目が疲れない。深夜の必需品。",
    search_keyword: "BenQ ScreenBar Plus",
    price: "¥16,900〜",
    rating: 4.7,
    badge: "深夜の相棒",
  },

  // 書籍 ━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "ai-survival",
    name: "AI時代の生存戦略",
    category: "書籍",
    comment: "AIと一緒に生きる方法が書いてある。",
    search_keyword: "AI時代 生存戦略",
    price: "¥1,650〜",
    rating: 4.3,
  },
  {
    id: "prompt-engineering",
    name: "プロンプトエンジニアリング入門",
    category: "書籍",
    comment: "AIに正しく聞く技術。これ知ってるだけで全然違う。",
    search_keyword: "プロンプトエンジニアリング 入門",
    price: "¥2,420〜",
    rating: 4.4,
  },
];
