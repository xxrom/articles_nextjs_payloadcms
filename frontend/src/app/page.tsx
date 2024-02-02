import { Articles } from "@/components/Articles";
import { Skeleton } from "@/components/Skeleton";
import { Suspense } from "react";

const ArticlesPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <Suspense fallback={<Skeleton />}>
        <Articles />
      </Suspense>
    </div>
  );
};

export default ArticlesPage;
