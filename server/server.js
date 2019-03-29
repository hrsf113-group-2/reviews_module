var express = require('express');
var app = express();
var port = 1993;

app.use(express.static(__dirname + '/../client/dist'));


app.listen(port, () => console.log(`Listening on port:${port}!`))