ntf=document.createElement("div");
ntf.setAttribute("id","topntf");
ntf.setAttribute("style","position: absolute; top: 0px; left: 0px;z-index: 2147483647; background: #777; opacity: 0.6;font-size: 50pt;line-height: 50pt;text-align: center;color:#fff; "+"width: "+document.body.offsetWidth+"px; "+"height: "+document.body.offsetHeight+"px; "+"padding-top: "+document.body.scrollTop+"px;");
ntf.innerHTML="please click the element to pop out<br> 请点击需要弹出的元素";
document.body.appendChild(ntf);
document.addEventListener('mousedown', function(e) {
	if (document.getElementById("topntf")){
		//document.body.removeChild(document.getElementById("topntf"));
		document.body.removeChild(ntf);
		e = e || window.event;
		//var target = e.target || e.srcElement;
		//var target = e.target.cloneNode(true)
		var target = document.elementFromPoint(e.clientX,e.clientY).cloneNode(true);
		var w=window.open("about:blank","","width=520,height=325");
		if(!w){
			window.alert("Please set to allow pop-up windows（请设置允许弹出窗口）");
		}
		tmp=document.head.cloneNode(true);
		tmp.removeChild(tmp.lastChild);
		w.document.getElementsByTagName("html")[0].replaceChild(tmp,w.document.head);
		//target.setAttribute("style","height: 100%; width: 100%; left: 0px; top: 0px;")
		target.style.height="100%";
		target.style.width="100%";
		target.style.margin="0px";
		target.style.padding="0px";
		w.document.body.style.margin="0px";
		w.document.body.appendChild(target);
	}
}, false);
