const thing = {
    name: "thing",
    title: "Things",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url'
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
        name: "reason",
        title: "Reason",
        type: "text",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: 'Category',
        name: 'category',
        type: 'reference',
        to: [
          {type: 'thingCategory'},
        ],
    },
    ],
  
    preview: {
      select: {
        title: "name",
        media: "image",
      },
    },
  };
  export default thing;