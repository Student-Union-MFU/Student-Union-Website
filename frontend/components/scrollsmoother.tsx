"use client"

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef } from "react";


const LenisContext = createContext<React.RefObject<Lenis | null> | null>(null);

export default function SmoothScrollProvider({ children }:{ children:React.ReactNode}) {
  
  const lenisRef = useRef<null | Lenis>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
    
    lenisRef.current = lenis;

    const raf = (time:number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
 
  }, []);
 
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