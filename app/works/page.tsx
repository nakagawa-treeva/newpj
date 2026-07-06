import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WorkCard } from "@/components/WorkCard";
import { works } from "@/data/site";

export const metadata: Metadata = {
  title: "施工実績",
  description: "スワローテイル建築設計事務所の施工実績一覧。山口県光市を中心に、注文住宅や暮らしに寄り添う建築を紹介します。"
};

export default function WorksPage() {
  return (
    <main className="page-main" id="top">
      <section className="page-hero">
        <Reveal>
          <Link className="back-link" href="/">
            <ArrowLeft size={16} />
            Top
          </Link>
          <p className="eyebrow">WORKS</p>
          <h1>施工実績</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p>建築写真を主役に、住まい手の暮らしや土地の空気を感じられる実績を紹介します。</p>
        </Reveal>
      </section>
      <section className="section works-index">
        <div className="work-grid">
          {works.map((work, index) => (
            <Reveal key={work.slug} delay={(index % 2) * 0.1}>
              <WorkCard work={work} index={index} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
