(function(){
	ht=window.location.host;
	if (ht.search(/bilibili/)>0){
		nurl="http://static.hdslb.com/miniloader.swf?aid="+window.location.pathname.match(/\d+/g)+"&page=1";
		document.getElementsByClassName("player")[0].parentNode.removeChild(document.getElementsByClassName("player")[0]);
	}else if (ht.search(/youku/)>0){
	}else{
window.location.pathname.match(/\d+/g)
		nurl="http://player.youku.com/player.php/Type/Folder/Fid/"+window.location.href.match(/\d{5,}/g)+"/Ob/1/sid/"+window.location.href.match(/id_\w+/g).toString().substr(3)+"/v.swf";
		document.getElementsByTagName("embed")[0].parentNode.removeChild(document.getElementsByTagName("embed")[0]);
	}
	window.open(nurl,"","width=500,height=350");
})();
