import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import { postQuery, postQueryBySlug, thingQuery, stackQuery, bookQuery } from "./sanity-query";
import { Feed } from "../types/feed"
import { Book } from "@/types/book";
import { Stack } from "@/types/stack";
import { Thing } from "@/types/thing";


export const client = createClient(clientConfig);
export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig).image(source);
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string,
  qParams: QueryParams,
  tags: string[],
}): Promise<QueryResponse> {
  return (
    client.fetch <
    QueryResponse >
    (query,
    qParams,
    {
      cache: "force-cache",
      next: { tags },
    })
  );
}

export const getPostBySlug = async (slug: string) => {
  const data: Feed = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["feed", "category"],
  });

  return data;
};

export const getThings = async () => {
  const data: Thing[] = await sanityFetch({
    query: thingQuery,
    qParams: {},
    tags: ["thing", "category"],
  });
  return data;
};

export const getBooks = async () => {
  const data: Book[] = await sanityFetch({
    query: bookQuery,
    qParams: {},
    tags: ["book"],
  });
  return data;
};

export const getStacks = async () => {
  const data: Stack[] = await sanityFetch({
    query: stackQuery,
    qParams: {},
    tags: ["stack", "category"],
  });
  return data;
};

export const getPosts = async () => {
  const data: Feed[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["feed", "category"],
  });
  return data;
};