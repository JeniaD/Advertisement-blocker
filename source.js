//Beta functions
function DestroyFrames(){
	if(!confirm("Are you sure?"))
		return;
	document.getElementsByTagName("iframe").innerHTML = "";
	document.getElementsByTagName("iframe").id = "blockedAd";
}

chrome.runtime.onMessage.addListener(function (request){
	if(confirm(request))
		DestroyFrames();
})
