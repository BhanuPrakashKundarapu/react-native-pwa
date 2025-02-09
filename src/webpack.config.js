module.exports = {
    resolve: {
      alias: {
        'react-native$': 'react-native-web',
      },
      extensions: ['.web.js', '.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!(react-router-dom)\/).*/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };