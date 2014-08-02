(function(){
	//ht=window.location.host;
	ht=document.URL
	tt=document.title
	if (ht.search(/bilibili/)>0){
		nurl="http://static.hdslb.com/miniloader.swf?aid="+ht.match(/\d+/g)+"&page=1";
	}else if (ht.search(/youku/)>0){
		nurl="http://player.youku.com/player.php/sid/"+ht.match(/id_\w+/g)[0].substr(3)+"/v.swf";
	}else if (ht.search(/tudou/)>0){
		nurl="http://www.tudou.com/v/"+ht.match(/\w+/g)[6]+"/v.swf";
	}else if (ht.search(/youtube/)>0){
		nurl="https://www.youtube.com/embed/"+ht.match(/\w+/g)[6];
	}else if (ht.search(/acfun/)>0){
		nurl="http://static.acfun.tv/player/ACFlashPlayer.out.swf?type=page&url="+ht;
	}else{
		nurl=document.getElementsByTagName("embed")[0].getAttribute("src");
		document.getElementsByTagName("embed")[0].parentNode.removeChild(document.getElementsByTagName("embed")[0]);
	}
	w=window.open(nurl,"","width=520,height=325");
	//w.onload = function() { this.document.title = "your new title"; }
	//document.addEventListener('click', function(e) {
		//e = e || window.event;
		//var target = e.target || e.srcElement,
		//text = target.textContent || text.innerText;  
		//var w=window.open(nurl,"","width=520,height=325");
		//w.document.URL="http://www.google.com";
		//w.document.write('<title>'+tt+'</title>');
		//w.document.write(text);
	//}, false);
})();
