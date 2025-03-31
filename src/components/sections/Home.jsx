import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
   return (
      <section className="flex justify-center max-h-screen">
         <div id="home" className="flex justify-center items-center pt-40">
            <div className="flex flex-col">
               <p className="text-xl font-light leading-10 text-white mb-3 uppercase tracking-widest">
                  psycheDerik's Coding Blog
               </p>
               <h1 className="!text-white text-6xl font-bold mb-4 pb-5">
                  Learning to Teach,
                  <br /> Teaching to Learn.
               </h1>
               <div className="flex space-x-4">
                  <NavLink
                     to="blog"
                     className="flex justify-center w-full border-1 border-[#A56EB6] bg-[#A56EB6] hover:bg-[#9762a7] text-white text-2xl font-semibold py-5 px-10 rounded-xl"
                  >
                     Blog
                  </NavLink>
                  <NavLink
                     to="#"
                     className="flex justify-center w-full border-1 border-rounded-10 border-[#A56EB6] hover:bg-[#A56EB6] text-white text-2xl font-semibold py-5 px-10 rounded-xl"
                  >
                     Portfolio
                  </NavLink>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Home;
