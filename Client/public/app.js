
//var socket = new WebSocket("ws://echo.websocket.org");
var socket = new WebSocket("ws://localhost:5000");
var text = document.getElementById("text");
var panel = document.getElementById("panel");
var label = document.getElementById("label");
var name;
socket.onopen = function(event){
    name = prompt("Give you name: ");
    //socket.send(JSON.stringify( {type:"name", data:name} ));
    console.log("Socket Success");
    setTimeout(1000);
};
socket.onmessage = function(event){
    data = JSON.parse(event.data);
    if(name == data.name) {
        panel.innerHTML += "You: " + text.value + "<br/>";
        label.innerHTML = "Sent";
    }
    else panel.innerHTML += data.name + ": " + data.data + "<br/>";
};
function send_text(){
    //console.log(text);
    //text.innerHTML = "Mona Magulakda";
    socket.send(JSON.stringify( {type:"message", data:text.value, "name":name} ));
    label.innerHTML = "Sending";

}