//let nodeExternals = require('webpack-node-externals');

const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
    	'./src/client/index'
    	],
	output: {    
		path: path.resolve(__dirname, "public"),    
		filename: "bundle.js",
		publicPath: "/static/"
	},
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};