"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3546],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4977:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s="Filter",p={unversionedId:"Workshop/examples/filter/README",id:"Workshop/examples/filter/README",isDocsHomePage:!1,title:"Filter",description:"The filter builds on the passthrough example and extends the example.trickle by adding a filter",source:"@site/docs/Workshop/examples/01_filter/README.md",sourceDirName:"Workshop/examples/01_filter",slug:"/Workshop/examples/filter/README",permalink:"/tremor-new-website/docs/Workshop/examples/filter/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Workshop/examples/01_filter/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Passthrough",permalink:"/tremor-new-website/docs/Workshop/examples/passthrough/README"},next:{title:"Transform",permalink:"/tremor-new-website/docs/Workshop/examples/transform/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[{value:"Discussion",id:"discussion",children:[]}]}],u={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"filter"},"Filter"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," builds on the ",(0,a.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/Workshop/examples/passthrough/README"},"passthrough example")," and extends the ",(0,a.kt)("a",{target:"_blank",href:n(1413).Z},(0,a.kt)("code",null,"example.trickle"))," by adding a filter\non the field ",(0,a.kt)("inlineCode",{parentName:"p"},"selected"),". Only if this field is set to true the event will pass."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"It connects to the pipeline ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," in the ",(0,a.kt)("a",{target:"_blank",href:n(1413).Z},(0,a.kt)("code",null,"example.trickle"))," file using the trickle query language to express the filtering logic."),(0,a.kt)("p",null,"All other configuration is the same as per the passthrough example, and is elided here for brevity."),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in where event.selected into out\n")),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("p",null,"Run a the passthrough query against a sample input.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ tremor run -i input.json etc/tremor/config/example.trickle\n{"hello": "world"}\n')),(0,a.kt)("p",null,"Deploy the solution into a docker environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker-compose up\n{"hello": "again", "selected": true}\n')),(0,a.kt)("p",null,"Inject test messages via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat")),(0,a.kt)("p",null,"!!! note\nCan be installed via ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat inputs.txt | websocat ws://localhost:4242\n...\n")),(0,a.kt)("h3",{id:"discussion"},"Discussion"),(0,a.kt)("p",null,"Filters in tremor query ( ",(0,a.kt)("inlineCode",{parentName:"p"},"trickle")," ) can be any legal predicate expression ( boolean returning\nexpression or function call ). For example:"),(0,a.kt)("h4",{id:"where-clause"},"Where clause"),(0,a.kt)("p",null,"Events are selected on the inbound event if the ",(0,a.kt)("inlineCode",{parentName:"p"},"numeric")," field on the inbound event is less than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," or greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event\nfrom in\nwhere event.numeric <= 10 or event.numeric >= 100\ninto out\n")),(0,a.kt)("h4",{id:"having-clause"},"Having clause"),(0,a.kt)("p",null,"Events are selected after processing them if the ",(0,a.kt)("inlineCode",{parentName:"p"},"selected")," field on the outbound event is true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event\nfrom in\ninto out\nhaving event.selected\n")),(0,a.kt)("h4",{id:"where-and-having-clauses"},"Where and Having clauses"),(0,a.kt)("p",null,"Events are selected on the inbound event if the ",(0,a.kt)("inlineCode",{parentName:"p"},"numeric")," field on the inbound event is less than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," or\ngreater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"100")," and after processing them, the ",(0,a.kt)("inlineCode",{parentName:"p"},"selected")," field on the outbound event is true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event\nfrom in\nwhere event.numeric <= 10 or event.numeric >= 100\ninto out\nhaving event.selected\n")),(0,a.kt)("p",null,"!!! tip\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," clause has to be located after the ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," section in a trickle select expression!     The ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," clause is evaluated on the incoming event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The `having` clause can be used to filter events, but it has to appear after the `into`     expression and will be evaluated on the resulting produced event prior to passing it on.\n\nThe `where` and `having` clauses are optional in trickle select query statements.\n")))}m.isMDXComponent=!0},1413:function(e,t,n){t.Z=n.p+"assets/files/example-7487e5aa3277ee71c5131cb4c6284089.trickle"}}]);