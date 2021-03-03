# 当你在浏览器输入了一个URL后，看到页面前发生了什么？
# 当你有了一台服务器后，可以干什么？
    docker  一台物理主机虚拟出来很多
    - IP
    拿到了 121.37.152.51 提供什么服务？可以看到网页呢？    密码：Chenyujue0105   华为云
    浏览器域名或IP访问，https  
    centos  7.6 ?  web 服务器，
    Nginx  是一个高性能的HTTP和反向代理的web 服务器

    - putty  远程SSH  链接  华为云服务器
      root   password
    - web 服务  Nginx安装
      安装Nginx 的依赖
       yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
       yum -y install wget httpd-tools vim
        yum list |grep ngnix
        yum install nginx
        nginx -v
        nginx 启动服务器
        Nginx -s stop 停止
