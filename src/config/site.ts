// src/config/site.ts
//
// SINGLE SOURCE OF TRUTH FOR THIS CLIENT.
// Every client-specific value lives in this file. To rebrand the site
// for a new client, edit this file (+ theme.css + public/images/).
// Components NEVER hardcode client data — they import from here.

// ─────────────────────────────────────────────────────────────────────────────
// Type definitions — these describe the SHAPE of the data below.
// ─────────────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string; // Lucide icon name, e.g. "sparkles", "shield-check"
}

export interface Testimonial {
  name: string;
  role: string;   // e.g. "Patient since 2018"
  quote: string;
  rating: number; // 1–5
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OpeningHour {
  day: string;   // e.g. "Pirmadienis – Penktadienis"
  hours: string; // e.g. "08:00 – 19:00" or "Nedirba"
}

export interface SocialLink {
  platform: string; // "facebook", "instagram", etc. — also used as icon key
  url: string;
  label: string;    // accessibility label
}

export interface SiteConfig {
  // Brand
  businessName: string;
  tagline: string;
  logoSrc: string;
  logoAlt: string;

  // Contact
  phone: string;     // display version, e.g. "+370 5 234 5678"
  phoneRaw: string;  // tel: link version, digits only with + prefix
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  mapEmbedUrl: string;

  // Hours
  openingHours: OpeningHour[];

  // SEO
  seo: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
    locale: string;
  };

  // Navigation
  navLinks: NavLink[];

  // Hero
  hero: {
    headline: string;
    subheadline: string;
    ctaLabel: string;
    ctaHref: string;
    backgroundImage: string;
  };

  // Services
  services: {
    heading: string;
    subheading: string;
    items: Service[];
  };

  // About
  about: {
    heading: string;
    body: string;
    image: string;
  };

  // Testimonials
  testimonials: {
    heading: string;
    items: Testimonial[];
  };

  // FAQ
  faq: {
    heading: string;
    items: FaqItem[];
  };

  // Contact
  contact: {
    heading: string;
    subheading: string;
    mapHeading: string;
  };

  // Social
  socialLinks: SocialLink[];

  // Footer
  copyright: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// The actual config data
// ─────────────────────────────────────────────────────────────────────────────

export const site: SiteConfig = {
  // ── Brand ─────────────────────────────────────────────────────────────────
  businessName: "Vilniaus Dantų Klinika",
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
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.5!2d25.2797!3d54.6872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd942c8a8d9b9d%3A0x0!2sGedimino+pr.+24%2C+Vilnius!5e0!3m2!1sen!2slt!4v1700000000000",

  // ── Hours ─────────────────────────────────────────────────────────────────
  openingHours: [
    { day: "Pirmadienis – Penktadienis", hours: "08:00 – 19:00" },
    { day: "Šeštadienis",                hours: "09:00 – 14:00" },
    { day: "Sekmadienis",                hours: "Nedirba" },
  ],

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    siteUrl: "https://vilniausdantuklinika.lt",
    defaultTitle: "Vilniaus Dantų Klinika | Modernios odontologijos paslaugos",
    defaultDescription:
      "Patyrę gydytojai, moderni įranga, šilta aplinka. Implantacija, valymas, balinimas, vaikų odontologija Vilniaus centre.",
    ogImage: "/images/og-image.jpg",
    locale: "lt_LT",
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  navLinks: [
    { label: "Pradžia",      href: "#hero" },
    { label: "Paslaugos",    href: "#services" },
    { label: "Apie mus",     href: "#about" },
    { label: "Atsiliepimai", href: "#testimonials" },
    { label: "Kontaktai",    href: "#contact" },
  ],

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    headline: "Sveika šypsena – kokybiška odontologija Vilniuje",
    subheadline:
      "Patyrę gydytojai, moderni įranga, šiltas požiūris. Užsiregistruokite konsultacijai ir pasirūpinkite savo dantimis su mumis.",
    ctaLabel: "Užsiregistruoti vizitui",
    ctaHref: "#contact",
    backgroundImage: "/images/hero.jpg",
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: {
    heading: "Mūsų paslaugos",
    subheading: "Pilnas odontologijos paslaugų spektras visai šeimai",
    items: [
      {
        title: "Profilaktinis valymas",
        description:
          "Profesionalus dantų valymas ultragarsu ir akmenų šalinimas. Rekomenduojama du kartus per metus.",
        icon: "sparkles",
      },
      {
        title: "Dantų balinimas",
        description:
          "Saugus klinikinis balinimas naudojant naujausias technologijas. Iki 8 atspalvių šviesesni dantys per vieną apsilankymą.",
        icon: "smile",
      },
      {
        title: "Implantacija",
        description:
          "Aukščiausios kokybės implantai – ilgalaikis sprendimas trūkstamiems dantims atstatyti.",
        icon: "shield-check",
      },
      {
        title: "Ortodontija",
        description:
          "Tradiciniai breketai ir nematomi Invisalign aparatai vaikams bei suaugusiems.",
        icon: "grid-3x3",
      },
      {
        title: "Vaikų odontologija",
        description:
          "Švelnus požiūris jauniausiems pacientams. Kuriame jaukią aplinką be streso ir baimės.",
        icon: "baby",
      },
      {
        title: "Skubi pagalba",
        description:
          "Skausmo malšinimas ir skubi pagalba tą pačią dieną. Skambinkite – padėsime greitai.",
        icon: "stethoscope",
      },
    ],
  },

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    heading: "Apie kliniką",
    body:
      "Vilniaus Dantų Klinika veikia nuo 2009 metų ir per tą laiką tapo viena patikimiausių odontologijos klinikų sostinės centre. Mūsų komandą sudaro aštuoni patyrę gydytojai, kurie nuolat tobulina savo žinias tarptautiniuose mokymuose. Naudojame moderniausią įrangą – skaitmeninę rentgeno aparatūrą, intraoralinius skaitytuvus ir lazerinę terapiją. Tikime, kad apsilankymas pas odontologą gali būti malonus, todėl kuriame jaukią, ramią aplinką kiekvienam pacientui.",
    image: "/images/team-1.jpg",
  },

