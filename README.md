# nodeblog
myblog

第一步：安装express
npm install -g express  
npm install -g express-generator 

第二步：搭建项目
进入目录之后运行命令：express
或者用这个命令来创建：express -t ejs newsproject

第三步：增加ignore文件
touch .gitignore

第四步：运行
npm start

-------------------------
2016\1\28 
模版引擎使用ejs
前端框架使用react
启动程序使用nodemon

坑一：安装react之后，app.js中设置模版引擎之后发现依然不认识，所以要先安装node-jsx
坑二：安装node-jsx之后，还是报错，好吧，app.js中要在设置模版引擎之前加入代码：require("node-jsx").install({ extension: ".js" });
坑三：文件路径找不到。。。少了"/"

-------------------------
2016\1\29
启动程序使用gulp，so easy～
安装包："gulp"、"gulp-nodemon"
需要在根目录下新建gulpfile.js文件，然后新建gulp.task

############
做了error页的路由、将／routes/index.js ---> /routes/serverrouter.js
安装：
  browserify、vinyl-source-stream
静态资源的加载：app.use(express.static(path.join(__dirname, 'assets')));／／这里要设置好目录

为了实现isomophic、客户端事件，加入客户端路由（待完成）
