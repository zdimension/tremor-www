"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6119],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},u="math",c={unversionedId:"tremor-script/stdlib/std/math",id:"tremor-script/stdlib/std/math",isDocsHomePage:!1,title:"math",description:"The math module contains functions for common mathematical operations.",source:"@site/docs/tremor-script/stdlib/std/math.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/math",permalink:"/docs/next/tremor-script/stdlib/std/math",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/tremor-script/stdlib/std/math.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"json",permalink:"/docs/next/tremor-script/stdlib/std/json"},next:{title:"path",permalink:"/docs/next/tremor-script/stdlib/std/path"}},m=[{value:"Functions",id:"functions",children:[{value:"floor(n)",id:"floorn",children:[]},{value:"ceil(n)",id:"ceiln",children:[]},{value:"round(n)",id:"roundn",children:[]},{value:"trunc(n)",id:"truncn",children:[]},{value:"max(n1, n2)",id:"maxn1-n2",children:[]},{value:"min(n1, n2)",id:"minn1-n2",children:[]}]}],p={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"math"},"math"),(0,o.kt)("p",null,"The math module contains functions for common mathematical operations."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"floorn"},"floor(n)"),(0,o.kt)("p",null,"Returns the smallest integer value less than or equal to n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"math::floor(42.9) == 42\n")),(0,o.kt)("p",null,"Returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")),(0,o.kt)("h3",{id:"ceiln"},"ceil(n)"),(0,o.kt)("p",null,"Returns the largest ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")," value greater than or equal to n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"math::ceil(41.1) == 42\n")),(0,o.kt)("p",null,"Returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")),(0,o.kt)("h3",{id:"roundn"},"round(n)"),(0,o.kt)("p",null,"Returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")," nearest to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"math::round(41.4) == 41\nmath::round(41.5) == 42\n")),(0,o.kt)("p",null,"Returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")),(0,o.kt)("h3",{id:"truncn"},"trunc(n)"),(0,o.kt)("p",null,"Returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")," part of ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"math::trunc(41.4) == 41\nmath::trunc(41.5) == 41\n")),(0,o.kt)("p",null,"Returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")),(0,o.kt)("h3",{id:"maxn1-n2"},"max(n1, n2)"),(0,o.kt)("p",null,"Returns the maximum of two numbers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"math::max(41, 42) == 42\n")),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," (",(0,o.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),")"),(0,o.kt)("h3",{id:"minn1-n2"},"min(n1, n2)"),(0,o.kt)("p",null,"Returns the minimum of two numbers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"math::min(41, 42) == 41\n")),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," (",(0,o.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),")"))}s.isMDXComponent=!0}}]);