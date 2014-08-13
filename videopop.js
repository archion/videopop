//ht=window.location.host;
//ht=document.URL;
//tt=document.title;
//if (ht.search(/bilibili/)>0){
	//nurl="http://static.hdslb.com/miniloader.swf?aid="+ht.match(/\d+/g)+"&page=1";
//}else if (ht.search(/youku/)>0){
	//nurl="http://player.youku.com/player.php/sid/"+ht.match(/id_\w+/g)[0].substr(3)+"/v.swf";
//}else if (ht.search(/tudou/)>0){
	//nurl="http://www.tudou.com/v/"+ht.match(/\w+/g)[6]+"/v.swf";
//}else if (ht.search(/youtube/)>0){
	//nurl="https://www.youtube.com/embed/"+ht.match(/\w+/g)[6];
//}else if (ht.search(/acfun/)>0){
	//nurl="http://static.acfun.tv/player/ACFlashPlayer.out.swf?type=page&url="+ht;
//}else{
	//nurl=document.getElementsByTagName("embed")[0].getAttribute("src");
	//document.getElementsByTagName("embed")[0].parentNode.removeChild(document.getElementsByTagName("embed")[0]);
//}
//w=window.open(nurl,"","width=520,height=325");
//document.addEventListener('click', function(e) {
//var mp= {x:0, y:0};
//document.addEventListener('mousemove', function(e) {
	////console.log(e);
	//mp.x=e.clientX;
	//mp.y=e.clientY;
//}, false);
//document.addEventListener('keydown', function(e) {
	//console.log(e)
	//if (e.keyCode==80 && e.altKey){
		//e = e || window.event;
		////var target = e.target || e.srcElement;
		////var target = e.target.cloneNode(true)
		//var target = document.elementFromPoint(mp.x,mp.y).cloneNode(true);
		//var w=window.open("about:blank","","width=520,height=325");
		//w.document.getElementsByTagName("html")[0].replaceChild(document.head.cloneNode(true),w.document.head);
		////target.setAttribute("style","height: 100%; width: 100%; left: 0px; top: 0px;")
		//target.style.height="100%";
		//target.style.width="100%";
		//target.style.margin="0px";
		//target.style.padding="0px";
		//w.document.body.style.margin="0px";
		//w.document.body.appendChild(target);
	//}
//}, false);
ntf=document.createElement("div");
ntf.setAttribute("style","position: absolute; top: 0px; left: 0px;z-index: 1000000; background: #777; opacity: 0.6;font-size: 50pt;line-height: 50pt;text-align: center;color:#fff; "+"width: "+document.body.offsetWidth+"px; "+"height: "+document.body.offsetHeight+"px; "+"padding-top: "+document.body.scrollTop+"px;");
ntf.innerHTML="please click the element to pop out<br> 请点击需要弹出的元素"
document.body.appendChild(ntf);
document.addEventListener('mousedown', function(e) {
	document.body.removeChild(ntf);
	e = e || window.event;
	//var target = e.target || e.srcElement;
	//var target = e.target.cloneNode(true)
	var target = document.elementFromPoint(e.clientX,e.clientY).cloneNode(true);
	var w=window.open("about:blank","","width=520,height=325");
	w.document.getElementsByTagName("html")[0].replaceChild(document.head.cloneNode(true),w.document.head);
	//target.setAttribute("style","height: 100%; width: 100%; left: 0px; top: 0px;")
	target.style.height="100%";
	target.style.width="100%";
	target.style.margin="0px";
	target.style.padding="0px";
	w.document.body.style.margin="0px";
	w.document.body.appendChild(target);
}, false);
