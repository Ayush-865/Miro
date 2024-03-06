"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface AddBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const AddBoardButton = ({ orgId, disabled }: AddBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create) as any;
  const handleClick = (orgId: string) => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then(() => {
        toast.success("Board created successfully");
      })
      .catch((err: any) => {
        toast.error("Failed to create board");
      });
  };
  return (
    <>
      <button
        disabled={pending || disabled}
        onClick={() => handleClick(orgId)}
        className={cn(
          "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col justify-center items-center py-6",
          (pending || disabled) && "cursor-not-allowed opacity-75"
        )}
      >
        <div />
        <Plus className="w-8 h-8 text-white" />
        <p className="text-sm text-white font-light ">New Board</p>
      </button>
    </>
  );
};

export default AddBoardButton;
