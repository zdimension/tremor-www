"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4850],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37918:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"history",title:"History",sidebar_position:800},l="History",d={unversionedId:"history",id:"history",isDocsHomePage:!1,title:"History",description:"Tremor started with a straightforward problem statement:",source:"@site/docs/history.md",sourceDirName:".",slug:"/history",permalink:"/docs/next/history",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/history.md",tags:[],version:"current",sidebarPosition:800,frontMatter:{id:"history",title:"History",sidebar_position:800},sidebar:"docsSidebar",previous:{title:"Trickle Walkthough",permalink:"/docs/next/tremor-query/walkthrough"},next:{title:"Glossary",permalink:"/docs/next/Glossary"}},p=[{value:"tremor-0.9",id:"tremor-09",children:[]},{value:"tremor-0.8 (develop)",id:"tremor-08-develop",children:[]},{value:"tremor-0.7 (develop)",id:"tremor-07-develop",children:[]},{value:"tremor-0.6 (develop)",id:"tremor-06-develop",children:[]},{value:"tremor-0.5.3 (stable)",id:"tremor-053-stable",children:[]},{value:"tremor-0.5.2 (stable)",id:"tremor-052-stable",children:[]},{value:"tremor-0.5.1 (stable)",id:"tremor-051-stable",children:[]},{value:"tremor-0.5 (stable)",id:"tremor-05-stable",children:[]},{value:"tremor-0.4 (stable)",id:"tremor-04-stable",children:[]},{value:"tremor-0.3 (develop)",id:"tremor-03-develop",children:[]},{value:"tremor-0.2 (stable)",id:"tremor-02-stable",children:[]},{value:"kopy",id:"kopy",children:[]}],c={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"history"},"History"),(0,a.kt)("p",null,"Tremor started with a straightforward problem statement:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"During peak events logs and metrics going to Elastic Search and InfluxDB back up in Kafka queues removing visibility from the system.")),(0,a.kt)("h2",{id:"tremor-09"},"tremor-0.9"),(0,a.kt)("p",null,"The 0.9 release unifies the various CLI tools into a singular ",(0,a.kt)("inlineCode",{parentName:"p"},"tremor")," binary that is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tremor-cli")," folder."),(0,a.kt)("p",null,"In addition we introduce the underpinning for both guaranteed delivery and circuit breakers. On this foundation it adds support for linked transports which allows to use tremor in proxy like scenarios."),(0,a.kt)("h2",{id:"tremor-08-develop"},"tremor-0.8 (develop)"),(0,a.kt)("p",null,"In this release, the embedded script and query languages have been extended with\nsupport for modular development. Tremor scripts and queries can now be organised\ninto nested module namespaces."),(0,a.kt)("p",null,"In tremor-script - functions, constants and modules can be reused and organized into modules."),(0,a.kt)("p",null,"In tremor-query - window, operator and script definitions can be reused into modules."),(0,a.kt)("p",null,"Tremor-script has been extended to support fixed arity functions, with optional variable arguments.\nThis form of function can be used for a constrained form of tail-recursion. Match functions allow\npattern matching and support partial functions. Intrinsic functions wrap builtin functions."),(0,a.kt)("p",null,"Tremor-script's pattern matching syntax has been extended with tuple-based positional matching."),(0,a.kt)("p",null,"A new ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," allows modules to be referenced from the file system. Tremor preprocesses\nsource and computes a singular preprocessed query or script source."),(0,a.kt)("p",null,"This release was primarily focused on enabling teams to modularise, reuse and support more complex\nscripts and queries as the complexity and size of user defined logic deployed into tremor continues\nto grow."),(0,a.kt)("h2",{id:"tremor-07-develop"},"tremor-0.7 (develop)"),(0,a.kt)("p",null,"First open source release of tremor."),(0,a.kt)("h2",{id:"tremor-06-develop"},"tremor-0.6 (develop)"),(0,a.kt)("p",null,"In this release the event by event scripting language is used as the basis for a structured query language\nthat supports time-series windowing, aggregate functions and expressive composition grouping functions via\nselect statements. The language supercedes the now deprecated pipeline YAML format whilst providing a\nbackwards compatible runtime that can leverage existing pipeline operators, allows branching and combining\nstreams to form a graph, and specifying and overriding default operator port assignments."),(0,a.kt)("p",null,"The release includes basic statistics (min, max, count, mean, stdev, var) and quartile/percentile estimation\nvia the high dynamic range (HDR) and DDS (distributed data sketch) based algorithms."),(0,a.kt)("p",null,"The SQL language, trickle, supports aggregate of aggregate summary statistics without error amplification\nthrough a tilt-frame mechanism combined with merge-capable aggregate functions and opens up use cases for\ntremor to aggregate/summary processing for metrics, alerting, prediction/forecasting and anomaly/outlier\ndetection."),(0,a.kt)("p",null,"Small enhancements to the scripting language include string interpolation, bitwise and shift binary\nexpressions. A cron-based onramp for scheduled/periodic one-shot or repeated events has been added."),(0,a.kt)("h2",{id:"tremor-053-stable"},"tremor-0.5.3 (stable)"),(0,a.kt)("p",null,"In this release the focus was set on the ingest layer for Logstash and Telegraf. By adding support for UDP as well as reassembling GELF chunks we can replace both Telegraf, Logstash as well as the home grown GELF proxy that currently needs to be deployed alongside of Logstash."),(0,a.kt)("p",null,"Part of the work was to introduce pre-processors that allow to handle binary manipulation on incoming messages without the codec needing to be aware of them. Examples would be decompression, base64 encoding, splitting multi line messages or assembling GELF chunks."),(0,a.kt)("p",null,"While the involved code in this release is small the operational win that comes with a now unified logging and metrics pipeline is significant."),(0,a.kt)("h2",{id:"tremor-052-stable"},"tremor-0.5.2 (stable)"),(0,a.kt)("p",null,"tremor-0.5.2 resolved the degenerate case we detected in the 0.5.0 release and put tremor way ahead of Logstash in all our benchmarks."),(0,a.kt)("p",null,"The performance work resulted in finding a lack of functionality in the last release, it was not possible to delete a field from a record from a key stored in a variable - this was resolved as well changing the syntax of the ",(0,a.kt)("inlineCode",{parentName:"p"},"patch")," statement to require escaping of keys."),(0,a.kt)("p",null,"In addition this patch included small improvements in documentation to improve operator experience when first using tremor."),(0,a.kt)("h2",{id:"tremor-051-stable"},"tremor-0.5.1 (stable)"),(0,a.kt)("p",null,"With this release we are experimenting with a shorter release cycle. While both 0.4 and 0.5 introduced major changes they lay a stable foundation that makes it easier to ship small features and wins to our users much more frequently."),(0,a.kt)("p",null,"In this release in particular we introduce some quality of life improvements on extractors by improving error reporting on bad patterns and moving it to compile time with the same good errors we provide for language level errors."),(0,a.kt)("p",null,"Along with that we fixed a bug on the influx line protocol renderer that caused integers to be re-rendered as floats and multi field items to be rendered in-correctly."),(0,a.kt)("p",null,"We introduced the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/stdlib/tremor/chash"},(0,a.kt)("inlineCode",{parentName:"a"},"chash")," module")," that currently houses an implementation of Google's ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1406.2294"},"jump consistent hashing"),". This enables partitioning a data flow uniformly over multiple outputs with minimal cost and no need for synchronisation."),(0,a.kt)("h2",{id:"tremor-05-stable"},"tremor-0.5 (stable)"),(0,a.kt)("p",null,"Version 0.5 we introduced a completely overhauled scripting language. We moved from a rule to action based system to something that can best be described as a ETL focused language now with powerful constructs such as ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/index#match"},(0,a.kt)("inlineCode",{parentName:"a"},"match")," statements")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"record-")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"array patterns")," and an extensive ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/functions"},"function library"),"."),(0,a.kt)("p",null,"It introduces the concept of ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/extractors"},"extractors"),", part of tremor script they allow matching against complex patterns and extracting information from them. This work covers common things like regular expressions or globs, as well as grok and dissect patterns. But also allows decoding embedded influx, json, or even base64 data without much extra work."),(0,a.kt)("p",null,"As always this release introduces some optimisations, since JSON is the main encoding used for data we introduced ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/index#performant"},"SIMD optimized")," decoding of this data base on ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1902.08318"},"Geoff Langdales, and Daniel Lemires work")," into this area."),(0,a.kt)("h2",{id:"tremor-04-stable"},"tremor-0.4 (stable)"),(0,a.kt)("p",null,"This release combined the lessons from the 0.3 and 0.2 looking at what worked in one and the other. The 0.4 release kept the dynamic pipelines but implemented them in a way closer to how they were implemented in 0.2 retaining the performance this way."),(0,a.kt)("p",null,"Also, ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/overview#contraflow"},"contraflow")," introduced in 0.3 was extended with ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/overview#signalflow"},"signals")," to allow non-event carrying messages to move through the pipeline for operational purposes such periodic ticks."),(0,a.kt)("p",null,"The matching language of the earlier releases got a complete overhaul becoming a more powerful scripting language - ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/index"},"tremor-script"),". Tremor script introduced features such as event metadata variables to drive operator behavior outside of the script itself, mutation of event values, support for functions, along with a return statement that allows early returns from a script to save run time."),(0,a.kt)("p",null,"The basic idea of a ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," file as configuration was carried over from 0.3 but the content dramatically altered to be more usable. Along with the new syntax also the ability to run multiple pipelines, onramps and offramp in the same tremor instance were introduced."),(0,a.kt)("p",null,"With the new config tremor, 0.4 also introduced an API that allows adding, remove and alter the components running in an instance without requiring a restart. This feature came with the addition of ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/operations/cli"},"tremor-cli")," to expose this API to operators without requiring to remember the interface details."),(0,a.kt)("h2",{id:"tremor-03-develop"},"tremor-0.3 (develop)"),(0,a.kt)("p",null,"The limitations of static steps imposed run 0.2 were a real limitation. With the 0.3 release tremor got the capability to run arbitrarily complex pipelines of interconnected nodes, along with an improved set of features in the matching language."),(0,a.kt)("p",null,"Along with that, it introduced the ability to bridge asynchronous and synchronous inputs and outputs allowing for new combinations of on- and Off-Ramps."),(0,a.kt)("p",null,"The most notable addition to the 0.3 version of tremor, however, was ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/overview#contraflow"},"contraflow"),", a system that allowed us for downstream nodes to traverse the graph in reverse order to communicate back metrics and statistics. This allowed generalising the concept of back pressure from 0.2 and applying it in different places of the pipeline."),(0,a.kt)("p",null,"With the dynamic pipelines, the configuration also went away from arguments passed to the command line to a ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," file that carried the specification of the pipeline which made it easier for an operator to maintain the pipeline."),(0,a.kt)("p",null,"Those additions and the exploratory nature of the 0.3 released reduced performance by approximately the factor of 2 in this release."),(0,a.kt)("h2",{id:"tremor-02-stable"},"tremor-0.2 (stable)"),(0,a.kt)("p",null,"With kopy as the basis, the next step was what best could be described as an MVP. A bare minimum implementation that was good enough to serve the immediate need and form the foundation for going forward."),(0,a.kt)("p",null,"The 0.2 release of tremor consisted of a set of static steps that were configured over command line arguments. It handled reading data from Kafka, writing data to Elastic Search and InfluxDB. It included a simplistic classification engine that allowed limiting events based on an assigned class. Also, last but not least a method for handling downstream system overload and back-pressure by applying an incremental backoff strategy."),(0,a.kt)("p",null,"It solved the problem initially presented - during the next peak event there was no lag invisibility into metrics or logs. And not only did it work it also reduced the computer footprint of the system it replaced by 80%."),(0,a.kt)("h2",{id:"kopy"},"kopy"),(0,a.kt)("p",null,"From this tremor started to build. Its root was a tool called ",(0,a.kt)("inlineCode",{parentName:"p"},"kopy")," (short for ",(0,a.kt)("inlineCode",{parentName:"p"},"k(afka-c)opy")," ) that, given a Kafka queue to copy from and one to copy to, would replicate the data from one to the other."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kopy")," itself was far from sophisticated, but it was good enough to verify the idea of building a tool to solve the problem mentioned above in rust. It served us through the first iteration as the tool we used to collect test data and move it into private queues for replaying."))}m.isMDXComponent=!0}}]);