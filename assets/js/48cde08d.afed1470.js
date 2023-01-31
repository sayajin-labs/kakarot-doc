"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=l,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={},i="Precompiles",p={unversionedId:"kakarot/precompiles/precompiles",id:"kakarot/precompiles/precompiles",title:"Precompiles",description:"Internal",source:"@site/docs/kakarot/precompiles/precompiles.md",sourceDirName:"kakarot/precompiles",slug:"/kakarot/precompiles/",permalink:"/kakarot-doc/docs/kakarot/precompiles/",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/kakarot/precompiles/precompiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/kakarot-doc/docs/kakarot/memory"},next:{title:"Blake2f",permalink:"/kakarot-doc/docs/kakarot/precompiles/blake2f"}},o={},c=[{value:"Internal",id:"internal",level:2},{value:"<code>is_precompile</code>",id:"is_precompile",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>_exec_precompile</code>",id:"_exec_precompile",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>not_implemented_precompile</code>",id:"not_implemented_precompile",level:3},{value:"Implicit arguments",id:"implicit-arguments-2",level:4},{value:"Explicit arguments",id:"explicit-arguments-2",level:4}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"precompiles"},"Precompiles"),(0,l.kt)("h2",{id:"internal"},"Internal"),(0,l.kt)("h3",{id:"is_precompile"},(0,l.kt)("inlineCode",{parentName:"h3"},"is_precompile")),(0,l.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,l.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"address (felt)  \n")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"felt  \n")),(0,l.kt)("h3",{id:"_exec_precompile"},(0,l.kt)("inlineCode",{parentName:"h3"},"_exec_precompile")),(0,l.kt)("p",null,"Executes associated function of precompiled address"),(0,l.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,l.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"address (felt): The precompile address.  \ninput_len (felt): The length of the input array.  \ninput (felt*): The input array.  \n")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"output_len (felt)  \noutput (felt*)  \ngas_used (felt)  \n")),(0,l.kt)("h3",{id:"not_implemented_precompile"},(0,l.kt)("inlineCode",{parentName:"h3"},"not_implemented_precompile")),(0,l.kt)("p",null,"A placeholder for precompile that are not implemented yet"),(0,l.kt)("h4",{id:"implicit-arguments-2"},"Implicit arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"syscall_ptr (felt*)  \npedersen_ptr (HashBuiltin*)  \nrange_check_ptr  \nbitwise_ptr (BitwiseBuiltin*)  \n")),(0,l.kt)("h4",{id:"explicit-arguments-2"},"Explicit arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"address (felt)  \n_input_len (felt)  \n_input (felt*)  \n")))}m.isMDXComponent=!0}}]);