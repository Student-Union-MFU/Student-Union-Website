"use client"

import Navbar from "@/components/navbar";
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo";
import { ArrowUpRight, ArrowUpRightIcon, MapPin, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenis } from "@/components/scrollsmoother";
import { Separator } from "@/components/ui/separator";
import { NavigationData, UpcomingEventsData } from "@/mockdata";
import PropertyCard, { HorizontalCard, VerticalCard, VerticalCardMobile } from "@/components/card";
import { useMotionValueEvent, useScroll } from "motion/react";
import React, { useState } from "react";
import ScrollIndicator from "@/components/scrollindicator";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {

  const lenis = useLenis();

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
      "px-0 py-0",
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

        <img src="/img/image.png" alt="img" className="absolute w-full h-full object-cover brightness-80 blur-[2px]" />;
      
        <div className="w-5/6 lg:w-fit absolute right-4 lg:left-14 bottom-14 flex flex-col items-end lg:items-start justify-center text-white font-bold">
          <h1 className="text-5xl lg:text-9xl">
            Student Union
          </h1>
          <h2 className="text-2xl lg:text-4xl">Mae Fah Luang University</h2>
          <p className="py-4 lg:py-0 text-sm lg:text-xl wrap-break-word text-end lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum veritatis inventore hic earum?
          </p>
        </div>
      
      </div>

      {/* ------------------------------------------------------------------------------------------------- */}
      
      {/* EXTRA INFORMATION SECTION */}

      <div className="w-full h-screen flex flex-col items-start justify-center px-4 lg:px-0">
        <div className="flex items-center w-full h-2/3 py-6">
          <p className="h-fit w-full text-3xl lg:text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, consequuntur officiis iure assumenda enim explicabo. Explicabo officiis exercitationem, assumenda alias consectetur quasi ea ad itaque sit incidunt distinctio tempora nulla ullam, similique eaque aliquam excepturi!</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-end w-full h-1/3 gap-4 text-xl">
          <div className="w-full lg:w-1/4 h-1/2 lg:h-full">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente non maxime quaerat beatae ad officia cum labore nisi illum voluptatem?</p>
          </div>
          <div className="w-full lg:w-1/4 h-1/2 lg:h-full">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente non maxime quaerat beatae ad officia cum labore nisi illum voluptatem?</p>
          </div>
        </div>
      </div>

    {/* ------------------------------------------------------------------------------------------------- */}
     
     {/* UPCOMING EVENTS SECTION */}
     
      <div className="w-full h-auto flex flex-col items-start justify-start px-3">

        <h1 className="flex items-center h-20 lg:h-32 max-h-32 w-full text-4xl lg:text-6xl">Upcoming Events</h1>

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
        <h1 className="text-4xl lg:text-6xl">Past Events</h1>
        
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

      <div className="flex flex-col lg:flex-row w-full h-screen lg:h-[60dvh] px-4 lg:px-0 py-10">
          <div className="w-full lg:w-1/2 h-full rounded-xl">
            <img src="/img/artwork_1.png" alt="Artwork Sketch" className="w-full h-full object-scale-down" />
          </div>
          <div className="flex flex-col justify-center w-full lg:w-1/2 h-full lg:px-16 gap-10">
            <h1 className="text-4xl lg:text-6xl">
              Student Union Store
            </h1>
            <p className="text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia impedit vitae. Ducimus officiis explicabo totam assumenda, culpa quibusdam repellendus!
            </p>
            <div className="flex justify-end w-full h-fit text-2xl">
              <Button variant={"outline"} size={"lg"} className={"rounded-full px-4!"}>
                Check Out
                <ArrowUpRightIcon data-icon="inline-start" />
              </Button>
            </div>
          </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------- */}

      {/* LOST AND FOUND  */}

      <div className="flex flex-col w-full h-auto min-h-150 p-4 lg:py-10 gap-4 lg:gap-10">
          <h1 className="text-4xl lg:text-6xl">Lost and Found Items</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 w-full h-full py-4 gap-8 lg:gap-4">
          {
            [...Array(2)].map((e,i) => (
              <HorizontalCard key={i}>
                <p className="line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde quod perferendis earum quidem saepe corporis enim suscipit deleniti doloremque.
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