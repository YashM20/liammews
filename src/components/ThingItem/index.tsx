import { Thing } from "@/types/thing";
import Link from "next/link";
import React from "react";
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import configuredSanityClient from "../../../client"

function urlFor (source: any) {
  return imageUrlBuilder(configuredSanityClient).image(source)
}

const ThingItem = ({ thing }: { thing: Thing }) => {
  return (
    <Link
      href={`${thing.link}`}
      target="_blank"
      className="stealth-link"
    >

          <Image
          className="border w-full aspect-square mb-2 rounded-xl"
            src={urlFor(thing.image)
              .url()}
              width={1200}
              height={1200}
              alt={thing.name}
          />

          <div className="flex flex-row justify-between items-center">
            <h3 className="text-sm">
              {thing.name}
            </h3>

            <p className="font-mono uppercase text-xs text-gray-500">
              {thing.category.name}
            </p>
          </div>

    </Link>
  );
};

export default ThingItem;