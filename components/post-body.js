import markdownStyles from "./markdown-styles.module.css";
// import ReactDOM from "react-dom";
// import React, { useEffect } from "react";

export default function PostBody({ content }) {
  return (
    <div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

// const element = <p>bitch!!!</p>;
// ReactDOM.render(element, document.getElementById("facebook"));
