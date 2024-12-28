import React from "react";
class Demo3 extends React.Component {
  box3 = React.createRef();
  render() {
    return (
      <>
        <h2>sothat</h2>
        <p ref={(x) => (this.box2 = x)}>hellow</p>
        <p ref={this.box3}>shoooo</p>
      </>
    );
  }

  componentDidMount() {
    // 第一次渲染完毕[virtualDom]已经变为真实DOM；此时我们可以获取需要操作的DOM元素。
    console.log(this.box3);
  }
}

export default Demo3;
