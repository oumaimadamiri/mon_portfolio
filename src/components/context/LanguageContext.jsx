import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  fr: {
    // ── Navbar ──
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_resume: "CV",
    nav_contact: "Contact",

    // ── Home hero ──
    home_greeting: "Bonjour !",
    home_iam: "Je suis",
    home_findme: "Me retrouver sur",
    home_contact_invite: "N'hésitez pas à me",
    home_contact_invite_purple: "contacter !",

    // ── Home2 ──
    home2_title1: "PERMETTEZ-MOI DE ME",
    home2_title2: "PRÉSENTER",
    home2_p1: "Salut ! Je suis Oumaima Damiri, ingénieure formée à la fois au Génie Électrique (DUT) et au Génie Logiciel (Master ISI).",
    home2_p2: "Cette double formation m'a permis de développer une expertise rare allant des microcontrôleurs ESP32 aux applications React/Spring Boot, en passant par les APIs FastAPI et les protocoles industriels (MQTT, Modbus).",
    home2_highlights: "Parmi mes réalisations :",
    home2_p3: "un Digital Twin complet pour un turbo-alternateur industriel (OCP — Research Center ManufacturiX), une application mobile de géolocalisation NFC (Find'N'Tag), et un système IoT de gestion de parking.",
    home2_interests: "Je m'intéresse particulièrement à :",
    home2_i1: "IoT & systèmes embarqués",
    home2_i2: "Applications web/mobile cross-platform",
    home2_i3: "Intégration d'IA dans les systèmes industriels",
    home2_open: "Ouverte aux opportunités en développement Full-Stack, IoT industriel ou Digital Twin.",

    // ── AboutCard ──
    ac_hello: "Bonjour ! Je suis",
    ac_from: ", ingénieure originaire d'",
    ac_location: "El Jadida, Maroc",
    ac_p1a: "Mon parcours hybride —",
    ac_dut: "DUT Génie Électrique",
    ac_then: "puis",
    ac_master: "Master Ingénierie des Systèmes Intelligents",
    ac_school: "(option Génie Logiciel) à la Faculté des Sciences Ain Chock, Casablanca — m'a permis de développer une double expertise rare :",
    ac_iot: "systèmes embarqués & IoT",
    ac_side: "d'un côté,",
    ac_fullstack: "développement Full-Stack",
    ac_webmobile: "Web & Mobile de l'autre.",
    ac_p2: "Je suis à l'aise aussi bien avec un microcontrôleur",
    ac_than: "qu'avec une application",
    ac_backend: "ou un backend",
    ac_sensor: "— du capteur jusqu'à l'interface utilisateur.",
    ac_hobbies: "En dehors du code, ce qui me passionne :",
    ac_h1: "Veille technologique IoT & IA 🤖",
    ac_h2: "Projets électroniques DIY & prototypage ⚡",
    ac_h3: "Exploration de nouvelles architectures logicielles 🏗️",
    ac_h4: "Voyages & découverte de nouvelles cultures 🌍",
    ac_quote: "\"Du microcontrôleur à l'application — relier le monde physique au monde logiciel.\"",

    // ── About page titles ──
    about_who1: "Qui",
    about_who2: "Suis-Je ?",
    about_skills1: "Mes",
    about_skills2: "Compétences",
    about_tools1: "Mes",
    about_tools2: "Outils",
    about_exp1: "Mon",
    about_exp2: "Expérience",
    about_edu1: "Ma",
    about_edu2: "Formation",

    // ── Experience data ──
    exp: [
      {
        poste: "Stagiaire Ingénieure — Digital Twin",
        entreprise: "OCP SA — Research Center ManufacturiX",
        periode: "Février 2026 — Aujourd'hui",
        lieu: "El Jadida",
        points: [
          "Conception d'un jumeau numérique complet pour un turbo-alternateur industriel.",
          "Modèle thermodynamique IAPWS-IF97 avec calibration Ridge Regression.",
          "Architecture temps réel : FastAPI + WebSocket, Redis, SQLite.",
          "Interface SCADA interactive conforme aux standards ISA-101.",
        ],
      },
      {
        poste: "Stagiaire Technicienne — Automatisme & Instrumentation",
        entreprise: "Groupe OCP — Jorf Lasfar Nord",
        periode: "Avril 2023 — Juin 2023",
        lieu: "El Jadida",
        points: [
          "Étude complète d'un doseur pondéral industriel et liaison avec le DCS.",
          "Diagnostic de fiabilité par la méthode des 5 Pourquoi.",
          "Élaboration d'un plan de 20 actions correctives remis à l'équipe maintenance.",
        ],
      },
    ],

    // ── Education data ──
    edu: [
      {
        diplome: "Master — Ingénierie des Systèmes Intelligents",
        specialite: "Option Génie Logiciel",
        ecole: "Faculté des Sciences Ain Chock, Casablanca",
        periode: "2024 — Présent",
      },
      {
        diplome: "Licence — Sciences Mathématiques et Informatiques",
        specialite: "Option Systèmes et Réseaux",
        ecole: "Faculté des Sciences Ain Chock, Casablanca",
        periode: "2023 — 2024",
      },
      {
        diplome: "DUT — Génie Électrique",
        specialite: "Option Électronique et Informatique Industrielle",
        ecole: "École Supérieure de Technologie, Casablanca",
        periode: "2021 — 2023",
      },
      {
        diplome: "Baccalauréat — Sciences et Technologie Électrique",
        specialite: "",
        ecole: "Lycée Qualifiant Errazi, El Jadida",
        periode: "2021",
      },
    ],

    // ── Projects ──
    proj_title1: "Mes",
    proj_title2: "Projets",
    proj_subtitle: "Voici quelques projets sur lesquels j'ai travaillé récemment.",
    filter_all: "Tous",
    projects: [
      {
        title: "Digital Twin — Turbo-Alternateur",
        description: "Jumeau numérique d'un turbo-alternateur industriel chez OCP ManufacturiX. Modèle thermodynamique IAPWS-IF97, architecture temps réel FastAPI + WebSocket et interface SCADA interactive conforme ISA-101.",
        tags: ["IoT", "Backend", "IA", "SCADA"],
        ghLink: "https://github.com/oumaimadamiri/digital-twin-gta",
      },
      {
        title: "Find'N'Tag — Suivi d'animaux",
        description: "App mobile de géolocalisation d'animaux via NFC. Backend Spring Boot + RAG, frontend React Native avec intégration GPS et OCR pour identification en temps réel.",
        tags: ["Mobile", "IoT", "IA"],
        ghLink: "https://github.com/oumaimadamiri/findntag",
      },
      {
        title: "Smart Parking — Gestion intelligente",
        description: "Système IoT de gestion de parking avec Raspberry Pi + RFID pour le contrôle d'accès et interface web de supervision en temps réel.",
        tags: ["IoT", "Web"],
        ghLink: "https://github.com/oumaimadamiri/smart-parking-system",
      },
      {
        title: "Quizzy — Gestionnaire de quiz",
        description: "App mobile éducative cross-platform (iOS/Android) avec gestion des rôles Étudiant/Professeur. Spring Boot + React Native, timer intégré et correction automatique.",
        tags: ["Mobile", "Full-Stack"],
        ghLink: "https://github.com/oumaimadamiri/Quizzy",
      },
      {
        title: "Moodly — Réseau Social",
        description: "Réseau social web de partage d'humeur. Backend Django, frontend React.js — création de profil et interactions entre utilisateurs.",
        tags: ["Web", "Full-Stack"],
        ghLink: "https://github.com/oumaimadamiri/Moodly",
      },
    ],

    // ── Resume ──
    resume_title1: "Mes",
    resume_title2: "CVs",
    resume_subtitle: "Choisissez un profil pour afficher le CV correspondant.",
    resume_download: "Télécharger le CV",
    resume_close: "Fermer",

    // ── Contact ──
    contact_title1: "Me",
    contact_title2: "Contacter",
    contact_subtitle: "Une question, une opportunité ? Envoyez-moi un message !",
    contact_name: "Nom complet",
    contact_email: "Adresse e-mail",
    contact_subject: "Sujet",
    contact_message: "Votre message",
    contact_send: "Envoyer le message",
    contact_sending: "Envoi en cours…",
    contact_success: "Message envoyé avec succès ! Je vous répondrai très bientôt. 🎉",
    contact_error: "Une erreur s'est produite. Veuillez réessayer ou me contacter directement par e-mail.",
    contact_phone: "Téléphone",
    contact_email_label: "E-mail",
    contact_location: "Localisation",
    contact_location_value: "El Jadida / Casablanca, Maroc",
    contact_ph_name: "Votre nom",
    contact_ph_email: "votre@email.com",
    contact_ph_subject: "Objet de votre message",
    contact_ph_message: "Décrivez votre projet ou votre question…",

    // ── Footer ──
    footer_designed: "Conçu et développé par Oumaima Damiri",
    footer_copyright: "Copyright",
  },

  // ══════════════════════════════════════════════════════════════════════════
  en: {
    // ── Navbar ──
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_resume: "Resume",
    nav_contact: "Contact",

    // ── Home hero ──
    home_greeting: "Hi There!",
    home_iam: "I am",
    home_findme: "Find me on",
    home_contact_invite: "Feel free to",
    home_contact_invite_purple: "connect with me!",

    // ── Home2 ──
    home2_title1: "LET ME",
    home2_title2: "INTRODUCE MYSELF",
    home2_p1: "Hi! I'm Oumaima Damiri, an engineer trained in both Electrical Engineering (DUT) and Software Engineering (Master ISI).",
    home2_p2: "This dual background gave me a rare skill set spanning from ESP32 microcontrollers to React/Spring Boot applications, FastAPI and industrial protocols (MQTT, Modbus).",
    home2_highlights: "Key achievements:",
    home2_p3: "a full Digital Twin for an industrial turbo-alternator (OCP — Research Center ManufacturiX), an NFC-based animal tracking mobile app (Find'N'Tag), and an IoT smart parking management system.",
    home2_interests: "I am particularly interested in:",
    home2_i1: "IoT & embedded systems",
    home2_i2: "Cross-platform web/mobile applications",
    home2_i3: "AI integration in industrial systems",
    home2_open: "Open to opportunities in Full-Stack development, industrial IoT, or Digital Twin.",

    // ── AboutCard ──
    ac_hello: "Hello! I'm",
    ac_from: ", an engineer from ",
    ac_location: "El Jadida, Morocco",
    ac_p1a: "My hybrid background —",
    ac_dut: "Electrical Engineering DUT",
    ac_then: "followed by a",
    ac_master: "Master in Intelligent Systems Engineering",
    ac_school: "(Software Engineering track) at Faculté des Sciences Ain Chock, Casablanca — gave me a rare dual expertise:",
    ac_iot: "embedded systems & IoT",
    ac_side: "on one side,",
    ac_fullstack: "Full-Stack development",
    ac_webmobile: "Web & Mobile on the other.",
    ac_p2: "I'm comfortable working with both an",
    ac_than: "microcontroller and a",
    ac_backend: "application or a",
    ac_sensor: "backend — from sensor to user interface.",
    ac_hobbies: "Beyond code, what I'm passionate about:",
    ac_h1: "IoT & AI tech watch 🤖",
    ac_h2: "DIY electronics & prototyping ⚡",
    ac_h3: "Exploring new software architectures 🏗️",
    ac_h4: "Travel & discovering new cultures 🌍",
    ac_quote: "\"From microcontroller to application — bridging the physical and digital world.\"",

    // ── About page titles ──
    about_who1: "Who",
    about_who2: "Am I?",
    about_skills1: "Professional",
    about_skills2: "Skillset",
    about_tools1: "Tools",
    about_tools2: "I Use",
    about_exp1: "My",
    about_exp2: "Experience",
    about_edu1: "My",
    about_edu2: "Education",

    // ── Experience data ──
    exp: [
      {
        poste: "Engineering Intern — Digital Twin",
        entreprise: "OCP SA — Research Center ManufacturiX",
        periode: "February 2026 — Present",
        lieu: "El Jadida",
        points: [
          "Designed a complete digital twin for an industrial turbo-alternator.",
          "Thermodynamic model IAPWS-IF97 with Ridge Regression calibration.",
          "Real-time architecture: FastAPI + WebSocket, Redis, SQLite.",
          "Interactive SCADA interface compliant with ISA-101 standards.",
        ],
      },
      {
        poste: "Technician Intern — Automation & Instrumentation",
        entreprise: "Groupe OCP — Jorf Lasfar Nord",
        periode: "April 2023 — June 2023",
        lieu: "El Jadida",
        points: [
          "Full study of an industrial weighing feeder and its DCS integration.",
          "Reliability diagnosis using the 5 Whys method.",
          "Developed a 20-action corrective plan handed to the maintenance team.",
        ],
      },
    ],

    // ── Education data ──
    edu: [
      {
        diplome: "Master — Intelligent Systems Engineering",
        specialite: "Software Engineering Track",
        ecole: "Faculté des Sciences Ain Chock, Casablanca",
        periode: "2024 — Present",
      },
      {
        diplome: "Bachelor — Mathematics & Computer Science",
        specialite: "Systems & Networks Track",
        ecole: "Faculté des Sciences Ain Chock, Casablanca",
        periode: "2023 — 2024",
      },
      {
        diplome: "DUT — Electrical Engineering",
        specialite: "Electronics & Industrial Computing",
        ecole: "École Supérieure de Technologie, Casablanca",
        periode: "2021 — 2023",
      },
      {
        diplome: "High School Diploma — Electrical Sciences & Technology",
        specialite: "",
        ecole: "Lycée Qualifiant Errazi, El Jadida",
        periode: "2021",
      },
    ],

    // ── Projects ──
    proj_title1: "My Recent",
    proj_title2: "Works",
    proj_subtitle: "Here are a few projects I've worked on recently.",
    filter_all: "All",
    projects: [
      {
        title: "Digital Twin — Turbo-Alternator",
        description: "Digital twin of an industrial turbo-alternator at OCP ManufacturiX. IAPWS-IF97 thermodynamic model, real-time FastAPI + WebSocket architecture and interactive SCADA interface compliant with ISA-101.",
        tags: ["IoT", "Backend", "IA", "SCADA"],
        ghLink: "https://github.com/oumaimadamiri/digital-twin",
      },
      {
        title: "Find'N'Tag — Animal Tracking",
        description: "Mobile app for NFC-based animal geolocation. Spring Boot + RAG backend, React Native frontend with GPS integration and real-time OCR identification.",
        tags: ["Mobile", "IoT", "IA"],
        ghLink: "https://github.com/oumaimadamiri/findntag",
      },
      {
        title: "Smart Parking — Intelligent Management",
        description: "IoT parking management system with Raspberry Pi + RFID for access control and a real-time web supervision interface.",
        tags: ["IoT", "Web"],
        ghLink: "https://github.com/oumaimadamiri/smart-parking",
      },
      {
        title: "Quizzy — Quiz Manager",
        description: "Cross-platform educational mobile app (iOS/Android) with Student/Teacher role management. Spring Boot + React Native, built-in timer and automatic grading.",
        tags: ["Mobile", "Full-Stack"],
        ghLink: "https://github.com/oumaimadamiri/quizzy",
      },
      {
        title: "Moodly — Social Network",
        description: "Mood-sharing social web app. Django backend, React.js frontend — profile creation and user interactions.",
        tags: ["Web", "Full-Stack"],
        ghLink: "https://github.com/oumaimadamiri/moodly",
      },
    ],

    // ── Resume ──
    resume_title1: "My",
    resume_title2: "Resumes",
    resume_subtitle: "Choose a profile to display the corresponding CV.",
    resume_download: "Download CV",
    resume_close: "Close",

    // ── Contact ──
    contact_title1: "Get In",
    contact_title2: "Touch",
    contact_subtitle: "A question or an opportunity? Send me a message!",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_subject: "Subject",
    contact_message: "Your Message",
    contact_send: "Send Message",
    contact_sending: "Sending…",
    contact_success: "Message sent successfully! I'll get back to you soon. 🎉",
    contact_error: "Something went wrong. Please try again or reach me by email directly.",
    contact_phone: "Phone",
    contact_email_label: "Email",
    contact_location: "Location",
    contact_location_value: "El Jadida / Casablanca, Morocco",
    contact_ph_name: "Your name",
    contact_ph_email: "you@email.com",
    contact_ph_subject: "Subject of your message",
    contact_ph_message: "Describe your project or question…",

    // ── Footer ──
    footer_designed: "Designed & Developed by Oumaima Damiri",
    footer_copyright: "Copyright",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  /** Retourne une valeur string */
  const t = (key) => {
    const val = translations[lang][key];
    if (typeof val === "string") return val;
    return key;
  };

  /** Retourne un tableau (exp, edu, projects…) */
  const tArr = (key) => translations[lang][key] ?? [];

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, t, tArr, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}