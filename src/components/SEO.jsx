import { Helmet } from "react-helmet-async";
import { useLang } from "./context/LanguageContext";

const META = {
  fr: {
    "/":        { title: "Oumaima Damiri — Ingénieure Full-Stack & IoT", desc: "Portfolio d'Oumaima Damiri, ingénieure Full-Stack Web/Mobile et IoT/Systèmes Embarqués. Du microcontrôleur à l'interface." },
    "/about":   { title: "À propos — Oumaima Damiri", desc: "Parcours hybride DUT Génie Électrique + Master Ingénierie des Systèmes Intelligents." },
    "/project": { title: "Projets — Oumaima Damiri", desc: "Digital Twin, Find'N'Tag, Smart Parking, Quizzy, Moodly — projets Full-Stack et IoT." },
    "/resume":  { title: "CV — Oumaima Damiri", desc: "Téléchargez les CV Développement Full-Stack ou IoT & Systèmes Embarqués." },
    "/contact": { title: "Contact — Oumaima Damiri", desc: "Une opportunité, un projet ? Contactez Oumaima Damiri." },
  },
  en: {
    "/":        { title: "Oumaima Damiri — Full-Stack & IoT Engineer", desc: "Portfolio of Oumaima Damiri, Full-Stack Web/Mobile and IoT/Embedded Systems engineer. From microcontroller to interface." },
    "/about":   { title: "About — Oumaima Damiri", desc: "Hybrid background: Electrical Engineering DUT + Master in Intelligent Systems Engineering." },
    "/project": { title: "Projects — Oumaima Damiri", desc: "Digital Twin, Find'N'Tag, Smart Parking, Quizzy, Moodly — Full-Stack and IoT projects." },
    "/resume":  { title: "Resume — Oumaima Damiri", desc: "Download the Full-Stack Development or IoT & Embedded Systems CV." },
    "/contact": { title: "Contact — Oumaima Damiri", desc: "An opportunity, a project? Get in touch with Oumaima Damiri." },
  },
};

const BASE = "https://oumaima-damiri.vercel.app";

export default function SEO({ path }) {
  const { lang } = useLang();
  const m = META[lang][path] || META[lang]["/"];
  const url = `${BASE}${path}`;
  return (
    <Helmet>
      <html lang={lang} />
      <title>{m.title}</title>
      <meta name="description" content={m.desc} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="fr" href={`${BASE}${path}`} />
      <link rel="alternate" hrefLang="en" href={`${BASE}${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Oumaima Damiri Portfolio" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.desc} />
      <meta property="og:image" content={`${BASE}/og-image.png`} />
      <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_US"} />
      <meta property="og:locale:alternate" content={lang === "fr" ? "en_US" : "fr_FR"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.desc} />
      <meta name="twitter:image" content={`${BASE}/og-image.png`} />
    </Helmet>
  );
}
