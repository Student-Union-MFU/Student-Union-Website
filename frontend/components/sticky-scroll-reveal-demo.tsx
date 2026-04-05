"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ImageIcon } from "lucide-react";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center bg-white overflow-hidden box-border  border">
        <img src="https://picsum.photos/1200/1200?random=4" alt="img" className="w-full object-cover " />
      </div>

    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center bg-white border">
        <img src="https://picsum.photos/1200/1200?random=1" alt="img" className="w-full box-border object-cover" />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center bg-white border">
        <img src="https://picsum.photos/1200/1200?random=2" alt="img" className="w-full box-border object-cover" />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center bg-white border">
        <img src="https://picsum.photos/1200/1200?random=3" alt="img" className="w-full box-border object-cover" />
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full h-full py-4 text-black">
      <StickyScroll content={content} />
    </div>
  );
}
