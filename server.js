var express = require('express');
var app = express();

//temp data storage
var data = require('./data.json');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

app.get('/api', function (req, res) {
	res.send(data);
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});