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
