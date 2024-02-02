import { sleep } from "@/utils/sleep";
import { Article } from "./Article";
import { Suspense } from "react";
import { Skeleton } from "./Skeleton";

export type Articles = Array<Article>;

export const Articles = async () => {
  const articles: Articles = await fetch(
    `${process.env.SERVER_URL}/api/articles/`,
    { cache: "no-store" }
  ).then((res) =>
    sleep(2000).then(async () => {
      const data = await res.json();

      return data?.docs;
    })
  );

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
