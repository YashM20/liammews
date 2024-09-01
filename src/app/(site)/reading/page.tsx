import { getBooks } from "../../../sanity/sanity-utils";
import BookItem from "../../../components/BookItem";
import Layout from '@/components/Layout';

export default async function Book() {
  const books = await getBooks();

  return (
    <Layout pageName="reading">
    <div className="container max-w-2xl sm:grid sm:grid-cols-2 gap-6">
      {books?.length > 0 ? (
        books.map((book: any) => <BookItem key={book._id} book={book} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
    </Layout>
  );
}