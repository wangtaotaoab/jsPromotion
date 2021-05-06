// 所有的loader都不需要导入，所有的plugin都需要导入
const HtmlWebpackPlugin = require('html-webpack-plugin')  
const { resolve } = require('path') //把路径改为绝对路径

module.exports = {
  mode:'development',//development  production  生产环境和开发环境
  entry:{
    index:resolve(__dirname,'./src/js/index.js')
  },//入口文件  一个入口文件直接用字符串  多个入口文件就用对象的形式写
  output:{
    path:resolve(__dirname,'./dist/'),//打包后的路径在哪  在根目录加一个文件夹
    filename: 'js/[name].js' //name是变量，会根据入口文件的名字而定
  },
  module:{
    // 模块的匹配规则
    rules:[
      {
        test:/\.js$/, //匹配以什么结尾的文件，决定使用什么样的loader
        loader: 'babel-loader',
        exclude:resolve(__dirname,'node_modules')
        //排除哪些东西不需要打包  因为node-module里下载的依赖是不需要改变的，也就不需要打包
      },
      {
        test:/\.css$/,
        // loader:'', //如果是只有一个loader，可以直接这么写。
        //如果有多个loader
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.tpl$/,
        loader:'ejs-loader'
      }
    ]
  },
  //所有的loader都不会导入到到webpack.config.js
  //所有的plugin都需要导入
  plugins:[
    // 实例化导入的plugin
    // 每个插件都是一个构造函数，使用的时候，都需要实例化
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:resolve(__dirname,'./src/index.html'),
      chunks:['index'],//添加入口文件  可以有多个入口文件，名字就是之前在entry里配置的文件名
      excludeChunks:['node_modules'],//排除
    })
    
  ],
  devServer: { //固定配置项
    open:true,//自动打开浏览器
    host:'localhost',//主机
    port:3000//端口
  }
}