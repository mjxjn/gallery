define("gallery/zeroclipboard/1.1.6/zeroclipboard",[],function(a,b,c){(function(){"use strict";var n,a=function(a,b){var c=a.style[b];if(a.currentStyle?c=a.currentStyle[b]:window.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null).getPropertyValue(b)),"auto"==c&&"cursor"==b)for(var d=["a"],e=0;d.length>e;e++)if(a.tagName.toLowerCase()==d[e])return"pointer";return c},b=function(a){if(m.prototype._singleton){a||(a=window.event);var b;this!==window?b=this:a.target?b=a.target:a.srcElement&&(b=a.srcElement),m.prototype._singleton.setCurrent(b)}},d=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},e=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},f=function(a,b){if(a.addClass)return a.addClass(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)0>d.indexOf(" "+c[f]+" ")&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},g=function(a,b){if(a.removeClass)return a.removeClass(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},h=function(b){var c={left:0,top:0,width:b.width||b.offsetWidth||0,height:b.height||b.offsetHeight||0,zIndex:9999},d=a(b,"zIndex");for(d&&"auto"!=d&&(c.zIndex=parseInt(d,10));b;){var e=parseInt(a(b,"borderLeftWidth"),10),f=parseInt(a(b,"borderTopWidth"),10);c.left+=isNaN(b.offsetLeft)?0:b.offsetLeft,c.left+=isNaN(e)?0:e,c.top+=isNaN(b.offsetTop)?0:b.offsetTop,c.top+=isNaN(f)?0:f,b=b.offsetParent}return c},i=function(a){return(a.indexOf("?")>=0?"&":"?")+"nocache="+(new Date).getTime()},j=function(a){var b=[];return a.trustedDomains&&(a.trustedDomains.length?b.push("trustedDomain="+a.trustedDomains.join(",")):b.push("trustedDomain="+a.trustedDomains)),b.join("&")},k=function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},l=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},m=function(a,b){if(a&&(m.prototype._singleton||this).glue(a),m.prototype._singleton)return m.prototype._singleton;m.prototype._singleton=this,this.options={};for(var c in p)this.options[c]=p[c];for(var d in b)this.options[d]=b[d];this.handlers={},m.detectFlashSupport()&&q()},o=[];m.prototype.setCurrent=function(b){n=b,this.reposition(),this.setText(this.options.text||b.getAttribute("data-clipboard-text")),b.getAttribute("title")&&this.setTitle(b.getAttribute("title")),this.setHandCursor("pointer"==a(b,"cursor"))},m.prototype.setText=function(a){a&&""!==a&&(this.options.text=a,this.ready()&&this.flashBridge.setText(a))},m.prototype.setTitle=function(a){a&&""!==a&&this.htmlBridge.setAttribute("title",a)},m.prototype.setSize=function(a,b){this.ready()&&this.flashBridge.setSize(a,b)},m.prototype.setHandCursor=function(a){this.ready()&&this.flashBridge.setHandCursor(a)},m.version="1.1.6";var p={moviePath:"ZeroClipboard.swf",trustedDomains:null,text:null,hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active"};m.setDefaults=function(a){for(var b in a)p[b]=a[b]},m.destroy=function(){m.prototype._singleton.unglue(o);var a=m.prototype._singleton.htmlBridge;a.parentNode.removeChild(a),delete m.prototype._singleton},m.detectFlashSupport=function(){var a=!1;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0)}return a};var q=function(){var a=m.prototype._singleton;if(a.htmlBridge=document.getElementById("global-zeroclipboard-html-bridge"),a.htmlBridge)return a.flashBridge=document["global-zeroclipboard-flash-bridge"],void 0;var b='    <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">       <param name="movie" value="'+a.options.moviePath+i(a.options.moviePath)+'"/>       <param name="allowScriptAccess" value="always" />       <param name="scale" value="exactfit">       <param name="loop" value="false" />       <param name="menu" value="false" />       <param name="quality" value="best" />       <param name="bgcolor" value="#ffffff" />       <param name="wmode" value="transparent"/>       <param name="flashvars" value="'+j(a.options)+'"/>       <embed src="'+a.options.moviePath+i(a.options.moviePath)+'"         loop="false" menu="false"         quality="best" bgcolor="#ffffff"         width="100%" height="100%"         name="global-zeroclipboard-flash-bridge"         allowScriptAccess="always"         allowFullScreen="false"         type="application/x-shockwave-flash"         wmode="transparent"         pluginspage="http://www.macromedia.com/go/getflashplayer"         flashvars="'+j(a.options)+'"         scale="exactfit">       </embed>     </object>';a.htmlBridge=document.createElement("div"),a.htmlBridge.id="global-zeroclipboard-html-bridge",a.htmlBridge.setAttribute("class","global-zeroclipboard-container"),a.htmlBridge.setAttribute("data-clipboard-ready",!1),a.htmlBridge.style.position="absolute",a.htmlBridge.style.left="-9999px",a.htmlBridge.style.top="-9999px",a.htmlBridge.style.width="15px",a.htmlBridge.style.height="15px",a.htmlBridge.style.zIndex="9999",a.htmlBridge.innerHTML=b,document.body.appendChild(a.htmlBridge),a.flashBridge=document["global-zeroclipboard-flash-bridge"]};m.prototype.resetBridge=function(){this.htmlBridge.style.left="-9999px",this.htmlBridge.style.top="-9999px",this.htmlBridge.removeAttribute("title"),this.htmlBridge.removeAttribute("data-clipboard-text"),g(n,this.options.activeClass),n=null},m.prototype.ready=function(){var a=this.htmlBridge.getAttribute("data-clipboard-ready");return"true"===a||a===!0},m.prototype.reposition=function(){if(!n)return!1;var a=h(n);this.htmlBridge.style.top=a.top+"px",this.htmlBridge.style.left=a.left+"px",this.htmlBridge.style.width=a.width+"px",this.htmlBridge.style.height=a.height+"px",this.htmlBridge.style.zIndex=a.zIndex+1,this.setSize(a.width,a.height)},m.dispatch=function(a,b){m.prototype._singleton.receiveEvent(a,b)},m.prototype.on=function(a,b){for(var c=a.toString().split(/\s/g),d=0;c.length>d;d++)a=c[d].toLowerCase().replace(/^on/,""),this.handlers[a]||(this.handlers[a]=b);this.handlers.noflash&&!m.detectFlashSupport()&&this.receiveEvent("onNoFlash",null)},m.prototype.addEventListener=m.prototype.on,m.prototype.receiveEvent=function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");var c=n;switch(a){case"load":if(b&&10>parseFloat(b.flashVersion.replace(",",".").replace(/[^0-9\.]/gi,"")))return this.receiveEvent("onWrongFlash",{flashVersion:b.flashVersion}),void 0;this.htmlBridge.setAttribute("data-clipboard-ready",!0);break;case"mouseover":f(c,this.options.hoverClass);break;case"mouseout":g(c,this.options.hoverClass),this.resetBridge();break;case"mousedown":f(c,this.options.activeClass);break;case"mouseup":g(c,this.options.activeClass);break;case"complete":this.options.text=null}if(this.handlers[a]){var d=this.handlers[a];"function"==typeof d?d.call(c,this,b):"string"==typeof d&&window[d].call(c,this,b)}},m.prototype.glue=function(a){a=l(a);for(var c=0;a.length>c;c++)-1==k(a[c],o)&&(o.push(a[c]),d(a[c],"mouseover",b))},m.prototype.unglue=function(a){a=l(a);for(var c=0;a.length>c;c++){e(a[c],"mouseover",b);var d=k(a[c],o);-1!=d&&o.splice(d,1)}},c!==void 0?c.exports=m:window.ZeroClipboard=m})(),window.ZeroClipboard=c.exports});