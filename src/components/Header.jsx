import { Link, NavLink } from 'react-router-dom';

function Header() {
   const activeStyles = {
      textDecoration: 'underline',
      color: '#fff',
   };

   return (
      <header className="flex justify-center items-center px-40 pt-10">
         <Link
            className="mr-auto px-5 py-5 bg-[#659EA9] text-4xl font-black text-white rounded-xl"
            to="/"
         >
            deblog
         </Link>
         <nav className="flex gap-10">
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
      </header>
   );
}

export default Header;
