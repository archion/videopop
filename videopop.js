//debugger;
var ff=!window.chrome;
if(ff){
	var flash=document.querySelectorAll("[type='application/x-shockwave-flash']");
	for (var i=0, len=flash.length; i<len ;i++){
		flash[i].setAttribute("wmode","opaque");
		flash[i].style.display="none";
	}
	setTimeout(function(){
		for (var i=0, len=flash.length; i<len ;i++){
			flash[i].style.display="";
		}
	},100*flash.length);
}
//var flash=document.querySelectorAll("iframe");
//for (var i=0, len=flash.length; i<len ;i++){
//flash[i].setAttribute("wmode","opaque");
//}
var ntf=document.createElement("div");
ntf.id="topntf";
var pw=document.documentElement.scrollWidth||document.body.scrollWidth;
var ph=document.documentElement.scrollHeight||document.body.scrollHeight;
var ptop=document.documentElement.scrollTop||document.body.scrollTop;
ntf.setAttribute("style","position: absolute; top: 0px; left: 0px;z-index: 2147483647; background-color: #000; opacity: 0.8;font-size: 50pt;line-height: 50pt;text-align: center;color:#fff; "+"width: "+pw+"px; "+"height: "+ph+"px; "+"padding-top: "+ptop+"px;");
ntf.innerHTML="please click the element to pop out<br> 请点击需要弹出的元素";
document.body.appendChild(ntf);
document.addEventListener('mousedown', function(e) {
	if (document.getElementById("topntf")){
		document.body.removeChild(document.getElementById("topntf"));
		//document.body.removeChild(ntf);
		//e = e || window.event;
		//var target = e.target || e.srcElement;
		//var target = e.target.cloneNode(true)
		//var target = document.elementFromPoint(e.clientX,e.clientY).parentNode.cloneNode(true);
		var target = document.elementFromPoint(e.clientX,e.clientY);
		var ch=window.getComputedStyle(target,null).getPropertyValue("height");
		var cw=window.getComputedStyle(target,null).getPropertyValue("width");
		var ptarget=target;
		var player = ptarget.cloneNode(true);
		var cst="width:100% !important;height:100% !important;max-width:100% !important;margin:0px !important;padding:0px !important;top:0px !important;left:0px !important;z-index: 2147483646 !important;overflow:hidden !important;position:fixed !important;display: block !important;visibility: visible !important;";
		player.setAttribute("style",cst);
		while(window.getComputedStyle(target.parentNode,null).getPropertyValue("height")==ch&&window.getComputedStyle(target.parentNode,null).getPropertyValue("width")==cw) {
			ptarget=target.parentNode.cloneNode(true);
			ptarget.replaceChild(player.cloneNode(true),ptarget.childNodes[Array.prototype.indexOf.call(target.parentNode.childNodes,target)]);
			ptarget.setAttribute("style",cst);
			player=ptarget;
			target=target.parentNode;
		}
		var wurl=window.location.href;
		if(ff){
			wurl="about:blank";
		}
		//var w=window.open(wurl,"","width=520,height=325");
		var w=window.open(wurl,"","width=520,height=325,left="+(screen.availWidth-525)+",top="+(screen.availHeight-385));
		if(!w){
			window.alert("Please set to allow pop-up windows（请设置允许弹出窗口）");
		}else{
			//w.window.location.href=window.location.href;
			var id=window.setInterval(function(){
				if(w.document.body.childElementCount>0||wurl=="about:blank"){
					window.clearInterval(id);
					//w.document.write('<script type="text/undefined">');
					//w.document.documentElement.replaceChild(document.head.cloneNode(true),w.document.head);
					w.document.documentElement.innerHTML=" ";
					w.document.documentElement.replaceChild(document.head.cloneNode(true),w.document.head);
					//w.document.head.parentNode.appendChild(document.createElement("body"));
					//w.document.head.parentNode.removeChild(w.document.body);
					//w.document.head.parentNode.appendChild(document.createElement("body"));
					//w.document.documentElement.replaceChild(document.body.cloneNode(true),w.document.body);
					//w.document.documentElement.replaceChild(document.head.cloneNode(true),w.document.head);
					//var hd=document.head.cloneNode(true).querySelectorAll(":not(script)");
					//for (var i=0, len=hd.length; i<len ;i++){
					//w.document.head.appendChild(hd[i]);
					//}
					//var s = document.createElement('style');
					//s.type = 'text/css';
					//s.innerHTML = '* { height: 100% !important; width: 100%!important; }';
					//w.document.head.appendChild(s);
					//target.setAttribute("style","height: 100%; width: 100%; left: 0px; top: 0px;")
					//target.style.height="100%";
					//target.style.width="100%";
					//target.style.top="0px";
					//target.style.left="0px";
					//target.style.margin="0px";
					//target.style.padding="0px";
					//w.document.body.removeAttribute("class");
					//target.id="video_box";
					//target.className="video_box";
					//w.document.body.className="popupvideo";
					w.document.body.setAttribute("style",cst);
					//var d=document.createElement("div");
					//d.setAttribute("style","height: 100%; width: 100%; left: 0px; top: 0px;display: block;");
					//d.appendChild(target);
					//var js=document.querySelectorAll("script");
					//for (var i=0, len=js.length; i<len ;i++){
					//d.appendChild(js[i]);
					//}
					//w.document.body.appendChild(d);
					w.document.body.appendChild(player);
					var rt=document.createElement('script');
					rt.type = "text/javascript";
					rt.innerHTML='var ck=document.createElement("div"); ck.setAttribute("style","position: fixed; top: 5px; right: 10px;z-index: 2147483647;background: #000; opacity: 0.3;color:#fff;font-size: 8pt;cursor: pointer;text-align: center;color:#fff;padding: 4px"); ck.innerHTML="return"; ck.onclick=function() { window.open("'+window.location.href+'"); window.close(); };document.body.appendChild(ck);';
					w.document.body.appendChild(rt);
					//if (confirm("close original window?\n关闭原始窗口？") == true) {
					//window.close();
					//}
				}
			},100);
		}
	}
}, false);
