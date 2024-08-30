import { Book } from "@/types/book";
import Link from "next/link";
import React from "react";
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import configuredSanityClient from "../../../client"

function urlFor (source: any) {
  return imageUrlBuilder(configuredSanityClient).image(source)
}


const BookItem = ({ book }: { book: Book }) => {
  return (
    <Link
      href={`${book.link}`}
      target="_blank"
      className="flex flex-row items-center gap-4 mb-6 stealth-link"
    >

        <Image
          className="border w-16"
            src={urlFor(book.coverImage)
              .url()}
              width={300}
              height={300}
              alt={book.title}
          />

        <div>
          <h2>{book.title}</h2>
          <p className="text-gray-500">{book.author}</p>
        </div>

    </Link>
  );
};

export default BookItem;