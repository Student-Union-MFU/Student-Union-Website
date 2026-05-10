"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { UpcomingEventsData } from "@/mockdata";

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full h-full py-4 text-black">
      <StickyScroll content={ UpcomingEventsData } />
    </div>
  );
}
