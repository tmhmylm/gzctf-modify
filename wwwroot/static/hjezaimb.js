/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{Pa as e,Pn as t,ka as n,zn as r}from"./index.ozib4idt.js";var i=e(n());const a=(e,n)=>{let{data:i,error:a,mutate:o}=r.edit.useEditGetGameChallenge(e,n,t);return{challenge:i,error:a,mutate:o}},o=e=>{let{data:n,error:a,mutate:o}=r.edit.useEditGetGameChallenges(e,t),[s,c]=(0,i.useState)(null);return(0,i.useEffect)(()=>{n&&c(n.toSorted((e,t)=>(e.category??``)>(t.category??``)?-1:1))},[n]),{challenges:s,error:a,mutate:o}};export{o as n,a as t};