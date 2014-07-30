(function(){
	ht=window.location.host;
	if (ht.search(/bilibili/)>0){
		nurl="http://static.hdslb.com/miniloader.swf?aid="+window.location.pathname.match(/\d+/g)+"&page=1";
	}else if (ht.search(/youku/)>0){
		nurl="http://player.youku.com/player.php/Type/Folder/Fid/"+window.location.href.match(/\d{5,}/g)+"/Ob/1/sid/"+window.location.href.match(/id_\w+/g).toString().substr(3)+"/v.swf";
	}else if (ht.search(/tudou/)>0){
		nurl="http://www.tudou.com/v/"+window.location.pathname.match(/\w+/g)[2]+"/v.swf";
	}else if (ht.search(/youtube/)>0){
		nurl="https://www.youtube.com/embed/"+window.location.href.match(/\w+/g)[6];
	}else{
		nurl=document.getElementsByTagName("embed")[0].getAttribute("src");
		document.getElementsByTagName("embed")[0].parentNode.removeChild(document.getElementsByTagName("embed")[0]);
	}
	window.open(nurl,"","width=500,height=350");
})();
