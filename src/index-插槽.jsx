import React from 'react';
import  ReactDOM  from 'react-dom/client';
import DemoOne from '@/views/DemoOne';
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(React)
root.render(
  <>
  <DemoOne title="我一级标题" className="box" style={{color:"red",fontSize:"30px"}}  x={100}>
   <span slot="header">页眉</span>
   <span>我是内容</span>
   <span slot="footer">页脚</span>
  </DemoOne>
  </>
  )
  // console.log(React.createElement(DemoOne, {
  //   title: "\u6211\u662F\u5927\u6807\u9898",
  //   className: "box",
  //   style: {
  //     color: "red",
  //     fontSize: "30px"
  //   },
  //   data: [100, 200]
  // }))