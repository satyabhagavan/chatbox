var messages = document.getElementById("messages")
var textbox = document.getElementById("textbox")
var button = document.getElementById("button")
var chat = document.getElementById("chat-message-list")
//console.log(d.getHours(),d.getMinutes())

button.addEventListener("click",function() {
	if(textbox.value!=''){
		var actualMessage = '';
		var j = textbox.value;
		var i=0;
		var l = textbox.value.length;
		var len = l;

		if(l>27){
			while(l>27){
				actualMessage = actualMessage + j.slice(i,i+27) + "<br>";
				l=l-27;
				i=i+27;
			}
			actualMessage = actualMessage + j.slice(i,len);
		}
		else{
			actualMessage = j;
		}


		var d = new Date()
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var a_or_p = 'am';
		var time = '';

		if(hours == 0)
		{
			hours = 12;
		}
		else if(hours >=12)
		{
			hours = hours-12;
			a_or_p = 'pm';
		}
		if(minutes<10){
			time = hours+':0'+minutes+a_or_p;
		}
		else{
			time = hours+':'+minutes+a_or_p;
		}
		var newMessage ='<li>'+ actualMessage +"<p style='font-size: 1.2rem;color: #777;padding-left: 85%;'>"+time+'</p></li>';
		messages.innerHTML = messages.innerHTML + newMessage;
	
		textbox.value = "";
	}
});
