/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{$r as e,Ai as t,Pa as n,Yi as r,ka as i,xa as a}from"./index.ozib4idt.js";var o={container:`Zc`,text:`_e`,textWrapper:`-e`,clone:`ae`,scroll:`be`},s=n(i()),c=n(a());const l=({text:n,onClick:i,size:a,speedCharPerSec:l=3.2,...u})=>{let d=(0,s.useRef)(null),f=(0,s.useRef)(null),[p,m]=(0,s.useState)(!1),[h,g]=(0,s.useState)(!1),[_,v]=(0,s.useState)(4),y=(0,s.useCallback)(()=>{if(h)return;let e=d.current,t=f.current;if(!e||!t)return;let n=parseFloat(getComputedStyle(t).fontSize||`14`)||14,r=t.scrollWidth;if(r-e.clientWidth>0){let e=r/(l*n);v(Math.max(3,e)),m(!0)}g(!0)},[h,l]);return(0,c.jsx)(t,{ref:d,className:o.container,onClick:i,onMouseEnter:y,"data-scroll":p||void 0,__vars:{"--scroll-time":`${_}s`},...u,children:(0,c.jsxs)(`div`,{className:o.textWrapper,children:[(0,c.jsx)(e,{ref:f,className:o.text,title:n,fz:a,children:n}),p&&(0,c.jsx)(e,{className:r(o.text,o.clone),fz:a,"aria-hidden":!0,children:n})]})})};export{l as t};