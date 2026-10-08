import ProjectArt from "../components/ProjectArt";
import Link from "next/link";
import Layout from "../components/Layout";
import {useState} from "react";

const sections = [
  { href: "/family", icon: "🌳", title: "Семья", text: "Люди, семейное дерево, события, документы и общие цели.", tag: "Раздел 01" },
  { href: "/finances", icon: "💎", title: "Финансы", text: "Доходы, расходы, долги, резерв, цели и прогнозы.", tag: "Раздел 02" },
  { href: "/garage", icon: "🚘", title: "Гараж семьи", text: "Автомобили, обслуживание, расходы, документы и планы на замену.", tag: "Раздел 03" },
  { href: "/projects", icon: "🤖", title: "Проекты", text: "Shopify, Taxi / Prague Tours и остальные бизнес-направления.", tag: "Раздел 04" },
];

export default function Home() {
  const [cardStyle,setCardStyle]=useState("cinema");
  return (
    <Layout>
      <section className="welcomeHero">
        <div className="welcomeVisual"><ProjectArt kind="Lamborghini Urus" className="welcomeCar"/></div>
        <div className="welcomeContent">
          <div className="lp-eyebrow">LIFE PROJECT · ЛИЧНАЯ ЭКОСИСТЕМА</div>
          <h1>Добро пожаловать<br/><em>в твою империю.</em></h1>
          <p>Все важные направления жизни в одном месте. Управляй проектами, семьёй, финансами и будущими целями — в своём темпе.</p>
          <div className="heroButtons"><Link href="/projects">Перейти к проектам →</Link><Link href="/garage">Мои цели ↗</Link></div>
        </div>
      </section>
      <div className="sectionIntro"><div><div className="lp-eyebrow">Навигация</div><h2 className="lp-sectionTitle">Твои направления</h2></div><div className="styleSwitch"><span>Вид карточек</span><button type="button" className={cardStyle==="cinema"?"selected":""} onClick={()=>setCardStyle("cinema")}>Кино</button><button type="button" className={cardStyle==="compact"?"selected":""} onClick={()=>setCardStyle("compact")}>Компактно</button></div></div>

      <section className={"lp-grid homeSections "+(cardStyle==="compact"?"compact":"cinema")}>
        {sections.map((s) => (
          <Link href={s.href} key={s.href} className="lp-card">
            <ProjectArt kind={s.title} className="lp-visual" /><div className="lp-cardLabel">{s.tag}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="lp-cardMeta">Открыть раздел →</div>
          </Link>
        ))}
      </section>

      <section className="lp-panel">
        <h2 className="lp-sectionTitle">Центр управления</h2>
        <p className="lp-subtitle">Быстрые переходы к действиям. Выбери направление — откроется соответствующий рабочий раздел.</p>
        <div className="lp-controlLinks">
          <Link href="/projects" className="lp-controlLink"><ProjectArt kind="Life Project" className="controlArt"/><strong>Проекты и решения</strong><span>Проверить следующие действия →</span></Link>
          <Link href="/projects/shopify" className="lp-controlLink"><ProjectArt kind="Shopify" className="controlArt"/><strong>Shopify</strong><span>Товары, задачи, магазин →</span></Link>
          <Link href="/finances" className="lp-controlLink"><ProjectArt kind="Финансы" className="controlArt"/><strong>Финансы</strong><span>Бюджет и показатели →</span></Link>
          <Link href="/garage" className="lp-controlLink"><ProjectArt kind="Гараж семьи" className="controlArt"/><strong>Гараж</strong><span>Hyundai и план замены →</span></Link>
        </div>
      </section>
      <section className="lp-panel">
        <h2 className="lp-sectionTitle">Быстрый доступ</h2>
        <p className="lp-subtitle">Открывай нужный раздел сразу с главной. Все переходы ведут на существующие страницы приложения.</p>
        <div className="quickAccess">
          <Link href="/projects/shopify/lumera">✦ Магазин LUMERA <span>Открыть →</span></Link>
          <Link href="/projects/team">◈ Команда проектов <span>Открыть →</span></Link>
          <Link href="/family">♧ Семейные планы <span>Открыть →</span></Link>
          <Link href="/projects">▤ Очередь проектов <span>Открыть →</span></Link>
        </div>
      </section>
      <style jsx>{`
        .welcomeHero{min-height:390px;position:relative;overflow:hidden;border:1px solid #c4a15c66;border-radius:26px;background:linear-gradient(105deg,#17150f,#090a0c);display:flex;align-items:center;box-shadow:0 24px 70px #0009}
        .welcomeVisual{position:absolute;inset:0 0 0 35%;opacity:.75}
        .welcomeVisual :global(.welcomeCar){height:100%;min-height:390px;background-position:center 60%!important}
        .welcomeHero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#0b0d10 0%,#0b0d10eb 34%,#0b0d1040 80%,#0b0d1033);pointer-events:none}
        .welcomeContent{position:relative;z-index:1;padding:45px 5%;max-width:680px}
        .welcomeContent h1{font:normal clamp(38px,5vw,68px)/1.08 Georgia,serif;letter-spacing:-.03em;margin:0}
        .welcomeContent em{font-style:normal;color:#e8c775}
        .welcomeContent p{max-width:450px;color:#c4b9a6;line-height:1.7;font-size:14px;margin:22px 0}
        .heroButtons{display:flex;flex-wrap:wrap;gap:12px}
        .heroButtons :global(a){padding:13px 19px;border:1px solid #d8b96b99;border-radius:11px;background:#312717dd;color:#f4dda4;font-size:13px}
        .heroButtons :global(a:hover){background:#544020}
        .sectionIntro{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-top:42px}
        .styleSwitch{display:flex;align-items:center;gap:7px;color:#aaa397;font-size:11px}
        .styleSwitch button{border:1px solid #a48c5366;background:#161719;color:#b8aa86;padding:9px 12px;border-radius:10px;cursor:pointer}
        .styleSwitch button.selected{background:#4a3920;color:#f6df9e;border-color:#e2c277}
        .homeSections.compact :global(.lp-card){min-height:175px;padding:18px}
        .homeSections.compact :global(.lp-visual){height:80px;margin:-18px -18px 12px}
        .homeSections.compact :global(.lp-card h3){font-size:21px;margin:8px 0}
        @media(max-width:700px){.welcomeHero{min-height:360px}.welcomeVisual{inset:0;opacity:.4}.welcomeContent{padding:32px 24px}.sectionIntro{align-items:start;flex-direction:column}.styleSwitch{flex-wrap:wrap}}

        .lp-controlLinks{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:25px}
        :global(.lp-controlLink){padding:18px;border:1px solid #a18a4e66;border-radius:15px;background:linear-gradient(140deg,#332a1a,#131519);display:flex;flex-direction:column;gap:12px;min-height:205px;overflow:hidden;transition:.2s}
        :global(.lp-controlLink:hover){border-color:#ebc66c;transform:translateY(-3px)}
        :global(.controlArt){height:112px;margin:-18px -18px 2px;border-bottom:1px solid #d6b66155}
        .quickAccess{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}
        .quickAccess :global(a){display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px;border-radius:14px;border:1px solid #bda16055;background:linear-gradient(120deg,#282419,#121416);color:#f0dcaa;font-size:14px}
        .quickAccess :global(a:hover){border-color:#edcd7b}
        .quickAccess :global(span){color:#c6ae75;font-size:12px}
        @media(max-width:600px){.quickAccess{grid-template-columns:1fr}}
        :global(.lp-controlLink strong){font-size:16px;color:#f3db95}
        :global(.lp-controlLink span){font-size:12px;color:#b3ada0}
        @media(max-width:850px){.lp-controlLinks{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:420px){.lp-controlLinks{grid-template-columns:1fr}}
      `}</style>
    </Layout>
  );
}
