cookie

1. cookie 是服务器种在客户端的存储的数据
  每次再发送请求的时候都会带上
  Cookie 比较小 4Kb   uid=12121212
  登录状态
2. 
    node  设置cookie
    有哪些选项
    domain
    path
    expires  删除 cookie
3. 冴羽
    cookie  安全问题
    cookie 由服务器端种下，写在用户端
    是一段比较小的文本
    每次都要传给服务器
    传送的过程是不安全的额 http
    有些攻击，可以得到用户的cookie
    得到cookie 就可以伪装成用户去下单

    httpOnly:false  ----可以拿到，不安全
     为了前端也能操作cookie  不自量力   XSS 攻击
    document.cookie  js
    httpOnly:true  ---拿不到uid  安全

    前端什么都能做，练node + go 都写
    前端也操作cookie，有些cookie 没有那么重要
    比如一些用户选项设置，夜间模式(低安全性)，uid(高安全性)


    Cookie 与 localstorage
    相同：都是都是文本
    用来做存储的， 区别
    cookie  4Kb  用户状态，最基本用户设置
    localStorage  5MB lokijs  数据库 多存些
    用户的地址（家，公司的）  用户看了哪些内容

    Cookie 的性能不好
    浪费的地方  每次http请求都会带上