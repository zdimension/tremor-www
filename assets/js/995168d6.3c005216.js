"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1739],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},20331:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],l={},s={type:"mdx",permalink:"/rfcs/0004-sliding-window-mechanism",source:"@site/src/pages/rfcs/0004-sliding-window-mechanism.md"},c=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Guide-level Explanation",id:"guide-level-explanation",children:[]},{value:"Reference-level Explanation",id:"reference-level-explanation",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Rationale and Alternatives",id:"rationale-and-alternatives",children:[]},{value:"Prior Art",id:"prior-art",children:[]},{value:"Unresolved Questions",id:"unresolved-questions",children:[]},{value:"Future Possibilities",id:"future-possibilities",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Feature Name: rfc_0004_sliding_window_mechanism"),(0,a.kt)("li",{parentName:"ul"},"Start Date: 2020-01-27"),(0,a.kt)("li",{parentName:"ul"},"Issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/issues/7"},"tremor-rs/tremor-rfcs#0007")),(0,a.kt)("li",{parentName:"ul"},"RFC PR: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/pull/8"},"tremor-rs/tremor-rfcs#0008"))),(0,a.kt)("h1",{id:"sliding-window-mechanism"},"Sliding Window Mechanism"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The tremor-query language currently supports temporal window processing based on a provided system (wall) clock or data-driven intervals. Currently, however, the only supported windowing style in ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," statements are tumbling."),(0,a.kt)("p",null,"There is no mechanism for tumbling windows where there may be multiple simultaneous (overlapping) windows. The sliding window mechanism corrects this."),(0,a.kt)("p",null,"This RFC addresses these limitations by introducing a ",(0,a.kt)("inlineCode",{parentName:"p"},"sliding window")," mechamism\nthat can be configured with a number of steps."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The tremor-query language cannot currently define windowing mechanics such as pair-wise comparisons or sliding data-driven windows that captures 'the last seconds worth' of data that update on an event by event basis."),(0,a.kt)("p",null,"Sliding windows occur frequently in event processing algorithms and their addition to tremor-query is a natural extension to the language."),(0,a.kt)("h2",{id:"guide-level-explanation"},"Guide-level Explanation"),(0,a.kt)("p",null,"Definition of a sliding window of step size 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"define sliding window pairs\nwith\n  size = 2,\nend;\n")),(0,a.kt)("p",null,"Application of  the ",(0,a.kt)("inlineCode",{parentName:"p"},"pairs")," window in a ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'select {\n  "window": window,\n  "count": stats::count(),\n  "of": win::collect(event),\n}\nfrom in[pairs]\ninto out;\n')),(0,a.kt)("p",null,"Sliding windows should work with tilt frames:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'select {\n  "window": window,\n  "count": stats::count(),\n  "of": win::collect(event),\n}\nfrom in[sliding_pairs, tumbling_pairs, tumbling_triples, sliding_quads]\ninto out;\n')),(0,a.kt)("p",null,"An interval-based sliding window of duration 1 second:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"define sliding window last_second\nwith\n  interval = datetime::with_seconds(1),\nend;\n")),(0,a.kt)("p",null,"The addition of a sliding window mechanism is a fairly cosmetic language change, but a fairly significant change to runtime facililities in window processing semantics and mechanics, grouping mechanism, tilt framing and may involve other enhancements or changes in order to manage memory pressure optimally."),(0,a.kt)("p",null,"This RFC does not concern itself with implementation specifics."),(0,a.kt)("h2",{id:"reference-level-explanation"},"Reference-level Explanation"),(0,a.kt)("p",null,"None."),(0,a.kt)("h2",{id:"drawbacks"},"Drawbacks"),(0,a.kt)("p",null,"Sliding window mechanism uses relatively more memory when compared with tumbling windows, and this should feature in documentation and examples."),(0,a.kt)("h2",{id:"rationale-and-alternatives"},"Rationale and Alternatives"),(0,a.kt)("p",null,"As described in the ",(0,a.kt)("a",{parentName:"p",href:"#summary"},"summary"),"."),(0,a.kt)("h2",{id:"prior-art"},"Prior Art"),(0,a.kt)("p",null,"Sliding windows are a ",(0,a.kt)("a",{parentName:"p",href:"https://www.researchgate.net/figure/Sliding-Window-in-CEP_fig2_283199451"},"common")," feature in CEP/ESP and aggregation systems."),(0,a.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,a.kt)("p",null,"This RFC does not specify internals or implementation, which is left to the implementor. The motiviating example should be sufficient to drive a suitable implementation."),(0,a.kt)("h2",{id:"future-possibilities"},"Future Possibilities"),(0,a.kt)("p",null,"None known at this time."))}d.isMDXComponent=!0}}]);