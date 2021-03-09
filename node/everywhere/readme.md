1. nodemon  让我们的node  支持热更新
 安装 npm i nodemon
 package.json 中："dev":"nodemon index.js"
2. 如何不写死端口号，可以让我们在运行时，环境来得到？
  设置
  cross-env  跨平台  window mac Linux 先下载：npm i cross-env
  process.env  兼容性问题
  PORT=123  SET PORT=1234  系统变量