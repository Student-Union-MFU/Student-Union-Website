"use client"

import Navbar from "@/components/navbar";
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo";
import { ArrowUpRight, ArrowUpRightIcon, MapPin, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenis } from "@/components/scrollsmoother";
import { Separator } from "@/components/ui/separator";
import { LostAndFoundData, NavigationData, UpcomingEventsData } from "@/mockdata";
import PropertyCard, { HorizontalCard, VerticalCard, VerticalCardMobile } from "@/components/card";
import { useMotionValueEvent, useScroll } from "motion/react";
import React, { useState } from "react";
import ScrollIndicator from "@/components/scrollindicator";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";

export default function Home() {

  const lenis = useLenis();
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change" ,(value) => {
    setProgress(value);
  })

  const handleScrollTo = (section:number) => {
    if(!lenis) { return };
    lenis.scrollTo(section * window.document.body.scrollHeight, {
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3), 
    });
  }
  
  return (
    <main className={cn(
      "flex flex-col items-center",
      "min-w-screen w-full min-h-screen h-auto ",
      "px-0 py-0 gap-10",
      "lg:px-20 lg:py-8 lg:gap-4",
      "box-border bg-background text-foreground"
    )}>

      <Navbar 
        heading={ NavigationData.heading } 
        subHeading={ NavigationData.subHeading } 
        logo={ NavigationData.logo } 
        linkItems={ NavigationData.linkItems } />

      <ScrollIndicator 
        progress={ progress } 
        handleScrollTo={ handleScrollTo } />

      <div className="relative max-h-dvh max-w-dvw w-full h-[85dvh] lg:h-[78dvh] lg:rounded-xl bg-zinc-100 overflow-hidden">

      {/* ------------------------------------------------------------------------------------------------- */}
      
        {/* HERO SECTION */}

        <img src="/img/image.png" alt="img" className="absolute w-full h-full object-cover brightness-80 blur-[3px]" />;
      
        <div className="w-5/6 lg:w-fit h-fit absolute right-4 lg:left-14 bottom-14 flex flex-col items-end lg:items-start justify-center text-white">
          <h1 className="text-5xl lg:text-9xl">
            Student Union
          </h1>
          <h2 className="text-2xl lg:text-4xl">Mae Fah Luang University</h2>
          <p className="w-250 py-4 lg:py-0 text-sm lg:text-xl wrap-break-word text-end lg:text-start">
            {t("hero.text")}
          </p>
        </div>
      
      </div>

      {/* ------------------------------------------------------------------------------------------------- */}
      
      {/* EXTRA INFORMATION SECTION */}

      <div className="w-full h-auto lg:min-h-[70dvh] flex flex-col items-start justify-evenly px-4 lg:px-0">
        <div className="flex items-center w-full h-2/3 py-6">
          <p className="h-fit w-full text-2xl lg:text-5xl leading-snug">
            {t("extra.spotlight")}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-end w-full h-1/3 gap-10 lg:gap-20 text-base lg:text-xl text-justify">
          <div className="w-full lg:w-1/3 h-1/2 lg:h-full">
            <p>{t("extra.text1")}</p>
          </div>
          <div className="w-full lg:w-1/3 h-1/2 lg:h-full">
            <p>{t("extra.text2")}</p>
          </div>
        </div>
      </div>

    {/* ------------------------------------------------------------------------------------------------- */}
     
     {/* UPCOMING EVENTS SECTION */}
     
      <div className="w-full h-auto flex flex-col items-start justify-start px-3">

        <h1 className="flex items-center h-20 lg:h-32 max-h-32 w-full text-4xl lg:text-5xl">{t("events.upcoming")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 justify-start w-full h-auto px-2 gap-10 lg:gap-4">
          {
            !useIsMobile() ? UpcomingEventsData.slice(0, 3).map((e, i) => (


              <VerticalCard
                key={ i }
                link={ `events/${i}` }
                image={ e.images[0] }
                className="relative overflow-hidden hidden lg:flex">

                <div className="flex flex-col w-full h-full justify-end gap-3 ">

                  <h2 className="w-full text-2xl">{e.title}</h2>
                  <div className="flex flex-col w-full h-fit">
                    <p className="text-sm font-extrabold">{e.dateTime.date}</p>
                    <p className="w-full ">{e.location}</p>
                  </div>


                </div>

              </VerticalCard>
            ))

              :
            UpcomingEventsData.slice(1,3).map((e,i) => (
              <VerticalCardMobile
                key={ i }
                image={ e.images[0] }
                className="flex lg:hidden ">
                <div className="flex flex-col w-full h-full justify-center">

                  <h2 className="w-full h-fit text-2xl">{e.title}</h2>

                  <div className="flex flex-col w-full h-fit">

                    <p className="text-sm font-semibold">
                      Student Night Market: A gathering place for food, drinks, clothes, accessories, and many other items.
                    </p>

                    <p className="flex items-center w-full gap-2 text-sm mt-3">
                      <MapPin strokeWidth={2} className="size-4" />
                      {e.location}
                    </p>

                    <Separator className="my-4 bg-zinc-500" />

                    <div className="flex justify-between w-full h-fit text-sm font-semibold">
                      <p className="w-fit">{e.dateTime.date}</p>
                      <p className="w-fit">{e.dateTime.time}</p>
                    </div>
                  </div>

                </div>
              </VerticalCardMobile>

            ))

          }

        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------- */}
      
      {/* PAST EVENT SECTION */}
      
      <div className="relative flex flex-col w-full h-auto p-4 py-8 lg:py-10 gap-4 lg:gap-10">
        <h1 className="text-4xl lg:text-5xl">{t("events.past")}</h1>
        
        <div className="hidden lg:block w-full h-auto">
          <StickyScrollRevealDemo />
        </div>

        <div className="relative flex lg:hidden flex-col w-full h-auto gap-10">
          {
            UpcomingEventsData.slice(0,1).map((e, i) => (
              <VerticalCardMobile
                key={i}
                image={e.images[0]}
                className="flex lg:hidden ">
                <div className="flex flex-col w-full h-full justify-center">

                  <h2 className="w-full h-fit text-2xl">{e.title}</h2>

                  <div className="flex flex-col w-full h-fit">

                    <p className="text-sm font-semibold">
                      Student Night Market: A gathering place for food, drinks, clothes, accessories, and many other items.
                    </p>

                    <p className="flex items-center w-full gap-2 text-sm mt-3">
                      <MapPin strokeWidth={2} className="size-4" />
                      {e.location}
                    </p>

                    <Separator className="my-4 bg-zinc-500" />

                    <div className="flex justify-between w-full h-fit text-sm font-semibold">
                      <p className="w-fit">{e.dateTime.date}</p>
                      <p className="w-fit">{e.dateTime.time}</p>
                    </div>
                  </div>

                </div>
              </VerticalCardMobile>
            ))
          }
        </div>
      </div>
 
      {/* ------------------------------------------------------------------------------------------------- */}
      
      {/* STUDENT UNION STORE SECTION */}

      <div className="flex flex-col lg:flex-row justify-evenly items-center w-full h-auto px-4 lg:px-0 lg:border rounded-sm lg:py-5 ">
          <div className="w-full lg:w-1/4 h-80 rounded-xl">
            <img src="/img/artwork_1.png" alt="Artwork Sketch" className="w-full h-full object-scale-down" />
          </div>
          {/* <Separator orientation="vertical" className="bg-zinc-400" /> */}
          <div className="flex flex-col justify-center w-full lg:w-2/4 h-full lg:px-16 gap-10 ">
            <span className="-mb-3 text-xs uppercase tracking-widest w-auto">Student Union</span>
            <h1 className="text-4xl lg:text-5xl">
              {t("su_store.su")}
            </h1>
            <p className="text-lg lg:text-xl">
              {t("su_store.text")}
            </p>
            <div className="flex justify-end w-full h-fit text-2xl">
              <Button variant={"outline"} size={"lg"} className={"rounded-full px-4!"}>
               {t("su_store.check")} 
                <ArrowUpRightIcon data-icon="inline-start" />
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/4 h-80 rounded-xl hidden lg:block ">
            <img src="/img/artwork_1.png" alt="Artwork Sketch" className="w-full h-full object-scale-down" />
          </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------- */}

      {/* LOST AND FOUND  */}

      <div className="flex flex-col w-full h-auto min-h-150 p-4 lg:py-10 gap-4 lg:gap-10">
          <h1 className="text-4xl lg:5xl">{t("nav.lostFound")}</h1>
          <div className="grid grid-rows-2 w-full h-full py-4 gap-8 lg:gap-10">
          {
            LostAndFoundData.slice(0,2).map((e,i) => (
              <HorizontalCard 
                key={i}
                title={ e.title }
                subTitle="C5 402"
                timestamp={ e.dateTime.date }
                image={ e.images[0] }
              >
                <p className="line-clamp-2">
                  { e.content }
                </p>
              </HorizontalCard>
            ))
          }
          </div>
      </div>
      
      {/* ------------------------------------------------------------------------------------------------- */}
    
    </main> 
    )
}