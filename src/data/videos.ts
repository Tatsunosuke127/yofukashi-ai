export type Video = {
  id: string;
  title: string;
  youtube_id: string;
  note_url: string;
};

export const latestVideos: Video[] = [
  {
    id: "video-1",
    title: "知らないだけで、損してる。Part10",
    youtube_id: "y5lCd8R3KdM",
    note_url: "https://note.com/yofukasi_ai/n/nbb182a3c3bee",
  },
  {
    id: "video-2",
    title: "知らないだけで、損してる。Part9",
    youtube_id: "U-VRJpVZImc",
    note_url: "https://note.com/yofukasi_ai/n/n6b41dbc1affd",
  },
  {
    id: "video-3",
    title: "知らないだけで、損してる。Part8",
    youtube_id: "3e6vll7FHAU",
    note_url: "https://note.com/yofukasi_ai/n/n5191cf37d78b",
  },
];
