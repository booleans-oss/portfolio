import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Zoom from "./zoom";

type ExperienceDate = {
  month: string;
  year: string;
};

export type ExperienceProps = {
  index: number;
  namespace: string;
  name: string;
  stack: string[];
  dates: {
    start: ExperienceDate;
    end: ExperienceDate;
  };
  link?: {
    text: string;
    url: string;
  };
  image: StaticImageData;
  bigImage: boolean;
};

export default function Experience({
  index,
  name,
  namespace,
  stack,
  dates,
  link,
  image,
  bigImage,
}: ExperienceProps) {
  const t = useTranslations();
  return (
    <div className="border-t border-t-black pt-3 grid grid-cols-8 lg:grid-cols-10 grid-auto-rows text-xl gap-2 lg:gap-y-8">
      <div className="col-span-1 col-start-1 row-start-1">
        {index.toString()}
      </div>
      <div className="col-span-5 col-start-2 lg:col-start-5 lg:col-span-4 text-[3vw] md:text-[2.1vw] lg:text-[1.1vw]">
        {stack.map((stackItem) => stackItem).join(", ")}
      </div>
      <div className="col-start-2 row-start-2 lg:row-start-1 col-span-5 lg:col-span-3 text-[5vw] md:text-[3.5vw] lg:text-[2.75vw]">
        {name}
      </div>

      <div className="col-span-4 lg:col-span-2 text-[3vw] md:text-[2.1vw] lg:text-[1.1vw] text-right">
        {t(`experiences.${dates.start.month}`)} {dates.start.year} ..{" "}
        {t(`experiences.${dates.end.month}`)} {dates.end.year}
      </div>
      <div className="col-span-7 col-start-2 lg:col-span-3 lg:col-start-2 text-[3vw]/tight md:text-[2.1vw]/tight lg:text-[1.1vw]/tight leading-[1.3] place-content-between flex flex-col pr-0 lg:pr-5 w-full">
        <p className="text-[3vw] md:text-[2.1vw] lg:text-[1.1vw]">
          {t(`experiences.${namespace}`)}
        </p>
        {link && (
          <a
            href={link.url}
            className={cn("text-[#ff3700]", {
              "mt-3": bigImage,
            })}
          >
            → {link.text}
          </a>
        )}
      </div>
      <Zoom
        className={cn("col-start-1 col-span-10 ", {
          "lg:col-start-5 lg:col-span-6": !bigImage,
          "lg:col-start-1 lg:col-span-10": bigImage,
        })}
      >
        <Image src={image} alt={`${name} image`} />
      </Zoom>
    </div>
  );
}
