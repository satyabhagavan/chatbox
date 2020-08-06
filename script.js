var messages = document.getElementById("messages")
var textbox = document.getElementById("textbox")
var button = document.getElementById("button")
var time = document.getElementById("time")
//console.log(d.getHours(),d.getMinutes())

button.addEventListener("click",function() {
	var d = new Date()
	var newMessage = document.createElement("li");
	newMessage.innerHTML = textbox.value;
	messages.appendChild(newMessage);
	textbox.value = "";

	var newTime = document.createElement("li");
	newTime.innerHTML = d.getHours() + ':' + d.getMinutes();
	time.appendChild(newTime);

});
