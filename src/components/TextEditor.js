import React from "react";
import "./TextEditor.css";

const TextEditor = (props) => {
  const onChange = (e) => {
    props.setInput(e.target.value);
  };

  return (
    <>
      <div className="container textEditorBody">
        Editor <br />
        <textarea
          className="textarea"
          onChange={onChange}
          value={props.input}
        ></textarea>
      </div>
    </>
  );
};

export default TextEditor;
