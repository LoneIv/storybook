module.exports = {
  mode: "development",
  moodule: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    static: "./dist"
  }
}