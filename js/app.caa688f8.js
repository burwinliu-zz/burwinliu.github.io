(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],h=0,u=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0eec":function(t,e){t.exports={functional:!0,render(t,e){const{_c:i,_v:n,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:l,attrs:d={},...h}=o;return i("svg",{class:[s,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg"},d),...h},a.concat([i("path",{attrs:{d:"M11.362 2C15.518 2 14 8 14 8s6-1.65 6 2.457V22H4V2h7.362zm.827-2H2v24h20V9.614C22 7.223 15.352 0 12.189 0zM17 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3H7v1h10v-1zm-5-6H7v4h5v-4z"}})]))}}},"1bb2":function(t,e,i){"use strict";var n=i("3d7e"),o=i.n(n);o.a},"2a44":function(t,e,i){},"2bb6":function(t,e,i){"use strict";var n=i("f174"),o=i.n(n);o.a},"3d7e":function(t,e,i){},"3f80":function(t,e,i){},"48ce":function(t,e,i){},"4d47":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background"},[i("router-view",{staticClass:"background"})],1)},a=[],s={name:"App",data:function(){return{mobile:Boolean}}},r=s,c=(i("5c0b"),i("2877")),l=Object(c["a"])(r,o,a,!1,null,null,null),d=l.exports,h=i("7049"),u=i("498a"),w=i("f9bc"),m=i("331b"),v=i("89bf"),g=i("a7e2"),b=i("700c"),f=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",{staticClass:"index-nav",class:{hidden:!t.showNavbar,shadowed:t.shadowNavbar},attrs:{id:"navbar"},on:{OpenNavBar:this.showNav,CloseNavBar:this.closeNav}}),i("b-row",{staticClass:"main-body",class:{"body-wrap-small":this.bodyWrapSmall},attrs:{"no-gutters":""}},[i("b-col",{staticClass:"sidebar"},[i("transition",{attrs:{name:"component-fade",mode:"out-in"}},[i("sidebar-social",{staticClass:"index-sidebar-pos",attrs:{id:"sidebar"}})],1)],1),i("transition",{attrs:{name:"component-fade",mode:"out-in"}},[i("router-view",{class:[this.windowWidth>=992?"router-padding":"px-3",this.windowHeight<600||this.windowWidth<400?"index-router-wrapper-small":""],attrs:{id:"router"}})],1)],1),"view-home"!==this.$route.name?i("footer-info",{staticClass:"footer",attrs:{id:"footer"}}):t._e()],1)},y=[],C=(i("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"px-3",attrs:{toggleable:"lg",type:"dark"}},[n("b-navbar-brand",{staticClass:"logo router-link focus",class:{"logo-large":this.windowWidth>=992},attrs:{id:"logo",to:{name:"view-home"}},on:{mouseover:function(e){return t.hovered()},mouseleave:function(e){return t.unhovered()},click:function(e){return t.selected()}}},[n("transition",{attrs:{name:"fade"}},[this.hoverLogo||this.selectedLogo?t._e():n("img",{key:"imageAltReg",attrs:{src:i("ea4e"),alt:"imageAltReg"}}),this.hoverLogo&&!this.selectedLogo?n("img",{key:"imageAltHov",attrs:{src:i("a1ce"),alt:"imageAltHov"}}):t._e(),this.selectedLogo?n("img",{key:"imageAltSel",attrs:{src:i("80ff"),alt:"imageAltSel"}}):t._e()])],1),n("div",{staticClass:"absolute_position",attrs:{align:"right"}},[n("b-navbar-toggle",{staticClass:"icon text-center",attrs:{target:"navbar-side-collapse"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.expanded;return[n("b-icon",t._g({},i))]}}])})],1),n("b-collapse",{staticClass:"class-wrapper",attrs:{id:"navbar-toggle-collapse","is-nav":""}},[n("b-col",{staticClass:"class-wrapper"},[n("b-navbar-nav",{staticClass:"ml-auto",attrs:{align:"right"}},[n("b-navbar-nav",{attrs:{"align-v":"center"}},[t._l(t.ButtonInfoLocal,(function(e){return n("b-nav-item",{key:e.id,staticClass:"router-link button focus",attrs:{to:{name:e.name}}},[t._v(t._s(e.msg))])})),t._l(t.ButtonInfoWeb,(function(e){return n("b-nav-item",{key:e.id,staticClass:"router-link button focus",attrs:{href:e.href}},[t._v(t._s(e.msg))])})),n("b-nav-item",{staticClass:"router-link button focus",attrs:{href:i("db8c"),title:"Burwin Liu - Resume"}},[t._v("Resume")])],2)],1)],1)],1),n("b-sidebar",{staticClass:"sidebar-wrapper",attrs:{id:"navbar-side-collapse","backdrop-variant":"dark","bg-variant":"dark","text-variant":"light",width:"fit-content","is-nav":"",shadow:"",right:"",backdrop:""},on:{change:t.onShown}},[n("b-col",{staticClass:"class-wrapper sidebar-wrapper sidebar"},[n("b-navbar-nav",{staticClass:"ml-auto px-2 sidebar-wrapper sidebar",attrs:{"align-v":"center",align:"left"}},[t._l(t.ButtonInfoLocal,(function(e){return n("b-nav-item",{key:e.id,staticClass:"router-link button focus px-4 py-2",attrs:{to:{name:e.name}}},[t._v(t._s(e.msg))])})),t._l(t.ButtonInfoWeb,(function(e){return n("b-nav-item",{key:e.id,staticClass:"router-link button focus px-4 py-2",attrs:{href:e.href}},[t._v(t._s(e.msg))])})),n("b-nav-item",{staticClass:"router-link button focus px-4 py-2",attrs:{href:i("db8c"),title:"Burwin Liu - Resume"}},[t._v("Resume")])],2)],1)],1)],1)}),x=[],_={name:"NavBar",data:function(){return{ButtonInfoLocal:[{id:0,name:"view-about",msg:"About"},{id:1,name:"view-contact",msg:"Contact"}],ButtonInfoWeb:[{id:2,href:"https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/",msg:"Notebook"}],expanded:!1,selectedLogo:!1,hoverLogo:!1,windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){document.addEventListener("touchstart",this.handleTouchStart),document.addEventListener("touchmove",this.handleTouchMove),document.addEventListener("click",this.checkClick),window.addEventListener("resize",this.resize)},beforeDestroy:function(){document.removeEventListener("touchstart",this.handleTouchStart),document.removeEventListener("touchmove",this.handleTouchMove),document.removeEventListener("click",this.checkClick),window.removeEventListener("resize",this.resize)},props:{username:String},methods:{handleTouchStart:function(t){this.xDown=t.touches[0].clientX,this.yDown=t.touches[0].clientY},handleTouchMove:function(t){if(this.xDown&&this.yDown){var e=t.touches[0].clientX,i=t.touches[0].clientY,n=this.xDown-e,o=this.yDown-i;Math.abs(n)>Math.abs(o)&&(n>1?this.handleLeftSwipe():n<-1&&this.handleRightSwipe()),this.xDown=null,this.yDown=null}},handleLeftSwipe:function(){document.getElementById("navbar-side-collapse").hasAttribute("aria-hidden")&&this.$root.$emit("bv::toggle::collapse","navbar-side-collapse")},handleRightSwipe:function(){document.getElementById("navbar-side-collapse").hasAttribute("aria-hidden")?"view-home"!==this.$route.name&&this.$router.push({name:"view-home"}):this.$root.$emit("bv::toggle::collapse","navbar-side-collapse")},checkClick:function(t){document.getElementById("logo").contains(t.target)?(this.selectedLogo=!0,this.hoverLogo=!0):(this.selectedLogo=!1,this.hoverLogo=!1)},selected:function(){this.selectedLogo=!0},hovered:function(){this.hoverLogo=!0},unhovered:function(){this.hoverLogo=!1},onShown:function(t){!0===t?this.$emit("OpenNavBar"):!1===t&&this.$emit("CloseNavBar")},resize:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth}}},E=_,L=(i("8143"),Object(c["a"])(E,C,x,!1,null,"e9bc7ac8",null)),W=L.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-nav",{staticClass:"sidebar",attrs:{vertical:""}},[i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"mailto:burwinliu1@gmail.com"}},[i("logo-email",{staticClass:"svg"})],1),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://github.com/burwinliu"}},[i("logo-github",{staticClass:"svg"})],1),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://www.linkedin.com/in/burwin-liu"}},[i("logo-linked-in",{staticClass:"svg"})],1),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing"}},[i("logo-resume",{staticClass:"svg"})],1)],1)],1)],1)],1)},k=[],H=i("c43b"),I=i.n(H),B=i("786d"),z=i.n(B),j=i("d0cd"),O=i.n(j),$=i("0eec"),A=i.n($),M={name:"SidebarSocial",components:{LogoEmail:I.a,LogoGithub:z.a,LogoLinkedIn:O.a,LogoResume:A.a},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},P=M,D=(i("dec3"),Object(c["a"])(P,S,k,!1,null,"48d76fdc",null)),N=D.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-wrapper"},[i("b-row",{staticClass:"space"}),i("b-col",{staticClass:"text-center footer-wrapper",attrs:{"no-gutters":""}},[t.windowWidth<=992?i("b-row",[i("b-nav",{staticClass:"footer-contents"},[i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"mailto:burwinliu1@gmail.com"}},[i("logo-email",{staticClass:"svg"})],1),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://github.com/burwinliu"}},[i("logo-github",{staticClass:"svg"})],1),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://www.linkedin.com/in/burwin-liu"}},[i("logo-linked-in",{staticClass:"svg"})],1),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing"}},[i("logo-resume",{staticClass:"svg"})],1)],1)],1):t._e(),i("b-row",[i("a",{staticClass:"footer-contents",attrs:{href:"https://github.com/burwinliu/personalWebsite"}},[t._v(" Built by Burwin Liu ")])])],1),i("b-row",{staticClass:"space"})],1)},R=[],T={name:"FooterInfo",components:{LogoEmail:I.a,LogoGithub:z.a,LogoLinkedIn:O.a,LogoResume:A.a},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},Y=T,F=(i("e38e"),Object(c["a"])(Y,V,R,!1,null,"67e572b9",null)),G=F.exports,J={name:"Index",components:{NavBar:W,SidebarSocial:N,FooterInfo:G},data:function(){return{sidebarShown:!1,showNavbar:!0,shadowNavbar:!1,lastScrollPosition:0,windowHeight:window.innerHeight,windowWidth:window.innerWidth,routerWidth:0,footerWidth:0,footerHeight:0,xDown:null,yDown:null,bodyWrapSmall:(this.windowHeight<600||this.windowWidth<400)&&"view-home"!==this.$route.name,sidebarAttatched:!1,footerTop:0}},created:function(){document.title=this.$route.meta.title},mounted:function(){this.routerWidth=document.getElementById("router").offsetWidth,"view-home"!==this.$route.name&&(this.footerWidth=document.getElementById("footer").offsetWidth,this.footerHeight=document.getElementById("footer").offsetHeight),this.$root.$on("bv::collapse::state",this.collapse),this.lastScrollPosition=window.pageYOffset,window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.resize),this.onScroll()},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll),this.$root.$off("bv::collapse::state")},methods:{onScroll:function(){if("view-home"!==this.$route.name){var t=document.getElementById("footer").getBoundingClientRect(),e=document.getElementById("sidebar").getBoundingClientRect();this.footerTop=t.top,t.top<=e.bottom?(document.getElementById("sidebar").style.bottom="".concat(t.height,"px"),this.sidebarAttatched=!0):t.top-t.height>e.bottom&&this.sidebarAttatched&&(document.getElementById("sidebar").style.bottom="0px",this.sidebarAttatched=!1)}!0!==this.sidebarShown&&(window.pageYOffset<0||Math.abs(window.pageYOffset-this.lastScrollPosition)<60||(window.pageYOffset>60?this.shadowNavbar=!0:this.shadowNavbar=!1,this.showNavbar=window.pageYOffset<this.lastScrollPosition,this.lastScrollPosition=window.pageYOffset))},showNav:function(){this.showNavbar=!0,this.lastScrollPosition=window.pageYOffset,document.getElementById("navbar").classList.remove("hidden")},closeNav:function(){this.showNavbar=!0,this.lastScrollPosition=window.pageYOffset},collapse:function(t,e){if("navbar-side-collapse"===t)if(this.sidebarShown=e,!0===this.sidebarShown)document.getElementById("router").style.top="-".concat(window.scrollY,"px"),document.getElementById("router").style.width="".concat(this.routerWidth,"px"),document.getElementById("router").style.position="fixed","view-home"!==this.$route.name&&(document.getElementById("footer").style.top="".concat(this.footerTop,"px"),document.getElementById("footer").style.position="fixed",document.getElementById("footer").style.width="".concat(this.footerWidth,"px"),document.getElementById("footer").style.height="".concat(this.footerHeight,"px"));else{"view-home"!==this.$route.name&&(document.getElementById("footer").style.top="",document.getElementById("footer").style.position="",document.getElementById("footer").style.width="",document.getElementById("footer").style.height=""),document.getElementById("router").classList.remove("sidebar-shown");var i=document.getElementById("router").style.top;document.getElementById("router").style.position="",document.getElementById("router").style.width="",window.scrollTo(0,-1*parseInt(i||"0"))}},resize:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.routerWidth=document.getElementById("router").offsetWidth,"view-home"!==this.$route.name&&(this.footerWidth=document.getElementById("footer").offsetWidth,this.footerHeight=document.getElementById("footer").offsetHeight),this.bodyWrapSmall=(this.windowHeight<600||this.windowWidth<400)&&"view-home"!==this.$route.name,this.windowWidth>992&&this.sidebarShown&&this.$root.$emit("bv::toggle::collapse","navbar-side-collapse")}}},U=J,X=(i("ee9f"),Object(c["a"])(U,p,y,!1,null,"68443ebb",null)),Q=X.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center"},[i("div",{staticClass:"wrapper home"},[i("b-row",{staticClass:"body-text"},[i("h2",[t._v("Hi! I am")])]),i("b-row",{staticClass:"body-text"},[i("h1",[t._v("Burwin Liu")])]),i("b-row",{staticClass:"body-text"},[i("p",[t._v("I am a student of Computer Science and Software Engineering.")])]),i("b-row",{staticClass:"body-text"},[i("b",[t._v("I work within Software Engineering, from Application Development to Data Science and everything in between ")])]),i("b-row",{staticClass:"body-text"},[i("b-button",{staticClass:"my-3 btn-about",attrs:{to:"about"}},[t._v(" Find Out More!")])],1)],1)])},K=[],Z={name:"ViewHome",created:function(){document.title=this.$route.meta.title},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){var t=this;window.onresize=function(){t.windowHeight=window.innerHeight,t.windowWidth=window.innerWidth}}},tt=Z,et=(i("c526"),Object(c["a"])(tt,q,K,!1,null,"7d963f9f",null)),it=et.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{"no-gutters":""}},[i("b-row",{attrs:{id:"view-about","no-gutters":""}},[i("b-col",{class:{page:t.windowWidth>=992,"mobile-page":t.windowWidth<=992},attrs:{id:"introduction"}},[i("b-row",{attrs:{"no-gutters":""}},[i("h1",[t._v(" About me ")])]),i("b-row",{attrs:{"no-gutters":""}},[i("p",[t._v(" Hello! I'm Burwin Liu a Computer Scientist, a Software Engineer and a student. I'm currently based in Irvine at the moment, studying Computer Science at the University of California, Irvine. ")]),i("p",[t._v(" In terms of experience, I have worked with Data Science, Front End Design, Back End Programming and Application Development. ")]),i("br"),i("p",[t._v(" Just a few of the technologies I have recently worked with are: ")])]),i("b-row",[i("b-col",[i("ul",[i("li",[t._v("Node.JS")]),i("li",[t._v("Vue")]),i("li",[t._v("JavaScript")])])]),i("b-col",[i("ul",[i("li",[t._v("SQL")]),i("li",[t._v("Python")]),i("li",[t._v("Android Studio")])])])],1)],1)],1),i("b-row",[i("b-col",{class:{page:t.windowWidth>=992,"mobile-page":t.windowWidth<=992},attrs:{id:"Experience"}},[i("b-row",{attrs:{"no-gutters":""}},[i("h1",[t._v(" Experience ")])]),i("b-row",{attrs:{"no-gutters":""}},[i("view-about-experience")],1)],1)],1),i("b-row",[i("b-col",{class:{page:t.windowWidth>=992,"mobile-page":t.windowWidth<=992},attrs:{id:"Experience"}},[i("b-row",{attrs:{"align-h":"center","no-gutters":""}},[i("h1",[t._v(" Projects ")])]),i("b-row",{attrs:{"no-gutters":""}},[i("view-about-projects")],1)],1)],1)],1)},ot=[],at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"exp-wrapper"},[i("b-card-group",{attrs:{deck:""}},[i("b-tabs",{attrs:{id:"tab-exp","active-nav-item-class":"active-tab","nav-wrapper-class":"tab",card:"",vertical:t.windowWidth>992,"content-class":"custom-card","no-fade":""}},[i("b-tab",{attrs:{title:"University of California, Irvine",active:""}},[i("b-card-text",{staticClass:"card-text",attrs:{id:"card-1"}},[i("h1",[t._v("Undergraduate Research on Graph Algorithms ")]),i("h2",[t._v("March 2020 – Present")]),i("ul",[i("li",[t._v(" Compiled a database of Orthologs (Related Genes/Nodes between two graphs, found through biological research) of over 200 GB from over 25 separate data sources ")]),i("li",[t._v(" Discovered over 40 competing alignment algorithms and compiled and parsed over 10 those algorithms to compare performance against created Local Network Alignment algorithm ")]),i("li",[t._v(" Mentored a fellow undergraduate researcher and assisted in familiarizing a newcomer with established systems ")])])])],1)],1)],1)],1)},st=[],rt={name:"ViewAboutExperience",data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},ct=rt,lt=(i("2bb6"),Object(c["a"])(ct,at,st,!1,null,"a9ddd8d6",null)),dt=lt.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"projects-wrapper"},[i("b-col",{attrs:{"align-h":"center"}},[i("b-row",{attrs:{"align-h":"center"}},[i("b-card",{staticClass:"mx-2 my-2",staticStyle:{"max-width":"20rem"},attrs:{"bg-variant":"dark","text-variant":"light"}},[i("b-row",{staticClass:"proj-title-wrapper px-3 pb-2"},[i("h4",{staticClass:"proj-card-title"},[t._v("jpgViewer")]),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://github.com/burwinliu/jpgViewer"}},[i("logo-github",{staticClass:"svg"})],1)],1),i("b-card-text",[t._v(" Livestreaming camera video feed to be parsed with Computer Vision for human faces. A work in progress, now with camera client, web client interface and server-side scripts ")]),i("ul",{staticClass:"proj-tools proj-tools-list mt-5"},[i("li",[t._v("Django")]),i("li",[t._v("openCV")])])],1),i("b-card",{staticClass:"mx-2 my-2",staticStyle:{"max-width":"20rem"},attrs:{"bg-variant":"dark","text-variant":"light"}},[i("b-row",{staticClass:"proj-title-wrapper px-3 pb-2"},[i("h4",{staticClass:"proj-card-title"},[t._v("Family Tree")]),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://github.com/burwinliu/familytree"}},[i("logo-github",{staticClass:"svg"})],1)],1),i("b-card-text",[t._v(" A web applicaton to get family trees straight -- an excercise in Database Programming, REST APIs, Full Stack Development and much more! In progress, and moving forwards. ")]),i("ul",{staticClass:"proj-tools proj-tools-list mt-5"},[i("li",[t._v("mySQL")]),i("li",[t._v("Flask")]),i("li",[t._v("REST")]),i("li",[t._v("node.JS")]),i("li",[t._v("react")]),i("li",[t._v("material-UI")])])],1),i("b-card",{staticClass:"mx-2 my-2",staticStyle:{"max-width":"20rem"},attrs:{"bg-variant":"dark","text-variant":"light"}},[i("b-row",{staticClass:"proj-title-wrapper px-3 pb-2"},[i("h4",{staticClass:"proj-card-title"},[t._v("SDHacks 2019")]),i("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://github.com/burwinliu/ImageCalendar"}},[i("logo-github",{staticClass:"svg"})],1)],1),i("b-card-text",[t._v(" Application with Android Development, Machine Learning and Cloud Computing -- take a picture and upload it to server to parse out information! ")]),i("ul",{staticClass:"proj-tools proj-tools-list mt-5"},[i("li",[t._v("Android")]),i("li",[t._v("AWS")])])],1)],1)],1)],1)},ut=[],wt={name:"ViewAboutProjects",components:{LogoGithub:z.a},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},mt=wt,vt=(i("b2a4"),Object(c["a"])(mt,ht,ut,!1,null,"691430bc",null)),gt=vt.exports,bt={name:"ViewAbout",created:function(){document.title=this.$route.meta.title},components:{ViewAboutExperience:dt,ViewAboutProjects:gt},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}},ft=bt,pt=(i("59fb3"),Object(c["a"])(ft,nt,ot,!1,null,"282281a8",null)),yt=pt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"align-middle",attrs:{id:"view-contact"}},[i("div",{staticClass:"page",attrs:{"align-v":"center"}},[i("b-row",[i("h1",{staticClass:"center-text",attrs:{"align-v":"center"}},[t._v(" Contact ")])]),i("b-row",[i("p",{staticClass:"center-text expand-width"},[t._v(" If you have any questions, got a project idea or just want to chat, I would love to talk. Don't hesitate to contact me below, and I will try my utmost to get back to you — my inbox is open! ")])]),i("b-button",{staticClass:"contact mx-auto ",attrs:{href:"mailto:burwinliu1@gmail.com"}},[t._v("Contact Me!")])],1)])},xt=[],_t={name:"ViewContact",created:function(){document.title=this.$route.meta.title},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){var t=this;window.onresize=function(){t.windowHeight=window.innerHeight,t.windowWidth=window.innerWidth}}},Et=_t,Lt=(i("1bb2"),Object(c["a"])(Et,Ct,xt,!1,null,"895609d2",null)),Wt=Lt.exports;n["a"].use(f["a"]);var St=new f["a"]({routes:[{path:"/",component:Q,children:[{name:"view-home",path:"",component:it,meta:{title:"Burwin Liu - Home Page"}},{name:"view-about",path:"about",component:yt,meta:{title:"Burwin Liu - About Page"}},{name:"view-contact",path:"contact",component:Wt,meta:{title:"Burwin Liu - Contact Page"}}]}]}),kt=St;i("7361");n["a"].use(h["a"]),n["a"].use(h["a"]),n["a"].use(u["a"]),n["a"].use(w["a"]),n["a"].use(m["a"]),n["a"].use(v["a"]),n["a"].use(g["a"]),n["a"].use(b["a"]),n["a"].config.productionTip=!1,new n["a"]({router:kt,render:function(t){return t(d)}}).$mount("#app")},"59fb3":function(t,e,i){"use strict";var n=i("48ce"),o=i.n(n);o.a},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),o=i.n(n);o.a},"6ee8":function(t,e,i){},7361:function(t,e,i){},"786d":function(t,e){t.exports={functional:!0,render(t,e){const{_c:i,_v:n,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:l,attrs:d={},...h}=o;return i("svg",{class:[s,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 438.549 438.549"},d),...h},a.concat([i("path",{attrs:{d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"}})]))}}},"80ff":function(t,e,i){t.exports=i.p+"img/dark-logo-selected.ea423af8.png"},8143:function(t,e,i){"use strict";var n=i("3f80"),o=i.n(n);o.a},"8bc7":function(t,e,i){},"9c0c":function(t,e,i){},a1ce:function(t,e,i){t.exports=i.p+"img/dark-logo-hovered.36544dd7.png"},b2a4:function(t,e,i){"use strict";var n=i("f889"),o=i.n(n);o.a},c43b:function(t,e){t.exports={functional:!0,render(t,e){const{_c:i,_v:n,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:l,attrs:d={},...h}=o;return i("svg",{class:[s,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg"},d),...h},a.concat([i("path",{attrs:{d:"M0 3v18h24V3H0zm6.623 7.929L2 16.641V7.183l4.623 3.746zM2.482 5h19.035L12 12.713 2.482 5zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663l5.513-6.812zm9.208-1.264L22 7.183v9.348l-4.616-5.607z"}})]))}}},c526:function(t,e,i){"use strict";var n=i("2a44"),o=i.n(n);o.a},d0cd:function(t,e){t.exports={functional:!0,render(t,e){const{_c:i,_v:n,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:l,attrs:d={},...h}=o;return i("svg",{class:[s,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 430.117 430.117"},d),...h},a.concat([i("path",{attrs:{d:"M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z"}})]))}}},db8c:function(t,e,i){t.exports=i.p+"c656215db50276495bfe47a0a387e1de.pdf"},dec3:function(t,e,i){"use strict";var n=i("4d47"),o=i.n(n);o.a},e38e:function(t,e,i){"use strict";var n=i("8bc7"),o=i.n(n);o.a},ea4e:function(t,e,i){t.exports=i.p+"img/dark-logo.771ad996.png"},ee9f:function(t,e,i){"use strict";var n=i("6ee8"),o=i.n(n);o.a},f174:function(t,e,i){},f889:function(t,e,i){}});
//# sourceMappingURL=app.caa688f8.js.map