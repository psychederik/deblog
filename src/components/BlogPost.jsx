import { NavLink } from 'react-router-dom';

function Article({ title, date, author }) {
   return (
      <NavLink
         to={`./post/${title}`}
         className="flex border-b border-white/10 pt-15 pb-5"
      >
         <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-white/80">{title}</h2>
            <p className="font-medium text-[#4A6DA2]">
               {date} • {author}
            </p>
         </div>
      </NavLink>
   );
}

export default Article;
