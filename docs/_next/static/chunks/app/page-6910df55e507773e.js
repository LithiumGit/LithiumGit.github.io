(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7592:function(e,t,n){Promise.resolve().then(n.bind(n,8119)),Promise.resolve().then(n.bind(n,8258)),Promise.resolve().then(n.bind(n,560)),Promise.resolve().then(n.bind(n,2112)),Promise.resolve().then(n.bind(n,2327)),Promise.resolve().then(n.bind(n,7344)),Promise.resolve().then(n.bind(n,3133)),Promise.resolve().then(n.t.bind(n,8930,23)),Promise.resolve().then(n.bind(n,1963))},8119:function(e,t,n){"use strict";n.d(t,{default:function(){return P}});var i=n(2164),a=n(2265),s=function(e,t){let n=(0,a.useRef)(!0);(0,a.useEffect)(()=>{if(n.current){n.current=!1;return}return e()},t)},r=n(7682),l=n(596);let o=2147483648-1;var u=n(9470),c=n(6800),h=n.n(c),d=n(505),p=n(2574),m=n(7437);let f=a.forwardRef((e,t)=>{let{className:n,bsPrefix:i,as:a="div",...s}=e;return i=(0,p.vE)(i,"carousel-caption"),(0,m.jsx)(a,{ref:t,className:h()(n,i),...s})});f.displayName="CarouselCaption";var x=n(8258);function g(e,t){let n=0;return a.Children.map(e,e=>a.isValidElement(e)?t(e,n++):e)}var v=n(1693),A=/([A-Z])/g,E=/^ms-/;function b(e){return e.replace(A,"-$1").toLowerCase().replace(E,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,N=function(e,t){var n,i="",a="";if("string"==typeof t)return e.style.getPropertyValue(b(t))||((n=(0,v.Z)(e))&&n.defaultView||window).getComputedStyle(e,void 0).getPropertyValue(b(t));Object.keys(t).forEach(function(n){var s=t[n];s||0===s?n&&w.test(n)?a+=n+"("+s+") ":i+=b(n)+": "+s+";":e.style.removeProperty(b(n))}),a&&(i+="transform: "+a+";"),e.style.cssText+=";"+i},C=n(4003);function S(e,t){let n=N(e,t)||"",i=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*i}function k(e,t){var n,i,a,s,r,l,o,u,c,h,d,p;let m=S(e,"transitionDuration"),f=S(e,"transitionDelay"),x=(n=e,i=n=>{n.target===e&&(x(),t(n))},null==(a=m+f)&&(l=-1===(r=N(n,"transitionDuration")||"").indexOf("ms")?1e3:1,a=parseFloat(r)*l||0),d=(u=!1,c=setTimeout(function(){u||function(e,t,n,i){if(void 0===n&&(n=!1),void 0===i&&(i=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,i),e.dispatchEvent(a)}}(n,"transitionend",!0)},a+5),h=(0,C.Z)(n,"transitionend",function(){u=!0},{once:!0}),function(){clearTimeout(c),h()}),p=(0,C.Z)(n,"transitionend",i),function(){d(),p()})}var D=n(3950);function R(e,t){return(R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var T=n(4887),y={disabled:!1},L=a.createContext(null),j="unmounted",M="exited",G="entering",O="entered",U="exiting",_=function(e){function t(t,n){i=e.call(this,t,n)||this;var i,a,s=n&&!n.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?s?(a=M,i.appearStatus=G):a=O:a=t.unmountOnExit||t.mountOnEnter?j:M,i.state={status:a},i.nextCallback=null,i}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,R(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===j?{status:M}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==G&&n!==O&&(t=G):(n===G||n===O)&&(t=U)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,i=this.props.timeout;return e=t=n=i,null!=i&&"number"!=typeof i&&(e=i.exit,t=i.enter,n=void 0!==i.appear?i.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===G){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this);n&&n.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===M&&this.setState({status:j})},n.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,a=this.props.nodeRef?[i]:[T.findDOMNode(this),i],s=a[0],r=a[1],l=this.getTimeouts(),o=i?l.appear:l.enter;if(!e&&!n||y.disabled){this.safeSetState({status:O},function(){t.props.onEntered(s)});return}this.props.onEnter(s,r),this.safeSetState({status:G},function(){t.props.onEntering(s,r),t.onTransitionEnd(o,function(){t.safeSetState({status:O},function(){t.props.onEntered(s,r)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:T.findDOMNode(this);if(!t||y.disabled){this.safeSetState({status:M},function(){e.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:U},function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:M},function(){e.props.onExited(i)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this),i=null==e&&!this.props.addEndListener;if(!n||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=a[0],r=a[1];this.props.addEndListener(s,r)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===j)return null;var t=this.props,n=t.children,i=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,D.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(L.Provider,{value:null},"function"==typeof n?n(e,i):a.cloneElement(a.Children.only(n),i))},t}(a.Component);function V(){}_.contextType=L,_.propTypes={},_.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:V,onEntering:V,onEntered:V,onExit:V,onExiting:V,onExited:V},_.UNMOUNTED=j,_.EXITED=M,_.ENTERING=G,_.ENTERED=O,_.EXITING=U;var I=n(9697);let Q=a.forwardRef((e,t)=>{let{onEnter:n,onEntering:i,onEntered:s,onExit:r,onExiting:l,onExited:o,addEndListener:u,children:c,childRef:h,...d}=e,p=(0,a.useRef)(null),f=(0,I.Z)(p,h),x=e=>{f(e&&"setState"in e?T.findDOMNode(e):null!=e?e:null)},g=e=>t=>{e&&p.current&&e(p.current,t)},v=(0,a.useCallback)(g(n),[n]),A=(0,a.useCallback)(g(i),[i]),E=(0,a.useCallback)(g(s),[s]),b=(0,a.useCallback)(g(r),[r]),w=(0,a.useCallback)(g(l),[l]),N=(0,a.useCallback)(g(o),[o]),C=(0,a.useCallback)(g(u),[u]);return(0,m.jsx)(_,{ref:t,...d,onEnter:v,onEntered:E,onEntering:A,onExit:b,onExited:N,onExiting:w,addEndListener:C,nodeRef:p,children:"function"==typeof c?(e,t)=>c(e,{...t,ref:x}):a.cloneElement(c,{ref:x})})}),Z=a.forwardRef((e,t)=>{var n;let c,f,{defaultActiveIndex:x=0,...v}=e,{as:A="div",bsPrefix:E,slide:b=!0,fade:w=!1,controls:N=!0,indicators:C=!0,indicatorLabels:S=[],activeIndex:D,onSelect:R,onSlide:T,onSlid:y,interval:L=5e3,keyboard:j=!0,onKeyDown:M,pause:G="hover",onMouseOver:O,onMouseOut:U,wrap:_=!0,touch:V=!0,onTouchStart:I,onTouchMove:Z,onTouchEnd:P,prevIcon:H=(0,m.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:B="Previous",nextIcon:X=(0,m.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:J="Next",variant:W,className:F,children:Y,...K}=(0,d.Ch)({defaultActiveIndex:x,...v},{activeIndex:"onSelect"}),q=(0,p.vE)(E,"carousel"),z=(0,p.SC)(),$=(0,a.useRef)(null),[ee,et]=(0,a.useState)("next"),[en,ei]=(0,a.useState)(!1),[ea,es]=(0,a.useState)(!1),[er,el]=(0,a.useState)(D||0);(0,a.useEffect)(()=>{ea||D===er||($.current?et($.current):et((D||0)>er?"next":"prev"),b&&es(!0),el(D||0))},[D,ea,er,b]),(0,a.useEffect)(()=>{$.current&&($.current=null)});let eo=0;n=(e,t)=>{++eo,t===D&&(f=e.props.interval)},c=0,a.Children.forEach(Y,e=>{a.isValidElement(e)&&n(e,c++)});let eu=(0,r.Z)(f),ec=(0,a.useCallback)(e=>{if(ea)return;let t=er-1;if(t<0){if(!_)return;t=eo-1}$.current="prev",null==R||R(t,e)},[ea,er,R,_,eo]),eh=(0,i.Z)(e=>{if(ea)return;let t=er+1;if(t>=eo){if(!_)return;t=0}$.current="next",null==R||R(t,e)}),ed=(0,a.useRef)();(0,a.useImperativeHandle)(t,()=>({element:ed.current,prev:ec,next:eh}));let ep=(0,i.Z)(()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ed.current)&&(z?ec():eh())}),em="next"===ee?"start":"end";s(()=>{b||(null==T||T(er,em),null==y||y(er,em))},[er]);let ef="".concat(q,"-item-").concat(ee),ex="".concat(q,"-item-").concat(em),eg=(0,a.useCallback)(e=>{e.offsetHeight,null==T||T(er,em)},[T,er,em]),ev=(0,a.useCallback)(()=>{es(!1),null==y||y(er,em)},[y,er,em]),eA=(0,a.useCallback)(e=>{if(j&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),z?eh(e):ec(e);return;case"ArrowRight":e.preventDefault(),z?ec(e):eh(e);return}null==M||M(e)},[j,M,ec,eh,z]),eE=(0,a.useCallback)(e=>{"hover"===G&&ei(!0),null==O||O(e)},[G,O]),eb=(0,a.useCallback)(e=>{ei(!1),null==U||U(e)},[U]),ew=(0,a.useRef)(0),eN=(0,a.useRef)(0),eC=function(){let e=(0,l.Z)(),t=(0,a.useRef)();return!function(e){let t=function(e){let t=(0,a.useRef)(e);return t.current=e,t}(e);(0,a.useEffect)(()=>()=>t.current(),[])}(()=>clearTimeout(t.current)),(0,a.useMemo)(()=>{let n=()=>clearTimeout(t.current);return{set:function(i,a=0){e()&&(n(),a<=o?t.current=setTimeout(i,a):function e(t,n,i){let a=i-Date.now();t.current=a<=o?setTimeout(n,a):setTimeout(()=>e(t,n,i),o)}(t,i,Date.now()+a))},clear:n,handleRef:t}},[])}(),eS=(0,a.useCallback)(e=>{ew.current=e.touches[0].clientX,eN.current=0,"hover"===G&&ei(!0),null==I||I(e)},[G,I]),ek=(0,a.useCallback)(e=>{e.touches&&e.touches.length>1?eN.current=0:eN.current=e.touches[0].clientX-ew.current,null==Z||Z(e)},[Z]),eD=(0,a.useCallback)(e=>{if(V){let t=eN.current;Math.abs(t)>40&&(t>0?ec(e):eh(e))}"hover"===G&&eC.set(()=>{ei(!1)},L||void 0),null==P||P(e)},[V,G,ec,eh,eC,L,P]),eR=null!=L&&!en&&!ea,eT=(0,a.useRef)();(0,a.useEffect)(()=>{var e,t;if(!eR)return;let n=z?ec:eh;return eT.current=window.setInterval(document.visibilityState?ep:n,null!=(e=null!=(t=eu.current)?t:L)?e:void 0),()=>{null!==eT.current&&clearInterval(eT.current)}},[eR,ec,eh,eu,L,ep,z]);let ey=(0,a.useMemo)(()=>C&&Array.from({length:eo},(e,t)=>e=>{null==R||R(t,e)}),[C,eo,R]);return(0,m.jsxs)(A,{ref:ed,...K,onKeyDown:eA,onMouseOver:eE,onMouseOut:eb,onTouchStart:eS,onTouchMove:ek,onTouchEnd:eD,className:h()(F,q,b&&"slide",w&&"".concat(q,"-fade"),W&&"".concat(q,"-").concat(W)),children:[C&&(0,m.jsx)("div",{className:"".concat(q,"-indicators"),children:g(Y,(e,t)=>(0,m.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=S&&S.length?S[t]:"Slide ".concat(t+1),className:t===er?"active":void 0,onClick:ey?ey[t]:void 0,"aria-current":t===er},t))}),(0,m.jsx)("div",{className:"".concat(q,"-inner"),children:g(Y,(e,t)=>{let n=t===er;return b?(0,m.jsx)(Q,{in:n,onEnter:n?eg:void 0,onEntered:n?ev:void 0,addEndListener:k,children:(t,i)=>a.cloneElement(e,{...i,className:h()(e.props.className,n&&"entered"!==t&&ef,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ex)})}):a.cloneElement(e,{className:h()(e.props.className,n&&"active")})})}),N&&(0,m.jsxs)(m.Fragment,{children:[(_||0!==D)&&(0,m.jsxs)(u.Z,{className:"".concat(q,"-control-prev"),onClick:ec,children:[H,B&&(0,m.jsx)("span",{className:"visually-hidden",children:B})]}),(_||D!==eo-1)&&(0,m.jsxs)(u.Z,{className:"".concat(q,"-control-next"),onClick:eh,children:[X,J&&(0,m.jsx)("span",{className:"visually-hidden",children:J})]})]})]})});Z.displayName="Carousel";var P=Object.assign(Z,{Caption:f,Item:x.default})},8258:function(e,t,n){"use strict";var i=n(6800),a=n.n(i),s=n(2265),r=n(2574),l=n(7437);let o=s.forwardRef((e,t)=>{let{as:n="div",bsPrefix:i,className:s,...o}=e,u=a()(s,(0,r.vE)(i,"carousel-item"));return(0,l.jsx)(n,{ref:t,...o,className:u})});o.displayName="CarouselItem",t.default=o},560:function(e,t,n){"use strict";n.r(t),n.d(t,{Nav:function(){return l}});var i=n(7437),a=n(2265),s=n(571),r=n(1942);function l(){let e=(0,a.useRef)({isMounted:!1}),[t,n]=(0,s.yP)({theme:s._R.Dark,path:""}),l=()=>{n({theme:t.theme===s._R.Light?s._R.Dark:s._R.Light})};return(0,a.useEffect)(()=>{e.current.isMounted&&(t.theme===s._R.Light?window.document.documentElement.setAttribute("data-theme",s._R.Light):window.document.documentElement.setAttribute("data-theme",s._R.Dark),s.hl.setTheme(t.theme))},[t.theme]),(0,a.useEffect)(()=>{e.current.isMounted=!0;let i=s.hl.getTheme();t.theme!==i&&n({theme:i}),n({path:window.location.pathname})},[]),(0,i.jsxs)("nav",{className:"d-flex align-items-center",style:{height:"7rem"},children:[(0,i.jsxs)("a",{href:"/",className:"d-flex h-100 align-items-center no-decoration",children:[(0,i.jsx)("div",{className:"h-100 d-flex align-items-center ps-5",children:(0,i.jsx)("img",{src:"/_next/static/media/icon.2b0e8eb4.png",style:{height:"75%",width:"auto"},alt:"icon.png"})}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)("div",{title:"The powerful git client",className:"font-weight-bold",style:{fontSize:"2em"},children:[(0,i.jsx)("span",{className:"font-weight-bold",children:"Lithium"}),(0,i.jsx)("span",{children:(0,i.jsx)("i",{children:"Git"})})]}),(0,i.jsx)("div",{children:"The powerful git client"})]})]}),(0,i.jsx)("div",{className:"px-2"}),(0,i.jsx)("div",{className:"nav-item px-3",children:(0,i.jsx)("a",{href:s.Z5.Docs,className:"no-decoration ".concat(t.path===s.Z5.Docs?"selected-color":""),children:"Docs"})}),(0,i.jsx)("div",{className:"nav-item px-3 no-decoration",children:(0,i.jsx)("a",{href:s.Z5.Download,className:"no-decoration ".concat(t.path===s.Z5.Download?"selected-color":""),children:"Download"})}),(0,i.jsx)("div",{className:"nav-item px-3",children:(0,i.jsx)("a",{href:"#",className:"no-decoration ".concat(t.path===s.Z5.About?"selected-color":""),children:"About"})}),(0,i.jsx)("div",{className:"flex-grow-1 text-end",children:(0,i.jsx)("div",{className:"pe-3",children:(0,i.jsx)(r.O$1,{onClick:()=>l(),title:"Switch to ".concat(t.theme==s._R.Dark?"light":"dark"," theme."),className:"h3 cur-point border border-secondary rounded-circle p-1 ".concat(t.theme===s._R.Light?"":"text-slight")})})})]})}},7174:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});class i{}i.get_started="get_started",i.changes="changes",i.graph="graph"},1963:function(e,t,n){"use strict";n.r(t),n.d(t,{useMultiState:function(){return a}});var i=n(2265);function a(e){let[t,n]=(0,i.useState)(e);return[t,e=>{"function"==typeof e?n(e):n(t=>({...t,...e}))}]}},571:function(e,t,n){"use strict";n.d(t,{dp:function(){return s},cS:function(){return d},_R:function(){return o},ft:function(){return c},Z5:function(){return i},hl:function(){return m},yP:function(){return p.useMultiState}});class i{}i.Docs="/docs",i.Download="/download",i.About="/about";class a{}a.latestVersion="0.5.3-alpha.1",a.winInstallerUrl="https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe",(r=o||(o={})).Dark="dark",r.Light="light",(u||(u={})).Theme="Theme",(l=c||(c={}))[l.Windows=0]="Windows",l[l.Mac=1]="Mac",l[l.Debian=2]="Debian";class s{}s.list=[{os:c.Windows,releases:[{version:"0.5.3-alpha.1(latest)",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe"},{version:"0.5.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.2-alpha.1/LithiumGit-Setup-win-x64-0.5.2-alpha.1.exe"},{version:"0.5.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.1-alpha.1/LithiumGit-Setup-win-x64-0.5.1-alpha.1.exe"},{version:"0.5.0-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.0-alpha.1/LithiumGit-Setup-win-x64-0.5.0-alpha.1.exe"},{version:"0.4.4-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.4-alpha.1/LithiumGit-Setup-win-x64-0.4.4-alpha.1.exe"},{version:"0.4.3-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.3-alpha.1/LithiumGit-Setup-win-x64-0.4.3-alpha.1.exe"},{version:"0.4.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.2-alpha.1/LithiumGit-Setup-win-x64-0.4.2-alpha.1.exe"},{version:"0.4.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.1-alpha.1/LithiumGit-Setup-win-x64-0.4.1-alpha.1.exe"},{version:"0.3.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.2-alpha.1/LithiumGit-Setup-win-x64-0.3.2-alpha.1.exe"},{version:"0.3.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.1-alpha.1/LithiumGit-Setup-win-x64-0.3.1-alpha.1.exe"},{version:"0.3.0-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.0-alpha.1/LithiumGit-Setup-win-x64-0.3.0-alpha.1.exe"}]},{os:c.Mac,releases:[]},{os:c.Debian,releases:[]}];var r,l,o,u,c,h=n(7174);class d{}d.list=[{name:"Getting Started",url:"#"+h.t.get_started,subMenus:[]},{name:"Changes",url:"#"+h.t.changes,subMenus:[]},{name:"Graph",url:"#"+h.t.graph,subMenus:[]},{name:"Commits",url:"#commits",subMenus:[]},{name:"Stashes",url:"#stashes",subMenus:[]},{name:"Configs",url:"#stashes",subMenus:[]},{name:"Clone",url:"#clone",subMenus:[]},{name:"Recents",url:"#recents",subMenus:[]},{name:"Create",url:"#create",subMenus:[]}];var p=n(1963);class m{static setValue(e,t){"undefined"!=typeof localStorage&&localStorage.setItem(e,t)}static getValue(e){return"undefined"==typeof localStorage?null:localStorage.getItem(e)}static getTheme(){return m.getValue(u.Theme)||o.Dark}static setTheme(e){m.setValue(u.Theme,e)}}},8930:function(){},2112:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/changes.52089b12.png",height:731,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAVUlEQVR42g3GyQ3DMAwEQC6XeTBQEMBw//XYHRkSD2teg/u6hfp3707SWrqquHceB81+Y1QskCrITFU1dx9fn89TcwIaH8kM2Vux1m6EAmaMDBCi/QJY8yfu9FDYawAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},2327:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/commits.ba6ac070.png",height:732,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAUklEQVR42hXJwQ2AQAgEQFhYND6ND/vvxZhYkfE80Jvv6HFeUEDSDKJQlTnodN+3VTMZQRKAiNDNgHHhBvtBauiZWeXtfaWynuZE67cqJl8A+wAVpBwjnm1hVQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},7344:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/graph.e4449400.png",height:713,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAVElEQVR42hWFURJEQAwF30sidvmm3P84HMgwIzG6qru5H8c8/aM1URH2sF6Xjm7bso6DAfwQImCEuhv7RABkNyIz70hrtHpXlAJQf0N5TjfHo5l4AS88HuKeKfgSAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},3133:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/stashes.18fe11ba.png",height:733,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42iXEWwqAIBAAQO9/tEJI0QjRD9+tuBrZARKEYci2U0oPzrgUYuGMXackyYev99HafHkrDkQSvX8Apg7Q5qXUnBGAGKVurasPyTprTLQ2OVdi+gFrYVUmkdXBMAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[366,699,703,971,23,744],function(){return e(e.s=7592)}),_N_E=e.O()}]);