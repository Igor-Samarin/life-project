import Link from "next/link";
import Layout from "../components/Layout";

const projects = [
  ["Shopify", "Магазины, товары, тесты, продажи и дальнейшее масштабирование.", "E-commerce", "/projects/shopify"],
  ["Taxi / Prague Tours", "Прямые клиенты, туристические поездки, визитки, QR и бронирования.", "Текущий доход", null],
  ["Trading Bots", "Торговые боты и автоматизированные стратегии как отдельное направление.", "Финтех", null],
  ["Family Clothing Brand", "Семейный бренд одежды, персональные цифровые аватары и капсулы.", "Бренд", null],
  ["Prague Casting & Content Studio", "Студия, кастинг, продакшн и агентская модель для совершеннолетних исполнителей.", "Studio", null],
  ["Dating App", "Приложение знакомств с реальными подарками, логистикой и игровыми механиками.", "App", null],
  ["Wedding Complex", "Концепт свадебного комплекса: кафе и магазины свадебных товаров.", "Real Estate", null],
];

export default function Projects() {
  return (
    <Layout active="/projects">
      <div className="lp-eyebrow">Раздел 04 · Проекты</div>
      <h1 className="lp-title">Проекты</h1>
      <p className="lp-subtitle">Здесь живут все направления бизнеса и заработка. Каждый проект дальше получит бюджет, задачи, этапы, документы, показатели и отдельную дорожную карту.</p>

      <div className="lp-kpis">
        <div className="lp-kpi"><span>Каталог</span><strong>{projects.length} направлений</strong></div>
        <div className="lp-kpi"><span>Приоритет</span><strong>Доход</strong></div>
        <div className="lp-kpi"><span>Система</span><strong>Этапы</strong></div>
        <div className="lp-kpi"><span>Контроль</span><strong>KPI и бюджет</strong></div>
      </div>

      <section className="lp-grid">
        {projects.map(([title,text,meta,href]) => {
          const inner = <>
            <div className="lp-cardLabel">{meta}</div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="lp-cardMeta">{href ? "Открыть проект →" : "Структура в работе"}</div>
          </>;
          return href
            ? <Link href={href} className="lp-card" key={title}>{inner}</Link>
            : <article className="lp-card" key={title}>{inner}</article>;
        })}
      </section>
    </Layout>
  );
}