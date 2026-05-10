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
            "relative w-full h-[50dvh] text-[#101230]",
            "flex flex-col justify-start border-t border-[#181b47]",
            className
        )}>
            <div className="flex items-center h-fit w-full border-b border-[#101230] text-xl px-20">
                &copy; 2026 Student Union MFU | All rights reserved. 
            </div>

            <div className="flex items-center h-auto w-full border-b border-[#101230] text-8xl px-20 py-6">
                Student Union
            </div>
 
            <div className="grid grid-cols-5 h-full w-full px-20">
                <div className="flex flex-col items-start px-4 py-6 gap-4 border-r border-[#101230]">
                    <h1 className="text-3xl">[Get in Touch]</h1>
                    <ul className="flex flex-col gap-3 w-full text-lg underline">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Line</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start px-8 py-6 gap-4 border-r border-[#101230]">
                    <h1 className="text-3xl">[Explore]</h1>
                    <ul className="flex flex-col gap-3 w-full text-lg underline">
                        <li>Home</li>
                        <li>Events</li>
                        <li>Lost and Found</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start px-8 py-6 gap-4 border-r border-[#101230]">
                    <h1 className="text-3xl">[Find us]</h1>
                    <ul className="flex flex-col gap-0 w-full h-full text-sm">
                        <li className="font-semibold">Student Union Room - D1</li>
                        <li>Mae Fah Luang University</li>
                        <li>Nang Lae, Mueang Chiang Rai District, Chiang Rai 57100</li>
                    </ul>
                </div>
            </div>           
  
            {/* <img src="/logo/logo.png" alt="Student Union" className="absolute right-0 bottom-0 max-w-24 lg:max-w-50 object-scale-up" /> */}
                

        </footer>
    )
}