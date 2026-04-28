export type Video = {
  id: string;
  title: string;
  youtube_id: string;
  note_url: string;
};

export const latestVideos: Video[] = [
  {
    id: "video-1",
    title: "「私の動画」が、HeyGenで写真1枚から作られている話。",
    youtube_id: "4Cmuk4fHOtc",
    note_url: "https://note.com/yofukasi_ai/n/n215d1a4ec3e4",
  },
  {
    id: "video-2",
    title: "「自分だけの曲」が、30秒で作れるようになった話。",
    youtube_id: "Z5G9MeSTFZg",
    note_url: "https://note.com/yofukasi_ai/n/nd81ea5e631f0",
  },
  {
    id: "video-3",
    title: "「デザイナーに5万円」が、Logo Diffusionで10秒できるようになった話。",
    youtube_id: "B31lAqmy7vw",
    note_url: "https://note.com/yofukasi_ai/n/n80ea20ce31ad",
  },
];
