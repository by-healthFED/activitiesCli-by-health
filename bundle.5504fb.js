!function(u){function e(e){for(var t,n,r=e[0],o=e[1],c=e[2],i=0,a=[];i<r.length;i++)Object.prototype.hasOwnProperty.call(f,n=r[i])&&f[n]&&a.push(f[n][0]),f[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(u[t]=o[t]);for(p&&p(e);a.length;)a.shift()();return d.push.apply(d,c||[]),s()}function s(){for(var e,t=0;t<d.length;t++){for(var n=d[t],r=!0,o=1;o<n.length;o++){0!==f[n[o]]&&(r=!1)}r&&(d.splice(t--,1),e=l(l.s=n[0]))}return e}function l(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}var n={},f={1:0},d=[];l.e=function(o){var e=[],n=f[o];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=f[o]=[e,t]});e.push(n[2]=t);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=function(e){return l.p+""+({0:"Home"}[e]||e)+"."+{0:"935212"}[e]+".js"}(o);var i=Error();r=function(e){c.onerror=c.onload=null,clearTimeout(a);var t=f[o];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;i.message="Loading chunk "+o+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,t[1](i)}f[o]=void 0}};var a=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},l.m=u,l.c=n,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="./",l.oe=function(e){throw e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=r;d.push([94,2]),s()}({178:function(){},179:function(){function e(){var e=c.clientWidth;e&&(c.style.fontSize=e<r?o*(e/r)+"px":o+"px")}var t,n,r,o,c,i;t=document,n=window,r=750,o=31,c=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",t.addEventListener&&(n.addEventListener(i,e,!1),t.addEventListener("DOMContentLoaded",e,!1))},181:function(e,t,n){"use strict";function r(e){return{type:"SET_RUNTIME_VARIABLE",payload:e}}function o(e){var t=e.redux,n=Object(w.j)(!0),r=Object(g.a)(n,2),o=r[0],c=r[1];return Object(p.h)("div",{className:x.a.root},Object(p.h)("h3",{className:x.a.redux},t),Object(p.h)("h3",{className:x.a.hooks},"Preact use hooks"),o&&Object(p.h)(E.CountdownCircleTimer,{isPlaying:!0,durationSeconds:20,colors:[["#6fba2b",.33],["#F7B801",.33],["#FF0000"]],size:300,strokeWidth:8,onComplete:function(){c(!1),setTimeout(function(){c(!0)})},renderTime:function(e){return Object(p.h)("div",null,Object(p.h)("div",{className:x.a.logo},Object(p.h)("img",{src:P.a})),Object(p.h)("div",{className:x.a.count},e,"s"),Object(p.h)("div",{className:x.a.suffix},"后重置"))}}))}n.r(t);var c,i=n(35),a=n(36),u=n(38),s=n(37),l=n(22),f=n(39),d=n(21),p=n(0),b=n(88),h=n(92);"undefined"!=typeof document&&(c=Object(h.a)());var O=c,j=n(40),v=n(27),y=n(89),m=n.n(y),g=n(93),w=n(8),_=n(26),x=n.n(_),E=n(90),T=n(91),P=n.n(T),k=n(56),S=n.n(k),C=function(e){function n(e){var t;return Object(i.a)(this,n),t=Object(u.a)(this,Object(s.a)(n).call(this,e)),Object(d.a)(Object(l.a)(t),"myTest2",function(){return S.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.awrap(t.myTest());case 2:t.setState({test:e.sent+t.state.test}),setTimeout(function(){},3e3);case 5:case"end":return e.stop()}})}),Object(d.a)(Object(l.a)(t),"myTest",function(){return t.setState({test:1}),new Promise(function(e){setTimeout(function(){e(1)},3e3)})}),t.state={test:0},t}return Object(f.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.myTest2()}},{key:"render",value:function(){return Object(p.h)("div",null,"page List ",this.state.test)}}]),n}(p.a),M=m()({loader:function(){return n.e(0).then(n.bind(null,184))},loading:function(){return Object(p.h)("div",null,"Loading...")}}),N=function(e){function c(){var e,t;Object(i.a)(this,c);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=Object(u.a)(this,(e=Object(s.a)(c)).call.apply(e,[this].concat(r))),Object(d.a)(Object(l.a)(t),"handleMenu",function(e){return function(){O.push(e)}}),Object(d.a)(Object(l.a)(t),"handleCount",function(){t.props.setStore({count:t.props.count+1})}),t}return Object(f.a)(c,e),Object(a.a)(c,[{key:"componentDidMount",value:function(){this.props.setStore({redux:"from redux RUNTIME"})}},{key:"render",value:function(){return Object(p.h)("div",{id:"app"},Object(p.h)("div",{style:"padding:1rem; text-align:center"},Object(p.h)("nav",null,Object(p.h)("a",{onClick:this.handleMenu("/")},"Home"),"  |  ",Object(p.h)("a",{onClick:this.handleMenu("/list")},"List"),"  |  ",Object(p.h)("a",{onClick:this.handleMenu("/view")},"View"))),Object(p.h)("div",{style:"padding:1rem; text-align:center",onClick:this.handleCount},"handleReduxCounter"),Object(p.h)(b.a,{history:O,onChange:this.handleRoute},Object(p.h)(o,{path:"/",redux:"counter from reactRedux ".concat(this.props.count)}),Object(p.h)(C,{path:"/list"}),Object(p.h)(M,{path:"/view"})))}}]),c}(p.a);t.default=Object(j.b)(function(e){return e||{}},function(e){return Object(v.a)({setStore:r},e)})(N)},182:function(e,t,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}n.r(t);function o(e,t){switch(t.type){case"SET_RUNTIME_VARIABLE":return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){Object(l.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},f,{},e,{},t.payload);default:return e}}var c,i,a=n(0),u=n(40),s=n(27),l=n(21),f={redux:"",count:0},d=(n(178),n(179),Object(s.b)(o,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));window.onresize=function(){window.location.reload()},i=n(181).default,c=Object(a.k)(Object(a.h)(u.a,{store:d},Object(a.h)(i,null)),document.body,c)},26:function(e){e.exports={root:"_3_rzjJq5FCVbTot-0ieJTy",redux:"_1usfV_jN5_bdvyFN4F0wDP",count:"_2H_M1baCBqG82iB1jQcvsH",suffix:"UkG5ln7Owgn78tulf_WL8",logo:"_1s8OZ5WP8cl5Vjjha_23B4",hooks:"_1WVrrKDfuKkHb_mz7lXfg0"}},91:function(e,t,n){e.exports=n.p+"9631bbf2930caca76357a61155150654.svg"},94:function(e,t,n){n(95),e.exports=n(182)},95:function(e,t,n){"use strict";n.r(t);n(96),n(107),n(148),n(170),n(173)}});