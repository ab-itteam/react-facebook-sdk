(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,a,t){},148:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(23),r=t.n(o);t(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(151),s=t(153),i=t(25),m=t(26),u=t(29),p=t(27),d=t(30),f=(t(80),t(83),t(152)),h=t(154),b=t(63),E=t(64),v=t.n(E),k=t(91),w=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).fillInFbDetails=function(e,a){if(a)this.state={name:a.name,userId:a.id},console.log(this.state);else{var t=g(e);console.log(t),this.state={name:t.fbname,userId:t.fbid}}},t.state={},t.fillInFbDetails(t.props.location,t.props.fb),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"id-card-wrapper"},c.a.createElement("div",{className:"id-card"},c.a.createElement("p",{className:"marqueeText"},c.a.createElement("marquee",null,"WELCOME TO THE CARA PILS CLUB")),c.a.createElement("div",{className:"profile-row"},c.a.createElement("div",{className:"dp"},c.a.createElement("img",{src:"//graph.facebook.com/".concat(this.state.userId,"/picture?type=large")})),c.a.createElement("div",{className:"desc"},c.a.createElement("h1",null,this.state.name),c.a.createElement("p",null,"Official Cara Pils Club Member"),c.a.createElement("p",null,c.a.createElement(k,{value:"http://facebook.github.io/react/",logo:v.a,logoWidth:50})),c.a.createElement("p",null))),c.a.createElement("div",{className:"fbShareContainer"}," ",c.a.createElement(f.a,{url:"carapils.club/card?name=test&fbid=10215558188322336"}," ",c.a.createElement(h.a,{size:32,round:!0})," ",c.a.createElement("p",{className:"fbShareText"}," Sheir tis on Fajsboek to show your friends jou are TE SJIT ")))))}}]),a}(n.Component),g=function(e){return e?b.parse(e.search):void 0},O=(t(145),t(71)),j=t.n(O),N=function(){console.log("click")},C=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={facebookResponse:null},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},this.state.facebookResponse&&"unknown"!==this.state.facebookResponse.status?c.a.createElement(w,{fb:this.state.facebookResponse}):c.a.createElement(j.a,{appId:"203252890569525",autoLoad:!0,size:"metro",fields:"name,email,picture",onClick:N,callback:function(a){console.log(a),e.setState({facebookResponse:a})}})))}}]),a}(n.Component),I=function(){return c.a.createElement("h2",null,"Users")},y=function(){return c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement(s.a,{path:"/",exact:!0,component:C}),c.a.createElement(s.a,{path:"/card/",component:w}),c.a.createElement(s.a,{path:"/users/",component:I})))};r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,a,t){e.exports=t.p+"static/media/carapilssmall.c755a222.png"},73:function(e,a,t){e.exports=t(148)},78:function(e,a,t){},83:function(e,a,t){}},[[73,2,1]]]);
//# sourceMappingURL=main.2d004935.chunk.js.map