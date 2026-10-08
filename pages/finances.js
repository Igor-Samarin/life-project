import ProjectArt, { artForTitle } from "../components/ProjectArt";
import Layout from "../components/Layout";

export default function Finances() {
  return (
    <Layout active="/finances">
      <div className="lp-eyebrow">Раздел 02 · Финансы</div>
      <h1 className="lp-title">Финансы</h1>
      <p className="lp-subtitle">Полный семейный денежный контур: доходы, обязательные и переменные расходы, долги, резерв, цели и прогнозы.</p>

      <div className="lp-kpis">
        <div className="lp-kpi"><span>Главный показатель</span><strong>Чистый остаток</strong></div>
        <div className="lp-kpi"><span>Резерв</span><strong>Подушка</strong></div>
        <div className="lp-kpi"><span>Обязательства</span><strong>Долговая нагрузка</strong></div>
        <div className="lp-kpi"><span>Прогноз</span><strong>Месяц / год</strong></div>
      </div>

      <section className="lp-grid">
        <article className="lp-card"><ProjectArt kind="coins" className="lp-visual" /><div className="lp-cardLabel">Доходы</div><h3>Семейный доход</h3><p>Доходы каждого члена семьи, такси, бизнесы, проекты и другие источники — отдельно и суммарно.</p><div className="lp-cardMeta">Факт · план · прогноз</div></article>
        <article className="lp-card"><ProjectArt kind="coins" className="lp-visual" /><div className="lp-cardLabel">Расходы</div><h3>Все категории</h3><p>Жильё, питание, авто, страховки, дети, связь, медицина, налоги, подписки, отдых и нерегулярные платежи.</p><div className="lp-cardMeta">Обязательные · переменные</div></article>
        <article className="lp-card"><ProjectArt kind="coins" className="lp-visual" /><div className="lp-cardLabel">Обязательства</div><h3>Долги и кредиты</h3><p>Остаток долга, ежемесячный платёж, срок, процент и общая нагрузка на семейный бюджет.</p><div className="lp-cardMeta">Контроль и план погашения</div></article>
        <article className="lp-card"><ProjectArt kind="coins" className="lp-visual" /><div className="lp-cardLabel">Накопления</div><h3>Резерв</h3><p>Финансовая подушка и отдельные накопления на крупные цели, покупки и будущие проекты.</p><div className="lp-cardMeta">Безопасность семьи</div></article>
        <article className="lp-card"><ProjectArt kind="coins" className="lp-visual" /><div className="lp-cardLabel">Прогноз</div><h3>До конца периода</h3><p>Прогноз свободных денег до конца месяца и года с учётом обязательных платежей и планов.</p><div className="lp-cardMeta">Месяц · квартал · год</div></article>
        <article className="lp-card"><ProjectArt kind="coins" className="lp-visual" /><div className="lp-cardLabel">Распределение</div><h3>Свободные деньги</h3><p>Система будет подсказывать, какую часть направить в резерв, на долги, цели или развитие проектов.</p><div className="lp-cardMeta">Правила распределения</div></article>
      </section>
    </Layout>
  );
}
