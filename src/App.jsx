import { useState, useEffect } from "react";

const I = {
  dashboard: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  truck: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  receipt: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1.5L8 22l2-1.5L12 22l2-1.5L16 22l2-1.5L20 22V2l-2 1.5L16 2l-2 1.5L12 2l-2 1.5L8 2 6 3.5 4 2z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
  package: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
  warehouse: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 01-2 2H4a2 2 0 01-2-2V8.35A2 2 0 013.26 6.5l8-3.2a2 2 0 011.48 0l8 3.2A2 2 0 0122 8.35z"/></svg>,
  users: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  cart: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
  alert: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  exchange: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
  wallet: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 100 4 2 2 0 000-4z"/></svg>,
  trending: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  credit: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  clipboard: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  userCheck: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>,
  tags: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  dollar: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  phone: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  briefcase: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  pie: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 118 2.83"/><path d="M22 12A10 10 0 0012 2v10z"/></svg>,
  file: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  factory: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V8l4-4v8l4-4v8l4-4v8l4-4V2l4 4v14"/></svg>,
  check: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  barChart: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  handshake: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l.78.77L12 20.65l7.64-7.63.78-.77a5.4 5.4 0 000-7.67z"/></svg>,
  globe: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  external: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  zap: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  shop: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  car: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>,
  stethoscope: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6v0a6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/><path d="M8 15v1a6 6 0 006 6v0a6 6 0 006-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
  calendar: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  heart: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l.78.77L12 20.65l7.64-7.63.78-.77a5.4 5.4 0 000-7.67z"/></svg>,
  userPlus: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  activity: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  arrowLeft: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  settings: (c) => <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.6.852.997 1.51 1H21a2 2 0 010 4h-.09c-.658.003-1.25.396-1.51 1z"/></svg>,
};

