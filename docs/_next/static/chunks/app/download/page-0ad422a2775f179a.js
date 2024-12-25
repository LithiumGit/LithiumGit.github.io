(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{5321:function(e,t,s){Promise.resolve().then(s.bind(s,7370))},7370:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var i=s(7437),a=s(7192),l=s(3046),n=s(473);s(9734);var u=s(6654),r=s(5327),c=s(2265),o=s(1942),h=s(3872);function d(){var e,t,s,d,m,p,x,g,f,v;let G=[{name:"Windows",os:u.ft.Windows},{name:"MacOSX",os:u.ft.Mac},{name:"Linux",os:u.ft.Linux}],T=u.dp.list.find(e=>e.os===u.ft.Windows),[L,w]=(0,u.yP)({selectedOS:G[0],selectedVersion:T.releases[0]}),D=(0,c.useMemo)(()=>u.dp.list.find(e=>e.os===L.selectedOS.os).releases,[L.selectedOS]);(0,c.useEffect)(()=>{w({selectedVersion:D[0]})},[D]);let b=null===(t=L.selectedVersion)||void 0===t?void 0:null===(e=t.files.find(e=>e.type===r.T.EXE))||void 0===e?void 0:e.url;return null===(d=L.selectedVersion)||void 0===d||null===(s=d.files.find(e=>e.type===r.T.DEV))||void 0===s||s.url,null===(p=L.selectedVersion)||void 0===p||null===(m=p.files.find(e=>e.type===r.T.AppImage))||void 0===m||m.url,null===(g=L.selectedVersion)||void 0===g||null===(x=g.files.find(e=>e.type===r.T.DMG))||void 0===x||x.url,(0,i.jsxs)("main",{className:"w-100 download",children:[(0,i.jsxs)("div",{className:"w-100 d-flex align-items-center justify-content-center",children:[(0,i.jsxs)(a.Z,{className:"",children:[(0,i.jsxs)(l.Z,{variant:"",id:"",className:"rounded-0 d-flex align-items-center",children:[L.selectedOS.os===u.ft.Windows?(0,i.jsx)(o.zTP,{}):L.selectedOS.os===u.ft.Mac?(0,i.jsx)(o.oPZ,{}):(0,i.jsx)(h.HVJ,{}),(0,i.jsx)("span",{className:"px-1"}),L.selectedOS.name]}),(0,i.jsx)(a.Z.Menu,{className:"no-radius",children:G.map(e=>(0,i.jsx)(n.Z,{onClick:()=>w({selectedOS:e}),className:"",children:e.name},e.os))})]}),(0,i.jsxs)(a.Z,{className:"",children:[(0,i.jsx)(l.Z,{variant:"",id:"",className:"rounded-0",children:(null===(f=L.selectedVersion)||void 0===f?void 0:f.version)||"Not available"}),(0,i.jsx)(a.Z.Menu,{className:"no-radius",children:D.map(e=>(0,i.jsx)(n.Z,{onClick:()=>w({selectedVersion:e}),className:"",children:e.version},e.version))})]})]}),null===(v=L.selectedVersion)||void 0===v?void 0:v.files.map(e=>(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-center pt-2",children:(0,i.jsxs)("a",{href:b,className:"hover-effect underline px-3 py-2 hover",children:["LithiumGit-",u.xZ.getLastPart(e.url)]})},e.url)),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row g-0 py-5",children:[(0,i.jsx)("div",{className:"col-md-3"}),(0,i.jsxs)("div",{className:"col-12 col-md-6 ps-2",children:[(0,i.jsx)("h4",{children:"Installation Steps"}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("h5",{children:"-Download the installer"}),(0,i.jsx)("h5",{children:"-Execute the installer after download"}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("img",{className:"step-img",src:"/_next/static/media/step1.b3fd1abf.png",alt:"step1"}),(0,i.jsx)("h5",{children:"-Accept the agreement"})]}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("img",{className:"step-img",src:"/_next/static/media/step2.a8a22ad2.png",alt:"step2"}),(0,i.jsx)("h5",{children:"-Choose the user. The default selected option(Only for me) is recommended."})]}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("img",{className:"step-img",src:"/_next/static/media/step3.38e8453d.png",alt:"step2"}),(0,i.jsx)("h5",{children:"-Select the destination folder, click install and wait some for a moment."})]}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("img",{className:"step-img",src:"/_next/static/media/step5.c503ab44.png",alt:"step2"}),(0,i.jsx)("h5",{children:"-Click Finish. Installation completed."})]}),(0,i.jsx)("p",{className:"pt-3",children:"NB:*Antivirus may prevent the download and installation process as the code signature not yet added to LithiumGit. In this case you have to download and install it forcely."})]})]}),(0,i.jsx)("div",{className:"col-md-3"})]})]})}},7174:function(e,t,s){"use strict";s.d(t,{t:function(){return i}});class i{}i.get_started="get_started",i.changes="changes",i.graph="graph",i.commits="commits",i.stash="stash",i.config="config",i.clone="clone",i.recents="recents",i.create="create"},1963:function(e,t,s){"use strict";s.r(t),s.d(t,{useMultiState:function(){return a}});var i=s(2265);function a(e){let[t,s]=(0,i.useState)(e);return[t,e=>{"function"==typeof e?s(e):s(t=>({...t,...e}))}]}},6654:function(e,t,s){"use strict";s.d(t,{gT:function(){return a},dp:function(){return h},cS:function(){return m},_R:function(){return u},ft:function(){return c},Z5:function(){return i},hl:function(){return x},xZ:function(){return g},yP:function(){return p.useMultiState}});class i{}i.Docs="/docs",i.Download="/download",i.About="/about",i.Privacy="/privacy",i.Terms="/terms";class a{}a.latestVersion="0.5.3-alpha.1",a.winInstallerUrl="https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe",a.navHeight="7rem",a.footerHeight="2rem",a.docsImageWidth="70%",(l=u||(u={})).Dark="dark",l.Light="light",(r||(r={})).Theme="Theme",(n=c||(c={}))[n.Windows=0]="Windows",n[n.Mac=1]="Mac",n[n.Linux=2]="Linux";var l,n,u,r,c,o=s(5327);class h{}h.list=[{os:c.Windows,releases:[{version:"1.0.4(latest)",files:[{type:o.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-win-x64-1.0.4.exe",arch:o.O.x64}]},{version:"1.0.3",files:[{type:o.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-win-x64-1.0.3.exe",arch:o.O.x64}]},{version:"1.0.2",files:[{type:o.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-win-x64-1.0.2.exe",arch:o.O.x64}]},{version:"1.0.1",files:[{type:o.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.1/LithiumGit-Setup-win-x64-1.0.1.exe",arch:o.O.x64}]},{version:"1.0.0",files:[{type:o.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-win-x64-1.0.0.exe",arch:o.O.arm64}]}]},{os:c.Mac,releases:[{version:"1.0.4(latest)",files:[{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-mac-arm64-1.0.4.dmg",arch:o.O.arm64},{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-mac-x64-1.0.4.dmg",arch:o.O.x64}]},{version:"1.0.3",files:[{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-mac-arm64-1.0.3.dmg",arch:o.O.arm64},{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-mac-x64-1.0.3.dmg",arch:o.O.x64}]},{version:"1.0.2",files:[{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-mac-arm64-1.0.2.dmg",arch:o.O.arm64},{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-mac-x64-1.0.2.dmg",arch:o.O.x64}]},{version:"1.0.1",files:[{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.1/LithiumGit-Setup-mac-arm64-1.0.1.dmg",arch:o.O.arm64},{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.1/LithiumGit-Setup-mac-x64-1.0.1.dmg",arch:o.O.x64}]},{version:"1.0.0",files:[{type:o.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-mac-x64-1.0.0.dmg",arch:o.O.x64}]}]},{os:c.Linux,releases:[{version:"1.0.4(latest)",files:[{type:o.T.DEV,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-linux-amd64-1.0.4.deb",arch:o.O.x64},{type:o.T.AppImage,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-linux-x86_64-1.0.4.AppImage",arch:o.O.x64}]},{version:"1.0.3",files:[{type:o.T.DEV,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-linux-amd64-1.0.3.deb",arch:o.O.x64},{type:o.T.AppImage,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-linux-x86_64-1.0.3.AppImage",arch:o.O.x64}]},{version:"1.0.2",files:[{type:o.T.DEV,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-linux-amd64-1.0.2.deb",arch:o.O.x64},{type:o.T.AppImage,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-linux-x86_64-1.0.2.AppImage",arch:o.O.x64}]},{files:[{type:o.T.DEV,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-linux-amd64-1.0.0.deb",arch:o.O.x64},{type:o.T.AppImage,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-linux-x86_64-1.0.0.AppImage",arch:o.O.x64}],version:"1.0.0"}]}];var d=s(7174);class m{}m.list=[{name:"Getting Started",url:"#"+d.t.get_started,subMenus:[]},{name:"Changes",url:"#"+d.t.changes,subMenus:[]},{name:"Graph",url:"#"+d.t.graph,subMenus:[]},{name:"Commits",url:"#"+d.t.commits,subMenus:[]},{name:"Stashes",url:"#"+d.t.stash,subMenus:[]},{name:"Configs",url:"#"+d.t.config,subMenus:[]},{name:"Clone",url:"#"+d.t.clone,subMenus:[]},{name:"Recents",url:"#"+d.t.recents,subMenus:[]},{name:"Create",url:"#"+d.t.create,subMenus:[]}];var p=s(1963);class x{static setValue(e,t){"undefined"!=typeof localStorage&&localStorage.setItem(e,t)}static getValue(e){return"undefined"==typeof localStorage?null:localStorage.getItem(e)}static getTheme(){return x.getValue(r.Theme)||u.Dark}static setTheme(e){x.setValue(r.Theme,e)}}class g{static getLastPart(e){return e?e.split("/").pop():""}}},5327:function(e,t,s){"use strict";var i,a,l,n;s.d(t,{O:function(){return a},T:function(){return i}}),(l=i||(i={}))[l.EXE=0]="EXE",l[l.DEV=1]="DEV",l[l.AppImage=2]="AppImage",l[l.DMG=3]="DMG",(n=a||(a={}))[n.x64=0]="x64",n[n.x86=1]="x86",n[n.arm64=2]="arm64"},9734:function(){}},function(e){e.O(0,[989,699,240,182,192,971,23,744],function(){return e(e.s=5321)}),_N_E=e.O()}]);