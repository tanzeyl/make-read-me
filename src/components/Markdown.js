import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./Markdown.css";

const Markdown = (props) => {
  const saveFile = () => {
    const blob = new Blob([props.input], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <button className="btn btn-md btn-success mx-3 my-2" onClick={saveFile}>
        Download
      </button>
      <div className="container markdownBody" id="scrollBarHide">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {props.input}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Markdown;
