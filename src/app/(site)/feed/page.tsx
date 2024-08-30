import { getPosts } from "../../../sanity/sanity-utils";
import FeedItem from "../../../components/Feed";
import RootLayout from '../layout';

export default async function Home() {
  const posts = await getPosts();

  return (
    <RootLayout pageName="Feed">
    <div className="py-5 container max-w-2xl">
      {posts?.length > 0 ? (
        posts.map((post: any) => <FeedItem key={post._id} feed={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
    </RootLayout>
  );
}