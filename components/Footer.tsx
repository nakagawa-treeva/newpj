import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { office } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="footer-brand">{office.name}</p>
          <p>一級建築士事務所</p>
          <p>{office.address}</p>
        </div>
        <dl>
          <div>
            <dt>代表</dt>
            <dd>{office.architect}</dd>
          </div>
          <div>
            <dt>設立</dt>
            <dd>2010年6月</dd>
          </div>
          <div>
            <dt>対応エリア</dt>
            <dd>光市を中心に対応</dd>
          </div>
          <div>
            <dt>電話</dt>
            <dd>
              <a href={`tel:${office.tel}`}>{office.tel}</a>
            </dd>
          </div>
          <div>
            <dt>メール</dt>
            <dd>
              <a href={`mailto:${office.mail}`}>{office.mail}</a>
            </dd>
          </div>
        </dl>
      </div>
      <div className="footer-links">
        <a href={office.instagram} target="_blank" rel="noreferrer">
          Instagram <ArrowUpRight size={14} />
        </a>
        <a href={office.blog} target="_blank" rel="noreferrer">
          Blog <ArrowUpRight size={14} />
        </a>
        <Link href="#top">Page Top</Link>
      </div>
      <p className="copyright">© {office.name}</p>
    </footer>
  );
}
