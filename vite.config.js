// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@mdx-js/rollup';
import rehypeShiki from '@shikijs/rehype';
import remarkGfm from 'remark-gfm'; // Supports inline code and GitHub-flavored markdown
import remarkBreaks from 'remark-breaks'; // Helps with line breaks

export default defineConfig({
   plugins: [
      {
         ...mdx({
            rehypePlugins: [
               [rehypeShiki, { theme: 'aurora-x' }], // Pass the theme option here
            ],
            remarkGfm: [remarkGfm, remarkBreaks],
         }),
         enforce: 'pre', // Ensure MDX is processed before other plugins
      },
      tailwindcss(),
      react(),
   ],
});
