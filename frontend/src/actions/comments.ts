"use server";

import type { Comments } from "@/components/Comments";
import qs from "qs";

export const fetchComments = async (articleId: string): Promise<Comments> => {
  const queryStr = qs.stringify(
    {
      where: {
        articleId: {
          equals: articleId,
        },
      },
    },
    { addQueryPrefix: true }
  );

  return await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/commentsList/${queryStr}`,
    {
      cache: "no-store",
      next: {
        tags: ["comments"],
      },
    }
  ).then(async (res) => {
    try {
      const data = await res?.json();

      return data?.docs[0]?.comments;
    } catch (e) {
      return [];
    }
  });
};
