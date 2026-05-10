import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export interface FooterInterface {
    className?: string 
}

export default function Footer({
    className
}:FooterInterface) {
    return (
        <footer className={cn(
            "relative w-full h-100 text-[#101230]",
            "flex flex-col justify-start **:border-zinc-900",
            className
        )}>

            <div className="flex items-center justify-center lg:justify-start h-fit w-full text-base lg:text-xl px-2 border-y lg:px-20 ">
                &copy; 2026 Student Union MFU | All rights reserved. 
            </div>

            
            <div className="flex items-center h-auto w-full text-5xl px-2 py-4 lg:text-8xl lg:px-20 lg:py-6 lg:border-b">
                Student Union
            </div>
 
            
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full w-full lg:px-20 **:border-zinc-900">
                <div className="flex flex-col items-start justify-center lg:justify-start p-2 lg:px-4 lg:py-6 gap-2 lg:gap-4 lg:border-r">
                    <h1 className="text-xl lg:text-3xl">[Get in Touch]</h1>
                    <ul className="flex lg:flex-col gap-3 w-full text-sm lg:text-lg underline">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Line</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-center lg:justify-start p-2 lg:px-8 lg:py-6 gap-2 lg:gap-4 lg:border-r ">
                    <h1 className="text-xl lg:text-3xl">[Explore]</h1>
                    <ul className="flex lg:flex-col gap-3 w-full text-sm lg:text-lg underline">
                        <li>Home</li>
                        <li>Events</li>
                        <li>Lost and Found</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-center lg:justify-start p-2 lg:px-8 lg:py-6 gap-2 lg:gap-4 lg:border-r">
                    <h1 className="text-lg lg:text-3xl">[Find us]</h1>
                    <ul className="flex flex-col gap-0 w-full h-full text-sm">
                        <li className="font-semibold">Student Union Room - D1</li>
                        <li>Mae Fah Luang University</li>
                        <li>Nang Lae, Mueang Chiang Rai District, Chiang Rai 57100</li>
                    </ul>
                </div>
            </div>           

        </footer>
    )
}