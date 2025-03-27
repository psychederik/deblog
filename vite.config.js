import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import markdownPlugin from './src/scripts/vite-plugin-markdown';

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss(), markdownPlugin()],
});
