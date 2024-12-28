import React from "react";

const ComponentName = (props) => {
  return (
    <>
      <div id="root" className="center">
        <div
          className="outer"
          onClick={() => {
            console.log("outer冒泡");
          }}
          onClickCapture={() => {
            console.log("outer捕获");
          }}
        >
          <div
            className="inner"
            onClick={() => {
              dsfds;
              console.log("innter冒泡");
            }}
            onClickCapture={() => {
              console.log("inner捕获");
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ComponentName;
