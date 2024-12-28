import PropTypes from "prop-types"
import React from 'react'
// console.log(React)
const DemoOne = function(props){
  // console.log(props)
  let {className,style,title,x,children} = props
  children = (React.Children.toArray(children)) // 把插槽信息变为数组
  // let {title,x} = props
  // console.log(Object.isFrozen(props))
  let headerSlot = [],
      footerSlot = [],
      defaultSlot= [];
  // console.log(children)
  children.forEach(child=>{
    // 传递进来的插座信息 slot代码插槽信息名字
    let {slot} = child.props
    console.log(slot)
    if(slot === 'header'){
      headerSlot.push(child)
    }else if(slot === 'footer'){
      footerSlot.push(child)
    }else{
      defaultSlot.push(child)
    }
  })
  // console.log(title,x)
  return <div className={`demo-box ${className}`} style={style} x={x}>
    {headerSlot}
    <h2>我是DEMO-one{title}</h2>
    <h5>{title}</h5>
    {defaultSlot}
    <p></p>
    {footerSlot}
  </div>
}
/*把函数当做对象,设置静态的私有属性方法,来给其设置属性的校验规则 */
DemoOne.defaultProps = {
  x:0,
  title:"我十岁"
}
DemoOne.propTypes = {
  // 类型必须是字符串,必传
  title:PropTypes.string.isRequired,
  // 类型是数字
  x:PropTypes.number
}
export default DemoOne