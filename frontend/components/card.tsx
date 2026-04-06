import { cn } from "@/lib/utils"
import Link from "next/link"

export interface CardInterface {
    image?: string,
    className?: string,
    children?: React.ReactNode,
    link?: string,
}
4
export interface VerticalCardInterface extends CardInterface {}

export function VerticalCard({
    image = "/img/mockcar2.jpg",
    className,
    children,
    link = "#"
}:VerticalCardInterface) {
    return (
        <Link href={ link }>
            <div className={cn(
                    "w-full h-full max-h-84 flex flex-col justify-end rounded-md overflow-hidden border",
                    "bg-zinc-100 border-zinc-400 cursor-pointer",
                    "hover:scale-101 hover:border-zinc-400 hover:border-2 active:scale-100 transition-all",
                    "lg:h-88 lg:w-full lg:max-h-96",
                    className
                )} >
                
                <div className="hidden lg:block 
                h-9/12 w-full overflow-hidden">
                    <img src={ image } alt=":3" className="w-full h-full box-border object-cover mx-auto" />
                </div>
                
                <div className="w-full h-full lg:h-3/12 border-t border-t-zinc-300 bg-zinc-200">
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
    title = "Title",
    subTitle = "Sub Title",
    timestamp = "hh : mm | DD/MM/YYYY",
    image = "/img/mockcar2.jpg",
    children,
    className,
    link = "#"
}:HorizontalCardInterface) {

    return (
        <Link href={ link }>
            <div className={cn(
                "w-full h-full flex border border-zinc-200 rounded-xl overflow-hidden cursor-pointer",
                "hover:border-zinc-400 hover:scale-101 transition-all",
                className
            )}>
    
                <div className="w-5/8 max-w-150 h-full max-h-87 border-r border-r-zinc-600 bg-zinc-100">
                    <img src={ image } alt={ title } className="w-full h-full box-border object-cover"/>
                </div>

                <div className="relative w-3/8 h-full flex flex-col justify-start p-6 gap-4 bg-background">
    
                    <h1 className="text-4xl">{ title }</h1>
                    <h2 className="text-base">{ subTitle }</h2>
    
                    <div className="">{children}</div>

                    <span className="absolute right-4 bottom-2 text-sm text-zinc-400">{ timestamp }</span>
    
                </div>
    
            </div>
        </Link>
    )
}