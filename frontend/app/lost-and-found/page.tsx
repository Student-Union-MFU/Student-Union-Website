import { HorizontalCard } from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { NavigationData } from "@/mockdata";

export default function LostAndFound() {

    const currentPath = "/lost-and-found/"
    return (
        <div className="flex flex-col items-center justify-between min-w-screen w-full h-auto px-0 lg:px-20 py-0 lg:py-8 lg:gap-4 box-border bg-background text-foreground">
            <Navbar
                heading={NavigationData.heading}
                subHeading={NavigationData.subHeading}
                logo={NavigationData.logo}
                linkItems={NavigationData.linkItems} />

            <section className="h-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20 box-border py-10">
                {
                    [...Array(20)].map((e, i) => (
                        <HorizontalCard key={i} link={ currentPath + i }>
                            <p className="line-clamp-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde quod perferendis earum quidem saepe corporis enim suscipit deleniti doloremque.
                            </p>
                        </HorizontalCard>
                    ))
                }
            </section>

            <Footer />
        </div>
    )
}