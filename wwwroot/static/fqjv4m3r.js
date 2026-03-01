/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{i as e}from"./c2rp792v.js";import{Gr as t,Pa as n,Qn as r,_i as i,dr as a,ka as o,ur as s,xa as c}from"./index.ozib4idt.js";var l=n(o()),u=n(c());const d=new Map([[r.Admin,3],[r.Monitor,1],[r.User,0],[r.Banned,-1]]),f=(e,t)=>d.get(t??r.User)>=d.get(e),p=({requiredRole:n,children:r})=>{let{role:o,error:c}=e(),f=a(),p=s(),m=d.get(n);return(0,l.useEffect)(()=>{c&&c.status===401&&f(`/account/login?from=${p.pathname}`,{replace:!0}),o&&d.get(o)<m&&f(`/404`)},[o,c,m,f]),o&&d.get(o)<m?(0,u.jsx)(t,{h:`calc(100vh - 32px)`,children:(0,u.jsx)(i,{})}):(0,u.jsx)(u.Fragment,{children:r})};export{p as n,f as t};