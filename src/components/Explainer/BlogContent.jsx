// src/components/Explainer/BlogContent.js
import React from "react";
import DOMPurify from "dompurify";

const BlogPost = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div
      className='blog-post-content'
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default BlogPost;
