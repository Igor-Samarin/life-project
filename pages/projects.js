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
  { title: "Shopify", text: "Главный e-commerce проект: подбор товаров, тесты, магазины, поставщики, аналитика и масштабирование.", meta: "E-commerce", href: "/projects/shopify", priority: "Приоритет №1", status: "active" },
  { title: "Taxi / Private Driver / Prague Tours", text: "Текущий доход: прямые клиенты, туристические маршруты по Праге, визитки, QR, бронирования и частные поездки.", meta: "Текущий доход", priority: "Работа сейчас", status: "active" },
  { title: "Life Project", text: "Единый личный кабинет: проекты, семья, финансы, гараж, планы, задачи, статусы и единый центр управления.", meta: "Система", priority: "Собираем в один кабинет", status: "active" },

  { title: "International Driver Platform · Europe & USA", text: "Международный сервис поездок: премиальные водители со своими авто, аэропорт ↔ отель, «машина сейчас», бронирование, геолокация и мобильные приложения.", meta: "Mobility", priority: "Прототип / план", status: "prep" },
  { title: "Trading Bots", text: "Крипто-боты: несколько стратегий, бэктест, paper trading, малый депозит и отдельный бот фундаментальных новостей.", meta: "Fintech", priority: "Исследование", status: "prep" },
  { title: "YouTube World", text: "AI-производство каналов и короткого контента: сценарии, аватары, оформление, анализ, автоматизация и будущая публикация.", meta: "Media / AI", priority: "Подготовка", status: "prep" },
  { title: "Мир Насти · TikTok / YouTube", text: "Отдельный контент-бизнес: AI-аватар, короткие видео, развитие канала и выход на самостоятельную монетизацию.", meta: "Creator", priority: "Подготовка", status: "prep" },
  { title: "Dating App", text: "Сайт / приложение знакомств: анкеты, внутренняя валюта, платный контент, подарки, логистика и игровые механики.", meta: "App", priority: "Концепт", status: "prep" },
  { title: "Crypto Shop / Digital Goods", text: "Магазин цифровых товаров с оплатой криптовалютой, перепродажей цифровых продуктов и собственной комиссией.", meta: "Crypto commerce", priority: "Концепт", status: "prep" },
  { title: "AI Product Monetization", text: "Упаковка и монетизация AI-программы Артёма: продукт, позиционирование, модель оплаты и продажи.", meta: "AI / SaaS", priority: "План", status: "prep" },
  { title: "Family Business Network", text: "Система семейных бизнесов: отдельные проекты участникам, общий фонд, резерв, распределение прибыли и постепенное подключение новых направлений.", meta: "Business system", priority: "Архитектура", status: "prep" },
  { title: "Landscape Design · Prague / Czechia", text: "Ландшафтный бизнес: рынок Праги и Чехии, услуги, цены, стартовый бюджет, юридические требования и пошаговый запуск.", meta: "Services", priority: "Исследование", status: "prep" },

  { title: "Amazon Books", text: "Издание и продажа книг через Amazon как отдельный цифровой и контентный бизнес.", meta: "Publishing", priority: "План", status: "planned" },
  { title: "Family Clothing Brand", text: "Премиальная семейная одежда: тёмная и светлая капсулы, имена, нордические символы, чёрно-золотая эстетика и цифровые бонусы.", meta: "Brand", priority: "Концепт", status: "planned" },
  { title: "NFT Family Art", text: "Художественный NFT-проект на основе семейной истории войны и разлуки: архив, отбор материалов, художественная сборка и аукцион.", meta: "Art / NFT", priority: "Концепт", status: "planned" },
  { title: "Private Outreach / Family Story", text: "Индивидуальные обращения к состоятельным людям с семейной историей, целями и персонализированными письмами.", meta: "Outreach", priority: "План", status: "planned" },
  { title: "Prague Casting & Content Studio", text: "Легальная 18+ студия / агентство: кастинг, продакшн, модель дохода, команда и бюджет запуска.", meta: "Studio", priority: "План", status: "planned" },
  { title: "Valencia DJ · Shop + Events", text: "Проект в Валенсии: магазин DJ-товаров плюс организация вечеринок и мероприятий.", meta: "Music / Commerce", priority: "План", status: "planned" },
  { title: "Gift Travel Shop", text: "Подарочный магазин с фокусом на комфортные путешествия и полезные товары для поездок.", meta: "E-commerce", priority: "Идея", status: "planned" },
  { title: "Roblox Game", text: "Создание игры по мотивам любимых механик Roblox с потенциалом дальнейшего развития и монетизации.", meta: "Game", priority: "Идея", status: "planned" },
  { title: "Family Music Video", text: "Семейный видеоклип из фотографий и материалов под выбранную песню, с художественной сборкой и монтажом.", meta: "Media", priority: "Творческий проект", status: "planned" },
  { title: "Wedding Complex", text: "Концепт свадебного комплекса: кафе, сервисы и магазины свадебных товаров в одной экосистеме.", meta: "Real Estate / Services", priority: "Концепт", status: "planned" },
  { title: "Криптомир", text: "Отдельный крипто-раздел: способы заработка, боты, криптооплата в наших проектах, цифровые товары и дальнейшие идеи.", meta: "Crypto", priority: "Очередь", status: "planned" },
  { title: "Флотилия Прага", text: "Собственная такси-флотилия: водители на своих авто, партнёрские машины, бонусы, экономика и юридическая структура.", meta: "Taxi business", priority: "Позже", status: "planned" },
  { title: "Пирамида", text: "Отдельный проект с 10 уровнями. Идея сохранена, но пока не развиваем и не трогаем.", meta: "Отдельный концепт", priority: "Позже", status: "planned" }
];

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
        .statusNav{display:flex;gap:8px;flex-wrap:wrap;margin-top:24px}
        .statusPill{padding:9px 12px;border-radius:999px;border:1px solid rgba(217,187,91,.16);background:rgba(20,22,24,.7);font-size:11px;color:#b8b2a5}
        .statusPill strong{color:#ecd879;margin-left:6px}
        .group{margin-top:38px}
        .groupHead{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:16px}
        .groupTitle{font-family:Georgia,serif;font-size:31px;font-weight:400;margin:0}
        .groupText{color:#8f8a80;font-size:13px;line-height:1.55;max-width:690px;margin:7px 0 0}
        .count{color:#c7ac57;font-size:12px;white-space:nowrap}
        .projectGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .projectCard{min-height:230px;padding:22px;border:1px solid rgba(217,187,91,.14);border-radius:18px;background:linear-gradient(145deg,rgba(30,32,34,.76),rgba(13,14,16,.82));display:flex;flex-direction:column;position:relative;overflow:hidden}
        .projectCard:hover{border-color:rgba(217,187,91,.34)}
        .active .projectCard{border-color:rgba(225,196,102,.27);background:linear-gradient(145deg,rgba(53,51,36,.68),rgba(17,20,22,.86))}
        .metaLine{display:flex;align-items:center;justify-content:space-between;gap:10px}
        .meta{font-size:9px;color:#c9ad54;text-transform:uppercase;letter-spacing:.16em}
        .priority{font-size:10px;color:#8e958e}
        .projectCard h3{font-family:Georgia,serif;font-size:22px;font-weight:400;margin:18px 0 9px;line-height:1.15}
        .projectCard p{color:#969187;line-height:1.55;font-size:12px;margin:0}
        .cardBottom{margin-top:auto;padding-top:20px}
        .switchLabel{font-size:9px;color:#777d78;text-transform:uppercase;letter-spacing:.12em;margin-bottom:7px}
        .statusSwitch{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;padding:4px;border:1px solid rgba(217,187,91,.12);border-radius:12px;background:rgba(6,8,9,.42)}
        .statusBtn{border:0;border-radius:8px;padding:7px 5px;background:transparent;color:#7f857f;font-size:9px;line-height:1.15;cursor:pointer;transition:.18s ease}
        .statusBtn:hover{color:#e7ddc1;background:rgba(217,187,91,.08)}
        .statusBtn.selected{color:#17170f;background:#d8bc64;font-weight:700}
        .openProject{display:inline-block;margin-top:12px;color:#d5bc68;font-size:11px}
        .openProject:hover{color:#ffe89a;text-decoration:underline}
        .empty{grid-column:1/-1;padding:24px;border:1px dashed rgba(217,187,91,.15);border-radius:16px;color:#777d78;font-size:12px}
        .saveNote{margin-top:12px;color:#686d69;font-size:10px}
        @media(max-width:1000px){.projectGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:680px){
          .projectGrid{grid-template-columns:1fr}
          .groupHead{align-items:flex-start;flex-direction:column}
          .count{white-space:normal}
          .statusBtn{font-size:10px;padding:9px 5px}
        }
      `}</style>

      <div className="lp-eyebrow">Раздел 04 · Единый каталог</div>
      <h1 className="lp-title">Все проекты</h1>
      <p className="lp-subtitle">Теперь статус любого проекта можно менять прямо на карточке. Нажимаешь «В работе», «Подготовка» или «Запланировано» — карточка сразу переезжает в нужный раздел.</p>

      <div className="lp-kpis">
        <div className="lp-kpi"><span>Всего</span><strong>{projectSeed.length}</strong></div>
        {grouped.map((group) => (
          <div className="lp-kpi" key={group.key}><span>{group.label}</span><strong>{group.projects.length}</strong></div>
        ))}
      </div>

      <div className="statusNav">
        {grouped.map((group) => (
          <div className="statusPill" key={group.key}>{group.label} <strong>{group.projects.length}</strong></div>
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

                <h3>{project.title}</h3>
                <p>{project.text}</p>

                <div className="cardBottom">
                  <div className="switchLabel">Статус проекта</div>
                  <div className="statusSwitch" aria-label={"Статус проекта " + project.title}>
                    {statusConfig.map((status) => (
                      <button
                        key={status.key}
                        type="button"
                        className={"statusBtn " + (statuses[project.title] === status.key ? "selected" : "")}
                        onClick={() => moveProject(project.title, status.key)}
                      >
                        {status.label}
                      </button>
                    ))}
                  </div>

                  {project.href && (
                    <Link className="openProject" href={project.href}>Открыть проект →</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}
