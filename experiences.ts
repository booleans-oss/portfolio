import BrainSecurityImage from "@/images/brainsecurity.png";
import EngineAIImage from "@/images/engineai.png";
import ParkItImage from "@/images/parkit.png";
import ResponsibleImage from "@/images/responsible.png";
import StandForUAImage from "@/images/standforua.png";
import { ExperienceProps } from "./components/experience";

const experiences: Array<ExperienceProps> = [
  {
    index: 5,
    name: "Engine AI",
    stack: [
      "React",
      "Material UI",
      "GraphQL",
      "Apollo",
      "Nx Workspace",
      "PostgreSQL",
    ],
    dates: {
      start: "apr 2024",
      end: "jun 2025",
    },
    description:
      "At Engine AI, I worked as a fullstack developer maintaining visualization engines and delivering custom client projects. Collaborating with design and product teams, I developed interactive data visualization platforms, optimized performance across devices, and built tailor-made software solutions that transformed complex datasets into user-friendly interfaces for enterprise clients.",
    link: {
      text: "engineai.com",
      url: "https://engineai.com",
    },
    image: EngineAIImage,
    bigImage: false,
  },
  {
    index: 4,
    name: "BRAIN",
    stack: ["Next.js", "TailwindCSS", "Nest.js", "PostgreSQL", "TypeORM"],
    dates: {
      start: "jun 2023",
      end: "apr 2024",
    },
    description:
      "At BRAIN, I worked as a fullstack developer building gamified cybersecurity awareness platforms and secure authentication systems. Collaborating with security experts, I developed the main gaming platform and interactive lesson modules that taught cyber attack prevention and security best practices, transforming complex cybersecurity concepts into engaging, accessible training experiences for enterprise users.",
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
    stack: ["Next.js", "ChakraUI", "Nest.js", "Azure", "Shopify"],
    dates: {
      start: "mar 2022",
      end: "jul 2023",
    },
    description:
      "At RESPONSIBLE, I worked as a fullstack developer building circular fashion platforms where customers could upload and rate clothes for cashback. Collaborating with sustainability teams, I developed brand-specific websites with image upload functionality and comprehensive admin dashboards for inventory management and shipping tracking, creating seamless sustainable e-commerce experiences for fashion-conscious consumers.",
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
    stack: ["Next.js", "Serverless", "TailwindCSS", "PostgreSQL", "Drizzle"],
    dates: {
      start: "aug 2022",
      end: "jan 2023",
    },
    description:
      "At ParkIt, I worked as a fullstack developer building automated website deployment platforms with AI-powered domain showcasing. I developed streamlined onboarding flows with DNS configuration, AI-generated showcase websites (blogs, e-commerce, portfolios), and admin dashboards with domain analytics, transforming domain selling into automated, data-driven experiences for faster sales.",
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
    stack: ["Next.js", "ChakraUI", "Loopback", "AWS", "Google API"],
    dates: {
      start: "jan 2022",
      end: "apr 2023",
    },
    description:
      "At StandForUA, I worked as a fullstack developer building humanitarian aid platforms with multilingual support (5+ languages) and geographical mapping. I developed request listing systems that connected Ukrainians needing help (food, services, accommodation) with global volunteers, creating accessible crisis relief experiences through secure contact matching functionality.",
    link: {
      text: "standforua.org",
      url: "https://standforua.org",
    },
    image: StandForUAImage,
    bigImage: true,
  },
];

export default experiences;