  // ── Testimonials ──────────────────────────────────────────────────────────
  testimonials: {
    heading: "Ką sako mūsų pacientai",
    items: [
      {
        name: "Rasa V.",
        role: "Pacientė nuo 2018 m.",
        quote:
          "Geriausia klinika Vilniuje. Daktarė labai švelni ir kantri, visada paaiškina kiekvieną žingsnį. Rekomenduoju visiems savo draugams.",
        rating: 5,
      },
      {
        name: "Tomas K.",
        role: "Implantacijos pacientas",
        quote:
          "Atlikta implantacija visiškai be skausmo. Rezultatas viršijo lūkesčius – atrodo kaip natūralus dantis.",
        rating: 5,
      },
      {
        name: "Giedrė ir Mindaugas P.",
        role: "Šeima",
        quote:
          "Vedame čia vaikus jau penkerius metus. Personalas puikus su mažaisiais – be ašarų, be baimės.",
        rating: 5,
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    heading: "Dažniausiai užduodami klausimai",
    items: [
      {
        question: "Kaip užsiregistruoti vizitui?",
        answer:
          "Galite užsiregistruoti telefonu, el. paštu arba per kontaktų formą šioje svetainėje. Atsakome darbo dienomis iki 24 valandų.",
      },
      {
        question: "Ar priimate sutartis su ligonių kasomis?",
        answer:
          "Taip, esame sudarę sutartį su Vilniaus teritorine ligonių kasa. Tam tikros paslaugos yra kompensuojamos – pasiteiraukite registratūroje.",
      },
      {
        question: "Kiek kainuoja konsultacija?",
        answer:
          "Pirminė konsultacija kainuoja 25 €. Ją sudaro burnos apžiūra, gydymo plano sudarymas ir galutinės kainos paskaičiavimas.",
      },
      {
        question: "Ar dirbate su vaikais?",
        answer:
          "Taip, turime atskirą vaikų odontologijos specialistę. Vaikai laukiami nuo dvejų metų amžiaus.",
      },
      {
        question: "Kokius mokėjimo būdus priimate?",
        answer:
          "Priimame mokėjimą grynaisiais, banko kortelėmis ir banko pavedimu. Galima mokėti dalimis – pasiteiraukite registratūroje.",
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────
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
  copyright: `© ${new Date().getFullYear()} Vilniaus Dantų Klinika. Visos teisės saugomos.`,
};