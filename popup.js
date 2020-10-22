function Cmd(){
	command = document.getElementById("text-input").value;
	if(command == "help" || command == "info" || command == "?")
		document.getElementById("new-translation").innerHTML = "<b>Help - Show this info.<br>Clear - clear this.</b>";
	else if(command == "clear")
		document.getElementById("new-translation").innerHTML = "";
	//else
		//document.getElementById("new-translation").innerHTML = command;
	
	setTimeout(() => {Cmd()}, 1000);
}
setTimeout(() => {
	var object = document.getElementById("text-input");
	object.addEventListener("change", Cmd());
}, 3000);
