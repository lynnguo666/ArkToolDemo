(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{101:function(e,t,n){"use strict";var a=n(65),r=n(81),l=n(0),o=n.n(l),i=n(4),c=n(111),s=n(184),m=n(188),u=n(186),p=n(187),d=n(167),h=n(191),f=n(60),b=n(190),g=n(168),E=n(110),v=n.n(E),w=n(73),y=n.n(w),S=n(185),k=n(156),x=n(192),N=n(103),P=n.n(N),I=n(105),O=n.n(I),j=n(72),C=n.n(j),M=n(106),B=n.n(M),T=n(107),H=n.n(T),R=n(104),W=n.n(R),A=n(193),D=n(169),U=n(66),z=n(30),J=n(64),F=n.n(J),K=n(85),L=n(76),$=n(34),G=n(78),V=n(77),Y=n(79),_=(n(133),n(82));function q(e,t){return function(n){function a(e){var t;return Object(L.a)(this,a),(t=Object(G.a)(this,Object(V.a)(a).call(this,e))).state={component:null,delay:!0},t.loaded=!1,t}return Object(Y.a)(a,n),Object($.a)(a,[{key:"componentDidMount",value:function(){var t=Object(K.a)(F.a.mark(function t(){var n,a,r=this;return F.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return setTimeout(function(){r.setState({delay:!1})},1e3),t.next=3,e();case 3:n=t.sent,a=n.default,this.setState({component:a});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return this.loaded||!e||this.state.delay||(Object(_.b)(window.location.hash),this.loaded=!0),e&&!this.state.delay?o.a.createElement(e,Object.assign({},this.props,t)):o.a.createElement("div",{className:"loader"},o.a.createElement("span",{className:"loader-block"}),o.a.createElement("span",{className:"loader-block"}),o.a.createElement("span",{className:"loader-block"}),o.a.createElement("span",{className:"loader-block"}),o.a.createElement("span",{className:"loader-block"}),o.a.createElement("span",{className:"loader-block"}),o.a.createElement("span",{className:"loader-block"}),o.a.createElement("span",{className:"loader-block"}),o.a.createElement("span",{className:"loader-block"}))}}]),a}(l.Component)}var Q=n(95),X=n(183),Z=n(80),ee=n.n(Z),te=n(67);n.d(t,"a",function(){return pe});var ne=Object(te.a)(),ae=localStorage.getItem("pa"),re=[{name:"\u89d2\u8272\u67e5\u770b",path:"/char",new:!0,menuName:"\u89d2\u8272\u67e5\u770b",icon:o.a.createElement(P.a,null),component:q(function(){return Promise.all([n.e(2),n.e(3),n.e(24),n.e(0),n.e(27)]).then(n.bind(null,889))})},{name:"\u6750\u6599\u8ba1\u7b97",path:"/calc",menuName:"\u6750\u6599\u8ba1\u7b97",icon:o.a.createElement(W.a,null),component:q(function(){return Promise.all([n.e(2),n.e(1),n.e(3),n.e(9),n.e(20)]).then(n.bind(null,887))})},{name:"\u6574\u5408\u56fe\u9274",path:"/enemy",menuName:"\u6574\u5408\u56fe\u9274",icon:o.a.createElement(O.a,null),component:q(function(){return Promise.all([n.e(2),n.e(1),n.e(3),n.e(5),n.e(6)]).then(n.bind(null,885))})},{name:"\u5730\u56fe\u67e5\u770b",path:"/map3d",menuName:"\u5730\u56fe\u67e5\u770b",hide:!0,icon:o.a.createElement(C.a,null),component:q(function(){return Promise.all([n.e(2),n.e(1),n.e(3),n.e(5),n.e(6)]).then(n.bind(null,885))})},{name:"\u5730\u56fe\u67e5\u770b",path:"/map_"+(ne||Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2)),menuName:"\u5730\u56fe\u67e5\u770b",hide:!Boolean(ne),icon:o.a.createElement(C.a,null),component:q(function(){return Promise.all([n.e(2),n.e(1),n.e(3),n.e(5),n.e(6)]).then(n.bind(null,885))}),passport:!0},{name:"\u4ed3\u5e93\u8bc6\u522b",path:"/image",menuName:"\u4ed3\u5e93\u8bc6\u522b",icon:o.a.createElement(B.a,null),component:q(function(){return Promise.all([n.e(23),n.e(31)]).then(n.bind(null,886))})},{name:"2048",path:"/2048",menuName:"\u83ab\u5f97\u7406\u667a",icon:o.a.createElement(y.a,null),component:q(function(){return Promise.all([n.e(2),n.e(9),n.e(28)]).then(n.bind(null,893))})},{name:"Sudoku",path:"/sudoku",menuName:"Sudoku",hide:!0,icon:o.a.createElement(y.a,null),component:q(function(){return n.e(25).then(n.bind(null,890))})},{name:"\u7279\u6b8a\u53f0\u8bcd",path:"/specificword",hide:!0,component:q(function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,514))})},{name:"\u5176\u4ed6",path:"/other",menuName:"\u5176\u4ed6",new:!0,icon:o.a.createElement(H.a,null),component:q(function(){return Promise.all([n.e(2),n.e(9),n.e(34)]).then(n.bind(null,878))})}],le="Ark Tools",oe="v1.6.8.8",ie="v1.6.8.8",ce=!0,se=window.localStorage.getItem("version");function me(e){var t=e.match(/[1-9]+\.[0-9\.]+/g);if(t)return t[0].split(".").map(function(e){return parseInt(e)})}window.appVersion=oe,se=se||"";var ue=ee()(function(e){return{badge:{backgroundColor:"#e00606"}}})(X.a),pe=Object(c.a)({palette:{primary:{light:"#434343",main:"#1c1c1c",dark:"#000000",contrastText:"#fff"},secondary:{light:"#434343",main:"#000000",dark:"#000000",contrastText:"#fff"}},typography:{fontFamily:'"Roboto", " Noto Sans CJK SC", "\u5fae\u8f6f\u96c5\u9ed1", "Microsoft YaHei"'}}),de=Object(s.a)(function(e){return{root:{display:"flex",maxWidth:"900px",margin:"auto",minWidth:"640px"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(r.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{flexDirection:"column",justifyContent:"center","&>p":{fontSize:"12px",lineHeight:"1.0",margin:0}}),content:{minWidth:"".concat(640,"px"),flexGrow:1,padding:"20px"},badge:{borderRadius:"3px",lineHeight:"14px",height:"14px",backgroundColor:"#ee0606",color:"#fff",fontSize:"10px",padding:"0 4px",margin:"0 4px"},alignCenter:{display:"flex",alignItems:"center"}}});function he(e){var t=e.children,n=e.window,a=Object(S.a)({target:n?n():void 0,threshold:40});return o.a.createElement(k.a,{appear:!1,direction:"down",in:!a},t)}t.b=function(){var e=de(),t=o.a.useState(!1),n=Object(a.a)(t,2),r=n[0],l=n[1],c=o.a.useState(function(){var e=me(ie),t=me(se);if(!t||t.length<e.length)return!1;for(var n=0;n<oe.length;n++)if(e[n]>t[n])return!1;return!0}()),s=Object(a.a)(c,2),E=s[0],w=s[1],y=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&(E||(window.localStorage.setItem("version",oe),w(!0)),l(e))}};return localStorage.getItem("pa")!==ae&&(ae=localStorage.getItem("pa"),Object(te.a)()&&re.forEach(function(e){e.passport&&(e.hide=!1,e.new=!0)})),o.a.createElement(Q.a,{theme:pe},o.a.createElement("div",{className:e.root,id:"main-layer"},o.a.createElement(u.a,null),o.a.createElement(U.a,null,o.a.createElement(he,null,o.a.createElement(p.a,{id:"top-appbar",position:"fixed",className:e.appBar,color:"secondary"},o.a.createElement(d.a,null,o.a.createElement(g.a,{color:"inherit","aria-label":"Open drawer",onClick:y(!0),edge:"start",className:Object(i.a)(e.menuButton,r&&e.hide)},o.a.createElement(ue,{invisible:!ce||E,variant:"dot"},o.a.createElement(v.a,null))),o.a.createElement(f.a,{variant:"h6",noWrap:!0},o.a.createElement(z.b,{exact:!0,path:"/",component:function(){return re[1].name}}),re.map(function(e){return o.a.createElement(z.b,{key:e.path,exact:!0,path:e.path,component:function(){return e.name}})}))))),o.a.createElement(m.a,{className:e.drawer,anchor:"left",open:r,onClose:y(!1),classes:{paper:e.drawerPaper}},o.a.createElement("div",{className:e.drawerHeader},o.a.createElement(f.a,{variant:"h6"},le.toUpperCase()),o.a.createElement("p",null,oe)),o.a.createElement(b.a,null),o.a.createElement("div",{onClick:y(!1),onKeyDown:y(!1)},o.a.createElement(h.a,null,re.map(function(t,n){return t.hide?null:o.a.createElement(x.a,{key:t.path,component:U.b,button:!0,to:t.path},o.a.createElement(A.a,null,t.icon),o.a.createElement(D.a,{primary:o.a.createElement("span",{className:e.alignCenter},t.menuName,t.new&&o.a.createElement("span",{className:e.badge},"New"))}))})))),o.a.createElement("main",{className:e.content,id:"main-container"},o.a.createElement("div",{className:e.drawerHeader}),o.a.createElement(z.d,null,o.a.createElement(z.b,{exact:!0,path:"/",component:re[1].component}),re.map(function(e){return o.a.createElement(z.b,{key:e.path,path:e.path,component:e.component})}),o.a.createElement(z.a,{to:"/"}))))))}},126:function(e,t,n){e.exports=n(155)},131:function(e,t,n){},133:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),o=n.n(l),i=(n(131),n(101));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c});var a=n(102),r=n.n(a),l=n(63);function o(e){var t="",n=document.createElement("canvas");n.width=2e3,n.height=200,n.style.display="inline";var a=n.getContext("2d");return a.rect(0,0,10,10),a.rect(2,2,6,6),t+=!1===a.isPointInPath(5,5,"evenodd")?"yes":"no",a.textBaseline="alphabetic",a.fillStyle="#f60",a.fillRect(125,1,62,20),a.fillStyle="#069",a.font="11pt Arial",a.fillText(e+" \ud83d\ude03",2,15),a.fillStyle="rgba(102, 204, 0, 0.2)",a.font="18pt Arial",a.fillText(e+'!@$%^&*()-={}:";<>,./ \ud83d\ude03',4,45),a.globalCompositeOperation="multiply",a.fillStyle="rgb(255,0,255)",a.beginPath(),a.arc(50,50,50,0,2*Math.PI,!0),a.closePath(),a.fill(),a.fillStyle="rgb(0,255,255)",a.beginPath(),a.arc(100,50,50,0,2*Math.PI,!0),a.closePath(),a.fill(),a.fillStyle="rgb(255,255,0)",a.beginPath(),a.arc(75,100,50,0,2*Math.PI,!0),a.closePath(),a.fill(),a.fillStyle="rgb(255,0,255)",a.arc(75,75,75,0,2*Math.PI,!0),a.arc(75,75,25,0,2*Math.PI,!0),a.fill("evenodd"),n.toDataURL&&(t+=n.toDataURL()),t=r()(t+"gacha").toString()}function i(){var e=localStorage.getItem("pa");if(!e)return!1;var t=Object(l.decompressFromBase64)(e);return function(e){var t=parseInt(e.slice(3,4),36),n=parseInt(e.slice(t,t+1),36),a=parseInt(e.charAt(e.length-1),36),r=e.slice(n,n+a),l=e.slice(0,3)+e.slice(4,t)+e.slice(t+1,n)+e.slice(n+a,e.length-1),i=o(r);return l===i}(t)?t.slice(0,8):(localStorage.removeItem("pa"),!1)}function c(){var e=function(){var e=Math.random().toString(36).substr(2),t=e.length.toString(36),n=Math.floor(6*Math.random())+4,a=Math.floor(17*Math.random())+14,r=o(e);return r=(r=(r=r.slice(0,3)+n.toString(36)+r.slice(3)).slice(0,n)+a.toString(36)+r.slice(n)).slice(0,a)+e+r.slice(a),r+=t}(),t=Object(l.compressToBase64)(e);localStorage.setItem("pa",t)}},82:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return l});var a=n(42);function r(e){a.a.set(e),a.a.pageview(e)}function l(e,t){t&&a.a.set(t),a.a.event(e)}a.a.initialize("UA-142465298-1",{})}},[[126,19,21]]]);