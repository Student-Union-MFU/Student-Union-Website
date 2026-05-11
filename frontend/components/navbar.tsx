"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export type LinksType = {
  name: string,
  href: string,
  target: "_blank" | undefined
}

export interface NavbarInterface {
  heading: string;
  subHeading: string;
  logo: string;
  linkItems: LinksType[];
  className?: string;
}

export default function Navbar({
  heading,
  subHeading,
  logo,
  linkItems,
  className
}:NavbarInterface) {

    const labels = { EN: "🇺🇸 English", TH: "🇹🇭 Thai", MM: "🇲🇲 Myanmar" };

    const [lang, setLang] = useState<"EN" | "TH" | "MM">("EN");
    useEffect(() => {
        changeLang(lang);
    },[lang])

    const {t,i18n} = useTranslation();
    const changeLang = (lang: "EN" | "TH" | "MM") => {
        setLang(lang);
        i18n.changeLanguage(lang.toLocaleLowerCase());
    }

    return (
      
        <nav className={cn(
            "sticky top-0 z-40 flex flex-col items-center justify-center",
            "w-full h-fit border-b",
            "bg-background font-Louis",
            "lg:flex-row lg:items-end lg:justify-between lg:h-32",
            className   
          )}>
          
          <Link 
            href={ "/" }
            rel="noopener noreferrer"
            className="w-full lg:w-fit"
          >
            <div className={cn(
              "flex items-center lg:items-end justify-start",
              "w-full lg:w-fit h-fit py-2 lg:py-4 gap-2",
            )}>
              
              <img src={ logo } alt="Student Union" className="relative lg:-bottom-3 w-14 lg:w-22 scale-130" />
              
              <div className="flex flex-col justify-center items-center w-fit h-full text-2xl lg:text-4xl">

                { heading }
                
                <span className="-mt-2 text-sm">
                  { subHeading }
                </span>

              <div className="absolute right-0 lg:-right-4 top-6 lg:top-5 flex w-fit h-fit items-center justify-center px-4 gap-4 text-base">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span className="w-24 flex items-end justify-between gap-2 px-2">{labels[lang]}</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom">
                    <DropdownMenuItem onClick={ () => changeLang("EN") }>{labels.EN}</DropdownMenuItem>
                    <DropdownMenuItem onClick={ () => changeLang("TH") }>{labels.TH}</DropdownMenuItem>
                    {/* <DropdownMenuItem onClick={ () => changeLang("MM") }>{labels.MM}</DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>
            </div>
            </div>
          </Link>

          <div className="grid grid-cols-4 w-full lg:w-5/12 h-fit py-2 lg:py-4 text-base lg:text-xl">
          {
            linkItems.map((e,i) => (
              <Link 
                key={ i } 
                href={ e.href } 
                target={ e.target }
                className={cn(
                  "relative w-full h-10 flex items-center justify-evenly ",
                  "border-zinc-900 ",
                  "hover:border hover:border-b-6 hover:border-r-6 hover:-translate-y-2 active:scale-95 transition-all"
                )}>

                { t(e.name) }

              </Link>
            ))
          }
          </div>

        </nav> 
    )
}
