"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[5603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,y=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="Install Oasis Node Binary",s={unversionedId:"node/run-your-node/prerequisites/oasis-node",id:"node/run-your-node/prerequisites/oasis-node",title:"Install Oasis Node Binary",description:"The Oasis Node is a binary that is created from the Oasis Core repository's go/ path.",source:"@site/docs/node/run-your-node/prerequisites/oasis-node.md",sourceDirName:"node/run-your-node/prerequisites",slug:"/node/run-your-node/prerequisites/oasis-node",permalink:"/node/run-your-node/prerequisites/oasis-node",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/prerequisites/oasis-node.md",tags:[],version:"current",lastUpdatedAt:1669977086,formattedLastUpdatedAt:"Dec 2, 2022",frontMatter:{},sidebar:"operators",previous:{title:"Stake Requirements",permalink:"/node/run-your-node/prerequisites/stake-requirements"},next:{title:"System Configuration",permalink:"/node/run-your-node/prerequisites/system-configuration"}},l={},d=[{value:"Downloading a Binary Release",id:"downloading-a-binary-release",level:2},{value:"Building From Source",id:"building-from-source",level:2},{value:"Adding <code>oasis-node</code> Binary to <code>PATH</code>",id:"adding-oasis-node-binary-to-path",level:2},{value:"Running ParaTimes",id:"running-paratimes",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-oasis-node-binary"},"Install Oasis Node Binary"),(0,o.kt)("p",null,"The Oasis Node is a binary that is created from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core"},"Oasis Core")," repository's ",(0,o.kt)("inlineCode",{parentName:"p"},"go/")," path."),(0,o.kt)("p",null,"It contains both the logic for running an Oasis node and also provides a CLI for handling registry, staking and other operations."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Oasis Node is currently only supported on x86_64 Linux systems.")),(0,o.kt)("h2",{id:"downloading-a-binary-release"},"Downloading a Binary Release"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We suggest that you build Oasis Node from source yourself for a production deployment of an Oasis node.")),(0,o.kt)("p",null,"For convenience, we provide binaries that have been built by the Oasis Protocol Foundation. Links to the binaries are provided in the ",(0,o.kt)("a",{parentName:"p",href:"/node/mainnet/"},"Network Parameters")," page."),(0,o.kt)("h2",{id:"building-from-source"},"Building From Source"),(0,o.kt)("p",null,"Although highly suggested, building from source is currently beyond the scope of this documentation."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../../../core/development-setup/build-environment-setup-and-building"},"Oasis Core's Build Environment Setup and Building")," documentation for more details."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The code in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/"},(0,o.kt)("inlineCode",{parentName:"a"},"master")," branch")," might be incompatible with the code used by other nodes in the Mainnet."),(0,o.kt)("p",{parentName:"admonition"},"Make sure to use the version specified in the ",(0,o.kt)("a",{parentName:"p",href:"/node/mainnet/"},"Network Parameters"),".")),(0,o.kt)("h2",{id:"adding-oasis-node-binary-to-path"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h2"},"oasis-node")," Binary to ",(0,o.kt)("inlineCode",{parentName:"h2"},"PATH")),(0,o.kt)("p",null,"To install the ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node")," binary for the current user, copy/symlink it to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.local/bin"),"."),(0,o.kt)("p",null,"To install the ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node")," binary for all users of the system, copy it to ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),"."),(0,o.kt)("h2",{id:"running-paratimes"},"Running ParaTimes"),(0,o.kt)("p",null,"If you intend to ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node"},"run a ParaTime node")," you will need to additionally install the following software packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/projectatomic/bubblewrap"},"Bubblewrap")," 0.4.1+, needed for creating process sandboxes.")),(0,o.kt)("p",null,"  On Ubuntu 20.04+, you can install it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"sudo apt install bubblewrap\n")),(0,o.kt)("p",null,"  On Fedora, you can install it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"sudo dnf install bubblewrap\n")))}p.isMDXComponent=!0}}]);