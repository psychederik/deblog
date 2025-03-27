import React from 'react';
import MarkdownComponent from '../MarkdownComponent';

function Article({ title, date, author, content }) {
   return (
      <section id="article" className="prose">
         <MarkdownComponent />
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
