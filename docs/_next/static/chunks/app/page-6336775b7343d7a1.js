(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7592:function(e,t,n){Promise.resolve().then(n.bind(n,7246)),Promise.resolve().then(n.bind(n,8258)),Promise.resolve().then(n.bind(n,560)),Promise.resolve().then(n.bind(n,2112)),Promise.resolve().then(n.bind(n,2327)),Promise.resolve().then(n.bind(n,7344)),Promise.resolve().then(n.bind(n,3133)),Promise.resolve().then(n.t.bind(n,8930,23)),Promise.resolve().then(n.bind(n,1963))},929:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(2265);function i(){return(0,a.useState)(null)}},8360:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(2265),i=n(2164);function s(e,t,n,s=!1){let r=(0,i.Z)(n);(0,a.useEffect)(()=>{let n="function"==typeof e?e():e;return n.addEventListener(t,r,s),()=>n.removeEventListener(t,r,s)},[e])}},9470:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(2265);n(929),n(7682);var i=n(2164);n(8360),n(596),n(1032),n(9898),new WeakMap;var s=n(7212),r=n(7437);let l=["onKeyDown"],u=a.forwardRef((e,t)=>{var n;let{onKeyDown:a}=e,u=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,l),[o]=(0,s.FT)(Object.assign({tagName:"a"},u)),c=(0,i.Z)(e=>{o.onKeyDown(e),null==a||a(e)});return(n=u.href)&&"#"!==n.trim()&&"button"!==u.role?(0,r.jsx)("a",Object.assign({ref:t},u,{onKeyDown:a})):(0,r.jsx)("a",Object.assign({ref:t},u,o,{onKeyDown:c}))});u.displayName="Anchor";var o=u},7212:function(e,t,n){"use strict";n.d(t,{FT:function(){return r}});var a=n(2265),i=n(7437);let s=["as","disabled"];function r({tagName:e,disabled:t,href:n,target:a,rel:i,role:s,onClick:r,tabIndex:l=0,type:u}){e||(e=null!=n||null!=a||null!=i?"a":"button");let o={tagName:e};if("button"===e)return[{type:u||"button",disabled:t},o];let c=a=>{var i;if(!t&&("a"!==e||(i=n)&&"#"!==i.trim())||a.preventDefault(),t){a.stopPropagation();return}null==r||r(a)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:l,href:n,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?i:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},o]}let l=a.forwardRef((e,t)=>{let{as:n,disabled:a}=e,l=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,s),[u,{tagName:o}]=r(Object.assign({tagName:n,disabled:a},l));return(0,i.jsx)(o,Object.assign({},l,u,{ref:t}))});l.displayName="Button",t.ZP=l},7246:function(e,t,n){"use strict";n.d(t,{default:function(){return D}});var a=n(2164),i=n(2265),s=function(e,t){let n=(0,i.useRef)(!0);(0,i.useEffect)(()=>{if(n.current){n.current=!1;return}return e()},t)},r=n(7682),l=n(596),u=n(6779);let o=2147483648-1;var c=n(9470),h=n(6800),d=n.n(h),m=n(505),f=n(2574),p=n(7437);let g=i.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:i="div",...s}=e;return a=(0,f.vE)(a,"carousel-caption"),(0,p.jsx)(i,{ref:t,className:d()(n,a),...s})});g.displayName="CarouselCaption";var v=n(8258);function A(e,t){let n=0;return i.Children.map(e,e=>i.isValidElement(e)?t(e,n++):e)}var b=n(5185),x=n(7064),w=n(3649);let N=i.forwardRef((e,t)=>{var n;let h,g,{defaultActiveIndex:v=0,...N}=e,{as:D="div",bsPrefix:j,slide:E=!0,fade:y=!1,controls:S=!0,indicators:R=!0,indicatorLabels:T=[],activeIndex:k,onSelect:C,onSlide:L,onSlid:G,interval:Z=5e3,keyboard:M=!0,onKeyDown:U,pause:_="hover",onMouseOver:Q,onMouseOut:V,wrap:I=!0,touch:H=!0,onTouchStart:O,onTouchMove:B,onTouchEnd:P,prevIcon:K=(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:W="Previous",nextIcon:J=(0,p.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:X="Next",variant:F,className:Y,children:q,...z}=(0,m.Ch)({defaultActiveIndex:v,...N},{activeIndex:"onSelect"}),$=(0,f.vE)(j,"carousel"),ee=(0,f.SC)(),et=(0,i.useRef)(null),[en,ea]=(0,i.useState)("next"),[ei,es]=(0,i.useState)(!1),[er,el]=(0,i.useState)(!1),[eu,eo]=(0,i.useState)(k||0);(0,i.useEffect)(()=>{er||k===eu||(et.current?ea(et.current):ea((k||0)>eu?"next":"prev"),E&&el(!0),eo(k||0))},[k,er,eu,E]),(0,i.useEffect)(()=>{et.current&&(et.current=null)});let ec=0;n=(e,t)=>{++ec,t===k&&(g=e.props.interval)},h=0,i.Children.forEach(q,e=>{i.isValidElement(e)&&n(e,h++)});let eh=(0,r.Z)(g),ed=(0,i.useCallback)(e=>{if(er)return;let t=eu-1;if(t<0){if(!I)return;t=ec-1}et.current="prev",null==C||C(t,e)},[er,eu,C,I,ec]),em=(0,a.Z)(e=>{if(er)return;let t=eu+1;if(t>=ec){if(!I)return;t=0}et.current="next",null==C||C(t,e)}),ef=(0,i.useRef)();(0,i.useImperativeHandle)(t,()=>({element:ef.current,prev:ed,next:em}));let ep=(0,a.Z)(()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ef.current)&&(ee?ed():em())}),eg="next"===en?"start":"end";s(()=>{E||(null==L||L(eu,eg),null==G||G(eu,eg))},[eu]);let ev="".concat($,"-item-").concat(en),eA="".concat($,"-item-").concat(eg),eb=(0,i.useCallback)(e=>{(0,x.Z)(e),null==L||L(eu,eg)},[L,eu,eg]),ex=(0,i.useCallback)(()=>{el(!1),null==G||G(eu,eg)},[G,eu,eg]),ew=(0,i.useCallback)(e=>{if(M&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),ee?em(e):ed(e);return;case"ArrowRight":e.preventDefault(),ee?ed(e):em(e);return}null==U||U(e)},[M,U,ed,em,ee]),eN=(0,i.useCallback)(e=>{"hover"===_&&es(!0),null==Q||Q(e)},[_,Q]),eD=(0,i.useCallback)(e=>{es(!1),null==V||V(e)},[V]),ej=(0,i.useRef)(0),eE=(0,i.useRef)(0),ey=function(){let e=(0,l.Z)(),t=(0,i.useRef)();return(0,u.Z)(()=>clearTimeout(t.current)),(0,i.useMemo)(()=>{let n=()=>clearTimeout(t.current);return{set:function(a,i=0){e()&&(n(),i<=o?t.current=setTimeout(a,i):function e(t,n,a){let i=a-Date.now();t.current=i<=o?setTimeout(n,i):setTimeout(()=>e(t,n,a),o)}(t,a,Date.now()+i))},clear:n,handleRef:t}},[])}(),eS=(0,i.useCallback)(e=>{ej.current=e.touches[0].clientX,eE.current=0,"hover"===_&&es(!0),null==O||O(e)},[_,O]),eR=(0,i.useCallback)(e=>{e.touches&&e.touches.length>1?eE.current=0:eE.current=e.touches[0].clientX-ej.current,null==B||B(e)},[B]),eT=(0,i.useCallback)(e=>{if(H){let t=eE.current;Math.abs(t)>40&&(t>0?ed(e):em(e))}"hover"===_&&ey.set(()=>{es(!1)},Z||void 0),null==P||P(e)},[H,_,ed,em,ey,Z,P]),ek=null!=Z&&!ei&&!er,eC=(0,i.useRef)();(0,i.useEffect)(()=>{var e,t;if(!ek)return;let n=ee?ed:em;return eC.current=window.setInterval(document.visibilityState?ep:n,null!=(e=null!=(t=eh.current)?t:Z)?e:void 0),()=>{null!==eC.current&&clearInterval(eC.current)}},[ek,ed,em,eh,Z,ep,ee]);let eL=(0,i.useMemo)(()=>R&&Array.from({length:ec},(e,t)=>e=>{null==C||C(t,e)}),[R,ec,C]);return(0,p.jsxs)(D,{ref:ef,...z,onKeyDown:ew,onMouseOver:eN,onMouseOut:eD,onTouchStart:eS,onTouchMove:eR,onTouchEnd:eT,className:d()(Y,$,E&&"slide",y&&"".concat($,"-fade"),F&&"".concat($,"-").concat(F)),children:[R&&(0,p.jsx)("div",{className:"".concat($,"-indicators"),children:A(q,(e,t)=>(0,p.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=T&&T.length?T[t]:"Slide ".concat(t+1),className:t===eu?"active":void 0,onClick:eL?eL[t]:void 0,"aria-current":t===eu},t))}),(0,p.jsx)("div",{className:"".concat($,"-inner"),children:A(q,(e,t)=>{let n=t===eu;return E?(0,p.jsx)(w.Z,{in:n,onEnter:n?eb:void 0,onEntered:n?ex:void 0,addEndListener:b.Z,children:(t,a)=>i.cloneElement(e,{...a,className:d()(e.props.className,n&&"entered"!==t&&ev,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&eA)})}):i.cloneElement(e,{className:d()(e.props.className,n&&"active")})})}),S&&(0,p.jsxs)(p.Fragment,{children:[(I||0!==k)&&(0,p.jsxs)(c.Z,{className:"".concat($,"-control-prev"),onClick:ed,children:[K,W&&(0,p.jsx)("span",{className:"visually-hidden",children:W})]}),(I||k!==ec-1)&&(0,p.jsxs)(c.Z,{className:"".concat($,"-control-next"),onClick:em,children:[J,X&&(0,p.jsx)("span",{className:"visually-hidden",children:X})]})]})]})});N.displayName="Carousel";var D=Object.assign(N,{Caption:g,Item:v.default})},8258:function(e,t,n){"use strict";var a=n(6800),i=n.n(a),s=n(2265),r=n(2574),l=n(7437);let u=s.forwardRef((e,t)=>{let{as:n="div",bsPrefix:a,className:s,...u}=e,o=i()(s,(0,r.vE)(a,"carousel-item"));return(0,l.jsx)(n,{ref:t,...u,className:o})});u.displayName="CarouselItem",t.default=u},560:function(e,t,n){"use strict";n.r(t),n.d(t,{Nav:function(){return c}});var a=n(7437),i=n(2265),s=n(571),r=n(1942),l=n(1257),u=n(9918),o=n(5202);function c(){let e=(0,i.useRef)({isMounted:!1}),[t,n]=(0,s.yP)({theme:s._R.Dark,path:""}),c=()=>{n({theme:t.theme===s._R.Light?s._R.Dark:s._R.Light})};return(0,i.useEffect)(()=>{e.current.isMounted&&(t.theme===s._R.Light?window.document.documentElement.setAttribute("data-theme",s._R.Light):window.document.documentElement.setAttribute("data-theme",s._R.Dark),s.hl.setTheme(t.theme))},[t.theme]),(0,i.useEffect)(()=>{e.current.isMounted=!0;let a=s.hl.getTheme();t.theme!==a&&n({theme:a}),n({path:window.location.pathname})},[]),(0,a.jsxs)(l.Z,{collapseOnSelect:!0,expand:"md",className:"d-flex align-items-center position-relative",style:{zIndex:o.b.Nav,height:s.gT.navHeight},children:[(0,a.jsx)(l.Z.Brand,{href:"/",className:"h-100",children:(0,a.jsxs)("div",{className:"d-flex h-100 align-items-center no-decoration",children:[(0,a.jsx)("div",{className:"h-100 d-flex align-items-center ps-2",children:(0,a.jsx)("img",{src:"/_next/static/media/icon.2b0e8eb4.png",style:{height:"60%",width:"auto"},alt:"icon.png"})}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{title:"The powerful git client",className:"font-weight-bold",style:{fontSize:"2em"},children:[(0,a.jsx)("span",{className:"font-weight-bold",children:"Lithium"}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{children:"Git"})})]}),(0,a.jsx)("div",{className:"",style:{fontWeight:"normal"},children:"The powerful git client"})]})]})}),(0,a.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,a.jsxs)(l.Z.Collapse,{className:"",style:{top:"100%"},id:"responsive-navbar-nav",children:[(0,a.jsx)(u.Z,{children:(0,a.jsx)("div",{className:"px-3",children:(0,a.jsx)("a",{href:s.Z5.Docs,className:"no-decoration ".concat(t.path===s.Z5.Docs?"selected-color":""),children:"Docs"})})}),(0,a.jsx)(u.Z,{children:(0,a.jsx)("div",{className:"px-3 no-decoration",children:(0,a.jsx)("a",{href:s.Z5.Download,className:"no-decoration ".concat(t.path===s.Z5.Download?"selected-color":""),children:"Download"})})}),(0,a.jsx)(u.Z,{children:(0,a.jsx)("div",{className:"px-3",children:(0,a.jsx)("a",{href:s.Z5.About,className:"no-decoration ".concat(t.path===s.Z5.About?"selected-color":""),children:"About"})})}),(0,a.jsx)(u.Z,{className:"flex-grow-1 text-end",children:(0,a.jsxs)("div",{className:"pe-3 d-flex align-items-center justify-content-end",children:[(0,a.jsx)("span",{className:"pe-2",children:(0,a.jsx)("a",{target:"_blank",href:"https://github.com/TulshiDas39/LithiumGit",children:(0,a.jsx)(r.hJX,{})})}),(0,a.jsx)("span",{className:"ps-5",children:(0,a.jsx)(r.O$1,{onClick:()=>c(),title:"Switch to ".concat(t.theme==s._R.Dark?"light":"dark"," theme."),className:"h3 cur-point border border-secondary rounded-circle p-1 ".concat(t.theme===s._R.Light?"":"text-slight")})})]})})]})]})}},7174:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});class a{}a.get_started="get_started",a.changes="changes",a.graph="graph",a.commits="commits",a.stash="stash",a.config="config",a.clone="clone",a.recents="recents",a.create="create"},5202:function(e,t,n){"use strict";n.d(t,{b:function(){return a}});class a{}a.Nav=500,a.DocsNav=250},1963:function(e,t,n){"use strict";n.r(t),n.d(t,{useMultiState:function(){return i}});var a=n(2265);function i(e){let[t,n]=(0,a.useState)(e);return[t,e=>{"function"==typeof e?n(e):n(t=>({...t,...e}))}]}},571:function(e,t,n){"use strict";n.d(t,{gT:function(){return i},dp:function(){return s},cS:function(){return d},_R:function(){return u},ft:function(){return c},Z5:function(){return a},hl:function(){return f},yP:function(){return m.useMultiState}});class a{}a.Docs="/docs",a.Download="/download",a.About="/about",a.Privacy="/privacy",a.Terms="/terms";class i{}i.latestVersion="0.5.3-alpha.1",i.winInstallerUrl="https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe",i.navHeight="7rem",i.footerHeight="2rem",i.docsImageWidth="70%",(r=u||(u={})).Dark="dark",r.Light="light",(o||(o={})).Theme="Theme",(l=c||(c={}))[l.Windows=0]="Windows",l[l.Mac=1]="Mac",l[l.Debian=2]="Debian";class s{}s.list=[{os:c.Windows,releases:[{version:"1.0.0(latest)",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-win-x64-1.0.0.exe"},{version:"0.5.3-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe"},{version:"0.5.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.2-alpha.1/LithiumGit-Setup-win-x64-0.5.2-alpha.1.exe"},{version:"0.5.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.1-alpha.1/LithiumGit-Setup-win-x64-0.5.1-alpha.1.exe"},{version:"0.5.0-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.0-alpha.1/LithiumGit-Setup-win-x64-0.5.0-alpha.1.exe"},{version:"0.4.4-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.4-alpha.1/LithiumGit-Setup-win-x64-0.4.4-alpha.1.exe"},{version:"0.4.3-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.3-alpha.1/LithiumGit-Setup-win-x64-0.4.3-alpha.1.exe"},{version:"0.4.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.2-alpha.1/LithiumGit-Setup-win-x64-0.4.2-alpha.1.exe"},{version:"0.4.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.1-alpha.1/LithiumGit-Setup-win-x64-0.4.1-alpha.1.exe"},{version:"0.3.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.2-alpha.1/LithiumGit-Setup-win-x64-0.3.2-alpha.1.exe"},{version:"0.3.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.1-alpha.1/LithiumGit-Setup-win-x64-0.3.1-alpha.1.exe"},{version:"0.3.0-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.0-alpha.1/LithiumGit-Setup-win-x64-0.3.0-alpha.1.exe"}]},{os:c.Mac,releases:[]},{os:c.Debian,releases:[]}];var r,l,u,o,c,h=n(7174);class d{}d.list=[{name:"Getting Started",url:"#"+h.t.get_started,subMenus:[]},{name:"Changes",url:"#"+h.t.changes,subMenus:[]},{name:"Graph",url:"#"+h.t.graph,subMenus:[]},{name:"Commits",url:"#"+h.t.commits,subMenus:[]},{name:"Stashes",url:"#"+h.t.stash,subMenus:[]},{name:"Configs",url:"#"+h.t.config,subMenus:[]},{name:"Clone",url:"#"+h.t.clone,subMenus:[]},{name:"Recents",url:"#"+h.t.recents,subMenus:[]},{name:"Create",url:"#"+h.t.create,subMenus:[]}];var m=n(1963);class f{static setValue(e,t){"undefined"!=typeof localStorage&&localStorage.setItem(e,t)}static getValue(e){return"undefined"==typeof localStorage?null:localStorage.getItem(e)}static getTheme(){return f.getValue(o.Theme)||u.Dark}static setTheme(e){f.setValue(o.Theme,e)}}},8930:function(){},2112:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/changes.52089b12.png",height:731,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAVUlEQVR42g3GyQ3DMAwEQC6XeTBQEMBw//XYHRkSD2teg/u6hfp3707SWrqquHceB81+Y1QskCrITFU1dx9fn89TcwIaH8kM2Vux1m6EAmaMDBCi/QJY8yfu9FDYawAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},2327:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/commits.ba6ac070.png",height:732,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAUklEQVR42hXJwQ2AQAgEQFhYND6ND/vvxZhYkfE80Jvv6HFeUEDSDKJQlTnodN+3VTMZQRKAiNDNgHHhBvtBauiZWeXtfaWynuZE67cqJl8A+wAVpBwjnm1hVQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},7344:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/graph.e4449400.png",height:713,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAVElEQVR42hWFURJEQAwF30sidvmm3P84HMgwIzG6qru5H8c8/aM1URH2sF6Xjm7bso6DAfwQImCEuhv7RABkNyIz70hrtHpXlAJQf0N5TjfHo5l4AS88HuKeKfgSAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},3133:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/stashes.18fe11ba.png",height:733,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42iXEWwqAIBAAQO9/tEJI0QjRD9+tuBrZARKEYci2U0oPzrgUYuGMXackyYev99HafHkrDkQSvX8Apg7Q5qXUnBGAGKVurasPyTprTLQ2OVdi+gFrYVUmkdXBMAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[366,699,182,295,971,23,744],function(){return e(e.s=7592)}),_N_E=e.O()}]);