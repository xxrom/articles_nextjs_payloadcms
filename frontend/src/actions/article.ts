"use server";

import { sleep } from "@/utils/sleep";

export const fetchArticle = async (id: string) =>
  fetch(`${process.env.SERVER_URL}/api/articles/${id}`, {
    cache: "no-store",
    next: {
      tags: ["article"],
    },
  }).then((res) => sleep(1000 + Math.random() * 500).then(() => res.json()));
