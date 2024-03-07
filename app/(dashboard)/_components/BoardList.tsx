import Image from "next/image";
import EmptyBoard from "./EmptyBoard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BoardCard from "./board-card";
import AddBoardButton from "./AddBoardButton";

interface BoardListParams {
  orgId: string;
  query: {
    search?: string;
    favorites?: boolean;
  };
}

const BoardList = ({ orgId, query }: BoardListParams) => {
  const data = useQuery(api.boards.get, { orgId }) as any[];

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favourite Boards" : "All Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <AddBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data.length && query.search) {
    return (
      <>
        <div className="h-full flex flex-col items-center justify-center">
          <Image
            src="/monkey.jpg"
            alt="Empty"
            height={200}
            width={200}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">
            Try searching something else
          </h2>
        </div>
      </>
    );
  }
  if (!data.length && query.favorites) {
    return (
      <>
        <div className="h-full flex flex-col items-center justify-center">
          <Image
            src="/starred.png"
            alt="Empty"
            height={200}
            width={200}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">
            No starred boards found
          </h2>
        </div>
      </>
    );
  }
  if (!data.length) {
    return (
      <>
        <EmptyBoard />
      </>
    );
  }

  return (
    <>
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favourite Boards" : "All Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <AddBoardButton orgId={orgId} />
          {data?.map((board) => {
            return (
              <BoardCard
                key={board._id}
                id={board._id}
                title={board.title}
                imageUrl={board.imageUrl}
                authorId={board.authorId}
                authorName={board.authorName}
                createdAt={board._creationTime}
                orgId={board.orgId}
                isFavorite={board.isFavorite}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoardList;
