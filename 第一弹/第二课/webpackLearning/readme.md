第一步：
脚手架代码
三大件：
webpack
webpack-cli // webpack的脚手架
webpack-dev-server //开发者服务器插件

第二步：
处理js:  es6  es7 es8 装饰器@tools

  处理es6的
    babel-loader@7 安装第7个版本  默认安装可以装第八个版本   但是和babel-core不兼容。所以需要用第7个版本
    babel-core 
    babel-preset-env 

  es7以上的版本
    babel-plugin-transform-runtime

  装饰器@tools
    babel-plugin-transform-decorators
    babel-plugin-transform-decorators-legacy

第三步：
处理样式
sass/less -> css  -> style(css如果不是指定做成特定的文件，一般都会嵌入到页面中的内部样式表)

sass-loader
node-sass(这个是配合sass-loader)

css-loader

postcss-loader autoprefixer(可以给某些css3加一些前缀  可选)

style-loader

第四步：
处理模板
ejs-loader

第五步：
处理HTML
html-webpack-plugin (能够压缩html代码)

--save-dev(-D)  安装在开发环境下的依赖
--save(-S)  安装在生产环境下的依赖
--registry=https://registry.npm.taobao.org在下载指令后面添加这个，会切换到国内的镜像依赖

使用(配置这些依赖) 以上只是下载安装而已，还没有进行配置。配置放在webpack.config.js里