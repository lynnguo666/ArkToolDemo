(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{234:function(t,e,r){var n=r(252);t.exports=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(e){n(t,e,r[e])})}return t}},252:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},262:function(t,e,r){"use strict";var n=r(537),o=r(789),i=Object.prototype.toString;function a(t){return"[object Array]"===i.call(t)}function s(t){return null!==t&&"object"===typeof t}function c(t){return"[object Function]"===i.call(t)}function u(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!==typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"===typeof t},isNumber:function(t){return"number"===typeof t},isObject:s,isUndefined:function(t){return"undefined"===typeof t},isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:c,isStream:function(t){return s(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!==typeof window&&"undefined"!==typeof document},forEach:u,merge:function t(){var e={};function r(r,n){"object"===typeof e[n]&&"object"===typeof r?e[n]=t(e[n],r):e[n]=r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return e},extend:function(t,e,r){return u(e,function(e,o){t[o]=r&&"function"===typeof e?n(e,r):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},285:function(t,e,r){var n=r(337),o=r(338),i=r(339);t.exports=function(t){return n(t)||o(t)||i()}},289:function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,u=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&h())}function h(){if(!f){var t=s(p);f=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new d(t,e)),1!==u.length||f||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},317:function(t,e,r){var n=r(420);t.exports=function(t,e){if(null==t)return{};var r,o,i=n(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},337:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},338:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},339:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},348:function(t,e){function r(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)})}}},420:function(t,e){t.exports=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}},443:function(t,e){t.exports=function(t,e){return"".concat(t,"-").concat(e,"-").concat(Math.random().toString(16).slice(3,8))}},444:function(t,e){var r=!1;e.logging=r,e.setLogging=function(t){r=t},e.log=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r?void 0:null}},445:function(t,e,r){var n,o;void 0===(o="function"===typeof(n=function(){return function(){var t=arguments.length;if(0===t)throw new Error("resolveUrl requires at least one argument; got none.");var e=document.createElement("base");if(e.href=arguments[0],1===t)return e.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(e,r.firstChild);for(var n,o=document.createElement("a"),i=1;i<t;i++)o.href=arguments[i],n=o.href,e.href=n;return r.removeChild(e),n}})?n.call(e,r,e,t):n)||(t.exports=o)},446:function(t,e,r){"use strict";(function(e){var n=r(262),o=r(791),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s={adapter:function(){var t;return"undefined"!==typeof XMLHttpRequest?t=r(538):"undefined"!==typeof e&&(t=r(538)),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(t){s.headers[t]={}}),n.forEach(["post","put","patch"],function(t){s.headers[t]=n.merge(i)}),t.exports=s}).call(this,r(289))},534:function(t,e,r){var n=r(443),o=0;t.exports=function(t){var e=t.id,r=t.action,i=t.payload,a=void 0===i?{}:i,s=e;return"undefined"===typeof s&&(s=n("Job",o),o+=1),{id:s,action:r,payload:a}}},535:function(t,e,r){var n=r(64),o=r(348),i=r(234),a=r(317),s=r(774),c=r(776),u=r(534),f=r(444).log,l=r(443),p=r(777).defaultOEM,h=r(778),d=h.defaultOptions,m=h.spawnWorker,v=h.terminateWorker,g=h.onMessage,y=h.loadImage,w=h.send,b=0;t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=l("Worker",b),r=s(i({},d,t)),h=r.logger,x=r.errorHandler,E=a(r,["logger","errorHandler"]),k={},j={},L=m(E);b+=1;var O=function(t,e){k[t]=e},S=function(t,e){j[t]=e},T=function(t){var r=t.id,n=t.action,o=t.payload;return new Promise(function(t,i){f("[".concat(e,"]: Start ").concat(r,", action=").concat(n)),O(n,t),S(n,i),w(L,{workerId:e,jobId:r,action:n,payload:o})})},A=function(){var t=o(n.mark(function t(e){var r,o,i=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},o=i.length>2?i[2]:void 0,t.t0=T,t.t1=u,t.t2=o,t.next=7,y(e);case 7:return t.t3=t.sent,t.t4=r,t.t5={image:t.t3,options:t.t4},t.t6={id:t.t2,action:"recognize",payload:t.t5},t.t7=(0,t.t1)(t.t6),t.abrupt("return",(0,t.t0)(t.t7));case 13:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=o(n.mark(function t(e,r){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=T,t.t1=u,t.t2=r,t.next=5,y(e);case 5:return t.t3=t.sent,t.t4={image:t.t3},t.t5={id:t.t2,action:"detect",payload:t.t4},t.t6=(0,t.t1)(t.t5),t.abrupt("return",(0,t.t0)(t.t6));case 10:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),R=function(){var t=o(n.mark(function t(e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null===L){t.next=5;break}return t.next=3,T(u({id:e,action:"terminate"}));case 3:v(L),L=null;case 5:return t.abrupt("return",Promise.resolve());case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return g(L,function(t){var e=t.workerId,r=t.jobId,n=t.status,o=t.action,a=t.data;if("resolve"===n){f("[".concat(e,"]: Complete ").concat(r));var s=a;"recognize"===o?s=c(a):"getPDF"===o&&(s=Array.from(i({},a,{length:Object.keys(a).length}))),k[o]({jobId:r,data:s})}else if("reject"===n){if(j[o](a),!x)throw Error(a);x(a)}else"progress"===n&&h(a)}),{id:e,worker:L,setResolve:O,setReject:S,load:function(t){return T(u({id:t,action:"load",payload:{options:E}}))},loadLanguage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"eng",e=arguments.length>1?arguments[1]:void 0;return T(u({id:e,action:"loadLanguage",payload:{langs:t,options:E}}))},initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"eng",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,r=arguments.length>2?arguments[2]:void 0;return T(u({id:r,action:"initialize",payload:{langs:t,oem:e}}))},setParameters:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return T(u({id:e,action:"setParameters",payload:{params:t}}))},recognize:A,getPDF:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Tesseract OCR Result",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0;return T(u({id:r,action:"getPDF",payload:{title:t,textonly:e}}))},detect:_,terminate:R}}},536:function(t,e){t.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},537:function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},538:function(t,e,r){"use strict";var n=r(262),o=r(792),i=r(794),a=r(795),s=r(796),c=r(539);t.exports=function(t){return new Promise(function(e,u){var f=t.data,l=t.headers;n.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",d=t.auth.password||"";l.Authorization="Basic "+btoa(h+":"+d)}if(p.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,n={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:t,request:p};o(e,u,n),p=null}},p.onerror=function(){u(c("Network Error",t,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var m=r(797),v=(t.withCredentials||s(t.url))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;v&&(l[t.xsrfHeaderName]=v)}if("setRequestHeader"in p&&n.forEach(l,function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete l[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(g){if("json"!==t.responseType)throw g}"function"===typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),u(t),p=null)}),void 0===f&&(f=null),p.send(f)})}},539:function(t,e,r){"use strict";var n=r(793);t.exports=function(t,e,r,o,i){var a=new Error(t);return n(a,e,r,o,i)}},540:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},541:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},772:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?h:l,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",p="executing",h="completed",d={};function m(){}function v(){}function g(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==r&&n.call(b,i)&&(y=b);var x=g.prototype=m.prototype=Object.create(y);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,a){var s=u(t[r],t,o);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,g[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o){var i=new k(c(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[s]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},773:function(t,e,r){var n=r(64),o=r(285),i=r(348),a=this,s=r(534),c=r(444).log,u=r(443),f=0;t.exports=function(){var t=u("Scheduler",f),e={},r={},l=[];f+=1;var p=function(){return Object.keys(e).length},h=function(){if(0!==l.length)for(var t=Object.keys(e),n=0;n<t.length;n+=1)if("undefined"===typeof r[t[n]]){l[0](e[t[n]]);break}},d=function(e,u){return new Promise(function(f,p){var d=s({action:e,payload:u});l.push(function(){var t=i(n.mark(function t(i){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l.shift(),r[i.id]=d,t.prev=2,t.t0=f,t.next=6,i[e].apply(a,[].concat(o(u),[d.id]));case 6:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 10:t.prev=10,t.t2=t.catch(2),p(t.t2);case 13:return t.prev=13,delete r[i.id],h(),t.finish(13);case 17:case"end":return t.stop()}},t,null,[[2,10,13,17]])}));return function(e){return t.apply(this,arguments)}}()),c("[".concat(t,"]: Add ").concat(d.id," to JobQueue")),c("[".concat(t,"]: JobQueue length=").concat(l.length)),h()})};return{addWorker:function(r){return e[r.id]=r,c("[".concat(t,"]: Add ").concat(r.id)),c("[".concat(t,"]: Number of workers=").concat(p())),h(),r.id},addJob:function(){var e=i(n.mark(function e(r){var o,i,a,s=arguments;return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==p()){e.next=2;break}throw Error("[".concat(t,"]: You need to have at least one worker before adding jobs"));case 2:for(o=s.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=s[a];return e.abrupt("return",d(r,i));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),terminate:function(){var t=i(n.mark(function t(){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Object.keys(e).forEach(function(){var t=i(n.mark(function t(r){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e[r].terminate();case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),l=[];case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getQueueLen:function(){return l.length},getNumWorkers:p}}},774:function(t,e,r){var n=r(234),o="browser"===r(775)("type")?r(445):function(t){return t};t.exports=function(t){var e=n({},t);return["corePath","workerPath","langPath"].forEach(function(r){"undefined"!==typeof t[r]&&(e[r]=o(e[r]))}),e}},775:function(t,e){t.exports=function(t){var e={type:"undefined"!==typeof window&&"undefined"!==typeof window.document?"browser":"node"};return"undefined"===typeof t?e:e[t]}},776:function(t,e,r){var n=r(234);t.exports=function(t){var e=[],r=[],o=[],i=[],a=[];return t.blocks.forEach(function(s){s.paragraphs.forEach(function(e){e.lines.forEach(function(r){r.words.forEach(function(o){o.symbols.forEach(function(i){a.push(n({},i,{page:t,block:s,paragraph:e,line:r,word:o}))}),i.push(n({},o,{page:t,block:s,paragraph:e,line:r}))}),o.push(n({},r,{page:t,block:s,paragraph:e}))}),r.push(n({},e,{page:t,block:s}))}),e.push(n({},s,{page:t}))}),n({},t,{blocks:e,paragraphs:r,lines:o,words:i,symbols:a})}},777:function(t,e,r){var n=r(536);t.exports={defaultOEM:n.DEFAULT}},778:function(t,e,r){var n=r(779),o=r(782),i=r(783),a=r(784),s=r(785),c=r(786);t.exports={defaultOptions:n,spawnWorker:o,terminateWorker:i,onMessage:a,send:s,loadImage:c}},779:function(t,e,r){(function(e){var n=r(234),o=r(445),i=r(780),a=i.version,s=i.dependencies,c=r(781);t.exports=n({},c,{workerPath:"undefined"!==typeof e&&"development"===Object({NODE_ENV:"production",PUBLIC_URL:"."}).TESS_ENV?o("/dist/worker.dev.js?nocache=".concat(Math.random().toString(36).slice(3))):"https://unpkg.com/tesseract.js@v".concat(a,"/dist/worker.min.js"),corePath:"https://unpkg.com/tesseract.js-core@v".concat(s["tesseract.js-core"].substring(1),"/tesseract-core.").concat("object"===typeof WebAssembly?"wasm":"asm",".js")})}).call(this,r(289))},780:function(t){t.exports={_from:"tesseract.js@2.0.0",_id:"tesseract.js@2.0.0",_inBundle:!1,_integrity:"sha1-PHiIZa+6o/OX656qecjxlD+yq5k=",_location:"/tesseract.js",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"tesseract.js@2.0.0",name:"tesseract.js",escapedName:"tesseract.js",rawSpec:"2.0.0",saveSpec:null,fetchSpec:"2.0.0"},_requiredBy:["#USER","/"],_resolved:"https://registry.npm.taobao.org/tesseract.js/download/tesseract.js-2.0.0.tgz",_shasum:"3c788865afbaa3f397eb9eaa79c8f1943fb2ab99",_spec:"tesseract.js@2.0.0",_where:"D:\\web2019\\arktool\\ark-tool",author:"",browser:{"./src/worker/node/index.js":"./src/worker/browser/index.js"},bugs:{url:"https://github.com/naptha/tesseract.js/issues"},bundleDependencies:!1,collective:{type:"opencollective",url:"https://opencollective.com/tesseractjs"},contributors:[{name:"jeromewu"}],dependencies:{axios:"^0.18.0","bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-url":"1.2.2","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^2.0.0",zlibjs:"^0.3.1"},deprecated:!1,description:"Pure Javascript Multilingual OCR",devDependencies:{"@babel/core":"^7.7.7","@babel/preset-env":"^7.7.7",acorn:"^6.4.0","babel-loader":"^8.0.6",cors:"^2.8.5",eslint:"^5.16.0","eslint-config-airbnb":"^17.1.1","eslint-plugin-import":"^2.19.1","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-react":"^7.17.0","expect.js":"^0.3.1",express:"^4.17.1",mocha:"^5.2.0","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5",nyc:"^13.3.0",rimraf:"^2.7.1","wait-on":"^3.3.0",webpack:"^4.41.4","webpack-cli":"^3.3.10","webpack-dev-middleware":"^3.7.2"},homepage:"https://github.com/naptha/tesseract.js",jsdelivr:"dist/tesseract.min.js",license:"Apache-2.0",main:"src/index.js",name:"tesseract.js",repository:{type:"git",url:"git+https://github.com/naptha/tesseract.js.git"},scripts:{build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",lint:"eslint src",postinstall:"opencollective-postinstall || true",prepublishOnly:"npm run build",start:"node scripts/server.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js"},types:"src/index.d.ts",unpkg:"dist/tesseract.min.js",version:"2.0.0"}},781:function(t,e){t.exports={langPath:"https://tessdata.projectnaptha.com/4.0.0",workerBlobURL:!0,logger:function(){}}},782:function(t,e){t.exports=function(t){var e,r=t.workerPath,n=t.workerBlobURL;if(Blob&&URL&&n){var o=new Blob(['importScripts("'.concat(r,'");')],{type:"application/javascript"});e=new Worker(URL.createObjectURL(o))}else e=new Worker(r);return e}},783:function(t,e){t.exports=function(t){t.terminate()}},784:function(t,e){t.exports=function(t,e){t.onmessage=function(t){var r=t.data;e(r)}}},785:function(t,e,r){var n=r(64),o=r(348);t.exports=function(){var t=o(n.mark(function t(e,r){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.postMessage(r);case 1:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()},786:function(t,e,r){var n=r(64),o=r(348),i=r(787),a=r(445),s=function(t){return new Promise(function(e,r){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(t){var e=t.target.error.code;r(Error("File could not be read! Code=".concat(e)))},n.readAsArrayBuffer(t)})},c=function(){var t=o(n.mark(function t(e){var r,u,f;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e,"undefined"!==typeof e){t.next=3;break}return t.abrupt("return","undefined");case 3:if("string"!==typeof e){t.next=15;break}if(!/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)){t.next=8;break}r=atob(e.split(",")[1]).split("").map(function(t){return t.charCodeAt(0)}),t.next=13;break;case 8:return t.next=10,i.get(a(e),{responseType:"arraybuffer"});case 10:u=t.sent,f=u.data,r=f;case 13:t.next=33;break;case 15:if(!(e instanceof HTMLElement)){t.next=29;break}if("IMG"!==e.tagName){t.next=20;break}return t.next=19,c(e.src);case 19:r=t.sent;case 20:if("VIDEO"!==e.tagName){t.next=24;break}return t.next=23,c(e.poster);case 23:r=t.sent;case 24:if("CANVAS"!==e.tagName){t.next=27;break}return t.next=27,new Promise(function(t){e.toBlob(function(){var e=o(n.mark(function e(o){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(o);case 2:r=e.sent,t();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())});case 27:t.next=33;break;case 29:if(!(e instanceof File||e instanceof Blob)){t.next=33;break}return t.next=32,s(e);case 32:r=t.sent;case 33:return t.abrupt("return",new Uint8Array(r));case 34:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();t.exports=c},787:function(t,e,r){t.exports=r(788)},788:function(t,e,r){"use strict";var n=r(262),o=r(537),i=r(790),a=r(446);function s(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r}var c=s(a);c.Axios=i,c.create=function(t){return s(n.merge(a,t))},c.Cancel=r(541),c.CancelToken=r(803),c.isCancel=r(540),c.all=function(t){return Promise.all(t)},c.spread=r(804),t.exports=c,t.exports.default=c},789:function(t,e){t.exports=function(t){return null!=t&&null!=t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},790:function(t,e,r){"use strict";var n=r(446),o=r(262),i=r(798),a=r(799);function s(t){this.defaults=t,this.interceptors={request:new i,response:new i}}s.prototype.request=function(t){"string"===typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(n,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[a,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},o.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,r){return this.request(o.merge(r||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,r,n){return this.request(o.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=s},791:function(t,e,r){"use strict";var n=r(262);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},792:function(t,e,r){"use strict";var n=r(539);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},793:function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t}},794:function(t,e,r){"use strict";var n=r(262);function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var a=[];n.forEach(e,function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},795:function(t,e,r){"use strict";var n=r(262),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,a={};return t?(n.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}}),a):a}},796:function(t,e,r){"use strict";var n=r(262);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},797:function(t,e,r){"use strict";var n=r(262);t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},798:function(t,e,r){"use strict";var n=r(262);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},799:function(t,e,r){"use strict";var n=r(262),o=r(800),i=r(540),a=r(446),s=r(801),c=r(802);function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!s(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},800:function(t,e,r){"use strict";var n=r(262);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},801:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},802:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},803:function(t,e,r){"use strict";var n=r(541);function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new n(t),e(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},804:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},805:function(t,e,r){var n=r(64),o=r(348),i=r(535),a=function(){var t=o(n.mark(function t(e,r,a){var s;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=i(a),t.next=3,s.load();case 3:return t.next=5,s.loadLanguage(r);case 5:return t.next=7,s.initialize(r);case 7:return t.abrupt("return",s.recognize(e).finally(o(n.mark(function t(){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.terminate();case 2:case"end":return t.stop()}},t)}))));case 8:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}(),s=function(){var t=o(n.mark(function t(e,r){var a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=i(r),t.next=3,a.load();case 3:return t.next=5,a.loadLanguage("osd");case 5:return t.next=7,a.initialize("osd");case 7:return t.abrupt("return",a.detect(e).finally(o(n.mark(function t(){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.terminate();case 2:case"end":return t.stop()}},t)}))));case 8:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}();t.exports={recognize:a,detect:s}},806:function(t,e){t.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12"}},885:function(t,e,r){var n=r(234);r(772);var o=r(773),i=r(535),a=r(805),s=r(536),c=r(806),u=r(444).setLogging;t.exports=n({OEM:s,PSM:c,createScheduler:o,createWorker:i,setLogging:u},a)}}]);