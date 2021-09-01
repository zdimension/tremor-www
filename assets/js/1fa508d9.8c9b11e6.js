"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7382],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=s(r),m=n,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8980:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],p={title:"Property Based Testing of Tremor Script",author:"Rohit Dandamudi",author_title:"Tremor 2021 Spring Mentee",author_url:"https://www.linkedin.com/in/kurious-diru/",tags:["testing","mentorship","cncf","tremorscript"],draft:!1,hide_table_of_contents:!1,description:"Rohit's Experience working with Tremor as a LFX Spring 2021 Mentee."},l=void 0,s={permalink:"/tremor-new-website/blog/2021/07/06/Blog-Rohit-Property-Based-Testing",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/blog/2021-07-06-Blog-Rohit-Property-Based-Testing.md",source:"@site/blog/2021-07-06-Blog-Rohit-Property-Based-Testing.md",title:"Property Based Testing of Tremor Script",description:"Rohit's Experience working with Tremor as a LFX Spring 2021 Mentee.",date:"2021-07-06T00:00:00.000Z",formattedDate:"July 6, 2021",tags:[{label:"testing",permalink:"/tremor-new-website/blog/tags/testing"},{label:"mentorship",permalink:"/tremor-new-website/blog/tags/mentorship"},{label:"cncf",permalink:"/tremor-new-website/blog/tags/cncf"},{label:"tremorscript",permalink:"/tremor-new-website/blog/tags/tremorscript"}],readingTime:7.465,truncated:!0,authors:[{name:"Rohit Dandamudi",title:"Tremor 2021 Spring Mentee",url:"https://www.linkedin.com/in/kurious-diru/"}],prevItem:{title:"Continuous Benchmarking in Tremor",permalink:"/tremor-new-website/blog/continuous-benchmarking"},nextItem:{title:"Support for the Syslog Protocol",permalink:"/tremor-new-website/blog/LFX-Blog-Nupur"}},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Main motivation for applying",id:"main-motivation-for-applying",children:[]},{value:"New concepts I learned specific to my work",id:"new-concepts-i-learned-specific-to-my-work",children:[]},{value:"Property Based testing in tremor-script",id:"property-based-testing-in-tremor-script",children:[]},{value:"Example thought process",id:"example-thought-process",children:[]},{value:"Ending thoughts and future plans:",id:"ending-thoughts-and-future-plans",children:[]},{value:"Other resources I compiled while going through the mentorship which y&#39;all might find useful \ud83d\ude42",id:"other-resources-i-compiled-while-going-through-the-mentorship-which-yall-might-find-useful-",children:[]}],h={toc:c};function m(e){var t=e.components,p=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Hey, I am ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/kurious-diru/"},"Rohit Dandamudi")," from India, about to complete my undergrad in CSE and will be working as a Software Engineer soon. I will be sharing my expereince at Tremor :)"),(0,i.kt)("h3",{id:"main-motivation-for-applying"},"Main motivation for applying"),(0,i.kt)("p",null,'My work involved writing "Property-based tests for tremor-script" and some of the reasons for applying are:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It involved a new type of testing I never heard of"),(0,i.kt)("li",{parentName:"ul"},"Be part of a sandbox project where I can learn and grow with the community"),(0,i.kt)("li",{parentName:"ul"},"The concept of learning Erlang + Rust was very interesting to me and frankly out of my comfort zone, as a person used to Python and web development in general.")),(0,i.kt)("h3",{id:"new-concepts-i-learned-specific-to-my-work"},"New concepts I learned specific to my work"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Erlang and Rust",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"My work mostly revolved around Erlang and a little Rust and I was completely new to this ecosystem, it didn't help to not find much resources or actively accessible community for Erlang."),(0,i.kt)("li",{parentName:"ul"},"I took this as a challenge and went through ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/diru1100/learn_erlang"},"various resources to learn Erlang"),", functional programming in general and I was able to see why this Language was involved to do the task at hand, ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/heinz_gies"},"my mentor")," is very passionate about Erlang and shared his thought-process, experience which helped me broaden my knowledge and how to approach any concept while learning something completely new.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tremor-script"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is an interpreted expression-oriented language designed for the filtering, extraction, transformation and streaming of structured data in a stream or event-based processing system which is explicitly turing incomplete used to easily write programs specific to Tremor use-cases."),(0,i.kt)("li",{parentName:"ul"},"It is written using Rust but tested using Erlang"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Property based testing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have seen various types of testing approaches like Unit testing, Integration testing, End2End testing etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The purpose of tests is to check if our code is failing anywhere and test the same with various inputs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fig 1 shows different types of tests to easily understand which features are specialised in what."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{src:r(5353).Z})),(0,i.kt)("p",{parentName:"li"},"  Fig 1. Showing various tests wrt Feature compilance and Input scope covered ","[1]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Property based testing takes a new appraoch which has the right balance of randomness and examples. They also have this nice feature of called shrinking which shows a simple version of sample input which is failing your tests. However, Property based testing is not an ideal solution to use everywhere but it fits our use-case here i.e testing features of a custom-language.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some of the resources I kept below may help understand Property based testing better"))))),(0,i.kt)("h3",{id:"property-based-testing-in-tremor-script"},"Property Based testing in tremor-script"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Property based testing is implemented using ",(0,i.kt)("a",{parentName:"p",href:"http://quviq.com/documentation/eqc/"},"EQC"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Quickcheck is the original library written for Haskell to do property based testing ( similar to xUnit for unit-tests) and EQC is the Erlang version of it")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Erlang quickcheck or EQC is the version used here"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Implemented by QuviQ"),(0,i.kt)("li",{parentName:"ul"},"Free version is ",(0,i.kt)("a",{parentName:"li",href:"http://www.quviq.com/downloads/"},"quickcheck mini")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components in Property based test"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Property is an abstraction of a test case"),(0,i.kt)("li",{parentName:"ul"},"Properties are written in erlang in tremor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The files shown in Fig 2 make the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/tree/main/tremor-script/eqc"},"eqc part of Tremor")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{src:r(6529).Z})),(0,i.kt)("p",{parentName:"li"},"  Fig 2. Files related to eqc"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gen_script:")," This file contains functions which create the structure of the expected expression for a partticular feature/operation that we will be testing in tremor-script"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"model.erl:")," Here, we run the model specification of each operation implemented in Erlang natively."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pbt.erl:")," Some supporting headers needed by other files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"spec.erl:")," We make use of EQC functions here to create the input generators to test a feature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test_eqc.erl:")," The main property of the property based test is kept here."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"util.erl:")," Utility functions to support operations for easy handling."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On a high level Fig 3 explains how the property we consider is checked"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(9032).Z})),(0,i.kt)("p",null,"Fig 3. Highlevel overview of Property based testing in termor-script"),(0,i.kt)("h3",{id:"example-thought-process"},"Example thought process"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Here, I will explain about property based testing by going through a step-by-step approach on how a Property based test is written for an operation in termor-script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tremor-script/#patch"},"Patch")," is a operation in tremor-script that is performed on Expressions(everthing in tremor-script is an expression :p ) which contains multiple record(data-type) level field operations to be applied to a target record in order to transform a targetted record.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As patch has multiple operations inside it which have to be seperately created in every step, here is where the concept of incremental implementation comes into picture, if one makes sures if the PatchOperation is implemented before, we can take advantage of that here. For example: Merge is a seperate operation on records but it also is one of the patch operation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"gen_script.erl: The following code creates the structure needed for a patch operation as shown in Fig 4."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{src:r(4119).Z})),(0,i.kt)("p",{parentName:"li"},"  Fig 4. Diagram showing Patch operation ","[4]"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-erlang"},'%% the input are \'patch\' keyword, an Expression \n%% and the Operation to be performed\ngen_({patch, Expr, PatchOperation}) ->\n    ["(", "patch ", gen_(Expr), " of ",\n     lists:join(",",\n        [[patch_operation(Operation)]\n         || Operation <- PatchOperation]),\n     " end", ")"];\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"model.erl:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One of the ast_eval function in this file matches with patch_operation where the following input is passed  ",(0,i.kt)("inlineCode",{parentName:"p"},"{patch, Expr, PatchOperation}"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An anonymous function is there to update the PatchOperatoin into the respective structure needed for us to evaluate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the end we take advantage of floding in lists to implemente the Erlang implementation to get the required output."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-erlang"},"% Operations covered by the folowing patch_operation are\n% {merge, Value}\n% {merge, Key, Value}\n% {insert, Key, Value}\n% {upsert, Key, Value}\n% {update, Key, Value}\n% {erase, Key}\n\npatch_operation({insert, Key, Value}, Acc) ->\n    maps:put(Key, Value, Acc);\npatch_operation({merge, Key, Value}, Acc) ->\n    maps:fold(fun combine_values/3, #{Key => Value}, Acc);\npatch_operation({upsert, Key, Value}, Acc) ->\n    % does what we expect from upsert\n    maps:put(Key, Value, Acc);\npatch_operation({erase, Key}, Acc) ->\n    maps:remove(Key, Acc).\n\n-spec ast_eval(#vars{}, {}) -> {#vars{},\n                integer() | float() | boolean() | binary()}.\n\nast_eval(#vars{} = S, {patch, Expr, PatchOperation}) ->\n    {_, ExprUpdate} = ast_eval(S, Expr),\n    UpdatdPatchOperation = lists:map(fun ({erase, Key}) ->\n                         {_, UpdatedKey} = ast_eval(S, Key),\n                         {erase, UpdatedKey};\n                     ({merge, Key}) ->\n                         {_, UpdatedKey} = ast_eval(S, Key),\n                         {merge, UpdatedKey};\n                     ({insert, Key, Value}) ->\n                         {_, UpdatedKey} = ast_eval(S, Key),\n                         {_, UpdatedValue} = ast_eval(S,\n                                      Value),\n                         {insert, UpdatedKey, UpdatedValue};\n                     ({upsert, Key, Value}) ->\n                         {_, UpdatedKey} = ast_eval(S, Key),\n                         {_, UpdatedValue} = ast_eval(S,\n                                      Value),\n                         {upsert, UpdatedKey, UpdatedValue};\n                     ({update, Key, Value}) ->\n                         {_, UpdatedKey} = ast_eval(S, Key),\n                         {_, UpdatedValue} = ast_eval(S,\n                                      Value),\n                         {update, UpdatedKey, UpdatedValue};\n                     ({merge, Key, Value}) ->\n                         {_, UpdatedKey} = ast_eval(S, Key),\n                         {_, UpdatedValue} = ast_eval(S,\n                                      Value),\n                         {merge, UpdatedKey, UpdatedValue};\n                     (X) -> X\n                     end,\n                     PatchOperation),\n    {S,\n     lists:foldl(fun patch_operation/2, ExprUpdate,\n         UpdatdPatchOperation)};\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"spec.erl:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The randomised input that we provide to test patch-feature comes from here, patch falls as a unary operation which can be performed on a records and has sub operations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The randomisation is obtained by the frequency function we calls different generators."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-erlang"},"% Operations generated by patch_operation\n% {merge, Value}\n% {merge, Key, Value}\n% {insert, Key, Value}\n% {upsert, Key, Value}\n% {update, Key, Value}\n% {erase, Key}\npatch_operation(S, N) ->\n    frequency([{1,\n        {insert, spec_inner_string(S, N - 1),\n         spec_inner_no_float(S, N - 1)}},\n           {1,\n        {upsert, spec_inner_string(S, N - 1),\n         spec_inner_no_float(S, N - 1)}},\n         {1,\n        {update, spec_inner_string(S, N - 1),\n         spec_inner_no_float(S, N - 1)}},\n           {1,\n        {merge, spec_inner_string(S, N - 1),\n         spec_inner_record(S, N - 1)}},\n           {1, {erase, spec_inner_string(S, N - 1)}},\n           {1, {merge, spec_inner_string(S, N - 1)}}]).\n\n% spec_uop_record function returns {patch, generated_record, patch_operations}\nspec_uop_record(S, N) when N =< 1 ->\n    ?SHRINK({patch, literal_record(S, N - 1),\n         ?SUCHTHAT(X, (list(1, patch_operation(S, N - 1))),\n               (length(X) >= 1))},\n        [literal_record(S, N - 1)]);\nspec_uop_record(S, N) ->\n    ?SHRINK({patch, spec_inner_record(S, N - 1),\n         ?SUCHTHAT(X, (list(1, patch_operation(S, N - 1))),\n               (length(X) >= 1))},\n        [spec_inner_record(S, N - 1)]). \n")))))),(0,i.kt)("h3",{id:"ending-thoughts-and-future-plans"},"Ending thoughts and future plans:"),(0,i.kt)("p",null,"All in all, I had/will have wonderful time at Tremor. Over the past 3-months I learned how to learn new tech-stack, got developer wisdom and understood what truely working as a team is. I want to thank Heinz, Matthias, Darach and Ana for making it fun, collaborative and inclusive environment. Although, I didn't had a lot of knowledge in this area before, I am now confident I have the right mindset to pickup new things and grow together with the team."),(0,i.kt)("p",null,"I would like to continue contributing to the project and explore the rust part of it more. Apart from that I want to take more responsibilty, engage with new-comers and be part of other CNCF community events."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"other-resources-i-compiled-while-going-through-the-mentorship-which-yall-might-find-useful-"},"Other resources I compiled while going through the mentorship which y'all might find useful \ud83d\ude42"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/criteo-engineering/introduction-to-property-based-testing-f5236229d237"},"Introduction to Property Based Testing")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=QyJZzq0v7Z4"},"Why isn't functional programming the norm")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kurious-diru/learn_rust"},"https://github.com/kurious-diru/learn_rust")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/tremor-script/#patch"},"/docs/tremor-script/#patch")),(0,i.kt)("li",{parentName:"ol"},"Better to use tools: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cat - bat - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sharkdp/bat"},"https://github.com/sharkdp/bat")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"grep - ripgrep - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},"https://github.com/BurntSushi/ripgrep")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"top - htop - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hishamhm/htop"},"https://github.com/hishamhm/htop")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"hexdump - hexyl - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sharkdp/hexyl"},"https://github.com/sharkdp/hexyl")))))),(0,i.kt)("li",{parentName:"ol"},"Related to EQC:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.erlang-factory.com/upload/presentations/19/quickchecktutorial_tartsjhughes.pdf"},"https://www.erlang-factory.com/upload/presentations/19/quickchecktutorial_tartsjhughes.pdf")),(0,i.kt)("li",{parentName:"ul"},"Resources mentioned in this issue ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-runtime/issues/721"},"https://github.com/tremor-rs/tremor-runtime/issues/721"))))))}m.isMDXComponent=!0},6529:function(e,t,r){t.Z=r.p+"assets/images/eqc-files-895a5c614b7b6e41f139c7b9531eb806.png"},4119:function(e,t){t.Z="data:image/png;base64,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"},5353:function(e,t,r){t.Z=r.p+"assets/images/tests-comparison-graph-84a1c4d9ca841172c69e84e7762a3e3f.png"},9032:function(e,t,r){t.Z=r.p+"assets/images/tremor-script-testing-workflow-f445d06e6edd4bdcd7386403fcced49f.png"}}]);