import { Articles } from "@/components/Articles";
import { sleep } from "@/utils/sleep";

export const fetchArticles = async (): Promise<Articles> =>
  fetch(`${process.env.SERVER_URL}/api/articles/`, {
    cache: "no-store",
    next: {
      tags: ["articles"],
    },
  }).then((res) =>
    sleep().then(async () => {
      const data = await res.json();

      return data?.docs;
    })
  );
