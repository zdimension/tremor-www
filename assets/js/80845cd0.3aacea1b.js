"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2953],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),h=o,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4744:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return h}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={title:"To async or Not to async",author:"The Tremor Team",author_image_url:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4",tags:["dev","rust"],draft:!1,image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fraw.githubusercontent.com%2Fwill-wow%2Fresult-async%2FHEAD%2Fassets%2Fimages%2Flogo.png&imgrefurl=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fresult-async&tbnid=YNViaemYW6WxgM&vet=10CA0QxiAoBWoXChMI-Pibqsup8gIVAAAAAB0AAAAAEAw..i&docid=avW8MHRaIq6BMM&w=1000&h=1000&itg=1&q=to%20async%20or%20not%20to%20async&client=firefox-b-d&ved=0CA0QxiAoBWoXChMI-Pibqsup8gIVAAAAAB0AAAAAEAw",hide_table_of_contents:!1,description:"Moving from threads to async tasks."},c=void 0,l={permalink:"/tremor-new-website/blog/2020/08/06/to-async-or-not-to-async",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/blog/2020-08-06-to-async-or-not-to-async.md",source:"@site/blog/2020-08-06-to-async-or-not-to-async.md",title:"To async or Not to async",description:"Moving from threads to async tasks.",date:"2020-08-06T00:00:00.000Z",formattedDate:"August 6, 2020",tags:[{label:"dev",permalink:"/tremor-new-website/blog/tags/dev"},{label:"rust",permalink:"/tremor-new-website/blog/tags/rust"}],readingTime:5.525,truncated:!0,authors:[{name:"The Tremor Team",imageURL:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4"}],prevItem:{title:"Releasing Tremor v0.9!",permalink:"/tremor-new-website/blog/2020/10/16/v09-release"},nextItem:{title:"Rust & Tell Berlin- March 2020",permalink:"/tremor-new-website/blog/2020/03/31/rust-and-tell"}},u={authorsImageUrls:[void 0]},p=[{value:"The Tremor That Was (threads)",id:"the-tremor-that-was-threads",children:[]}],m={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the upcoming Tremor release, 0.9.0, we're moving from threads as a basis for ramps and pipelines to async tasks."),(0,a.kt)("p",null,"Let's talk about why this is significant, what is changing, and how the architecture is changing."),(0,a.kt)("p",null,"Note that this is not a comprehensive treatise on threads or async tasks."),(0,a.kt)("h2",{id:"the-tremor-that-was-threads"},"The Tremor That Was (threads)"),(0,a.kt)("p",null,"Threads are a basic building block of programs that execute multiple pieces of code concurrently.\nThe operating system is responsible for coordinating across competing resource demands."),(0,a.kt)("p",null,"The OS can preempt, pause, and resume threads. We can leverage infinite or tight loops without the risk of completely blocking execution. These guarantees make concurrent code more accessible, with tools like",(0,a.kt)("inlineCode",{parentName:"p"},"crossbeam-channels")," to build upon."),(0,a.kt)("p",null,"Threads work especially well in use cases where the system and logical concurrency models are well aligned; or, we can easily map application threads to logical cores on the system being used. Each thread can happily work away on its part of the logic and pass the result on to the next. The one thread per core model is what tremor 0.8 and earlier used. We had a thread for the onramp, a thread for the pipeline, and a thread for the offramp. As the computational cost of decoding, processing, and encoding was often in the same ballpark, this worked exceptionally well. We managed to push up to 400MB/s of JSON through the system this way (including parsing, tremor-script logic, and serialization)."),(0,a.kt)("p",null,"This design can degenerate badly if there are more ramps and pipelines than cores on the system in use. Throughput degrades rapidly (as in up to 2 orders of magnitude worse at 30:1 ratio). At the time of writing this, the deployment model was one pipeline/ramp group on a four-core system, so it worked well in practice."),(0,a.kt)("p",null,"However, this places a burden on operators having to think about concurrency and parallelism to tune tremor for optimal performance and capacity."),(0,a.kt)("p",null,"In SMP systems, we observe other undesireable effects: The moment two communicating threads don't share the same underlying cache, performance plummets. This scenario exists when threads reside on two different CPUs or CCXs (",(0,a.kt)("a",{parentName:"p",href:"https://blog.licenser.net/2020/01/multithreaded-rust-on-threadripper/"},"thank you AMD for making me learn so much about CPU caches"),"). As long as two communicating threads share the same cache, data shared between them can avoid trips to main memory and cache coherency protocol overheads. When two threads communicate across different caches, reads/writes may catastrophically collide and introduce overheads that drastically reduce overall performance."))}h.isMDXComponent=!0}}]);