import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { Reveal } from "@/components/Reveal";
import { office, works } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} | 施工実績`,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [work.images[0]]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) notFound();
  const related = works.filter((item) => item.slug !== work.slug).slice(0, 3);

  return (
    <main className="project-main" id="top">
      <section className="project-hero">
        <Reveal className="project-title">
          <Link className="back-link" href="/works">
            <ArrowLeft size={16} />
            Works
          </Link>
          <p className="eyebrow">PROJECT</p>
          <h1>{work.title}</h1>
          <p>{work.summary}</p>
          <div className="project-tags">
            {work.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Reveal>
        <Reveal className="project-carousel" delay={0.12}>
          <PhotoCarousel images={work.images} alt={`${work.title} 施工実績写真`} priority />
        </Reveal>
      </section>

      <section className="project-overview">
        <Reveal>
          <h2>概要</h2>
          <p>{work.description}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <dl className="project-info">
            <div>
              <dt>用途</dt>
              <dd>{work.use}</dd>
            </div>
            <div>
              <dt>所在地</dt>
              <dd>{work.location}</dd>
            </div>
            <div>
              <dt>設計</dt>
              <dd>{office.name}</dd>
            </div>
            <div>
              <dt>写真枚数</dt>
              <dd>{work.images.length}枚</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="project-section">
        <Reveal className="section-head">
          <p className="eyebrow">GALLERY</p>
          <h2>写真ギャラリー</h2>
        </Reveal>
        <div className="project-gallery">
          {work.images.map((image, index) => (
            <Reveal as="div" className="gallery-image" delay={(index % 3) * 0.06} key={image}>
              <Image src={image} alt={`${work.title} ギャラリー写真 ${index + 1}`} fill sizes="(max-width: 760px) 100vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="project-section project-points">
        <Reveal className="section-head">
          <p className="eyebrow">POINTS</p>
          <h2>設計のポイント</h2>
        </Reveal>
        <ol>
          {work.points.map((point, index) => (
            <Reveal as="li" delay={index * 0.08} key={point.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="project-section related-section">
        <Reveal className="section-head">
          <p className="eyebrow">RELATED</p>
          <h2>他の施工実績</h2>
        </Reveal>
        <div className="related-grid">
          {related.map((item) => (
            <Link className="related-card" href={`/works/${item.slug}`} key={item.slug}>
              <div>
                <Image src={item.images[0]} alt={`${item.title} 施工実績写真`} fill sizes="(max-width: 760px) 100vw, 28vw" />
              </div>
              <h3>{item.title}</h3>
              <span>
                View <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