const apps = [
  { id: "erp", icon: I.globe, color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #3b82f6)", colorLight: "#eff6ff", url: "https://erp-app-wheat.vercel.app", fr: { name: "ERP Manager", desc: "Gestion complete de votre entreprise : approvisionnement, ventes, stocks, employs et finances." }, ar: { name: "\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0639\u0631\u0648\u0641\u0629", desc: "\u0625\u062f\u0627\u0631\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u0645\u0648\u0633\u0633\u062a\u0643: \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a\u060c \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a\u060c \u0627\u0644\u0645\u062e\u0632\u0648\u0646\u0627\u062a\u060c \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646 \u0648\u0627\u0644\u0645\u0627\u0644\u064a\u0627\u062a." }, modules: [
    { fr: "Journal de bord", ar: "\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645", icon: I.dashboard }, { fr: "Approvisionnement", ar: "\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a", icon: I.truck }, { fr: "Factures d'achat", ar: "\u0641\u0648\u0627\u062a\u064a\u0631 \u0627\u0644\u0634\u0631\u0627\u0621", icon: I.receipt }, { fr: "Produits", ar: "\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a", icon: I.package }, { fr: "Lots", ar: "\u0627\u0644\u062f\u0631\u0631", icon: I.warehouse }, { fr: "Clients", ar: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621", icon: I.users }, { fr: "Ventes", ar: "\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a", icon: I.cart }, { fr: "Dettes", ar: "\u0627\u0644\u062f\u064a\u0648\u0646", icon: I.alert }, { fr: "Distributions", ar: "\u0627\u0644\u062a\u0648\u0632\u064a\u0639\u0627\u062a", icon: I.exchange }, { fr: "Depenses", ar: "\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a", icon: I.wallet }, { fr: "Pertes", ar: "\u0627\u0644\u062e\u0633\u0627\u0626\u0631", icon: I.trending }, { fr: "Rapports", ar: "\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631", icon: I.barChart }, { fr: "Modes de paiement", ar: "\u0637\u0631\u0642 \u0627\u0644\u062f\u0641\u0639", icon: I.credit }, { fr: "Journalier", ar: "\u0627\u0644\u064a\u0648\u0645\u064a\u0629", icon: I.clipboard }, { fr: "Employes", ar: "\u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646", icon: I.userCheck }, { fr: "Categories", ar: "\u0627\u0644\u0641\u0626\u0627\u062a", icon: I.tags }, { fr: "Parametres", ar: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a", icon: I.settings }
  ]},
  { id: "factory", icon: I.factory, color: "#059669", gradient: "linear-gradient(135deg, #059669, #10b981)", colorLight: "#ecfdf5", url: "https://factory-app-btxq.onrender.com", fr: { name: "Factory Manager", desc: "Gestion de production, stocks de matiere premiere, suivi des lots et controle qualite." }, ar: { name: "\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0635\u0646\u0639", desc: "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u062a\u0627\u062c\u060c \u0627\u0644\u0645\u062e\u0632\u0648\u0646\u0627\u062a\u060c \u062a\u0628\u0639\u064a\u0629 \u0627\u0644\u0623\u0631\u0627\u0621 \u0648\u0627\u0644\u062c\u0648\u062f\u0629." }, modules: [
    { fr: "Produits", ar: "\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a", icon: I.package }, { fr: "Matiere premiere", ar: "\u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0623\u0648\u0644\u064a\u0629", icon: I.warehouse }, { fr: "Production", ar: "\u0627\u0644\u0625\u0646\u062a\u0627\u062c", icon: I.factory }, { fr: "Lots", ar: "\u0627\u0644\u062f\u0631\u0631", icon: I.clipboard }, { fr: "Qualite", ar: "\u0627\u0644\u062c\u0648\u062f\u0629", icon: I.check }, { fr: "Stocks", ar: "\u0627\u0644\u0645\u062e\u0632\u0648\u0646", icon: I.barChart }, { fr: "Parametres", ar: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a", icon: I.settings }
  ]},
  { id: "crm", icon: I.handshake, color: "#d97706", gradient: "linear-gradient(135deg, #d97706, #f59e0b)", colorLight: "#fffbeb", url: "https://crm-app-ne4w.onrender.com", fr: { name: "CRM Client", desc: "Relation client, suivi des contacts, historique des interactions et gestion commerciale." }, ar: { name: "\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621", desc: "\u062a\u062a\u0628\u0639 \u0627\u0644\u0639\u0645\u0644\u0627\u0621\u060c \u062c\u0647\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644\u060c \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0648\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629." }, modules: [
    { fr: "Contacts", ar: "\u062c\u0647\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644", icon: I.phone }, { fr: "Clients", ar: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621", icon: I.users }, { fr: "Opportunites", ar: "\u0627\u0644\u0641\u0631\u0635", icon: I.trending }, { fr: "Suivi commercial", ar: "\u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629", icon: I.briefcase }, { fr: "Rapports", ar: "\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631", icon: I.pie }, { fr: "Parametres", ar: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a", icon: I.settings }
  ]},
  { id: "accounting", icon: I.dollar, color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)", colorLight: "#f5f3ff", url: "https://accounting-app.onrender.com", fr: { name: "Comptabilite", desc: "Gestion comptable, facturation clients, suivi des paiements et bilans financiers." }, ar: { name: "\u0627\u0644\u0645\u062d\u0627\u0633\u0628\u0627\u062a", desc: "\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u0627\u0633\u0628\u064a\u0629\u060c \u0641\u0648\u0627\u062a\u064a\u0631 \u0627\u0644\u0639\u0645\u0644\u0627\u0621\u060c \u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a." }, modules: [
    { fr: "Tableau de bord", ar: "\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645", icon: I.dashboard }, { fr: "Factures", ar: "\u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631", icon: I.file }, { fr: "Clients", ar: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621", icon: I.users }, { fr: "Produits", ar: "\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a", icon: I.package }, { fr: "Paiements", ar: "\u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a", icon: I.dollar }, { fr: "Rapports", ar: "\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631", icon: I.barChart }, { fr: "Parametres", ar: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a", icon: I.settings }
  ]},
  { id: "boutique", icon: I.shop, color: "#e11d48", gradient: "linear-gradient(135deg, #e11d48, #f43f5e)", colorLight: "#fff1f2", url: "https://boutique-psi-hazel.vercel.app", fr: { name: "Boutique SOUQ", desc: "Gestion de boutique : produits, commandes, clients et suivi des ventes." }, ar: { name: "\u0645\u062a\u062c\u0631 \u0633\u0648\u0642", desc: "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062a\u062c\u0631: \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a\u060c \u0627\u0644\u0637\u0644\u0628\u0627\u062a\u060c \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a." }, modules: [
    { fr: "Produits", ar: "\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a", icon: I.package }, { fr: "Commandes", ar: "\u0627\u0644\u0637\u0644\u0628\u0627\u062a", icon: I.cart }, { fr: "Clients", ar: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621", icon: I.users }, { fr: "Ventes", ar: "\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a", icon: I.trending }, { fr: "Stocks", ar: "\u0627\u0644\u0645\u062e\u0632\u0648\u0646", icon: I.warehouse }, { fr: "Parametres", ar: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a", icon: I.settings }
  ]},
  { id: "flotte", icon: I.car, color: "#0891b2", gradient: "linear-gradient(135deg, #0891b2, #06b6d4)", colorLight: "#ecfeff", url: "https://flotte-1jgltrhkk-sir17.vercel.app", fr: { name: "Gestion de Flotte", desc: "Gestion de flotte vehicules : conducteurs, maintenance, carburant et affectations." }, ar: { name: "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0637\u0648\u0644", desc: "\u0625\u062f\u0627\u0631\u0629 \u0623\u0633\u0637\u0648\u0644 \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062a: \u0627\u0644\u0633\u0627\u0626\u0642\u0648\u0646\u060c \u0627\u0644\u0635\u064a\u0627\u0646\u0629\u060c \u0627\u0644\u0648\u0642\u0648\u062f." }, modules: [
    { fr: "Vehicules", ar: "\u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062a", icon: I.car }, { fr: "Conducteurs", ar: "\u0627\u0644\u0633\u0627\u0626\u0642\u0648\u0646", icon: I.users }, { fr: "Maintenance", ar: "\u0627\u0644\u0635\u064a\u0627\u0646\u0629", icon: I.settings }, { fr: "Carburant", ar: "\u0627\u0644\u0648\u0642\u0648\u062f", icon: I.wallet }, { fr: "Affectations", ar: "\u0627\u0644\u062a\u062e\u0635\u064a\u0635\u0627\u062a", icon: I.clipboard }, { fr: "Rapports", ar: "\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631", icon: I.barChart }
  ]},
  { id: "clinique", icon: I.stethoscope, color: "#16a34a", gradient: "linear-gradient(135deg, #16a34a, #22c55e)", colorLight: "#f0fdf4", url: "https://sir-psi.vercel.app", fr: { name: "CLINIQ.OS", desc: "Gestion de clinique : patients, medecins, rendez-vous, consultations et dossier medical." }, ar: { name: "\u0643\u0644\u064a\u0646\u064a\u0643", desc: "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u064a\u0627\u062f\u0629: \u0627\u0644\u0645\u0631\u0636\u0649\u060c \u0627\u0644\u0623\u0637\u0628\u0627\u0621\u060c \u0627\u0644\u0645\u0648\u0639\u064a\u062f\u060c \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0644\u0641\u0627\u062a." }, modules: [
    { fr: "Patients", ar: "\u0627\u0644\u0645\u0631\u0636\u0649", icon: I.heart }, { fr: "Medecins", ar: "\u0627\u0644\u0623\u0637\u0628\u0627\u0621", icon: I.stethoscope }, { fr: "Rendez-vous", ar: "\u0627\u0644\u0645\u0648\u0639\u064a\u062f", icon: I.calendar }, { fr: "Consultations", ar: "\u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a", icon: I.activity }, { fr: "Dossiers medicaux", ar: "\u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0637\u0628\u064a\u0629", icon: I.file }, { fr: "Secretariat", ar: "\u0627\u0644\u0643\u062a\u0627\u0628\u0629", icon: I.userPlus }, { fr: "Parametres", ar: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a", icon: I.settings }
  ]},
];

