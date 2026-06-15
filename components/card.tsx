import { cn } from "@/lib/utils"
import { ArrowUpRight, Clock, MapPin } from "lucide-react"
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
}: VerticalCardInterface) {
  return (
    <Link href={link} onClick={onClick}>
      <div className={cn(
        "relative flex flex-col justify-end overflow-hidden cursor-pointer",
        "w-full max-w-md lg:max-w-74",
        "h-fit",
        "lg:gap-6 lg:transition-all",
        "rounded-sm lg:rounded-none",
        className
      )}>
        <div className={cn(
          "overflow-hidden",
          "w-full mx-auto lg:z-20 lg:block h-100",
        )}>
          <img
            src={image}
            alt=":3"
            className="w-full h-full object-cover rounded-lg lg:mx-auto lg:box-border"
          />
        </div>
        <div className="w-full h-auto px-1 py-3">
          {children}
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
                "w-full h-full flex flex-col",
                "h-fit gap-4",
                "group overflow-hidden cursor-pointer",
                className
            )}>
    
                <div className="
                    flex items-center justify-center
                    w-full h-50 lg:h-65 rounded-lg overflow-hidden
                ">
                    <img 
                        src={ image } 
                        alt={ title } 
                        className="w-full h-full box-border object-cover"/>
                </div>

                <div className="relative w-full h-5/12 lg:h-full flex flex-col justify-start bg-background text-xs ">
    
                    <h3 className="text-xl">{ title }</h3>
    
                    <div className="h-15 py-2">{ children }</div>

                    <Separator className={"my-2"} />

                    <h3 className="flex items-center py-1 gap-2">
                        <MapPin className="size-4" />
                        { subTitle }
                    </h3>

                    <h3 className="flex items-center py-1 gap-2">
                        <Clock className="size-4" />
                        { timestamp }
                    </h3>

                    <span className="absolute right-4 bottom-0 text-zinc-50 rounded-full px-3 py-1 bg-red-500">
                        Uncollected
                    </span>
    
                </div>
    

            </div>
        </Link>
    )
}
