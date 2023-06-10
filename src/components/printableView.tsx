import {
  AtSignIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  PhoneIcon,
  PinIcon,
} from "lucide-react";
import PrintIcon from "../icones/Print";
import RightArrow from "../icones/RightArrow";
import { useTranslation } from "react-i18next";
import { useMemo, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import LanguageSelector from "./languageSelector";

type Experience = {
  url: string;
  company: string;
  title: string;
  date: string;
  tasks: string[];
  tags: string[];
};

export default function PrintableView() {
  const { t, i18n } = useTranslation();
  const printableDocument = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printableDocument.current,
  });

  const experiences = useMemo(
    () =>
      t("cv.experience.experiences", {
        returnObjects: true,
      }) as Array<Experience>,
    [t]
  );

  return (
    <div className="w-screen h-full flex items-center xl:py-40 flex-col gap-10">
      <div className="absolute text-white">
        <LanguageSelector
          onChange={(newValue) => i18n.changeLanguage(newValue)}
        />
      </div>
      <div className="hidden xl:flex flex-col xl:flex-row justify-between w-full xl:w-[1000px] items-center h-full">
        <a
          href={i18n.language === "en" ? "/" : "/fr"}
          className="text-blue-100/50 group text-sm uppercase font-semibold hover:text-blue-100/90 transition duration-300 ease-in-out"
        >
          <RightArrow className="w-5 h-5 inline-block mr-2 rotate-180 group-hover:-translate-x-2 transition duration-3 ease-in-out" />
          {t("cv.goBackButton")}
        </a>
        <button onClick={handlePrint} className="text-blue-100/50 flex gap-2 items-center rounded-full border border-blue-100/50 px-4 py-2 text-sm uppercase font-semibold hover:text-blue-100/90 transition duration-300 ease-in-out">
          <PrintIcon className="inline h-4 w-4" />
          {t("cv.downloadButton")}
        </button>
      </div>
      <div className="w-full xl:w-[1000px] h-full bg-background p-8 space-y-12" ref={printableDocument}>
        <div className="flex flex-col xl:flex-row items-start justify-between xl:items-center border-b border-black pb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tighter">
              Clement Lebon
            </h1>
            <h2 className="text-xl font-semibold">
              {t("index.presentation.role")}
            </h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-y-4 gap-x-4">
            <a
              href="tel:+33767338009"
              className="flex items-center gap-2 text-sm"
            >
              <PhoneIcon className="inline h-4 w-4" />
              +33 767 33 80 09
            </a>

            <a
              href="mailto:clementlebon6@gmail.com"
              className="flex items-center gap-2 text-sm"
            >
              <AtSignIcon className="inline h-4 w-4" />
              clementlebon6@gmail.com
            </a>

            <a
              href="https://clementlbn.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm"
            >
              <GlobeIcon className="inline h-4 w-4" />
              clementlbn.vercel.app
            </a>

            <span className="flex items-center gap-2 text-sm">
              <PinIcon className="inline h-4 w-4" />
              Bordeaux, France
            </span>

            <a
              href="https://www.linkedin.com/in/clement-lebon/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm"
            >
              <LinkedinIcon className="inline h-4 w-4" />
              clement-lebon
            </a>
            <a
              href="https://github.com/booleans-oss"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm"
            >
              <GithubIcon className="inline h-4 w-4" />
              booleans-oss
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-y-4 xl:gap-y-0 xl:divide-x-2">
          <div className="col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold uppercase w-fit text-zinc-700/70 tracking-wider">
                {t("cv.skills.title")}
              </h3>
              <div className="flex flex-col gap-8 mt-2">
                <div className="mt-4 flex flex-col gap-2">
                  <h4 className="text-md font-semibold border-b border-black w-fit">
                    Frontend
                  </h4>
                  <ul className="list-none flex flex-wrap gap-2 text-sm">
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      React
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Next.js
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Vue.js
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      HTML
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      CSS
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      SCSS
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      TailwindCSS
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Bootstrap
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Chakra UI
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Storybook
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-md font-semibold border-b border-black w-fit">
                    Backend
                  </h4>
                  <ul className="list-none flex flex-wrap gap-2 text-sm">
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      React
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Node.js
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Express.js
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Nest.js
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      CSS
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      GraphQL
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Serverless
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Loopback
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-md font-semibold border-b border-black w-fit">
                    Design
                  </h4>
                  <ul className="list-none flex flex-wrap gap-2 text-sm">
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Figma
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Adobe XD
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Adobe Photoshop
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-md font-semibold border-b border-black w-fit">
                    {t("cv.skills.databases")}
                  </h4>
                  <ul className="list-none flex flex-wrap gap-2 text-sm">
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      MySQL
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      PostgreSQL
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      SQLite
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Redis
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-md font-semibold border-b border-black w-fit">
                    DevOps
                  </h4>
                  <ul className="list-none flex flex-wrap gap-2 text-sm">
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Shell
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Terraform
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Nx
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Docker
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Heroku
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      AWS
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Azure
                    </li>
                    <li className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer">
                      Turborepo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase text-zinc-700/70 tracking-wider">
                {t("cv.education.title")}
              </h3>
              <div className="flex flex-col gap-2">
                <div>
                  <h4 className="text-md font-semibold border-b border-black w-fit">
                    Omnes Education - INSEEC
                  </h4>
                  <p className="text-sm"> {t("cv.education.degree")}</p>
                  <p className="text-sm">2022 - 2026</p>
                </div>
                <div>
                  <h4 className="text-md font-semibold border-b border-black w-fit">
                    Redhill School
                  </h4>
                  <p className="text-sm">
                    {t("cv.education.highSchoolDegree")}
                  </p>
                  <p className="text-sm">2019-2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 xl:pl-5">
            <div className="flex gap-2 flex-col">
              <h3 className="text-xl font-bold uppercase text-zinc-700/70 tracking-wider">
                {t("cv.experience.title")}
              </h3>
              <div className="flex flex-col gap-8">
                {experiences.map((experience, i) => (
                  <div key={experience.company} className={i === 0 ? "mt-4" : undefined}>
                    <a
                      href={experience.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="text-md font-semibold border-b border-black w-fit uppercase"
                    >
                      {experience.company}
                    </a>
                    <h4 className="text-sm text-zinc-700/70">
                      {experience.title} | {experience.date}
                    </h4>
                    <ul className="list-disc list-inside text-sm">
                      {experience.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                      <li className="flex flex-wrap gap-4 mt-2">
                        <ul className="list-none flex flex-wrap gap-1 gap-y-1">
                          {experience.tags.map((tag) => (
                            <li
                              key={tag}
                              className="bg-zinc-100/70 px-2 rounded font-bold hover:bg-zinc-200 cursor-pointer"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
