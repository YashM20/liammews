const app = {
    name: "app",
    title: "Apps",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
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
        title: 'Categories',
        name: 'categories',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [
                    {type: 'appCategory'},
                ],
            },
            
        ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    },
      {
        name: "icon",
        title: "Icon",
        type: "image",
        options: {
          hotspot: true,
        },
        validation: (Rule: any) => Rule.required(),
      },
    ],
  
    preview: {
      select: {
        title: "name",
        media: "icon",
      },
    },
  };
  export default app;