import React from 'react';

function About() {
   return (
      <section id="about" className="flex flex-col w-full max-w-full">
         <div className="lg:mx-40 md:mx-20 mx-5">
            <h1 className="font-black uppercase text-4xl text-[#A56EB6] pt-10">
               About
            </h1>
            <div className="flex flex-col gap-5 pt-10 text-lg text-white/80">
               <h2 className="font-bold text-2xl">Me</h2>
               <p>
                  • I started deblog.com while learning and practicing ReactJS.
               </p>
               <p>
                  • I also write about cryptocurrency technologies such as
                  Solidity and the utilization of Rust in dApps and Smart
                  Contracts.
               </p>
               <h2 className="font-bold text-2xl pt-5">Blog</h2>
               <p>
                  • I write articles on Web Development as I learn and explore
                  ReactJS and the MERN stack.
               </p>
               <p>
                  • I also write about cryptocurrency technologies such as
                  Solidity and the utilization of Rust in dApps and Smart
                  Contracts.
               </p>
            </div>
         </div>
      </section>
   );
}

export default About;
