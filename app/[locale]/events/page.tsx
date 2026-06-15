import { Separator } from "@/components/ui/separator";
import { UpcomingEventsData } from "@/mockdata";
import { CalendarCheck2, Clock, MapPin } from "lucide-react";

export default function Events() {

    const currentPath = "/events/"

    return (
        <main className="flex flex-col items-center min-w-screen w-full min-h-screen h-auto box-border bg-background text-foreground px-3 lg:px-20 py-6 mb-10">

            <section className="h-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-y-10 ">
                {
                    [...UpcomingEventsData, ...UpcomingEventsData, ...UpcomingEventsData].map((item, i) => (
                        <div key={i} className="flex flex-col w-full h-full">
                            <div className="overflow-hidden">

                                <div className="z-20 relative h-50 lg:h-70 w-full overflow-hidden">
                                    <img
                                        src={item.images[1]}
                                        alt=":3"
                                        className="w-full h-full mx-auto box-border rounded-md object-cover" />
                                </div>
                                {/* Header band */}
                                <div className="flex items-center justify-between py-4" >
                                    <span className="text-base lg:text-xl font-medium uppercase tracking-wide">
                                        {item.title}
                                    </span>
                                    <span className="text-xs font-medium px-2 lg:px-3 py-0.5 rounded-full bg-green-100 text-green-700">
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
            </section>

        </main>
    )
}