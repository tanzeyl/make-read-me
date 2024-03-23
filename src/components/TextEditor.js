import React, { useState } from "react";
import "./TextEditor.css";

const TextEditor = (props) => {
  const [copyLabel, setCopyLabel] = useState("Copy");

  const onChange = (e) => {
    props.setstringInput(e.target.value);
  };

  const handleCopy = () => {
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);
    setCopyLabel("Copied!");
  };

  return (
    <>
      <div className="container textEditorBody">
        <div className="d-flex justify-content-between align-items-center my-2">
          <div>Editor</div>
          <div>
            <button onClick={handleCopy} className="btn btn-md btn-success">
              {copyLabel}
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <textarea
            id="textarea"
            className="textarea"
            onChange={onChange}
            value={props.stringInput}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
