import ProjectArt, { artForTitle } from "../components/ProjectArt";
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
  { title: "Life Project", icon: "◎", text: "Единый личный кабинет: проекты, семья, финансы, гараж, планы, задачи, статусы и единый центр управления.", meta: "Система", priority: "Собираем в один кабинет", status: "active" },

  { title: "AI Template Studio", icon: "▧", text: "Отдельная студия цифровых продуктов: оригинальные шаблоны сайтов, лендингов, e-commerce тем, UI-компонентов и готовых наборов для бизнеса. AI помогает с дизайном, кодом, тестированием, документацией и демо; продажа лицензий через маркетплейсы и собственный магазин.", meta: "Digital Products / Templates", href: "/projects/ai-template-studio", priority: "Недалёкое будущее · без запуска", status: "planned" },
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
const projectArtwork = {
  "Відновимо":"🏠","Shopify":"🤖","Life Project":"🌳",
  "AI Template Studio":"🧩","International Driver Platform · Europe & USA":"✈️","Trading Bots":"🪙","YouTube World":"🎬",
  "Мир Насти · TikTok / YouTube":"🎤","Dating App":"💝","Crypto Shop / Digital Goods":"💎",
  "AI Product Monetization":"🤖","Family Business Network":"🏰","Landscape Design · Prague / Czechia":"🌿",
  "Amazon Books":"📚","Family Clothing Brand":"👑","NFT Family Art":"🎨",
  "Private Outreach / Family Story":"✉️","Prague Casting & Content Studio":"🎥",
  "Valencia DJ · Shop + Events":"🎧","Gift Travel Shop":"🛥️","Roblox Game":"🎮",
  "Family Music Video":"🎼","Wedding Complex":"💍","Криптомир":"🪙","Флотилия Прага":"🚖","Пирамида":"🔺"
};
const projectVisuals = {
  "Shopify": {mark:"L", tone:"#e9d6a3"},
  "Відновимо": {mark:"✚", tone:"#9ac9d9"},
  "Life Project": {mark:"◎", tone:"#dfbe78"},
  "Trading Bots": {mark:"₿", tone:"#e6c47b"},
  "Family Business Network": {mark:"◈", tone:"#dfbe78"},
  "Landscape Design · Prague / Czechia": {mark:"❧", tone:"#a8d1ac"}
};
const actionList = (project) => ownerActions[project.title] || [];
const nextWork = (project, status) => {
  if (status === "planned") return "В очереди: сохранить концепцию и критерии запуска. Исполнитель и срок пока не назначены.";
  if (status === "prep") return "В подготовке: собрать требования, оценить бюджет и риски, составить план запуска. Исполнитель пока не назначен.";
  return "В работе: уточнить ближайший результат, ответственного и срок; получить подтверждённый отчёт.";
};

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
  const [selectedProject, setSelectedProject] = useState(null);
  const [decisions, setDecisions] = useState({});
  const [statuses, setStatuses] = useState(() =>
    Object.fromEntries(projectSeed.map((project) => [project.title, project.status]))
  );

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
      if (saved && typeof saved === "object") {
        setStatuses((current) => ({ ...current, ...saved, "AI Template Studio": "planned" }));
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

  const markDecision = (title, task) => setDecisions(current => ({...current, [title + ":" + task]: !current[title + ":" + task]}));

  const grouped = useMemo(() => {
    return statusConfig.map((status) => ({
      ...status,
      projects: projectSeed.filter((project) => statuses[project.title] === status.key)
    }));
  }, [statuses]);

  return (
    <Layout active="/projects">
      <style jsx>{`
        .actionPreview{margin:14px 0 0;padding:12px;border-radius:12px;background:rgba(0,0,0,.19);border:1px solid rgba(220,191,100,.16)}
        .actionPreview strong{font-size:11px;color:#ead797}
        .actionPreview ol{padding-left:18px;margin:8px 0 0;color:#d6d1c4;font-size:11px;line-height:1.65}
        .actionPreview p{margin:7px 0 0}
        .projectIcon{font-size:20px!important}
        .workDetails{margin-top:18px;border-top:1px solid #d6bd6a22;padding-top:14px}
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

        .projectGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
        .projectCard{min-height:350px;padding:20px 21px;border-radius:18px;display:flex;flex-direction:column;position:relative;overflow:hidden;transition:.18s ease}
        .active .projectCard{
          border:1px solid rgba(184,193,73,.34);
          background:
            radial-gradient(circle at 90% 10%,rgba(160,170,54,.12),transparent 34%),
            linear-gradient(145deg,#131712,#090c0d);
        }
        .prep .projectCard{
          border:1px solid rgba(76,123,178,.36);
          background:
            radial-gradient(circle at 90% 10%,rgba(67,119,183,.14),transparent 34%),
            linear-gradient(145deg,#111822,#090c0d);
        }
        .planned .projectCard{
          border:1px solid rgba(151,66,82,.36);
          background:
            radial-gradient(circle at 90% 10%,rgba(154,64,82,.14),transparent 34%),
            linear-gradient(145deg,#1a1115,#090c0d);
        }
        :global(.projectArtwork){height:190px;margin:-20px -21px 15px;display:grid;place-items:center;position:relative;overflow:hidden;background:radial-gradient(circle at 50% 45%,rgba(238,181,73,.35),transparent 48%),linear-gradient(135deg,#3a2e1b,#111820 80%);border-bottom:1px solid rgba(230,192,95,.2)}
        :global(.projectArtwork):before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(130deg,transparent 0 25px,rgba(255,255,255,.025) 26px 27px)}
        :global(.projectArtwork) span{font-size:78px;position:relative;filter:drop-shadow(0 15px 12px #0009)}
        .projectCard:hover{transform:translateY(-4px);box-shadow:0 16px 45px #000a}
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

        .projectIcon{width:76px;height:76px;flex:0 0 76px;border-radius:20px!important;background:radial-gradient(circle at 30% 20%,rgba(245,214,123,.25),rgba(65,54,25,.32))!important;box-shadow:inset 0 1px 0 rgba(255,235,170,.22),0 8px 24px rgba(0,0,0,.25)!important}
        .projectIcon svg{width:52px;height:52px;filter:drop-shadow(0 2px 6px rgba(235,194,91,.25))}
        .mobileAction{display:none}
        .detailsButton{margin-top:12px;text-align:left;border:0;background:none;color:#ead797;font-size:12px;cursor:pointer;padding:5px 0}
        .detailBackdrop{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.78);display:flex;align-items:center;justify-content:center;padding:15px}
        .detailPanel{width:min(620px,100%);max-height:90vh;overflow:auto;border:1px solid #887543;border-radius:20px;padding:25px;background:#161a15;color:#e9e3d5;box-shadow:0 25px 80px #000}
        .detailPanel h2{font-family:Georgia,serif;font-size:28px}.detailPanel h3{font-size:16px;margin-top:25px}.detailPanel p{color:#b4b0a6;line-height:1.6}
        .detailClose{float:right;background:transparent;border:1px solid #776c4b;color:#ead797;padding:9px;border-radius:8px;cursor:pointer}
        .decisionRow{display:flex;align-items:center;justify-content:space-between;gap:15px;border-bottom:1px solid #504b37;padding:14px 0}
        .decisionRow strong{font-size:13px;font-weight:500}.decisionRow small{display:block;color:#9b978b;margin-top:6px}
        .decisionRow button{background:#c9d167;border:0;border-radius:8px;padding:9px 12px;cursor:pointer;color:#151a10;flex-shrink:0}
        .detailDisclaimer{font-size:11px}
        @media(max-width:1000px){.projectGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:680px){
          .projectGrid{grid-template-columns:1fr;gap:18px}
          .projectCard{min-height:0;padding:14px 16px;border-radius:15px}
          :global(.projectArtwork){height:94px;margin:-14px -16px 12px}
          :global(.projectArtwork) span{font-size:65px}
          .titleRow{margin-top:9px}.projectCard h3{font-size:19px}
          .projectCard p{font-size:11px;margin-top:7px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
          .projectIcon{width:62px;height:62px;flex-basis:62px;border-radius:17px!important}
          .projectIcon svg{width:43px;height:43px}
          .actionPreview{padding:9px 11px;margin-top:9px}
          .actionPreview strong{font-size:10px}.desktopActions{display:none}.mobileAction{display:block;color:#d8d1bc;font-size:11px;margin-top:5px}
          .workDetails{display:none}.cardBottom{padding-top:9px}.statusArea{display:none}
          .bottomRow{flex-direction:row;align-items:center}.openProject{font-size:11px}
          .detailsButton{margin-top:7px}
          .group{margin-top:24px}.groupTitle{font-size:25px}
          .detailPanel{padding:17px}.decisionRow{align-items:flex-start;flex-direction:column}
          .decisionRow button{align-self:flex-start}
          .groupHead{align-items:flex-start;flex-direction:column}
          .count{white-space:normal}
          .bottomRow{align-items:stretch;flex-direction:column}
          .openProject{align-self:flex-end}
          .statusBtn{font-size:10px;padding:5px 4px}
        }
      `}</style>

      {selectedProject && <div className="detailBackdrop" role="presentation" onClick={() => setSelectedProject(null)}>
        <section className="detailPanel" role="dialog" aria-modal="true" aria-label={"Задачи проекта " + selectedProject.title} onClick={event => event.stopPropagation()}>
          <button className="detailClose" type="button" onClick={() => setSelectedProject(null)}>✕ Закрыть</button>
          <div className="lp-eyebrow">{selectedProject.meta}</div>
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.text}</p>
          <h3>Твои ближайшие решения</h3>
          {actionList(selectedProject).length ? actionList(selectedProject).map((task,i) => <div className="decisionRow" key={task}>
            <div><strong>{i+1}. {task}</strong><small>{decisions[selectedProject.title + ":" + task] ? "Отмечено тобой; выполнение ещё требует проверки" : "Ожидает твоего решения"}</small></div>
            <button type="button" onClick={() => markDecision(selectedProject.title,task)}>{decisions[selectedProject.title + ":" + task] ? "Отменить отметку" : "Отметить"}</button>
          </div>) : <p>Подтверждённых задач от тебя пока нет.</p>}
          <h3>Команда и препятствия</h3>
          <p>{collaboration[selectedProject.title]?.team || "Исполнители и доступы пока не подтверждены."}</p>
          <p>{collaboration[selectedProject.title]?.teamBlock || "Актуальный отчёт исполнителя не подключён."}</p>
          {selectedProject.href && <Link className="openProject" href={selectedProject.href}>Открыть проект →</Link>}
          <p className="detailDisclaimer">Это рабочий план. Отметки не запускают автоматические действия и не синхронизируются между устройствами.</p>
        </section>
      </div>}
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
                <ProjectArt kind={project.title} className="projectArtwork" />
                <div className="metaLine">
                  <span className="meta">{project.meta}</span>
                  <span className="priority">{project.priority}</span>
                </div>

                <div className="titleRow">
                  <div className="projectIcon" aria-hidden="true"><svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{project.title === "Відновимо" ? <><path d="M24 5v38M5 24h38"/><path d="M9 10l6 6M39 10l-6 6M9 38l6-6M39 38l-6-6"/></> : project.title === "Shopify" ? <><path d="M10 16h28l-3 25H13z"/><path d="M17 17v-5a7 7 0 0 1 14 0v5"/><path d="M20 27c2-3 8-3 9 0s-2 4-5 5-5 3-4 6"/></> : project.title === "Life Project" ? <><circle cx="24" cy="24" r="19"/><path d="M24 38V15m0 9-10-9m10 16 10-12M14 38h20"/></> : <><path d="M24 5 42 24 24 43 6 24Z"/><circle cx="24" cy="24" r="8"/><path d="M24 12v24M12 24h24"/></>}</svg></div>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.text}</p>
                <div className="actionPreview">
                  <strong>{actionList(project).length ? "Твоё следующее действие" : "Следующая работа по проекту"}</strong>
                  {actionList(project).length ? <>
                    <div className="mobileAction">{actionList(project)[0]}</div>
                    <ol className="desktopActions">{actionList(project).slice(0,3).map(task => <li key={task}>{task}</li>)}</ol>
                  </> : <p>{nextWork(project, statuses[project.title])}<br/>От тебя решение сейчас не требуется.</p>}
                </div>
                <button className="detailsButton" type="button" onClick={() => setSelectedProject(project)}>Задачи и решения →</button>
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
