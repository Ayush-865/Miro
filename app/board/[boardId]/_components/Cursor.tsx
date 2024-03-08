"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@/liveblocks.config";
import { MousePointer2 } from "lucide-react";
import { memo } from "react";

const Cursor = memo(({ connectionId }: { connectionId: number }) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user?.presence.cursor);

  const name = info?.name || "Anonymous";

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <>
      <foreignObject
        style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
        height={50}
        width={name.length * 12 + 25}
        className="relative drop-shadow-md"
      >
        <MousePointer2
          className="w-5 h-5"
          style={{
            fill: connectionIdToColor(connectionId),
            color: connectionIdToColor(connectionId),
          }}
        />
        <div
          className="absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold"
          style={{ backgroundColor: connectionIdToColor(connectionId) }}
        >
          {name}
        </div>
      </foreignObject>
    </>
  );
});

export default Cursor;

Cursor.displayName = "Cursor";
