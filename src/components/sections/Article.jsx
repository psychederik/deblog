import { MDXProvider } from '@mdx-js/react';
import { useParams } from 'react-router-dom';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const components = {
   code: (props) => (
      <code className="bg-gray-200 px-1 py-0.5 rounded">{props.children}</code>
   ),
};

function Article({ articles }) {
   const { slug } = useParams();
   const article = articles.find((a) => a.slug === slug);

   if (!article) {
      return <p>Article not found (╯‵□′)╯︵┻━┻</p>;
   }

   const { Content, metadata } = article;

   return (
      <section id="article" className="flex justify-center max-w-full">
         <div className="prose prose-invert flex flex-col justify-center bg-black/20 rounded-xl mb-20 p-5 text-lg text-white/90">
            <div className="flex flex-col text-center">
               <h1 className="!m-0">{metadata.title}</h1>
               <p className="text-white/60">
                  {metadata.date} • {metadata.author}
               </p>
            </div>
            {/* <div className="prose prose-invert flex flex-col text-left"> */}
            <MDXProvider components={components}>
               <Content /> {/* Render MDX content*/}
            </MDXProvider>

            {/* </div> */}
         </div>
      </section>
   );
}

export default Article;
