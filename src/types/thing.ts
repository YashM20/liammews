export type ThingCategory = {
    name: string,
    tagname: string,
    slug: {
      current: string,
    },
    _id?: number | string,
    _ref?: number | string,
  };

export type Thing = {
  _id: number,
  name: string,
  slug: {
    current: string,
  },
  reason: string,
  link: string,
  image: any,
  category: ThingCategory,
};