import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
const igor = [
["Сверить готовность магазина с Артёмом", "Попроси показать главную, карточки и мобильную версию. Результат: список «готово / осталось / блокер» со ссылками.", "Сегодня, первым шагом"],
["Выбрать один главный товар", "Из подготовленных товаров выбери один для первого запуска и до двух дополнительных. Результат: утверждённые ссылки и приоритет.", "Сегодня, на созвоне"],
["Утвердить первый рынок", "Выбери страну, язык и валюту. Результат: одна согласованная конфигурация для первого теста.", "Сегодня, на созвоне"],
["Принять решение по поставке", "Посмотри подтверждённые Артёмом закупку, доставку, наличие и возвраты. Результат: выбранный поставщик или список недостающих данных.", "После проверки Артёма"],
["Утвердить цену и предложение", "По расчёту закупки, доставки, комиссий и резерва на возвраты выбери цену и основную пользу товара. Результат: цена и короткий оффер.", "Сегодня, до 18:00"],
["Проверить карточку на телефоне", "Открой предпросмотр и передай одним списком важные правки по фото, тексту и ясности покупки. Результат: утверждённая карточка или конкретные исправления.", "Сегодня, 17:00–18:00"],
["Принять решение о запуске", "Посмотри результат тестового заказа, готовность поставки и аналитики. Утверди запуск и расходы совместно с Артёмом только после закрытия блокеров.", "9 октября, 17:00–18:00"]
];
const artem = [
["Показать фактическое состояние", "Дать ссылки на магазин и новый дизайн; отметить готовое, оставшееся и блокеры.", "Сегодня, на созвоне"],
["Подтвердить данные главного товара", "Проверить точную модель, характеристики, комплектацию, поставщика, закупочную цену, наличие, доставку и возвраты.", "Сегодня, до 17:00"],
["Закончить главную и карточку", "Внести утверждённые тексты и медиа, цену и варианты. Дать предпросмотр для проверки Игорем.", "Сегодня, до 17:00"],
["Проверить мобильную версию", "Проверить навигацию, изображения, кнопки, корзину и читаемость на телефоне.", "Сегодня, до 17:00"],
["Проверить настройки покупки", "Проверить выбранные рынки, оплату, доставку и страницы контактов и условий.", "Сегодня, до 17:00"],
["Проверить аналитику", "Проверить события просмотра товара, добавления в корзину, начала оформления и тестовой покупки.", "Сегодня, до 17:00"],
["Провести полный тестовый заказ", "Пройти путь от карточки до подтверждения. Проверить заказ в админке и уведомление покупателю. Передать результат и ошибки.", "Сегодня, до 17:00"],
["Исправить блокеры и повторить проверку", "Закрыть ошибки покупки и подтвердить результат повторного теста. Затем сохранить рабочий шаблон магазина.", "9 октября, до 17:00"]
];

