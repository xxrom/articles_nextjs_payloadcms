import { memo } from "react";
import { CommentInput } from "./CommentInput";
import { Label } from "./ui/label";

export type Comment = {
  id: string;
  content: string;
};
export type Comments = Array<Comment>;

export type CommentsProps = {
  articleId: string;
  comments: Comments;
};

export const Comments = memo(async ({ articleId, comments }: CommentsProps) => (
  <div className="flex flex-col w-full mt-4">
    <div className='flex flex-col justify-center"'>
      <span className="w-fit p-4 bg-gray-200 rounded-md">{`Comments (${
        comments?.length || 0
      })`}</span>
    </div>

    {comments?.map((comment, index) => (
      <div key={comment.id} className="p-4 mt-4 bg-gray-200 rounded-md">
        <Label className="text-gray-500">{`Comment №${index + 1}`}</Label>
        <div>{comment.content}</div>
      </div>
    ))}

    <CommentInput articleId={articleId} />
  </div>
));
