export type Tool = {
  id: string;
  name: string;
  category: string;
  kirara_comment: string;
  affiliate_url: string;
  note_url: string;
  is_recommended: boolean;
};

export const categories = [
  "全て",
  "ビジネス効率化",
  "デザイン",
  "その他",
] as const;

// affiliate_url: 楽天アフィリエイトURLに差し替えてください
// TODO_AFFILIATE のURLを実際のリンクに置換

export const tools: Tool[] = [
  {
    id: "emergent",
    name: "Emergent",
    category: "ビジネス効率化",
    kirara_comment: "アプリが30分でできた。意味わからん。",
    affiliate_url: "TODO_AFFILIATE_EMERGENT",
    note_url: "https://note.com/uohukasi_ai/n/n4a091902127d",
    is_recommended: true,
  },
  {
    id: "gamma",
    name: "Gamma",
    category: "デザイン",
    kirara_comment: "資料作りが消えた。",
    affiliate_url: "TODO_AFFILIATE_GAMMA",
    note_url: "https://note.com/uohukasi_ai/n/ncb1dd16b0b73",
    is_recommended: true,
  },
  {
    id: "geofs",
    name: "GeoFS",
    category: "その他",
    kirara_comment: "ブラウザで世界中を飛べる。",
    affiliate_url: "TODO_AFFILIATE_GEOFS",
    note_url: "https://note.com/uohukasi_ai/n/n7d28e1e9912e",
    is_recommended: false,
  },
  {
    id: "tv-garden",
    name: "TV Garden",
    category: "その他",
    kirara_comment: "世界中のテレビが無料で見られる。",
    affiliate_url: "TODO_AFFILIATE_TVGARDEN",
    note_url: "https://note.com/uohukasi_ai/n/n82f34ebaaf5e",
    is_recommended: false,
  },
  {
    id: "diode",
    name: "Diode",
    category: "ビジネス効率化",
    kirara_comment: "ブラウザだけでArduinoが動く。",
    affiliate_url: "TODO_AFFILIATE_DIODE",
    note_url: "https://note.com/uohukasi_ai/n/n58aa912882fc",
    is_recommended: false,
  },
  {
    id: "3dtuning",
    name: "3DTuning",
    category: "その他",
    kirara_comment: "好きな車を3Dで自由にカスタムできる。",
    affiliate_url: "TODO_AFFILIATE_3DTUNING",
    note_url: "https://note.com/uohukasi_ai/n/n280575b5c098",
    is_recommended: false,
  },
  {
    id: "airconsole",
    name: "AirConsole",
    category: "その他",
    kirara_comment: "スマホがそのままコントローラーになる。",
    affiliate_url: "TODO_AFFILIATE_AIRCONSOLE",
    note_url: "https://note.com/uohukasi_ai/n/n8781e0f854fe",
    is_recommended: true,
  },
];
