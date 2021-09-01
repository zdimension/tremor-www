"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[759],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5640:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},c="integer",l={unversionedId:"tremor-script/stdlib/std/integer",id:"tremor-script/stdlib/std/integer",isDocsHomePage:!1,title:"integer",description:"The integer module contains functions to work with integers.",source:"@site/docs/tremor-script/stdlib/std/integer.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/integer",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/integer",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/stdlib/std/integer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"float",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/float"},next:{title:"json",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/json"}},u=[{value:"Constants",id:"constants",children:[{value:"min",id:"min",children:[]},{value:"max",id:"max",children:[]}]},{value:"Functions",id:"functions",children:[{value:"parse(string)",id:"parsestring",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integer"},"integer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")," module contains functions to work with integers."),(0,o.kt)("h2",{id:"constants"},"Constants"),(0,o.kt)("h3",{id:"min"},"min"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type"),": I64"),(0,o.kt)("p",null,"Minimum valid integer value."),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"signed::min")),(0,o.kt)("h3",{id:"max"},"max"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"type"),": I64"),(0,o.kt)("p",null,"Maximum valid integer value."),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"signed::max")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"parsestring"},"parse(string)"),(0,o.kt)("p",null,"Parses a string as an integer.\nReturns an ",(0,o.kt)("inlineCode",{parentName:"p"},"integer"),"."))}m.isMDXComponent=!0}}]);