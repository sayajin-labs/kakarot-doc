"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},l="Contract account",c={unversionedId:"kakarot/accounts/contract/contract_account",id:"kakarot/accounts/contract/contract_account",title:"Contract account",description:"Constructor",source:"@site/docs/kakarot/accounts/contract/contract_account.md",sourceDirName:"kakarot/accounts/contract",slug:"/kakarot/accounts/contract/contract_account",permalink:"/kakarot-doc/docs/kakarot/accounts/contract/contract_account",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/kakarot/accounts/contract/contract_account.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kakarot",permalink:"/kakarot-doc/docs/kakarot/"},next:{title:"Library",permalink:"/kakarot-doc/docs/kakarot/accounts/contract/library"}},o={},s=[{value:"Constructor",id:"constructor",level:2},{value:"<code>constructor</code>",id:"constructor-1",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"View",id:"view",level:2},{value:"<code>bytecode</code>",id:"bytecode",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>bytecode_len</code>",id:"bytecode_len",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>storage</code>",id:"storage",level:3},{value:"Implicit arguments",id:"implicit-arguments-3",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>is_initialized</code>",id:"is_initialized",level:3},{value:"Implicit arguments",id:"implicit-arguments-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"External",id:"external",level:2},{value:"<code>write_bytecode</code>",id:"write_bytecode",level:3},{value:"Implicit arguments",id:"implicit-arguments-5",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"<code>write_storage</code>",id:"write_storage",level:3},{value:"Implicit arguments",id:"implicit-arguments-6",level:4},{value:"Explicit arguments",id:"explicit-arguments-3",level:4},{value:"<code>initialize</code>",id:"initialize",level:3},{value:"Implicit arguments",id:"implicit-arguments-7",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-account"},"Contract account"),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("h3",{id:"constructor-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"constructor")),(0,a.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"kakarot_address (felt)  \nbytecode_len (felt)  \nbytecode (felt*)  \n")),(0,a.kt)("h2",{id:"view"},"View"),(0,a.kt)("h3",{id:"bytecode"},(0,a.kt)("inlineCode",{parentName:"h3"},"bytecode")),(0,a.kt)("p",null,"This function is used to get the bytecode of the smart contract."),(0,a.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytecode_len (felt)  \nbytecode (felt*)  \n")),(0,a.kt)("h3",{id:"bytecode_len"},(0,a.kt)("inlineCode",{parentName:"h3"},"bytecode_len")),(0,a.kt)("p",null,"This function is used to get only the bytecode_len of the smart contract."),(0,a.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"len (felt)  \n")),(0,a.kt)("h3",{id:"storage"},(0,a.kt)("inlineCode",{parentName:"h3"},"storage")),(0,a.kt)("p",null,"Read a given storage key"),(0,a.kt)("h4",{id:"implicit-arguments-3"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"key (Uint256)  \n")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"value (Uint256)  \n")),(0,a.kt)("h3",{id:"is_initialized"},(0,a.kt)("inlineCode",{parentName:"h3"},"is_initialized")),(0,a.kt)("p",null,"This function checks if the account was initialized."),(0,a.kt)("h4",{id:"implicit-arguments-4"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"is_initialized (felt)  \n")),(0,a.kt)("h2",{id:"external"},"External"),(0,a.kt)("h3",{id:"write_bytecode"},(0,a.kt)("inlineCode",{parentName:"h3"},"write_bytecode")),(0,a.kt)("p",null,"Store the bytecode of the contract."),(0,a.kt)("h4",{id:"implicit-arguments-5"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"bytecode_len (felt): : The length of the bytecode.  \nbytecode (felt*): : The bytecode of the contract.  \n")),(0,a.kt)("h3",{id:"write_storage"},(0,a.kt)("inlineCode",{parentName:"h3"},"write_storage")),(0,a.kt)("p",null,"Store a key-value pair"),(0,a.kt)("h4",{id:"implicit-arguments-6"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,a.kt)("h4",{id:"explicit-arguments-3"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"key (Uint256): : The bytes32 storage key.  \nvalue (Uint256): : The bytes32 stored value.  \n")),(0,a.kt)("h3",{id:"initialize"},(0,a.kt)("inlineCode",{parentName:"h3"},"initialize")),(0,a.kt)("p",null,"This function is used to initialize the smart contract."),(0,a.kt)("h4",{id:"implicit-arguments-7"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")))}p.isMDXComponent=!0}}]);