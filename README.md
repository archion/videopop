videopop
========
Popup online video out of the website. I will try to make it support all sites.

currently known unsupported website
- youtube html5 player
- acfun external player
- ...

Only tested in chrome

## Setup
There is two way to use this script. Since bookmarklet will affected by CSP,so the second one is recommended.
### as bookmarklet
Just add 
```
javascript:(function(){var vp=document.createElement('script');vp.setAttribute('src','https://rawgit.com/archion/videopop/master/videopop.js');document.getElementsByTagName('head')[0].appendChild(vp);})();
```
to your browser as bookmark
### as userscript
[see here](https://greasyfork.org/scripts/4218-popup-video)

## Usage
If use bookmarklet, click the bookmark on a website and then click the video which you want to popup

If use userscript, click the "popup" button in bottom right of the page and then the same as bookmarklet

---
Any contribution as well as bug reports will be appreciated.  
