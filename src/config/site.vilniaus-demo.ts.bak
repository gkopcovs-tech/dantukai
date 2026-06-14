// src/config/site.ts
//
// SINGLE SOURCE OF TRUTH FOR THIS CLIENT.
// Every client-specific value lives in this file. To rebrand the site
// for a new client, edit this file (+ theme.css + public/images/).
// Components NEVER hardcode client data — they import from here.
//
// ─────────────────────────────────────────────────────────────────────────────
// A NOTE ON HTML FIELDS
// ─────────────────────────────────────────────────────────────────────────────
// The editorial design uses italic-accent words inside otherwise normal
// headlines, e.g. "Šypsena <em>kuriama</em> lėtai". To keep all content
// in one file we allow a few fields to contain small HTML snippets.
//
// Convention: any field whose name ends in `Html` or `Lines` is rendered
// with Astro's `set:html` directive (raw HTML). Everything else is plain
// text and is HTML-escaped on render.
//
// Safe HTML tags to use inside these fields:
//   <em>…</em>        — italic accent (renders in tan)
//   <br>              — manual line break
//   <span class="sm">…</span>  — smaller, offset character (used for the trailing period in the hero)

// ─────────────────────────────────────────────────────────────────────────────
// Type definitions — the SHAPE of the data below.
// ─────────────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  num: string;          // "01"
  nameHtml: string;     // "Profilaktinė <em>higiena</em>"
  description: string;
  price: string;        // "€85"
  priceUnit: string;    // "nuo" | "kursas" | "vnt"
  href: string;         // anchor or page link (currently #booking)
}

export interface Doctor {
  role: string;            // "Klinikos vadovė"
  firstName: string;       // "Rūta"
  surnameHtml: string;     // "<em>Vaitkutė</em>"  — italic surname per design
  bio: string;
  years: string;           // "18 m."
  license: string;         // "Lic. №024"
  languages: string;       // "DE / EN / LT"
  portraitSrc: string;     // image path; empty string falls back to placeholder
  portraitLabel: string;   // shown in placeholder if portraitSrc is empty
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface SocialLink {
  platform: string; // "facebook", "instagram", etc.
  url: string;
  label: string;
}

export interface FooterLinkColumn {
  heading: string;
  items: { label: string; href: string }[];
}

export interface SiteConfig {
  // ── Brand ──
  businessName: string;
  businessNameHtml: string;   // for the nav logo, e.g. "Dantų <em>klinika</em>"
  logoMark: string;           // single letter shown inside the round mark, e.g. "V"
  tagline: string;
  logoSrc: string;
  logoAlt: string;

  // ── Contact ──
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    floorNote: string;       // e.g. "(antras aukštas)"
  };
  mapEmbedUrl: string;

  // ── Hours ──
  openingHours: OpeningHour[];
  openingHoursShort: string;  // condensed for the booking section, e.g. "Pr–Pn 8–20 · Št 9–14"

