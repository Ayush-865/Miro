import React from "react";
import Info from "./Info";
import Participants from "./Participants";
import Toolbar from "./Toolbar";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <>
      <main className="h-screen w-screen relative touch-none bg-neutral-100 ">
        Canvas
        <Info />
        <Participants />
        <Toolbar />
      </main>
    </>
  );
};

export default Canvas;
