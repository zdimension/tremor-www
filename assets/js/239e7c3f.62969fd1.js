"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4844],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1162:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={id:"postprocessors",title:"Postprocessors"},p="Postprocessors",c={unversionedId:"Artefacts/postprocessors",id:"Artefacts/postprocessors",isDocsHomePage:!1,title:"Postprocessors",description:"Postprocessors operate on the raw data stream and transform it. They are run after data reaches the codec and do not know or care about tremor's internal representation.",source:"@site/docs/Artefacts/postprocessors.md",sourceDirName:"Artefacts",slug:"/Artefacts/postprocessors",permalink:"/tremor-new-website/docs/Artefacts/postprocessors",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Artefacts/postprocessors.md",tags:[],version:"current",frontMatter:{id:"postprocessors",title:"Postprocessors"},sidebar:"tutorialSidebar",previous:{title:"Onramps",permalink:"/tremor-new-website/docs/Artefacts/onramps"},next:{title:"Preprocessors",permalink:"/tremor-new-website/docs/Artefacts/preprocessors"}},l=[{value:"Supported Postprocessors",id:"supported-postprocessors",children:[{value:"lines",id:"lines",children:[]},{value:"base64",id:"base64",children:[]},{value:"length-prefixed",id:"length-prefixed",children:[]},{value:"gelf-chunking",id:"gelf-chunking",children:[]},{value:"compression",id:"compression",children:[]},{value:"textual-length-prefix",id:"textual-length-prefix",children:[]}]}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"postprocessors"},"Postprocessors"),(0,s.kt)("p",null,"Postprocessors operate on the raw data stream and transform it. They are run after data reaches the codec and do not know or care about tremor's internal representation."),(0,s.kt)("p",null,"Online codecs and postprocessors can be chained to perform multiple operations in succession."),(0,s.kt)("h2",{id:"supported-postprocessors"},"Supported Postprocessors"),(0,s.kt)("h3",{id:"lines"},"lines"),(0,s.kt)("p",null,"Delimits the output (events) into lines (by '\\n')."),(0,s.kt)("h3",{id:"base64"},"base64"),(0,s.kt)("p",null,"Encodes raw data into base64 encoded bytes."),(0,s.kt)("h3",{id:"length-prefixed"},"length-prefixed"),(0,s.kt)("p",null,"Prefixes the data with a network byte order (big endian) length of the data in bytes."),(0,s.kt)("h3",{id:"gelf-chunking"},"gelf-chunking"),(0,s.kt)("p",null,"Splits the data using ",(0,s.kt)("a",{parentName:"p",href:"https://docs.graylog.org/en/3.0/pages/gelf.html#chunking"},"GELF chunking protocol"),"."),(0,s.kt)("h3",{id:"compression"},"compression"),(0,s.kt)("p",null,"Compresses event data."),(0,s.kt)("p",null,"Unlike decompression processors, the compression algorithm must be selected. The following compression post-processors are supported. Each format can be configured as a postprocessor."),(0,s.kt)("p",null,"Supported formats:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"gzip - GZip compression"),(0,s.kt)("li",{parentName:"ul"},"zlib - ZLib compression"),(0,s.kt)("li",{parentName:"ul"},"xz - Xz2 level 9 compression"),(0,s.kt)("li",{parentName:"ul"},"snappy - Snappy compression"),(0,s.kt)("li",{parentName:"ul"},"lz4 - Lz level 4 compression")),(0,s.kt)("h3",{id:"textual-length-prefix"},"textual-length-prefix"),(0,s.kt)("p",null,"Prefixes the data with the length of data given in ascii digits and a whitespace as used in ",(0,s.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5425#section-4.3"},"RFC 5425")," for TLS/TCP transport for syslog."))}d.isMDXComponent=!0}}]);