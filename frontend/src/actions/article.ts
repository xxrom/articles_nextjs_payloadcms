"use server";

import { sleep } from "@/utils/sleep";

export const fetchArticle = async (id: string) =>
  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles/${id}`, {
    cache: "no-store",
    next: {
      tags: ["article"],
    },
  }).then((res) => sleep(500 + Math.random() * 500).then(() => res.json()));
