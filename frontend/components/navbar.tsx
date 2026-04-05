"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";

export type LinksType = {
  name: string,
  href: string,
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
    return (
        <nav className={cn(
            "sticky top-0 z-10 flex flex-col items-center justify-center",
            "w-full h-fit border-b",
            "bg-background font-Louis",
            "lg:flex-row lg:items-end lg:justify-between lg:h-32",
            className   
          )}>

          <div className={cn(
            "flex items-center lg:items-end",
            "w-fit h-fit py-2 lg:py-4 gap-2",
          )}>
            
            <img src={ logo } alt="Student Union" className="relative lg:-bottom-3 w-14 lg:w-22 scale-150" />
            
            <p className="flex flex-col justify-center items-center w-fit h-full text-2xl lg:text-4xl">

              { heading }
              
              <span className="-mt-2 text-sm">
                { subHeading }
              </span>
            
            </p>
          </div>

          <div className="grid grid-cols-4 w-full lg:w-4/12 h-fit py-2 lg:py-4 text-base lg:text-xl border-red-400">
          {
            linkItems.map((e,i) => (
              <Link 
                key={ i } 
                href={ e.href } 
                className={cn(
                  "w-full h-10 flex items-center justify-evenly ",
                  "border-zinc-900 ",
                  "hover:border hover:border-b-6 hover:border-r-6 hover:-translate-y-2 active:scale-95 transition-all"
                )}>

                { e.name }

              </Link>
            ))
          }
          </div>

        </nav> 
    )
}