import { useState } from "react";

const I = {
  dashboard: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  truck: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  receipt: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1.5L8 22l2-1.5L12 22l2-1.5L16 22l2-1.5L20 22V2l-2 1.5L16 2l-2 1.5L12 2l-2 1.5L8 2 6 3.5 4 2z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/></svg>,
  package: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  warehouse: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 01-2 2H4a2 2 0 01-2-2V8.35A2 2 0 013.26 6.5l8-3.2a2 2 0 011.48 0l8 3.2A2 2 0 0122 8.35z"/><path d="M6 18h12"/><path d="M6 14h12"/></svg>,
  users: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  cart: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
  alert: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  exchange: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
  wallet: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 100 4 2 2 0 000-4z"/></svg>,
  trending: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  chart: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  credit: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  clipboard: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  userCheck: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>,
  tags: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  settings: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  dollar: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  phone: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  briefcase: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  pie: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 118 2.83"/><path d="M22 12A10 10 0 0012 2v10z"/></svg>,
  file: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  factory: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V8l4-4v8l4-4v8l4-4v8l4-4V2l4 4v14"/></svg>,
  check: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  barChart: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  handshake: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17l-2 2-4-4 4-4 2 2"/><path d="M17 7l2-2 4 4-4 4-2-2"/><path d="M2 12h4l3-3 4 4 3-3h4"/></svg>,
  globe: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  external: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  zap: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
};

const apps = [
  {
    id: "erp",
    name: "ERP Manager",
    desc: "Gestion complète de votre entreprise : approvisionnement, ventes, stocks, employés et finances.",
    icon: I.globe,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb, #3b82f6)",
    colorLight: "#eff6ff",
    url: "https://erp-app-wheat.vercel.app",
    modules: [
      { name: "Journal de bord", icon: I.dashboard },
      { name: "Approvisionnement", icon: I.truck },
      { name: "Factures d'achat", icon: I.receipt },
      { name: "Produits", icon: I.package },
      { name: "Lots", icon: I.warehouse },
      { name: "Clients", icon: I.users },
      { name: "Ventes", icon: I.cart },
      { name: "Dettes", icon: I.alert },
      { name: "Distributions", icon: I.exchange },
      { name: "Dépenses", icon: I.wallet },
      { name: "Pertes", icon: I.trending },
      { name: "Rapports", icon: I.barChart },
      { name: "Modes de paiement", icon: I.credit },
      { name: "Journalier", icon: I.clipboard },
      { name: "Employés", icon: I.userCheck },
      { name: "Catégories", icon: I.tags },
      { name: "Paramètres", icon: I.settings },
    ],
  },
  {
    id: "factory",
    name: "Factory Manager",
    desc: "Gestion de production, stocks de matière première, suivi des lots et contrôle qualité.",
    icon: I.factory,
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669, #10b981)",
    colorLight: "#ecfdf5",
    url: "https://factory-app-btxq.onrender.com",
    modules: [
      { name: "Produits", icon: I.package },
      { name: "Matière première", icon: I.warehouse },
      { name: "Production", icon: I.factory },
      { name: "Lots", icon: I.clipboard },
      { name: "Qualité", icon: I.check },
      { name: "Stocks", icon: I.barChart },
      { name: "Paramètres", icon: I.settings },
    ],
  },
  {
    id: "crm",
    name: "CRM Client",
    desc: "Relation client, suivi des contacts, historique des interactions et gestion commerciale.",
    icon: I.handshake,
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706, #f59e0b)",
    colorLight: "#fffbeb",
    url: "https://crm-app-ne4w.onrender.com",
    modules: [
      { name: "Contacts", icon: I.phone },
      { name: "Clients", icon: I.users },
      { name: "Opportunités", icon: I.trending },
      { name: "Suivi commercial", icon: I.briefcase },
      { name: "Rapports", icon: I.pie },
      { name: "Paramètres", icon: I.settings },
    ],
  },
  {
    id: "accounting",
    name: "Comptabilité",
    desc: "Gestion comptable, facturation clients, suivi des paiements et bilans financiers.",
    icon: I.dollar,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
    colorLight: "#f5f3ff",
    url: "https://accounting-app.onrender.com",
    modules: [
      { name: "Tableau de bord", icon: I.dashboard },
      { name: "Factures", icon: I.file },
      { name: "Clients", icon: I.users },
      { name: "Produits", icon: I.package },
      { name: "Paiements", icon: I.dollar },
      { name: "Rapports", icon: I.barChart },
      { name: "Paramètres", icon: I.settings },
    ],
  },
];

