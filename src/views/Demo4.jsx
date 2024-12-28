import React from "react";
class Demo4 extends React.Component {
  add(x, y) {
    console.log(x, y);
  }
  handle = (e) => {
    console.log(this);
    console.log(e); // SyntheticBaseEvent 合成事件对象
  };
  render() {
    return (
      <>
        <h2>产品标题</h2>
        <button onClick={this.handle}>按钮</button>
        <button onClick={this.add.bind(this, 10, 20)}>加</button>
      </>
    );
  }
}
export default Demo4;
