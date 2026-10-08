import ProjectArt, { artForTitle } from "../components/ProjectArt";
import Layout from "../components/Layout";

export default function Garage() {
  return (
    <Layout active="/garage">
      <div className="lp-eyebrow">Раздел 03 · Гараж семьи</div>
      <h1 className="lp-title">Гараж семьи</h1>
      <p className="lp-subtitle">Все автомобили семьи: обслуживание, расходы, история ремонтов, страховки, документы и планы на замену.</p>

      <div className="lp-kpis">
        <div className="lp-kpi"><span>Текущий авто · показатель</span><strong>Hyundai ix35</strong><small style={{display:"block",marginTop:9,color:"#a59e8f",lineHeight:1.45,fontSize:11}}>Текущая машина · 2013 год</small></div>
        <div className="lp-kpi"><span>Контроль · показатель</span><strong>ТО и ремонт</strong><small style={{display:"block",marginTop:9,color:"#a59e8f",lineHeight:1.45,fontSize:11}}>Список необходимых и выполненных работ</small></div>
        <div className="lp-kpi"><span>Расходы · показатель</span><strong>Топливо + сервис</strong><small style={{display:"block",marginTop:9,color:"#a59e8f",lineHeight:1.45,fontSize:11}}>Учёт расходов на автомобиль</small></div>
        <div className="lp-kpi"><span>Будущее · показатель</span><strong>Следующий авто</strong><small style={{display:"block",marginTop:9,color:"#a59e8f",lineHeight:1.45,fontSize:11}}>План замены автомобиля</small></div>
      </div>

      <section className="lp-grid">
        <article className="lp-card"><ProjectArt kind="Hyundai ix35" className="lp-visual" /><div className="lp-cardLabel">Автомобиль</div><h3>Hyundai ix35</h3><p>Карточка текущего автомобиля: характеристики, пробег, история работ, неисправности и документы.</p><div className="lp-cardMeta">2013 · diesel · 2.0 · AWD</div></article>
        <article className="lp-card"><ProjectArt kind="Обслуживание" className="lp-visual" /><div className="lp-cardLabel">Сервис</div><h3>Обслуживание</h3><p>Масло, фильтры, тормоза, подвеска, шины и все выполненные или планируемые работы.</p><div className="lp-cardMeta">История + будущие работы</div></article>
        <article className="lp-card"><ProjectArt kind="Стоимость владения" className="lp-visual" /><div className="lp-cardLabel">Экономика</div><h3>Стоимость владения</h3><p>Топливо, парковка, страховки, штрафы, платные дороги, ремонт и амортизация.</p><div className="lp-cardMeta">Месяц · год · на 1 км</div></article>
        <article className="lp-card"><ProjectArt kind="Следующая машина" className="lp-visual" /><div className="lp-cardLabel">Замена</div><h3>Следующая машина</h3><p>Отдельный сценарий выбора и финансирования следующего автомобиля с бюджетом и сравнением вариантов.</p><div className="lp-cardMeta">Покупка · кредит · лизинг</div></article>
      </section>
    </Layout>
  );
}
