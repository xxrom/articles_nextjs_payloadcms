"use server";

import { revalidateTag } from "next/cache";

export const addCommentAction = async (
  formData: FormData,
  articleId: string
) => {
  "use server";

  const rawFormData = {
    articleId,
    content: formData.get("content"),
  };

  // mutate data
  await fetch(`${process.env.SERVER_URL}/api/commentsList/append`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...rawFormData,
    }),
    cache: "no-store",
  });

  // revalidate cache
  revalidateTag("comments");
};
