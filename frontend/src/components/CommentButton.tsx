"use client";

import { memo } from "react";
import { useFormStatus } from "react-dom";

export const CommentButton = memo(() => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={pending ? "bg-gray-800" : "bg-gray-200"}
      aria-disabled={pending}
    >
      Add
    </button>
  );
});
