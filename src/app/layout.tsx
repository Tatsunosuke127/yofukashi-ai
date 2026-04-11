import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-shippori",
  display: "swap",
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "夜ふかしAI｜知らないだけで、損してる。",
    template: "%s｜夜ふかしAI",
  },
  description:
    "アイが深夜に見つけたAIツールを、使い方つきで紹介。知らないだけで、損してる。",
  metadataBase: new URL("https://yofukashi-ai.vercel.app"),
  openGraph: {
    title: "夜ふかしAI｜知らないだけで、損してる。",
    description:
      "アイが深夜に見つけたAIツールを、使い方つきで紹介。",
    siteName: "夜ふかしAI",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "夜ふかしAI｜知らないだけで、損してる。",
    description:
      "アイが深夜に見つけたAIツールを、使い方つきで紹介。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${shippori.variable} ${noto.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
