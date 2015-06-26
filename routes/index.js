var express = require('express');
var router = express.Router();
var sensorController = require('../sensor-controller');

/* GET home page. */
router.get('/', function(req, res) {
    var isEmpty = sensorController.isRoomEmpty();
    var anyoneInRoom = isEmpty ? 'No' : 'Yes';
    res.render('index', { anyoneInRoom: anyoneInRoom });
});

module.exports = router;
