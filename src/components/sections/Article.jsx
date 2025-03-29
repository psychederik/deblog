import { useParams } from 'react-router-dom';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Article({ articles }) {
   const { slug } = useParams();
   const article = articles.find((a) => a.slug === slug);

   if (!article) {
      return <p>Article not found (╯‵□′)╯︵┻━┻</p>;
   }

   const { Content, metadata } = article;

   return (
      <section id="article" className="flex justify-center max-w-full">
         <div className="prose prose-invert flex flex-col justify-center bg-sky-900/50 rounded-xl mb-20 p-5">
            <div className="flex flex-col text-center">
               <h1>{metadata.title}</h1>
               <p>
                  {metadata.date} • {metadata.author}
               </p>
            </div>
            <div className="flex flex-col text-left">
               <Content /> {/* Render MDX content*/}
            </div>
         </div>
      </section>
   );
}

export default Article;
