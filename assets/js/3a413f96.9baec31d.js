"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4204],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39505:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l="Recipes",c={unversionedId:"tremor-script/recipes",id:"tremor-script/recipes",isDocsHomePage:!1,title:"Recipes",description:"This document provides a few recipes for common patterns in tremor script. Please note however that it neither is exhaustive nor should those patterns considered the 'only way' to perform certain tasks.",source:"@site/docs/tremor-script/recipes.md",sourceDirName:"tremor-script",slug:"/tremor-script/recipes",permalink:"/docs/next/tremor-script/recipes",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/tremor-script/recipes.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"pp",permalink:"/docs/next/tremor-script/pp"},next:{title:"cncf",permalink:"/docs/next/tremor-script/stdlib/cncf"}},p=[{value:"Extracting a raw message",id:"extracting-a-raw-message",children:[]},{value:"Appending to an array",id:"appending-to-an-array",children:[]},{value:"Validating over extracted data",id:"validating-over-extracted-data",children:[]},{value:"Replacing a field with an extraction",id:"replacing-a-field-with-an-extraction",children:[]},{value:"No effect on non matching case",id:"no-effect-on-non-matching-case",children:[]},{value:"Boolean decisions",id:"boolean-decisions",children:[]},{value:"Diverting an event to a different channel",id:"diverting-an-event-to-a-different-channel",children:[]},{value:"The &#39;null default&#39;",id:"the-null-default",children:[]},{value:"Testing against the type of a field",id:"testing-against-the-type-of-a-field",children:[]},{value:"Routing messages",id:"routing-messages",children:[]},{value:"Percentage drops of events",id:"percentage-drops-of-events",children:[]},{value:"Check if a variable is present/absent",id:"check-if-a-variable-is-presentabsent",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recipes"},"Recipes"),(0,i.kt)("p",null,"This document provides a few recipes for common patterns in tremor script. Please note however that it neither is exhaustive nor should those patterns considered the 'only way' to perform certain tasks."),(0,i.kt)("h2",{id:"extracting-a-raw-message"},"Extracting a raw message"),(0,i.kt)("p",null,"If the event is a unstructured / raw message parsing it can be tricky since we can not match over a string. The following code offers a solution to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'# event = "John Doe"\n\nlet event =  match {"message": event} of\n  case r = %{ message ~= dissect|%{first} %{last}| } => r.message\n  default => drop\nend;\n# event = {"first" : "John", "last": "Doe"}\n')),(0,i.kt)("h2",{id:"appending-to-an-array"},"Appending to an array"),(0,i.kt)("p",null,"When appending to an array we can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/stdlib/std/array#pusharray-element"},(0,i.kt)("inlineCode",{parentName:"a"},"array::push"))," function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'use std::array;\n# event = {"key": "value", "tags": ["tag1"]}\nlet event.tags = array::push(event.tags, "tag2");\n# event = {"key": "value", "tags": ["tag1", "tag2"]}\n')),(0,i.kt)("h2",{id:"validating-over-extracted-data"},"Validating over extracted data"),(0,i.kt)("p",null,"Sometimes we want to validate over extracted data without forcing the extraction to be a regular expression. For validations like the one below this pattern can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'use std::array;\nmatch event of\n  # ...\n  case r = %{message ~= dissect|%{log_level} %{log_timestamp}: %{logger}: %{message}|} when array::contains(["ERROR", "WARN", "INFO", "DEBUG"], result.message.log_level) => let event = merge event of r.message end\n  # ...\nend\n')),(0,i.kt)("p",null,"Here we extract the ",(0,i.kt)("inlineCode",{parentName:"p"},"log_level")," and validate of that the it is one of ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WARN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," by moving the check into the when guard we don't need to use a regular expression for this validation instead can use array membership."),(0,i.kt)("h2",{id:"replacing-a-field-with-an-extraction"},"Replacing a field with an extraction"),(0,i.kt)("p",null,"When extracting a field to merge with with the event and wanting to remove the extracted field we can take advantage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," expressions behaviour that it will treat ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," in merged records as a command to delete the data by setting the field to replace to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," before merging."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'# event = %{"message": "John Doe"}\nlet event = merge event of match event of\n  case r = %{message ~= dissect|%{first} %{last}| } => let r = r.message, let r.message = null, r\n  default => {}\nend;\n# event = %{"first": "John", "last": "Doe"}\n')),(0,i.kt)("h2",{id:"no-effect-on-non-matching-case"},"No effect on non matching case"),(0,i.kt)("p",null,"If we use merge with match we can make the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," case to have no effect by using ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),". This is possible since ",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," is a identity function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'# event = %{"message": "John Doe"}\nlet event = merge event of match event of\n  case r = %{message ~= dissect|%{first} %{midle} %{last}| } => let r = r.message, let r.message = null, r\n  default => {}\nend;\n# event = %{"message": "John Doe"}\n')),(0,i.kt)("h2",{id:"boolean-decisions"},"Boolean decisions"),(0,i.kt)("p",null,"To make boolean decisions we can match on ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'use std::type;\n\nmatch type::is_record(event) of\n  case true => let event_type = "record"\n  case false => let event_type = "other"\nend\n')),(0,i.kt)("h2",{id:"diverting-an-event-to-a-different-channel"},"Diverting an event to a different channel"),(0,i.kt)("p",null,"By default the ",(0,i.kt)("inlineCode",{parentName:"p"},"tremor-script")," operator forwards all events that are not dropped to the ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," channel for further processing. However it is possible to route events to different channels using the ",(0,i.kt)("inlineCode",{parentName:"p"},"emit")," keyword. This allows, for example, diverting certain events to reserve bandwidth for a more important subset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match event.importance of\n  case "high" => emit # this is the same as emit event => "out"\n  case "medium" => emit event => "divert"\n  default => drop # deletes the event\nend\n')),(0,i.kt)("h2",{id:"the-null-default"},"The 'null default'"),(0,i.kt)("p",null,"When the result of a match statement isn't needed - as in we use it purely for it's side effects - and we want the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," to have no effect we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match event of\n  case %{ tags ~= ["high-priority"]} => let event.importance = "high"\n  default => null\nend\n')),(0,i.kt)("h2",{id:"testing-against-the-type-of-a-field"},"Testing against the type of a field"),(0,i.kt)("p",null,"Sometimes we want to know if a field has a certain type. The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," module provides help here but common types such as ",(0,i.kt)("inlineCode",{parentName:"p"},"record")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"array")," can be checked using their patterns."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match event of\n  case %{field ~= %{}} => emit "event.field is a record"\n  case %{field ~= %[]} => emit "event.field is a array"\n  case %{} when type::is_record(event.field) => emit "event.field is a record"\n  case %{} when type::is_array(event.field) => emit "event.field is a array"\n  case %{} when type::is_number(event.field) => emit "event.field is a number (float or integer)"\n  case %{} when type::is_integer(event.field) => emit "event.field is an integer"\n  case %{} when type::is_float(event.field) => emit "event.field is a float"\n  case %{} when type::is_null(event.field) => emit "event.field is null (but set)"\n  case %{absent field} => emit "event.field is not set"\n  # ...\nend\n')),(0,i.kt)("h2",{id:"routing-messages"},"Routing messages"),(0,i.kt)("p",null,"Tremor script can be used to route messages by combining the ",(0,i.kt)("inlineCode",{parentName:"p"},"emit")," feature and the fact that the tremor runtime operator allows different outputs."),(0,i.kt)("p",null,"To route to doing a ",(0,i.kt)("inlineCode",{parentName:"p"},"blue")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"green")," split based on a field in a record we could use the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match event of\n  case %{key == "blue"} => emit event => "blue"\n  case %{key == "green"} => emit event => "green"\n  default => drop\nend\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"define script split_script\nscript\n  # see above\nend;\ncreate script split_script;\n\nselect event from split_script/blue into out/blue;\nselect event from split_script/green into out/green;\n")),(0,i.kt)("h2",{id:"percentage-drops-of-events"},"Percentage drops of events"),(0,i.kt)("p",null,"To drop a percentage of all events, functions in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/stdlib/std/random"},"random")," module can be used."),(0,i.kt)("p",null,"We generate a random number in a range and based on the outcome, we decide whether we want to drop an event or not. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},"# drop 50% of the events\nmatch random::integer(0, 100) < 50 of\n  case true => drop\n  default => null\nend\n")),(0,i.kt)("p",null,"Most of the time, we want to do this only for certain matching events (as opposed to all events)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'let random_number = random::integer(0, 100);\nmatch event of\n  case %{key == "blue"} when random_number < 25 => drop   # drop 25% of blue events\n  case %{key == "yellow"} when random_number < 75 => drop # drop 75% of yellow events\n  case %{key == "red"} => drop                            # drop 100% of red events\n  default => null                                         # drop 0% of other events\nend\n')),(0,i.kt)("h2",{id:"check-if-a-variable-is-presentabsent"},"Check if a variable is present/absent"),(0,i.kt)("p",null,"To check if a variable is present, we can rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"present")," keyword (and inversely, ",(0,i.kt)("inlineCode",{parentName:"p"},"absent"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'# matches default case\nmatch present non_existent_var of\n  case true => "is present"\n  default => "not present"\nend;\n')),(0,i.kt)("p",null,"Note that this is different from the case where a variable is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", for which we can do ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/stdlib/std/type#is_nullvalue"},"function-based")," checks as well as pattern-match with ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/index#match"},"match"),"."),(0,i.kt)("p",null,"Using non-existent variables in contexts other than ",(0,i.kt)("inlineCode",{parentName:"p"},"present")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"absent")," will throw an error terminating the script, so this is useful for guarding against that when needed. This is especially useful when working with meta variables as part of tremor runtime, where -- as part of a pipeline node -- we may need to check if a certain meta variable is set or not (eg: from a previous pipeline node) and act accordingly. For such needs, the approach above can be used. Alternatively, we can also rely on ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/tremor-script/index#matching-record-patterns"},"record patterns")," there:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'# tests for presence of $key\nmatch $ of\n  case %{present key} => "present"\n  default => "not present"\nend;\n')),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," gives a record with all the meta variable name-value mapping, this works nicely."))}m.isMDXComponent=!0}}]);