import { Article } from "./Article";
import { Suspense } from "react";
import { Skeleton } from "./Skeleton";

export type Articles = Array<Article>;
export type ArticlesProps = {
  articles: Articles;
};

export const Articles = async ({ articles }: ArticlesProps) => {
  return (
    <div>
      <div className='flex flex-col justify-center"'>
        <span className="w-fit p-2 bg-gray-300 rounded-md">Articles</span>
      </div>

      {articles?.map((article) => (
        <Suspense fallback={<Skeleton />}>
          <Article key={article.id} {...article} />
        </Suspense>
      ))}
    </div>
  );
};
