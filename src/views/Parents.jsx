import React from "react";
class Parents extends React.Component {
  constructor(x, y) {
    super();
    this.total = x + y;
    console.log(this.total);
  }
  num = 200; // 给实例加私有属性
  getNum = () => {
    // 这个是设置私有方法的。
    // 箭头函数没有自己的this，所用到的this是宿主环境中
    console.log(this); // this=>当前创建的实例
  };
  sum() {
    // 设置公共方法，不是箭头函数
    // sum = function sum(){} 设置私有属性
    //他是给Parent.protoType上设置公共的方法[sum函数是不可枚举的]
  }
  static average() {}
  static avg = 4000;
}
Parents.prototype.y = 2000; // 在外部手工给构造函数原生上设置公共的属性
// let p = new Parents(10, 20);
// console.log(p);
// console.dir(Parents);
export default Parents;
