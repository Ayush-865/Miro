"use client";
import { Skeleton } from "@/components/ui/skeleton";
import ToolButton from "./ToolButton";
import {
  Circle,
  MousePointer,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";

const Toolbar = () => {
  return (
    <>
      <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
        <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadom-md">
          <ToolButton
            onClick={() => {}}
            label="Pointer"
            icon={MousePointer}
            isActive={false}
          />
          <ToolButton
            onClick={() => {}}
            label="Select"
            icon={MousePointer2}
            isActive={false}
          />
          <ToolButton
            onClick={() => {}}
            label="Text"
            icon={Type}
            isActive={false}
          />
          <ToolButton
            onClick={() => {}}
            label="Sticky Note"
            icon={StickyNote}
            isActive={false}
          />
          <ToolButton
            onClick={() => {}}
            label="Rectangle"
            icon={Square}
            isActive={false}
          />
          <ToolButton
            onClick={() => {}}
            label="Ellipse"
            icon={Circle}
            isActive={false}
          />
          <ToolButton
            onClick={() => {}}
            label="Pen"
            icon={Pencil}
            isActive={false}
          />
        </div>
        <div className="bg-white rounded-md p-1.5 flex flex-col shadow-md items-center ">
          <ToolButton
            onClick={() => {}}
            label="Undo"
            icon={Undo2}
            isActive={false}
            isDisabled={true}
          />
          <ToolButton
            onClick={() => {}}
            label="Redo"
            icon={Redo2}
            isActive={false}
            isDisabled={true}
          />
        </div>
      </div>
    </>
  );
};

export default Toolbar;

export function ToolbarSkeleton() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadom-md w-[100px]">
        <Skeleton className="h-8 w-full bg-muted-400" />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col shadow-md items-center w-[100px]">
        <div>
          <Skeleton className="h-8 w-full bg-muted-400" />
        </div>
        <div>
          <Skeleton className="h-8 w-full bg-muted-400" />
        </div>
      </div>
    </div>
  );
}
