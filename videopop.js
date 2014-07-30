(function(){
	ht=window.location.host;
	if (ht.search(/bilibili/)>0){
		nurl="http://static.hdslb.com/miniloader.swf?aid="+window.location.pathname.match(/\d+/g)+"&page=1";
	}else{
		nurl=document.getElementsByTagName("embed")[0].getAttribute("src");
	}
	window.open(nurl,"","width=500,height=350");
	document.getElementsByTagName("embed")[0].parentNode.removeChild(document.getElementsByTagName("embed")[0]);
})();
