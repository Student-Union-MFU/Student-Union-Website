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
            
            <section className="h-auto w-full grid grid-cols-5 gap-x-2 gap-y-8 py-8">
            {
                [...Array(14)].map((e,i) => (
                    <VerticalCard key={i} link={ currentPath + i } className="relative max-h-220 min-h-150!">
                        <div className="z-30 flex flex-col w-full h-full justify-start px-4 lg:p-2 gap-3 ">
                            
                            <h2 className="w-full text-2xl">Student Night Market</h2>
                            <div className="flex flex-col w-full h-fit">
                                <p className="w-full text-sm font-extrabold">4 Jun 2026</p>
                                <p className="w-full line-clamp-2 text-base">M-Square Rooftop (L Park)</p>
                            </div>


                        </div>

                        {/* <span className="absolute top-2 left-2 border text-lg px-4 py-1 bg-background/70 rounded-full"> Date: 28.6.2026</span> */}

                        <span className="absolute bottom-0 right-2 flex items-center justify-center px-3 p-1 gap-1 rounded-full bg-[#394786] text-sm text-zinc-50 opacity-75">
                            More<ArrowUpRight size={20} />
                        </span>
                    </VerticalCard>
                ))
            }
            </section>
            
            <Footer />
        </main>
    )
}