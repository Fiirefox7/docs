"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[8553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Stake Requirements",s={unversionedId:"node/run-your-node/prerequisites/stake-requirements",id:"node/run-your-node/prerequisites/stake-requirements",title:"Stake Requirements",description:"This page provides an overview of the stake requirements to become a validator",source:"@site/docs/node/run-your-node/prerequisites/stake-requirements.md",sourceDirName:"node/run-your-node/prerequisites",slug:"/node/run-your-node/prerequisites/stake-requirements",permalink:"/node/run-your-node/prerequisites/stake-requirements",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/prerequisites/stake-requirements.md",tags:[],version:"current",lastUpdatedAt:1669977086,formattedLastUpdatedAt:"Dec 2, 2022",frontMatter:{},sidebar:"operators",previous:{title:"Hardware Requirements",permalink:"/node/run-your-node/prerequisites/hardware-recommendations"},next:{title:"Install Oasis Node Binary",permalink:"/node/run-your-node/prerequisites/oasis-node"}},u={},c=[{value:"Mainnet",id:"mainnet",level:2},{value:"Testnet",id:"testnet",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stake-requirements"},"Stake Requirements"),(0,o.kt)("p",null,"This page provides an overview of the stake requirements to become a validator\non the consensus layer of the Oasis Network."),(0,o.kt)("h2",{id:"mainnet"},"Mainnet"),(0,o.kt)("p",null,"To become a validator on the Oasis Network, you will need to have enough\ntokens staked in your escrow account."),(0,o.kt)("p",null,"Currently, you are going to need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"100 ROSE staked for your entity's registration since that is the\n",(0,o.kt)("a",{parentName:"li",href:"/node/genesis-doc#staking-thresholds"},"staking thresholds"),"."),(0,o.kt)("li",{parentName:"ul"},"100 ROSE staked for your validator node's registration since that is the\n",(0,o.kt)("a",{parentName:"li",href:"/node/genesis-doc#staking-thresholds"},"staking thresholds"),"."),(0,o.kt)("li",{parentName:"ul"},"If you want to be part of the active validator set, you will need enough\nROSE staked --  this means you will have to be one of the top 120 entities\nby stake. You can check out current top 120 entities on the blockchain explorer\nsuch as ",(0,o.kt)("a",{parentName:"li",href:"https://www.oasisscan.com/validators"},"Oasis Scan"),".")),(0,o.kt)("p",null,"For more information about obtaining information on your entity's account, see\nthe ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info"},"Account Get Info")," doc."),(0,o.kt)("p",null,"Staking thresholds may change in the future. Read ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/common-staking-info"},"Common staking info")," chapter,\nto learn how to check the current network thresholds directly from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To determine if you are eligible to receive a delegation from the Oasis Protocol\nFoundation, see the ",(0,o.kt)("a",{parentName:"p",href:"/get-involved/delegation-policy"},"Delegation Policy")," document.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The size of the consensus committee (i.e. the validator set) is configured by\nthe ",(0,o.kt)("a",{parentName:"p",href:"/node/genesis-doc#consensus"},(0,o.kt)("strong",{parentName:"a"},"max_validators")," consensus parameter"),".")),(0,o.kt)("h2",{id:"testnet"},"Testnet"),(0,o.kt)("p",null,"For the Testnet you are going to need TEST tokens. You can receive a limited\nnumber of TEST by using our ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.oasis.dev/"},"Oasis Network Testnet Faucet"),". For\nmore tokens please contact us at our official ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/748635004384313474/960599828662976522"},"Discord #testnet channel"),"."))}d.isMDXComponent=!0}}]);