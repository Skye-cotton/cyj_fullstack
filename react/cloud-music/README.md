# 神三元React项目最佳实战
    1. 全局样式，样式组件去做
    2. router react 全家桶
        react-router-dom  react-router
        react-router-config 简单 
        SPA 让路由接管一切 
        path:/  Component:Home
        path:/A  Component:B
        配置  /routes/index.js
        react-router-config  renderRoutes
    vue/react  开发都是单页应用，页面不刷新，局部{renderRoutes(routes)}
    把当前path  匹配的组件渲染到这个位置

- React 组件类型，非常灵活
    1. StatelessComponent  function 函数式组件
        state 好难？ React hooks
    2. StatefulComponent Component
    3. 样式组件  /style  styleComponents
