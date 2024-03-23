import React, { useState } from "react";
import "./Options.css";

const Options = (props) => {
  const [optionList, setOptionList] = useState([]);
  const [data, setData] = useState(props.options);

  const handleClick = (title, markdown, id) => {
    let newInput = { title, markdown };
    props.setInput([...props.input, newInput]);
    if (props.stringInput.length !== 0) {
      props.setstringInput(props.stringInput + "\n\n" + markdown);
    } else {
      props.setstringInput(markdown);
    }
    const newObj = { title: title };
    if (!optionList.some((obj) => obj.title === newObj.title)) {
      setOptionList([...optionList, newObj]);
    }
    document.getElementById(id).remove();
  };

  const onChange = (e) => {
    let filteredOptions = data.filter((option) =>
      option.title.toLowerCase().includes(e.target.value)
    );
    setData(filteredOptions);
  };

  const handleBackspace = (e) => {
    if (e.keyCode === 8) {
      setData(props.options);
    }
  };

  const handleDelete = (item) => {
    const filteredOptionList = optionList.filter(
      (option) => option.title !== item.title
    );
    const newInput = props.input.filter((ins) => ins.title !== item.title);
    setOptionList(filteredOptionList);
    setData([...data, item]);
    props.setInput(newInput);
  };

  return (
    <>
      <div className="container text-small optionsContainer">
        Sections <br />
        {optionList.map((item, index) => {
          return (
            <div className="options selectedOptions" key={index}>
              <h6>
                {item.title}
                <span className="shift-right">
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  ></i>
                </span>
              </h6>
            </div>
          );
        })}
        <em className="small">
          Click on a section to edit and add to your ReadMe file.
        </em>{" "}
        <br />
        <input
          placeholder="Search"
          className="options"
          type="text"
          name="search"
          onChange={onChange}
          onKeyDown={handleBackspace}
        />
        <div>
          {data.map((item, index) => {
            return (
              <p
                className="options"
                id={`option${index}`}
                key={index}
                onClick={() => {
                  handleClick(item.title, item.markdown, "option" + index);
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Options;
