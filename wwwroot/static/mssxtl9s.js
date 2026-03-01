/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{Ii as e,Pa as t,ia as n,ka as r,ra as i,xa as a}from"./index.ozib4idt.js";var o=t(a(),1),s=t(r(),1),c={multiple:!1},l=(0,s.forwardRef)((t,r)=>{let{onChange:a,children:l,multiple:u,accept:d,name:f,form:p,resetRef:m,disabled:h,capture:g,inputProps:_,...v}=e(`FileButton`,c,t),y=(0,s.useRef)(null),b=()=>{!h&&y.current?.click()};return i(m,()=>{y.current&&(y.current.value=``)}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`input`,{style:{display:`none`},type:`file`,accept:d,multiple:u,onChange:e=>{if(e.currentTarget.files===null)return a(u?[]:null);a(u?Array.from(e.currentTarget.files):e.currentTarget.files[0]||null)},ref:n(r,y),name:f,form:p,capture:g,..._}),l({onClick:b,...v})]})});l.displayName=`@mantine/core/FileButton`;export{l as t};