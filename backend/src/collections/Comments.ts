import { CollectionConfig } from "payload/types";
import { accessEveryone } from "./Articles";

const Comments: CollectionConfig = {
  slug: "commentsList",
  auth: false,
  admin: {
    useAsTitle: "articleId",
  },
  ...accessEveryone,
  fields: [
    {
      name: "articleId",
      type: "text",
    },
    {
      name: "comments", // required
      type: "array", // required
      label: "Comments",
      labels: {
        singular: "Comment",
        plural: "Comments",
      },
      fields: [
        {
          name: "content",
          type: "text",
        },
      ],
    },
  ],
};

export default Comments;
