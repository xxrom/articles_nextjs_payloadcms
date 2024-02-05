import { Article } from "@/components/Article";
import { Skeleton } from "@/components/Skeleton";
import { Comments } from "@/components/Comments";
import { Suspense } from "react";
import { fetchArticle } from "@/actions/article";
import { fetchComments } from "@/actions/comments";
import Link from "next/link";

export type ArticleProps = {
  params: {
    slug: string;
  };
};

const ArticlePage = async ({ params }: ArticleProps) => {
  const articleData = await fetchArticle(params.slug);
  const comments = await fetchComments(params.slug);

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <Link href={`/`} className="text-white">
        Back to Articles
      </Link>

      <div className="flex min-h-screen flex-col items-center p-12 min-w-[80vw]">
        <div className="p-2 bg-gray-300 rounded-md">Article</div>

        <Suspense fallback={<Skeleton />}>
          <Article id={params.slug} {...articleData} />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <Comments articleId={params.slug} comments={comments} />
        </Suspense>
      </div>
    </div>
  );
};

export default ArticlePage;
