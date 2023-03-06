"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[74],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,_=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(_,a(a({ref:t},p),{},{components:n})):r.createElement(_,a({ref:t},p))}));function _(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const l={},a="Externally owned account",c={unversionedId:"Kakarot/Accounts/Eoa/externally_owned_account",id:"Kakarot/Accounts/Eoa/externally_owned_account",title:"Externally owned account",description:"View",source:"@site/docs/Kakarot/Accounts/Eoa/externally_owned_account.md",sourceDirName:"Kakarot/Accounts/Eoa",slug:"/Kakarot/Accounts/Eoa/externally_owned_account",permalink:"/docs/Kakarot/Accounts/Eoa/externally_owned_account",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Accounts/Eoa/externally_owned_account.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Library",permalink:"/docs/Kakarot/Accounts/Contract/library"},next:{title:"Library",permalink:"/docs/Kakarot/Accounts/Eoa/library"}},o={},u=[{value:"View",id:"view",level:2},{value:"<code>supports_interface</code>",id:"supports_interface",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>get_evm_address</code>",id:"get_evm_address",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>bytecode</code>",id:"bytecode",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>bytecode_len</code>",id:"bytecode_len",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>get_nonce</code>",id:"get_nonce",level:3},{value:"Implicit arguments",id:"implicit-arguments-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"External",id:"external",level:2},{value:"<code>initialize</code>",id:"initialize",level:3},{value:"Implicit arguments",id:"implicit-arguments-5",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"<code>__validate__</code>",id:"__validate__",level:3},{value:"Implicit arguments",id:"implicit-arguments-6",level:4},{value:"<code>__validate_declare__</code>",id:"__validate_declare__",level:3},{value:"Implicit arguments",id:"implicit-arguments-7",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"<code>__execute__</code>",id:"__execute__",level:3},{value:"Implicit arguments",id:"implicit-arguments-8",level:4},{value:"<code>increment_nonce</code>",id:"increment_nonce",level:3},{value:"Implicit arguments",id:"implicit-arguments-9",level:4},{value:"Returns",id:"returns-5",level:4}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"externally-owned-account"},"Externally owned account"),(0,i.kt)("h2",{id:"view"},"View"),(0,i.kt)("h3",{id:"supports_interface"},(0,i.kt)("inlineCode",{parentName:"h3"},"supports_interface")),(0,i.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface_id (felt): The interface Id to verify if supported  \n")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"success (felt)  \n")),(0,i.kt)("h3",{id:"get_evm_address"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_evm_address")),(0,i.kt)("p",null,"Return ethereum address of the externally owned account"),(0,i.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"evm_address (felt)  \n")),(0,i.kt)("h3",{id:"bytecode"},(0,i.kt)("inlineCode",{parentName:"h3"},"bytecode")),(0,i.kt)("p",null,"Empty bytecode needed for EXTCODE opcodes."),(0,i.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bytecode_len (felt)  \nbytecode (felt*)  \n")),(0,i.kt)("h3",{id:"bytecode_len"},(0,i.kt)("inlineCode",{parentName:"h3"},"bytecode_len")),(0,i.kt)("p",null,"Empty bytecode needed for EXTCODE opcodes."),(0,i.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"len (felt)  \n")),(0,i.kt)("h3",{id:"get_nonce"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_nonce")),(0,i.kt)("p",null,"This function is used to read the nonce from storage"),(0,i.kt)("h4",{id:"implicit-arguments-4"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nonce (felt): : The current nonce of the contract account  \n")),(0,i.kt)("h2",{id:"external"},"External"),(0,i.kt)("h3",{id:"initialize"},(0,i.kt)("inlineCode",{parentName:"h3"},"initialize")),(0,i.kt)("h4",{id:"implicit-arguments-5"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,i.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kakarot_address (felt)  \nevm_address (felt)  \n")),(0,i.kt)("h3",{id:"__validate__"},(0,i.kt)("inlineCode",{parentName:"h3"},"__validate__")),(0,i.kt)("p",null,"Validate a transaction"),(0,i.kt)("h4",{id:"implicit-arguments-6"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nbitwise_ptr (BitwiseBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h3",{id:"__validate_declare__"},(0,i.kt)("inlineCode",{parentName:"h3"},"__validate_declare__")),(0,i.kt)("p",null,"Validate this account class for declaration"),(0,i.kt)("h4",{id:"implicit-arguments-7"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nbitwise_ptr (BitwiseBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class_hash (felt): The account class  \n")),(0,i.kt)("h3",{id:"__execute__"},(0,i.kt)("inlineCode",{parentName:"h3"},"__execute__")),(0,i.kt)("p",null,"Execute the Kakarot transaction"),(0,i.kt)("h4",{id:"implicit-arguments-8"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \necdsa_ptr (SignatureBuiltin*)  \nbitwise_ptr (BitwiseBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h3",{id:"increment_nonce"},(0,i.kt)("inlineCode",{parentName:"h3"},"increment_nonce")),(0,i.kt)("p",null,"This function increases the contract accounts nonce by 1"),(0,i.kt)("h4",{id:"implicit-arguments-9"},"Implicit arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nonce (felt): : The new nonce of the contract account  \n")))}s.isMDXComponent=!0}}]);