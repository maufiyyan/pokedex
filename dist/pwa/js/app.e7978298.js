(function(e){function n(n){for(var o,a,u=n[0],c=n[1],s=n[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={app:0},i=[];function a(e){return u.p+"js/"+({fastclick:"fastclick"}[e]||e)+"."+{"1d9dd923":"365d708d","2d0b9238":"fdfe7f60","2d0d6b8e":"7f307226","2d0de790":"0af07e23","2d0e8be2":"0d6290c7","4b47640d":"80a4e3eb",fastclick:"2a1f8ffc"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var s=new Error;i=function(n){c.onerror=c.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,t[1](s)}r[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var l=s;i.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var o={};t.r(o),t.d(o,"getMyPokemon",(function(){return L}));var r={};t.r(r),t.d(r,"setMyPokemon",(function(){return P})),t.d(r,"releaseMyPokemon",(function(){return x})),t.d(r,"updateMyPokemon",(function(){return O}));var i={};t.r(i),t.d(i,"insert_pokemonList",(function(){return S})),t.d(i,"update_list",(function(){return _})),t.d(i,"release",(function(){return j}));var a=t("967e"),u=t.n(a),c=(t("a481"),t("96cf"),t("7d6e"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),s=t("b05d"),d=t("436b"),l=t("18d6"),p=t("a639");c["a"].use(s["a"],{config:{},plugins:{Dialog:d["a"],LocalStorage:l["a"],SessionStorage:p["a"]}});var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},m=[],k={name:"App"},h=k,b=t("2877"),v=Object(b["a"])(h,f,m,!1,null,null,null),y=v.exports,g=t("2f62"),w={pokemonList:JSON.parse(l["a"].getItem("pokemonList"))};function L(e){return e.pokemonList}t("7f7f"),t("7514"),t("20d6");function P(e,n){l["a"].set("pokemonList",JSON.stringify(n)),e.pokemonList=n}function x(e,n){var t=e.pokemonList.findIndex((function(e){return e.id===n.id})),o=e.pokemonList[t].my_pokemon.findIndex((function(e){return e.id===n.id_cp}));e.pokemonList[t].my_pokemon.splice(o,1),e.pokemonList[t].owned+=-1,0==e.pokemonList[t].my_pokemon.length&&e.pokemonList.splice(t,1),l["a"].set("pokemonList",JSON.stringify(e.pokemonList))}function O(e,n){var t=e.pokemonList.find((function(e){return e.id===n.id}));if(void 0!=t){var o=e.pokemonList.findIndex((function(e){return e.id===n.id}));console.log(e.pokemonList[o]),console.log(e.pokemonList),e.pokemonList[o].owned+=1,e.pokemonList[o].my_pokemon.push({id:n.newid,name:n.data.name,nickname:n.data.nickname}),l["a"].set("pokemonList",JSON.stringify(e.pokemonList))}else e.pokemonList.push({id:n.id,my_pokemon:[{id:n.newid,name:n.data.name,nickname:n.data.nickname}],owned:1}),l["a"].set("pokemonList",JSON.stringify(e.pokemonList));console.log(e.pokemonList)}function S(e,n){var t=e.commit;e.getters;t("setMyPokemon",n)}function _(e,n){var t=e.commit;e.getters;t("updateMyPokemon",n)}function j(e,n){var t=e.commit;e.getters;t("releaseMyPokemon",n)}var M={namespaced:!0,state:w,getters:o,mutations:r,actions:i};c["a"].use(g["a"]);var J=function(){var e=new g["a"].Store({modules:{mypokelist:M},strict:!1});return e},N=t("8c4f"),A=[{path:"/",component:function(){return Promise.all([t.e("1d9dd923"),t.e("2d0d6b8e")]).then(t.bind(null,"7483"))},children:[{path:"",component:function(){return Promise.all([t.e("1d9dd923"),t.e("2d0e8be2")]).then(t.bind(null,"8b24"))},name:"home",meta:{title:"Pokemon Apps"}}]},{path:"/pokemon/:id/:title",component:function(){return Promise.all([t.e("1d9dd923"),t.e("2d0d6b8e")]).then(t.bind(null,"7483"))},children:[{path:"",component:function(){return Promise.all([t.e("1d9dd923"),t.e("2d0b9238")]).then(t.bind(null,"3258"))},name:"details"}]},{path:"/mypokemon",component:function(){return Promise.all([t.e("1d9dd923"),t.e("2d0d6b8e")]).then(t.bind(null,"7483"))},children:[{path:"",component:function(){return Promise.all([t.e("1d9dd923"),t.e("2d0de790")]).then(t.bind(null,"8695"))},name:"my pokemon",meta:{title:"My Pokemons"}}]}];A.push({path:"*",component:function(){return Promise.all([t.e("1d9dd923"),t.e("4b47640d")]).then(t.bind(null,"e51e"))}});var E=A;c["a"].use(N["a"]);var I=function(){var e=new N["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:E,mode:"hash",base:""});return e},T=function(){var e="function"===typeof J?J({Vue:c["a"]}):J,n="function"===typeof I?I({Vue:c["a"],store:e}):I;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(y)}};return{app:t,store:e,router:n}},q=t("9483");Object(q["a"])("service-worker.js",{ready:function(){0},registered:function(){0},cached:function(){0},updatefound:function(){0},updated:function(){0},offline:function(){0},error:function(e){0}});var C=t("bc3a"),V=t.n(C);c["a"].prototype.$axios=V.a;var $=T(),B=$.app,D=$.store,Q=$.router;function z(){var e,n,t,o,r;return u.a.async((function(i){while(1)switch(i.prev=i.next){case 0:e=!0,n=function(n){e=!1,window.location.href=n},t=window.location.href.replace(window.location.origin,""),o=[void 0],r=0;case 5:if(!(!0===e&&r<o.length)){i.next=23;break}if("function"===typeof o[r]){i.next=8;break}return i.abrupt("continue",20);case 8:return i.prev=8,i.next=11,u.a.awrap(o[r]({app:B,router:Q,store:D,Vue:c["a"],ssrContext:null,redirect:n,urlPath:t}));case 11:i.next=20;break;case 13:if(i.prev=13,i.t0=i["catch"](8),!i.t0||!i.t0.url){i.next=18;break}return window.location.href=i.t0.url,i.abrupt("return");case 18:return console.error("[Quasar] boot error:",i.t0),i.abrupt("return");case 20:r++,i.next=5;break;case 23:if(!1!==e){i.next=25;break}return i.abrupt("return");case 25:new c["a"](B);case 26:case"end":return i.stop()}}),null,null,[[8,13]])}/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e("fastclick").then(t.t.bind(null,"a0db",7)),z()},"7e6d":function(e,n,t){}});