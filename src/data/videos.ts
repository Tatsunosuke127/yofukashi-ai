export type Video = {
  id: string;
  title: string;
  youtube_id: string;
  note_url: string;
};

export const latestVideos: Video[] = [
  {
    id: "video-1",
    title: "知らないだけで、損してる。Part8",
    youtube_id: "3e6vll7FHAU",
    note_url: "https://note.com/yofukasi_ai/n/n5191cf37d78b",
  },
  {
    id: "video-2",
    title: "友達のスマホが、そのままコントローラーになる。",
    youtube_id: "ppyuIFfBIZY",
    note_url: "https://note.com/yofukasi_ai/n/n8781e0f854fe",
  },
  {
    id: "video-3",
    title: "好きな車をブラウザで自由にカスタムできる。",
    youtube_id: "R4sx9EK7x90",
    note_url: "https://note.com/yofukasi_ai/n/n280575b5c098",
  },
];
