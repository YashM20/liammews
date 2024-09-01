import { getPosts } from "../../../sanity/sanity-utils";
import FeedItem from "../../../components/FeedItem";
import Layout from '@/components/Layout';

export default async function Home() {
  const posts = await getPosts();

  return (
    <Layout pageName="feed">


    <div className="py-5 container-md">
      {posts?.length > 0 ? (
        posts.map((post: any) => <FeedItem key={post._id} post={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>


    </Layout>
  );
}