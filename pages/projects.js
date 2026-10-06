import Link from "next/link";
import Layout from "../components/Layout";

const groups = [
  {
    key: "active",
    title: "В работе",
    subtitle: "Главный фокус и проекты, которые уже связаны с реальными действиями.",
    projects: [
      { title: "Shopify", text: "Главный e-commerce проект: подбор товаров, тесты, магазины, поставщики, аналитика и масштабирование.", meta: "E-commerce", href: "/projects/shopify", priority: "Приоритет №1" },
      { title: "Taxi / Private Driver / Prague Tours", text: "Текущий доход: прямые клиенты, туристические маршруты по Праге, визитки, QR, бронирования и частные поездки.", meta: "Текущий доход", priority: "Работа сейчас" },
      { title: "Life Project", text: "Единый личный кабинет: проекты, семья, финансы, гараж, планы, задачи, статусы и единый центр управления.", meta: "Система", priority: "Собираем в один кабинет" }
    ]
  },
  {
    key: "planned",
    title: "Подготовка / запланировано",
    subtitle: "Проекты уже придуманы и сохранены, но сейчас не должны отвлекать от главного приоритета.",
    projects: [
      { title: "International Driver Platform · Europe & USA", text: "Международный сервис поездок: премиальные водители со своими авто, аэропорт ↔ отель, «машина сейчас», бронирование, геолокация и мобильные приложения.", meta: "Mobility", priority: "Прототип / план" },
      { title: "Trading Bots", text: "Крипто-боты: несколько стратегий, бэктест, paper trading, малый депозит и отдельный бот фундаментальных новостей.", meta: "Fintech", priority: "Исследование" },
      { title: "YouTube World", text: "AI-производство каналов и короткого контента: сценарии, аватары, оформление, анализ, автоматизация и будущая публикация.", meta: "Media / AI", priority: "Подготовка" },
      { title: "Мир Насти · TikTok / YouTube", text: "Отдельный контент-бизнес: AI-аватар, короткие видео, развитие канала и выход на самостоятельную монетизацию.", meta: "Creator", priority: "Подготовка" },
      { title: "Dating App", text: "Сайт / приложение знакомств: анкеты, внутренняя валюта, платный контент, подарки, логистика и игровые механики.", meta: "App", priority: "Концепт" },
      { title: "Crypto Shop / Digital Goods", text: "Магазин цифровых товаров с оплатой криптовалютой, перепродажей цифровых продуктов и собственной комиссией.", meta: "Crypto commerce", priority: "Концепт" },
      { title: "Amazon Books", text: "Издание и продажа книг через Amazon как отдельный цифровой и контентный бизнес.", meta: "Publishing", priority: "План" },
      { title: "AI Product Monetization", text: "Упаковка и монетизация AI-программы Артёма: продукт, позиционирование, модель оплаты и продажи.", meta: "AI / SaaS", priority: "План" },
      { title: "Family Business Network", text: "Система семейных бизнесов: отдельные проекты участникам, общий фонд, резерв, распределение прибыли и постепенное подключение новых направлений.", meta: "Business system", priority: "Архитектура" },
      { title: "Family Clothing Brand", text: "Премиальная семейная одежда: тёмная и светлая капсулы, имена, нордические символы, чёрно-золотая эстетика и цифровые бонусы.", meta: "Brand", priority: "Концепт" },
      { title: "Landscape Design · Prague / Czechia", text: "Ландшафтный бизнес: рынок Праги и Чехии, услуги, цены, стартовый бюджет, юридические требования и пошаговый запуск.", meta: "Services", priority: "Исследование" },
      { title: "NFT Family Art", text: "Художественный NFT-проект на основе семейной истории войны и разлуки: архив, отбор материалов, художественная сборка и аукцион.", meta: "Art / NFT", priority: "Концепт" },
      { title: "Private Outreach / Family Story", text: "Индивидуальные обращения к состоятельным людям с семейной историей, целями и персонализированными письмами.", meta: "Outreach", priority: "План" },
      { title: "Prague Casting & Content Studio", text: "Легальная 18+ студия / агентство: кастинг, продакшн, модель дохода, команда и бюджет запуска.", meta: "Studio", priority: "План" },
      { title: "Valencia DJ · Shop + Events", text: "Проект в Валенсии: магазин DJ-товаров плюс организация вечеринок и мероприятий.", meta: "Music / Commerce", priority: "План" },
      { title: "Gift Travel Shop", text: "Подарочный магазин с фокусом на комфортные путешествия и полезные товары для поездок.", meta: "E-commerce", priority: "Идея" },
      { title: "Roblox Game", text: "Создание игры по мотивам любимых механик Roblox с потенциалом дальнейшего развития и монетизации.", meta: "Game", priority: "Идея" },
      { title: "Family Music Video", text: "Семейный видеоклип из фотографий и материалов под выбранную песню, с художественной сборкой и монтажом.", meta: "Media", priority: "Творческий проект" },
      { title: "Wedding Complex", text: "Концепт свадебного комплекса: кафе, сервисы и магазины свадебных товаров в одной экосистеме.", meta: "Real Estate / Services", priority: "Концепт" }
    ]
  },
  {
    key: "deferred",
    title: "Отложено",
    subtitle: "Идеи сохранены, но сейчас сознательно не тратим на них время и деньги.",
    projects: [
      { title: "Криптомир", text: "Отдельный крипто-раздел: способы заработка, боты, криптооплата в наших проектах, цифровые товары и дальнейшие идеи.", meta: "Crypto", priority: "Отложено" },
      { title: "Флотилия Прага", text: "Собственная такси-флотилия: водители на своих авто, партнёрские машины, бонусы, экономика и юридическая структура.", meta: "Taxi business", priority: "Самая последняя очередь" },
      { title: "Пирамида", text: "Отдельный проект с 10 уровнями. Идея сохранена, но пока не развиваем и не трогаем.", meta: "Отдельный концепт", priority: "Отложено" }
    ]
  }
];

