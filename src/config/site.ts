// src/config/site.ts
//
// SINGLE SOURCE OF TRUTH FOR THIS CLIENT.
// Every client-specific value lives in this file. To rebrand the site
// for a new client, edit this file (+ theme.css + public/images/).
// Components NEVER hardcode client data — they import from here.
//
// ─────────────────────────────────────────────────────────────────────────────
// CLIENT: OZODENTA (demo) — https://www.ozodenta.lt
// ─────────────────────────────────────────────────────────────────────────────
// This is a SALES DEMO built from Ozodenta's publicly available data
// (ozodenta.lt: services, price list, team, contact details, motto).
// Rules for this demo:
//   - Only facts published on their own site. No invented credentials,
//     license numbers, languages, testimonials or review counts.
//   - The Testimonials section is intentionally NOT rendered (see
//     src/pages/index.astro) — real Google reviews would slot in there
//     after the client signs off.
//   - Prices match their published price list (kainos page, 2026-06).
//
// ─────────────────────────────────────────────────────────────────────────────
// A NOTE ON HTML FIELDS
// ─────────────────────────────────────────────────────────────────────────────
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
  years: string;           // meta chip 1 (any short fact)
  license: string;         // meta chip 2
  languages: string;       // meta chip 3
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
  // Web3Forms access key for the booking form. This is a PUBLIC key (it is
  // embedded in the page HTML by design), so it is safe to commit. Used as the
  // default; PUBLIC_WEB3FORMS_KEY in the environment overrides it if set, which
  // lets you swap the target inbox per client without editing code.
  web3formsKey: string;

  // ── Hours ──
  openingHours: OpeningHour[];
  openingHoursShort: string;  // condensed for the booking section

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
    eyebrow: string;
    headlineLines: string[];    // each entry is HTML, rendered as a separate <span> line
    subheadline: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    metaText: string;
    imageLeftLabel: string;     // shown over the left photo placeholder
    imageRightLabel: string;    // shown over the right photo placeholder
    imageLeftSrc: string;       // optional real image; empty = placeholder
    imageRightSrc: string;
    badgeIndex: string;
    badgeTagline: string;
  };

  // ── Ticker ──
  ticker: {
    items: string[];            // each item is HTML; may contain <em>
  };

  // ── Intro / philosophy ──
  intro: {
    eyebrow: string;
    bodyHtml: string;           // big serif paragraph; may contain <em>
    signatureName: string;
    signatureRole: string;
  };

  // ── Services ──
  services: {
    eyebrow: string;
    headingHtml: string;
    subheading: string;
    items: Service[];
  };

  // ── Doctors ──
  doctors: {
    eyebrow: string;
    headingHtml: string;
    items: Doctor[];
  };

  // ── Testimonials (kept in the type; NOT rendered in this demo) ──
  testimonials: {
    eyebrow: string;
    headingHtml: string;
    rating: string;
    reviewCount: string;
    items: Testimonial[];
  };

  // ── FAQ ──
  faq: {
    eyebrow: string;
    headingHtml: string;
    helperHtml: string;
    items: FaqItem[];
  };

  // ── Booking ──
  booking: {
    eyebrow: string;
    headingHtml: string;
    description: string;
    serviceOptions: string[];   // dropdown options
    doctorOptions: string[];    // dropdown options
    timeSlots: string[];        // selectable visit times, e.g. "08:00"
    dateHint: string;           // small note under the date field, e.g. "Dirbame I–V"
    submitLabel: string;
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
    brandTagline: string;
    visitHeading: string;
    linkColumns: FooterLinkColumn[];
    legalNote: string;
  };
  copyright: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// The actual config data — OZODENTA
// ─────────────────────────────────────────────────────────────────────────────

