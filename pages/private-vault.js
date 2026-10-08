import Layout from "../components/Layout";
import Link from "next/link";
import {useState} from "react";

// Design preview ONLY. Do not accept passphrases or store confidential data here.
export default function PrivateVault() {
  const [notice, setNotice] = useState(false);
  return <Layout>
    <section className="vault">
      <div className="eyebrow">LIFE PROJECT / PRIVATE AREA</div>
      <h1>Личный сейф</h1>
      <p className="lead">PRIVATE VAULT · закрытый архив</p>
      <div className="safe" role="img" aria-label="Закрытая металлическая дверь сейфа с золотым механическим замком">
        <div className="safeFrame">
          <div className="safeDoor">
            <div className="rivets" aria-hidden="true">◆ <span>◆</span></div>
            <div className="dialOuter"><div className="dialMiddle"><div className="dialInner"><span>✦</span></div></div></div>
            <div className="safePlate">P R I V A T E · V A U L T</div>
          </div>
        </div>
      </div>
      <div className="locked"><span className="dot"/> СЕЙФ ЗАКРЫТ</div>
      <button type="button" className="open" onClick={()=>setNotice(true)}>Проверить доступ →</button>
      {notice && <div className="notice" role="status">Это пока демонстрационный экран. Вход по кодовой фразе и защищённое хранилище ещё разрабатываются. Никакие пароли и личные данные сюда не вводи. <button onClick={()=>setNotice(false)} type="button">Понятно</button></div>}
      <p className="warning">Предварительная версия. Личные дела и документы пока не хранятся.</p>
      <Link href="/" className="back">← На главную</Link>
    </section>
    <style jsx>{`
      .vault{max-width:740px;margin:0 auto;text-align:center;padding:10px 0 36px}
      .eyebrow{font-size:11px;letter-spacing:3px;color:#b99a56}
      h1{font:normal clamp(35px,7vw,60px) Georgia,serif;color:#f1e0ae;margin:15px 0 7px}
      .lead{color:#a7a298;font-size:13px;letter-spacing:1px}
      .safe{width:min(100%,350px);aspect-ratio:1;margin:27px auto 14px;padding:14px;border:3px solid #a98945;border-radius:30px;background:linear-gradient(135deg,#69552c,#17191d 25%,#08090c 80%,#7b5d2d);box-shadow:0 12px 45px #0008,inset 0 0 0 3px #141516}
      .safeFrame{width:100%;height:100%;padding:12px;border:2px solid #927a43;border-radius:21px;background:#111317}
      .safeDoor{height:100%;border:2px solid #c9a85e;border-radius:15px;background:linear-gradient(135deg,#41403c 0%,#16191c 32%,#27282a 70%,#0e1013 100%);box-shadow:inset 0 0 30px #000a;position:relative;display:flex;align-items:center;justify-content:center}
      .rivets{position:absolute;top:12px;left:16px;right:16px;display:flex;justify-content:space-between;color:#b89c5b;font-size:11px}
      .dialOuter{width:57%;aspect-ratio:1;border-radius:50%;border:9px solid #c6a45b;box-shadow:0 0 0 4px #393022,0 10px 28px #000b,inset 0 0 18px #0009;background:repeating-conic-gradient(from 0deg,#bd9b55 0 3deg,#292a2b 3deg 30deg);display:grid;place-items:center}
      .dialMiddle{width:76%;aspect-ratio:1;border-radius:50%;background:linear-gradient(135deg,#e5c677,#6b542b 40%,#d7b36a);display:grid;place-items:center;border:3px solid #29251c}
      .dialInner{width:67%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 30% 25%,#4e4b42,#141619 75%);border:2px solid #ebc877;display:grid;place-items:center;color:#f4d38a;font-size:44px}
      .safePlate{position:absolute;bottom:17px;font-size:9px;letter-spacing:2px;color:#d5b56c}
      .locked{display:flex;justify-content:center;align-items:center;gap:8px;color:#d7bd7b;font-size:11px;letter-spacing:2px;margin:18px}
      .dot{width:7px;height:7px;background:#e0b75b;border-radius:50%}
      .open{padding:14px 26px;border:1px solid #c5a45e;background:linear-gradient(110deg,#46361d,#241e16);color:#ffe2a0;border-radius:12px;font-weight:600;cursor:pointer}
      .notice{max-width:480px;margin:20px auto;padding:18px;color:#eee0c2;background:#25221b;border:1px solid #b79a5e;border-radius:12px;line-height:1.65;font-size:13px}
      .notice button{display:block;margin:14px auto 0;padding:8px 17px;background:#44351f;color:#ffe1a1;border:1px solid #b79a5e;border-radius:8px;cursor:pointer}
      .warning{color:#9b978e;font-size:12px;line-height:1.5;margin:24px auto}
      .back{display:inline-block;color:#d8bc79;font-size:13px}
      @media(max-width:500px){.vault{padding:0 4px}.safe{width:min(100%,290px);padding:11px}.safeFrame{padding:9px}.safePlate{letter-spacing:1px;font-size:8px}}
      @media(prefers-reduced-motion:no-preference){.dialInner span{animation:glow 6s ease-in-out infinite}@keyframes glow{0%,100%{opacity:.75}50%{opacity:1}}}
    `}</style>
  </Layout>;
}
