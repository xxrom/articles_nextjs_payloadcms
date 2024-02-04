import { sleep } from "@/utils/sleep";
import Link from "next/link";
import Image from "next/image";

export type Article = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  image: { url: string };
};

export type ArticleProps = Partial<Article>;

export const Article = async (props: ArticleProps) => {
  const isRefetchRequired =
    typeof props.id !== "undefined" && typeof props.title === "undefined";

  const fetchArticle = () =>
    fetch(`${process.env.SERVER_URL}/api/articles/${props.id}`, {
      cache: "no-store",
    }).then((res) => sleep(300 + Math.random() * 500).then(() => res.json()));

  const { id, title, description, buttonText, image } = isRefetchRequired
    ? await fetchArticle()
    : props;

  const isImageExists = typeof image?.url !== "undefined";

  console.log("image", image);

  return (
    <div className="p-2 my-4 bg-gray-50 rounded-md">
      <div>{id}</div>
      <div>{title}</div>
      {isImageExists && (
        <Image
          src={`${process.env.SERVER_URL}${image?.url}`}
          width={500}
          height={500}
          alt={image?.alt || "image"}
        />
      )}

      <div>{description}</div>

      <Link href={`/article/${id}`}>{buttonText}</Link>
    </div>
  );
};
