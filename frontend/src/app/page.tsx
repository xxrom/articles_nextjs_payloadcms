import { fetchArticles } from "@/actions/articles";
import { Articles } from "@/components/Articles";
import { SkeletonArticle } from "@/components/SkeletonArticle";
import { Suspense } from "react";

const ArticlesPage = async () => {
  const articles = await fetchArticles();

  return (
    <div className="flex min-h-screen flex-col items-center p-4 sm:p-12">
      <Suspense fallback={<SkeletonArticle />}>
        <Articles articles={articles} />
      </Suspense>
    </div>
  );
};

export default ArticlesPage;
