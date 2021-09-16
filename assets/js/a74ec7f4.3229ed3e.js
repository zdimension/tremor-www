"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7444],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=A(e,["components","mdxType","originalType","parentName"]),f=u(t),p=i,d=f["".concat(c,".").concat(p)]||f[p]||s[p]||o;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var A={};for(var c in n)hasOwnProperty.call(n,c)&&(A[c]=n[c]);A.originalType=e,A.mdxType="string"==typeof e?e:i,a[1]=A;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32181:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return A},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],A={},c={unversionedId:"tremor-script/functions",id:"tremor-script/functions",isDocsHomePage:!1,title:"Functions",description:"Tremor-script provides access to a growing number of functions that allow",source:"@site/docs/tremor-script/functions.md",sourceDirName:"tremor-script",slug:"/tremor-script/functions",permalink:"/docs/tremor-script/functions",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/functions.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Regex (re)",permalink:"/docs/tremor-script/extractors/regex"},next:{title:"Tremor-Script",permalink:"/docs/tremor-script/index"}},u=[{value:"Intrinsic Functions",id:"intrinsic-functions",children:[]},{value:"Standard functions",id:"standard-functions",children:[{value:"Variable arguments",id:"variable-arguments",children:[]},{value:"Recursion",id:"recursion",children:[]}]},{value:"Match functions",id:"match-functions",children:[]}],l={toc:u};function s(e){var n=e.components,A=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,A,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tremor-script provides access to a growing number of functions that allow\nadvanced data manipulation or access to additional information."),(0,o.kt)("p",null,"Functions are namespaced to make identification easier."),(0,o.kt)("p",null,"Tremor also supports user defined functions. There are a few\nnoteworthy restrictions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Functions are pure / side effect free - you can not mutate ",(0,o.kt)("inlineCode",{parentName:"li"},"event"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"state"),",\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"$")," inside of a function."),(0,o.kt)("li",{parentName:"ol"},"Functions have to return a value, as tremor-script is expression oriented."),(0,o.kt)("li",{parentName:"ol"},"Functions can only be defined once, even if they take different forms or\narguments. Function overloading is not supported."),(0,o.kt)("li",{parentName:"ol"},"In matching functions, a ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," case is required."),(0,o.kt)("li",{parentName:"ol"},"Functions can call other functions but they have to be a priori defined. The order of definitions is significant."),(0,o.kt)("li",{parentName:"ol"},"Tail recursion is supported, and constrained to a maximum recursion depth. A recursion depth is imposed as tremor-script is designed to operate on infinite streams of data so indefinite blocking/recursion is not supportable by design.")),(0,o.kt)("p",null,"Function Declaration Grammar:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"function clause",src:t(67909).Z}))),(0,o.kt)("p",null,"Lets look at the types of functions we have."),(0,o.kt)("h2",{id:"intrinsic-functions"},"Intrinsic Functions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"intrinsic fn",src:t(52566).Z})),(0,o.kt)("p",null,"Intrinsic functions represent builtin or pre-defined functions implemented in the rust programming\nlanguage that are a builtin component of the tremor project and are provided out of the box."),(0,o.kt)("p",null,"The function reference in this documentation set, for example, is generated from the documentation\nprovided in the standard library. The standard library is primarily composed of intrinsic or bulitin\nfunctions."),(0,o.kt)("h2",{id:"standard-functions"},"Standard functions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"standard fn",src:t(82222).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fn args",src:t(85104).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fn body",src:t(44353).Z})),(0,o.kt)("p",null,"Standard functions are functions that take a given number of arguments, each with\na name. This function can be tail-recursive. An example would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"## This function adds two values together\nfn add(a, b) with\n  a + b\nend\n")),(0,o.kt)("h3",{id:"variable-arguments"},"Variable arguments"),(0,o.kt)("p",null,"It is possible to use variable arguments by appending a final ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," ellipsis in a standard\nfunction definition. The anonymous arguments will be provided via the ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," keyword."),(0,o.kt)("h3",{id:"recursion"},"Recursion"),(0,o.kt)("p",null,"Tail-recursion is provided for fixed arity ( number of arguments ) tandard functions."),(0,o.kt)("p",null,"Tremor imposes a restriction in recursion depth. As tremor is an event processing system\nit is not desirable to have long running functions that block events from being processed\nthrough the system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"use std::array;\n\nfn sum_(e, es) with\n  let l = array::len(es);\n  match l of\n    case l when l > 0 => let a = es[0], recur(e + es[0], es[1:l])\n    default => e\n  end\nend;\n\nfn sum(...) with\n  sum_(0, args)\nend\n")),(0,o.kt)("h2",{id:"match-functions"},"Match functions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"match fn",src:t(59240).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fn args",src:t(85104).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fn case",src:t(91795).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fn default",src:t(37256).Z})),(0,o.kt)("p",null,"Since matching and extracting are a core functionality for tremor matching on\nfunction arguments is directly supported."),(0,o.kt)("p",null,"The same patterns that are used in ",(0,o.kt)("inlineCode",{parentName:"p"},"match")," can be used in function cases\nincluding extractors. If any extracting pattern is used and matches the function\nargument will be replaced by the result of the extraction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"## calculates the fibonaci sequence\nfn fib_(a, b, n) of\n  case (a, b, n) when n > 0 => recur(b, a + b, n - 1)\n  default => a\nend;\n\n## calculates the fibonaci sequence\nfn fib(n) with\n  fib_(0, 1, n)\nend;\n")))}s.isMDXComponent=!0},67909:function(e,n){n.Z="data:image/png;base64,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"},85104:function(e,n){n.Z="data:image/png;base64,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"},44353:function(e,n){n.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAlCAYAAAB1YQYxAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAABIJJREFUeNrtm3tIVHkUx7/zaCVsk5kac1qMtimSyiJHpVgrgyRrQXv6h5Nk79IKMirbpTLSpbVAAhFyM4WEnkQPKFMmkpLeT3oY6bJgu6MVSZZl6czd3+83zjjqzNxRuzM5/b5wmXvvub9z557PPef85l4G4Or3kvnkrCq94LcRbbzr9ZgqfXWth0/f8Tt+yxdE+uS8cl6MJKgyXq40HKIfiEPkELk4RC4OkYtD5BC5OESuryjrExtNVAhe3653eZSYXUId/DMN7xpfddoXpArGmm0F/T/6fY1r+3grxDaLCerIMvK5AU33arodLGaXULXV9xA9IxETImLt+wb8EOAfKdTbuA6OMEAp20/GhZAtWcezU0GIJ8X1OXFa7tSpmF1CaX/SIWzi1G77r1w4AtVQLSZFz2LbH5ubUHHmL8TOTUHrl8+4f70MIaGjcfl8CSxmM+YsTrf7qao4gVDdeJjqalD/sgaTp8aTDNeg4mwR/q6+iyHDQhE9PQHh+pnSXlxP4mqDJyAEgqueKJPJHZxeJING98gukUz/1qL60XX7QrOTKlg7EgV/rLZvH8nPJKX3NSu3bxpe4nhRNiovlBJAszE2fAoO7F5qL81VxhM4kLUUj24b0dr6BZ8/NSM3czGzJSRvxphxUXj24Jp37lKxuFJ4ar0JClkpA+i0J7p3Wk7W3dslzkyaUTQ7HHuiLqwA4yZPQ2JyBgMZE5eE901vkbpxn8NxGqT9dhByhfUyHxJgtyrPIm7eKrYdl7gS8QvXdtwsJCtT0mNZtjrLfC/DLEeruQID5Fu6Zp5nEO1O8Zg5FbMrZC+g0kt2bXMXpeMXAsmpLWk9nj68BuO5YuSW3ETAwEC7TUHg2QCyzB0+kpVcm34crO7kiwLN22lgJfrnMZMwi0DWhUX07kv35U2GLa5KeTw88OIK4k1yVzQSB7HEYQn5THVrbxNyepSJX/FVDS2Pr/77B0HqYJZltB+60qcPTQgYEejSnrRiB+anbMWLJ7dw/8Yl5O0wIP/ks959MU9eDnePQ+e4mi2lUMiXwCIkQy5766yUOoPY7kQgU0HhGMxCOIOj0qe6tftIFnMb8veswOwFa9jkJicjgfVJWmap6OSG9jqanbRUPnlwFQmGDKe+PpBSTHsr9UPHB6k1MJ4v9taluIurkfTEHFJifyd2pzCVDvW4zC0cMbuEKsrbxBabhpKZY27xDRwtzGLrM0n20bK5KHU76485hZXsuJaWZmSujLH/JFmyNhsjRo13eZ6jhbvYoibltIFkt2Fdtjf6oHhcrfuWuYLpkIlCvXs4YnZpRGG5Utcg075p652mulrW8+j4Nw11bN2xX27de6rT2EHEvvdQFSvPNIO7Hi/hbwzP49oVJqxtzgpRKde6fXIgZv/GRbPVU9GZr/eel/UyrjaYmqjtHb8TxRz1Q4DaUB2bqHzT6mtc28f77QNwmlGRMb/iexB/i8EhcnGIXBwiF4fIIXJxiFwcIpejfPbXNl/9DcwfpfDJWVtMu9kycHiW30aWXh8vp1xc35H+B2I3HuQA2HhjAAAAAElFTkSuQmCC"},91795:function(e,n){n.Z="data:image/png;base64,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"},37256:function(e,n){n.Z="data:image/png;base64,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"},52566:function(e,n,t){n.Z=t.p+"assets/images/IntrinsicFnDecl-98a76c96db37aedfd6eb93dacd733698.png"},59240:function(e,n,t){n.Z=t.p+"assets/images/MatchingFnDecl-b86541107dc408c394c2b3e98b853a19.png"},82222:function(e,n,t){n.Z=t.p+"assets/images/SimpleFnDecl-db0bf974b8f33990fdf61126c9139888.png"}}]);