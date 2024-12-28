/*对es6内置API做兼容处理*/ 
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
class Count extends React.Component{
  state = {num:0}
  render(){
    let {num}= this.state
    return <>
      <span style={{color:'red',fontSize:36+'px'}}>{num}</span>
      <br />
      <button onClick={()=>{
        num++
        this.setState({
          num
          
        })
      }}>累加</button>
    </>
  }
}
root.render(
  <React.StrictMode>
    <Count />
    <div>珠峰教育课程</div>
  </React.StrictMode>
);
fetch("/jian/subscriptions/recommended_collections")
.then(response=>response.json())
.then(value=>{
  console.log(value)
});




