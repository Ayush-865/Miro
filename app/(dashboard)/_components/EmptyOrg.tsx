"use client";
import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/welcome.jpg"
        alt="Empty"
        height={300}
        width={300}
        className="rounded-lg"
      />
      <h2 className="text-2xl font-semibold mt-4">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-1">
        Create an organization to get started
      </p>
      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
