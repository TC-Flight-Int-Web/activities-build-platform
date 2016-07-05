#专题制作平台

客户端 + 服务端


###客户端
Electron + ReactJS 

###服务端
Nodejs + Express + Mongodb

###依赖
这个平台依赖nodejs mongodb electron webpack 需要安装到全局
1. 去官网下载nodejs并安装
2. 去官网下载mongodb并安装
3. npm i -g electron-prebuilt 全局安装electron
4. npm i -g webpack 全局安装

###操作步骤
1. clone
2. cd server
3. npm i
4. 服务端: 开启mongodb数据库 mongod
5. 去server/utils/config 中配置数据库地址
6. 启动express服务  node app.js
7. 去client  ../client
8. 去project/libs/config 中配置服务端地址
9. 运行 electron .  或者  npm run start


