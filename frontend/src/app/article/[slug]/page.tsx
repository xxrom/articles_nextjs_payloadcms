//import { Suspense } from "react";

export type ArticleProps = {
  params: {
    slug: string;
  };
};

const Article = ({ params }: ArticleProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <div>Article !</div>
      <div>{`ID: ${params.slug}`}</div>
    </div>
  );
};

export default Article;
