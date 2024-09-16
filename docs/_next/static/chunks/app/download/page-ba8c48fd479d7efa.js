(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{5321:function(e,s,t){Promise.resolve().then(t.bind(t,7370))},7370:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var a=t(7437),i=t(3793),n=t(3046),l=t(473);t(9734);var r=t(571),u=t(2265),h=t(1942),o=t(3872);function c(){var e,s;let t=[{name:"Windows",os:r.ft.Windows},{name:"MacOSX",os:r.ft.Mac},{name:"Debian(Linux)",os:r.ft.Debian}],c=r.dp.list.find(e=>e.os===r.ft.Windows),[d,p]=(0,r.yP)({selectedOS:t[0],selectedVersion:c.releases[0]}),m=(0,u.useMemo)(()=>r.dp.list.find(e=>e.os===d.selectedOS.os).releases,[d.selectedOS]);return(0,u.useEffect)(()=>{p({selectedVersion:m[0]})},[m]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[(0,a.jsxs)(i.Z,{className:"",children:[(0,a.jsxs)(n.Z,{variant:"",id:"",className:"rounded-0 d-flex align-items-center",children:[d.selectedOS.os===r.ft.Windows?(0,a.jsx)(h.zTP,{}):d.selectedOS.os===r.ft.Mac?(0,a.jsx)(h.oPZ,{}):(0,a.jsx)(o.HVJ,{}),(0,a.jsx)("span",{className:"px-1"}),d.selectedOS.name]}),(0,a.jsx)(i.Z.Menu,{className:"no-radius",children:t.map(e=>(0,a.jsx)(l.Z,{onClick:()=>p({selectedOS:e}),className:"",children:e.name},e.os))})]}),(0,a.jsxs)(i.Z,{className:"",children:[(0,a.jsx)(n.Z,{variant:"",id:"",className:"rounded-0",children:(null===(e=d.selectedVersion)||void 0===e?void 0:e.version)||"Not available"}),(0,a.jsx)(i.Z.Menu,{className:"no-radius",children:m.map(e=>(0,a.jsx)(l.Z,{onClick:()=>p({selectedVersion:e}),className:"",children:e.version},e.version))})]})]}),(0,a.jsx)("div",{className:"d-flex align-items-center justify-content-center pt-2",children:(0,a.jsx)("a",{href:null===(s=d.selectedVersion)||void 0===s?void 0:s.url,className:"text-light bg-brand px-3 py-2 hover",children:(0,a.jsx)("span",{className:"ps-2",children:"Download"})})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"ps-3",children:[(0,a.jsx)("h4",{children:"Installation Steps"}),(0,a.jsxs)("div",{className:"ps-5",children:[(0,a.jsx)("h5",{children:"-Download the installer"}),(0,a.jsx)("h5",{children:"-Execute the installer after download"}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)("img",{src:"/_next/static/media/step1.b3fd1abf.png",alt:"step1"}),(0,a.jsx)("h5",{children:"-Accept the agreement"})]}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)("img",{src:"/_next/static/media/step2.a8a22ad2.png",alt:"step2"}),(0,a.jsx)("h5",{children:"-Choose the user. The default selected option(Only for me) is recommended."})]}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)("img",{src:"/_next/static/media/step3.38e8453d.png",alt:"step2"}),(0,a.jsx)("h5",{children:"-Select the destination folder, click install and wait some for a moment."})]}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)("img",{src:"/_next/static/media/step5.c503ab44.png",alt:"step2"}),(0,a.jsx)("h5",{children:"-Click Finish. Installation completed."})]}),(0,a.jsx)("p",{className:"pt-3",children:"NB:*Antivirus may prevent the download and installation process as the code signature not yet added to LithiumGit. In this case you have to download and install it forcely."})]})]})]})}},7174:function(e,s,t){"use strict";t.d(s,{t:function(){return a}});class a{}a.get_started="get_started",a.changes="changes",a.graph="graph"},1963:function(e,s,t){"use strict";t.r(s),t.d(s,{useMultiState:function(){return i}});var a=t(2265);function i(e){let[s,t]=(0,a.useState)(e);return[s,e=>{"function"==typeof e?t(e):t(s=>({...s,...e}))}]}},571:function(e,s,t){"use strict";t.d(s,{dp:function(){return n},cS:function(){return d},_R:function(){return u},ft:function(){return o},Z5:function(){return a},hl:function(){return m},yP:function(){return p.useMultiState}});class a{}a.Docs="/docs",a.Download="/download",a.About="/about";class i{}i.latestVersion="0.5.3-alpha.1",i.winInstallerUrl="https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe",(l=u||(u={})).Dark="dark",l.Light="light",(h||(h={})).Theme="Theme",(r=o||(o={}))[r.Windows=0]="Windows",r[r.Mac=1]="Mac",r[r.Debian=2]="Debian";class n{}n.list=[{os:o.Windows,releases:[{version:"0.5.3-alpha.1(latest)",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.3-alpha.1/LithiumGit-Setup-win-x64-0.5.3-alpha.1.exe"},{version:"0.5.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.2-alpha.1/LithiumGit-Setup-win-x64-0.5.2-alpha.1.exe"},{version:"0.5.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.1-alpha.1/LithiumGit-Setup-win-x64-0.5.1-alpha.1.exe"},{version:"0.5.0-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.5.0-alpha.1/LithiumGit-Setup-win-x64-0.5.0-alpha.1.exe"},{version:"0.4.4-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.4-alpha.1/LithiumGit-Setup-win-x64-0.4.4-alpha.1.exe"},{version:"0.4.3-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.3-alpha.1/LithiumGit-Setup-win-x64-0.4.3-alpha.1.exe"},{version:"0.4.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.2-alpha.1/LithiumGit-Setup-win-x64-0.4.2-alpha.1.exe"},{version:"0.4.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.4.1-alpha.1/LithiumGit-Setup-win-x64-0.4.1-alpha.1.exe"},{version:"0.3.2-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.2-alpha.1/LithiumGit-Setup-win-x64-0.3.2-alpha.1.exe"},{version:"0.3.1-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.1-alpha.1/LithiumGit-Setup-win-x64-0.3.1-alpha.1.exe"},{version:"0.3.0-alpha.1",url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v0.3.0-alpha.1/LithiumGit-Setup-win-x64-0.3.0-alpha.1.exe"}]},{os:o.Mac,releases:[]},{os:o.Debian,releases:[]}];var l,r,u,h,o,c=t(7174);class d{}d.list=[{name:"Getting Started",url:"#"+c.t.get_started,subMenus:[]},{name:"Changes",url:"#"+c.t.changes,subMenus:[]},{name:"Graph",url:"#"+c.t.graph,subMenus:[]},{name:"Commits",url:"#commits",subMenus:[]},{name:"Stashes",url:"#stashes",subMenus:[]},{name:"Configs",url:"#stashes",subMenus:[]},{name:"Clone",url:"#clone",subMenus:[]},{name:"Recents",url:"#recents",subMenus:[]},{name:"Create",url:"#create",subMenus:[]}];var p=t(1963);class m{static setValue(e,s){"undefined"!=typeof localStorage&&localStorage.setItem(e,s)}static getValue(e){return"undefined"==typeof localStorage?null:localStorage.getItem(e)}static getTheme(){return m.getValue(h.Theme)||u.Dark}static setTheme(e){m.setValue(h.Theme,e)}}},9734:function(){}},function(e){e.O(0,[989,699,240,703,793,971,23,744],function(){return e(e.s=5321)}),_N_E=e.O()}]);