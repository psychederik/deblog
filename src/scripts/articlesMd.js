const articlesContext = require.context('../articles', false, /\.md$/);

const articles = articlesContext.keys().map((key) => {
   const content = articlesContext(key).default; // Get the raw MD string
   const { data } = require('gray-matter')(content); // Parse frontmatter
   return {
      ...data,
      contentPath: key,
   };
});

export default articles;
