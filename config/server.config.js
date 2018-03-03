const path = require('path');

module.exports = {
	devServer:{
		contentBase: './src/server'
	},
	entry: ["./src/client/index.js"],
	output: {    
		path: path.resolve(__dirname, "../public"),    
		filename: "server_bundle.js"
	}, 
	module: {    
		rules: [      
		{        
			test: /\.js$/,        
        	exclude: [/node_modules/, /public/],        
			use: {			
				loader: "babel-loader"		
			}   
		}
    ]
  },
  target: 'node'  
};