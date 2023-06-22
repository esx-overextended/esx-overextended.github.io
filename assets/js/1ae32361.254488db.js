"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[5347],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,f=c["".concat(m,".").concat(u)]||c[u]||s[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(1966),a=(n(9496),n(9613));const o={sidebar_label:"/giveweaponcomponent"},i="Give Weapon Component",p={unversionedId:"es_extended/Commands/giveWeapon",id:"es_extended/Commands/giveWeapon",title:"Give Weapon Component",description:"This command adds weapon component/attachment to the player with the specified id.",source:"@site/docs/es_extended/Commands/giveWeapon.mdx",sourceDirName:"es_extended/Commands",slug:"/es_extended/Commands/giveWeapon",permalink:"/es_extended/Commands/giveWeapon",draft:!1,editUrl:"https://github.com/esx-overextended/esx-overextended.github.io/tree/main/docs/es_extended/Commands/giveWeapon.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"/giveweaponcomponent"},sidebar:"documentationSidebar",previous:{title:"/giveitem",permalink:"/es_extended/Commands/giveItem"},next:{title:"/giveweapon",permalink:"/es_extended/Commands/giveWeaponComponent"}},m={},l=[],d={toc:l},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"give-weapon-component"},"Give Weapon Component"),(0,a.kt)("p",null,"This command adds weapon component/attachment to the player with the specified id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"/giveweaponcomponent [id] [weaponName] [componentName]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," (the server id of the target player)"),(0,a.kt)("li",{parentName:"ul"},"weaponName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," (the name of the weapon to add to the specified player)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"you can find the list of weapons ",(0,a.kt)("a",{parentName:"em",href:"https://wiki.rage.mp/index.php?title=Weapons"},"here"))))),(0,a.kt)("li",{parentName:"ul"},"componentName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," (the amount of ammo for the spcified weapon to add to the player)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"you can find the list of weapon components ",(0,a.kt)("a",{parentName:"em",href:"https://wiki.rage.mp/index.php?title=Weapons_Components"},"here")))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"By default only admins can execute this command"))))}s.isMDXComponent=!0}}]);