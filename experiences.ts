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
    namespace: "engineai",
    stack: [
      "React",
      "Material UI",
      "GraphQL",
      "Apollo",
      "Nx Workspace",
      "PostgreSQL",
    ],
    dates: {
      start: {
        month: "april",
        year: "2024",
      },
      end: {
        month: "june",
        year: "2025",
      }
    },
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
    namespace: "brain",
    stack: ["Next.js", "TailwindCSS", "Nest.js", "PostgreSQL", "TypeORM"],
    dates: {
      start: {
        month: "june",
        year: "2023",
      },
      end: {
        month: "april",
        year: "2024",
      }
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
    stack: ["Next.js", "ChakraUI", "Nest.js", "Azure", "Shopify"],
    dates: {
      start: {
        month: "march",
        year: "2022",
      },
      end: {
        month: "july",
        year: "2023",
      }
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
    stack: ["Next.js", "Serverless", "TailwindCSS", "PostgreSQL", "Drizzle"],
    dates: {
      start: {
        month: "august",
        year: "2022",
      },
      end: {
        month: "january",
        year: "2023",
      }
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
    stack: ["Next.js", "ChakraUI", "Loopback", "AWS", "Google API"],
    dates: {
      start: {
        month: "january",
        year: "2022",
      },
      end: {
        month: "april",
        year: "2023",
      }
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