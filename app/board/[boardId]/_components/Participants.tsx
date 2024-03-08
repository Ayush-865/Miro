"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Participants = () => {
  return (
    <>
      <div className="absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadom-md">
        hii
      </div>
    </>
  );
};

export default Participants;

export function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadom-md w-[100px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
}
