var messages = document.getElementById("messages")
var textbox = document.getElementById("textbox")
var button = document.getElementById("button")
var time = document.getElementById("time")
//console.log(d.getHours(),d.getMinutes())

button.addEventListener("click",function() {
	var d = new Date()
	var newMessage = '<li>'+textbox.value + "<span style='font-size: 1.3rem;color: #777;padding-left: 250px;'>"+d.getHours()+':'+d.getMinutes()+'</span></li>'
	messages.innerHTML = messages.innerHTML + newMessage;
	textbox.value = "";
	/*var newMessage = document.createElement("li");
	newMessage.innerHTML = textbox.value;
	messages.appendChild(newMessage);
	textbox.value = "";

	var newTime = document.createElement("li");
	newTime.innerHTML = d.getHours() + ':' + d.getMinutes();
	time.appendChild(newTime);
	*/

});
