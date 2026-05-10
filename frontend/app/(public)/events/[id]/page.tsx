"use client";

import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { NavigationData, picturesData, UpcomingEventsData } from "@/mockdata";
import { ArrowLeft, Tag, Calendar, Clock, MapPin, Users, CalendarCheck2 } from "lucide-react";
import { useState } from "react";


const item = UpcomingEventsData[0];

export default function EventItemPage() {

    const [currentPicture, setCurrentPicture] = useState(picturesData[0]);

    return (
        <main className="flex flex-col items-center min-w-screen w-full h-auto px-0 lg:px-20 py-0 lg:py-8 lg:gap-4 box-border bg-background text-foreground">
            <Navbar
                heading={NavigationData.heading}
                subHeading={NavigationData.subHeading}
                logo={NavigationData.logo}
                linkItems={NavigationData.linkItems} />

            <section className="flex flex-col lg:flex-row items-center justify-center h-auto lg:h-220 w-full gap-4">

                <div className="flex flex-col h-1/2 lg:h-180 w-full lg:w-1/2 gap-4">

                    <div className="w-auto h-full max-h-120">
                        <img src={ currentPicture } alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-auto h-full max-h-60 grid grid-cols-3 gap-4">
                    { picturesData.slice(0,picturesData.length - 1 ).map((e,i) => (

                            <img 
                                key={ i } 
                                src={ e } 
                                alt=""
                                onClick={ () => setCurrentPicture(picturesData[ i ])}
                                className={cn(
                                    "w-full h-full object-cover",
                                    "cursor-pointer hover:scale-101 transition"
                                )} />

                        ))
                    }
                    </div>

                </div>
                <div className="flex flex-col h-1/2 lg:h-180 w-full lg:w-1/2">
                    <div className="w-full h-full p-4">
                        <div className="flex flex-col w-full h-full">
                            <div className="h-full overflow-hidden">

                                {/* Header band */}
                                <div className="flex flex-col items-start justify-between gap-2 lg:px-6 py-3 " >
                                    <span className="text-2xl font-medium uppercase tracking-widest">
                                        {item.title}
                                    </span>
                                    <span className="self-end text-xs font-medium px-3 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                                        Completed
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="h-10/12 lg:p-6 flex flex-col gap-5">
                                    <p className="text-base leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, corporis similique! Impedit dolores perferendis saepe veniam libero cupiditate eaque, dolorum vel aspernatur. Nobis distinctio ducimus natus odit! Expedita nobis dignissimos veniam, molestias nihil totam qui nisi assumenda et. Perferendis id nobis ab neque molestias itaque asperiores quod quia, explicabo doloribus? Id repellat ut excepturi quidem aliquam mollitia, molestias dolorum! Dolores provident eos quas vel ea sapiente, tenetur dicta aspernatur sit necessitatibus nam, ab cupiditate reiciendis quis tempore minus, quibusdam corporis eveniet aut doloremque maxime debitis! Quam fugiat expedita quibusdam cumque assumenda atque, pariatur deleniti, quod ab consequatur, odit minima praesentium.
                                    </p>
                                    <p className="text-base leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum officia, exercitationem praesentium laboriosam, eligendi voluptates modi ab provident quod, ut magni! Illum voluptatibus eos nostrum totam odit obcaecati quasi quibusdam tenetur, tempore placeat asperiores. Quas maiores velit ut et!
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim repudiandae molestiae, doloremque necessitatibus excepturi ea commodi, ipsa sunt accusamus laborum deleniti! Quos ullam corporis quibusdam omnis libero explicabo corrupti et sequi asperiores. Ut rem officia ullam suscipit saepe? Iure est nemo quae commodi cupiditate officia id illum alias magni, non eaque numquam ipsum dolor voluptates. Omnis nobis quaerat dolore?
                                    </p>


                                    <Separator className="mt-auto" />

                                    <div className="flex flex-col gap-2.5 text-base pb-10 lg:pb-0">
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
                    </div>
                </div>

            </section>

        </main>
    )
}