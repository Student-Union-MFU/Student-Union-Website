"use client";

import { VerticalCard, VerticalCardMobile } from "@/components/card";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationData, UpcomingEventsData } from "@/mockdata";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Events() {

    const currentPath = "/events/"

    return (
        <main className="flex flex-col items-center min-w-screen w-full min-h-screen h-auto px-0 lg:px-20 py-0 lg:py-8 lg:gap-4 box-border bg-background text-foreground">
            <Navbar
                heading={NavigationData.heading}
                subHeading={NavigationData.subHeading}
                logo={NavigationData.logo}
                linkItems={NavigationData.linkItems} />

            <section className="h-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-x-2 gap-y-8 px-4 py-4 lg:py-20">
                {
                    !useIsMobile() ? [...UpcomingEventsData, ...UpcomingEventsData, ...UpcomingEventsData].map((e, i) => (


                        <VerticalCard
                            key={i}
                            link={`events/${i}`}
                            image={e.images[0]}
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
                        [...UpcomingEventsData, ...UpcomingEventsData, ...UpcomingEventsData].map((e, i) => (
                            <VerticalCardMobile
                                key={i}
                                link={`events/${i}`}
                                image={e.images[0]}
                                className="flex lg:hidden ">
                                <div className="flex flex-col w-full h-full min-h-fit justify-center">

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
            </section>

        </main>
    )
}