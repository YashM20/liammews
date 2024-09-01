import { Stack } from "@/types/stack";
import Link from "next/link";
import React from "react";
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import configuredSanityClient from "../../../client"

function urlFor (source: any) {
  return imageUrlBuilder(configuredSanityClient).image(source)
}

const StackItem = ({ stack }: { stack: Stack }) => {
  return (
    <Link
      href={stack.link}
      target="_blank"
      className="flex flex-row items-center gap-4 mb-6 stealth-link"
    >
         
          <Image
          className="border w-16 aspect-square rounded-xl"
            src={urlFor(stack.icon)
              .url()}
              width={300}
              height={300}
              alt={stack.name}
          />
        
        <h3>
          {stack.name}
        </h3>

    </Link>
  );
};

export default StackItem;