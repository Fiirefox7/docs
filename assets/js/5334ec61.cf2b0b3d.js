"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9200],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={},a="Building",l={unversionedId:"core/development-setup/building",id:"core/development-setup/building",title:"Building",description:"This section contains a description of steps required to build Oasis Core.",source:"@site/docs/core/development-setup/building.md",sourceDirName:"core/development-setup",slug:"/core/development-setup/building",permalink:"/core/development-setup/building",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/development-setup/building.md",tags:[],version:"current",lastUpdatedAt:1669418750,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Prerequisites",permalink:"/core/development-setup/prerequisites"},next:{title:"Running Tests and Development Networks",permalink:"/core/development-setup/running-tests-and-development-networks"}},s={},p=[{value:"Unsafe Non-SGX Environment",id:"unsafe-non-sgx-environment",level:2},{value:"SGX Environment",id:"sgx-environment",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building"},"Building"),(0,o.kt)("p",null,"This section contains a description of steps required to build Oasis Core.\nBefore proceeding, make sure to look at the ",(0,o.kt)("a",{parentName:"p",href:"/core/development-setup/prerequisites"},"prerequisites")," required for running\nan Oasis Core environment."),(0,o.kt)("h2",{id:"unsafe-non-sgx-environment"},"Unsafe Non-SGX Environment"),(0,o.kt)("p",null,"To build everything required for running an Oasis node locally, simply execute\nthe following in the top-level directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export OASIS_UNSAFE_SKIP_AVR_VERIFY="1"\nexport OASIS_UNSAFE_SKIP_KM_POLICY="1"\nexport OASIS_UNSAFE_ALLOW_DEBUG_ENCLAVES="1"\nmake\n')),(0,o.kt)("p",null,"To build BadgerDB without ",(0,o.kt)("inlineCode",{parentName:"p"},"jemalloc")," support (and avoid installing ",(0,o.kt)("inlineCode",{parentName:"p"},"jemalloc"),"\non your system), set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export OASIS_BADGER_NO_JEMALLOC="1"\n')),(0,o.kt)("p",null,"Not using ",(0,o.kt)("inlineCode",{parentName:"p"},"jemalloc")," is fine for development purposes."),(0,o.kt)("p",null,"This will build all the required parts (build tools, Oasis node, runtime\nlibraries, runtime loader, key manager and test runtimes). The AVR and KM flags\nare supported on production SGX systems only and these features must be disabled\nin our environment."),(0,o.kt)("h2",{id:"sgx-environment"},"SGX Environment"),(0,o.kt)("p",null,"Compilation procedure under SGX environment is similar to the non-SGX with\nslightly different environmental variables set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export OASIS_UNSAFE_SKIP_AVR_VERIFY="1"\nexport OASIS_UNSAFE_ALLOW_DEBUG_ENCLAVES="1"\nmake\n')),(0,o.kt)("p",null,"The AVR flag is there because we are running the node in a local development\nenvironment and we will not do any attestation with Intel's remote servers. The\ndebug enclaves flag allows enclaves in debug mode to be used."),(0,o.kt)("p",null,"To run an Oasis node under SGX make sure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Your hardware has SGX support.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You either explicitly enabled SGX in BIOS or made a\n",(0,o.kt)("inlineCode",{parentName:"p"},"sgx_cap_enable_device()")," system call, if SGX is in software controlled state.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You installed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/intel/linux-sgx-driver"},"Intel's SGX driver")," (check that ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/isgx")," exists).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have the AESM daemon running. The easiest way is to just run it in a\nDocker container by doing (this will keep the container running and it will\nbe automatically started on boot):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker run \\\n  --detach \\\n  --restart always \\\n  --device /dev/isgx \\\n  --volume /var/run/aesmd:/var/run/aesmd \\\n  --name aesmd \\\n  fortanix/aesmd\n")))),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-detect")," (part of fortanix rust tools) to verify that everything is\nconfigured correctly."))}d.isMDXComponent=!0}}]);