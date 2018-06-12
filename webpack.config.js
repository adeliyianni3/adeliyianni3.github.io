module.exports = options => {
  return {
    entry: './index.js',
    target: 'web',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
    devServer: {
      port: 3000,
      open: true,
      proxy: {
        "/api": "http://localhost:8080"
      }
    }
  }
}
