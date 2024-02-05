import Link from "next/link";
import Image from "next/image";
import { fetchArticle } from "@/actions/article";
import { memo } from "react";

export type Article = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  image: { url: string };
};

export type ArticleProps = Partial<Article> & Pick<Article, "id">;

export const Article = memo(async (props: ArticleProps) => {
  const isRefetchRequired =
    typeof props.id !== "undefined" && typeof props.title === "undefined";

  const { id, title, description, buttonText, image } = isRefetchRequired
    ? await fetchArticle(props.id)
    : props;

  const isImageExists = typeof image?.url !== "undefined";

  return (
    <div className="flex flex-col w-full p-2 my-4 bg-gray-50 rounded-md">
      <div>{id}</div>
      <div>{title}</div>
      {isImageExists && (
        <div
          style={{
            position: "relative",
            width: "auto",
            height: "300px",
            maxWidth: "500px",
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${image?.url}`}
            alt={image?.alt || "image"}
            sizes="(max-width: 500px) 50vw, (max-width: 768px) 30vw, (max-width: 1200px) 50vw, 20vw"
            quality={60}
            loading="lazy"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <div>{description}</div>

      <Link href={`/article/${id}`}>{buttonText}</Link>
    </div>
  );
});
