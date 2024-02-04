import { CommentInput } from "./CommentInput";

export type Comment = {
  id: string;
  content: string;
};
export type Comments = Array<Comment>;

export type CommentsProps = {
  articleId: string;
  comments: Comments;
};

export const Comments = async ({ articleId, comments }: CommentsProps) => {
  return (
    <div className="flex flex-col w-full mt-4">
      <div className='flex flex-col justify-center"'>
        <span className="w-fit p-2 bg-gray-300 rounded-md">{`Comments (${
          comments?.length || 0
        })`}</span>
      </div>

      {comments?.map((comment, index) => (
        <div key={comment.id} className="p-2 mt-2 bg-gray-100 rounded-md">
          <div>{`Comment: №${index}`}</div>
          <div>{comment.content}</div>
        </div>
      ))}

      <CommentInput articleId={articleId} />
    </div>
  );
};
