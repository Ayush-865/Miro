"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <>
      <div className="hidden lg:flex flex-col space-y-6 w-[206px] h-screen pl-5 pt-5 ">
        <Link href="/">
          <div className="flex items-center gap-x-2">
            <Image
              src="/logo.png"
              alt="logo"
              height={60}
              width={60}
              className="rounded-lg"
            />
            <span className={cn("font-semibold text-2xl  ", font)}>Board</span>
          </div>
        </Link>
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                width: "100%",
              },
              organizationSwitcherTrigger: {
                borderRadius: "8px",
                border: "1px solid #e5e7eb ",
                justifyContent: "space-between",
                backgroundColor: "white",
                marginRight: "2px",
              },
            },
          }}
        />
        <div className="space-y-1 w-full">
          <Button
            asChild
            size="lg"
            variant={favorites ? "ghost" : "secondary"}
            className="font-norml justify-start px-2 w-full"
          >
            <Link href="/">
              <LayoutDashboard className="h-4 w-4 mr-2 flex" />
              Team Boards
            </Link>
          </Button>
        </div>
        <div className="space-y-1 w-full">
          <Button
            asChild
            size="lg"
            variant={favorites ? "secondary" : "ghost"}
            className="font-norml justify-start px-2 w-full"
          >
            <Link href={{ pathname: "/", query: { favorites: true } }}>
              <LayoutDashboard className="h-4 w-4 mr-2 flex" />
              Favourite Boards
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrgSidebar;
