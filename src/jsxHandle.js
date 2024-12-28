/*创建虚拟dom对象 */
Array.prototype.BB = 200;
let arr = [20,30]
console.log(Object.getOwnPropertyNames(arr))
const each = function each(obj, callback) {
  if (obj === null || typeof obj !== "object") throw new TypeError('obj is not a object');
  if (typeof callback !== "function") throw new TypeError('callback is not a function');
  let keys = Reflect.ownKeys(obj);
  keys.forEach(key => {
      let value = obj[key];
      // 每一次迭代，都把回调函数执行
      callback(value, key);
  });
};

export function createElement(ele,props,...chilrden){
  let virturalDOM = {
    $$typeof:Symbol('react.element'),
    ref:null,
    key:null,
    type:null,
    props:{}
  }
  let lenth = chilrden.length;
  virturalDOM.type = ele;
  if(props!==null){
    virturalDOM.props={
      ...props
    }
  }
  if(lenth===1) virturalDOM.props.chilrden = chilrden[0]
  if(lenth>1) virturalDOM.props.chilrden = chilrden
  return virturalDOM
}
export function render(virturalDOM,container){
  let {type,props} = virturalDOM
  if(typeof type === "string"){ //存储的标签名：动态创建这样一个标签
    let ele = document.createElement(type)
    // 为标签设置相关的属性&子节点
    each(props,(value,key)=>{
      // className的处理：value存储的是样式类名
      if(key === 'className'){
        ele.className = value;
        return;
      }
      // style的处理:value存储的是样式对象
      if(key==='style'){
        each(value,(val,attr)=>{
          ele.style[attr]= val;
        })
        return;
      }
      ele.setAttribute(key,value);
    })
    // 子节点的处理:value存储的是属性值
    if(key==='children'){
      let children = value;
      if(!Array.isArray(children)) children = [children]
      children.forEach(child=>{
        // 子节点是文本节点:直接插入即可
        if(/^(string|number)$/.test(typeof child)){
          ele.appendChild(document.createTextNode(child))
          return
        }
        // 子节点又是一个virtualDOM递归处理
        render(child,ele)
      })
      return;
    }
    // 把新增的标签添加到指定的容器中
    container.appendChild(ele)
  }
}