const people=[
{id:"artem",name:"Артём",initial:"А",role:"Технический партнёр · работает с AI",status:"Участие согласовано",projects:"Shopify / LUMERA · Відновимо",next:"LUMERA: показать готовность и провести тестовый заказ.",block:"Нет свежего отчёта; доступ к коду Відновимо ещё не подтверждён."},
{id:"karina",name:"Карина",initial:"К",role:"Самостоятельный проект · Прага",status:"Концепция подготовлена · участие не подтверждено",projects:"Karina · Prague Private Tours",next:"Карине: решить, запускать ли проект; подтвердить автомобиль и формат услуг.",block:"Нет подтверждения Карины и доступа к редактору исходного сайта."}
];
function Steps({items}){return <ol>{items.map(([title,result,time])=><li key={title}><b>{title}</b><p>{result}</p><small>{time} · выполнение не подтверждено</small></li>)}</ol>}
export default function Team(){
const router=useRouter();
const person=people.find(p=>p.id===router.query.person);
return <Layout active="/projects"><Head><title>{person?person.name+" · работа по проектам":"Участники · Мои проекты"}</title></Head>
<style jsx global>{`
.teamPage .back{display:inline-block;color:#d8be6d;margin-bottom:24px;font-size:13px}
.teamPage .intro{color:#b5b0a4;line-height:1.7;max-width:800px}
.teamPage .people{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:30px}
.teamPage .person{display:block;border:1px solid #c8ad5544;border-radius:24px;padding:25px;background:linear-gradient(140deg,#303124,#101417);transition:transform .18s,border-color .18s}
.teamPage .person:hover{transform:translateY(-3px);border-color:#dcca83}
.teamPage .person:focus-visible{outline:2px solid #e4cc7f;outline-offset:5px}
.teamPage .personTop{display:flex;gap:18px;align-items:center}
.teamPage .avatar{width:78px;height:78px;flex:0 0 78px;border:1px solid #cfb55a88;border-radius:50%;display:grid;place-items:center;font:36px Georgia,serif;background:radial-gradient(circle at 35% 25%,#645a34,#1b2020 80%);color:#f2dc91}
.teamPage .person h2{font-family:Georgia,serif;font-size:32px;font-weight:400;margin:0 0 9px}
.teamPage .person p,.teamPage .report p{font-size:14px;line-height:1.65;color:#b5b0a4}
.teamPage small{font-size:12px;color:#cfbd7c;line-height:1.6}
.teamPage .personLabel{display:block;color:#d7c68e;margin-top:20px;font-size:12px}
.teamPage .open{display:block;margin-top:24px;color:#efd78f;font-size:14px}
.teamPage .profileHead{display:flex;align-items:center;gap:22px;margin-top:10px}
.teamPage .profileHead .avatar{width:90px;height:90px;flex-basis:90px}
.teamPage .profileHead h1{font-size:64px}
.teamPage .report{border-left:2px solid #c9ab59;padding:3px 0 3px 18px;margin:24px 0}
.teamPage .tabs{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}
.teamPage .tabs a,.teamPage .button{display:inline-block;border:1px solid #cdb36544;border-radius:12px;padding:12px 16px;color:#e9d18b;background:#252720;font-size:13px}
.teamPage section{scroll-margin-top:90px}
.teamPage h3{font:26px Georgia,serif;margin:20px 0 12px;color:#eee2c4}
.teamPage ol{padding-left:24px}
.teamPage li{padding:14px 0 18px 5px;border-bottom:1px solid #cdb36522;color:#e4dbc3;line-height:1.6}
.teamPage li:last-child{border-bottom:0}
.teamPage li p,.teamPage .bodyText{color:#b5b0a4;font-size:14px;line-height:1.7}
.teamPage .hint{font-size:12px;line-height:1.7;color:#939185;margin-top:20px}
@media(max-width:680px){.teamPage .people{grid-template-columns:1fr}.teamPage .person{padding:21px}.teamPage .personTop{gap:14px}.teamPage .avatar{width:64px;height:64px;flex-basis:64px}.teamPage .profileHead h1{font-size:44px}.teamPage .profileHead .avatar{width:70px;height:70px;flex-basis:70px}}
`}</style><div className="teamPage">
<Link className="back" href={person?"/projects/team":"/projects"}>{person?"← Все участники":"← Мои проекты"}</Link>
{!person?<><div className="lp-eyebrow">Люди · совместная работа</div><h1 className="lp-title">Участники</h1><p className="intro">Выбери человека, чтобы увидеть ваши задачи, препятствия, выполненное и следующие шаги по каждому проекту.</p>
<div className="people">{people.map(p=><Link className="person" href={"/projects/team?person="+p.id} key={p.id}><div className="personTop"><div className="avatar" aria-label={"Инициалы: "+p.name}>{p.initial}</div><div><h2>{p.name}</h2><small>{p.role}</small></div></div><span className="personLabel">{p.status} · {p.projects}</span><p><b>Следующий шаг:</b> {p.next}</p><p><b>Препятствие:</b> {p.block}</p><span className="open">Открыть работу с {p.name==="Артём"?"Артёмом":"Кариной"} →</span></Link>)}</div><p className="hint">Инициалы временно заменяют фотографии. Карточка участника не означает предоставление доступа. Новые люди добавляются после решения владельца.</p></>:
<><div className="lp-eyebrow">Участники · профиль работы</div><div className="profileHead"><div className="avatar">{person.initial}</div><div><h1 className="lp-title">{person.name}</h1><p className="intro">{person.role}</p></div></div><p className="intro">{person.status} · {person.projects}</p>
{person.id==="artem"?<>
<div className="report"><h3>Сейчас: план есть, отчёт ожидается</h3><p>Артём — технический партнёр по LUMERA. По Відновимо согласовано участие в разработке. Фактически начатые задачи, прогресс и личные препятствия Артёма ещё не подтверждены свежим отчётом.</p><small>Последняя сверка плана: 8 октября 2026 · часы Праги</small></div>
<nav className="tabs" aria-label="Проекты участника"><a href="#lumera">LUMERA</a><a href="#vidnovymo">Відновимо</a><a href="#report">Как обновляем работу</a></nav>
<section id="lumera" className="lp-panel"><div className="lp-eyebrow">Shopify · текущий магазин</div><h2 className="lp-sectionTitle">LUMERA · наша работа</h2><p className="bodyText">Игорь + AI: товар, продукт, маркетинг и решения. Артём + AI: тема, карточки, интеграции, QA и техническая готовность.</p><h3>Мои ближайшие 7 шагов</h3><Steps items={igor}/><h3>8 задач Артёма</h3><Steps items={artem}/>
<h3>Мои препятствия</h3><p className="bodyText">Для утверждения товара и цены нужны актуальные условия поставки и расчёт. Для решения о запуске нужен результат полного тестового заказа.</p>
<h3>Препятствия Артёма</h3><p className="bodyText">Фактические препятствия пока не сообщены. Зависимости по плану: выбор товара и рынка, утверждение цены, оффера и расходов Игорем.</p>
<h3>Что уже сделано</h3><p className="bodyText">Сохранён план 5–11 октября, создана рабочая зона и подборка. По данным на 5 октября в LUMERA было 4 товара, рабочая тема и новый дизайн в черновике; актуальность нужно сверить.</p>
<h3>Дальнейший план</h3><p className="bodyText">9 октября — проверка готовности; 10 октября — запуск при закрытых блокерах; 11 октября — итоги и сохранение шаблона. Сроки предложены для согласования.</p><Link className="button" href="/projects/shopify/lumera">Открыть отдельный план LUMERA →</Link></section>
<section id="vidnovymo" className="lp-panel"><div className="lp-eyebrow">Отдельный проект</div><h2 className="lp-sectionTitle">Відновимо · разработка</h2>
<h3>Что сделать Игорю</h3><Steps items={[["Подключить Артёма к репозиторию","Пригласить Artem-Makarov в приватный Igor-Samarin/Vidnovymo. При проверке доступ отсутствовал.","Следующий шаг"],["Утвердить ближайший результат","Согласовать объём первой доработки после сравнения уже созданной работы.","После сравнения версий"]]}/>
<h3>Что сделать Артёму</h3><Steps items={[["Принять приглашение","Подключить основной репозиторий, сохранить уже созданную у себя работу.","После приглашения"],["Сравнить версии","Сверить свой код, основной репозиторий и опубликованный прототип. Зафиксировать, что переносим.","До начала переноса"],["Перенести изменения через ветку","Подготовить Pull Request с изменениями, результатом проверки и оставшимися препятствиями.","Срок согласовать"],["Проверить приложение после обновления","Пройти основные сценарии на телефоне и компьютере; передать результат владельцу.","Перед принятием результата"]]}/>
<h3>Что уже сделано</h3><p className="bodyText">Основной приватный репозиторий существует. Веб-прототип доступен, но его содержимое отличается от текущего кода. Доступ Артёма пока не подтверждён.</p>
<h3>Препятствия и следующий шаг</h3><p className="bodyText">Игорь: отправить приглашение и определить ближайший объём. Артём: получить доступ и дать ссылку на свою текущую работу. Затем — сравнение → перенос → проверка → обновление основного приложения. Срок первой доработки пока не согласован.</p><a className="button" href="https://github.com/Igor-Samarin/Vidnovymo" target="_blank" rel="noreferrer">Основной репозиторий ↗</a></section>
<section id="report" className="lp-panel"><h2 className="lp-sectionTitle">Как обновляем работу</h2><p className="bodyText">Каждый отчёт: что делаю → что готово и ссылка → препятствие → от кого что нужно → срок. По отчёту обновляются задачи и следующий шаг. Пропущенный созвон не останавливает независимые задачи.</p><p className="hint">Автоматического подключения отчётов и общего редактирования задач пока нет. Здесь показаны подготовленный план и проверенные факты.</p></section>
</>:<section className="lp-panel"><h2 className="lp-sectionTitle">Подготовка сотрудничества</h2><h3>Мои шаги</h3><Steps items={[["Определить проект и роль Карины","Согласовать, в каком проекте участвует Карина и за какой результат отвечает.","До подключения"],["Согласовать первую задачу","Зафиксировать конкретный результат, срок и критерий готовности.","После выбора роли"],["Подготовить необходимые доступы","Предоставить только доступ к выбранному проекту после отдельного решения.","После согласования участия"]]}/><h3>Задачи Карины</h3><p className="bodyText">Пока не назначены. Участие, доступ и начало работы не подтверждены.</p><h3>Препятствия</h3><p className="bodyText">Не определены проект, роль и первый результат. Фактических препятствий Карины пока не сообщено.</p><h3>Сделано и планируется</h3><p className="bodyText">Создана карточка будущего участника. Следом — согласование роли, задачи и срока. Выполненных проектных задач пока не зафиксировано.</p></section>}
</>}
</div></Layout>;
}