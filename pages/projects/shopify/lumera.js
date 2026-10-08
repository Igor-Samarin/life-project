import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";

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
const done = [
["Подготовлен план запуска", "Сохранён план на 5–11 октября и распределение работы Игорь + AI / Артём + AI.", "Подтверждено документами"],
["Создана рабочая зона Shopify", "В кабинете доступны роли и подборка товаров. Это планирование; оно не подтверждает готовность магазина.", "Проверено 8 октября"],
["Создан магазин LUMERA", "По сохранённым данным на 5 октября: 4 товара и опубликованная тема lumera-theme-v3-1.", "Нужно сверить актуальность"],
["Подготовлен новый дизайн", "По данным на 5 октября: LUMERA DermRays-inspired redesign — draft. Завершение и публикация пока не подтверждены.", "Нужно проверить"]
];

function TaskList({items}) {
  return <ol className="tasks">{items.map(([title,result,deadline],i)=><li key={title}><span className="number">{i+1}</span><div><h3>{title}</h3><p>{result}</p><small>{deadline} · Ожидает выполнения</small></div></li>)}</ol>;
}
export default function LumeraPlan(){
return <Layout active="/projects">
<Head><title>LUMERA · Мои задачи</title></Head>
<style jsx global>{`
.lumera .back{display:inline-block;color:#d8be6d;margin-bottom:26px;font-size:13px}
.lumera .intro{max-width:760px;color:#b6b1a5;line-height:1.7}
.lumera .next{margin-top:28px;border:1px solid #bda25966;border-radius:20px;padding:24px;background:linear-gradient(130deg,#343022aa,#111518)}
.lumera .next h2{font-family:Georgia,serif;font-size:27px;font-weight:400;margin:10px 0}
.lumera .next p{color:#c3beaf;line-height:1.65}
.lumera .jump{display:flex;flex-wrap:wrap;gap:10px;margin:22px 0}
.lumera .jump a,.lumera .admin{padding:12px 16px;border:1px solid #d6bd6a44;border-radius:12px;color:#ead797;background:#22241f;display:inline-block;font-size:13px}
.lumera section{scroll-margin-top:90px}
.lumera .tasks{list-style:none;padding:0;margin:0}
.lumera .tasks li{display:flex;gap:16px;padding:21px 0;border-bottom:1px solid #d4b66222}
.lumera .tasks li:last-child{border-bottom:0}
.lumera .number{width:34px;height:34px;flex:0 0 34px;border-radius:50%;background:#c8ad5522;color:#e7ce7f;display:grid;place-items:center}
.lumera h3{margin:0 0 9px;font-size:17px;font-weight:500}
.lumera .tasks p,.lumera .record p{color:#b4b0a5;font-size:14px;line-height:1.65;margin:0 0 10px}
.lumera small{color:#d4bd77;font-size:12px;line-height:1.5}
.lumera .record{padding:18px 0;border-bottom:1px solid #d4b66222}
.lumera .record:last-child{border:0}
.lumera .future{padding-left:20px;color:#b4b0a5;line-height:1.9}
.lumera .hint{color:#98968d;font-size:13px;line-height:1.7}
@media(max-width:600px){.lumera .next{padding:19px}.lumera .tasks li{gap:12px}.lumera .jump a{flex:1;text-align:center}.lumera h3{font-size:16px}}
`}</style>
<div className="lumera">
<Link className="back" href="/projects/shopify">← Все магазины Shopify</Link>
<div className="lp-eyebrow">Мои проекты · Shopify · магазин 01</div>
<h1 className="lp-title">LUMERA</h1>
<p className="intro">Сначала твои решения, затем исполнение Артёма. Каждый шаг заканчивается конкретным результатом.</p>
<div className="next"><div className="lp-cardLabel">Первое действие сейчас</div><h2>Открой магазин вместе с Артёмом</h2><p>Артём показывает главную и карточку основного товара. Ты выбираешь товар для первого запуска. Вместе фиксируете, что готово и что мешает тестовому заказу.</p><a className="admin" href="https://lumeratopcare.myshopify.com/admin" target="_blank" rel="noreferrer">Открыть управление LUMERA ↗</a></div>
<nav className="jump" aria-label="Разделы плана"><a href="#igor">Мои 7 шагов</a><a href="#artem">Задачи Артёма</a><a href="#team">Команда и препятствия</a><a href="#done">Что сделано</a><a href="#planned">Дальнейший план</a></nav>
<p className="hint">План подготовлен 8 октября 2026. Все часы — Прага. Сроки ниже предложены для согласования. Выполнение задач пока не подтверждено; статус магазина указан с датой источника.</p>
<section id="igor" className="lp-panel"><div className="lp-eyebrow">Игорь + AI · решения</div><h2 className="lp-sectionTitle">Что мне сделать сейчас</h2><TaskList items={igor}/><p className="hint">AI помогает подготовить сравнения, расчёты, тексты и варианты решений. Ты утверждаешь результат; техническое заполнение выполняет Артём.</p></section>
<section id="artem" className="lp-panel"><div className="lp-eyebrow">Артём + AI · исполнение</div><h2 className="lp-sectionTitle">Что делает Артём</h2><TaskList items={artem}/><p className="hint">На проверку передаются ссылки, результат теста и список блокеров с конкретным сроком. Независимые задачи продолжаются, даже если созвон пропущен.</p></section>
<section id="team" className="lp-panel"><div className="lp-eyebrow">Команда · задачи · препятствия</div><h2 className="lp-sectionTitle">Где мы сейчас</h2>
<article className="record"><h3>Игорь · владелец / продукт / маркетинг</h3><p>Ближайшая задача: утвердить главный товар, рынок, цену и предложение. Препятствие: нет свежего подтверждения готовности магазина и условий поставки. Следующий шаг: получить ссылки и расчёт от Артёма, затем принять решения.</p><small>Роль подтверждена · решения ожидаются</small></article>
<article className="record"><h3>Артём · технический партнёр + AI</h3><p>Ближайшая задача по плану: показать магазин и новый дизайн, подтвердить поставку и провести тестовый заказ. Какие задачи он фактически выполняет сейчас и какие у него препятствия — ещё не сообщено.</p><small>По прежним данным — администратор Shopify · текущий доступ нужно сверить</small></article>
<article className="record"><h3>Что ждём друг от друга</h3><p>Игорь ждёт от Артёма: предпросмотр, данные поставки и результат тестового заказа. Артём ждёт от Игоря: выбор товара и рынка, утверждение цены, оффера и расходов.</p><small>Следующая контрольная точка: сегодня 17:00–18:00, Прага</small></article>
<p className="hint">Для обновления статуса нужен короткий отчёт: «делаю → результат → препятствие → от кого что нужно → срок». Этот экран пока содержит план и известные факты; автоматического получения отчётов от Артёма нет.</p></section>
<section id="done" className="lp-panel"><div className="lp-eyebrow">Факты и подтверждения</div><h2 className="lp-sectionTitle">Что уже сделано</h2>{done.map(([title,description,status])=><article className="record" key={title}><h3>{title}</h3><p>{description}</p><small>{status}</small></article>)}</section>
<section id="planned" className="lp-panel"><div className="lp-eyebrow">После ближайших задач</div><h2 className="lp-sectionTitle">Что планируется дальше</h2><ol className="future"><li>9 октября — совместно проверить готовность и принять решение о запуске.</li><li>10 октября — запустить утверждённую версию, если поставка и тестовый заказ подтверждены.</li><li>11 октября — разобрать результаты и сохранить проверенный шаблон.</li><li>Подготовить рекламные материалы; расходы — после совместного решения.</li><li>Выбрать следующие товары и магазины на основе проверенного процесса.</li></ol><p className="hint">Готовность к запуску: подтверждённая поставка, утверждённые цена и карточка, работающая покупка, проверенные уведомления и аналитика. Препятствия фиксируются сразу с ответственным и сроком исправления.</p></section>
</div></Layout>;
}
