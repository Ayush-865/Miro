"use client";
import { Actions } from "@/components/actions";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const TabSeperator = () => {
  return (
    <>
      <div className="text-neutral-300 px-1.5"></div>
    </>
  );
};

const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <>
      <div className="absolute top-2 left-2 bg-white px-1.5 rounded-md flex items-center shadom-md">
        <Hint label="Go to Boards" side="bottom" sideOffset={10}>
          <Button className="px-2" variant="board">
            <Link href={"/"} />
            <Image src="/logo.png" alt="logo" height={40} width={40} />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black ",
                font.className
              )}
            >
              Board
            </span>
          </Button>
        </Hint>
        <Hint label="Change Board Name" side="bottom" sideOffset={10}>
          <Button
            variant="board"
            className="text-base font-normal px-2"
            onClick={() => onOpen(data._id, data.title)}
          >
            {data.title}
          </Button>
        </Hint>
        <TabSeperator />
        <TabSeperator />
        <TabSeperator />
        <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
          <div>
            <Hint label="Main menu" side="bottom" sideOffset={10}>
              <Button size="icon" variant="board">
                <Menu />
              </Button>
            </Hint>
          </div>
        </Actions>
      </div>
    </>
  );
};

export default Info;

export function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white px-1.5 rounded-md flex items-center shadom-md w-[100px]">
      <Skeleton className="h-12 w-full bg-muted-400" />
    </div>
  );
}
