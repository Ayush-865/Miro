import Image from "next/image";
import EmptyBoard from "./EmptyBoard";

interface BoardListParams {
  orgId: string;
  query: {
    search?: string;
    favorites?: boolean;
  };
}

const BoardList = ({ orgId, query }: BoardListParams) => {
  const data = [];

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
      <div></div>
    </>
  );
};

export default BoardList;
