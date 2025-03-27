import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownContent from '../articles/my-first-article.md';

function MarkdownComponent() {
   return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
}

export default MarkdownComponent;
