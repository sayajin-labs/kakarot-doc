"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(k,c(c({ref:t},u),{},{components:r})):a.createElement(k,c({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},c="Deployer",l={unversionedId:"Kakarot/Accounts/Eoa/Deployer/deployer",id:"Kakarot/Accounts/Eoa/Deployer/deployer",title:"Deployer",description:"Constructor",source:"@site/docs/Kakarot/Accounts/Eoa/Deployer/deployer.md",sourceDirName:"Kakarot/Accounts/Eoa/Deployer",slug:"/Kakarot/Accounts/Eoa/Deployer/",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Eoa/Deployer/",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Accounts/Eoa/Deployer/deployer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Library",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Eoa/Aa/library"},next:{title:"Account registry",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Registry/Account/account_registry"}},i={},s=[{value:"Constructor",id:"constructor",level:2},{value:"<code>constructor</code>",id:"constructor-1",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"View",id:"view",level:2},{value:"<code>compute_starknet_address</code>",id:"compute_starknet_address",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns",level:4},{value:"External",id:"external",level:2},{value:"<code>create_account</code>",id:"create_account",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"Storage",id:"storage",level:2},{value:"<code>account_abstraction_class_hash</code>",id:"account_abstraction_class_hash",level:3},{value:"<code>kakarot_address</code>",id:"kakarot_address",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deployer"},"Deployer"),(0,n.kt)("h2",{id:"constructor"},"Constructor"),(0,n.kt)("h3",{id:"constructor-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"constructor")),(0,n.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"_account_abstraction_class_hash (felt): The class_hash of the Abstraction Account Contract  \n_kakarot_address (felt)  \n")),(0,n.kt)("h2",{id:"view"},"View"),(0,n.kt)("h3",{id:"compute_starknet_address"},(0,n.kt)("inlineCode",{parentName:"h3"},"compute_starknet_address")),(0,n.kt)("p",null,"computes the starknet address from the evm address"),(0,n.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"evm_address (felt)  \n")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"contract_address (felt)  \n")),(0,n.kt)("h2",{id:"external"},"External"),(0,n.kt)("h3",{id:"create_account"},(0,n.kt)("inlineCode",{parentName:"h3"},"create_account")),(0,n.kt)("p",null,"deploys a new EVM account"),(0,n.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"evm_address (felt): The Ethereum address which will be controlling the account  \n")),(0,n.kt)("h2",{id:"storage"},"Storage"),(0,n.kt)("h3",{id:"account_abstraction_class_hash"},(0,n.kt)("inlineCode",{parentName:"h3"},"account_abstraction_class_hash")),(0,n.kt)("h3",{id:"kakarot_address"},(0,n.kt)("inlineCode",{parentName:"h3"},"kakarot_address")))}p.isMDXComponent=!0}}]);