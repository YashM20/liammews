import { getBooks } from "../../../sanity/sanity-utils";
import BookItem from "../../../components/Book";
import RootLayout from '../layout';

export default async function Book() {
  const books = await getBooks();

  return (
    <RootLayout pageName="Books">
    <div className="container max-w-2xl py-5">
      {books?.length > 0 ? (
        books.map((book: any) => <BookItem key={book._id} book={book} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
    </RootLayout>
  );
}