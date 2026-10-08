import ProjectArt from "../components/ProjectArt";
import Link from "next/link";
import Layout from "../components/Layout";

const sections = [
  { href: "/family", icon: "🌳", title: "Семья", text: "Люди, семейное дерево, события, документы и общие цели.", tag: "Раздел 01" },
  { href: "/finances", icon: "💎", title: "Финансы", text: "Доходы, расходы, долги, резерв, цели и прогнозы.", tag: "Раздел 02" },
  { href: "/garage", icon: "🚘", title: "Гараж семьи", text: "Автомобили, обслуживание, расходы, документы и планы на замену.", tag: "Раздел 03" },
  { href: "/projects", icon: "🤖", title: "Проекты", text: "Shopify, Taxi / Prague Tours и остальные бизнес-направления.", tag: "Раздел 04" },
];

export default function Home() {
  return (
    <Layout>
      <div className="lp-eyebrow">Life Project · Главный экран</div>
      <h1 className="lp-title">Жизнь<br />как стратегия</h1>
      <p className="lp-subtitle">Четыре главных контура системы. Семья, деньги, автомобили и проекты всегда доступны с любого внутреннего экрана.</p>

      <section className="lp-grid">
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
