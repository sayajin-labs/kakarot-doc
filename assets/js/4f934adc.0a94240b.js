"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,m=u["".concat(o,".").concat(k)]||u[k]||h[k]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={},i="Blockhash registry",s={unversionedId:"Kakarot/Registry/Blockhash/blockhash_registry",id:"Kakarot/Registry/Blockhash/blockhash_registry",title:"Blockhash registry",description:"Constructor",source:"@site/docs/Kakarot/Registry/Blockhash/blockhash_registry.md",sourceDirName:"Kakarot/Registry/Blockhash",slug:"/Kakarot/Registry/Blockhash/blockhash_registry",permalink:"/kakarot-doc/docs/Kakarot/Registry/Blockhash/blockhash_registry",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Registry/Blockhash/blockhash_registry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sha256",permalink:"/kakarot-doc/docs/Kakarot/Precompiles/sha256"},next:{title:"Library",permalink:"/kakarot-doc/docs/Kakarot/Registry/Blockhash/library"}},o={},c=[{value:"Constructor",id:"constructor",level:2},{value:"<code>constructor</code>",id:"constructor-1",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"View",id:"view",level:2},{value:"<code>get_blockhash</code>",id:"get_blockhash",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns",level:4},{value:"External",id:"external",level:2},{value:"<code>transfer_ownership</code>",id:"transfer_ownership",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"<code>set_blockhashes</code>",id:"set_blockhashes",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Explicit arguments",id:"explicit-arguments-3",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blockhash-registry"},"Blockhash registry"),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("h3",{id:"constructor-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"constructor")),(0,a.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"kakarot_address (felt)  \n")),(0,a.kt)("h2",{id:"view"},"View"),(0,a.kt)("h3",{id:"get_blockhash"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_blockhash")),(0,a.kt)("p",null,"Get the blockhash of a certain block number."),(0,a.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"block_number (Uint256): : the block number  \n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"blockhash (felt)  \n")),(0,a.kt)("h2",{id:"external"},"External"),(0,a.kt)("h3",{id:"transfer_ownership"},(0,a.kt)("inlineCode",{parentName:"h3"},"transfer_ownership")),(0,a.kt)("p",null,"Transfer ownership of the registry to a new starknet address"),(0,a.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"new_address (felt): : The new owner of the blockhash registry  \n")),(0,a.kt)("h3",{id:"set_blockhashes"},(0,a.kt)("inlineCode",{parentName:"h3"},"set_blockhashes")),(0,a.kt)("p",null,"Update or create an entry in the registry."),(0,a.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-3"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"block_number_len (felt): : the length of block numbers  \nblock_number (Uint256*): : the block numbers  \nblock_hash_len (felt): : the length of block hashes  \nblock_hash (felt*): : the block hashes  \n")))}u.isMDXComponent=!0}}]);