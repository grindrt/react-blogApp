import FormContainer from './client/components/container/FormContainer';

let express = require('express');
let path = require('path');

const port = 7777;

let app = express();
app.use(express.static(path.join(__dirname,"./")));

app.listen(port, ()=> console.log("Started listening on port", port));