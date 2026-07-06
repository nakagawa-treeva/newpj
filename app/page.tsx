import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { Reveal } from "@/components/Reveal";
import { WorkCard } from "@/components/WorkCard";
import { flow, office, services, works } from "@/data/site";

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-media">
          <Image src="/images/atmosphere/atmosphere-01-hero.jpg" alt="木の光が入る住まいの廊下" fill priority sizes="100vw" />
        </div>
        <div className="hero-shade" />
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">{office.lead}</p>
            <h1>
              <span>何気ない日々を、</span>
              <span>美しい暮らしへ。</span>
            </h1>
            <p>
              住まい手の想いと土地の風景に寄り添いながら、心豊かな日常をつくる建築設計事務所です。
            </p>
          </Reveal>
        </div>
        <div className="hero-panel">
          <span>Based in Hikari, Yamaguchi</span>
          <strong>Architecture for quiet, generous everyday life.</strong>
        </div>
        <a className="scroll-cue" href="#concept">
          SCROLL
        </a>
      </section>

      <section className="section split intro" id="concept">
        <Reveal className="section-kicker">
          <p>CONCEPT</p>
          <h2>設計への想い</h2>
        </Reveal>
        <Reveal className="intro-body" delay={0.12}>
          <p className="lead">日常・風景・生活・行為が、少し輝くように。</p>
          <p>
            スワローテイル建築設計事務所は、建物そのものの美しさだけでなく、そこに住まう人、訪れる人の時間が少し豊かになることを大切にしています。
          </p>
          <p>
            家族で過ごす時間、窓から見える景色、庭とのつながり、地域の風景。何気ない日々の中にある小さな喜びをすくい上げ、心豊かな空間をつくります。
          </p>
        </Reveal>
      </section>

      <section className="values">
        {[
          ["01", "暮らしに寄り添う設計", "住まい手の毎日の過ごし方や家族の時間、周辺環境との関係まで丁寧に考えます。"],
          ["02", "光市を拠点とした地域密着", "山口県光市に事務所を構え、地域の風景や暮らしに馴染む建築を提案します。"],
          ["03", "幅広い設計領域", "注文住宅、増改築、リフォーム、リノベーション、店舗、インテリアまで対応します。"],
          ["04", "詩的で温かみのある世界観", "機能だけでなく、暮らしの情景や感情を大切にした空間づくりを行います。"]
        ].map(([num, title, text], index) => (
          <Reveal as="article" className="value-card" delay={index * 0.08} key={title}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </section>

      <section className="section works-section" id="works">
        <Reveal className="section-head">
          <p className="eyebrow">WORKS</p>
          <h2>施工実績</h2>
          <Link href="/works">
            View All <ArrowRight size={16} />
          </Link>
        </Reveal>
        <div className="work-grid">
          {works.map((work, index) => (
            <Reveal key={work.slug} delay={(index % 2) * 0.1}>
              <WorkCard work={work} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="service-section" id="service">
        <Reveal className="section-head">
          <p className="eyebrow">SERVICE</p>
          <h2>業務内容</h2>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal as="article" className="service-card" delay={index * 0.08} key={service.title}>
              <div className="service-image">
                <Image src={service.image} alt={`${service.title} イメージ写真`} fill sizes="(max-width: 760px) 100vw, 25vw" />
              </div>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section profile-section" id="profile">
        <Reveal className="profile-image">
          <Image src="/images/profile.png" alt="建築家 永井慎太郎の写真" fill sizes="(max-width: 860px) 100vw, 38vw" />
        </Reveal>
        <Reveal className="profile-copy" delay={0.12}>
          <p className="eyebrow">PROFILE</p>
          <h2>
            {office.architect}
            <span>{office.architectEn}</span>
          </h2>
          <p>
            光市を中心に、住まい手と地域の関係を読み解きながら、日常に静かな豊かさをもたらす建築を提案しています。
          </p>
          <dl>
            <div>
              <dt>1974年12月</dt>
              <dd>静岡県生まれ</dd>
            </div>
            <div>
              <dt>1998年3月</dt>
              <dd>多摩美術大学 美術学部 建築学科 卒業</dd>
            </div>
            <div>
              <dt>2010年6月</dt>
              <dd>スワローテイル建築設計事務所 設立</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="flow-section" id="flow">
        <Reveal className="section-head">
          <p className="eyebrow">FLOW</p>
          <h2>ご相談から完成まで</h2>
        </Reveal>
        <div className="flow-visual">
          <PhotoCarousel images={["/images/atmosphere/atmosphere-03-flow.jpg", "/images/atmosphere/atmosphere-02-concept.jpg"]} alt="明るい室内の写真" />
        </div>
        <ol className="flow-list">
          {flow.map(([title, text], index) => (
            <Reveal as="li" delay={index * 0.08} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="instagram-section">
        <Reveal className="instagram-copy">
          <p className="eyebrow">INSTAGRAM</p>
          <h2>日々の記録と、建築の空気感。</h2>
          <p>施工実績や日々の記録はInstagramでもご覧いただけます。</p>
          <a href={office.instagram} target="_blank" rel="noreferrer">
            Instagramを見る <ArrowRight size={16} />
          </a>
        </Reveal>
        <div className="instagram-grid">
          {[works[0].images[0], works[1].images[0], works[2].images[0], works[3].images[0], services[0].image, services[3].image].map((image, index) => (
            <Reveal as="a" href={office.instagram} target="_blank" rel="noreferrer" className="instagram-tile" delay={index * 0.05} key={image}>
              <Image src={image} alt="Instagramプレビュー 建築写真" fill sizes="(max-width: 760px) 33vw, 16vw" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-bg">
          <Image src="/images/contact/contact-bg.png" alt="" fill sizes="100vw" />
        </div>
        <Reveal className="contact-content">
          <p className="eyebrow">CONTACT</p>
          <h2>暮らしの想いから、一緒に考えていきます。</h2>
          <p>まだ具体的に決まっていない段階でもお気軽にご相談ください。</p>
          <div className="contact-actions">
            <a href={`mailto:${office.mail}`}>
              <Mail size={18} />
              メールで相談する
            </a>
            <a href={`tel:${office.tel}`}>
              <Phone size={18} />
              {office.tel}
            </a>
          </div>
        </Reveal>
        <Reveal className="map-card" delay={0.12}>
          <MapPin size={18} />
          <span>{office.address}</span>
        </Reveal>
      </section>
    </main>
  );
}
