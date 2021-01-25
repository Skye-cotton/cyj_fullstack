- 图片性能优化：减少http数 ，lazyload throttle
    - 编译码  40kb
    data:img/jpg;base64,文件头base64编码格式  /9j/文件内容
    每一个图片相当于一次http请求，图片多了的话，耗性能比较严重。而将jpg转化成base64格式的图片，则极大地减少了请求数，因为base64是文本格式，可以直接放在body里。
    Google 大量的使用base64 减少请求数，是 最严重的的页面性能的地方

    1. 网页性能优化
        - 精灵图片的优化技术  多张图（小图 icon）合并到一张图去
          减少http请求
        - 历史  lazyload scroll + API，减少执行次数  throttle
        - 现在有 base64 把发送请求的机会都没了，不是所有图片 
          衡量，小一点的图片 
          还有哪种方法？
        - 大图的话，特别是头图，banner 图，商品详情页的图片
          可以在webp  大小减少25% 且清晰度不受损， + lazyload

- js 多线程的苗头，Worker  推出有了一段时间了，但是没有成为主流
  有多线程的能力
  new Worker('js 文件')//单独运行，不会阻塞主线程
  1. 跟DOM相关的事情不能做
    js 是css/html 的第三者
    worker不能和主线程同时去操作同一个元素
    
