import { getThings } from "../../../sanity/sanity-utils";
import ThingItem from "../../../components/Thing";
import RootLayout from '../layout';

export default async function Things() {
  const things = await getThings();

  return (
    <RootLayout pageName="Stack">
    <div className="grid grid-cols-4 gap-6">
      {things?.length > 0 ? (
        things.map((thing: any) => <ThingItem key={thing._id} thing={thing} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
    </RootLayout>
  );
}