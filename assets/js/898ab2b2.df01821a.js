"use strict";(self.webpackChunkkakarot=self.webpackChunkkakarot||[]).push([[509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="Memory",i={unversionedId:"Kakarot/memory",id:"Kakarot/memory",title:"Memory",description:"Internal",source:"@site/docs/Kakarot/memory.md",sourceDirName:"Kakarot",slug:"/Kakarot/memory",permalink:"/kakarot-doc/docs/Kakarot/memory",draft:!1,editUrl:"https://github.com/sayajin-labs/kakarot/docs/Kakarot/memory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Library",permalink:"/kakarot-doc/docs/Kakarot/library"},next:{title:"Stack",permalink:"/kakarot-doc/docs/Kakarot/stack"}},c={},s=[{value:"Internal",id:"internal",level:2},{value:"<code>store_aligned_words</code>",id:"store_aligned_words",level:3},{value:"Implicit arguments",id:"implicit-arguments",level:4},{value:"Explicit arguments",id:"explicit-arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>load_aligned_words</code>",id:"load_aligned_words",level:3},{value:"Implicit arguments",id:"implicit-arguments-1",level:4},{value:"Explicit arguments",id:"explicit-arguments-1",level:4},{value:"Returns",id:"returns-1",level:4}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"memory"},"Memory"),(0,a.kt)("h2",{id:"internal"},"Internal"),(0,a.kt)("h3",{id:"store_aligned_words"},(0,a.kt)("inlineCode",{parentName:"h3"},"store_aligned_words")),(0,a.kt)("h4",{id:"implicit-arguments"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"word_dict (DictAccess*)  \nchunk_index (felt)  \nchunk_index_f (felt)  \nelement (felt*)  \n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"word_dict (DictAccess*)  \n")),(0,a.kt)("h3",{id:"load_aligned_words"},(0,a.kt)("inlineCode",{parentName:"h3"},"load_aligned_words")),(0,a.kt)("h4",{id:"implicit-arguments-1"},"Implicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"range_check_ptr  \n")),(0,a.kt)("h4",{id:"explicit-arguments-1"},"Explicit arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"word_dict (DictAccess*)  \nchunk_index (felt)  \nchunk_index_f (felt)  \nelement (felt*)  \n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"word_dict (DictAccess*)  \n")))}p.isMDXComponent=!0}}]);