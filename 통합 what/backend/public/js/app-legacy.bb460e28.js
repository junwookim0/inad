(function(){"use strict";var t={7301:function(t,n,e){var r=e(144),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t.Menu?e("div",{staticClass:"sidebar"},[e("div",{attrs:{id:"logo"}},[e("v-icon",{staticClass:"mb-2",attrs:{size:"32px",id:"holiday_village"}},[t._v("holiday_village")]),t._v(" MY "),e("br"),t._v(" INTERIOR ")],1),e("router-link",{attrs:{to:"/"}},[e("v-icon",{attrs:{dark:""}},[t._v("home")]),t._v("Home")],1),e("router-link",{attrs:{to:"/modelinghotel"}},[e("v-icon",{attrs:{dark:""}},[t._v("apartment")]),t._v(" HOTEL")],1),e("router-link",{attrs:{to:"/modelingdew"}},[e("v-icon",{attrs:{dark:""}},[t._v("living")]),t._v(" LIVING SPACE")],1),e("router-link",{attrs:{to:"/modelingcafe"}},[e("v-icon",{attrs:{dark:""}},[t._v("local_cafe")]),t._v(" CAFE")],1),e("router-link",{attrs:{to:"/modelinghairshop"}},[e("v-icon",{attrs:{dark:""}},[t._v("content_cut")]),t._v(" HAIRSHOP")],1),e("router-link",{attrs:{to:"/modelingportfolio"}},[e("v-icon",{attrs:{dark:""}},[t._v("description")]),t._v(" PORTFOLIO ")],1),e("div",{attrs:{id:"Menubtn"}},[e("button",{on:{click:t.toggle}},[e("v-icon",{attrs:{dark:""}},[t._v("keyboard_double_arrow_right")])],1)])],1):e("div",{staticClass:"sidebar"},[e("div",{attrs:{id:"logo"}},[e("v-icon",{staticClass:"mb-2",attrs:{size:"32px",id:"holiday_village"}},[t._v("holiday_village")])],1),e("v-tooltip",{attrs:{right:"",color:"rgba(32,73,105,1)"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("router-link",{attrs:{to:"/"}},[e("v-icon",t._g(t._b({attrs:{dark:""}},"v-icon",o,!1),r),[t._v(" mdi-home ")])],1)]}}])},[e("span",[t._v("Home")])]),e("v-tooltip",{attrs:{right:"",color:"rgba(32,73,105,1)"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("router-link",{attrs:{to:"/modelinghotel"}},[e("v-icon",t._g(t._b({attrs:{dark:""}},"v-icon",o,!1),r),[t._v(" apartment ")])],1)]}}])},[e("span",[t._v("Hotel")])]),e("v-tooltip",{attrs:{right:"",color:"rgba(32,73,105,1)"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("router-link",{attrs:{to:"/modelingdew"}},[e("v-icon",t._g(t._b({attrs:{dark:""}},"v-icon",o,!1),r),[t._v(" living ")])],1)]}}])},[e("span",[t._v("Living Space")])]),e("v-tooltip",{attrs:{right:"",color:"rgba(32,73,105,1)"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("router-link",{attrs:{to:"/modelingcafe"}},[e("v-icon",t._g(t._b({attrs:{dark:""}},"v-icon",o,!1),r),[t._v(" local_cafe ")])],1)]}}])},[e("span",[t._v("Living Space")])]),e("v-tooltip",{attrs:{right:"",color:"rgba(32,73,105,1)"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("router-link",{attrs:{to:"/modelinghairshop"}},[e("v-icon",t._g(t._b({attrs:{dark:""}},"v-icon",o,!1),r),[t._v(" content_cut ")])],1)]}}])},[e("span",[t._v("Hair Shop")])]),e("v-tooltip",{attrs:{right:"",color:"rgba(32,73,105,1)"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("router-link",{attrs:{to:"/modelingportfolio"}},[e("v-icon",t._g(t._b({attrs:{dark:""}},"v-icon",o,!1),r),[t._v(" description ")])],1)]}}])},[e("span",[t._v("PORTFOLIO")])]),e("div",{attrs:{id:"Menubtn"}},[e("button",{on:{click:t.toggle}},[e("v-icon",{attrs:{dark:""}},[t._v("keyboard_double_arrow_left")])],1)])],1),e("router-view")],1)},i=[],a={name:"App",data:()=>({Menu:!0}),methods:{toggle(){this.Menu=!this.Menu}}},u=a,c=e(1001),s=e(3453),l=e.n(s),d=e(4456),v=e(9953),f=(0,c.Z)(u,o,i,!1,null,null,null),p=f.exports;l()(f,{VIcon:d.Z,VTooltip:v.Z});var g=e(8345),h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("v-app",[e("v-img",{attrs:{height:"1000",src:"/img/1.jpg","aspect-ratio":"1.5"}},[e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("div",{attrs:{id:"carouseltext"}},[e("p",{staticClass:"animate__animated animate__fadeInLeft"},[t._v(" WE CREATE YOUR ")]),e("p",{staticClass:"animate__animated animate__slideInRight"},[t._v(" SPACE BETTER ")])])])],1)],1)],1)},m=[],_={name:"HomeView"},b=_,k=e(303),y=e(5288),w=e(7894),C=(0,c.Z)(b,h,m,!1,null,null,null),O=C.exports;l()(C,{VApp:k.Z,VImg:y.Z,VRow:w.Z}),r.Z.use(g.Z);const E=[{path:"/",name:"home",component:O},{path:"/modelinghotel",name:"hotel",component:function(){return e.e(443).then(e.bind(e,4364))}},{path:"/modelingdew",name:"living",component:function(){return e.e(443).then(e.bind(e,8007))}},{path:"/modelingcafe",name:"cafe",component:function(){return e.e(443).then(e.bind(e,3129))}},{path:"/modelinghairshop",name:"hairshop",component:function(){return e.e(443).then(e.bind(e,1585))}},{path:"/modelingportfolio",name:"portfolio",component:function(){return e.e(443).then(e.bind(e,7990))}}],S=new g.Z({mode:"history",base:"/",routes:E});var T=S,A=e(6482);r.Z.use(A.Z);var Z=new A.Z({}),j=e(9669),I=e.n(j);r.Z.prototype.$http=I(),r.Z.config.productionTip=!1,new r.Z({router:T,vuetify:Z,render:function(t){return t(p)}}).$mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/about-legacy.4eff4fd7.js"}}(),function(){e.miniCssF=function(t){return"css/about.f182347a.css"}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="frontend:";e.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.setAttribute("data-webpack",n+i),u.src=r),t[r]=[o];var v=function(n,e){u.onerror=u.onload=null,clearTimeout(f);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(e)})),n)return n(e)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=v.bind(null,u.onerror),u.onload=v.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t=function(t,n,e,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)e();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(t,n){for(var e=document.getElementsByTagName("link"),r=0;r<e.length;r++){var o=e[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=e.miniCssF(r),u=e.p+a;if(n(a,u))return o();t(r,u,o,i)}))},o={143:0};e.f.miniCss=function(t,n){var e={443:1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=r(t).then((function(){o[t]=0}),(function(n){throw delete o[t],n})))}}(),function(){var t={143:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=i);var a=e.p+e.u(n),u=new Error,c=function(r){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};e.l(a,c,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var l=c(e)}for(n&&n(r);s<a.length;s++)i=a[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7301)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.bb460e28.js.map