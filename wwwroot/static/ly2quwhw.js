/* The GZ::CTF Project @v1.8.1-patch.1
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-GZCTF-Restricted (Restricted components)
 * Commit    : 5a682b5526cdc6853cb8d55a60a2b9797e544825
 * Build     : 2026-02-11T11:32:17Z
 * Copyright (C) 2022-2026 GZTimeWalker. All Rights Reserved.
 */
import{Pa as e,ka as t}from"./index.ozib4idt.js";var n=e(t(),1);function r(e){return t=>{if(!t)e(t);else if(typeof t==`function`)e(t);else if(typeof t==`object`&&`nativeEvent`in t){let{currentTarget:n}=t;n.type===`checkbox`?e(n.checked):e(n.value)}else e(t)}}function i(e){let[t,i]=(0,n.useState)(e);return[t,r(i)]}export{i as t};