import { getStacks } from "../../../sanity/sanity-utils";
import StackItem from "../../../components/StackItem";
import Layout from '@/components/PageLayout';

export default async function Stack() {
  const stacks = await getStacks();

  return (
    <Layout pageName="stack">
    <div className="py-5 container max-w-2xl">
      {stacks?.length > 0 ? (
        stacks.map((stack: any) => <StackItem key={stack._id} stack={stack} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
    </Layout>
  );
}