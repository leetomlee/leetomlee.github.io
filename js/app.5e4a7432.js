(function(e){function t(t){for(var r,o,u=t[0],l=t[1],i=t[2],d=0,p=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-bf115db2":"7c21edc6","chunk-605bc068":"58b28ad5","chunk-d2d72926":"f4444911"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-605bc068":1,"chunk-d2d72926":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-bf115db2":"31d6cfe0","chunk-605bc068":"6a6a1af5","chunk-d2d72926":"007fea21"}[e]+".css",c=l.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===c))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){i=p[u],d=i.getAttribute("data-href");if(d===r||d===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),n(a)},s.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=u(e);var p=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}c[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var s=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={name:"App",created:function(){}},c=Object.assign(o,{setup:function(e){return function(e,t){var n=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(n,null,{default:Object(r["withCtx"])((function(t){var n=t.Component;return[(Object(r["openBlock"])(),Object(r["createBlock"])(r["KeepAlive"],null,[e.$route.meta.keepAlive?(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(n),{key:0})):Object(r["createCommentVNode"])("",!0)],1024)),e.$route.meta.keepAlive?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(n),{key:0}))]})),_:1})}}});const a=c;var u=a,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i=[{path:"/",component:function(){return Promise.all([n.e("chunk-bf115db2"),n.e("chunk-605bc068")]).then(n.bind(null,"b06a"))},name:"colorlist",meta:{keepAlive:!0}},{path:"/readcolor/:cid/:name",component:function(){return Promise.all([n.e("chunk-bf115db2"),n.e("chunk-d2d72926")]).then(n.bind(null,"3ed4"))},name:"readcolor"}],d=Object(l["a"])({history:Object(l["b"])(),routes:i,scrollBehavior:function(e,t,n){return n||{top:0}}}),p=d,s=n("12f3");Object(r["createApp"])(u).use(s["VueEternalLoading"]).use(p).mount("#app")}});
//# sourceMappingURL=app.5e4a7432.js.map