import { CollectionConfig } from "payload/types";

const DESCRIPTION_MAX_SIZE = 1024;

export const accessEveryone = {
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
    admin: () => true,
  },
};

const Articles: CollectionConfig = {
  slug: "articles",
  auth: false,
  admin: {
    useAsTitle: "title",
  },
  ...accessEveryone,
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
    {
      name: "image",
      type: "upload",
      required: true,
      relationTo: "media",
    },
  ],
};

export default Articles;
