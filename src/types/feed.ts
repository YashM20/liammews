import { PortableTextBlock } from "sanity";

export type FeedCategory = {
  name: string,
  tagname: string,
  slug: {
    current: string,
  },
  _id?: number | string,
  _ref?: number | string,
};

export type Feed = {
_id: number,
title: string,
slug: {
  current: string,
},
body: PortableTextBlock[],
mainImage: any,
mainImageCaption: string,
secondaryImage: any,
secondaryImageCaption: string,
summaryText: string,
category: FeedCategory,
publishedAt: string,
};