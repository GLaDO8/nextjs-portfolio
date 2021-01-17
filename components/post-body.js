import markdownStyles from './markdown-styles.module.css'
// import ReactDOM from "react-dom";
// import React, { useEffect } from "react";

export default function PostBody({ content }) {
  return (
    <div className="mx-4 md:mx-8 lg:mx-12">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
