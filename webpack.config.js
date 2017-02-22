var webpack = require("webpack");
//生成HTML
var html = require("html-webpack-plugin");
//删除文件
var clean = require('clean-webpack-plugin');

// sudo npm install webpack html-webpack-plugin clean-webpack-plugin style-loader css-loader less-loader less url-loader file-loader vue vue-router vue-loader vue-template-compiler babel-loader babel-preset-es2015 babel-core babel-plugin-transform-runtime

module.exports = {
  entry:"./app/app.js",//入口文件
  output:{
    path:__dirname+"/www",//输出目录
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.css$/,
        loader:"style-loader!css-loader!less-loader"
      },
      {
        test:/\.(png|jpe?g|gif)$/,
        loader:"url-loader?limit=5120$name=images/[name].[hash:4].[ext]"//[hash]截取前几位
      },
      {
        test:/\.vue$/,
        loader:"vue-loader"
      },
      {
        test:/\.(ttf|woff|eot|svg)$/,
        loader:"file-loader"
      }
    ]
  },
  plugins:[
    new html({
      title:"生活一家",
      template:__dirname+"/app/index.html",
      filename:"index.html"
    }),
    new clean(["www"]),
    // new webpack.optimize.UglifyJsPlugin({
	  //     compress: {
    //        warnings: true//取消报错提示
    //      }
    //     })//压缩代码
  ],
  resolve:{
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	},
  devServer:{
    contentBase:"./www",
    inline:true,
    port:8089
  }
}
