import { Article } from "@/components/Article";
import { Skeleton } from "@/components/Skeleton";
import { Suspense } from "react";

export type ArticleProps = {
  params: {
    slug: string;
  };
};

const ArticlePage = ({ params }: ArticleProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="flex min-h-screen flex-col items-center p-12">
        <div>Article</div>

        <Suspense fallback={<Skeleton />}>
          <Article id={params.slug} />
        </Suspense>
      </div>
    </div>
  );
};

export default ArticlePage;
