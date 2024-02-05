"use client";

import { CommentButton } from "./CommentButton";
import { memo, useCallback, useRef } from "react";
import { addCommentAction } from "@/actions/input";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export type CommentInputProps = {
  articleId: string;
};

export const CommentInput = memo(({ articleId }: CommentInputProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const onAddMessage = useCallback((formData: FormData) => {
    addCommentAction(formData, articleId);

    formRef?.current?.reset();
  }, []);

  return (
    <form
      ref={formRef}
      action={onAddMessage}
      className="flex flex-col mt-4 p-4 bg-gray-300 rounded-md"
    >
      <Label htmlFor="content">New Comment:</Label>

      <div className="flex mt-4">
        <Input
          id="content"
          required
          name="content"
          placeholder="Type your message here..."
          className="rounded-md mr-2"
        />

        <CommentButton />
      </div>
    </form>
  );
});
