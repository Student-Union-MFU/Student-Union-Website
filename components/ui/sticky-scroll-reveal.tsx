"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Divider from "../divider";
import { Separator } from "./separator";
import { CalendarCheck2, Clock, MapPin } from "lucide-react";
import { BaseDataInterface, UpcomingEventDataInterface } from "@/mockdata";
import { Button } from "./button";

export const StickyScroll = ({
  content,
  contentClassName,
}: {

  content: UpcomingEventDataInterface[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#ffffff"
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      // className="relative flex min-h-120 h-full justify-center space-x-10 overflow-y-hidden rounded-md p-10"
      className="relative flex justify-start space-x-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 w-1/2 h-full">
        <div className="max-w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="h-100 my-20">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl max-w-full text-zinc-900"
              >
                {/* {item.description} */}
                <div className="flex flex-col w-full h-full">
                  <div className="overflow-hidden">

                    {/* Header band */}
                    <div className="flex items-center justify-between px-6 py-3 " >
                      <span className="text-2xl font-medium uppercase tracking-widest">
                        { item.title }
                      </span>
                      <span className="text-xs font-medium px-3 py-0.5 rounded-full bg-green-100 text-green-700">
                        Upcoming
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col gap-5">
                      <p className="text-base leading-relaxed line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus nesciunt ut atque totam, deleniti reprehenderit repellendus incidunt sapiente numquam rem optio nobis, iusto repudiandae quibusdam esse aliquam doloremque non?
                      </p>

                      <Button variant="link" className=" self-end w-fit p-0 h-auto text-sm">
                        Read more
                      </Button>

                      <Separator />

                      <div className="flex flex-col gap-2.5 text-base">
                        <p className="flex items-center gap-2.5 ">
                          <MapPin className="size-4 shrink-0 text-muted-foreground" />
                          {item.location}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="flex items-center gap-2.5">
                            <CalendarCheck2 className="size-4 shrink-0 text-muted-foreground" />
                            {item.dateTime.date}
                          </p>
                          <p className="flex items-center gap-2 ">
                            <Clock className="size-4 shrink-0" />
                            {item.dateTime.time}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-1/3 hidden h-60 w-80 lg:h-120 lg:w-1/2 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].images[1] ?
          <div className="flex flex-col h-full w-full items-center justify-center">
            <img src={content[activeCard].images[1]} alt="img" className="w-full h-full object-cover" />
          </div>
          :
          null
        }
        
      </div>
    </motion.div>
  );
};
