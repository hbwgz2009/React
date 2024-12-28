import React from "react";
class Demo2 extends React.Component {
  render() {
    let object = [10, 20, 30];
    let value = "";
    let buttonFn = () => {
      value = document.querySelector(".input");

      console.log(value.value);
    };
    return (
      <>
        {object.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        <input type="text" className="input" onChange={buttonFn} />
      </>
    );
  }
}
export default Demo2;
