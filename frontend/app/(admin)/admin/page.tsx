import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Circle, ShieldUser } from "lucide-react";

export default function Admin() {
    return (
        <div className="flex flex-1 h-full w-full">
            <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
                
                <div className="flex flex-col gap-2 w-full h-auto max-h-72">
                    <div className="flex justify-end w-full h-full">
                       
                        <div className="flex flex-col w-auto h-full gap-1">
 
                            <h1 className="flex items-center gap-2 text-xl">
                                <ShieldUser className="size-5 max-size-6" />
                                Admin List
                            </h1>
 
                            { tempData.map((e,i) => (
                                <div key={ i } className="w-60 max-w-72 h-fit max-h-7 flex items-center justify-start gap-2">
                                    {e.online ? 
                                        <Circle className="size-4 max-size-5 fill-green-500" strokeWidth="1" /> :
                                        <Circle className="size-4 max-size-5 fill-zinc-600" strokeWidth="1" /> 
                                    }
                                    <p>{ e.name }</p>
                                    <span className="self-end ms-auto text-sm">{ e.last_seen }</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full h-full">
                    
                    <div className="w-full h-2/12 flex items-end gap-2">
                        {[...new Array(4)].map((i, idx) => (
                            <div
                                key={"first-array-demo-1" + idx}
                                className="h-26 max-h-28 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
                            ></div>
                        ))}
                    </div>

                    <div className="w-full h-10/12 flex gap-2">
                    {[...new Array(3)].map((i, idx) => (
                        <div
                            key={"second-array-demo-1" + idx}
                            className="h-full w-full border-r"
                        >
                            <div className="w-full h-fit py-4">
                                <h1 className="text-2xl">Events</h1>
                            </div>

                            <div className="w-full h-auto flex flex-col gap-4 px-6">
 
                                <div className="w-full h-fit flex flex-col gap-2">
                                    <Label htmlFor="#event_name">Event Name</Label>
                                    <Input id="event_name" />
                                </div>

                                <div className="w-full h-fit flex flex-col">
                                    <label htmlFor="#event_description">Event Description</label>
                                    <Textarea id="event_description" className="max-h-40"  />
                                </div>
 
                                <div className="w-full h-fit flex flex-col">
                                    <label htmlFor="#event_name">Event Name</label>
                                    <Input id="event_name" type="date" />
                                </div>
 
                                <div className="w-full h-fit flex flex-col">
                                    <label htmlFor="#event_name">Event Name</label>
                                    <Input id="event_name" />
                                </div>
 
                            </div>

                        </div>
                    ))}
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export const tempData = [
    {
        name: "Thuta Naing",
        online: true,
        last_seen: "now"
    },
    {
        name: "Yion",
        online: false,
        last_seen: "3 hr(s) ago"
    },
    {
        name: "Thu Ta Naing",
        online: true,
        last_seen: "now"
    },
    {
        name: "Ganesha Volk",
        online: false,
        last_seen: "1 hr(s) ago"
    },
]
