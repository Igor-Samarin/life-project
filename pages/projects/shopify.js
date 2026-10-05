import Link from "next/link";
import Layout from "../../components/Layout";

const products = [
  ["Portable Mini Air Pump","Camping / Travel","Kolodata","24","$22.00","$57.99"],
  ["Propane Tank Fire","Home / Garden","AliExpress","3","$30.00","$78.99"],
  ["Air Car Vacuum Cleaner","Auto","Kolodata","1","$7.00","$18.99"],
  ["Electric Cordless Blower","Home / Garden","Kolodata","1","$23.00","$60.99"],
  ["Night Light Galaxy Projector","Home / Decor","AliExpress","1","$8.00","$21.99"],
  ["Micro-Current EMS Face Lifting Massager","Beauty","Kolodata","1","$3.49","$9.99"],
  ["Baby Bottle Warmer","Baby / Maternity","Kolodata","1","$10.90","$28.99"],
  ["Foot Air Pressure Leg Massager","Health","Kolodata","5","$76.29","$200.99"],
  ["LED Face Mask","Health","Kolodata","1","$20.12","$53.99"],
  ["Facial and Neck Beauty Device","Health","AliExpress","3","$31.14","$81.99"]
];

const stores = Array.from({length:8},(_,i)=>({
  id:String(i+1).padStart(2,"0"),
  name:i===0?"Laser / Beauty Store":"Store "+String(i+1).padStart(2,"0"),
  status:i===0?"Текущий запуск":"Очередь"
}));

const laserCandidates = [
  {
    name:"ONE BEAUTY Ice 2.x",
    freshness:"FDA 510(k) · 18.09.2026",
    tech:"Sapphire cooling · home IPL",
    primary:"ONE BEAUTY Technology Co., Ltd.",
    backup:"Резерв: подобрать второй OEM того же корпуса после образца",
    href:"https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K262524"
  },
  {
    name:"Ubeaut 2026 IGBT Sapphire IPL",
    freshness:"2026 supplier line",
    tech:"до 22J · IGBT · sapphire + ice · 9 уровней · auto/manual",
    primary:"Guangdong OEM / Ubeautnow",
    backup:"Резерв: Aolemon 21J IGBT Sapphire",
    href:"https://www.ubeautnow.com/2026-New-At-Home-Painless-Ice-Cooling-IPL-Hair-Removal-Device-Long-Lasting-Hair-Reduction-for-Face-B"
  },
  {
    name:"Aolemon 21J IGBT Fast-Flash",
    freshness:"Актуальная OEM-линия",
    tech:"21J · IGBT fast flash · sapphire ice cooling · OEM/ODM",
    primary:"Aolemon · Hangzhou",
    backup:"Резерв: Ubeaut 22J IGBT Sapphire",
    href:"https://www.aolemon.com/products/igbt-fast-flash-smart-ipl-hair-removal-device-21j-sapphire-ice-cooling"
  }
];

