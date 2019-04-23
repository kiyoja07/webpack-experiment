const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.export = {
    entry: "./index.js", // 엔트리 파일 목록
    output: {
        path: path.resolve(__dirname, 'dist'), // 번들 파일 폴더
        filename: 'bundle.js' // 번들 파일 이름
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
      },
};