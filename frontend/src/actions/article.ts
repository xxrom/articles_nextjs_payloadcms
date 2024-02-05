"use server";

export const fetchArticle = async (id: string) =>
  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles/${id}`, {
    cache: "no-store",
    next: {
      tags: ["article"],
    },
  }).then((res) => res.json());
