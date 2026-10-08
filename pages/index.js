import ProjectArt from "../components/ProjectArt";
import Link from "next/link";
import Layout from "../components/Layout";
import {useState} from "react";

const sections = [
  { href: "/family", icon: "🌳", title: "Семья", text: "Люди, семейное дерево, события, документы и общие цели.", tag: "Раздел 01" },
  { href: "/finances", icon: "💎", title: "Финансы", text: "Доходы, расходы, долги, резерв, цели и прогнозы.", tag: "Раздел 02" },
  { href: "/garage", icon: "🚘", title: "Гараж семьи", text: "Автомобили, обслуживание, расходы, документы и планы на замену.", tag: "Раздел 03" },
  { href: "/projects", icon: "🤖", title: "Проекты", text: "Shopify, Taxi / Prague Tours и остальные бизнес-направления.", tag: "Раздел 04" },
  { href: "/private-vault", icon: "🔒", title: "Личный сейф", text: "Закрытый раздел. Пока доступен только безопасный предварительный экран.", tag: "PRIVATE VAULT" },
];

export default function Home() {
  const [cardStyle,setCardStyle]=useState("cinema");
  return (
    <Layout home>
      <section className="welcomeHero">
        <div className="welcomeVisual"><ProjectArt kind="Lamborghini Urus" className="welcomeCar"/></div>
        <div className="welcomeContent">
          <div className="lp-eyebrow">LIFE PROJECT · ЛИЧНАЯ ЭКОСИСТЕМА</div>
          <h1>Добро пожаловать<br/><em>в твою империю.</em></h1>
          <p>Все важные направления жизни в одном месте. Управляй проектами, семьёй, финансами и будущими целями — в своём темпе.</p>
          <div className="heroButtons"><Link href="/projects">Перейти к проектам →</Link><Link href="/goals">Мои цели ↗</Link></div>
        </div>
      </section>
      <div className="homeBelow"><section className="lp-panel">
        <h2 className="lp-sectionTitle">Центр управления</h2>
        <p className="lp-subtitle">Быстрые переходы к действиям. Выбери направление — откроется соответствующий рабочий раздел.</p>
        <div className="lp-controlLinks">
          <Link href="/projects" className="lp-controlLink"><ProjectArt kind="Life Project" className="controlArt"/><strong>Проекты</strong><span>Все направления и решения →</span></Link>
          <Link href="/family" className="lp-controlLink"><ProjectArt kind="Семья" className="controlArt"/><strong>Семья</strong><span>Семейные цели и события →</span></Link>
          <Link href="/finances" className="lp-controlLink"><ProjectArt kind="Финансы" className="controlArt"/><strong>Финансы</strong><span>Доходы, расходы и резерв →</span></Link>
          <Link href="/garage" className="lp-controlLink"><ProjectArt kind="Гараж семьи" className="controlArt"/><strong>Гараж семьи</strong><span>Автомобили и планы →</span></Link>
        </div>
      </section>
      <section className="lp-panel priorityPanel">
        <div className="priorityHead"><div><div className="lp-eyebrow">Всегда перед глазами</div><h2 className="lp-sectionTitle">Приоритетные проекты</h2></div><Link href="/projects">Все проекты →</Link></div>
        <p className="lp-subtitle">Семь направлений для быстрого перехода. Порядок — текущий ориентир, а не автоматически рассчитанный рейтинг.</p>
        <div className="priorityGrid">
          <Link href="/projects/shopify"><ProjectArt kind="Shopify" className="priorityArt"/><div><small>01 · Главный бизнес-фокус</small><strong>Shopify / LUMERA</strong></div></Link>
          <Link href="/projects"><ProjectArt kind="Life Project" className="priorityArt"/><div><small>02 · Система управления</small><strong>LIFE PROJECT</strong></div></Link>
          <Link href="/projects"><ProjectArt kind="Taxi / Private Driver / Prague Tours" className="priorityArt"/><div><small>03 · Текущий доход</small><strong>Taxi / Prague Tours</strong></div></Link>
          <Link href="/projects"><ProjectArt kind="AI Product Monetization" className="priorityArt"/><div><small>04 · Личный AI</small><strong>Personal AI Companion</strong></div></Link>
          <Link href="/projects"><ProjectArt kind="International Driver Platform · Europe & USA" className="priorityArt"/><div><small>05 · Подготовка</small><strong>Driver Platform</strong></div></Link>
          <Link href="/projects"><ProjectArt kind="Trading Bots" className="priorityArt"/><div><small>06 · Исследование</small><strong>Trading Bots</strong></div></Link>
          <Link href="/projects"><ProjectArt kind="Family Business Network" className="priorityArt"/><div><small>07 · Развитие</small><strong>Family Business Network</strong></div></Link>
        </div>
      </section>
      <section className="lp-panel">
        <h2 className="lp-sectionTitle">Быстрый доступ</h2>
        <p className="lp-subtitle">Открывай нужный раздел сразу с главной. Все переходы ведут на существующие страницы приложения.</p>
        <div className="quickAccess">
          <Link href="/projects/shopify/lumera" className="quickTile"><ProjectArt kind="Shopify" className="quickArt"/><div><strong>Магазин LUMERA</strong><span>Товары, витрина и запуск →</span></div></Link>
          <Link href="/projects/shopify" className="quickTile"><ProjectArt kind="Проекты" className="quickArt"/><div><strong>Shopify · магазины</strong><span>Развитие e-commerce →</span></div></Link>
          <Link href="/projects/team" className="quickTile"><ProjectArt kind="Family Business Network" className="quickArt"/><div><strong>Команда проектов</strong><span>Ответственные и задачи →</span></div></Link>
          <Link href="/projects" className="quickTile"><ProjectArt kind="Life Project" className="quickArt"/><div><strong>Очередь проектов</strong><span>Активные и будущие идеи →</span></div></Link>
          <Link href="/family" className="quickTile"><ProjectArt kind="Семья" className="quickArt"/><div><strong>Семья</strong><span>Планы и события →</span></div></Link>
          <Link href="/finances" className="quickTile"><ProjectArt kind="Семейный доход" className="quickArt"/><div><strong>Семейный бюджет</strong><span>Доходы и расходы →</span></div></Link>
          <Link href="/garage" className="quickTile"><ProjectArt kind="Hyundai ix35" className="quickArt"/><div><strong>Текущий автомобиль</strong><span>Hyundai ix35 и сервис →</span></div></Link>
          <Link href="/garage" className="quickTile"><ProjectArt kind="Lamborghini Urus" className="quickArt"/><div><strong>Автомобильная мечта</strong><span>Цели семейного гаража →</span></div></Link>
        </div>
      </section>
      </div>
      <style jsx>{`
        .priorityHead{display:flex;align-items:center;justify-content:space-between;gap:15px}.priorityHead :global(a){font-size:12px;color:#ebcc80}
        .priorityGrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px;margin-top:23px}
        .priorityGrid :global(a){overflow:hidden;display:flex;flex-direction:column;border:1px solid #bda16066;border-radius:15px;background:linear-gradient(135deg,#30271b,#111317);transition:.2s}
        .priorityGrid :global(a:hover){transform:translateY(-3px);border-color:#e9c574}
        .priorityGrid :global(.priorityArt){height:100px;min-height:100px}
        .priorityGrid :global(a>div:last-child){padding:12px;display:flex;flex-direction:column;gap:6px}
        .priorityGrid :global(small){font-size:10px;color:#baaa8b}
        .priorityGrid :global(strong){font-size:13px;color:#f1d28c}
        @media(max-width:850px){.priorityGrid{grid-template-columns:repeat(2,minmax(0,1fr))}}

        .welcomeHero{min-height:calc(100svh - 72px);position:relative;overflow:hidden;border:0;border-radius:0;background:#090b0d;display:flex;align-items:center;width:100%}
        .welcomeVisual{position:absolute;inset:0;opacity:.82}
        .welcomeVisual :global(.welcomeCar){height:100%;min-height:100%;background-position:center 60%!important}
        .welcomeHero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#0b0d10 0%,#0b0d10eb 34%,#0b0d1040 80%,#0b0d1033);pointer-events:none}
        .welcomeContent{position:relative;z-index:1;padding:65px max(6vw,24px);max-width:850px}
        .welcomeContent h1{font:normal clamp(38px,5vw,68px)/1.08 Georgia,serif;letter-spacing:-.03em;margin:0}
        .welcomeContent em{font-style:normal;color:#e8c775}
        .welcomeContent p{max-width:450px;color:#c4b9a6;line-height:1.7;font-size:14px;margin:22px 0}
        .heroButtons{display:flex;flex-wrap:wrap;gap:12px}
        .heroButtons :global(a){padding:13px 19px;border:1px solid #d8b96b99;border-radius:11px;background:#312717dd;color:#f4dda4;font-size:13px}
        .heroButtons :global(a:hover){background:#544020}
        .homeBelow{max-width:1450px;margin:0 auto;padding:15px 5vw 0}
        .sectionIntro{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-top:42px}
        .styleSwitch{display:flex;align-items:center;gap:7px;color:#aaa397;font-size:11px}
        .styleSwitch button{border:1px solid #a48c5366;background:#161719;color:#b8aa86;padding:9px 12px;border-radius:10px;cursor:pointer}
        .styleSwitch button.selected{background:#4a3920;color:#f6df9e;border-color:#e2c277}
        .homeSections.compact :global(.lp-card){min-height:175px;padding:18px}
        .homeSections.compact :global(.lp-visual){height:80px;margin:-18px -18px 12px}
        .homeSections.compact :global(.lp-card h3){font-size:21px;margin:8px 0}
        @media(max-width:700px){.welcomeHero{min-height:calc(100svh - 62px)}.welcomeVisual{inset:0;opacity:.62}.welcomeContent{padding:32px 24px}.welcomeHero:after{background:linear-gradient(0deg,#090b0df0 0%,#090b0d88 65%,#090b0d44)}.homeBelow{padding:12px 18px 0}}

        .lp-controlLinks{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:25px}
        :global(.lp-controlLink){padding:18px;border:1px solid #a18a4e66;border-radius:15px;background:linear-gradient(140deg,#332a1a,#131519);display:flex;flex-direction:column;gap:12px;min-height:205px;overflow:hidden;transition:.2s}
        :global(.lp-controlLink:hover){border-color:#ebc66c;transform:translateY(-3px)}
        :global(.controlArt){height:112px;margin:-18px -18px 2px;border-bottom:1px solid #d6b66155}
        .quickAccess{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin-top:24px}
        .quickAccess :global(a){display:flex;flex-direction:column;overflow:hidden;border-radius:17px;border:1px solid #bda16077;background:linear-gradient(120deg,#282419,#121416);color:#f0dcaa;min-height:210px;transition:.2s}
        .quickAccess :global(.quickArt){height:135px;min-height:135px;border-bottom:1px solid #e4bd6977}
        .quickAccess :global(.quickTile>div:last-child){display:flex;flex-direction:column;gap:8px;padding:15px}
        .quickAccess :global(strong){font-size:15px;color:#f6d88c}
        .quickAccess :global(a:hover){border-color:#edcd7b}
        .quickAccess :global(span){color:#c6ae75;font-size:12px}
        @media(max-width:1000px){.quickAccess{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:440px){.quickAccess{gap:10px}.quickAccess :global(.quickArt){height:105px;min-height:105px}.quickAccess :global(.quickTile>div:last-child){padding:11px}.quickAccess :global(strong){font-size:13px}}
        :global(.lp-controlLink strong){font-size:16px;color:#f3db95}
        :global(.lp-controlLink span){font-size:12px;color:#b3ada0}
        @media(max-width:850px){.lp-controlLinks{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:420px){.lp-controlLinks{grid-template-columns:1fr}}
      `}</style>
    </Layout>
  );
}
