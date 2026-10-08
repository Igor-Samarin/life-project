import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const STORAGE_KEY = "life-project-project-statuses-v1";

const statusConfig = [
  { key: "active", label: "В работе", subtitle: "Главный фокус и проекты, которыми занимаемся сейчас." },
  { key: "prep", label: "Подготовка", subtitle: "Проекты, где уже идёт исследование, упаковка или подготовительные действия." },
  { key: "planned", label: "Запланировано", subtitle: "Идеи сохранены в очереди и ждут своего времени." }
];

const projectSeed = [
  { title: "Відновимо", icon: "✚", text: "Помощь после повреждения жилья: пошаговое обращение и подготовка материалов. Веб-прототип и код требуют синхронизации.", meta: "Социальный продукт", href: "https://vidnovymo.vercel.app", priority: "Проверка и доработка", status: "active" },
  { title: "Shopify", icon: "◇", text: "Главный e-commerce проект: подбор товаров, тесты, магазины, поставщики, аналитика и масштабирование.", meta: "E-commerce", href: "/projects/shopify", priority: "Приоритет №1", status: "active" },
  { title: "Taxi / Private Driver / Prague Tours", icon: "➤", text: "Текущий доход: прямые клиенты, туристические маршруты по Праге, визитки, QR, бронирования и частные поездки.", meta: "Текущий доход", priority: "Работа сейчас", status: "active" },
  { title: "Life Project", icon: "◎", text: "Единый личный кабинет: проекты, семья, финансы, гараж, планы, задачи, статусы и единый центр управления.", meta: "Система", priority: "Собираем в один кабинет", status: "active" },

  { title: "International Driver Platform · Europe & USA", icon: "✈", text: "Международный сервис поездок: премиальные водители со своими авто, аэропорт ↔ отель, «машина сейчас», бронирование, геолокация и мобильные приложения.", meta: "Mobility", priority: "Прототип / план", status: "prep" },
  { title: "Trading Bots", icon: "⌁", text: "Крипто-боты: несколько стратегий, бэктест, paper trading, малый депозит и отдельный бот фундаментальных новостей.", meta: "Fintech", priority: "Исследование", status: "prep" },
  { title: "YouTube World", icon: "▶", text: "AI-производство каналов и короткого контента: сценарии, аватары, оформление, анализ, автоматизация и будущая публикация.", meta: "Media / AI", priority: "Подготовка", status: "prep" },
  { title: "Мир Насти · TikTok / YouTube", icon: "✦", text: "Отдельный контент-бизнес: AI-аватар, короткие видео, развитие канала и выход на самостоятельную монетизацию.", meta: "Creator", priority: "Подготовка", status: "prep" },
  { title: "Dating App", icon: "♥", text: "Сайт / приложение знакомств: анкеты, внутренняя валюта, платный контент, подарки, логистика и игровые механики.", meta: "App", priority: "Концепт", status: "prep" },
  { title: "Crypto Shop / Digital Goods", icon: "₿", text: "Магазин цифровых товаров с оплатой криптовалютой, перепродажей цифровых продуктов и собственной комиссией.", meta: "Crypto commerce", priority: "Концепт", status: "prep" },
  { title: "AI Product Monetization", icon: "AI", text: "Упаковка и монетизация AI-программы Артёма: продукт, позиционирование, модель оплаты и продажи.", meta: "AI / SaaS", priority: "План", status: "prep" },
  { title: "Family Business Network", icon: "◈", text: "Система семейных бизнесов: отдельные проекты участникам, общий фонд, резерв, распределение прибыли и постепенное подключение новых направлений.", meta: "Business system", priority: "Архитектура", status: "prep" },
  { title: "Landscape Design · Prague / Czechia", icon: "⌂", text: "Ландшафтный бизнес: рынок Праги и Чехии, услуги, цены, стартовый бюджет, юридические требования и пошаговый запуск.", meta: "Services", priority: "Исследование", status: "prep" },

  { title: "Amazon Books", icon: "▤", text: "Издание и продажа книг через Amazon как отдельный цифровой и контентный бизнес.", meta: "Publishing", priority: "План", status: "planned" },
  { title: "Family Clothing Brand", icon: "◇", text: "Премиальная семейная одежда: тёмная и светлая капсулы, имена, нордические символы, чёрно-золотая эстетика и цифровые бонусы.", meta: "Brand", priority: "Концепт", status: "planned" },
  { title: "NFT Family Art", icon: "◆", text: "Художественный NFT-проект на основе семейной истории войны и разлуки: архив, отбор материалов, художественная сборка и аукцион.", meta: "Art / NFT", priority: "Концепт", status: "planned" },
  { title: "Private Outreach / Family Story", icon: "✉", text: "Индивидуальные обращения к состоятельным людям с семейной историей, целями и персонализированными письмами.", meta: "Outreach", priority: "План", status: "planned" },
  { title: "Prague Casting & Content Studio", icon: "●", text: "Легальная 18+ студия / агентство: кастинг, продакшн, модель дохода, команда и бюджет запуска.", meta: "Studio", priority: "План", status: "planned" },
  { title: "Valencia DJ · Shop + Events", icon: "♫", text: "Проект в Валенсии: магазин DJ-товаров плюс организация вечеринок и мероприятий.", meta: "Music / Commerce", priority: "План", status: "planned" },
  { title: "Gift Travel Shop", icon: "✈", text: "Подарочный магазин с фокусом на комфортные путешествия и полезные товары для поездок.", meta: "E-commerce", priority: "Идея", status: "planned" },
  { title: "Roblox Game", icon: "▣", text: "Создание игры по мотивам любимых механик Roblox с потенциалом дальнейшего развития и монетизации.", meta: "Game", priority: "Идея", status: "planned" },
  { title: "Family Music Video", icon: "▶", text: "Семейный видеоклип из фотографий и материалов под выбранную песню, с художественной сборкой и монтажом.", meta: "Media", priority: "Творческий проект", status: "planned" },
  { title: "Wedding Complex", icon: "◌", text: "Концепт свадебного комплекса: кафе, сервисы и магазины свадебных товаров в одной экосистеме.", meta: "Real Estate / Services", priority: "Концепт", status: "planned" },
  { title: "Криптомир", icon: "₿", text: "Отдельный крипто-раздел: способы заработка, боты, криптооплата в наших проектах, цифровые товары и дальнейшие идеи.", meta: "Crypto", priority: "Очередь", status: "planned" },
  { title: "Флотилия Прага", icon: "➤", text: "Собственная такси-флотилия: водители на своих авто, партнёрские машины, бонусы, экономика и юридическая структура.", meta: "Taxi business", priority: "Позже", status: "planned" },
  { title: "Пирамида", icon: "△", text: "Отдельный проект с 10 уровнями. Идея сохранена, но пока не развиваем и не трогаем.", meta: "Отдельный концепт", priority: "Позже", status: "planned" }
];


