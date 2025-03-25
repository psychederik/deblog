import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/sections/Home';
import Blog from './components/sections/Blog';
import About from './components/sections/About';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="about" element={<About />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
