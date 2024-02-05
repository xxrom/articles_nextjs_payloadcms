"use client";

import { memo } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export const CommentButton = memo(() => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="max-w-20"
      disabled={pending}
      aria-disabled={pending}
    >
      Add
    </Button>
  );
});
