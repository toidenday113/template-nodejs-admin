const nodeExternals = require("webpack-node-externals")
const path = require("path")
const WebpackObfuscator = require('webpack-obfuscator');

const typicalReact = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    }
  ]
}

const clientConfig = {
  entry: "./server/app/components/admin/App.js",
  output: {
    path: path.resolve(__dirname, "server/public"),
    filename: "main.js"
  },
  mode: "development",
  module: typicalReact,
  plugins: [
    new WebpackObfuscator({
      rotateStringArray: true,
      reservedStrings: [ '\s*' ]
    },[])
  ]
}

const serverConfig = {
  entry: "./server.js",
  output: {
    path: __dirname,
    filename: "server-compiled.js"
  },
  externals: [nodeExternals()],
  target: "node",
  mode: "production",
  module: typicalReact
}

module.exports = [clientConfig]
