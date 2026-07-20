/* ============================================================================
   Site content.  ⬇ REPLACE everything marked TODO before launch.
   PHOTOGRAPHY: the images in /public/images are licensed stock placeholders
   (Unsplash) standing in for the studio's real portfolio. Swap each for the
   artist's own work — same file names, or update the paths below.
   ============================================================================ */

export const BRAND = {
  name: "Day & Evening",
  full: "Day and Evening Makeup",
  tagline: "The face for daylight. The face for night.",
  // Real details from the Google Business listing:
  location: "Makeup Artistry — Rochdale, UK",
  geo: "53.62°N · 2.16°W", // from the listing coordinates
  address: "First Floor, 68 Yorkshire St, Rochdale OL16 1BZ",
  mapsUrl: "https://maps.app.goo.gl/S4M652iWXpaQfbH76",
  phoneDisplay: "+44 7957 621227",
  whatsapp: "447957621227", // UK mobile, international format, no “+”
  // Not shown on the listing — add if the studio has them, else these are hidden:
  email: "", // TODO
  instagram: "", // TODO handle without the @
};

export interface NavLink { label: string; href: string; }
export const NAV: NavLink[] = [
  { label: "The Work", href: "#registers" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "The Artist", href: "#about" },
  { label: "Words", href: "#words" },
  { label: "Book", href: "#book" },
];

export interface Register {
  no: string;
  key: "Day" | "Evening" | "Bridal";
  title: string;
  manifesto: string;
  priceFrom: string;
  includes: string[];
  image: string;
}

export const REGISTERS: Register[] = [
  {
    no: "01",
    key: "Day",
    title: "Daylight",
    manifesto:
      "Skin that reads like skin. Even, luminous, unmistakably you — built for a north-facing window, a lens, and eight honest hours. The kind of natural that takes real technique to look like no technique at all.",
    priceFrom: "On request",
    includes: ["Skin prep & lashes", "True-to-daylight finish", "Lasts 8+ hours"],
    image: "/images/day-1.jpg",
  },
  {
    no: "02",
    key: "Evening",
    title: "After Dark",
    manifesto:
      "Definition, depth, and a little theatre. A face engineered for low bulbs and camera flash — the look that makes a room turn as you walk in, and photographs like you meant it.",
    priceFrom: "On request",
    includes: ["Full face & contour", "Statement eye or lip", "Flash-tested"],
    image: "/images/evening-1.jpg",
  },
  {
    no: "03",
    key: "Bridal",
    title: "The Bride",
    manifesto:
      "Your day, first look to last dance — with a pre-wedding trial so the morning holds no surprises. Two rooms, one face that carries you through both.",
    priceFrom: "On request",
    includes: ["Pre-wedding trial", "On-the-day application", "Touch-up kit to keep"],
    image: "/images/bridal-1.jpg",
  },
];

export type Filter = "All" | "Day" | "Evening" | "Bridal";
export const FILTERS: Filter[] = ["All", "Day", "Evening", "Bridal"];

export interface Look {
  id: string;
  category: Exclude<Filter, "All">;
  title: string;
  image: string;
  tall?: boolean;
}

export const LOOKS: Look[] = [
  { id: "l1", category: "Day", title: "Fresh skin, soft cheek", image: "/images/hero-day.jpg", tall: true },
  { id: "l2", category: "Evening", title: "Bronze smoke", image: "/images/evening-2.jpg" },
  { id: "l3", category: "Bridal", title: "Veil & satin skin", image: "/images/bridal-2.jpg", tall: true },
  { id: "l4", category: "Day", title: "Sun-warmed glow", image: "/images/day-2.jpg" },
  { id: "l5", category: "Evening", title: "Red-lip drama", image: "/images/hero-evening.jpg", tall: true },
  { id: "l6", category: "Bridal", title: "Gold & rose", image: "/images/bridal-1.jpg" },
  { id: "l7", category: "Day", title: "Dewy, undone", image: "/images/day-1.jpg" },
  { id: "l8", category: "Evening", title: "Sculpted & lit", image: "/images/evening-1.jpg", tall: true },
];

export interface Stat { value: string; label: string; }
export const STATS: Stat[] = [
  { value: "9", label: "Years behind the brush" },
  { value: "600+", label: "Faces made up" },
  { value: "120+", label: "Weddings" },
  { value: "4.9", label: "Average rating" },
];

export const ABOUT = {
  heading: "One artist, two hours of the day",
  body: [
    "Day and Evening began with a small, stubborn truth: the makeup that flatters you at nine in the morning is rarely the makeup that flatters you at nine at night. Daylight is honest. Evening light is theatrical. Most faces are built for one and worn in both.",
    "So the work here is built for the hour it will be seen in — a daytime face that holds up in a plain window, an evening face made for warm bulbs and flash, and for the bride, both at once. No guesswork, no surprises on the morning that matters.",
  ],
  portrait: "/images/artist.jpg",
  signature: "— The artist", // TODO real name
};

export interface Testimonial { quote: string; name: string; context: string; }
/* TODO: replace with real, consented client reviews before launch. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "She did my bridal trial and I cried — it looked like me, but the version I see in my head. Day-of makeup lasted through a very sweaty first dance.",
    name: "Amara O.",
    context: "Bride",
  },
  {
    quote:
      "Booked a ‘natural’ day look for a shoot and the photographer asked who did my skin. Flawless on camera, never heavy.",
    name: "Ini B.",
    context: "Editorial shoot",
  },
  {
    quote:
      "Evening glam for my birthday under restaurant lighting was unreal. Every photo from that night is a keeper.",
    name: "Tola A.",
    context: "Evening · dinner",
  },
];

export interface Faq { q: string; a: string; }
export const FAQS: Faq[] = [
  { q: "Do you travel to me?", a: "Yes — on-location for bridal and events, or come to the studio. On-location carries a small travel fee by distance." },
  { q: "How far ahead should I book?", a: "Weddings: 2–3 months if you can. Day and evening looks: a week is comfortable, but ask about last-minute slots." },
  { q: "Is a trial included for bridal?", a: "Always. The bridal package includes a pre-wedding trial so every detail is settled before the day itself." },
];
