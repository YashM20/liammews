// page.tsx
import Layout from '@/components/Layout';

export default async function Home() {
  return (
    <Layout pageName="index">
      <div className="py-5 container-md">

          <h1 className='mb-12'>Liam Mews</h1>


        <p className='prose dark:prose-invert'>
        Occaecat est labore labore Lorem quis in Lorem irure fugiat occaecat ex est. Occaecat deserunt et quis elit enim minim occaecat est. Culpa elit sint ad pariatur irure consectetur pariatur commodo. Irure do quis enim est aute Lorem do amet ipsum aute aute proident aliquip nulla. Irure consectetur laboris qui deserunt nulla proident. Dolor esse excepteur voluptate consectetur do laborum qui. Laboris enim non esse.
        </p>
      </div>
    </Layout>
  );
}