export default function App() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f6fa; color: #1a1a2e; -webkit-font-smoothing: antialiased; }

        .hero { text-align: center; padding: 48px 16px 36px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%); color: white; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: -100px; right: -100px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%); border-radius: 50%; }
        .hero::after { content: ''; position: absolute; bottom: -80px; left: -80px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%); border-radius: 50%; }
        .hero-badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 50px; font-size: 0.72rem; font-weight: 500; margin-bottom: 16px; backdrop-filter: blur(10px); position: relative; z-index: 1; letter-spacing: 0.3px; }
        .hero h1 { font-size: 2rem; font-weight: 800; margin-bottom: 10px; letter-spacing: -0.03em; position: relative; z-index: 1; }
        .hero p { font-size: 0.9rem; opacity: 0.7; max-width: 420px; margin: 0 auto; line-height: 1.6; position: relative; z-index: 1; }
        .hero-stats { display: flex; justify-content: center; gap: 32px; margin-top: 28px; position: relative; z-index: 1; }
        .hero-stat-num { font-size: 1.5rem; font-weight: 700; }
        .hero-stat-label { font-size: 0.65rem; opacity: 0.5; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; }

        .container { max-width: 1000px; margin: 0 auto; padding: 24px 16px 60px; }
        .section-title { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; margin-bottom: 14px; }
        .apps-list { display: flex; flex-direction: column; gap: 16px; }

        .app-card { background: white; border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; transition: all 0.2s ease; }
        .app-card:hover { box-shadow: 0 8px 30px -5px rgba(0,0,0,0.1); }
        .app-header { padding: 20px 20px 0; display: flex; align-items: flex-start; gap: 14px; }
        .app-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .app-icon svg { width: 26px; height: 26px; }
        .app-name { font-size: 1.05rem; font-weight: 700; color: #111827; }
        .app-desc { font-size: 0.78rem; color: #6b7280; line-height: 1.5; margin-top: 3px; }

        .app-body { padding: 16px 20px; }
        .modules-label { font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #b0b8c4; margin-bottom: 8px; }
        .modules-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 6px; }
        .mod-tag { display: flex; align-items: center; gap: 6px; padding: 7px 10px; border-radius: 9px; font-size: 0.72rem; font-weight: 500; border: 1px solid transparent; transition: all 0.15s ease; }
        .mod-tag svg { width: 14px; height: 14px; flex-shrink: 0; }

        .app-footer { padding: 0 20px 20px; display: flex; align-items: center; gap: 10px; }
        .btn-open { display: inline-flex; align-items: center; gap: 7px; padding: 10px 22px; border-radius: 10px; border: none; font-size: 0.82rem; font-weight: 600; cursor: pointer; text-decoration: none; color: white; transition: all 0.2s ease; }
        .btn-open:active { transform: scale(0.97); }
        .btn-open svg { width: 15px; height: 15px; }
        .modules-count { font-size: 0.72rem; color: #9ca3af; margin-left: auto; }

        .footer { text-align: center; padding: 24px 16px; color: #b0b8c4; font-size: 0.72rem; border-top: 1px solid #f0f1f5; }

        @media (min-width: 640px) {
          .hero { padding: 60px 24px 44px; }
          .hero h1 { font-size: 2.6rem; }
          .hero p { font-size: 1rem; }
          .hero-stats { gap: 48px; }
          .hero-stat-num { font-size: 1.8rem; }
          .container { padding: 32px 24px 80px; }
          .app-header { padding: 24px 24px 0; }
          .app-body { padding: 20px 24px; }
          .app-footer { padding: 0 24px 24px; }
          .modules-grid { grid-template-columns: repeat(auto-fill, minmax(145px, 1fr)); }
        }

        @media (min-width: 900px) {
          .apps-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .app-card { display: flex; flex-direction: column; }
        }
      `}</style>

      <header className="hero">
        <div className="hero-badge">{I.zap("#facc15")} Plateforme Intégrée</div>
        <h1>Tous Sur 1</h1>
        <p>Toutes vos applications de gestion en un seul endroit. Choisissez et gérez votre business.</p>
        <div className="hero-stats">
          <div><div className="hero-stat-num">4</div><div className="hero-stat-label">Applications</div></div>
          <div><div className="hero-stat-num">30+</div><div className="hero-stat-label">Modules</div></div>
          <div><div className="hero-stat-num">24/7</div><div className="hero-stat-label">Disponible</div></div>
        </div>
      </header>

      <main className="container">
        <div className="section-title">Applications disponibles</div>
        <div className="apps-list">
          {apps.map((app) => {
            const isOpen = expanded === app.id;
            return (
              <div key={app.id} className="app-card">
                <div className="app-header">
                  <div className="app-icon" style={{ background: app.gradient }}>
                    <span style={{ color: "white" }}>{app.icon("white")}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="app-name">{app.name}</div>
                    <div className="app-desc">{app.desc}</div>
                  </div>
                </div>

                <div className="app-body">
                  <div className="modules-label">{app.modules.length} modules inclus</div>
                  <div className="modules-grid">
                    {(isOpen ? app.modules : app.modules.slice(0, 6)).map((mod, i) => (
                      <div key={i} className="mod-tag" style={{ background: app.colorLight, color: "#374151", borderColor: app.color + "12" }}>
                        {mod.icon(app.color)}
                        {mod.name}
                      </div>
                    ))}
                  </div>
                  {!isOpen && app.modules.length > 6 && (
                    <button onClick={() => setExpanded(app.id)} style={{
                      marginTop: 8, background: "none", border: "none", cursor: "pointer",
                      fontSize: "0.72rem", fontWeight: 600, color: app.color, padding: "4px 0",
                    }}>
                      + {app.modules.length - 6} autres modules
                    </button>
                  )}
                  {isOpen && app.modules.length > 6 && (
                    <button onClick={() => setExpanded(null)} style={{
                      marginTop: 8, background: "none", border: "none", cursor: "pointer",
                      fontSize: "0.72rem", fontWeight: 600, color: app.color, padding: "4px 0",
                    }}>
                      Réduire
                    </button>
                  )}
                </div>

                <div className="app-footer">
                  <a href={app.url} target="_blank" rel="noopener noreferrer" className="btn-open" style={{ background: app.color }}>
                    {I.external("white")} Ouvrir
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="footer">
        Tous Sur 1 © 2026 — Solutions Informatiques Rapides (SIR.MR)
      </footer>
    </>
  );
}
