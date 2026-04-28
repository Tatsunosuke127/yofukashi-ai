export type NoteArticle = {
  id: string;
  title: string;
  category: string;
  description: string;
  note_url: string;
};

export const notes: NoteArticle[] = [
  {
    id: "heygen",
    title: "「私の動画」が、HeyGenで写真1枚から作られている話。",
    category: "動画・アニメ",
    description: "写真1枚アップするだけで、自分が話している動画が作れる。",
    note_url: "https://note.com/yofukasi_ai/n/n215d1a4ec3e4",
  },
  {
    id: "suno",
    title: "「自分だけの曲」が、30秒で作れるようになった話。",
    category: "音楽",
    description: "歌詞のテーマを入力するだけで、フルサイズの楽曲が30秒で完成。",
    note_url: "https://note.com/yofukasi_ai/n/nd81ea5e631f0",
  },
  {
    id: "logo-diffusion",
    title: "ロゴ作成、「デザイナーに5万円」が、Logo Diffusionで10秒できるようになった話。",
    category: "デザイン",
    description: "AIが10秒でプロ品質のロゴを生成。デザイナーいらず。",
    note_url: "https://note.com/yofukasi_ai/n/n80ea20ce31ad",
  },
  {
    id: "slow-roads",
    title: "「疲れた夜の癒し」が、Slow Roadsでブラウザ1つで手に入る話。",
    category: "エンタメ",
    description: "ブラウザだけで無限ドライブができる癒しサイト。",
    note_url: "https://note.com/yofukasi_ai/n/n019bf5800394",
  },
  {
    id: "makemydrivefun",
    title: "「LAからSFまでの海沿い」が、MakeMyDriveFunで小旅行マップに変わる話。",
    category: "旅行",
    description: "ルートを入力するだけで、観光名所つき小旅行マップが完成。",
    note_url: "https://note.com/yofukasi_ai/n/n157ca5b4bc06",
  },
  {
    id: "luma-ai",
    title: "「映画みたいな動画」が、Luma AIで2分で作れるようになった話。",
    category: "動画・アニメ",
    description: "テキストを打つだけで、映画クオリティの動画を生成できる。",
    note_url: "https://note.com/yofukasi_ai/n/n985119306144",
  },
  {
    id: "pngimg",
    title: "「透過PNG素材」が、PNGimgで11万5千枚タダで手に入る話。",
    category: "素材",
    description: "11万5千枚以上の透過PNG素材が完全無料。商用利用もOK。",
    note_url: "https://note.com/yofukasi_ai/n/n2baae378200b",
  },
  {
    id: "city-roads",
    title: "「自分の街」が、City Roadsで3秒でアート作品になった話。",
    category: "デザイン",
    description: "街の名前を入れるだけで、道路網がアートポスターになる。",
    note_url: "https://note.com/yofukasi_ai/n/n03b609f4fedb",
  },
  {
    id: "biodigital-human",
    title: "「自分の体の中」が、BioDigital Humanで立体的に見られるようになった話。",
    category: "学習",
    description: "人体の解剖学的構造を3Dで自由に観察できる。",
    note_url: "https://note.com/yofukasi_ai/n/nbe733d944cbd",
  },
  {
    id: "myfridgefood",
    title: "「今夜、何作ろう」という悩みが、MyFridgeFoodで3秒で消えた話。",
    category: "料理",
    description: "冷蔵庫にある食材を選ぶだけで、作れる料理が一瞬で出る。",
    note_url: "https://note.com/yofukasi_ai/n/n5dbfe7ce84c5",
  },
  {
    id: "paperanimator",
    title: "「あの紙が動くアニメ動画」が、PaperAnimatorで10秒で作れるようになった話。",
    category: "動画・アニメ",
    description: "画像をアップするだけで、紙が動くアニメーション動画が作れる。",
    note_url: "https://note.com/yofukasi_ai/n/nbb182a3c3bee",
  },
  {
    id: "claudecode",
    title: "「毎日の作業を全部自動化」が、Claude Codeで今日から始められる話。",
    category: "自動化",
    description: "日本語で指示するだけで、コードも自動化も全部やってくれる。",
    note_url: "https://note.com/yofukasi_ai/n/n6b41dbc1affd",
  },
  {
    id: "planner5d",
    title: "「自分の部屋のレイアウト」が、Planner 5Dで数秒で3Dになる話。",
    category: "インテリア",
    description: "部屋の間取りを入力するだけで、3Dで家具配置をシミュレーションできる。",
    note_url: "https://note.com/yofukasi_ai/n/n5191cf37d78b",
  },
  {
    id: "airconsole",
    title: "コントローラーを買わずに、スマホをゲームのコントローラーにした人たちの話。",
    category: "ゲーム",
    description: "AirConsoleを使えば、スマホがそのままコントローラーになる。",
    note_url: "https://note.com/yofukasi_ai/n/n8781e0f854fe",
  },
  {
    id: "3dtuning",
    title: "車を買う前に「3DTuning」で理想の姿を確認している人たちの話。",
    category: "カスタム",
    description: "ブラウザで好きな車を自由にカスタムできる。登録不要。",
    note_url: "https://note.com/yofukasi_ai/n/n280575b5c098",
  },
  {
    id: "geofs",
    title: "ブラウザで世界中を飛べるフライトシミュレーター「GeoFS」——パイロットも使う本物の話。",
    category: "シミュレーター",
    description: "無料・登録不要で、ブラウザだけで世界中を飛べる。",
    note_url: "https://note.com/yofukasi_ai/n/n7d28e1e9912e",
  },
  {
    id: "gamma",
    title: "資料作りに2時間かけてる人が、Gammaを知った日から10分で終わらせるようになった話。",
    category: "デザイン",
    description: "AIが資料を自動生成。無料で始められる。",
    note_url: "https://note.com/yofukasi_ai/n/ncb1dd16b0b73",
  },
  {
    id: "diode",
    title: "ブラウザだけでArduinoが動く——「Diode」の使い方【完全版】",
    category: "開発",
    description: "インストール不要。ブラウザだけで回路シミュレーションができる。",
    note_url: "https://note.com/yofukasi_ai/n/n58aa912882fc",
  },
  {
    id: "tvgarden",
    title: "Netflixより面白いかもしれない。世界中のテレビが無料で見られるサイトの話。",
    category: "エンタメ",
    description: "登録不要で世界中のテレビチャンネルが見られる。",
    note_url: "https://note.com/yofukasi_ai/n/n82f34ebaaf5e",
  },
  {
    id: "emergent",
    title: "コードを書かずにアプリを作った話。",
    category: "ビジネス効率化",
    description: "Emergentを使えば、30分でアプリが作れる。",
    note_url: "https://note.com/yofukasi_ai/n/n4a091902127d",
  },
];
