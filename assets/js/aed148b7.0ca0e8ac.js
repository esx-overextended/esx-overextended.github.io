"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[9746],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),d=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(u.Provider,{value:r},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=d(t),v=a,f=i["".concat(u,".").concat(v)]||i[v]||c[v]||o;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=v;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[i]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},3688:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(1966),a=(t(9496),t(9613));const o={title:"Player Related Events",sidebar_label:"Events"},l=void 0,s={unversionedId:"es_extended/Player/Server/events",id:"es_extended/Player/Server/events",title:"Player Related Events",description:"esx:setGroups",source:"@site/docs/es_extended/Player/Server/events.mdx",sourceDirName:"es_extended/Player/Server",slug:"/es_extended/Player/Server/events",permalink:"/es_extended/Player/Server/events",draft:!1,editUrl:"https://github.com/esx-overextended/esx-overextended.github.io/tree/main/docs/es_extended/Player/Server/events.mdx",tags:[],version:"current",frontMatter:{title:"Player Related Events",sidebar_label:"Events"},sidebar:"documentationSidebar",previous:{title:"Server",permalink:"/es_extended/Player/Server/"},next:{title:"Functions",permalink:"/es_extended/Player/Server/functions"}},u={},d=[{value:"esx:setGroups",id:"esxsetgroups",level:2},{value:"esx:addGroup",id:"esxaddgroup",level:2},{value:"esx:removeGroup",id:"esxremovegroup",level:2}],p={toc:d},i="wrapper";function c(e){let{components:r,...t}=e;return(0,a.kt)(i,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"esxsetgroups"},"esx:setGroups"),(0,a.kt)("p",null,"Triggered after any change in xPlayer groups."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'AddEventHandler("esx:setGroups", function(source, newGroups, lastGroups)\nend)\n')),(0,a.kt)("h2",{id:"esxaddgroup"},"esx:addGroup"),(0,a.kt)("p",null,"Triggered after new addition of a group to xPlayer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'AddEventHandler("esx:addGroup", function(source, groupName, groupGrade)\nend)\n')),(0,a.kt)("h2",{id:"esxremovegroup"},"esx:removeGroup"),(0,a.kt)("p",null,"Triggered after new removal of a group from xPlayer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'AddEventHandler("esx:removeGroup", function(source, groupName, groupGrade)\nend)\n')))}c.isMDXComponent=!0}}]);