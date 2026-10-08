import React from "react";
const images={
  "Відновимо": "photo-1600596542815-ffad4c1539a9",
  "Shopify": "photo-1485827404703-89b55fcc595e",
  "Taxi / Private Driver / Prague Tours": "photo-1449965408869-eaa3f722e40d",
  "Life Project": "photo-1441974231531-c6227db76b6e",
  "International Driver Platform · Europe & USA": "photo-1488085061387-422e29b40080",
  "Trading Bots": "photo-1611974789855-9c2a0a7236a3",
  "YouTube World": "photo-1492619375914-88005aa9e8fb",
  "Мир Насти · TikTok / YouTube": "photo-1516280440614-37939bbacd81",
  "Dating App": "photo-1516589178581-6cd7833ae3b2",
  "Crypto Shop / Digital Goods": "photo-1621761191319-c6fb62004040",
  "AI Product Monetization": "photo-1677442136019-21780ecad995",
  "Family Business Network": "photo-1529156069898-49953e39b3ac",
  "Landscape Design · Prague / Czechia": "photo-1416879595882-3373a0480b5b",
  "Amazon Books": "photo-1495446815901-a7297e633e8d",
  "Family Clothing Brand": "photo-1483985988355-763728e1935b",
  "NFT Family Art": "photo-1549490349-8643362247b5",
  "Private Outreach / Family Story": "photo-1455390582262-044cdead277a",
  "Prague Casting & Content Studio": "photo-1485846234645-a62644f84728",
  "Valencia DJ · Shop + Events": "photo-1470225620780-dba8ba36b745",
  "Gift Travel Shop": "photo-1544551763-46a013bb70d5",
  "Roblox Game": "photo-1535223289827-42f1e9919769",
  "Family Music Video": "photo-1511379938547-c1f69419868d",
  "Wedding Complex": "photo-1519741497674-611481863552",
  "Криптомир": "photo-1639762681485-074b7f938ba0",
  "Флотилия Прага": "photo-1555215695-3004980ad54e",
  "Пирамида": "photo-1509316785289-025f5b846b35",
  "Семья": "photo-1511895426328-dc8714191300",
  "Финансы": "photo-1579621970563-ebec7560ff3e",
  "Гараж семьи": "photo-1503376780353-7e6692767b70",
  "Проекты": "photo-1518770660439-4636190af475",
  "Члены семьи": "photo-1529156069898-49953e39b3ac",
  "События": "photo-1506784983877-45594efa4cbe",
  "Цели семьи": "photo-1519681393784-d120267933ba",
  "Семейный доход": "photo-1554224155-6726b3ff858f",
  "Все категории": "photo-1554224154-26032ffc0d07",
  "Долги и кредиты": "photo-1563013544-824ae1b704d3",
  "Резерв": "photo-1579621970795-87facc2f976d",
  "До конца периода": "photo-1460925895917-afdab827c52f",
  "Свободные деньги": "photo-1544377193-33dcf4d68fb5",
  "Hyundai ix35": "photo-1494976388531-d1058494cdd8",
  "Обслуживание": "photo-1487754180451-c456f719a1fc",
  "Стоимость владения": "photo-1556742049-0cfed4f6a45d",
  "Следующая машина": "photo-1503376780353-7e6692767b70"
};
const fallback="photo-1518770660439-4636190af475";
export function artForTitle(title=""){return title;}
export default function ProjectArt({kind="Проекты",className=""}){
 const photo=images[kind]||fallback;
 return <div className={"cinemaArt "+className} aria-label={"Иллюстрация: "+kind} role="img" style={{position:"relative",overflow:"hidden",minHeight:95,backgroundColor:"#171612",backgroundImage:'linear-gradient(0deg,rgba(4,6,8,.55),transparent 70%),url("https://images.unsplash.com/'+photo+'?auto=format&fit=crop&w=960&q=82")',backgroundSize:"cover",backgroundPosition:"center"}}>
 <div style={{position:"absolute",inset:0,background:"linear-gradient(125deg,rgba(246,193,91,.16),transparent 46%,rgba(0,0,0,.2))",pointerEvents:"none"}}/>
 </div>;
}
