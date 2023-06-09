import { Switch } from "./ui/switch";
import ExternalArrow from "../icones/ExternalArrow";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function ExperiencesComponent() {
  const { t } = useTranslation();

  const experiences = useMemo(
    () => [
      {
        technical: true,
        link: "https://www.responsible.us/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-[#57f221] transition">
            {t("index.experience.experiences.0.title")} · RESPONSIBLE{" "}
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2022 - present",
        achievements: t("index.experience.experiences.0.tasks", {
          returnObjects: true,
        }) as Array<string>,
        tags: (
          t("index.experience.experiences.0.tags", {
            returnObjects: true,
          }) as Array<string>
        ).map((tag) => (
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-[rgba(87,_242,_33,_0.10)] px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#57f221]">
            {tag}
          </li>
        )),
      },
      {
        technical: true,
        link: "https://www.standforua.org/",
        title: (
          <h2 className="text-blue-100/90 font-medium">
            <span className="text-blue-100/90 group-hover:text-[#FFD700] transition">
            {t("index.experience.experiences.1.title")} ·{" "}
            </span>
            <span className="text-blue-100/90 group-hover:text-[#007aff]">
              StandForUA
            </span>
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition text-blue-100/90 group-hover:text-[#007aff]" />
          </h2>
        ),
        date: "2022 - present",
        achievements: t("index.experience.experiences.1.tasks", {
          returnObjects: true,
        }) as Array<string>,
        tags: (
          t("index.experience.experiences.1.tags", {
            returnObjects: true,
          }) as Array<string>
        ).map((tag, i) => (
          <li
            className={cn(
              "flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-[#FFD700]",
              i <= 3
                ? "group-hover:text-[#FFD700] group-hover:bg-yellow-400/10"
                : "group-hover:text-[#007aff] group-hover:bg-blue-500/10"
            )}
          >
            {tag}
          </li>
        )),
      },
      {
        technical: false,
        link: "https://www.instagram.com/inswear_bdx/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-slate-500 transition">
            {t("index.experience.experiences.2.title")} · INS'WEAR{" "}
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2022 - present",
        achievements: t("index.experience.experiences.2.tasks", {
          returnObjects: true,
        }) as Array<string>,
        tags: (
          t("index.experience.experiences.2.tags", {
            returnObjects: true,
          }) as Array<string>
        ).map((tag) => (
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-slate-500/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-slate-500">
            {tag}
          </li>
        )),
      },
      {
        technical: true,
        link: "https://github.com/development-community",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-cyan-500">
            {t("index.experience.experiences.3.title")} · Development Community
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2020 - present",
        achievements: t("index.experience.experiences.3.tasks", {
          returnObjects: true,
        }) as Array<string>,
        tags: (
          t("index.experience.experiences.3.tags", {
            returnObjects: true,
          }) as Array<string>
        ).map((tag) => (
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-cyan-500">
            {tag}
          </li>
        )),
      },
      {
        technical: false,
        link: "https://pvh.com/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-white group-hover:bg-black w-fit px-0 xl:group-hover:px-8">
            {t("index.experience.experiences.4.title")} · PVH Corp.{" "}
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2020 - present",
        achievements: t("index.experience.experiences.4.tasks", {
          returnObjects: true,
        }) as Array<string>,
        tags: (
          t("index.experience.experiences.4.tags", {
            returnObjects: true,
          }) as Array<string>
        ).map((tag) => (
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-black px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-white">
            {tag}
          </li>
        )),
      },
      {
        technical: false,
        link: "https://www.policyinitiatives.org/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-yellow-500 w-fit">
            {t("index.experience.experiences.5.title")} · The Policy Initiatives Institute.
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2020 - present",
        achievements: t("index.experience.experiences.5.tasks", {
          returnObjects: true,
        }) as Array<string>,
        tags: (
          t("index.experience.experiences.5.tags", {
            returnObjects: true,
          }) as Array<string>
        ).map((tag) => (
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-yellow-600/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-yellow-500">
            {tag}
          </li>
        )),
      },
      {
        technical: true,
        link: "https://aysdiscord.com/",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-blue-500">
            {t("index.experience.experiences.6.title")} · Advertise Your Server
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2021-2022",
        achievements: t("index.experience.experiences.6.tasks", {
          returnObjects: true,
        }) as Array<string>,
        tags: (
          t("index.experience.experiences.6.tags", {
            returnObjects: true,
          }) as Array<string>
        ).map((tag) => (
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-500">
            {tag}
          </li>
        )),
      },
      {
        technical: false,
        link: "https://www.un.org/en/mun",
        title: (
          <h2 className="text-blue-100/90 font-medium group-hover:text-blue-400 w-fit">
            {t("index.experience.experiences.7.title")} · Model United Nations.
            <ExternalArrow className="inline h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </h2>
        ),
        date: "2020 - present",
        achievements: t("index.experience.experiences.7.tasks", {
          returnObjects: true,
        }) as Array<string>,
        tags: (
          t("index.experience.experiences.7.tags", {
            returnObjects: true,
          }) as Array<string>
        ).map((tag) => (
          <li className="flex items-center rounded-full bg-blue-500/20 xl:bg-slate-700/10 group-hover:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 transition ease-in-out text-blue-100/50 xl:text-blue-100/40 group-hover:text-blue-400">
            {tag}
          </li>
        )),
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
        <label htmlFor="non-tech-switch">
          {t("index.experience.showAllButton")}
        </label>
      </div>
      <div>
        {experiences.map((experience, id) => (
          <a
            key={id}
            href={experience.link}
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
