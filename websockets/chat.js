$(function () {

    var socket = io(window.location.origin);
    var $main = $('main');
    var $input = $('input');

    var createUserMessage = function (messageDetails) {
        return '<h3><span>' + messageDetails.name + '</span>: ' + messageDetails.message + '</h3>';
    };

    $input.on('keydown', function (e) {
        if (e.keyCode !== 13) return;
        var message = $input.val();
        $input.val(null);
        socket.emit('newMessage', message);
    });


    socket.on('connect', function () {

        socket.on('chatMessage', function (message) {
            $main.append('<span>'+ message +'</span>');
        });

    });


});

