"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,s(s({ref:t},d),{},{components:n})):o.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},s="Oasis CLI Tools",i={unversionedId:"general/manage-tokens/advanced/oasis-cli-tools/README",id:"general/manage-tokens/advanced/oasis-cli-tools/README",title:"Oasis CLI Tools",description:"This section provides documentation on how to manage your ROSE tokens via Oasis CLI tools.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/README.md",sourceDirName:"general/manage-tokens/advanced/oasis-cli-tools",slug:"/general/manage-tokens/advanced/oasis-cli-tools/",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/README.md",tags:[],version:"current",lastUpdatedAt:1669977086,formattedLastUpdatedAt:"Dec 2, 2022",frontMatter:{},sidebar:"general",previous:{title:"Oasis File-Based Signer",permalink:"/general/manage-tokens/advanced/file-based-signer"},next:{title:"Prerequisites",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"}},l={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oasis-cli-tools"},"Oasis CLI Tools"),(0,r.kt)("p",null,"This section provides documentation on how to manage your ROSE tokens via Oasis CLI tools."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are not familiar with the command line, we recommend using one of the available ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/oasis-wallets/"},"Oasis Wallets"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Oasis CLI Tools are only fully supported on x86_64 Linux systems."),(0,r.kt)("p",{parentName:"admonition"},"Support for x86_64 macOS systems is in development. Currently, macOS binary ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core-ledger/releases"},"releases of Oasis Core Ledger")," include both, the Oasis Core Ledger CLI and the Ledger Signer Plugin, while  there are no binary releases of ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/oasis-node"},"Oasis Node CLI")," for macOS systems. To use Oasis Node CLI on macOS, you will need to ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/oasis-node#building-from-source"},"build it from source"),".")))}p.isMDXComponent=!0}}]);