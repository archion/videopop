//add img link and make link open in new tab
var i=0;
var img=document.querySelectorAll("img")
for (i=0;i<img.length;i++){
	var aimg=document.createElement("a");
	aimg.href=img[i].src;
	img[i].parentNode.insertBefore(aimg, img[i]);
	aimg.appendChild(img[i])
}
var link=document.querySelectorAll("a");
for (i=0;i<link.length;i++){
	link[i].setAttribute("target","_blank")
}
//add back to top button
var af=document.createElement("link");
af.rel="stylesheet";
af.href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";
document.head.appendChild(af);
var tp=document.createElement("span");
tp.className="fa fa-chevron-circle-up fa-2x top";
tp.setAttribute("style","cursor: pointer; opacity:0; position: fixed; right: 40px; bottom: 25px; transition: opacity 0.7s;");
document.body.appendChild(tp);
//var tp=document.querySelector("span.top")
tp.addEventListener('click',function(e){
	var sm=function(){
		if((document.body.scrollTop||document.documentElement.scrollTop)==0){
			return;
		}else{
			scroll(0,(document.body.scrollTop||document.documentElement.scrollTop)*0.9);
			setTimeout(sm,0.1);
		}
	};
	sm();
},false)
window.onscroll=function(){
	if((document.body.scrollTop||document.documentElement.scrollTop)>window.innerHeight/2){
		document.querySelector("span.top").style.opacity=0.8;
		document.querySelector("span.top").style.cursor="pointer";
	}else{
		document.querySelector("span.top").style.opacity=0;
		document.querySelector("span.top").style.cursor="initial";
	}
}