const labelFr = { badge: "Plateforme integree", section: "Applications disponibles", open: "Ouvrir", footer: "Tous Sur 1 2026 - SIR.MR", stats: ["Applications", "Modules", "Disponible"], detail: "Vue d'ensemble", back: "Retour", launch: "Lancer l'application", modules: "modules" };
const labelAr = { badge: "\u0645\u0646\u0635\u0629 \u0645\u062a\u0643\u0627\u0645\u0644\u0629", section: "\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629", open: "\u0641\u062a\u062d", footer: "\u0643\u0644 \u0641\u064a \u0635\u0641\u062d\u0629 \u00a9 2026 - SIR.MR", stats: ["\u062a\u0637\u0628\u064a\u0642", "\u0648\u062d\u062f\u0627\u062a", "\u0645\u062a\u0648\u0641\u0631"], detail: "\u0639\u0631\u0636 \u0639\u0627\u0645", back: "\u0631\u062c\u0648\u0639", launch: "\u0634\u063a\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642", modules: "\u0648\u062d\u062f\u0627\u062a" };

function DetailView({ app, lang, L, onBack }) {
  const isAr = lang === "ar";
  const info = isAr ? app.ar : app.fr;
  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",animation:"fadeIn 0.3s ease"}}>
      <div style={{background:app.gradient,padding:"32px 20px 48px",color:"white",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-60,right:-60,width:200,height:200,borderRadius:"50%",background:"rgba(255,255,255,0.08)"}}/>
        <div style={{position:"absolute",bottom:-40,left:-40,width:150,height:150,borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}/>
        <div style={{maxWidth:600,margin:"0 auto",position:"relative",zIndex:1}}>
          <button onClick={onBack} style={{background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"8px 16px",color:"white",fontSize:"0.8rem",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,marginBottom:24}}>
            {I.arrowLeft("white")} {L.back}
          </button>
          <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:20}}>
            <div style={{width:72,height:72,borderRadius:20,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)",flexShrink:0}}>
              <div style={{width:40,height:40}}>{app.icon("white")}</div>
            </div>
            <div>
              <h1 style={{fontSize:"1.6rem",fontWeight:800,marginBottom:4}}>{info.name}</h1>
              <p style={{fontSize:"0.85rem",opacity:0.8,lineHeight:1.5}}>{info.desc}</p>
            </div>
          </div>
          <a href={app.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 28px",borderRadius:12,border:"2px solid white",background:"white",color:app.color,fontSize:"0.9rem",fontWeight:700,textDecoration:"none",transition:"all 0.2s"}}>
            {I.external(app.color)} {L.launch}
          </a>
        </div>
      </div>
      <div style={{maxWidth:600,margin:"0 auto",padding:"24px 16px 60px"}}>
        <div style={{fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"1px",color:"#9ca3af",marginBottom:14}}>{app.modules.length} {L.modules}</div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {app.modules.map((mod,i) => (
            <div key={i} style={{background:"white",borderRadius:12,padding:"14px 16px",display:"flex",alignItems:"center",gap:14,border:"1px solid #e5e7eb",transition:"all 0.15s",animationDelay:`${i*0.05}s`}}>
              <div style={{width:40,height:40,borderRadius:10,background:app.colorLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <div style={{width:20,height:20}}>{mod.icon(app.color)}</div>
              </div>
              <span style={{fontSize:"0.88rem",fontWeight:600,color:"#1f2937"}}>{isAr ? mod.ar : mod.fr}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [detail, setDetail] = useState(null);
  const [lang, setLang] = useState("fr");
  const isAr = lang === "ar";
  const L = isAr ? labelAr : labelFr;

  useEffect(() => {
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = isAr ? "ar" : "fr";
    document.body.style.fontFamily = isAr ? "'IBM Plex Sans Arabic','Inter',sans-serif" : "'Inter',-apple-system,BlinkMacSystemFont,sans-serif";
  }, [isAr]);

  if (detail) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap');
          *{margin:0;padding:0;box-sizing:border-box}
          body{background:#f5f6fa;color:#1a1a2e;-webkit-font-smoothing:antialiased}
          @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        `}</style>
        <DetailView app={detail} lang={lang} L={L} onBack={() => setDetail(null)} />
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#f5f6fa;color:#1a1a2e;-webkit-font-smoothing:antialiased}
        @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .lang-toggle{position:fixed;top:14px;z-index:100;display:flex;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);border-radius:50px;overflow:hidden;backdrop-filter:blur(12px);right:14px}
        .lang-toggle button{padding:7px 16px;border:none;background:transparent;color:rgba(255,255,255,0.6);font-size:0.75rem;font-weight:600;cursor:pointer;transition:all 0.2s}
        .lang-toggle button.active{background:rgba(255,255,255,0.2);color:white;border-radius:50px}
        .hero{text-align:center;padding:52px 16px 36px;background:linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%);color:white;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;top:-100px;right:-100px;width:300px;height:300px;background:radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%);border-radius:50%}
        .hero::after{content:'';position:absolute;bottom:-80px;left:-80px;width:250px;height:250px;background:radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 70%);border-radius:50%}
        .hero-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:50px;font-size:0.72rem;font-weight:500;margin-bottom:16px;backdrop-filter:blur(10px);position:relative;z-index:1}
        .hero h1{font-size:2rem;font-weight:800;margin-bottom:10px;letter-spacing:-0.03em;position:relative;z-index:1}
        .hero p{font-size:0.88rem;opacity:0.7;max-width:440px;margin:0 auto;line-height:1.6;position:relative;z-index:1}
        .hero-stats{display:flex;justify-content:center;gap:32px;margin-top:28px;position:relative;z-index:1}
        .hero-stat-num{font-size:1.5rem;font-weight:700}
        .hero-stat-label{font-size:0.65rem;opacity:0.5;text-transform:uppercase;letter-spacing:0.5px;margin-top:2px}
        .container{max-width:1100px;margin:0 auto;padding:24px 16px 60px}
        .section-title{font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;margin-bottom:14px}
        .apps-list{display:flex;flex-direction:column;gap:16px}
        .app-card{background:white;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;transition:all 0.2s ease;cursor:pointer;animation:fadeIn 0.4s ease forwards;opacity:0}
        .app-card:nth-child(1){animation-delay:0.05s}
        .app-card:nth-child(2){animation-delay:0.1s}
        .app-card:nth-child(3){animation-delay:0.15s}
        .app-card:nth-child(4){animation-delay:0.2s}
        .app-card:nth-child(5){animation-delay:0.25s}
        .app-card:nth-child(6){animation-delay:0.3s}
        .app-card:nth-child(7){animation-delay:0.35s}
        .app-card:hover{box-shadow:0 8px 30px -5px rgba(0,0,0,0.1);transform:translateY(-2px)}
        .app-card:active{transform:scale(0.98)}
        .app-header{padding:20px 20px 0;display:flex;align-items:flex-start;gap:14px}
        .app-icon-box{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 12px -2px rgba(0,0,0,0.2)}
        .app-icon-box svg{width:26px;height:26px}
        .app-name{font-size:1.05rem;font-weight:700;color:#111827}
        .app-desc{font-size:0.78rem;color:#6b7280;line-height:1.5;margin-top:3px}
        .app-body{padding:16px 20px}
        .modules-label{font-size:0.65rem;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:#b0b8c4;margin-bottom:8px}
        .modules-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:6px}
        .mod-tag{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:9px;font-size:0.72rem;font-weight:500;border:1px solid transparent;transition:all 0.15s ease}
        .mod-tag svg{width:14px;height:14px;flex-shrink:0}
        .app-footer{padding:0 20px 20px;display:flex;align-items:center;gap:10px}
        .btn-open{display:inline-flex;align-items:center;gap:7px;padding:10px 22px;border-radius:10px;border:none;font-size:0.82rem;font-weight:600;cursor:pointer;text-decoration:none;color:white;transition:all 0.2s ease}
        .btn-open:active{transform:scale(0.97)}
        .btn-open svg{width:15px;height:15px}
        .footer{text-align:center;padding:24px 16px;color:#b0b8c4;font-size:0.72rem;border-top:1px solid #f0f1f5}
        @media(min-width:640px){.hero{padding:60px 24px 44px}.hero h1{font-size:2.6rem}.hero p{font-size:1rem}.hero-stats{gap:48px}.hero-stat-num{font-size:1.8rem}.container{padding:32px 24px 80px}.app-header{padding:24px 24px 0}.app-body{padding:20px 24px}.app-footer{padding:0 24px 24px}.modules-grid{grid-template-columns:repeat(auto-fill,minmax(145px,1fr))}}
        @media(min-width:900px){.apps-list{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}}
      `}</style>

      <div className="lang-toggle">
        <button className={!isAr ? "active" : ""} onClick={() => setLang("fr")}>FR</button>
        <button className={isAr ? "active" : ""} onClick={() => setLang("ar")}>AR</button>
      </div>

      <header className="hero">
        <div className="hero-badge">{I.zap("#facc15")} {L.badge}</div>
        <h1>{isAr ? "\u0643\u0644 \u0641\u064a \u0635\u0641\u062d\u0629" : "Tous Sur 1"}</h1>
        <p>{isAr ? "\u062c\u0645\u064a\u0639 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0623\u0633\u064a\u0633 \u0641\u064a \u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f. \u0627\u062e\u062a\u0631 \u0648\u0627\u0636\u063a\u0637." : "Toutes vos applications de gestion en un seul endroit. Choisissez et cliquez."}</p>
        <div className="hero-stats">
          <div><div className="hero-stat-num">7</div><div className="hero-stat-label">{L.stats[0]}</div></div>
          <div><div className="hero-stat-num">50+</div><div className="hero-stat-label">{L.stats[1]}</div></div>
          <div><div className="hero-stat-num">24/7</div><div className="hero-stat-label">{L.stats[2]}</div></div>
        </div>
      </header>

      <main className="container">
        <div className="section-title">{L.section}</div>
        <div className="apps-list">
          {apps.map((app) => {
            const info = isAr ? app.ar : app.fr;
            return (
              <div key={app.id} className="app-card" onClick={() => setDetail(app)}>
                <div className="app-header">
                  <div className="app-icon-box" style={{background:app.gradient}}>
                    <span style={{color:"white"}}>{app.icon("white")}</span>
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div className="app-name">{info.name}</div>
                    <div className="app-desc">{info.desc}</div>
                  </div>
                </div>
                <div className="app-body">
                  <div className="modules-label">{app.modules.length} {isAr ? "\u0648\u062d\u062f\u0627\u062a \u0645\u0634\u0645\u0648\u0644\u0629" : "modules inclus"}</div>
                  <div className="modules-grid">
                    {app.modules.slice(0,6).map((mod,i) => (
                      <div key={i} className="mod-tag" style={{background:app.colorLight,color:"#374151",borderColor:app.color+"12"}}>
                        {mod.icon(app.color)}
                        {isAr ? mod.ar : mod.fr}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="app-footer">
                  <span className="btn-open" style={{background:app.color}} onClick={(e) => {e.stopPropagation();window.open(app.url,"_blank")}}>
                    {I.external("white")} {L.open}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="footer">{L.footer}</footer>
    </>
  );
}
