"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[938],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),h=r,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9799:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"Library Changes",id:"lib_changes"},l="RFC guidelines - Libraries Sub-team",m={type:"mdx",permalink:"/tremor-new-website/libs_changes",source:"@site/src/pages/libs_changes.md"},p=[{value:"Motivation",id:"motivation",children:[]},{value:"Is an RFC Required?",id:"is-an-rfc-required",children:[]},{value:"Non-RFC Process",id:"non-rfc-process",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rfc-guidelines---libraries-sub-team"},"RFC guidelines - Libraries Sub-team"),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RFCs are heavyweight:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RFCs generally take at minimum 2 weeks from posting to land. In\npractice, it can be more on the order of months for particularly\ncontroversial changes."),(0,i.kt)("li",{parentName:"ul"},"RFCs are a lot of effort to write, especially for non-native speakers or\nfor members of the community whose strengths are more technical than literary."),(0,i.kt)("li",{parentName:"ul"},"RFCs may involve pre-RFCs and several rewrites to accommodate feedback."),(0,i.kt)("li",{parentName:"ul"},"RFCs require a dedicated shepherd to herd the community and author towards\nconsensus."),(0,i.kt)("li",{parentName:"ul"},"RFCs require review from a majority of the subteam, as well as an official\nvote."),(0,i.kt)("li",{parentName:"ul"},"RFCs can't be downgraded based on their complexity. Full process always applies.\nEasy RFCs may certainly land faster, though."),(0,i.kt)("li",{parentName:"ul"},"RFCs can be very abstract and hard to grok the consequences of (no implementation)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PRs are low ",(0,i.kt)("em",{parentName:"p"},"overhead")," but potentially expensive nonetheless:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Easy PRs can get insta-merged by any Tremor libraries sub-team contributor."),(0,i.kt)("li",{parentName:"ul"},"Harder PRs can be easily escalated. You can ping subject-matter experts for second\nopinions. Ping the whole team!"),(0,i.kt)("li",{parentName:"ul"},"Easier to grok the full consequences. Lots of tests and Crater to save the day."),(0,i.kt)("li",{parentName:"ul"},"PRs can be accepted optimistically with bots, buildbot, and the trains to guard us from major mistakes making it into stable. The size of the nightly community at this point in time can still mean major community breakage regardless of trains, however."),(0,i.kt)("li",{parentName:"ul"},"HOWEVER: Big PRs can be a lot of work to make only to have that work rejected for details that could have been hashed out first."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RFCs are ",(0,i.kt)("em",{parentName:"p"},"only")," meaningful if a significant and diverse portion of the community actively participates in them. The official teams are not sufficiently diverse to establish meaningful community consensus by agreeing amongst themselves.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If there are ",(0,i.kt)("em",{parentName:"p"},"tons")," of RFCs -- especially trivial ones --, people are less\nlikely to engage with them. Official team members are super busy. Domain experts\nand industry professionals are super busy, ",(0,i.kt)("em",{parentName:"p"},"and")," have no responsibility to engage in RFCs. Since these are ",(0,i.kt)("em",{parentName:"p"},"exactly")," the most important people to get involved in the RFC process, it is important that we be maximally friendly towards their\nneeds."))),(0,i.kt)("h2",{id:"is-an-rfc-required"},"Is an RFC Required?"),(0,i.kt)("p",null,"The overarching philosophy is: ",(0,i.kt)("em",{parentName:"p"},"do whatever is easiest"),". If an RFC would be less work than an implementation, that's a good sign that an RFC is necessary. That said, if you anticipate controversy, you might want to short-circuit straight to an RFC."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Submit a PR")," if the change is a:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bugfix."),(0,i.kt)("li",{parentName:"ul"},"Docfix."),(0,i.kt)("li",{parentName:"ul"},"Perffixes (with no further impact)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Submit an RFC")," if the change is a:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Deprecation of a stable components."),(0,i.kt)("li",{parentName:"ul"},"Nontrivial New components."),(0,i.kt)("li",{parentName:"ul"},"Architectural changes."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do the easier thing")," if uncertain (choosing a path is not final).")),(0,i.kt)("h2",{id:"non-rfc-process"},"Non-RFC Process"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A (non-RFC) PR is likely to be ",(0,i.kt)("strong",{parentName:"p"},"asked to be reopend as a RFC")," if clearly not acceptable:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Disproportionate breaking change (small inference breakage may be acceptable)."),(0,i.kt)("li",{parentName:"ul"},"Unsound."),(0,i.kt)("li",{parentName:"ul"},"Doesn't fit our general design philosophy around the problem."),(0,i.kt)("li",{parentName:"ul"},"Better as a crate."),(0,i.kt)("li",{parentName:"ul"},"Too marginal for std."),(0,i.kt)("li",{parentName:"ul"},"Significant implementation problems."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A PR may also be ",(0,i.kt)("strong",{parentName:"p"},"asked to be reopend as a RFC")," because an RFC is approriate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A (non-RFC) PR  may be ",(0,i.kt)("strong",{parentName:"p"},"merged as unstable"),". In this case, the feature should have a fresh feature gate and an associated tracking issue for stabilisation. Docs are insta-stable, and thus have no tracking issue. This may imply requiring a higher level of scrutiny for such changes."))),(0,i.kt)("p",null,"However, an accepted RFC is not a rubber-stamp for merging an implementation PR.\nNor must an implementation PR perfectly match the RFC text. Implementation details may merit deviations, though obviously they should be justified. The RFC may be amended if deviations are substantial, but are not generally necessary. RFCs should favour immutability. The RFC + Issue + PR should form a total explanation of the current implementation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once something has been merged as unstable, a shepherd should be assigned\nto promote and obtain feedback on the design.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Every time a release cycle ends, the libs teams assesses the current unstable\nAPIs and selects some number of them for potential stabilization during the\nnext cycle. These are announced for FCP at the beginning of the cycle, and\n(possibly) stabilized just before the beta is cut.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After the final comment period, an API should ideally take one of two paths:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stabilize"),", if the change is desired, and consensus is reached."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deprecate"),", if the change is undesired, and consensus is reached."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Extend the FCP"),", if the change cannot meet consensus.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If consensus ",(0,i.kt)("em",{parentName:"li"},"still"),' can\'t be reached, consider requiring a new RFC or\njust deprecating as "too controversial for std".'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If any problems are found with a newly stabilized API during its beta period,\n",(0,i.kt)("em",{parentName:"p"},"strongly")," favour reverting stability in order to prevent stabilizing a bad\nAPI. Due to the speed of the trains, this is not a serious delay (~2-3 months\nif it's not a major problem)."))))}c.isMDXComponent=!0}}]);