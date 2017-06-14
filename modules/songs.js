var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

var songsArray = [];

router.get('/', function(req, res) {
    console.log('/songs url hit');
    var objectToSendBack = {
        artist:'Cage the elephant',
        song:'cold cold cold'
    };//end objectToSendBack
    songsArray.push(objectToSendBack);
    res.send(songsArray);


});//end get

router.post('/', function(req, res) {
    console.log("'/songs post url hit'");
    console.log(req.body);
    songsArray.push(req.body.artist);
    res.sendStatus(200);

});//end post


module.exports = router;
