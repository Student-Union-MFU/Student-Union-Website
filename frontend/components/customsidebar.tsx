"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { div } from "motion/react-client";

export function CustomSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-screen h-screen flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="w-full h-14">
              { open && 
                <img src="/img/Banner.png" alt="Student Union" className="w-full h-full object-cover rounded-sm" />
              }
          </div>
        </SidebarBody>
      </Sidebar>
    
      { children }
    
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex flex-col items-start space-x-2 py-1 text-sm font-normal text-black"
    >
      <div
        className="flex items-center w-full whitespace-pre text-black dark:text-white"
      >
        <div className="h-18 w-17 border rounded-full">
            <img src="/logo/logo_3.png" alt="Student Union" className="w-full h-full object-cover" />
        </div>
        <h1 className="grow flex flex-col items-end justify-center text-2xl">
            Student Union
            <span className="text-sm">Admin Dashboard</span>
        </h1>

      </div>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-10 w-11">
        <img src="/logo/logo_3.png" alt="Student Union" className="w-full h-full object-cover" />
      </div>
    </a>
  );
};