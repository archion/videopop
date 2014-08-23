// ==UserScript==
// @name       Popup Video
// @homepageURL https://github.com/archion/videopop
// @namespace  https://github.com/archion/
// @version    0.1.8
// @description  Popup online video out of the webpage
// @match      http://*/*
// @match      https://*/*
// @copyright  2014+, archion
// ==/UserScript==
if (window.top != window.self) { return; }  //don't run on frames or iframes
var ck=document.createElement("div");
ck.setAttribute("style","position: fixed; bottom: 20px; right: 20px;z-index: 999999;background: #000; opacity: 0.5;color:#fff;font-size: 8pt;cursor: pointer;text-align: center;color:#fff;padding: 4px");
ck.innerHTML="Popup";
document.body.appendChild(ck);
ck.addEventListener('click', function() {
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
	ntf.setAttribute("style","position: absolute; top: 0px; left: 0px;z-index: 2147483647; background-color: #000; opacity: 0.8;font-size: 50pt;line-height: 50pt;text-align: center;color:#fff; "+"width: "+document.body.scrollWidth+"px; "+"height: "+document.body.scrollHeight+"px; "+"padding-top: "+document.body.scrollTop+"px;");
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
			var target = document.elementFromPoint(e.clientX,e.clientY).cloneNode(true);
			var wurl=window.location.href;
			if(ff){
				wurl="about:blank";
			}
			var w=window.open(wurl,"","width=520,height=325");
			if(!w){
				window.alert("Please set to allow pop-up windows（请设置允许弹出窗口）");
			}else{
				//w.window.location.href=window.location.href;
				var id=window.setInterval(function(){
					if(w.document.body.childElementCount>1||wurl=="about:blank"){
						window.clearInterval(id);
						//w.document.write('<script type="text/undefined">');
						//w.document.documentElement.replaceChild(document.head.cloneNode(true),w.document.head);
						w.document.documentElement.innerHTML=" ";
						//w.document.head.parentNode.appendChild(document.createElement("body"));
						//w.document.head.parentNode.removeChild(w.document.body);
						//w.document.head.parentNode.appendChild(document.createElement("body"));
						//w.document.documentElement.replaceChild(document.body.cloneNode(true),w.document.body);
						w.document.documentElement.replaceChild(document.head.cloneNode(true),w.document.head);
						//var s = document.createElement('style');
						//s.type = 'text/css';
						//s.innerHTML = 'div { display: none; }';
						//w.document.head.appendChild(s);
						//target.setAttribute("style","height: 100%; width: 100%; left: 0px; top: 0px;")
						//target.style.height="100%";
						//target.style.width="100%";
						//target.style.top="0px";
						//target.style.left="0px";
						//target.style.margin="0px";
						//target.style.padding="0px";
						//w.document.body.removeAttribute("class");
						target.setAttribute("style","height: 100%; width: 100%;margin: 0px;min-width:90% !important;min-height:90% !important; left: 0px; top: 0px;visibility :visible;display :block");
						//target.id="";
						//target.className="vp";
						//w.document.body.className="vp";
						w.document.body.setAttribute("style","height: 100%; width: 100%;margin: 0px;padding: 0px;min-width:90% !important;min-height:90% !important; left: 0px; top: 0px;display :block");
						//var d=document.createElement("div");
						//d.setAttribute("style","height: 100%; width: 100%; left: 0px; top: 0px;display: block;");
						//d.appendChild(target);
						//var js=document.querySelectorAll("script");
						//for (var i=0, len=js.length; i<len ;i++){
						//d.appendChild(js[i]);
						//}
						//w.document.body.appendChild(d);
						w.document.body.appendChild(target);
						//var hd=document.head.cloneNode(true).querySelectorAll(":not(script)");
						//for (var i=0, len=hd.length; i<len ;i++){
						//w.document.head.appendChild(hd[i]);
						//}
					}
				},100);
			}
		}
	}, false);
}, false);

