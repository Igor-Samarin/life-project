import {useState} from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const stages = ["Кандидат","На рассмотрении","Проверка","Партнёр","Архив"];
const tiers = [
  {title:"Базовая",body:"Публичная профессиональная деятельность, организации и подтверждённые источники."},
  {title:"Деловая",body:"Реестры компаний, полномочия, санкции и документированные деловые связи."},
  {title:"Углублённая",body:"Проверка по конкретной деловой цели, с правовым основанием и ручным подтверждением."}
];
export default function IntelligenceCenter(){
 const [query,setQuery]=useState("");
 const [type,setType]=useState("person");
 const [tier,setTier]=useState(0);
 return <Layout>
  <div className="eyebrow">LIFE PROJECT / ЛЮДИ И СВЯЗИ</div>
  <h1>Intelligence <em>Center</em></h1>
  <p className="intro">Единый центр проверки кандидатов, партнёров и компаний. Только законные источники, проверяемые факты и контроль доступа.</p>
  <div className="notice"><strong>Первая версия интерфейса.</strong> Живой поиск, защищённая база и автоматический мониторинг пока не подключены. Никакие персональные данные не отправляются и не сохраняются.</div>
  <section className="panel">
   <h2>Расширенный поиск</h2>
   <div className="switch"><button className={type==="person"?"on":""} onClick={()=>setType("person")}>Человек</button><button className={type==="company"?"on":""} onClick={()=>setType("company")}>Компания</button></div>
   <label htmlFor="intel-query">{type==="person"?"Публичное профессиональное имя или профиль":"Название компании или регистрационный номер"}</label>
   <div className="search"><input id="intel-query" value={query} onChange={e=>setQuery(e.target.value)} placeholder={type==="person"?"Например: имя и организация":"Например: компания или IČO"} /><button disabled title="Источник данных ещё не подключён">Найти</button></div>
   <small>Подключение официальных источников — следующий этап. Поиск не выполняется.</small>
  </section>
  <section className="panel"><h2>Уровень проверки</h2><div className="tiers">{tiers.map((item,i)=><button key={item.title} className={tier===i?"chosen":""} onClick={()=>setTier(i)}><span>0{i+1}</span><strong>{item.title}</strong><small>{item.body}</small></button>)}</div><p className="muted">Выбранный режим: {tiers[tier].title}. Проверка требует определённой цели и соответствующего правового основания.</p></section>
  <section className="panel"><h2>Рабочая база контактов</h2><div className="stages">{stages.map((s,i)=><div key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span><small>Нет записей</small></div>)}</div><p className="muted">Карточки кандидатов, деловые связи, проекты, история проверок и мониторинг появятся после подключения закрытой базы с авторизацией.</p></section>
  <section className="panel"><h2>Принципы защиты</h2><p className="muted">Доступ владельца по умолчанию; другие участники только по явному разрешению. Подтверждение источников, сроки хранения, журнал доступа, исправление и удаление данных. Частная переписка, домашние адреса и скрытый сбор семейной информации не допускаются.</p><Link href="/projects/team" className="back">← Команда проектов</Link></section>
  <style jsx>{`
   .eyebrow{font-size:11px;letter-spacing:.2em;color:#d7b968;margin-bottom:15px}
   h1{font:normal clamp(37px,6vw,70px) Georgia,serif;margin:0}h1 em{font-style:normal;color:#dfbd6e}
   .intro{color:#b5b0a5;line-height:1.7;max-width:740px}
   .notice{padding:17px;border:1px solid #8d7543;border-radius:14px;background:#2b2417;color:#e7d6a8;line-height:1.6;margin:24px 0}
   .panel{padding:23px;border:1px solid #9b834455;border-radius:18px;background:#161719;margin:20px 0}
   h2{font:normal 27px Georgia,serif;margin:0 0 20px}
   .switch{display:flex;gap:9px;margin-bottom:20px}.switch button,.search button{border:1px solid #9d844d;background:#2a251c;color:#e9d9b3;border-radius:9px;padding:11px 17px;cursor:pointer}.switch .on{background:#765c2e;color:#fff}
   label{display:block;color:#d9c18c;font-size:13px;margin-bottom:10px}.search{display:flex;gap:10px}.search input{flex:1;min-width:0;padding:14px;border:1px solid #7c6a4b;background:#0e1013;color:#fff;border-radius:10px;font-size:15px}.search button:disabled{opacity:.45;cursor:not-allowed}
   small,.muted{font-size:12px;color:#a49c8c;line-height:1.6}.search+small{display:block;margin-top:10px}
   .tiers,.stages{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.tiers button{text-align:left;display:flex;flex-direction:column;gap:10px;border:1px solid #62573f;border-radius:13px;background:#1e1e1d;color:#f0e6d0;padding:18px;cursor:pointer}.tiers button.chosen{border-color:#e1c27b;background:#30281b}.tiers span{color:#cba95d}.tiers strong{font-size:17px}.tiers small{color:#c0b6a3}
   .stages{grid-template-columns:repeat(5,minmax(0,1fr))}.stages div{display:flex;flex-direction:column;gap:10px;border:1px solid #5c503b;border-radius:12px;padding:14px}.stages b{color:#e1c27b}.stages span{font-size:13px}.back{display:inline-block;margin-top:15px;color:#e1c27b}
   @media(max-width:760px){.tiers{grid-template-columns:1fr}.stages{grid-template-columns:repeat(2,minmax(0,1fr))}.panel{padding:17px}.search{flex-direction:column}}
  `}</style>
 </Layout>
}
