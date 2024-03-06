import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";
import { useAuth } from "@clerk/nextjs";
import Footer from "./Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";
import { MoreHorizontal } from "lucide-react";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  orgId: string;
  isFavourite: boolean;
}

const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  isFavourite,
  orgId,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;

  return (
    <>
      <Link href={`/board/${id}`}>
        <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden ">
          <div className="relative flex-1 bg-amber-50">
            <Image src={imageUrl} alt={title} fill className="object-fit" />
            <Overlay />
            <Actions id={id} title={title} side="right">
              <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-hover ">
                <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
              </button>
            </Actions>
          </div>
          <Footer
            isFavourite={isFavourite}
            title={title}
            authorLabel={authorLabel}
            createdAtLabel={createdAt}
            onClick={() => {}}
            disabled={false}
          />
        </div>
      </Link>
    </>
  );
};

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
