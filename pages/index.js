const modules = [
  { icon: "◈", title: "Семья", text: "Семейное дерево, профили, цели и важные события", stat: "Наш центр" },
  { icon: "◇", title: "Финансы", text: "Доходы, расходы, долги, резерв и семейные цели", stat: "Финансы" },
  { icon: "◆", title: "Гараж семьи", text: "Hyundai ix35, обслуживание и будущие автомобили", stat: "Авто" },
  { icon: "✦", title: "Shopify / LUMERA", text: "Магазины, товары, тесты и развитие брендов", stat: "Бизнес" },
  { icon: "✧", title: "Taxi & Prague Tours", text: "Прямые клиенты, туры, визитки и бронирования", stat: "Доход" },
  { icon: "◎", title: "Проекты", text: "Студия, приложения, идеи и новые направления", stat: "Будущее" },
];

export default function Home() {
  return (
    <>
      <style jsx global>{`
        *{box-sizing:border-box} html,body,#__next{margin:0;min-height:100%;background:#090a0c;color:#f7f3e8;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
        body{background:radial-gradient(circle at 75% 0%,#2a2111 0,transparent 28%),radial-gradient(circle at 5% 30%,#17191e 0,transparent 32%),#090a0c}
        a{color:inherit;text-decoration:none}.shell{min-height:100vh}.topbar{height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;border-bottom:1px solid rgba(212,175,55,.18);background:rgba(8,9,11,.78);backdrop-filter:blur(18px);position:sticky;top:0;z-index:10}
        .brand{display:flex;align-items:center;gap:12px;font-weight:700;letter-spacing:.08em}.mark{width:34px;height:34px;border:1px solid #c7a84b;border-radius:50%;display:grid;place-items:center;color:#e2c86d;box-shadow:0 0 30px rgba(212,175,55,.15)}.brand small{display:block;font-size:9px;color:#a9a59a;letter-spacing:.24em;margin-top:2px}
        .status{font-size:12px;color:#b9b4a8;display:flex;gap:8px;align-items:center}.dot{width:7px;height:7px;background:#c8ad55;border-radius:50%;box-shadow:0 0 12px #c8ad55}
        .hero{max-width:1320px;margin:0 auto;padding:84px 5vw 44px;display:grid;grid-template-columns:1.25fr .75fr;gap:70px;align-items:end}.eyebrow{color:#c9ad54;text-transform:uppercase;letter-spacing:.25em;font-size:11px;margin-bottom:22px}.hero h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(58px,8vw,112px);font-weight:400;line-height:.86;margin:0;letter-spacing:-.055em}.hero h1 span{display:block;color:#d6ba61;font-style:italic;font-size:.55em;letter-spacing:-.02em;margin-top:16px}.lead{max-width:650px;color:#aaa69d;font-size:17px;line-height:1.7;margin:30px 0 0}
        .quote{border-left:1px solid #a88d3c;padding:12px 0 12px 24px;color:#d8d1bf;font-family:Georgia,serif;font-size:20px;line-height:1.5}.quote small{display:block;font-family:Inter,system-ui;font-size:10px;color:#77736b;letter-spacing:.18em;text-transform:uppercase;margin-top:14px}
        .grid{max-width:1320px;margin:0 auto;padding:26px 5vw 80px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.card{min-height:230px;padding:28px;border:1px solid rgba(217,187,91,.14);background:linear-gradient(145deg,rgba(28,29,32,.72),rgba(12,13,15,.78));border-radius:20px;display:flex;flex-direction:column;transition:.25s ease;position:relative;overflow:hidden}.card:after{content:"";position:absolute;width:140px;height:140px;border:1px solid rgba(205,175,80,.08);border-radius:50%;right:-65px;top:-70px}.card:hover{transform:translateY(-4px);border-color:rgba(217,187,91,.38);background:linear-gradient(145deg,rgba(35,34,31,.9),rgba(14,15,17,.9))}.icon{color:#d5b85e;font-size:27px}.card h3{font-family:Georgia,serif;font-size:25px;font-weight:400;margin:30px 0 9px}.card p{color:#8f8c85;line-height:1.55;font-size:14px;margin:0;max-width:310px}.card .meta{margin-top:auto;padding-top:22px;color:#c9ad54;font-size:10px;text-transform:uppercase;letter-spacing:.2em}
        .footer{max-width:1320px;margin:0 auto;padding:0 5vw 34px;color:#575750;font-size:10px;letter-spacing:.14em;text-transform:uppercase}
        @media(max-width:850px){.topbar{height:62px;padding:0 20px}.hero{grid-template-columns:1fr;padding:58px 22px 28px;gap:34px}.hero h1{font-size:68px}.lead{font-size:15px}.quote{display:none}.grid{grid-template-columns:1fr;padding:18px 18px 55px}.card{min-height:190px}.status span:last-child{display:none}}
      `}</style>
      <div className="shell">
        <header className="topbar">
          <div className="brand"><div className="mark">Ж</div><div>ЖИЗНЬ<small>LIFE PROJECT</small></div></div>
          <div className="status"><i className="dot"></i><span>Семейная система</span></div>
        </header>
        <main>
          <section className="hero">
            <div><div className="eyebrow">Личный семейный центр управления</div><h1>Жизнь<span>в одном месте</span></h1><p className="lead">Семья, финансы, автомобили, бизнес и большие цели — единая система, которая растёт вместе с нами.</p></div>
            <div className="quote">«Не просто список проектов. Карта того, что мы строим для семьи.»<small>Life Project · Prague</small></div>
          </section>
          <section className="grid">{modules.map((m)=><div className="card" key={m.title}><div className="icon">{m.icon}</div><h3>{m.title}</h3><p>{m.text}</p><div className="meta">{m.stat} →</div></div>)}</section>
        </main>
        <footer className="footer">Life Project · первая визуальная версия</footer>
      </div>
    </>
  );
}