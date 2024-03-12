import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./Markdown.css";

const Markdown = (props) => {
  const input = props.input;

  return (
    <>
      Preview
      <div class="container markdownBody">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {input}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Markdown;
