const post = {
    name: "post",
    title: "Posts",
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
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "body",
        title: "Body",
        type: "blockContent",
      },
      {
        title: 'Category',
        name: 'category',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [
                    {type: 'postCategory'},
                ],
            },
            
        ],
    },
    ],
  
    preview: {
      select: {
        title: "title",
        media: "mainImage",
      },
    },
  };
  export default post;