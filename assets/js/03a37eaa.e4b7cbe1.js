"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[2215],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(1966),a=(r(9496),r(9613));const i={title:"txAdmin Server Creator",sidebar_label:"txAdmin server creator"},l=void 0,o={unversionedId:"txAdmin",id:"txAdmin",title:"txAdmin Server Creator",description:"This Guide will show the quick and easy way to setup a FiveM server using txAdmin!",source:"@site/guides/txAdmin.mdx",sourceDirName:".",slug:"/txAdmin",permalink:"/guides/txAdmin",draft:!1,tags:[],version:"current",frontMatter:{title:"txAdmin Server Creator",sidebar_label:"txAdmin server creator"},sidebar:"defaultSidebar",previous:{title:"pnpm",permalink:"/guides/pnpm"}},s={},p=[{value:"Starting Notes",id:"starting-notes",level:2},{value:"Step 1: Installing The Server",id:"step-1-installing-the-server",level:2},{value:"Step 2: Starting Your Server",id:"step-2-starting-your-server",level:2},{value:"Step 3: Setting Up Your Server",id:"step-3-setting-up-your-server",level:2},{value:"Step 4: Deploying Your Server",id:"step-4-deploying-your-server",level:2},{value:"Step 5: Guess What",id:"step-5-guess-what",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This Guide will show the quick and easy way to setup a FiveM server using txAdmin!"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you have successfully installed and setup the ",(0,a.kt)("a",{parentName:"p",href:"../guides/database"},"database")," before continuing!")),(0,a.kt)("h2",{id:"starting-notes"},"Starting Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure to register a free licence key at ",(0,a.kt)("a",{parentName:"p",href:"https://keymaster.fivem.net/"},"Cfx.re Keymaster"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When asked for an IP use the ",(0,a.kt)("em",{parentName:"p"},"Public IPv4 Address")," of the machine that you are setting up your FiveM server on"))),(0,a.kt)("h2",{id:"step-1-installing-the-server"},"Step 1: Installing The Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Head to the ",(0,a.kt)("a",{parentName:"li",href:"https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/"},"Artifact Download page")),(0,a.kt)("li",{parentName:"ul"},"Click the download with the highest number - ",(0,a.kt)("a",{parentName:"li",href:"https://i.imgur.com/OMcCVIW.png"},"see here")),(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"server.zip")," you just downloaded and extract it anywhere you want to store it. (We'll pick ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\FXServer\\server")," as an example for this tutorial)"),(0,a.kt)("li",{parentName:"ul"},"Open the extracted folder, it should look like ",(0,a.kt)("a",{parentName:"li",href:"https://docs.fivem.net/server-setup/windows-step-5.png"},"this"))),(0,a.kt)("h2",{id:"step-2-starting-your-server"},"Step 2: Starting Your Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the extacted folder, find ",(0,a.kt)("inlineCode",{parentName:"li"},"FXserver.exe")," and double click it"),(0,a.kt)("li",{parentName:"ul"},"This site should open in your browser; if it does not, open your browser and goto ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:40120")),(0,a.kt)("li",{parentName:"ul"},"Make sure the PIN is filled in and then press ",(0,a.kt)("inlineCode",{parentName:"li"},"Link Account"),"."),(0,a.kt)("li",{parentName:"ul"},"You will then be prompted to log into your ",(0,a.kt)("a",{parentName:"li",href:"https://forum.cfx.re/"},"Cfx.re")," account, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Yes, Allow")," once done."),(0,a.kt)("li",{parentName:"ul"},"You will then be promted to create a backup password, incase CFX.re auth does not work.")),(0,a.kt)("h2",{id:"step-3-setting-up-your-server"},"Step 3: Setting Up Your Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assuming you are now on a menu similar to ",(0,a.kt)("a",{parentName:"li",href:"https://docs.fivem.net/server-setup/windows-step2-5.png"},"this"),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"Next")),(0,a.kt)("li",{parentName:"ul"},"From here choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Remote URL Template"),"."),(0,a.kt)("li",{parentName:"ul"},"Then in the input box that appears, enter the line below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://raw.githubusercontent.com/esx-overextended/txAdminRecipe/main/recipe.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once entered, press ",(0,a.kt)("inlineCode",{parentName:"li"},"Save")," and then head to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Recipe Deployer"),"!")),(0,a.kt)("h2",{id:"step-4-deploying-your-server"},"Step 4: Deploying Your Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The recipe deployer will take you to an overview of the recipe selected."),(0,a.kt)("li",{parentName:"ul"},"By default, these should be correct, so scroll to the bottom and press ",(0,a.kt)("inlineCode",{parentName:"li"},"Next"),"."),(0,a.kt)("li",{parentName:"ul"},"It will then ask for your ",(0,a.kt)("a",{parentName:"li",href:"https://keymaster.fivem.net/"},"Cfx.re licence key"),"."),(0,a.kt)("li",{parentName:"ul"},"Once entered, press ",(0,a.kt)("inlineCode",{parentName:"li"},"Run Recipe"),"."),(0,a.kt)("li",{parentName:"ul"},"This will start downloading and installing the resource files into the server!"),(0,a.kt)("li",{parentName:"ul"},"Once it has finished, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Save & Run Server"),".")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Keep in mind first time loading of the server takes more as it has to configure the resources, so let the server do its job and read/load the resources properly....")),(0,a.kt)("h2",{id:"step-5-guess-what"},"Step 5: Guess What"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can now load into your server and enjoy!")))}c.isMDXComponent=!0}}]);