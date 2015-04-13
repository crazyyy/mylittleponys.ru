window.Modernizr=function(e,t,n){function r(e){A.cssText=e}function o(e,t){return r(x.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&A[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+S.join(r+" ")+r).split(" "),s(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)N[n[r]]=!!(n[r]in y);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)y.setAttribute("type",o=e[a]),r="text"!==y.type,r&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&y.style.WebkitAppearance!==n?(h.appendChild(y),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,h.removeChild(y)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?y.checkValidity&&y.checkValidity()===!1:y.value!=b)),j[e[a]]=!!r;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.3",m={},h=t.documentElement,g="modernizr",v=t.createElement(g),A=v.style,y=t.createElement("input"),b=":)",E={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",C=w.split(" "),S=w.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},k={},j={},N={},M=[],z=M.slice,B=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:g+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),l.id=g,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),h.style.overflow=s),!!a},L=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return B("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},F={}.hasOwnProperty;f=i(F,"undefined")||i(F.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=z.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(z.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(z.call(arguments)))};return r}),k.flexbox=function(){return l("flexWrap")},k.flexboxlegacy=function(){return l("boxDirection")},k.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},k.canvastext=function(){return!(!m.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},k.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:B(["@media (",x.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},k.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(A.backgroundColor,"rgba")},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(A.backgroundColor,"rgba")||a(A.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(A.background)},k.backgroundsize=function(){return l("backgroundSize")},k.borderimage=function(){return l("borderImage")},k.borderradius=function(){return l("borderRadius")},k.boxshadow=function(){return l("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(A.opacity)},k.cssanimations=function(){return l("animationName")},k.csscolumns=function(){return l("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+x.join(n+e)).slice(0,-e.length)),a(A.backgroundImage,"gradient")},k.cssreflections=function(){return l("boxReflect")},k.csstransforms=function(){return!!l("transform")},k.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in h.style&&B("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return l("transition")},k.fontface=function(){var e;return B('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},k.generatedcontent=function(){var e;return B(["#",g,"{font:0/0 a}#",g,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},k.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(T.svg,"clipPath")))};for(var D in k)f(k,D)&&(d=D.toLowerCase(),m[d]=k[D](),M.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof enableClasses&&enableClasses&&(h.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),v=y=null,m._version=p,m._prefixes=x,m._domPrefixes=S,m._cssomPrefixes=C,m.mq=L,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=B,m}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=x[e[b]];return t||(t={},E++,e[b]=E,x[E]=t),t}function i(e,n,r){if(n||(n=t),h)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():y.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||A.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),h)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function s(e){e||(e=t);var r=o(e);return!w.shivCSS||m||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||c(e,r),e}function l(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(S+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+S+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function f(e){for(var t=e.length;t--;)e[t].removeNode()}function p(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),c=e.namespaces,s=e.parentWindow;return!T||e.printShived?e:("undefined"==typeof c[S]&&c.add(S),s.attachEvent("onbeforeprint",function(){t();for(var o,a,c,s=e.styleSheets,u=[],f=s.length,p=Array(f);f--;)p[f]=s[f];for(;c=p.pop();)if(!c.disabled&&C.test(c.media)){try{o=c.imports,a=o.length}catch(m){a=0}for(f=0;a>f;f++)p.push(o[f]);try{u.push(c.cssText)}catch(m){}}u=d(u.reverse().join("")),i=l(e),r=n(e,u)}),s.attachEvent("onafterprint",function(){f(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var m,h,g="3.7.0",v=e.html5||{},A=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",E=0,x={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){m=!0,h=!0}}();var w={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:g,shivCSS:v.shivCSS!==!1,supportsUnknownElements:h,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=w,s(t);var C=/^$|\b(?:all|print)\b/,S="html5shiv",T=!h&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();w.type+=" print",w.shivPrint=p,p(t)}(this,document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();A=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):A=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(d.readyState)&&(y.r=p=1,!A&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){E.removeChild(d)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,g=0,y={t:r,s:n,e:i,a:s,x:l};1===T[n]&&(g=1,T[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,y),"img"!=e&&(g||2===T[n]?(E.insertBefore(d,b?null:h),m(u,l)):T[n].push(d))}function l(e,t,n,r,i){return A=0,t=t||"j",o(e)?s("c"==t?w:x,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],A=0,y="MozAppearance"in p.style,b=y&&!!t.createRange().compareNode,E=b?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,x=y?"object":p?"script":"img",w=p?"script":x,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},S=[],T={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=S.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=k[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=S[n](i);return i}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(T[s.url]?s.noexec=!0:T[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),T[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[s])),a(e[s],d,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,d=this.yepnope.loader;if(o(e))a(e,0,d,0);else if(C(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,d,0):C(l)?f(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){k[e]=t},f.addFilter=function(e){S.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("cookies",function(){if(navigator.cookieEnabled)return!0;document.cookie="cookietest=1";var e=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}),function(){var e=new Image;e.onerror=function(){Modernizr.addTest("webp",!1)},e.onload=function(){Modernizr.addTest("webp",function(){return 1==e.width})},e.src="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA=="}(),Modernizr.addTest("placeholder",function(){return!!("placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea")))}),function(e,t){t.formvalidationapi=!1,t.formvalidationmessage=!1,t.addTest("formvalidation",function(){var n=e.createElement("form");if(!("checkValidity"in n&&"addEventListener"in n))return!1;if("reportValidity"in n)return!0;var r,o=!1;return t.formvalidationapi=!0,n.addEventListener("submit",function(e){window.opera||e.preventDefault(),e.stopPropagation()},!1),n.innerHTML='<input name="modTest" required><button></button>',t.testStyles("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(n),r=n.getElementsByTagName("input")[0],r.addEventListener("invalid",function(e){o=!0,e.preventDefault(),e.stopPropagation()},!1),t.formvalidationmessage=!!r.validationMessage,n.getElementsByTagName("button")[0].click()}),o})}(document,window.Modernizr),function(){if(!Modernizr.canvas)return!1;var e=new Image,t=document.createElement("canvas"),n=t.getContext("2d");e.onload=function(){Modernizr.addTest("apng",function(){return"undefined"==typeof t.getContext?!1:(n.drawImage(e,0,0),0===n.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}();