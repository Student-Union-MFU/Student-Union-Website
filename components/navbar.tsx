"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getTranslations } from "next-intl/server";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Dropdown, { LanguageOptionInterface } from "./dropdown";

export type LinksType = {
  name: string,
  href: string,
  target: "_blank" | undefined
}

export interface NavbarInterface {
  heading: string
  subHeading: string
  logo: string
  linkItems: LinksType[]
  className?: string
  params?: { locale: string }
}

const labels = {
  EN: "🇺🇸 English",
  TH: "🇹🇭 Thai",
  MM: "🇲🇲 Myanmar"
} as const;
type Locale = "en" | "th" | "mm"

const LanguageData: LanguageOptionInterface[] = [
  {
    label: labels.EN,
    value: "en",
  },
  {
    label: labels.TH,
    value: "th",
  },
]

export default function Navbar({
  heading,
  subHeading,
  logo,
  linkItems,
  className,
}: NavbarInterface) {

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams()
  const queryLang = params.locale

  const [lang, setLang] = useState<Locale>((queryLang as Locale) ?? "en");

  const t = useTranslations();
  const changeLang = (lang: Locale) => {
    setLang(lang)
  }

  const changePage = (lang: Locale) => {
 
    changeLang(lang)

    const newLocale = lang.toLowerCase();
    const newPath = pathname.replace(/^\/(en|th|mm)/, `/${newLocale}`);

    router.push(newPath);
    router.refresh();

  };

  useEffect(() => {
    console.log(lang)
  }, [lang])

  return (

    <nav className={cn(
      "sticky top-0 z-40 flex flex-col items-center justify-center",
      "w-full lg:w-full h-fit mx-auto border-b",
      "bg-background font-Louis",
      "lg:flex-row lg:items-end lg:justify-between lg:h-32 lg:px-16",
      className
    )}>

      <Link
        href={"/"}
        rel="noopener noreferrer"
        className="w-full lg:w-fit"
      >
        <div className={cn(
          "flex items-center lg:items-end justify-start",
          "w-full lg:w-fit h-fit px-2 lg:px-0 py-2 lg:py-4 gap-2",
        )}>

          <img src={logo} alt="Student Union" className="relative lg:-bottom-4 w-14 lg:w-22 scale-120" />

          <div className="flex flex-col justify-center items-center w-fit h-full text-2xl lg:text-4xl">

            <h1>{heading}</h1>

            <span className="-mt-2 text-sm">
              {subHeading}
            </span>

          </div>
        </div>
      </Link>
      <div className="absolute right-0 lg:-right-4 top-6 lg:top-5 flex w-fit h-fit items-center justify-center px-4 gap-4 text-sm lg:text-base">
        <Dropdown
          options={LanguageData}
          value={ lang }
          onChange ={(e) => changePage(e.currentTarget.value as Locale) } />
      </div>

      <div className="flex justify-between w-full lg:w-fit h-fit px-3 lg:px-0 py-2 lg:py-4 text-xs lg:text-xl">
        {
          linkItems.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              target={e.target}
              className={cn(
                "relative h-10 w-fit px-0 lg:px-10 flex items-center justify-evenly ",
                "hover:scale-115 transition-all"
              )}>
              <h2>
                { t(e.name) }
              </h2>
            </Link>
          ))
        }
      </div>

    </nav>
  )
}
