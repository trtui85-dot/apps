import { useState } from "react";

const apps = [
  {
    id: "erp",
    name: "ERP Manager",
    desc: "Gestion complète de votre entreprise : approvisionnement, ventes, stocks, employés et finances.",
    emoji: "📊",
    color: "#2563eb",
    colorLight: "#eff6ff",
    url: "https://erp-app-wheat.vercel.app",
    modules: [
      "Journal de bord", "Approvisionnement", "Factures d'achat",
      "Produits", "Lots", "Clients", "Ventes", "Dettes",
      "Distributions", "Dépenses", "Pertes", "Rapports",
      "Modes de paiement", "Journalier", "Employés", "Catégories", "Paramètres"
    ],
  },
  {
    id: "factory",
    name: "Factory Manager",
    desc: "Gestion de production, stocks de matière première, suivi des lots et contrôle qualité.",
    emoji: "🏭",
    color: "#059669",
    colorLight: "#ecfdf5",
    url: "https://factory-app-btxq.onrender.com",
    modules: [
      "Produits", "Matière première", "Production",
      "Lots", "Qualité", "Stocks", "Paramètres"
    ],
  },
  {
    id: "crm",
    name: "CRM Client",
    desc: "Relation client, suivi des contacts, historique des interactions et gestion commerciale.",
    emoji: "🤝",
    color: "#d97706",
    colorLight: "#fffbeb",
    url: "https://crm-app-ne4w.onrender.com",
    modules: [
      "Contacts", "Clients", "Opportunités",
      "Suivi commercial", "Rapports", "Paramètres"
    ],
  },
  {
    id: "accounting",
    name: "Comptabilité",
    desc: "Gestion comptable, facturation clients, suivi des paiements et bilans financiers.",
    emoji: "💰",
    color: "#7c3aed",
    colorLight: "#f5f3ff",
    url: "https://accounting-app.onrender.com",
    modules: [
      "Tableau de bord", "Factures", "Clients",
      "Produits", "Paiements", "Rapports", "Paramètres"
    ],
  },
];

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fb", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <header style={{
        textAlign: "center",
        padding: "60px 20px 40px",
        background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #2563eb 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 16px",
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 50,
          fontSize: "0.8rem",
          fontWeight: 500,
          marginBottom: 20,
          backdropFilter: "blur(10px)",
        }}>⚡ Plateforme Intégrée</div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 12, letterSpacing: "-0.02em" }}>Tous Sur 1</h1>
        <p style={{ fontSize: "1.05rem", opacity: 0.85, maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
          Toutes vos applications de gestion en un seul endroit.<br />Choisissez votre application et gérez votre business.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 32 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>4</div>
            <div style={{ fontSize: "0.75rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px" }}>Applications</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>30+</div>
            <div style={{ fontSize: "0.75rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px" }}>Modules</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>24/7</div>
            <div style={{ fontSize: "0.75rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px" }}>Disponible</div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: "#9ca3af", marginBottom: 16 }}>
          Applications disponibles
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          <style>{`
            @media (min-width: 768px) { .apps-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 768px) { .hero-title { font-size: 1.7rem !important; } .hero-desc { font-size: 0.9rem !important; } }
          `}</style>
          <div className="apps-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
            {apps.map((app) => (
              <div
                key={app.id}
                onMouseEnter={() => setHovered(app.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "white",
                  borderRadius: 16,
                  border: "1px solid " + (hovered === app.id ? app.color + "30" : "#e5e7eb"),
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  transform: hovered === app.id ? "translateY(-4px)" : "none",
                  boxShadow: hovered === app.id ? "0 20px 40px -5px rgba(0,0,0,0.1)" : "0 1px 3px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ padding: "28px 28px 0", display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: `linear-gradient(135deg, ${app.color}, ${app.color}dd)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.6rem", flexShrink: 0,
                  }}>{app.emoji}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111827", marginBottom: 4 }}>{app.name}</div>
                    <div style={{ fontSize: "0.82rem", color: "#6b7280", lineHeight: 1.5 }}>{app.desc}</div>
                  </div>
                </div>

                <div style={{ padding: "20px 28px" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", color: "#9ca3af", marginBottom: 10 }}>
                    Modules inclus
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {app.modules.map((mod, i) => (
                      <span key={i} style={{
                        display: "inline-flex", alignItems: "center", gap: 4,
                        padding: "5px 10px", borderRadius: 8, fontSize: "0.72rem", fontWeight: 500,
                        background: app.colorLight, color: "#4b5563",
                        border: "1px solid " + app.color + "15",
                      }}>{mod}</span>
                    ))}
                  </div>
                </div>

                <div style={{ padding: "0 28px 24px", display: "flex", alignItems: "center", gap: 12 }}>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "11px 24px", borderRadius: 10, border: "none",
                      fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                      textDecoration: "none", color: "white",
                      background: app.color,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <ExternalIcon /> Ouvrir
                  </a>
                  <div style={{ fontSize: "0.78rem", color: "#9ca3af", marginLeft: "auto" }}>
                    {app.modules.length} modules
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer style={{
        textAlign: "center", padding: "30px 20px",
        color: "#9ca3af", fontSize: "0.78rem",
        borderTop: "1px solid #f3f4f6",
      }}>
        Tous Sur 1 © 2026 — Solutions Informatiques Rapides (SIR.MR)
      </footer>
    </div>
  );
}

export default App;
