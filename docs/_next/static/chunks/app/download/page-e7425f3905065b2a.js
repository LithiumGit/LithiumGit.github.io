(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{5321:function(e,s,t){Promise.resolve().then(t.bind(t,7370))},7370:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var a=t(7437),i=t(3793),n=t(3046),l=t(473);t(9734);var r=t(571),o=t(2265),u=t(1942),c=t(3872);function h(){var e,s;let t=[{name:"Windows",os:r.ft.Windows},{name:"MacOSX",os:r.ft.Mac},{name:"Debian(Linux)",os:r.ft.Debian}],h=r.dp.list.find(e=>e.os===r.ft.Windows),[d,m]=(0,r.yP)({selectedOS:t[0],selectedVersion:h.releases[0]}),p=(0,o.useMemo)(()=>r.dp.list.find(e=>e.os===d.selectedOS.os).releases,[d.selectedOS]);return(0,o.useEffect)(()=>{m({selectedVersion:p[0]})},[p]),(0,a.jsxs)("main",{children:[(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[(0,a.jsxs)(i.Z,{className:"",children:[(0,a.jsxs)(n.Z,{variant:"",id:"",className:"rounded-0 d-flex align-items-center",children:[d.selectedOS.os===r.ft.Windows?(0,a.jsx)(u.zTP,{}):d.selectedOS.os===r.ft.Mac?(0,a.jsx)(u.oPZ,{}):(0,a.jsx)(c.HVJ,{}),(0,a.jsx)("span",{className:"px-1"}),d.selectedOS.name]}),(0,a.jsx)(i.Z.Menu,{className:"no-radius",children:t.map(e=>(0,a.jsx)(l.Z,{onClick:()=>m({selectedOS:e}),className:"",children:e.name},e.os))})]}),(0,a.jsxs)(i.Z,{className:"",children:[(0,a.jsx)(n.Z,{variant:"",id:"",className:"rounded-0",children:(null===(e=d.selectedVersion)||void 0===e?void 0:e.version)||"Not available"}),(0,a.jsx)(i.Z.Menu,{className:"no-radius",children:p.map(e=>(0,a.jsx)(l.Z,{onClick:()=>m({selectedVersion:e}),className:"",children:e.version},e.version))})]})]}),(0,a.jsx)("div",{className:"d-flex align-items-center justify-content-center pt-2",children:(0,a.jsx)("a",{href:null===(s=d.selectedVersion)||void 0===s?void 0:s.url,className:"text-light bg-brand px-3 py-2 hover",children:(0,a.jsx)("span",{className:"ps-2",children:"Download"})})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"ps-3",children:[(0,a.jsx)("h4",{children:"Installation Steps"}),(0,a.jsxs)("div",{className:"ps-5",children:[(0,a.jsx)("h5",{children:"-Download the installer"}),(0,a.jsx)("h5",{children:"-Execute the installer after download"}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)("img",{src:"/_next/static/media/step1.b3fd1abf.png",alt:"step1"}),(0,a.jsx)("h5",{children:"-Accept the agreement"})]}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)("img",{src:"/_next/static/media/step2.a8a22ad2.png",alt:"step2"}),(0,a.jsx)("h5",{children:"-Choose the user. The default selected option(Only for me) is recommended."})]}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)("img",{src:"/_next/static/media/step3.38e8453d.png",alt:"step2"}),(0,a.jsx)("h5",{children:"-Select the destination folder, click install and wait some for a moment."})]}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)("img",{src:"/_next/static/media/step5.c503ab44.png",alt:"step2"}),(0,a.jsx)("h5",{children:"-Click Finish. Installation completed."})]}),(0,a.jsx)("p",{className:"pt-3",children:"NB:*Antivirus may prevent the download and installation process as the code signature not yet added to LithiumGit. In this case you have to download and install it forcely."})]})]})]})}},7174:function(e,s,t){"use strict";t.d(s,{t:function(){return a}});class a{}a.get_started="get_started",a.changes="changes",a.graph="graph",a.commits="commits",a.stash="stash",a.config="config",a.clone="clone",a.recents="recents",a.create="create"},1963:function(e,s,t){"use strict";t.r(s),t.d(s,{useMultiState:function(){return i}});var a=t(2265);function i(e){let[s,t]=(0,a.useState)(e);return[s,e=>{"function"==typeof e?t(e):t(s=>({...s,...e}))}]}},571:function(e,s,t){"use strict";t.d(s,{gT:function(){return i},dp:function(){return n},cS:function(){return d},_R:function(){return o},ft:function(){return c},Z5:function(){return a},hl:function(){return p},yP:function(){return m.useMultiState}});class a{}a.Docs="/docs",a.Download="/download",a.About="/about",a.Privacy="/privacy",a.Terms="/terms";class i{}i.latestVersion="0.5.3-alpha.1",i.winInstallerUrl="https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe",i.navHeight="7rem",i.footerHeight="2rem",i.docsImageWidth="70%",(l=o||(o={})).Dark="dark",l.Light="light",(u||(u={})).Theme="Theme",(r=c||(c={}))[r.Windows=0]="Windows",r[r.Mac=1]="Mac",r[r.Debian=2]="Debian";class n{}n.list=[{os:c.Windows,releases:[{version:"0.5.3-alpha.1(latest)",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe"},{version:"0.5.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.2-alpha.1/LithiumGit-Setup-win-x64-0.5.2-alpha.1.exe"},{version:"0.5.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.1-alpha.1/LithiumGit-Setup-win-x64-0.5.1-alpha.1.exe"},{version:"0.5.0-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.0-alpha.1/LithiumGit-Setup-win-x64-0.5.0-alpha.1.exe"},{version:"0.4.4-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.4-alpha.1/LithiumGit-Setup-win-x64-0.4.4-alpha.1.exe"},{version:"0.4.3-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.3-alpha.1/LithiumGit-Setup-win-x64-0.4.3-alpha.1.exe"},{version:"0.4.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.2-alpha.1/LithiumGit-Setup-win-x64-0.4.2-alpha.1.exe"},{version:"0.4.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.1-alpha.1/LithiumGit-Setup-win-x64-0.4.1-alpha.1.exe"},{version:"0.3.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.2-alpha.1/LithiumGit-Setup-win-x64-0.3.2-alpha.1.exe"},{version:"0.3.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.1-alpha.1/LithiumGit-Setup-win-x64-0.3.1-alpha.1.exe"},{version:"0.3.0-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.0-alpha.1/LithiumGit-Setup-win-x64-0.3.0-alpha.1.exe"}]},{os:c.Mac,releases:[]},{os:c.Debian,releases:[]}];var l,r,o,u,c,h=t(7174);class d{}d.list=[{name:"Getting Started",url:"#"+h.t.get_started,subMenus:[]},{name:"Changes",url:"#"+h.t.changes,subMenus:[]},{name:"Graph",url:"#"+h.t.graph,subMenus:[]},{name:"Commits",url:"#"+h.t.commits,subMenus:[]},{name:"Stashes",url:"#"+h.t.stash,subMenus:[]},{name:"Configs",url:"#"+h.t.config,subMenus:[]},{name:"Clone",url:"#"+h.t.clone,subMenus:[]},{name:"Recents",url:"#"+h.t.recents,subMenus:[]},{name:"Create",url:"#"+h.t.create,subMenus:[]}];var m=t(1963);class p{static setValue(e,s){"undefined"!=typeof localStorage&&localStorage.setItem(e,s)}static getValue(e){return"undefined"==typeof localStorage?null:localStorage.getItem(e)}static getTheme(){return p.getValue(u.Theme)||o.Dark}static setTheme(e){p.setValue(u.Theme,e)}}},9734:function(){}},function(e){e.O(0,[989,699,240,703,793,971,23,744],function(){return e(e.s=5321)}),_N_E=e.O()}]);