export const site: SiteConfig = {
  // ── Brand ─────────────────────────────────────────────────────────────────
  businessName: "Ozodenta",
  businessNameHtml: "Ozo<em>denta</em>",
  logoMark: "O",
  tagline: "Odontologijos klinika visai šeimai Vilniuje",
  logoSrc: "/images/ozodenta-logo.png",
  logoAlt: "Ozodenta — odontologijos klinika Vilniuje",

  // ── Contact ───────────────────────────────────────────────────────────────
  phone: "+370 685 32 229",
  phoneRaw: "+37068532229",
  email: "info@ozodenta.lt",
  address: {
    street: "Ozo g. 20-10",
    city: "Vilnius",
    postalCode: "",
    country: "Lietuva",
    floorNote: "",
  },
  // Keyless Google Maps embed (?output=embed) — interactive, no API key needed.
  mapEmbedUrl:
    "https://www.google.com/maps?q=Ozo%20g.%2020%2C%20Vilnius&z=16&output=embed",
  // Public Web3Forms access key (demo → forwards form submissions by email).
  web3formsKey: "0df29f9c-76a1-4020-9c9c-f28985a42b21",

  // ── Hours ─────────────────────────────────────────────────────────────────
  openingHours: [
    { day: "Pirmadienis – Penktadienis", hours: "08:00 – 20:00" },
    { day: "Šeštadienis – Sekmadienis",  hours: "Nedirba" },
  ],
  openingHoursShort: "I–V  8:00 – 20:00\nVI–VII  nedirbame",

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    siteUrl: "https://dantukai.gkopcovs.workers.dev",
    defaultTitle: "Ozodenta | Odontologijos klinika Vilniuje",
    defaultDescription:
      "Odontologijos klinika visai šeimai Vilniuje, Ozo g. 20. Terapinis gydymas, estetinis plombavimas, vaikų odontologija, protezavimas, burnos higiena, chirurgija ir implantai.",
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
  // Headline is Ozodenta's own motto from their About page:
  // "Šypsena trunka akimirksnį, bet atminty išlieka amžinybę."
  hero: {
    eyebrow: "Vilnius · Ozo g. 20 · Šeimos odontologijos klinika",
    headlineLines: [
      "Jau 13 metų",
      "rūpinamės",
      "jūsų šypsena.",
    ],
    subheadline: "",
    primaryCtaLabel: "Registruotis vizitui",
    primaryCtaHref: "#booking",
    secondaryCtaLabel: "Paslaugos ir kainos",
    secondaryCtaHref: "#services",
    metaText: "",
    imageLeftLabel: "[ INTERJERAS · Ozodenta klinika ]",
    imageRightLabel: "[ KOMANDA · Ozodenta ]",
    imageLeftSrc: "",
    imageRightSrc: "",
    badgeIndex: "Vilnius",
    badgeTagline: "Dovanokime vieni kitiems šypsenas.",
  },

  // ── Ticker ────────────────────────────────────────────────────────────────
  ticker: {
    items: [
      "Visai šeimai",
      "58 paslaugos",
      "13 metų patirties",
      "<em>Ozo g. 20, Vilnius</em>",
      "I–V 8:00–20:00",
      "Vaikų odontologija",
    ],
  },

  // ── Intro / philosophy ────────────────────────────────────────────────────
  intro: {
    eyebrow: "Filosofija",
    bodyHtml:
      "Šypsena trunka <em>akimirksnį</em>, bet atminty išlieka amžinybę. Todėl savo darbu ir patirtimi siekiame stiprinti jūsų sveikatą ir grąžinti šypseną — kiekvienam šeimos nariui, nuo mažiausio iki vyriausio.",
    signatureName: "— Kristina Bačulienė",
    signatureRole: "Gydytoja odontologė · Klinikos vadovė",
  },

  // ── Services ──────────────────────────────────────────────────────────────
  // Prices from ozodenta.lt/kainos (published price list).
  services: {
    eyebrow: "Paslaugos",
    headingHtml: "Paslaugos visai<br><em>šeimai</em>",
    subheading:
      "58 paslaugos visai šeimai vienoje vietoje. Konsultacija ir gydymo plano sudarymas — €30.",
    items: [
      {
        num: "01",
        nameHtml: "Profesionali burnos <em>higiena</em>",
        description:
          "Profesionali burnos higiena ir dantų apnašų valymas sodos aparatu. Sveikų dantų pagrindas — reguliari priežiūra.",
        price: "€70",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "02",
        nameHtml: "Terapinis <em>gydymas</em>",
        description:
          "Danties šaknų kanalų gydymas: chemomechaninis valymas, plombavimas, MTA. Išsaugome dantį, kai tai įmanoma.",
        price: "€50",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "03",
        nameHtml: "Estetinis <em>plombavimas</em>",
        description:
          "Šviesoje kietėjančios kompozitinės plombos ir estetinis plombavimas — atstatome ir formą, ir natūralią danties išvaizdą.",
        price: "€70",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "04",
        nameHtml: "Vaikų dantų gydymas",
        description:
          "Pieninių dantų gydymas ir plombavimas, krūminių dantų silantavimas. Ramus, vaikui pritaikytas vizitas.",
        price: "€15",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "05",
        nameHtml: "Dantų <em>protezavimas</em>",
        description:
          "Metalo keramikos, cirkonio keramikos ir bemetalės keramikos (Emax) vainikėliai — pagal situaciją ir biudžetą.",
        price: "€400",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "06",
        nameHtml: "Chirurginės procedūros",
        description:
          "Dantų rovimas, šaknies rezekcija ir kitos burnos chirurgijos procedūros — atliekamos vietoje, mūsų klinikoje.",
        price: "€50",
        priceUnit: "nuo",
        href: "#booking",
      },
      {
        num: "07",
        nameHtml: "Implantai",
        description:
          "Dantų implantacija prarastiems dantims atkurti. Kaina priklauso nuo situacijos — tikslų planą sudarome konsultacijos metu.",
        price: "€550",
        priceUnit: "nuo",
        href: "#booking",
      },
    ],
  },

  // ── Doctors ───────────────────────────────────────────────────────────────
  // Names and roles exactly as published on ozodenta.lt/specialistai.
  // No invented credentials — bios stay within what their site states.
  doctors: {
    eyebrow: "Komanda",
    headingHtml: "Žmonės, kuriems <em>patikite</em><br>savo šypseną.",
    items: [
      {
        role: "Klinikos vadovė",
        firstName: "Gyd. Kristina",
        surnameHtml: "<em>Bačulienė</em>",
        bio: "Gydytoja odontologė ir klinikos vadovė. Vadovauja Ozodenta komandai, kurios patirtis odontologijoje — 13 metų.",
        years: "Ozodenta · Vilnius",
        license: "",
        languages: "",
        portraitSrc: "",
        portraitLabel: "[ FOTO · K. BAČULIENĖ ]",
      },
      {
        role: "Gydytoja odontologė",
        firstName: "Gyd. Ana",
        surnameHtml: "<em>Svarauskė</em>",
        bio: "Gydytoja odontologė Ozodenta klinikoje — terapinis gydymas ir kasdienė visos šeimos odontologija.",
        years: "Ozodenta · Vilnius",
        license: "",
        languages: "",
        portraitSrc: "",
        portraitLabel: "[ FOTO · A. SVARAUSKĖ ]",
      },
      {
        role: "Burnos higienistė",
        firstName: "Diana",
        surnameHtml: "<em>Jarienė</em>",
        bio: "Odontologo padėjėja ir burnos higienistė — profesionalios burnos higienos procedūros.",
        years: "Ozodenta · Vilnius",
        license: "",
        languages: "",
        portraitSrc: "",
        portraitLabel: "[ FOTO · D. JARIENĖ ]",
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────────────────────
  // NOT RENDERED in this demo (removed from index.astro) — we never show
  // invented reviews. After sign-off, real Google reviews go here.
  testimonials: {
    eyebrow: "Pacientai",
    headingHtml: "Tylūs<br><em>įrodymai.</em>",
    rating: "",
    reviewCount: "",
    items: [],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  // Answers built strictly from ozodenta.lt published info (prices, hours).
  faq: {
    eyebrow: "Klausimai",
    headingHtml: "Dažniausi<br><em>klausimai</em>",
    helperHtml:
      "Nerandate atsakymo? Paskambinkite +370 685 32 229 arba parašykite — atsakome darbo valandomis.",
    items: [
      {
        question: "Kiek kainuoja konsultacija?",
        answer:
          "Konsultacija ir gydymo plano sudarymas kainuoja €30. Jei reikia, rentgeno nuotrauka — €10. Po konsultacijos turite aiškų planą ir kainas prieš pradedant bet kokį gydymą.",
      },
      {
        question: "Ar gydote vaikus?",
        answer:
          "Taip — vaikų dantų gydymas yra viena pagrindinių mūsų sričių: pieninių dantų gydymas ir plombavimas (nuo €20) bei krūminių dantų silantavimas (€15).",
      },
      {
        question: "Kokie protezavimo variantai ir kainos?",
        answer:
          "Siūlome metalo keramikos vainikėlius (€400), cirkonio keramikos (€500) ir bemetalės keramikos Emax (€500). Kuris variantas tinkamiausias — aptariame konsultacijos metu.",
      },
      {
        question: "Ar atliekate dantų implantaciją?",
        answer:
          "Taip, atliekame dantų implantaciją — kaina nuo €550 iki €750, priklausomai nuo situacijos. Tikslų planą ir kainą sudarome po apžiūros ir rentgeno nuotraukos.",
      },
      {
        question: "Koks jūsų darbo laikas?",
        answer:
          "Dirbame pirmadieniais–penktadieniais nuo 8:00 iki 20:00. Savaitgaliais klinika nedirba.",
      },
      {
        question: "Kaip mus rasti?",
        answer:
          "Klinika įsikūrusi Vilniuje, Ozo g. 20-10. Registruotis galite telefonu +370 685 32 229, el. paštu info@ozodenta.lt arba užpildę registracijos formą šioje svetainėje.",
      },
    ],
  },

  // ── Booking ───────────────────────────────────────────────────────────────
  booking: {
    eyebrow: "Registracija",
    headingHtml: "Užsisakykite<br><em>laiką.</em>",
    description:
      "Pasirinkite paslaugą, datą ir jums patogų laiką — gautą užklausą patvirtinsime telefonu arba el. paštu darbo valandomis.",
    serviceOptions: [
      "Konsultacija ir gydymo planas · €30",
      "Profesionali burnos higiena",
      "Terapinis gydymas",
      "Estetinis plombavimas",
      "Vaikų dantų gydymas",
      "Dantų protezavimas",
      "Chirurginės procedūros",
      "Implantacija",
      "Kita",
    ],
    doctorOptions: [
      "Bet kuris laisvas specialistas",
      "Gyd. Kristina Bačulienė",
      "Gyd. Ana Svarauskė",
      "Burnos higienistė Diana Jarienė",
    ],
    timeSlots: [
      "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
      "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
    ],
    dateHint: "Dirbame I–V 8:00–20:00",
    submitLabel: "Siųsti užklausą",
    successMessage:
      "Ačiū — gavome jūsų užklausą. Patvirtinsime pasirinktą laiką darbo valandomis (I–V 8:00–20:00).",
    errorMessage: "Nepavyko išsiųsti. Pabandykite dar kartą arba paskambinkite +370 685 32 229.",
  },

  // ── Contact (kept for MapEmbed if reused later) ───────────────────────────
  contact: {
    heading: "Susisiekite su mumis",
    subheading:
      "Užpildykite formą arba paskambinkite — atsakysime darbo valandomis.",
    mapHeading: "Čia mus rasite",
  },

  // ── Social ────────────────────────────────────────────────────────────────
  socialLinks: [],

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    brandTagline:
      "Odontologijos klinika visai šeimai Vilniuje. Nuo profilaktikos iki implantų — vienoje vietoje.",
    visitHeading: "Aplankykite",
    linkColumns: [
      {
        heading: "Klinika",
        items: [
          { label: "Paslaugos",    href: "#services" },
          { label: "Specialistai", href: "#doctors" },
          { label: "D.U.K.",       href: "#faq" },
          { label: "Registracija", href: "#booking" },
        ],
      },
      {
        heading: "Susisiekti",
        items: [
          { label: "+370 685 32 229", href: "tel:+37068532229" },
          { label: "+370 5 240 5656", href: "tel:+37052405656" },
          { label: "info@ozodenta.lt", href: "mailto:info@ozodenta.lt" },
        ],
      },
    ],
    legalNote: "Privatumo politika · Slapukai · Pacientų teisės",
  },
  copyright: `© ${new Date().getFullYear()} Ozodenta · Visos teisės saugomos`,
};
