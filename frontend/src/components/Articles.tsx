"use client";

import { Article } from "./Article";
import { Suspense, memo, useCallback, useState } from "react";
import { Skeleton } from "./Skeleton";
import { sleep } from "@/utils/sleep";
import { REQUEST_LIMIT } from "@/utils/constants";

export type Articles = Array<Article>;
export type ArticlesProps = {
  articles: Articles;
};

export const Articles = memo(({ articles }: ArticlesProps) => {
  const [allArticles, setAllArticles] = useState(articles);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onLoadMore = useCallback(() => {
    const loadNextPage = async () => {
      setIsLoading(true);

      const newArticles: Articles = await fetch(
        `${
          process.env.NEXT_PUBLIC_SERVER_URL
        }/api/articles/?limit=${REQUEST_LIMIT}&page=${page + 1}`,
        {
          cache: "no-store",
        }
      ).then((res) =>
        sleep(2000).then(async () => {
          const data = await res.json();

          return data?.docs;
        })
      );

      setAllArticles((state) => [...state, ...newArticles]);
      setPage(page + 1);
      setIsLoading(false);
    };

    loadNextPage();
  }, [page]);

  return (
    <div className="min-w-[50vw] max-w-[1200px]">
      <div className='flex flex-col justify-center"'>
        <span className="w-fit p-2 bg-gray-300 rounded-md">Articles</span>
      </div>
      <div>{`Pages: ${page}`}</div>

      {allArticles?.map((article) => (
        <Suspense key={article.id} fallback={<Skeleton />}>
          <Article key={article.id} {...article} />
        </Suspense>
      ))}

      <button onClick={onLoadMore} className={"bg-gray-300"}>
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
});
