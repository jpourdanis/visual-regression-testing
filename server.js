var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    res.sendFile(__dirname + '/src/golden-data.html');
})

app.get('/vrtest', function (req, res) {
   
    res.sendFile(__dirname + '/src/false-data.html');
})

app.get('/applitools-base', function (req, res) {
   
    res.sendFile(__dirname + '/src/golden-data-applitools.html');
})

app.get('/applitools-actual', function (req, res) {
   
    res.sendFile(__dirname + '/src/false-data-applitools.html');
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})