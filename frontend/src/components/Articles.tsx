import { sleep } from "@/utils/sleep";
import { Article } from "./Article";

export type Articles = Array<Article>;

export const Articles = async () => {
  const articles: Articles = await fetch(
    `${process.env.SERVER_URL}/api/articles/`
  ).then((res) =>
    sleep(2000).then(async () => {
      const data = await res.json();

      return data?.docs;
    })
  );

  console.log("articles", articles);

  return (
    <div>
      <div className='flex flex-col justify-center"'>
        <span className="w-fit p-2 bg-gray-300 rounded-md">Articles</span>
      </div>

      {articles?.map((article) => <Article key={article.id} {...article} />)}
    </div>
  );
};
