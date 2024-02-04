import { fetchArticles } from "@/actions/articles";
import { Articles } from "@/components/Articles";
import { Skeleton } from "@/components/Skeleton";
import { Suspense } from "react";

const ArticlesPage = async () => {
  const articles = await fetchArticles();

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <Suspense fallback={<Skeleton />}>
        <Articles articles={articles} />
      </Suspense>
    </div>
  );
};

export default ArticlesPage;
