//let nodeExternals = require('webpack-node-externals');

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	devServer:{
		contentBase: path.resolve(__dirname, "public")
	},
	entry: ["./src/client/index.js"],
	output: {    
    path: path.resolve(__dirname, "../public"),  
		filename: "client_bundle.js"  
	}, 
	module: {    
		rules: [      
		{        
			test: /\.js$/,        
      exclude: [/node_modules/, /public/],        
			use: {			
				loader: "babel-loader"		
			}   
		},
    {
     	test: /\.html$/,
     	use: {
     		loader: "html-loader"
     	}
    }]},
  	plugins: [
    	new HtmlWebPackPlugin({
     		template: "./src/client/index.html",
        filename: "./index.html"
    	})
  	]
};