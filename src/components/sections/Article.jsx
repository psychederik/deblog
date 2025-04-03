import { MDXProvider } from '@mdx-js/react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';

const components = {
   code: (props) => (
      <code className="bg-gray-200 px-1 py-0.5 rounded">{props.children}</code>
   ),
};

function Article({ articles }) {
   const { slug } = useParams();
   const article = articles.find((a) => a.slug === slug);

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   if (!article) {
      return <p>Article not found (╯‵□′)╯︵┻━┻</p>;
   }

   const { Content, metadata } = article;
   const showSidebars = windowWidth >= 768; // md breakpoint
   const offset = 672 / 2 + 200 + 16;

   return (
      <section className="min-h-screen relative">
         <div className="flex justify-center">
            {/* Blog Posts Sidebar - Left */}
            {showSidebars && (
               <LeftSidebar windowWidth={windowWidth} offset={offset} />
            )}

            {/* Main Article Content - Center */}
            <div
               className="
                  prose prose-invert
                  flex flex-col justify-center
                  bg-black/20 rounded-xl
                  mb-20 p-5
                  text-lg text-white/90
                  max-w-2xl w-full
                  mx-4
               "
            >
               <div className="flex flex-col text-center">
                  <h1 className="!m-0">{metadata.title}</h1>
                  <p className="text-white/60">
                     {metadata.date} • {metadata.author}
                  </p>
               </div>
               <MDXProvider components={components}>
                  <Content />
               </MDXProvider>
            </div>

            {/* TOC Sidebar - Right */}
            {showSidebars && (
               <RightSidebar windowWidth={windowWidth} offset={offset} />
            )}
         </div>
      </section>
   );
}

export default Article;
