import ParallaxScroll from "./ParallaxScroll";
import type { Block } from "./types";

const header = {
  title: "bitmap",
  subtitle: "A technology and web design agency crafting digital products for ambitious brands across the UAE.",
};

const blocks: Block[] = [
  {
    id: "intro",
    type: "text",
    text: "bitmap is a technology and web design agency based in Dubai, UAE. We build digital products, brands and experiences for companies across the region — from fast-growing startups to established enterprises.",
  },
  {
    id: "stats",
    type: "stats",
    stats: [
      { value: "60+", label: "Projects delivered" },
      { value: "35+", label: "Clients across the UAE" },
      { value: "8", label: "Years in Dubai" },
      { value: "12", label: "Team specialists" },
    ],
  },
  {
    id: "about",
    type: "about",
    eyebrow: "Who we are",
    title: "A Dubai studio built for the pace of the Gulf",
    paragraphs: [
      "Founded in Dubai, bitmap works at the intersection of design and engineering — helping ambitious brands across the UAE and wider GCC launch products that feel as fast as the market they compete in.",
      "We're a small, senior team. No hand-offs to junior benches, no bloated process — just designers and engineers who ship.",
    ],
  },
  {
    id: "services",
    type: "services",
    eyebrow: "What we do",
    title: "Services",
    text: "End-to-end digital capability, from first sketch to production deployment.",
    services: [
      {
        number: "01",
        title: "Web Design",
        text: "Custom, high-craft websites designed to convert — built mobile-first for the way the UAE browses.",
      },
      {
        number: "02",
        title: "Web Development",
        text: "Fast, scalable front-end and back-end engineering using modern frameworks and clean architecture.",
      },
      {
        number: "03",
        title: "Brand Identity",
        text: "Logo, visual language and design systems that give your company a distinct presence in market.",
      },
      {
        number: "04",
        title: "E-Commerce",
        text: "Storefronts and checkout experiences built to perform, integrated with regional payment gateways.",
      },
      {
        number: "05",
        title: "Product Design (UI/UX)",
        text: "Research-driven interface design for web and mobile apps, from wireframe to polished UI.",
      },
      {
        number: "06",
        title: "Digital Strategy",
        text: "Positioning, roadmap and growth planning for teams entering or scaling in the UAE market.",
      },
    ],
  },
  {
    id: "projects",
    type: "projects",
    eyebrow: "Selected work",
    title: "Projects",
    text: "A snapshot of recent work for clients across Dubai and the UAE.",
    projects: [
      { name: "Marina Capital", category: "Finance — Web Platform", year: "2025" },
      { name: "Souk & Co.", category: "Retail — E-Commerce", year: "2025" },
      { name: "Palm Living", category: "Real Estate — Brand & Web", year: "2024" },
      { name: "Nomad Fitness", category: "Wellness — Mobile App", year: "2024" },
    ],
  },
  {
    id: "cta",
    type: "cta",
    title: "Let's build something in Dubai",
    text: "Have a project in mind? We're taking on a limited number of new clients across the UAE this quarter.",
    buttonLabel: "Start a project",
    buttonHref: "#contact",
  },
  {
    id: "contact",
    type: "contact",
    eyebrow: "Get in touch",
    title: "Contact",
    email: "hello@bitmap.ae",
    phone: "+971 4 123 4567",
    address: "Dubai Design District (d3), Dubai, UAE",
  },
];

export default function Home() {
  return (
    <main>
      <ParallaxScroll header={header} blocks={blocks} />
    </main>
  );
}
