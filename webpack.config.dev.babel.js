import HtmlWebPackPlugin from 'html-webpack-plugin'

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    publicPath: "/",
    filename: '[name]-[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.pug'
    })
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 4000
  }
}
