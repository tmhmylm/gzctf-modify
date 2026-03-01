/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{Hi as e,Pa as t,hr as n,k as r,mi as i,xa as a}from"./index.ozib4idt.js";import{t as o}from"./nvu6don6.js";var s=t(a());const c=t=>{let{disabled:a,participation:c,setParticipation:l,size:u,...d}=t,f=r(),p=f.get(c.status),m=e(),{t:h}=n();return(0,s.jsx)(i,{wrap:`nowrap`,justify:`center`,mx:`xs`,miw:`calc(${m.spacing.xl} * 2)`,...d,children:p.transformTo.map(e=>{let t=f.get(e);return(0,s.jsx)(o,{size:u,iconPath:t.iconPath,color:t.color,message:h(`admin.content.games.review.participation.update`,{status:t.title}),disabled:a,onClick:()=>l(c.id,{status:e,divisionId:c.divisionId})},`${c.id}@${e}`)})})};var l={root:`ja`,item:`ka`,label:`la`,control:`ma`};export{c as n,l as t};