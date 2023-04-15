var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
require('dotenv').config()
const { sendMessage, getTextMessageInput, uploadMedia } = require("../uploadHelper");

router.use(bodyParser.json());

router.post('/', function(req, res, next) {
  var data = getTextMessageInput(process.env.RECIPIENT_WAID, 'Hi this is is dummt whatsapp message!');
  
  uploadMedia(data)
    .then(function (response) {
      res.redirect('/');
      res.sendStatus(200);
      return;
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response.data);
      res.sendStatus(500);
      return;
    });
});

module.exports = router;