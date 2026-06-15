"use client"

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef } from "react";


const LenisContext = createContext<React.RefObject<Lenis | null> | null>(null);

export default function SmoothScrollProvider({ children }:{ children:React.ReactNode}) {
  
  const lenisRef = useRef<null | Lenis>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({ duration: 0.5, easing: (t) => 1 - Math.pow(1 - t, 3) });
    lenisRef.current = lenis;
    
    let rafId: number;
    const raf = (time: number) => { 
      lenis.raf(time); 
      rafId = requestAnimationFrame(raf); 
    };
    rafId = requestAnimationFrame(raf);
    
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
 
  useEffect(() => {
 
    lenisRef.current?.scrollTo(0, { immediate: true });
    lenisRef.current?.resize();

  },[ pathname ])
 
  if(lenisRef == null) { return };

  return (
    <LenisContext.Provider value={ lenisRef }>
      {children}
    </LenisContext.Provider>
  )
}

export function useLenis () {
  const lenis = useContext(LenisContext);
  
  if (!lenis) {
    console.warn("useLenis must be used within SmoothScrollProvider");
    return null;
  }

  return lenis.current;
}