const ownerActions = {
  "Shopify": ["Проверить предупреждение Supplier SKU has changed у LED-маски", "Подтвердить поставщика и варианты после сверки", "Утвердить товары и цены перед публикацией"],
  "Відновимо": ["Подтвердить доступ разработчика к отдельному репозиторию", "Утвердить объём первой доработки", "Проверить мобильный прототип перед публикацией"],
  "Personal AI Companion": ["Передать архив экспорта ChatGPT после получения", "Подтвердить границы доступа к личным данным", "Проверить первую версию eMemoryVault"],
  "Life Project": ["Проверить новый каталог проектов", "Выбрать три проекта для ближайшего фокуса", "Подтвердить правила уведомлений и согласований"]
};
const projectVisuals = {
  "Shopify": {mark:"L", tone:"#e9d6a3"},
  "Відновимо": {mark:"✚", tone:"#9ac9d9"},
  "Life Project": {mark:"◎", tone:"#dfbe78"},
  "Trading Bots": {mark:"₿", tone:"#e6c47b"},
  "Family Business Network": {mark:"◈", tone:"#dfbe78"},
  "Landscape Design · Prague / Czechia": {mark:"❧", tone:"#a8d1ac"}
};
const actionList = (project) => ownerActions[project.title] || (project.status === "planned" ? [] : []);

