var stockTicker = require('./stock-ticker');

stockTicker.on('tick', function (company, rating) {
    console.log('Company:', company);
    console.log('Rating:', rating);
});

stockTicker.on('tick', function () {
    console.log('New tick!');
});