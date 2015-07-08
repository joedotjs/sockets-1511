var _ = require('lodash');
var net = require('net');

var telnetServer = net.createServer();

var connectionPool = [];

telnetServer.listen(8124);

telnetServer.on('connection', function (connection) {

    var sendMessage = function (message) {
        _.without(connectionPool, connection).forEach(function (c) {
            c.write(connection.name + ' says: ' + message + '\r\n');
        });
    };

    var receiveName = function (name) {
        connection.name = name.toString().slice(0, -2);
        connectionPool.push(connection);
        connection.removeListener('data', receiveName);
        connection.on('data', sendMessage);
    };

    connection.write('Welcome to the server!\r\n\r\n');
    connection.write('What is your name?\r\n\r\n');

    connection.on('data', receiveName);

    connection.on('end', function () {
        connectionPool = _.without(connectionPool, connection);
    });

});