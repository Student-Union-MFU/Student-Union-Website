import { ScrollIndicatorData } from "@/mockdata";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

export interface ScrollIndicatorInterface {
    progress: number,
    handleScrollTo: ( start:number ) => void
}

export default function ScrollIndicator({
    progress,
    handleScrollTo
}:ScrollIndicatorInterface) {

    return (
        <div className="z-10 w-fit h-fit px-2 py-4 fixed top-1/3 lg:top-1/2 lg:-translate-y-1/3 left-3 lg:left-5 hidden lg:flex flex-col items-center rounded-full">
            <div className="w-full h-full flex flex-col justify-evenly items-center gap-8">
                {
                    ScrollIndicatorData.map((e, i) => (
                        <Tooltip key={ i }>

                            <TooltipTrigger className={"z-20"}>

                                <div
                                    key={i}
                                    onClick={() => handleScrollTo(e.start)}
                                    className={cn(
                                        "z-30 flex items-center justify-center size-4 lg:size-5 gap-4 rounded-full border bg-zinc-100 border-zinc-300",
                                        "hover:cursor-pointer hover:bg-zinc-300 transition-all"
                                    )}>

                                    <div className={cn(
                                        "size-2 lg:size-3 rounded-full",
                                        (progress >= e.start && progress <= e.end) && "bg-zinc-600"
                                    )}></div>

                                </div>

                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p className="text-xl">{e.label}</p>
                            </TooltipContent>

                        </Tooltip>
                    )
                    )}
            </div>
            <div className="absolute top-1/12 w-0.5 h-10/12 bg-zinc-300">

            </div>
        </div>
    )

}