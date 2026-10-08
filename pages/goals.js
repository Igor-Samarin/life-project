import Link from "next/link";
import Layout from "../components/Layout";
import ProjectArt from "../components/ProjectArt";

const horizons=[
 {time:"3 месяца",name:"Фундамент",points:["Запустить и проверить продажи первого Shopify-магазина LUMERA.","Наладить регулярный учёт семейных денег и резерв.","Собрать управляемую систему проектов с понятными ответственными и сроками."]},
 {time:"6 месяцев",name:"Первый результат",points:["Цель по автомобилю: BMW X6, предпочтительно чёрный, автомат, кожаный салон; сначала проверить бюджет и пригодность для работы.","Масштабировать проверенные e-commerce направления.","Сокращать ежедневную ручную работу через AI и делегирование."]},
 {time:"1 год",name:"Устойчивость",points:["Ориентир: совокупный доход от проектов около €10 000 в месяц — цель, не прогноз.","Сформировать финансовую подушку и более предсказуемый денежный поток.","Вернуться к следующему автомобильному этапу: Lexus, если экономика позволяет."]},
 {time:"2–3 года",name:"Моя будущая жизнь",points:["Построить бизнес-систему, где я преимущественно принимаю управленческие и финансовые решения.","Больше свободного времени для семьи, путешествий и интересов.","Продвинуться к собственному комфортному дому и премиальным автомобилям без ущерба финансовой устойчивости.","Развивать несколько самостоятельных направлений с командой и AI-автоматизацией."]},
 {time:"5 лет",name:"Большие цели",points:["Семейный фонд и сильная диверсифицированная бизнес-экосистема.","Lamborghini Urus как долгосрочная автомобильная мечта.","Больше свободы выбора места жизни, путешествий и личных занятий."]},
 {time:"10 лет",name:"Наследие",points:["Самостоятельная, устойчивая семейная система бизнесов.","Финансовая независимость и возможность помогать близким.","Жизнь, в которой работа — выбор, а не необходимость."]}
];
export default function Goals(){return <Layout>
 <div className="goalsHero"><ProjectArt kind="Lamborghini Urus" className="goalsArt"/><div className="goalsIntro"><div className="lp-eyebrow">Личный план · LIFE PROJECT</div><h1>Мои цели<br/><em>и моя будущая жизнь</em></h1><p>Какой я хочу видеть свою жизнь через 2–3 года — и какие этапы ведут к этому. Это карта желаний и ориентиров, а не отчёт о достигнутом.</p></div></div>
 <div className="goalsBody"><div className="goalsLead"><h2>Горизонты планирования</h2><p>3 месяца · 6 месяцев · 1 год · 2–3 года · 5 лет · 10 лет. Сроки и цели можно будет уточнять по мере развития приложения.</p></div><div className="goalsGrid">{horizons.map((h,i)=><article className="goalCard" key={h.time}><div className="goalNumber">{String(i+1).padStart(2,"0")}</div><div className="goalTime">{h.time}</div><h3>{h.name}</h3><ul>{h.points.map(p=><li key={p}>{p}</li>)}</ul></article>)}</div>
 <div className="goalLinks"><Link href="/projects">Проекты и развитие →</Link><Link href="/finances">Финансовый план →</Link><Link href="/garage">Автомобильные цели →</Link><Link href="/family">Семейные планы →</Link></div></div>
 <style jsx>{`
 .goalsHero{position:relative;min-height:350px;overflow:hidden;border-radius:22px;background:#111217;border:1px solid #ad925355;display:flex;align-items:center}
 .goalsHero :global(.goalsArt){position:absolute;inset:0;height:100%;opacity:.55}
 .goalsHero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#090b0df5,#090b0d8a 70%,#090b0d33)}
 .goalsIntro{position:relative;z-index:1;padding:45px;max-width:730px}
 .goalsIntro h1{font:normal clamp(35px,5vw,62px)/1.08 Georgia,serif;margin:0}.goalsIntro em{font-style:normal;color:#e6c478}
 .goalsIntro p{color:#c5bcaa;line-height:1.7;font-size:14px}
 .goalsLead{margin:42px 0 25px}.goalsLead h2{font:normal 31px Georgia,serif;margin:0 0 10px}.goalsLead p{color:#a7a096;line-height:1.6}
 .goalsGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
 .goalCard{padding:27px;border:1px solid #ad925344;border-radius:19px;background:linear-gradient(145deg,#242118,#121417);position:relative}
 .goalNumber{position:absolute;right:25px;top:19px;font:35px Georgia,serif;color:#b99a5230}
 .goalTime{font-size:11px;color:#dbbb71;letter-spacing:.13em;text-transform:uppercase}
 .goalCard h3{font:normal 28px Georgia,serif;margin:12px 0 16px}
 .goalCard ul{padding-left:18px;margin:0;color:#c5bdad;font-size:13px;line-height:1.8}.goalCard li{margin-bottom:8px}
 .goalLinks{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.goalLinks :global(a){padding:13px 16px;border-radius:12px;border:1px solid #c7a76577;color:#ecd18c;background:#2b2419}
 @media(max-width:700px){.goalsGrid{grid-template-columns:1fr}.goalsIntro{padding:26px}.goalsHero{min-height:330px}}
 `}</style>
 </Layout>}
