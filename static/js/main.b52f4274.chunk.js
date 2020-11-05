(this["webpackJsonpguitar-practice-track"]=this["webpackJsonpguitar-practice-track"]||[]).push([[0],{77:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(4),o=a(0),r=a.n(o),c=a(10),i=a.n(c),s=a(51),l=a(127),d=a(128),b=(a(76),a(77),a(15)),u=a(125),j=a(130),m=a(126),p=a(115),O=a(129),f=a(131),x=a(118),g=a(132),h=a(117),v=a(119),y=a(120),k=a(121),w=a(3),C=a(27),P=a(33),I=Object(P.b)({name:"notesSlice",initialState:{list:["A","D","E"],bpm:45,minutes:1,metronome:!1},reducers:{add:function(e,t){var a=null===t||void 0===t?void 0:t.payload;a&&"string"===typeof a&&(-1===e.list.indexOf(a)&&e.list.push(t.payload))},remove:function(e,t){var a=null===t||void 0===t?void 0:t.payload;if(a){var n=e.list.indexOf(a);-1!==n&&e.list.splice(n,1)}},setBPM:function(e,t){var a=null===t||void 0===t?void 0:t.payload;a||(e.bpm=60),a>10&&a<=150&&(e.bpm=a)},setMinutes:function(e,t){var a=null===t||void 0===t?void 0:t.payload;a||(e.minutes=1),a>0&&a<=5&&(e.minutes=a)},setMetronome:function(e,t){e.metronome=t.payload}}}),N=I.actions,S=N.add,D=N.remove,L=N.setBPM,A=N.setMinutes,M=N.setMetronome,B=function(e){return e.notes},E=I.reducer,R=a(113),T=a(17),G="hsla(217, 27%, 30%, 1)",W=Object(R.a)((function(e){return{sidebar:{transition:"opacity .5s",padding:e.spacing(2),backgroundColor:Object(T.a)(G,.32)},sidebarLower:{marginTop:e.spacing(3)},fullDisabled:{opacity:.5},symbolInput:{backgroundColor:Object(T.d)(G,.6),color:Object(T.a)(G,.4)},symbolInputDisabled:{backgroundColor:Object(T.d)(G,.2)},iconButton:{margin:e.spacing(0,3)},iconButtonDisabled:{opacity:.3},trashButton:{transition:"opacity .5s",margin:e.spacing(0,1,0,0),opacity:.5,"&:hover":{opacity:1}},symbolRow:{cursor:"pointer",display:"flex",alignItems:"center",border:"1px solid ".concat(Object(T.d)(G,.1)),margin:e.spacing(1),minWidth:100,padding:e.spacing(1,2,1,0),borderRadius:6,"&:hover":{backgroundColor:Object(T.a)(G,.38)}},symbolRowDisabled:{cursor:"auto"},selectedSymbolRow:{backgroundColor:Object(T.a)(G,.45),"&:hover":{backgroundColor:Object(T.a)(G,.5)}},slider:{maxWidth:"30rem",marginLeft:e.spacing(3)},sliderLabel:{whiteSpace:"nowrap"},buttonIcon:{color:Object(T.d)(G,.6)}}}));function Y(e){var t=e.disabled,a=W(),c=Object(C.b)(),i=Object(o.useState)(""),s=Object(b.a)(i,2),l=s[0],d=s[1],u=Object(C.c)(B),m=u.list,P=u.bpm,I=void 0===P?60:P,N=u.minutes,E=void 0===N?1:N,R=u.metronome,T=!!l;var G=r.a.useMemo((function(){return I}),[]),Y=r.a.useMemo((function(){return E}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(p.a,{square:!0,elevation:4,className:Object(w.a)(a.sidebar,t&&a.fullDisabled),children:[Object(n.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),c(S(l)),d("")},children:Object(n.jsxs)(j.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(O.a,{InputProps:{classes:{root:Object(w.a)(a.symbolInput,t&&a.symbolInputDisabled)}},disabled:t,id:"outlined-basic",variant:"outlined",onChange:function(e){var t;d(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},value:l,placeholder:"Add chord"}),Object(n.jsx)(f.a,{className:a.iconButton,classes:{disabled:a.iconButtonDisabled},disabled:!T,type:"submit",children:Object(n.jsx)(h.a,{color:"primary",fontSize:"large"})}),Object(n.jsx)(x.a,{color:t?"secondary":"primary",children:t?"Press stop to edit settings":"Add chords you'd like to practice. Hit start to begin practicing."})]})}),Object(n.jsx)(j.a,{mt:3,display:"flex",flexWrap:"wrap",children:m.map((function(e){return Object(n.jsxs)(j.a,{className:Object(w.a)(a.symbolRow,t&&a.symbolRowDisabled),children:[Object(n.jsx)(f.a,{disabled:t,className:Object(w.a)("trashButton",a.trashButton),onClick:function(t){t.stopPropagation(),c(D(e))},children:Object(n.jsx)(v.a,{color:"primary",fontSize:"small"})}),Object(n.jsx)(x.a,{color:"primary",children:e.toUpperCase()})]},e)}))})]}),Object(n.jsx)(p.a,{square:!0,elevation:4,className:Object(w.a)(a.sidebar,a.sidebarLower,t&&a.fullDisabled),children:Object(n.jsxs)(j.a,{display:"flex",flex:1,alignItems:"center",children:[Object(n.jsxs)(j.a,{display:"flex",flex:1,m:3,children:[Object(n.jsx)(x.a,{id:"bpm-slider",variant:"body1",className:a.sliderLabel,children:"Notes per minute:"}),Object(n.jsx)(g.a,{classes:{root:a.slider},onChangeCommitted:function(e,t){c(L(t))},defaultValue:G,"aria-labelledby":"bpm-slider",valueLabelDisplay:"auto",step:10,disabled:t,marks:!0,min:20,max:150})]}),Object(n.jsxs)(j.a,{display:"flex",flex:1,m:3,children:[Object(n.jsx)(x.a,{id:"minute-slider",variant:"body1",className:a.sliderLabel,children:"Practice length (minutes):"}),Object(n.jsx)(g.a,{classes:{root:a.slider},onChangeCommitted:function(e,t){c(A(t))},defaultValue:Y,"aria-labelledby":"minute-slider",valueLabelDisplay:"auto",step:.5,disabled:t,marks:!0,min:.5,max:5})]}),Object(n.jsxs)(j.a,{m:3,display:"flex",alignItems:"center",children:[Object(n.jsx)(x.a,{variant:"body1",className:a.sliderLabel,children:"Metronome:"}),Object(n.jsx)(f.a,{onClick:function(e){c(M(!R))},children:R?Object(n.jsx)(y.a,{className:a.buttonIcon}):Object(n.jsx)(k.a,{className:a.buttonIcon})})]})]})})]})}var U,q=a(19),z=a(56),V=Object(R.a)((function(e){return{scrollArea:{position:"relative",display:"flex",overflow:"scroll",paddingTop:e.spacing(4),marginBottom:e.spacing(4)},songContainer:{transition:"left .5s",position:"relative",display:"flex",flex:1,padding:e.spacing(6)},note:{transition:"border .5s, color .5s",padding:e.spacing(3,0),width:150,marginLeft:50,marginRight:50,borderRadius:6,border:"3px solid transparent",flexShrink:0,flexGrow:0,color:Object(T.d)(G,.3),backgroundColor:Object(T.a)(G,.1)},currentNote:{border:"3px solid ".concat(Object(T.d)(G,.5)),color:Object(T.d)(G,.6)},countdown:{opacity:.5},dot:{transition:"background-color .5s",backgroundColor:Object(T.d)(G,.2)},activeDot:{backgroundColor:Object(T.d)(G,.6)}}})),F=a.p+"static/media/metronome.850b947b.wav";!function(e){e.PLAYING="playing",e.PAUSED="paused",e.STOPPED="stopped"}(U||(U={}));var J=Object(R.a)((function(e){return{note:{transition:"border .5s, color .5s",padding:e.spacing(3,0),width:150,marginLeft:50,marginRight:50,borderRadius:6,border:"3px solid transparent",flexShrink:0,flexGrow:0,color:Object(T.d)(G,.3),backgroundColor:Object(T.a)(G,.1)},currentNote:{border:"3px solid ".concat(Object(T.d)(G,.5)),color:Object(T.d)(G,.6)},countdown:{opacity:.5},dot:{transition:"background-color .5s",backgroundColor:Object(T.d)(G,.2)},activeDot:{backgroundColor:Object(T.d)(G,.6)}}}));function H(e){var t=e.notesToPlay,a=J(),o=t.map((function(e,t){var o="".concat(e,"-").concat(t);return Object(n.jsxs)(j.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(n.jsx)(j.a,{display:"flex",alignItems:"center",justifyContent:"center",className:Object(w.a)(a.note,t<=3&&a.countdown),children:Object(n.jsx)(x.a,{color:"inherit",variant:"h1",children:e.toUpperCase()})}),Object(n.jsx)(j.a,{className:Object(w.a)(a.dot),borderRadius:10,width:20,height:20,margin:3})]},o)}));return Object(n.jsx)(n.Fragment,{children:o})}var $=r.a.memo(H);function K(e,t){if(!(null===e||void 0===e?void 0:e.length)||!t)return[];var a=e.length,n=Math.floor(t/a),o=t%a,r=e.map((function(e,t){return new Array(0===t?n+o:n).fill(e)})).flat();return function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(r),["1","2","3","4"].concat(Object(q.a)(r))}function Q(e){var t=e.playerStatus,a=V(),c=Object(C.c)(B),i=c.list,s=c.minutes,l=c.bpm,d=c.metronome,u=s*l,m=Object(o.useState)(0),O=Object(b.a)(m,2),f=O[0],x=O[1],g=Object(z.a)(F,{volume:1}),h=Object(b.a)(g,1)[0],v=r.a.useMemo((function(){return K(i,u)}),[i,u]),y=f>=v.length-1;r.a.useEffect((function(){"wakeLock"in navigator&&navigator.wakeLock.request("screen")}),[]),Object(o.useEffect)((function(){var e;t!==U.PLAYING&&e?clearInterval(e):l&&l<500&&t===U.PLAYING&&!y&&(e=setInterval((function(){d&&setTimeout((function(){h()}),100),x((function(e){return e+1}))}),6e4/l));return function(){return clearInterval(e)}}),[l,d,t,h,y]);var k=-(50*f*2+150*f+50);return Object(n.jsx)(p.a,{elevation:4,className:a.scrollArea,children:Object(n.jsx)(j.a,{className:a.songContainer,style:{left:k},children:Object(n.jsx)($,{notesToPlay:v})})})}var X=a(122),Z=a(123),_=a(124),ee=Object(R.a)((function(e){return{button:{transition:"border .2s, background-color .2s",border:"3px solid ".concat(Object(T.d)(G,.2)),backgroundColor:Object(T.d)(G,.1),"&:hover":{border:"3px solid ".concat(Object(T.d)(G,.3)),backgroundColor:Object(T.d)(G,.15)}},buttonIcon:{margin:e.spacing(1),color:Object(T.d)(G,.6),fontSize:"3rem"}}}));function te(e){var t=e.setPlayerStatus,a=e.playerStatus,o=ee();return Object(n.jsxs)(j.a,{display:"flex",flex:1,ml:3,alignItems:"center",children:[Object(n.jsx)(j.a,{m:3,children:Object(n.jsx)(f.a,{onClick:a===U.PLAYING?function(e){t(U.PAUSED)}:function(e){t(U.PLAYING)},className:o.button,children:a===U.PLAYING?Object(n.jsx)(X.a,{className:o.buttonIcon}):Object(n.jsx)(Z.a,{className:o.buttonIcon})})}),Object(n.jsx)(j.a,{m:3,children:a===U.PAUSED&&Object(n.jsx)(f.a,{onClick:function(e){t(U.STOPPED)},className:o.button,children:Object(n.jsx)(_.a,{className:o.buttonIcon})})})]})}var ae=function(){var e=Object(o.useState)(U.STOPPED),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(n.jsx)(u.a,{maxWidth:"lg",children:Object(n.jsx)(j.a,{display:"flex",flex:1,mt:3,mb:3,children:Object(n.jsxs)(m.a,{container:!0,spacing:3,children:[Object(n.jsx)(m.a,{item:!0,xs:12,children:Object(n.jsx)(Y,{disabled:a!==U.STOPPED})}),Object(n.jsx)(m.a,{item:!0,xs:12,children:Object(n.jsx)(te,{playerStatus:a,setPlayerStatus:r})}),Object(n.jsx)(m.a,{item:!0,xs:12,children:a!==U.STOPPED&&Object(n.jsx)(Q,{playerStatus:a})})]})})})},ne=a(47),oe=a(57),re=a.n(oe),ce=a(16),ie=Object(ce.c)({notes:E}),se={key:"root",storage:re.a},le=Object(ne.a)(se,ie),de=Object(P.a)({reducer:le}),be=Object(ne.b)(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=a(44),je=a(58),me=Object(je.a)({palette:{primary:{main:Object(T.d)(G,.6)},secondary:{main:Object(T.d)(G,.3)},error:{main:ue.a.A400},background:{default:Object(T.a)(G,.2)},text:{primary:Object(T.d)(G,.5)}},overrides:{MuiPaper:{root:{backgroundColor:G}}}});i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsxs)(l.a,{theme:me,children:[Object(n.jsx)(d.a,{}),Object(n.jsx)(C.a,{store:de,children:Object(n.jsx)(s.a,{loading:null,persistor:be,children:Object(n.jsx)(ae,{})})})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[84,1,2]]]);
//# sourceMappingURL=main.b52f4274.chunk.js.map