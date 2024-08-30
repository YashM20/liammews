// page.tsx
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout pageName="Home">
      <div className="py-5 container max-w-2xl">
        <h1 className='font-medium'>Liam Mews</h1>
        <h2 className='text-gray-500 font-medium mb-12'>Designer & Front-End Developer</h2>
        <p className=''>
          I'm currently working at <a href="https://makebuild.studio/">MakeBuild</a>, designing and <span className='font-mono'>building</span> next-level websites with Webflow. I'm also the founder of <a href="https://gooddesign.tools/">Good Design Tools</a> an online tool helping designers find the best tools to optimise their workflow.
        </p>
      </div>
    </RootLayout>
  );
}