(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"0eec":function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:a,data:s,children:o=[]}=e,{class:r,staticClass:i,style:c,staticStyle:l,attrs:u={},...d}=s;return n("svg",{class:[r,i],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg"},u),...d},o.concat([n("path",{attrs:{d:"M11.362 2C15.518 2 14 8 14 8s6-1.65 6 2.457V22H4V2h7.362zm.827-2H2v24h20V9.614C22 7.223 15.352 0 12.189 0zM17 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3H7v1h10v-1zm-5-6H7v4h5v-4z"}})]))}}},"425f":function(t,e,n){},"54a3":function(t,e,n){t.exports=n.p+"img/dark-main-logo.fa639a11.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(t.componentName,{tag:"component"}),n("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{staticClass:"nav",class:{hidden:!t.showNavbar,shadowed:t.shadowNavbar}}),a("sidebar-social",{staticClass:"sidebar"}),a("b-row",{staticClass:"main-content",attrs:{"no-gutters":!0}},[a("b-col",[a("img",{attrs:{id:"main-logo",src:n("54a3"),alt:"Main Logo"}}),a("br"),a("a",[t._v("Welcome to my website. There is more to come.")])])],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{staticClass:"logo",attrs:{href:"#"}},[a("img",{staticClass:"contents img1",attrs:{src:n("ea4e"),alt:"imageAlt1"}}),a("img",{staticClass:"contents img2",attrs:{src:n("80ff"),alt:"imageAlt2"}})]),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto button",attrs:{"align-v":"center"}},t._l(t.ButtonInfo,(function(e){return a("b-nav-item",{key:e.id,staticClass:"button",attrs:{href:e.link}},[t._v(t._s(e.msg))])})),1)],1)],1)},l=[],u={name:"NavBar",data:function(){return{ButtonInfo:[{id:0,link:"#resume",msg:"Resume"},{id:1,link:"#contact",msg:"Contact"},{id:2,link:"#experience",msg:"Experience"},{id:3,link:"#about",msg:"About"}]}},props:{username:String}},d=u,f=(n("c849"),n("2877")),h=Object(f["a"])(d,c,l,!1,null,"24a4cd2e",null),v=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{staticClass:"sidebar",attrs:{"align-self":"center"}},[n("b-row",{attrs:{"align-h":"center"}},[n("a",{staticClass:"svg-container animate-hover",attrs:{href:"mailto:burwinliu1@gmail.com"}},[n("logo-email",{staticClass:"svg animate-hover "})],1)]),n("b-row",{attrs:{"align-h":"center"}},[n("a",{staticClass:"svg-container animate-hover",attrs:{href:"https://github.com/burwinliu"}},[n("logo-github",{staticClass:"svg animate-hover"})],1)]),n("b-row",{attrs:{"align-h":"center"}},[n("a",{staticClass:"svg-container animate-hover",attrs:{href:"https://www.linkedin.com/in/burwin-liu"}},[n("logo-linked-in",{staticClass:"svg animate-hover"})],1)]),n("b-row",{attrs:{"align-h":"center"}},[n("a",{staticClass:"svg-container animate-hover",attrs:{href:"https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing"}},[n("logo-resume",{staticClass:"svg animate-hover"})],1)])],1)},g=[],m=n("c43b"),p=n.n(m),w=n("786d"),x=n.n(w),y=n("d0cd"),_=n.n(y),C=n("0eec"),O=n.n(C),M={name:"SidebarSocial",components:{LogoEmail:p.a,LogoGithub:x.a,LogoLinkedIn:_.a,LogoResume:O.a}},S=M,z=(n("c432"),Object(f["a"])(S,b,g,!1,null,"4c738fec",null)),j=z.exports;console.log("registered");var k={name:"Index",components:{NavBar:v,SidebarSocial:j},data:function(){return{showNavbar:!0,shadowNavbar:!1,lastScrollPosition:0}},mounted:function(){this.lastScrollPosition=window.pageYOffset,window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){window.pageYOffset<0||Math.abs(window.pageYOffset-this.lastScrollPosition)<60||(window.pageYOffset>60?this.shadowNavbar=!0:this.shadowNavbar=!1,this.showNavbar=window.pageYOffset<this.lastScrollPosition,this.lastScrollPosition=window.pageYOffset)}}},L=k,N=(n("d917"),Object(f["a"])(L,r,i,!1,null,"2efdb75c",null)),P=N.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("a",{staticClass:"background"},[t._v(" We are not currently supported on web browsing at this size, please come back some other time! ")])])],1)},E=[],V={name:"IndexMobile"},Y=V,B=(n("ad31"),Object(f["a"])(Y,I,E,!1,null,"c00ab8b8",null)),H=B.exports,R={name:"App",methods:{isMobile:function(){return screen.width<=1e3||screen.height<=600},onResize:function(){if(this.isMobile()&&!0!==this.mobile)this.mobile=!0,this.componentName="IndexMobile";else{if(this.isMobile()||!0!==this.mobile)return;this.mobile=!1,this.componentName="Index"}}},mounted:function(){window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},data:function(){return{mobile:Boolean,componentName:"Index"}},components:{Index:P,IndexMobile:H}},$=R,T=(n("034f"),Object(f["a"])($,s,o,!1,null,null,null)),A=T.exports,D=n("5f5b"),J=n("b1e0"),W=(n("f9e3"),n("2dd8"),{"/":"Index","/about":"IndexMobile"}),X=n("8c4f");a["default"].use(D["a"]),a["default"].use(J["a"]),a["default"].config.productionTip=!1;var F=new X["a"]({router:W});new a["default"]({router:F,render:function(t){return t(A)}}).$mount("#app")},"59d5":function(t,e,n){},7428:function(t,e,n){},"786d":function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:a,data:s,children:o=[]}=e,{class:r,staticClass:i,style:c,staticStyle:l,attrs:u={},...d}=s;return n("svg",{class:[r,i],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 438.549 438.549"},u),...d},o.concat([n("path",{attrs:{d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"}})]))}}},"80ff":function(t,e,n){t.exports=n.p+"img/dark-logo-selected.f47a3d00.png"},"85ec":function(t,e,n){},"8aff":function(t,e,n){},ad31:function(t,e,n){"use strict";var a=n("425f"),s=n.n(a);s.a},c432:function(t,e,n){"use strict";var a=n("7428"),s=n.n(a);s.a},c43b:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:a,data:s,children:o=[]}=e,{class:r,staticClass:i,style:c,staticStyle:l,attrs:u={},...d}=s;return n("svg",{class:[r,i],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg"},u),...d},o.concat([n("path",{attrs:{d:"M0 3v18h24V3H0zm6.623 7.929L2 16.641V7.183l4.623 3.746zM2.482 5h19.035L12 12.713 2.482 5zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663l5.513-6.812zm9.208-1.264L22 7.183v9.348l-4.616-5.607z"}})]))}}},c849:function(t,e,n){"use strict";var a=n("8aff"),s=n.n(a);s.a},d0cd:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:a,data:s,children:o=[]}=e,{class:r,staticClass:i,style:c,staticStyle:l,attrs:u={},...d}=s;return n("svg",{class:[r,i],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 430.117 430.117"},u),...d},o.concat([n("path",{attrs:{d:"M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z"}})]))}}},d917:function(t,e,n){"use strict";var a=n("59d5"),s=n.n(a);s.a},ea4e:function(t,e,n){t.exports=n.p+"img/dark-logo.bf916334.png"}});
//# sourceMappingURL=app.4536ee8f.js.map