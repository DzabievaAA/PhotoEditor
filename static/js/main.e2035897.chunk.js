(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/kisspng-x-mark-check-mark-clip-art-wrong-sign-5b12e998675839.8614187915279661044233 (1).6022c2d6.png"},27:function(e,a,t){e.exports={slider_wrapper:"Slider_slider_wrapper__1rt3u",tickmarks:"Slider_tickmarks__3MzbN"}},35:function(e,a,t){e.exports=t.p+"static/media/logo.d51050a0.svg"},37:function(e,a,t){e.exports=t(51)},42:function(e,a,t){},43:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=(t(42),t(36)),o=(t(43),t(26)),s=t(11),m=t(6),u=t.n(m),d=t(27),p=t.n(d);var E=function(e){var a=e.onRangeChange,t=e.Max,l=Object(n.useRef)(null),c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=l.current,t=c.current;e.addEventListener("input",(function(){t.innerHTML=2*e.value/100,a(2*e.value/100)}),!1)})),r.a.createElement("div",{className:p.a.slider_wrapper},r.a.createElement("input",{ref:l,type:"range",min:"0",max:t,step:"1",list:"tickmarks"}),r.a.createElement("datalist",{className:p.a.tickmarks,id:"tickmarks"},r.a.createElement("option",{value:"0"}),r.a.createElement("option",{value:"1"}),r.a.createElement("option",{value:"2"})),r.a.createElement("p",{ref:c}))},f=t(9),v=t.n(f),g=t(54),h=t(55),w=t(19),k=t.n(w);var N=function(e){var a=e.onRangeRed,t=e.onRangeGreen,n=e.onRangeBlue,l=e.setMode;return r.a.createElement(g.a,{className:v.a.wrapperSliders},r.a.createElement(h.a,null,r.a.createElement("p",{className:v.a.RGB_names},"Red"),r.a.createElement(E,{onRangeChange:a})),r.a.createElement(h.a,null,r.a.createElement("p",{className:v.a.RGB_names},"Green"),r.a.createElement(E,{onRangeChange:t})),r.a.createElement(h.a,null,r.a.createElement("p",{className:v.a.RGB_names},"Blue"),r.a.createElement(E,{onRangeChange:n})),r.a.createElement("img",{onClick:function(){l("NONE")},src:k.a,height:"40px",width:"40px",alt:""}))},_=t(59),b=t(56),R=t(57);var C,O,y,B,j,x,G,S,M,I,A,T=function(e){var a=e.setMode,t=e.onRangeOpacity;return r.a.createElement(g.a,{className:v.a.wrapperSliders},r.a.createElement(h.a,null,r.a.createElement("p",{className:v.a.RGB_names},"Opacity"),r.a.createElement(E,{onRangeChange:t})),r.a.createElement("img",{onClick:function(){a("NONE")},src:k.a,height:"40px",width:"40px",alt:""}))};var W=function(e){var a,t,l=e.mode,c=e.setMode,i=Object(n.useRef)(null),m=Object(n.useRef)(null);function d(){for(var e=m.current,a=e.getContext("2d"),t=new Uint8ClampedArray(I*A*4),n=0;n<x.length;n++)t[4*n]=x[n],t[4*n+1]=G[n],t[4*n+2]=S[n],t[4*n+3]=M[n];var r=new ImageData(I,A);r.data.set(t),createImageBitmap(r).then((function(t){a.drawImage(t,0,0,I,A,0,0,e.width,e.height)}))}function p(e,a,t){if(void 0!==x&&void 0!==G&&void 0!==S){for(var n=0;n<a.length;n++)t[n]=a[n]*e;d()}}return"RGB"==l?a=r.a.createElement(N,{className:u.a.sliders,onRangeRed:function(e){p(e,O,x)},onRangeGreen:function(e){p(e,y,G)},onRangeBlue:function(e){p(e,B,S)},setMode:c}):"OPCTY"==l?t=r.a.createElement(T,{onRangeOpacity:function(e){p(e,j,M)},setMode:c}):"NONE"==l&&(a=null),r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(_.a.Container,{id:"ledt-tabs-example"},r.a.createElement(h.a,null,r.a.createElement(b.a,{className:u.a.leftNavbar,sm:2},r.a.createElement(R.a,{variant:"pills",className:"flex-column mt-2"},r.a.createElement(R.a.Item,null,r.a.createElement(R.a.Link,{className:u.a.inputButton,eventKey:"first",onClick:function(){c("RGB")}}," ",r.a.createElement("span",null,"Colors Range")," ")),r.a.createElement(R.a.Item,null,r.a.createElement(R.a.Link,{className:u.a.inputButton,eventKey:"second",onClick:function(){c("OPCTY")}}," ",r.a.createElement("span",null,"Opacity")," ")))),r.a.createElement(b.a,{sm:6,className:"justify-content-center"},r.a.createElement("button",{className:u.a.inputButton,onClick:function(e){i.current.click()}},r.a.createElement("span",{className:"link-content"},"Load file")),r.a.createElement("input",{className:u.a.inputTypeFile,type:"file",ref:i,onChange:function(){var e=m.current,a=i.current;if(null!==a){var t=a.files[0],n=new FileReader;n.onloadend=function(){var a=new Image,t=e.getContext("2d");a.onload=function(){e.width=a.naturalWidth,e.height=a.naturalHeight;var n=e.width/a.naturalWidth,r=e.height/a.naturalHeight,l=Math.min(n,r);t.drawImage(a,0,0,a.naturalWidth*l,a.naturalHeight*l),I=a.width,A=a.height,C=new Uint8ClampedArray(t.getImageData(0,0,I,A).data),function(){m.current,O=new Uint8ClampedArray(I*A),y=new Uint8ClampedArray(I*A),B=new Uint8ClampedArray(I*A),j=new Uint8ClampedArray(I*A);for(var e=0;e<C.length;e+=4)O[e/4]=C[e],y[e/4]=C[e+1],B[e/4]=C[e+2],j[e/4]=C[e+3];x=Object(s.a)(O),G=Object(s.a)(y),S=Object(s.a)(B),M=Object(s.a)(j)}(),d()},a.src=n.result},void 0!==t&&n.readAsDataURL(t)}}}),r.a.createElement("div",Object(o.a)({className:u.a.wrapperOnCanvas},"className","justify-content-center"),r.a.createElement("canvas",{className:u.a.canvas,ref:m,width:"500",height:"500"}))),r.a.createElement(b.a,Object(o.a)({sm:2,className:u.a.slidersOpenBlock},"className","justify-content-center"),r.a.createElement(_.a.Content,null,r.a.createElement(_.a.Pane,{eventKey:"first"},a),r.a.createElement(_.a.Pane,{eventKey:"second"},t))),r.a.createElement(b.a,{className:u.a.leftNavbar,sm:2},r.a.createElement("div",null,r.a.createElement("a",{id:"download",download:"image.png"},r.a.createElement("button",{className:u.a.inputButton,variant:"dark",type:"button",onClick:function(){var e=m.current,a=document.getElementById("download"),t=e.toDataURL("image/png").replace("image/png","image/octet-stream");a.setAttribute("href",t)}},r.a.createElement("span",{className:"link-content"},"Download"))),r.a.createElement("button",{className:u.a.inputButton,variant:"dark",type:"button",onClick:function(){if(void 0!==x&&void 0!==G&&void 0!==S){var e=Object(s.a)(x),a=Object(s.a)(G),t=Object(s.a)(S);function n(e,a,t,n){function r(e,a,t){return e*t+a}var l=r(e,a,I);n[l]=0,n[l]+=t[r(e,a-1,I)],n[l]+=t[r(e,a,I)],n[l]+=t[r(e,a+1,I)],n[l]+=t[r(e-1,a-1,I)],n[l]+=t[r(e-1,a,I)],n[l]+=t[r(e-1,a+1,I)],n[l]+=t[r(e+1,a-1,I)],n[l]+=t[r(e+1,a,I)],n[l]+=t[r(e+1,a+1,I)],n[l]/=9}for(var r=1;r<I-1;r++)for(var l=1;l<A-1;l++)n(l,r,x,e),n(l,r,G,a),n(l,r,S,t);x=e,G=a,S=t,d()}}},r.a.createElement("span",{className:"link-content"},"Gausse"))))))))},U=t(58),L=t(35),D=t.n(L);var F=function(e){return e.setMode,r.a.createElement("div",null,r.a.createElement(U.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark"},r.a.createElement(g.a,null,r.a.createElement(U.a.Brand,{href:"/"},r.a.createElement("img",{src:D.a,height:"50",width:"50",className:"d-inline-block align-top"})),r.a.createElement(U.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(U.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(R.a,{className:"mr-auto"})))))};var H=function(){var e=r.a.useState("NONE"),a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(F,{setMode:n}),r.a.createElement(W,{setMode:n,mode:t}))};t(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports={"container-fluid":"WorkSpace_container-fluid__3Bht7",inputTypeFile:"WorkSpace_inputTypeFile__GubTz",inputButton:"WorkSpace_inputButton__3wIj_",leftNavbar:"WorkSpace_leftNavbar__13rQJ"}},9:function(e,a,t){e.exports={wrapperSliders:"Sliders_RGB_wrapperSliders__3jTXS",RGB_names:"Sliders_RGB_RGB_names__2mwG-"}}},[[37,1,2]]]);
//# sourceMappingURL=main.e2035897.chunk.js.map