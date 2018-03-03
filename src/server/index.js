let express = require('express');
let path = require('path');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let config = require('../../webpack.config');

const port = 7777;

let app = express();
let compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", (req, res)=>{
	res.sendFile(path.resolve(__dirname, '../../public/index.html'));
})

app.use(express.static(path.join(__dirname,"./")));

app.listen(port, ()=> console.log("Started listening on port", port));