(function(t){function e(e){for(var i,s,r=e[0],c=e[1],d=e[2],h=0,u=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(u.length)u.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0eec":function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:d,attrs:l={},...h}=o;return n("svg",{class:[s,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg"},l),...h},a.concat([n("path",{attrs:{d:"M11.362 2C15.518 2 14 8 14 8s6-1.65 6 2.457V22H4V2h7.362zm.827-2H2v24h20V9.614C22 7.223 15.352 0 12.189 0zM17 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3H7v1h10v-1zm-5-6H7v4h5v-4z"}})]))}}},"11aa":function(t,e,n){"use strict";var i=n("a616"),o=n.n(i);o.a},"49f5":function(t,e,n){"use strict";var i=n("9512"),o=n.n(i);o.a},"564b":function(t,e,n){"use strict";var i=n("6c57"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[n("router-view",{staticClass:"background"})],1)},a=[],s={name:"App",data:function(){return{mobile:Boolean}}},r=s,c=(n("5c0b"),n("2877")),d=Object(c["a"])(r,o,a,!1,null,null,null),l=d.exports,h=n("5f5b"),u=n("b1e0"),w=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{staticClass:"index-nav",class:{hidden:!t.showNavbar,shadowed:t.shadowNavbar},attrs:{id:"navbar"},on:{OpenNavBar:this.showNav,CloseNavBar:this.closeNav}}),n("b-row",{staticClass:"main-body",class:{"body-wrap-small":this.bodyWrapSmall},attrs:{"no-gutters":""}},[n("b-col",{staticClass:"sidebar"},[n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("sidebar-social",{staticClass:"index-sidebar-pos",attrs:{id:"sidebar"}})],1)],1),n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("router-view",{class:[this.windowWidth>=992?"router-padding":"px-3",this.windowHeight<600||this.windowWidth<400?"index-router-wrapper-small":""],attrs:{id:"router"}})],1)],1),"view-home"!==this.$route.name?n("footer-info",{staticClass:"footer",attrs:{id:"footer"}}):t._e()],1)},v=[],f=(n("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar",{staticClass:"px-3",attrs:{toggleable:"lg",type:"dark"}},[i("b-navbar-brand",{staticClass:"logo router-link focus",class:{"logo-large":this.windowWidth>=992},attrs:{id:"logo",to:{name:"view-home"}},on:{mouseover:function(e){return t.hovered()},mouseleave:function(e){return t.unhovered()},click:function(e){return t.selected()}}},[i("transition",{attrs:{name:"fade"}},[this.hoverLogo||this.selectedLogo?t._e():i("img",{key:"imageAltReg",attrs:{src:n("ea4e"),alt:"imageAltReg"}}),this.hoverLogo&&!this.selectedLogo?i("img",{key:"imageAltHov",attrs:{src:n("a1ce"),alt:"imageAltHov"}}):t._e(),this.selectedLogo?i("img",{key:"imageAltSel",attrs:{src:n("80ff"),alt:"imageAltSel"}}):t._e()])],1),i("div",{staticClass:"absolute_position",attrs:{align:"right"}},[i("b-navbar-toggle",{staticClass:"icon text-center",attrs:{target:"navbar-side-collapse"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.expanded;return[i("b-icon",t._g({},n))]}}])})],1),i("b-collapse",{staticClass:"class-wrapper",attrs:{id:"navbar-toggle-collapse","is-nav":""}},[i("b-col",{staticClass:"class-wrapper"},[i("b-navbar-nav",{staticClass:"ml-auto",attrs:{align:"right"}},[i("b-navbar-nav",{attrs:{"align-v":"center"}},[t._l(t.ButtonInfoLocal,(function(e){return i("b-nav-item",{key:e.id,staticClass:"router-link button focus",attrs:{to:{name:e.name}}},[t._v(t._s(e.msg))])})),t._l(t.ButtonInfoWeb,(function(e){return i("b-nav-item",{key:e.id,staticClass:"router-link button focus",attrs:{href:e.href}},[t._v(t._s(e.msg))])})),i("b-nav-item",{staticClass:"router-link button focus",attrs:{href:n("db8c"),title:"Burwin Liu - Resume"}},[t._v("Resume")])],2)],1)],1)],1),i("b-sidebar",{staticClass:"sidebar-wrapper",attrs:{id:"navbar-side-collapse","backdrop-variant":"dark","bg-variant":"dark","text-variant":"light",width:"fit-content","is-nav":"",shadow:"",right:"",backdrop:""},on:{change:t.onShown}},[i("b-col",{staticClass:"class-wrapper sidebar-wrapper sidebar"},[i("b-navbar-nav",{staticClass:"ml-auto px-2 sidebar-wrapper sidebar",attrs:{"align-v":"center",align:"left"}},[t._l(t.ButtonInfoLocal,(function(e){return i("b-nav-item",{key:e.id,staticClass:"router-link button focus px-4 py-2",attrs:{to:{name:e.name}}},[t._v(t._s(e.msg))])})),t._l(t.ButtonInfoWeb,(function(e){return i("b-nav-item",{key:e.id,staticClass:"router-link button focus px-4 py-2",attrs:{href:e.href}},[t._v(t._s(e.msg))])})),i("b-nav-item",{staticClass:"router-link button focus px-4 py-2",attrs:{href:n("db8c"),title:"Burwin Liu - Resume"}},[t._v("Resume")])],2)],1)],1)],1)}),g=[],b={name:"NavBar",data:function(){return{ButtonInfoLocal:[{id:0,name:"view-about",msg:"About"},{id:1,name:"view-contact",msg:"Contact"}],ButtonInfoWeb:[{id:2,href:"https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/",msg:"Notebook"}],expanded:!1,selectedLogo:!1,hoverLogo:!1,windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){document.addEventListener("touchstart",this.handleTouchStart),document.addEventListener("touchmove",this.handleTouchMove),document.addEventListener("click",this.checkClick),window.addEventListener("resize",this.resize)},beforeDestroy:function(){document.removeEventListener("touchstart",this.handleTouchStart),document.removeEventListener("touchmove",this.handleTouchMove),document.removeEventListener("click",this.checkClick),window.removeEventListener("resize",this.resize)},props:{username:String},methods:{handleTouchStart:function(t){this.xDown=t.touches[0].clientX,this.yDown=t.touches[0].clientY},handleTouchMove:function(t){if(this.xDown&&this.yDown){var e=t.touches[0].clientX,n=t.touches[0].clientY,i=this.xDown-e,o=this.yDown-n;Math.abs(i)>Math.abs(o)&&(i>1?this.handleLeftSwipe():i<-1&&this.handleRightSwipe()),this.xDown=null,this.yDown=null}},handleLeftSwipe:function(){document.getElementById("navbar-side-collapse").hasAttribute("aria-hidden")&&this.$root.$emit("bv::toggle::collapse","navbar-side-collapse")},handleRightSwipe:function(){document.getElementById("navbar-side-collapse").hasAttribute("aria-hidden")?"view-home"!==this.$route.name&&this.$router.push({name:"view-home"}):this.$root.$emit("bv::toggle::collapse","navbar-side-collapse")},checkClick:function(t){document.getElementById("logo").contains(t.target)?(this.selectedLogo=!0,this.hoverLogo=!0):(this.selectedLogo=!1,this.hoverLogo=!1)},selected:function(){this.selectedLogo=!0},hovered:function(){this.hoverLogo=!0},unhovered:function(){this.hoverLogo=!1},onShown:function(t){!0===t?this.$emit("OpenNavBar"):!1===t&&this.$emit("CloseNavBar")},resize:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth}}},p=b,y=(n("564b"),Object(c["a"])(p,f,g,!1,null,"9738dc10",null)),C=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-nav",{staticClass:"sidebar",attrs:{vertical:""}},[n("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"mailto:burwinliu1@gmail.com"}},[n("logo-email",{staticClass:"svg"})],1),n("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://github.com/burwinliu"}},[n("logo-github",{staticClass:"svg"})],1),n("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://www.linkedin.com/in/burwin-liu"}},[n("logo-linked-in",{staticClass:"svg"})],1),n("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing"}},[n("logo-resume",{staticClass:"svg"})],1)],1)],1)],1)],1)},_=[],E=n("c43b"),L=n.n(E),W=n("786d"),S=n.n(W),B=n("d0cd"),I=n.n(B),k=n("0eec"),H=n.n(k),z={name:"SidebarSocial",components:{LogoEmail:L.a,LogoGithub:S.a,LogoLinkedIn:I.a,LogoResume:H.a},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},O=z,$=(n("b940"),Object(c["a"])(O,x,_,!1,null,"952cc904",null)),j=$.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrapper"},[n("b-row",{staticClass:"space"}),n("b-col",{staticClass:"text-center footer-wrapper",attrs:{"no-gutters":""}},[t.windowWidth<=992?n("b-row",[n("b-nav",{staticClass:"footer-contents"},[n("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"mailto:burwinliu1@gmail.com"}},[n("logo-email",{staticClass:"svg"})],1),n("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://github.com/burwinliu"}},[n("logo-github",{staticClass:"svg"})],1),n("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://www.linkedin.com/in/burwin-liu"}},[n("logo-linked-in",{staticClass:"svg"})],1),n("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing"}},[n("logo-resume",{staticClass:"svg"})],1)],1)],1):t._e(),n("b-row",[n("a",{staticClass:"footer-contents",attrs:{href:"https://github.com/burwinliu/personalWebsite"}},[t._v(" Built by Burwin Liu ")])])],1),n("b-row",{staticClass:"space"})],1)},A=[],N={name:"FooterInfo",components:{LogoEmail:L.a,LogoGithub:S.a,LogoLinkedIn:I.a,LogoResume:H.a},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},P=N,D=(n("9551"),Object(c["a"])(P,M,A,!1,null,"962d579e",null)),R=D.exports,T={name:"Index",components:{NavBar:C,SidebarSocial:j,FooterInfo:R},data:function(){return{sidebarShown:!1,showNavbar:!0,shadowNavbar:!1,lastScrollPosition:0,windowHeight:window.innerHeight,windowWidth:window.innerWidth,routerWidth:0,footerWidth:0,footerHeight:0,xDown:null,yDown:null,bodyWrapSmall:(this.windowHeight<600||this.windowWidth<400)&&"view-home"!==this.$route.name,sidebarAttatched:!1,footerTop:0}},created:function(){document.title=this.$route.meta.title},mounted:function(){this.routerWidth=document.getElementById("router").offsetWidth,"view-home"!==this.$route.name&&(this.footerWidth=document.getElementById("footer").offsetWidth,this.footerHeight=document.getElementById("footer").offsetHeight),this.$root.$on("bv::collapse::state",this.collapse),this.lastScrollPosition=window.pageYOffset,window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.resize),this.onScroll()},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll),this.$root.$off("bv::collapse::state")},methods:{onScroll:function(){if("view-home"!==this.$route.name){var t=document.getElementById("footer").getBoundingClientRect(),e=document.getElementById("sidebar").getBoundingClientRect();this.footerTop=t.top,t.top<=e.bottom?(document.getElementById("sidebar").style.bottom="".concat(t.height,"px"),this.sidebarAttatched=!0):t.top-t.height>e.bottom&&this.sidebarAttatched&&(document.getElementById("sidebar").style.bottom="0px",this.sidebarAttatched=!1)}!0!==this.sidebarShown&&(window.pageYOffset<0||Math.abs(window.pageYOffset-this.lastScrollPosition)<60||(window.pageYOffset>60?this.shadowNavbar=!0:this.shadowNavbar=!1,this.showNavbar=window.pageYOffset<this.lastScrollPosition,this.lastScrollPosition=window.pageYOffset))},showNav:function(){this.showNavbar=!0,this.lastScrollPosition=window.pageYOffset,document.getElementById("navbar").classList.remove("hidden")},closeNav:function(){this.showNavbar=!0,this.lastScrollPosition=window.pageYOffset},collapse:function(t,e){if("navbar-side-collapse"===t)if(this.sidebarShown=e,!0===this.sidebarShown)document.getElementById("router").style.top="-".concat(window.scrollY,"px"),document.getElementById("router").style.width="".concat(this.routerWidth,"px"),document.getElementById("router").style.position="fixed","view-home"!==this.$route.name&&(document.getElementById("footer").style.top="".concat(this.footerTop,"px"),document.getElementById("footer").style.position="fixed",document.getElementById("footer").style.width="".concat(this.footerWidth,"px"),document.getElementById("footer").style.height="".concat(this.footerHeight,"px"));else{"view-home"!==this.$route.name&&(document.getElementById("footer").style.top="",document.getElementById("footer").style.position="",document.getElementById("footer").style.width="",document.getElementById("footer").style.height=""),document.getElementById("router").classList.remove("sidebar-shown");var n=document.getElementById("router").style.top;document.getElementById("router").style.position="",document.getElementById("router").style.width="",window.scrollTo(0,-1*parseInt(n||"0"))}},resize:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.routerWidth=document.getElementById("router").offsetWidth,"view-home"!==this.$route.name&&(this.footerWidth=document.getElementById("footer").offsetWidth,this.footerHeight=document.getElementById("footer").offsetHeight),this.bodyWrapSmall=(this.windowHeight<600||this.windowWidth<400)&&"view-home"!==this.$route.name,this.windowWidth>992&&this.sidebarShown&&this.$root.$emit("bv::toggle::collapse","navbar-side-collapse")}}},V=T,Y=(n("eb53"),Object(c["a"])(V,m,v,!1,null,"4fc22bc2",null)),F=Y.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("div",{staticClass:"wrapper home"},[n("b-row",{staticClass:"body-text"},[n("h2",[t._v("Hi! I am")])]),n("b-row",{staticClass:"body-text"},[n("h1",[t._v("Burwin Liu")])]),n("b-row",{staticClass:"body-text"},[n("a",[t._v("I am a student of Computer Science and Software Engineering.")])]),n("b-row",{staticClass:"body-text"},[n("b",[t._v("I work within Software Engineering, from Application Development to Data Science and everything in between ")])]),n("b-row",{staticClass:"body-text"},[n("b-button",{staticClass:"my-3 btn-about",attrs:{to:"about"}},[t._v(" Find Out More!")])],1)],1)])},G=[],J={name:"ViewHome",created:function(){document.title=this.$route.meta.title},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){var t=this;window.onresize=function(){t.windowHeight=window.innerHeight,t.windowWidth=window.innerWidth}}},U=J,Q=(n("b603"),Object(c["a"])(U,X,G,!1,null,"22539915",null)),q=Q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"no-gutters":""}},[n("b-row",{attrs:{id:"view-about","no-gutters":""}},[n("b-col",{class:{page:t.windowWidth>=992,"mobile-page":t.windowWidth<=992},attrs:{id:"introduction"}},[n("b-row",{attrs:{"no-gutters":""}},[n("h1",[t._v(" About me ")])]),n("b-row",{attrs:{"no-gutters":""}},[n("a",[t._v(" Hello! I'm Burwin Liu a Computer Scientist, a Software Engineer and a student. I'm currently based in Irvine at the moment, studying Computer Science at the University of California, Irvine.")]),n("a",[t._v(" In terms of experience, I have worked with Data Science, Front End Design, Back End Programming and Application Development. ")]),t._v(" "),n("br"),n("a",[t._v(" Just a few of the technologies I have recently worked with are: ")])]),n("b-row",[n("b-col",[n("ul",[n("li",[t._v("Node.JS")]),n("li",[t._v("Vue")]),n("li",[t._v("JavaScript")])])]),n("b-col",[n("ul",[n("li",[t._v("SQL")]),n("li",[t._v("Python")]),n("li",[t._v("Android Studio")])])])],1)],1)],1),n("b-row",[n("b-col",{class:{page:t.windowWidth>=992,"mobile-page":t.windowWidth<=992},attrs:{id:"Experience"}},[n("b-row",{attrs:{"no-gutters":""}},[n("h1",[t._v(" Experience ")])]),n("b-row",{attrs:{"no-gutters":""}},[n("view-about-experience")],1)],1)],1)],1)},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exp-wrapper"},[n("b-card-group",{attrs:{deck:""}},[n("b-tabs",{attrs:{id:"tab-exp","active-nav-item-class":"active-tab","nav-wrapper-class":"tab",card:"",vertical:t.windowWidth>992,"content-class":"custom-card","no-fade":""}},[n("b-tab",{attrs:{title:"University of California, Irvine",active:""}},[n("b-card-text",{staticClass:"card-text",attrs:{id:"card-1"}},[n("h1",[t._v("Undergraduate Research on Graph Algorithms ")]),n("h2",[t._v("March 2020 – Present")]),n("ul",[n("li",[t._v(" Compiled a database of Orthologs (Related Genes/Nodes between two graphs, found through biological research) of over 200 GB from over 25 separate data sources ")]),n("li",[t._v(" Discovered over 40 competing alignment algorithms and compiled and parsed over 10 those algorithms to compare performance against created Local Network Alignment algorithm ")]),n("li",[t._v(" Mentored a fellow undergraduate researcher and assisted in familiarizing a newcomer with established systems ")])])])],1)],1)],1)],1)},et=[],nt={name:"ViewAboutExperience",data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},it=nt,ot=(n("49f5"),Object(c["a"])(it,tt,et,!1,null,"06561ce9",null)),at=ot.exports,st={name:"ViewAbout",created:function(){document.title=this.$route.meta.title},components:{ViewAboutExperience:at},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},rt=st,ct=(n("11aa"),Object(c["a"])(rt,K,Z,!1,null,"6c120e63",null)),dt=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"align-middle",attrs:{id:"view-contact"}},[n("div",{staticClass:"page",attrs:{"align-v":"center"}},[n("b-row",[n("h1",{staticClass:"center-text",attrs:{"align-v":"center"}},[t._v(" Contact ")])]),n("b-row",[n("a",{staticClass:"center-text expand-width"},[t._v(" Currently, I am looking for opportunities for the upcoming Summer of 2021.")]),n("a",{staticClass:"center-text expand-width"},[t._v(" If you have any questions, or just want to chat, I would love to talk. Don't hesitate to contact me below, and I will try my utmost to get back to you. ")])]),n("b-button",{staticClass:"contact mx-auto ",attrs:{href:"mailto:burwinliu1@gmail.com"}},[t._v("Contact Me!")])],1)])},ht=[],ut={name:"ViewContact",created:function(){document.title=this.$route.meta.title},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){var t=this;window.onresize=function(){t.windowHeight=window.innerHeight,t.windowWidth=window.innerWidth}}},wt=ut,mt=(n("ef8c"),Object(c["a"])(wt,lt,ht,!1,null,"dfb518d4",null)),vt=mt.exports;i["default"].use(w["a"]);var ft=new w["a"]({routes:[{path:"/",component:F,children:[{name:"view-home",path:"",component:q,meta:{title:"Burwin Liu - Home Page"}},{name:"view-about",path:"about",component:dt,meta:{title:"Burwin Liu - About Page"}},{name:"view-contact",path:"contact",component:vt,meta:{title:"Burwin Liu - Contact Page"}}]}]}),gt=ft;n("7361");i["default"].use(h["a"]),i["default"].use(u["a"]),i["default"].config.productionTip=!1,new i["default"]({router:gt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),o=n.n(i);o.a},"6c57":function(t,e,n){},7361:function(t,e,n){},"786d":function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:d,attrs:l={},...h}=o;return n("svg",{class:[s,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 438.549 438.549"},l),...h},a.concat([n("path",{attrs:{d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"}})]))}}},"80ff":function(t,e,n){t.exports=n.p+"img/dark-logo-selected.ea423af8.png"},9512:function(t,e,n){},9551:function(t,e,n){"use strict";var i=n("cbca"),o=n.n(i);o.a},"9bb7":function(t,e,n){},"9c0c":function(t,e,n){},a1ce:function(t,e,n){t.exports=n.p+"img/dark-logo-hovered.36544dd7.png"},a616:function(t,e,n){},a65c:function(t,e,n){},b603:function(t,e,n){"use strict";var i=n("d7c0"),o=n.n(i);o.a},b940:function(t,e,n){"use strict";var i=n("a65c"),o=n.n(i);o.a},c43b:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:d,attrs:l={},...h}=o;return n("svg",{class:[s,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg"},l),...h},a.concat([n("path",{attrs:{d:"M0 3v18h24V3H0zm6.623 7.929L2 16.641V7.183l4.623 3.746zM2.482 5h19.035L12 12.713 2.482 5zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663l5.513-6.812zm9.208-1.264L22 7.183v9.348l-4.616-5.607z"}})]))}}},cbca:function(t,e,n){},d0cd:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:d,attrs:l={},...h}=o;return n("svg",{class:[s,r],style:[c,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 430.117 430.117"},l),...h},a.concat([n("path",{attrs:{d:"M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z"}})]))}}},d7c0:function(t,e,n){},db8c:function(t,e,n){t.exports=n.p+"c656215db50276495bfe47a0a387e1de.pdf"},ea4e:function(t,e,n){t.exports=n.p+"img/dark-logo.771ad996.png"},eb53:function(t,e,n){"use strict";var i=n("ec0a"),o=n.n(i);o.a},ec0a:function(t,e,n){},ef8c:function(t,e,n){"use strict";var i=n("9bb7"),o=n.n(i);o.a}});
//# sourceMappingURL=app.8768a322.js.map