"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[8664],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={},r="Setup",s={unversionedId:"general/manage-tokens/advanced/oasis-cli-tools/setup",id:"general/manage-tokens/advanced/oasis-cli-tools/setup",title:"Setup",description:"Make sure you have installed everything described in the Prerequisites section.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/setup.md",sourceDirName:"general/manage-tokens/advanced/oasis-cli-tools",slug:"/general/manage-tokens/advanced/oasis-cli-tools/setup",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/setup",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/setup.md",tags:[],version:"current",lastUpdatedAt:1669977086,formattedLastUpdatedAt:"Dec 2, 2022",frontMatter:{},sidebar:"general",previous:{title:"Prerequisites",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},next:{title:"Common Staking Info",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/common-staking-info"}},l={},p=[{value:"Server commands",id:"server-commands",level:2},{value:"Local commands",id:"local-commands",level:2},{value:"JSON pretty-printing",id:"json-pretty-printing",level:2},{value:"Common CLI Flags",id:"common-cli-flags",level:2},{value:"Base Flags",id:"base-flags",level:3},{value:"Signer Flags",id:"signer-flags",level:3},{value:"Storing Base and Signer flags in an Environment Variable",id:"storing-base-and-signer-flags-in-an-environment-variable",level:3},{value:"Common Transaction Flags",id:"common-transaction-flags",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Make sure you have installed everything described in the ",(0,i.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},"Prerequisites")," section."),(0,i.kt)("h2",{id:"server-commands"},"Server commands"),(0,i.kt)("p",null,"To run a command that requires a connection to an online Oasis node (i.e. the ",(0,i.kt)("inlineCode",{parentName:"p"},"server"),"), you need to either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"change the working directory to where the internal Oasis node UNIX socket is located (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/serverdir/node/"),") before executing the command, or"),(0,i.kt)("li",{parentName:"ul"},"pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"-a $ADDR")," flag where ",(0,i.kt)("inlineCode",{parentName:"li"},"ADDR")," represents the path to the internal Oasis node UNIX socket prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"unix:")," (e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"unix:/serverdir/node/internal.sock"),").")),(0,i.kt)("p",null,"Here are some examples of Oasis Node CLI commands that need a connection to an online Oasis node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node stake info"),": Shows general staking information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node stake list"),": Lists all accounts with positive balance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node stake account info"),": Shows detailed information for an account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node consensus submit_tx"),": Submits a pre-generated transaction to the network.")),(0,i.kt)("h2",{id:"local-commands"},"Local commands"),(0,i.kt)("p",null,"The following commands are intended to be run on your local machine and only need access to the ",(0,i.kt)("a",{parentName:"p",href:"/node/mainnet/"},"network's current genesis file")," and your signer's private key:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node stake account gen_transfer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node stake account gen_escrow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node stake account gen_reclaim_escrow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node stake account gen_amend_commission_schedule"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"We strongly suggest that you do not use any entity/staking account that is generated with the file-based signer on the Mainnet."),(0,i.kt)("p",{parentName:"admonition"},"In case you need to use the file-based signer, make sure you only use it on an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Air_gap_(networking)"},"offline/air-gapped machine"),". Gaining access to your entity's/staking account's private key can compromise your tokens.")),(0,i.kt)("h2",{id:"json-pretty-printing"},"JSON pretty-printing"),(0,i.kt)("p",null,"We will pipe the output of commands that return JSON through ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/json.html#module-json.tool"},"Python's ",(0,i.kt)("inlineCode",{parentName:"a"},"json.tool")," module")," to pretty-print it."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Be aware that ",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"),", the popular JSON CLI tool, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stedolan/jq/wiki/FAQ#caveats"},"converts all numbers to IEEE 754 64-bit values")," which can result in silent loss of precision and/or other changes."),(0,i.kt)("p",{parentName:"admonition"},"Hence, we recommend avoiding its usage until this issue is resolved.")),(0,i.kt)("h2",{id:"common-cli-flags"},"Common CLI Flags"),(0,i.kt)("h3",{id:"base-flags"},"Base Flags"),(0,i.kt)("p",null,"All commands for generating and signing transactions need the following base flags set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--genesis.file"),": Path to the genesis file, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/localhostdir/genesis.json"),".")),(0,i.kt)("p",null,"For convenience, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"GENESIS_FILE")," environment value to its value, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  GENESIS_FILE=/localhostdir/genesis.json\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--signer.dir"),": Path to entity's artifacts directory, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"entity-$LEDGER_INDEX")),(0,i.kt)("p",{parentName:"li"},"or ",(0,i.kt)("inlineCode",{parentName:"p"},"/localhostdir/entity/")))),(0,i.kt)("h3",{id:"signer-flags"},"Signer Flags"),(0,i.kt)("p",null,"Currently, we provide two options for signing transactions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ledger-based signer.")),(0,i.kt)("p",{parentName:"li"},"You will need to set it up as described in our ",(0,i.kt)("a",{parentName:"p",href:"/oasis-core-ledger/usage/transactions"},"Oasis Core Ledger")," docs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"File-based signer.")),(0,i.kt)("p",{parentName:"li"},"You will need to create your Entity as described in ",(0,i.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/#creating-your-entity"},"Running a Node on the Network")," docs and set the following flags:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--signer.backend file"),": Specifies use of the file signer.")))),(0,i.kt)("h3",{id:"storing-base-and-signer-flags-in-an-environment-variable"},"Storing Base and Signer flags in an Environment Variable"),(0,i.kt)("p",null,"To make the transaction commands shorter and avoid typing errors, one can create an environment variable, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"TX_FLAGS"),", with all the ",(0,i.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup#base-flags"},"Base Flags")," and ",(0,i.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup#signer-flags"},"Signer Flags")," configured for his particular set up."),(0,i.kt)("p",null,"For example, one could set ",(0,i.kt)("inlineCode",{parentName:"p"},"TX_FLAGS")," for a Ledger device like below (make sure all ",(0,i.kt)("inlineCode",{parentName:"p"},"LEDGER_*")," environment variables are set appropriately):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'TX_FLAGS=(--genesis.file "$GENESIS_FILE"\n  --signer.dir /localhostdir/entity\n  --signer.backend plugin\n  --signer.plugin.name ledger\n  --signer.plugin.path "$LEDGER_SIGNER_PATH"\n)\n')),(0,i.kt)("p",null,"Or, one could set ",(0,i.kt)("inlineCode",{parentName:"p"},"TX_FLAGS")," like below to use a file signer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'TX_FLAGS=(--genesis.file "$GENESIS_FILE"\n  --signer.backend file\n  --signer.dir /localhostdir/entity/\n)\n')),(0,i.kt)("h3",{id:"common-transaction-flags"},"Common Transaction Flags"),(0,i.kt)("p",null,"When generating a transaction, one needs to set the following transaction flags as appropriate for a given transaction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--stake.amount"),": Amount of base units to transfer, escrow, burn, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--transaction.file"),": Path to the file where to store the generated transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--transaction.nonce"),": Incremental number that must be unique for each account's transaction. To\nget your current account's nonce, see ",(0,i.kt)("a",{parentName:"li",href:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-nonce"},"Checking Your Account nonce")," doc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--transaction.fee.gas"),": Maximum amount of gas (in ",(0,i.kt)("em",{parentName:"li"},"gas units"),") a transaction can spend.")),(0,i.kt)("p",null,"Gas costs for different staking transactions are specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"staking.params.gas_costs")," consensus parameter."),(0,i.kt)("p",null,"To obtain its value from the genesis file, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  cat $GENESIS_FILE | \\\n    python3 -c \'import sys, json; \\\n    print(json.dumps(json.load(sys.stdin)["staking"]["params"]["gas_costs"], indent=4))\'\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--transaction.fee.amount"),": Amount of base units we will pay as a fee for a transaction.")),(0,i.kt)("p",null,"Note that specifying a transaction's fee amount (via ",(0,i.kt)("inlineCode",{parentName:"p"},"--transaction.fee.amount"),") and maximum gas amount (via ",(0,i.kt)("inlineCode",{parentName:"p"},"--transaction.fee.gas"),") implicitly defines the ",(0,i.kt)("em",{parentName:"p"},"gas price")," (in base units):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gas_price = fee_amount / gas_amount\n")),(0,i.kt)("p",null,"Gas price tells how much base units we are willing to pay for one gas unit."),(0,i.kt)("p",null,"Consensus validators can configure their own ",(0,i.kt)("em",{parentName:"p"},"minimum gas price")," (via ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus.tendermint.min_gas_price")," configuration flag) and will refuse to process transactions that have their gas price set below their minimum gas price."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently, there is no mechanism to discover what minimum gas prices are used by validators."),(0,i.kt)("p",{parentName:"admonition"},"For more details, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/issues/2526"},"Oasis Core #2526"),".")))}m.isMDXComponent=!0}}]);