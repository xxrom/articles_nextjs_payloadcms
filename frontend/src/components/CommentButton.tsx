"use client";

import { useFormStatus } from "react-dom";

export const CommentButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={pending ? "bg-gray-300" : ""}
      aria-disabled={pending}
    >
      Add
    </button>
  );
};
