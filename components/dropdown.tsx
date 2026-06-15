"use client"

import { cn } from "@/lib/utils"
import { SelectHTMLAttributes } from "react"

export interface LanguageOptionInterface {
    label: string
    value: string
}

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: LanguageOptionInterface[]
    className?: string
}

export default function Dropdown ({
    options,
    className,
    ...rest
}:DropdownProps) {  
    return (
        <select name="" id="" className={cn(className, "lg:px-8 cursor-pointer")} {...rest}>
        { options.map((e,i) => (
            <option key={ i } value={ e.value }>
                {e.label}
            </option>
        ))}
        </select>
    )
}