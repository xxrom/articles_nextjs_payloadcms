"use client";

import { Article } from "./Article";
import { Suspense, memo, useCallback, useState } from "react";
import { SkeletonArticle } from "./SkeletonArticle";
import { sleep } from "@/utils/sleep";
import { REQUEST_LIMIT } from "@/utils/constants";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

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
      ).then(async (res) => {
        const data = await res.json();

        return data?.docs;
      });

      setAllArticles((state) => [...state, ...newArticles]);
      setPage(page + 1);
      setIsLoading(false);
    };

    loadNextPage();
  }, [page]);

  return (
    <div className="flex flex-col justify-center items-center max-w-[1200px]">
      <div className='flex flex-col justify-center"'>
        <Label className="w-fit p-2 px-4 text-md bg-gray-300 rounded-md">
          Articles
        </Label>
      </div>

      {allArticles?.map((article) => (
        <Suspense key={article.id} fallback={<SkeletonArticle />}>
          <Article key={article.id} {...article} />
        </Suspense>
      ))}

      <Button onClick={onLoadMore} variant="outline" className="mt-6 max-w-24">
        {isLoading ? "Loading..." : "Load more"}
      </Button>
    </div>
  );
});
