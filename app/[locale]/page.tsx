import Navbar from "@/components/navbar";
import { ArrowUpRightIcon, CalendarCheck2, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LostAndFoundData, NavigationData, UpcomingEventsData } from "@/mockdata";
import { HorizontalCard, VerticalCard } from "@/components/card";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/hero";

export default async function Home() {

  const t = await getTranslations();

  return (
    <main className={cn(
      "flex flex-col items-center",
      "min-w-screen w-full min-h-screen h-auto ",
      "px-0 py-0 gap-4",
      "lg:px-20 lg:gap-10",
      "box-border bg-background text-foreground font-manrope"
    )}>

      {/* ------------------------------------------------------------------------------------------------- */}
      
      {/* HERO SECTION */}
      
      <Hero />
      
      {/* ------------------------------------------------------------------------------------------------- */}
      
      {/* EXTRA INFORMATION SECTION */}

      <div className="w-full h-fit flex flex-col items-start justify-evenly px-3 lg:px-0 gap-4">
        <div className="flex items-center w-full h-2/3 lg:py-6">
          <p className="h-fit w-full text-xl lg:text-3xl leading-snug">
            {t("extra.spotlight")}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-1/3 gap-4 lg:gap-20 text-base lg:text-xl text-start lg:text-justify">
          <div className="w-full h-1/2 lg:h-full">
            <p>{t("extra.text1")}</p>
          </div>
          <div className="w-full h-1/2 lg:h-full">
            <p>{t("extra.text2")}</p>
          </div>
        </div>
      </div>

    {/* ------------------------------------------------------------------------------------------------- */}
     
     {/* UPCOMING EVENTS SECTION */}
     
      <div className="w-full h-auto flex flex-col items-start justify-start px-3 lg:px-0">

        <h1 className="flex items-center h-20 lg:h-32 max-h-32 w-full text-4xl lg:text-5xl">{t("events.upcoming")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 justify-start w-full h-auto gap-10 lg:gap-4">
        {UpcomingEventsData.slice(0, 2).map((e, i) => (

              <VerticalCard
                key={ i }
                link={ `events/${i}` }
                image={ e.images[0] }
              >
                <div className="flex flex-col w-full h-full justify-center text-xs">

                  <h3 className="w-full h-fit text-xl">{e.title}</h3>

                  <div className="flex flex-col w-full h-fit">

                    <p className="">
                      Student Night Market: A gathering place for food, drinks, clothes, accessories, and many other items.
                    </p>

                    <p className="flex items-center w-full gap-2 mt-3">
                      <MapPin strokeWidth={2} className="size-4" />
                      {e.location}
                    </p>

                    <Separator className="my-4 bg-zinc-500" />

                    <div className="flex justify-between w-full h-fit">
                      <p className="w-fit">{e.dateTime.date}</p>
                      <p className="w-fit">{e.dateTime.time}</p>
                    </div>
                  </div>

                </div>
              </VerticalCard> ))}

        </div>
      </div>

      {/*------------------------------------------------------------------------------------------------- */}
      
      {/* PAST EVENT SECTION */}
      
      <div className="relative flex flex-col w-full h-auto px-3 lg:px-0 gap-4">
        <h1 className="text-4xl lg:text-5xl">{t("events.past")}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-auto gap-10">
          { UpcomingEventsData.map((item, i) => (
            <div key={ i } className="flex flex-col w-full h-full">
              <div className="overflow-hidden">

                <div className="z-20 relative h-70 w-full overflow-hidden">
                    <img 
                      src={ item.images[1] } 
                      alt=":3" 
                      className="w-full h-full mx-auto box-border rounded-md object-cover" />
                </div>
                {/* Header band */}
                <div className="flex items-center justify-between py-4" >
                  <span className="text-xl font-medium uppercase tracking-widest">
                    {item.title}
                  </span>
                  <span className="text-xs font-medium px-3 py-0.5 rounded-sm bg-green-100 text-green-700">
                    Completed
                  </span>
                </div>
                {/* Body */}
                <div className="flex flex-col gap-4 text-xs">
                  <p className="leading-relaxed line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus nesciunt ut atque totam, deleniti reprehenderit repellendus incidunt sapiente numquam rem optio nobis, iusto repudiandae quibusdam esse aliquam doloremque non?
                  </p>
                  
                  <Separator />

                  <div className="flex flex-col gap-2.5">
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
          ))

          }

        </div>

      </div>
 
      {/* ------------------------------------------------------------------------------------------------- */}
      
      {/* STUDENT UNION STORE SECTION */}

      <div className="relative flex flex-col justify-center items-center w-full h-auto px-3 lg:px-0 py-10 cursor-pointer">
        <div className="flex w-full h-auto">
          <div className="w-1/3 h-40 lg:h-full rounded-xl">
            <img 
              src="/img/sustore/1.png" 
              alt="Artwork Sketch" 
              className="object-cover w-full h-full" />
          </div>
          <div className="w-1/3 h-40 lg:h-full rounded-xl">
            <img 
              src="/img/sustore/2.png" 
              alt="Artwork Sketch" 
              className="object-cover w-full h-full" />
          </div>
          <div className="w-1/3 h-40 lg:h-full rounded-xl">
            <img 
              src="/img/sustore/3.png" 
              alt="Artwork Sketch" 
              className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------- */}

      {/* LOST AND FOUND  */}

      <div className="flex flex-col w-full h-auto min-h-150 px-3 lg:px-0 gap-4">
          <h1 className="text-4xl lg:5xl">{t("nav.lostFound")}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full py-4 gap-8">
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