export default function ShopifyProject(){
  return (
    <Layout active="/projects">
      <style jsx>{`
        .heroRow{display:flex;justify-content:space-between;gap:24px;align-items:flex-end}
        .access{padding:10px 13px;border:1px solid rgba(210,182,92,.28);border-radius:12px;background:rgba(47,59,58,.65);color:#efe4c4;font-size:12px}
        .team{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:30px}
        .role{padding:22px;border:1px solid rgba(210,182,92,.16);border-radius:18px;background:linear-gradient(145deg,rgba(49,61,59,.72),rgba(32,41,45,.72))}
        .role h3{font-family:Georgia,serif;font-weight:400;font-size:25px;margin:8px 0}
        .role p,.role li{color:#b9b3a7;font-size:13px;line-height:1.6}
        .role ul{padding-left:18px;margin:14px 0 0}
        .stores{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:18px}
        .store{padding:17px;border:1px solid rgba(210,182,92,.13);border-radius:15px;background:rgba(42,51,52,.56)}
        .store b{display:block;font-family:Georgia,serif;font-size:18px;font-weight:400;margin-top:8px}
        .store small{color:#8d988f}
        .laserGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}
        .laser{padding:20px;border:1px solid rgba(210,182,92,.16);border-radius:17px;background:linear-gradient(160deg,rgba(54,66,64,.76),rgba(35,45,49,.72))}
        .laser h3{font-family:Georgia,serif;font-size:21px;font-weight:400;margin:10px 0}
        .laser p{color:#b8b2a6;font-size:12px;line-height:1.55;margin:7px 0}
        .laser a{display:inline-block;margin-top:10px;color:#e6ca70;font-size:12px}
        .tableWrap{margin-top:18px;border:1px solid rgba(210,182,92,.14);border-radius:18px;overflow:auto;background:rgba(30,38,40,.72)}
        .row{display:grid;grid-template-columns:36px minmax(220px,1.5fr) minmax(115px,.7fr) minmax(90px,.6fr) 60px 78px 78px;gap:10px;align-items:center;min-width:820px;padding:12px 14px;border-bottom:1px solid rgba(210,182,92,.08);font-size:12px}
        .row:last-child{border-bottom:0}.row.head{font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:#99a39c;background:rgba(54,63,64,.72)}
        .score{display:inline-grid;place-items:center;width:38px;height:28px;border-radius:9px;background:rgba(229,201,101,.1);border:1px solid rgba(229,201,101,.25);color:#ecd879;font-weight:700}
        .sheetBtn{display:inline-flex;margin-top:18px;padding:11px 15px;border-radius:12px;border:1px solid rgba(210,182,92,.28);background:rgba(47,59,58,.65);color:#efe4c4;font-size:12px}
        .note{margin-top:18px;padding:16px;border-left:2px solid #d6b85f;background:rgba(45,58,60,.38);color:#b9b3a7;font-size:13px;line-height:1.55}
        @media(max-width:900px){.team{grid-template-columns:1fr}.stores{grid-template-columns:repeat(2,1fr)}.laserGrid{grid-template-columns:1fr}.heroRow{align-items:flex-start;flex-direction:column}}
      `}</style>

      <div className="heroRow">
        <div>
          <div className="lp-eyebrow">Проекты · Shopify</div>
          <h1 className="lp-title">Shopify</h1>
          <p className="lp-subtitle">Рабочая зона Игоря и Артёма внутри Life Project. Shopify.com пока не изменяем.</p>
        </div>
        <div className="access">Игорь · Owner всего Life Project<br/>Артём · доступ только к Shopify</div>
      </div>

      <div className="lp-kpis">
        <div className="lp-kpi"><span>Команда</span><strong>2</strong></div>
        <div className="lp-kpi"><span>Магазины</span><strong>1 + 7</strong></div>
        <div className="lp-kpi"><span>Отбор</span><strong>10 / день</strong></div>
        <div className="lp-kpi"><span>Оценка товара</span><strong>0–35</strong></div>
      </div>

      <section className="team">
        <article className="role">
          <div className="lp-cardLabel">Owner · Игорь</div>
          <h3>Стратегия и решения</h3>
          <ul>
            <li>Ниши, приоритеты и финальное решение по товару</li>
            <li>Бюджет, экономика, платежи и масштабирование</li>
            <li>Утверждение товара после оценки 0–35</li>
            <li>Доступы участников и общая стратегия магазинов</li>
          </ul>
        </article>
        <article className="role">
          <div className="lp-cardLabel">Shopify Member · Артём</div>
          <h3>Технический запуск</h3>
          <ul>
            <li>Настройка магазина, приложений и структуры</li>
            <li>Карточки товаров и оформление</li>
            <li>Подготовка рекламных материалов и тестов</li>
            <li>Фиксация выполненного и проблем</li>
          </ul>
        </article>
      </section>

      <section className="lp-panel">
        <h2 className="lp-sectionTitle">8 магазинов</h2>
        <p className="lp-subtitle">Сейчас запускаем №01 по лазерам / beauty. Остальные семь — очередь следующих запусков.</p>
        <div className="stores">{stores.map(s=><div className="store" key={s.id}><small>Store {s.id}</small><b>{s.name}</b><small>{s.status}</small></div>)}</div>
      </section>

      <section className="lp-panel">
        <div className="lp-eyebrow">Исследование · IPL / домашняя эпиляция</div>
        <h2 className="lp-sectionTitle">3 кандидата на тест</h2>
        <div className="laserGrid">
          {laserCandidates.map(x=><article className="laser" key={x.name}>
            <div className="lp-cardLabel">{x.freshness}</div>
            <h3>{x.name}</h3>
            <p>{x.tech}</p>
            <p><b>Основной:</b> {x.primary}</p>
            <p><b>{x.backup}</b></p>
            <a href={x.href} target="_blank" rel="noreferrer">Проверить источник ↗</a>
          </article>)}
        </div>
        <div className="note">Резервный поставщик пока считается резервом только по сопоставимой технологии. Перед заказом образцов отдельно подтверждаем одинаковый OEM-корпус / BOM / комплектующие, чтобы не выдавать похожую модель за тот же SKU.</div>
      </section>

      <section className="lp-panel">
        <div className="lp-eyebrow">Товары / Excel</div>
        <h2 className="lp-sectionTitle">Первые 10 товаров</h2>
        <p className="lp-subtitle">Данные перенесены из рабочей таблицы поиска продуктов. Этот блок будет расти примерно на 10 новых кандидатов в день.</p>
        <div className="tableWrap">
          <div className="row head"><div>№</div><div>Товар</div><div>Ниша</div><div>Источник</div><div>0–35</div><div>COG</div><div>Продажа</div></div>
          {products.map((p,i)=><div className="row" key={p[0]}><div>{i+1}</div><div>{p[0]}</div><div>{p[1]}</div><div>{p[2]}</div><div><span className="score">{p[3]}</span></div><div>{p[4]}</div><div>{p[5]}</div></div>)}
        </div>
        <a className="sheetBtn" href="https://docs.google.com/spreadsheets/d/1oEuZtuP-WeFnmnqxq__tnM9DcK8HeKazph0TZkBohv0/edit" target="_blank" rel="noreferrer">Открыть исходную таблицу Google Sheets ↗</a>
      </section>

      <p style={{marginTop:22}}><Link href="/projects">← Назад ко всем проектам</Link></p>
    </Layout>
  );
}