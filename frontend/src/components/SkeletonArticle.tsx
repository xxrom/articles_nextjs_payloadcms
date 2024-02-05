import { memo } from "react";
import { Skeleton } from "./ui/skeleton";

export const SkeletonArticle = memo(() => (
  <div className="flex items-center space-x-4 mt-6">
    <Skeleton className="h-24 w-24 rounded-md border-2 border-slate-300" />
    <div className="space-y-2">
      <Skeleton className="h-12 w-[350px] border-2 border-slate-300" />
      <Skeleton className="h-12 w-[300px] border-2 border-slate-300" />
    </div>
  </div>
));
