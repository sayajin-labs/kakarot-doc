"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[65],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},s="System operations",i={unversionedId:"Kakarot/Instructions/system_operations",id:"Kakarot/Instructions/system_operations",title:"System operations",description:"Internal",source:"@site/docs/Kakarot/Instructions/system_operations.md",sourceDirName:"Kakarot/Instructions",slug:"/Kakarot/Instructions/system_operations",permalink:"/kakarot-doc/docs/Kakarot/Instructions/system_operations",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Instructions/system_operations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stop and arithmetic operations",permalink:"/kakarot-doc/docs/Kakarot/Instructions/stop_and_arithmetic_operations"},next:{title:"Precompiles",permalink:"/kakarot-doc/docs/Kakarot/Precompiles/"}},l={},c=[{value:"Internal",id:"internal",level:2},{value:"<code>get_create_address</code>",id:"get_create_address",level:3},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>get_create2_address</code>",id:"get_create2_address",level:3},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>_finalize_loop</code>",id:"_finalize_loop",level:3},{value:"Explicit arguments",id:"explicit-arguments-2",level:4},{value:"Returns",id:"returns-2",level:4}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-operations"},"System operations"),(0,a.kt)("h2",{id:"internal"},"Internal"),(0,a.kt)("h3",{id:"get_create_address"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_create_address")),(0,a.kt)("p",null,"Constructs an evm contract address for the create opcode\nvia last twenty bytes of the keccak hash of:\nkeccak256(rlp(","[sender_address,sender_nonce]","))[\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://www.evm.codes/#f0"},"CREATE")),(0,a.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sender_address (felt): - The evm sender address.  \nsalt (felt)  \n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"evm_contract_address (felt)  \n")),(0,a.kt)("h3",{id:"get_create2_address"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_create2_address")),(0,a.kt)("p",null,"Constructs an evm contract address for the create2 opcode\nvia last twenty bytes of the keccak hash of:\nkeccak256(0xff + sender_address + salt +\nkeccak256(initialisation_code))","[12:]","\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://www.evm.codes/#f5"},"CREATE2")),(0,a.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sender_address (felt): - The evm sender address.  \nbytecode_len (felt): - The length of the initialization code.  \nbytecode (felt*): - The offset to store the element at.  \nsalt (Uint256): - The salt given to the create2 opcode.  \n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"evm_contract_address (felt)  \n")),(0,a.kt)("h3",{id:"_finalize_loop"},(0,a.kt)("inlineCode",{parentName:"h3"},"_finalize_loop")),(0,a.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"destroy_contracts_len (felt)  \ndestroy_contracts (felt*)  \n")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"felt*  \n")))}d.isMDXComponent=!0}}]);