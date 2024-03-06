"use client";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogTrigger, Dialog } from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const EmptyBoard = () => {
  const { mutate, pending } = useApiMutation(api.board.create) as any;
  const { organization } = useOrganization();

  const handleCreateBoard = async () => {
    mutate({
      orgId: organization!.id,
      title: "Untitled",
    })
      .then((id: string) => {
        toast.success("Board created successfully");
      })
      .catch((err: any) => {
        toast.error("Failed to create board");
      });
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        <Image
          src="/emptyBoard.png"
          alt="Empty"
          height={300}
          width={300}
          className="rounded-lg"
        />
        <h2 className="text-2xl font-semibold mt-4">No Board Created</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Create a board to get started
        </p>
        <div className="mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button disabled={pending} onClick={handleCreateBoard} size="lg">
                Create Board
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]"></DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default EmptyBoard;
