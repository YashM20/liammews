export type BookCategory = {
    name: string,
    tagname: string,
    slug: {
      current: string,
    },
    _id?: number | string,
    _ref?: number | string,
  };

export type Book = {
  _id: number,
  title: string,
  slug: {
    current: string,
  },
  author: string,
  link: string,
  coverImage: any,
  category: BookCategory,
  finishedOn: string,
};