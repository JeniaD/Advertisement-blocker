function DestroyAds(){
	//alert("Destroy ads start... " + window.location.hostname);
	if(window.location.hostname == "diep.io")
		document.getElementById("a").innerHTML = "";
	
	document.getElementsByClassName("GoogleActiveViewInnerContainer").innerHTML = "";
	document.getElementsByClassName("ad").innerHTML = "";
	
	document.getElementById("GoogleActiveViewInnerContainer").innerHTML = "";
	document.getElementById("ad").innerHTML = "";
	
	document.getElementsByName("yatag").innerHTML = "Advertisement blocked by blocker";
	
	document.getElementById("sub-frame-error-details").innerHTML = "Advertisement blocked by blocker";
	setTimeout(() => {DestroyAds()}, 10000);
}
setTimeout(() => {DestroyAds()}, 3000);

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