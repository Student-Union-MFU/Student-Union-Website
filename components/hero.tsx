"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState, useEffect, useLayoutEffect } from "react"

export default function Hero() {
 
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={ref} className="relative flex max-h-dvh max-w-dvw w-full min-h-fit h-[90dvh] lg:h-[80dvh] overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-end lg:items-center justify-end text-white overflow-hidden">
        
        {/* image moves at different speed */}
        <motion.img
          src="/img/image.png"
          alt="img"
          style={{ y: imageY }}
          className="hidden lg:block absolute w-full h-full object-cover brightness-80"
        />
        <img
          src="/img/image.png"
          alt="img"
          className="block lg:hidden absolute w-full h-full object-cover brightness-80"
        />
        <img
          src="/img/logi.png"
          alt="img"
          className="absolute top-4 right-4 w-10 lg:w-fit h-20 lg:h-35 object-cover rounded-tl-sm"
        />
        
        <div className="flex flex-col items-start z-10 w-full px-4 lg:px-0 py-4 lg:py-8 text-start bg-background text-zinc-900">
          <h1 className="flex flex-row text-5xl lg:text-9xl gap-4 tracking-wide">
            Student <span>Union</span>
          </h1>
          <h2 className="text-2xl lg:text-4xl">Mae Fah Luang University</h2>
        </div>

      </div>
    </div>
  )
}