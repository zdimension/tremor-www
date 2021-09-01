"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3822],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=o.createContext({}),l=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,h=d["".concat(m,".").concat(u)]||d[u]||p[u]||s;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7509:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=t(7462),r=t(3366),s=(t(7294),t(3905)),a=["components"],i={},m="Persistent Write-Ahead Log",l={unversionedId:"Workshop/examples/persistent_gd/README",id:"Workshop/examples/persistent_gd/README",isDocsHomePage:!1,title:"Persistent Write-Ahead Log",description:"The write-ahead log ( WAL ) builds on circuit breaker and acknowledgement mechanisms to",source:"@site/docs/Workshop/examples/21_persistent_gd/README.md",sourceDirName:"Workshop/examples/21_persistent_gd",slug:"/Workshop/examples/persistent_gd/README",permalink:"/tremor-new-website/docs/Workshop/examples/persistent_gd/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Workshop/examples/21_persistent_gd/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transient Write-Ahead Log",permalink:"/tremor-new-website/docs/Workshop/examples/transient_gd/README"},next:{title:"Round Robin",permalink:"/tremor-new-website/docs/Workshop/examples/roundrobin/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Insights",id:"insights",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"persistent-write-ahead-log"},"Persistent Write-Ahead Log"),(0,s.kt)("p",null,"The write-ahead log ( WAL ) builds on circuit breaker and acknowledgement mechanisms to\nprovide guaranteed delivery. The write-ahead log is useful in situations\nwhere sources/onramps do not offer guaranteed delivery themselves, but the data being distributed downstream can benefit from protection against loss and duplication."),(0,s.kt)("p",null,"In the configuration in this tutorial we configure a persistent WAL."),(0,s.kt)("h2",{id:"environment"},"Environment"),(0,s.kt)("p",null,"We configure a metronome as a source of data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# File: etc/tremor/config/metronome.yaml\nonramp:\n  - id: metronome\n    type: metronome\n    config:\n      interval: 1000 # Every second\n")),(0,s.kt)("p",null,"We configure a straight forward passthrough query to distribute\nthe data to connected downstream sinks."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-trickle"},"# File: etc/tremor/config/persistent.trickle\nuse tremor::system;\n\ndefine qos::wal operator on_disk_wal\nwith\n  read_count = 20,\n  max_elements = 1000, # Capacity limit of 1000 stored events\n  max_bytes = 10485760 # Capacity limit of 1MB of events\nend;\n\ncreate operator on_disk_wal;\n\nselect patch event of\n  insert hostname = system::hostname()\nend\nfrom in into on_disk_wal;\n\nselect event from on_disk_wal into out;\n")),(0,s.kt)("p",null,"We then distribute the metronome events downstream to another websocket\nlistener. We use websocat for this purpose in this example. We can invoke\nthe server as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ websocat -s 8080\nListening on ws://127.0.0.1:8080/\n")),(0,s.kt)("p",null,"We configure the sink/offramp as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"offramp:\n  - id: ws\n    type: ws\n    config:\n      url: ws://localhost:8080/\n")),(0,s.kt)("p",null,"Finally, we interconnect the source, sink and pipeline logic into\nan active flow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'binding:\n  - id: default\n    links:\n      "/onramp/metronome/{instance}/out": ["/pipeline/main/{instance}/in"]\n      "/pipeline/main/{instance}/out": ["/offramp/ws/{instance}/in"]\n\nmapping:\n  /binding/default/01:\n    instance: "01"\n')),(0,s.kt)("p",null,"Running the example via the tremor cli as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ tremor server run -f etc/tremor/config/*\n")),(0,s.kt)("h2",{id:"insights"},"Insights"),(0,s.kt)("p",null,"If the tremor process restarts we pick up and re-send events that have not been acknowledged by the ws offramp and then carry on with new events coming from the metronome:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ websocat -s 8080 ; websocat -s 8080\nListening on ws://127.0.0.1:8080/\n{"onramp":"metronome","id":0,"hostname":"localhost","ingest_ns":1600860720749137000}\n{"onramp":"metronome","id":1,"hostname":"localhost","ingest_ns":1600860721751965000}\n{"onramp":"metronome","id":2,"hostname":"localhost","ingest_ns":1600860722756684000}\n{"onramp":"metronome","id":3,"hostname":"localhost","ingest_ns":1600860723761037000}\n{"onramp":"metronome","id":4,"hostname":"localhost","ingest_ns":1600860724764683000}\n{"onramp":"metronome","id":3,"hostname":"localhost","ingest_ns":1600860723761037000}\n{"onramp":"metronome","id":4,"hostname":"localhost","ingest_ns":1600860724764683000}\n{"onramp":"metronome","id":0,"hostname":"localhost","ingest_ns":1600860730353260000}\n{"onramp":"metronome","id":1,"hostname":"localhost","ingest_ns":1600860731355463000}\n{"onramp":"metronome","id":2,"hostname":"localhost","ingest_ns":1600860732357883000}\n{"onramp":"metronome","id":3,"hostname":"localhost","ingest_ns":1600860733362429000}\n{"onramp":"metronome","id":4,"hostname":"localhost","ingest_ns":1600860734364277000}\n{"onramp":"metronome","id":5,"hostname":"localhost","ingest_ns":1600860735367967000}\n{"onramp":"metronome","id":6,"hostname":"localhost","ingest_ns":1600860736373137000}\n')),(0,s.kt)("p",null,"!!! note\nWe restarted tremor after sending event with id ",(0,s.kt)("inlineCode",{parentName:"p"},"4"),". It did resend events ",(0,s.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"4")," as they have not been acked from the perspective of the WAL yet."),(0,s.kt)("p",null,"If the downstream websocket service restarts we can recover up to 1000 events or any number of events worth 1MB. We may lose in flight events that were already acknowledged at the time the server went down and thus not fully delivered by the downstream system."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ websocat -s 8080 ; websocat -s 8080\n{"onramp":"metronome","id":0,"hostname":"ALT01828","ingest_ns":1600861519788231000}\n{"onramp":"metronome","id":1,"hostname":"ALT01828","ingest_ns":1600861520790241000}\n{"onramp":"metronome","id":2,"hostname":"ALT01828","ingest_ns":1600861521792297000}\n{"onramp":"metronome","id":3,"hostname":"ALT01828","ingest_ns":1600861522797476000}\n{"onramp":"metronome","id":4,"hostname":"ALT01828","ingest_ns":1600861523802114000}\n^C\n$  websocat -s 8080 ; websocat -s 8080\nListening on ws://127.0.0.1:8080/\n{"onramp":"metronome","id":6,"hostname":"ALT01828","ingest_ns":1600861525809835000}\n{"onramp":"metronome","id":7,"hostname":"ALT01828","ingest_ns":1600861526813574000}\n{"onramp":"metronome","id":8,"hostname":"ALT01828","ingest_ns":1600861527817722000}\n{"onramp":"metronome","id":9,"hostname":"ALT01828","ingest_ns":1600861528822667000}\n{"onramp":"metronome","id":10,"hostname":"ALT01828","ingest_ns":1600861529826521000}\n{"onramp":"metronome","id":11,"hostname":"ALT01828","ingest_ns":1600861530830497000}\n')),(0,s.kt)("p",null,"!!! note\nWe killed the websocket server and restarted right afterwards. We in fact lost 1 event (id ",(0,s.kt)("inlineCode",{parentName:"p"},"5"),") which was acked inside tremor but not yet fully delivered to the console by websocat. Other events that the offramp was unable to send will be resent once the ws offramp can connect again."),(0,s.kt)("p",null,"In short, the persistent in memory wal can assist with partial recovery of downstream system or tremor itself and will actively reduce data loss within the configured retention but it is not guarenteed to be lossless."))}d.isMDXComponent=!0}}]);