import { groq } from "next-sanity";

const postData = `{
  title,
  slug,
  shortText,
  mainImage,
  mainImageCaption,
  secondaryImage,
  secondaryImageCaption,
  summaryText,
  publishedAt,
  body,
  category->{
    _id,
    name,
    tagname,
    slug,
  },
}`;

const bookData = `{
  title,
  author,
  link,
  slug,
  coverImage,
  finishedOn,
}`;

const stackData = `{
  name,
  link,
  slug,
  icon,
  categories->{
    _id,
    name,
    tagname,
    slug,
  },
}`;

const thingData = `{
  name,
  slug,
  link,
  image,
  category->{
    _id,
    name,
    tagname,
    slug,
  },
}`;

export const postQuery = groq`*[_type == "post"] | order(publishedAt desc) ${postData}`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] ${postData}`;

export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] ${postData}`;

export const bookQuery = groq`*[_type == "book"] | order(finishedOn desc) ${bookData}`;

export const stackQuery = groq`*[_type == "app"] ${stackData}`;

export const thingQuery = groq`*[_type == "thing"] | order(name asc) ${thingData}`;