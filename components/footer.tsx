import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export interface FooterInterface {
    className?: string 
}

export default async function Footer({
    className
}:FooterInterface) {

    const t  = await getTranslations()
    

    return (


        <footer className={cn(
            "relative w-full h-100 pt-10 lg:pt-0",
            "flex flex-col justify-start **:border-zinc-900",
            className
        )}>

            <div className="flex items-center justify-center lg:justify-start h-fit w-full text-xs lg:text-base px-5 border-y">
                &copy; 2026 Student Union MFU | {t("footer.rights")}
            </div>

            
            <h1 className="flex items-center h-auto w-full px-5 text-5xl lg:text-8xl py-3 lg:py-6 lg:border-b">
                Student Union
            </h1>
 
            
            <div className="grid grid-cols-1 lg:grid-cols-5 h-fit lg:h-full w-full px-5 gap-4 **:border-zinc-900 text-xs lg:text-sm">
                <div className="flex flex-col items-start justify-center lg:justify-start lg:py-6 gap-2 lg:gap-4 lg:border-r ">
                    <h1 className="text-xl lg:text-2xl">[{t("footer.getInTouch")}]</h1>
                    <ul className="flex lg:flex-col gap-3 w-full underline">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Line</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-center lg:justify-start lg:px-8 py-0 lg:py-6 gap-2 lg:gap-4 lg:border-r">
                    <h1 className="text-xl lg:text-2xl">[{t("footer.explore")}]</h1>
                    <ul className="flex lg:flex-col gap-3 w-full underline">
                        <li>{t("nav.home")}</li>
                        <li>{t("nav.events")}</li>
                        <li>{t("nav.lostFound")}</li>
                        <li>{t("su_store.su")}</li>
                    </ul>
                </div>
                <div className="lg:col-span-3 flex flex-col items-start justify-center lg:justify-start lg:px-8 lg:py-6 gap-2 lg:gap-4 ">
                    <h1 className="text-xl lg:text-2xl">[{t("footer.findUs")}]</h1>
                    <ul className="flex flex-col gap-0 w-full h-full">
                        <li className="font-semibold">Student Union Room - D1</li>
                        <li>Mae Fah Luang University</li>
                        <li>Nang Lae, Mueang Chiang Rai District, Chiang Rai 57100</li>
                    </ul>
                </div>
            </div>           

        </footer>
    )
}