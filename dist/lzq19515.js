!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.LZQ=n():t.LZQ=n()}(this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=59)}([function(t,n,e){var r=e(11)("wks"),o=e(13),i=e(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(6),o=e(22);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(14);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(1),o=e(2),i=e(9),u=e(13)("src"),c=e(42),a=(""+c).split("toString");e(12).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(f&&(i(e,u)||o(e,u,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,e){var r=e(3),o=e(37),i=e(38),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(12),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(20)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n,e){var r=e(40),o=e(8);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(11)("keys"),o=e(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){"use strict";var r=e(3);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n){t.exports=!1},function(t,n,e){var r=e(14),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(1),o=e(12),i=e(2),u=e(5),c=e(43),a=function(t,n,e){var f,s,l,p,d=t&a.F,v=t&a.G,h=t&a.S,y=t&a.P,g=t&a.B,x=v?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,m=v?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});for(f in v&&(e=n),e)l=((s=!d&&x&&void 0!==x[f])?x:e)[f],p=g&&s?c(l,r):y&&"function"==typeof l?c(Function.call,l):l,x&&u(x,f,l,t&a.U),m[f]!=l&&i(m,f,p),y&&b[f]!=l&&(b[f]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(48),o=e(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(6).f,o=e(9),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(8);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(3),o=e(17),i=e(30),u=e(31);e(32)("match",1,function(t,n,e,c){return[function(e){var r=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=c(e,t,this);if(n.done)return n.value;var a=r(t),f=String(this);if(!a.global)return u(a,f);var s=a.unicode;a.lastIndex=0;for(var l,p=[],d=0;null!==(l=u(a,f));){var v=String(l[0]);p[d]=v,""===v&&(a.lastIndex=i(f,o(a.lastIndex),s)),d++}return 0===d?null:p}]})},function(t,n,e){"use strict";var r=e(53)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){"use strict";var r=e(54),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){"use strict";e(55);var r=e(5),o=e(2),i=e(7),u=e(8),c=e(0),a=e(33),f=c("species"),s=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=c(t),d=!i(function(){var n={};return n[p]=function(){return 7},7!=""[t](n)}),v=d?!i(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[f]=function(){return e}),e[p](""),!n}):void 0;if(!d||!v||"replace"===t&&!s||"split"===t&&!l){var h=/./[p],y=e(u,p,""[t],function(t,n,e,r,o){return n.exec===a?d&&!o?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),g=y[0],x=y[1];r(String.prototype,t,g),o(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},function(t,n,e){"use strict";var r,o,i=e(19),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,f=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var n,e,r,o,a=this;return s&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),r=u.call(a,t),f&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),s&&r&&r.length>1&&c.call(r[0],e,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r}),t.exports=a},function(t,n,e){for(var r=e(35),o=e(25),i=e(5),u=e(1),c=e(2),a=e(15),f=e(0),s=f("iterator"),l=f("toStringTag"),p=a.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(d),h=0;h<v.length;h++){var y,g=v[h],x=d[g],m=u[g],b=m&&m.prototype;if(b&&(b[s]||c(b,s,p),b[l]||c(b,l,g),a[g]=p,x))for(y in r)b[y]||i(b,y,r[y],!0)}},function(t,n,e){"use strict";var r=e(36),o=e(39),i=e(15),u=e(16);t.exports=e(41)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(0)("unscopables"),o=Array.prototype;null==o[r]&&e(2)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){t.exports=!e(4)&&!e(7)(function(){return 7!=Object.defineProperty(e(21)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(14);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(20),o=e(24),i=e(5),u=e(2),c=e(15),a=e(45),f=e(27),s=e(52),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,v,h,y,g){a(e,n,v);var x,m,b,S=function(t){if(!p&&t in _)return _[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",j="values"==h,w=!1,_=t.prototype,T=_[l]||_["@@iterator"]||h&&_[h],M=T||S(h),E=h?j?S("entries"):M:void 0,L="Array"==n&&_.entries||T;if(L&&(b=s(L.call(new t)))!==Object.prototype&&b.next&&(f(b,O,!0),r||"function"==typeof b[l]||u(b,l,d)),j&&T&&"values"!==T.name&&(w=!0,M=function(){return T.call(this)}),r&&!g||!p&&!w&&_[l]||u(_,l,M),c[n]=M,c[O]=d,h)if(x={values:j?M:S("values"),keys:y?M:S("keys"),entries:E},g)for(m in x)m in _||i(_,m,x[m]);else o(o.P+o.F*(p||w),n,x);return x}},function(t,n,e){t.exports=e(11)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(44);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";var r=e(46),o=e(22),i=e(27),u={};e(2)(u,e(0)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(3),o=e(47),i=e(26),u=e(18)("IE_PROTO"),c=function(){},a=function(){var t,n=e(21)("iframe"),r=i.length;for(n.style.display="none",e(51).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(6),o=e(3),i=e(25);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(16),i=e(49)(!1),u=e(18)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(16),o=e(17),i=e(50);t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(10),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(9),o=e(28),i=e(18)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(10),o=e(8);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){var r=e(23),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){"use strict";var r=e(33);e(24)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){"use strict";e(57);var r=e(3),o=e(19),i=e(4),u=/./.toString,c=function(t){e(5)(RegExp.prototype,"toString",t,!0)};e(7)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=u.name&&c(function(){return u.call(this)})},function(t,n,e){e(4)&&"g"!=/./g.flags&&e(6).f(RegExp.prototype,"flags",{configurable:!0,get:e(19)})},function(t,n,e){"use strict";var r=e(3),o=e(28),i=e(17),u=e(10),c=e(30),a=e(31),f=Math.max,s=Math.min,l=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;e(32)("replace",2,function(t,n,e,v){return[function(r,o){var i=t(this),u=null==r?void 0:r[n];return void 0!==u?u.call(r,i,o):e.call(String(i),r,o)},function(t,n){var o=v(e,t,this,n);if(o.done)return o.value;var l=r(t),p=String(this),d="function"==typeof n;d||(n=String(n));var y=l.global;if(y){var g=l.unicode;l.lastIndex=0}for(var x=[];;){var m=a(l,p);if(null===m)break;if(x.push(m),!y)break;""===String(m[0])&&(l.lastIndex=c(p,i(l.lastIndex),g))}for(var b,S="",O=0,j=0;j<x.length;j++){m=x[j];for(var w=String(m[0]),_=f(s(u(m.index),p.length),0),T=[],M=1;M<m.length;M++)T.push(void 0===(b=m[M])?b:String(b));var E=m.groups;if(d){var L=[w].concat(T,_,p);void 0!==E&&L.push(E);var P=String(n.apply(void 0,L))}else P=h(w,p,_,T,E,n);_>=O&&(S+=p.slice(O,_)+P,O=_+w.length)}return S+p.slice(O)}];function h(t,n,r,i,u,c){var a=r+t.length,f=i.length,s=d;return void 0!==u&&(u=o(u),s=p),e.call(c,s,function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":c=u[o.slice(1,-1)];break;default:var s=+o;if(0===s)return e;if(s>f){var p=l(s/10);return 0===p?e:p<=f?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):e}c=i[s-1]}return void 0===c?"":c})}})},function(t,n,e){"use strict";e.r(n);e(60),e(34),e(29);const r=function(){const t=window.navigator.userAgent,n=Boolean(t.match(/MicroMessenger\/([^\s]+)/i)),e=Boolean(t.match(/WebKit\/([\d.]+)/i)),r=Boolean(t.match(/(Android)\s+([\d.]+)/i)),o=Boolean(t.match(/(iPad).*OS\s([\d_]+)/i)),i=Boolean(t.match(/(iPod).*OS\s([\d_]+)/i)),u=Boolean(!i&&!o&&t.match(/(iPhone\sOS)\s([\d_]+)/i)),c=Boolean(t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/i));return{isWeixin:n,isWebkit:e,isAndroid:r,isIpad:o,isIpod:i,isIphone:u,isWebos:c,isTouchpad:Boolean(!c&&t.match(/TouchPad/i)),isKindle:Boolean(t.match(/Kindle\/([\d.]+)/i)),isSilk:Boolean(t.match(/Silk\/([\d._]+)/i)),isBlackberry:Boolean(t.match(/(BlackBerry).*Version\/([\d.]+)/i)),isMqqbrowser:Boolean(t.match(/MQQBrowser\/([\d.]+)/i)),isChrome:Boolean(t.match(/CriOS\/([\d.]+)/i)),isOpera:Boolean(t.match(/Opera\/([\d.]+)/i)),isSafari:Boolean(t.match(/Safari\/([\d.]+)/i)),isFirefox:Boolean(t.match(/Firefox\/([\d.]+)/i))}}(),o=(()=>Object.keys(r).filter(t=>r[t]))();function i(t){if("string"!=typeof t)return console.error("传入参数类型错误."),[];if(!t.match)return console.error("传入参数不存在match方法."),[];return t.match(/((((13[0-9])|(15[^4])|(18[0,1,2,3,5-9])|(17[0-8])|(147))\d{8})|((\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}))?/g).filter(t=>""!==t)}e(56),e(58);function u(t){return!!t&&("object"==typeof HTMLElement?t instanceof HTMLElement:"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName)}function c(t,n){let e=null;if(!t)return console.warn("请传入要复制的内容."),!1;if("string"==typeof t||"number"==typeof t)e=t;else{if("object"!=typeof t)return console.warn("传入类型异常."),!1;if(Array.isArray(t))e=n?t.toString().replace(/,/g,n):t.toString();else{if(u(t))return t.select(),a();e=JSON.stringify(t)}}let r=document.createElement("textarea");return r.value=e,document.body.appendChild(r),r.select(),a(r)}function a(t){try{return document.execCommand("copy")}catch(t){return console.error("该浏览器不兼容copyToClipboard方法."),!1}finally{console.log("el",t),t&&function(t){u(t)?document.body.removeChild(t):console.warn("传入的不是元素")}(t)}}function f(t){if("number"!=typeof parseInt(t))return console.error("传入参数不能转换成number."),"";const n="abcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let r=0;r<t;r++)e+=n.charAt(Math.random()*n.length||0);return e}e.d(n,"userDevices",function(){return r}),e.d(n,"findUserDevices",function(){return o}),e.d(n,"extractPhone",function(){return i}),e.d(n,"copyToClipboard",function(){return c}),e.d(n,"genRandomString",function(){return f})},function(t,n){}])});