"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import ConfirmModal from "./confirm-modal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove) as any;
  const { onOpen } = useRenameModal();

  const handleOnCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied to clipboard"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const handleDeleteBoard = () => {
    mutate({
      id,
    })
      .then(() => {
        toast.success("Board deleted successfully");
      })
      .catch((err: any) => {
        toast.error(err.message); // Display the error message
      });
  };

  return (
    <div className="absolute z-[50] top-1 right-1 ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent
          side={side}
          sideOffset={sideOffset}
          onClick={(e) => e.stopPropagation()}
        >
          <DropdownMenuItem
            className="p-3 cursor-pointer"
            onClick={() => handleOnCopyLink()}
          >
            <Link2 className="w-4 h-4 mr-2" />
            Copy Board Link
          </DropdownMenuItem>
          <DropdownMenuItem
            className="p-3 cursor-pointer"
            onClick={() => onOpen(id, title)}
          >
            <Pencil className="w-4 h-4 mr-2" />
            Rename
          </DropdownMenuItem>
          <ConfirmModal
            header="Delete Board?"
            description="This will delete the board and all of it's content"
            disabled={pending}
            onConfirm={handleDeleteBoard}
          >
            <Button
              variant="ghost"
              className=" w-full text-sm justify-start font-normal p-3 cursor-pointer"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </ConfirmModal>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
