export type StackCategory = {
    name: string,
    tagname: string,
    slug: {
      current: string,
    },
    _id?: number | string,
    _ref?: number | string,
  };

export type Stack = {
  _id: number,
  name: string,
  slug: {
    current: string,
  },
  link: string,
  icon: any,
  category: StackCategory,
};