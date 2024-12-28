import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { createElement,render } from './jsxHandle';
const root = ReactDOM.createRoot(document.getElementById('root'))

// let data = [
//   {id:1,title:"我是第一个标题"},
//   {id:2,title:"我是第二个标题"},
//   {id:3,title:"我是第三个标题"}
// ]
/*
root.render(
  <>
  <h2 className='title'>新闻列表</h2>
  <div className="box">
    <span>20</span>
    <span>30</span>
  </div>
  </>
)
*/
// import { createElement } from './jsxHandle';
/*
root.render(
  <>
 <h2>新闻列表</h2>
 <ul className='news-list'>
   {data.map((item,index)=>{
    return   <li key={item.id}>
    <span>{item.title}</span>
   </li>
    
   })}
  
 </ul>
   
  </>
)
*/
let styobj = {}
let x = 20
let y = 60
let jsxObj = createElement(
  "div",
  {className:"container"},
  createElement(
    "h2",
    {className:'title',style:styobj},
    ""
  ),
  createElement(
    "div",
    {className:"box"},
    createElement("span",null,x),
    createElement("span",null,y)
  )
)
console.log(styobj)
render(jsxObj,document.getElementById('root'))