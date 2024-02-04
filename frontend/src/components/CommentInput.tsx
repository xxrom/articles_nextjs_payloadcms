"use client";

import { CommentButton } from "./CommentButton";
import { useCallback, useRef } from "react";
import { addCommentAction } from "@/actions/input";

export type CommentInputProps = {
  articleId: string;
};

export const CommentInput = ({ articleId }: CommentInputProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const onAddMessage = useCallback((formData: FormData) => {
    addCommentAction(formData, articleId);

    formRef?.current?.reset();
  }, []);

  return (
    <form
      ref={formRef}
      action={onAddMessage}
      className="flex flex-col mt-4 p-2 bg-gray-500 rounded-md"
    >
      <label htmlFor="content">New Comment:</label>
      <input
        type="text"
        id="content"
        required
        name="content"
        className="my-2 rounded-sm"
      />
      <CommentButton />
    </form>
  );
};
