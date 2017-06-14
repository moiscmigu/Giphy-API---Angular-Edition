var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var index = require("./modules/index");
var songs = require("./modules/songs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', index);
app.use('/songs', songs);


app.listen(port, function() {
    console.log('server up on port', port);
});//end listen;
