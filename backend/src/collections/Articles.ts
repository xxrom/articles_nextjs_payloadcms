import { CollectionConfig } from "payload/types";

const DESCRIPTION_MAX_SIZE = 1024;

const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "Title",
    preview: (doc) => {
      console.log("doc", doc);

      if (doc?.id) {
        return `/api/articles/${doc.id}`;
      }

      return null;
    },
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
    admin: () => true,
  },
  auth: false,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Title",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      defaultValue: "Description",
      minLength: 5,
      maxLength: DESCRIPTION_MAX_SIZE,
      admin: {
        description: ({ path, value }) =>
          `${
            typeof value === "string"
              ? DESCRIPTION_MAX_SIZE - value?.length
              : DESCRIPTION_MAX_SIZE
          } characters left (field: ${path})`,
      },
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
      defaultValue: "Open",
    },
  ],
};

export default Articles;
