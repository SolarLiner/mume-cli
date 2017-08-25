var webpack = require('webpack');
var pkg = require('./package.json');
var path = require('path');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    entry: './dist/main.js',
    externals: nodeModules,
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist/prod'),
        filename: pkg.name + '.js'
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    target: 'node',
}
