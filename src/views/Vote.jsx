import React, { Component, PureComonent } from "react";
import PropTypes from "prop-types";
/*
export function Component(){}
export function PureComonent(){}
export default React;
从调用类组件new Vote({})开始，类组件内部发生的事情：
  1.初始化属性和规则校验
    方案一。
    constructor(props) {
    super(props); // 会把传递过来的属性挂载到this实例上。
    console.log(this.props); // 获取到传递的属性
  }
  2.初始化状态。
  状态和变量的区别就是修改状态可以触发视图的更新,需要手动初始化,如果我们没有去做相关的处理,则默认会往实例上挂载
  一个state
 */
class Vote extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  //this.state = {}
  // }
  static defaultProps = {
    num: 0,
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number,
  };
  /*初始化状态 */
  state = {
    supNum: 10,
    oppNum: 5,
  };
  render() {
    let { title } = this.props;
    let { supNum, oppNum } = this.state;

    console.log(this);
    return (
      <div className="vote-box">
        <div className="header">
          <h2 className="title">{title}</h2>
        </div>
        <div className="main">
          <p>支持人数：{supNum}</p>
          <p>反对人数： {oppNum}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              // supNum++;
              // console.log(supNum);
              this.setState({
                supNum: this.state.supNum + 1,
              });
            }}
          >
            支持
          </button>
          <button
            onClick={() => {
              this.state.oppNum++;
              this.forceUpdate();
              // console.log(oppNum);
            }}
          >
            反对
          </button>
        </div>
      </div>
    );
    console.log("render:渲染");
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount:第一次渲染之前");
  }
  componentDidMount() {
    console.log("render:第一次渲染完毕");
  }
  shouldComponentUpdate(nextProps, nextState) {
    // nextState：存储要修改的最新状态，this.state存储的还是修改前的状态【此时状态没有改】
    console.log("first");
    console.log(" shouldComponentUpdate:", this.state, nextState);
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    // 周期函数：更新之前
    console.log("componentWillUpdate:", this.state, nextState);
  }
  // 4.触发render周期函数:组件更新
  //   最新的状态/属性,把返回的JS编译为virtualDOM
  //   和第一次渲染出来的virtualDOM进行对比【dom-diff】把差异的部分进行渲染。
  componentDidUpdate(nextProps, nextState) {
    console.log("componentDidUpdate:", this.state, nextState);
  }
}
export default Vote;
