import { Article } from "@/components/Article";
import { SkeletonArticle } from "@/components/SkeletonArticle";
import { Comments } from "@/components/Comments";
import { Suspense } from "react";
import { fetchArticle } from "@/actions/article";
import { fetchComments } from "@/actions/comments";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export type ArticleProps = {
  params: {
    slug: string;
  };
};

const ArticlePage = async ({ params }: ArticleProps) => {
  const articleData = await fetchArticle(params.slug);
  const comments = await fetchComments(params.slug);

  return (
    <div className="flex min-h-screen flex-col items-center p-4 sm:p-12">
      <div className="flex flex-col justify-center items-center min-h-screen max-w-[1200px] p-2 sm:p-4">
        <Link href={`/`}>
          <Button variant="outline">Back to Articles</Button>
        </Link>

        <div className="flex min-h-screen flex-col items-center p-2 sm:p-12 ">
          <Label className="p-2 px-4 text-md bg-gray-100 rounded-md">{`Article ID: ${params.slug}`}</Label>

          <Suspense fallback={<SkeletonArticle />}>
            <Article id={params.slug} isButtonHidden {...articleData} />
          </Suspense>

          <Separator className="mt-4" />

          <Suspense fallback={<SkeletonArticle />}>
            <Comments articleId={params.slug} comments={comments} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
