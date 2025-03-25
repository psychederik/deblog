import React from 'react';

function Article({ title, date, author, content }) {
   return (
      <section>
         <h1>{title}</h1>
         <p>
            {date} • {author}
         </p>
         <img src="" alt="" />
         <p>{content}</p>
      </section>
   );
}

export default Article;
