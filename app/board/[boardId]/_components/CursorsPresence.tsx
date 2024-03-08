"use client";

import { memo } from "react";
import { useOthersConnectionIds } from "@/liveblocks.config";
import Cursor from "./Cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((id) => (
        <Cursor key={id} connectionId={id} />
      ))}
    </>
  );
};

const CursorsPresence = memo(() => {
  return (
    <>
      <Cursors />
    </>
  );
});

export default CursorsPresence;

CursorsPresence.displayName = "CursorsPresence";
