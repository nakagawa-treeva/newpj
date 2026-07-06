import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://swallowtail-architects.vercel.app"),
  title: {
    default: "スワローテイル建築設計事務所 | 山口県光市の建築家・注文住宅",
    template: "%s | スワローテイル建築設計事務所"
  },
  description:
    "スワローテイル建築設計事務所は、山口県光市を拠点に注文住宅、住宅設計、リノベーション、増改築、インテリアコーディネートを行う一級建築士事務所です。",
  keywords: [
    "スワローテイル建築設計事務所",
    "永井慎太郎",
    "光市 建築設計事務所",
    "山口県 注文住宅",
    "リノベーション 光市"
  ],
  openGraph: {
    title: "スワローテイル建築設計事務所",
    description: "何気ない日々を、美しい暮らしへ。住まい手の想いと土地の風景に寄り添う建築設計事務所です。",
    type: "website",
    locale: "ja_JP",
    images: ["/images/atmosphere/atmosphere-01-hero.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
