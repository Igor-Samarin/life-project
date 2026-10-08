import React from "react";

const motifs = {
  robot:"robot", ai:"robot", shop:"robot", finance:"coins", trading:"coins", crypto:"coins",
  car:"car", taxi:"car", garage:"car", driver:"car", family:"tree", life:"tree",
  home:"home", housing:"home", travel:"travel", yacht:"travel", landscape:"garden",
  media:"camera", game:"game", books:"books", music:"music", default:"diamond"
};
export function artForTitle(title="") {
 const t=title.toLowerCase();
 if(/shopify|ai|companion|youtube world/.test(t))return "robot";
 if(/відновимо|восстанов|wedding/.test(t))return "home";
 if(/taxi|driver|гараж|bmw|флотили|hyundai|автомоб/.test(t))return "car";
 if(/travel|путешеств|valencia|gift/.test(t))return "travel";
 if(/trading|crypto|крипт|финанс|доход|расход|резерв|долг|кредит|деньги/.test(t))return "coins";
 if(/family|семь|life project|жизнь/.test(t))return "tree";
 if(/landscape|ландшафт/.test(t))return "garden";
 if(/roblox|game/.test(t))return "game";
 if(/books|книг/.test(t))return "books";
 if(/music|dj/.test(t))return "music";
 if(/casting|video|tiktok|youtube|nft|art/.test(t))return "camera";
 return "diamond";
}
export default function ProjectArt({kind="diamond",className=""}) {
 const id="art-"+kind;
 return <div className={"cinemaArt "+className} aria-hidden="true">
 <svg viewBox="0 0 400 230" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" role="img">
 <defs>
  <radialGradient id={id+"bg"}><stop stopColor="#594525"/><stop offset=".55" stopColor="#1d2127"/><stop offset="1" stopColor="#080b0d"/></radialGradient>
  <linearGradient id={id+"gold"} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#fff4bb"/><stop offset=".24" stopColor="#e5b856"/><stop offset=".58" stopColor="#705023"/><stop offset=".85" stopColor="#f1cc75"/><stop offset="1" stopColor="#33220d"/></linearGradient>
  <linearGradient id={id+"steel"} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f6f6f4"/><stop offset=".3" stopColor="#9da7b2"/><stop offset=".7" stopColor="#323943"/><stop offset="1" stopColor="#d6c6a5"/></linearGradient>
  <filter id={id+"glow"}><feGaussianBlur stdDeviation="7"/></filter>
 </defs>
 <rect width="400" height="230" fill={"url(#"+id+"bg)"}/>
 <circle cx="220" cy="110" r="93" fill="#b58b38" opacity=".22" filter={"url(#"+id+"glow)"}/>
 <g stroke="#d8ae60" strokeOpacity=".12">{Array.from({length:10},(_,i)=><path key={i} d={`M${i*48} 0L${i*48-75} 230`}/>)}</g>
 {kind==="robot"&&<g><ellipse cx="203" cy="229" rx="102" ry="33" fill="#13161a"/><path d="M144 230v-43q59-38 119 0v43" fill={"url(#"+id+"steel)"} stroke="#b89551" strokeWidth="3"/><path d="M155 80q0-52 48-55 55 0 59 55l-8 72q-20 34-51 37-38-5-51-39z" fill={"url(#"+id+"steel)"} stroke="#f4cf80" strokeWidth="2"/><path d="M158 111q22-13 42 0m11 0q20-13 43 0" stroke="#a45c4e" strokeWidth="7"/><path d="M171 111h24m22 0h24" stroke="#ff9c74" strokeWidth="3"/><path d="M202 120l-7 24h15m-26 17q20 10 40 0" fill="none" stroke="#8d6c56" strokeWidth="3"/><circle cx="147" cy="111" r="18" fill="#b98c50" stroke="#ffdf99" strokeWidth="4"/><circle cx="263" cy="111" r="18" fill="#b98c50" stroke="#ffdf99" strokeWidth="4"/><path d="M147 82q-15-55 50-65" fill="none" stroke="#dcb565" strokeWidth="5"/></g>}
 {kind==="car"&&<g><ellipse cx="202" cy="197" rx="164" ry="24" fill="#050607"/><path d="M56 141l42-12 36-52q11-12 32-13h97q20 2 35 19l35 44 22 12 5 42H49z" fill={"url(#"+id+"steel)"} stroke="#e8bb68" strokeWidth="3"/><path d="M145 81h109l32 45H108z" fill="#0d1722" stroke="#e7d2a2" strokeWidth="3"/><path d="M199 82v44" stroke="#e0c99a" strokeWidth="3"/><path d="M56 148h300" stroke="#bca77a" strokeWidth="3"/><circle cx="112" cy="179" r="28" fill="#090b0e" stroke="#b8a277" strokeWidth="7"/><circle cx="301" cy="179" r="28" fill="#090b0e" stroke="#b8a277" strokeWidth="7"/><circle cx="112" cy="179" r="11" fill="#d8c49a"/><circle cx="301" cy="179" r="11" fill="#d8c49a"/><path d="M56 142l45-8-9 19H54m258-19 39 9v13h-44" fill="#fff0b6" stroke="#e6b65d" strokeWidth="3"/></g>}
 {kind==="home"&&<g><path d="M86 114 204 30l115 84v105H86z" fill="#453626" stroke="#ffcf6d" strokeWidth="5"/><path d="M64 122 204 19l139 103" fill="none" stroke={"url(#"+id+"gold)"} strokeWidth="13"/><rect x="120" y="124" width="49" height="54" fill="#f4c45c"/><rect x="229" y="124" width="49" height="54" fill="#f4c45c"/><path d="M185 219v-76h38v76" fill="#171717" stroke="#e9b65d" strokeWidth="4"/><path d="M204 45v-17" stroke="#ffe49a" strokeWidth="3"/><path d="M75 214q-36-28-57-15m295 13q34-31 66-12" stroke="#e7b95d" strokeWidth="9" fill="none"/></g>}
 {kind==="tree"&&<g><path d="M199 225v-108m0 50-53-53m53 35 62-65m-65 39-30-48" stroke={"url(#"+id+"gold)"} strokeWidth="15" strokeLinecap="round"/><g fill="#bd934a" stroke="#ffe2a0" strokeWidth="2">{[[200,58,40],[153,86,38],[250,86,40],[119,121,29],[284,122,30],[184,102,45],[227,107,40]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} opacity=".87"/>)}</g><path d="M95 225q104-25 212 0" stroke="#8d6e38" strokeWidth="8" fill="none"/></g>}
 {kind==="travel"&&<g><path d="M0 160q60-20 120 0t120 0 160 0v70H0z" fill="#102b39"/><path d="M62 166h274l-42 42H106z" fill="#f4f0df" stroke="#e7bc65" strokeWidth="3"/><path d="M140 160V93h130l30 67" fill="#d4e0e3" stroke="#f4c974" strokeWidth="4"/><path d="M163 100h91v42h-91z" fill="#0d2430"/><path d="M200 93V54" stroke="#f0d69b" strokeWidth="5"/><path d="M203 58q61 0 79 35h-79" fill="#d8b56c"/><path d="M0 210q70-17 140 0t140 0 120 0" stroke="#d8a857" strokeWidth="3" fill="none"/></g>}
 {kind==="coins"&&<g>{[[140,133,60],[235,120,68],[200,165,55]].map(([x,y,r],i)=><g key={i}><circle cx={x} cy={y} r={r} fill={"url(#"+id+"gold)"} stroke="#ffe7a4" strokeWidth="5"/><circle cx={x} cy={y} r={r-12} fill="none" stroke="#8d642b" strokeWidth="3"/><text x={x} y={y+21} fontSize="67" textAnchor="middle" fontWeight="bold" fill="#4c3213">{i===1?"₿":"$"}</text></g>)}</g>}
 {kind==="garden"&&<g><path d="M0 190q90-45 180 0t220-20v60H0" fill="#223a27"/>{[80,150,240,320].map((x,i)=><g key={i}><path d={`M${x} 205V${70+i%2*25}`} stroke="#ba9d5e" strokeWidth="7"/><circle cx={x} cy={75+i%2*25} r={40+i%2*12} fill="#3d6746" stroke="#a5a96b" strokeWidth="4"/><circle cx={x-17} cy={60+i%2*25} r="10" fill="#c4b56a"/></g>)}</g>}
 {["camera","game","books","music","diamond"].includes(kind)&&<g><circle cx="200" cy="118" r="88" fill="#3a3024" stroke={"url(#"+id+"gold)"} strokeWidth="7"/><text x="200" y="152" fontSize="98" textAnchor="middle" fill="#f6d47e" fontFamily="Georgia,serif">{kind==="camera"?"◉":kind==="game"?"✦":kind==="books"?"▤":kind==="music"?"♫":"◆"}</text></g>}
 <path d="M0 228H400" stroke="#edc36d" strokeOpacity=".45" strokeWidth="3"/>
 </svg></div>;
}
