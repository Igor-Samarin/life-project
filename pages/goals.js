import Link from "next/link";
import Layout from "../components/Layout";
import ProjectArt from "../components/ProjectArt";

const horizons=[
 {art:"Shopify",time:"3 месяца",name:"Фундамент",points:["Запустить и проверить продажи первого Shopify-магазина LUMERA.","Наладить регулярный учёт семейных денег и резерв.","Собрать управляемую систему проектов с понятными ответственными и сроками."]},
 {art:"Следующая машина",time:"6 месяцев",name:"Первый результат",points:["Цель по автомобилю: BMW X6, предпочтительно чёрный, автомат, кожаный салон; сначала проверить бюджет и пригодность для работы.","Масштабировать проверенные e-commerce направления.","Сокращать ежедневную ручную работу через AI и делегирование."]},
 {art:"Финансы",time:"1 год",name:"Устойчивость",points:["Ориентир: совокупный доход от проектов около €10 000 в месяц — цель, не прогноз.","Сформировать финансовую подушку и более предсказуемый денежный поток.","Вернуться к следующему автомобильному этапу: Lexus, если экономика позволяет."]},
 {art:"Gift Travel Shop",time:"2–3 года",name:"Моя будущая жизнь",points:["Построить бизнес-систему, где я преимущественно принимаю управленческие и финансовые решения.","Больше свободного времени для семьи, путешествий и интересов.","Продвинуться к собственному комфортному дому и премиальным автомобилям без ущерба финансовой устойчивости.","Развивать несколько самостоятельных направлений с командой и AI-автоматизацией."]},
 {art:"Lamborghini Urus",time:"5 лет",name:"Большие цели",points:["Семейный фонд и сильная диверсифицированная бизнес-экосистема.","Lamborghini Urus как долгосрочная автомобильная мечта.","Больше свободы выбора места жизни, путешествий и личных занятий."]},
 {art:"Family Business Network",time:"10 лет",name:"Наследие",points:["Самостоятельная, устойчивая семейная система бизнесов.","Финансовая независимость и возможность помогать близким.","Жизнь, в которой работа — выбор, а не необходимость."]}
];
export default function Goals(){return <Layout>
 <div className="goalsHero"><div className="futureBackdrop" aria-hidden="true"><span className="futureLight"/></div><div className="goalsIntro"><div className="lp-eyebrow">Личный план · LIFE PROJECT</div><h1>Мои цели<br/><em>и моя будущая жизнь</em></h1><p>Моя карта будущего · 2–3 года и дальше</p></div></div>
 <div className="goalsBody"><div className="goalsLead"><h2>Горизонты планирования</h2><p>Шесть этапов от первых результатов до долгосрочной свободы.</p></div><div className="timeTrack">{horizons.map((h,i)=><a href={"#goal-"+i} key={h.time} className="timeStop"><span className="timeDot">{["✦","🚘","◆","✈","★","♛"][i]}</span><strong>{h.time}</strong><small>{["Старт","Рост","Доход","Свобода","Мечты","Наследие"][i]}</small></a>)}</div><div className="goalsGrid">{horizons.map((h,i)=><article className="goalCard" id={"goal-"+i} key={h.time}><ProjectArt kind={h.art} className="goalImage"/><div className="goalNumber">{String(i+1).padStart(2,"0")}</div><div className="goalTime">{h.time}</div><h3>{h.name}</h3><ul>{h.points.map(p=><li key={p}>{p}</li>)}</ul></article>)}</div>
 <div className="goalLinks"><Link href="/projects">Проекты и развитие →</Link><Link href="/finances">Финансовый план →</Link><Link href="/garage">Автомобильные цели →</Link><Link href="/family">Семейные планы →</Link></div></div>
 <style jsx>{`
 .goalsHero{position:relative;min-height:185px;overflow:hidden;border-radius:18px;background:linear-gradient(115deg,#171716,#222019 60%,#10151b);border:1px solid #bda05a66;display:flex;align-items:center}
 .futureBackdrop{position:absolute;inset:0;background:radial-gradient(ellipse at 82% 45%,#a78b4a55,transparent 42%),linear-gradient(120deg,#101114,#27251c 70%,#131920)}
 .futureBackdrop:after{content:"";position:absolute;right:7%;top:-80px;width:240px;height:310px;border:1px solid #d9b96825;border-radius:50%;transform:rotate(-25deg);box-shadow:0 0 90px #d5b36320}
 .goalsIntro{position:relative;z-index:1;padding:24px 30px;max-width:760px}
 .goalsIntro h1{font:normal clamp(29px,4vw,44px)/1.06 Georgia,serif;margin:0}.goalsIntro em{font-style:normal;color:#e6c478}
 .goalsIntro p{color:#c5bcaa;line-height:1.4;font-size:12px;margin:10px 0 0}
 .goalsLead{margin:28px 0 16px}.goalsLead h2{font:normal 31px Georgia,serif;margin:0 0 10px}.goalsLead p{color:#a7a096;line-height:1.6}
 .goalsGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
 .goalCard{padding:19px;overflow:hidden;border:1px solid #ad925344;border-radius:19px;background:linear-gradient(145deg,#242118,#121417);position:relative}
 .goalCard :global(.goalImage){height:135px;margin:-19px -19px 16px;border-bottom:1px solid #d2b36c66}
 .goalNumber{position:absolute;right:25px;top:19px;font:35px Georgia,serif;color:#b99a5230}
 .goalTime{font-size:11px;color:#dbbb71;letter-spacing:.13em;text-transform:uppercase}
 .goalCard h3{font:normal 23px Georgia,serif;margin:9px 0 12px}
 .goalCard ul{padding-left:18px;margin:0;color:#c5bdad;font-size:12px;line-height:1.65}.goalCard li{margin-bottom:8px}
 .goalLinks{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.goalLinks :global(a){padding:13px 16px;border-radius:12px;border:1px solid #c7a76577;color:#ecd18c;background:#2b2419}
 .timeTrack{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:9px;margin:0 0 22px}
 .timeStop{min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;min-height:110px;padding:12px 4px;text-decoration:none;text-align:center;color:#f2d68f;border:1px solid #c3a36177;border-radius:14px;background:radial-gradient(circle at 50% 0%,#bd914955,transparent 75%),linear-gradient(140deg,#382d1b,#17191b);box-shadow:inset 0 1px 0 #f8da8c22;transition:transform .2s,border-color .2s}
 .timeStop:nth-child(2){background:linear-gradient(140deg,#293f47,#1a1b20)}
 .timeStop:nth-child(3){background:linear-gradient(140deg,#42351d,#18191d)}
 .timeStop:nth-child(4){background:linear-gradient(140deg,#2a4051,#191b20)}
 .timeStop:nth-child(5){background:linear-gradient(140deg,#463126,#1c1b1e)}
 .timeStop:nth-child(6){background:linear-gradient(140deg,#3a3450,#191a20)}
 .timeStop:hover{transform:translateY(-3px);border-color:#f3d587}
 .timeDot{font-size:28px;line-height:1.1;filter:drop-shadow(0 0 9px #e9c97a66)}
 .timeStop strong{font-size:12px;white-space:nowrap}.timeStop small{font-size:10px;color:#c9c0af}
 .goalCard{scroll-margin-top:85px;transition:border-color .2s,transform .2s}
 .goalCard:hover{border-color:#d7b66a;transform:translateY(-2px)}
 @media(max-width:700px){.goalsGrid{grid-template-columns:1fr}.goalsIntro{padding:21px;max-width:100%}.goalsHero{min-height:165px}.timeTrack{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.timeStop{min-height:94px;padding:9px 2px}.timeDot{font-size:24px}.timeStop strong{font-size:11px}}
 `}</style>
 </Layout>}
