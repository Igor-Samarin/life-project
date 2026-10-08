import Layout from "../components/Layout";
import {useEffect, useState} from "react";
import Link from "next/link";

// This is an intentionally LOCKED visual placeholder, not an authentication mechanism.
export default function PrivateVault() {
  const [showInfo, setShowInfo] = useState(false);
  useEffect(() => {
    const lock = () => setShowInfo(false);
    document.addEventListener("visibilitychange", lock);
    return () => document.removeEventListener("visibilitychange", lock);
  }, []);
  return <Layout>
    <section style={{maxWidth:850,margin:"0 auto",textAlign:"center"}}>
      <div className="lp-eyebrow">LIFE PROJECT · OWNER ONLY · DESIGN PREVIEW</div>
      <h1 className="lp-title" style={{fontSize:"clamp(36px,6vw,68px)"}}>PRIVATE VAULT</h1>
      <p className="lp-subtitle" style={{margin:"22px auto"}}>Личный сейф · закрытый раздел</p>
      <div style={{position:"relative",margin:"35px auto",maxWidth:410,aspectRatio:"1/1",padding:20,borderRadius:35,border:"3px solid #c6a352",background:"radial-gradient(circle at 50% 45%,#4a3c24,#111319 65%,#08090c)",boxShadow:"0 0 75px #b38b2730, inset 0 0 50px #000"}}>
        <div aria-hidden="true" className="vault-door" style={{height:"100%",border:"2px solid #c6a352",borderRadius:25,display:"grid",placeItems:"center",boxShadow:"inset 0 0 30px #000,0 0 15px #c8a54a55"}}>
          <div style={{border:"12px double #d3ae57",borderRadius:"50%",width:180,height:180,display:"grid",placeItems:"center",fontSize:72,color:"#f4d58c",boxShadow:"0 0 35px #e5b95d55"}}>✦</div>
        </div>
        <div style={{position:"absolute",bottom:38,left:0,right:0,fontSize:13,letterSpacing:3,color:"#f0d48b"}}>LOCKED</div>
      </div>
      <button type="button" onClick={()=>setShowInfo(true)} style={{cursor:"pointer",padding:"15px 28px",borderRadius:14,border:"1px solid #e4c16b",color:"#f9e7b0",background:"#302719",fontWeight:700}}>🔒 Открыть сейф</button>
      {showInfo && <div role="alert" style={{margin:"24px auto",maxWidth:560,padding:20,border:"1px solid #a88b4d",borderRadius:14,background:"#1b1a17",lineHeight:1.6}}>
        Сейф пока закрыт. Защищённый ввод кодовой фразы, шифрование и проверка владельца ещё не подключены. Не вводи здесь пароли или личные сведения.
        <div><button type="button" onClick={()=>setShowInfo(false)} style={{marginTop:12,padding:9}}>Закрыть</button></div>
      </div>}
      <p style={{color:"#a5a097",fontSize:13,marginTop:28}}>Предварительный интерфейс. Данные не хранятся, доступ к личным делам не предоставляется.</p>
      <p><Link href="/" style={{color:"#d7b96c"}}>← Главная</Link></p>
    </section>
    <style jsx>{`@media (prefers-reduced-motion: no-preference){.vault-door{animation:vaultGlow 4s ease-in-out infinite}@keyframes vaultGlow{50%{filter:brightness(1.2);transform:scale(.992)}}}`}</style>
  </Layout>;
}
