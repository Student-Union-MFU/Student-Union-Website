import { VerticalCard } from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { NavigationData } from "@/mockdata";
import { ArrowUpRight } from "lucide-react";

export default function Events(){

    const currentPath = "/events/"

    return(
        <main className="flex flex-col items-center min-w-screen w-full min-h-screen h-auto px-0 lg:px-20 py-0 lg:py-8 lg:gap-4 box-border bg-background text-foreground">
            <Navbar 
                heading={ NavigationData.heading } 
                subHeading={ NavigationData.subHeading } 
                logo={NavigationData.logo} 
                linkItems={NavigationData.linkItems} />
            
            <section className="h-auto w-full grid grid-cols-5 gap-x-2 gap-y-8">
            {
                [...Array(14)].map((e,i) => (
                    <VerticalCard key={i} link={ currentPath + i } >
                        
                        <div className="z-30 flex flex-col w-full h-full justify-start gap-3 ">
                            
                            <h2 className="w-full text-2xl">Student Night Market</h2>
                            <div className="flex flex-col w-full h-fit">
                                <p className="w-full text-sm font-extrabold">4 Jun 2026</p>
                                <p className="w-full line-clamp-2 text-base">M-Square Rooftop (L Park)</p>
                            </div>


                        </div>

                    </VerticalCard>
                ))
            }
            </section>
            
        </main>
    )
}