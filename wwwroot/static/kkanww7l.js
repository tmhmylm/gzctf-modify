/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{Gr as e,Hi as t,Li as n,Pa as r,Yi as i,mi as a,wa as o,xa as s}from"./index.ozib4idt.js";var c={bar:`sa`,pulse:`ta`,box:`ua`,back:`va`,spikes:`wa`,spike:`xa`,l:`ya`,r:`za`,t:`Aa`,b:`Ba`},l=r(s());const u=r=>{let{thickness:s=4,spikeLength:u=250,percentage:d,color:f,...p}=r,m=t(),{colorScheme:h}=n(),g=d<100,_=g?h===`dark`?`light`:f??m.primaryColor:`gray`,v=m.colors[_][5],y=m.colors[_][2];return(0,l.jsx)(e,{py:s*u/100,...p,__vars:{"--thickness":o(s),"--spike-length":`${u}%`,"--neg-spike-length":`${-u}%`,"--percentage":`${d}%`,"--spike-color":v,"--bg-color":y,"--pulsing-display":g?`block`:`none`},children:(0,l.jsx)(`div`,{className:c.back,children:(0,l.jsxs)(a,{justify:`right`,className:c.box,children:[(0,l.jsx)(`div`,{className:c.bar,children:(0,l.jsx)(`div`,{})}),(0,l.jsxs)(`div`,{className:c.spikes,children:[(0,l.jsx)(`div`,{className:i(c.spike,c.r)}),(0,l.jsx)(`div`,{className:i(c.spike,c.l)}),(0,l.jsx)(`div`,{className:i(c.spike,c.t)}),(0,l.jsx)(`div`,{className:i(c.spike,c.b)})]})]})})})};export{u as t};