import PropTypes from "prop-types"; // 规则校验
import React from "react";
console.log(React);
const DigLog = function (props) {
  let { title, content, children } = props; // 获取传递的属性和插槽信息
  children = React.Children.toArray(children);
  return (
    // 小括号包起来
    <>
      <div className="diaglog-box">
        <div className="header">
          <h2 className="title">{title}</h2>
          <span>x</span>
        </div>
      </div>
      <div>
        <div className="main">
          {content} {title}
        </div>
        {children.length > 0 ? <div className="footer">{children}</div> : null}
      </div>
    </>
  );
};
// 属性规则校验
DigLog.defaultProps = {
  title: "温馨提示",
};
DigLog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
};
export default DigLog;
