import { Skeleton } from "@/components/ui/skeleton";

const Toolbar = () => {
  return (
    <>
      <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
        <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadom-md">
          Toolbar
        </div>
        <div className="bg-white rounded-md p-1.5 flex flex-col shadow-md items-center ">
          <div>Undo</div>
          <div>Redo</div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;

Toolbar.Skeleton = function ToolbarSkeleton() {
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
};
