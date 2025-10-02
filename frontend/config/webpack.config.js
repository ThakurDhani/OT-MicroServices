const webpack = require('webpack');

module.exports = {
  // ... other config
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\/img\/flags\/.*\.svg$/,
    }),
  ],
};