  // ── SEO ──
  seo: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
    locale: string;
  };

  // ── Navigation ──
  navLinks: NavLink[];

  // ── Hero ──
  hero: {
    eyebrow: string;            // "— Vilnius · įkurta 2009"
    headlineLines: string[];    // each entry is HTML, rendered as a separate <span> line
    subheadline: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    metaText: string;           // "artimiausias laisvas — …"
    imageLeftLabel: string;     // shown over the left photo placeholder
    imageRightLabel: string;    // shown over the right photo placeholder
    imageLeftSrc: string;       // optional real image; empty = placeholder
    imageRightSrc: string;
    badgeIndex: string;         // "№ 01 — 04"
    badgeTagline: string;       // "A quiet place to be treated."
  };

  // ── Ticker ──
  ticker: {
    items: string[];            // each item is HTML; may contain <em>
  };

  // ── Intro / philosophy ──
  intro: {
    eyebrow: string;            // "Filosofija — 01"
    bodyHtml: string;           // big serif paragraph; may contain <em>
    signatureName: string;
    signatureRole: string;
  };

  // ── Services ──
  services: {
    eyebrow: string;            // "Paslaugos — 02"
    headingHtml: string;        // "Paslaugų<br>kabinetas <em>—</em>"
    subheading: string;
    items: Service[];
  };

  // ── Doctors ──
  doctors: {
    eyebrow: string;            // "Komanda — 03"
    headingHtml: string;        // "Žmonės, kuriems <em>patikite</em><br>savo šypseną."
    items: Doctor[];
  };

  // ── Testimonials ──
  testimonials: {
    eyebrow: string;            // "Pacientai — 04"
    headingHtml: string;        // "Tylūs<br><em>įrodymai.</em>"
    rating: string;             // "4.97"
    reviewCount: string;        // "1 284"
    items: Testimonial[];
  };

  // ── FAQ ──
  faq: {
    eyebrow: string;            // "Klausimai — 05"
    headingHtml: string;        // "Dažniausi<br>klausimai <em>—</em>"
    helperHtml: string;         // small paragraph below heading
    items: FaqItem[];
  };

  // ── Booking ──
  booking: {
    eyebrow: string;            // "Registracija — 06"
    headingHtml: string;        // "Užsisakykite<br><em>laiką.</em>"
    description: string;
    serviceOptions: string[];   // dropdown options
    doctorOptions: string[];    // dropdown options
    submitLabel: string;        // "Siųsti užklausą"
    successMessage: string;
    errorMessage: string;
  };

  // ── Contact (used by MapEmbed if you re-enable it later) ──
  contact: {
    heading: string;
    subheading: string;
    mapHeading: string;
  };

  // ── Social ──
  socialLinks: SocialLink[];

  // ── Footer ──
  footer: {
    brandTagline: string;        // small grey text under the brand wordmark
    visitHeading: string;        // "Aplankykite"
    linkColumns: FooterLinkColumn[];  // two columns of small links
    legalNote: string;           // "Privatumo politika · Slapukai · Pacientų teisės"
  };
  copyright: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// The actual config data
// ─────────────────────────────────────────────────────────────────────────────

export const site: SiteConfig = {
  // ── Brand ─────────────────────────────────────────────────────────────────
  businessName: "Vilniaus Dantų Klinika",
  businessNameHtml: "Vilniaus <em>dantų klinika</em>",
  logoMark: "V",
  tagline: "Modernios odontologijos paslaugos Vilniuje",
  logoSrc: "/images/logo.svg",
  logoAlt: "Vilniaus Dantų Klinika logo",

  // ── Contact ───────────────────────────────────────────────────────────────
  phone: "+370 5 234 5678",
  phoneRaw: "+37052345678",
  email: "info@vilniausdantuklinika.lt",
  address: {
    street: "Gedimino prospektas 24",
    city: "Vilnius",
    postalCode: "LT-01103",
    country: "Lietuva",
    floorNote: "(antras aukštas)",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.5!2d25.2797!3d54.6872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd942c8a8d9b9d%3A0x0!2sGedimino+pr.+24%2C+Vilnius!5e0!3m2!1sen!2slt!4v1700000000000",

  // ── Hours ─────────────────────────────────────────────────────────────────
  openingHours: [
    { day: "Pirmadienis – Penktadienis", hours: "08:00 – 19:00" },
    { day: "Šeštadienis",                hours: "09:00 – 14:00" },
    { day: "Sekmadienis",                hours: "Nedirba" },
  ],
  openingHoursShort: "Pr–Pn  8:00 – 19:00\nŠt  9:00 – 14:00",

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    siteUrl: "https://vilniausdantuklinika.lt",
    defaultTitle: "Vilniaus Dantų Klinika | Modernios odontologijos paslaugos",
    defaultDescription:
      "Šeimos odontologija Vilniaus centre. Profilaktika, estetinė restauracija, implantacija, ortodontija, vaikų odontologija. Konsultacija — nemokama.",
    ogImage: "/images/og-image.jpg",
    locale: "lt_LT",
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  navLinks: [
    { label: "Paslaugos",    href: "#services" },
    { label: "Specialistai", href: "#doctors" },
    { label: "Apie",         href: "#intro" },
    { label: "D.U.K.",       href: "#faq" },
  ],

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "— Vilnius · įkurta 2009",
    headlineLines: [
      "Šypsena",
      "<em>kuriama</em> lėtai,",
      "kruopščiai<span class=\"sm\">.</span>",
    ],
    subheadline:
      "Šeimos odontologijos praktika, kurioje kiekvienas dantis žiūrimas kaip darbo objektas — su laiku, šviesa ir tylia kompetencija.",
    primaryCtaLabel: "Užsisakyti vizitą",
    primaryCtaHref: "#booking",
    secondaryCtaLabel: "Paslaugos",
    secondaryCtaHref: "#services",
    metaText: "atsakome per 24 val.",
    imageLeftLabel: "[ INTERJERAS · klinikos vestibiulis ]",
    imageRightLabel: "[ PORTRETAS · dr. Vaitkutė ]",
    imageLeftSrc: "",
    imageRightSrc: "",
    badgeIndex: "№ 01 — 04",
    badgeTagline: "A quiet place to be treated.",
  },

  // ── Ticker ────────────────────────────────────────────────────────────────
  ticker: {
    items: [
      "Be skubos",
      "Be skausmo",
      "Be paslapčių dėl kainos",
      "<em>Su pagarba laikui</em>",
      "Šeimoms ir vaikams",
      "Sedacija pagal poreikį",
    ],
  },

  // ── Intro / philosophy ────────────────────────────────────────────────────
  intro: {
    eyebrow: "Filosofija — 01",
    bodyHtml:
      "Mes tikime, kad <em>geriausias dantis</em> yra tas, kurio neprireikia gydyti antrą kartą. Todėl dirbame ilgiau, kalbamės atviriau ir niekada nesiūlome to, ko nesirinktume sau.",
    signatureName: "— Dr. R. Vaitkutė",
    signatureRole: "Klinikos vadovė · 15 m. praktikos",
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Paslaugos — 02",
    headingHtml: "Paslaugų<br>kabinetas <em>—</em>",
    subheading:
      "Visa, ko reikia šeimai vienoje vietoje: nuo profilaktikos iki estetinės restauracijos. Konsultacija prieš darbus — visada nemokama.",
    items: [
      {
        num: "01",
        nameHtml: "Profilaktinė <em>higiena</em>",
        description:
          "Air-flow, ultragarsinis valymas ir balinimas. Vizitas trunka 60 min., pabaigoje — žemėlapis tolesnei dantų priežiūrai.",
        price: "€85",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "02",
        nameHtml: "Estetinė <em>restauracija</em>",
        description:
          "Mikroskopu atliekamos kompozitinės restauracijos su atspalvio derinimu prie natūralios emalio struktūros.",
        price: "€180",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "03",
        nameHtml: "Implantacija",
        description:
          "Straumann ir Nobel sistemos. Skaitmeninis 3D planavimas, navigacinė chirurgija ir vienadieniai laikini vainikėliai.",
        price: "€1 400",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "04",
        nameHtml: "Ortodontija — <em>lygintuvai</em>",
        description:
          "Skaidrūs Invisalign kapas ir savaime besilygiuojantys breketai. Pirmas vizitas su 3D skenavimu.",
        price: "€2 800",
        priceUnit: "kursas",
        href: "#booking",
      },
      {
        num: "05",
        nameHtml: "Vaikų odontologija",
        description:
          "Kabinetas pritaikytas vaikams nuo 2 m. Pirmas vizitas — tik pažintinis. Su sedacija ar be jos.",
        price: "€45",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "06",
        nameHtml: "Endodontija",
        description:
          "Mikroskopinis kanalų gydymas. Tikslumas ir minimaliai invaziniai sprendimai vienu vizitu.",
        price: "€260",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "07",
        nameHtml: "Protezavimas — <em>laminatės</em>",
        description:
          "Plonosios e.max keramikos laminatės. Be šlifavimo, ten kur tai įmanoma. Su 10 m. garantija.",
        price: "€720",
        priceUnit: "vnt",
        href: "#booking",
      },
    ],
  },

  // ── Doctors ───────────────────────────────────────────────────────────────
  doctors: {
    eyebrow: "Komanda — 03",
    headingHtml: "Žmonės, kuriems <em>patikite</em><br>savo šypseną.",
    items: [
      {
        role: "Klinikos vadovė",
        firstName: "Dr. Rūta",
        surnameHtml: "<em>Vaitkutė</em>",
        bio: "Endodontas, mikroskopinė odontologija. 18 metų praktikos. VU MF, rezidentūra Berno universitete.",
        years: "18 m.",
        license: "Lic. №024",
        languages: "DE / EN / LT",
        portraitSrc: "",
        portraitLabel: "[ DR. VAITKUTĖ · 4×5 ]",
      },
      {
        role: "Implantologas / chirurgas",
        firstName: "Dr. Tomas",
        surnameHtml: "<em>Kazakas</em>",
        bio: "Burnos chirurgija, navigacinė implantacija. Straumann sertifikuotas mentorius regione.",
        years: "12 m.",
        license: "Lic. №118",
        languages: "EN / LT / PL",
        portraitSrc: "",
        portraitLabel: "[ DR. KAZAKAS · 4×5 ]",
      },
      {
        role: "Vaikų odontologė",
        firstName: "Dr. Eglė",
        surnameHtml: "<em>Simonaitė</em>",
        bio: "Vaikų odontologija ir ortodontija. Specializacija — ankstyvas okluzijos formavimas, baimės įveika.",
        years: "9 m.",
        license: "Lic. №207",
        languages: "EN / LT",
        portraitSrc: "",
        portraitLabel: "[ DR. SIMONAITĖ · 4×5 ]",
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Pacientai — 04",
    headingHtml: "Tylūs<br><em>įrodymai.</em>",
    rating: "4.97",
    reviewCount: "1 284",
    items: [
      {
        name: "Aušra J.",
        role: "Pacientė nuo 2019 · Antakalnis",
        quote:
          "Pirmą kartą per dvidešimt metų išėjau iš odontologo neturėdama jokio nemalonaus jausmo. Net pagalvojau, gal jie kažko nepadarė.",
      },
      {
        name: "Mindaugas R.",
        role: "Pacientas nuo 2022 · Žvėrynas",
        quote:
          "Implantą pastatė tą pačią dieną kaip ir ištraukė dantį. Tas ramumas, su kuriuo dirba dr. Kazakas — neperkamas dalykas.",
      },
      {
        name: "Justė P.",
        role: "Šeima nuo 2020 · Pilaitė",
        quote:
          "Dvi mano dukros eina pas dr. Simonaitę su šypsena. Ir tai net ne metafora — jos prašosi „pas tetą Eglę“. Tai išverčia viską.",
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "Klausimai — 05",
    headingHtml: "Dažniausi<br>klausimai <em>—</em>",
    helperHtml:
      "Nerandate atsakymo? Parašykite paprastai — atsakome per 24 val.",
    items: [
      {
        question: "Ar pirmas vizitas mokamas?",
        answer:
          "Pirma konsultacija — nemokama, jei jos metu nedarome jokių procedūrų. Vizitas trunka iki 45 min., per kurį apžiūrime, padarome panoraminę nuotrauką ir kartu sudarome gydymo planą.",
      },
      {
        question: "Ar dirbate su vaikais nuo kokio amžiaus?",
        answer:
          "Priimame vaikus nuo 2 metų. Pirmas vizitas yra tik pažintinis — nieko negydome, kad vaikas pamatytų kabinetą ir gydytoją be streso.",
      },
      {
        question: "Ar galimas išsimokėjimas dideliems darbams?",
        answer:
          "Taip. Implantacijai, ortodontijai ir didesnėms restauracijoms galima išskaidyti mokėjimą iki 12 mėnesių be palūkanų. Detales aptariame konsultacijos metu.",
      },
      {
        question: "Kokiomis kalbomis konsultuojate?",
        answer:
          "Visa komanda dirba lietuviškai ir angliškai. Atskirai — vokiškai (dr. Vaitkutė) ir lenkiškai (dr. Kazakas).",
      },
      {
        question: "Ar yra galimybė sedacijos pacientams su baime?",
        answer:
          "Taip. Naudojame lengvą sedaciją inhaliaciniu būdu (azoto oksidu) suaugusiems ir vaikams. Apie poreikį prašome įspėti iš anksto.",
      },
      {
        question: "Kiek laiko trunka implanto procedūra?",
        answer:
          "Pati operacija — apie 45 min. vienam implantui. Iki nuolatinio vainikėlio uždėjimo praeina 3–4 mėnesiai gyjimo, per kurį nešiojate laikiną sprendimą.",
      },
    ],
  },

  // ── Booking ───────────────────────────────────────────────────────────────
  booking: {
    eyebrow: "Registracija — 06",
    headingHtml: "Užsisakykite<br><em>laiką.</em>",
    description:
      "Trumpa forma — pasirinkite paslaugą ir patogų laiką. Patvirtinimas el. paštu per 2 valandas. Be skambučių, jei nenorite.",
    serviceOptions: [
      "Profilaktinė higiena · 60 min",
      "Konsultacija · 45 min",
      "Estetinė restauracija",
      "Implantacija",
      "Ortodontija — Invisalign",
      "Vaikų odontologija",
      "Endodontija",
      "Protezavimas — laminatės",
      "Kita",
    ],
    doctorOptions: [
      "Bet kuris laisvas",
      "Dr. Rūta Vaitkutė",
      "Dr. Tomas Kazakas",
      "Dr. Eglė Simonaitė",
    ],
    submitLabel: "Siųsti užklausą",
    successMessage: "Ačiū — gavome jūsų užklausą. Susisieksime per 2 valandas darbo metu.",
    errorMessage: "Nepavyko išsiųsti. Pabandykite dar kartą arba paskambinkite mums.",
  },

  // ── Contact (kept for MapEmbed if reused later) ───────────────────────────
  contact: {
    heading: "Susisiekite su mumis",
    subheading:
      "Užpildykite formą arba paskambinkite – atsakysime per vieną darbo dieną.",
    mapHeading: "Kaip mus rasti",
  },

  // ── Social ────────────────────────────────────────────────────────────────
  socialLinks: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/vilniausdantuklinika",
      label: "Sekite mus Facebook",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/vilniausdantuklinika",
      label: "Sekite mus Instagram",
    },
  ],

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    brandTagline:
      "Šeimos odontologija Vilniuje. Be skubos, be triukšmo, be paslapčių dėl kainos.",
    visitHeading: "Aplankykite",
    linkColumns: [
      {
        heading: "Klinika",
        items: [
          { label: "Paslaugos",    href: "#services" },
          { label: "Specialistai", href: "#doctors" },
          { label: "Atsiliepimai", href: "#testimonials" },
          { label: "D.U.K.",       href: "#faq" },
          { label: "Registracija", href: "#booking" },
        ],
      },
      {
        heading: "Susisiekti",
        items: [
          { label: "+370 5 234 5678", href: "tel:+37052345678" },
          { label: "info@vilniausdantuklinika.lt", href: "mailto:info@vilniausdantuklinika.lt" },
          { label: "Instagram", href: "https://www.instagram.com/vilniausdantuklinika" },
          { label: "Facebook",  href: "https://www.facebook.com/vilniausdantuklinika" },
        ],
      },
    ],
    legalNote: "Privatumo politika · Slapukai · Pacientų teisės",
  },
  copyright: `© ${new Date().getFullYear()} Vilniaus Dantų Klinika · Visos teisės saugomos`,
};
