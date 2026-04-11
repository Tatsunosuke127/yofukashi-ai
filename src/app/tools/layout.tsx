import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIツール一覧",
  description: "アイが実際に使って確認したAIツールを一覧で紹介。",
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
