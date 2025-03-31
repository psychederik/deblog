import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx,mdx,css,md}', // Include MDX files
   ],
   theme: {
      extend: {
         typography: {
            DEFAULT: {
               css: {
                  code: {
                     '&::before': {
                        content: '""',
                     },
                     '&::after': {
                        content: '""',
                     },
                  },
                  // ...
               },
            },
         },
      },
   },

   plugins: [typography],
};

// tailwind.config.js
// module.exports = {
//    theme: {
//       typography: {
//          default: {
//             css: {
//                code: {
//                   '&::before': {
//                      content: '""',
//                   },
//                   '&::after': {
//                      content: '""',
//                   },
//                },
//                // ...
//             },
//          },
//       },
//    },
//    plugins: [
//       require('@tailwindcss/typography'),
//       // ...
//    ],
// };
