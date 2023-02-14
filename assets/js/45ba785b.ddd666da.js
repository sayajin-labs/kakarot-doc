"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[766],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||l;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},i="Library",o={unversionedId:"Kakarot/Accounts/Eoa/library",id:"Kakarot/Accounts/Eoa/library",title:"Library",description:"Storage",source:"@site/docs/Kakarot/Accounts/Eoa/library.md",sourceDirName:"Kakarot/Accounts/Eoa",slug:"/Kakarot/Accounts/Eoa/library",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Eoa/library",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/Accounts/Eoa/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Externally owned account",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Eoa/externally_owned_account"},next:{title:"Proxy",permalink:"/kakarot-doc/docs/Kakarot/Accounts/Proxy/"}},c={},s=[{value:"Storage",id:"storage",level:2},{value:"<code>evm_address</code>",id:"evm_address",level:3},{value:"Returns",id:"returns",level:4},{value:"<code>kakarot_address</code>",id:"kakarot_address",level:3},{value:"Returns",id:"returns-1",level:4},{value:"<code>is_initialized_</code>",id:"is_initialized_",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Internal",id:"internal",level:2},{value:"<code>initialize</code>",id:"initialize",level:3},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"<code>get_evm_address</code>",id:"get_evm_address",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>validate</code>",id:"validate",level:3},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"<code>execute</code>",id:"execute",level:3},{value:"Returns",id:"returns-4",level:4}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"library"},"Library"),(0,n.kt)("h2",{id:"storage"},"Storage"),(0,n.kt)("h3",{id:"evm_address"},(0,n.kt)("inlineCode",{parentName:"h3"},"evm_address")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"evm_address (felt)  \n")),(0,n.kt)("h3",{id:"kakarot_address"},(0,n.kt)("inlineCode",{parentName:"h3"},"kakarot_address")),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"kakarot_address (felt)  \n")),(0,n.kt)("h3",{id:"is_initialized_"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_initialized_")),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"res (felt)  \n")),(0,n.kt)("h2",{id:"internal"},"Internal"),(0,n.kt)("h3",{id:"initialize"},(0,n.kt)("inlineCode",{parentName:"h3"},"initialize")),(0,n.kt)("p",null,"This function is used to initialize the externally owned account."),(0,n.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"_kakarot_address (felt)  \n_evm_address  \n")),(0,n.kt)("h3",{id:"get_evm_address"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_evm_address")),(0,n.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \n")),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"evm_address (felt)  \n")),(0,n.kt)("h3",{id:"validate"},(0,n.kt)("inlineCode",{parentName:"h3"},"validate")),(0,n.kt)("p",null,"checks if tx is signed and valid for each call"),(0,n.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"call_array_len (felt): The length of the call array  \ncall_array (CallArray*): The call array  \ncalldata_len (felt): The length of the calldata  \ncalldata (felt*): The calldata  \n")),(0,n.kt)("h3",{id:"execute"},(0,n.kt)("inlineCode",{parentName:"h3"},"execute")),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"response_len (felt)  \n")))}u.isMDXComponent=!0}}]);