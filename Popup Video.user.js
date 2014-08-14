// ==UserScript==
// @name       Popup Video
// @homepageURL https://github.com/archion/videopop
// @namespace  https://github.com/archion/
// @version    0.1
// @description  Popup online video out of the website
// @match      http://*/*
// @match      https://*/*
// @copyright  2014+, archion
// ==/UserScript==
var ck=document.createElement("div");
ck.setAttribute("style","position: fixed; bottom: 20px; right: 20px;z-index: 999999;background: #000; opacity: 0.6;font-size: 8pt;text-align: center;color:#fff;padding: 4px");
ck.innerHTML="<a href='#non' style='color:#fff;text-decoration:none;'>Popup</a>";
document.body.appendChild(ck);
ck.addEventListener('click', function() {
    ntf=document.createElement("div");
    ntf.setAttribute("id","topntf");
    ntf.setAttribute("style","position: absolute; top: 0px; left: 0px;z-index: 2147483647; background: #000; opacity: 0.8;font-size: 50pt;line-height: 50pt;text-align: center;color:#fff; "+"width: "+document.body.offsetWidth+"px; "+"height: "+document.body.offsetHeight+"px; "+"padding-top: "+document.body.scrollTop+"px;");
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
}, false);

