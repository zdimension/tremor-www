"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6971],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1269:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"index",title:"Home"},l="Tremor",m={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Home",description:"Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure.",source:"@site/docs/index.md",sourceDirName:".",slug:"/index",permalink:"/tremor-new-website/docs/index",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Home"},sidebar:"tutorialSidebar",previous:{title:"History",permalink:"/tremor-new-website/docs/history"},next:{title:"Running Docusaurus",permalink:"/tremor-new-website/docs/internal/running-docusaurus"}},c=[],p={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tremor"},"Tremor"),(0,a.kt)("p",null,"Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure."),(0,a.kt)("p",null,"Tremor has been running in production since October 2018, processes 10 terabytes of data per day, or 10 billion messages per minute and 10 million metrics per second. Tremor achieves this with 10x footprint reduction in bare metal infrastructure and cloud based deployments in 6 ( and counting ) systems at Wayfair, whilst reducing memory usage by 10x and delivering better quality of service under conditions when our network is saturated at peak eCommerce trading lifecycles."),(0,a.kt)("p",null,"Tremor reduces cost, reduces complexity and consolidates and simplifies our operational environment to\nspark SRE joy, to reduce workload on our NOC and to drop our operating costs."),(0,a.kt)("p",null,"As a secondary benefit, tremor is relatively low latency and relatively high throughput however this is\nan explicit non-goal of the project."),(0,a.kt)("p",null,"Tremor runs 24x7 365 days per year and is implemented in the Rust programming language."),(0,a.kt)("p",null,"Click for an ",(0,a.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/overview"},"Architectural overview")," or ",(0,a.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/history"},"Canned History")," of the project."),(0,a.kt)("p",null,"Other interesting topics are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/tremor-script/index"},"The tremor-script language")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"tremor-query/index.md"},"The tremor-query language")),(0,a.kt)("li",{parentName:"ul"},"Artefacts namely:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Artefacts/onramps"},"Onramps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Artefacts/offramps"},"Offramps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Artefacts/codecs"},"Codecs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Artefacts/preprocessors"},"Pre-")," and ",(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Artefacts/postprocessors"},"Postprocessors")))),(0,a.kt)("li",{parentName:"ul"},"Operational information about",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Operations/monitoring"},"Monitoring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Operations/configuration"},"Configuration")," and the ",(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Operations/configuration-walkthrough"},"Configuration Walkthrough")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Operations/cli"},"The tremor CLI")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/api"},"The tremor API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/"},"Workshop")," and various use case ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples"},"examples")),(0,a.kt)("li",{parentName:"ul"},"Development related information",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Development/benchmarking"},"Benchmarks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Development/quick-start"},"A Quickstart Guide")),(0,a.kt)("li",{parentName:"ul"},"Notes about ",(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Development/testing"},"Testing")," and ",(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Development/debugging"},"Debugging"))))),(0,a.kt)("p",null,"This is not an exhaustive list and for the curious it might be worth to explore the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs"},"docs")," folder on their own."))}u.isMDXComponent=!0}}]);