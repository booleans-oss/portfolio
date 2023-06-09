import { Switch } from "./ui/switch";
import ExternalArrow from "../icones/ExternalArrow";
import { useMemo, useState } from "react";

export default function ExperiencesComponent() {
  const experiences = useMemo(
    () => [
      {
        technical: true,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-[#57f221] transition">
            Software Engineer · RESPONSIBLE{" "}
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2022 - present",
        achievements: [
          "Built the main marketing website",
          "Worked on the unique warehouse utility dashboard",
          "Launched multiple partner pages",
          "Peer reviewed different critical pull requests and issues",
        ],
        tags: [
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-[rgba(87,_242,_33,_0.10)] px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#57f221]">
            Typescript
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-[rgba(87,_242,_33,_0.10)] px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#57f221]">
            React
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-[rgba(87,_242,_33,_0.10)] px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#57f221]">
            Next.js
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-[rgba(87,_242,_33,_0.10)] px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#57f221]">
            Chakra UI
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-[rgba(87,_242,_33,_0.10)] px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#57f221]">
            Nest.js
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-[rgba(87,_242,_33,_0.10)] px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#57f221]">
            Azure
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-[rgba(87,_242,_33,_0.10)] px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#57f221]">
            Shopify
          </li>,
        ],
      },
      {
        technical: true,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium">
            <span className="text-blue-100/90 group-hover:text-[#FFD700] transition">
              Software Engineer ·{" "}
            </span>
            <span className="text-blue-100/90 group-hover:text-[#007aff]">
              StandForUA
            </span>
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition text-blue-100/90 group-hover:text-[#007aff]" />
          </h2>
        ),
        date: "2022 - present",
        achievements: [
          "Developed main marketing website",
          "Implement tools to facilitate open source contributions (e2e tests, workflows)",
          "Integrated different third-party tools (Google API) to front-end",
          "Supervised the front-end team",
        ],
        tags: [
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#FFD700]">
            Typescript
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#FFD700]">
            React
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#FFD700]">
            Next.js
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#FFD700]">
            Chakra UI
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#007aff]">
            Loopback
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#007aff]">
            AWS
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#007aff]">
            Google API
          </li>,
        ],
      },
      {
        technical: false,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-slate-500 transition">
            Treasurer · INS'WEAR{" "}
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2022 - present",
        achievements: [
          "Responsible for all accounting and financial operations",
          "Created a complete and new accounting system with Excel",
          "Managed the association's budget",
          "Assured the financial stability of the association",
        ],
        tags: [
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-slate-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-slate-500">
            Accounting
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-slate-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-slate-500">
            Finance
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-slate-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-slate-500">
            Excel
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-slate-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-slate-500">
            PowerPoint
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-slate-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-slate-500">
            Communication
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-slate-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-slate-500">
            Leadership
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-slate-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-slate-500">
            Logic
          </li>,
        ],
      },
      {
        technical: true,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-cyan-500">
            Chief Technical Officer · Development Community
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2020 - present",
        achievements: [
          "Developed the main marketing website",
          "Responsible for handling customers requests",
          "Manage development team to fulfill customers' needs",
          "Assured the quality of the code as well as the security of our products",
        ],
        tags: [
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-cyan-500">
            Typescript
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-cyan-500">
            React
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-cyan-500">
            Next.js
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-cyan-500">
            Nest.js
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-cyan-500">
            Express.js
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-cyan-500">
            Docker
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-cyan-500">
            Nx Workspace
          </li>,
        ],
      },
      {
        technical: false,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-white group-hover:bg-black w-fit px-0 xl:group-hover:px-8">
            Sales Intern · PVH Corp.{" "}
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2020 - present",
        achievements: [
          "Advised and helped customers",
          "Organized the display (merchandising)",
          "Received and managed product deliveries",
          "Maintained the reserve",
        ],
        tags: [
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-black px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-white">
            Negociation
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-black px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-white">
            Sales
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-black px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-white">
            Merchandising
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-black px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-white">
            Communication
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-black px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-white">
            Teamwork
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-black px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-white">
            Empathy
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-black px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-white">
            Organization
          </li>,
        ],
      },
      {
        technical: false,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-yellow-500 w-fit">
            Policy Analyst · The Policy Initiatives Institute.
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2020 - present",
        achievements: [
          "Wrote several articles about International Relations, Economics, Human Rights, Environment and Geopolitics",
          "Participated in several advocacy campaigns",
          "Researched and analyzed several topics for policy papers",
        ],
        tags: [
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-600/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-yellow-500">
            Research
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-600/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-yellow-500">
            Analysis
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-600/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-yellow-500">
            Writing
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-600/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-yellow-500">
            Teamwork
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-600/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-yellow-500">
            Critical Thinking
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-600/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-yellow-500">
            Logic
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-600/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-yellow-500">
            Reasoning
          </li>,
        ],
      },
      {
        technical: true,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-blue-500">
            Software Engineer · Advertise Your Server
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2021-2022",
        achievements: [
          "Responsible for all frontend and backend development demands",
          "Developed >20 websites, dashboards for all platforms",
          "Implemented an e-commerce website for the company",
          "Handled all the company's servers, databases and finished products",
        ],
        tags: [
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-500">
            Typescript
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-500">
            React
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-500">
            Vue.js
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-500">
            Svelte
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-500">
            Express.js
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-500">
            Github
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-500">
            Turborepo
          </li>,
        ],
      },
      {
        technical: false,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-blue-400 w-fit">
            President · Model United Nations.
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2020 - present",
        achievements: [
          "Organized multiple Model United Nations across the world",
          "Participated in different Model United Nations",
          "Won multiple awards and recognitions",
        ],
        tags: [
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-400">
            Public Speaking
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-400">
            Debating
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-400">
            Leadership
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-400">
            Teamwork
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-400">
            Bureaucracy
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-400">
            Parliamentary Procedures
          </li>,
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-400">
            Research
          </li>,
        ],
      },
    ],
    []
  );

  const [showNonTech, setShowNonTech] = useState(false);

  return (
    <div className="flex flex-col gap-2 mt-24">
      <div className="flex items-center space-x-2 float-right justify-end text-sm font-semibold text-blue-100/70">
        <Switch
          id="non-tech-switch"
          checked={showNonTech}
          onClick={() => setShowNonTech((prev) => !prev)}
        />
        <label htmlFor="non-tech-switch">Show non-tech experience</label>
      </div>
      <div>
        {experiences.map((experience, id) => (
          <a
            key={id}
            href="https://www.responsible.us/"
            target="_blank"
            rel="noopener noreferrer"
            className={showNonTech || experience.technical ? "block" : "hidden"}
          >
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 items-start justify-start group hover:bg-slate-800/50 transition duration-100 ease-in-out p-8 pr-0 xl:pr-8 rounded-md -ml-8 border-t hover:border-white/10 border-transparent">
              <div className="text-xs text-blue-100/50 uppercase font-medium w-32 whitespace-nowrap">
                {experience.date}
              </div>
              <div className="space-y-2 -mt-[5px]">
                {experience.title}
                <ul className="list-none text-blue-100/70 text-md xl:text-sm space-y-1">
                  {experience.achievements.map((achievement, id) => (
                    <li key={id}>{achievement}</li>
                  ))}
                </ul>
                <ul className="flex list-none flex-wrap gap-2 w-full">
                  {experience.tags.map((tag, index) => (
                    <li {...tag.props} key={index} />
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
