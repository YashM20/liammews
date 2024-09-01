import { getThings } from "../../../sanity/sanity-utils";
import ThingItem from "../../../components/ThingItem";
import Layout from '@/components/Layout';

export default async function Things() {
  const things = await getThings();

  return (
    <Layout pageName="things">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {things?.length > 0 ? (
        things.map((thing: any) => <ThingItem key={thing._id} thing={thing} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
    </Layout>
  );
}