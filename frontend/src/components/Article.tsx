import { sleep } from "@/utils/sleep";
import Link from "next/link";

export type Article = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
};

export type ArticleProps = Article;

export const Article = async ({
  id,
  title,
  description,
  buttonText,
}: ArticleProps) => {
  return (
    <div className="p-2 my-4 bg-gray-50 rounded-md">
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>

      <Link href={`/article/${id}`}>{buttonText}</Link>
    </div>
  );
};
