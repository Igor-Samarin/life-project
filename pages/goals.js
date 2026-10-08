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
 <div className="goalsHero"><ProjectArt kind="Lamborghini Urus" className="goalsArt"/><div className="portraitSpace"><span className="portraitHalo">✧</span><span className="portraitCaption">ТВОЁ БУДУЩЕЕ · ТВОЙ ПОРТРЕТ</span></div><div className="goalsIntro"><div className="lp-eyebrow">Личный план · LIFE PROJECT</div><h1>Мои цели<br/><em>и моя будущая жизнь</em></h1><p>Какой я хочу видеть свою жизнь через 2–3 года — и какие этапы ведут к этому. Это карта желаний и ориентиров, а не отчёт о достигнутом.</p></div></div>
 <div className="goalsBody"><div className="goalsLead"><h2>Горизонты планирования</h2><p>Шесть этапов от первых результатов до долгосрочной свободы.</p></div><div className="timeTrack">{horizons.map((h,i)=><a href={"#goal-"+i} key={h.time} className="timeStop"><span className="timeDot">{String(i+1).padStart(2,"0")}</span><strong>{h.time}</strong></a>)}</div><div className="goalsGrid">{horizons.map((h,i)=><article className="goalCard" id={"goal-"+i} key={h.time}><ProjectArt kind={h.art} className="goalImage"/><div className="goalNumber">{String(i+1).padStart(2,"0")}</div><div className="goalTime">{h.time}</div><h3>{h.name}</h3><ul>{h.points.map(p=><li key={p}>{p}</li>)}</ul></article>)}</div>
 <div className="goalLinks"><Link href="/projects">Проекты и развитие →</Link><Link href="/finances">Финансовый план →</Link><Link href="/garage">Автомобильные цели →</Link><Link href="/family">Семейные планы →</Link></div></div>
 <style jsx>{`
 .goalsHero{position:relative;min-height:285px;overflow:hidden;border-radius:22px;background:#111217;border:1px solid #ad925355;display:flex;align-items:center}
 .goalsHero :global(.goalsArt){position:absolute;inset:0;height:100%;opacity:.55}
 .goalsHero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#090b0df5,#090b0d8a 70%,#090b0d33)}
 .goalsIntro{position:relative;z-index:1;padding:32px 38px;max-width:620px}
 .goalsIntro h1{font:normal clamp(32px,4.5vw,51px)/1.08 Georgia,serif;margin:0}.goalsIntro em{font-style:normal;color:#e6c478}
 .goalsIntro p{color:#c5bcaa;line-height:1.7;font-size:14px}
 .goalsLead{margin:28px 0 16px}.goalsLead h2{font:normal 31px Georgia,serif;margin:0 0 10px}.goalsLead p{color:#a7a096;line-height:1.6}
 .goalsGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
 .goalCard{padding:19px;overflow:hidden;border:1px solid #ad925344;border-radius:19px;background:linear-gradient(145deg,#242118,#121417);position:relative}
 .goalCard :global(.goalImage){height:135px;margin:-19px -19px 16px;border-bottom:1px solid #d2b36c66}
 .goalNumber{position:absolute;right:25px;top:19px;font:35px Georgia,serif;color:#b99a5230}
 .goalTime{font-size:11px;color:#dbbb71;letter-spacing:.13em;text-transform:uppercase}
 .goalCard h3{font:normal 23px Georgia,serif;margin:9px 0 12px}
 .goalCard ul{padding-left:18px;margin:0;color:#c5bdad;font-size:12px;line-height:1.65}.goalCard li{margin-bottom:8px}
 .goalLinks{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.goalLinks :global(a){padding:13px 16px;border-radius:12px;border:1px solid #c7a76577;color:#ecd18c;background:#2b2419}
 .portraitSpace{position:absolute;z-index:2;right:4%;top:8%;height:84%;width:28%;border:1px dashed #e1c17a77;border-radius:120px 120px 20px 20px;background:radial-gradient(ellipse at center,#c5a45c2b,transparent 70%);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;pointer-events:none}
 .portraitHalo{font:normal 76px Georgia,serif;color:#e5c57b77;text-shadow:0 0 40px #e2c17788}
 .portraitCaption{font-size:9px;color:#d7c18e;letter-spacing:.12em;text-align:center;padding:0 12px}
 .timeTrack{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));position:relative;gap:5px;margin:0 0 26px;padding:20px 8px;border:1px solid #a58c4a55;border-radius:18px;background:linear-gradient(120deg,#2d2619,#111417)}
 .timeTrack:before{content:"";position:absolute;top:40px;left:8%;right:8%;height:2px;background:linear-gradient(90deg,#7d622e,#e5c678,#7d622e);box-shadow:0 0 12px #e5c67855}
 .timeStop{display:flex;flex-direction:column;align-items:center;gap:12px;z-index:1;text-decoration:none;color:#e5d1a3;font-size:11px;text-align:center;transition:transform .2s}
 .timeStop:hover{transform:translateY(-4px)}
 .timeDot{height:40px;width:40px;border:1px solid #e7c777;border-radius:50%;background:#302719;display:grid;place-items:center;color:#f4d993;box-shadow:0 0 14px #bfa05955;font-size:12px}
 .goalCard{scroll-margin-top:85px;transition:border-color .2s,transform .2s}
 .goalCard:hover{border-color:#d7b66a;transform:translateY(-2px)}
 @media(max-width:700px){.goalsGrid{grid-template-columns:1fr}.goalsIntro{padding:24px;max-width:80%}.goalsHero{min-height:275px}.portraitSpace{right:2%;width:24%;height:65%;top:18%}.portraitHalo{font-size:45px}.portraitCaption{font-size:7px}.timeTrack{overflow-x:auto;grid-template-columns:repeat(6,minmax(90px,1fr))}}
 `}</style>
 </Layout>}
