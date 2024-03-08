import Canvas from "./_components/Canvas";
import { Room } from "@/components/room";
import CanvasLoader from "./_components/CanvasLoader";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <>
      <div>
        <Room roomId={params.boardId} fallback={<CanvasLoader />}>
          <Canvas boardId={params.boardId} />
        </Room>
      </div>
    </>
  );
};

export default BoardIdPage;
