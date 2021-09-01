"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2216],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7353:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="Configurator",c={unversionedId:"Workshop/examples/configurator/README",id:"Workshop/examples/configurator/README",isDocsHomePage:!1,title:"Configurator",description:"An application built using tremor using the linked transports feature and the qos::wal operator introduced in 0.9 and the $correlation feature introduced in 0.11, allowing for centralized configuration across services and their component nodes.",source:"@site/docs/Workshop/examples/37_configurator/README.md",sourceDirName:"Workshop/examples/37_configurator",slug:"/Workshop/examples/configurator/README",permalink:"/tremor-new-website/docs/Workshop/examples/configurator/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Workshop/examples/37_configurator/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quota Service",permalink:"/tremor-new-website/docs/Workshop/examples/quota_service/README"},next:{title:"Polling",permalink:"/tremor-new-website/docs/Workshop/examples/polling_alerts/README"}},u=[{value:"Setup",id:"setup",children:[]},{value:"Using the Configurator",id:"using-the-configurator",children:[]},{value:"TODO",id:"todo",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configurator"},"Configurator"),(0,a.kt)("p",null,"An application built using tremor using the ",(0,a.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/Operations/linked-transports"},"linked transports")," feature and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tremor-query/operators/#qoswal"},"qos::wal")," operator introduced in 0.9 and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Operations/linked-transports/#correlation"},(0,a.kt)("inlineCode",{parentName:"a"},"$correlation"))," feature introduced in 0.11, allowing for centralized configuration across services and their component nodes."),(0,a.kt)("p",null,"The main task of the Configurator is to distribute config changes to a group of upstream tremor nodes running the ",(0,a.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/Workshop/examples/quota_service/README"},(0,a.kt)("em",{parentName:"a"},"Quota Service")),".\nThe config changes do not happen in an atomic or transactional fashion across all upstream nodes, but all valid configuration updates are persisted and retried until they succeed.\nThe responses are aggregated from all the upstream nodes and bundled into a single event / HTTP response."),(0,a.kt)("p",null,"This is an exploration project meant to push what we can do with the current tremor feature set and as such, there are/will be rough edges."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"!!! note\nAll the application code here is available from the docs ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/37_configurator"},"git repository"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# start everything\ndocker-compose up\n")),(0,a.kt)("p",null,"Following services should be now accessible:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configurator: ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:9139"},"http://localhost:9139")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Workshop/examples/quota_service/README"},"Quota Service")," Node 1: ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:8139"},"http://localhost:8139")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/Workshop/examples/quota_service/README"},"Quota Service")," Node 2: ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:8140"},"http://localhost:8140"))),(0,a.kt)("h2",{id:"using-the-configurator"},"Using the Configurator"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"List routes")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl http://localhost:9139\n\n      Welcome to the Configurator!\n\n      Available routes:\n\n      GET /services\n      GET /service/<id>\n      GET /service/<id>/...\n      PUT /service/<id>/...\n      DELETE /service/<id>/...\n\n      HEAD /ping\n      GET /stats\n\n      * /echo\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"List services")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://localhost:9139/services\n\n  ["quota_service"]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Set service configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# change a quota for all instances of the quota service\n$ curl -XPUT -H\'Content-Type: application/json\' http://localhost:9139/service/quota_service/application_default -d\'11\' | jq .\n[\n  {\n    "response": {\n      "application_default": 100\n    },\n    "upstream": "quota_service_1"\n  },\n  {\n    "response": {\n      "application_default": 100\n    },\n    "upstream": "quota_service_2"\n  }\n]\n# As the response suggests, the config update has been applied to all the nodes in the quota service.\n# The config value for `application_default` has been changed from `100` to `11`.\n# If the delivery fails on a node (eg: it\'s down or there\'s network issues), it will be retried until it\'s successful\n# (this works even if the configurator gets restarted during the process, since the undelivered updates are stored on disk)\n')),(0,a.kt)("p",null,"We can verify that the config changes got applied by checking the configu through the configurator\nor through each quota_service instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://localhost:9139/service/quota_service | jq .\n[\n  {\n    "response": {\n      "host_default": 500,\n      "logger_default": 50,\n      "index_default": 100,\n      "tremolo": 100,\n      "application_default": 11\n    },\n    "upstream": "quota_service_2"\n  },\n  {\n    "response": {\n      "host_default": 500,\n      "logger_default": 50,\n      "index_default": 100,\n      "tremolo": 100,\n      "application_default": 11\n    },\n    "upstream": "quota_service_1"\n  }\n]\n\n$ curl http://localhost:8139/quotas\n{"host_default":500,"logger_default":50,"tremolo":100,"index_default":100,"application_default":11}\n\n$ curl http://localhost:8140/quotas\n{"host_default":500,"logger_default":50,"tremolo":100,"index_default":100,"application_default":11}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debug request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -XPOST localhost:9139/echo -d\'{"snot": "badger"}\'\n\n{"body":"{\\"snot\\": \\"badger\\"}","meta":{"method":"POST","headers":{"content-length":["18"],"content-type":["application/x-www-form-urlencoded"],"user-agent":["curl/7.65.3"],"accept":["*/*"],"host":["localhost:9139"]},"url":{"scheme":"http","host":"localhost","port":9139,"path":"/echo"}}}\n')),(0,a.kt)("h2",{id:"todo"},"TODO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"explore pull model for configuration sync"),(0,a.kt)("li",{parentName:"ul"},"generate per-service config routes from openapi specs"),(0,a.kt)("li",{parentName:"ul"},"templatize new service addition/boilerplate")),(0,a.kt)("p",null,"In the context of configuring tremor nodes, problems around configuration sync/distribution will be easier to solve after tremor becomes truly clustered, but for now, we can try and tackle it with what we have and see how far we go (eg: via guaranteed delivery or periodic updates)."))}d.isMDXComponent=!0}}]);