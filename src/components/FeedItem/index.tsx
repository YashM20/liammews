import { Feed } from "@/types/feed";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import configuredSanityClient from "../../../client"
import RenderBodyContent from "@/components/RenderBodyContent";

function urlFor (source: any) {
  return imageUrlBuilder(configuredSanityClient).image(source)
}

const FeedItem: React.FC<{ post: Feed }> = ({ post }) => {
  return (
    <article className="flex flex-row gap-2 mb-40 last-of-type:mb-0">
      <div className="flex-shrink-0 w-36 text-xs text-gray-500 dark:text-gray-300 mt-1 hidden md:block">
        <p className="mb-1">
          {format(new Date(post.publishedAt), "dd MMMM yyyy")}
        </p>

      {post.category.name && (
        <p>
          {post.category.name}
        </p>
      )}
      </div>

      <div className="flex flex-col">

        <div className="mb-8">
          <h2 className="font-medium mb-1 md:mb-2">{post.title}</h2>

          <div className="flex-shrink-0 text-xs text-gray-500 dark:text-gray-300 mt-1 flex gap-1 mb-2 md:hidden">
            <p className="mb-1">
              {format(new Date(post.publishedAt), "dd MMMM yyyy")} - {post.category.name}
            </p>
          </div>

          {post.summaryText ? (

            <div>
              <p className="prose dark:prose-invert line-clamp-3 mb-3">
                {post.summaryText}
              </p>

              <Link href={`/feed/${post.slug.current}`} className="stealth-link text-sm font-medium">
                Continue reading
              </Link>
            </div>

            ) : (

              <div id="full-text" className="prose dark:prose-invert">
                <RenderBodyContent post={post} />
              </div>

            )}

        </div>

      <div className="flex flex-row gap-4">

      {post.mainImage && (
        <div>
          <Image
            className="border dark:border-gray-800 rounded-xl mb-3"
            src={urlFor(post.mainImage).url()}
            width={2400}
            height={2400}
            alt={post.mainImageCaption}
          />

          <p className="text-xs text-gray-500 dark:text-gray-300">{post.mainImageCaption}</p>
        </div>
      )}

      {post.secondaryImage && (
        <div>
          <Image
            className="border dark:border-gray-800 rounded-xl mb-3"
            src={urlFor(post.secondaryImage).url()}
            width={2400}
            height={2400}
            alt={post.secondaryImageCaption}
          />

          <p className="text-xs text-gray-500 dark:text-gray-300">{post.secondaryImageCaption}</p>
        </div>
      )}


      </div>


      </div>
    </article>
  );
};

export default FeedItem;