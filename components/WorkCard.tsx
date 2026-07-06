import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/data/site";

export function WorkCard({ work, index = 0 }: { work: Work; index?: number }) {
  return (
    <Link className="work-card" href={`/works/${work.slug}`}>
      <div className="work-image">
        <Image src={work.images[0]} alt={`${work.title} 施工実績写真`} fill sizes="(max-width: 760px) 100vw, 45vw" priority={index < 2} />
      </div>
      <div className="work-card-body">
        <div className="work-meta">
          {work.tags.slice(0, 2).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{work.title}</p>
        <h3>{work.summary}</h3>
        <span className="card-link">
          View Project <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
