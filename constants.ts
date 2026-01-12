import { FileVideo, Camera, Map, Shield, Zap, Target } from 'lucide-react';

export const CONTENT = {
  header: {
    brandTitle1: "AERO",
    brandTitle2: "DYNAMICS",
    tagline: "High Altitude Imaging",
    navItems: [
      { label: "Overview", href: "#overview" },
      { label: "Project", href: "#project" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Media", href: "#media" },
      { label: "Updates", href: "#updates" },
      { label: "Contact", href: "#contact" },
    ]
  },
  hero: {
    headline: "TEXT_HERO_HEADLINE: Beyond The Horizon",
    subline: "TEXT_HERO_SUBLINE: Advanced autonomous drone systems for environmental monitoring and cinematic capture.",
    ctaPrimary: "Explore Project",
    ctaPrimaryTarget: "#project",
    ctaSecondary: "View Gallery",
    bgImage: "https://picsum.photos/1920/1080?grayscale", // MEDIA_HERO_BG
    alt: "Drone flying over landscape"
  },
  intro: {
    kicker: "The Mission",
    title: "TEXT_SECTION_TITLE: Precision in the Air",
    body: `TEXT_SECTION_BODY: Our goal is to redefine what is possible with lightweight, long-endurance quadcopters. By combining state-of-the-art propulsion with AI-driven navigation, we achieve results that were previously reserved for military-grade hardware. 
    
    This platform is built for versatility, capable of carrying modular payloads ranging from multispectral sensors to 8K cinema cameras.`,
    image: "https://picsum.photos/800/600?random=1", // MEDIA_SECTION_1
    alt: "Drone prototype on workbench",
    ctaLabel: "Read Technical Specs"
  },
  capabilities: {
    title: "TEXT_GRID_TITLE: Core Capabilities",
    cards: [
      {
        title: "Long Range",
        body: "TEXT_CARD_BODY: Up to 15km operation range with low-latency HD transmission.",
        icon: Map
      },
      {
        title: "Autonomous",
        body: "TEXT_CARD_BODY: Fully programmable waypoints and obstacle avoidance systems.",
        icon: Zap
      },
      {
        title: "Stabilization",
        body: "TEXT_CARD_BODY: 3-axis gimbal integration for rock-steady footage in high winds.",
        icon: Camera
      },
      {
        title: "Durability",
        body: "TEXT_CARD_BODY: Carbon fiber frame reinforced for rugged environments.",
        icon: Shield
      }
    ]
  },
  process: {
    title: "TEXT_STEPS_TITLE: Development Journey",
    steps: [
      {
        title: "Phase 1: Concept",
        body: "TEXT_STEP_BODY: Initial aerodynamic sketches and propulsion testing.",
        image: "https://picsum.photos/400/300?random=2"
      },
      {
        title: "Phase 2: Prototyping",
        body: "TEXT_STEP_BODY: 3D printed components and first flight controller tuning.",
        image: "https://picsum.photos/400/300?random=3"
      },
      {
        title: "Phase 3: Field Test",
        body: "TEXT_STEP_BODY: Real-world stress testing in alpine conditions.",
        image: "https://picsum.photos/400/300?random=4"
      }
    ]
  },
  gallery: {
    title: "TEXT_GALLERY_TITLE: Captured Footage",
    items: [
      { src: "https://picsum.photos/600/400?random=5", alt: "Mountain view", caption: "Alpine Test #1" },
      { src: "https://picsum.photos/600/800?random=6", alt: "Urban survey", caption: "Urban Survey" },
      { src: "https://picsum.photos/600/400?random=7", alt: "Coastal tracking", caption: "Coastal Tracking" },
      { src: "https://picsum.photos/600/400?random=8", alt: "Night operations", caption: "Night Ops" },
    ]
  },
  updates: {
    title: "TEXT_UPDATES_TITLE: Mission Log",
    items: [
      {
        title: "Firmware v2.0 Released",
        date: "Oct 12, 2023",
        excerpt: "TEXT_UPDATE_EXCERPT: Improved battery efficiency algorithms and new return-to-home logic."
      },
      {
        title: "Winter Stress Test",
        date: "Nov 05, 2023",
        excerpt: "TEXT_UPDATE_EXCERPT: Successful operation at -10°C with nominal battery degradation."
      }
    ]
  },
  contact: {
    headline: "TEXT_CTA_HEADLINE: Ready to Fly?",
    body: "TEXT_CTA_BODY: Whether you are interested in the technology or want to collaborate on a mission, reach out.",
    ctaLabel: "Contact Team",
    email: "pilot@aerodynamics.dev"
  },
  footer: {
    line1: "AeroDynamics Project © 2023",
    line2: "Designed for exploration.",
    links: ["Privacy Policy", "Terms of Use", "Flight Safety"]
  }
};