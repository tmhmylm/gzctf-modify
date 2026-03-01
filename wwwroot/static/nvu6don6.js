/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{t as e}from"./mqil03bu.js";import{$r as t,Ir as n,Kr as r,Pa as i,gi as a,hr as o,j as s,ka as c,mi as l,vi as u,xa as d}from"./index.ozib4idt.js";var f=s(),p=i(c()),m=i(d());const h=i=>{let[s,c]=(0,p.useState)(!1),[d,h]=(0,p.useState)(!1),{t:g}=o();return(0,m.jsxs)(u,{shadow:`md`,width:`max-content`,position:`top`,opened:s,onChange:c,children:[(0,m.jsx)(u.Target,{children:(0,m.jsx)(a,{color:i.color,onClick:()=>c(!0),disabled:i.disabled&&!d,size:i.size,loading:d,children:(0,m.jsx)(f.Icon,{path:i.iconPath,size:i.size??1})})}),(0,m.jsx)(u.Dropdown,{children:(0,m.jsxs)(n,{align:`center`,gap:6,children:[(0,m.jsx)(t,{size:`sm`,fw:`bold`,h:`auto`,ta:`center`,className:e.wsPreWrap,children:i.message}),(0,m.jsxs)(l,{w:`100%`,justify:`space-between`,children:[(0,m.jsx)(r,{size:`xs`,py:2,variant:`outline`,disabled:i.disabled,onClick:()=>c(!1),children:g(`common.modal.cancel`)}),(0,m.jsx)(r,{size:`xs`,py:2,color:i.color,disabled:i.disabled&&!d,loading:d,onClick:()=>{h(!0),i.onClick().finally(()=>{h(!1),c(!1)})},children:g(`common.modal.confirm`)})]})]})})]})};export{h as t};