const collaboration = {
  "Shopify": {
    team: "Игорь — решения и маркетинг; Артём + AI — техническая реализация. Текущий доступ Артёма к Shopify нужно сверить.",
    tasks: "Игорь: выбрать главный товар и рынок, утвердить цену. Артём: показать LUMERA, подтвердить поставку, проверить заказ.",
    ownerBlock: "Ожидаются свежие данные о готовности магазина и поставке.",
    teamBlock: "Фактические препятствия Артёма пока не сообщены; по плану ему нужны утверждённые товар, рынок и цена.",
    next: "Открыть LUMERA → сверить готовность → принять решения → тестовый заказ.",
    checkpoint: "8 октября, 17:00–18:00, Прага — предложенная проверка",
    details: "/projects/shopify/lumera"
  },
  "Відновимо": {
    team: "Игорь — владелец и продукт; Артём — согласованное участие в разработке. Доступ к приватному репозиторию пока не подтверждён.",
    tasks: "Игорь: добавить Artem-Makarov в репозиторий. Артём: принять приглашение, сверить код и сохранить свою текущую работу.",
    ownerBlock: "Нужно отправить приглашение GitHub и определить объём первой доработки.",
    teamBlock: "При проверке 8 октября доступ GitHub отсутствовал. Опубликованный прототип отличается от кода.",
    next: "Доступ → перенос работы Артёма в отдельную ветку → проверка изменений → обновление приложения.",
    checkpoint: "После принятия приглашения — сравнение версий; срок доработки ещё не согласован.",
    details: "https://github.com/Igor-Samarin/Vidnovymo"
  }
};
export default function Projects() {
  const [statuses, setStatuses] = useState(() =>
    Object.fromEntries(projectSeed.map((project) => [project.title, project.status]))
  );

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
      if (saved && typeof saved === "object") {
        setStatuses((current) => ({ ...current, ...saved }));
      }
    } catch (error) {
      console.warn("Project status restore failed", error);
    }

    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY || !event.newValue) return;
      try {
        const next = JSON.parse(event.newValue);
        setStatuses((current) => ({ ...current, ...next }));
      } catch {}
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const moveProject = (title, status) => {
    setStatuses((current) => {
      const next = { ...current, [title]: status };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const grouped = useMemo(() => {
    return statusConfig.map((status) => ({
      ...status,
      projects: projectSeed.filter((project) => statuses[project.title] === status.key)
    }));
  }, [statuses]);

  return (
    <Layout active="/projects">
      <style jsx>{`
        .actionPreview{margin:14px 0 0;padding:12px;border-radius:12px;background:rgba(0,0,0,.19);border:1px solid rgba(220,191,100,.16)}\n        .actionPreview strong{font-size:11px;color:#ead797}\n        .actionPreview ol{padding-left:18px;margin:8px 0 0;color:#d6d1c4;font-size:11px;line-height:1.65}\n        .actionPreview p{margin:7px 0 0}\n        .projectIcon{font-size:20px!important}\n        .workDetails{margin-top:18px;border-top:1px solid #d6bd6a22;padding-top:14px}
        .workDetails summary{cursor:pointer;color:#ead797;font-size:13px;padding:8px 0}
        .workDetails dl{font-size:12px;line-height:1.6;margin:12px 0}
        .workDetails dt{color:#e4d4a5;margin-top:12px}
        .workDetails dd{color:#aaa69b;margin:4px 0 0}
        .workDetails .workLink{display:inline-block;color:#ead797;padding:10px 0;font-size:13px}
        .statusNav{display:flex;gap:8px;flex-wrap:wrap;margin-top:24px}
        .statusPill{padding:8px 12px;border-radius:999px;font-size:11px}
        .statusPill strong{margin-left:6px}
        .statusPill.active{border:1px solid rgba(184,193,73,.35);background:rgba(73,82,31,.26);color:#cbd27b}
        .statusPill.prep{border:1px solid rgba(83,132,190,.34);background:rgba(24,52,84,.36);color:#8eb6e2}
        .statusPill.planned{border:1px solid rgba(159,71,86,.34);background:rgba(77,28,39,.34);color:#c98290}

        .group{margin-top:40px}
        .groupHead{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:16px}
        .groupTitle{font-family:Georgia,serif;font-size:31px;font-weight:400;margin:0}
        .groupText{color:#8f8a80;font-size:13px;line-height:1.55;max-width:690px;margin:7px 0 0}
        .count{font-size:12px;white-space:nowrap}
        .active .groupTitle,.active .count{color:#d6d77d}
        .prep .groupTitle,.prep .count{color:#91b8e4}
        .planned .groupTitle,.planned .count{color:#cf8794}

        .projectGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .projectCard{min-height:230px;padding:20px 21px;border-radius:18px;display:flex;flex-direction:column;position:relative;overflow:hidden;transition:.18s ease}
        .active .projectCard{
          border:1px solid rgba(184,193,73,.34);
          background:
            radial-gradient(circle at 90% 10%,rgba(160,170,54,.12),transparent 34%),
            linear-gradient(145deg,rgba(45,54,28,.92),rgba(18,22,17,.94));
        }
        .prep .projectCard{
          border:1px solid rgba(76,123,178,.36);
          background:
            radial-gradient(circle at 90% 10%,rgba(67,119,183,.14),transparent 34%),
            linear-gradient(145deg,rgba(20,38,60,.94),rgba(13,20,29,.96));
        }
        .planned .projectCard{
          border:1px solid rgba(151,66,82,.36);
          background:
            radial-gradient(circle at 90% 10%,rgba(154,64,82,.14),transparent 34%),
            linear-gradient(145deg,rgba(56,23,31,.94),rgba(25,14,18,.96));
        }
        .projectCard:hover{transform:translateY(-1px)}
        .active .projectCard:hover{border-color:rgba(199,209,89,.52)}
        .prep .projectCard:hover{border-color:rgba(100,151,209,.54)}
        .planned .projectCard:hover{border-color:rgba(184,85,103,.54)}

        .metaLine{display:flex;align-items:center;justify-content:space-between;gap:10px}
        .meta{font-size:9px;text-transform:uppercase;letter-spacing:.16em}
        .active .meta{color:#cbd36d}
        .prep .meta{color:#75a8df}
        .planned .meta{color:#ca7183}
        .priority{font-size:10px;color:#9a9d98}

        .titleRow{display:flex;align-items:center;gap:12px;margin-top:17px}
        .projectIcon{width:36px;height:36px;flex:0 0 36px;border-radius:11px;display:grid;place-items:center;font-family:Georgia,serif;font-size:17px;font-weight:600;letter-spacing:-.04em}
        .active .projectIcon{color:#e6e88f;border:1px solid rgba(202,207,101,.35);background:rgba(95,104,39,.30);box-shadow:inset 0 0 18px rgba(185,193,73,.07)}
        .prep .projectIcon{color:#a8c9eb;border:1px solid rgba(103,153,211,.34);background:rgba(38,72,108,.38);box-shadow:inset 0 0 18px rgba(70,124,185,.08)}
        .planned .projectIcon{color:#e0a0ac;border:1px solid rgba(180,91,108,.34);background:rgba(91,35,47,.38);box-shadow:inset 0 0 18px rgba(160,66,83,.08)}
        .projectCard h3{font-family:Georgia,serif;font-size:22px;font-weight:400;margin:0;line-height:1.12}
        .projectCard p{color:#a09b91;line-height:1.55;font-size:12px;margin:12px 0 0}

        .cardBottom{margin-top:auto;padding-top:18px}
        .bottomRow{display:flex;align-items:flex-end;justify-content:space-between;gap:12px}
        .statusArea{min-width:0;flex:1}
        .switchLabel{font-size:8px;color:#777d78;text-transform:uppercase;letter-spacing:.12em;margin-bottom:5px}
        .statusSwitch{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;padding:2px;border:1px solid rgba(255,255,255,.08);border-radius:9px;background:rgba(4,6,7,.42)}
        .statusBtn{border:0;border-radius:7px;padding:4px 5px;background:transparent;color:#9ca19c;font-size:10px;line-height:1.05;cursor:pointer;transition:.16s ease;white-space:nowrap}
        .statusBtn:hover{color:#f0ead8;background:rgba(255,255,255,.05)}
        .statusBtn.active.selected{color:#17190f;background:#c9d167;font-weight:700}
        .statusBtn.prep.selected{color:#eaf4ff;background:#376d9f;font-weight:700}
        .statusBtn.planned.selected{color:#fff0f3;background:#813849;font-weight:700}
        .openProject{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;min-height:29px;padding:0 11px;border-radius:9px;border:1px solid rgba(220,191,100,.26);background:rgba(28,26,19,.58);color:#dfc877;font-size:10px;white-space:nowrap}
        .openProject:hover{color:#fff0ad;border-color:rgba(229,202,114,.52);background:rgba(46,39,20,.72)}
        .empty{grid-column:1/-1;padding:24px;border:1px dashed rgba(217,187,91,.15);border-radius:16px;color:#777d78;font-size:12px}
        .saveNote{margin-top:12px;color:#686d69;font-size:10px}

        @media(max-width:1000px){.projectGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:680px){
          .projectGrid{grid-template-columns:1fr}
          .groupHead{align-items:flex-start;flex-direction:column}
          .count{white-space:normal}
          .bottomRow{align-items:stretch;flex-direction:column}
          .openProject{align-self:flex-end}
          .statusBtn{font-size:10px;padding:5px 4px}
        }
      `}</style>

      <div className="lp-eyebrow">Раздел 04 · Единый каталог</div>
      <h1 className="lp-title">Все проекты</h1>
      <p className="lp-subtitle">Статус любого проекта можно менять прямо на карточке. Нажимаешь «В работе», «Подготовка» или «Запланировано» — карточка сразу переезжает в нужный раздел.</p>

      <p style={{marginTop:24}}><Link className="openProject" style={{padding:"16px 22px",fontSize:15,borderRadius:16,minHeight:52}} href="/projects/team">◈ Участники · Артём · Карина →</Link></p>
      <div className="lp-kpis">
        <div className="lp-kpi"><span>Всего</span><strong>{projectSeed.length}</strong></div>
        {grouped.map((group) => (
          <div className="lp-kpi" key={group.key}><span>{group.label}</span><strong>{group.projects.length}</strong></div>
        ))}
      </div>

      <div className="statusNav">
        {grouped.map((group) => (
          <div className={"statusPill " + group.key} key={group.key}>{group.label} <strong>{group.projects.length}</strong></div>
        ))}
      </div>
      <div className="saveNote">Изменённый статус сохраняется после перезагрузки страницы в этом браузере.</div>

      {grouped.map((group) => (
        <section className={"group " + group.key} key={group.key}>
          <div className="groupHead">
            <div>
              <h2 className="groupTitle">{group.label}</h2>
              <p className="groupText">{group.subtitle}</p>
            </div>
            <div className="count">{group.projects.length} проектов</div>
          </div>

          <div className="projectGrid">
            {group.projects.length === 0 && <div className="empty">Здесь пока нет проектов. Переведи сюда нужную карточку переключателем.</div>}

            {group.projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div className="metaLine">
                  <span className="meta">{project.meta}</span>
                  <span className="priority">{project.priority}</span>
                </div>

                <div className="titleRow">
                  <div className="projectIcon" aria-hidden="true">{(projectVisuals[project.title]?.mark || project.icon)}</div>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.text}</p>\n                <div className="actionPreview"><strong>Твои ближайшие действия</strong>{actionList(project).length ? <ol>{actionList(project).slice(0,3).map((task)=><li key={task}>{task}</li>)}</ol> : <p>{statuses[project.title] === "planned" ? "Проект отложен — сейчас действий не требуется." : "Подтверждённых блокирующих решений пока нет."}</p>}</div>
                <details className="workDetails">
                  <summary>Команда и работа · задачи / препятствия</summary>
                  <dl>
                    <dt>Участники и подключение</dt><dd>{collaboration[project.title]?.team || "Игорь — владелец. Другие участники и их доступ не подтверждены."}</dd>
                    <dt>Ближайшие задачи</dt><dd>{collaboration[project.title]?.tasks || (statuses[project.title] === "planned" ? "Вернуться к концепции при активации проекта; исполнитель не назначен." : "Определить ближайший результат и назначить исполнителя; актуальный отчёт отсутствует.")}</dd>
                    <dt>Мои препятствия</dt><dd>{collaboration[project.title]?.ownerBlock || "Не зафиксированы. Требуется уточнить ближайшее решение владельца."}</dd>
                    <dt>Препятствия исполнителя</dt><dd>{collaboration[project.title]?.teamBlock || "Не сообщены. Подтверждённого отчёта исполнителя нет."}</dd>
                    <dt>Следующий шаг</dt><dd>{collaboration[project.title]?.next || "Определить результат → ответственного → срок → получить отчёт."}</dd>
                    <dt>Контрольная точка</dt><dd>{collaboration[project.title]?.checkpoint || "Срок пока не назначен."}</dd>
                  </dl>
                  {collaboration[project.title]?.details && <Link className="workLink" href={collaboration[project.title].details}>{project.title === "Shopify" ? "LUMERA · подробные задачи →" : "Репозиторий разработки →"}</Link>}
                  <p>План и последние известные факты. Автоматические отчёты участников пока не подключены.</p>
                </details>

                <div className="cardBottom">
                  <div className="bottomRow">
                    <div className="statusArea">
                      <div className="switchLabel">Статус проекта</div>
                      <div className="statusSwitch" aria-label={"Статус проекта " + project.title}>
                        {statusConfig.map((status) => (
                          <button
                            key={status.key}
                            type="button"
                            className={"statusBtn " + status.key + " " + (statuses[project.title] === status.key ? "selected" : "")}
                            onClick={() => moveProject(project.title, status.key)}
                          >
                            {status.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {project.href && (
                      <Link className="openProject" href={project.href}>Открыть проект →</Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}
