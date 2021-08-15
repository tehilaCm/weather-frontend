(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(e,t,r){},59:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(22),s=r.n(c),o=(r(58),r(59),r(15)),i=r(5),u=r(27),l=r(8),j=r(17),d=r.n(j);var b=new Proxy({},{get:function(e,t){return void 0===e[t]?function(e){return{type:(r=t,r.replace(/([A-Z])/g,"_$1").toUpperCase()),payload:e};var r}:e[t]}}),p=r(2),h=Object(l.b)((function(e){return{user:e.auth.user}}),(function(e){return{setUser:function(t){return e(b.setUser(t))},logout:function(){return e(b.logout())}}}))((function(e){var t=e.setUser,r=e.user,a=e.logout;Object(n.useEffect)((function(){t(JSON.parse(localStorage.getItem("profile")))}),[]);var c=function(){"block"===d()(".collapse").css("display")&&d()("#navbarNav").hide("slow")},s=Object(i.f)();return r?Object(p.jsx)("div",{children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(o.b,{className:"navbar-brand brand",to:"/home",onClick:function(){return c()},children:"Weather"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return d()("#navbarNav").toggle("slow")},children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/home",onClick:function(){return c()},children:"Home"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.b,{className:"nav-link",to:"/history",onClick:function(){return c()},children:"History"})})]}),Object(p.jsx)("button",{className:"btn btn-primary logout-btn",onClick:function(){a(),s.push("/")},children:"Logout"})]})]})})}):null})),f=r(4),O=r.n(f),m=r(6),x=r(7),v=r(23),y=r(51),g=r.n(y).a.create({baseURL:"https://weather-app-tehila.herokuapp.com/"});g.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var N=function(e){return g.get("weather/getWeatherByCityForSystem/".concat(e))},k=function(e){return g.post("user/signUp",e)},w=function(e){return g.post("user/signIn",e)},S=function(e,t){return g.get("user/weatherByCity/".concat(e,"/").concat(t))},C=function(e){return g.get("user/getSearches/".concat(e))},H=function(e,t){return g.delete("user/deletSearch/".concat(e,"/").concat(t))},I=function(e){return g.delete("user/deletAllSearches/".concat(e))},P=r(52),A=function(){var e="",t=Object(l.d)((function(e){return e.auth.user})),r=Object(i.f)(),n=Object(l.c)();return function(){var a=Object(m.a)(O.a.mark((function a(){var c,s,o;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(c=null===t||void 0===t?void 0:t.token)&&(s=Object(P.a)(c),e=s.id,o=1e3*s.exp-6e4,Date.now()>=o&&(n(b.logout()),r.push("/"))),a.abrupt("return",{userId:e,token:c});case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()},D=r(21),E=Object(l.b)((function(e){return{user:e.auth.user}}),(function(e){return{deleteHistorySearch:function(t){return e(b.deleteSearch(t))},logout:function(){return e(b.logout())}}}))((function(e){var t=e.weatherDetails,r=e.isHistory,a=e.user,c=e.deleteHistorySearch,s=e.logout,o=t.city,u=t.feelsLike,l=t.humidity,j=t.pressure,d=t.temp,b=t.tempMax,h=t.tempMin,f=t.wind,y=t._id,g=f.speed,N=f.deg,k=Object(n.useState)(""),w=Object(x.a)(k,2),S=w[0],C=w[1],I=Object(i.f)(),P=A();Object(n.useEffect)(Object(m.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,r=t.userId,t.token&&C(r);case 6:case"end":return e.stop()}}),e)}))),[a]);var E=function(){var e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S||!y){e.next=10;break}return c(y),e.prev=2,e.next=5,H(S,y);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),e.t0.response&&401===e.t0.response.status&&(s(),I.push("/"));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:r?"card center weather-card history-card":"card center weather-card",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h5",{className:"city",children:o}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col sm-12 lg-6",children:[Object(p.jsxs)("p",{children:["Temp: ",parseInt(d-273.15)+" "," ",Object(p.jsx)(D.a,{})]}),Object(p.jsxs)("p",{children:["Feels like: ",parseInt(u-273.15)+" "," ",Object(p.jsx)(D.a,{})]}),Object(p.jsxs)("p",{children:["Temp max: ",parseInt(b-273.15)+" "," ",Object(p.jsx)(D.a,{})]}),Object(p.jsxs)("p",{children:["Temp min: ",parseInt(h-273.15)+" "," ",Object(p.jsx)(D.a,{})]})]}),Object(p.jsxs)("div",{className:"col sm-12 lg-6",children:[Object(p.jsxs)("p",{children:["Humidity: ",parseInt(l)+"%"]}),Object(p.jsxs)("p",{children:["Pressure: ",j]}),Object(p.jsx)("p",{children:"Wind:"}),Object(p.jsxs)("p",{children:["Speed: ",g]}),Object(p.jsxs)("p",{children:["Degree: ",parseInt(N-273.15)+" "," ",Object(p.jsx)(D.a,{})]})]})]})]}),r&&Object(p.jsx)(v.a,{className:"trash-icon",onClick:E})]})})})),R=r(53),T=a.a.forwardRef((function(e,t){var r=["Ashdod","Beer sheva","Ashkelon","Bnei brak","Herzliya","Holon","Hadera","Jerusalem","Haifa","kfar Saba","Petah Tikva","Netanya","Rehovot","Rishon LeZion","Tel Aviv","Ramat Gan"],a=e.handleClick,c=Object(n.useState)([]),s=Object(x.a)(c,2),o=s[0],i=s[1];Object(n.useEffect)((function(){u(o)}),[]);var u=function(){var e=Object(m.a)(O.a.mark((function e(){var t,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r);case 2:t=e.sent,n=t.data,a=n.resultAllCities,i(Object(R.a)(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(o)return Object(p.jsxs)("div",{className:"cities-container",children:[Object(p.jsx)("h4",{children:"Popular cities in Israel"}),o.map((function(e,r){return Object(p.jsxs)("div",{className:"popular-city",onClick:function(){return function(e){t.current.value=e,a()}(e.city)},children:[Object(p.jsx)("p",{children:e.city}),Object(p.jsxs)("p",{className:"temp",children:[parseInt(e.temp-273.15)+" ",Object(p.jsx)(D.a,{})]})]},r)}))]})})),U=Object(l.b)((function(e){return{user:e.auth.user}}),(function(e){return{logout:function(){return e(b.logout())}}}))((function(e){var t=e.user,r=e.logout,a=Object(n.useRef)(null),c=Object(n.useState)(""),s=Object(x.a)(c,2),o=s[0],u=s[1],l=Object(n.useState)({}),j=Object(x.a)(l,2),b=j[0],h=j[1],f=Object(n.useState)(!1),y=Object(x.a)(f,2),g=y[0],N=y[1],k=Object(n.useState)(!1),w=Object(x.a)(k,2),C=w[0],H=w[1],I=Object(i.f)(),P=A();Object(n.useEffect)((function(){d()("body").css("background-image","linear-gradient(#0a58ca, #0dcaf0)")}),[]),Object(n.useEffect)(Object(m.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,r=t.userId,t.token&&u(r);case 6:case"end":return e.stop()}}),e)}))),[t]);var D=function(){var e=Object(m.a)(O.a.mark((function e(t){var n,c,s,i,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),n=a.current.value){e.next=4;break}return e.abrupt("return",alert("You must search a city"));case 4:if(a.current.value="",!n||!o){e.next=22;break}return e.prev=6,H(!1),e.next=10,S(n,o);case 10:c=e.sent,s=c.data,i=s.result,u=i.weather,h(u),N(!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),e.t0.response&&401===e.t0.response.status&&(r(),I.push("/")),H(!0);case 22:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{style:{padding:"10px"},children:[C&&Object(p.jsx)("div",{className:"alert alert-danger home-alert",role:"alert",children:"No city were found! Try again"}),Object(p.jsxs)("form",{className:"search-form center",onSubmit:D,children:[Object(p.jsx)(v.b,{className:"serach-icon"}),Object(p.jsx)("input",{type:"text",placeholder:"Search a city",ref:a})]}),g&&Object(p.jsx)(E,{weatherDetails:b}),Object(p.jsx)(T,{handleClick:D,ref:a})]})})),B=function(){return Object(p.jsx)("div",{className:"d-flex justify-content-center",children:Object(p.jsx)("div",{className:"spinner-border spin",role:"status"})})},J=r(97),Y=r(98),F=r(99),L=r(100),W=r(37),_=r.n(W);_.a.setAppElement("#root");var M=function(e){var t=e.modalIsOpen,r=e.setIsOpen,n=e.clearHistory;return Object(p.jsx)("div",{children:Object(p.jsxs)(_.a,{isOpen:t,onRequestClose:function(){r(!1)},overlayClassName:{base:"overlay-base",afterOpen:"overlay-after",beforeClose:"overlay-before"},className:{base:"content-base",afterOpen:"content-after",beforeClose:"content-before"},children:[Object(p.jsx)("div",{className:"line-up"}),Object(p.jsxs)(J.a,{style:{padding:"20px"},children:[Object(p.jsx)(Y.a,{children:Object(p.jsx)(F.a,{children:Object(p.jsx)("p",{style:{whiteSpace:"normal",textAlign:"center"},children:"Are You Sure You Want To Clear You'r History?"})})}),Object(p.jsxs)(Y.a,{className:"buttons-container",children:[Object(p.jsx)(F.a,{style:{padding:"0"},children:Object(p.jsx)(L.a,{className:"cancel-btn",onClick:function(){return r(!1)},children:"Cancel"})}),Object(p.jsx)(F.a,{style:{padding:"0",marginLeft:"5px"},children:Object(p.jsx)(L.a,{className:"clear-btn",onClick:n,children:"Clear"})})]})]})]})})},q=Object(l.b)((function(e){return{searchHistory:e.user.searchHistory}}),(function(e){return{setSearchHistory:function(t){return e(b.setSearchHistory(t))}}}))((function(e){var t=e.setSearchHistory,r=e.searchHistory,a=Object(n.useState)(""),c=Object(x.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)(!0),u=Object(x.a)(i,2),l=u[0],j=u[1],b=Object(n.useState)(!1),h=Object(x.a)(b,2),f=h[0],y=h[1],g=A();Object(n.useEffect)((function(){d()("body").css("background-image","linear-gradient(#0a58ca, #0dcaf0)")}),[]),Object(n.useEffect)(Object(m.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,g();case 3:t=e.sent,r=t.userId,t.token&&(o(r),r&&N());case 7:case"end":return e.stop()}}),e)}))),[s]);var N=function(){var e=Object(m.a)(O.a.mark((function e(){var r,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=14;break}return e.prev=1,e.next=4,C(s);case 4:r=e.sent,n=r.data,a=n.searches,t(a),j(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=10;break}return t([]),e.prev=2,e.next=5,I(s);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return l?Object(p.jsx)(B,{}):0===r.length&&!1===l?Object(p.jsxs)("div",{style:{display:"grid",flexWrap:"wrap"},children:[Object(p.jsx)("h1",{className:"header",children:"You have no searches"}),Object(p.jsx)(v.b,{className:"search-icon"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(M,{modalIsOpen:f,setIsOpen:y,clearHistory:k}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(p.jsx)("h1",{className:"header",children:"Searches history"}),Object(p.jsx)("button",{className:"btn clear-history-btn",onClick:function(){return y(!0)},children:"Clear history"}),Object(p.jsx)("div",{className:"searches-container",children:r.map((function(e,t){return Object(p.jsx)(E,{weatherDetails:e,isHistory:!0},t)}))})]})]})})),z=(r(94),r.p+"static/media/sky.e25edaf4.jpg"),Z=function(){return Object(p.jsx)("div",{className:"backdrop-screen",children:Object(p.jsx)("div",{className:"spinner-grow text-primary sign-in-spinner",role:"status"})})},G=Object(l.b)(null,(function(e){return{auth:function(t){return e(b.auth(t))}}}))((function(e){var t=e.auth,r=Object(n.useState)(!0),a=Object(x.a)(r,2),c=a[0],s=a[1],o=Object(n.useState)(!1),l=Object(x.a)(o,2),j=l[0],b=l[1],h=Object(n.useRef)(null),f=Object(n.useRef)(null),v=Object(n.useRef)(null),y=Object(i.f)();Object(n.useEffect)((function(){d()("body").css("background-image",'url("'.concat(z,'")'))}),[]);var g=function(e){u.c.error(e,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},N=function(){var e=Object(m.a)(O.a.mark((function e(r){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,k(r);case 4:n=e.sent,a=n.data,t(a),b(!1),y.push("/home"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),b(!1),e.t0.response&&409===e.t0.response.status?g("User already exists"):g("Problem occurred. Please try again later");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(O.a.mark((function e(r){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,w(r);case 4:n=e.sent,a=n.data,t(a),b(!1),y.push("/home"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),b(!1),e.t0.response&&401===e.t0.response.status?g("Authentication failed. Please check you'r email and password"):g("Problem occurred. Please try again later");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[j&&Object(p.jsx)(Z,{}),Object(p.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault();var t=h.current.value,r=f.current.value;if(h.current.style.borderColor="#ced4da",f.current.style.borderColor="#ced4da",!t)return h.current.style.borderColor="red",g("You must fill you'r email");if(!r)return f.current.style.borderColor="red",g("You must provide a password");if(!c){var n=v.current.value;if(v.current.style.borderColor="#ced4da",!n)return v.current.style.borderColor="red",g("You must confirm you'r password");if(r.length<6)return f.current.style.borderColor="red",g("Passwords must contain at least 6 characters");if(r!==n)return f.current.style.borderColor="red",v.current.style.borderColor="red",g("Passwords doesn't match")}c?S({email:t,password:r}):N({email:t,password:r})},children:[Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsx)("input",{type:"email",placeholder:"Email address",className:"form-control","aria-describedby":"emailHelp",ref:h})}),Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",id:"exampleInputPassword1",ref:f})}),!c&&Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsx)("input",{type:"password",placeholder:"Confirm password",className:"form-control",id:"exampleInputPassword2",ref:v})}),Object(p.jsx)("button",{type:"submit",className:"btn",style:{backgroundColor:"#4993ff",color:"white"},children:"Submit"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),c?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"change-mode",children:"Don't have an account yet?"}),Object(p.jsx)("p",{className:"sign",onClick:function(){return s(!c)},children:"Sign up"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"change-mode",children:"Already have an account?"}),Object(p.jsx)("p",{className:"sign",onClick:function(){return s(!c)},children:"Sign In"})]})]})]})}));var $=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(o.a,{children:[Object(p.jsx)(h,{}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{exact:!0,path:"/",component:G}),Object(p.jsx)(i.a,{path:"/home",component:U}),Object(p.jsx)(i.a,{path:"/history",component:q})]})]}),Object(p.jsx)(u.b,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,transition:u.a,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},K=r(25),Q=r(30);function V(e,t,r){var n=r[t.type.toLowerCase().replace(/_(\w)/g,(function(e){return e[1].toUpperCase()}))];n&&n(e,t)}var X={setSearchHistory:function(e,t){e.searchHistory=t.payload},deleteSearch:function(e,t){e.searchHistory=e.searchHistory.filter((function(e){return e._id!==t.payload}))}},ee=Object(Q.a)((function(e,t){V(e,t,X)}),{searchHistory:[]}),te={authData:null,user:JSON.parse(localStorage.getItem("profile"))},re={auth:function(e,t){localStorage.setItem("profile",JSON.stringify(null===t||void 0===t?void 0:t.payload)),e.authData=null===t||void 0===t?void 0:t.data,e.user=JSON.parse(localStorage.getItem("profile"))},logout:function(e,t){localStorage.clear(),e.authData=null,e.user=null},setUser:function(e,t){e.user=t.payload}},ne=Object(Q.a)((function(e,t){V(e,t,re)}),te),ae=Object(K.b)({user:ee,auth:ne}),ce=Object(K.c)(ae);window.store=ce;var se=ce;s.a.render(Object(p.jsx)(l.a,{store:se,children:Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)($,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.68bcc2a4.chunk.js.map