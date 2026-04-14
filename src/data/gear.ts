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

// affiliate_url: 楽天アフィリエイトURLに差し替えてください
// 形式: https://hb.afl.rakuten.co.jp/hgc/YOUR_ID/...
export const gearItems: GearItem[] = [
  // PC
  {
    id: "macbook-air-m4",
    name: "MacBook Air M4 13インチ",
    category: "PC",
    comment: "深夜の作業はぜんぶこれ。軽い、速い、ファンレス。",
    affiliate_url: "TODO_RAKUTEN_MACBOOK_AIR_M4",
  },
  {
    id: "macbook-pro-m4",
    name: "MacBook Pro M4 14インチ",
    category: "PC",
    comment: "動画編集もAI処理も、これ1台で全部できる。",
    affiliate_url: "TODO_RAKUTEN_MACBOOK_PRO_M4",
  },

  // モニター
  {
    id: "dell-u2723qe",
    name: "Dell U2723QE 27インチ 4K",
    category: "モニター",
    comment: "USB-Cケーブル1本で映像も給電も。デスクがすっきりする。",
    affiliate_url: "TODO_RAKUTEN_DELL_U2723QE",
  },
  {
    id: "lg-27up850n",
    name: "LG 27UP850N-W 27インチ 4K",
    category: "モニター",
    comment: "色が正確でコスパ最強。このモニターで十分。",
    affiliate_url: "TODO_RAKUTEN_LG_27UP850N",
  },

  // キーボード・マウス
  {
    id: "mx-keys-s",
    name: "Logicool MX Keys S",
    category: "キーボード・マウス",
    comment: "打鍵感が静かで気持ちいい。深夜の作業に最適。",
    affiliate_url: "TODO_RAKUTEN_MX_KEYS_S",
  },
  {
    id: "mx-master-4",
    name: "Logicool MX Master 4",
    category: "キーボード・マウス",
    comment: "一度使うと戻れない。スクロールが異次元。",
    affiliate_url: "TODO_RAKUTEN_MX_MASTER_4",
  },
  {
    id: "hhkb-professional",
    name: "HHKB Professional HYBRID Type-S",
    category: "キーボード・マウス",
    comment: "最高峰の打鍵感。静電容量無接点。一生モノ。",
    affiliate_url: "TODO_RAKUTEN_HHKB",
  },

  // 音響
  {
    id: "airpods-pro-3",
    name: "AirPods Pro 3",
    category: "音響",
    comment: "ノイキャンで深夜の集中力が変わる。",
    affiliate_url: "TODO_RAKUTEN_AIRPODS_PRO_3",
  },
  {
    id: "sony-wh1000xm6",
    name: "SONY WH-1000XM6",
    category: "音響",
    comment: "長時間つけても疲れない。ノイキャン最強。",
    affiliate_url: "TODO_RAKUTEN_SONY_WH1000XM6",
  },

  // チェア・デスク
  {
    id: "flexispot-e7",
    name: "FlexiSpot E7 電動昇降デスク",
    category: "チェア・デスク",
    comment: "立ったり座ったり。深夜でも眠くならないコツ。",
    affiliate_url: "TODO_RAKUTEN_FLEXISPOT_E7",
  },
  {
    id: "ergohuman-pro",
    name: "Ergohuman Pro オットマン付き",
    category: "チェア・デスク",
    comment: "腰が終わる前に買って。マジで。",
    affiliate_url: "TODO_RAKUTEN_ERGOHUMAN",
  },

  // 照明
  {
    id: "benq-screenbar",
    name: "BenQ ScreenBar Plus",
    category: "照明",
    comment: "画面に反射しない。目が疲れない。深夜の必需品。",
    affiliate_url: "TODO_RAKUTEN_BENQ_SCREENBAR",
  },

  // 書籍
  {
    id: "ai-survival",
    name: "AI時代の生存戦略",
    category: "書籍",
    comment: "AIと一緒に生きる方法が書いてある。",
    affiliate_url: "TODO_RAKUTEN_AI_SURVIVAL",
  },
  {
    id: "prompt-engineering",
    name: "プロンプトエンジニアリング入門",
    category: "書籍",
    comment: "AIに正しく聞く技術。これ知ってるだけで全然違う。",
    affiliate_url: "TODO_RAKUTEN_PROMPT_ENGINEERING",
  },
];
