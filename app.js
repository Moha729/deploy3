const express = require('express');
const app = express();
let port = process.env.PORT || 3001;
app.get(('/'),(req, res) => res.send('Hello world!!'))
app.listen (port, () => console.log('running on port',port))
