"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7336],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63850:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"FAQs",description:"Q&A.",hide_table_of_contents:!1,draft:!1},l={type:"mdx",permalink:"/faqs",source:"@site/src/pages/faqs.md"},u=[{value:"What is Tremor?",id:"what-is-tremor",children:[]},{value:"When not to use Tremor?",id:"when-not-to-use-tremor",children:[]},{value:"What is the current state of the project?",id:"what-is-the-current-state-of-the-project",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-tremor"},"What is Tremor?"),(0,a.kt)("p",null,"Tremor is an event processing engine designed for high-density deployment in\nmission-critical 24x7x365 environments."),(0,a.kt)("p",null,"It started life as a man-in-the-middle proxy retrofitting near real-time\ntraffic shaping to all logging and metrics capture, distribution and processing\nsystems at Wayfair."),(0,a.kt)("p",null,"The initial release of Tremor supported proactive rate limiting, classification\nof data streams based on rules, and reactive backpressure handling processing in excess of 10TB per day of nested structured data."),(0,a.kt)("p",null,"Tremor has been extended to support rich extract, transform, load and filtering of data streams with a scripting language designed for expressive ETL on JSON-like data structures with SIMD-accelerated JSON processing."),(0,a.kt)("p",null,"Tremor has been extended to support aggregate query processing and quartile estimation of metrics data with a query language that builds on the scripting language."),(0,a.kt)("p",null,"Tremor is currently being extended with clustering support based on the RAFT protocol specification, ring-based topologies and V-Nodes inspired by riak-core from Basho Technologies."),(0,a.kt)("p",null,"Tremor is also a system of plugins, or a framework. Although it is in production for only 50+ production use cases, it is designed to be extended, bent or stretched to other purposes."),(0,a.kt)("h2",{id:"when-not-to-use-tremor"},"When not to use Tremor?"),(0,a.kt)("p",null,"Tremor displaces, disintermediates or replaces a number of commercial and open-source data processing and distribution solutions deployed at scale within Wayfair."),(0,a.kt)("p",null,"In Wayfair's case the benefits are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A single robust runtime solution with high UX for devops and SRE professionals working in a 24x7x365 environment."),(0,a.kt)("li",{parentName:"ul"},"A scripting and query language with good tooling for debugging and troubleshooting fungible, frequently changing business logic."),(0,a.kt)("li",{parentName:"ul"},"Powerful ETL abstraction and scripting language for slicing, dicing, pattern matching and transforming JSON-like data, with a fast JSON processor."),(0,a.kt)("li",{parentName:"ul"},"A event processing language that supports aggregate functions suitable for many metrics and summary statistics computations."),(0,a.kt)("li",{parentName:"ul"},"A growing but incomplete set of pluggable functions, operators, aggregate functions, and connectors to other systems and protocols.")),(0,a.kt)("p",null,"But, tremor was built with some assumptions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Experienced SRE, security, infrastructure and devops folk are available to configure, operate and maximise leverage from Tremor."),(0,a.kt)("li",{parentName:"ul"},"Tremor is not a commercial product, and as such, it has a roadmap that reflects production needs of an eCommerce environment.")),(0,a.kt)("p",null,"And, the needs that drove us to build Tremor may not match your needs, if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are a small team with 'full stack' developers.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Tremor was designed and built in an environment with an ecosystem of collaborating teams, each with specialisms."))),(0,a.kt)("li",{parentName:"ul"},"There are ",(0,a.kt)("inlineCode",{parentName:"li"},"missing")," connectors, functions or other plugins that are important for your use case.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Please raise an issue, or open an RFC."))),(0,a.kt)("li",{parentName:"ul"},"You are already using proprietary, open-source or commercial products that are ",(0,a.kt)("strong",{parentName:"li"},"good enough")," for your purposes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We recommend following the YAGNI (You ain't gonna need it) principle."))),(0,a.kt)("li",{parentName:"ul"},"You see similarity between Tremor and other projects or products.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Tremor borrows from multiple domains and disciplines. Tremor has a query language that supports SQL-like queries and aggregate functions.\nThis is similar to a CEP (Complex Event Processing) or ESP (Event Stream Processing) engine. It is very likely if you are already using such tools that they are more complete than Tremor today. For example, we do not support event correlation via combinators or temporal pattern matching logic at this time.")))),(0,a.kt)("p",null,"If these concerns do not dissuade you, then we would welcome your contributions via our issues list, community chat, via our twitter channel or via contributing and joining our community."),(0,a.kt)("h2",{id:"what-is-the-current-state-of-the-project"},"What is the current state of the project?"),(0,a.kt)("p",null,"Tremor is an early-stage project that is still under active development. It has been in production at scale at Wayfair since October 2018. Tremor has been open-source since February 22, 2020."),(0,a.kt)("p",null,"Tremor is transitioning from closed to fully open community based development."))}p.isMDXComponent=!0}}]);