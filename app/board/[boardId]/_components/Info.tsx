import { Skeleton } from "@/components/ui/skeleton";

const Info = () => {
  return (
    <>
      <div className="absolute top-2 left-2 bg-white px-1.5 rounded-md flex items-center shadom-md">
        info
      </div>
    </>
  );
};

export default Info;

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white px-1.5 rounded-md flex items-center shadom-md w-[100px]">
      <Skeleton className="h-12 w-full bg-muted-400" />
    </div>
  );
};
