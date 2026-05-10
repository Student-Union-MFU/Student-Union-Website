"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
  
    const t = useTranslations("nav");
    
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
          >
            <div className={cn(
              "flex items-center lg:items-end",
              "w-fit h-fit py-2 lg:py-4 gap-2",
            )}>
              
              <img src={ logo } alt="Student Union" className="relative lg:-bottom-3 w-14 lg:w-22 scale-130" />
              
              <p className="flex flex-col justify-center items-center w-fit h-full text-2xl lg:text-4xl">

                { heading }
                
                <span className="-mt-2 text-sm">
                  { subHeading }
                </span>
              
              </p>
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

                { e.name }
                { e.target == '_blank' && <ArrowUpRight className="absolute top-0 right-3 size-4 " />}

              </Link>
            ))
          }
          </div>

        </nav> 
    )
}