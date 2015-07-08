var events = require('events');
var stockTicker = new events.EventEmitter();

// Using event emitters in Node.
(function () {

    var randomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var companies = ['MSFT', 'GOOG', 'YHO', 'APP'];

    setInterval(function () {
        var company = randomElement(companies);
        var newRating = Math.random();
        stockTicker.emit('tick', company, newRating);
    }, 500);

})();

module.exports = stockTicker;