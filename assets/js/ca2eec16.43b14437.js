"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[3133],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),f=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=f(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=f(t),m=i,b=d["".concat(u,".").concat(m)]||d[m]||g[m]||o;return t?r.createElement(b,a(a({ref:n},s),{},{components:t})):r.createElement(b,a({ref:n},s))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var f=2;f<o;f++)a[f]=t[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var r=t(1966),i=(t(9496),t(9613));const o={title:"Player",sidebar_label:"Server"},a=void 0,l={unversionedId:"es_extended/Player/Server/server",id:"es_extended/Player/Server/server",title:"Player",description:"xPlayer Object Type",source:"@site/docs/es_extended/Player/Server/server.mdx",sourceDirName:"es_extended/Player/Server",slug:"/es_extended/Player/Server/",permalink:"/es_extended/Player/Server/",draft:!1,editUrl:"https://github.com/esx-overextended/esx-overextended.github.io/tree/main/docs/es_extended/Player/Server/server.mdx",tags:[],version:"current",frontMatter:{title:"Player",sidebar_label:"Server"},sidebar:"documentationSidebar",previous:{title:"Events",permalink:"/es_extended/Player/Client/events"},next:{title:"Events",permalink:"/es_extended/Player/Server/events"}},u={},f=[{value:"xPlayer Object Type",id:"xplayer-object-type",level:2}],s={toc:f},d="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"xplayer-object-type"},"xPlayer Object Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"---@class xPlayer\n---@field accounts table\n---@field groups table<string, integer | number>\n---@field group string\n---@field identifier string\n---@field license string\n---@field inventory table\n---@field job table\n---@field loadout table\n---@field name string\n---@field playerId integer | number\n---@field source integer | number\n---@field variables table\n---@field weight integer | number\n---@field maxWeight integer | number\n---@field metadata table<string, any>\n---@field triggerEvent fun(eventName: string, ...)\n---@field triggerSafeEvent fun(eventName: string, eventData: table, eventOptions?: CEventOptions)\n---@field setCoords fun(coords: vector3 | vector4 | table)\n---@field getCoords fun(vector?: boolean): vector4 | table\n---@field kick fun(reason?: string)\n---@field setMoney fun(money?: integer | number): boolean\n---@field getMoney fun(): integer | number\n---@field addMoney fun(money?: integer | number, reason?: string): boolean\n---@field removeMoney fun(money?: integer | number, reason?: string): boolean\n---@field getIdentifier fun(): string\n---@field getLicense fun(): string\n---@field hasGroup fun(groupName: string, groupGrade?: integer | number): boolean, integer | number | nil\n---@field addGroup fun(groupName: string, groupGrade: integer | number): boolean\n---@field removeGroup fun(groupName: string): boolean\n---@field getGroups fun(): table<string, integer | number>\n---@field setGroup fun(newGroup?: string): boolean\n---@field getGroup fun(): string\n---@field set fun(key: string, value: any)\n---@field get fun(key?: string): any\n---@field getAccounts fun(minimal?: boolean): table\n---@field getAccount fun(accountName?: string): table?\n---@field getInventory fun(minimal?: boolean): table\n---@field getLoadout fun(minimal?: boolean): table\n---@field getName fun(): string\n---@field setName fun(newName: string)\n---@field setAccountMoney fun(accountName: string, money: integer | number, reason?: string): boolean\n---@field addAccountMoney fun(accountName: string, money: integer | number, reason?: string): boolean\n---@field removeAccountMoney fun(accountName: string, money: integer | number, reason?: string): boolean\n---@field getInventoryItem fun(itemName: string): table?\n---@field addInventoryItem fun(itemName: string, itemCount?: integer | number): boolean\n---@field removeInventoryItem fun(itemName: string, itemCount?: integer | number): boolean\n---@field setInventoryItem fun(itemName: string, itemCount: integer | number): boolean\n---@field getWeight fun(): integer | number\n---@field getMaxWeight fun(): integer | number\n---@field setMaxWeight fun(newWeight: integer | number)\n---@field canCarryItem fun(itemName: string, itemCount: integer | number): boolean\n---@field canSwapItem fun(firstItem: string, firstItemCount: integer | number, testItem: string, testItemCount: integer | number): boolean\n---@field getJob fun(): table\n---@field setJob fun(job: string, grade: integer | number | string, duty?: boolean): boolean\n---@field getDuty fun(): boolean\n---@field setDuty fun(duty: boolean): boolean\n---@field addWeapon fun(weaponName: string, ammo: integer | number): boolean\n---@field removeWeapon fun(weaponName: string): boolean\n---@field addWeaponComponent fun(weaponName: string, weaponComponent: string): boolean\n---@field removeWeaponComponent fun(weaponName: string, weaponComponent: string): boolean\n---@field updateWeaponAmmo fun(weaponName: string, ammoCount: integer | number): boolean\n---@field addWeaponAmmo fun(weaponName: string, ammoCount: integer | number): boolean\n---@field removeWeaponAmmo fun(weaponName: string, ammoCount: integer | number): boolean\n---@field setWeaponTint fun(weaponName: string, weaponTintIndex: integer | number): boolean\n---@field getWeaponTint fun(weaponName: string): integer | number\n---@field hasWeaponComponent fun(weaponName: string, weaponComponent: string): boolean\n---@field hasWeapon fun(weaponName: string): boolean\n---@field hasItem fun(itemName: string): false | table, integer | number | nil\n---@field getWeapon fun(weaponName: string): false | integer | number, table?\n---@field showNotification fun(message: string | table, type?: string, duration?: integer | number, extra)\n---@field showHelpNotification fun(message: string, thisFrame: boolean, beep: boolean, duration: integer | number)\n---@field getMetadata fun(index?: string, subIndex?: string | table): nil | string | table\n---@field getMeta fun(index: string, subIndex?: string | table): nil | string | table\n---@field setMetadata fun(index: string, value?: string | number | table, subValue?: any): boolean\n---@field setMeta fun(index: string, value?: string | number | table, subValue?: any): boolean\n---@field clearMetadata fun(index: string | string[]): boolean\n---@field clearMeta fun(index: string | string[]): boolean\n---@field getInScopePlayers fun(includeSelf?: boolean): xScope | nil\n---@field isInPlayerScope fun(targetId: integer | number): boolean\n---@field isPlayerInScope fun(targetId: integer | number): boolean\n---@field triggerScopedEvent fun(eventName: string, includeSelf?: boolean, ...)\n---@field triggerSafeScopedEvent fun(eventName: string, includeSelf?: boolean, eventData?: table<string, any>, eventOptions?: CEventOptions)\n---@field getRoutingBucket fun(): routingBucket | nil\n---@field setRoutingBucket fun(bucketId: routingBucket): boolean\n---@field setField fun(fieldName: string, value: number | string | boolean | table): boolean\n---@field setMethod fun(fnName: string, fn: function): boolean\n")))}g.isMDXComponent=!0}}]);