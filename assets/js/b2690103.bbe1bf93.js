"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2323],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9919:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s={unversionedId:"recipes/filter/README",id:"recipes/filter/README",isDocsHomePage:!1,title:"Filter",description:"The filter builds on the passthrough example and extends the example.trickle by adding a filter",source:"@site/docs/recipes/01_filter/README.md",sourceDirName:"recipes/01_filter",slug:"/recipes/filter/README",permalink:"/docs/recipes/filter/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/recipes/01_filter/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Passthrough",permalink:"/docs/recipes/passthrough/README"},next:{title:"Transform",permalink:"/docs/recipes/transform/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[{value:"Discussion",id:"discussion",children:[]}]}],p={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," builds on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/passthrough/README"},"passthrough example")," and extends the ",(0,i.kt)("a",{target:"_blank",href:n(32858).Z},(0,i.kt)("code",null,"example.trickle"))," by adding a filter\non the field ",(0,i.kt)("inlineCode",{parentName:"p"},"selected"),". Only if this field is set to true the event will pass."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"It connects to the pipeline ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," in the ",(0,i.kt)("a",{target:"_blank",href:n(32858).Z},(0,i.kt)("code",null,"example.trickle"))," file using the trickle query language to express the filtering logic."),(0,i.kt)("p",null,"All other configuration is the same as per the passthrough example, and is elided here for brevity."),(0,i.kt)("h2",{id:"business-logic"},"Business Logic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in where event.selected into out\n")),(0,i.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,i.kt)("p",null,"Run a the passthrough query against a sample input.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ tremor run -i input.json etc/tremor/config/example.trickle\n{"hello": "world"}\n')),(0,i.kt)("p",null,"Deploy the solution into a docker environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker-compose up\n{"hello": "again", "selected": true}\n')),(0,i.kt)("p",null,"Inject test messages via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Can be installed via ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat inputs.txt | websocat ws://localhost:4242\n...\n")),(0,i.kt)("h3",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"Filters in tremor query ( ",(0,i.kt)("inlineCode",{parentName:"p"},"trickle")," ) can be any legal predicate expression ( boolean returning\nexpression or function call ). For example:"),(0,i.kt)("h4",{id:"where-clause"},"Where clause"),(0,i.kt)("p",null,"Events are selected on the inbound event if the ",(0,i.kt)("inlineCode",{parentName:"p"},"numeric")," field on the inbound event is less than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," or greater than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},"select event\nfrom in\nwhere event.numeric <= 10 or event.numeric >= 100\ninto out\n")),(0,i.kt)("h4",{id:"having-clause"},"Having clause"),(0,i.kt)("p",null,"Events are selected after processing them if the ",(0,i.kt)("inlineCode",{parentName:"p"},"selected")," field on the outbound event is true."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},"select event\nfrom in\ninto out\nhaving event.selected\n")),(0,i.kt)("h4",{id:"where-and-having-clauses"},"Where and Having clauses"),(0,i.kt)("p",null,"Events are selected on the inbound event if the ",(0,i.kt)("inlineCode",{parentName:"p"},"numeric")," field on the inbound event is less than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," or\ngreater than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," and after processing them, the ",(0,i.kt)("inlineCode",{parentName:"p"},"selected")," field on the outbound event is true."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},"select event\nfrom in\nwhere event.numeric <= 10 or event.numeric >= 100\ninto out\nhaving event.selected\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," clause has to be located after the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," section in a trickle select expression!     The ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," clause is evaluated on the incoming event."),(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"having")," clause can be used to filter events, but it has to appear after the ",(0,i.kt)("inlineCode",{parentName:"p"},"into"),"     expression and will be evaluated on the resulting produced event prior to passing it on."),(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"having")," clauses are optional in trickle select query statements."))))}u.isMDXComponent=!0},32858:function(e,t,n){t.Z=n.p+"assets/files/example-7487e5aa3277ee71c5131cb4c6284089.trickle"}}]);