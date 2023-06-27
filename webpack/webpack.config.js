const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      listeners: path.resolve(__dirname, "..", "src", "listeners.ts"),
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
      clean: true,
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.ts?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [
          {from: ".", to: ".", context: "assets"},
          {from: "src/styles", to: "./styles"},
          {from: "src/index.html", to: "."}
        ]
      })
   ],
   watchOptions: {
    aggregateTimeout: 600,
    ignored: '**/node_modules'
  },
  performance: {
   hints: false,
   maxAssetSize: 1000
}
};