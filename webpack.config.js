let nodeExternals = require('webpack-node-externals');

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	devServer:{
		contentBase: './public'
	},
	entry: ["./src/app.js"],
	output: {    
		path: path.resolve(__dirname, "public"),    
		filename: "js/[name].js"  
	}, 
	module: {    
		rules: [      
		{        
			test: /\.js$/,        
			exclude: /node_modules/,        
			use: {			
				loader: "babel-loader"		
			}   
		},
      	{
        	test: /\.html$/,
        	use: {
           		loader: "html-loader"
        	}
      	}   
      	]
  	},
  	target: 'node',
  	externals: [nodeExternals()],
  	plugins: [
    	new HtmlWebPackPlugin({
     		template: "./src/client/index.html",
      		filename: "./index.html"
    	})
  	]
};