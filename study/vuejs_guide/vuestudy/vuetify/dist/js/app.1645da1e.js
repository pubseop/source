(function(){"use strict";var t={8038:function(t,e,n){var i=n(144),o=n(998),r=function(){var t=this,e=t._self._c;return e(o.Z,[e("HelloWorld")],1)},u=[],a=function(){var t=this,e=t._self._c;return e("div",[e("header-component"),e("history-content"),e("footer-component")],1)},s=[],l=n(8895),c=n(579),f=n(4886),m=n(4324),d=n(8718),p=n(626),v=n(3595),b=n(1245),_=n(3736),h=n(1475),Z=n(1783),g=n(7953),x=function(){var t=this,e=t._self._c;return e("div",[e(Z.Z,{attrs:{color:"cyan",dark:"",tabs:""},scopedSlots:t._u([{key:"extension",fn:function(){return[e(b.Z,{attrs:{color:"cyan","align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(h.Z,{attrs:{color:"yellow"}}),t._l(t.items,(function(n){return e(p.Z,{key:n},[t._v(" "+t._s(n)+" ")])}))],2)]},proxy:!0}])},[e("v-toolbar-side-icon"),e(g.qW,[t._v("Page title")]),e(d.Z),e(l.Z,{attrs:{icon:""}},[e(m.Z,[t._v("search")])],1),e(l.Z,{attrs:{icon:""}},[e(m.Z,[t._v("more_vert")])],1)],1),e(_.Z,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(v.Z,{key:n},[e(c.Z,{attrs:{flat:""}},[e(f.ZB,[t._v(t._s(t.text))])],1)],1)})),1)],1)},y=[],w={data(){return{tab:null,items:["web","shopping","videos","images","news"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},k=w,O=n(1001),C=(0,O.Z)(k,x,y,!1,null,null,null),P=C.exports,j=n(8893),q=n(2082),S=function(){var t=this,e=t._self._c;return e(j.Z,t._l(4,(function(n){return e(q.Z,{key:n,attrs:{color:"red lighten-2",large:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[e("span",[t._v("Tus eu perfecto")])]},proxy:!0}],null,!0)},[e(c.Z,{staticClass:"elevation-2"},[e(f.EB,{staticClass:"headline"},[t._v("Lorem ipsum")]),e(f.ZB,[t._v(" Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. ")])],1)],1)})),1)},B=[],T={},H=(0,O.Z)(T,S,B,!1,null,null,null),M=H.exports,W=n(9223),E=n(8003),L=function(){var t=this,e=t._self._c;return e(E.Z,{attrs:{color:"#5c6bc0",height:"auto"}},[e(c.Z,{staticClass:"indigo lighten-1 white--text text-xs-center",attrs:{flat:"",tile:""}},[e(f.ZB,t._l(t.icons,(function(n){return e(l.Z,{key:n,staticClass:"mx-3 white--text",attrs:{icon:""}},[e(m.Z,{attrs:{size:"24px"}},[t._v(t._s(n))])],1)})),1),e(f.ZB,{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),e(W.Z),e(f.ZB,{staticClass:"white--text"},[t._v(" ©2018 — "),e("strong",[t._v("Vuetify")])])],1)],1)},z=[],F={data:()=>({icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"]})},V=F,A=(0,O.Z)(V,L,z,!1,null,null,null),D=A.exports,N={name:"HelloWorld",data:()=>({}),components:{HeaderComponent:P,HistoryContent:M,FooterComponent:D}},U=N,$=(0,O.Z)(U,a,s,!1,null,null,null),G=$.exports,I={name:"App",components:{HelloWorld:G},data:()=>({})},J=I,K=(0,O.Z)(J,r,u,!1,null,null,null),Q=K.exports,R=n(8864);i.ZP.use(R.Z);var X=new R.Z({});i.ZP.config.productionTip=!1,new i.ZP({vuetify:X,icons:{iconfont:"fa"},render:t=>t(Q)}).$mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var u=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,s=0;s<i.length;s++)(!1&r||u>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(a=!1,r<u&&(u=r));if(a){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,u=i[0],a=i[1],s=i[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var c=s(n)}for(e&&e(i);l<u.length;l++)r=u[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkexapmle_vue"]=self["webpackChunkexapmle_vue"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8038)}));i=n.O(i)})();
//# sourceMappingURL=app.1645da1e.js.map