var express = require('express');
var app = express();
var https = require('https');
var tokenKey = require('./tokenKeys');
var morgan = require('morgan');
var request = require('request');
var bodyParser = require('body-parser');

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

app.get('/igcall', function (req, res) {
  var lat = req.query.lat;
  var lng = req.query.lng;
  request("https://api.instagram.com/v1/media/search?lat=" + lat + "&lng="+ lng + "&distance=5000&access_token=" + tokenKey.key, function (error, response, body) {
    if(error){
        return console.log('Error:', error);
    }
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    res.json(JSON.parse(body));
  });
});




console.log('Listening on 8000');
app.listen(process.env.PORT || 8000);
