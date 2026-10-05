import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const sheetUrl = "https://docs.google.com/spreadsheets/d/1oEuZtuP-WeFnmnqxq__tnM9DcK8HeKazph0TZkBohv0/edit?usp=drivesdk";

const products = [
  {name:"Ubeaut 2026 22J IGBT Sapphire IPL", niche:"Beauty Tech", source:"Ubeautnow", score:"0", cog:"—", sale:"—", image:"https://hnau.imgix.net/media/catalog/product/a/4/a4___ushr_c2.jpg", href:"https://www.ubeautnow.com/2026-New-At-Home-Painless-Ice-Cooling-IPL-Hair-Removal-Device-Long-Lasting-Hair-Reduction-for-Face-B"},
  {name:"ONE BEAUTY Sapphire Cooling IPL (Ice 2.0–2.2)", niche:"Beauty Tech", source:"FDA / ONE BEAUTY", score:"0", cog:"—", sale:"—", image:"https://microless.com/cdn/products/21b9ece287d8ee51af9d3db4bfef8a96-hi.jpg", href:"https://www.onebeauty.com/sys-pd/29.html"},
  {name:"iShine Lumi 2 Smart IPL", niche:"Beauty Tech", source:"iplmanufacturer.com", score:"0", cog:"—", sale:"—", image:"https://roseskinco.com/cdn/shop/files/Lumi2_PDPGallery_Hero_1200x1200.jpg?v=1775486044", href:"https://iplmanufacturer.com/products/lumi-2"},
  {name:"LED Face Mask", niche:"Beauty Tech", source:"Kolodata", score:"1", cog:"$20.12", sale:"$53.99", image:"https://augmentlifeshop.com/cdn/shop/files/LM_06.jpg?v=1753427656&width=1445", href:"https://www.aliexpress.com/item/3256808040642970.html"},
  {name:"Healora Laser Epilator IPL 7", niche:"Beauty Tech", source:"AliExpress", score:"5", cog:"$58.91", sale:"$154.99", image:"https://microless.com/cdn/products/21b9ece287d8ee51af9d3db4bfef8a96-hi.jpg", href:"https://www.aliexpress.com/item/3256807321779743.html"},
  {name:"Aolemon 21J IGBT Sapphire Ice-Cooling IPL", niche:"Beauty Tech", source:"Aolemon / Manufacturer", score:"0", cog:"—", sale:"—", image:"https://img.deplite.com/media/catalog/product/h/ie/hier2aut6x7wpbi1749281707.jpg", href:"https://www.aolemon.com/products/igbt-fast-flash-smart-ipl-hair-removal-device-21j-sapphire-ice-cooling"},
  {name:"Healora Laser Epilator IPL Mini", niche:"Beauty Tech", source:"AliExpress", score:"3", cog:"$47.89", sale:"$125.99", image:"https://roseskinco.com/cdn/shop/files/Lumi2_PDPGallery_Hero_1200x1200.jpg?v=1775486044", href:"https://www.aliexpress.com/item/3256811900571946.html"},
  {name:"Facial and Neck Beauty Device", niche:"Beauty Tech", source:"AliExpress", score:"3", cog:"$31.14", sale:"$81.99", image:"https://www.anlan.com/cdn/shop/files/2-1.jpg?v=1741240752", href:"https://www.aliexpress.com/item/3256811508797946.html"},
  {name:"Micro-Current EMS Face Lifting Massager", niche:"Beauty Tech", source:"Kolodata", score:"1", cog:"$3.49", sale:"$9.99", image:"https://alisa.shop/cdn/shop/products/Mini-Microcurrent-Face-Lift-Device-Roller-Lift-The-face-and-Tighten-The-Skin-Wrinkle-Remover-Toning.webp?v=1704772734", href:"https://www.aliexpress.com/item/3256806809723309.html"},
  {name:"Facial Steamer", niche:"Beauty Tech", source:"Kolodata", score:"5", cog:"$69.95", sale:"$183.99", image:"https://hunghy.com.vn/assets/upload/hunghy/res/san-pham/may-xong-hoi-da-mat-cao-cap-reiwa-wt-300-av1.jpg", href:"https://www.aliexpress.com/item/3256807208481333.html"},
  {name:"Hair Curling Iron Brush", niche:"Beauty", source:"Kolodata", score:"1", cog:"$22.97", sale:"$60.99", image:"https://i5.walmartimages.com/asr/aa603e2c-4a6d-4641-97fd-e8626de6a089.a7f3bf5b9bcf1e366e6587cb3efa1f8a.jpeg?odnBg=FFFFFF&odnHeight=2000&odnWidth=2000", href:"https://www.aliexpress.com/item/3256806061784423.html"},
  {name:"Automatic Hair Curler", niche:"Beauty", source:"Kolodata", score:"1", cog:"$7.87", sale:"$20.99", image:"https://m.media-amazon.com/images/I/71JaJggLfjL._AC_UF894,1000_QL80_.jpg", href:"https://www.aliexpress.com/item/3256807004047737.html"},
  {name:"Folding Eye Massager Mask", niche:"Health & Wellness", source:"Kolodata", score:"1", cog:"$18.75", sale:"$49.99", image:"https://down-br.img.susercontent.com/file/0aaad4a7b76910ca79598db305d0a326", href:"https://www.aliexpress.com/item/3256806628365941.html"},
  {name:"Foot Air Pressure Leg Massager", niche:"Health & Wellness", source:"Kolodata", score:"5", cog:"$76.29", sale:"$200.99", image:"https://tophatters.co/cdn/shop/files/air-compression-calf-feet-thigh-foot-massager-wellness-dailysale-411834.jpg?v=1759854501", href:"https://www.aliexpress.com/item/3256804892519895.html"},
  {name:"Electric Cordless Foot Massager", niche:"Health & Wellness", source:"Kolodata", score:"1", cog:"$0.99", sale:"$2.99", image:"https://renpho.com/cdn/shop/files/D003R_03.png?v=1767695693&width=3840", href:"https://www.aliexpress.com/item/3256806573122557.html"},
  {name:"Electric Vibration Body Massager", niche:"Health & Wellness", source:"Kolodata", score:"1", cog:"$20.48", sale:"$54.99", image:"https://i.ebayimg.com/images/g/idYAAOSwODVn-7qV/s-l400.jpg", href:"https://www.aliexpress.com/item/3256806988551883.html"},
  {name:"Vibration Fitness Platform", niche:"Sport/Fitness", source:"Kolodata", score:"5", cog:"$56.83", sale:"$149.99", image:"https://f.nooncdn.com/p/pzsku/ZA389D0BF265B79DE5957Z/45/1766576667/7bf41c56-17e2-4f7e-bf58-d50df2d5c782.jpg?width=800", href:"https://www.aliexpress.com/item/3256808420619359.html"},
  {name:"Baby Bottle Warmer", niche:"Baby/Maternity", source:"Kolodata", score:"1", cog:"$10.90", sale:"$28.99", image:"https://risi-kids.com/cdn/shop/files/E393B1C8-AD52-41CD-B2F0-00086B7BA5F3.webp?v=1750180128", href:"https://www.aliexpress.com/item/3256810455174048.html"},
  {name:"Portable Mini Air Pump", niche:"Camping/Travel", source:"Kolodata", score:"1", cog:"$22.00", sale:"$57.99", image:"https://cdn.hstatic.net/products/1000152881/0__7__f5c530f1d47044bd9fcd3c395aa4a4a3_fbca9f7d26464e70b3603c2d7b0dbba8.jpg", href:"https://goelevair.store/products/electric-micro-suction-mini-air-pump-outdoor-camping-style-sos-emergency-signal-light-wireless-outdoor-air-pump"},
  {name:"Air Car Vacuum Cleaner", niche:"Auto", source:"Kolodata", score:"1", cog:"$7.00", sale:"$18.99", image:"https://marketplace-static.emag.ro/resources/000/053/276/658/53276658.jpg", href:"https://getaerovac.com/products/v-15pro"},
  {name:"Handheld Vacuum", niche:"Cleaning", source:"Kolodata", score:"5", cog:"$61.42", sale:"$161.99", image:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_100412728?align=center&cdx=536&cdy=402&cox=0&coy=0&ex=536&ey=402&format=jpg&quality=80&resizesource=&sp=yes&strip=yes&trim=&unsharp=1.5x1+0.7+0.02&x=536&y=402", href:"https://www.aliexpress.com/item/3256810227376634.html"},
  {name:"Electric Cordless Blower", niche:"Home/Garden", source:"Kolodata", score:"1", cog:"$23.00", sale:"$60.99", image:"https://product.hstatic.net/1000365242/product/may-thoi-hoi-cam-tay-18v-dewalt-dce100n__6__4281df73fc2440f3a95751fb0c72d554_master.png", href:"https://www.heartlandamerica.com/tornado-tools-mini-air-blower.html"},
  {name:"Night Light Galaxy Projector", niche:"Home/Decor", source:"AliExpress", score:"1", cog:"$8.00", sale:"$21.99", image:"https://media.karousell.com/media/photos/products/2023/4/11/tobeape_portable_star_projecto_1681227661_4e20be56", href:"https://www.establishm.com/products/night-light-galaxy-projector-starry-sky-projector-360-rotate-planetarium-lamp-for-kids-bedroom-valentines-day-gift-wedding-deco"},
  {name:"Portable Juicer Mixer", niche:"Home/Kitchen", source:"Kolodata", score:"1", cog:"$20.80", sale:"$54.99", image:"https://admin.js.qa/cdn-cgi/image/format=webp,quality=80/media/catalog/product/2/0/201002000000065_1.jpg", href:"https://www.aliexpress.com/item/3256807428488644.html"},
  {name:"Propane Torch Weed Burner", niche:"Home/Garden", source:"AliExpress", score:"3", cog:"$30.00", sale:"$78.99", image:"https://m.media-amazon.com/images/I/61QKzzMFo4L._UF894,1000_QL80_.jpg", href:"https://shop.sakerplus.com/funnel/news-sakerplus-high-output-propane-weed-burner-xy"}
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
    href:"https://www.onebeauty.com/sys-pd/29.html"
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
  const [hoveredImage,setHoveredImage]=useState(null);
  const [modalImage,setModalImage]=useState(null);

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
        .tableHeader{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
        .tableHeader .sheetBtn{margin-top:0;flex-shrink:0}
        .tableWrap{margin-top:18px;border:1px solid rgba(210,182,92,.14);border-radius:18px;overflow:auto;background:rgba(30,38,40,.72)}
        .row{display:grid;grid-template-columns:36px minmax(270px,1.55fr) 76px minmax(115px,.72fr) minmax(105px,.7fr) 62px 82px 82px;gap:12px;align-items:center;min-width:940px;padding:12px 14px;border-bottom:1px solid rgba(210,182,92,.08);font-size:12px}
        .row:last-child{border-bottom:0}
        .row.head{font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:#99a39c;background:rgba(54,63,64,.72)}
        .productCell{min-width:0}
        .productName{font-family:Georgia,serif;font-size:18px;line-height:1.16;color:#f3ecda}
        .sourceLink{display:inline-block;margin-top:7px;color:#d9bd66;font-size:10px;line-height:1.2}
        .sourceLink:hover{color:#ffe693;text-decoration:underline}
        .thumbButton{width:62px;height:62px;padding:0;border-radius:12px;border:1px solid rgba(217,187,91,.18);background:rgba(8,10,12,.7);overflow:hidden;cursor:zoom-in;display:grid;place-items:center}
        .thumbButton img{width:100%;height:100%;display:block;object-fit:cover}
        .score{display:inline-grid;place-items:center;width:38px;height:28px;border-radius:9px;background:rgba(229,201,101,.1);border:1px solid rgba(229,201,101,.25);color:#ecd879;font-weight:700}
        .sheetBtn{display:inline-flex;margin-top:18px;padding:11px 15px;border-radius:12px;border:1px solid rgba(210,182,92,.28);background:rgba(47,59,58,.65);color:#efe4c4;font-size:12px}
        .sheetBtn:hover{border-color:rgba(230,202,112,.55);background:rgba(58,71,69,.78)}
        .note{margin-top:18px;padding:16px;border-left:2px solid #d6b85f;background:rgba(45,58,60,.38);color:#b9b3a7;font-size:13px;line-height:1.55}
        .hoverPreview{position:fixed;z-index:80;left:50%;top:52%;transform:translate(-50%,-50%);width:min(46vw,620px);height:min(65vh,620px);padding:14px;border:1px solid rgba(229,201,101,.42);border-radius:22px;background:rgba(7,9,10,.95);box-shadow:0 26px 90px rgba(0,0,0,.58);pointer-events:none;display:grid;place-items:center}
        .hoverPreview img{max-width:100%;max-height:100%;object-fit:contain;border-radius:14px}
        .imageModal{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.72);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px}
        .imageModalInner{position:relative;width:min(92vw,760px);height:min(76vh,760px);border:1px solid rgba(229,201,101,.38);border-radius:22px;background:#0c0f10;box-shadow:0 30px 100px rgba(0,0,0,.72);display:grid;place-items:center;padding:18px}
        .imageModalInner img{max-width:100%;max-height:100%;object-fit:contain;border-radius:14px}
        .modalClose{position:absolute;right:10px;top:10px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.22);background:rgba(0,0,0,.58);color:#fff;font-size:19px;cursor:pointer}
        @media(max-width:900px){
          .team{grid-template-columns:1fr}.stores{grid-template-columns:repeat(2,1fr)}.laserGrid{grid-template-columns:1fr}.heroRow{align-items:flex-start;flex-direction:column}
          .tableHeader{flex-direction:column}.tableHeader .sheetBtn{align-self:flex-start}
          .hoverPreview{display:none}
        }
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
        <div className="lp-kpi"><span>Товары в отборе</span><strong>25</strong></div>
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
        <div className="tableHeader">
          <div>
            <div className="lp-eyebrow">Товары · рабочая таблица</div>
            <h2 className="lp-sectionTitle">25 товаров</h2>
            <p className="lp-subtitle">Текущий отбор перенесён из Google Sheets. У каждого товара есть переход в исходник, миниатюра и увеличенный просмотр изображения.</p>
          </div>
          <a className="sheetBtn" href={sheetUrl} target="_blank" rel="noreferrer">Открыть исходную таблицу ↗</a>
        </div>

        <div className="tableWrap">
          <div className="row head">
            <div>№</div><div>Товар / исходник</div><div>Фото</div><div>Ниша</div><div>Источник</div><div>0–35</div><div>COG</div><div>Продажа</div>
          </div>
          {products.map((p,i)=>(
            <div className="row" key={p.name}>
              <div>{i+1}</div>
              <div className="productCell">
                <div className="productName">{p.name}</div>
                <a className="sourceLink" href={p.href} target="_blank" rel="noreferrer">Посмотреть в исходнике ↗</a>
              </div>
              <div>
                <button
                  className="thumbButton"
                  type="button"
                  aria-label={`Увеличить фото: ${p.name}`}
                  onMouseEnter={()=>setHoveredImage(p)}
                  onMouseLeave={()=>setHoveredImage(null)}
                  onClick={()=>setModalImage(p)}
                >
                  <img src={p.image} alt={p.name} loading="lazy" />
                </button>
              </div>
              <div>{p.niche}</div>
              <div>{p.source}</div>
              <div><span className="score">{p.score}</span></div>
              <div>{p.cog}</div>
              <div>{p.sale}</div>
            </div>
          ))}
        </div>
      </section>

      {hoveredImage && (
        <div className="hoverPreview" aria-hidden="true">
          <img src={hoveredImage.image} alt="" />
        </div>
      )}

      {modalImage && (
        <div className="imageModal" role="dialog" aria-modal="true" aria-label={modalImage.name} onClick={()=>setModalImage(null)}>
          <div className="imageModalInner" onClick={e=>e.stopPropagation()}>
            <button className="modalClose" type="button" aria-label="Закрыть" onClick={()=>setModalImage(null)}>×</button>
            <img src={modalImage.image} alt={modalImage.name} />
          </div>
        </div>
      )}

      <p style={{marginTop:22}}><Link href="/projects">← Назад ко всем проектам</Link></p>
    </Layout>
  );
}
