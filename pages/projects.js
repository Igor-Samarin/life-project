import Layout from "../components/Layout";

const projects = [
  ["Shopify", "Магазины, товары, тесты, продажи и дальнейшее масштабирование.", "E-commerce"],
  ["Taxi / Prague Tours", "Прямые клиенты, туристические поездки, визитки, QR и бронирования.", "Текущий доход"],
  ["Trading Bots", "Торговые боты и автоматизированные стратегии как отдельное направление.", "Финтех"],
  ["Family Clothing Brand", "Семейный бренд одежды, персональные цифровые аватары и капсулы.", "Бренд"],
  ["Prague Casting & Content Studio", "Студия, кастинг, продакшн и агентская модель для совершеннолетних исполнителей.", "Studio"],
  ["Dating App", "Приложение знакомств с реальными подарками, логистикой и игровыми механиками.", "App"],
  ["Wedding Complex", "Концепт свадебного комплекса: кафе и магазины свадебных товаров.", "Real Estate"],
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
        {projects.map(([title,text,meta]) => (
          <article className="lp-card" key={title}>
            <div className="lp-cardLabel">{meta}</div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="lp-cardMeta">Открыть проект →</div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
