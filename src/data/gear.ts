export type GearItem = {
  id: string;
  name: string;
  category: string;
  /** 短い一言コメント（深夜の口調） */
  comment: string;
  /** 買う理由（購買意欲を掻き立てる具体的なベネフィット） */
  reason: string;
  /** 楽天の個別商品URL（https://item.rakuten.co.jp/...） */
  product_url: string;
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
const UT_ITEM = "eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwiY29sIjoxfQ==";

/** 個別商品ページへの楽天アフィリリンクを生成 */
export function productLink(productUrl: string): string {
  const encoded = encodeURIComponent(productUrl);
  return `https://hb.afl.rakuten.co.jp/ichiba/${AFF_ID}/?pc=${encoded}&link_type=hybrid_url&ut=${UT_ITEM}`;
}

export const gearItems: GearItem[] = [
  // PC ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "macbook-air-m4",
    name: "MacBook Air M4 13インチ",
    category: "PC",
    comment: "深夜の作業はぜんぶこれ。軽い、速い、ファンレス。",
    reason:
      "1.24kgで片手で持てるのに、M4チップで動画編集もAI処理も余裕。ファンレスだから深夜でも無音。バッテリーは18時間。カフェでも電源いらない。",
    product_url: "https://item.rakuten.co.jp/try3/4549995542516/",
    price: "¥164,800〜",
    rating: 4.7,
    badge: "アイの一押し",
  },
  {
    id: "macbook-pro-m4",
    name: "MacBook Pro M4 14インチ",
    category: "PC",
    comment: "動画編集もAI処理も、これ1台で全部できる。",
    reason:
      "Liquid Retina XDRディスプレイで色が神がかってる。動画編集・AI画像生成・音声処理を同時にやってもヌルヌル。プロ向けだけど、一度使うと戻れない。",
    product_url: "https://item.rakuten.co.jp/shop-inverse/sku-macbookpro-14-2024/",
    price: "¥248,800〜",
    rating: 4.8,
  },

  // モニター ━━━━━━━━━━━━━━━━━━━━━
  {
    id: "dell-u2723qe",
    name: "Dell U2723QE 27インチ 4K",
    category: "モニター",
    comment: "USB-Cケーブル1本で映像も給電も。デスクがすっきりする。",
    reason:
      "ケーブル1本でMacに給電しながら4K出力。USBハブも内蔵してるから、これだけで周辺機器も繋がる。作業効率が段違いに変わるよ。",
    product_url: "https://item.rakuten.co.jp/olebliss/pc-hdblc-27-169-087/",
    price: "¥79,800〜",
    rating: 4.6,
    badge: "在宅の定番",
  },
  {
    id: "lg-27up850n",
    name: "LG 27UP850N-W 27インチ 4K",
    category: "モニター",
    comment: "色が正確でコスパ最強。このモニターで十分。",
    reason:
      "4K・HDR400・sRGB 95%カバーで写真も動画もきれい。USB-C 90W給電つきで、このスペックで5万円台は破格。迷ったらこれでいい。",
    product_url: "https://item.rakuten.co.jp/ebest/4989027031593/",
    price: "¥45,800〜",
    rating: 4.5,
  },

  // キーボード・マウス ━━━━━━━━━━━━━
  {
    id: "mx-keys-s",
    name: "Logicool MX Keys S",
    category: "キーボード・マウス",
    comment: "打鍵感が静かで気持ちいい。深夜の作業に最適。",
    reason:
      "タイピングの静音性が異次元。バックライトが手を近づけた瞬間に点く。Mac/Win/iPadを3台同時登録してワンボタンで切り替えられる。",
    product_url: "https://item.rakuten.co.jp/logicool/kx800sgr/",
    price: "¥15,800〜",
    rating: 4.6,
  },
  {
    id: "mx-master-4",
    name: "Logicool MX Master 4",
    category: "キーボード・マウス",
    comment: "一度使うと戻れない。スクロールが異次元。",
    reason:
      "MagSpeedスクロールで1,000行のスプレッドシートも一瞬。親指ボタンでジェスチャー操作、3台切替、70日持つバッテリー。もう普通のマウスには戻れない。",
    product_url: "https://item.rakuten.co.jp/logicool/mx2400grda/",
    price: "¥16,500〜",
    rating: 4.7,
    badge: "売れ筋No.1",
  },
  {
    id: "hhkb-professional",
    name: "HHKB Professional HYBRID Type-S",
    category: "キーボード・マウス",
    comment: "最高峰の打鍵感。静電容量無接点。一生モノ。",
    reason:
      "エンジニアが愛する静電容量無接点方式。Bluetoothと有線のハイブリッドで、4台同時登録。コンパクトだからデスクが広くなる。10年使える本物。",
    product_url: "https://item.rakuten.co.jp/pfudirect/pd-kb820bs/",
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
    reason:
      "第2世代比2倍のノイキャン性能。心拍数モニタまで搭載。「装着検出」で外した瞬間に音楽停止。Apple製品との連携は世界最強。",
    product_url:
      "https://item.rakuten.co.jp/rakutenmobile-store/apple-rm2509012/",
    price: "¥39,800〜",
    rating: 4.7,
    badge: "アイの一押し",
  },
  {
    id: "sony-wh1000xm6",
    name: "SONY WH-1000XM6",
    category: "音響",
    comment: "長時間つけても疲れない。ノイキャン最強。",
    reason:
      "業界最高クラスのノイキャン+12個のマイクで通話クリア。30時間バッテリー、マルチポイント接続。一度つけたら外したくないレベルの没入感。",
    product_url: "https://item.rakuten.co.jp/auc-worldichi/4548736162600/",
    price: "¥54,800〜",
    rating: 4.8,
  },

  // チェア・デスク ━━━━━━━━━━━━━━━━
  {
    id: "flexispot-e7",
    name: "FlexiSpot E7 電動昇降デスク",
    category: "チェア・デスク",
    comment: "立ったり座ったり。深夜でも眠くならないコツ。",
    reason:
      "デュアルモーターで125kgまで耐荷重、高さメモリー4つ。立って作業すると眠気が消えて集中力が戻る。一度買ったら一生モノのデスク。",
    product_url: "https://item.rakuten.co.jp/loctek/e7b/",
    price: "¥55,000〜",
    rating: 4.6,
    badge: "売れ筋No.1",
  },
  {
    id: "ergohuman-pro",
    name: "Ergohuman Pro オットマン付き",
    category: "チェア・デスク",
    comment: "腰が終わる前に買って。マジで。",
    reason:
      "腰痛持ちが全員絶賛するランバーサポート。オットマン付きで仮眠も完璧。座面メッシュで蒸れない。10年は買い替えなくていいクオリティ。",
    product_url: "https://item.rakuten.co.jp/ergohuman/ehp-lpl/",
    price: "¥108,000〜",
    rating: 4.5,
  },

  // 照明 ━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "benq-screenbar",
    name: "BenQ ScreenBar Plus",
    category: "照明",
    comment: "画面に反射しない。目が疲れない。深夜の必需品。",
    reason:
      "モニター上に載せるだけ。自動調光で周囲に合わせて明るさ調整。画面に映り込まない設計で目の疲れが激減。夜作業する人は絶対買ったほうがいい。",
    product_url:
      "https://item.rakuten.co.jp/benq-directshop/lighting-screenbar-pro/",
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
    reason:
      "AIに仕事を奪われる側じゃなく、AIを使いこなす側になるための本。「何をすればいいか」の具体策が書いてある実用書。",
    product_url: "https://item.rakuten.co.jp/vaboo/va5618979447u20/",
    price: "¥1,650〜",
    rating: 4.3,
  },
  {
    id: "prompt-engineering",
    name: "プロンプトエンジニアリング入門",
    category: "書籍",
    comment: "AIに正しく聞く技術。これ知ってるだけで全然違う。",
    reason:
      "同じAIでも、聞き方で返ってくる答えが10倍変わる。プロンプト設計の具体例とテンプレつき。これ読んだだけで仕事の速度が倍になる。",
    product_url: "https://item.rakuten.co.jp/kaitoriouji/260321rm400764/",
    price: "¥2,420〜",
    rating: 4.4,
  },
];
