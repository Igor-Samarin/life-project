import Link from "next/link";
import Layout from "../components/Layout";

const sections = [
  { href: "/family", icon: "◈", title: "Семья", text: "Люди, семейное дерево, события, документы и общие цели.", tag: "Раздел 01" },
  { href: "/finances", icon: "◇", title: "Финансы", text: "Доходы, расходы, долги, резерв, цели и прогнозы.", tag: "Раздел 02" },
  { href: "/garage", icon: "◆", title: "Гараж семьи", text: "Автомобили, обслуживание, расходы, документы и планы на замену.", tag: "Раздел 03" },
  { href: "/projects", icon: "◎", title: "Проекты", text: "Shopify, Taxi / Prague Tours и остальные бизнес-направления.", tag: "Раздел 04" },
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
            <div className="lp-cardLabel">{s.tag}</div>
            <h3>{s.icon} &nbsp;{s.title}</h3>
            <p>{s.text}</p>
            <div className="lp-cardMeta">Открыть раздел →</div>
          </Link>
        ))}
      </section>

      <section className="lp-panel">
        <h2 className="lp-sectionTitle">Центр управления</h2>
        <p className="lp-subtitle">Дальше каждый раздел будет превращаться в полноценный рабочий экран с реальными данными, задачами, финансами, прогрессом и связями между проектами.</p>
      </section>
    </Layout>
  );
}
