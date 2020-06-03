function Cmd(){
	command = document.getElementById("text-input").value;
	if(command == "help" || command == "info" || command == "?")
		document.getElementById("new-translation").innerHTML = "<b>Help - Show this info.<br>Destroy - clear \"iframes\".<br>Clear - clear this.</b>";
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


/*document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)
  
  function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
		//alert("Worked");
      chrome.tabs.sendMessage(tabs[0].id, 'Are you sure?', setCount)
		
    })
  }
  
  /*function setCount (res) {
    const div = document.createElement('div')
    div.textContent = `${res.count} bears`
    document.body.appendChild(div)
  }*/
/*}, false)(*/

/*chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
  alert("hi");
})*/