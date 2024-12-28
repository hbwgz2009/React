import React from "react";
import ReactDOM from "react-dom/client";
// import DigLog from "./views/Diglog";
// import Parents from "./views/Parents";
import Vote from "./views/Vote";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {
      <Vote title="我是大标题" />
      // <Parents />
      /* <DigLog title="友情提示" content="大家好，我是文章内容" />
    <DigLog>
      <button>确定</button>
      <button>取消</button>
    </DigLog> */
    }
  </>
);
/*
render函数在渲染的时候,如果type是：
   1.字符串：创建一个标签
   2.普通函数：把函数执行,并且把props传递给函数
   3.构造函数：把构造函数new执行【也就是创建类的一个实例】,也会把解析出来的props传递过去.
   new Vote({
    title:"react起始是好样的"
   })
*/
