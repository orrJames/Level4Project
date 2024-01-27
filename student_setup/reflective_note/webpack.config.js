// webpack.config.js
const path = require('path');

module.exports = {
  entry: './main.mjs',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
