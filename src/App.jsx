import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/sections/Home';
import Blog from './components/sections/Blog';
import About from './components/sections/About';
import Article from './components/sections/Article';
import Page404 from './components/Page404';

function App() {
   const [articles, setArticles] = useState([]);

   useEffect(() => {
      // Dynamically import all MDX files from src/articles
      const importArticles = async () => {
         const articleModules = import.meta.glob('./articles/*.mdx', {
            eager: true,
         });
         const loadedArticles = Object.entries(articleModules).map(
            ([, module]) => ({
               slug: module.metadata.slug,
               metadata: module.metadata,
               Content: module.default, // The MDX content as a component
            })
         );
         setArticles(loadedArticles);
      };
      importArticles();
   }, []);
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="blog" element={<Blog articles={articles} />} />
                  <Route
                     path="blog/:slug"
                     element={<Article articles={articles} />}
                  />
                  <Route path="about" element={<About />} />

                  <Route path="*" element={<Page404 />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
