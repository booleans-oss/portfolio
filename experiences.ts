import BrainSecurityImage from "@/images/brainsecurity.png";
import EngineAIImage from "@/images/engineai.png";
import ParkItImage from "@/images/parkit.png";
import ResponsibleImage from "@/images/responsible.png";
import StandForUAImage from "@/images/standforua.png";
import WealthcomeImage from "@/images/wealthcome.png";
import { ExperienceProps } from "./components/experience";

const experiences: Array<ExperienceProps> = [
  {
    index: 6,
    name: "Engine AI",
    namespace: "engineai",
    stack: [
      "Capital Markets",
      "AI/ML Engineering",
      "Data Architecture",
      "Web Development",
    ],
    dates: {
      start: {
        month: "april",
        year: "2024",
      },
    },
    link: {
      text: "engineai.com",
      url: "https://engineai.com",
    },
    image: EngineAIImage,
    bigImage: false,
  },
  {
    index: 5,
    name: "Wealthcome",
    namespace: "wealthcome",
    stack: ["Data Engineering", "Fintech", "Data Migration", "Pipeline Design"],
    dates: {
      start: {
        month: "september",
        year: "2025",
      },
      end: {
        month: "november",
        year: "2025",
      },
    },
    link: {
      text: "wealthcome.fr",
      url: "https://wealthcome.fr",
    },
    image: WealthcomeImage,
    bigImage: true,
  },
  {
    index: 4,
    name: "BRAIN",
    namespace: "brain",
    stack: ["Web Development", "Gamification", "Cybersecurity", "UI/UX Design"],
    dates: {
      start: {
        month: "june",
        year: "2023",
      },
      end: {
        month: "april",
        year: "2024",
      },
    },
    link: {
      text: "brainsecurity.io",
      url: "https://brainsecurity.io",
    },
    image: BrainSecurityImage,
    bigImage: true,
  },
  {
    index: 3,
    name: "RESPONSIBLE",
    namespace: "responsible",
    stack: ["E-commerce", "Web Development", "Sustainability", "UI/UX Design"],
    dates: {
      start: {
        month: "march",
        year: "2022",
      },
      end: {
        month: "july",
        year: "2023",
      },
    },
    link: {
      text: "responsible.com",
      url: "https://responsible.com",
    },
    image: ResponsibleImage,
    bigImage: false,
  },
  {
    index: 2,
    name: "ParkIt",
    namespace: "parkit",
    stack: ["AI Automation", "Web Development", "Marketplace", "Context Engineering"],
    dates: {
      start: {
        month: "august",
        year: "2022",
      },
      end: {
        month: "january",
        year: "2023",
      },
    },
    link: {
      text: "parkit.io",
      url: "https://parkit.io",
    },
    image: ParkItImage,
    bigImage: false,
  },
  {
    index: 1,
    name: "StandForUA",
    namespace: "standforua",
    stack: ["Web Development", "Humanitarian Tech", "i18n", "Geolocation"],
    dates: {
      start: {
        month: "january",
        year: "2022",
      },
      end: {
        month: "april",
        year: "2023",
      },
    },
    link: {
      text: "standforua.org",
      url: "https://standforua.org",
    },
    image: StandForUAImage,
    bigImage: true,
  },
];

export default experiences;
