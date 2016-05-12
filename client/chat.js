var socket = io();
var name = prompt("Enter a nickname.");

$('.chatbar').bind("enterKey",function(e){
    socket.emit('message', name + ": " + $('.chatbar').val());
    var msg = $('.chatbar').val();
    $('.chatbar').val('');
    return false;
});

$('.chatbar').keyup(function(e){
    if(e.keyCode == 13)
	$(this).trigger("enterKey");
});

socket.on('message', function(msg){
    appendmessage(msg.text, msg.color);
});

function appendmessage(text, color) {
    $('#messages').append($('<li style="color:' + color + '">').text(text));
}