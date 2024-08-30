const book = {
    name: "book",
    title: "Books",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          unique: true,
          slugify: (input: any) => {
            return input
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "");
          },
        },
        validation: (Rule: any) =>
          Rule.required().custom((fields: any) => {
            if (
              fields?.current !== fields?.current?.toLowerCase() ||
              fields?.current.split(" ").includes("")
            ) {
              return "Slug must be lowercase and not be included space";
            }
            return true;
          }),
      },
      {
        name: "author",
        title: "Author",
        type: "string",
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url'
      },
      {
        name: "coverImage",
        title: "Cover image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "finishedOn",
        title: "Finished on",
        type: "date",
      },
    ],
  
    preview: {
      select: {
        title: "title",
        author: "author",
        media: "coverImage",
      },
    },
  };
  export default book;