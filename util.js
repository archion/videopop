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
var tp=document.querySelector("i.top")
tp.addEventListener('click',function(e){
	var sm=function(){
		if((document.body.scrollTop||document.documentElement.scrollTop)==0){
			return;
		}else{
			scroll(0,(document.body.scrollTop||document.documentElement.scrollTop)-15);
			setTimeout(sm,0.1);
		}
	};
	sm();
},false)
window.onscroll=function(){
	if((document.body.scrollTop||document.documentElement.scrollTop)>window.innerHeight/2){
		document.querySelector("i.top").style.opacity=1;
		document.querySelector("i.top").style.cursor="pointer";
	}else{
		document.querySelector("i.top").style.opacity=0;
		document.querySelector("i.top").style.cursor="initial";
	}
}
