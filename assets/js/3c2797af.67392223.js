"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),k=n,m=u["".concat(s,".").concat(k)]||u[k]||h[k]||l;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={},i="Library",o={unversionedId:"Kakarot/Registry/Blockhash/library",id:"Kakarot/Registry/Blockhash/library",title:"Library",description:"Storage",source:"@site/docs/Kakarot/Registry/Blockhash/library.md",sourceDirName:"Kakarot/Registry/Blockhash",slug:"/Kakarot/Registry/Blockhash/library",permalink:"/kakarot-doc/docs/Kakarot/Registry/Blockhash/library",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Registry/Blockhash/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blockhash registry",permalink:"/kakarot-doc/docs/Kakarot/Registry/Blockhash/blockhash_registry"},next:{title:"Constants",permalink:"/kakarot-doc/docs/Kakarot/constants"}},s={},c=[{value:"Storage",id:"storage",level:2},{value:"<code>blockhash_</code>",id:"blockhash_",level:3},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"Internal",id:"internal",level:2},{value:"<code>constructor</code>",id:"constructor",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"<code>transfer_ownership</code>",id:"transfer_ownership",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"<code>set_blockhashes</code>",id:"set_blockhashes",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-3",level:4},{value:"<code>get_blockhash</code>",id:"get_blockhash",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Explicit arguments",id:"explicit-arguments-4",level:4},{value:"Returns",id:"returns-1",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"library"},"Library"),(0,n.kt)("h2",{id:"storage"},"Storage"),(0,n.kt)("h3",{id:"blockhash_"},(0,n.kt)("inlineCode",{parentName:"h3"},"blockhash_")),(0,n.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"block_number (Uint256)  \n")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"blockhash (felt)  \n")),(0,n.kt)("h2",{id:"internal"},"Internal"),(0,n.kt)("h3",{id:"constructor"},(0,n.kt)("inlineCode",{parentName:"h3"},"constructor")),(0,n.kt)("p",null,"This function is used to initialize the registry."),(0,n.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"kakarot_address (felt): : The address of the Kakarot smart contract.  \n")),(0,n.kt)("h3",{id:"transfer_ownership"},(0,n.kt)("inlineCode",{parentName:"h3"},"transfer_ownership")),(0,n.kt)("p",null,"Transfer ownership of the registry to a new starknet address"),(0,n.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"new_owner (felt): The new owner of the blockhash registry  \n")),(0,n.kt)("h3",{id:"set_blockhashes"},(0,n.kt)("inlineCode",{parentName:"h3"},"set_blockhashes")),(0,n.kt)("p",null,"Update or create an entry in the registry."),(0,n.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments-3"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"block_number_len (felt): : the length of block numbers  \nblock_number (Uint256*): : the block numbers  \nblock_hash_len (felt): : the length of block hashes  \nblock_hash (felt*): : the block hashes  \n")),(0,n.kt)("h3",{id:"get_blockhash"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_blockhash")),(0,n.kt)("p",null,"Get the blockhash of a certain block number."),(0,n.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments-4"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"block_number (Uint256): : the block number  \n")),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"blockhash (felt)  \n")))}u.isMDXComponent=!0}}]);