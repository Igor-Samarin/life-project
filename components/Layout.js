import Link from "next/link";

export const mainSections = [
  { href: "/family", label: "Семья", icon: "♧" },
  { href: "/finances", label: "Финансы", icon: "◈" },
  { href: "/garage", label: "Гараж семьи", icon: "▣" },
  { href: "/projects", label: "Проекты", icon: "▤" },
];

export default function Layout({ children, active }) {
  return (
    <>
      <style jsx global>{`
        *{box-sizing:border-box}
        html,body,#__next{margin:0;min-height:100%;background:#090a0c;color:#f7f3e8;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
        body{background:
          radial-gradient(circle at 78% 0%,rgba(79,61,24,.34) 0,transparent 27%),
          radial-gradient(circle at 0% 38%,rgba(28,42,55,.22) 0,transparent 32%),
          linear-gradient(180deg,#0a0b0d 0%,#08090b 100%)}
        a{color:inherit;text-decoration:none}
        button{font:inherit}
        .lp-shell{min-height:100vh}
        .lp-topbar{height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;border-bottom:1px solid rgba(212,175,55,.18);background:rgba(8,9,11,.84);backdrop-filter:blur(18px);position:sticky;top:0;z-index:20}
        .lp-brand{display:flex;align-items:center;gap:12px;font-weight:700;letter-spacing:.08em}
        .lp-mark{width:36px;height:36px;border:1px solid #c7a84b;border-radius:50%;display:grid;place-items:center;color:#e2c86d;box-shadow:0 0 30px rgba(212,175,55,.15)}
        .lp-brand small{display:block;font-size:9px;color:#a9a59a;letter-spacing:.24em;margin-top:2px}
        .lp-status{font-size:12px;color:#b9b4a8;display:flex;gap:8px;align-items:center}
        .lp-dot{width:7px;height:7px;background:#c8ad55;border-radius:50%;box-shadow:0 0 12px #c8ad55}
        .lp-navWrap{border-bottom:1px solid rgba(212,175,55,.10);background:rgba(10,11,13,.68)}
        .lp-nav{max-width:1320px;margin:0 auto;padding:12px 5vw;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
        .lp-navItem{min-height:52px;display:flex;align-items:center;gap:10px;padding:0 15px;border:1px solid rgba(217,187,91,.12);border-radius:14px;background:rgba(20,21,24,.56);color:#9e9a91;transition:.2s ease}
        .lp-navItem:hover{border-color:rgba(217,187,91,.34);color:#f1ead8}
        .lp-navItem.active{box-shadow:inset 0 0 25px rgba(212,175,55,.14),0 0 18px rgba(212,175,55,.08);color:#f4e8bd;border-color:rgba(217,187,91,.40);background:linear-gradient(145deg,rgba(49,43,28,.78),rgba(17,18,21,.88))}
        .lp-navIcon{color:#d2b65c}
        .lp-main{max-width:1450px;margin:0 auto;padding:48px 5vw 80px}
        .lp-eyebrow{color:#c9ad54;text-transform:uppercase;letter-spacing:.22em;font-size:10px;margin-bottom:14px}
        .lp-title{font-family:Georgia,"Times New Roman",serif;font-size:clamp(44px,5.8vw,78px);font-weight:400;line-height:.95;margin:0;letter-spacing:-.045em}
        .lp-subtitle{max-width:760px;color:#98948b;font-size:15px;line-height:1.7;margin:20px 0 0}
        .lp-sectionTitle{font-family:Georgia,serif;font-size:28px;font-weight:400;margin:0 0 16px}
        .lp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:32px}
        .cinemaArt{overflow:hidden;position:relative}
        .cinemaArt svg{display:block;width:100%;height:100%}
        .artShine{position:absolute;inset:0;background:linear-gradient(130deg,rgba(255,221,138,.12),transparent 42%,rgba(0,0,0,.35));pointer-events:none}
        .lp-visual{height:170px;margin:-24px -24px 18px;position:relative;display:grid;place-items:center;overflow:hidden;background:radial-gradient(circle at 55% 35%,rgba(246,191,87,.38),transparent 44%),linear-gradient(135deg,#35301f,#101418 75%);border-bottom:1px solid rgba(226,183,80,.25)}
        .lp-visual:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(115deg,transparent 0 24px,rgba(255,255,255,.025) 25px 26px)}
        .lp-visual span{font-size:75px;filter:drop-shadow(0 15px 12px #0009);position:relative;transform:rotate(-5deg)}
        .lp-card{min-height:300px;padding:24px;border:1px solid rgba(217,187,91,.14);background:linear-gradient(145deg,rgba(28,29,32,.72),rgba(12,13,15,.78));border-radius:18px;display:flex;flex-direction:column;position:relative;overflow:hidden}
        .lp-card:after{content:"";position:absolute;width:120px;height:120px;border:1px solid rgba(205,175,80,.07);border-radius:50%;right:-55px;top:-62px}
        .lp-cardLabel{font-size:10px;color:#c9ad54;text-transform:uppercase;letter-spacing:.18em}
        .lp-card h3{font-family:Georgia,serif;font-size:25px;font-weight:400;margin:12px 0 8px}
        .lp-card p{color:#8f8c85;line-height:1.55;font-size:13px;margin:0;max-width:330px}
        .lp-card:hover{transform:translateY(-3px);border-color:#c8a850;box-shadow:0 15px 40px #0008}
        .lp-card{transition:transform .2s,border-color .2s,box-shadow .2s}
        .lp-cardMeta{margin-top:auto;padding-top:20px;color:#bbb4a3;font-size:12px}
        .lp-panel{margin-top:34px;padding:24px;border:1px solid rgba(217,187,91,.13);border-radius:20px;background:rgba(15,16,18,.74)}
        .lp-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:24px}
        .lp-kpi{padding:18px;border:1px solid rgba(217,187,91,.10);border-radius:15px;background:rgba(24,25,28,.62)}
        .lp-kpi span{display:block;color:#858178;font-size:11px;text-transform:uppercase;letter-spacing:.12em}
        .lp-kpi strong{display:block;margin-top:10px;font-size:24px;font-family:Georgia,serif;font-weight:400}
        .lp-footer{max-width:1320px;margin:0 auto;padding:0 5vw 34px;color:#575750;font-size:10px;letter-spacing:.14em;text-transform:uppercase}
        @media(max-width:900px){
          .lp-topbar{height:62px;padding:0 20px}
          .lp-visual{height:125px}
          .lp-nav{padding:10px 16px;grid-template-columns:repeat(2,1fr)}
          .lp-navItem{min-height:48px;padding:0 12px;font-size:13px}
          .lp-main{padding:36px 18px 58px}
          .lp-grid{grid-template-columns:1fr 1fr}
          .lp-kpis{grid-template-columns:repeat(2,1fr)}
          .lp-status span:last-child{display:none}
        }
        @media(max-width:600px){.lp-grid{grid-template-columns:1fr}.lp-card{min-height:270px}.lp-visual{height:150px}}
        @media(max-width:420px){
          .lp-nav{grid-template-columns:1fr 1fr;gap:8px}
          .lp-navItem{font-size:12px}
          .lp-kpis{grid-template-columns:1fr 1fr}
        }
      `}</style>
      <div className="lp-shell">
        <header className="lp-topbar">
          <Link href="/" className="lp-brand">
            <div className="lp-mark">Ж</div>
            <div>ЖИЗНЬ<small>LIFE PROJECT</small></div>
          </Link>
          <div className="lp-status"><i className="lp-dot"></i><span>Система активна</span></div>
        </header>
        <div className="lp-navWrap">
          <nav className="lp-nav" aria-label="Главные разделы">
            {mainSections.map((item) => (
              <Link key={item.href} href={item.href} className={`lp-navItem ${active === item.href ? "active" : ""}`}>
                <span className="lp-navIcon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <main className="lp-main">{children}</main>
        <footer className="lp-footer">Life Project · стратегия реальной жизни</footer>
      </div>
    </>
  );
}
