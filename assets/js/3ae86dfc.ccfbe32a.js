"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[8990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),u=o,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const c={},i="Encoding",a={unversionedId:"core/encoding",id:"core/encoding",title:"Encoding",description:"All messages exchanged by different components in Oasis Core are encoded using",source:"@site/docs/core/encoding.md",sourceDirName:"core",slug:"/core/encoding",permalink:"/core/encoding",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/encoding.md",tags:[],version:"current",lastUpdatedAt:1669418750,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Common Functionality",permalink:"/core/common-functionality"},next:{title:"Cryptography",permalink:"/core/crypto"}},s={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"encoding"},"Encoding"),(0,o.kt)("p",null,"All messages exchanged by different components in Oasis Core are encoded using\n",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7049"},"canonical CBOR as defined by RFC 7049"),"."),(0,o.kt)("p",null,"When describing different messages in the documentation, we use Go structs with\nfield annotations that specify how different fields translate to their encoded\nform."))}d.isMDXComponent=!0}}]);