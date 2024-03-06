"use client";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

const InviteButton = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Invite Members
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
          <OrganizationProfile />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InviteButton;
