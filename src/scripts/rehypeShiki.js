// // rehypeShiki.js
// import { visit } from 'unist-util-visit';
// import { getHighlighter } from 'shiki';

// let highlighter;

// export default function rehypeShiki() {
//    return async (tree) => {
//       if (!highlighter) {
//          highlighter = await getHighlighter({
//             theme: 'nord', // Choose your preferred theme
//             langs: [
//                'solidity',
//                'javascript',
//                'typescript',
//                'html',
//                'css',
//                'jsx',
//             ], // Add languages you use
//          });
//       }
//       visit(tree, 'element', (node) => {
//          if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
//             const codeNode = node.children[0];
//             const code = codeNode.children[0].value;
//             const lang = codeNode.properties.className
//                ? codeNode.properties.className[0].replace('language-', '')
//                : 'text';
//             const highlighted = highlighter.codeToHtml(code, { lang });
//             node.children = [{ type: 'raw', value: highlighted }];
//          }
//       });
//    };
// }
