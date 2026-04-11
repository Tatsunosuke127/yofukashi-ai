export type Video = {
  id: string;
  title: string;
  youtube_id: string;
  note_url: string;
};

export const latestVideos: Video[] = [
  {
    id: "video-1",
    title: "友達のスマホが、そのままコントローラーになる。",
    youtube_id: "ppyuIFfBIZY",
    note_url: "https://note.com/uohukasi_ai",
  },
  {
    id: "video-2",
    title: "好きな車をブラウザで自由にカスタムできる。",
    youtube_id: "R4sx9EK7x90",
    note_url: "https://note.com/uohukasi_ai",
  },
  {
    id: "video-3",
    title: "知らないだけで、損してる。",
    youtube_id: "LOzBok9qxK0",
    note_url: "https://note.com/uohukasi_ai",
  },
];
