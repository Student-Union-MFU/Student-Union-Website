import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FooterInterface {
    className?: string 
}

export default function Footer({
    className
}:FooterInterface) {
    return (
        <footer className={cn(
            "w-full h-auto mt-auto",
            className
        )}>

            <div className="flex flex-col items-center justify-center lg:justify-between w-full h-full px-6 py-6 lg:px-10 lg:py-0 lg:rounded-xl bg-zinc-100 overflow-hidden">

                <div className="w-full h-fit flex justify-between items-center lg:items-end lg:py-4">
                    <div className="flex flex-col w-fit h-full items-start justify-center">
                        <h1 className="text-4xl lg:text-7xl">Student Union</h1>
                        <p className="text-lg lg:text-4xl">Mae Fah Luang University</p>
                    </div>
                    <img src="/logo/logo_3.png" alt="Student Union" className="max-w-24 lg:max-w-36 " />
                </div>

                <Separator />

                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center w-full h-fit lg:h-14">
                    {
                        [...Array(4)].map((_, i) => (
                            <Button key={i} variant={"link"} size={"lg"} className={"rounded-full px-4!"}>
                                Check Out
                                <ArrowUpRightIcon data-icon="inline-start" />
                            </Button>
                        ))
                    }
                </div>

            </div>

        </footer>
    )
}