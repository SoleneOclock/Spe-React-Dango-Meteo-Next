(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3676:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>d,originalPathname:()=>f,pages:()=>c,routeModule:()=>p,tree:()=>u});var n=r(482),o=r(9108),i=r(2563),s=r.n(i),a=r(8300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9153)),"/Users/solene/Cockpit/Promos/Dango/meteo-widget-next/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"/Users/solene/Cockpit/Promos/Dango/meteo-widget-next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/solene/Cockpit/Promos/Dango/meteo-widget-next/src/app/page.tsx"],f="/page",d={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},4685:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},92:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23))},9430:()=>{},1314:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(9847);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3055:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(9847),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1476:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(9694)._(r(3729)),o=r(6656),i=r(6737),s=r(2421),a=r(853),l=r(1314),u=r(6150),c=r(6860),f=r(3470),d=r(3055),p=r(8928),h=r(8085);function m(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let g=n.default.forwardRef(function(e,t){let r,s;let{href:g,as:y,children:b,prefetch:x=null,passHref:v,replace:P,shallow:_,scroll:j,locale:R,onClick:O,onMouseEnter:w,onTouchStart:E,legacyBehavior:M=!1,...S}=e;r=b,M&&("string"==typeof r||"number"==typeof r)&&(r=n.default.createElement("a",null,r));let N=n.default.useContext(u.RouterContext),C=n.default.useContext(c.AppRouterContext),k=null!=N?N:C,I=!N,A=!1!==x,U=null===x?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:T,as:L}=n.default.useMemo(()=>{if(!N){let e=m(g);return{href:e,as:y?m(y):e}}let[e,t]=(0,o.resolveHref)(N,g,!0);return{href:e,as:y?(0,o.resolveHref)(N,y):t||e}},[N,g,y]),q=n.default.useRef(T),W=n.default.useRef(L);M&&(s=n.default.Children.only(r));let D=M?s&&"object"==typeof s&&s.ref:t,[$,z,K]=(0,f.useIntersection)({rootMargin:"200px"}),F=n.default.useCallback(e=>{(W.current!==L||q.current!==T)&&(K(),W.current=L,q.current=T),$(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[L,D,T,K,$]);n.default.useEffect(()=>{},[L,T,z,R,A,null==N?void 0:N.locale,k,I,U]);let B={ref:F,onClick(e){M||"function"!=typeof O||O(e),M&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,r,o,s,a,l,u,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==l||l;"beforePopState"in t?t[s?"replace":"push"](r,o,{shallow:a,locale:u,scroll:e}):t[s?"replace":"push"](o||r,{scroll:e})};c?n.default.startTransition(d):d()}(e,k,T,L,P,_,j,R,I)},onMouseEnter(e){M||"function"!=typeof w||w(e),M&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e)},onTouchStart(e){M||"function"!=typeof E||E(e),M&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e)}};if((0,a.isAbsoluteUrl)(L))B.href=L;else if(!M||v||"a"===s.type&&!("href"in s.props)){let e=void 0!==R?R:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,d.getDomainLocale)(L,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);B.href=t||(0,p.addBasePath)((0,l.addLocale)(L,e,null==N?void 0:N.defaultLocale))}return M?n.default.cloneElement(s,B):n.default.createElement("a",{...S,...B},r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6252:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6656:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(7043),o=r(2421),i=r(663),s=r(853),a=r(9847),l=r(6737),u=r(4831),c=r(8729);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,s.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,a.normalizePathTrailingSlash)(e.pathname);let t="";if((0,u.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:s,params:a}=(0,c.interpolateAs)(e.pathname,e.pathname,r);s&&(t=(0,o.formatWithValidation)({pathname:s,hash:e.hash,query:(0,i.omit)(r,a)}))}let s=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[s,t||s]:s}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3470:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(3729),o=r(6252),i="function"==typeof IntersectionObserver,s=new Map,a=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,u=l||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(u||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=s.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},a.push(r),s.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6150:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.RouterContext},7866:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},2421:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},urlObjectKeys:function(){return s},formatWithValidation:function(){return a}});let n=r(7824)._(r(7043)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",s=e.pathname||"",a=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==u?(u="//"+(u||""),s&&"/"!==s[0]&&(s="/"+s)):u||(u=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+i+u+(s=s.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return i(e)}},4831:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(6177),o=r(5508)},8729:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let n=r(2694),o=r(6603);function i(e,t,r){let i="",s=(0,o.getRouteRegex)(e),a=s.groups,l=(t!==e?(0,n.getRouteMatcher)(s)(t):"")||r;i=e;let u=Object.keys(a);return u.every(e=>{let t=l[e]||"",{repeat:r,optional:n}=a[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in l)&&(i=i.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:u,result:i}}},5508:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return i}});let n=r(5767),o=/\/\[[^/]+?\](?=\/|$)/;function i(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},6737:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=r(853),o=r(6411);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},663:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},7043:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return i}})},2694:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(853);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},s={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(s[e]=~n.indexOf("/")?n.split("/").map(e=>i(e)):t.repeat?[i(n)]:i(n))}),s}}},6603:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});let n=r(5767),o=r(7866),i=r(4310);function s(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function a(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),r={},a=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:n,repeat:l}=s(i[1]);return r[e]={pos:a++,repeat:l,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=s(i[1]);return r[e]={pos:a++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=a(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function u(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:i,keyPrefix:a}=e,{key:l,optional:u,repeat:c}=s(n),f=l.replace(/\W/g,"");a&&(f=""+a+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),a?i[f]=""+a+l:i[f]=l;let p=t?(0,o.escapeStringRegexp)(t):"";return c?u?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function c(e,t){let r;let s=(0,i.removeTrailingSlash)(e).slice(1).split("/"),a=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:s.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&i){let[r]=e.split(i[0]);return u({getSafeRouteKey:a,interceptionMarker:r,segment:i[1],routeKeys:l,keyPrefix:t?"nxtI":void 0})}return i?u({getSafeRouteKey:a,segment:i[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function f(e,t){let r=c(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=a(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},6177:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let r=o.slice(1,-1),s=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),s=!0),r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function i(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(s){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');i(this.optionalRestSlugName,r),this.optionalRestSlugName=r,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');i(this.restSlugName,r),this.restSlugName=r,o="[...]"}}else{if(s)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');i(this.slugName,r),this.slugName=r,o="[]"}}this.children.has(o)||this.children.set(o,new r),this.children.get(o)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},853:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return i},getLocationOrigin:function(){return s},getURL:function(){return a},getDisplayName:function(){return l},isResSent:function(){return u},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return m},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=s();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},8026:(e,t,r)=>{let{createProxy:n}=r(6843);e.exports=n("/Users/solene/Cockpit/Promos/Dango/meteo-widget-next/node_modules/next/dist/client/link.js")},646:(e,t,r)=>{e.exports=r(8026)},1342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>s});var n=r(5036),o=r(2195),i=r.n(o);r(5023);let s={title:"Meteo widget",description:"Meteo with next"};function a({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:i().className,children:e})})}},9153:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5036),o=r(646),i=r.n(o);let s=async e=>{console.log("environnemnt : ","production");let t=process.env.API_KEY,r=process.env.API_URL,n=await fetch(`${r}/weather?q=${e}&units=metric&appid=${t}`);return await n.json()};async function a({city:e,code:t}){let r=await s(e),o=Math.round(r.main.temp),a=r.weather[0].icon;return(0,n.jsxs)(i(),{href:`/city/${e}`,className:"bg-white/20 p-5 rounded-md border-solid border-white border-2 m-4 w-8/12 flex items-center justify-between",children:[(0,n.jsxs)("div",{children:["❤️",n.jsx("div",{className:"font-bold text-xl",children:e}),n.jsx("div",{className:"text-sm",children:t}),(0,n.jsxs)("div",{className:"font-bold text-2xl",children:[o,"\xb0C"]})]}),n.jsx("img",{src:`https://openweathermap.org/img/wn/${a}@2x.png`})]})}function l(){return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center p-5 bg-gradient-to-bl from-sky-800 to-sky-200",children:[n.jsx(a,{city:"Paris",code:"75001"}),n.jsx(a,{city:"Savines-le-Lac",code:"05160"}),n.jsx("footer",{children:n.jsx(i(),{href:"/about",children:"About us"})})]})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(337);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,883,337],()=>r(3676));module.exports=n})();