(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)a=s[l],i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0cbc53":"70826626","chunk-da222a0e":"67703467"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-da222a0e":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0cbc53":"31d6cfe0","chunk-da222a0e":"3a967199"}[t]+".css",i=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08ce":function(t,e,n){"use strict";var r=n("7e95"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Music")]),n("router-link",{attrs:{to:"/video"}},[t._v("Video")])],1),n("audio",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{src:t.url,id:"audio",controls:"",preload:"auto",loop:"loop",autoplay:""}}),n("router-view")],1)},i=[],o=n("cebc"),s=(n("7f7f"),n("2f62")),u={data:function(){return{isShow:!1}},watch:{$route:function(t,e){if("musicDetail"===t.name){var n={type:"song",id:this.$route.query.id,br:128e3};this.isShow=!0,this.$store.dispatch("music/url",n)}else this.isShow=!1}},computed:Object(o["a"])({},Object(s["b"])({url:function(t){return t.music.musicUrl}})),created:function(){},methods:{}},c=u,l=(n("7c55"),n("2877")),d=Object(l["a"])(c,a,i,!1,null,null,null);d.options.__file="App.vue";var p=d.exports,f=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"musicBox"}},[n("div",{staticClass:"topSearch"},[n("div",{staticClass:"searchBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.txt,expression:"txt"}],attrs:{type:"text",placeholder:"请输入您要搜索的歌曲"},domProps:{value:t.txt},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null},input:function(e){e.target.composing||(t.txt=e.target.value)}}}),n("button",{on:{click:t.search}})]),n("div",{staticClass:"list"},t._l(t.list,function(e,r){return n("span",{key:r,on:{click:function(n){t.handlePlay(e)}}},[t._v(t._s(e))])}),0)]),n("div",{staticClass:"musicList"},[n("ul",t._l(t.dataSorce,function(e){return n("li",{key:e.songid,on:{click:function(n){t.jumpDetail(e)}}},[n("div",{staticClass:"pic",style:"background:url("+e.pic+") center no-repeat"}),n("div",{staticClass:"text"},[n("p",[t._v(t._s(e.author))]),n("p",[t._v(t._s(e.title))])]),n("i",{staticClass:"arrow"})])}),0)])])},m=[],v=n("f499"),g=n.n(v),b=n("b6d0"),y=n.n(b),w=n("774e"),x=n.n(w),k=(n("a481"),n("96cf"),n("3b8d")),_={data:function(){return{txt:"",dataSorce:[]}},computed:{list:function(){return JSON.parse(localStorage.getItem("musicList"))||[]}},created:function(){this.getMusicList()},methods:{getMusicList:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(){var e,n,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"喜欢",t.next=3,this.axios({url:"https://api.apiopen.top/searchMusic",method:"GET",params:{name:e}});case 3:if(n=t.sent,console.log(n),200===n.status){t.next=8;break}return console.log(n.message),t.abrupt("return");case 8:this.txt="",this.dataSorce=n.result;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),jumpDetail:function(t){console.log(t),this.$router.push({path:"/musicDetail",query:{id:t.songid}})},handlePlay:function(t){this.getMusicList(t)},search:function(){var t=this.txt;if(""!==t.replace(/\s+/g,"")){console.log(this.list),this.list.push(t),this.list=this.list.slice(-5);var e=x()(new y.a(this.list));localStorage.setItem("musicList",g()(e)),this.getMusicList(t)}else console.log("请输入搜素关键词")}}},j=_,S=(n("08ce"),Object(l["a"])(j,h,m,!1,null,"018a7d1e",null));S.options.__file="index.vue";var O=S.exports;r["a"].use(f["a"]);var C=new f["a"]({mode:"history",base:"",routes:[{path:"/",name:"music",component:O},{path:"/video",name:"video",component:function(){return n.e("chunk-2d0cbc53").then(n.bind(null,"4aa1"))}},{path:"/musicDetail",name:"musicDetail",component:function(){return n.e("chunk-da222a0e").then(n.bind(null,"dd93"))}}]}),E=n("bd86"),P=n("bc3a"),T=n.n(P);T.a.defaults.timeout=1e4,T.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",T.a.interceptors.request.use(function(t){return t},function(t){var e=t.data;return e.status=t.response.status,e}),T.a.interceptors.response.use(function(t){var e=t.data;return e.status=t.status,e},function(t){var e=t.response.data;return e.status=t.response.status,e.status,e});var L=T.a,M={state:{musicUrl:""},mutations:Object(E["a"])({},"music/musicUrl",function(t,e){t.musicUrl=e}),actions:Object(E["a"])({},"music/url",function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L({url:"https://api.imjad.cn/cloudmusic/",method:"GET",params:n});case 2:if(r=t.sent,200!==r.status){t.next=6;break}return e.commit("music/musicUrl",r.data[0]?r.data[0].url:""),t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}())};r["a"].use(s["a"]);var N=new s["a"].Store({modules:{music:M}});(function(){function t(){var t=document.documentElement,e=t.getBoundingClientRect().width,n=e/7.5;t.style.fontSize=n<=100?n+"px":"100px"}t(),window.addEventListener("resize",t)})(),r["a"].config.productionTip=!1,r["a"].prototype.axios=L,new r["a"]({router:C,store:N,render:function(t){return t(p)}}).$mount("#app")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},"7e95":function(t,e,n){}});