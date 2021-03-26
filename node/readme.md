- 全栈  node + ts
 BATJTMD需求 
- 数据库
 端口通信  3306 -> 3000
 node  fs http  比较复杂 慢

- MVC 
 数据库  ->Model -> Controller ->Router(API)
 post 
 someone ->http ->req(url)->router->controller->Model ->mysql2(翻译官) 

- posts add 
  controller  -> restful  路径
  MySQL  post   POST   (添加记录)  /posts
  - router 在哪里？         迎宾
  - controller             模块细分
  - model  service         

- 单点入口 main.js-->app-->post

express.Router()

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

- mysql  先建表 再操作  关系型数据库  SQL
  MongoDB  先上车，后补票  NOSQL  json 