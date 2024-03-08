"use client";

import React, { use, useCallback, useState } from "react";
import Info from "./Info";
import Participants from "./Participants";
import Toolbar from "./Toolbar";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
} from "@/liveblocks.config";
import CursorsPresence from "./CursorsPresence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);
      setMyPresence({ cursor: current });
    },
    []
  );

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);

  return (
    <>
      <main className="h-screen w-screen relative touch-none bg-neutral-100 ">
        <Info boardId={boardId} />
        <Participants />
        <Toolbar
          canvasState={canvasState}
          setCanvasState={setCanvasState}
          canRedo={canRedo}
          canUndo={canUndo}
          undo={history.undo}
          redo={history.redo}
        />
        <svg
          className="h-[100vh] w-[100vw]"
          onWheel={onWheel}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <g>
            <CursorsPresence />
          </g>
        </svg>
      </main>
    </>
  );
};

export default Canvas;
