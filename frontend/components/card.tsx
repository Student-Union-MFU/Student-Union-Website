import { cn } from "@/lib/utils"
import { Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { Separator } from "./ui/separator"

export interface CardInterface {
    image?: string,
    className?: string,
    children?: React.ReactNode,
    link?: string,
    onClick?: () => void
}

export interface VerticalCardInterface extends CardInterface {}

export function VerticalCard({
    image = "/img/MockPoster.png",
    className,
    children,
    link = "#",
    onClick
}:VerticalCardInterface) {
    return (
        <Link href={ link } onClick={ onClick }>
            <div className={cn(
                    "w-full h-full min-h-50 max-h-84 flex flex-col justify-end",
                    "cursor-pointer",
                    "hover:scale-101 active:scale-100 transition-all",
                    "lg:h-full lg:w-full lg:max-h-full overflow-hidden p-2",
                    className
                )} >
                
                <div className="z-20 absolute lg:relative bottom-0 left-0 block h-full lg:h-9/12 w-full overflow-hidden">
                    <img src={ image } alt=":3" className="w-full h-full box-border object-cover mx-auto rounded-xl" />
                </div>
                
                <div className="z-30 w-full h-full lg:h-3/12">
                    { children }
                </div>
            
            </div>
        </Link>
    )
}

export interface HorizontalCardInterface extends CardInterface {
    title?: string,
    subTitle?: string,
    timestamp?: string,
}

export function HorizontalCard({
    title = "Car with Headphone",
    subTitle = "C5 204",
    timestamp = "22 Jun 2026",
    image = "/img/mockcar2.jpg",
    children,
    className,
    link = "#"
}:HorizontalCardInterface) {

    return (
        <Link href={ link }>
            <div className={cn(
                "w-full h-full flex flex-col lg:flex-row rounded-xl overflow-hidden cursor-pointer",
                "hover:border-zinc-400 hover:scale-101 transition-all",
                "lg:max-h-60",
                className
            )}>
    
                <div className="
                    flex items-center justify-center
                    w-full lg:w-4/12 max-w-150 h-7/12 lg:h-full max-h-70 lg:max-h-87 lg:max-w-100
                ">
                    <img src={ image } alt={ title } className="w-11/12 h-11/12 border border-zinc-400 rounded-2xl box-border object-cover"/>
                </div>

                <div className="relative w-full lg:w-8/12 h-5/12 lg:h-full flex flex-col justify-start p-4 gap-0 bg-background">
    
                    <h1 className="text-xl lg:text-3xl">{ title }</h1>
    
                    <div className="py-2 text-lg">{ children }</div>

                    <Separator className={"my-2"} />

                    <h2 className="flex items-center gap-2 text-sm lg:text-lg">
                        <MapPin className="size-5" />
                        { subTitle }
                    </h2>

                    <h2 className="flex items-center gap-2 text-sm lg:text-lg">
                        <Clock className="size-5" />
                        { timestamp }
                    </h2>

                    <span className="absolute right-4 bottom-4 text-sm font-semibold text-zinc-50 rounded-full px-3 py-1 bg-red-500">
                        Uncollected
                    </span>
    
                </div>
    
            </div>
        </Link>
    )
}