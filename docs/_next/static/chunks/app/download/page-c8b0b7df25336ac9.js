(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{5321:function(e,t,s){Promise.resolve().then(s.bind(s,7370))},7370:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var i=s(7437),a=s(7192),l=s(3046),n=s(473);s(9734);var r=s(6654),u=s(5327),o=s(2265),c=s(1942),h=s(3872);function d(){var e,t,s,d,m,p,f,x,v;let g=[{name:"Windows",os:r.ft.Windows},{name:"MacOSX",os:r.ft.Mac},{name:"Linux",os:r.ft.Linux}],w=r.dp.list.find(e=>e.os===r.ft.Windows),[j,L]=(0,r.yP)({selectedOS:g[0],selectedVersion:w.releases[0]}),T=(0,o.useMemo)(()=>r.dp.list.find(e=>e.os===j.selectedOS.os).releases,[j.selectedOS]);(0,o.useEffect)(()=>{L({selectedVersion:T[0]})},[T]);let G=null===(t=j.selectedVersion)||void 0===t?void 0:null===(e=t.files.find(e=>e.type===u.T.EXE))||void 0===e?void 0:e.url,y=null===(d=j.selectedVersion)||void 0===d?void 0:null===(s=d.files.find(e=>e.type===u.T.DEV))||void 0===s?void 0:s.url,E=null===(p=j.selectedVersion)||void 0===p?void 0:null===(m=p.files.find(e=>e.type===u.T.AppImage))||void 0===m?void 0:m.url,N=null===(x=j.selectedVersion)||void 0===x?void 0:null===(f=x.files.find(e=>e.type===u.T.DMG))||void 0===f?void 0:f.url;return(0,i.jsxs)("main",{className:"w-100 download",children:[(0,i.jsxs)("div",{className:"w-100 d-flex align-items-center justify-content-center",children:[(0,i.jsxs)(a.Z,{className:"",children:[(0,i.jsxs)(l.Z,{variant:"",id:"",className:"rounded-0 d-flex align-items-center",children:[j.selectedOS.os===r.ft.Windows?(0,i.jsx)(c.zTP,{}):j.selectedOS.os===r.ft.Mac?(0,i.jsx)(c.oPZ,{}):(0,i.jsx)(h.HVJ,{}),(0,i.jsx)("span",{className:"px-1"}),j.selectedOS.name]}),(0,i.jsx)(a.Z.Menu,{className:"no-radius",children:g.map(e=>(0,i.jsx)(n.Z,{onClick:()=>L({selectedOS:e}),className:"",children:e.name},e.os))})]}),(0,i.jsxs)(a.Z,{className:"",children:[(0,i.jsx)(l.Z,{variant:"",id:"",className:"rounded-0",children:(null===(v=j.selectedVersion)||void 0===v?void 0:v.version)||"Not available"}),(0,i.jsx)(a.Z.Menu,{className:"no-radius",children:T.map(e=>(0,i.jsx)(n.Z,{onClick:()=>L({selectedVersion:e}),className:"",children:e.version},e.version))})]})]}),!!G&&(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-center pt-2",children:(0,i.jsxs)("a",{href:G,className:"hover-effect underline px-3 py-2 hover",children:["LithiumGit-",r.xZ.getLastPart(G)]})}),!!y&&(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-center pt-2",children:(0,i.jsxs)("a",{href:y,className:"hover-effect underline px-3 py-2 hover",children:["LithiumGit-",r.xZ.getLastPart(y)]})}),!!E&&(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-center pt-2",children:(0,i.jsxs)("a",{href:E,className:"hover-effect underline px-3 py-2 hover",children:["LithiumGit-",r.xZ.getLastPart(E)]})}),!!N&&(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-center pt-2",children:(0,i.jsxs)("a",{href:N,className:"hover-effect underline px-3 py-2 hover",children:["LithiumGit-",r.xZ.getLastPart(N)]})}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"row g-0 py-5",children:[(0,i.jsx)("div",{className:"col-md-3"}),(0,i.jsxs)("div",{className:"col-12 col-md-6 ps-2",children:[(0,i.jsx)("h4",{children:"Installation Steps"}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("h5",{children:"-Download the installer"}),(0,i.jsx)("h5",{children:"-Execute the installer after download"}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("img",{className:"step-img",src:"/_next/static/media/step1.b3fd1abf.png",alt:"step1"}),(0,i.jsx)("h5",{children:"-Accept the agreement"})]}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("img",{className:"step-img",src:"/_next/static/media/step2.a8a22ad2.png",alt:"step2"}),(0,i.jsx)("h5",{children:"-Choose the user. The default selected option(Only for me) is recommended."})]}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("img",{className:"step-img",src:"/_next/static/media/step3.38e8453d.png",alt:"step2"}),(0,i.jsx)("h5",{children:"-Select the destination folder, click install and wait some for a moment."})]}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)("img",{className:"step-img",src:"/_next/static/media/step5.c503ab44.png",alt:"step2"}),(0,i.jsx)("h5",{children:"-Click Finish. Installation completed."})]}),(0,i.jsx)("p",{className:"pt-3",children:"NB:*Antivirus may prevent the download and installation process as the code signature not yet added to LithiumGit. In this case you have to download and install it forcely."})]})]}),(0,i.jsx)("div",{className:"col-md-3"})]})]})}},7174:function(e,t,s){"use strict";s.d(t,{t:function(){return i}});class i{}i.get_started="get_started",i.changes="changes",i.graph="graph",i.commits="commits",i.stash="stash",i.config="config",i.clone="clone",i.recents="recents",i.create="create"},1963:function(e,t,s){"use strict";s.r(t),s.d(t,{useMultiState:function(){return a}});var i=s(2265);function a(e){let[t,s]=(0,i.useState)(e);return[t,e=>{"function"==typeof e?s(e):s(t=>({...t,...e}))}]}},6654:function(e,t,s){"use strict";s.d(t,{gT:function(){return a},dp:function(){return h},cS:function(){return m},_R:function(){return r},ft:function(){return o},Z5:function(){return i},hl:function(){return f},xZ:function(){return x},yP:function(){return p.useMultiState}});class i{}i.Docs="/docs",i.Download="/download",i.About="/about",i.Privacy="/privacy",i.Terms="/terms";class a{}a.latestVersion="0.5.3-alpha.1",a.winInstallerUrl="https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe",a.navHeight="7rem",a.footerHeight="2rem",a.docsImageWidth="70%",(l=r||(r={})).Dark="dark",l.Light="light",(u||(u={})).Theme="Theme",(n=o||(o={}))[n.Windows=0]="Windows",n[n.Mac=1]="Mac",n[n.Linux=2]="Linux";var l,n,r,u,o,c=s(5327);class h{}h.list=[{os:o.Windows,releases:[{version:"1.0.0(latest)",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-win-x64-1.0.0.exe"}]},{version:"0.5.3-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe"}]},{version:"0.5.2-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.2-alpha.1/LithiumGit-Setup-win-x64-0.5.2-alpha.1.exe"}]},{version:"0.5.1-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.1-alpha.1/LithiumGit-Setup-win-x64-0.5.1-alpha.1.exe"}]},{version:"0.5.0-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.1-alpha.1/LithiumGit-Setup-win-x64-0.5.1-alpha.1.exe"}]},{version:"0.4.4-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.4-alpha.1/LithiumGit-Setup-win-x64-0.4.4-alpha.1.exe"}]},{version:"0.4.3-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.3-alpha.1/LithiumGit-Setup-win-x64-0.4.3-alpha.1.exe"}]},{version:"0.4.2-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.2-alpha.1/LithiumGit-Setup-win-x64-0.4.2-alpha.1.exe"}]},{version:"0.4.1-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.1-alpha.1/LithiumGit-Setup-win-x64-0.4.1-alpha.1.exe"}]},{version:"0.3.2-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.2-alpha.1/LithiumGit-Setup-win-x64-0.3.2-alpha.1.exe"}]},{version:"0.3.1-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.1-alpha.1/LithiumGit-Setup-win-x64-0.3.1-alpha.1.exe"}]},{version:"0.3.0-alpha.1",files:[{type:c.T.EXE,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.0-alpha.1/LithiumGit-Setup-win-x64-0.3.0-alpha.1.exe"}]}]},{os:o.Mac,releases:[{version:"1.0.0(latest)",files:[{type:c.T.DMG,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-mac-x64-1.0.0.dmg"}]}]},{os:o.Linux,releases:[{files:[{type:c.T.DEV,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-linux-amd64-1.0.0.deb"},{type:c.T.AppImage,url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-linux-x86_64-1.0.0.AppImage"}],version:"1.0.0(latest)"}]}];var d=s(7174);class m{}m.list=[{name:"Getting Started",url:"#"+d.t.get_started,subMenus:[]},{name:"Changes",url:"#"+d.t.changes,subMenus:[]},{name:"Graph",url:"#"+d.t.graph,subMenus:[]},{name:"Commits",url:"#"+d.t.commits,subMenus:[]},{name:"Stashes",url:"#"+d.t.stash,subMenus:[]},{name:"Configs",url:"#"+d.t.config,subMenus:[]},{name:"Clone",url:"#"+d.t.clone,subMenus:[]},{name:"Recents",url:"#"+d.t.recents,subMenus:[]},{name:"Create",url:"#"+d.t.create,subMenus:[]}];var p=s(1963);class f{static setValue(e,t){"undefined"!=typeof localStorage&&localStorage.setItem(e,t)}static getValue(e){return"undefined"==typeof localStorage?null:localStorage.getItem(e)}static getTheme(){return f.getValue(u.Theme)||r.Dark}static setTheme(e){f.setValue(u.Theme,e)}}class x{static getLastPart(e){return e?e.split("/").pop():""}}},5327:function(e,t,s){"use strict";var i,a;s.d(t,{T:function(){return i}}),(a=i||(i={}))[a.EXE=0]="EXE",a[a.DEV=1]="DEV",a[a.AppImage=2]="AppImage",a[a.DMG=3]="DMG"},9734:function(){}},function(e){e.O(0,[989,699,240,182,192,971,23,744],function(){return e(e.s=5321)}),_N_E=e.O()}]);