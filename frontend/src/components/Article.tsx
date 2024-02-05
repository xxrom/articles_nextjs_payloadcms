import Link from "next/link";
import Image from "next/image";
import { fetchArticle } from "@/actions/article";
import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export type Article = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  image: { url: string };

  isButtonHidden?: boolean;
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
    <Card className="flex flex-wrap sm:flex-nowrap bg-gray-300 mt-4 w-full">
      <CardHeader className="flex flex-1 basis-1/2 p-4 sm:p-6">
        {isImageExists && (
          <div
            className="rounded-md overflow-hidden"
            style={{
              position: "relative",
              width: "auto",
              height: "300px",
              maxWidth: "500px",
              minWidth: "210px",
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}${image?.url}`}
              alt={image?.alt || "image"}
              sizes="(max-width: 500px) 80vw, (max-width: 768px) 30vw, (max-width: 1200px) 40vw, 20vw"
              quality={60}
              loading="eager"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </CardHeader>

      <CardContent className="flex flex-col flex-1 basis-1/2 p-4 sm:p-6">
        <CardTitle className="break-all">{title}</CardTitle>

        <p className="py-6 text-pretty break-all">{description}</p>

        {!props.isButtonHidden && (
          <Link href={`/article/${id}`} className="w-fit">
            <Button>{buttonText}</Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
});
