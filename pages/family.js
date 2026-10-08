import ProjectArt, { artForTitle } from "../components/ProjectArt";
import Layout from "../components/Layout";

export default function Family() {
  return (
    <Layout active="/family">
      <div className="lp-eyebrow">Раздел 01 · Семья</div>
      <h1 className="lp-title">Семья</h1>
      <p className="lp-subtitle">Единый семейный центр: люди, важные события, общие цели, документы, планы и всё, что относится к семье.</p>

      <div className="lp-kpis">
        <div className="lp-kpi"><span>Структура · показатель</span><strong>Семейное дерево</strong><small style={{display:"block",marginTop:9,color:"#a59e8f",lineHeight:1.45,fontSize:11}}>Структура родственных связей — раздел готовится</small></div>
        <div className="lp-kpi"><span>Фокус · показатель</span><strong>Общие цели</strong><small style={{display:"block",marginTop:9,color:"#a59e8f",lineHeight:1.45,fontSize:11}}>Список семейных целей и контроль сроков</small></div>
        <div className="lp-kpi"><span>Контроль · показатель</span><strong>События</strong><small style={{display:"block",marginTop:9,color:"#a59e8f",lineHeight:1.45,fontSize:11}}>Важные даты и напоминания</small></div>
        <div className="lp-kpi"><span>Архив · показатель</span><strong>Документы</strong><small style={{display:"block",marginTop:9,color:"#a59e8f",lineHeight:1.45,fontSize:11}}>Личный семейный архив — раздел готовится</small></div>
      </div>

      <section className="lp-grid">
        <article className="lp-card"><ProjectArt kind="Члены семьи" className="lp-visual" /><div className="lp-cardLabel">Профили</div><h3>Члены семьи</h3><p>Отдельная карточка для каждого: связи, важные данные, интересы, планы и персональные задачи.</p><div className="lp-cardMeta">Будет связано с семейным деревом</div></article>
        <article className="lp-card"><ProjectArt kind="События" className="lp-visual" /><div className="lp-cardLabel">Календарь</div><h3>События</h3><p>Дни рождения, школа, поездки, семейные дела и другие важные даты в одном месте.</p><div className="lp-cardMeta">Напоминания и общий календарь</div></article>
        <article className="lp-card"><ProjectArt kind="Цели семьи" className="lp-visual" /><div className="lp-cardLabel">Развитие</div><h3>Цели семьи</h3><p>Общие финансовые, бытовые, образовательные и жизненные цели с прогрессом и сроками.</p><div className="lp-cardMeta">Реальный прогресс, не игровые цифры</div></article>
      </section>

      <section className="lp-panel">
        <h2 className="lp-sectionTitle">Следующий слой</h2>
        <p className="lp-subtitle">Сюда дальше добавим семейное дерево, отдельные профили, детский раздел, документы, подарки, поездки и общую историю семьи.</p>
      </section>
    </Layout>
  );
}
