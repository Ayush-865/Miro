import { Button } from "@/components/ui/button";
import { DialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

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
                <Button size="lg">Create Board</Button>
              </DialogTrigger>
              <DialogContent className="p-0 bg-transparent border-none max-w-[480px]"></DialogContent>
            </Dialog>
          </div>
        </div>
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
