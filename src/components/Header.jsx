import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
   const activeStyles = {
      textDecoration: 'underline',
      color: '#fff',
   };

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <header className="flex justify-center content-center items-center lg:mx-40 md:mx-20 mx-5 min-h-40">
         <Link
            className="mr-auto px-4 py-4 bg-[#659EA9] text-4xl font-black text-white rounded-xl"
            to="/"
         >
            deblog
         </Link>

         <button
            className="md:hidden text-white text-3xl z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
            {isMenuOpen ? '✕' : '☰'}
         </button>

         <nav className="hidden md:flex gap-10">
            <NavLink
               to="blog"
               style={({ isActive }) => (isActive ? activeStyles : null)}
               className="text-xl font-semibold text-white/70 hover:text-white"
            >
               Blog
            </NavLink>
            <NavLink
               to="about"
               style={({ isActive }) => (isActive ? activeStyles : null)}
               className="text-xl font-semibold text-white/70 hover:text-white"
            >
               About
            </NavLink>
         </nav>

         <div
            className={`${
               isMenuOpen ? 'flex' : 'hidden'
            } md:hidden flex-col gap-6 absolute justify-center items-center top-0 left-0 w-full h-screen z-10 bg-gray-900`}
         >
            <NavLink
               to="blog"
               style={({ isActive }) => (isActive ? activeStyles : null)}
               className="text-xl font-semibold text-white/70 hover:text-white"
               onClick={() => setIsMenuOpen(false)}
            >
               Blog
            </NavLink>
            <NavLink
               to="about"
               style={({ isActive }) => (isActive ? activeStyles : null)}
               className="text-xl font-semibold text-white/70 hover:text-white"
               onClick={() => setIsMenuOpen(false)}
            >
               About
            </NavLink>
         </div>
      </header>
   );
}

export default Header;
