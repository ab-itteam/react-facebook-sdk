(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(e,a,t){e.exports=t.p+"static/media/carapilssmall.c755a222.png"},217:function(e,a,t){e.exports=t(496)},222:function(e,a,t){},224:function(e,a,t){},246:function(e,a){},248:function(e,a){},280:function(e,a){},281:function(e,a){},347:function(e,a){},493:function(e,a,t){},496:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(127),r=t.n(o);t(222),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(499),i=t(502),l=t(501),m=t(81),u=t(82),p=t(86),f=t(83),d=t(87),h=(t(224),t(500)),b=t(503),E=t(208),v=t(209),k=t.n(v),w=t(232),j=t(441),g=function(e){w.post("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/carapils-yvjvz/service/carapilsrequests/incoming_webhook/saveUser",{json:e},function(e,a,t){})},O=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).fillInFbDetails=function(e,a){if(a)g(a),this.state={name:a.name,userId:a.id};else{var t=N(e);this.state={name:t.fbname,userId:t.fbid}}},t.state={},t.fillInFbDetails(t.props.location,t.props.fb),t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"id-card-wrapper"},c.a.createElement("div",{className:"id-card"},c.a.createElement("p",{className:"marqueeText"},c.a.createElement("marquee",null,"WELCOME TO THE CARA PILS CLUB")),c.a.createElement("div",{className:"profile-row"},c.a.createElement("div",{className:"dp"},c.a.createElement("img",{src:"//graph.facebook.com/".concat(this.state.userId,"/picture?type=large"),alt:"profile"})),c.a.createElement("div",{className:"desc"},c.a.createElement("h1",null,this.state.name),c.a.createElement("p",null,"Official Cara Pils Club Member"),c.a.createElement("p",null,c.a.createElement(j,{value:"http://facebook.github.io/react/",logo:k.a,logoWidth:50})),c.a.createElement("p",null))),c.a.createElement("div",{className:"fbShareContainer"}," ",c.a.createElement(h.a,{url:"https://carapils.club/card?name=test&fbid=10215558188322336"}," ",c.a.createElement(b.a,{size:32,round:!0})," ",c.a.createElement("p",{className:"fbShareText"}," Sheir tis on Fajsboek to show your friends jou are THE SJIT ")))))}}]),a}(n.Component),N=function(e){return e?E.parse(e.search):void 0},I=(t(493),t(215)),C=t.n(I),y=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).state={facebookResponse:null},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},this.state.facebookResponse&&"unknown"!==this.state.facebookResponse.status?c.a.createElement(O,{fb:this.state.facebookResponse}):c.a.createElement(C.a,{appId:"203252890569525",autoLoad:!0,size:"metro",fields:"name,email,picture",callback:function(a){e.setState({facebookResponse:a})}})))}}]),a}(n.Component),R=function(){return c.a.createElement(s.a,{basename:""},c.a.createElement(i.a,null,c.a.createElement(l.a,{exact:!0,path:"/",component:y}),c.a.createElement(l.a,{path:"/card/",component:O}),c.a.createElement(l.a,{component:function(){return c.a.createElement("div",null,"404 Not found 1")}})))};r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[217,2,1]]]);
//# sourceMappingURL=main.653dba96.chunk.js.map