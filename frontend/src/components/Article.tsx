import { sleep } from "@/utils/sleep";
import Link from "next/link";

export type Article = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
};

export type ArticleProps = Partial<Article>;

export const Article = async (props: ArticleProps) => {
  const isRefetchRequired =
    typeof props.id !== "undefined" && typeof props.title === "undefined";

  const fetchArticle = () =>
    fetch(`${process.env.SERVER_URL}/api/articles/${props.id}`, {
      cache: "no-store",
    }).then((res) => sleep(2000 + Math.random() * 1000).then(() => res.json()));

  const { id, title, description, buttonText } = isRefetchRequired
    ? await fetchArticle()
    : props;

  return (
    <div className="p-2 my-4 bg-gray-50 rounded-md">
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
      <Link href={`/article/${id}`}>{buttonText}</Link>
    </div>
  );
};
