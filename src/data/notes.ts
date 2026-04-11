export type NoteArticle = {
  id: string;
  title: string;
  category: string;
  description: string;
  note_url: string;
};

export const notes: NoteArticle[] = [
  {
    id: "airconsole",
    title: "コントローラーを買わずに、スマホをゲームのコントローラーにした人たちの話。",
    category: "ゲーム",
    description: "AirConsoleを使えば、スマホがそのままコントローラーになる。",
    note_url: "https://note.com/uohukasi_ai/n/n8781e0f854fe",
  },
  {
    id: "3dtuning",
    title: "車を買う前に「3DTuning」で理想の姿を確認している人たちの話。",
    category: "カスタム",
    description: "ブラウザで好きな車を自由にカスタムできる。登録不要。",
    note_url: "https://note.com/uohukasi_ai/n/n280575b5c098",
  },
  {
    id: "geofs",
    title: "ブラウザで世界中を飛べるフライトシミュレーター「GeoFS」——パイロットも使う本物の話。",
    category: "シミュレーター",
    description: "無料・登録不要で、ブラウザだけで世界中を飛べる。",
    note_url: "https://note.com/uohukasi_ai/n/n7d28e1e9912e",
  },
  {
    id: "gamma",
    title: "資料作りに2時間かけてる人が、Gammaを知った日から10分で終わらせるようになった話。",
    category: "デザイン",
    description: "AIが資料を自動生成。無料で始められる。",
    note_url: "https://note.com/uohukasi_ai/n/ncb1dd16b0b73",
  },
  {
    id: "diode",
    title: "ブラウザだけでArduinoが動く——「Diode」の使い方【完全版】",
    category: "開発",
    description: "インストール不要。ブラウザだけで回路シミュレーションができる。",
    note_url: "https://note.com/uohukasi_ai/n/n58aa912882fc",
  },
  {
    id: "tvgarden",
    title: "Netflixより面白いかもしれない。世界中のテレビが無料で見られるサイトの話。",
    category: "エンタメ",
    description: "登録不要で世界中のテレビチャンネルが見られる。",
    note_url: "https://note.com/uohukasi_ai/n/n82f34ebaaf5e",
  },
  {
    id: "emergent",
    title: "コードを書かずにアプリを作った話。",
    category: "ビジネス効率化",
    description: "Emergentを使えば、30分でアプリが作れる。",
    note_url: "https://note.com/uohukasi_ai/n/n4a091902127d",
  },
];
