"use client";

import { cn } from "@/lib/utils"
import { ArrowUpRight, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { useContrastText } from "@/hooks/use-contrast"
import { useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton"

export interface CardInterface {
    image?: string,
    className?: string,
    children?: React.ReactNode,
    link?: string,
    onClick?: () => void
}

export interface VerticalCardInterface extends CardInterface {}

export function VerticalCard({
    image = "/img/MockPoster.png",
    className,
    children,
    link = "#",
    onClick
}:VerticalCardInterface) {
    return (
        <Link href={ link } onClick={ onClick }>
            <div className={cn(
                    "flex flex-col justify-end",
                    "w-full max-w-74 h-134 max-h-134",
                    "cursor-pointer",
                    "hover:scale-101 active:scale-100 transition-all",
                    "overflow-hidden p-2 gap-6",
                    className
                )} >
                
                <div className="z-20 absolute lg:relative bottom-0 left-0 block h-10/12 w-full overflow-hidden">
                    <img src={ image } alt=":3" className="w-full h-full mx-auto box-border rounded-md" />
                </div>
                
                <div className="z-30 w-full h-2/12 px-1">
                    
                    { children }

                </div>
            
            </div>
        </Link>
    )
}

export function VerticalCardMobile({
    image = "/img/MockPoster.png",
    className,
    children,
    link = "#",
    onClick
}:VerticalCardInterface) {

    return (

        <Link href={link} onClick={onClick}>
            <div className={cn(
                "relative",
                "flex flex-col justify-end",
                "w-full max-w-md h-170",
                "overflow-hidden rounded-sm",
                className
            )} >
                <div className="w-full overflow-hidden shadow-2xl">

                    <div className="relative h-auto">

                        <div className="w-full h-8/12"> 
                            <img
                                src={ image }
                                alt="The Hill Guest House"
                                className="w-full h-full object-cover rounded-lg" />

                        </div>
                        <div className="w-full h-4/12 py-4">
                            { children }
                        </div>
                       

                    </div>

                </div>

            </div>
        </Link>
    )
}

export interface HorizontalCardInterface extends CardInterface {
    title?: string,
    subTitle?: string,
    timestamp?: string,
}

export function HorizontalCard({
    title = "Car with Headphone",
    subTitle = "C5 204",
    timestamp = "22 Jun 2026",
    image = "/img/mockcar2.jpg",
    children,
    className,
    link = "#"
}:HorizontalCardInterface) {

    return (
        <Link href={ link }>
            <div className={cn(
                "w-full h-full flex flex-col lg:flex-row rounded-xl overflow-hidden cursor-pointer",
                "hover:border-zinc-400 hover:scale-101 transition-all",
                "lg:max-h-60 lg:gap-4",
                className
            )}>
    
                <div className="
                    flex items-center justify-center
                    w-full lg:w-4/12 max-w-150 h-7/12 lg:h-full max-h-50 lg:max-h-87 lg:max-w-100
                ">
                    <img src={ image } alt={ title } className="w-full h-full border border-zinc-400 rounded-2xl box-border object-cover"/>
                </div>

                <div className="relative w-full lg:w-8/12 h-5/12 lg:h-full flex flex-col justify-start p-4 gap-0 bg-background">
    
                    <h1 className="text-xl lg:text-3xl">{ title }</h1>
    
                    <div className="py-2 text-lg">{ children }</div>

                    <Separator className={"my-2"} />

                    <h2 className="flex items-center py-1 gap-2 text-sm lg:text-lg">
                        <MapPin className="size-5" />
                        { subTitle }
                    </h2>

                    <h2 className="flex items-center py-1 gap-2 text-sm lg:text-lg">
                        <Clock className="size-5" />
                        { timestamp }
                    </h2>

                    <span className="absolute right-4 bottom-4 text-sm font-semibold text-zinc-50 rounded-full px-3 py-1 bg-red-500">
                        Uncollected
                    </span>
    
                </div>
    

            </div>
        </Link>
    )
}

export default function PropertyCard() {
  return (
    <div className="flex lg:hidden items-start justify-center min-h-screen bg-gray-100 p-8">
      {/* Card */}
      <div className="w-72 rounded-2xl overflow-hidden shadow-2xl font-serif">

        {/* Image + gradient overlay section */}
        <div className="relative h-72">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
            alt="The Hill Guest House"
            className="w-full h-full object-cover"
          />

          {/* ① Gradient overlay — fades image into the panel below */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-green-950/50 to-green-950/95" />

          {/* Text sitting on top of gradient */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-0 text-white">
            <h2 className="text-xl font-bold tracking-tight">The Hill Guest House</h2>
            <p className="text-xs opacity-80 mt-1 mb-3">📍 58 Hullbrook Road, Billesley</p>

            <div className="flex gap-4 text-xs opacity-85 pb-3 border-b border-white/20">
              <span>🛏 Bed: 2</span>
              <span>🛁 Baths: 1</span>
              <span>📐 1150 sqft</span>
            </div>
          </div>
        </div>

        {/* ② Bottom bar — backdrop blur + semi-transparent bg */}
        {/*    backdrop-blur-md = blur(12px), bg-green-950/90 = rgba dark green at 90% opacity */}
        <div className="backdrop-blur-md bg-green-950/90 px-5 py-4 flex gap-3 items-center">
          {/* Price pill */}
          <div className="bg-white/15 rounded-full px-4 py-2 text-white font-bold text-base whitespace-nowrap">
            $620
          </div>

          {/* CTA button */}
          <button className="flex-1 bg-white text-green-950 font-semibold rounded-full py-2 text-sm hover:bg-green-50 transition-colors cursor-pointer">
            Reserve Now
          </button>
        </div>

      </div>
    </div>
  );
}

/*
  KEY TAILWIND CLASSES EXPLAINED:
  ─────────────────────────────────────────────────
  overflow-hidden        → clips blur/gradient to card's rounded corners
  rounded-2xl            → 16px border radius on the card

  bg-gradient-to-b       → gradient direction: top → bottom
  from-transparent       → starts fully transparent (shows image)
  via-green-950/50       → midpoint: dark green at 50% opacity
  to-green-950/95        → end: dark green at 95% opacity (matches bar)

  backdrop-blur-md       → blur(12px) on whatever is behind this element
  bg-green-950/90        → same dark green at 90% opacity (the glass pane)
  bg-white/15            → white at 15% opacity for the price pill

  The secret: gradient color (green-950) == bar color (green-950)
  This makes them look like one continuous surface.
*/