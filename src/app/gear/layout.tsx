import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アイの作業環境",
  description: "AIインフルエンサー「アイ」が深夜の作業で使っているPC・モニター・キーボード・ヘッドホンなどを紹介。",
};

export default function GearLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
