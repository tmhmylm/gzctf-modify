/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{m as e}from"./o5ju0kv5.js";import{n as t}from"./mqil03bu.js";import{Ai as n,Hi as r,Li as i,Pa as a,ka as o,mi as s,xa as c}from"./index.ozib4idt.js";var l={default:`rc`,inner:`sc`,label:`tc`,icon:`uc`,hidable:`vc`,panes:`wc`},u=a(o()),d=a(c()),f=e=>{let{color:t,label:r,active:i,icon:a,tabKey:o,disabled:s,...c}=e;return(0,d.jsx)(n,{...c,component:`button`,type:`button`,role:`tab`,disabled:s,__vars:{"--tab-active-color":t},"data-active":i||void 0,className:l.default,children:(0,d.jsxs)(`div`,{className:l.inner,children:[a&&(0,d.jsx)(`div`,{className:l.icon,children:a}),r&&(0,d.jsx)(`div`,{className:l.label,children:r})]})},o)};const p=n=>{let{active:a,onTabChange:o,tabs:c,withIcon:p,aside:m,disabled:h,...g}=n,[_,v]=(0,u.useState)(a??0),y=r(),{colorScheme:b}=i(),x=e=>e?y.colors[y.primaryColor][b===`dark`?4:6]:void 0,S=e(_,0,c.length-1);(0,u.useEffect)(()=>{v(a??0)},[a]);let C=c.map((e,t)=>(0,d.jsx)(f,{...e,disabled:h,color:x(e.color),active:S===t,onClick:()=>{v(t),o&&o(t,e.tabKey)}},e.tabKey));return(0,d.jsxs)(s,{gap:0,justify:`space-between`,w:`100%`,wrap:`nowrap`,children:[m,p&&(0,d.jsx)(t,{className:l.hidable}),(0,d.jsx)(s,{className:l.panes,...g,children:C})]})};export{p as t};