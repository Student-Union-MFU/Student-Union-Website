import { cva, VariantProps } from "class-variance-authority";
import React from "react"

export const SectionVarients = cva("flex flex-col shrink-0 mx-auto h-screen",{
    variants: {
        size: {
            standard: "w-dvw md:w-[90dvw] lg:w-[70dvw]",
            large: "w-dvw lg:w-[70dvw]"
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
        }
    },
    defaultVariants: {
        size: "standard",
        align: "center",
        justify: "center"
    }
    
})

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof SectionVarients> {} 

export const CustomSection:React.FC<SectionProps> = ({size, align, justify, className, children, ...props}) => {
    return(
        <div className={SectionVarients({
            size, 
            align,
            justify,
            className})}>

            {children}
 
        </div>
    )
}