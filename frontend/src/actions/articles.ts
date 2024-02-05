"use server";

import { Articles } from "@/components/Articles";
import { REQUEST_LIMIT } from "@/utils/constants";
import { sleep } from "@/utils/sleep";

export const fetchArticles = async (
  page = 1,
  limit = REQUEST_LIMIT
): Promise<Articles> =>
  fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles/?limit=${limit}&page=${page}`,
    {
      cache: "no-store",
      next: {
        tags: ["articles"],
      },
    }
  ).then((res) =>
    sleep(500).then(async () => {
      const data = await res.json();

      return data?.docs;
    })
  );
