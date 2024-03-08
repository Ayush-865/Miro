import { Loader } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Info from "./Info";
import Participants from "./Participants";
import Toolbar from "./Toolbar";

const CanvasLoader = () => {
  return (
    <>
      <main className="h-screen w-screen relative bg-neutral-100 touch-none flex items-center justify-center">
        <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
        <Info.Skeleton />
        <Participants.Skeleton />
        <Toolbar.Skeleton />
      </main>
    </>
  );
};

export default CanvasLoader;
