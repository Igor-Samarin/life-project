import Layout from "../components/Layout";

export default function Garage() {
  return (
    <Layout active="/garage">
      <div className="lp-eyebrow">Раздел 03 · Гараж семьи</div>
      <h1 className="lp-title">Гараж семьи</h1>
      <p className="lp-subtitle">Все автомобили семьи: обслуживание, расходы, история ремонтов, страховки, документы и планы на замену.</p>

      <div className="lp-kpis">
        <div className="lp-kpi"><span>Текущий авто</span><strong>Hyundai ix35</strong></div>
        <div className="lp-kpi"><span>Контроль</span><strong>ТО и ремонт</strong></div>
        <div className="lp-kpi"><span>Расходы</span><strong>Топливо + сервис</strong></div>
        <div className="lp-kpi"><span>Будущее</span><strong>Следующий авто</strong></div>
      </div>

      <section className="lp-grid">
        <article className="lp-card"><div className="lp-cardLabel">Автомобиль</div><h3>Hyundai ix35</h3><p>Карточка текущего автомобиля: характеристики, пробег, история работ, неисправности и документы.</p><div className="lp-cardMeta">2013 · diesel · 2.0 · AWD</div></article>
        <article className="lp-card"><div className="lp-cardLabel">Сервис</div><h3>Обслуживание</h3><p>Масло, фильтры, тормоза, подвеска, шины и все выполненные или планируемые работы.</p><div className="lp-cardMeta">История + будущие работы</div></article>
        <article className="lp-card"><div className="lp-cardLabel">Экономика</div><h3>Стоимость владения</h3><p>Топливо, парковка, страховки, штрафы, платные дороги, ремонт и амортизация.</p><div className="lp-cardMeta">Месяц · год · на 1 км</div></article>
        <article className="lp-card"><div className="lp-cardLabel">Замена</div><h3>Следующая машина</h3><p>Отдельный сценарий выбора и финансирования следующего автомобиля с бюджетом и сравнением вариантов.</p><div className="lp-cardMeta">Покупка · кредит · лизинг</div></article>
      </section>
    </Layout>
  );
}
