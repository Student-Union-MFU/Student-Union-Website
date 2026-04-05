"use client"

import Navbar from "@/components/navbar";
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo";
import { ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenis } from "@/components/scrollsmoother";
import { Separator } from "@/components/ui/separator";
import { NavigationData, UpcomingEventsData } from "@/mockdata";
import { HorizontalCard, VerticalCard } from "@/components/card";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Footer from "@/components/footer";
import ScrollIndicator from "@/components/scrollindicator";

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
    <main className="flex flex-col items-center min-w-screen w-full min-h-screen h-auto px-0 lg:px-20 py-0 lg:py-8 lg:gap-4 box-border bg-background text-foreground">

      <Navbar 
        heading={ NavigationData.heading } 
        subHeading={ NavigationData.subHeading } 
        logo={ NavigationData.logo } 
        linkItems={ NavigationData.linkItems } />

      <ScrollIndicator 
        progress={0} 
        handleScrollTo={ handleScrollTo } />

      <div className="relative max-h-dvh max-w-dvw w-full h-[85dvh] lg:h-[78dvh] lg:rounded-xl bg-zinc-100 overflow-hidden">

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

      <Separator className="hidden lg:block"/>
      
     <div className="w-full h-fit lg:h-[60dvh] flex flex-col items-start justify-start lg:py-10 px-4 gap-4 lg:gap-14">
        <h1 className="text-4xl lg:text-6xl">Upcoming Events</h1>
        <div className="grid grid-cols-1 lg:grid-cols-1 grid-rows-4 lg:grid-rows-1 w-full h-full gap-4 overflow-hidden">
          {
            UpcomingEventsData.map((e,i) => ( 
              <VerticalCard 
                key={ i } 
                className="relative">
                
                <div className="flex flex-col w-full h-full px-6 py-3 gap-2">
                  <h2 className="text-2xl">{ e.title }</h2>
                  <p className="truncate">{ e.content }</p>
                  <span className="absolute top-4 right-4 text-white">
                    <ArrowUpRight size={ 34 } />
                  </span>
                </div>
              </VerticalCard>
            ))
          }
        </div>
      </div>

      

      <Separator  className="hidden lg:block"/>
      
      <div className="relative flex flex-col w-full h-fit py-10 gap-10">
        <h1 className="text-6xl">Past Events</h1>
        <div className="w-full h-auto">
          {/* <StickyScrollRevealDemo /> */}3
        </div>
      </div>
      
      <Separator className="hidden lg:block" />
      
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

      <Separator className="hidden lg:block" />

      <div className="flex flex-col w-full h-screen py-10 gap-10">
          <h1 className="text-6xl">Lost and Found Items</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 w-full h-full py-4 gap-4">
          {
            [...Array(4)].map((e,i) => (
              <HorizontalCard>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, eos aspernatur, temporibus delectus quas, maxime in consequuntur qui officia aliquid molestiae veritatis facere. Dolore libero aperiam temporibus, non eligendi aspernatur?</p>
              </HorizontalCard>
            ))
          }
          </div>
      </div>
      
      <Footer />

    </main> 
    )
}