const allProjects = groups.flatMap((g) => g.projects);

export default function Projects() {
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
        .projectCard{min-height:190px;padding:22px;border:1px solid rgba(217,187,91,.14);border-radius:18px;background:linear-gradient(145deg,rgba(30,32,34,.76),rgba(13,14,16,.82));display:flex;flex-direction:column;position:relative;overflow:hidden}
        .projectCard:hover{border-color:rgba(217,187,91,.34)}
        .projectCard.activeCard{border-color:rgba(225,196,102,.30);background:linear-gradient(145deg,rgba(53,51,36,.70),rgba(17,20,22,.86))}
        .metaLine{display:flex;align-items:center;justify-content:space-between;gap:10px}
        .meta{font-size:9px;color:#c9ad54;text-transform:uppercase;letter-spacing:.16em}
        .priority{font-size:10px;color:#8e958e}
        .projectCard h3{font-family:Georgia,serif;font-size:22px;font-weight:400;margin:20px 0 9px;line-height:1.15}
        .projectCard p{color:#969187;line-height:1.55;font-size:12px;margin:0}
        .open{margin-top:auto;padding-top:20px;color:#d5bc68;font-size:11px}
        .deferred .projectCard{opacity:.78}
        .deferred .projectCard:hover{opacity:1}
        @media(max-width:1000px){.projectGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:680px){.projectGrid{grid-template-columns:1fr}.groupHead{align-items:flex-start;flex-direction:column}.count{white-space:normal}}
      `}</style>

      <div className="lp-eyebrow">Раздел 04 · Единый каталог</div>
      <h1 className="lp-title">Все проекты</h1>
      <p className="lp-subtitle">Собрала бизнесы, идеи и рабочие направления в одном месте. Теперь этот экран — главный каталог: здесь видно, чем занимаемся сейчас, что готовим и что специально отложено.</p>

      <div className="lp-kpis">
        <div className="lp-kpi"><span>Всего</span><strong>{allProjects.length}</strong></div>
        <div className="lp-kpi"><span>В работе</span><strong>{groups[0].projects.length}</strong></div>
        <div className="lp-kpi"><span>Подготовка</span><strong>{groups[1].projects.length}</strong></div>
        <div className="lp-kpi"><span>Отложено</span><strong>{groups[2].projects.length}</strong></div>
      </div>

      <div className="statusNav">
        <div className="statusPill">В работе <strong>{groups[0].projects.length}</strong></div>
        <div className="statusPill">Подготовка <strong>{groups[1].projects.length}</strong></div>
        <div className="statusPill">Отложено <strong>{groups[2].projects.length}</strong></div>
      </div>

      {groups.map((group) => (
        <section className={`group ${group.key}`} key={group.key}>
          <div className="groupHead">
            <div>
              <h2 className="groupTitle">{group.title}</h2>
              <p className="groupText">{group.subtitle}</p>
            </div>
            <div className="count">{group.projects.length} проектов</div>
          </div>

          <div className="projectGrid">
            {group.projects.map((project) => {
              const inner = (
                <>
                  <div className="metaLine">
                    <span className="meta">{project.meta}</span>
                    <span className="priority">{project.priority}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="open">{project.href ? "Открыть проект →" : group.key === "deferred" ? "Сохранено · не трогаем" : "Карточка проекта сохранена"}</div>
                </>
              );

              return project.href
                ? <Link className="projectCard activeCard" href={project.href} key={project.title}>{inner}</Link>
                : <article className="projectCard" key={project.title}>{inner}</article>;
            })}
          </div>
        </section>
      ))}
    </Layout>
  );
}
