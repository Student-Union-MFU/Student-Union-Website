import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { NavigationData } from "@/mockdata";

export default function EventItemPage() {
    return (
        <main className="flex flex-col items-center min-w-screen w-full min-h-screen h-auto px-0 lg:px-20 py-0 lg:py-8 lg:gap-4 box-border bg-background text-foreground">
            <Navbar
                heading={NavigationData.heading}
                subHeading={NavigationData.subHeading}
                logo={NavigationData.logo}
                linkItems={NavigationData.linkItems} />

            <section className="h-auto w-full grid grid-cols-5 gap-x-2 gap-y-8 py-8">

            </section>

            <Footer />
        </main>
    )
}