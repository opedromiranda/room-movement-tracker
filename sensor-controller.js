// after 10 seconds with no movement, room is considered empty
var TIME_TO_EMPTY = 10000;

var Sensor = require('pi-pir-sensor');
var sensor = new Sensor({
    // pin number must be specified
    pin: 12,

    // loop time to check PIR sensor, defaults to 1.5 seconds
    loop: 1500
});

sensor.on('movement', function () {
    // who's there?
});

sensor.start();

module.exports = {
    isRoomEmpty: function () {
        var now = new Date();
        return now - sensor.lastMovement > TIME_TO_EMPTY;
    }
}
