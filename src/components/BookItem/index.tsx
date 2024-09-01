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
      className="flex flex-col justify-center items-center stealth-link border dark:border-gray-800 rounded-xl p-6 mb-6 sm:mb-0 w-full aspect-square group hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors ease-in-out duration-300"
    >

        <Image
          className="shadow-lg rounded-sm w-24 mb-6 group-hover:scale-105 transition-transform ease-in-out duration-500"
            src={urlFor(book.coverImage)
              .url()}
              width={1000}
              height={1000}
              alt={book.title}
          />

        <div className="text-center text-pretty">
          <h2 className="leading-tight mb-2">{book.title}</h2>
          <p className="text-gray-500 dark:text-gray-300 text-xs">{book.author}</p>
        </div>

    </Link>
  );
};

export default BookItem;