const { createProxyMiddleware } = require('http-proxy-middleware');
console.log(createProxyMiddleware+'hellow')
module.exports = function(app){
  app.use(
    createProxyMiddleware("/jian",{
      target:"https://www.jianshu.com/asimov",
      changeOrigin:true,
      pathRewrite:{"^/jian":""}
    })
  );
  // app.use(
  //   createProxyMiddleware("/zhi",{
  //     target:"https://news-at.zhihu.com/api/4",
  //     changeOrigin:true,
  //     pathRewrite:{"^/zhi":""}
  //   })
  // )
}
/* 
测试接口 
  简书：
  https://www.jianshu.com/asimov/subscriptions/recommended_collections
  知乎：
  https://news-at.zhihu.com/api/4/news/latest
*/