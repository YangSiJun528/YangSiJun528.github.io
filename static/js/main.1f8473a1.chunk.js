(this.webpackJsonpfeeca=this.webpackJsonpfeeca||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(32),r=c.n(a),i=(c(39),c(3)),j=(c(40),c(41),c(2)),o=c(0);var l=function(e){var t=Object(j.f)();function c(){!0===e.underBarSwitch?e.setUnderBarSwitch(!1):e.setUnderBarSwitch(!0)}return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{onClick:c,className:"underBar-block "+(!0===e.underBarSwitch?"underBar-block-on":"underBar-block-off")}),Object(o.jsxs)("ul",{className:"underBar",children:[Object(o.jsx)("li",{children:Object(o.jsx)("img",{onClick:function(){t.push("/home")},className:"nav_icon",src:"icons/nav_home.svg",alt:"\ud648"})}),Object(o.jsx)("li",{className:"nav_profile",children:Object(o.jsx)("img",{onClick:c,className:"nav_icon",src:"icons/profile.png",alt:"\ud504\ub85c\ud544"})}),Object(o.jsx)("li",{children:Object(o.jsx)("img",{onClick:function(){t.push("/setting")},className:"nav_icon",src:"icons/nav_setting.svg",alt:"\uc124\uc815"})})]}),Object(o.jsxs)("ul",{className:"underBar-menu "+(!0===e.underBarSwitch?"underBar-animation-on":"underBar-animation-off"),children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:"icons/profile.svg",alt:""}),"\ud504\ub85c\ud544"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:"icons/menu_upload.svg",alt:""}),"\uc791\ud488 \uc5c5\ub85c\ub4dc"]}),Object(o.jsx)("li",{children:"\ud53c\ub4dc\ubc31 \uad00\ub9ac"})]})]})};c(48);var u=function(e){var t=Object(j.f)();return Object(o.jsxs)("div",{className:"topBar",children:[!1===e.topBarBackSpace?Object(o.jsx)("img",{onClick:function(){t.push("/home")},className:"feeca_logo",src:"icons/feeca_logo.svg",alt:"\ud53c\uce74 \ub85c\uace0"}):Object(o.jsx)("img",{onClick:function(){t.goBack()},src:"icons/arrow_back.svg",alt:"\ub4a4\ub85c\uac00\uae30"}),""===e.topBarText?null:Object(o.jsx)("p",{className:"topBar_title",children:e.topBarText}),!1===e.topBarIcon?null:Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"topBar_icon",src:"icons/header_bell.svg",alt:"\uc54c\ub78c"}),Object(o.jsx)("img",{className:"topBar_icon",src:"icons/header_search.svg",alt:"\uac80\uc0c9"})]})]})},b=c(11),d=c.n(b),p=c(22),O=c(13),x=(c(50),c(34)),h=c(10),f=c.n(h);function m(e){var t=Object(x.a)(),c=Object(i.a)(t,2),s=c[0],a=c[1],r=(Object(j.f)(),Object(n.useState)([])),l=Object(i.a)(r,2),u=l[0],b=l[1],h=Object(n.useState)(1),m=Object(i.a)(h,2),B=m[0],T=m[1],v=Object(n.useState)(!1),k=Object(i.a)(v,2),w=k[0],S=k[1],N=Object(n.useCallback)(Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,f.a.get("http://3.34.192.110/").then((function(e){console.log(e),b([].concat(Object(p.a)(u),Object(p.a)(e.data.works)))})).catch((function(){}));case 3:S(!1);case 4:case"end":return e.stop()}}),e)}))),[B]);return Object(n.useEffect)((function(){N()}),[N]),Object(n.useEffect)((function(){a&&!w&&T((function(e){return e+1}))}),[a,w]),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"grid",children:[u.map((function(e,t){return Object(o.jsx)(g,{i:t,url:e.img,id:e.id,name:e.name,author:e.author},t)})),Object(o.jsx)("div",{ref:s,className:"bottom"})]})})}function g(e){var t=Object(j.f)();return Object(o.jsxs)("div",{className:"work",onClick:function(){t.push("/work/".concat(e.id))},children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:e.url,className:"work-img"})}),Object(o.jsx)("p",{className:"work-name",children:e.name}),Object(o.jsxs)("p",{className:"work-author",children:["@",e.author]}),Object(o.jsx)("img",{src:"icons/work_like.svg",className:"work-like"})]})}c(69);function B(e){var t=Object(j.f)();return Object(n.useEffect)((function(){e.setTopBarText("\uc124\uc815")}),[]),Object(o.jsxs)("div",{className:"setting-main",children:[Object(o.jsx)("p",{children:"\uc124\uc815"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){t.push("/setting/account")},children:"\uacc4\uc815 \uc124\uc815"}),Object(o.jsx)("li",{onClick:function(){t.push("/setting/alarm")},children:"\uc54c\ub9bc \uc124\uc815"}),Object(o.jsx)("li",{onClick:function(){t.push("/setting/blockUsers")},children:"\uc720\uc800 \ucc28\ub2e8"}),Object(o.jsx)("li",{onClick:function(){t.push("/setting/blockTags")},children:"\ud0dc\uadf8 \ucc28\ub2e8"}),Object(o.jsx)("li",{onClick:function(){t.push("/setting")},className:"red-font",children:"\ub85c\uadf8\uc544\uc6c3"}),Object(o.jsx)("li",{onClick:function(){t.push("/setting")},className:"red-font",children:"\uacc4\uc815 \ud0c8\ud1f4"})]}),Object(o.jsx)("p",{children:"\uae30\ud0c0"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){t.push("/setting/help")},children:"\ub3c4\uc6c0\ub9d0"}),Object(o.jsx)("li",{onClick:function(){t.push("/setting/termsOfUse")},children:"\uc774\uc6a9\uc57d\uad00"}),Object(o.jsx)("li",{onClick:function(){t.push("/setting/policy")},children:"\uac1c\uc778\uc815\ubcf4\ucde8\uae09\ubc29\uce68"})]})]})}function T(e){return Object(n.useEffect)((function(){e.setTopBarText("\uacc4\uc815 \uc124\uc815")}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"\uacc4\uc815 \uc124\uc815"})})}function v(e){return Object(n.useEffect)((function(){e.setTopBarText("\uc54c\ub78c \uc124\uc815")}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"\uc54c\ub78c \uc124\uc815"})})}function k(e){return Object(n.useEffect)((function(){e.setTopBarText("\uc720\uc800 \ucc28\ub2e8")}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"\uc720\uc800 \ucc28\ub2e8"})})}function w(e){return Object(n.useEffect)((function(){e.setTopBarText("\ud0dc\uadf8 \ucc28\ub2e8")}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"\ud0dc\uadf8 \ucc28\ub2e8"})})}function S(e){return Object(n.useEffect)((function(){e.setTopBarText("\ub3c4\uc6c0\ub9d0")}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"\ub3c4\uc6c0\ub9d0"})})}function N(e){return Object(n.useEffect)((function(){e.setTopBarText("\uc774\uc6a9\uc57d\uad00")}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"\uc774\uc6a9\uc57d\uad00"})})}function C(e){return Object(n.useEffect)((function(){e.setTopBarText("\uac1c\uc778\uc815\ubcf4\ucde8\uae09\ubc29\uce68")}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"\uac1c\uc778\uc815\ubcf4\ucde8\uae09\ubc29\uce68"})})}var _=function(e){return Object(j.f)(),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/setting/account",children:Object(o.jsx)(T,{setTopBarText:e.setTopBarText})}),Object(o.jsx)(j.a,{path:"/setting/alarm",children:Object(o.jsx)(v,{setTopBarText:e.setTopBarText})}),Object(o.jsx)(j.a,{path:"/setting/blockUsers",children:Object(o.jsx)(k,{setTopBarText:e.setTopBarText})}),Object(o.jsx)(j.a,{path:"/setting/blockTags",children:Object(o.jsx)(w,{setTopBarText:e.setTopBarText})}),Object(o.jsx)(j.a,{path:"/setting/help",children:Object(o.jsx)(S,{setTopBarText:e.setTopBarText})}),Object(o.jsx)(j.a,{path:"/setting/termsOfUse",children:Object(o.jsx)(N,{setTopBarText:e.setTopBarText})}),Object(o.jsx)(j.a,{path:"/setting/policy",children:Object(o.jsx)(C,{setTopBarText:e.setTopBarText})}),Object(o.jsx)(j.a,{path:"/setting",children:Object(o.jsx)(B,{setTopBarText:e.setTopBarText})})]})})};c(70);var y=function(e){var t=Object(j.f)(),c=Object(n.useState)(null),s=Object(i.a)(c,2),a=s[0],r=s[1],l=Object(j.g)().work_id;return Object(n.useEffect)(Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://3.34.192.110/work/".concat(l)).then((function(e){console.log(e.data),r(e.data)})).catch((function(){}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(o.jsx)("div",{className:"container",children:null!=a&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:Object(o.jsx)("img",{src:a.work.img})}),Object(o.jsx)("button",{onClick:function(){t.push("/user/".concat(a.work.author_id))},children:"\uc720\uc800"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:a.work.name}),Object(o.jsx)("p",{children:a.work.author})]}),Object(o.jsxs)("p",{children:["likes: ",a.work.like]}),Object(o.jsx)("p",{children:a.work.tag})]})})};c(71);var I=function(e){Object(j.f)();var t=Object(n.useState)(null),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(j.g)().user_id;return Object(n.useEffect)(Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://3.34.192.110/user/".concat(r)).then((function(e){console.log(e.data),a(e.data)})).catch((function(){}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(o.jsx)("div",{className:"container",children:null!=s&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:Object(o.jsx)("img",{src:s.banner_img})}),Object(o.jsx)("p",{children:Object(o.jsx)("img",{className:"pro",src:s.profile_img})}),Object(o.jsxs)("p",{children:["\uc774\ub984: ",s.name," & follower: ",s.follower]}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:s.intro}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:[s.name,"\uc758 \ucd5c\uadfc \uc791\ud488"]}),Object(o.jsx)("div",{children:s.works.map((function(e,t){return Object(o.jsx)(g,{i:t,url:e.img,id:e.id,name:e.name,author:e.author},t)}))})]})})},E=c(17);c(72);var F=function(e){var t=Object(j.f)(),c=Object(n.useState)({}),s=Object(i.a)(c,2);return s[0],s[1],Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("form",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"\uc544\uc774\ub514"}),Object(o.jsx)("input",{type:"text",name:"id",autocomplete:"off",id:"id",placeholder:"ID\ub97c \uc785\ub825\ud558\uc138\uc694"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"\ube44\ubc00\ubc88\ud638"}),Object(o.jsx)("input",{type:"password",autocomplete:"off",name:"password",id:"password",placeholder:"Passwrod\ub97c \uc785\ub825\ud558\uc138\uc694"})]}),Object(o.jsx)("p",{children:Object(o.jsx)("input",{type:"button",value:"\uc81c\ucd9c",onClick:function(c){c.preventDefault();var n={};n.id=document.querySelector("#id").value,n.password=document.querySelector("#password").value,f.a.post("http://3.34.192.110/login",Object(E.a)({},n)).then((function(c){console.log(c),1==c.data.result?(e.setLogin(!0),e.setUser(c.data.user),alert("\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),t.push("/home")):"false"==c.data.result&&(alert(c.data.reason),t.push("/login"))})).catch((function(e){alert("\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."),t.push("/home")}))}})})]}),Object(o.jsx)("p",{children:Object(o.jsx)("input",{type:"button",value:"\ud68c\uc6d0\uac00\uc785",onClick:function(){t.push("/register")}})})]})};c(73);var U=function(e){var t=Object(j.f)(),c=Object(n.useState)({}),s=Object(i.a)(c,2);return s[0],s[1],Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"\ub2c9\ub124\uc784"}),Object(o.jsx)("input",{type:"text",name:"name",autocomplete:"off",id:"name",placeholder:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud558\uc138\uc694"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"\uc774\uba54\uc77c"}),Object(o.jsx)("input",{type:"text",name:"email",autocomplete:"off",id:"email",placeholder:"e-mail\uc744 \uc785\ub825\ud558\uc138\uc694"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"\uc544\uc774\ub514"}),Object(o.jsx)("input",{type:"text",name:"id",autocomplete:"off",id:"id",placeholder:"ID\ub97c \uc785\ub825\ud558\uc138\uc694"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"\ube44\ubc00\ubc88\ud638"}),Object(o.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Passwrod\ub97c \uc785\ub825\ud558\uc138\uc694"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"\uc131\ubcc4"}),Object(o.jsx)("input",{type:"radio",name:"gender",class:"gender",value:"M"}),"\ub0a8\uc790",Object(o.jsx)("input",{type:"radio",name:"gender",class:"gender",value:"F"}),"\uc5ec\uc790",Object(o.jsx)("input",{type:"radio",name:"gender",class:"gender",value:"N"}),"\uc54c\uc218\uc5c6\uc74c"]}),Object(o.jsx)("p",{children:Object(o.jsx)("input",{type:"button",value:"\uc81c\ucd9c",onClick:function(e){e.preventDefault();var c={};c.id=document.querySelector("#id").value,c.name=document.querySelector("#name").value,c.password=document.querySelector("#password").value,c.email=document.querySelector("#email").value;for(var n=document.querySelectorAll(".gender"),s=0;s<n.length;s++)n[s].checked&&(c.gender=n[s].value);console.log(c),f.a.post("http://3.34.192.110/register",Object(E.a)({},c)).then((function(e){console.log(e),1==e.data.result?(alert("\ud68c\uc6d0\uac00\uc785 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),t.push("/home")):"false"==e.data.result&&(alert(e.data.reason),t.push("/register"))})).catch((function(e){alert("\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."),t.push("/home")}))}})})]})})};var q=function(){var e=Object(j.f)(),t=Object(n.useState)(!1),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),b=Object(i.a)(r,2),d=b[0],p=b[1],O=Object(n.useState)(null),x=Object(i.a)(O,2),h=(x[0],x[1]),f=Object(n.useState)(!1),g=Object(i.a)(f,2),B=g[0],T=g[1],v=Object(n.useState)(!1),k=Object(i.a)(v,2),w=(k[0],k[1]),S=Object(n.useState)(""),N=Object(i.a)(S,2),C=N[0],E=N[1],q=Object(n.useState)(!0),L=Object(i.a)(q,2),D=(L[0],L[1]);return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j.c,{children:!0===s?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j.a,{path:"/webtoon",children:Object(o.jsx)("p",{children:"\uc6f9\ud230\ud654\uba74"})}),Object(o.jsxs)(j.a,{path:"/",children:[Object(o.jsx)(l,{underBarSwitch:B,setUnderBarSwitch:T}),Object(o.jsxs)(j.a,{path:"/setting",children:[Object(o.jsx)(u,{topBarBackSpace:!0,setTopBarBackSpace:w,topBarText:C,setTopBarText:E,topBarIcon:!1,setTopBarIcon:D}),Object(o.jsx)(_,{setTopBarText:E})]}),Object(o.jsxs)(j.a,{path:"/work/:work_id",children:[Object(o.jsx)(u,{topBarBackSpace:!0,setTopBarBackSpace:w,topBarText:"",setTopBarText:E,topBarIcon:!0,setTopBarIcon:D}),Object(o.jsx)(y,{})]}),Object(o.jsxs)(j.a,{path:"/home",children:[Object(o.jsx)(u,{topBarBackSpace:!1,setTopBarBackSpace:w,topBarText:"",setTopBarText:E,topBarIcon:!0,setTopBarIcon:D}),Object(o.jsx)(m,{})]}),Object(o.jsxs)(j.a,{path:"/user/:user_id/",children:[Object(o.jsx)(u,{topBarBackSpace:!0,setTopBarBackSpace:w,topBarText:"",setTopBarText:E,topBarIcon:!0,setTopBarIcon:D}),Object(o.jsx)(I,{})]})]})]}):!1===d?Object(o.jsxs)(j.a,{path:"/",children:[Object(o.jsx)("p",{children:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),Object(o.jsx)("button",{onClick:function(){p(!0),e.push("/login")},children:"\ub85c\uadf8\uc778 \ud558\ub7ec \uac00\uae30"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(j.a,{path:"/login",children:[Object(o.jsx)(u,{topBarBackSpace:!0,setTopBarBackSpace:w,topBarText:C,setTopBarText:E,topBarIcon:!1,setTopBarIcon:D}),Object(o.jsx)(F,{login:s,setLogin:a,setUser:h,setLogining:p})]}),Object(o.jsxs)(j.a,{path:"/register",children:[Object(o.jsx)(u,{topBarBackSpace:!0,setTopBarBackSpace:w,topBarText:C,setTopBarText:E,topBarIcon:!1,setTopBarIcon:D}),Object(o.jsx)(U,{setLogining:p})]})]})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))},D=c(4);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(D.a,{children:Object(o.jsx)(q,{})})}),document.getElementById("root")),L()}},[[74,1,2]]]);
//# sourceMappingURL=main.1f8473a1.chunk.js.map