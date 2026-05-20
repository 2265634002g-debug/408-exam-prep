var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},se={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=se,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function pe(e,t){ue++,le[ue]=e.current,e.current=t}var me=de(null),he=de(null),ge=de(null),_e=de(null);function ve(e,t){switch(pe(ge,t),pe(he,e),pe(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?H(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=H(t),e=U(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(me),pe(me,e)}function ye(){fe(me),fe(he),fe(ge)}function be(e){e.memoizedState!==null&&pe(_e,e);var t=me.current,n=U(t,e.type);t!==n&&(pe(he,e),pe(me,n))}function xe(e){he.current===e&&(fe(me),fe(he)),_e.current===e&&(fe(_e),np._currentValue=ce)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=se.p;return e===0?(e=window.event,e===void 0?32:_p(e.type)):e}function pt(e,t){var n=se.p;try{return se.p=e,t()}finally{se.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=J(e);e!==null;){if(n=e[ht])return n;e=J(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(Pu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=m({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=m({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(m({},In,{dataTransfer:0})),zn=On(m({},jn,{relatedTarget:0})),Bn=On(m({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(m({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(m({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(m({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(m({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(m({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(m({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(m({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(m({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function A(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!tr&&A(e,t)?(e=wn(),Cn=Sn=xn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Bd(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){Md(e,0)}function _r(e){if(Wt(Et(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(vn){var br;if(vn){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,dn(e)),gn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=vn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Gt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Bd(zr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},j={};vn&&(j=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function Kr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in j)return Gr[e]=t[n];return e}var qr=Kr(`animationend`),M=Kr(`animationiteration`),Jr=Kr(`animationstart`),Yr=Kr(`transitionrun`),Xr=Kr(`transitionstart`),Zr=Kr(`transitioncancel`),Qr=Kr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),jt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<Eu)throw Eu=0,Du=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=qf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=mi(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=mi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-Ke(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,Bi=null,Vi=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Nd(`cancel`,t),Nd(`close`,t);break;case`iframe`:case`object`:case`embed`:Nd(`load`,t);break;case`video`:case`audio`:for(n=0;n<Ad.length;n++)Nd(Ad[n],t);break;case`source`:Nd(`error`,t);break;case`img`:case`image`:case`link`:Nd(`error`,t),Nd(`load`,t);break;case`details`:Nd(`toggle`,t);break;case`input`:Nd(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Nd(`invalid`,t);break;case`textarea`:Nd(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Kd(t.textContent,n)?(r.popover!=null&&(Nd(`beforetoggle`,t),Nd(`toggle`,t)),r.onScroll!=null&&Nd(`scroll`,t),r.onScrollEnd!=null&&Nd(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:zi=zi.return}}function Ji(e){if(e!==zi)return!1;if(!Vi)return qi(e),Vi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||$d(e.type,e.memoizedProps)),n=!n),n&&Bi&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Bi=gf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Bi=gf(e)}else t===27?(t=Bi,K(e.type)?(e=hf,hf=null,Bi=e):Bi=t):Bi=zi?mf(e.stateNode.nextSibling):null;return!0}function Yi(){Bi=zi=null,Vi=!1}function Xi(){var e=Hi;return e!==null&&(fu===null?fu=e:fu.push.apply(fu,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=de(null),$i=null,ea=null;function ta(e,t,n){pe(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,fe(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[np]:e.push(np))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,ma={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new da,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=Td(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=k.S;k.S=function(e,t){hu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=de(null);function Ea(){var e=Ta.current;return e===null?Xl.pooledCache:e}function Da(e,t){t===null?pe(Ta,Ta.current):pe(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:ma._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),N={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=Xl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,ka}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,ka):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===ka||e===ja)throw Error(i(483))}var P=null,Ra=0;function za(e){var t=Ra;return Ra+=1,P===null&&(P=[]),Na(P,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Pa(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case O:return t=Pa(t),f(e,t,n)}if(oe(t)||re(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===C)return f(e,la(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Pa(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===C)return p(e,t,la(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Pa(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===C)return m(e,t,n,la(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Vi&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Vi&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Vi&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Vi&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Vi&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Vi&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Pa(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===C)return b(e,r,la(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return P=null,i}catch(t){if(t===ka||t===ja)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=ba;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Ql&f)===f:(r&f)===f){f!==0&&f===ya&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ou|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=de(null),io=de(0);function ao(e,t){e=iu,pe(io,e),pe(ro,t),iu=e|t.baseLanes}function oo(){pe(io,iu),pe(ro,ro.current)}function so(){iu=io.current,fe(ro),fe(io)}var co=de(null),lo=null;function uo(e){var t=e.alternate;pe(go,go.current&1),pe(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){pe(go,go.current),pe(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(pe(go,go.current),pe(co,e),lo===null&&(lo=e)):mo(e)}function mo(){pe(go,go.current),pe(co,co.current)}function ho(e){fe(co),lo===e&&(lo=null),fe(go)}var go=de(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||df(n)||ff(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,yo=null,bo=null,xo=!1,So=!1,Co=!1,wo=0,To=0,Eo=null,Do=0;function Oo(){throw Error(i(321))}function ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Ao(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?qs:Js,Co=!1,a=n(r,i),Co=!1,So&&(a=Mo(t,n,r,i)),jo(e),a}function jo(e){k.H=Ks;var t=yo!==null&&yo.next!==null;if(vo=0,bo=yo=F=null,xo=!1,To=0,Eo=null,t)throw Error(i(300));e===null||dc||(e=e.dependencies,e!==null&&oa(e)&&(dc=!0))}function Mo(e,t,n,r){F=e;var a=0;do{if(So&&(Eo=null),To=0,So=!1,25<=a)throw Error(i(301));if(a+=1,bo=yo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Ys,o=t(n,r)}while(So);return o}function No(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Bo(t):t,e=e.useState()[0],(yo===null?null:yo.memoizedState)!==e&&(F.flags|=1024),t}function Po(){var e=wo!==0;return wo=0,e}function Fo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Io(e){if(xo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xo=!1}vo=0,bo=yo=F=null,So=!1,To=wo=0,Eo=null}function Lo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bo===null?F.memoizedState=bo=e:bo=bo.next=e,bo}function Ro(){if(yo===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=yo.next;var t=bo===null?F.memoizedState:bo.next;if(t!==null)bo=t,yo=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));yo=e,e={memoizedState:yo.memoizedState,baseState:yo.baseState,baseQueue:yo.baseQueue,queue:yo.queue,next:null},bo===null?F.memoizedState=bo=e:bo=bo.next=e}return bo}function zo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var t=To;return To+=1,Eo===null&&(Eo=[]),e=Na(Eo,e,t),t=F,(bo===null?t.memoizedState:bo.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?qs:Js),e}function Vo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Bo(e);if(e.$$typeof===C)return ca(e)}throw Error(i(438,String(e)))}function Ho(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=zo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Uo(e,t){return typeof t==`function`?t(e):t}function Wo(e){return Go(Ro(),yo,e)}function Go(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(Ql&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((vo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,ou|=p;f=u.action,Co&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,ou|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(dc=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ko(e){var t=Ro(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(dc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qo(e,t,n){var r=F,a=Ro(),o=Vi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((yo||a).memoizedState,n);if(s&&(a.memoizedState=n,dc=!0),a=a.queue,vs(Xo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||bo!==null&&bo.memoizedState.tag&1){if(r.flags|=2048,ps(9,{destroy:void 0},Yo.bind(null,r,a,n,t),null),Xl===null)throw Error(i(349));o||vo&127||Jo(r,t,n)}return n}function Jo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=zo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yo(e,t,n,r){t.value=n,t.getSnapshot=r,Zo(t)&&Qo(e)}function Xo(e,t,n){return n(function(){Zo(t)&&Qo(e)})}function Zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Qo(e){var t=li(e,2);t!==null&&ku(t,e,2)}function $o(e){var t=Lo();if(typeof e==`function`){var n=e;if(e=n(),Co){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t}function es(e,t,n,r){return e.baseState=n,Go(e,yo,typeof r==`function`?r:Uo)}function ts(e,t,n,r,a){if(Us(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ns(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ns(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),rs(e,t,s)}catch(n){as(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),rs(e,t,a)}catch(n){as(e,t,n)}}function rs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){is(e,t,n)},function(n){return as(e,t,n)}):is(e,t,n)}function is(e,t,n){t.status=`fulfilled`,t.value=n,os(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ns(e,n)))}function as(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,os(t),t=t.next;while(t!==r)}e.action=null}function os(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ss(e,t){return t}function cs(e,t){if(Vi){var n=Xl.formState;if(n!==null){a:{var r=F;if(Vi){if(Bi){b:{for(var i=Bi,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=mf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Bi=mf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Lo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:t},n.queue=r,n=Bs.bind(null,F,r),r.dispatch=n,r=$o(!1),a=Hs.bind(null,F,!1,r.queue),r=Lo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ts.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ls(e){return us(Ro(),yo,e)}function us(e,t,n){if(t=Go(e,t,ss)[0],e=Wo(Uo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Bo(t)}catch(e){throw e===ka?ja:e}else r=t;t=Ro();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ps(9,{destroy:void 0},ds.bind(null,i,n),null)),[r,a,e]}function ds(e,t){e.action=t}function fs(e){var t=Ro(),n=yo;if(n!==null)return us(t,n,e);Ro(),t=t.memoizedState,n=Ro();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ps(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=zo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ms(){return Ro().memoizedState}function hs(e,t,n,r){var i=Lo();F.flags|=e,i.memoizedState=ps(1|t,{destroy:void 0},n,r===void 0?null:r)}function gs(e,t,n,r){var i=Ro();r=r===void 0?null:r;var a=i.memoizedState.inst;yo!==null&&r!==null&&ko(r,yo.memoizedState.deps)?i.memoizedState=ps(t,a,n,r):(F.flags|=e,i.memoizedState=ps(1|t,a,n,r))}function _s(e,t){hs(8390656,8,e,t)}function vs(e,t){gs(2048,8,e,t)}function ys(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=zo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function bs(e){var t=Ro().memoizedState;return ys({ref:t,nextImpl:e}),function(){if(Yl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function xs(e,t){return gs(4,2,e,t)}function Ss(e,t){return gs(4,4,e,t)}function Cs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ws(e,t,n){n=n==null?null:n.concat([e]),gs(4,4,Cs.bind(null,t,e),n)}function Ts(){}function Es(e,t){var n=Ro();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ds(e,t){var n=Ro();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ko(t,r[1]))return r[0];if(r=e(),Co){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Os(e,t,n){return n===void 0||vo&1073741824&&!(Ql&261930)?e.memoizedState=t:(e.memoizedState=n,e=I(),F.lanes|=e,ou|=e,n)}function ks(e,t,n,r){return Ar(n,t)?n:ro.current===null?!(vo&42)||vo&1073741824&&!(Ql&261930)?(dc=!0,e.memoizedState=n):(e=I(),F.lanes|=e,ou|=e,t):(e=Os(e,n,r),Ar(e,t)||(dc=!0),e)}function As(e,t,n,r,i){var a=se.p;se.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Hs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Vs(e,t,Ca(c,r),Ou(e)):Vs(e,t,r,Ou(e))}catch(n){Vs(e,t,{then:function(){},status:`rejected`,reason:n},Ou())}finally{se.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function js(){}function Ms(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ns(e).queue;As(e,a,t,ce,n===null?js:function(){return Ps(e),n(r)})}function Ns(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ps(e){var t=Ns(e);t.next===null&&(t=e.alternate.memoizedState),Vs(e,t.next.queue,{},Ou())}function Fs(){return ca(np)}function Is(){return Ro().memoizedState}function Ls(){return Ro().memoizedState}function Rs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ou();e=Ja(n);var r=Ya(t,e,n);r!==null&&(ku(r,t,n),Xa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function zs(e,t,n){var r=Ou();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Us(e)?Ws(t,n):(n=ci(e,t,n,r),n!==null&&(ku(n,e,r),Gs(n,t,r)))}function Bs(e,t,n){Vs(e,t,n,Ou())}function Vs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Us(e))Ws(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return si(e,t,i,0),Xl===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return ku(n,e,r),Gs(n,t,r),!0}return!1}function Hs(e,t,n,r){if(r={lane:2,revertLane:Td(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Us(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&ku(t,e,2)}function Us(e){var t=e.alternate;return e===F||t!==null&&t===F}function Ws(e,t){So=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Ks={readContext:ca,use:Vo,useCallback:Oo,useContext:Oo,useEffect:Oo,useImperativeHandle:Oo,useLayoutEffect:Oo,useInsertionEffect:Oo,useMemo:Oo,useReducer:Oo,useRef:Oo,useState:Oo,useDebugValue:Oo,useDeferredValue:Oo,useTransition:Oo,useSyncExternalStore:Oo,useId:Oo,useHostTransitionStatus:Oo,useFormState:Oo,useActionState:Oo,useOptimistic:Oo,useMemoCache:Oo,useCacheRefresh:Oo};Ks.useEffectEvent=Oo;var qs={readContext:ca,use:Vo,useCallback:function(e,t){return Lo().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:_s,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),hs(4194308,4,Cs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){hs(4,2,e,t)},useMemo:function(e,t){var n=Lo();t=t===void 0?null:t;var r=e();if(Co){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Lo();if(n!==void 0){var i=n(t);if(Co){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=zs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Lo();return e={current:e},t.memoizedState=e},useState:function(e){e=$o(e);var t=e.queue,n=Bs.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ts,useDeferredValue:function(e,t){return Os(Lo(),e,t)},useTransition:function(){var e=$o(!1);return e=As.bind(null,F,e.queue,!0,!1),Lo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Lo();if(Vi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Xl===null)throw Error(i(349));Ql&127||Jo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,_s(Xo.bind(null,r,o,e),[e]),r.flags|=2048,ps(9,{destroy:void 0},Yo.bind(null,r,o,n,t),null),n},useId:function(){var e=Lo(),t=Xl.identifierPrefix;if(Vi){var n=Ni,r=Mi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=wo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Do++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Fs,useFormState:cs,useActionState:cs,useOptimistic:function(e){var t=Lo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ho,useCacheRefresh:function(){return Lo().memoizedState=Rs.bind(null,F)},useEffectEvent:function(e){var t=Lo(),n={impl:e};return t.memoizedState=n,function(){if(Yl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Js={readContext:ca,use:Vo,useCallback:Es,useContext:ca,useEffect:vs,useImperativeHandle:ws,useInsertionEffect:xs,useLayoutEffect:Ss,useMemo:Ds,useReducer:Wo,useRef:ms,useState:function(){return Wo(Uo)},useDebugValue:Ts,useDeferredValue:function(e,t){return ks(Ro(),yo.memoizedState,e,t)},useTransition:function(){var e=Wo(Uo)[0],t=Ro().memoizedState;return[typeof e==`boolean`?e:Bo(e),t]},useSyncExternalStore:qo,useId:Is,useHostTransitionStatus:Fs,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){return es(Ro(),yo,e,t)},useMemoCache:Ho,useCacheRefresh:Ls};Js.useEffectEvent=bs;var Ys={readContext:ca,use:Vo,useCallback:Es,useContext:ca,useEffect:vs,useImperativeHandle:ws,useInsertionEffect:xs,useLayoutEffect:Ss,useMemo:Ds,useReducer:Ko,useRef:ms,useState:function(){return Ko(Uo)},useDebugValue:Ts,useDeferredValue:function(e,t){var n=Ro();return yo===null?Os(n,e,t):ks(n,yo.memoizedState,e,t)},useTransition:function(){var e=Ko(Uo)[0],t=Ro().memoizedState;return[typeof e==`boolean`?e:Bo(e),t]},useSyncExternalStore:qo,useId:Is,useHostTransitionStatus:Fs,useFormState:fs,useActionState:fs,useOptimistic:function(e,t){var n=Ro();return yo===null?(n.baseState=e,[e,n.queue.dispatch]):es(n,yo,e,t)},useMemoCache:Ho,useCacheRefresh:Ls};Ys.useEffectEvent=bs;function Xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ou(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(ku(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ou(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(ku(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ou(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(ku(t,e,n),Xa(t,e,n))}};function Qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function $s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zs.enqueueReplaceState(t,t.state,null)}function ec(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function tc(e){ni(e)}function nc(e){console.error(e)}function rc(e){ni(e)}function ic(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ac(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function oc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){ic(e,t)},n}function sc(e){return e=Ja(e),e.tag=3,e}function cc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ac(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ac(t,n,r),typeof i!=`function`&&(vu===null?vu=new Set([this]):vu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function lc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Vu():n.alternate===null&&au===0&&(au=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===N?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),ad(e,r,a)),!1;case 22:return n.flags|=65536,r===N?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),ad(e,r,a)),!1}throw Error(i(435,n.tag))}return ad(e,r,a),Vu(),!1}if(Vi)return t=co.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=oc(e.stateNode,r,a),Za(e,a),au!==4&&(au=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),du===null?du=[o]:du.push(o),au!==4&&(au=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=oc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vu===null||!vu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=sc(a),cc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var uc=Error(i(461)),dc=!1;function fc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function pc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Ao(e,t,n,o,a,i),s=Po(),e!==null&&!dc?(Fo(e,t,i),Lc(e,t,i)):(Vi&&s&&Ii(t),t.flags|=1,fc(e,t,r,i),t.child)}function mc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,hc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Rc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Lc(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(dc=!1,t.pendingProps=r=a,Rc(e,i))e.flags&131072&&(dc=!0);else return t.lanes=e.lanes,Lc(e,t,i)}return Cc(e,t,n,r,i)}function gc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return vc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,vc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),oo(),mo(t)):(Da(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return fc(e,t,i,n),t.child}function _c(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:ma._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),oo(),po(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function yc(e,t){return t=Mc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function bc(e,t,n){return Ua(t,e.child,null,n),e=yc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function xc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(Vi){if(r.mode===`hidden`)return e=yc(t,r),t.lanes=536870912,_c(null,e);if(fo(t),(e=Bi)?(e=uf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,Bi=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return yc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=bc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(dc||aa(e,t,n,!1),a=(n&e.childLanes)!==0,dc||a){if(r=Xl,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),ku(r,e,s),uc;Vu(),t=bc(e,t,n)}else e=o.treeContext,Bi=mf(s.nextSibling),zi=t,Vi=!0,Hi=null,Ui=!1,e!==null&&Ri(t,e),t=yc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cc(e,t,n,r,i){return sa(t),n=Ao(e,t,n,r,void 0,i),r=Po(),e!==null&&!dc?(Fo(e,t,i),Lc(e,t,i)):(Vi&&r&&Ii(t),t.flags|=1,fc(e,t,n,i),t.child)}function wc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=Mo(t,r,n,i),jo(e),r=Po(),e!==null&&!dc?(Fo(e,t,a),Lc(e,t,a)):(Vi&&r&&Ii(t),t.flags|=1,fc(e,t,n,a),t.child)}function Tc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Zs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Xs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Zs.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=ec(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&$s(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Xs(t,n,d,r),l=t.memoizedState),(c=Ga||Qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=ec(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&$s(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Xs(t,n,s,r),p=t.memoizedState),(u=Ga||Qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Sc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):fc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Lc(e,t,i),e}function Ec(e,t,n,r){return Yi(),t.flags|=256,fc(e,t,n,r),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oc(e){return{baseLanes:e,cachePool:Oa()}}function kc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=lu),e}function Ac(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(go.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(Vi){if(a?uo(t):mo(t),(e=Bi)?(e=uf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,Bi=null)):e=null,e===null)throw Gi(t);return ff(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Mc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Oc(n),r.childLanes=kc(e,s,n),t.memoizedState=Dc,_c(null,r)):(uo(t),jc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Nc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Mc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Oc(n),r.childLanes=kc(e,s,n),t.memoizedState=Dc,t=_c(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),ff(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Nc(e,t,n)}else if(dc||aa(e,t,n,!1),s=(n&e.childLanes)!==0,dc||s){if(s=Xl,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),ku(s,e,r),uc;df(c)||Vu(),t=Nc(e,t,n)}else df(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Bi=mf(c.nextSibling),zi=t,Vi=!0,Hi=null,Ui=!1,e!==null&&Ri(t,e),t=jc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,_c(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Oc(n):(a=c.cachePool,a===null?a=Oa():(l=ma._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=kc(e,s,n),t.memoizedState=Dc,_c(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function jc(e,t){return t=Mc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Mc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Nc(e,t,n){return Ua(t,e.child,null,n),e=jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Fc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ic(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=go.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,pe(go,o),fc(e,t,r,n),r=Vi?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,n,t);else if(e.tag===19)Pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fc(t,!0,n,null,a,r);break;case`together`:Fc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Lc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ou|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function zc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ta(t,ma,e.memoizedState.cache),Yi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=Lc(e,t,n),e===null?null:e.sibling):Ac(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ic(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(go,go.current),r)break;return null;case 22:return t.lanes=0,gc(e,t,n,t.pendingProps);case 24:ta(t,ma,e.memoizedState.cache)}return Lc(e,t,n)}function Bc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)dc=!0;else{if(!Rc(e,n)&&!(t.flags&128))return dc=!1,zc(e,t,n);dc=!!(e.flags&131072)}else dc=!1,Vi&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=ec(e,r),t.tag=1,t=Tc(null,t,e,r,n)):(t.tag=0,t=Cc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=pc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=mc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return Cc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=ec(r,t.pendingProps),Tc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,ma,r),r!==o.cache&&ia(t,[ma],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Ec(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Zi(a),t=Ec(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Bi=mf(e.firstChild),zi=t,Vi=!0,Hi=null,Ui=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Lc(e,t,n);break a}fc(e,t,r,n)}t=t.child}return t;case 26:return Sc(e,t),e===null?(n=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Vi||(n=t.type,e=t.pendingProps,r=V(ge.current).createElement(n),r[ht]=t,r[gt]=e,Yd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&Vi&&(r=t.stateNode=_f(t.type,t.pendingProps,ge.current),zi=t,Ui=!0,a=Bi,K(t.type)?(hf=a,Bi=mf(r.firstChild)):Bi=a),fc(e,t,t.pendingProps.children,n),Sc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Vi&&((a=r=Bi)&&(r=cf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,zi=t,Bi=mf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,$d(a,o)?r=null:s!==null&&$d(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Ao(e,t,No,null,null,n),np._currentValue=a),Sc(e,t),fc(e,t,r,n),t.child;case 6:return e===null&&Vi&&((e=n=Bi)&&(n=lf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,zi=t,Bi=null,e=!0)),e||Gi(t)),null;case 13:return Ac(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):fc(e,t,r,n),t.child;case 11:return pc(e,t,t.type,t.pendingProps,n);case 7:return fc(e,t,t.pendingProps,n),t.child;case 8:return fc(e,t,t.pendingProps.children,n),t.child;case 12:return fc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),fc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,fc(e,t,r,n),t.child;case 14:return mc(e,t,t.type,t.pendingProps,n);case 15:return hc(e,t,t.type,t.pendingProps,n);case 19:return Ic(e,t,n);case 31:return xc(e,t,n);case 22:return gc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(ma),e===null?(a=Ea(),a===null&&(a=Xl,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ta(t,ma,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,ma,r),r!==a.cache&&ia(t,[ma],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,ma,r))),fc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Vc(e){e.flags|=4}function Hc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Ru())e.flags|=8192;else throw Fa=N,Aa}else e.flags&=-16777217}function Uc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(t))if(Ru())e.flags|=8192;else throw Fa=N,Aa}function Wc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,uu|=t)}function Gc(e,t){if(!Vi)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kc(t),null;case 1:return Kc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(ma),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Vc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),Kc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Vc(t),o===null?(Kc(t),Hc(t,a,null,r,n)):(Kc(t),Uc(t,o))):o?o===e.memoizedState?(Kc(t),t.flags&=-16777217):(Vc(t),Kc(t),Uc(t,o)):(e=e.memoizedProps,e!==r&&Vc(t),Kc(t),Hc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Vc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Kc(t),null}e=me.current,Ji(t)?Ki(t,e):(e=_f(a,r,n),t.stateNode=e,Vc(t))}return Kc(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Vc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Kc(t),null}if(o=me.current,Ji(t))Ki(t,o);else{var s=V(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Yd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Vc(t)}}return Kc(t),Hc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Vc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Kd(e.nodeValue,n)),e||Gi(t,!0)}else e=V(e).createTextNode(r),e[ht]=t,t.stateNode=e}return Kc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Kc(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return Kc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Kc(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wc(t,t.updateQueue),Kc(t),null);case 4:return ye(),e===null&&Id(t.stateNode.containerInfo),Kc(t),null;case 10:return na(t.type),Kc(t),null;case 19:if(fe(go),r=t.memoizedState,r===null)return Kc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Gc(r,!1);else{if(au!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Gc(r,!1),e=o.updateQueue,t.updateQueue=e,Wc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return pe(go,go.current&1|2),Vi&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>gu&&(t.flags|=128,a=!0,Gc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Wc(t,e),Gc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!Vi)return Kc(t),null}else 2*Pe()-r.renderingStartTime>gu&&n!==536870912&&(t.flags|=128,a=!0,Gc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Kc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=go.current,pe(go,a?n&1|2:n&1),Vi&&Pi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Kc(t),t.subtreeFlags&6&&(t.flags|=8192)):Kc(t),n=t.updateQueue,n!==null&&Wc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(ma),Kc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Jc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(ma),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(go),null;case 4:return ye(),null;case 10:return na(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&fe(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(ma),null;case 25:return null;default:return null}}function Yc(e,t){switch(Li(t),t.tag){case 3:na(ma),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:fe(go);break;case 10:na(t.type);break;case 22:case 23:ho(t),so(),e!==null&&fe(Ta);break;case 24:na(ma)}}function Xc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){L(t,t.return,e)}}function Zc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){L(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){L(t,t.return,e)}}function Qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){L(e,e.return,t)}}}function $c(e,t,n){n.props=ec(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){L(e,t,n)}}function el(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){L(e,t,n)}}function tl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){L(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){L(e,t,n)}else n.current=null}function nl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){L(e,e.return,t)}}function rl(e,t,n){try{var r=e.stateNode;Xd(r,e.type,n,t),r[gt]=t}catch(t){L(e,e.return,t)}}function il(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&K(e.type)||e.tag===4}function al(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||il(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&K(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&K(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ol(e,t,n),e=e.sibling;e!==null;)ol(e,t,n),e=e.sibling}function sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&K(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(sl(e,t,n),e=e.sibling;e!==null;)sl(e,t,n),e=e.sibling}function cl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yd(t,r,n),t[ht]=e,t[gt]=n}catch(t){L(e,e.return,t)}}var ll=!1,ul=!1,dl=!1,fl=typeof WeakSet==`function`?WeakSet:Set,pl=null;function ml(e,t){if(e=e.containerInfo,z=dp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(B={focusedElem:e,selectionRange:n},dp=!1,pl=t;pl!==null;)if(t=pl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,pl=e;else for(;pl!==null;){switch(t=pl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=ec(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){L(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)sf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:sf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,pl=e;break}pl=t.return}}function hl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Al(e,n),r&4&&Xc(5,n);break;case 1:if(Al(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){L(n,n.return,e)}else{var i=ec(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){L(n,n.return,e)}}r&64&&Qc(n),r&512&&el(n,n.return);break;case 3:if(Al(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){L(n,n.return,e)}}break;case 27:t===null&&r&4&&cl(n);case 26:case 5:Al(e,n),t===null&&r&4&&nl(n),r&512&&el(n,n.return);break;case 12:Al(e,n);break;case 31:Al(e,n),r&4&&xl(e,n);break;case 13:Al(e,n),r&4&&Sl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=cd.bind(null,n),pf(e,n))));break;case 22:if(r=n.memoizedState!==null||ll,!r){t=t!==null&&t.memoizedState!==null||ul,i=ll;var a=ul;ll=r,(ul=t)&&!a?Ml(e,n,(n.subtreeFlags&8772)!=0):Al(e,n),ll=i,ul=a}break;case 30:break;default:Al(e,n)}}function gl(e){var t=e.alternate;t!==null&&(e.alternate=null,gl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _l=null,vl=!1;function yl(e,t,n){for(n=n.child;n!==null;)bl(e,t,n),n=n.sibling}function bl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:ul||tl(n,t),yl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ul||tl(n,t);var r=_l,i=vl;K(n.type)&&(_l=n.stateNode,vl=!1),yl(e,t,n),vf(n.stateNode),_l=r,vl=i;break;case 5:ul||tl(n,t);case 6:if(r=_l,i=vl,_l=null,yl(e,t,n),_l=r,vl=i,_l!==null)if(vl)try{(_l.nodeType===9?_l.body:_l.nodeName===`HTML`?_l.ownerDocument.body:_l).removeChild(n.stateNode)}catch(e){L(n,t,e)}else try{_l.removeChild(n.stateNode)}catch(e){L(n,t,e)}break;case 18:_l!==null&&(vl?(e=_l,of(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Fp(e)):of(_l,n.stateNode));break;case 4:r=_l,i=vl,_l=n.stateNode.containerInfo,vl=!0,yl(e,t,n),_l=r,vl=i;break;case 0:case 11:case 14:case 15:Zc(2,n,t),ul||Zc(4,n,t),yl(e,t,n);break;case 1:ul||(tl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&$c(n,t,r)),yl(e,t,n);break;case 21:yl(e,t,n);break;case 22:ul=(r=ul)||n.memoizedState!==null,yl(e,t,n),ul=r;break;default:yl(e,t,n)}}function xl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fp(e)}catch(e){L(t,t.return,e)}}}function Sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fp(e)}catch(e){L(t,t.return,e)}}function Cl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fl),t;default:throw Error(i(435,e.tag))}}function wl(e,t){var n=Cl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=ld.bind(null,e,t);t.then(r,r)}})}function Tl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(K(c.type)){_l=c.stateNode,vl=!1;break a}break;case 5:_l=c.stateNode,vl=!1;break a;case 3:case 4:_l=c.stateNode.containerInfo,vl=!0;break a}c=c.return}if(_l===null)throw Error(i(160));bl(o,s,a),_l=null,vl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Dl(t,e),t=t.sibling}var El=null;function Dl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tl(t,e),Ol(e),r&4&&(Zc(3,e,e.return),Xc(3,e),Zc(5,e,e.return));break;case 1:Tl(t,e),Ol(e),r&512&&(ul||n===null||tl(n,n.return)),r&64&&ll&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=El;if(Tl(t,e),Ol(e),r&512&&(ul||n===null||tl(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Yd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Kf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Kf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Y(a,e.type,e.stateNode);else e.stateNode=Vf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&rl(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Y(a,e.type,e.stateNode):Vf(a,r,e.memoizedProps))}break;case 27:Tl(t,e),Ol(e),r&512&&(ul||n===null||tl(n,n.return)),n!==null&&r&4&&rl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tl(t,e),Ol(e),r&512&&(ul||n===null||tl(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){L(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,rl(e,a,n===null?a:n.memoizedProps)),r&1024&&(dl=!0);break;case 6:if(Tl(t,e),Ol(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){L(e,e.return,t)}}break;case 3:if(Gf=null,a=El,El=xf(t.containerInfo),Tl(t,e),El=a,Ol(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fp(t.containerInfo)}catch(t){L(e,e.return,t)}dl&&(dl=!1,kl(e));break;case 4:r=El,El=xf(e.stateNode.containerInfo),Tl(t,e),Ol(e),El=r;break;case 12:Tl(t,e),Ol(e);break;case 31:Tl(t,e),Ol(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wl(e,r)));break;case 13:Tl(t,e),Ol(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(mu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=ll,d=ul;if(ll=u||a,ul=d||l,Tl(t,e),ul=d,ll=u,Ol(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ll||ul||jl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){L(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){L(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?q(m,!0):q(l.stateNode,!1)}catch(e){L(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,wl(e,n))));break;case 19:Tl(t,e),Ol(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wl(e,r)));break;case 30:break;case 21:break;default:Tl(t,e),Ol(e)}}function Ol(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(il(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;sl(e,al(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),sl(e,al(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;ol(e,al(e),s);break;default:throw Error(i(161))}}catch(t){L(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Al(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hl(e,t.alternate,t),t=t.sibling}function jl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zc(4,t,t.return),jl(t);break;case 1:tl(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&$c(t,t.return,n),jl(t);break;case 27:vf(t.stateNode);case 26:case 5:tl(t,t.return),jl(t);break;case 22:t.memoizedState===null&&jl(t);break;case 30:jl(t);break;default:jl(t)}e=e.sibling}}function Ml(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Ml(i,a,n),Xc(4,a);break;case 1:if(Ml(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){L(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){L(r,r.return,e)}}n&&o&64&&Qc(a),el(a,a.return);break;case 27:cl(a);case 26:case 5:Ml(i,a,n),n&&r===null&&o&4&&nl(a),el(a,a.return);break;case 12:Ml(i,a,n);break;case 31:Ml(i,a,n),n&&o&4&&xl(i,a);break;case 13:Ml(i,a,n),n&&o&4&&Sl(i,a);break;case 22:a.memoizedState===null&&Ml(i,a,n),el(a,a.return);break;case 30:break;default:Ml(i,a,n)}t=t.sibling}}function Nl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function Pl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Fl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Il(e,t,n,r),t=t.sibling}function Il(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Fl(e,t,n,r),i&2048&&Xc(9,t);break;case 1:Fl(e,t,n,r);break;case 3:Fl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Fl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){L(t,t.return,e)}}else Fl(e,t,n,r);break;case 31:Fl(e,t,n,r);break;case 13:Fl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Fl(e,t,n,r):(a._visibility|=2,Ll(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Fl(e,t,n,r):Rl(e,t),i&2048&&Nl(o,t);break;case 24:Fl(e,t,n,r),i&2048&&Pl(t.alternate,t);break;default:Fl(e,t,n,r)}}function Ll(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ll(a,o,s,c,i),Xc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ll(a,o,s,c,i)):u._visibility&2?Ll(a,o,s,c,i):Rl(a,o),i&&l&2048&&Nl(o.alternate,o);break;case 24:Ll(a,o,s,c,i),i&&l&2048&&Pl(o.alternate,o);break;default:Ll(a,o,s,c,i)}t=t.sibling}}function Rl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Rl(n,r),i&2048&&Nl(r.alternate,r);break;case 24:Rl(n,r),i&2048&&Pl(r.alternate,r);break;default:Rl(n,r)}t=t.sibling}}var zl=8192;function Bl(e,t,n){if(e.subtreeFlags&zl)for(e=e.child;e!==null;)Vl(e,t,n),e=e.sibling}function Vl(e,t,n){switch(e.tag){case 26:Bl(e,t,n),e.flags&zl&&e.memoizedState!==null&&Yf(n,El,e.memoizedState,e.memoizedProps);break;case 5:Bl(e,t,n);break;case 3:case 4:var r=El;El=xf(e.stateNode.containerInfo),Bl(e,t,n),El=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zl,zl=16777216,Bl(e,t,n),zl=r):Bl(e,t,n));break;default:Bl(e,t,n)}}function Hl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ul(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];pl=r,Kl(r,e)}Hl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wl(e),e=e.sibling}function Wl(e){switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&Zc(9,e,e.return);break;case 3:Ul(e);break;case 12:Ul(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gl(e)):Ul(e);break;default:Ul(e)}}function Gl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];pl=r,Kl(r,e)}Hl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zc(8,t,t.return),Gl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gl(t));break;default:Gl(t)}e=e.sibling}}function Kl(e,t){for(;pl!==null;){var n=pl;switch(n.tag){case 0:case 11:case 15:Zc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,pl=r;else a:for(n=e;pl!==null;){r=pl;var i=r.sibling,a=r.return;if(gl(r),r===n){pl=null;break a}if(i!==null){i.return=a,pl=i;break a}pl=a}}}var ql={getCacheForType:function(e){var t=ca(ma),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(ma).controller.signal}},Jl=typeof WeakMap==`function`?WeakMap:Map,Yl=0,Xl=null,Zl=null,Ql=0,$l=0,eu=null,tu=!1,nu=!1,ru=!1,iu=0,au=0,ou=0,su=0,cu=0,lu=0,uu=0,du=null,fu=null,pu=!1,mu=0,hu=0,gu=1/0,_u=null,vu=null,yu=0,bu=null,xu=null,Su=0,Cu=0,wu=null,Tu=null,Eu=0,Du=null;function Ou(){return Yl&2&&Ql!==0?Ql&-Ql:k.T===null?ft():Td()}function I(){if(lu===0)if(!(Ql&536870912)||Vi){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),lu=e}else lu=536870912;return e=co.current,e!==null&&(e.flags|=32),lu}function ku(e,t,n){(e===Xl&&($l===2||$l===9)||e.cancelPendingCommit!==null)&&(Iu(e,0),Nu(e,Ql,lu,!1)),at(e,n),(!(Yl&2)||e!==Xl)&&(e===Xl&&(!(Yl&2)&&(su|=n),au===4&&Nu(e,Ql,lu,!1)),_d(e))}function Au(e,t,n){if(Yl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Wu(e,t):Hu(e,t,!0),o=r;do{if(a===0){nu&&!r&&Nu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Mu(n)){a=Hu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=du;var l=c.current.memoizedState.isDehydrated;if(l&&(Iu(c,s).flags|=256),s=Hu(c,s,!1),s!==2){if(ru&&!l){c.errorRecoveryDisabledLanes|=o,su|=o,a=4;break a}o=fu,fu=a,o!==null&&(fu===null?fu=o:fu.push.apply(fu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Iu(e,0),Nu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Nu(r,t,lu,!tu);break a;case 2:fu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=mu+300-Pe(),10<a)){if(Nu(r,t,lu,!tu),et(r,0,!0)!==0)break a;Su=t,r.timeoutHandle=tf(ju.bind(null,r,n,fu,_u,pu,t,lu,su,uu,tu,o,`Throttled`,-0,0),a);break a}ju(r,n,fu,_u,pu,t,lu,su,uu,tu,o,null,-0,0)}}break}while(1);_d(e)}function ju(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Vl(t,a,d);var m=(a&62914560)===a?mu-Pe():(a&4194048)===a?hu-Pe():0;if(m=Zf(d,m),m!==null){Su=a,e.cancelPendingCommit=m(Zu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Nu(e,a,o,!l);return}}Zu(e,t,a,n,r,i,o,s,c)}function Mu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nu(e,t,n,r){t&=~cu,t&=~su,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function Pu(){return Yl&6?!0:(vd(0,!1),!1)}function Fu(){if(Zl!==null){if($l===0)var e=Zl.return;else e=Zl,ea=$i=null,Io(e),P=null,Ra=0,e=Zl;for(;e!==null;)Yc(e.alternate,e),e=e.return;Zl=null}}function Iu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,G(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Su=0,Fu(),Xl=e,Zl=n=gi(e.current,null),Ql=t,$l=0,eu=null,tu=!1,nu=tt(e,t),ru=!1,uu=lu=cu=su=ou=au=0,fu=du=null,pu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return iu=t,oi(),n}function Lu(e,t){F=null,k.H=Ks,t===ka||t===ja?(t=Ia(),$l=3):t===Aa?(t=Ia(),$l=4):$l=t===uc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,eu=t,Zl===null&&(au=1,ic(e,wi(t,e.current)))}function Ru(){var e=co.current;return e===null?!0:(Ql&4194048)===Ql?lo===null:(Ql&62914560)===Ql||Ql&536870912?e===lo:!1}function zu(){var e=k.H;return k.H=Ks,e===null?Ks:e}function Bu(){var e=k.A;return k.A=ql,e}function Vu(){au=4,tu||(Ql&4194048)!==Ql&&co.current!==null||(nu=!0),!(ou&134217727)&&!(su&134217727)||Xl===null||Nu(Xl,Ql,lu,!1)}function Hu(e,t,n){var r=Yl;Yl|=2;var i=zu(),a=Bu();(Xl!==e||Ql!==t)&&(_u=null,Iu(e,t)),t=!1;var o=au;a:do try{if($l!==0&&Zl!==null){var s=Zl,c=eu;switch($l){case 8:Fu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=$l;if($l=0,eu=null,Ju(e,s,c,l),n&&nu){o=0;break a}break;default:l=$l,$l=0,eu=null,Ju(e,s,c,l)}}Uu(),o=au;break}catch(t){Lu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,Yl=r,k.H=i,k.A=a,Zl===null&&(Xl=null,Ql=0,oi()),o}function Uu(){for(;Zl!==null;)Ku(Zl)}function Wu(e,t){var n=Yl;Yl|=2;var r=zu(),a=Bu();Xl!==e||Ql!==t?(_u=null,gu=Pe()+500,Iu(e,t)):nu=tt(e,t);a:do try{if($l!==0&&Zl!==null){t=Zl;var o=eu;b:switch($l){case 1:$l=0,eu=null,Ju(e,t,o,1);break;case 2:case 9:if(Ma(o)){$l=0,eu=null,qu(t);break}t=function(){$l!==2&&$l!==9||Xl!==e||($l=7),_d(e)},o.then(t,t);break a;case 3:$l=7;break a;case 4:$l=5;break a;case 7:Ma(o)?($l=0,eu=null,qu(t)):($l=0,eu=null,Ju(e,t,o,7));break;case 5:var s=null;switch(Zl.tag){case 26:s=Zl.memoizedState;case 5:case 27:var c=Zl;if(s?Jf(s):c.stateNode.complete){$l=0,eu=null;var l=c.sibling;if(l!==null)Zl=l;else{var u=c.return;u===null?Zl=null:(Zl=u,Yu(u))}break b}}$l=0,eu=null,Ju(e,t,o,5);break;case 6:$l=0,eu=null,Ju(e,t,o,6);break;case 8:Fu(),au=6;break a;default:throw Error(i(462))}}Gu();break}catch(t){Lu(e,t)}while(1);return ea=$i=null,k.H=r,k.A=a,Yl=n,Zl===null?(Xl=null,Ql=0,oi(),au):0}function Gu(){for(;Zl!==null&&!Me();)Ku(Zl)}function Ku(e){var t=Bc(e.alternate,e,iu);e.memoizedProps=e.pendingProps,t===null?Yu(e):Zl=t}function qu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wc(n,t,t.pendingProps,t.type,void 0,Ql);break;case 11:t=wc(n,t,t.pendingProps,t.type.render,t.ref,Ql);break;case 5:Io(t);default:Yc(n,t),t=Zl=_i(t,iu),t=Bc(n,t,iu)}e.memoizedProps=e.pendingProps,t===null?Yu(e):Zl=t}function Ju(e,t,n,r){ea=$i=null,Io(t),P=null,Ra=0;var i=t.return;try{if(lc(e,i,t,n,Ql)){au=1,ic(e,wi(n,e.current)),Zl=null;return}}catch(t){if(i!==null)throw Zl=i,t;au=1,ic(e,wi(n,e.current)),Zl=null;return}t.flags&32768?(Vi||r===1?e=!0:nu||Ql&536870912?e=!1:(tu=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Xu(t,e)):Yu(t)}function Yu(e){var t=e;do{if(t.flags&32768){Xu(t,tu);return}e=t.return;var n=qc(t.alternate,t,iu);if(n!==null){Zl=n;return}if(t=t.sibling,t!==null){Zl=t;return}Zl=t=e}while(t!==null);au===0&&(au=5)}function Xu(e,t){do{var n=Jc(e.alternate,e);if(n!==null){n.flags&=32767,Zl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zl=e;return}Zl=e=n}while(e!==null);au=6,Zl=null}function Zu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do nd();while(yu!==0);if(Yl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,ot(e,n,o,s,c,l),e===Xl&&(Zl=Xl=null,Ql=0),xu=t,bu=e,Su=n,Cu=o,wu=a,Tu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ud(Re,function(){return rd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=se.p,se.p=2,s=Yl,Yl|=4;try{ml(e,t,n)}finally{Yl=s,se.p=a,k.T=r}}yu=1,Qu(),$u(),ed()}}function Qu(){if(yu===1){yu=0;var e=bu,t=xu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=se.p;se.p=2;var i=Yl;Yl|=4;try{Dl(t,e);var a=B,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}dp=!!z,B=z=null}finally{Yl=i,se.p=r,k.T=n}}e.current=t,yu=2}}function $u(){if(yu===2){yu=0;var e=bu,t=xu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=se.p;se.p=2;var i=Yl;Yl|=4;try{hl(e,t.alternate,t)}finally{Yl=i,se.p=r,k.T=n}}yu=3}}function ed(){if(yu===4||yu===3){yu=0,Ne();var e=bu,t=xu,n=Su,r=Tu;t.subtreeFlags&10256||t.flags&10256?yu=5:(yu=0,xu=bu=null,td(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(vu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=se.p,se.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,se.p=i}}Su&3&&nd(),_d(e),i=e.pendingLanes,n&261930&&i&42?e===Du?Eu++:(Eu=0,Du=e):Eu=0,vd(0,!1)}}function td(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function nd(){return Qu(),$u(),ed(),rd()}function rd(){if(yu!==5)return!1;var e=bu,t=Cu;Cu=0;var n=dt(Su),r=k.T,a=se.p;try{se.p=32>n?32:n,k.T=null,n=wu,wu=null;var o=bu,s=Su;if(yu=0,xu=bu=null,Su=0,Yl&6)throw Error(i(331));var c=Yl;if(Yl|=4,Wl(o.current),Il(o,o.current,s,n),Yl=c,vd(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{se.p=a,k.T=r,td(e,t)}}function id(e,t,n){t=wi(n,t),t=oc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(at(e,2),_d(e))}function L(e,t,n){if(e.tag===3)id(e,e,n);else for(;t!==null;){if(t.tag===3){id(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vu===null||!vu.has(r))){e=wi(n,e),n=sc(2),r=Ya(t,n,2),r!==null&&(cc(n,r,t,e),at(r,2),_d(r));break}}t=t.return}}function ad(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ru=!0,i.add(n),e=od.bind(null,e,t,n),t.then(e,e))}function od(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xl===e&&(Ql&n)===n&&(au===4||au===3&&(Ql&62914560)===Ql&&300>Pe()-mu?!(Yl&2)&&Iu(e,0):cu|=n,uu===Ql&&(uu=0)),_d(e)}function sd(e,t){t===0&&(t=rt()),e=li(e,t),e!==null&&(at(e,t),_d(e))}function cd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sd(e,n)}function ld(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),sd(e,n)}function ud(e,t){return Ae(e,t)}var dd=null,fd=null,pd=!1,md=!1,hd=!1,gd=0;function _d(e){e!==fd&&e.next===null&&(fd===null?dd=fd=e:fd=fd.next=e),md=!0,pd||(pd=!0,wd())}function vd(e,t){if(!hd&&md){hd=!0;do for(var n=!1,r=dd;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Cd(r,a))}else a=Ql,a=et(r,r===Xl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,Cd(r,a));r=r.next}while(n);hd=!1}}function yd(){bd()}function bd(){md=pd=!1;var e=0;gd!==0&&ef()&&(e=gd);for(var t=Pe(),n=null,r=dd;r!==null;){var i=r.next,a=xd(r,t);a===0?(r.next=null,n===null?dd=i:n.next=i,i===null&&(fd=n)):(n=r,(e!==0||a&3)&&(md=!0)),r=i}yu!==0&&yu!==5||vd(e,!1),gd!==0&&(gd=0)}function xd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xl,n=Ql,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&($l===2||$l===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=Sd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function Sd(e,t){if(yu!==0&&yu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(nd()&&e.callbackNode!==n)return null;var r=Ql;return r=et(e,e===Xl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Au(e,r,t),xd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?Sd.bind(null,e):null)}function Cd(e,t){if(nd())return null;Au(e,t,!0)}function wd(){rf(function(){Yl&6?Ae(Ie,yd):bd()})}function Td(){if(gd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),gd=e}return gd}function Ed(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function Dd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function R(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ed((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?Ed(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(gd!==0){var e=o?Dd(i,o):new FormData(i);Ms(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Dd(i,o):new FormData(i),Ms(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Od=0;Od<ei.length;Od++){var kd=ei[Od];ti(kd.toLowerCase(),`on`+(kd[0].toUpperCase()+kd.slice(1)))}ti(qr,`onAnimationEnd`),ti(M,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Ad=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),jd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Ad));function Md(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Nd(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Ld(t,e,2,!1),n.add(r))}function Pd(e,t,n){var r=0;t&&(r|=4),Ld(n,e,r,t)}var Fd=`_reactListening`+Math.random().toString(36).slice(2);function Id(e){if(!e[Fd]){e[Fd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(jd.has(t)||Pd(t,!1,e),Pd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fd]||(t[Fd]=!0,Pd(`selectionchange`,!1,t))}}function Ld(e,t,n,r){switch(_p(t)){case 2:var i=fp;break;case 8:i=X;break;default:i=pp}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Rd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case qr:case M:case Jr:l=Bn;break;case Qr:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(zd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Vd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Hd(s,c,l,d,!1),u!==null&&f!==null&&Hd(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?A(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,cr=!0)),y=Bd(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=rr?lr(e,n):ur(e,n))&&(x=Bd(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),R(s,e,r,n,i)}Md(s,t)})}function zd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(zd(e,i,a)),i=_n(e,t),i!=null&&r.push(zd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Vd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(zd(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(zd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ud=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function Gd(e){return(typeof e==`string`?e:``+e).replace(Ud,`
`).replace(Wd,``)}function Kd(e,t){return t=Gd(t),Gd(e)===t}function qd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&qd(e,t,`name`,a.name,a,null),qd(e,t,`formEncType`,a.formEncType,a,null),qd(e,t,`formMethod`,a.formMethod,a,null),qd(e,t,`formTarget`,a.formTarget,a,null)):(qd(e,t,`encType`,a.encType,a,null),qd(e,t,`method`,a.method,a,null),qd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Nd(`scroll`,e);break;case`onScrollEnd`:r!=null&&Nd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Nd(`beforetoggle`,e),Nd(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Jd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Nd(`scroll`,e);break;case`onScrollEnd`:r!=null&&Nd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Yd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Nd(`error`,e),Nd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:qd(e,t,o,s,n,null)}}a&&qd(e,t,`srcSet`,n.srcSet,n,null),r&&qd(e,t,`src`,n.src,n,null);return;case`input`:Nd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:qd(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Nd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:qd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Nd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:qd(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:qd(e,t,l,r,n,null)}return;case`dialog`:Nd(`beforetoggle`,e),Nd(`toggle`,e),Nd(`cancel`,e),Nd(`close`,e);break;case`iframe`:case`object`:Nd(`load`,e);break;case`video`:case`audio`:for(r=0;r<Ad.length;r++)Nd(Ad[r],e);break;case`image`:Nd(`error`,e),Nd(`load`,e);break;case`details`:Nd(`toggle`,e);break;case`embed`:case`source`:case`link`:Nd(`error`,e),Nd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:qd(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Jd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&qd(e,t,c,r,n,null))}function Xd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||qd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&qd(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||qd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&qd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:qd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&qd(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:qd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:qd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&qd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:qd(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Jd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Jd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&qd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||qd(e,t,f,p,r,m)}function Zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Qd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var z=null,B=null;function V(e){return e.nodeType===9?e:e.ownerDocument}function H(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function U(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function $d(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var W=null;function ef(){var e=window.event;return e&&e.type===`popstate`?e===W?!1:(W=e,!0):(W=null,!1)}var tf=typeof setTimeout==`function`?setTimeout:void 0,G=typeof clearTimeout==`function`?clearTimeout:void 0,nf=typeof Promise==`function`?Promise:void 0,rf=typeof queueMicrotask==`function`?queueMicrotask:nf===void 0?tf:function(e){return nf.resolve(null).then(e).catch(af)};function af(e){setTimeout(function(){throw e})}function K(e){return e===`head`}function of(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Fp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)vf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,vf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&vf(e.ownerDocument.body);n=i}while(n);Fp(t)}function q(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function sf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:sf(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function cf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=mf(e.nextSibling),e===null)break}return null}function lf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=mf(e.nextSibling),e===null))return null;return e}function uf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=mf(e.nextSibling),e===null))return null;return e}function df(e){return e.data===`$?`||e.data===`$~`}function ff(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function pf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function mf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var hf=null;function gf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return mf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function J(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function _f(e,t,n){switch(t=V(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var yf=new Map,bf=new Set;function xf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sf=se.d;se.d={f:Cf,r:wf,D:Df,C:Of,L:kf,m:Af,X:Mf,S:jf,M:Nf};function Cf(){var e=Sf.f(),t=Pu();return e||t}function wf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?Ps(t):Sf.r(e)}var Tf=typeof document>`u`?null:document;function Ef(e,t,n){var r=Tf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),bf.has(i)||(bf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Yd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Df(e){Sf.D(e),Ef(`dns-prefetch`,e,null)}function Of(e,t){Sf.C(e,t),Ef(`preconnect`,e,t)}function kf(e,t,n){Sf.L(e,t,n);var r=Tf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Ff(e);break;case`script`:a=zf(e)}yf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),yf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(If(a))||t===`script`&&r.querySelector(Bf(a))||(t=r.createElement(`link`),Yd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Af(e,t){Sf.m(e,t);var n=Tf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=zf(e)}if(!yf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),yf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Bf(a)))return}r=n.createElement(`link`),Yd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function jf(e,t,n){Sf.S(e,t,n);var r=Tf;if(r&&e){var i=Dt(r).hoistableStyles,a=Ff(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(If(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=yf.get(a))&&Uf(e,n);var c=o=r.createElement(`link`);Ot(c),Yd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Hf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Mf(e,t){Sf.X(e,t);var n=Tf;if(n&&e){var r=Dt(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Bf(i)),a||(e=m({src:e,async:!0},t),(t=yf.get(i))&&Wf(e,t),a=n.createElement(`script`),Ot(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nf(e,t){Sf.M(e,t);var n=Tf;if(n&&e){var r=Dt(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Bf(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=yf.get(i))&&Wf(e,t),a=n.createElement(`script`),Ot(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pf(e,t,n,r){var a=(a=ge.current)?xf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Ff(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Ff(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(If(e)))&&!o._p&&(s.instance=o,s.state.loading=5),yf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yf.set(e,n),o||Rf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=zf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Ff(e){return`href="`+qt(e)+`"`}function If(e){return`link[rel="stylesheet"][`+e+`]`}function Lf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Rf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Yd(t,`link`,n),Ot(t),e.head.appendChild(t))}function zf(e){return`[src="`+qt(e)+`"]`}function Bf(e){return`script[async]`+e}function Vf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Yd(r,`style`,a),Hf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Ff(n.href);var o=e.querySelector(If(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Lf(n),(a=yf.get(a))&&Uf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Yd(o,`link`,r),t.state.loading|=4,Hf(o,n.precedence,e),t.instance=o;case`script`:return o=zf(n.src),(a=e.querySelector(Bf(o)))?(t.instance=a,Ot(a),a):(r=n,(a=yf.get(o))&&(r=m({},n),Wf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Yd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Hf(r,n.precedence,e));return t.instance}function Hf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Uf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Wf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Gf=null;function Kf(e,t,n){if(Gf===null){var r=new Map,i=Gf=new Map;i.set(n,r)}else i=Gf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Y(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Yf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Ff(r.href),a=t.querySelector(If(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Qf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Lf(r),(i=yf.get(i))&&Uf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Yd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Qf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Xf=0;function Zf(e,t){return e.stylesheets&&e.count===0&&ep(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Xf===0&&(Xf=62500*Qd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Xf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Qf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ep(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $f=null;function ep(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$f=new Map,t.forEach(tp,e),$f=null,Qf.call(e))}function tp(e,t){if(!(t.state.loading&4)){var n=$f.get(e);if(n)var r=n.get(null);else{n=new Map,$f.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Qf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var np={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function rp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ip(e,t,n,r,i,a,o,s,c,l,u,d){return e=new rp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function ap(e){return e?(e=fi,e):fi}function op(e,t,n,r,i,a){i=ap(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(ku(n,e,t),Xa(n,e,t))}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cp(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function lp(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&ku(t,e,67108864),cp(e,67108864)}}function up(e){if(e.tag===13||e.tag===31){var t=Ou();t=ut(t);var n=li(e,t);n!==null&&ku(n,e,t),cp(e,t)}}var dp=!0;function fp(e,t,n,r){var i=k.T;k.T=null;var a=se.p;try{se.p=2,pp(e,t,n,r)}finally{se.p=a,k.T=i}}function X(e,t,n,r){var i=k.T;k.T=null;var a=se.p;try{se.p=8,pp(e,t,n,r)}finally{se.p=a,k.T=i}}function pp(e,t,n,r){if(dp){var i=mp(r);if(i===null)Rd(e,t,r,hp,n),Ep(e,r);else if(Op(i,e,t,n,r))r.stopPropagation();else if(Ep(e,r),t&4&&-1<Tp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}_d(a),!(Yl&6)&&(gu=Pe()+500,vd(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&ku(s,a,2),Pu(),cp(a,2)}if(a=mp(r),a===null&&Rd(e,t,r,hp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Rd(e,t,r,null,n)}}function mp(e){return e=dn(e),gp(e)}var hp=null;function gp(e){if(hp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hp=e,null}function _p(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var vp=!1,yp=null,bp=null,xp=null,Sp=new Map,Cp=new Map,wp=[],Tp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ep(e,t){switch(e){case`focusin`:case`focusout`:yp=null;break;case`dragenter`:case`dragleave`:bp=null;break;case`mouseover`:case`mouseout`:xp=null;break;case`pointerover`:case`pointerout`:Sp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Cp.delete(t.pointerId)}}function Dp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&lp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Op(e,t,n,r,i){switch(t){case`focusin`:return yp=Dp(yp,e,t,n,r,i),!0;case`dragenter`:return bp=Dp(bp,e,t,n,r,i),!0;case`mouseover`:return xp=Dp(xp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Sp.set(a,Dp(Sp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Cp.set(a,Dp(Cp.get(a)||null,e,t,n,r,i)),!0}return!1}function kp(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){up(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Z(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&lp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){Z(e)&&n.delete(t)}function jp(){vp=!1,yp!==null&&Z(yp)&&(yp=null),bp!==null&&Z(bp)&&(bp=null),xp!==null&&Z(xp)&&(xp=null),Sp.forEach(Ap),Cp.forEach(Ap)}function Mp(e,n){e.blockedOn===n&&(e.blockedOn=null,vp||(vp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jp)))}var Np=null;function Pp(e){Np!==e&&(Np=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Np===e&&(Np=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(gp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ms(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Fp(e){function t(t){return Mp(t,e)}yp!==null&&Mp(yp,e),bp!==null&&Mp(bp,e),xp!==null&&Mp(xp,e),Sp.forEach(t),Cp.forEach(t);for(var n=0;n<wp.length;n++){var r=wp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<wp.length&&(n=wp[0],n.blockedOn===null);)kp(n),n.blockedOn===null&&wp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(gp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function Ip(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Lp(e){this._internalRoot=e}Rp.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;op(n,Ou(),e,t,null,null)},Rp.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;op(e.current,2,null,e,null,null),Pu(),t[_t]=null}};function Rp(e){this._internalRoot=e}Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wp.length&&t!==0&&t<wp[n].priority;n++);wp.splice(n,0,e),n===0&&kp(e)}};var zp=n.version;if(zp!==`19.2.6`)throw Error(i(527,zp,`19.2.6`));se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Bp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Vp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vp.isDisabled&&Vp.supportsFiber)try{Ue=Vp.inject(Bp),We=Vp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=tc,s=nc,c=rc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ip(e,1,!1,null,null,n,r,null,o,s,c,Ip),e[_t]=t.current,Id(e),new Lp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/408-exam-prep/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in S)return;S[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=`popstate`;function T(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function E(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ne(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:re(t)}return ae(t,n,null,e)}function D(e,t){if(e===!1||e==null)throw Error(t)}function O(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ie(t):t,state:n,key:t&&t.key||r||ee(),mask:i}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ie(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ae(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=T(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=T(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return oe(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(w,d),c=e,()=>{i.removeEventListener(w,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function oe(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),D(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:re(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function k(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=Ee((typeof t==`string`?ie(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=Te(a);for(let e=0;s==null&&e<o.length;++e)s=Se(o[e],c,r);return s}function ce(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function le(e){let t=ue(e);return fe(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;D(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Fe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(D(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:be(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function fe(e){e.sort((e,t)=>e.score===t.score?xe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var pe=/^:[\w-]+$/,me=3,he=2,ge=1,_e=10,ve=-2,ye=e=>e===`*`;function be(e,t){let n=e.split(`/`),r=n.length;return n.some(ye)&&(r+=ve),t&&(r+=he),n.filter(e=>!ye(e)).reduce((e,t)=>e+(pe.test(t)?me:t===``?ge:_e),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Se(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Fe([a,u.pathname]),pathnameBase:Le(Fe([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Fe([a,u.pathnameBase]))}return o}function Ce(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){O(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return O(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var De=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Oe(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ie(e):e,a;return n?(n=Pe(n),a=n.startsWith(`/`)?ke(n.substring(1),`/`):ke(n,t)):a=t,{pathname:a,search:Re(r),hash:ze(i)}}function ke(e,t){let n=Ie(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ae(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function je(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Me(e){let t=je(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ne(e,t,n,r=!1){let i;typeof e==`string`?i=ie(e):(i={...e},D(!i.pathname||!i.pathname.includes(`?`),Ae(`?`,`pathname`,`search`,i)),D(!i.pathname||!i.pathname.includes(`#`),Ae(`#`,`pathname`,`hash`,i)),D(!i.search||!i.search.includes(`#`),Ae(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Oe(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Pe=e=>e.replace(/\/\/+/g,`/`),Fe=e=>Pe(e.join(`/`)),Ie=e=>e.replace(/\/+$/,``),Le=e=>Ie(e).replace(/^\/*/,`/`),Re=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ze=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Be=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ve(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function He(e){return Fe(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ue=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function We(e,t){let n=e;if(typeof n!=`string`||!De.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ue)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{O(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ge=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ge);var Ke=[`GET`,...Ge];new Set(Ke);var qe=v.createContext(null);qe.displayName=`DataRouter`;var Je=v.createContext(null);Je.displayName=`DataRouterState`;var Ye=v.createContext(!1);function Xe(){return v.useContext(Ye)}var Ze=v.createContext({isTransitioning:!1});Ze.displayName=`ViewTransition`;var Qe=v.createContext(new Map);Qe.displayName=`Fetchers`;var $e=v.createContext(null);$e.displayName=`Await`;var et=v.createContext(null);et.displayName=`Navigation`;var tt=v.createContext(null);tt.displayName=`Location`;var nt=v.createContext({outlet:null,matches:[],isDataRoute:!1});nt.displayName=`Route`;var rt=v.createContext(null);rt.displayName=`RouteError`;var it=`REACT_ROUTER_ERROR`,at=`REDIRECT`,ot=`ROUTE_ERROR_RESPONSE`;function st(e){if(e.startsWith(`${it}:${at}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ct(e){if(e.startsWith(`${it}:${ot}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Be(t.status,t.statusText,t.data)}catch{}}function lt(e,{relative:t}={}){D(ut(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(et),{hash:i,pathname:a,search:o}=yt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Fe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ut(){return v.useContext(tt)!=null}function dt(){return D(ut(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(tt).location}var ft=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function pt(e){v.useContext(et).static||v.useLayoutEffect(e)}function mt(){let{isDataRoute:e}=v.useContext(nt);return e?Rt():ht()}function ht(){D(ut(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(qe),{basename:t,navigator:n}=v.useContext(et),{matches:r}=v.useContext(nt),{pathname:i}=dt(),a=JSON.stringify(Me(r)),o=v.useRef(!1);return pt(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(O(o.current,ft),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ne(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Fe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var gt=v.createContext(null);function _t(e){let t=v.useContext(nt).outlet;return v.useMemo(()=>t&&v.createElement(gt.Provider,{value:e},t),[t,e])}function vt(){let{matches:e}=v.useContext(nt);return e[e.length-1]?.params??{}}function yt(e,{relative:t}={}){let{matches:n}=v.useContext(nt),{pathname:r}=dt(),i=JSON.stringify(Me(n));return v.useMemo(()=>Ne(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function bt(e,t){return xt(e,t)}function xt(e,t,n){D(ut(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(et),{matches:i}=v.useContext(nt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Bt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=dt(),d;if(t){let e=typeof t==`string`?ie(t):t;D(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):k(e,{pathname:p});O(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),O(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ot(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Fe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Fe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(tt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function St(){let e=Lt(),t=Ve(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var Ct=v.createElement(St,null),wt=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ct(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(nt.Provider,{value:this.props.routeContext},v.createElement(rt.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(Et,{error:e},t):t}};wt.contextType=Ye;var Tt=new WeakMap;function Et({children:e,error:t}){let{basename:n}=v.useContext(et);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=st(t.digest);if(e){let r=Tt.get(t);if(r)throw r;let i=We(e.location,n);if(Ue&&!Tt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Tt.set(t,n),n}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Dt({routeContext:e,match:t,children:n}){let r=v.useContext(qe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(nt.Provider,{value:e},n)}function Ot(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);D(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:He(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ct,o&&(s<0&&c===0?(Bt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(Dt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(wt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function kt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function At(e){let t=v.useContext(qe);return D(t,kt(e)),t}function jt(e){let t=v.useContext(Je);return D(t,kt(e)),t}function Mt(e){let t=v.useContext(nt);return D(t,kt(e)),t}function Nt(e){let t=Mt(e),n=t.matches[t.matches.length-1];return D(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pt(){return Nt(`useRouteId`)}function Ft(){let e=jt(`useNavigation`);return v.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function It(){let{matches:e,loaderData:t}=jt(`useMatches`);return v.useMemo(()=>e.map(e=>ce(e,t)),[e,t])}function Lt(){let e=v.useContext(rt),t=jt(`useRouteError`),n=Nt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Rt(){let{router:e}=At(`useNavigate`),t=Nt(`useNavigate`),n=v.useRef(!1);return pt(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{O(n.current,ft),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var zt={};function Bt(e,t,n){!t&&!zt[e]&&(zt[e]=!0,O(!1,n))}v.memo(Vt);function Vt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return xt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ht(e){return _t(e.context)}function Ut(e){D(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Wt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){D(!ut(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ie(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return O(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(et.Provider,{value:c},v.createElement(tt.Provider,{children:t,value:h}))}function Gt({children:e,location:t}){return bt(Kt(e),t)}v.Component;function Kt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Kt(e.props.children,i));return}D(e.type===Ut,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Kt(e.props.children,i)),n.push(a)}),n}var qt=`get`,Jt=`application/x-www-form-urlencoded`;function Yt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Xt(e){return Yt(e)&&e.tagName.toLowerCase()===`button`}function Zt(e){return Yt(e)&&e.tagName.toLowerCase()===`form`}function Qt(e){return Yt(e)&&e.tagName.toLowerCase()===`input`}function $t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function en(e,t){return e.button===0&&(!t||t===`_self`)&&!$t(e)}function tn(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function nn(e,t){let n=tn(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var rn=null;function an(){if(rn===null)try{new FormData(document.createElement(`form`),0),rn=!1}catch{rn=!0}return rn}var on=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function sn(e){return e!=null&&!on.has(e)?(O(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jt}"`),null):e}function cn(e,t){let n,r,i,a,o;if(Zt(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||qt,i=sn(e.getAttribute(`enctype`))||Jt,a=new FormData(e)}else if(Xt(e)||Qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||qt,i=sn(e.getAttribute(`formenctype`))||sn(o.getAttribute(`enctype`))||Jt,a=new FormData(o,e),!an()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Yt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=qt,r=null,i=Jt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var ln={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},un=/[&><\u2028\u2029]/g;function dn(e){return e.replace(un,e=>ln[e])}function fn(e,t){if(e===!1||e==null)throw Error(t)}function pn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ee(i.pathname,t)===`/`?i.pathname=`${Ie(t)}/_root.${r}`:i.pathname=`${Ie(i.pathname)}.${r}`,i}async function mn(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hn(e){return e!=null&&typeof e.page==`string`}function gn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function _n(e,t,n){return Sn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await mn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(gn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function vn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function yn(e,t,{includeHydrateFallback:n}={}){return bn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function bn(e){return[...new Set(e)]}function xn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Sn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!hn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(xn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Cn(){let e=v.useContext(qe);return fn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function wn(){let e=v.useContext(Je);return fn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Tn=v.createContext(void 0);Tn.displayName=`FrameworkContext`;function En(){let e=v.useContext(Tn);return fn(e,`You must render this element inside a <HydratedRouter> element`),e}function Dn(e,t){let n=v.useContext(Tn),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:On(s,p),onBlur:On(c,m),onMouseEnter:On(l,p),onMouseLeave:On(u,m),onTouchStart:On(d,p)}]:[a,f,{}]:[!1,f,{}]}function On(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function kn({page:e,...t}){let n=Xe(),{router:r}=Cn(),i=v.useMemo(()=>k(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?v.createElement(jn,{page:e,matches:i,...t}):v.createElement(Mn,{page:e,matches:i,...t}):null}function An(e){let{manifest:t,routeModules:n}=En(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return _n(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function jn({page:e,matches:t,...n}){let r=dt(),{future:i}=En(),{basename:a}=Cn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=pn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Mn({page:e,matches:t,...n}){let r=dt(),{future:i,manifest:a,routeModules:o}=En(),{basename:s}=Cn(),{loaderData:c,matches:l}=wn(),u=v.useMemo(()=>vn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>vn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=pn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>yn(d,a),[d,a]),m=An(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Nn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var Pn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Pn&&(window.__reactRouterVersion=`7.15.1`)}catch{}function Fn({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=E({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(Wt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function In({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=v.useState({action:n.action,location:n.location}),o=v.useCallback(e=>{r===!1?a(e):v.startTransition(()=>a(e))},[r]);return v.useLayoutEffect(()=>n.listen(o),[n,o]),v.createElement(Wt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}In.displayName=`unstable_HistoryRouter`;var Ln=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rn=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(et),y=typeof l==`string`&&Ln.test(l),b=We(l,h);l=b.to;let x=lt(l,{relative:r}),S=dt(),C=null;if(o){let e=Ne(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Fe([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=Dn(n,p),D=Gn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let ee=!(b.isExternal||i),te=v.createElement(`a`,{...p,...E,href:(ee?C:void 0)||b.absoluteURL||x,onClick:ee?O:e,ref:Nn(m,T),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?v.createElement(v.Fragment,null,te,v.createElement(kn,{page:x})):te});Rn.displayName=`Link`;var zn=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=yt(a,{relative:c.relative}),d=dt(),f=v.useContext(Je),{navigator:p,basename:m}=v.useContext(et),h=f!=null&&nr(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ee(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return v.createElement(Rn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});zn.displayName=`NavLink`;var Bn=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=qt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(et),g=Yn(),_=Xn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&Ln.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Bn.displayName=`Form`;function Vn({getKey:e,storageKey:t,...n}){let r=v.useContext(Tn),{basename:i}=v.useContext(et),a=dt(),o=It();er({getKey:e,storageKey:t});let s=v.useMemo(()=>{if(!r||!e)return null;let t=$n(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return v.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${dn(JSON.stringify(t||Zn))}, ${dn(JSON.stringify(s))})`}})}Vn.displayName=`ScrollRestoration`;function Hn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Un(e){let t=v.useContext(qe);return D(t,Hn(e)),t}function Wn(e){let t=v.useContext(Je);return D(t,Hn(e)),t}function Gn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=mt(),d=dt(),f=yt(e,{relative:o});return v.useCallback(p=>{if(en(p,t)){p.preventDefault();let t=n===void 0?re(d)===re(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function Kn(e){O(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=v.useRef(tn(e)),n=v.useRef(!1),r=dt(),i=v.useMemo(()=>nn(r.search,n.current?null:t.current),[r.search]),a=mt();return[i,v.useCallback((e,t)=>{let r=tn(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var qn=0,Jn=()=>`__${String(++qn)}__`;function Yn(){let{router:e}=Un(`useSubmit`),{basename:t}=v.useContext(et),n=Pt(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=cn(e,t);a.navigate===!1?await r(a.fetcherKey||Jn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Xn(e,{relative:t}={}){let{basename:n}=v.useContext(et),r=v.useContext(nt);D(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...yt(e||`.`,{relative:t})},o=dt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Fe([n,a.pathname])),re(a)}var Zn=`react-router-scroll-positions`,Qn={};function $n(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ee(e.pathname,n)||e.pathname},t)),i??=e.key,i}function er({getKey:e,storageKey:t}={}){let{router:n}=Un(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Wn(`useScrollRestoration`),{basename:a}=v.useContext(et),o=dt(),s=It(),c=Ft();v.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),tr(v.useCallback(()=>{if(c.state===`idle`){let t=$n(o,s,a,e);Qn[t]=window.scrollY}try{sessionStorage.setItem(t||Zn,JSON.stringify(Qn))}catch(e){O(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(v.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Zn);e&&(Qn=JSON.parse(e))}catch{}},[t]),v.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Qn,()=>window.scrollY,e?(t,n)=>$n(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),v.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{O(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function tr(e,t){let{capture:n}=t||{};v.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function nr(e,{relative:t}={}){let n=v.useContext(Ze);D(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Un(`useViewTransitionState`),i=yt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ce(i.pathname,o)!=null||Ce(i.pathname,a)!=null}var rr=`408-exam-prep-progress`;function ir(){try{let e=localStorage.getItem(rr);return e?JSON.parse(e):null}catch{return null}}function ar(e){try{localStorage.setItem(rr,JSON.stringify(e))}catch{}}var or=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=o(((e,t)=>{t.exports=or()}))();function sr(){return{completedPoints:[],quizHistory:[],errorBook:[]}}function cr(e,t){switch(t.type){case`COMPLETE_POINT`:return e.progress.completedPoints.includes(t.pointId)?e:{...e,progress:{...e.progress,completedPoints:[...e.progress.completedPoints,t.pointId]}};case`ADD_QUIZ_RESULT`:return{...e,progress:{...e.progress,quizHistory:[...e.progress.quizHistory,t.result]}};case`ADD_ERROR_ITEM`:return e.progress.errorBook.find(e=>e.questionId===t.questionId)?{...e,progress:{...e.progress,errorBook:e.progress.errorBook.map(e=>e.questionId===t.questionId?{...e,wrongCount:e.wrongCount+1,lastWrongDate:new Date().toISOString(),userAnswers:[...e.userAnswers,t.userAnswer]}:e)}}:{...e,progress:{...e.progress,errorBook:[...e.progress.errorBook,{questionId:t.questionId,wrongCount:1,lastWrongDate:new Date().toISOString(),mastered:!1,userAnswers:[t.userAnswer]}]}};case`MASTER_ERROR`:return{...e,progress:{...e.progress,errorBook:e.progress.errorBook.map(e=>e.questionId===t.questionId?{...e,mastered:!0}:e)}};case`RESET_PROGRESS`:return{progress:sr()};default:return e}}var lr=(0,v.createContext)(null);function ur({children:e}){let[t,n]=(0,v.useReducer)(cr,{progress:ir()||sr()});(0,v.useEffect)(()=>{ar(t.progress)},[t.progress]);let r=t.progress.errorBook,i=r.filter(e=>!e.mastered);return(0,A.jsx)(lr.Provider,{value:{state:t,dispatch:n,errorBook:r,activeErrors:i},children:e})}function dr(){let e=(0,v.useContext)(lr);if(!e)throw Error(`useAppContext must be used within AppProvider`);return e}var fr=[{id:`ds`,name:`数据结构`,fullName:`数据结构`,color:`#4f46e5`,chapters:[{id:`ds-1`,chapterNum:1,title:`绪论`,sections:[{id:`ds-1-1`,title:`数据结构的基本概念`,knowledgePointIds:[`ds-1-1-1`,`ds-1-1-2`,`ds-1-1-3`]},{id:`ds-1-2`,title:`算法和算法评价`,knowledgePointIds:[`ds-1-2-1`,`ds-1-2-2`,`ds-1-2-3`]}]},{id:`ds-2`,chapterNum:2,title:`线性表`,sections:[{id:`ds-2-1`,title:`线性表的定义和基本操作`,knowledgePointIds:[`ds-2-1-1`,`ds-2-1-2`]},{id:`ds-2-2`,title:`线性表的顺序表示`,knowledgePointIds:[`ds-2-2-1`,`ds-2-2-2`,`ds-2-2-3`,`ds-2-2-4`]},{id:`ds-2-3`,title:`线性表的链式表示`,knowledgePointIds:[`ds-2-3-1`,`ds-2-3-2`,`ds-2-3-3`,`ds-2-3-4`,`ds-2-3-5`,`ds-2-3-6`]}]},{id:`ds-3`,chapterNum:3,title:`栈、队列和数组`,sections:[{id:`ds-3-1`,title:`栈`,knowledgePointIds:[`ds-3-1-1`,`ds-3-1-2`,`ds-3-1-3`,`ds-3-1-4`]},{id:`ds-3-2`,title:`队列`,knowledgePointIds:[`ds-3-2-1`,`ds-3-2-2`,`ds-3-2-3`,`ds-3-2-4`]},{id:`ds-3-3`,title:`栈和队列的应用`,knowledgePointIds:[`ds-3-3-1`,`ds-3-3-2`,`ds-3-3-3`,`ds-3-3-4`]},{id:`ds-3-4`,title:`数组和特殊矩阵`,knowledgePointIds:[`ds-3-4-1`,`ds-3-4-2`,`ds-3-4-3`]}]},{id:`ds-4`,chapterNum:4,title:`串`,sections:[{id:`ds-4-1`,title:`串的定义和基本操作`,knowledgePointIds:[`ds-4-1-1`,`ds-4-1-2`]},{id:`ds-4-2`,title:`串的模式匹配`,knowledgePointIds:[`ds-4-2-1`,`ds-4-2-2`,`ds-4-2-3`]}]},{id:`ds-5`,chapterNum:5,title:`树与二叉树`,sections:[{id:`ds-5-1`,title:`树的基本概念`,knowledgePointIds:[`ds-5-1-1`,`ds-5-1-2`]},{id:`ds-5-2`,title:`二叉树的概念`,knowledgePointIds:[`ds-5-2-1`,`ds-5-2-2`,`ds-5-2-3`]},{id:`ds-5-3`,title:`二叉树的遍历和线索二叉树`,knowledgePointIds:[`ds-5-3-1`,`ds-5-3-2`,`ds-5-3-3`,`ds-5-3-4`]},{id:`ds-5-4`,title:`树、森林`,knowledgePointIds:[`ds-5-4-1`,`ds-5-4-2`,`ds-5-4-3`]},{id:`ds-5-5`,title:`树与二叉树的应用`,knowledgePointIds:[`ds-5-5-1`,`ds-5-5-2`,`ds-5-5-3`]}]},{id:`ds-6`,chapterNum:6,title:`图`,sections:[{id:`ds-6-1`,title:`图的基本概念`,knowledgePointIds:[`ds-6-1-1`]},{id:`ds-6-2`,title:`图的存储及基本操作`,knowledgePointIds:[`ds-6-2-1`,`ds-6-2-2`,`ds-6-2-3`]},{id:`ds-6-3`,title:`图的遍历`,knowledgePointIds:[`ds-6-3-1`,`ds-6-3-2`]},{id:`ds-6-4`,title:`图的应用`,knowledgePointIds:[`ds-6-4-1`,`ds-6-4-2`,`ds-6-4-3`,`ds-6-4-4`,`ds-6-4-5`]}]},{id:`ds-7`,chapterNum:7,title:`查找`,sections:[{id:`ds-7-1`,title:`查找的基本概念`,knowledgePointIds:[`ds-7-1-1`]},{id:`ds-7-2`,title:`顺序查找和折半查找`,knowledgePointIds:[`ds-7-2-1`,`ds-7-2-2`]},{id:`ds-7-3`,title:`树型查找`,knowledgePointIds:[`ds-7-3-1`,`ds-7-3-2`,`ds-7-3-3`]},{id:`ds-7-4`,title:`散列表`,knowledgePointIds:[`ds-7-4-1`,`ds-7-4-2`,`ds-7-4-3`]},{id:`ds-7-5`,title:`串的匹配`,knowledgePointIds:[`ds-7-5-1`]}]},{id:`ds-8`,chapterNum:8,title:`排序`,sections:[{id:`ds-8-1`,title:`排序的基本概念`,knowledgePointIds:[`ds-8-1-1`]},{id:`ds-8-2`,title:`插入排序`,knowledgePointIds:[`ds-8-2-1`,`ds-8-2-2`]},{id:`ds-8-3`,title:`交换排序`,knowledgePointIds:[`ds-8-3-1`,`ds-8-3-2`]},{id:`ds-8-4`,title:`选择排序`,knowledgePointIds:[`ds-8-4-1`]},{id:`ds-8-5`,title:`归并排序和基数排序`,knowledgePointIds:[`ds-8-5-1`,`ds-8-5-2`]},{id:`ds-8-6`,title:`各种内部排序算法的比较`,knowledgePointIds:[`ds-8-6-1`]},{id:`ds-8-7`,title:`外部排序`,knowledgePointIds:[`ds-8-7-1`]}]}]},{id:`co`,name:`计组`,fullName:`计算机组成原理`,color:`#dc2626`,chapters:[{id:`co-1`,chapterNum:1,title:`计算机系统概述`,sections:[{id:`co-1-1`,title:`计算机发展历程`,knowledgePointIds:[`co-1-1-1`]},{id:`co-1-2`,title:`计算机系统层次结构`,knowledgePointIds:[`co-1-2-1`]},{id:`co-1-3`,title:`计算机性能指标`,knowledgePointIds:[`co-1-3-1`]}]},{id:`co-2`,chapterNum:2,title:`数据的表示和运算`,sections:[{id:`co-2-1`,title:`数制与编码`,knowledgePointIds:[`co-2-1-1`,`co-2-1-2`]},{id:`co-2-2`,title:`定点数的表示与运算`,knowledgePointIds:[`co-2-2-1`,`co-2-2-2`]},{id:`co-2-3`,title:`浮点数的表示与运算`,knowledgePointIds:[`co-2-3-1`,`co-2-3-2`]},{id:`co-2-4`,title:`算术逻辑单元 ALU`,knowledgePointIds:[`co-2-4-1`]}]},{id:`co-3`,chapterNum:3,title:`存储系统`,sections:[{id:`co-3-1`,title:`存储器概述`,knowledgePointIds:[`co-3-1-1`]},{id:`co-3-2`,title:`主存储器`,knowledgePointIds:[`co-3-2-1`,`co-3-2-2`]},{id:`co-3-3`,title:`高速缓冲存储器 Cache`,knowledgePointIds:[`co-3-3-1`,`co-3-3-2`,`co-3-3-3`,`co-3-3-4`]},{id:`co-3-4`,title:`虚拟存储器`,knowledgePointIds:[`co-3-4-1`]}]},{id:`co-4`,chapterNum:4,title:`指令系统`,sections:[{id:`co-4-1`,title:`指令格式`,knowledgePointIds:[`co-4-1-1`]},{id:`co-4-2`,title:`指令的寻址方式`,knowledgePointIds:[`co-4-2-1`]},{id:`co-4-3`,title:`CISC 和 RISC`,knowledgePointIds:[`co-4-3-1`]}]},{id:`co-5`,chapterNum:5,title:`中央处理器`,sections:[{id:`co-5-1`,title:`CPU 的功能和基本结构`,knowledgePointIds:[`co-5-1-1`,`co-5-1-2`,`co-5-1-3`]},{id:`co-5-2`,title:`数据通路`,knowledgePointIds:[`co-5-2-1`]},{id:`co-5-3`,title:`控制器`,knowledgePointIds:[`co-5-3-1`,`co-5-3-2`]},{id:`co-5-4`,title:`异常和中断`,knowledgePointIds:[`co-5-4-1`]},{id:`co-5-5`,title:`指令流水线`,knowledgePointIds:[`co-5-5-1`,`co-5-5-2`]},{id:`co-5-6`,title:`多处理器基本概念`,knowledgePointIds:[]}]},{id:`co-6`,chapterNum:6,title:`总线`,sections:[{id:`co-6-1`,title:`总线概述`,knowledgePointIds:[`co-6-1-1`]},{id:`co-6-2`,title:`总线仲裁`,knowledgePointIds:[`co-6-2-1`]},{id:`co-6-3`,title:`总线操作和定时`,knowledgePointIds:[`co-6-3-1`]},{id:`co-6-4`,title:`总线标准`,knowledgePointIds:[`co-6-4-1`]}]},{id:`co-7`,chapterNum:7,title:`输入/输出系统`,sections:[{id:`co-7-1`,title:`I/O 系统基本概念`,knowledgePointIds:[`co-7-1-1`]},{id:`co-7-2`,title:`程序查询方式`,knowledgePointIds:[`co-7-2-1`]},{id:`co-7-3`,title:`程序中断方式`,knowledgePointIds:[`co-7-3-1`,`co-7-3-2`]},{id:`co-7-4`,title:`DMA 方式`,knowledgePointIds:[`co-7-4-1`]}]}]},{id:`os`,name:`操作系统`,fullName:`操作系统`,color:`#16a34a`,chapters:[{id:`os-1`,chapterNum:1,title:`计算机系统概述`,sections:[{id:`os-1-1`,title:`操作系统的基本概念`,knowledgePointIds:[`os-1-1-1`]},{id:`os-1-2`,title:`操作系统的发展和分类`,knowledgePointIds:[`os-1-2-1`]},{id:`os-1-3`,title:`操作系统的运行环境`,knowledgePointIds:[`os-1-3-1`]},{id:`os-1-4`,title:`操作系统体系结构`,knowledgePointIds:[`os-1-4-1`]}]},{id:`os-2`,chapterNum:2,title:`进程管理`,sections:[{id:`os-2-1`,title:`进程与线程`,knowledgePointIds:[`os-2-1-1`,`os-2-1-2`,`os-2-1-3`]},{id:`os-2-2`,title:`CPU 调度`,knowledgePointIds:[`os-2-2-1`]},{id:`os-2-3`,title:`同步与互斥`,knowledgePointIds:[`os-2-3-1`,`os-2-3-2`,`os-2-3-3`,`os-2-3-4`]},{id:`os-2-4`,title:`死锁`,knowledgePointIds:[`os-2-4-1`,`os-2-4-2`]}]},{id:`os-3`,chapterNum:3,title:`内存管理`,sections:[{id:`os-3-1`,title:`内存管理概念`,knowledgePointIds:[`os-3-1-1`]},{id:`os-3-2`,title:`连续分配管理方式`,knowledgePointIds:[`os-3-2-1`]},{id:`os-3-3`,title:`非连续分配管理方式`,knowledgePointIds:[`os-3-3-1`,`os-3-3-2`,`os-3-3-3`]},{id:`os-3-4`,title:`虚拟内存管理`,knowledgePointIds:[`os-3-4-1`,`os-3-4-2`,`os-3-4-3`]}]},{id:`os-4`,chapterNum:4,title:`文件管理`,sections:[{id:`os-4-1`,title:`文件系统基础`,knowledgePointIds:[`os-4-1-1`,`os-4-1-2`]},{id:`os-4-2`,title:`文件系统实现`,knowledgePointIds:[`os-4-2-1`,`os-4-2-2`]},{id:`os-4-3`,title:`磁盘组织与管理`,knowledgePointIds:[`os-4-3-1`,`os-4-3-2`]}]},{id:`os-5`,chapterNum:5,title:`输入/输出管理`,sections:[{id:`os-5-1`,title:`I/O 管理概述`,knowledgePointIds:[`os-5-1-1`,`os-5-1-2`]},{id:`os-5-2`,title:`I/O 核心子系统`,knowledgePointIds:[`os-5-2-1`,`os-5-2-2`]}]}]},{id:`cn`,name:`计网`,fullName:`计算机网络`,color:`#ca8a04`,chapters:[{id:`cn-1`,chapterNum:1,title:`计算机网络体系结构`,sections:[{id:`cn-1-1`,title:`计算机网络概述`,knowledgePointIds:[`cn-1-1-1`]},{id:`cn-1-2`,title:`计算机网络体系结构与参考模型`,knowledgePointIds:[`cn-1-2-1`]}]},{id:`cn-2`,chapterNum:2,title:`物理层`,sections:[{id:`cn-2-1`,title:`通信基础`,knowledgePointIds:[`cn-2-1-1`]},{id:`cn-2-2`,title:`传输介质`,knowledgePointIds:[`cn-2-2-1`]},{id:`cn-2-3`,title:`物理层设备`,knowledgePointIds:[`cn-2-3-1`]}]},{id:`cn-3`,chapterNum:3,title:`数据链路层`,sections:[{id:`cn-3-1`,title:`数据链路层的功能`,knowledgePointIds:[`cn-3-1-1`]},{id:`cn-3-2`,title:`组帧`,knowledgePointIds:[`cn-3-2-1`]},{id:`cn-3-3`,title:`差错控制`,knowledgePointIds:[`cn-3-3-1`]},{id:`cn-3-4`,title:`流量控制与可靠传输机制`,knowledgePointIds:[`cn-3-4-1`]},{id:`cn-3-5`,title:`介质访问控制`,knowledgePointIds:[`cn-3-5-1`]},{id:`cn-3-6`,title:`局域网`,knowledgePointIds:[`cn-3-6-1`]},{id:`cn-3-7`,title:`广域网`,knowledgePointIds:[`cn-3-7-1`]},{id:`cn-3-8`,title:`数据链路层设备`,knowledgePointIds:[`cn-3-8-1`]}]},{id:`cn-4`,chapterNum:4,title:`网络层`,sections:[{id:`cn-4-1`,title:`网络层的功能`,knowledgePointIds:[`cn-4-1-1`]},{id:`cn-4-2`,title:`IPv4`,knowledgePointIds:[`cn-4-2-1`]},{id:`cn-4-3`,title:`IPv6`,knowledgePointIds:[`cn-4-3-1`]},{id:`cn-4-4`,title:`路由算法与路由协议`,knowledgePointIds:[`cn-4-4-1`]},{id:`cn-4-5`,title:`IP 多播`,knowledgePointIds:[`cn-4-5-1`]},{id:`cn-4-6`,title:`移动 IP`,knowledgePointIds:[`cn-4-6-1`]},{id:`cn-4-7`,title:`网络层设备`,knowledgePointIds:[`cn-4-7-1`]}]},{id:`cn-5`,chapterNum:5,title:`传输层`,sections:[{id:`cn-5-1`,title:`传输层提供的服务`,knowledgePointIds:[`cn-5-1-1`]},{id:`cn-5-2`,title:`UDP 协议`,knowledgePointIds:[`cn-5-2-1`]},{id:`cn-5-3`,title:`TCP 协议`,knowledgePointIds:[`cn-5-3-1`,`cn-5-3-2`]}]},{id:`cn-6`,chapterNum:6,title:`应用层`,sections:[{id:`cn-6-1`,title:`网络应用模型`,knowledgePointIds:[`cn-6-1-1`]},{id:`cn-6-2`,title:`DNS 系统`,knowledgePointIds:[`cn-6-2-1`]},{id:`cn-6-3`,title:`FTP`,knowledgePointIds:[`cn-6-3-1`]},{id:`cn-6-4`,title:`电子邮件`,knowledgePointIds:[`cn-6-4-1`]},{id:`cn-6-5`,title:`万维网 WWW`,knowledgePointIds:[`cn-6-5-1`]}]}]}];function pr(e){return fr.find(t=>t.id===e)}function mr(e){for(let t of fr){let n=t.chapters.find(t=>t.id===e);if(n)return{subject:t,chapter:n}}}var hr=[{id:`ds-1-1-1`,chapterId:`ds-1`,title:`数据、数据元素、数据项与数据对象`,keyConcepts:[`数据`,`数据元素`,`数据项`,`数据对象`,`数据结构`],relatedPoints:[],content:`## 基本术语定义

| 术语 | 定义 | 说明 |
|------|------|------|
| **数据** (Data) | 信息的载体，能够输入计算机并被计算机程序识别和处理的符号集合 | 包括数字、字符、图像、音频等 |
| **数据元素** (Data Element) | 数据的基本单位，通常作为一个整体进行考虑和处理 | 一个学生记录、图中的顶点 |
| **数据项** (Data Item) | 构成数据元素的不可分割的最小单位 | 学号、姓名、年龄 |
| **数据对象** (Data Object) | 具有相同性质的数据元素的集合，是数据的一个子集 | 整数集合、所有学生记录 |
| **数据结构** (Data Structure) | 相互之间存在一种或多种特定关系的数据元素的集合 | 线性表、二叉树、图 |

## 层次关系

$$
\\text{数据} \\supset \\text{数据对象} \\supset \\text{数据元素} \\supset \\text{数据项}
$$

## 考试辨析

- 数据元素是**数据的基本单位**，数据项是**数据的最小单位**
- 区分「数据」与「数据对象」：数据是全集，数据对象是子集
- 408 选择题中常见「以下说法正确的是/错误的是」的选项，需精确对应定义`},{id:`ds-1-1-2`,chapterId:`ds-1`,title:`数据结构三要素`,keyConcepts:[`逻辑结构`,`存储结构`,`数据运算`,`三要素`],relatedPoints:[`os-3-1-1`],content:`## 数据结构由三要素组成

> **数据结构 = 逻辑结构 + 存储结构（物理结构）+ 数据的运算**

三要素缺一不可，共同构成一个完整的数据结构定义。

---

## 一、逻辑结构

**定义**：数据元素之间的逻辑关系，与数据的存储无关，独立于计算机。

| 类型 | 数据元素关系 | 举例 |
|------|-------------|------|
| **集合** | 无特定关系（同属一个集合） | 集合 |
| **线性结构** | 一对一 | 线性表、栈、队列、串、数组 |
| **树形结构** | 一对多 | 一般树、二叉树 |
| **图状/网状结构** | 多对多 | 有向图、无向图 |

> 线性结构与非线性结构的划分：集合、树、图属于**非线性结构**。

---

## 二、存储结构（物理结构）

**定义**：数据结构在计算机中的表示（映像），即用计算机语言实现逻辑结构。

| 存储方式 | 特点 | 优点 | 缺点 |
|----------|------|------|------|
| **顺序存储** | 逻辑相邻 → 物理相邻，连续空间 | 随机存取，存储密度高 | 外部碎片多 |
| **链式存储** | 通过指针连接，可不连续 | 无碎片，充分利用空间 | 指针额外占用空间 |
| **索引存储** | 附加索引表（关键字→地址） | 检索快 | 索引表额外占空间 |
| **散列存储** | 根据关键字直接计算地址 | 增删改查都快 | 冲突需额外处理 |

---

## 三、数据的运算

- **运算的定义**：针对**逻辑结构**，描述运算的功能（做什么）
- **运算的实现**：针对**存储结构**，描述运算的具体步骤（怎么做）

常见运算：插入、删除、查找、修改、排序、遍历。

---

## 核心辨析（408高频考点）

> **逻辑结构独立于存储结构**。
>
> 同一个逻辑结构可以采用不同的存储结构实现。
> 例如：线性表（逻辑结构）既可以用顺序表（顺序存储）实现，也可以用链表（链式存储）实现。
>
> 反过来：存储结构**不能独立于**逻辑结构而存在。`},{id:`ds-1-1-3`,chapterId:`ds-1`,title:`数据类型与抽象数据类型 (ADT)`,keyConcepts:[`数据类型`,`原子类型`,`结构类型`,`抽象数据类型`,`ADT`],relatedPoints:[],content:`## 数据类型 (Data Type)

**定义**：一个**值的集合**和定义在此集合上的**一组操作**的总称。

| 类别 | 说明 | 举例 |
|------|------|------|
| **原子类型** | 不可再分的数据类型 | int（值的集合 + 加减乘除等运算） |
| **结构类型** | 可由原子类型组合而成 | struct、数组、类 |

---

## 抽象数据类型 (Abstract Data Type, ADT)

**定义**：从数学模型抽象出来的**逻辑结构**和**运算**，只关心"做什么"，不关心"怎么做"。

ADT 通过一个三元组定义：

$$
\\text{ADT} = (D, S, P)
$$

- $D$：数据元素集合
- $S$：$D$ 上的关系集合
- $P$：对 $D$ 的基本操作集合

> ADT 的核心特征：**封装** + **信息隐藏**。对外只暴露接口，不暴露实现细节。

## 考试辨析

- 数据类型关注「值 + 操作」；抽象数据类型关注「逻辑结构 + 运算定义」。
- ADT 是面向对象思想的理论基础，408 常在绪论选择题中考查其概念辨析。`},{id:`ds-1-2-1`,chapterId:`ds-1`,title:`算法的基本概念与特性`,keyConcepts:[`算法`,`五大特性`,`有穷性`,`确定性`,`可行性`,`好算法的标准`],relatedPoints:[],content:`## 算法 (Algorithm) 的定义

算法是对特定问题求解步骤的一种描述，是指令的有限序列。

---

## 算法的五大特性（必须全部满足）

| 特性 | 含义 | 反例 |
|------|------|------|
| **有穷性** | 执行有限步后必然结束 | 死循环 |
| **确定性** | 每一条指令语义唯一、无二义性 | 自然语言描述 |
| **可行性** | 可以通过已实现的基本运算执行 | 不可计算的操作 |
| **输入** | 有 $0$ 个或多个输入（外部提供的数据） | — |
| **输出** | 至少 $1$ 个输出 | 无返回值的纯副作用代码 |

> **注意**：程序 ≠ 算法。程序可以不满足有穷性（如操作系统）。

---

## 好算法的四个目标

1. **正确性** — 能正确处理输入
2. **可读性** — 易于理解和维护
3. **健壮性** — 能处理非法输入
4. **高效率 + 低存储量** — 时间和空间复杂度尽可能优

---

## 考试辨析

- 「有穷性」是算法区别于程序的关键特征
- 确定性 ≠ 有限性 — 确定性指指令无歧义，有穷性指执行步骤有限`},{id:`ds-1-2-2`,chapterId:`ds-1`,title:`算法的时间复杂度`,keyConcepts:[`时间复杂度`,`大O记号`,`渐近分析`,`最坏情况`,`加法规则`,`乘法规则`],relatedPoints:[`ds-1-2-3`],content:`## 定义

算法中所有语句的**执行次数（频度）之和**是问题规模 $n$ 的函数 $f(n)$。

> **时间复杂度** $T(n) = O(f(n))$ 表示算法的**渐近时间增长率**，即当 $n \\to \\infty$ 时，$T(n)$ 的增长不超过 $f(n)$ 的常数倍。

**严格数学定义**（大O记号）：

$$T(n) = O(f(n)) \\iff \\exists\\ C > 0,\\ n_0 > 0,\\ \\forall n \\ge n_0,\\ 0 \\le T(n) \\le C \\cdot f(n)$$

---

## 分析规则

### 加法规则
$$T(n) = T_1(n) + T_2(n) = O(\\max(f(n), g(n)))$$

### 乘法规则
$$T(n) = T_1(n) \\times T_2(n) = O(f(n) \\times g(n))$$

> 常见结论：若 $A(n) = a_m n^m + \\dots + a_0$ 是 $m$ 次多项式，则 $A(n) = O(n^m)$。

---

## 常见时间复杂度排序（牢记）

$$O(1) < O(\\log n) < O(n) < O(n\\log n) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)$$

---

## 计算技巧总结

| 代码模式 | 复杂度 | 分析方法 |
|----------|--------|----------|
| 单层循环 | $O(n)$ | 循环变量从 $1$ 到 $n$ 线性增长 |
| 变量指数增长 | $O(\\log n)$ | 如 i = i * 2，解 $2^t \\ge n \\Rightarrow t = O(\\log n)$ |
| 双重独立循环 | $O(n^2)$ | 内外层复杂度相乘 |
| 递归 $T(n) = T(n-1) + O(1)$ | $O(n)$ | 递推展开为 $n$ 次相加 |
| 递归 $T(n) = 2T(n/2) + n$ | $O(n\\log n)$ | 主定理第二类 |

> 408 选择题通常考**最坏情况复杂度**。分析时重点关注最深层循环内的**基本操作**执行次数。

---

## 历年真题示例

**（2011年）**
\`\`\`c
x = 2;
while (x < n/2)
    x = 2 * x;
\`\`\`
设执行 $t$ 次，有 $2 \\times 2^t < n/2 \\Rightarrow t < \\log_2 n - 2$，故时间复杂度为 $O(\\log n)$。

**（2012年）**
\`\`\`c
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
\`\`\`
递推：$T(n) = T(n-1) + O(1)$，展开得 $T(n) = n \\cdot O(1) = O(n)$。`},{id:`ds-1-2-3`,chapterId:`ds-1`,title:`算法的空间复杂度`,keyConcepts:[`空间复杂度`,`原地工作`,`递归空间`],relatedPoints:[`ds-1-2-2`],content:`## 定义

算法运行过程中所需的**额外辅助存储空间**是问题规模 $n$ 的函数。

$$S(n) = O(g(n))$$

> 空间复杂度只计入**辅助空间**，不计入存储输入数据本身的空间。

---

## 常见情形

| 情形 | 空间复杂度 | 说明 |
|------|-----------|------|
| **原地工作** | $O(1)$ | 所需辅助空间为常量，不随 $n$ 增长 |
| **一维辅助数组** | $O(n)$ | 如归并排序的临时数组 |
| **递归** | $O(\\text{递归深度})$ | 递归调用栈的深度 × 每层空间 |

---

## 递归空间复杂度分析

递归算法的空间复杂度 $=$ **递归深度** $\\times$ **每层所需辅助空间**。

> 例如：fact(n) 递归深度为 $n$，每层仅保存返回地址和参数（常量），故 $S(n) = O(n)$。

---

## 考试辨析

- 时间复杂度 vs 空间复杂度：时间优先是主流，408 常以"时间换空间"或"空间换时间"作为选项陷阱
- 「算法原地工作」特指辅助空间为 $O(1)$，不排除输入数据本身占用的空间`},{id:`ds-2-1-1`,chapterId:`ds-2`,title:`线性表的定义与特点`,keyConcepts:[`线性表`,`有限序列`,`表头`,`表尾`,`直接前驱`,`直接后继`,`一对一`],relatedPoints:[`ds-2-1-2`,`ds-3-1-1`],content:`## 线性表的定义

> 线性表是具有**相同数据类型**的 $n$（$n \\ge 0$）个数据元素的**有限序列**。

记作：

$$L = (a_1, a_2, \\ldots, a_i, \\ldots, a_n)$$

其中 $a_1$ 是**表头**元素（唯一的第一元素），$a_n$ 是**表尾**元素（唯一的最后元素）。

---

## 逻辑特征（必考）

| 特征 | 说明 |
|------|------|
| **有限性** | 元素个数 $n$ 是有限的（$n$ 称为表长，$n=0$ 为空表） |
| **相同数据类型** | 每个数据元素 $a_i$ 具有相同的数据类型 |
| **顺序性** | 元素之间有先后次序（序列） |
| **一对一关系** | 除表头外，每个元素有且仅有一个**直接前驱**；除表尾外，每个元素有且仅有一个**直接后继** |

> 线性表是一种**逻辑结构**，表示元素之间一对一的相邻关系。

---

## 线性表中元素的位序

- $a_i$ 是第 $i$ 个元素，称 $i$ 为数据元素 $a_i$ 在线性表中的**位序**
- 位序从 **1** 开始（区别于数组下标从 0 开始！408 常在此设陷阱）

---

## 考试辨析

- **线性表 ≠ 顺序表**：线性表是逻辑结构，顺序表/链表是存储结构（实现方式）
- **位序从 1 开始**，数组下标从 0 开始——选择题常见陷阱
- $a_1$ 无前驱，$a_n$ 无后继——这两个边界条件经常在算法题中出现`},{id:`ds-2-1-2`,chapterId:`ds-2`,title:`线性表的基本操作 (ADT)`,keyConcepts:[`InitList`,`ListInsert`,`ListDelete`,`LocateElem`,`GetElem`,`ADT`],relatedPoints:[`ds-1-1-3`,`ds-2-1-1`],content:`## 线性表 ADT 定义

线性表上的基本操作是理解后续章节（顺序表 / 链表）实现的基础。

---

## 核心操作一览

| 操作 | 函数原型 | 说明 |
|------|----------|------|
| **初始化** | InitList(&L) | 构造一个空的线性表，分配内存空间 |
| **销毁** | DestroyList(&L) | 销毁线性表，释放其所占内存 |
| **判空** | ListEmpty(L) | 若 $L$ 为空表返回 true |
| **求长** | ListLength(L) | 返回 $L$ 中数据元素个数 |
| **按位查找** | GetElem(L, i, &e) | 用 $e$ 返回 $L$ 中第 $i$ 个元素 |
| **按值查找** | LocateElem(L, e) | 返回 $L$ 中第一个值为 $e$ 的元素的位序 |
| **插入** | ListInsert(&L, i, e) | 在 $L$ 的第 $i$ 个位置插入新元素 $e$，表长 $+1$ |
| **删除** | ListDelete(&L, i, &e) | 删除 $L$ 中第 $i$ 个元素，用 $e$ 返回其值，表长 $-1$ |
| **输出** | PrintList(L) | 按前后顺序输出 $L$ 中所有元素值 |

---

## 操作设计要点

- **插入/删除的合法位置**：插入 $1 \\le i \\le n + 1$，删除 $1 \\le i \\le n$
- **参数传递**：修改线性表的操作（Insert/Delete）需用**引用 &** 传参
- **抽象性**：ADT 只定义"做什么"，不规定"怎么做"（具体实现取决于存储结构）

---

## 考试辨析

- 408 算法设计题通常基于这些基本操作组合实现更复杂的操作（如逆置、归并）
- 选择题常问"某操作的合法参数范围"`},{id:`ds-2-2-1`,chapterId:`ds-2`,title:`顺序表的定义与存储结构`,keyConcepts:[`顺序表`,`随机存取`,`存储密度`,`连续空间`,`LOC公式`],relatedPoints:[`ds-1-1-2`,`ds-2-2-2`],content:`## 顺序表的定义

> 顺序表是用一组**地址连续**的存储单元依次存储线性表中的数据元素，使得逻辑上相邻的元素在物理位置上也相邻。

---

## 存储地址计算公式（核心公式）

设首地址为 $\\text{LOC}(a_1)$，每个元素占用 $s$ 个存储单元，则第 $i$ 个元素的存储地址：

$$\\text{LOC}(a_i) = \\text{LOC}(a_1) + (i - 1) \\times s$$

> **关键性质**：由此公式可知，顺序表支持**随机存取**——访问任意位置元素的时间复杂度为 $O(1)$。

---

## 实现方式对比

| 方式 | 特点 | 适用场景 |
|------|------|----------|
| **静态分配** | 数组大小固定（编译时确定），空间不可扩展 | 规模已知且不变 |
| **动态分配** | 用 malloc 申请，realloc 扩展，空间不够时可扩大 | 通用场景 |

\`\`\`c
// 静态分配
#define MaxSize 50
typedef struct {
    ElemType data[MaxSize];
    int length;
} SqList;

// 动态分配
typedef struct {
    ElemType *data;
    int length, MaxSize;
} SeqList;
\`\`\`

---

## 顺序表的特点

| 特点 | 说明 |
|------|------|
| **随机存取** | $O(1)$ 时间内访问任意位置元素 |
| **存储密度高** | 存储密度 $=1$，结点只存储数据，不存储指针 |
| **插入删除慢** | 需移动大量元素，平均移动约一半元素 |
| **空间利用率** | 需预分配，可能浪费空间或空间不足 |

> **存储密度** $= \\frac{\\text{数据元素本身占用的存储量}}{\\text{结点结构占用的存储总量}}$

---

## 考试辨析

- 「顺序表支持随机存取」是顺序表与链表最本质的区别之一
- 存储密度 $=1$ 仅对"结点只含数据"成立（若结点含其他字段则 $<1$）
- 区分「线性表」「有序表」和「顺序表」：有序表是逻辑概念（元素按值有序），顺序表是存储概念`},{id:`ds-2-2-2`,chapterId:`ds-2`,title:`顺序表的插入操作`,keyConcepts:[`插入`,`移动元素`,`平均移动次数`,`时间复杂度O(n)`],relatedPoints:[`ds-2-2-3`,`ds-2-2-4`],content:`## 插入操作

在线性表 $L$ 的第 $i$（$1 \\le i \\le n+1$）个位置插入新元素 $e$。

---

## 算法步骤

1. 判断插入位置 $i$ 是否合法（$1 \\le i \\le n+1$）
2. 判断存储空间是否已满（满则不能插入）
3. 将第 $n$ 个到第 $i$ 个元素**依次向后移动一位**
4. 将新元素 $e$ 放入第 $i$ 个位置
5. 表长 $+1$

\`\`\`c
bool ListInsert(SqList *L, int i, ElemType e) {
    if (i < 1 || i > L->length + 1) return false;
    if (L->length >= MaxSize) return false;
    for (int j = L->length; j >= i; j--)
        L->data[j] = L->data[j - 1];
    L->data[i - 1] = e;
    L->length++;
    return true;
}
\`\`\`

---

## 时间复杂度分析

| 插入位置 | 移动元素个数 | 概率 |
|----------|-------------|------|
| 表尾（$i = n+1$） | $0$ | $\\frac{1}{n+1}$ |
| 表头（$i = 1$） | $n$ | $\\frac{1}{n+1}$ |
| 第 $i$ 个位置 | $n - i + 1$ | $\\frac{1}{n+1}$ |

> **平均移动次数**（等概率假设）：
>
> $$E_{\\text{insert}} = \\sum_{i=1}^{n+1} \\frac{1}{n+1} \\cdot (n-i+1) = \\frac{n}{2}$$

| 复杂度类型 | 值 |
|------------|-----|
| 最好情况 | $O(1)$ — 在表尾插入 |
| 最坏情况 | $O(n)$ — 在表头插入 |
| 平均情况 | $O(n)$ — 平均移动 $n/2$ 个元素 |

---

## 考试辨析

- 插入位置 $i$ 的合法范围是 **$1 \\le i \\le n+1$**（可在表尾后一个位置插入）
- 移动元素 **从后往前** 遍历（$j$ 从 $n$ 到 $i$），若从前往后会覆盖未移动的值`},{id:`ds-2-2-3`,chapterId:`ds-2`,title:`顺序表的删除操作`,keyConcepts:[`删除`,`移动元素`,`平均移动次数`,`时间复杂度O(n)`],relatedPoints:[`ds-2-2-2`,`ds-2-2-4`],content:`## 删除操作

删除线性表 $L$ 的第 $i$（$1 \\le i \\le n$）个位置的元素，用 $e$ 返回其值。

---

## 算法步骤

1. 判断删除位置 $i$ 是否合法（$1 \\le i \\le n$）
2. 将被删元素的值赋给 $e$
3. 将第 $i+1$ 个到第 $n$ 个元素**依次向前移动一位**
4. 表长 $-1$

\`\`\`c
bool ListDelete(SqList *L, int i, ElemType *e) {
    if (i < 1 || i > L->length) return false;
    *e = L->data[i - 1];
    for (int j = i; j < L->length; j++)
        L->data[j - 1] = L->data[j];
    L->length--;
    return true;
}
\`\`\`

---

## 时间复杂度分析

| 删除位置 | 移动元素个数 | 概率 |
|----------|-------------|------|
| 表尾（$i = n$） | $0$ | $\\frac{1}{n}$ |
| 表头（$i = 1$） | $n-1$ | $\\frac{1}{n}$ |
| 第 $i$ 个位置 | $n - i$ | $\\frac{1}{n}$ |

> **平均移动次数**（等概率假设）：
>
> $$E_{\\text{delete}} = \\sum_{i=1}^{n} \\frac{1}{n} \\cdot (n-i) = \\frac{n-1}{2}$$

| 复杂度类型 | 值 |
|------------|-----|
| 最好情况 | $O(1)$ — 删除表尾 |
| 最坏情况 | $O(n)$ — 删除表头 |
| 平均情况 | $O(n)$ — 平均移动 $(n-1)/2$ 个元素 |

---

## 考试辨析（插入 vs 删除移动次数对比）

| 比较 | 插入 | 删除 |
|------|------|------|
| 合法范围 | $1 \\le i \\le n+1$ | $1 \\le i \\le n$ |
| 移动方向 | **从后往前** | **从前往后** |
| 第 $i$ 个位置移动个数 | $n - i + 1$ | $n - i$ |
| 平均移动次数 | $n / 2$ | $(n-1) / 2$ |

> 选择题常直接要求计算：给定 $n$ 和 $i$，计算移动的元素个数。`},{id:`ds-2-2-4`,chapterId:`ds-2`,title:`顺序表的查找操作`,keyConcepts:[`按位查找`,`按值查找`,`顺序查找`,`随机存取`,`O(1)`,`O(n)`],relatedPoints:[`ds-7-2-1`,`ds-2-2-1`],content:`## 顺序表的两种查找

---

## 一、按位查找（随机存取）

获取顺序表 $L$ 中第 $i$ 个位置的元素值。

\`\`\`c
bool GetElem(SqList L, int i, ElemType *e) {
    if (i < 1 || i > L.length) return false;
    *e = L.data[i - 1];
    return true;
}
\`\`\`

> **时间复杂度：$O(1)$** — 利用 LOC 公式直接计算出存储地址，这是顺序表最大的优势。

---

## 二、按值查找（顺序查找）

在顺序表 $L$ 中查找第一个值为 $e$ 的元素，返回其位序。

\`\`\`c
int LocateElem(SqList L, ElemType e) {
    for (int i = 0; i < L.length; i++)
        if (L.data[i] == e)
            return i + 1;    // 位序从1开始
    return 0;                // 查找失败
}
\`\`\`

---

## 按值查找时间复杂度

| 查找位置 | 比较次数 | 概率 |
|----------|---------|------|
| 第 1 个 | $1$ | $\\frac{1}{n}$ |
| 第 $n$ 个 | $n$ | $\\frac{1}{n}$ |
| 查找失败 | $n$ | — |

> 平均查找长度（等概率）：
>
> $$\\text{ASL}_{\\text{成功}} = \\frac{n+1}{2}$$

| 复杂度类型 | 值 |
|------------|-----|
| 最好情况 | $O(1)$ |
| 最坏情况 | $O(n)$ |
| 平均情况 | $O(n)$ |

---

## 考试辨析

- **按位查找 $O(1)$ 是顺序表的核心优势**，408 选择题经常以此为干扰项对比链表
- 按值查找的 ASL = (n+1)/2，若包含查找失败则需另计
- 若顺序表**有序**，则按值查找可优化为**折半查找** $O(\\log n)$（见第7章）`},{id:`ds-2-3-1`,chapterId:`ds-2`,title:`单链表的定义与结点结构`,keyConcepts:[`单链表`,`结点`,`数据域`,`指针域`,`头指针`,`头结点`],relatedPoints:[`ds-2-2-1`,`ds-2-3-2`],content:`## 单链表结点结构

> 单链表的每个结点包含两部分：**数据域 (data)** 和**指针域 (next)**，指针域指向直接后继结点。

\`\`\`c
typedef struct LNode {
    ElemType data;           // 数据域
    struct LNode *next;      // 指针域：指向直接后继
} LNode, *LinkList;
\`\`\`

---

## 核心概念辨析（高频考点）

| 术语 | 含义 | 说明 |
|------|------|------|
| **头指针 (head)** | 指向链表第一个结点的指针 | 链表必须通过头指针访问 |
| **头结点** | 在首元结点之前附加的一个结点 | 数据域不放内容（或存放表长），指针域指向首元结点 |
| **首元结点** | 链表中存储第一个数据元素 $a_1$ 的结点 | 实际数据的开端 |
| **头指针 → 头结点 → 首元结点 → ...** | — | 标准的带头结点链表结构 |

---

## 带头结点 vs 不带头结点

**408 考研绝大多数题目使用带头结点的链表。**

| 特性 | 带头结点 | 不带头结点 |
|------|----------|------------|
| 判空条件 | L->next == NULL | L == NULL |
| 首元结点操作 | 与其它结点**统一处理** | 需**特殊处理** |
| 插入/删除代码 | 统一，简洁 | 在表头需特殊判断 |

> **头结点存在的意义**：使空表和非空表的操作统一，简化代码。

---

## 链表特点

| 方面 | 特点 |
|------|------|
| **存取方式** | 顺序存取（必须从头遍历），不支持随机存取 |
| **存储密度** | $< 1$（需额外存放指针域） |
| **存储空间** | 不需要连续空间，动态分配，灵活 |
| **插入/删除** | 已知前驱结点时只需修改指针，$O(1)$ |

---

## 考试辨析

- 「链表是否为空」的判断条件取决于**是否带头结点**——408 选择题常以此设陷阱
- 头指针 ≠ 头结点：头结点是实际存在的结点（分配了空间），头指针只是一个指针变量`},{id:`ds-2-3-2`,chapterId:`ds-2`,title:`单链表的基本操作（插入与删除）`,keyConcepts:[`插入`,`删除`,`前插`,`后插`,`先连后断`,`查找前驱`],relatedPoints:[`ds-2-3-1`,`ds-2-3-3`],content:`## 单链表的插入操作

### 后插操作（已知插入位置的前驱结点 $p$）

在结点 $p$ **之后**插入新结点 $s$：

\`\`\`c
s->next = p->next;   // (1) 先连后继
p->next = s;          // (2) 再断前驱链
\`\`\`

> **口诀：先连后断！** 顺序不能反。若先执行 p->next = s，则原来 $p$ 的后继结点地址丢失。

时间复杂度：**$O(1)$**

---

### 前插操作（在结点 $p$ 之前插入）

由于单链表只能向后遍历，无法直接获取 $p$ 的前驱，有两种方法：

**方法一**：从头遍历找到 $p$ 的前驱，再做后插 — $O(n)$

**方法二（巧法）**：在 $p$ 之后插入新结点 $s$，然后**交换 $s$ 和 $p$ 的数据域** — $O(1)$

\`\`\`c
// 方法二：时间复杂度 O(1)，无需查找前驱
s->next = p->next;
p->next = s;
// 交换数据域
swap(s->data, p->data);
\`\`\`

---

## 单链表的删除操作

### 删除结点 $p$ 的后继结点 $q$

\`\`\`c
q = p->next;
p->next = q->next;   // 绕过结点 q
free(q);              // 释放内存
\`\`\`

时间复杂度：**$O(1)$**

### 删除结点 $p$ 本身

由于单链表无法回溯到 $p$ 的前驱，有两种方法：

**方法一**：从头遍历找到 $p$ 的前驱 — $O(n)$

**方法二（巧法）**：将后继结点 $q$ 的数据复制到 $p$，再删除 $q$ — $O(1)$

\`\`\`c
q = p->next;
p->data = q->data;    // 复制数据
p->next = q->next;    // 绕过 q
free(q);
\`\`\`

> **注意**：方法二**不能删除最后一个结点**（$p$ 无后继时无法使用）。

---

## 查找操作

| 操作 | 时间复杂度 | 说明 |
|------|-----------|------|
| 按位查找 | $O(n)$ | 从头遍历 $i$ 次 |
| 按值查找 | $O(n)$ | 从头遍历比较 |
| 求表长 | $O(n)$ | 需遍历整个链表 |

---

## 考试辨析

- 插入/删除语句的**先后顺序**是必考题（先连后断原则）
- 巧法的适用条件（需要有后继结点）是易错点
- 单链表不支持从后往前的遍历，凡是需要前驱的操作代价较高`},{id:`ds-2-3-3`,chapterId:`ds-2`,title:`单链表的建立（头插法与尾插法）`,keyConcepts:[`头插法`,`尾插法`,`逆序`,`原序`,`尾指针`],relatedPoints:[`ds-2-3-2`,`ds-3-1-1`],content:`## 头插法建立单链表

每次将新结点插入到**头结点之后**（即作为新的首元结点）。

\`\`\`c
LinkList List_HeadInsert(LinkList *L) {
    LNode *s;
    ElemType x;
    *L = (LinkList)malloc(sizeof(LNode));
    (*L)->next = NULL;    // 初始化空表
    scanf("%d", &x);
    while (x != 9999) {   // 以 9999 结束
        s = (LNode*)malloc(sizeof(LNode));
        s->data = x;
        s->next = (*L)->next;
        (*L)->next = s;
        scanf("%d", &x);
    }
    return *L;
}
\`\`\`

> **头插法结果**：链表中结点的顺序与输入顺序**相反**（逆序）。

---

## 尾插法建立单链表

每次将新结点插入到**链表尾部**，需要维护一个**尾指针** $r$。

\`\`\`c
LinkList List_TailInsert(LinkList *L) {
    LNode *s, *r;   // r 始终指向尾结点
    ElemType x;
    *L = (LinkList)malloc(sizeof(LNode));
    (*L)->next = NULL;
    r = *L;          // r 初始指向头结点
    scanf("%d", &x);
    while (x != 9999) {
        s = (LNode*)malloc(sizeof(LNode));
        s->data = x;
        r->next = s;
        r = s;        // r 移到新的尾结点
        scanf("%d", &x);
    }
    r->next = NULL;   // 尾结点指针域置空
    return *L;
}
\`\`\`

> **尾插法结果**：链表中结点的顺序与输入顺序**相同**（原序）。

---

## 头插法 vs 尾插法对比

| 方法 | 结果顺序 | 额外辅助 | 时间复杂度 |
|------|----------|----------|-----------|
| **头插法** | 逆序 | 无 | $O(n)$ |
| **尾插法** | 原序 | 尾指针 $r$ | $O(n)$ |

---

## 考试辨析

- 头插法的时间复杂度为 $O(n)$，**不是** $O(1)$（每次都要创建结点并插入）
- 头插法建表产生逆序 → 可以利用此性质实现**链表逆置**
- 尾插法建表保持原序 → 更适合读入数据后保持原有顺序的场景`},{id:`ds-2-3-4`,chapterId:`ds-2`,title:`双链表`,keyConcepts:[`双链表`,`prior指针`,`双向遍历`,`前驱`,`后继`],relatedPoints:[`ds-2-3-1`,`ds-2-3-2`,`ds-2-3-5`],content:`## 双链表结点结构

> 双链表结点有两个指针域：**prior**（指向前驱）和 **next**（指向后继）。

\`\`\`c
typedef struct DNode {
    ElemType data;
    struct DNode *prior, *next;
} DNode, *DLinkList;
\`\`\`

---

## 双链表的插入操作

在结点 $p$ **之后**插入结点 $s$：

\`\`\`c
// 4 步操作，顺序很重要！
s->next = p->next;               // (1)
if (p->next != NULL)
    p->next->prior = s;          // (2)
s->prior = p;                    // (3)
p->next = s;                     // (4)
\`\`\`

时间复杂度：**$O(1)$**

---

## 双链表的删除操作

删除结点 $p$ 的后继结点 $q$：

\`\`\`c
p->next = q->next;               // (1)
if (q->next != NULL)
    q->next->prior = p;          // (2)
free(q);
\`\`\`

时间复杂度：**$O(1)$**

---

## 双链表 vs 单链表

| 特性 | 单链表 | 双链表 |
|------|--------|--------|
| 结点指针数 | 1 个 (next) | 2 个 (prior + next) |
| 查找前驱 | $O(n)$ — 必须从头遍历 | $O(1)$ — prior 指针直达 |
| 存储密度 | 较高 | 较低（多一个指针） |
| 插入/删除（已知结点 p） | 删除 p 本身需 $O(n)$ | 全部 $O(1)$ |
| 判空（带头结点） | L->next == NULL | L->next == NULL && L->prior == NULL |

> 双链表**以空间换时间**：多一个 prior 指针，换取所有操作都能在 $O(1)$ 完成。

---

## 考试辨析

- 双链表插入删除时的指针修改顺序是常考题——**先处理新结点/被删结点的指针，再处理周围结点的指针**
- 表尾边界条件：插入/删除时若 $p$ 是尾结点，其 p->next == NULL，需做特殊判断`},{id:`ds-2-3-5`,chapterId:`ds-2`,title:`循环链表与静态链表`,keyConcepts:[`循环单链表`,`循环双链表`,`静态链表`,`游标`,`判空条件`],relatedPoints:[`ds-2-3-1`,`ds-2-3-4`],content:`## 循环单链表

> 尾结点的 next 指针指向**头结点**（而非 NULL），整个链表形成一个环。

| 特性 | 说明 |
|------|------|
| 判空条件 | L->next == L（头结点的 next 指向自己） |
| 访问尾结点 | 若**只设头指针**，访问尾结点需 $O(n)$ |
| 优化方案 | **只设尾指针**（不设头指针），则访问表头和表尾都是 $O(1)$ |

---

## 循环双链表

> 头结点的 prior 指向尾结点，尾结点的 next 指向头结点。

| 特性 | 说明 |
|------|------|
| 判空条件 | L->next == L && L->prior == L |
| 对称性 | 对任意结点 $p$：p->next->prior == p && p->prior->next == p（空表也成立） |

---

## 静态链表

> 借助**数组**来描述线性表的链式存储结构，用**游标 (cur)** 代替指针。

\`\`\`c
#define MaxSize 50
typedef struct {
    ElemType data;
    int cur;    // 游标：存放下一个结点的数组下标
} SLinkList[MaxSize];
\`\`\`

---

## 静态链表特点

| 特点 | 说明 |
|------|------|
| **不需移动元素** | 插入/删除只需修改游标，不需要移动元素 |
| **仍需连续空间** | 整个存储空间是数组（连续），但逻辑结构是链式的 |
| **不支持随机存取** | 只能从头开始通过游标遍历 |
| **适用场景** | 早期没有指针的语言（如 Basic、Fortran）；操作系统中的文件分配表 |

> **与顺序表的关键区别**：静态链表插入/删除**不需要移动元素**，只需要修改游标。408 选择题常以此辨析。

---

## 考试辨析

- **循环链表判空条件**是高频考点：
- 循环单链表：L->next == L
- 循环双链表：L->next == L && L->prior == L
- 静态链表插入删除"不移动元素"是常见干扰选项的考点`},{id:`ds-2-3-6`,chapterId:`ds-2`,title:`顺序表与链表的比较`,keyConcepts:[`顺序表`,`链表`,`对比`,`存取方式`,`存储密度`,`选择依据`],relatedPoints:[`ds-2-2-1`,`ds-2-3-1`,`ds-2-3-4`],content:`## 综合对比

| 比较维度 | 顺序表 | 链表 |
|----------|--------|------|
| **存取方式** | **随机存取** $O(1)$ | **顺序存取** $O(n)$ |
| **逻辑/物理结构** | 逻辑相邻 → 物理相邻 | 逻辑相邻 → 指针相连（物理可不邻） |
| **按位查找** | $O(1)$ | $O(n)$ |
| **按值查找** | $O(n)$ | $O(n)$ |
| **插入/删除** | $O(n)$（移动元素） | $O(1)$（已知结点指针时改指针） |
| **存储密度** | $= 1$（高） | $< 1$（低，需存指针） |
| **空间分配** | 静态或动态预分配，需要连续空间 | 只需分配单个结点，灵活 |
| **缓存友好** | 好（连续存储，空间局部性好） | 差（结点分散，缓存缺失多） |

---

## 选择依据

### 基于存储考虑
- 难以估计规模 → **链表**
- 存储密度要求高 → **顺序表**

### 基于运算考虑
- 经常按位存取 → **顺序表**
- 经常插入/删除 → **链表**

### 基于环境考虑
- 实现简单 → **顺序表**
- 空间灵活 → **链表**

---

## 考试辨析

- **「顺序表 = 逻辑结构」是常见错误**：顺序表既是逻辑结构又是存储结构，而链表描述的是存储结构
- **时间复杂度陷阱**：链表插入/删除是 $O(1)$ **前提是已知插入/删除位置的结点指针**。若需先查找位置，则总时间是查找 $O(n)$ + 插入 $O(1) = O(n)$
- 在实际工程中，顺序表因缓存友好（cache-friendly）而常常比链表性能更好——这是 408 选择题常见选项`},{id:`ds-3-1-1`,chapterId:`ds-3`,title:`栈的定义与基本操作`,keyConcepts:[`栈`,`LIFO`,`后进先出`,`栈顶`,`栈底`,`Push`,`Pop`],relatedPoints:[`ds-2-1-1`,`ds-2-1-2`],content:`## 栈的定义

> 栈 (Stack) 是**只允许在一端**进行插入和删除操作的**线性表**。

| 术语 | 含义 |
|------|------|
| **栈顶 (Top)** | 允许插入和删除的那一端 |
| **栈底 (Bottom)** | 不允许插入和删除的另一端 |
| **空栈** | 不含任何元素的栈 |

---

## 栈的特点：LIFO

> **后进先出 (Last In First Out)** — 最后入栈的元素最先出栈。

类比羽毛球筒：只能从筒口放入/取出羽毛球。

---

## 栈的基本操作

| 操作 | 函数原型 | 说明 |
|------|----------|------|
| **初始化** | InitStack(&S) | 构造一个空栈 |
| **判空** | StackEmpty(S) | 若栈空返回 true |
| **入栈** | Push(&S, x) | 将 $x$ 压入栈顶 |
| **出栈** | Pop(&S, &x) | 弹出栈顶元素，用 $x$ 返回 |
| **读栈顶** | GetTop(S, &x) | 读取栈顶元素但不删除 |

---

## 栈与线性表的关系

> **栈是操作受限的线性表**。限制：只能在栈顶操作。

- 线性表可以在任意位置插入/删除
- 栈只能在栈顶插入（Push）/ 删除（Pop）

---

## n 个元素的不同出栈序列数 — 卡特兰数（高频考点）

$$C_n = \\\\frac{1}{n+1} \\\\binom{2n}{n} = \\\\frac{(2n)!}{(n+1)!\\\\ n!}$$

| n | 出栈序列数 |
|---|----------|
| 3 | 5 |
| 4 | 14 |
| 5 | 42 |

---

## 考试辨析

- 入栈序列为 $1,2,\\\\ldots,n$，出栈序列中**每个元素之后小于它的元素必须降序排列**（合法出栈序列的判定条件）
- **卡特兰数**是408常考公式，$n=3$ 时出栈序列数为 5
- 栈是线性表——只不过操作位置被限制在一端`},{id:`ds-3-1-2`,chapterId:`ds-3`,title:`顺序栈的实现`,keyConcepts:[`顺序栈`,`top指针`,`入栈`,`出栈`,`判空`,`判满`],relatedPoints:[`ds-2-2-1`,`ds-3-1-1`,`ds-3-1-3`],content:`## 顺序栈的存储结构

> 使用一组地址连续的存储单元存放从栈底到栈顶的数据元素。

\`\`\`c
#define MaxSize 50
typedef struct {
    ElemType data[MaxSize];
    int top;          // 栈顶指针
} SqStack;
\`\`\`

---

## 两种 top 指针定义（必须区分！）

### 方式一：top = -1 初始化（408 主流方式）

| 操作 | 代码 | 说明 |
|------|------|------|
| 初始化 | \`S.top = -1\` | 栈空时 top = -1 |
| 判空 | \`S.top == -1\` | |
| 判满 | \`S.top == MaxSize - 1\` | |
| 入栈 | \`S.data[++S.top] = x\` | 先 +1，再赋值 |
| 出栈 | \`x = S.data[S.top--]\` | 先取值，再 -1 |
| 栈顶元素 | \`S.data[S.top]\` | |
| 元素个数 | \`S.top + 1\` | |

### 方式二：top = 0 初始化

| 操作 | 代码 | 说明 |
|------|------|------|
| 初始化 | \`S.top = 0\` | 栈空时 top = 0 |
| 判空 | \`S.top == 0\` | |
| 判满 | \`S.top == MaxSize\` | |
| 入栈 | \`S.data[S.top++] = x\` | 先赋值，再 +1 |
| 出栈 | \`x = S.data[--S.top]\` | 先 -1，再取值 |
| 栈顶元素位置 | \`S.top - 1\` | S.top 指向栈顶的下一个位置 |

> 408 考研以**方式一 (top = -1)**为主流，没特别说明默认此方式。

---

## 完整代码示例（top = -1）

\`\`\`c
// 初始化
void InitStack(SqStack *S) { S->top = -1; }

// 判空
bool StackEmpty(SqStack S) { return S.top == -1; }

// 入栈
bool Push(SqStack *S, ElemType x) {
    if (S->top == MaxSize - 1) return false;
    S->data[++S->top] = x;
    return true;
}

// 出栈
bool Pop(SqStack *S, ElemType *x) {
    if (S->top == -1) return false;
    *x = S->data[S->top--];
    return true;
}

// 读栈顶
bool GetTop(SqStack S, ElemType *x) {
    if (S.top == -1) return false;
    *x = S.data[S.top];
    return true;
}
\`\`\`

---

## 考试辨析

- 两种 top 定义方式的不同导致**入栈/出栈/判空/栈顶位置**的代码完全不同——做题时先确认题目采用哪种方式
- 顺序栈所有操作时间复杂度均为 $O(1)$`},{id:`ds-3-1-3`,chapterId:`ds-3`,title:`共享栈`,keyConcepts:[`共享栈`,`两个栈`,`相向增长`,`栈满条件`],relatedPoints:[`ds-3-1-2`],content:`## 共享栈的定义

> 利用栈底位置相对不变的特性，让两个顺序栈**共享同一个一维数组空间**，两个栈的栈底分别设置在数组的两端，各自向数组中间延伸。

\`\`\`
数组: [0] [1] [2] ...       ... [n-3] [n-2] [n-1]
        ^---- 栈1增长 ---->        <---- 栈2增长 ----^
       top1=-1                                       top2=n
\`\`\`

---

## 共享栈的数据结构

\`\`\`c
#define MaxSize 100
typedef struct {
    ElemType data[MaxSize];
    int top1;   // 栈1的栈顶指针
    int top2;   // 栈2的栈顶指针
} SqDoubleStack;
\`\`\`

---

## 关键参数

| 项目 | 栈1 | 栈2 |
|------|-----|-----|
| 初始 top | \`top1 = -1\` | \`top2 = MaxSize\` |
| 判空条件 | \`top1 == -1\` | \`top2 == MaxSize\` |
| **栈满条件** | **\`top1 + 1 == top2\`** | 两个栈共享判断 |
| 入栈方向 | 向右（下标增大） | 向左（下标减小） |

---

## 入栈/出栈操作

\`\`\`c
// 入栈
bool Push(SqDoubleStack *S, ElemType x, int stackNum) {
    if (S->top1 + 1 == S->top2) return false;  // 栈满
    if (stackNum == 1)
        S->data[++S->top1] = x;   // 栈1：向右增长
    else
        S->data[--S->top2] = x;   // 栈2：向左增长
    return true;
}

// 出栈
bool Pop(SqDoubleStack *S, ElemType *x, int stackNum) {
    if (stackNum == 1) {
        if (S->top1 == -1) return false;
        *x = S->data[S->top1--];
    } else {
        if (S->top2 == MaxSize) return false;
        *x = S->data[S->top2++];
    }
    return true;
}
\`\`\`

---

## 共享栈的优点

> **空间利用率更高**：一个栈的空间不够时，可以借用另一个栈的空闲空间。相比两个独立顺序栈，更不容易发生溢出。

---

## 考试辨析

- **栈满条件 top1 + 1 == top2** 是高频考点
- 共享栈常用于需要两个栈，且两者所需空间有反向增长趋势的场景`},{id:`ds-3-1-4`,chapterId:`ds-3`,title:`链栈`,keyConcepts:[`链栈`,`链式存储`,`单链表`,`头插法`],relatedPoints:[`ds-3-1-1`,`ds-3-1-2`,`ds-2-3-1`],content:`## 链栈的定义

> 采用**链式存储**的栈称为链栈。

- 链栈通常**没有头结点**（用栈顶指针代替头指针）
- 入栈/出栈都在**链表头部**进行（头插法 + 删除首元结点）

---

## 链栈的结点结构

\`\`\`c
typedef struct LinkNode {
    ElemType data;
    struct LinkNode *next;
} *LiStack;
\`\`\`

---

## 链栈 vs 顺序栈

| 特性 | 顺序栈 | 链栈 |
|------|--------|------|
| 存储空间 | 连续、固定大小 | 动态分配，灵活 |
| 溢出风险 | 栈满可能溢出 | 无栈满问题（除非内存耗尽） |
| 额外空间开销 | 无 | 每个结点多一个指针域 |
| 所有操作 | $O(1)$ | $O(1)$ |

---

## 链栈操作为何是 O(1)

> 入栈（头插）：将新结点插入到链表头部 — $O(1)$
> 出栈：删除链表首元结点 — $O(1)$
>
> 无需遍历链表，所有操作都在链表头部完成。

---

## 考试辨析

- 链栈入栈/出栈都在链表头部进行，**不需要头结点**（栈顶指针即头指针）
- 链栈不会出现"栈满"——这是链栈相比顺序栈的主要优势`},{id:`ds-3-2-1`,chapterId:`ds-3`,title:`队列的定义与基本操作`,keyConcepts:[`队列`,`FIFO`,`先进先出`,`队头`,`队尾`,`EnQueue`,`DeQueue`],relatedPoints:[`ds-2-1-1`,`ds-3-2-2`],content:`## 队列的定义

> 队列 (Queue) 是只允许在**一端插入、另一端删除**的线性表。

| 术语 | 含义 |
|------|------|
| **队头 (Front)** | 允许删除的那一端 |
| **队尾 (Rear)** | 允许插入的那一端 |
| **空队列** | 不含任何元素的队列 |

---

## 队列的特点：FIFO

> **先进先出 (First In First Out)** — 先入队的元素先出队。

类比排队买票：新来的人排在队尾，队头的人先离开。

---

## 队列的基本操作

| 操作 | 函数原型 | 说明 |
|------|----------|------|
| **初始化** | InitQueue(&Q) | 构造一个空队列 |
| **判空** | QueueEmpty(Q) | 若队列为空返回 true |
| **入队** | EnQueue(&Q, x) | 将 $x$ 插入队尾 |
| **出队** | DeQueue(&Q, &x) | 删除队头元素，用 $x$ 返回 |
| **读队头** | GetHead(Q, &x) | 读取队头元素但不删除 |

---

## 栈 vs 队列

| 比较 | 栈 (Stack) | 队列 (Queue) |
|------|-----------|-------------|
| 操作端 | 一端（栈顶） | 两端（队头 + 队尾） |
| 逻辑 | LIFO | FIFO |
| 插入 | Push (入栈) | EnQueue (入队) |
| 删除 | Pop (出栈) | DeQueue (出队) |

---

## 考试辨析

- 栈和队列都是**操作受限的线性表**——本质上是线性表，只是限制了操作位置
- 常考"以下哪个是队列的应用"——答：层次遍历、BFS、缓冲区、排队系统`},{id:`ds-3-2-2`,chapterId:`ds-3`,title:`顺序队列与循环队列`,keyConcepts:[`循环队列`,`假溢出`,`front`,`rear`,`取模运算`,`判空`,`判满`],relatedPoints:[`ds-3-2-1`,`ds-3-2-3`],content:`## 顺序队列的问题：假溢出

顺序队列（数组实现）中，随着入队/出队操作，\`front\` 和 \`rear\` 不断后移。当 \`rear == MaxSize\` 时，即使队头之前有空位，也无法继续入队——称为**假溢出**。

---

## 循环队列的解决方案

> 将顺序队列视为一个**环状空间**，通过**取模运算**使指针循环使用。

\`\`\`
入队: Q.rear = (Q.rear + 1) % MaxSize
出队: Q.front = (Q.front + 1) % MaxSize
\`\`\`

---

## 数据结构定义

\`\`\`c
#define MaxSize 50
typedef struct {
    ElemType data[MaxSize];
    int front;   // 队头指针
    int rear;    // 队尾指针
} SqQueue;
\`\`\`

> **默认约定**：front 指向队头元素，rear 指向队尾元素的**下一个位置**（即下一个入队的位置）。

---

## 核心操作（默认方式）

| 操作 | 代码 |
|------|------|
| 初始化 | \`Q.front = Q.rear = 0\` |
| 判空 | \`Q.front == Q.rear\` |
| 入队 | \`Q.data[Q.rear] = x; Q.rear = (Q.rear + 1) % MaxSize\` |
| 出队 | \`x = Q.data[Q.front]; Q.front = (Q.front + 1) % MaxSize\` |
| 队头元素 | \`Q.data[Q.front]\` |

---

## 判空/判满 — 三种方法（高频必考）

### 方法① 牺牲一个存储单元（最常用）

| 条件 | 判断 |
|------|------|
| 队空 | \`Q.front == Q.rear\` |
| 队满 | \`(Q.rear + 1) % MaxSize == Q.front\` |
| 元素个数 | \`(Q.rear - Q.front + MaxSize) % MaxSize\` |

> 此时队列最大容量为 \`MaxSize - 1\`（牺牲了一个单元）。

### 方法② 增设 size/flag 成员

| 条件 | 判断 |
|------|------|
| 队空 | \`Q.front == Q.rear && Q.size == 0\` |
| 队满 | \`Q.front == Q.rear && Q.size == MaxSize\` |

> 此时 front == rear 时需要结合 size 判断是空还是满。

### 方法③ 增设 tag 标志

入队时 tag = 1，出队时 tag = 0：

| 条件 | 判断 |
|------|------|
| 队空 | \`Q.front == Q.rear && Q.tag == 0\` |
| 队满 | \`Q.front == Q.rear && Q.tag == 1\` |

---

## 元素个数公式（通用）

$$\\\\text{length} = (\\\\text{rear} - \\\\text{front} + \\\\text{MaxSize}) \\\\bmod \\\\text{MaxSize}$$

---

## 考试辨析

- 不同教材/题目中 rear 可能指向队尾元素本身（而非下一个位置），此时入队顺序变更为先移动再赋值
- 判断循环队列空/满时，先确认题目采用哪种方法——这是408选择题最常见陷阱
- 2011年真题：rear 指向队尾元素，第一个入队元素在 A[0]，初始 front=0, rear=n-1`},{id:`ds-3-2-3`,chapterId:`ds-3`,title:`链式队列`,keyConcepts:[`链队`,`链式存储`,`队头指针`,`队尾指针`],relatedPoints:[`ds-3-2-1`,`ds-3-2-2`,`ds-2-3-1`],content:`## 链队的定义

> 采用**链式存储**的队列称为链队。

- 通常**带头结点**
- 需要两个指针：**队头指针** (front) 指向头结点，**队尾指针** (rear) 指向尾结点

---

## 链队的结点结构

\`\`\`c
// 结点
typedef struct LinkNode {
    ElemType data;
    struct LinkNode *next;
} LinkNode;

// 链队
typedef struct {
    LinkNode *front, *rear;  // 队头和队尾指针
} LinkQueue;
\`\`\`

---

## 核心操作

### 初始化（带头结点）

\`\`\`c
void InitQueue(LinkQueue *Q) {
    Q->front = Q->rear = (LinkNode*)malloc(sizeof(LinkNode));
    Q->front->next = NULL;
}
\`\`\`

### 判空

\`\`\`c
bool QueueEmpty(LinkQueue Q) {
    return Q.front == Q.rear;
}
\`\`\`

### 入队

\`\`\`c
void EnQueue(LinkQueue *Q, ElemType x) {
    LinkNode *s = (LinkNode*)malloc(sizeof(LinkNode));
    s->data = x;
    s->next = NULL;
    Q->rear->next = s;
    Q->rear = s;
}
\`\`\`

### 出队

\`\`\`c
bool DeQueue(LinkQueue *Q, ElemType *x) {
    if (Q->front == Q->rear) return false;
    LinkNode *p = Q->front->next;
    *x = p->data;
    Q->front->next = p->next;
    if (Q->rear == p)    // 若删除的是最后一个结点
        Q->rear = Q->front;
    free(p);
    return true;
}
\`\`\`

---

## 链队 vs 循环队列

| 特性 | 循环队列 | 链队 |
|------|---------|------|
| 存储空间 | 顺序、固定大小 | 链式、动态 |
| 判空/判满 | 需特殊处理（牺牲单元/size/tag） | 简单（front == rear） |
| 不会"满" | 否（会满） | 是（除非内存耗尽） |

---

## 考试辨析

- 链队出队时，若**删除的是最后一个结点**，需要将 \`rear\` 指回头结点（否则 rear 变成悬空指针）
- 链队适合元素个数不确定、空间需求动态变化的场景`},{id:`ds-3-2-4`,chapterId:`ds-3`,title:`双端队列`,keyConcepts:[`双端队列`,`两端操作`,`输入受限`,`输出受限`],relatedPoints:[`ds-3-2-1`,`ds-3-2-2`],content:`## 双端队列的定义

> 允许**两端都可以进行入队和出队操作**的队列。

其元素的逻辑结构仍是线性结构（一对一关系）。

---

## 双端队列的分类

| 类型 | 特点 |
|------|------|
| **双端队列** | 两端都可以入队/出队 |
| **输入受限的双端队列** | 一端允许插入和删除，另一端只允许删除 |
| **输出受限的双端队列** | 一端允许插入和删除，另一端只允许插入 |

---

## 双端队列的输出序列问题（常考）

> 已知入队序列 1, 2, 3, 4，判断某序列是否可能是合法出队序列。

| 数据结构 | 合法序列示例 | 非法序列示例 |
|----------|-------------|-------------|
| 栈 | 3,2,1,4 | 3,1,2,4 |
| 队列 | 1,2,3,4 | 4,1,2,3 |
| 双端队列 | 根据限制条件判断 | — |

---

## 考试辨析

- 408 常考"输入/输出受限的双端队列"出队序列合法性判断
- 判定方法：模拟操作过程，检查每个出队元素在当前状态下是否可以从允许的一端取出
- 这类题通常在选择题中出现，分值 2 分`},{id:`ds-3-3-1`,chapterId:`ds-3`,title:`栈在括号匹配中的应用`,keyConcepts:[`括号匹配`,`栈`,`扫描`,`左括号入栈`,`右括号匹配`],relatedPoints:[`ds-3-1-1`,`ds-3-3-2`],content:`## 括号匹配问题

判断一个表达式中的括号 \`()\`、\`[]\`、\`{}\` 是否成对出现且嵌套正确。

---

## 算法思想

1. 从左到右扫描表达式
2. 遇到**左括号** → 入栈
3. 遇到**右括号** → 出栈一个括号，检查是否匹配
- 若栈为空 → **右括号多余**（匹配失败）
- 若栈顶括号与当前右括号**类型不匹配** → 匹配失败
4. 扫描结束后，检查栈是否为空
- 栈为空 → 匹配成功
- 栈非空 → **左括号多余**（匹配失败）

---

## 算法实现

\`\`\`c
bool BracketCheck(char *str) {
    SqStack S;
    InitStack(&S);
    for (int i = 0; str[i] != '\\0'; i++) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '{')
            Push(&S, str[i]);         // 左括号入栈
        else if (str[i] == ')' || str[i] == ']' || str[i] == '}') {
            if (StackEmpty(S)) return false;  // 右括号多余
            char top;
            Pop(&S, &top);
            if (!Match(top, str[i])) return false;  // 类型不匹配
        }
    }
    return StackEmpty(S);  // 栈空则匹配成功
}
\`\`\`

---

## 时间复杂度

- 每个字符扫描一次，每个括号最多入栈/出栈一次
- 时间复杂度 $O(n)$，空间复杂度 $O(n)$

---

## 考试辨析

- 栈是括号匹配的**标准解决方案**
- 408 算法题可能考三种括号 \`()\`、\`[]\`、\`{}\` 的匹配，注意类型匹配判断`},{id:`ds-3-3-2`,chapterId:`ds-3`,title:`栈在表达式求值中的应用`,keyConcepts:[`表达式求值`,`中缀`,`后缀`,`前缀`,`运算符优先级`,`双栈法`],relatedPoints:[`ds-3-3-1`,`ds-3-3-3`],content:`## 三种表达式表示法

| 表示法 | 特点 | 示例（a + b * c） |
|--------|------|--------------------|
| **中缀 (Infix)** | 运算符在操作数中间 | \`a + b * c\` |
| **后缀 (Postfix / RPN)** | 运算符在操作数之后 | \`a b c * +\` |
| **前缀 (Prefix)** | 运算符在操作数之前 | \`+ a * b c\` |

> 中缀表达式需要括号和优先级规则，后缀和前缀表达式**不需要括号**即可唯一确定运算顺序。

---

## 中缀转后缀（核心算法）

1. 遇到**操作数** → 直接输出
2. 遇到 **\`(\`** → 入栈
3. 遇到 **\`)\`** → 依次弹出栈中运算符输出，直到 \`(\`（\`(\` 弹出但不输出）
4. 遇到**运算符**：
- 若优先级 **高于** 栈顶 或 栈顶为 \`(\` → 入栈
- 若优先级 ≤ 栈顶 → 依次弹出并输出，直到优先级更低或 \`(\` 或栈空，再入栈
5. 扫描结束 → 依次弹出栈中剩余运算符

---

## 运算符优先级（408统一沿用）

| 运算符 | 优先级 |
|--------|--------|
| \`*\`, \`/\` | 高 |
| \`+\`, \`-\` | 低 |
| \`(\` | 入栈时最高，栈中时最低 |

---

## 后缀表达式求值

1. 遇到**操作数** → 入栈
2. 遇到**运算符** → 弹出两个操作数（先弹出右操作数，后弹出左操作数），计算后将结果入栈

\`\`\`c
// 后缀求值示例
// 表达式: "23 15 + 4 *"  →  (23+15)*4 = 152
\`\`\`

---

## 中缀表达式直接求值（双栈法）

- 操作数栈 (OPND) — 存操作数
- 运算符栈 (OPTR) — 存运算符
- 扫描中缀表达式，操作数入 OPND，运算符按"中缀转后缀"规则处理
- 每弹出一个运算符，从 OPND 弹出两个数，计算后压回 OPND

---

## 考试辨析

- **2015年、2018年真题**考过中缀转后缀的手工模拟（选择题）
- 后缀表达式中的操作数顺序**与中缀中相同**（只是运算符位置变了）
- 先弹出的操作数是**右操作数**（对减法/除法至关重要）`},{id:`ds-3-3-3`,chapterId:`ds-3`,title:`栈在递归中的应用`,keyConcepts:[`递归`,`调用栈`,`递归工作栈`,`递归深度`,`递归转非递归`],relatedPoints:[`ds-3-1-1`,`ds-1-2-2`],content:`## 递归与栈的关系

> 递归调用的执行过程本质上是一个**栈**的入栈/出栈过程。

- 每次递归调用：**保存现场**（参数、局部变量、返回地址）→ 入栈
- 每次递归返回：**恢复现场** → 出栈

---

## 递归工作栈

系统为每一层递归创建一个**工作记录（栈帧）**，包含：
- 局部变量
- 参数值
- 返回地址

所有栈帧构成**递归工作栈**。递归深度 = 栈中栈帧的数量。

---

## 递归算法的时间空间分析

\`\`\`
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
\`\`\`

| 分析维度 | 值 | 说明 |
|----------|-----|------|
| 时间复杂度 | $O(n)$ | 递归 n 次，每次 O(1) |
| 空间复杂度 | $O(n)$ | 递归深度 = n |
| 递归工作栈深度 | n | 每次调用入栈一次 |

---

## 递归转非递归

> 任何递归算法都可以转换为**非递归算法**。核心手段：**用栈模拟递归调用过程**。

- 简单递归 → 可以转换为**循环**（如阶乘）
- 复杂递归 → 需要**显式栈**手动模拟（如二叉树遍历、汉诺塔）

---

## 递归的缺点

- 空间效率低（递归栈可能很深）
- 函数调用有额外时间开销
- 可能出现**栈溢出**（递归深度过大）

---

## 考试辨析

- 递归算法转换为非递归算法**必须使用栈**——这句话是错误的（简单递归可用循环，不需栈）
- 递归算法的空间复杂度主要由**递归深度**（而非总调用次数）决定`},{id:`ds-3-3-4`,chapterId:`ds-3`,title:`队列的应用`,keyConcepts:[`队列应用`,`层次遍历`,`BFS`,`缓冲区`,`页面替换`,`FIFO`],relatedPoints:[`ds-3-2-1`,`ds-5-3-1`,`ds-6-3-1`],content:`## 队列的典型应用

---

### 1. 二叉树的层次遍历（广度优先遍历）

> 逐层访问二叉树结点，需要队列辅助。

\`\`\`
1. 根结点入队
2. 队列非空时：
- 出队一个结点，访问之
- 将其左、右子结点（若存在）依次入队
\`\`\`

---

### 2. 图的广度优先搜索 (BFS)

> 逐层扩展访问图中顶点，需要队列辅助记录待访问顶点。

详见第6章"图的遍历"。

---

### 3. 主机与打印机之间的缓冲区

> 主机向打印机发送数据的速度远大于打印机接收数据的速度。
> 用队列作为**缓冲**：先发送的数据先打印（FIFO）。

---

### 4. CPU 进程调度

> 操作系统中的**先来先服务 (FCFS)** 调度算法基于队列实现。
> 详见操作系统第2章。

---

### 5. 页面替换算法 — FIFO

> 最早进入内存的页面最先被换出，使用队列管理页面顺序。

---

## 栈 vs 队列的应用对比

| 数据结构 | 应用场景 |
|----------|---------|
| **栈** | 括号匹配、表达式求值、递归、DFS、函数调用、Undo 撤销 |
| **队列** | 层次遍历、BFS、缓冲区、排队系统、FCFS 调度 |

---

## 考试辨析

- 层次遍历 = BFS → 用**队列**；深度优先遍历 = DFS → 用**栈**（或递归）
- 408 选择题常见：给定一个场景，判断应该用栈还是队列`},{id:`ds-3-4-1`,chapterId:`ds-3`,title:`数组的存储结构`,keyConcepts:[`数组`,`多维数组`,`行优先`,`列优先`,`地址计算`],relatedPoints:[`ds-2-2-1`],content:`## 数组的定义

> 数组是由 n 个**相同类型**的数据元素构成的有限序列，每个元素受 n 个线性关系的约束。

数组是线性表的推广：
- 一维数组 → 线性表
- 二维数组 → 每个元素是一维数组的线性表

---

## 多维数组的存储映射

由于内存是一维的，多维数组必须**映射**到一维地址空间。

### 行优先存储（C 语言默认）

**先行后列**：一行存完再存下一行。

$$LOC(a_{i,j}) = LOC(a_{0,0}) + [i \\times n + j] \\times L$$

其中 $n$ 为列数，$L$ 为每元素字节数。

### 列优先存储（Fortran 默认）

**先列后行**：一列存完再存下一列。

$$LOC(a_{i,j}) = LOC(a_{0,0}) + [j \\times m + i] \\times L$$

其中 $m$ 为行数。

---

## 地址计算公式对比

| 存储方式 | 二维地址公式 |
|----------|-------------|
| 行优先 | $LOC(a_{0,0}) + (i \\times n + j) \\times L$ |
| 列优先 | $LOC(a_{0,0}) + (j \\times m + i) \\times L$ |

---

## 考试辨析

- **矩阵下标范围**决定公式中的偏移量：若从 a[1][1] 开始，公式需调整为 $(i-1) \\times n + (j-1)$
- 408 常考给定下标范围，计算地址偏移
- 数组的**随机存取**特性：给定下标可 $O(1)$ 计算出地址`},{id:`ds-3-4-2`,chapterId:`ds-3`,title:`特殊矩阵的压缩存储`,keyConcepts:[`对称矩阵`,`三角矩阵`,`三对角矩阵`,`压缩存储`,`下标转换`],relatedPoints:[`ds-3-4-1`],content:`## 为什么要压缩存储

对具有特殊结构的矩阵（如对称矩阵），许多元素重复出现或为零，**压缩存储**可以节省空间。

> 压缩存储的核心思想：**只存储有效元素**，通过下标映射访问。

---

## 一、对称矩阵的压缩存储

$a_{i,j} = a_{j,i}$，只需存储上三角或下三角（含主对角线）。

存储元素个数：$\\frac{n(n+1)}{2}$

### 行优先存储下三角（含主对角线）

| 条件 | 在一维数组 B 中的下标 |
|------|----------------------|
| $i \\ge j$（下三角） | $\\frac{i(i-1)}{2} + j - 1$ |
| $i < j$（上三角） | $\\frac{j(j-1)}{2} + i - 1$（利用对称性） |

> 下标从 1 开始；若用 0 下标，公式需相应调整。

---

## 二、三角矩阵的压缩存储

| 类型 | 特点 | 元素数 |
|------|------|--------|
| **上三角矩阵** | 下三角为常数 C | $\\frac{n(n+1)}{2} + 1$ |
| **下三角矩阵** | 上三角为常数 C | $\\frac{n(n+1)}{2} + 1$ |

> 额外存储一个**常数项** C（存在一维数组最后一个位置）。

---

## 三、三对角矩阵的压缩存储

三条对角线外全为 0。每行最多 3 个非零元素。

| 对角线 | 位置关系 |
|--------|---------|
| 主对角线 | $i = j$ |
| 下次对角线 | $i = j + 1$ |
| 上次对角线 | $i = j - 1$ |

一维数组存储非零元素个数：$3n - 2$

行优先下标公式：
$$k = 2i + j - 3 \\quad (|i-j| \\le 1)$$

---

## 考试辨析

- 下标转换公式**不要求背诵**，但需要理解推导方法
- 关键考点：给出矩阵元素下标 $(i,j)$，求在一维压缩数组中的位置 $k$
- 注意**下标起始**（0 或 1）对公式的影响`},{id:`ds-3-4-3`,chapterId:`ds-3`,title:`稀疏矩阵`,keyConcepts:[`稀疏矩阵`,`三元组`,`十字链表`,`稀疏因子`],relatedPoints:[`ds-3-4-2`,`ds-2-3-5`],content:`## 稀疏矩阵的定义

> 非零元素个数远少于零元素个数，且非零元素分布无规律的矩阵。

**稀疏因子** $\\delta = \\frac{\\text{非零元素个数}}{\\text{总元素个数}}$，通常 $\\delta \\le 0.05$。

---

## 压缩存储方式

### 1. 三元组顺序表

\`\`\`c
typedef struct {
    int row, col;     // 行号、列号
    ElemType value;   // 元素值
} Triple;

typedef struct {
    Triple data[MaxSize];
    int rows, cols, num;  // 行数、列数、非零元素个数
} TSMatrix;
\`\`\`

> 按行优先顺序存储，可用于：矩阵转置、矩阵加法等操作。

### 2. 十字链表

\`\`\`c
typedef struct OLNode {
    int row, col;
    ElemType value;
    struct OLNode *right, *down;  // 同行下一个、同列下一个
} OLNode, *OLink;
\`\`\`

> 每个非零元素是一个结点，通过 right 和 down 指针串联同行/同列的结点。

---

## 三元组 vs 十字链表

| 特性 | 三元组顺序表 | 十字链表 |
|------|------------|---------|
| 插入/删除 | 困难（需移动元素） | 方便（改指针） |
| 随机存取 | $O(num)$（需搜索） | 沿链表查找 |
| 存储开销 | 小 | 大（每个结点多两个指针） |
| 适用场景 | 矩阵非零元素个数固定的场景 | 非零元素个数频繁变化的场景 |

---

## 考试辨析

- 稀疏矩阵压缩存储后**失去了随机存取特性**（无法直接计算地址，必须搜索）
- 三元组存储的矩阵转置时间复杂度：朴素 $O(num \\times n)$，优化的快速转置 $O(num + n)$`},{id:`ds-4-1-1`,chapterId:`ds-4`,title:`串的定义与基本操作`,keyConcepts:[`串`,`字符串`,`子串`,`主串`,`串长`,`空串`,`空白串`,`串相等`],relatedPoints:[`ds-2-1-1`],content:`## 串的定义

> 串 (String) 是由**零个或多个字符**组成的有限序列。

记作：$S = 'a_1 a_2 \\ldots a_n'$（$n \\ge 0$）

| 术语 | 含义 |
|------|------|
| **串名** | $S$ |
| **串值** | 引号中的字符序列 |
| **串长** | $n$，字符的个数 |
| **空串** | $n = 0$ 的串，记作 $\\emptyset$ |

---

## 串的相关概念辨析（高频考点）

| 概念 | 定义 | 说明 |
|------|------|------|
| **子串** | 串中任意个**连续**字符组成的子序列 | "abc" 的子串有 "a","b","c","ab","bc","abc" 和空串 |
| **主串** | 包含子串的串 | — |
| **字符位置** | 字符在串中的序号 | 从 **1** 开始 |
| **子串位置** | 子串第一个字符在主串中的位置 | — |
| **串相等** | 长度相等且对应位置字符相同 | — |
| **空串 vs 空白串** | 空串 $n=0$，空白串由一个或多个空格组成 $n \\ge 1$ | 408 选择题常见干扰项 |

---

## 串的基本操作

| 操作 | 说明 |
|------|------|
| StrAssign(&T, chars) | 赋值 |
| StrCopy(&T, S) | 复制 |
| StrEmpty(S) | 判空 |
| StrCompare(S, T) | 比较（字典序） |
| StrLength(S) | 求串长 |
| Concat(&T, S1, S2) | 连接 |
| SubString(&Sub, S, pos, len) | 求子串 |
| Index(S, T) | 定位子串（模式匹配） |
| Replace(&S, T, V) | 替换 |

---

## 串与线性表的区别

| 比较维度 | 线性表 | 串 |
|----------|--------|-----|
| 数据元素 | 单个元素（任意类型） | **字符** |
| 操作对象 | 单个元素 | **子串**（连续若干字符） |
| 主要操作 | 插入、删除 | **查找**（模式匹配） |

> 串是一种**特殊的线性表**——数据元素限定为字符，且操作常以子串为单位。

---

## 考试辨析

- 空串 ($n=0$) \\u2260 空白串 ($n \\ge 1$，内容是空格)——此考点在408选择题中频繁出现
- 子串必须是**连续**的字符序列，子序列可以不连续（串没有"子序列"概念）`},{id:`ds-4-1-2`,chapterId:`ds-4`,title:`串的存储结构`,keyConcepts:[`顺序存储`,`堆分配`,`块链存储`,`存储密度`],relatedPoints:[`ds-4-1-1`,`ds-2-2-1`,`ds-2-3-1`],content:`## 串的三种存储方式

---

### 一、定长顺序存储

\`\`\`c
#define MaxLen 255
typedef struct {
    char ch[MaxLen];
    int length;
} SString;
\`\`\`

> 超过 MaxLen 的部分被**截断**。

---

### 二、堆分配存储

\`\`\`c
typedef struct {
    char *ch;    // 动态分配
    int length;
} HString;
\`\`\`

> 用 malloc/free 管理空间，灵活但需要手动管理。

---

### 三、块链存储

\`\`\`c
#define ChunkSize 4
typedef struct Chunk {
    char ch[ChunkSize];
    struct Chunk *next;
} Chunk;
typedef struct {
    Chunk *head, *tail;
    int curlen;
} LString;
\`\`\`

| 块大小 | 存储密度 | 操作效率 |
|--------|---------|---------|
| 大 | 高 | 低（插入删除移动多） |
| 小 | 低 | 高（指针灵活） |

> **存储密度** $= \\frac{\\text{串值所占字节}}{\\text{结点结构所占字节}}$

---

## 三种存储方式对比

| 存储方式 | 优点 | 缺点 |
|----------|------|------|
| 定长顺序 | 简单 | 可能截断 |
| 堆分配 | 灵活 | 需手动管理 |
| 块链 | 插入删除方便 | 存储密度低 |

---

## 考试辨析

- 408 对串的存储结构要求不高，重点掌握**顺序存储**即可
- 块链存储的存储密度分析曾是选择题考点`},{id:`ds-4-2-1`,chapterId:`ds-4`,title:`简单模式匹配算法 (BF算法)`,keyConcepts:[`BF算法`,`暴力匹配`,`回溯`,`O(n*m)`,`模式匹配`],relatedPoints:[`ds-4-2-2`],content:`## BF (Brute Force) 算法

> 从主串 $S$ 的第一个字符开始，依次与模式串 $T$ 比较。若失配，则 $i$ 回溯到 $i-j+2$，$j$ 回到 $1$，重新开始比较。

---

## 算法步骤

1. 设 $i$ 指向主串当前位置，$j$ 指向模式串当前位置
2. 若 $S[i] == T[j]$，则 $i++$，$j++$
3. 若 $S[i] \\neq T[j]$，则 $i$ **回溯**到本轮开始的下一个位置，$j$ 回到 $1$
4. 若 $j$ 超出模式串长度，匹配成功；若 $i$ 超出主串，失败

---

## 代码实现

\`\`\`c
int Index_BF(SString S, SString T) {
    int i = 1, j = 1;
    while (i <= S.length && j <= T.length) {
        if (S.ch[i] == T.ch[j]) {
            i++; j++;              // 继续比较后续字符
        } else {
            i = i - j + 2;         // i 回溯
            j = 1;                 // j 回到第1位
        }
    }
    if (j > T.length) return i - T.length;  // 匹配成功
    else return 0;                           // 匹配失败
}
\`\`\`

---

## 时间复杂度分析

| 情况 | 复杂度 | 说明 |
|------|--------|------|
| 最好情况 | $O(n+m)$ | 每次第1个字符就不匹配 |
| 平均情况 | $O(n+m)$ | 一般情况 |
| **最坏情况** | **$O(n \\times m)$** | 如 $S$="aaaaaaaaab"，$T$="aaab" |

> 最坏情况下，每次匹配到最后一位才发现不匹配，然后回溯重来。

---

## BF 算法的缺点

> **主串指针 $i$ 会回溯**——当失配时，已经比较过的主串字符需要重新比较。
> KMP算法正是针对这一缺点进行了改进。

---

## 考试辨析

- BF 算法的回溯公式：$i = i - j + 2$（i 回到本轮开始的下一个位置）
- BF 最坏时间复杂度 $O(n \\times m)$，虽然理论上比 KMP 差，但实际一般情况表现良好`},{id:`ds-4-2-2`,chapterId:`ds-4`,title:`KMP算法 — next数组`,keyConcepts:[`KMP`,`next数组`,`部分匹配值`,`前缀`,`后缀`,`i不回溯`,`O(n+m)`],relatedPoints:[`ds-4-2-1`,`ds-4-2-3`],content:`## KMP 算法的核心思想

> **主串指针 $i$ 永不回溯！** 当失配时，利用已经匹配的信息，让模式串指针 $j$ 跳到合适的位置（next[j]）继续比较。

---

## 前缀、后缀与部分匹配值 (PM)

| 术语 | 定义 | 示例（串 "ababa"） |
|------|------|---------------------|
| **前缀** | 除最后一个字符外，所有头部子串 | "a","ab","aba","abab" |
| **后缀** | 除第一个字符外，所有尾部子串 | "a","ba","aba","baba" |
| **部分匹配值** | 前缀与后缀的**最长相等长度** | 3（"aba"） |

---

## next 数组 — 核心公式

> **next[j]** 的含义：当模式串第 $j$ 个字符失配时，应将 $j$ 跳转到 **next[j]** 继续与主串 $i$ 位置比较。

### 手算规则（下标从 1 开始 — 408 标准）

| 规则 | 说明 |
|------|------|
| next[1] = **0** | 第一个字符失配，$i$ 右移，$j$ 回到 1 |
| next[2] = **1** | 第二个字符失配，$j$ 回到 1 |
| j \\u2265 3 | 求 $P[1 \\ldots j-1]$ 的**最长公共前后缀长度** $k$，则 next[j] = **$k + 1$** |

> **记忆口诀**：看前缀，找后缀，最长公共加个 1。

---

## 求 next 数组示例

模式串 T = **"abaabc"**

| j | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| T[j] | a | b | a | a | b | c |
| 前缀子串 | — | — | "ab" | "aba" | "abaa" | "abaab" |
| 最长公共前后缀 | — | — | 0 | 1 | 1 | 2 |
| **next[j]** | **0** | **1** | **1** | **2** | **2** | **3** |

---

## KMP 算法实现

\`\`\`c
int Index_KMP(SString S, SString T, int next[]) {
    int i = 1, j = 1;
    while (i <= S.length && j <= T.length) {
        if (j == 0 || S.ch[i] == T.ch[j]) {
            i++; j++;                       // 继续比较
        } else {
            j = next[j];                    // j 跳转，i 不动！
        }
    }
    if (j > T.length) return i - T.length;
    else return 0;
}
\`\`\`

> **关键**：i 只增不减（不回溯），j 根据 next 数组跳转。

---

## 时间复杂度

| 阶段 | 复杂度 |
|------|--------|
| 求 next 数组 | $O(m)$ |
| KMP 匹配 | $O(n)$ |
| **总计** | **$O(n + m)$** |

---

## 考试辨析（高频必考）

- next[1] **恒为 0**，next[2] **恒为 1**（408 标准下标从1开始）
- **next 值 \\u2260 最长公共前后缀长度**：next = 长度 + 1
- 若下标从 0 开始（如 LeetCode），则 next[0] = -1，且 next = 长度（不加1）
- 408 只考手算 next/nextval，**不考 KMP 算法大题**，全以选择题形式出现`},{id:`ds-4-2-3`,chapterId:`ds-4`,title:`KMP算法的优化 — nextval数组`,keyConcepts:[`nextval`,`优化`,`无效回溯`,`字符相等`],relatedPoints:[`ds-4-2-2`],content:`## 为什么要优化

> 当 $P[j] == P[next[j]]$ 时，next[j] 指向的字符与当前失配字符相同，必然再次失配，产生**无效回溯**。

nextval 通过**跳过相等的字符**来避免这种浪费。

---

## nextval 的计算规则

| 条件 | nextval[j] |
|------|-----------|
| $P[j] \\neq P[next[j]]$ | nextval[j] = next[j] |
| $P[j] == P[next[j]]$ | 令 $k = next[j]$，继续向前比较直到不等或到首位：nextval[j] = nextval[k] |

> nextval[1] = **0**（固定）

---

## 手算 nextval 示例

模式串 T = **"abaabc"**，已知 next 数组：

| j | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| T[j] | a | b | a | a | b | c |
| next[j] | 0 | 1 | 1 | 2 | 2 | 3 |

计算 nextval：

| j | 判断 | nextval |
|---|------|---------|
| 1 | 固定 | **0** |
| 2 | T[2]=b, T[1]=a, 不相等 | nextval[2] = next[2] = **1** |
| 3 | T[3]=a, T[1]=a, **相等** | nextval[3] = nextval[1] = **0** |
| 4 | T[4]=a, T[2]=b, 不相等 | nextval[4] = next[4] = **2** |
| 5 | T[5]=b, T[2]=b, **相等** | nextval[5] = nextval[2] = **1** |
| 6 | T[6]=c, T[3]=a, 不相等 | nextval[6] = next[6] = **3** |

最终 nextval = **[0, 1, 0, 2, 1, 3]**

---

## 再示例：T = "aaaaab"

| j | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| T[j] | a | a | a | a | a | b |
| next[j] | 0 | 1 | 2 | 3 | 4 | 5 |
| **nextval[j]** | **0** | **0** | **0** | **0** | **0** | **5** |

> 当模式串为 **"aaaaab"** 时，nextval 使前 5 个位置失配时 j 都跳到 0，大幅减少比较次数。

---

## next vs nextval 总结

| 数组 | 优化程度 | 计算复杂度 | 使用场景 |
|------|---------|-----------|---------|
| next | 基础 | 简单 | 一般情况 |
| nextval | 更优 | 稍复杂 | 模式串有重复字符时效果明显 |

---

## 考试辨析

- 408 考试 nextval 与 next **均可能考察**（通常在同一道选择题中）
- 手算时务必**逐位判断**：$P[j]$ 与 $P[next[j]]$ 是否相等
- nextval[1] = 0 是固定规则（下标从1开始时）`},{id:`ds-5-1-1`,chapterId:`ds-5`,title:`树的定义与基本术语`,keyConcepts:[`树`,`根`,`结点`,`度`,`叶子`,`分支结点`,`孩子`,`双亲`,`深度`,`高度`,`有序树`,`无序树`,`森林`],relatedPoints:[`ds-5-1-2`],content:`## 树的定义
> 树 (Tree) 是 $n$（$n \\ge 0$）个结点的**有限集**。当 $n=0$ 时称为**空树**。

在任意一棵非空树中：
1. 有且仅有一个特定的称为**根 (Root)** 的结点
2. 其余结点可分为 $m$（$m > 0$）个互不相交的有限集 $T_1, T_2, \\ldots, T_m$，每个集合本身又是一棵树——称为根的**子树 (SubTree)**

> 树的定义是**递归**的——树由根和子树组成，子树本身也是树。

---

## 树的基本术语

| 术语 | 含义 |
|------|------|
| **结点的度** | 该结点的孩子个数 |
| **树的度** | 树中所有结点的度的最大值 |
| **叶子 (Leaf)** | 度为 0 的结点（终端结点） |
| **分支结点** | 度 > 0 的结点（非终端结点） |
| **孩子 (Child)** | 某结点的子树的根 |
| **双亲 (Parent)** | 若 B 是 A 的孩子，则 A 是 B 的双亲 |
| **兄弟 (Sibling)** | 同一双亲的孩子之间互称兄弟 |
| **路径** | 从根到某结点所经过的分支序列 |
| **路径长度** | 路径上所经过的"边"的个数 |
| **祖先** | 从根到某结点路径上的所有结点 |
| **子孙** | 某结点的子树中的所有结点 |
| **结点的深度** | 从根开始向下数（根深度为 1） |
| **结点的高度** | 从叶结点开始向上数（叶高度为 1） |
| **树的高度/深度** | 树中结点的最大层数 |

---

## 树的表示方法

| 方法 | 说明 |
|------|------|
| 树形图 | 直观的图形表示 |
| 嵌套集合 | 集合圈套圈 |
| 凹入表示法 | 缩进表示（类似目录结构） |
| 广义表 | $(A(B(D,E), C(F)))$ |

---

## 考试辨析

- 树不能为空（408教材一般约定）——这与二叉树不同（二叉树可以为空）
- 根结点没有前驱，其余每个结点有且仅有一个前驱
- 树中结点可以有多个后继——这是树与线性表的本质区别`},{id:`ds-5-1-2`,chapterId:`ds-5`,title:`树的性质`,keyConcepts:[`树的性质`,`结点数=总度数+1`,`度为m的树`,`m叉树`],relatedPoints:[`ds-5-1-1`,`ds-5-2-2`],content:`## 树的基本性质

### 性质 1：结点数 = 总度数 + 1

> 树中结点数 $n$ 等于所有结点的度数之和再加 1。
>
> $$n = \\sum_{i=1}^{n} d_i + 1 = n_0 + n_1 + n_2 + \\cdots + n_m$$

其中 $n_k$ 表示度为 $k$ 的结点个数。

**推导**：除根结点外，每个结点都有一条来自双亲的边——即每个结点恰好对应其双亲结点的一个度。

---

### 性质 2：度为 $m$ 的树中第 $i$ 层最多有 $m^{i-1}$ 个结点

根结点位于第 1 层，逐层最多有 $1, m, m^2, \\ldots$ 个结点。

---

### 性质 3：高度为 $h$ 的 $m$ 叉树最多结点数

$$\\frac{m^h - 1}{m - 1}$$

---

### 性质 4：$n$ 个结点的 $m$ 叉树最小高度

$$\\lceil \\log_m(n(m-1)+1) \\rceil$$

---

## 度为 m 的树 vs m 叉树（高频辨析）

| 概念 | 定义 | 举例 |
|------|------|------|
| **度为 m 的树** | 树中结点的最大度为 $m$ **且至少有一个结点度为 $m$** | 必须存在度为 m 的结点 |
| **m 叉树** | 每个结点最多有 $m$ 个孩子 | 可以所有结点度 $< m$ |
| **有序 m 叉树** | m 叉树中孩子按顺序排列 | 二叉树是最常用的有序树 |

> 度为 m 的树一定是 m 叉树，但 m 叉树不一定是度为 m 的树。

---

## 考试辨析

- **结点数 = 总度数 + 1** 是解决树中结点计数问题的核心公式
- 给定 $n_0, n_1, n_2, \\ldots$，可借助总度数公式求解任何未知量
- 区分"度为 m"和"m 叉"——前者要求至少有一个结点度恰好为 m`},{id:`ds-5-2-1`,chapterId:`ds-5`,title:`二叉树的定义与基本形态`,keyConcepts:[`二叉树`,`左子树`,`右子树`,`满二叉树`,`完全二叉树`,`二叉排序树`,`平衡二叉树`],relatedPoints:[`ds-5-1-1`,`ds-5-2-2`],content:`## 二叉树的定义

> 二叉树是 $n$（$n \\ge 0$）个结点的有限集，或为空集（空二叉树），或由一个根结点和两棵互不相交、分别称为**左子树**和**右子树**的二叉树组成。

---

## 二叉树 vs 树的关键区别

| 区别 | 树 | 二叉树 |
|------|-----|--------|
| 子树顺序 | 无序 | **严格区分左右** |
| 可以为空 | 408教材不可为空 | **可以为空** |
| 度为 2 的树 | 至少有一个结点度为 2 | 可以没有度为 2 的结点 |

> 二叉树**不是树的特例**，而是两个不同的概念。二叉树严格区分左右子树。

---

## 几种特殊的二叉树

| 类型 | 定义 | 特征 |
|------|------|------|
| **满二叉树** | 每层结点数都达到最大值 | 高度为 $h$ 时有 $2^h-1$ 个结点 |
| **完全二叉树** | 结点编号与满二叉树一一对应（从上到下、从左到右） | 度为 1 的结点只有 0 或 1 个 |
| **二叉排序树 (BST)** | 左子树 $<$ 根 $<$ 右子树 | 用于查找 |
| **平衡二叉树 (AVL)** | 任意结点的左右子树高度差 $\\le 1$ | 用于高效查找 |

---

## 完全二叉树的判定

> 将结点从上到下、从左到右依次编号（从 1 开始），若任何一个结点的编号都与等高度的满二叉树中相同位置的编号一致，则为完全二叉树。

---

## 考试辨析

- 二叉树**严格区分左右子树**——两棵不同的二叉树即使存储的值相同，但左右子树互换就是两棵不同的树
- 完全二叉树中度为 1 的结点只能是 0 或 1 个
- 满二叉树一定是完全二叉树，完全二叉树不一定是满二叉树`},{id:`ds-5-2-2`,chapterId:`ds-5`,title:`二叉树的性质`,keyConcepts:[`二叉树性质`,`n0=n2+1`,`第k层最多结点`,`高度公式`,`完全二叉树`],relatedPoints:[`ds-5-2-1`,`ds-5-1-2`],content:`## 二叉树的五大性质（高频必考）

### 性质 1：叶子结点数 = 度为 2 的结点数 + 1

$$n_0 = n_2 + 1$$

**推导**：$n = n_0 + n_1 + n_2 = (n_1 + 2n_2) + 1$  →  $n_0 = n_2 + 1$

> 这是 408 最爱考的性质，必须会推导。

---

### 性质 2：第 $k$ 层最多有 $2^{k-1}$ 个结点

（根结点在第 1 层，$k \\\\ge 1$）

---

### 性质 3：高度为 $h$ 的二叉树最多有 $2^h - 1$ 个结点

（空树 $h = 0$，只有根结点 $h = 1$）

---

### 性质 4：$n$ 个结点的完全二叉树的高度

$$h = \\\\lfloor \\\\log_2 n \\\\rfloor + 1 \\\\quad \\\\text{或} \\\\quad h = \\\\lceil \\\\log_2 (n+1) \\\\rceil$$

---

### 性质 5：完全二叉树中度为 1 的结点数

> $n_1$ 只能是 **0 或 1**。

| $n$ 的奇偶 | $n_1$ |
|-----------|-------|
| $n$ 为奇数 | $n_1 = 0$ |
| $n$ 为偶数 | $n_1 = 1$ |

---

## 完全二叉树的编号关系

若对完全二叉树从 1 开始按层编号：

| 结点 $i$ | 关系 |
|----------|------|
| 双亲 | $\\\\lfloor i/2 \\\\rfloor$ |
| 左孩子 | $2i$（若 $2i \\\\le n$） |
| 右孩子 | $2i+1$（若 $2i+1 \\\\le n$） |
| 所在层次 | $\\\\lfloor \\\\log_2 i \\\\rfloor + 1$ |

---

## 考试辨析

- $n_0 = n_2 + 1$ 是选择+填空题的高频考点
- 已知结点总数 $n$，可通过性质联立方程求出 $n_0$、$n_1$、$n_2$
- 完全二叉树的编号关系常用于堆排序（第8章）`},{id:`ds-5-2-3`,chapterId:`ds-5`,title:`二叉树的存储结构`,keyConcepts:[`顺序存储`,`链式存储`,`二叉链表`,`三叉链表`],relatedPoints:[`ds-5-2-1`,`ds-2-2-1`,`ds-2-3-1`],content:`## 顺序存储

> 将二叉树结点按**完全二叉树的编号**存入一维数组。空结点需占位（用 0 或特殊符号）。

| 特点 | 说明 |
|------|------|
| 适用 | **完全二叉树**和**满二叉树**（无空间浪费） |
| 不适合 | 一般二叉树（空间浪费严重，最坏右单支需 $2^n-1$ 空间） |
| 访问 | 通过编号公式 $O(1)$ 找到双亲/孩子 |

---

## 链式存储（最常用）

### 二叉链表

\`\`\`c
typedef struct BiTNode {
    ElemType data;
    struct BiTNode *lchild, *rchild;
} BiTNode, *BiTree;
\`\`\`

| 特点 | 说明 |
|------|------|
| 指针域 | 2 个（lchild + rchild） |
| 空指针数 | $n+1$ 个（共 $2n$ 个链域，$n-1$ 个非空） |

### 三叉链表

\`\`\`c
typedef struct TriTNode {
    ElemType data;
    struct TriTNode *lchild, *rchild, *parent;
} TriTNode, *TriTree;
\`\`\`

> 多一个 parent 指针，方便找双亲——但空间开销更大。

---

## 顺序 vs 链式存储对比

| 存储方式 | 优点 | 缺点 |
|----------|------|------|
| 顺序存储 | 随机访问，不需指针 | 仅适合完全二叉树 |
| 链式存储 | 灵活，适合各种形态 | 需额外指针空间 |

---

## 考试辨析

- $n$ 个结点的二叉链表中共有 **$n+1$ 个空指针域**——这也是线索二叉树的"可利用空间"
- 完全二叉树用顺序存储效率高，一般二叉树用链式存储`},{id:`ds-5-3-1`,chapterId:`ds-5`,title:`二叉树的遍历`,keyConcepts:[`先序`,`中序`,`后序`,`层次遍历`,`递归`,`非递归`,`栈`,`队列`],relatedPoints:[`ds-5-2-1`,`ds-3-1-1`,`ds-3-2-1`],content:`## 四种遍历方式

| 遍历方式 | 顺序 | 递归实现 | 非递归辅助 |
|----------|------|----------|-----------|
| **先序 (NLR)** | 根 → 左 → 右 | 简单 | 栈 |
| **中序 (LNR)** | 左 → 根 → 右 | 简单 | 栈 |
| **后序 (LRN)** | 左 → 右 → 根 | 简单 | 栈（复杂，需记录访问状态） |
| **层次遍历** | 逐层从左到右 | — | **队列** |

---

## 递归遍历代码

\`\`\`c
// 先序
void PreOrder(BiTree T) {
    if (T) { visit(T); PreOrder(T->lchild); PreOrder(T->rchild); }
}
// 中序
void InOrder(BiTree T) {
    if (T) { InOrder(T->lchild); visit(T); InOrder(T->rchild); }
}
// 后序
void PostOrder(BiTree T) {
    if (T) { PostOrder(T->lchild); PostOrder(T->rchild); visit(T); }
}
\`\`\`

---

## 非递归中序遍历（栈）

\`\`\`c
void InOrder_NonRecur(BiTree T) {
    Stack S; InitStack(&S);
    BiTree p = T;
    while (p || !StackEmpty(S)) {
        if (p) {
            Push(&S, p); p = p->lchild;  // 一路向左
        } else {
            Pop(&S, &p); visit(p);
            p = p->rchild;                // 转向右子树
        }
    }
}
\`\`\`

---

## 层次遍历（队列）

\`\`\`c
void LevelOrder(BiTree T) {
    Queue Q; InitQueue(&Q);
    EnQueue(&Q, T);
    while (!QueueEmpty(Q)) {
        DeQueue(&Q, &p);
        visit(p);
        if (p->lchild) EnQueue(&Q, p->lchild);
        if (p->rchild) EnQueue(&Q, p->rchild);
    }
}
\`\`\`

---

## 时间复杂度

所有遍历算法的时间复杂度均为 $O(n)$（每个结点访问一次）。

递归遍历的空间复杂度为 $O(h)$（递归栈深度 = 树高），最坏 $O(n)$。

---

## 考试辨析

- 先序/中序/后序都属于**深度优先遍历(DFS)**
- 层次遍历属于**广度优先遍历(BFS)**
- 中序非递归算法是408常考代码，需要能手写`},{id:`ds-5-3-2`,chapterId:`ds-5`,title:`遍历序列重建二叉树`,keyConcepts:[`重建`,`先序+中序`,`后序+中序`,`层序+中序`,`唯一确定`],relatedPoints:[`ds-5-3-1`],content:`## 唯一确定二叉树的条件

> **需要中序序列 + 任意一种其他遍历序列** 才能唯一确定二叉树。

| 序列组合 | 能否唯一确定 |
|----------|------------|
| 先序 + 中序 | ✅ 能 |
| 后序 + 中序 | ✅ 能 |
| 层序 + 中序 | ✅ 能 |
| 先序 + 后序 | ❌ 不能（无法区分子树结构） |
| 单个序列 | ❌ 不能 |

---

## 重建方法（先序 + 中序）

1. **先序第一个** = 根结点
2. 在中序中找到根，**左边是左子树，右边是右子树**
3. 根据中序中左右子树的结点数，在先序中划分左右子树
4. 递归重建左右子树

---

## 例题

> 先序: A B D E C F G
> 中序: D B E A F C G

1. 根 = A（先序第一个）
2. 中序中 A 左边 DBE = 左子树（3结点），右边 FCG = 右子树
3. 先序中 A 后 3 个 BDE = 左子树先序，剩下 CFG = 右子树先序
4. 递归...

---

## 特殊遍历结论

| 条件 | 结论 |
|------|------|
| 先序 = 中序 | 所有非叶结点**只有右子树** |
| 后序 = 中序 | 所有非叶结点**只有左子树** |
| 先序 = 后序 | 只有根结点（或为单结点树） |

> **2017年真题**考查了"先序和中序相同"的结论。

---

## 考试辨析

- **中序是必须的**——没有中序序列就无法区分左右子树
- 408 常在选择题中考"以下哪组序列能唯一确定二叉树"
- 手工重建时注意区分左右子树的结点数对应关系`},{id:`ds-5-3-3`,chapterId:`ds-5`,title:`线索二叉树的基本概念`,keyConcepts:[`线索二叉树`,`ltag`,`rtag`,`前驱`,`后继`,`空指针利用`,`n+1`],relatedPoints:[`ds-5-3-1`,`ds-5-3-4`],content:`## 为什么需要线索二叉树

> 传统二叉链表中，有 **$n+1$ 个空指针域**（共 $2n$ 个指针，$n-1$ 个非空）。
> 线索二叉树**利用这些空指针域**存放遍历序列中的前驱/后继信息。

---

## 线索二叉树的结点结构

\`\`\`c
typedef struct ThreadNode {
    ElemType data;
    struct ThreadNode *lchild, *rchild;
    int ltag, rtag;   // 标志位：0=指向孩子，1=线索
} ThreadNode, *ThreadTree;
\`\`\`

| 标志 | 值为 0 | 值为 1 |
|------|--------|--------|
| **ltag** | lchild 指向**左孩子** | lchild 指向**前驱**（线索） |
| **rtag** | rchild 指向**右孩子** | rchild 指向**后继**（线索） |

---

## 中序线索二叉树

> 中序线索二叉树是最常用的，因为其前驱和后继都能有效找到。

**中序线索树的遍历**：
- 若 rtag=1：直接通过 rchild 线索获取后继
- 若 rtag=0：后继 = **右子树中最左下的结点**

---

## 寻找前驱（中序线索）

- 若 ltag=1：直接通过 lchild 线索获取前驱
- 若 ltag=0：前驱 = **左子树中最右下的结点**

---

## 考试辨析

- $n$ 个结点的二叉链表有 **$n+1$** 个空指针域——线索二叉树的利用基础
- 标志位是线索二叉树与普通二叉树的唯一结构区别
- 先序线索树找前驱困难（可能需要遍历），后序线索树找后继困难`},{id:`ds-5-3-4`,chapterId:`ds-5`,title:`线索二叉树的构造`,keyConcepts:[`线索化`,`中序线索化`,`pre指针`,`递归`],relatedPoints:[`ds-5-3-3`],content:`## 中序线索化的构造

通过中序遍历，用一个全局 **pre 指针** 记录上一次访问的结点，建立 pre 与当前结点的线索关系。

\`\`\`c
// pre 为全局变量，初始为 NULL
void InThread(ThreadTree p) {
    if (p) {
        InThread(p->lchild);         // 递归左子树

        if (p->lchild == NULL) {     // 建立前驱线索
            p->lchild = pre;
            p->ltag = 1;
        }
        if (pre && pre->rchild == NULL) {  // 建立后继线索
            pre->rchild = p;
            pre->rtag = 1;
        }
        pre = p;                     // 更新 pre

        InThread(p->rchild);         // 递归右子树
    }
}
\`\`\`

---

## 通过线索二叉树遍历（中序）

\`\`\`c
// 找到中序线索树中第一个被访问的结点
ThreadNode *FirstNode(ThreadNode *p) {
    while (p->ltag == 0) p = p->lchild;
    return p;
}

// 找后继
ThreadNode *NextNode(ThreadNode *p) {
    if (p->rtag == 1) return p->rchild;
    return FirstNode(p->rchild);
}

// 中序遍历
void InOrder(ThreadNode *T) {
    for (ThreadNode *p = FirstNode(T); p; p = NextNode(p))
        visit(p);
}
\`\`\`

---

## 三种线索化对比

| 线索化类型 | 找前驱 | 找后继 |
|-----------|--------|--------|
| 先序线索 | 困难（需知道双亲） | 简单 |
| 中序线索 | 简单 | 简单 |
| 后序线索 | 简单 | 困难（需知道双亲） |

> 只有**中序线索二叉树**能方便地找到任意结点的前驱和后继。

---

## 考试辨析

- 线索化的本质：将中序遍历中的 pre（前一个访问结点）与当前结点相连
- **最后一个被访问结点**的 rchild 仍为 NULL（需要额外处理）
- 线索化不改变原遍历序列，只改变空指针域的内容`},{id:`ds-5-4-1`,chapterId:`ds-5`,title:`树的存储结构`,keyConcepts:[`双亲表示法`,`孩子表示法`,`孩子兄弟表示法`,`左孩子右兄弟`],relatedPoints:[`ds-5-1-1`,`ds-2-2-1`,`ds-2-3-1`],content:`## 三种存储结构

---

### 一、双亲表示法

用数组存储每个结点及其双亲的位置。

\`\`\`c
#define MaxSize 100
typedef struct {
    ElemType data;
    int parent;     // 双亲在数组中的下标（根为 -1）
} PTNode;
typedef struct {
    PTNode nodes[MaxSize];
    int n;
} PTree;
\`\`\`

| 特点 | 说明 |
|------|------|
| 找双亲 | $O(1)$ |
| 找孩子 | $O(n)$ — 需遍历整个数组 |
| 适用 | 并查集（只需向上查找） |

---

### 二、孩子表示法

每个结点用一个链表存储其所有孩子。

> 找孩子容易，找双亲困难。可结合双亲表示法 = 双亲孩子表示法。

---

### 三、孩子兄弟表示法（⭐ 最常用）

\`\`\`c
typedef struct CSNode {
    ElemType data;
    struct CSNode *firstchild, *nextsibling;
} CSNode, *CSTree;
\`\`\`

> **左孩子右兄弟**：firstchild 指向第一个孩子，nextsibling 指向下一个兄弟。

---

## 三种表示法对比

| 表示法 | 找双亲 | 找孩子 | 转二叉树 |
|--------|--------|--------|---------|
| 双亲表示法 | $O(1)$ | $O(n)$ | — |
| 孩子表示法 | $O(n)$ | 容易 | — |
| 孩子兄弟表示法 | 困难 | 容易 | ✅ 直接对应 |

---

## 考试辨析

- **孩子兄弟表示法（左孩子右兄弟）** 是树与二叉树转换的基础
- 并查集使用**双亲表示法**存储树`},{id:`ds-5-4-2`,chapterId:`ds-5`,title:`树、森林与二叉树的转换`,keyConcepts:[`树转二叉树`,`森林转二叉树`,`二叉树转树`,`左孩子右兄弟`],relatedPoints:[`ds-5-4-1`,`ds-5-2-1`],content:`## 树 → 二叉树

> 规则：**左孩子右兄弟**。

1. 每个结点只保留其**第一个孩子**的连线（左孩子）
2. 兄弟之间加连线，从左到右串联（右孩子）
3. 以根为轴心，将树顺时针旋转 45°

> 转换后的二叉树**根结点一定没有右子树**。

---

## 森林 → 二叉树

1. 先将各棵树分别转为二叉树
2. 将各二叉树的根通过右指针串联起来（后一棵树的根作为前一棵树根的右孩子）

> 转换后第一棵树的根 = 二叉树的根。

---

## 二叉树 → 树

1. 从根开始，沿右链分离各结点（右孩子变兄弟）
2. 恢复兄弟间的原父子关系

---

## 转换的不变性

> 转换后的二叉树与原来的树/森林**具有相同的遍历序列对应关系**。

---

## 考试辨析

- 树转二叉树后**根结点无右子树**——利用此性质可判断某二叉树是否由树转换而来
- 森林转二叉树后根结点**可能有右子树**（连接后续树的根）`},{id:`ds-5-4-3`,chapterId:`ds-5`,title:`树和森林的遍历`,keyConcepts:[`先根遍历`,`后根遍历`,`先序森林`,`中序森林`,`遍历对应`],relatedPoints:[`ds-5-4-2`,`ds-5-3-1`],content:`## 树的遍历

| 遍历方式 | 顺序 | 对应二叉树遍历 |
|----------|------|--------------|
| **先根遍历** | 先访问根，再依次先根遍历各子树 | **先序**遍历 |
| **后根遍历** | 先依次后根遍历各子树，再访问根 | **中序**遍历 |

---

## 森林的遍历

| 遍历方式 | 顺序 | 对应二叉树遍历 |
|----------|------|--------------|
| **先序遍历森林** | 先访问第一棵树的根，再先序遍历第一棵树的子树森林，然后先序遍历剩余的树 | **先序**遍历 |
| **中序遍历森林** | 先中序遍历第一棵树的子树森林，再访问第一棵树的根，然后中序遍历剩余的树 | **中序**遍历 |

---

## 遍历对应关系总结

| 树/森林 | 对应的二叉树 |
|---------|------------|
| 树先根遍历 | 二叉树**先序**遍历 |
| 树后根遍历 | 二叉树**中序**遍历 |
| 森林先序遍历 | 二叉树**先序**遍历 |
| 森林中序遍历 | 二叉树**中序**遍历 |

> **树的遍历中没有"中根遍历"**——因为树的子树没有左右之分，谈论"中根"无意义。

---

## 考试辨析

- 树/森林的遍历与二叉树遍历的对应关系是高频考点
- 树的遍历只有先根和后根，没有中根
- 做题时可用转换后的二叉树来模拟树/森林的遍历结果`},{id:`ds-5-5-1`,chapterId:`ds-5`,title:`哈夫曼树与哈夫曼编码`,keyConcepts:[`哈夫曼树`,`WPL`,`带权路径长度`,`哈夫曼编码`,`前缀编码`,`2n-1`],relatedPoints:[`ds-5-2-1`,`ds-5-2-2`],content:`## 基本概念

| 术语 | 定义 |
|------|------|
| **权值 (Weight)** | 树结点赋予的有意义的数值 |
| **带权路径长度 (WPL)** | $\\\\sum_{i=1}^{n} w_i \\\\times l_i$（$l_i$ 为从根到第 $i$ 个叶子的路径长度） |
| **哈夫曼树** | 带权路径长度最小的二叉树（最优二叉树） |

---

## 哈夫曼树的构造算法

1. 将 $n$ 个结点作为 $n$ 棵单结点二叉树，构成森林 $F$
2. 从 $F$ 中选取**权值最小**的两棵树作为左右子树，合并成一棵新树（新根权值 = 两子树根权值之和）
3. 将新树加入 $F$，重复直到只剩一棵树

\`\`\`c
// 哈夫曼树的结点结构
typedef struct {
    int weight;
    int parent, lchild, rchild;
} HTNode, *HuffmanTree;
\`\`\`

---

## 哈夫曼树的特性

| 特性 | 说明 |
|------|------|
| 无度为 1 的结点 | 只有度为 0（叶子）和度为 2（内部） |
| 总结点数 | $2n - 1$（$n$ 个叶子结点） |
| 叶子数 | $n_0 = n$ |
| 分支结点数 | $n_2 = n - 1$ |
| WPL 不唯一 | 可能有多棵等价的哈夫曼树 |

---

## 哈夫曼编码

| 特性 | 说明 |
|------|------|
| **前缀编码** | 任何一个字符的编码都不是另一个字符编码的前缀 |
| 左 0 右 1 | 从根到叶子的路径：走左孩子得 0，走右孩子得 1 |
| 最优性 | 哈夫曼编码可使总编码长度最短 |

---

## 考试辨析

- **WPL 计算**：选择题常给一棵树要求计算或比较 WPL
- **$2n - 1$**：$n$ 个权值构造哈夫曼树，最终有 $2n-1$ 个结点
- 哈夫曼树**可能有多棵**（权值相等时有不同合并顺序），但最小 WPL 唯一
- **2012年真题**考了多路归并排序的最优合并顺序（本质是哈夫曼树）`},{id:`ds-5-5-2`,chapterId:`ds-5`,title:`并查集`,keyConcepts:[`并查集`,`Find`,`Union`,`路径压缩`,`按秩合并`,`双亲表示法`],relatedPoints:[`ds-5-4-1`,`ds-6-4-1`],content:`## 并查集的定义

> 并查集 (Disjoint Set Union, DSU) 支持**查询 (Find)** 元素所属集合和**合并 (Union)** 两个集合。

---

## 存储结构 — 双亲表示法

\`\`\`c
#define SIZE 100
int father[SIZE];   // father[i] 表示 i 的双亲，根结点 father = -1
\`\`\`

---

## 核心操作

### Find — 查根

\`\`\`c
// 朴素查找
int Find(int x) {
    while (father[x] >= 0) x = father[x];
    return x;
}

// 带路径压缩的查找
int Find_Compress(int x) {
    if (father[x] < 0) return x;
    return father[x] = Find_Compress(father[x]);
}
\`\`\`

> **路径压缩**：查找过程中把路径上所有结点直接挂到根上，加速后续查找。

### Union — 合并

\`\`\`c
// 朴素合并：将 root2 挂到 root1
void Union(int root1, int root2) {
    father[root2] = root1;
}

// 按秩合并：将矮树挂到高树上
void Union_Rank(int root1, int root2) {
    if (father[root1] < father[root2])  // root1 树更高
        father[root2] = root1;
    else if (father[root1] > father[root2])
        father[root1] = root2;
    else {
        father[root2] = root1;
        father[root1]--;  // 高度 +1
    }
}
\`\`\`

---

## 优化效果

| 优化 | Find 复杂度 | Union 复杂度 |
|------|-----------|------------|
| 无优化 | $O(n)$ | $O(1)$ |
| 路径压缩 | 均摊 $O(\\\\alpha(n))$ | $O(1)$ |
| 按秩合并 + 路径压缩 | 均摊 $O(\\\\alpha(n))$ | 均摊 $O(\\\\alpha(n))$ |

> $\\\\alpha(n)$ 是 Ackermann 函数的反函数，增长极慢，实际上可视为常数。

---

## 考试辨析

- 并查集使用**双亲表示法**（数组）
- 路径压缩不影响集合合并的正确性
- 408 常在图中考并查集的应用（判断图的连通性、Kruskal 算法）`},{id:`ds-5-5-3`,chapterId:`ds-5`,title:`堆及其应用`,keyConcepts:[`堆`,`小根堆`,`大根堆`,`完全二叉树`,`堆排序`,`优先队列`],relatedPoints:[`ds-5-2-1`,`ds-5-2-2`,`ds-8-4-1`],content:`## 堆的定义

> 堆 (Heap) 是一棵**完全二叉树**，且每个结点的值都不大于（或不小于）其孩子结点的值。

| 类型 | 条件 | 堆顶 |
|------|------|------|
| **小根堆** | 每个结点 $\\\\le$ 其孩子 | 最小值 |
| **大根堆** | 每个结点 $\\\\ge$ 其孩子 | 最大值 |

---

## 堆的存储

> 堆用**顺序存储**（数组），利用完全二叉树的编号规律。

\`\`\`c
// 数组下标从 1 开始
// 结点 i 的左孩子 = 2i，右孩子 = 2i+1，双亲 = i/2
\`\`\`

---

## 堆的核心操作

### 上滤 (Percolate Up / Shift Up)

插入新元素时，放在数组末尾，然后**向上调整**。

\`\`\`c
void ShiftUp(int heap[], int k) {
    while (k > 1 && heap[k] < heap[k/2]) {
        swap(heap[k], heap[k/2]);
        k = k / 2;
    }
}
\`\`\`

### 下滤 (Percolate Down / Shift Down)

删除堆顶时，将最后一个元素移到堆顶，然后**向下调整**。

\`\`\`c
void ShiftDown(int heap[], int n, int k) {
    while (2*k <= n) {
        int j = 2*k;                     // 左孩子
        if (j < n && heap[j] > heap[j+1]) j++;  // 取更小的孩子
        if (heap[k] <= heap[j]) break;
        swap(heap[k], heap[j]);
        k = j;
    }
}
\`\`\`

---

## 堆的建立

> 从最后一个非叶子结点开始（$n/2$），依次向下调整 → $O(n)$。

\`\`\`c
void BuildHeap(int heap[], int n) {
    for (int i = n/2; i >= 1; i--)
        ShiftDown(heap, n, i);
}
\`\`\`

---

## 堆的应用

| 应用 | 说明 |
|------|------|
| **堆排序** | $O(n\\\\log n)$，见第8章 |
| **优先队列** | 总是取出优先级最高（或最低）的元素 |
| **Top-K 问题** | 维护大小为 K 的堆求前 K 大/小的元素 |

---

## 考试辨析

- 堆一定是一棵**完全二叉树**（这是定义要求）
- 建堆时间复杂度是 **$O(n)$**（不是 $O(n\\\\log n)$！）——这是常考点
- 堆不保证结点值的全序关系，只保证父子间的大小关系
- 2025年考纲明确新增"堆及其应用`},{id:`ds-6-1-1`,chapterId:`ds-6`,title:`图的基本概念与术语`,keyConcepts:[`图`,`顶点`,`边`,`有向图`,`无向图`,`完全图`,`度`,`入度`,`出度`,`连通`,`强连通`,`生成树`],relatedPoints:[`ds-5-1-1`],content:`## 图的定义
> 图 (Graph) 由顶点集 $V$ 和边集 $E$ 组成，记作 $G = (V, E)$。
$V$ 是非空有限集（至少一个顶点），$E$ 可以是空集。

---
## 图的基本分类
| 类型 | 定义 | 完全图边数 |
|------|------|-----------|
| **无向图** | 边无方向，$(u,v)$ 与 $(v,u)$ 同一条 | $n(n-1)/2$ |
| **有向图** | 边有方向，$<u,v>$ 不同于 $<v,u>$ | $n(n-1)$ |

---
## 核心术语
| 术语 | 含义 |
|------|------|
| **度** | 无向图中与该顶点关联的边数 |
| **入度 / 出度** | 有向图中指向/指出该顶点的边数 |
| **简单图** | 无重复边，无自环 |
| **多重图** | 有重复边或自环 |
| **路径** | 顶点序列 $v_1, v_2, \\ldots, v_k$，相邻顶点间有边 |
| **简单路径** | 路径中顶点不重复 |
| **回路/环** | 起点和终点相同的路径 |

---
## 度的公式（必考）
无向图：$\\sum \\deg(v) = 2|E|$
有向图：$\\sum \\text{入度} = \\sum \\text{出度} = |E|$

---
## 连通性
| 概念 | 说明 |
|------|------|
| **连通图**（无向） | 任意两顶点间有路径 |
| **连通分量** | 无向图的极大连通子图 |
| **强连通图**（有向） | 任意两顶点间双向均有路径 |
| **强连通分量** | 有向图的极大强连通子图 |
| **生成树** | 包含所有 $n$ 个顶点的极小连通子图，恰有 $n-1$ 条边 |

---
## 考试辨析
- $n$ 个顶点的连通图**至少**有 $n-1$ 条边（即生成树）
- $n$ 个顶点的强连通有向图**至少**有 $n$ 条边（成环）
- $\\sum \\deg = 2|E|$ 是图论最基础的恒等式，选择题高频出现`},{id:`ds-6-2-1`,chapterId:`ds-6`,title:`图的存储 — 邻接矩阵`,keyConcepts:[`邻接矩阵`,`顺序存储`,`对称矩阵`,`稠密图`,`O(n^2)`],relatedPoints:[`ds-6-2-2`,`ds-2-2-1`],content:`## 邻接矩阵的定义
> 用一个 $n \\times n$ 的二维矩阵表示 $n$ 个顶点之间的邻接关系。

\\\`\\\`\\\`c
#define MaxVertexNum 100
typedef char VertexType;
typedef int EdgeType;
typedef struct {
    VertexType vex[MaxVertexNum];          // 顶点表
    EdgeType edge[MaxVertexNum][MaxVertexNum]; // 边矩阵
    int vexnum, arcnum;
} MGraph;
\\\`\\\`\\\`

---
## 特点
| 特性 | 说明 |
|------|------|
| 空间复杂度 | $O(n^2)$ |
| 适合图类型 | **稠密图** |
| 判断边 $(i,j)$ | $O(1)$（直接访问矩阵） |
| 求顶点度 | 需遍历整行/列 |
| 无向图矩阵 | **对称矩阵**（可压缩存储一半） |

---
## 考试辨析
- 邻接矩阵适合稠密图（$|E|$ 接近 $n^2$），不适合稀疏图
- 无向图的邻接矩阵一定是对称阵——可用下三角/上三角压缩存储
- 2011年真题考了邻接矩阵的压缩存储`},{id:`ds-6-2-2`,chapterId:`ds-6`,title:`图的存储 — 邻接表`,keyConcepts:[`邻接表`,`链式存储`,`边表`,`顶点表`,`稀疏图`,`O(n+e)`],relatedPoints:[`ds-6-2-1`,`ds-2-3-1`],content:`## 邻接表的定义
> 顶点用数组存储（顶点表），每个顶点的**邻接边**用链表存储（边表）。

\\\`\\\`\\\`c
// 边表结点
typedef struct ArcNode {
    int adjvex;              // 邻接点下标
    struct ArcNode *next;
    // InfoType info;        // 边权
} ArcNode;
// 顶点表
typedef struct VNode {
    VertexType data;
    ArcNode *first;          // 第一条边
} VNode, AdjList[MaxVertexNum];
// 邻接表
typedef struct {
    AdjList vertices;
    int vexnum, arcnum;
} ALGraph;
\\\`\\\`\\\`

---
## 特点
| 特性 | 说明 |
|------|------|
| 空间复杂度 | 无向图 $O(|V|+2|E|)$，有向图 $O(|V|+|E|)$ |
| 适合图类型 | **稀疏图** |
| 求顶点出度 | $O(1)$ ~ $O(n)$（有向图直接遍历边表） |
| 求顶点入度 | 需遍历全表（逆邻接表可解决） |
| 邻接表唯一吗 | **不唯一**（边表顺序可不同） |

---
## 邻接矩阵 vs 邻接表
| 比较维度 | 邻接矩阵 | 邻接表 |
|----------|---------|--------|
| 空间 | $O(n^2)$ | $O(n+e)$ |
| 适合 | 稠密图 | 稀疏图 |
| 判断边 | $O(1)$ | $O(n)$ |
| 遍历所有边 | $O(n^2)$ | $O(n+e)$ |
| 唯一性 | 唯一 | 不唯一 |

---
## 考试辨析
- 同一个图的邻接表表示**不唯一**（边表中边的顺序取决于建图顺序）
- 由此导致：基于邻接表的遍历（BFS/DFS）序列**不唯一**；
  基于邻接矩阵的遍历序列**唯一**`},{id:`ds-6-2-3`,chapterId:`ds-6`,title:`十字链表与邻接多重表`,keyConcepts:[`十字链表`,`邻接多重表`,`有向图`,`无向图`],relatedPoints:[`ds-6-2-1`,`ds-6-2-2`],content:`## 十字链表（有向图）
> 结合邻接表（找出度容易）和逆邻接表（找入度容易）的优点。

每个顶点有一个结点，每条边有一个结点。

| 操作 | 复杂度 |
|------|--------|
| 求出度 | 沿 hlink 遍历 |
| 求入度 | 沿 tlink 遍历 |

---
## 邻接多重表（无向图）
> 解决邻接表中每条边存储两次的冗余问题。

每条边只存储**一个结点**（两个顶点共享），通过指针连接所有关联的边。

| 操作 | 复杂度 |
|------|--------|
| 删除边 | 方便（只需修改少量指针） |
| 标记边 | 方便 |

---
## 四种存储结构对比
| 结构 | 适用 | 空间 | 特点 |
|------|------|------|------|
| 邻接矩阵 | 稠密图 | $O(n^2)$ | 判断边快 |
| 邻接表 | 稀疏图 | $O(n+e)$ | 遍历快 |
| 十字链表 | 有向图 | $O(n+e)$ | 出入度都快 |
| 邻接多重表 | 无向图 | $O(n+e)$ | 删边快 |

---
## 考试辨析
- 408 对十字链表和邻接多重表只要求了解概念和适用场景
- 重点掌握邻接矩阵与邻接表的对比`},{id:`ds-6-3-1`,chapterId:`ds-6`,title:`图的广度优先搜索 (BFS)`,keyConcepts:[`BFS`,`广度优先`,`队列`,`层次`,`最短路径`],relatedPoints:[`ds-6-3-2`,`ds-3-2-1`,`ds-5-3-1`],content:`## BFS 算法思想
> 从某顶点出发，逐层访问所有邻接点——先访问的顶点的邻接点先被访问。

辅助数据结构：**队列**

\\\`\\\`\\\`c
bool visited[MAX_VERTEX_NUM];
void BFS(Graph G, int v) {
    Queue Q; InitQueue(&Q);
    visit(v); visited[v] = true;
    EnQueue(&Q, v);
    while (!QueueEmpty(Q)) {
        DeQueue(&Q, &v);
        for (w = FirstNeighbor(G, v); w >= 0; w = NextNeighbor(G, v, w))
            if (!visited[w]) {
                visit(w); visited[w] = true;
                EnQueue(&Q, w);
            }
    }
}
\\\`\\\`\\\`

---
## 复杂度分析
| 存储结构 | 时间复杂度 |
|----------|-----------|
| 邻接表 | $O(|V| + |E|)$ |
| 邻接矩阵 | $O(|V|^2)$ |
空间复杂度：$O(|V|)$（队列 + visited 数组）

---
## BFS 的应用
- 非带权图的**单源最短路径**
- 广度优先生成树
- 求连通分量

---
## 考试辨析
- BFS 用队列，DFS 用栈/递归——这是408反复考的知识点
- BFS 可求**无权图**单源最短路径（因为逐层扩展）
- 邻接表产生的 BFS 序列**不唯一**（边表顺序可变）`},{id:`ds-6-3-2`,chapterId:`ds-6`,title:`图的深度优先搜索 (DFS)`,keyConcepts:[`DFS`,`深度优先`,`递归`,`栈`,`回溯`],relatedPoints:[`ds-6-3-1`,`ds-3-1-1`,`ds-5-3-1`],content:`## DFS 算法思想
> 从某顶点出发，尽可能"深"地搜索——走到不能走为止，然后回溯。

辅助数据结构：**递归栈**（或显式栈）

\\\`\\\`\\\`c
bool visited[MAX_VERTEX_NUM];
void DFS(Graph G, int v) {
    visit(v); visited[v] = true;
    for (w = FirstNeighbor(G, v); w >= 0; w = NextNeighbor(G, v, w))
        if (!visited[w])
            DFS(G, w);          // 递归深入
}
\\\`\\\`\\\`

---
## 复杂度分析
| 存储结构 | 时间复杂度 |
|----------|-----------|
| 邻接表 | $O(|V| + |E|)$ |
| 邻接矩阵 | $O(|V|^2)$ |
空间复杂度：$O(|V|)$（递归栈深度）

---
## BFS vs DFS 对比
| 比较 | BFS | DFS |
|------|-----|-----|
| 辅助结构 | 队列 | 栈/递归 |
| 遍历方式 | 逐层扩展 | 深入到底再回溯 |
| 生成树 | 广度优先生成树 | 深度优先生成树 |
| 非带权最短路径 | ✅ 可以 | ❌ 不可以 |
| 判断连通性 | ✅ | ✅ |
| 判断环 | ✅ | ✅ |

---
## 考试辨析
- DFS 递归空间复杂度 $O(|V|)$（递归栈最深可达 $|V|$ 层）
- 2024年408考了拓扑排序代码——图算法代码题已连续3年出现
- 邻接矩阵的DFS/BFS序列**唯一**，邻接表**不唯一**`},{id:`ds-6-4-1`,chapterId:`ds-6`,title:`最小生成树`,keyConcepts:[`最小生成树`,`MST`,`Prim`,`Kruskal`,`贪心`],relatedPoints:[`ds-6-3-1`,`ds-6-3-2`,`ds-5-5-2`],content:`## 最小生成树定义
> 带权连通无向图中，权值之和最小的生成树。

---
## Prim 算法
| 属性 | 说明 |
|------|------|
| 策略 | 贪心——从顶点出发，每次选与当前树相连的最小权边 |
| 时间复杂度 | **$O(|V|^2)$** |
| 适合 | **稠密图** |
| 数据结构 | 数组(lowcost) |

核心操作：维护 lowcost[] 数组，每次选最小 lowcost 的顶点加入，更新 lowcost。

---
## Kruskal 算法
| 属性 | 说明 |
|------|------|
| 策略 | 贪心——从边出发，每次选最小权边，不构成回路则加入 |
| 时间复杂度 | **$O(|E| \\log |E|)$** |
| 适合 | **稀疏图** |
| 数据结构 | 堆（排序边）+ **并查集**（判回路） |

---
## Prim vs Kruskal
| | Prim | Kruskal |
|------|------|---------|
| 选边策略 | 选顶点（连入当前树） | 选边（全局最小） |
| 时间 | $O(n^2)$ | $O(e \\log e)$ |
| 密集图 | ✅ | ❌ |
| 稀疏图 | ❌ | ✅ |

---
## 考试辨析
- 若边权值**互不相等**，则最小生成树**唯一**
- Prim 和 Kruskal 都是贪心算法——局部最优导致全局最优
- Kruskal 常结合**并查集**考察`},{id:`ds-6-4-2`,chapterId:`ds-6`,title:`最短路径 — Dijkstra算法`,keyConcepts:[`Dijkstra`,`单源最短路径`,`贪心`,`dist[]`,`path[]`,`非负权`],relatedPoints:[`ds-6-4-3`],content:`## Dijkstra 算法
> 求**单源最短路径**——从源点 $v_0$ 到其他所有顶点的最短路径。

策略：**贪心**，每次从未选顶点中选 dist 最小的加入。

---
## 核心数据结构
\\\`\\\`\\\`c
int dist[n];     // dist[i] = v0 到 i 的当前最短距离
int path[n];     // path[i] = 最短路径上 i 的前驱顶点
bool S[n];       // S[i] = true 表示 i 已确定最短路径
\\\`\\\`\\\`

---
## 时间复杂度
| 实现方式 | 时间复杂度 |
|----------|-----------|
| 朴素（遍历选最小） | $O(|V|^2)$ |
| 堆优化 | $O((|V|+|E|)\\log|V|)$ |

---
## 算法限制
> **不允许负权边！**
有负权边时 Dijkstra 可能得到错误结果。

---
## 考试辨析
- Dijkstra **不能**处理负权边——选择题常见错误选项
- 每加入一个新顶点，需要更新 dist[]（松弛操作）
- 区分 dist[i]（当前最短）和最终最短路径——加顶点后 dist 可能继续减小`},{id:`ds-6-4-3`,chapterId:`ds-6`,title:`最短路径 — Floyd算法`,keyConcepts:[`Floyd`,`全源最短路径`,`动态规划`,`负权`,`O(n^3)`],relatedPoints:[`ds-6-4-2`],content:`## Floyd 算法
> 求**每一对顶点之间**的最短路径。

策略：**动态规划**

核心递推式：
$$A^{(k)}[i][j] = \\min\\{A^{(k-1)}[i][j],\\ A^{(k-1)}[i][k] + A^{(k-1)}[k][j]\\}$$

> 允许以 $k$ 为中间点松驰 $i \\to j$ 的路径。

\\\`\\\`\\\`c
for (int k = 0; k < n; k++)           // 中间点
    for (int i = 0; i < n; i++)       // 起点
        for (int j = 0; j < n; j++)   // 终点
            if (A[i][k] + A[k][j] < A[i][j])
                A[i][j] = A[i][k] + A[k][j];
\\\`\\\`\\\`

---
## Dijkstra vs Floyd
| | Dijkstra | Floyd |
|------|----------|-------|
| 类型 | 单源 | 全源 |
| 策略 | 贪心 | 动态规划 |
| 时间 | $O(n^2)$ | **$O(n^3)$** |
| 负权边 | ❌ | ✅（但不能有负权回路） |

---
## 考试辨析
- Floyd 的三重循环 $k$ 必须在外层——顺序不可改变
- Floyd 允许负权边但**不允许负权回路**（会无穷小）
- 408 通常以选择题形式考 Floyd 的手工模拟`},{id:`ds-6-4-4`,chapterId:`ds-6`,title:`拓扑排序`,keyConcepts:[`拓扑排序`,`AOV网`,`入度`,`DAG`,`有向无环图`],relatedPoints:[`ds-6-4-5`,`ds-3-1-1`],content:`## AOV 网
> Activity On Vertex：用顶点表示活动，用有向边表示先后依赖关系。

> **拓扑序列**：AOV 网中所有顶点的线性序列，满足若 $<v_i, v_j>$ 是边，则 $v_i$ 在 $v_j$ 之前。

---
## 拓扑排序算法
1. 计算所有顶点的入度
2. 将所有**入度为 0** 的顶点入栈
3. 栈非空时：出栈一个顶点输出，将其所有邻接点的入度减 1
- 若减后入度 = 0，入栈
4. 若输出顶点数 < 总顶点数 → 图中有回路

\\\`\\\`\\\`c
bool TopologicalSort(Graph G) {
    // 计算入度 indegree[]
    Stack S; InitStack(&S);
    for (int i = 0; i < G.vexnum; i++)
        if (indegree[i] == 0) Push(&S, i);
    int count = 0;
    while (!StackEmpty(S)) {
        Pop(&S, &i);
        print(i); count++;
        for (p = G.vertices[i].first; p; p = p->next) {
            int v = p->adjvex;
            if (--indegree[v] == 0)
                Push(&S, v);
        }
    }
    return count == G.vexnum;  // true=无回路
}
\\\`\\\`\\\`

---
## 复杂度
| 存储 | 时间 |
|------|------|
| 邻接表 | $O(|V| + |E|)$ |
| 邻接矩阵 | $O(|V|^2)$ |

---
## 考试辨析
- 拓扑序列通常**不唯一**
- 可以用拓扑排序判断有向图是否有环
- **2024年408考了拓扑排序的代码题**——图算法代码不再是"不太可能考"`},{id:`ds-6-4-5`,chapterId:`ds-6`,title:`关键路径`,keyConcepts:[`关键路径`,`AOE网`,`ve`,`vl`,`e`,`l`,`时间余量`,`关键活动`],relatedPoints:[`ds-6-4-4`],content:`## AOE 网
> Activity On Edge：用边表示活动，用顶点表示事件。通常用于工程工期估算。

---
## 四个关键量
| 量 | 含义 | 计算方向 | 计算方式 |
|-----|------|----------|----------|
| **ve(k)** | 事件最早发生时间 | 源点 → 汇点，**前→后** | 取 **max**（所有入边中最大） |
| **vl(k)** | 事件最迟发生时间 | 汇点 → 源点，**后→前** | 取 **min**（所有出边中最小） |
| **e(i)** | 活动最早开始时间 | = ve(弧尾) | — |
| **l(i)** | 活动最迟开始时间 | = vl(弧头) - 活动时间 | — |

> **时间余量** $d(i) = l(i) - e(i)$
> $d(i) = 0$ 的活动为**关键活动**，构成**关键路径**。

---
## 计算步骤
1. 按拓扑序计算 ve（前→后，取 max）
2. 初始化汇点 vl = ve，按逆拓扑序计算 vl（后→前，取 min）
3. 计算每条活动的 e 和 l：$e = ve(弧尾)$，$l = vl(弧头) - 权值$
4. 若 $l - e = 0$，则为关键活动

---
## 考试辨析
- 关键路径是 AOE 网中最长路径——**决定工程最短完成时间**
- 缩短关键活动可缩短工期——但**多条关键路径时缩短单一关键活动无效**
- AOE 网中**至少有一条**关键路径，可能有多条
- 408 通常考手工计算 ve/vl/e/l 表格`},{id:`ds-7-1-1`,chapterId:`ds-7`,title:`查找的基本概念`,keyConcepts:[`查找`,`查找表`,`关键字`,`平均查找长度`,`ASL`],relatedPoints:[],content:`## 查找的定义

在数据集合中寻找满足某种条件的数据元素。

---

## 核心概念
| 术语 | 含义 |
|------|------|
| **查找表** | 同一类型数据元素的集合 |
| **关键字 (Key)** | 数据元素中唯一标识该元素的数据项 |
| **查找** | 根据给定值在查找表中确定关键字等于该值的记录 |
| **静态查找** | 仅查找，不修改表（顺序查找、折半查找） |
| **动态查找** | 查找 + 插入/删除（BST、散列表） |

---

## 平均查找长度 (ASL)
$$\\text{ASL} = \\sum_{i=1}^{n} P_i \\cdot C_i$$
$P_i$：查找第 $i$ 个记录的概率；$C_i$：找到第 $i$ 个记录所需的比较次数。

---

## 考试辨析
- ASL 是评价查找算法效率的核心指标
- 区分静态查找和动态查找——决定适用的数据结构`},{id:`ds-7-2-1`,chapterId:`ds-7`,title:`顺序查找与折半查找`,keyConcepts:[`顺序查找`,`折半查找`,`二分查找`,`ASL`,`有序表`],relatedPoints:[`ds-2-2-4`],content:`## 顺序查找

逐个扫描直到找到目标或遍历完毕。

| 属性 | 值 |
|------|-----|
| 适用 | 顺序表或链表，**无序/有序均可** |
| ASL(成功) | $\\frac{n+1}{2}$ |
| ASL(失败) | $n$（无序）；$n+1$（有序） |
| 时间复杂度 | $O(n)$ |

---

## 折半查找（二分查找）

**仅适用于有序的顺序表**（链表不能折半）。

| 属性 | 值 |
|------|-----|
| 适用 | **有序顺序表** |
| ASL | $\\approx \\log_2(n+1) - 1$ |
| 时间复杂度 | $O(\\log n)$ |
| 判定树 | 平衡二叉树 |

\`\`\`c
int BinarySearch(int a[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (a[mid] == key) return mid;
        else if (a[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
\`\`\`

---

## 考试辨析
- 折半查找要求**顺序存储 + 有序**——两个条件缺一不可
- 折半查找的判定树是平衡二叉树，树高 $\\lceil \\log_2(n+1) \\rceil$
- 求 ASL 需画出判定树，计算每个结点的查找长度`},{id:`ds-7-2-2`,chapterId:`ds-7`,title:`分块查找`,keyConcepts:[`分块查找`,`索引顺序查找`,`块内无序`,`块间有序`],relatedPoints:[`ds-7-2-1`],content:`## 分块查找的思想

将表分成若干块，**块间有序、块内无序**，建立索引表。

1. 在索引表中确定目标在哪一块（顺序或折半查索引）
2. 在块内顺序查找

---

## 复杂度
| 分块方式 | 最佳块大小 | ASL |
|----------|-----------|-----|
| $n$ 个记录分 $b$ 块 | $\\sqrt{n}$ | $\\approx \\sqrt{n} + 1$ |

$$\\text{ASL} = L_I + L_S = \\log_2(b+1) + \\frac{s+1}{2}$$

其中 $L_I$ = 索引查找，$L_S$ = 块内查找，$s$ = 每块记录数。

---

## 考试辨析
- 分块查找是顺序查找和折半查找的折中方案
- 408 对其考察较少，理解基本概念即可`},{id:`ds-7-3-1`,chapterId:`ds-7`,title:`二叉排序树 (BST)`,keyConcepts:[`BST`,`二叉排序树`,`查找`,`插入`,`删除`,`中序有序`],relatedPoints:[`ds-5-2-1`,`ds-5-3-1`],content:`## BST 定义

> 二叉排序树或为空树，或满足：
1. 若左子树非空，则左子树上所有结点的值 **<** 根结点的值
2. 若右子树非空，则右子树上所有结点的值 **>** 根结点的值
3. 左右子树本身也是 BST

**中序遍历 BST 得到递增序列。**

---

## 基本操作复杂度
| 操作 | 平均 | 最坏 |
|------|------|------|
| 查找 | $O(\\log n)$ | $O(n)$（退化为链表） |
| 插入 | $O(\\log n)$ | $O(n)$ |
| 删除 | $O(\\log n)$ | $O(n)$ |

---

## 删除结点的三种情况
| 被删结点 | 处理方式 |
|----------|----------|
| 叶子 | 直接删除 |
| 只有左/右子树 | 用孩子替代 |
| 有左右子树 | 用**直接后继**（右子树最左结点）或直接前驱替代 |

---

## 考试辨析
- BST 中序序列有序——利用此性质判断是否为 BST
- BST 可能退化为链表（插入有序序列时），因此引出 AVL（平衡二叉树）
- 408 算法题可能考 BST 的查找/插入代码`},{id:`ds-7-3-2`,chapterId:`ds-7`,title:`平衡二叉树 (AVL)`,keyConcepts:[`AVL`,`平衡二叉树`,`平衡因子`,`LL`,`RR`,`LR`,`RL`,`旋转`],relatedPoints:[`ds-7-3-1`,`ds-5-2-2`],content:`## AVL 定义

> 任意结点的**左右子树高度差不超过 1** 的二叉排序树。

平衡因子 = 左子树高度 - 右子树高度，取值仅 { -1, 0, 1 }。

---

## 四种失衡调整（高频考点！）

| 类型 | 失衡点 | 调整 |
|------|--------|------|
| **LL** | 左子树左孩子插入 | **右旋** |
| **RR** | 右子树右孩子插入 | **左旋** |
| **LR** | 左子树右孩子插入 | 先左旋后右旋 |
| **RL** | 右子树左孩子插入 | 先右旋后左旋 |

---

## AVL 的性质

| 性质 | 值 |
|------|-----|
| 含有 $n$ 个结点的 AVL 最大高度 | $O(\\log n)$ |
| 高度为 $h$ 的 AVL 最少结点数 | $N_h = N_{h-1} + N_{h-2} + 1$，（$N_0=0, N_1=1$） |
| 查找复杂度 | $O(\\log n)$（始终平衡） |

---

## 考试辨析
- 408 考查 AVL 主要是**手工模拟旋转**（选择题）
- 给定插入序列，画出插入后的 AVL
- 了解 LL/RR/LR/RL 四种失衡型的手工调整方法即可`},{id:`ds-7-3-3`,chapterId:`ds-7`,title:`红黑树`,keyConcepts:[`红黑树`,`红结点`,`黑结点`,`黑高`,`近似平衡`],relatedPoints:[`ds-7-3-2`],content:`## 红黑树定义

> 红黑树是一种**近似平衡**的二叉查找树，通过颜色约束保证最长路径不超过最短路径的 2 倍。

---

## 五条性质
1. 每个结点是**红**色或**黑**色
2. 根结点是**黑色**
3. 叶结点（NIL）是**黑色**
4. 红色结点的两个孩子**必为黑色**（不存在连续红色）
5. 从任一结点到其每个叶结点的所有路径包含**相同数量的黑结点**

---

## 黑高 (Black Height)
> 从某结点到叶结点（不含自身）的黑色结点数。

根的黑高 $\\ge \\frac{h}{2}$（因为不能有连续红色）。

---

## vs AVL
| | AVL | 红黑树 |
|------|-----|--------|
| 平衡程度 | 严格平衡（-1/0/1） | 近似平衡 |
| 插入/删除 | 旋转次数多 | 旋转次数少 |
| 查找 | 更快 | 稍慢 |
| 适用 | 查找多 | **插入/删除多** |

---

## 考试辨析
- 408 对红黑树要求较浅——会判断是否符合红黑树定义即可
- 了解性质 4、5 用于推导路径长度关系`},{id:`ds-7-4-1`,chapterId:`ds-7`,title:`B树与B+树`,keyConcepts:[`B树`,`B+树`,`多路平衡查找树`,`m阶`,`关键字`,`子树`],relatedPoints:[`ds-7-3-1`],content:`## B 树 (B-Tree)

> **m 阶 B 树**是一棵**多路平衡查找树**，每个结点最多 $m$ 棵子树。

### 性质（m 阶 B 树）
- 每个结点最多 $m$ 个子树，最多 $m-1$ 个关键字
- 根结点至少 2 个子树（非叶）
- 非根非叶结点至少 $\\lceil m/2 \\rceil$ 个子树
- 所有叶结点在同一层（平衡）
- 结点内关键字**有序**

---

## B+ 树

### 与 B 树的区别
| | B 树 | B+ 树 |
|------|------|-------|
| 关键字数量 | 每个结点最多 $m-1$ 个 | 最多 $m$ 个 |
| 非叶结点存数据吗 | **存** | **不存**（只存索引） |
| 叶结点 | 都在同一层 | 包含全部关键字，**链表串联** |
| 查找 | 可能在非叶层结束 | **必须到叶层** |

---

## 考试辨析
- B+ 树支持**顺序查找**（叶结点链表），B 树不行
- B+ 树更适合**范围查询**（数据库索引常用）
- 408 主要考 B/B+ 树性质的选择题`},{id:`ds-7-4-2`,chapterId:`ds-7`,title:`散列表的概念与构造`,keyConcepts:[`散列表`,`哈希表`,`散列函数`,`除留余数法`,`装填因子`],relatedPoints:[`ds-7-4-3`],content:`## 散列表的定义

> 通过**散列函数**将关键字映射到存储地址，实现快速查找。

散列表是**空间换时间**的经典应用：理论上可达到 $O(1)$ 的查找时间。

---

## 散列函数设计

| 方法 | 说明 |
|------|------|
| **除留余数法** | $H(key) = key \\bmod p$，$p$ 是不大于表长的最大素数 |
| 直接定址法 | $H(key) = a \\times key + b$ |
| 平方取中法 | 取 $key^2$ 的中间几位 |
| 数字分析法 | 适合关键字各位分布不均匀 |

---

## 装填因子
$$\\alpha = \\frac{\\text{表中记录数}}{\\text{表长}}$$

$\\alpha$ 越大，空间越满，冲突概率越高。

---

## 考试辨析
- 散列表查找效率取决于：散列函数、冲突处理方法、装填因子
- 选择合适的 $p$（素数）能减少冲突`},{id:`ds-7-4-3`,chapterId:`ds-7`,title:`散列表的冲突处理`,keyConcepts:[`冲突`,`开放定址法`,`链地址法`,`线性探测`,`二次探测`,`再散列`],relatedPoints:[`ds-7-4-2`],content:`## 开放定址法

当冲突发生时，按某种探测序列找下一个空闲地址：

$$H_i = (H(key) + d_i) \\bmod m$$

| 方法 | $d_i$ | 特点 |
|------|-------|------|
| **线性探测** | $1,2,3,\\ldots$ | 简单，但容易**聚集** |
| **平方探测** | $1,-1,4,-4,\\ldots$ | 减少聚集，但可能探测不到全部位置 |
| **再散列** | $i \\times H_2(key)$ | 双散列，效果好 |

---

## 链地址法（拉链法）

> 同义词用链表链接起来。

| 特点 | 说明 |
|------|------|
| 不会"堆满" | 可存储超过表长的记录 |
| 查找 | 散列后沿链表查找 |
| ASL | 冲突越多，链表越长 |

---

## 查找长度计算（常考）

**ASL(成功)** = 各关键字查找次数之和 / 关键字个数
**ASL(失败)** = 各地址查找失败次数之和 / 散列地址数

**平均查找长度取决于装填因子 $\\alpha$**，与表长无关！

---

## 考试辨析
- 线性探测法插入、查找、删除都需**依次探测**
- 删除不能用"直接置空"（会切断探测链），需用**懒惰删除**标记
- 散列表的 ASL 计算是408常考题型`},{id:`ds-7-5-1`,chapterId:`ds-7`,title:`串的模式匹配（查找视角）`,keyConcepts:[`串匹配`,`BF`,`KMP`,`next数组`],relatedPoints:[`ds-4-2-1`,`ds-4-2-2`,`ds-4-2-3`],content:`## 串的模式匹配与查找

串的模式匹配本质上是**特殊查找**——在文本串中查找模式串的位置。

详见第4章「串」中的详细讲解。

| 算法 | 时间 | 核心思想 |
|------|------|----------|
| BF | $O(n \\times m)$ | 暴力回溯 |
| KMP | $O(n + m)$ | next数组免回溯 |

---

## 考试辨析
- 408 将"串的模式匹配"列为查找的一部分，但考试重点在第4章`},{id:`ds-8-1-1`,chapterId:`ds-8`,title:`排序的基本概念`,keyConcepts:[`排序`,`稳定性`,`内部排序`,`外部排序`,`比较`],relatedPoints:[],content:`## 排序的定义

> 将一组"无序"的记录序列调整为"有序"的记录序列。

---

## 核心概念
| 术语 | 含义 |
|------|------|
| **稳定性** | 若 $a=b$ 且 $a$ 在 $b$ 前，排序后 $a$ 仍在 $b$ 前，则算法**稳定** |
| **内部排序** | 全部记录可同时放入内存 |
| **外部排序** | 记录太多，需要内外存交换 |
| **比较排序** | 基于关键字的比较（$\\Omega(n\\log n)$ 下界） |

---

## 考试辨析
- **稳定性**是排序选择+大题的高频考点
- 记住哪些排序稳定、哪些不稳定——这是408选择题的永恒主题`},{id:`ds-8-2-1`,chapterId:`ds-8`,title:`插入排序（直接插入与折半插入）`,keyConcepts:[`直接插入排序`,`折半插入排序`,`稳定`,`O(n^2)`],relatedPoints:[`ds-8-1-1`],content:`## 直接插入排序

> 将待排序记录逐个插入已排好的序列中。像打扑克牌理牌。

\\\`\\\`\\\`c
void InsertSort(int a[], int n) {
    for (int i = 1; i < n; i++) {
        int tmp = a[i], j;
        for (j = i - 1; j >= 0 && a[j] > tmp; j--)
            a[j + 1] = a[j];
        a[j + 1] = tmp;
    }
}
\\\`\\\`\\\`

| 属性 | 值 |
|------|-----|
| 时间(最好) | $O(n)$（已有序） |
| 时间(最坏) | $O(n^2)$（逆序） |
| 空间 | $O(1)$ |
| **稳定** | ✅ |

---

## 折半插入排序

用折半查找确定插入位置，减少比较次数（$O(n\\log n)$），但移动次数不变（$O(n^2)$）。

---

## 考试辨析
- 直接插入排序的最好情况 $O(n)$——当序列基本有序时
- 插入排序是**稳定**的
- 适用于 $n$ 较小时`},{id:`ds-8-2-2`,chapterId:`ds-8`,title:`希尔排序`,keyConcepts:[`希尔排序`,`缩小增量`,`不稳定`,`O(n^1.3)`],relatedPoints:[`ds-8-2-1`],content:`## 希尔排序思想

> 将记录按增量分组，每组进行直接插入排序；逐步缩小增量，直到增量为 1。

---

## 时间复杂度
| 增量序列 | 最坏 |
|----------|------|
| 希尔原始（倍数减半） | $O(n^2)$ |
| Hibbard（$2^k-1$） | $O(n^{1.5})$ |

---

## 特性
| 属性 | 值 |
|------|-----|
| 空间 | $O(1)$ |
| **稳定** | ❌ **不稳定**（分组导致同值元素可能交换） |

---

## 考试辨析
- 希尔排序是**不稳定**的——分组跨越可能交换同值元素
- 希尔排序是插入排序的改进——利用"基本有序 + 直接插入"的优势`},{id:`ds-8-3-1`,chapterId:`ds-8`,title:`冒泡排序`,keyConcepts:[`冒泡排序`,`交换`,`稳定`,`O(n^2)`,`最好O(n)`],relatedPoints:[`ds-8-1-1`],content:`## 冒泡排序

> 相邻元素两两比较，逆序则交换；每趟确定一个最大/最小元素的位置。

\\\`\\\`\\\`c
void BubbleSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool flag = false;
        for (int j = 0; j < n - 1 - i; j++)
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]);
                flag = true;
            }
        if (!flag) break;  // 已有序，提前结束
    }
}
\\\`\\\`\\\`

| 属性 | 值 |
|------|-----|
| 时间(最好) | $O(n)$（已有序，一趟结束） |
| 时间(最坏) | $O(n^2)$ |
| 空间 | $O(1)$ |
| **稳定** | ✅ |

---

## 考试辨析
- 带 flag 优化后最好情况 $O(n)$
- 冒泡排序是**稳定**的（相邻交换，不会跨过相等元素）`},{id:`ds-8-3-2`,chapterId:`ds-8`,title:`快速排序`,keyConcepts:[`快速排序`,`分治`,`枢轴`,`划分`,`不稳定`,`O(n log n)`],relatedPoints:[`ds-8-3-1`,`ds-5-3-1`],content:`## 快速排序思想

> **分治**：选一个枢轴 (pivot)，划分成左右两部分——左边 $\\le$ 枢轴 $\\le$ 右边，再递归排序左右。

\\\`\\\`\\\`c
int Partition(int a[], int low, int high) {
    int pivot = a[low];
    while (low < high) {
        while (low < high && a[high] >= pivot) high--;
        a[low] = a[high];
        while (low < high && a[low] <= pivot) low++;
        a[high] = a[low];
    }
    a[low] = pivot;
    return low;
}

void QuickSort(int a[], int low, int high) {
    if (low < high) {
        int pos = Partition(a, low, high);
        QuickSort(a, low, pos - 1);
        QuickSort(a, pos + 1, high);
    }
}
\\\`\\\`\\\`

| 属性 | 值 |
|------|-----|
| 时间(最好) | $O(n\\log n)$（均匀划分） |
| 时间(最坏) | $O(n^2)$（有序或逆序 —— 退化为冒泡） |
| 空间 | $O(\\log n)$（递归栈） |
| **稳定** | ❌ **不稳定** |

---

## 考试辨析
- 快排是408大题的常客（2011、2013、2016年均考过）
- **快排不稳定**——划分过程中的元素互换可能打乱等值顺序
- 快排空间复杂度 $O(\\log n)$（而非 $O(1)$），因为递归栈深度
- 不稳定性+最坏情况 $O(n^2)$ 是快排选择题的常见干扰项`},{id:`ds-8-4-1`,chapterId:`ds-8`,title:`简单选择排序与堆排序`,keyConcepts:[`选择排序`,`堆排序`,`不稳定`,`O(n^2)`,`O(n log n)`,`大根堆`],relatedPoints:[`ds-8-1-1`,`ds-5-5-3`],content:`## 简单选择排序

每趟从待排序部分选最小的，放到已排序末尾。

| 属性 | 值 |
|------|-----|
| 时间(最好/最坏) | $O(n^2)$ |
| 空间 | $O(1)$ |
| **稳定** | ❌ **不稳定** |

---

## 堆排序

利用大根堆/小根堆进行排序。

| 属性 | 值 |
|------|-----|
| 建堆时间 | $O(n)$ |
| 总体时间 | $O(n\\log n)$ |
| 空间 | $O(1)$ |
| **稳定** | ❌ **不稳定** |

---

## 考试辨析
- 堆排序**空间 $O(1)$** —— 它是**原地**的（区别于快排需要 $O(\\log n)$ 递归栈）
- 建堆复杂度 $O(n)$ 不是 $O(n\\log n)$ —— 利用"多数结点在底层"的性质
- 堆排序为 **$O(1)$ 空间 + $O(n\\log n)$ 时间**，但不稳定`},{id:`ds-8-5-1`,chapterId:`ds-8`,title:`归并排序`,keyConcepts:[`归并排序`,`分治`,`二路归并`,`稳定`,`O(n log n)`,`O(n)空间`],relatedPoints:[`ds-8-1-1`],content:`## 归并排序思想

> **分治**：将序列递归分成两半，排序后合并（归并）。

\\\`\\\`\\\`c
void MergeSort(int a[], int low, int high) {
    if (low < high) {
        int mid = (low + high) / 2;
        MergeSort(a, low, mid);
        MergeSort(a, mid + 1, high);
        Merge(a, low, mid, high);  // O(n) 把两个有序段合并
    }
}
\\\`\\\`\\\`

| 属性 | 值 |
|------|-----|
| 时间(任何情况) | $O(n\\log n)$ |
| 空间 | **$O(n)$** |
| **稳定** | ✅ |

---

## 归并排序特性
- 适合**外部排序**（可逐段读入合并）
- 时间和空间都是 $O(n\\log n)$
- $O(n)$ 额外空间是归并排序的主要缺点

---

## 考试辨析
- 归并排序是**稳定**的 $O(n\\log n)$ 算法——唯一的稳定+高效的内部排序
- 归并排序的比较次数与初始顺序无关
- 算法题常考**两个有序数组的合并**（Merge操作）`},{id:`ds-8-5-2`,chapterId:`ds-8`,title:`基数排序`,keyConcepts:[`基数排序`,`LSD`,`MSD`,`分配`,`收集`,`稳定`,`O(d(n+r))`],relatedPoints:[`ds-8-5-1`],content:`## 基数排序思想

> 不基于比较，而是通过"分配"和"收集"按关键字各位进行排序。

| 方式 | 说明 |
|------|------|
| **LSD** | 从低位到高位 |
| **MSD** | 从高位到低位 |

---

## 复杂度
| 属性 | 值 |
|------|-----|
| 时间 | $O(d(n+r))$，$d$=位数，$r$=基数 |
| 空间 | $O(r)$（队列数组） |
| **稳定** | ✅（LSD方式） |

---

## 考试辨析
- 基数排序**不基于比较**——突破了 $\\Omega(n\\log n)$ 下界
- 不适合关键字范围太大的情况
- 408 考得较少，了解基本原理即可`},{id:`ds-8-6-1`,chapterId:`ds-8`,title:`各种内部排序算法的比较`,keyConcepts:[`排序对比`,`时间`,`空间`,`稳定性`,`选择依据`],relatedPoints:[`ds-8-1-1`,`ds-8-2-1`,`ds-8-3-1`,`ds-8-4-1`,`ds-8-5-1`],content:`## 综合对比总表（408必背）

| 算法 | 最好 | 最坏 | 平均 | 空间 | 稳定 |
|------|------|------|------|------|------|
| 直接插入 | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ✅ |
| 希尔 | — | $O(n^2)$ | ~$O(n^{1.3})$ | $O(1)$ | ❌ |
| 冒泡 | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ✅ |
| 快速 | $O(n\\log n)$ | $O(n^2)$ | $O(n\\log n)$ | $O(\\log n)$ | ❌ |
| 简单选择 | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | ❌ |
| 堆 | $O(n\\log n)$ | $O(n\\log n)$ | $O(n\\log n)$ | $O(1)$ | ❌ |
| 归并 | $O(n\\log n)$ | $O(n\\log n)$ | $O(n\\log n)$ | $O(n)$ | ✅ |
| 基数 | $O(d(n+r))$ | $O(d(n+r))$ | $O(d(n+r))$ | $O(r)$ | ✅ |

---

## 选择建议
| 场景 | 推荐算法 |
|------|----------|
| $n$ 很小 | 直接插入排序 |
| $n$ 较大，要求稳定 | 归并排序 |
| $n$ 较大，内存少 | **堆排序**（$O(1)$ 额外空间） |
| $n$ 较大，一般情况 | **快速排序** |
| 基本有序 | 直接插入、冒泡 |

---

## 考试辨析
- 这个对比表必须能默写——408 选择题和大题的"第一问"经常从此出发
- 稳定性排序：**插冒归基**（插入、冒泡、归并、基数）即"**插冒归基**"
- $O(n\\log n)$ 中只有归并**稳定**，只有堆**原地**+$O(n\\log n)$`},{id:`ds-8-7-1`,chapterId:`ds-8`,title:`外部排序`,keyConcepts:[`外部排序`,`归并段`,`败者树`,`最佳归并树`,`置换选择排序`],relatedPoints:[`ds-8-5-1`,`ds-5-5-1`],content:`## 外部排序的基本思想

> 当记录太多无法全部装入内存时，需要利用外存进行排序。

核心：**归并排序**——先产生初始归并段，再 $k$ 路归并。

---

## 时间复杂度
$$\\text{总时间} = \\text{初始归并段产生} + \\text{归并趟数} \\times \\text{每趟 IO}$$

影响总时间的因素：归并趟数 + 每次归并的 IO 量。

---

## 优化方法
| 方法 | 效果 |
|------|------|
| **多路归并**（增大 $k$） | 减少归并趟数 |
| **败者树** | 减少 $k$ 路归并中的比较次数 |
| **置换选择排序** | 产生更长的初始归并段 |
| **最佳归并树**（哈夫曼树） | 最小化总归并代价 |

---

## 考试辨析
- 外部排序采用**归并排序**——因为归并可逐段读写
- 最佳归并树 = 哈夫曼树的应用（2012年真题考察）
- $m$ 个初始归并段做 $k$ 路归并，趟数 = $\\lceil \\log_k m \\rceil$`}],gr=[{id:`co-1-1-1`,chapterId:`co-1`,title:`计算机发展历程与冯·诺依曼结构`,keyConcepts:[`冯·诺依曼`,`存储程序`,`五大部件`,`二进制`,`运算器中心`],relatedPoints:[`co-1-2-1`],content:`## 冯·诺依曼计算机的基本思想

> **"存储程序"**——将程序像数据一样存入存储器中，计算机自动逐条取出指令执行。

### 核心要点
1. 计算机由**五大部件**组成：运算器、控制器、存储器、输入设备、输出设备
2. 指令和数据以**二进制**形式存储
3. 以**运算器为中心**（现代计算机改为**以存储器为中心**）
4. 指令按顺序执行（程序计数器 PC 控制）

---

## 五大部件功能
| 部件 | 功能 |
|------|------|
| **运算器** | 算术运算 + 逻辑运算 |
| **控制器** | 控制指令执行顺序，产生控制信号 |
| **存储器** | 存储程序和数据 |
| **输入设备** | 将信息输入计算机 |
| **输出设备** | 将结果输出 |

---

## 考试辨析
- 冯·诺依曼机的核心是**存储程序**
- "以运算器为中心"是冯氏结构的标志——现代结构"以存储器为中心"
- 指令和数据同等存于存储器中——**从存储内容上无法区分**（只有执行时才区分）`},{id:`co-1-2-1`,chapterId:`co-1`,title:`计算机系统的层次结构`,keyConcepts:[`层次结构`,`裸机`,`虚拟机`,`翻译程序`,`解释程序`,`编译`,`汇编`],relatedPoints:[],content:`## 计算机系统的多级层次

\`\`\`
用户

高级语言 (C/Java/Python)  → 编译程序

汇编语言               → 汇编程序

操作系统               → 操作系统

机器语言（指令系统）

微程序（微指令）

硬件逻辑（电路）
\`\`\`

---

## 核心概念
| 概念 | 说明 |
|------|------|
| **翻译程序** | 将高级语言源代码转换为机器语言 |
| **编译程序** | 一次性翻译整个源程序 |
| **解释程序** | 逐条翻译并执行（不生成目标代码） |
| **汇编程序** | 将汇编语言翻译为机器语言 |

---

## 机器/汇编/高级语言对比
| 语言 | 特点 | 可读性 | 可移植性 |
|------|------|--------|----------|
| 机器语言 | 二进制代码 | 差 | 差 |
| 汇编语言 | 助记符 | 较好 | 差 |
| 高级语言 | 面向问题 | 好 | 好 |

---

## 考试辨析
- 编译与解释的区别：编译生成目标代码，解释不生成
- 汇编语言与机器指令一一对应（汇编 = 机器语言的助记符形式）`},{id:`co-1-3-1`,chapterId:`co-1`,title:`计算机的性能指标`,keyConcepts:[`主频`,`CPI`,`MIPS`,`MFLOPS`,`机器字长`,`数据通路带宽`,`响应时间`],relatedPoints:[`co-5-5-1`],content:`## 核心性能指标

| 指标 | 含义 | 公式 |
|------|------|------|
| **机器字长** | CPU 一次处理的二进制位数 | — |
| **主频 (f)** | CPU 每秒的时钟周期数 | 单位 Hz |
| **时钟周期 (T)** | 一个时钟周期的时间 | $T = 1/f$ |
| **CPI** | 每条指令所需的平均时钟周期数 | — |
| **CPU 执行时间** | 执行某程序的总时间 | $T_{CPU} = N \\times CPI \\times T$ |
| **MIPS** | 每秒百万条指令 | $MIPS = f / (CPI \\times 10^6)$ |
| **MFLOPS** | 每秒百万次浮点运算 | — |

---

## CPU 执行时间公式（核心）
$$T_{CPU} = N \\times CPI \\times T = \\frac{N \\times CPI}{f}$$

- $N$ = 指令条数
- $CPI$ = 每条指令平均时钟周期数
- $T$ = 时钟周期

---

## 考试辨析
- $T_{CPU}$ 越小越好，MIPS/MFLOPS 越大越好
- 主频 ≠ 性能——受 CPI 影响很大
- 提高主频 $f$ 和降低 $CPI$ 都提高性能`},{id:`co-2-1-1`,chapterId:`co-2`,title:`进位计数制与转换`,keyConcepts:[`二进制`,`八进制`,`十六进制`,`十进制`,`进制转换`],relatedPoints:[`co-2-1-2`],content:`## 四种常用进制

| 进制 | 基数 | 数码 | 后缀 |
|------|------|------|------|
| 二进制 | 2 | 0,1 | B |
| 八进制 | 8 | 0~7 | O |
| 十进制 | 10 | 0~9 | D |
| 十六进制 | 16 | 0~9,A~F | H |

---

## 转换方法
| 转换方向 | 方法 |
|----------|------|
| 任意进制 → 十进制 | **按权展开求和** |
| 十进制 → 任意进制 | 整数**除基取余**，小数**乘基取整** |
| 二进制 ↔ 八进制 | 3 位一组 |
| 二进制 ↔ 十六进制 | 4 位一组 |

---

## 考试辨析
- BCD 码：用 4 位二进制表示 1 位十进制——有 8421 码(有权)、余 3 码(无权)等
- 进制转换是数据表示和运算的基础，不会单独出大题`},{id:`co-2-1-2`,chapterId:`co-2`,title:`定点数的编码表示`,keyConcepts:[`原码`,`反码`,`补码`,`移码`,`模运算`,`符号位`,`数值范围`],relatedPoints:[`co-2-2-1`],content:`## 四种编码对比（n 位字长，含符号位）

| 编码 | 正数 | 负数 | 0 的表示 | 数值范围 |
|------|------|------|----------|----------|
| **原码** | 符号位 0 + 绝对值 | 符号位 1 + 绝对值 | +0 / -0 | $-(2^{n-1}-1) \\sim +(2^{n-1}-1)$ |
| **反码** | 同原码 | 原码**除符号位外取反** | +0 / -0 | $-(2^{n-1}-1) \\sim +(2^{n-1}-1)$ |
| **补码** | 同原码 | 反码末位 **+1** | 只有 +0 | **$-2^{n-1} \\sim +(2^{n-1}-1)$** |
| **移码** | 补码符号位取反 | 补码符号位取反 | 只有 +0 | $-2^{n-1} \\sim +(2^{n-1}-1)$ |

---

## 补码（最重要）

> **计算机中整数统一使用补码表示**——原因：0 唯一表示，减法变加法。

补码求法口诀：**"按位取反末尾加一"**

$$[X]_{补} = \\begin{cases} X & X \\ge 0 \\\\ 2^n + X & X < 0 \\end{cases}$$

---

## 考试辨析
- **补码的数值范围不对称**：负数范围比正数多 1（如 8 位：$-128 \\sim +127$）
- 移码与补码符号位相反——移码用于**浮点数阶码**
- 原码加减需判断符号位和绝对值大小——实现复杂`},{id:`co-2-2-1`,chapterId:`co-2`,title:`定点数的加减运算与溢出判断`,keyConcepts:[`加法器`,`溢出`,`OF`,`SF`,`CF`,`ZF`,`进位`,`双符号位`],relatedPoints:[`co-2-1-2`,`co-2-4-1`],content:`## 补码加减法

$$[A+B]_{补} = [A]_{补} + [B]_{补}$$
$$[A-B]_{补} = [A]_{补} + [-B]_{补}$$

> 补码可以将减法统一为加法——这是补码最大的价值。

---

## 溢出判断（三种方法）

### 方法一：单符号位法
若两个正数相加得负数，或两个负数相加得正数 → 溢出。

### 方法二：双符号位法（变形补码）
- 正数：00.xxx，负数：11.xxx
- **结果双符号位异号（01 或 10）→ 溢出**
- 01 = 正溢出（上溢），10 = 负溢出（下溢）

### 方法三：进位判断法
最高数值位的进位 $C_{n-1}$ 与符号位的进位 $C_n$ **异或 = 1** → 溢出。
$$OF = C_n \\oplus C_{n-1}$$

---

## 标志位
| 标志 | 含义 | 判断条件 |
|------|------|----------|
| **ZF** | 零标志 | 结果为 0 |
| **SF** | 符号标志 | 结果的最高位（符号位） |
| **CF** | 进位/借位 | 无符号运算的进位/借位 |
| **OF** | 溢出标志 | **有符号运算**溢出 |

---

## 考试辨析
- OF 只对**有符号数**有意义，CF 只对**无符号数**有意义
- 双符号位法是最直观的溢出判断——408 常考`},{id:`co-2-2-2`,chapterId:`co-2`,title:`定点数的乘除运算`,keyConcepts:[`乘法`,`Booth算法`,`原码乘法`,`补码乘法`,`除法`,`不恢复余数`,`加减交替`],relatedPoints:[`co-2-2-1`],content:`## 乘法运算

### Booth 算法（补码一位乘法）—— 核心步骤
设 X 为被乘数，Y 为乘数，均用补码表示。

**算法流程：**
1. 在乘数 Y 末位补 0（即 $y_{n+1}=0$）
2. 根据 $(y_i, y_{i+1})$ 决定操作：
- 0,0 或 1,1 → 部分积 +0
- 0,1（上升沿） → 部分积 +[X]补
- 1,0（下降沿） → 部分积 +[-X]补
3. 部分积和乘数一起**算术右移**一位
4. 重复 n 次（n = 字长）

**手算示例：X = -3 (1101补), Y = 2 (0010)**
\`\`\`
初始: 部分积 0000, 乘数 0010, y_{n+1}=0
Step1: (0,0) → +0, 右移 → 0000 0001 0
Step2: (1,0) → +[X]补=1101 → 1101 0001 0, 右移 → 1110 1000 1
Step3: (0,1) → +[-X]补=0011 → 0001 1000 1, 右移 → 0000 1100 0
Step4: (0,0) → +0, 右移 → 0000 0110 0
结果: 0000 0110 = +6 (补码) = (-3)×2 = -6 的补码 → 1111 1010
\`\`\`
时间复杂度：**n 次加法 + n 次移位**

---
## 除法运算
### 不恢复余数法（加减交替法）
1. 被除数 - 除数 → 若余数 ≥ 0，商 1；余数 < 0，商 0 并恢复余数（加回去）
2. **优化**：够减商 1，下一步 - 除数；不够减商 0，下一步 **+ 除数**（不恢复，直接用加减交替）
3. 重复 n 次，商 n 位

---
## 考试辨析
- Booth 算法每次看 $(y_i, y_{i+1})$ 两位作出决策——不是简单地"同加异减"
- 补码除法的商也以补码表示——商的符号由被除数和除数符号异或决定
- 除法运算在 408 中考得相对少，重点掌握补码一位乘法（Booth算法）的手工模拟`},{id:`co-2-3-1`,chapterId:`co-2`,title:`IEEE 754 浮点数标准`,keyConcepts:[`IEEE754`,`单精度`,`双精度`,`阶码`,`尾数`,`规格化`,`隐藏位`,`移码`,`NaN`,`非规格化数`],relatedPoints:[`co-2-1-2`],content:`## IEEE 754 浮点数格式
> $N = (-1)^S \\times 1.M \\times 2^{E-bias}$

| 精度 | 总位数 | 符号S | 阶码E | 尾数M | bias | 真值范围 |
|------|--------|--------|--------|--------|------|----------|
| **单精度** | 32 位 | 1 | 8 | 23 | 127 | $\\pm(10^{-38} \\sim 10^{38})$ |
| **双精度** | 64 位 | 1 | 11 | 52 | 1023 | $\\pm(10^{-308} \\sim 10^{308})$ |

---
## 阶码与尾数细节
- **阶码用移码表示**（非标准移码，偏置值 bias = $2^{k-1}-1$）
- 单精度：8位阶码，bias = 127，实际阶码 = E - 127
- 双精度：11位阶码，bias = 1023，实际阶码 = E - 1023
- **尾数用原码**表示，规格化后有**隐藏位**（整数部分隐含为 1，不存）
- 例如：单精度尾数 23 位，实际精度 = 24 位（1 隐藏位 + 23 小数位）

---
## 特殊值的位模式（高频考点）
| E（阶码） | M（尾数） | 表示的值 | 说明 |
|-----------|----------|----------|------|
| 全 0 | 全 0 | $\\pm 0$ | 根据 S 位分 +0 / -0 |
| 全 0 | 非 0 | **非规格化数** | 隐藏位变为 0，E 视为 1-bias |
| 全 1 | 全 0 | $\\pm \\infty$ | 根据 S 位 |
| 全 1 | 非 0 | **NaN**（非数） | 如 $\\sqrt{-1}$、$0/0$ |
| 其他 | 任意 | **规格化数** | 正常浮点数 |

---
## 非规格化数（Denormalized）
- 用于表示比最小规格化数更接近 0 的值（逐渐下溢）
- 格式：$N = (-1)^S \\times 0.M \\times 2^{1-bias}$（隐藏位 = 0）
- 好处：避免**突然下溢**（从最小正数直接跳到 0）

---
## 手算示例
**【例】单精度浮点数 C0A00000H 的真值是多少？**

C0A00000H = 1100 0000 1010 0000 0000 0000 0000 0000B
- S = 1 → 负数
- E = 1000 0001B = 129，实际阶码 = 129 - 127 = 2
- M = 010 0000...（隐藏位为1）→ 尾数 = 1.01B = 1.25
- 真值 = $(-1)^1 \\times 1.25 \\times 2^2 = -5.0$

**【例】将 -12.75 转为单精度浮点数**
- 12 = 1100B，0.75 = 0.11B → 12.75 = 1100.11B = $1.10011 \\times 2^3$
- S = 1（负数），实际阶码 = 3，E = 3 + 127 = 130 = 10000010B
- M = 10011 0000 0000 0000 0000 000（23位，去掉隐藏位1）
- 结果：1 10000010 10011000000000000000000 = C14C0000H

---
## 考试辨析
- 阶码全1 + 尾数非0 = NaN（不是无穷大）——选择题常见错误选项
- 阶码全0 → 隐藏位变为0（非规格化数），此时 E 按 1-bias 处理
- 单精度阶码范围 1~254（全0和全1有特殊含义），实际范围 -126~+127
- 浮点数能表示的范围大但**精度有限**（有效位数决定精度）`},{id:`co-2-3-2`,chapterId:`co-2`,title:`浮点数的运算`,keyConcepts:[`对阶`,`规格化`,`舍入`,`溢出判断`,`保护位`,`大阶对小阶`],relatedPoints:[`co-2-3-1`],content:`## 浮点数加减的五个步骤

设有 $X = M_x \\times 2^{E_x}$，$Y = M_y \\times 2^{E_y}$，计算 $X \\pm Y$：

### 步骤一：对阶
> **小阶对大阶**——阶码小的尾数右移，阶码增加，直到两数阶码相同。
- 例如：$E_x = 3$，$E_y = 5$，则 $M_x$ 右移 $5-3=2$ 位，$E_x$ 增为 5
- **右移 = 丢失低位精度**——这是浮点运算误差的主要来源
- 对阶时不改变符号位

### 步骤二：尾数求和
- 对阶后两数的尾数做 $\\pm$ 运算（即定点加减）
- 可能产生溢出，交给规格化处理

### 步骤三：规格化
| 情况 | 操作 | 说明 |
|------|------|------|
| **左规** | 尾数左移，阶码减 1 | 结果尾数最高位不为 1 时（即 $|M| < 1$） |
| **右规** | 尾数右移，阶码加 1 | 尾数溢出时（$|M| \\ge 2$，即双符号位为 01 或 10） |
> 规格化的目标是使尾数变为 $1.xxx$ 或 $0.1xxx$（正数）。

### 步骤四：舍入
> 由于尾数位数有限，运算过程中多余的低位需要舍去。
| 方法 | 规则 | 优缺点 |
|------|------|--------|
| **0舍1入** | 舍去位最高位为 1 → 入；0 → 舍 | 误差小，但可能再次溢出（需再右规） |
| **恒置1** | 无论舍去什么，末位恒置为 1 | 简单，但误差偏大 |
| **截断** | 直接丢掉多余位 | 最简单，误差最大 |

### 步骤五：溢出判断
- **阶码上溢** → 结果溢出（$> 2^{127}$ 即 $\\approx 10^{38}$）
- **阶码下溢** → 结果视为 0（非规格化数或 $\\pm 0$）
- 尾数溢出 → 右规处理（阶码+1，可能引发阶码上溢）

---
## 保护位（Guard、Round、Sticky）
> IEEE 754 规定在运算过程中保留 3 个附加位，提高精度。
| 附加位 | 含义 |
|--------|------|
| G (Guard) | 保护位——运算时保留的一位 |
| R (Round) | 舍入位——Guard 右移的一位 |
| S (Sticky) | 粘滞位——舍入位之后所有位的逻辑或 |

---
## 考试辨析
- 对阶时**尾数右移 = 精度降低**——这是浮点运算误差的主因
- 舍入后可能尾数再次溢出 → 需要二次右规
- 背熟五个步骤的名称和顺序——408 各种题型都以此为基础
- 每年都有"浮点数加减法手工模拟"的选择题或简答题`},{id:`co-2-4-1`,chapterId:`co-2`,title:`算术逻辑单元 (ALU)`,keyConcepts:[`ALU`,`全加器`,`串行进位`,`并行进位`,`先行进位`,`SN74181`],relatedPoints:[`co-2-2-1`,`co-5-1-1`],content:`## ALU 的功能

> ALU 是运算器的核心部件，能完成算术运算和逻辑运算。

---

## 进位方式
| 方式 | 特点 | 速度 |
|------|------|------|
| **串行进位** | 每级进位依赖前一级 | 慢，$O(n)$ |
| **并行进位** | 各级同时生成进位 | 快，但电路复杂 |
| **先行进位 (CLA)** | 分组并行 | 折中 |

---

## 标志位产生
| 标志 | 全称 | 说明 |
|------|------|------|
| ZF | Zero Flag | 结果为 0 |
| SF | Sign Flag | 符号位 |
| CF | Carry Flag | 进位/借位 |
| OF | Overflow Flag | 溢出 |

---

## 考试辨析
- 加法器是 ALU 的核心——408 主要考加法器及进位生成
- 串行进位的关键路径 $O(n)$，并行进位 $O(\\log n)$——了解区别即可`},{id:`co-3-1-1`,chapterId:`co-3`,title:`存储器分类与层次结构`,keyConcepts:[`层次结构`,`Cache`,`主存`,`辅存`,`局部性`,`时间局部性`,`空间局部性`],relatedPoints:[`co-3-3-1`,`ds-1-1-2`],content:`## 存储器的层次结构

\`\`\`
寄存器（CPU内部）  ← 最快/最小/最贵
    ↓
Cache (SRAM)
    ↓
主存 (DRAM)
    ↓
磁盘/SSD（辅存） ← 最慢/最大/最便宜
\`\`\`

---

## 局部性原理
| 类型 | 含义 | 举例 |
|------|------|------|
| **时间局部性** | 刚访问过的数据短期内可能再次访问 | 循环变量 |
| **空间局部性** | 刚访问位置附近的数据可能被访问 | 数组遍历 |

---

## 层次结构解决的核心矛盾
$$\\text{容量} \\uparrow \\quad \\text{速度} \\uparrow \\quad \\text{价格} \\downarrow$$
> 三者不可兼得——用层次结构追求"看起来很大、用起来很快、成本可接受"。

---

## 考试辨析
- Cache-主存层解决**速度**问题（硬件自动完成）
- 主存-辅存层解决**容量**问题（OS + 硬件配合）`},{id:`co-3-2-1`,chapterId:`co-3`,title:`SRAM与DRAM`,keyConcepts:[`SRAM`,`DRAM`,`刷新`,`电容`,`触发器`,`双稳态`,`存取周期`],relatedPoints:[`co-3-1-1`],content:`## SRAM vs DRAM 详细对比
| 特性 | SRAM | DRAM |
|------|------|------|
| **存储原理** | 6管双稳态触发器 | 电容充电（1T1C） |
| **破坏性读出** | 否 | **是**（读出后需重写） |
| **速度** | 快（几 ns） | 慢（几十 ns） |
| **集成度** | 低（6管/bit） | 高（1T1C/bit） |
| **功耗** | 大（持续通电） | 小（电容不耗电） |
| **刷新** | 不需要 | **必须定期刷新**（2ms内） |
| **价格/GB** | 贵 | 便宜 |
| **用途** | Cache（L1/L2/L3） | 主存（DDR4/DDR5） |

---
## DRAM 刷新机制
> DRAM 电容会漏电——信息保留时间约 **2ms**，必须在 2ms 内完成一次全部刷新。

### 三种刷新方式
| 方式 | 做法 | 优点 | 缺点 |
|------|------|------|------|
| **集中刷新** | 在 2ms 末尾连续完成全部刷新 | 实现简单 | 有一段"死时间"（停止读写） |
| **分散刷新** | 每个存取周期后刷新一行 | 无死时间 | 存取周期变长（×2） |
| **异步刷新** | 将刷新均匀分散在 2ms 内 | 折中方案 | 略复杂 |

例：磁芯存储器 2ms 刷新 256 行
- 集中刷新：死时间 = 256 × 刷新周期
- 分散刷新：存取周期 = 原周期 × 2
- 异步刷新：每 2ms/256 = 7.8125μs 刷新一行

---
## 考试辨析
- **只有 DRAM 需要刷新**——SRAM 用触发器，不需要
- 刷新的本质：**读出** → 放大 → **重新写入**
- 刷新一行 = 所有同行的存储单元同时进行（不需要列地址）
- 刷新操作对 CPU 透明——由存储器控制器独立完成
-- 「[2010-选择16] [2012-选择17] [2015-选择18] [2022-选择16」`},{id:`co-3-2-2`,chapterId:`co-3`,title:`ROM、Flash与SSD`,keyConcepts:[`ROM`,`Flash`,`SSD`,`非易失`,`NOR Flash`,`NAND Flash`],relatedPoints:[`co-3-2-1`],content:`## 只读存储器 (ROM)

| 类型 | 特点 |
|------|------|
| MROM | 出厂掩膜写入，不可改 |
| PROM | 用户可写一次 |
| EPROM | 可多次擦除（紫外线） |
| EEPROM | 电擦除（可在线改写） |
| Flash | 电擦除，速度快，成本低 |

---

## NOR Flash vs NAND Flash

| | NOR Flash | NAND Flash |
|------|----------|-----------|
| 读取 | 随机读取快 | 按页读取 |
| 写入/擦除 | 慢 | 快 |
| 容量 | 小 | 大 |
| 用途 | 存储 BIOS/固件 | SSD、U 盘、存储卡 |

---

## SSD (固态硬盘)
- 核心：NAND Flash + 控制器
- 优点：无机械部件，随机访问快，低功耗
- 缺点：写入次数有限（擦写寿命），需要磨损均衡

---

## 考试辨析
- ROM ≠ 只读——现代 EEPROM/Flash 可擦写
- Flash 写入前需先擦除——以"块"为单位擦除`},{id:`co-3-3-1`,chapterId:`co-3`,title:`Cache的基本原理`,keyConcepts:[`Cache`,`命中`,`缺失`,`命中率`,`块`,`主存块`,`Cache行`],relatedPoints:[`co-3-1-1`,`co-3-3-2`],content:`## Cache 的工作原理

> 利用**局部性原理**，将主存中频繁访问的数据块复制到 Cache 中。

CPU 先访问 Cache → **命中**则直接取数据 → **缺失**则从主存取数据并替换到 Cache。

---

## 核心概念
| 术语 | 含义 |
|------|------|
| **命中 (Hit)** | CPU 要访问的数据在 Cache 中 |
| **缺失 (Miss)** | CPU 要访问的数据不在 Cache 中 |
| **命中率 $h$** | Cache 命中的概率 |
| **缺失率** | $= 1 - h$ |

---

## 性能计算（大题常考）

$$T_{avg} = h \\times T_{cache} + (1-h) \\times T_{main}$$

**加速比** $= T_{main} / T_{avg}$

---

## 考试辨析
- Cache 对程序员透明（硬件自动管理）
- 命中时间的定义：从 Cache 读取数据 + 判定的时间
- 缺失损失 = 从主存取回数据块的时间`},{id:`co-3-3-2`,chapterId:`co-3`,title:`Cache的地址映射方式`,keyConcepts:[`直接映射`,`全相联映射`,`组相联映射`,`Cache行`,`主存块`,`标记`,`组号`,`块内地址`],relatedPoints:[`co-3-3-1`,`co-3-3-3`],content:`## 三种映射方式的核心原理

Cache 地址映射的核心问题：**主存块应该放到 Cache 的哪个位置？**

---
## 一、直接映射 (Direct Mapping)
$$\\text{Cache 行号} = \\text{主存块号} \\bmod \\text{Cache 行数}$$

> 每块主存只能映射到 Cache 中**唯一固定**的行。

| 优点 | 缺点 |
|------|------|
| 硬件简单（比较电路少） | **冲突缺失率最高** |
| 查找快（只查一行） | 空间利用率低（可能大量空行被闲置） |

**主存地址拆分**：\`| 标记(tag) | Cache行号(index) | 块内地址(offset) |\`

---
## 二、全相联映射 (Fully Associative)
> 每块主存可映射到 Cache 中**任意**行。

| 优点 | 缺点 |
|------|------|
| **冲突缺失率最低** | 比较电路复杂（需同时比较所有行） |
| 空间利用率最高 | 成本高、速度慢 |

**主存地址拆分**：\`| 标记(tag) | 块内地址(offset) |\`（无 index 字段）

---
## 三、组相联映射 (Set-Associative)
$$\\text{Cache 组号} = \\text{主存块号} \\bmod \\text{组数}$$

> **组间直接映射，组内全相联**——最实用的折中方案。

| 参数 | 含义 |
|------|------|
| $s$ | Cache 总行数 |
| $w$ | 每组行数（路数，$w$-way） |
| $q = s/w$ | 组数 |

**主存地址拆分**：\`| 标记(tag) | 组号(set) | 块内地址(offset) |\`

---
## 主存地址拆分计算（必考题型）

**已知条件**: 主存地址 $n$ 位，Cache 容量 $C$，块大小 $B$，路数 $w$

| 分步计算 | 直接映射 | $w$-路组相联 | 全相联 |
|----------|---------|-------------|--------|
| Cache行数 | $s = C/B$ | $s = C/B$ | $s = C/B$ |
| 组数 | $=$ 行数 | $q = s/w$ | 1 组 |
| 块内偏移位数 | $\\log_2 B$ | $\\log_2 B$ | $\\log_2 B$ |
| Index/Set位数 | $\\log_2 s$ | $\\log_2 q$ | 0 |
| **Tag位数** | **$n - \\log_2 s - \\log_2 B$** | **$n - \\log_2 q - \\log_2 B$** | **$n - \\log_2 B$** |

---
## 手算示例

**【题】主存 4GB(32位地址)，Cache 8KB，块大小 64B。求各映射下地址结构。**

解：
- 块内偏移 = $\\log_2 64 = 6$ 位
- Cache 行数 = $8KB \\div 64B = 128$ 行
- 副存块数 = $4GB \\div 64B = 2^{26}$ 块

| 映射 | Index/组号位 | Tag 位 |
|------|------------|--------|
| 直接映射 | $\\log_2 128 = 7$ | $32-7-6 = 19$ |
| 2路组相联 | $\\log_2 64 = 6$ | $32-6-6 = 20$ |
| 4路组相联 | $\\log_2 32 = 5$ | $32-5-6 = 21$ |
| 全相联 | 0 | $32-0-6 = 26$ |

---
## 三种映射对比
| | 直接 | 组相联 | 全相联 |
|------|------|--------|--------|
| 冲突缺失 | 多 | 中 | 少 |
| 比较器数 | 1 | $w$ | $s$ |
| Tag 位数 | 最短 | 中等 | 最长 |
| 实际使用 | 小容量/简单设计 | **现代 CPU 标配** | TLB |

---
## 考试辨析
- **主存地址拆分是 408 大题必考内容**——几乎每年都有一道 Cache 综合题
- 关键：先确定块大小→块内位数→行数/组数→Index/Set位数→剩余为 Tag
- TLB 通常用全相联或组相联，因为条目少、要求高命中率
- 组相联的"路数"增加 → 更接近全相联 → 冲突减少但成本增加`},{id:`co-3-3-3`,chapterId:`co-3`,title:`Cache的替换算法与写策略`,keyConcepts:[`LRU`,`FIFO`,`随机替换`,`写直达`,`写回`,`写分配`,`非写分配`,`伪LRU`],relatedPoints:[`co-3-3-2`],content:`## 替换算法
> 当 Cache 满且需要调入新块时，选择哪个块替换出去。

| 算法 | 策略 | 实现难度 | 命中率 | 说明 |
|------|------|---------|--------|------|
| **随机替换(RAND)** | 随机选一块 | 最简单 | 最低 | 硬件生成随机数 |
| **FIFO** | 替换最早进入的 | 简单 | 中等 | 可能替换掉频繁使用的块 |
| **LRU** | 替换最久未使用的 | 复杂 | **最高** | 利用时间局部性 |
| **伪LRU (PLRU)** | LRU 的简化版 | 中等 | 接近 LRU | 二叉树近似 |

---
## LRU 的实现（2路组相联）
> 每组只需 1 位 LRU 位：0=最近用的是左路，替换右路；1=相反。

对于 4 路组相联，需要跟踪 4! = 24 种顺序 → 硬件成本高 → 通常用 PLRU。

---
## 写策略

### 写命中 (Write Hit) 时的策略
| 策略 | 做法 | 优点 | 缺点 |
|------|------|------|------|
| **写直达 (Write-Through)** | 同时写 Cache 和主存 | 数据一致性好 | 写速度慢（受主存限制） |
| **写回 (Write-Back)** | 只写 Cache，替换时再写回主存 | 写速度快 | 一致性复杂（需 dirty 位） |

> **Dirty 位**：标记 Cache 行是否被修改过。脏位=1 → 替换时须写回主存。

### 写缺失 (Write Miss) 时的策略
| 策略 | 做法 | 通常搭配 |
|------|------|----------|
| **写分配 (Write-Allocate)** | 先调入主存块到 Cache，再写入 | 写回 |
| **非写分配 (No-Write-Allocate)** | 直接写主存，不调入 Cache | 写直达 |

> **常用组合**：写回 + 写分配（Write-Back + Write-Allocate）

---
## 多核 Cache 一致性
> 多个 CPU 核各有独立 Cache，当一个核修改数据时，其他核的 Cache 需要感知。

### MESI 协议（4 种状态）
| 状态 | 全称 | 含义 |
|------|------|------|
| **M (Modified)** | 已修改 | 只在本 Cache 有，脏数据，写回后变为 E |
| **E (Exclusive)** | 独占 | 只在本地，与主存一致 |
| **S (Shared)** | 共享 | 多 Cache 同时拥有，与主存一致 |
| **I (Invalid)** | 无效 | 该行数据已过时 |

核心操作：**总线嗅探 (Bus Snooping)**——所有 Cache 控制器监视总线上的写操作。

---
## 考试辨析
- LRU 最适合利用**时间局部性**（刚访问的可能很快再访问）
- 写回策略必须有 **Dirty 位**——选择题常见考点
- 多核 Cache 一致性是近年来 408 的新热点（2019、2022年考过）
- 写直达 + 非写分配是经典组合（简单、一致性高）
- 写回 + 写分配是性能最佳组合（现代 CPU 常用）`},{id:`co-3-3-4`,chapterId:`co-3`,title:`Cache 常见题型与解题技巧`,keyConcepts:[`Cache`,`组相联`,`地址拆分`,`LRU`,`命中率`,`平均访存时间`],relatedPoints:[`co-3-3-2`,`co-3-3-3`],content:`## 题型一：主存地址拆分
**已知**：主存地址n位，Cache容量C，块大小B，路数w
**步骤**：
1. 块内偏移位 = log2(B)
2. Cache行数 s = C/B；组数 q = s/w
3. Index位 = log2(s)或log2(q)；标记位 = n - Index位 - 偏移位

**经典陷阱**：给定单元地址，先求块号再取模！
例：129号单元，块大小32B -> 块号=floor(129/32)=4，不是129

---
## 题型二：LRU命中率计算
组相联+LRU替换时，需逐地址模拟替换过程：
1. 确定每个地址的块号和组号
2. 维护每组的LRU栈（最近使用的在栈顶）
3. 访问命中=已在组内，缺失=不在组内(需替换栈底块)

---
## 题型三：平均访存时间
Tavg = h x Tcache + (1-h) x Tmain
两Cache串联：Tavg = h1 x T1 + (1-h1) x [h2 x T2 + (1-h2) x Tmain]

---
## 易混淆结论
- TLB命中 != Cache命中（两者独立）
- TLB是页表的Cache——用SRAM，全相联
- Cache命中 != 页表命中（两者不相关）`},{id:`co-3-4-1`,chapterId:`co-3`,title:`虚拟存储器`,keyConcepts:[`虚拟地址`,`物理地址`,`页表`,`TLB`,`快表`,`页式存储`,`缺页`],relatedPoints:[`co-3-1-1`,`co-3-3-1`,`os-3-4-1`],content:`## 虚拟存储器的目的
> 将**主存**和**辅存**统一编址，向程序员提供一个比主存大得多的地址空间。

---

## 核心概念
| 概念 | 含义 |
|------|------|
| **虚拟地址（逻辑地址）** | 程序员看到的地址 |
| **物理地址** | 实际主存的地址 |
| **页表** | 虚拟页号 → 物理页号映射表 |
| **页表项 (PTE)** | 含物理页号 + 有效位/保护位等 |
| **缺页 (Page Fault)** | 访问的页不在主存中 |

---

## TLB (快表)

> TLB = Translation Lookaside Buffer，页表的高速缓存。

| TLB | 说明 |
|-----|------|
| 存什么 | 近期使用的页表项 |
| 为什么要 | 减少访问页表的次数（一次访存 → 一次查 TLB） |
| 特点 | 容量小、速度快、全相联 |

---

## 虚拟地址 → 物理地址流程
1. CPU 产生虚拟地址
2. 查 TLB → 命中则直接得到物理地址
3. TLB 缺失 → 查页表 → 更新 TLB
4. 页表缺失 → 缺页中断 → OS 调入页 → 更新页表

---

## 考试辨析
- 虚拟存储器由 OS + 硬件共同管理（主存-辅存层）
- 虚拟地址空间大小取决于**地址线位数**，不取决于主存大小
- TLB = 页表的 Cache——用 SRAM 实现`},{id:`co-4-1-1`,chapterId:`co-4`,title:`指令格式与操作码编码`,keyConcepts:[`指令格式`,`操作码`,`地址码`,`定长编码`,`变长编码`,`扩展操作码`],relatedPoints:[`co-5-1-1`],content:`## 指令的基本格式

一条指令由**操作码 (OP)** 和**地址码 (A)** 组成：

\`\`\`
| 操作码 OP | 地址码 A1 | A2 | A3 |
\`\`\`

| 字段 | 含义 |
|------|------|
| 操作码 | 指明指令做什么（加、减、跳转...） |
| 地址码 | 操作数的地址信息 |

---

## 按地址数分类
| 类型 | 格式 | 特点 |
|------|------|------|
| 三地址 | OP A1, A2, A3 | (A1) OP (A2) → A3 |
| 二地址 | OP A1, A2 | (A1) OP (A2) → A1 |
| 一地址 | OP A | (AC) OP (A) → AC |
| 零地址 | OP | 栈顶两个数操作（堆栈机） |

---

## 操作码编码方式
| 方式 | 说明 | 优缺点 |
|------|------|--------|
| **定长编码** | 所有指令操作码长度相同 | 译码简单，空间利用率低 |
| **变长编码** | 常用指令短编码，不常用指令长编码 | 提高利用率，译码复杂 |
| **扩展操作码** | 在多地址中用一部分操作码做扩展 | 平衡定长和变长 |

---

## 考试辨析
- 扩展操作码就是"用地址位做操作码"——减少地址字段，增加操作码位
- $n$ 位操作码最多表示 $2^n$ 条指令`},{id:`co-4-2-1`,chapterId:`co-4`,title:`寻址方式`,keyConcepts:[`立即寻址`,`直接寻址`,`间接寻址`,`寄存器寻址`,`基址寻址`,`变址寻址`,`相对寻址`],relatedPoints:[`co-4-1-1`],content:`## 常见寻址方式

| 方式 | 操作数位置 | 有效地址 | 特点 |
|------|-----------|----------|------|
| **立即寻址** | 指令中直接给出 | — | 不用访存，但数值范围有限 |
| **直接寻址** | 主存 | EA = A | 一次访存 |
| **间接寻址** | 主存中的地址指向主存 | EA = (A) | 需多次访存 |
| **寄存器直接** | 寄存器 | EA = R | 快，不用访存 |
| **寄存器间接** | 寄存器中地址指向主存 | EA = (R) | 一次访存 |
| **基址寻址** | 主存 | EA = (BR) + A | 程序重定位 |
| **变址寻址** | 主存 | EA = (IX) + A | **数组访问** |
| **相对寻址** | 主存 | EA = (PC) + A | 转移指令 |

---

## 基址 vs 变址
| | 基址寻址 | 变址寻址 |
|------|----------|----------|
| 基准 | 基址寄存器 BR | 形式地址 A |
| 偏移 | 形式地址 A | 变址寄存器 IX |
| 用途 | 程序重定位 | **数组/循环** |
| 谁变 | BR 变（OS 设） | IX 变（程序员设） |

---

## 考试辨析
- 相对寻址中 EA = (PC) + 偏移量——**PC 已是下一条指令地址**（注意！）
- 变址寻址特别适合**数组元素访问**——A 是首地址，IX 是下标
- 基址面向 OS 的程序重定位，变址面向用户程序的数组访问`},{id:`co-4-3-1`,chapterId:`co-4`,title:`CISC与RISC`,keyConcepts:[`CISC`,`RISC`,`复杂指令集`,`精简指令集`,`流水线`],relatedPoints:[`co-5-5-1`,`co-4-1-1`],content:`## CISC vs RISC

| 特征 | CISC | RISC |
|------|------|------|
| 指令数量 | **多** | **少** |
| 指令长度 | **变长** | **定长** |
| 寻址方式 | 多 | 少 |
| 指令执行时间 | 差异大 | 大多单周期 |
| 流水线 | 难以实现 | **容易实现** |
| 编译 | 简单 | 复杂（需优化编译器） |
| **典型** | x86 | ARM、MIPS、RISC-V |

---

## 考试辨析
- RISC 指令定长 → 译码简单 → **适合流水线**
- CISC 变长 → 指令功能强 → 程序代码短
- 现代 CPU：x86 外部 CISC、内部微码转 RISC（融合两者）
`},{id:`co-5-1-1`,chapterId:`co-5`,title:`CPU的功能与基本结构`,keyConcepts:[`CPU`,`运算器`,`控制器`,`PC`,`IR`,`MAR`,`MDR`,`寄存器`],relatedPoints:[`co-2-4-1`,`co-4-1-1`],content:`## CPU 的两大组成部分

\`\`\`
CPU
├── 运算器
│   ├── ALU（算术逻辑单元）
│   ├── ACC（累加器）
│   ├── 通用寄存器组
│   └── 标志寄存器 (FR/PSW)
│
└── 控制器
    ├── PC（程序计数器）
    ├── IR（指令寄存器）
    ├── ID（指令译码器）
    └── CU（控制单元）
\`\`\`

---

## 关键寄存器
| 寄存器 | 全称 | 功能 |
|--------|------|------|
| **PC** | 程序计数器 | 存放下一条指令地址（取指后自动递增） |
| **IR** | 指令寄存器 | 存放当前正在执行的指令 |
| **MAR** | 存储器地址寄存器 | 存放要访问的存储单元地址 |
| **MDR** | 存储器数据寄存器 | 存放与存储器交换的数据 |

---

## 考试辨析
- MAR 和 MDR 在 CPU 内部（不是主存中）
- PC 取指后自动递增——具体增量取决于指令长度`},{id:`co-5-1-3`,chapterId:`co-5`,title:`CPU寄存器与透明性`,keyConcepts:[`寄存器`,`用户可见`,`透明`,`PC`,`IR`,`MAR`,`MDR`,`ACC`,`PSW`,`GPR`],relatedPoints:[`co-5-1-1`],content:`## 寄存器分类
| 寄存器 | 全称 | 用户可见 | 可修改 |
|--------|------|----------|--------|
| **PC** | 程序计数器 | ✅(间接) | 转移指令间接改 |
| **IR** | 指令寄存器 | ❌ 透明 | ❌ |
| **MAR** | 存储器地址寄存器 | ❌ 透明 | ❌ |
| **MDR** | 存储器数据寄存器 | ❌ 透明 | ❌ |
| **ACC** | 累加器 | ✅ | ✅ |
| **PSW/FR** | 程序状态字/标志寄存器 | ✅ | 硬件自动设 |
| **GPR** | 通用寄存器组 | ✅ | ✅ |
| **暂存器(Y/Z)** | ALU输入输出暂存 | ❌ 透明 | ❌ |

---
## 透明性的含义
> **对程序员透明** = 程序员写程序时不感知其存在，不能直接读写。
- 透明寄存器：MAR、MDR、IR、暂存器Y/Z
- 非透明寄存器：PC（跳转指令间接影响）、ACC、通用寄存器

---
## 考试辨析
- MAR/MDR 在**CPU内部**（不是主存的一部分！）
- PSW/FR 用户可读，但标志位由硬件自动设置——不能直接赋值
- 暂存器 ≠ ACC——暂存器透明，ACC不透明`},{id:`co-5-1-2`,chapterId:`co-5`,title:`指令执行过程与数据流`,keyConcepts:[`指令周期`,`取指`,`间址`,`执行`,`中断`,`机器周期`,`时钟周期`],relatedPoints:[`co-5-1-1`],content:`## 三个时间概念
| 概念 | 定义 | 关系 |
|------|------|------|
| **时钟周期(T)** | CPU最小时间单位 | — |
| **机器周期(CPU周期)** | 一次总线操作时间 | = N个时钟周期 |
| **指令周期** | 取指+执行一条指令总时间 | = 若干机器周期 |

---
## 指令周期四阶段
| 阶段 | 触发器 | 任务 |
|------|--------|------|
| **取指(FE)** | FE=1 | (PC)到MAR到M到MDR到IR, (PC)+1到PC |
| **间址(IND)** | IND=1 | 取操作数有效地址 |
| **执行(EX)** | EX=1 | 执行具体操作 |
| **中断(INT)** | INT=1 | 保存断点返回地址 |

---
## 考试辨析
- 取指操作是控制器固有功能——不需要操作码控制
- 间址周期不是每条指令都有
- PC 在无条件跳转指令周期内被修改2次`},{id:`co-5-2-1`,chapterId:`co-5`,title:`数据通路`,keyConcepts:[`数据通路`,`总线结构`,`专用通路`,`单总线`,`双总线`,`三总线`],relatedPoints:[`co-5-1-1`],content:`## 数据通路的功能

> 数据通路是 CPU 中各部件之间数据流动的路径。

---

## 数据通路的结构
| 结构 | 特点 | 优缺点 |
|------|------|--------|
| **单总线** | 所有部件共享一条总线 | 结构简单，但**瓶颈明显** |
| **双总线** | 主存总线和 I/O 总线分离 | 提高吞吐 |
| **三总线** | 再加一条执行总线 | 更快 |
| **专用通路** | 各部件间直接连线 | 最快，但线路复杂 |

---

## 考试辨析
- 数据通路与 CPU 结构有关——408 可能考通路图分析
- 总线冲突：同一时刻只能有一个部件向总线发送数据`},{id:`co-5-3-1`,chapterId:`co-5`,title:`硬布线控制器与微程序控制器`,keyConcepts:[`硬布线`,`微程序`,`控制存储器`,`微命令`,`微操作`],relatedPoints:[`co-5-1-1`],content:`## 硬布线控制器

> 用组合逻辑电路产生控制信号——门电路直接实现。

| 优点 | 缺点 |
|------|------|
| 速度快 | 设计复杂，难修改 |

---

## 微程序控制器

> 将每条机器指令分解为一组微指令，存入**控制存储器 (CM)**。

| 优点 | 缺点 |
|------|------|
| 规整、易修改 | 慢（多了读 CM 的一层） |

---

## 对比
| | 硬布线 | 微程序 |
|------|--------|--------|
| 实现 | 组合逻辑 | 微指令序列 |
| 速度 | **快** | 慢 |
| 灵活性 | 差 | **好** |
| 适用 | RISC | CISC |

---

## 考试辨析
- 微程序控制器多了一层——每条指令 → 一段微程序 → 若干微指令 → 若干微命令
- RISC 通常采用硬布线（追求速度），CISC 常采用微程序（处理复杂指令）`},{id:`co-5-3-2`,chapterId:`co-5`,title:`微指令的编码方式与格式`,keyConcepts:[`直接编码`,`字段直接编码`,`字段间接编码`,`水平型`,`垂直型`,`微地址形成`],relatedPoints:[`co-5-3-1`],content:`## 微指令编码三种方式
| 方式 | 特点 | 优缺点 |
|------|------|--------|
| **直接编码** | 1bit对应1个微命令 | 速度快并行好，但控存容量极大 |
| **字段直接编码** | 互斥命令分同一段，相容命令分不同段 | 缩短字长，408重点考 |
| **字段间接编码** | 一个字段含义需另一字段解释 | 进一步缩短，但并行性降低 |

### 字段直接编码分段原则
1. **互斥性**微命令放同一段，**相容性**微命令放不同段
2. 每段信息位不能太多（3位→最多7个互斥命令+1个空状态）
3. 每段必须留一个状态表示"不操作"

---
## 水平型 vs 垂直型微指令
| | 水平型 | 垂直型 |
|------|--------|--------|
| 长度 | 长 | 短 |
| 并行性 | 强（一次多个微命令） | 弱（一次一个） |
| 微程序长度 | 短 | 长 |
| 速度 | 快 | 慢 |
| 编写 | 麻烦 | 规整 |

---
## 微地址形成方式
1. 后继地址字段直接给出
2. 机器指令操作码经微地址形成部件产生
3. 增量计数器 (μPC)+1→μPC
4. 根据标志位分支转移
5. 硬件直接产生微程序入口地址(如开机0#)

---
## 考试辨析
- 水平型微指令并行性强——适合RISC；垂直型规整——适合CISC
- 微程序控制器比硬布线控制器慢——因为多了一层读CM
- 互斥微命令=不能在同一微指令中同时有效的命令`},{id:`co-5-5-2`,chapterId:`co-5`,title:`流水线 常见题型与解题技巧`,keyConcepts:[`流水线`,`吞吐率`,`加速比`,`瓶颈段`,`时钟周期`],relatedPoints:[`co-5-5-1`],content:`## 题型一：各段时间相等
T = (k + n - 1) x t
TP = n / T；S = nk / (k+n-1)

## 题型二：各段时间不等
**时钟周期 = max{各段时间}**（瓶颈段决定一切）
各段操作时间必须对齐到时钟周期的整数倍

## 题型三：加速比极限
当 n 趋近无穷大时，加速比趋近于 k（段数）
实际加速比受限于：段数k、瓶颈段占比、冲突开销

## 关键结论
- 流水线不缩短单条指令（反而因锁存器变长）
- 转发技术不会引起阻塞
- 超标量=多发射；超流水线=高频再分段`},{id:`co-5-4-1`,chapterId:`co-5`,title:`异常与中断`,keyConcepts:[`异常`,`中断`,`内中断`,`外中断`,`中断向量`,`中断响应`,`中断返回`],relatedPoints:[`co-7-3-1`,`os-1-3-1`],content:`## 异常 vs 中断

| | 异常 (Exception) | 中断 (Interrupt) |
|------|-------------------|------------------|
| 来源 | **CPU 内部** | **CPU 外部** |
| 原因 | 指令执行过程中的错误 | 外部设备或时钟 |
| 例子 | 除 0、缺页、非法指令 | 键盘输入、DMA 完成 |
| 同义词 | 内中断 | 外中断 |

---

## 中断处理流程
1. 中断请求 → CPU 响应
2. 关中断（防止嵌套）
3. **保存断点**（PC + PSW 入栈）
4. 中断服务程序入口 → PC
5. 保存现场（寄存器入栈）
6. 执行中断服务程序
7. 恢复现场
8. 开中断
9. **中断返回**（IRET指令）

---

## 中断向量

> 中断向量 = 中断服务程序的入口地址。

**中断向量表**：放在内存固定位置，用中断类型号查表得到向量。

---

## 考试辨析
- 异常是**同步**的（与指令执行相关），中断是**异步**的（随时可能发生）
- 408 常考中断响应周期的操作（关中断、保存断点、取中断向量）`},{id:`co-5-5-1`,chapterId:`co-5`,title:`指令流水线`,keyConcepts:[`流水线`,`IF`,`ID`,`EX`,`MEM`,`WB`,`吞吐率`,`加速比`,`数据冲突`,`控制冲突`,`转发`,`分支预测`],relatedPoints:[`co-5-1-1`,`co-4-3-1`],content:`## 指令流水线的思想
> 将指令执行过程分为多个阶段，多条指令的不同阶段可以**并行**执行。

经典五段流水线：**IF（取指）→ ID（译码）→ EX（执行）→ MEM（访存）→ WB（写回）**

---
## 性能指标
设指令数为 $n$，流水线段数为 $k$，每段时间为 $\\tau$：
| 指标 | 公式 |
|------|------|
| 串行执行时间 | $nk\\tau$ |
| 流水执行时间 | **$(k + n - 1)\\tau$** |
| **吞吐率 (TP)** | $\\frac{n}{(k+n-1)\\tau}$ |
| **加速比 (S)** | $\\frac{nk}{k+n-1}$ |

当 $n \\gg k$ 时：$S \\to k$，$TP \\to 1/\\tau$（理想情况）

---
## 流水线冲突（三种）

### 1. 结构冲突 (Structural Hazard)
- 原因：硬件资源不够用（如只有一个存储器，IF 和 MEM 同时访存冲突）
- 解决：增加硬件资源（分离指令 Cache 和数据 Cache）

### 2. 数据冲突 (Data Hazard)
- 原因：后续指令依赖前一条指令的结果（还未写回）
- 类型：RAW(真相关)、WAR、WAW（后两者不出现在简单流水线中）
- 解决：
- **转发 (Forwarding / Bypassing)**：EX 阶段的结果直接转发给下一条指令的 EX
- **流水线停顿 (Stall / Bubble)**：插入 nop（气泡），直到数据可用
- **编译优化**：调整指令顺序，使依赖指令间隔 $\\ge 1$ 条

### 3. 控制冲突 (Control Hazard)
- 原因：分支指令导致 PC 不确定（下一条指令地址未知）
- 解决：
- **流水线停顿**：等待分支结果
- **分支预测**：静态（永远预测不跳转）/ 动态（基于历史）
- **延迟分支**：在分支指令后放入一条"延迟槽"指令（总是执行）

---
## 考试辨析
- 流水线**不缩短单条指令时间**——缩短的是指令间的**间隔**（吞吐率）
- **最长段的时间 = 流水线周期**（瓶颈段决定整体速度）
- 分段时间应尽量均衡——不均衡导致流水线效率低
- 转发可以解决大多数 RAW 冲突——但 Load-Use 冲突仍需停顿
- 流水线深度不是越深越好——深度增加 = 冲突增加 + 分支惩罚增大`},{id:`co-6-1-1`,chapterId:`co-6`,title:`总线概述与分类`,keyConcepts:[`总线`,`数据总线`,`地址总线`,`控制总线`,`系统总线`,`局部总线`,`通信总线`],relatedPoints:[],content:`## 总线的定义

> 总线是连接多个部件的信息传输线，各部件**共享**的传输介质。

---

## 按传输信息分类
| 总线 | 功能 | 方向 |
|------|------|------|
| **数据总线 (DB)** | 传输数据 | 双向 |
| **地址总线 (AB)** | 传输地址 | 单向（CPU→存储器） |
| **控制总线 (CB)** | 传输控制信号 | 各线方向不同 |

---

## 按连接对象分类
| 类型 | 连接 |
|------|------|
| 片内总线 | CPU 芯片内部 |
| 系统总线 | CPU、主存、I/O 接口之间 |
| 局部总线 | 高速设备之间 |
| 通信总线 | 计算机系统之间 |

---

## 考试辨析
- 总线是**共享**传输介质——同一时刻只能有一个设备发送
- 地址总线的位数决定**可寻址范围**（$n$ 根地址线 → $2^n$ 个地址）`},{id:`co-6-2-1`,chapterId:`co-6`,title:`总线仲裁`,keyConcepts:[`链式查询`,`计数器定时查询`,`独立请求`,`集中仲裁`,`分布仲裁`],relatedPoints:[],content:`## 集中仲裁方式
| 方式 | 控制线数 | 优先级 | 优点 | 缺点 |
|------|---------|--------|------|------|
| **链式查询** | 3根(BR/BG/BS) | 固定(越近越高) | 简单易扩充 | 对故障敏感，优先级固定 |
| **计数器定时** | ⌈log2n⌉+2根 | 可编程 | 优先级可动态改变 | 控制较复杂 |
| **独立请求** | 2n+1根 | 最灵活 | 响应最快 | 控制线最多 |

---
## 链式查询详解
\`\`\`
BR(总线请求) ← 所有设备共享
BG(总线允许) → 链式串行传递
BS(总线忙)   ← 获权设备发出
\`\`\`
> **BS信号由获得总线控制权的设备发出**——不是总线控制器！

---
## 分布仲裁方式
- 无需中央仲裁器，每个设备有自己的仲裁号和仲裁逻辑
- 设备将仲裁号发到共享仲裁总线上进行比较
- 号最大（或最小）者获胜

---
## 考试辨析
- 链式查询的优先级由**物理位置**决定——离控制器越近越高
- 独立请求方式最灵活（优先级可编程），但线最多
-- 「[2011-选择19] [2015-选择20」`},{id:`co-6-3-1`,chapterId:`co-6`,title:`总线操作与定时`,keyConcepts:[`同步通信`,`异步通信`,`半同步`,`分离式`,`握手`,`互锁`],relatedPoints:[],content:`## 总线传输四阶段
1. **申请分配** —— 总线仲裁，获得使用权
2. **寻址** —— 发送地址和命令
3. **传数** —— 数据交换（读/写）
4. **结束** —— 释放总线

---
## 四种通信定时方式
### 一、同步通信
- 统一时钟信号协调收发；每个时钟构成一个总线周期
- 优点：速度快、逻辑简单；缺点：可靠性差
- 适用：总线短、各部件速度接近

### 二、异步通信（握手应答）
| 互锁类型 | 请求 | 回答 | 速度 | 可靠性 |
|----------|------|------|------|--------|
| **不互锁** | 自动定时撤 | 自动定时撤 | 最快 | 最低 |
| **半互锁** | 等回答才撤 | 自动撤 | 中等 | 中等 |
| **全互锁** | 等回答才撤 | 等请求撤才撤 | 最慢 | 最高 |

### 三、半同步通信
- 同步时钟 + **WAIT等待信号**
- 快速设备可全速同步，慢速设备发WAIT让总线等

### 四、分离式通信
- 总线周期分为两子周期：主模块发→从模块发
- 各模块均有权申请总线——充分利用，适合多主设备系统

---
## 总线带宽计算（核心公式）
$$B = f \\times W$$
- $B$ = 总线带宽(Byte/s)，$f$ = 总线工作频率(Hz)，$W$ = 总线宽度(Byte)
- 总线工作频率 = 时钟频率 / 总线周期所需时钟数
---
## 考试辨析
- 同步通信可靠性差的原因：没有应答机制——发完就走
- 分离式通信的"分离"——把一个总线周期拆成两个子周期
- 带宽计算选择题常考——注意单位换算(bit→Byte)`},{id:`co-6-4-1`,chapterId:`co-6`,title:`总线标准`,keyConcepts:[`PCI`,`PCI-E`,`USB`,`ISA`,`AGP`,`RS-232C`,`即插即用`,`热插拔`],relatedPoints:[`co-6-1-1`],content:`## 常见总线标准
| 标准 | 类型 | 宽度 | 频率 | 带宽 | 特点 |
|------|------|------|------|------|------|
| **ISA** | 并行 | 16位 | 8MHz | 16MB/s | 最早PC总线，已淘汰 |
| **PCI** | 并行 | 32/64位 | 33/66MHz | 132~528MB/s | **即插即用**，独立于CPU |
| **PCI-E** | **串行** | ×1/×4/×16 | — | 极高 | 点对点，取代PCI/AGP |
| **AGP** | 并行 | 32位 | 66MHz+ | 266~2133MB/s | 显卡专用 |
| **USB** | 串行 | — | — | — | 即插即用+**热插拔** |
| **RS-232C** | 串行 | — | — | — | 经典串行通信 |

---
## 关键概念
- **即插即用 (PnP)**：插入设备后系统自动识别和配置驱动程序
- **热插拔**：带电插拔设备而不损坏硬件（USB/PCI-E支持）
- **猝发传输 (Burst)**：一个地址+一批连续数据，减少地址传输开销

---
## 考试辨析
- PCI-E 是**串行**总线（高速差分信号对），不是并行
- 408 对总线标准要求较低，了解 ISA→PCI→PCI-E 的演进即可`},{id:`co-7-1-1`,chapterId:`co-7`,title:`I/O接口`,keyConcepts:[`I/O接口`,`端口`,`数据端口`,`状态端口`,`控制端口`,`编址`],relatedPoints:[],content:`## I/O 接口的功能
1. 数据缓冲（速度匹配）
2. 信号转换（电平、格式）
3. 中断请求
4. 设备选择

---

## 端口分类
| 端口 | 说明 |
|------|------|
| **数据端口** | 数据缓冲 |
| **状态端口** | 设备状态（忙/闲/错） |
| **控制端口** | 控制命令 |

---

## I/O 端口编址
| 方式 | 说明 |
|------|------|
| **独立编址** | I/O 端口有独立地址空间——需要专用 I/O 指令 |
| **统一编址** | I/O 端口与主存统一编址——用 Load/Store 访问 |

---

## 考试辨析
- 统一编址又称"存储器映射 I/O"——不需专用 I/O 指令
- 独立编址需要 IN/OUT 指令（x86 采用）`},{id:`co-7-2-1`,chapterId:`co-7`,title:`程序查询方式`,keyConcepts:[`程序查询`,`轮询`,`CPU等待`,`独占`],relatedPoints:[`co-7-3-1`,`co-7-4-1`],content:`## 程序查询方式

> CPU 不断查询 I/O 设备状态——"忙等"。

\`\`\`
while (设备忙)
    ;  // 等待
送数据
\`\`\`

---

## 特点
| 特性 | 说明 |
|------|------|
| CPU 利用率 | **低**（一直在轮询等待） |
| 数据传送 | CPU 直接执行 |
| 优先级 | 取决于查询顺序 |
| 优点 | 实现简单 |

---

## 考试辨析
- 程序查询是**最简单的 I/O 方式**——CPU 与外设串行工作
- 不适合高速设备——CPU 被绑定等待`},{id:`co-7-3-2`,chapterId:`co-7`,title:`多重中断与中断屏蔽`,keyConcepts:[`多重中断`,`中断屏蔽`,`屏蔽字`,`中断嵌套`,`响应优先级`,`处理优先级`],relatedPoints:[`co-7-3-1`,`co-5-4-1`],content:`## 多重中断（中断嵌套）
> 执行中断服务程序期间，可响应**更高优先级**的新中断请求。

### 实现条件
1. 中断服务程序中提前设置**开中断**指令
2. 高优先级中断源有权打断低优先级的中断服务

---
## 中断屏蔽字 ⭐
> 每个中断源对应一个屏蔽字。'1'=屏蔽，'0'=允许。
> **屏蔽字中'1'越多，优先级越高**——能屏蔽更多其他中断。

### 示例
设有4个中断源 A>B>C>D（优先级从高到低）：
| 中断源 | 优先级 | 屏蔽字(ABCD) |
|--------|--------|-------------|
| A | 最高 | 1111 |
| B | 高 | 0111 |
| C | 低 | 0011 |
| D | 最低 | 0001 |
> 每个屏蔽字至少屏蔽自身（至少一个'1'）。

---
## 响应优先级 vs 处理优先级
| | 响应优先级 | 处理优先级 |
|------|----------|----------|
| 决定者 | 硬件排队器 | **中断屏蔽字** |
| 可变性 | 固定 | **可动态调整** |
| 作用阶段 | 中断响应时 | 中断处理时 |

---
## 中断处理完整流程
1. **硬件自动**：关中断→保存断点→取中断向量
2. **软件（服务程序）**：保护现场→设屏蔽字→**开中断**→执行服务→关中断→恢复现场→恢复屏蔽字→开中断→返回
> 开中断在保护现场**之后**——确保保护现场过程不被中断。

---
## 考试辨析
- 屏蔽字中'1'的数量 = 该中断源能屏蔽的中断数 + 1（自身）
- 响应优先级由硬件决定(不可改)，处理优先级由屏蔽字决定(可改)
- 这是408常考题型——给定中断源优先级，写出各屏蔽字`},{id:`co-7-3-1`,chapterId:`co-7`,title:`程序中断方式`,keyConcepts:[`中断`,`中断请求`,`中断响应`,`中断向量`,`中断优先级`,`中断屏蔽`],relatedPoints:[`co-5-4-1`,`co-7-2-1`],content:`## 中断 I/O 的思想

> 外设准备好后**主动通知 CPU**——CPU 暂停当前程序，执行中断服务程序。

---

## 中断处理流程
1. 外设发出中断请求
2. CPU 当前指令结束后响应
3. 关中断
4. 保存断点和现场
5. 取中断向量 → 中断服务程序
6. 执行中断服务
7. 恢复现场 → 开中断 → 返回

---

## 中断优先级
| 方式 | 说明 |
|------|------|
| 硬件排队器 | 固定优先级（菊花链） |
| 软件查询 | 可编程优先级 |
| **中断屏蔽** | 动态改变优先级 |

---

## 考试辨析
- 与程序查询的关键区别：CPU 不需等待——**并行工作**
- 中断响应在**当前指令执行结束后**（不是当前总线周期）
- 多重中断：高优先级中断可以打断低优先级中断服务`},{id:`co-7-4-1`,chapterId:`co-7`,title:`DMA方式`,keyConcepts:[`DMA`,`DMAC`,`周期窃取`,`DMA请求`,`中断请求`,`AR`,`WC`,`DAR`],relatedPoints:[`co-7-3-1`,`co-6-1-1`],content:`## DMA 方式核心思想
> 在主存与外设间开辟**直接数据通路**，传送过程**不经CPU**。

---
## DMA 控制器 (DMAC) 组成
| 部件 | 全称 | 功能 |
|------|------|------|
| **AR** | 主存地址计数器 | 存放要交换的主存地址，每传一字自动+1 |
| **WC** | 传送长度计数器 | 剩余字数，WC溢出→传送完成→发中断 |
| **DAR** | 设备地址寄存器 | I/O设备地址 |
| **DR** | 数据缓冲寄存器 | 暂存每次传送的数据 |

---
## DMA 传送三阶段
| 阶段 | 执行者 | 操作 |
|------|--------|------|
| **预处理** | CPU | 设置AR/WC/DAR → 启动设备 → 继续执行其他程序 |
| **数据传送** | DMAC | 设备数据→DR→请求总线→获权→传一字→AR+1, WC-1 |
| **后处理** | CPU | WC溢出→中断请求→CPU执行DMA结束善后 |

---
## DMA 与 CPU 访存冲突解决
| 方式 | 原理 | CPU效率 |
|------|------|--------|
| **停止CPU访存** | DMA期间CPU完全让出总线 | 低 |
| **交替访存** | 时间片轮流(C1→DMA, C2→CPU) | 中 |
| **周期挪用** | DMA临时占用1个存取周期 | 高 |
> **访存优先级**：I/O > CPU（I/O不及时访存会丢数据）

---
## DMA vs 中断 全面对比 ⭐
| 对比维度 | 程序中断 | DMA |
|----------|----------|-----|
| 数据传送 | CPU执行程序 | **硬件(DMAC)** |
| 中断请求时机 | 每条指令执行结束 | **每个机器周期结束** |
| CPU干预 | 每传一字都要 | 仅开始+结束 |
| 优先级 | 低于DMA | **高于中断** |
| 适用场景 | 中低速字符设备 | **高速块设备(磁盘)** |
| 传送方式 | 每字一次中断 | 整块一次中断 |
> DMA请求的是**总线使用权**；中断请求的是**CPU处理时间**——两者不同！

---
## 考试辨析
- DMA的"周期窃取"——窃取的是**总线周期**，不是CPU时钟周期
- DMA请求 ≠ DMA中断请求——前者是请求传一字(总线)，后者是整块传完请求善后
- 预处理(RAM/ROM/Flash)和后处理(DMA中断)才需要CPU参与
-- 「[2010-大题44] [2012-大题44] [2015-大题44」`}],_r=[{id:`os-1-1-1`,chapterId:`os-1`,title:`操作系统的概念与特征`,keyConcepts:[`操作系统`,`并发`,`共享`,`虚拟`,`异步`,`基本特征`],relatedPoints:[`os-1-3-1`],content:`## 操作系统的定义
> 操作系统是控制和管理整个计算机硬件与软件资源的**系统软件**，
是用户与计算机硬件之间的接口。

---
## 操作系统的四大特征
| 特征 | 含义 | 说明 |
|------|------|------|
| **并发** | 多个程序同一时间间隔内运行 | 宏观并行、微观串行（单核） |
| **共享** | 多道程序共用系统资源 | 互斥共享 / 同时访问 |
| **虚拟** | 物理实体映射为逻辑对应物 | 虚拟CPU（进程）、虚拟内存 |
| **异步** | 程序走走停停，不可预知 | 并发执行的必然结果 |

> **并发和共享是操作系统最基本的两个特征**——互为存在条件。

---
## 考试辨析
- 并发 ≠ 并行：并发是逻辑上的同时，并行是物理上的同时
- 没有并发和共享，就谈不上虚拟和异步`},{id:`os-1-2-1`,chapterId:`os-1`,title:`操作系统的发展与分类`,keyConcepts:[`批处理`,`分时`,`实时`,`网络`,`分布式`,`个人计算机`],relatedPoints:[],content:`## 操作系统的发展阶段

| 阶段 | 特点 | 标志 |
|------|------|------|
| 手工操作 | 人工插拔 | — |
| **单道批处理** | 监督程序控制 | 联机→脱机 |
| **多道批处理** | 多道程序交替运行 | 资源利用率高、吞吐量大 |
| **分时系统** | 时间片轮转 | 交互性强 |
| **实时系统** | 及时响应 | 可靠性高 |
| 网络/分布式 | 资源共享 | 现代主流 |

---

## 考试辨析
- 分时系统的关键是**时间片轮转**——每个用户轮流获得CPU
- 多道批处理的主要目的：**提高资源利用率**（不是交互性）`},{id:`os-1-3-1`,chapterId:`os-1`,title:`操作系统的运行环境`,keyConcepts:[`内核态`,`用户态`,`特权指令`,`系统调用`,`中断`,`访管指令`],relatedPoints:[`os-1-1-1`,`co-5-4-1`],content:`## CPU 的两种状态

| 状态 | 特征 | 可执行指令 |
|------|------|-----------|
| **内核态（管态）** | OS 运行时 | 全部指令（包括特权指令） |
| **用户态（目态）** | 用户程序运行时 | 只能执行非特权指令 |

---

## 系统调用

> 用户程序请求 OS 服务（如 I/O、创建进程）的方式。

- 通过**访管指令**（陷入指令）进入内核态
- 本质是**受控的中断**（软中断）

\`\`\`
用户程序 → 系统调用 → 陷入 → 内核态 → OS服务 → 返回用户态
\`\`\`

---

## 考试辨析
- 系统调用运行在**内核态**——用户只能通过调用接口使用
- 访管指令 ≠ 特权指令——访管指令是用户态下唯一能"进入内核"的手段
- 中断处理在内核态执行`},{id:`os-1-4-1`,chapterId:`os-1`,title:`操作系统体系结构`,keyConcepts:[`整体式`,`模块化`,`层次式`,`微内核`,`宏内核`],relatedPoints:[],content:`## 主要体系结构

| 结构 | 特点 | 代表 |
|------|------|------|
| **整体式** | 模块自由调用，无层次 | 早期 Unix |
| **层次式** | 分层设计，上层依赖下层 | THE |
| **微内核** | 内核最小化，服务移入用户态 | Minix、Mach |
| **宏内核** | 所有功能在内核态 | Linux、Windows |

---

## 微内核 vs 宏内核
| | 微内核 | 宏内核 |
|------|--------|--------|
| 内核大小 | 小 | 大 |
| 可靠性 | 高（服务隔离） | 低（一损俱损） |
| 效率 | 低（频繁IPC） | 高 |
| 典型 | QNX、Fuchsia | Linux、Windows |

---

## 考试辨析
- 微内核只保留最核心功能（进程调度、IPC、地址空间管理）
- 微内核的缺点：**效率低**（用户态服务间切换开销大）`},{id:`os-2-1-1`,chapterId:`os-2`,title:`进程与线程`,keyConcepts:[`进程`,`PCB`,`线程`,`TCB`,`五状态`,`上下文切换`],relatedPoints:[`os-2-2-1`],content:`## 进程

> 进程 = 程序的一次执行过程，是**资源分配**的基本单位。

进程映像 = PCB + 程序段 + 数据段

**PCB (进程控制块)**：OS 管理进程的唯一标识，包含：
- PID、状态、PC、寄存器、内存信息、打开文件...

---

## 进程的五个状态
\`\`\`
新建 → 就绪 ⇄ 运行 → 终止
         ↕
        阻塞
\`\`\`
| 转换 | 原因 |
|------|------|
| 就绪→运行 | 被调度选中 |
| 运行→就绪 | 时间片用完 |
| 运行→阻塞 | 等待 I/O |
| 阻塞→就绪 | I/O 完成 |

---

## 线程

> 线程是**CPU 调度**的基本单位——同一进程内的线程共享进程资源。

---

## 进程 vs 线程
| | 进程 | 线程 |
|------|------|------|
| 资源 | 独立| **共享**（同进程内） |
| 调度 | 切换开销大 | 切换开销小 |
| 通信 | IPC | 直接读写 |
| 独立性 | 强 | 弱（一个线程崩溃 = 整个进程崩溃） |

---

## 考试辨析
- PCB 是进程存在的**唯一标志**
- 同一进程的线程**共享**堆、全局变量、文件
- 同一进程的线程**独立**栈、寄存器`},{id:`os-2-1-2`,chapterId:`os-2`,title:`进程通信 (IPC)`,keyConcepts:[`进程通信`,`IPC`,`共享存储`,`消息传递`,`管道通信`,`信号`],relatedPoints:[`os-2-1-1`],content:`## 进程通信 (IPC) 概述
> 进程是资源分配的基本单位，各进程拥有独立的内存空间。
> IPC = Inter-Process Communication —— 打破隔离，实现进程间数据交换。

---
## 一、共享存储 (Shared Memory)
| 特点 | 说明 |
|------|------|
| 原理 | 两个进程各划出一段虚拟地址空间，映射到同一段物理内存 |
| 速度 | **最快**——直接读写内存，不需要内核中转 |
| 同步 | 需要配合信号量/互斥锁保证互斥访问 |
| 分类 | 基于数据结构的共享（低级） / 基于存储区的共享（高级） |

---
## 二、消息传递 (Message Passing)
> 进程间通过发送/接收**消息**（报文）来交换数据。OS 提供 send/receive 原语。
| 方式 | 特点 |
|------|------|
| **直接通信** | send(P, msg) / receive(Q, msg) —— 指名道姓 |
| **间接通信** | send(M, msg) / receive(M, msg) —— 通过**信箱/端口**中转 |
| 阻塞/非阻塞 | send 和 receive 都可以阻塞或非阻塞（共4种组合） |

---
## 三、管道通信 (Pipe)
> Pipe 是一个**固定大小的内存缓冲区**（Linux 中 4KB），一端写一端读。
| 特点 | 说明 |
|------|------|
| 方向 | **半双工**——数据只能单向流动（需要双向则建两个管道） |
| 使用范围 | 父子进程间（匿名管道）/ 任意进程间（命名管道 FIFO） |
| 读写规则 | 管道满→写者阻塞；管道空→读者阻塞 |
| 字节流 | 无格式的字节流（不保留消息边界） |

---
## 四、信号 (Signal)
> 信号是 OS 层面的**异步通知机制**——一个进程可以给另一个进程发信号。
- 例：SIGKILL（强制终止）、SIGINT（Ctrl+C）、SIGALRM（定时器）
- 信号处理：默认处理 / 忽略 / 自定义处理函数

---
## 三种 IPC 方式对比
| | 共享存储 | 消息传递 | 管道 |
|------|---------|----------|------|
| 速度 | 最快 | 中等 | 中等 |
| OS 参与 | 映射时 | 每次收发 | 每次读写 |
| 同步需求 | 需额外机制 | 内置（阻塞） | 内置（满/空阻塞） |

---
## 考试辨析
- 共享存储是**最快的 IPC**（直接读写内存），但需要同步
- 管道是**半双工**的——数据只能单向流动
- 消息传递不需要额外同步——send/receive 原语自带阻塞同步`},{id:`os-2-1-3`,chapterId:`os-2`,title:`线程的实现方式与多线程模型`,keyConcepts:[`用户级线程`,`内核级线程`,`一对一`,`多对一`,`多对多`,`组合`],relatedPoints:[`os-2-1-1`],content:`## 线程的两种实现方式

### 用户级线程 (ULT — User Level Thread)
> 线程的创建/调度/管理都在**用户空间**完成，内核感知不到线程的存在。
| 优点 | 缺点 |
|------|------|
| 切换不需要转换到内核态——速度快 | 一个线程阻塞(如I/O)→整个进程阻塞 |
| 调度策略可自定义 | 无法利用多核（内核只看到一个进程） |

### 内核级线程 (KLT — Kernel Level Thread)
> 线程由**OS 内核**管理，TCB 在内核空间中。
| 优点 | 缺点 |
|------|------|
| 一个线程阻塞不影响其他线程 | 切换需要内核态转换——开销大 |
| 可利用多核并行 | |

---
## 三种多线程模型
| 模型 | ULT : KLT | 特点 | 典型 |
|------|----------|------|------|
| **多对一** | N : 1 | 多个用户线程映射到一个内核线程，不能并行 | 早期 Green Thread |
| **一对一** | 1 : 1 | 每个用户线程对应一个内核线程，可并行但开销大 | **Linux/Windows** |
| **多对多** | N : M | N个用户线程映射到M个内核线程，折中方案 | Solaris(9以前) |

---
## 考试辨析
- 现代 OS（Linux/Windows）用**一对一**模型——简单高效
- 用户级线程的切换**不需要**内核态→用户态转换
- 多对一模型中一个线程阻塞→**所有线程阻塞**（因为内核看到的进程被阻塞）`},{id:`os-2-2-1`,chapterId:`os-2`,title:`CPU 调度`,keyConcepts:[`调度`,`FCFS`,`SJF`,`SRTF`,`优先级`,`RR`,`多级反馈队列`,`周转时间`,`等待时间`,`响应时间`],relatedPoints:[`os-2-1-1`],content:`## 调度的三个层次
| 层次 | 频率 | 功能 | 典型 |
|------|------|------|------|
| **高级调度（作业调度）** | 很低（分钟级） | 选外存作业调入内存 | 批处理系统 |
| **中级调度（内存调度）** | 中等 | 挂起/激活进程，调节内存负载 | 分时系统 |
| **低级调度（进程调度）** | 很高（ms级） | 从就绪队列选进程上 CPU | 所有系统 |

---
## 调度算法详解

### FCFS（先来先服务）
- 非抢占、FIFO 就绪队列
- **优点**：简单公平；**缺点**：对短作业不利（护航效应）

### SJF / SRTF（最短作业/剩余时间优先）
- **SJF** 非抢占，选择运行时间最短的作业
- **SRTF** 抢占版 SJF——新作业到达时若剩余时间更短，抢占当前
- **优点**：平均等待时间最优；**缺点**：需预知运行时间，长作业可能饥饿

### 优先级调度
- 每个进程赋一个优先级，CPU 分配给最高优先级进程
- **静态优先级**：创建时确定，不变
- **动态优先级**：运行时调整（如等待时间越长，优先级越高——防止饥饿/老化）

### RR（时间片轮转）
- 就绪队列 FIFO，每个进程最多运行一个时间片 q
- **q 太大** → 退化为 FCFS；**q 太小** → 频繁切换，开销大
- 一般 q = 10ms ~ 100ms（远大于上下文切换时间）

### 多级反馈队列（现代 OS 实用算法）
- 多个优先级不同的就绪队列
- **高优先级队列 q 小，低优先级 q 大**
- 进程用完时间片未完成 → 降入下一级队列
- 新进程进入最高优先级队列
- **兼顾**：短作业快速完成 + 长作业不会被饿死

---
## 手算示例
| 进程 | 到达 | 运行时间 |
|------|------|----------|
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 9 |
| P4 | 3 | 5 |

**FCFS**: P1(0-8) → P2(8-12) → P3(12-21) → P4(21-26)
  平均等待时间 = (0+7+10+18)/4 = 8.75
**SJF(非抢占)**: P1(0-8) → P2(8-12) → P4(12-17) → P3(17-26)
  平均等待时间 = (0+7+9+14)/4 = 7.5

---
## 考试辨析
- SJF/SRTF 平均等待时间**最小**（数学上可证）——但前提是必须预知运行时间
- 抢占式 vs 非抢占式：抢占发生在「新进程到达」或「时钟中断」时
- 周转时间 vs 等待时间 vs 响应时间的区别——408 选择题高频混淆项
-- 「[2012-选择23] [2014-选择24] [2015-大题45] [2016-选择24] [2022-选择26」`},{id:`os-2-3-1`,chapterId:`os-2`,title:`同步与互斥`,keyConcepts:[`互斥`,`同步`,`临界区`,`信号量`,`PV操作`,`生产者消费者`,`读者写者`,`哲学家就餐`],relatedPoints:[`os-2-1-1`],content:`## 基本概念
| 概念 | 含义 | 举例 |
|------|------|------|
| **互斥 (Mutual Exclusion)** | 同一时刻只能有一个进程访问临界资源 | 打印机只能一人用 |
| **同步 (Synchronization)** | 进程间按一定顺序协作执行 | A 做完 B 才能做 |
| **临界区 (Critical Section)** | 进程中访问临界资源的那段代码 | 修改共享变量的代码 |
| **临界资源** | 一次只能被一个进程独占的资源 | 共享变量、打印机 |

---
## 临界区使用原则
1. **空闲让进**：无进程在临界区时，申请者可立即进入
2. **忙则等待**：有进程在临界区时，其他进程必须等待
3. **有限等待**：进程在有限时间内一定能进入临界区（不能饥饿）
4. **让权等待**：不能进入临界区时应释放 CPU（不能忙等）

---
## 信号量与 PV 操作（408 核心考点）
> Dijkstra 于 1965 年提出。**P = Proberen (荷兰语: 测试)**，**V = Verhogen (增加)**。

\`\`\`c
// 信号量定义
typedef struct {
    int value;       // 信号量值
    PCB *queue;      // 等待该信号量的进程队列
} Semaphore;

// P 操作 (Wait / Down / 申请资源)
void P(Semaphore s) {
    s.value--;
    if (s.value < 0) {
        block(s.queue);   // 将当前进程放入等待队列
    }
}

// V 操作 (Signal / Up / 释放资源)
void V(Semaphore s) {
    s.value++;
    if (s.value <= 0) {
        wakeup(s.queue);  // 从等待队列唤醒一个进程
    }
}
\`\`\`

> **s.value 的含义**：
> - s.value > 0：表示**还有 s.value 个可用资源**
> - s.value = 0：表示无可用资源，也无等待进程
> - s.value < 0：表示有 |s.value| 个进程在等待

---
## PV 操作的应用模式

### 1. 互斥锁（初值 = 1）
\`\`\`c
Semaphore mutex = {1, NULL};
// 进入临界区前
P(mutex);
// ... 临界区 ...
// 退出临界区后
V(mutex);
\`\`\`

### 2. 同步信号量（初值 = 0）
\`\`\`c
Semaphore sync = {0, NULL};
// 前驱进程：做完事后
V(sync);           // 通知后继
// 后继进程：
P(sync);           // 等待前驱完成
\`\`\`

---
## 经典同步问题

### 生产者-消费者（单缓冲 → 多缓冲）
\`\`\`c
Semaphore empty = {N, NULL};  // 空缓冲区数量
Semaphore full  = {0, NULL};  // 满缓冲区数量
Semaphore mutex = {1, NULL};  // 缓冲区互斥访问

// 生产者
while(1) {
    produce_item();
    P(empty);        // ① 先申请空位
    P(mutex);        // ② 互斥访问缓冲池
    put_item();
    V(mutex);        // ③ 释放互斥
    V(full);         // ④ 增加产品
}

// 消费者
while(1) {
    P(full);         // ① 先申请产品
    P(mutex);        // ② 互斥访问
    get_item();
    V(mutex);        // ③ 释放互斥
    V(empty);        // ④ 增加空位
    consume_item();
}
\`\`\`
> **P操作的顺序不能颠倒！** 先 P(empty) 再 P(mutex) —— 否则可能死锁。

### 读者-写者问题

**问题描述**：多个读者可以同时读，但写者必须独占访问。
两种策略：读者优先（可能饿死写者）和写者优先（可能饿死读者）。

**读者优先方案：**
\`\`\`c
Semaphore rw_mutex = {1, NULL};  // 读写互斥
Semaphore mutex = {1, NULL};     // 保护 count
int read_count = 0;              // 读者数量

void reader() {
    while(1) {
        P(mutex);
        read_count++;
        if (read_count == 1)      // 第一个读者
            P(rw_mutex);          // 锁住写者
        V(mutex);
        // 读操作...
        P(mutex);
        read_count--;
        if (read_count == 0)      // 最后一个读者离开
            V(rw_mutex);          // 释放写者
        V(mutex);
    }
}

void writer() {
    while(1) {
        P(rw_mutex);              // 独占访问
        // 写操作...
        V(rw_mutex);
    }
}
\`\`\`

**写者优先方案**：引入 write_wait 信号量，有写者等待时阻止新读者进入。
核心思想：write_wait 使写者之后的读者排队等待，避免写者饥饿。

---

## 经典同步问题三：哲学家进餐问题（Dijkstra, 1965）

### 问题描述
> 五位哲学家围坐圆桌，每人面前一盘意大利面。每两位之间有一根筷子。
> 哲学家交替进行“思考”和“进餐”。进餐需同时拿起左右两根筷子。

### 简单解法（会导致死锁）
\`\`\`c
Semaphore chopstick[5] = {1,1,1,1,1};
void philosopher(int i) {
    while(1) {
        think();
        P(chopstick[i]);                // 拿左边
        P(chopstick[(i+1) % 5]);         // 拿右边
        eat();
        V(chopstick[i]);                // 放左边
        V(chopstick[(i+1) % 5]);         // 放右边
    }
}
\`\`\`
> 五位同时拿左边筷子 → **死锁**（每人拿一根，都在等另一根）。

### 防止死锁的四种方法（408高频考点）

**方法一：最多允许四人同时拿筷子（限制并发数）**

\`\`\`c
Semaphore limit = {4, NULL};  // 最多4人拿筷子
void philosopher(int i) {
    while(1) {
        think();
        P(limit);           // 先申请“拿筷子权”
        P(chopstick[i]);
        P(chopstick[(i+1)%5]);
        eat();
        V(chopstick[i]); V(chopstick[(i+1)%5]);
        V(limit);
    }
}
\`\`\`

**方法二：奇数先左后右，偶数先右后左（破坏循环等待）**

\`\`\`c
void philosopher(int i) {
    while(1) {
        think();
        if (i % 2 == 0) {           // 偶数号
            P(chopstick[(i+1)%5]);   // 先右后左
            P(chopstick[i]);
        } else {                     // 奇数号
            P(chopstick[i]);         // 先左后右
            P(chopstick[(i+1)%5]);
        }
        eat();
        V(chopstick[i]); V(chopstick[(i+1)%5]);
    }
}
\`\`\`

**方法三：左右两根必须同时拿到（一次性分配，用互斥信号量保护拿筷子过程）**

**方法四：引入 AND 型信号量——同时 P 多根筷子，要么全拿要么全不拿**

---

## 经典同步问题四：吸烟者问题（单生产者多消费者）
> 一个供应者提供三种原料组合，三个吸烟者各自需要一种特定组合。

**供应者**：随机放两种原料 → 通知对应的吸烟者 → 等吸烟者吸完再放下一组。
**三个吸烟者**：各自等自己的那组原料 → 拿起 → 吸烟 → 通知供应者。

\`\`\`c
Semaphore finish = {0, NULL};      // 吸烟完成信号
Semaphore offer[3] = {{0,0,0}};    // 为每个吸烟者提供原料

void provider() {
    while(1) {
        int i = rand() % 3;         // 随机选一种组合
        // 放原料...
        V(offer[i]);                // 通知对应吸烟者
        P(finish);                  // 等吸烟者完成
    }
}

void smoker(int i) {
    while(1) {
        P(offer[i]);                // 等自己的原料组合
        // 拿起原料，制作香烟，吸烟...
        V(finish);                  // 通知供应者已完成
    }
}
\`\`\`

> 吸烟者问题中只有一个生产者 → 缓冲区最多1个 → 不需要互斥信号量。
> 关键：PV形成环——供应者 V → 吸烟者 P → 吸烟者 V → 供应者 P。

---

## PV 题型的答题模板## PV 题型的答题模板
1. 确定**进程数量**和**资源类型**
2. 为每种资源/约束设信号量并定初值
3. 写出每个进程的操作流程，标注 P/V 的位置
4. 检查：P 成对 V（不在同一进程），无死锁

---
## 考试辨析
- **PV 操作是 408 操作系统大题的必考内容**（分值 7-10 分）
- P/V 必然成对出现，但**不在同一进程中**（互斥除外）
- 同步信号量初值通常为 0，互斥信号量初值通常为 1
- 判断信号量初值 = 资源可用数量
- P 操作的次序非常关键——次序错可能导致死锁`},{id:`os-2-3-2`,chapterId:`os-2`,title:`互斥的软件实现方法`,keyConcepts:[`单标志法`,`双标志先检查`,`双标志后检查`,`Peterson算法`,`turn`,`flag`],relatedPoints:[`os-2-3-1`],content:`## 软件方法的演进
在信号量机制出现之前，人们尝试用纯软件方式解决互斥问题。
以下四种方法展示了从"有问题"到"接近完美"的演进过程。

---
## 一、单标志法（轮流法）
\`\`\`c
int turn = 0;  // turn表示当前允许进入的进程号
// P0进程
while (turn != 0);   // 等待
critical_section();
turn = 1;            // 权限转交
// P1进程
while (turn != 1);
critical_section();
turn = 0;
\`\`\`
| 违背原则 | 说明 |
|----------|------|
| **空闲让进** | 若P0不再访问临界区，P1永久无法进入 |
> 本质问题：权限只能由对方赋予，缺乏自主性。

---
## 二、双标志先检查法
\`\`\`c
bool flag[2] = {false, false};
// P0
while (flag[1]);      // ①先检查对方
flag[0] = true;       // ②后标记自己
critical_section();
flag[0] = false;
// P1
while (flag[0]);
flag[1] = true;
critical_section();
flag[1] = false;
\`\`\`
| 违背原则 | 说明 |
|----------|------|
| **忙则等待** | 检查和上锁之间有空隙——两个进程可能同时通过while检查，然后都上锁进入 |

---
## 三、双标志后检查法
\`\`\`c
bool flag[2] = {false, false};
// P0
flag[0] = true;       // ①先标记自己
while (flag[1]);      // ②后检查对方
critical_section();
flag[0] = false;
\`\`\`
| 违背原则 | 说明 |
|----------|------|
| **空闲让进 + 有限等待** | 双方同时标记自己想进 → 互相谦让 → "饥饿" |

---
## 四、Peterson 算法（重点⭐）
\`\`\`c
bool flag[2] = {false, false};
int turn = 0;
// P0进程
flag[0] = true;                  // ①主动争取
turn = 1;                        // ②主动谦让（把机会给P1）
while (flag[1] && turn == 1);    // ③对方也想用 且 最后是自己在谦让
critical_section();
flag[0] = false;                 // ④退出
// P1进程（对称）
flag[1] = true;
turn = 0;
while (flag[0] && turn == 0);
critical_section();
flag[1] = false;
\`\`\`
| 满足的原则 | 说明 |
|-----------|------|
| 空闲让进 ✅ | flag 标记意愿，对方不想进则自己可进 |
| 忙则等待 ✅ | 对方已进则 while 循环等待 |
| 有限等待 ✅ | turn 机制防止"互相谦让而死等" |
| **让权等待 ❌** | while 循环是忙等 |
> Peterson 算法是唯一满足**前三个原则**的纯软件方法。
> **口诀**：主动争取 → 主动谦让 → 检查对方想用且最后是自己说了客气话
---
## 四种方法对比
| 方法 | 空闲让进 | 忙则等待 | 有限等待 | 让权等待 |
|------|:--:|:--:|:--:|:--:|
| 单标志法 | ❌ | ✅ | ✅ | ❌ |
| 双标志先检查 | ✅ | ❌ | ✅ | ❌ |
| 双标志后检查 | ❌ | ✅ | ❌ | ❌ |
| **Peterson** | ✅ | ✅ | ✅ | ❌ |
---
## 考试辨析
- Peterson 算法用 flag[] 解决互斥 + turn 解决饥饿——两者缺一不可
- 所有软件方法的共性缺点：**不满足让权等待**（忙等浪费CPU）
-- 「[2010-选择27] [2016-选择27」`},{id:`os-2-3-3`,chapterId:`os-2`,title:`互斥的硬件实现方法与互斥锁`,keyConcepts:[`中断屏蔽`,`TestAndSet`,`TSL`,`Swap`,`XCHG`,`互斥锁`,`自旋锁`,`SpinLock`],relatedPoints:[`os-2-3-1`,`os-2-3-2`],content:`## 一、中断屏蔽方法
\`\`\`c
关中断;        // 禁止时钟中断 → 不切换进程
临界区;
开中断;
\`\`\`
| 优点 | 缺点 |
|------|------|
| 简单高效 | 不适用多处理机（关一个核的中断不能阻止其他核访问） |
| | 只适用于内核进程（特权指令） |

---
## 二、TestAndSet 指令（TS / TSL）
\`\`\`c
// 硬件实现的原子操作——执行过程不可中断
bool TestAndSet(bool *lock) {
    bool old = *lock;
    *lock = true;       // 无论原来如何，都上锁
    return old;         // 返回原来的值
}
// 使用
while (TestAndSet(&lock));  // 直到拿到锁（原来没锁）
critical_section();
lock = false;               // 解锁
\`\`\`
> 把"检查"和"上锁"变成**一条原子指令**——硬件保证中间不被中断。

---
## 三、Swap 指令（XCHG / Exchange）
\`\`\`c
void Swap(bool *a, bool *b) {
    bool temp = *a;
    *a = *b;
    *b = temp;
}
// 使用
bool key = true;
do {
    Swap(&lock, &key);   // 原子交换
} while (key == true);    // 换出来的是true → 原来锁着
critical_section();
lock = false;
\`\`\`
> 逻辑上与 TS 等价——都是硬件原子操作。

---
## 四、互斥锁 (Mutex Lock)
\`\`\`c
acquire() {
    while (!available);   // 忙等待获取锁
    available = false;    // acquire和release必须是原子操作
}
release() {
    available = true;
}
\`\`\`

### 自旋锁 (Spin Lock)
> 需要连续忙等的互斥锁称为自旋锁。TSL、Swap、单标志法都是自旋锁。
| 适用场景 | 不适用场景 |
|----------|-----------|
| 多处理机 + 临界区短 | 单处理机（忙等期间不可能解锁） |
| 等待期间不需切换上下文 | 临界区长的场景 |

---
## 硬件方法对比总结
| 方法 | 优点 | 缺点 |
|------|------|------|
| 中断屏蔽 | 简单 | 不适用多处理机、用户进程 |
| TestAndSet | 实现简单，适用多处理机 | 不满足让权等待 |
| Swap | 同 TS | 不满足让权等待 |
| 互斥锁(自旋) | 多处理机中成本低 | 忙等 |
---
## 考试辨析
- TS/Swap 与软件方法的核心区别：**检查和上锁原子执行**
- 自旋锁 ≈ 忙等的锁——不释放CPU，适合等待时间极短的场景
-- 「[2011-选择27] [2018-选择27] [2021-选择27」`},{id:`os-2-3-4`,chapterId:`os-2`,title:`管程与条件变量`,keyConcepts:[`管程`,`Monitor`,`条件变量`,`wait`,`signal`,`封装`,`入口等待队列`],relatedPoints:[`os-2-3-1`,`os-2-3-3`],content:`## 为什么引入管程
> 信号量机制虽然强大，但编程困难——PV操作顺序稍有不慎就死锁。
> 管程将互斥和同步的复杂性**封装**起来，程序员只需调用过程。

---
## 管程的组成
\`\`\`c
monitor MonitorName {
    // ① 局部于管程的共享数据（私有）
    int count;
    condition full, empty;
    // ② 对共享数据操作的一组过程（公有方法）
    void insert(Item item) { ... }
    Item remove() { ... }
    // ③ 初始化代码
    { count = 0; }
};
\`\`\`
> 管程 = **类**：共享数据 = 私有成员，过程 = 公有方法。

---
## 管程的核心特征
| 特征 | 含义 |
|------|------|
| **封装性** | 局部数据只能被管程内的过程访问 |
| **互斥性** | 每次**仅允许一个进程**在管程内执行——由编译器保证 |
| **同步支持** | 通过**条件变量** + wait/signal 实现 |
| **入口队列** | 请求进入管程的进程排队 |

---
## 条件变量 (Condition Variable)
\`\`\`c
condition x, y;         // 声明条件变量
x.wait();               // 阻塞自己，释放管程，进入x的等待队列
x.signal();             // 唤醒x等待队列中的一个进程
\`\`\`
> **wait vs signal**：wait 必然阻塞自己；signal 不阻塞自己（只是唤醒别人）。
> 与信号量 PV 的关键区别：**signal 如果没有等待进程则什么也不做**（信号量 V 会 s.value++）。

---
## 管程解决生产者-消费者
\`\`\`c
monitor PC {
    Item buffer[N];
    int in=0, out=0, count=0;
    condition full, empty;
    void put(Item x) {
        if (count == N) full.wait(); // 满则等
        buffer[in] = x; in=(in+1)%N; count++;
        empty.signal();              // 唤醒消费者
    }
    Item get() {
        if (count == 0) empty.wait(); // 空则等
        Item x = buffer[out]; out=(out+1)%N; count--;
        full.signal();                // 唤醒生产者
        return x;
    }
};
\`\`\`

---
## 信号量 vs 管程
| | 信号量 | 管程 |
|------|--------|------|
| 互斥实现 | 程序员手动 PV | **编译器自动保证** |
| 同步机制 | P/V 原语 | wait/signal 条件变量 |
| 易错性 | 高（P顺序错→死锁） | 低（编译器检查） |
| 封装性 | 无 | 有（数据+操作封装在一起） |
| 典型语言 | C/POSIX | **Java(synchronized)** |

---
## 考试辨析
- 管程的互斥**由编译器实现**——程序员不用写PV操作
- 条件变量与信号量的区别——wait/signal 没有"计数值"
- 408 考管程较少（主要是概念选择题），但 PV 操作大题一直考
-- 「[2014-选择27] [2020-选择28」`},{id:`os-2-4-1`,chapterId:`os-2`,title:`死锁`,keyConcepts:[`死锁`,`必要条件`,`预防`,`避免`,`银行家算法`,`安全状态`,`检测`,`解除`],relatedPoints:[`os-2-3-1`],content:`## 死锁的定义
> 多个进程因竞争资源而陷入**无限等待**——若无外力，这些进程永远无法继续。

---
## 四个必要条件（必须同时满足才可能死锁）
1. **互斥条件**：资源只能独占使用
2. **不可剥夺条件**：已分配的资源不能被强制抢走
3. **请求并保持条件**：已持有资源，再申请时被阻塞但不释放已有
4. **循环等待条件**：进程间形成资源的循环等待链

---
## 四种处理策略
| 策略 | 时机 | 方法 |
|------|------|------|
| **预防** | 运行前 | 破坏四个必要条件之一 |
| **避免** | 运行时 | 银行家算法判断分配安全性 |
| **检测** | 运行时 | 资源分配图化简 / 死锁检测算法 |
| **解除** | 死锁后 | 终止进程 / 剥夺资源 / 回滚 |

---
## 银行家算法（Dijkstra, 1965）
### 数据结构
- **Available[m]**：系统每种资源当前可用数
- **Max[n][m]**：进程 i 对资源 j 的最大需求
- **Allocation[n][m]**：已分配给进程 i 的资源 j 数量
- **Need[n][m]** = Max - Allocation：还需要的资源数

### 安全性检查算法
1. Work[m] = Available; Finish[n] = {false}
2. 找到满足 Finish[i]=false 且 Need[i] ≤ Work 的进程 i
3. Work += Allocation[i]; Finish[i] = true; 返回步骤2
4. 若全部 Finish[i]=true → **安全状态**，可分配

### 手算示例
设 3 种资源 A/B/C，现有 Available=(3,3,2)，
5 个进程的 Max 和 Allocation 已知：
\`\`\`
       Max       Allocation    Need
    A  B  C      A  B  C     A  B  C
P0  7  5  3      0  1  0     7  4  3
P1  3  2  2      2  0  0     1  2  2
P2  9  0  2      3  0  2     6  0  0
P3  2  2  2      2  1  1     0  1  1
P4  4  3  3      0  0  2     4  3  1
\`\`\`
安全检查：P1 的 Need(1,2,2) ≤ Available(3,3,2) → 完成
释放 P1 → Available = (5,3,2)
P3 的 Need(0,1,1) ≤ Available → 完成
释放 P3 → Available = (7,4,3)
P4 → P2 → P0：全部可完成 → **安全！**

若 P1 请求 (1,0,2)：试探分配后 Available=(2,3,0)
重新安全检查 → 仍安全 → 可以分配

---
## 考试辨析
- 安全状态 → 无死锁；不安全状态 → **可能**死锁（非必然）
- 银行家算法是最经典的死锁避免算法——408 大题考过多次
- 死锁检测算法：资源分配图能否完全化简
- 常见题型：「至少需要多少资源才能不死锁」
-- 「[2009-大题45] [2011-选择25] [2012-大题46] [2014-大题45] [2017-选择24] [2019-选择27] [2022-大题46」`},{id:`os-2-4-2`,chapterId:`os-2`,title:`死锁 常见题型与解题技巧`,keyConcepts:[`死锁`,`最少资源公式`,`银行家算法`,`安全序列`,`资源分配图`],relatedPoints:[`os-2-4-1`],content:`## 必背公式
**最少资源不死锁**：n个进程各需m个同类资源 -> 最少 (m-1)n + 1
推导：最坏=每个进程拿m-1个都在等 + 给任一个+1 = 打破僵局
例：3进程各需4台打印机 -> 最少(4-1)x3+1=10台

---
## 银行家算法答题模板
1. 列出Available, Max, Allocation, Need=Max-Allocation
2. 找Need <= Available的进程 -> 标记完成 -> Available+=Allocation
3. 重复直到全部完成(安全)或无法继续(不安全)

---
## 资源分配图判死锁
- 每类资源只有1个实例：图中有环=死锁
- 每类资源有多个实例：有环是必要条件，需进一步判断是否能化简

---
## 考试辨析
- 安全状态 != 无死锁；不安全状态 != 死锁
- 预防=破坏四个条件之一（选择题常考\\破坏的是哪个）
- 避免=银行家算法（大题常考）`},{id:`os-3-1-1`,chapterId:`os-3`,title:`内存管理概念`,keyConcepts:[`内存管理`,`地址转换`,`逻辑地址`,`物理地址`,`链接`,`装入`,`覆盖`,`交换`],relatedPoints:[`os-3-2-1`,`ds-1-1-2`],content:`## 内存管理的任务
1. 内存分配与回收
2. 地址转换（逻辑地址 → 物理地址）
3. 内存保护（越界检查）
4. 内存共享

---

## 程序的链接与装入
| 阶段 | 说明 |
|------|------|
| **静态链接** | 程序运行前链接好各模块 |
| **装入时动态链接** | 装入内存时边装入边链接 |
| **运行时动态链接** | 用到哪个模块才链接（DLL） |
| **绝对装入** | 地址固定 |
| **可重定位装入** | 装入时修改地址 |
| **动态运行时装入** | 运行时地址才确定 |

---

## 覆盖与交换
| 技术 | 原理 | 说明 |
|------|------|------|
| **覆盖** | 同一内存区存放不同时使用的模块 | 程序员手动划分 |
| **交换** | 进程在内存与外存间换入换出 | OS 自动管理 |

---

## 考试辨析
- 覆盖是**同一进程内**不同模块共享内存
- 交换是**不同进程间**在主存和辅存间移动`},{id:`os-3-2-1`,chapterId:`os-3`,title:`连续分配管理方式`,keyConcepts:[`单一连续`,`固定分区`,`动态分区`,`首次适应`,`最佳适应`,`外部碎片`,`紧凑`],relatedPoints:[`os-3-1-1`],content:`## 连续分配方式演进

### 1. 单一连续分配
- 内存只分系统区和用户区
- 只能运行单道程序

### 2. 固定分区分配
- 预先将内存划分成固定大小分区
- 有**内部碎片**

### 3. 动态分区分配
- 按进程需要动态划分
- 有**外部碎片**（需紧凑解决）

---

## 动态分区的分配算法

| 算法 | 策略 | 特点 |
|------|------|------|
| **首次适应 (FF)** | 找第一个够大的空闲区 | 最快 |
| **循环首次适应 (NF)** | 从上次位置开始找 | 更均匀 |
| **最佳适应 (BF)** | 找最接近的大小区 | 产生最多碎片 |
| **最差适应 (WF)** | 找最大的空闲区 | 剩余区仍较大 |

---

## 考试辨析
- 内部碎片：分区内未用的空间（固定分区）
- 外部碎片：分区外太小的空闲区（动态分区）
- 紧凑技术：移动进程消除外部碎片——需要**动态重定位**硬件支持`},{id:`os-3-3-1`,chapterId:`os-3`,title:`非连续分配管理方式`,keyConcepts:[`分页`,`分段`,`段页式`,`页表`,`段表`,`快表`,`TLB`],relatedPoints:[`os-3-2-1`,`co-3-4-1`],content:`## 基本分页存储管理

> 内存划分成固定大小的**页框**，进程划分成等大小的**页**。

逻辑地址 = 页号 | 页内偏移
物理地址 = 页框号 × 页大小 + 页内偏移

**页表**：页号 → 页框号映射

---

## 基本分段存储管理

> 按程序的逻辑结构分段（代码段、数据段、栈...），段长可变。

逻辑地址 = 段号 | 段内偏移

**段表**：段号 → 段基址 + 段长 + 保护信息

---

## 分页 vs 分段
| | 分页 | 分段 |
|------|------|------|
| 划分依据 | 物理（固定大小） | 逻辑（变长） |
| 程序员感知 | 不感知 | **感知** |
| 目的 | 提高内存利用率 | 满足用户编程需求 |
| 共享/保护 | 困难（一页可能含多逻辑段） | 容易（一段 = 一逻辑单元） |

---

## 段页式
- 先分段，每段再分页——结合两者优点
- 段号 → 段表项 → 页表 → 物理地址

---

## 考试辨析
- 分页是为了**非连续分配**，解决外部碎片
- 分段是为了满足**用户编程**需求（逻辑分块）
- 分页只有内部碎片，分段有外部碎片
- 页大小是系统设定（4KB常见），段大小是程序员决定`},{id:`os-3-3-2`,chapterId:`os-3`,title:`快表 (TLB) 与多级页表`,keyConcepts:[`TLB`,`快表`,`两级页表`,`多级页表`,`页目录`,`访存次数`],relatedPoints:[`os-3-3-1`,`co-3-4-1`],content:`## 快表 (TLB — Translation Lookaside Buffer)
> 用高速缓存存放近期使用的页表项，加速地址转换。
基于**局部性原理**——最近访问的页很可能会再次访问。

### 地址变换过程（含TLB）
1. CPU 产生逻辑地址 → 先查 TLB
2. TLB **命中**：直接得到物理地址，1次访存
3. TLB **未命中**：查内存中的页表 → 得到物理地址 → 更新 TLB，2次访存

### 命中率与有效访存时间
$$EAT = h \\times T_{TLB+Mem} + (1-h) \\times (T_{TLB} + 2T_{Mem})$$
> 命中率 h 通常 > 99%（TLB 容量小但命中率高）

---
## 两级页表
### 为什么需要
- 单级页表需要**连续空间**存放（进程越多越难分配）
- 根据局部性原理，大部分页表项很少使用（不需要常驻内存）

### 两级页表结构
\`\`\`
逻辑地址 = 一级页号(10位) | 二级页号(10位) | 页内偏移(12位)
\`\`\`
- 一级页表（页目录）：每个表项指向一个二级页表
- 二级页表：每个表项指向一个物理页框
- **优点**：页表可离散存放，不需要的二级页表可以不调入内存

### 访存次数
无TLB时：**3次**（查一级页表→查二级页表→访数据）
有TLB命中时：**1次**

---
## 考试辨析
- 进程切换 = TLB**全部清空**（因为新进程页表不同）
- 两级页表解决的是**页表过大且需连续存放**的问题——不是地址空间不够
-- 「[2013-选择30] [2018-选择30」`},{id:`os-3-3-3`,chapterId:`os-3`,title:`段页式管理方式`,keyConcepts:[`段页式`,`段表`,`页表`,`三维地址`,`3次访存`],relatedPoints:[`os-3-3-1`,`os-3-3-2`],content:`## 段页式管理
> **先分段，段内再分页**——结合分段（逻辑清晰）和分页（无外部碎片）的优点。

### 逻辑地址结构
\`\`\`
逻辑地址 = 段号S | 页号P | 页内偏移W
\`\`\`
- 每个进程：1个段表 + 每个段1个页表
- 段表项：页表长度 + 页表基址
- 页表项：页框号

### 地址变换（3次访存）
1. 查段表 → 得页表基址
2. 查页表 → 得物理块号
3. 物理地址 = 块号×页大小 + 偏移量 → 访数据

---
## 分页 vs 分段 vs 段页式
| | 分页 | 分段 | 段页式 |
|------|------|------|--------|
| 地址维度 | 一维 | 二维 | **三维** |
| 长度 | 固定(系统定) | 可变(程序员定) | 固定(系统定) |
| 碎片 | 内部碎片 | 外部碎片 | 内部碎片 |
| 访存次数 | 2次 | 2次 | **3次** |
| 共享/保护 | 困难 | 容易 | 容易 |

---
## 考试辨析
- 段页式的地址是三维的——段号+页号+偏移量
- 访存3次（可用快表优化）
- 408 常考三种管理方式的对比选择题`},{id:`os-3-4-1`,chapterId:`os-3`,title:`虚拟内存管理`,keyConcepts:[`虚拟内存`,`请求分页`,`缺页`,`页面置换`,`FIFO`,`LRU`,`Clock`,`Belady异常`,`抖动`],relatedPoints:[`os-3-3-1`,`co-3-4-1`],content:`## 虚拟内存的核心思想
> 只将程序**部分装入内存**即可运行——需要时再从磁盘调入。
**理论基础**：局部性原理（时间局部性 + 空间局部性）

---
## 请求分页系统
> 在基本分页基础上，增加**缺页中断**和**页面置换**功能。

### 页表项新增字段
| 字段 | 含义 |
|------|------|
| 状态位 (P) | 该页是否在内存中 |
| 访问位 (A) | 该页是否被访问过 |
| 修改位 (M/Dirty) | 该页是否被修改过 |
| 外存地址 | 该页在磁盘上的位置 |

### 缺页中断处理流程
1. 查页表，发现 P=0 → 缺页中断
2. OS 查找磁盘上的页 → 调入内存
3. 若内存满 → 选一页置换出去（若被修改则写回磁盘）
4. 更新页表，P=1
5. 重新执行缺页的那条指令

---
## 页面置换算法（高频考点）

| 算法 | 策略 | 特点 |
|------|------|------|
| **OPT** | 淘汰未来最远才用到的页 | 理论上最优，但无法实现（需预知未来） |
| **FIFO** | 淘汰最早进入内存的页 | 简单，但可能有 **Belady 异常** |
| **LRU** | 淘汰最久未被使用的页 | 效果好，利用时间局部性，实现复杂 |
| **Clock (NRU)** | 循环扫描，淘汰访问位=0 的页 | 近似 LRU，实际系统常用 |
| **改进Clock** | 同时考虑访问位和修改位 | 更精细，优先淘汰未修改的页 |

---
## Belady 异常
> **FIFO 算法中**，给进程分配的物理页框数增加，缺页次数反而增加的现象。
只有 FIFO 算法会出现 Belady 异常（LRU 和 OPT 不会）。

---
## 缺页率的影响因素
1. **页面大小**：页面越大，缺页率越低（但内部碎片增加）
2. **分配页框数**：越多，缺页率越低（但每个进程占内存增加）
3. **置换算法**：LRU > Clock > FIFO（缺页率从低到高）
4. **程序局部性**：局部性好的程序缺页率低

---
## 抖动 (Thrashing)
> 进程频繁换入换出，大部分时间用于页面置换而非执行——CPU 利用率急剧下降。
- **原因**：系统中活跃进程太多，每个进程分到的物理页框太少
- **解决**：降低多道程序度（减少并发进程数），增加物理内存

---
## 考试辨析
- **虚拟内存大小由逻辑地址空间决定**（与物理内存大小无关！）
- 缺页中断是**可重入中断**——中断处理完成后需重新执行缺页指令
- FIFO 是唯一有 Belady 异常的置换算法
- 页面缓冲算法 (Page Buffering) 可以进一步提高置换效率`},{id:`os-3-4-2`,chapterId:`os-3`,title:`页面分配策略与抖动`,keyConcepts:[`驻留集`,`固定分配`,`可变分配`,`局部置换`,`全局置换`,`抖动`,`工作集`],relatedPoints:[`os-3-4-1`],content:`## 驻留集与分配策略
> **驻留集** = 分配给进程的物理页框集合。分配策略决定何时/如何调整。

| 策略 | 分配 | 置换范围 | 说明 |
|------|------|----------|------|
| **固定+局部** | 运行前固定 | 自己页内 | 简单，但可能不够/浪费 |
| **可变+全局** | 动态 | 全系统页 | 灵活，但可能抢占过多 |
| **可变+局部** | 动态 | 自己页内 | 根据缺页率动态调整——最常用 |

---
## 抖动 (Thrashing)
> 进程频繁换入换出，大部分时间用于页面置换而非执行。CPU 利用率急剧下降。

### 原因与解决
- **根因**：分配给进程的物理页框**不够**（< 工作集大小）
- **解决**：降低多道程序度（减少并发进程数），增加物理内存
- **现象识别**：CPU 利用率低 + 磁盘 I/O 高 → 可能正在抖动

---
## 工作集 (Working Set)
> 某段时间内进程要访问的页面集合 $W(t, \\Delta)$。
- $t$ = 当前时刻，$\\Delta$ = 工作集窗口大小
- 原则：**驻留集 $\\ge$ 工作集** → 不抖动
- 工作集随时间变化——OS 需要动态监测和调整

---
## 考试辨析
- 抖动是操作系统性能的"黑洞"——CPU 被白白浪费
- 增加物理内存是解决抖动的**最根本方法**
- 工作集窗口 $\\Delta$ 的选取很关键——太大=过时，太小=不准确`},{id:`os-3-4-3`,chapterId:`os-3`,title:`页面置换 常见题型与解题技巧`,keyConcepts:[`页面置换`,`Belady异常`,`FIFO`,`LRU`,`OPT`,`缺页率`],relatedPoints:[`os-3-4-1`],content:`## 缺页次数计算
逐地址模拟，维护内存中的页面集合。
命中=已在内存；缺页=不在内存+需置换。
初始内存为空时，所有首次访问都是缺页。

---
## Belady异常（仅FIFO）
访问串 1,2,3,4,1,2,5,1,2,3,4,5：
- 分配3块：9次缺页
- 分配4块：10次缺页 <- 反直觉！
LRU 和 OPT 不会出现 Belady 异常。

---
## OPT vs LRU vs FIFO vs CLOCK
| 算法 | Belady | 实现难度 | 性能 |
|------|:--:|:--:|------|
| OPT | 无 | 无法实现 | 理论最优 |
| LRU | 无 | 复杂(需硬件) | 接近OPT |
| CLOCK/NRU | 无 | 简单 | 较好 |
| FIFO | **有** | 最简单 | 较差 |

---
## 考试辨析
- 缺页中断=内中断中的故障（返回当前指令重新执行）
- 只有FIFO有Belady异常`},{id:`os-4-1-1`,chapterId:`os-4`,title:`文件系统基础`,keyConcepts:[`文件`,`目录`,`FCB`,`inode`,`文件控制块`,`目录结构`],relatedPoints:[],content:`## 文件的逻辑结构

| 类型 | 特点 |
|------|------|
| 无结构文件（流式） | 字节序列，OS 不关心内部结构 |
| 有结构文件（记录式） | 等长/变长记录 |

---

## 文件的物理结构

| 方式 | 原理 | 优点 | 缺点 |
|------|------|------|------|
| **连续分配** | 连续块 | 顺序存取快 | 有外部碎片 |
| **链接分配** | 块指针串联 | 无碎片 | 随机存取慢 |
| **索引分配** | 索引块集中存放 | 随机存取快 | 索引块占空间 |

---

## 文件控制块 (FCB)
> FCB 是文件存在的标志——包含文件名、大小、位置、权限、时间等。

**inode**（索引结点）：Unix 中 FCB 的核心部分。

---

## 目录结构
| 结构 | 说明 |
|------|------|
| 单级目录 | 所有文件在一起 |
| 两级目录 | 用户目录 + 文件 |
| 树形目录 | 层次结构（现代文件系统标准） |
| 无环图目录 | 允许共享（硬链接/软链接） |

---

## 考试辨析
- 打开文件时，FCB 被复制到内存（活跃文件表）
- 文件名 → FCB → 物理位置，这是文件查找的基本路径`},{id:`os-4-1-2`,chapterId:`os-4`,title:`文件的物理结构（分配方式）`,keyConcepts:[`连续分配`,`链接分配`,`隐式链接`,`显式链接`,`FAT`,`索引分配`,`混合索引`],relatedPoints:[`os-4-1-1`],content:`## 四种物理分配方式

### 一、连续分配
> 文件占据一组**连续的**磁盘块。
| 优点 | 缺点 |
|------|------|
| 顺序读写快（磁头移动少） | 有外部碎片 |
| 支持随机存取 | 文件扩展困难(需预先知道大小) |

### 二、隐式链接分配
> 每块末尾存放下一个块的指针。
| 优点 | 缺点 |
|------|------|
| 无外部碎片，扩展方便 | 只支持顺序访问（访问第i块要读i次） |
| | 指针占空间，可靠性差(一个指针坏=全丢) |

### 三、显式链接分配 (FAT)
> 将所有指针集中存放在**FAT表**（文件分配表）中，FAT常驻内存。
| 优点 | 缺点 |
|------|------|
| 支持随机存取（通过FAT定位） | FAT表占用内存 |
| 无外部碎片 | 大磁盘FAT表巨大 |

### 四、索引分配
> 每个文件有一个**索引块**，存放文件各块的物理地址。
| 优点 | 缺点 |
|------|------|
| 支持随机存取 | 索引块本身占空间（小文件也需整个索引块） |
| 无外部碎片 | 大文件需多级索引 |

---
## 混合索引（UNIX/Linux）
\`\`\`
i-node 中包含：
- 10个直接块指针  → 小文件直接访问（≤40KB）
- 1个一级间接指针 → 指向一个索引块（再存指针）
- 1个二级间接指针 → 两层索引
- 1个三级间接指针 → 三层索引
\`\`\`
> 小文件直接用直接块，大文件逐级扩展——兼顾效率与容量。

---
## 考试辨析
- FAT = 显式链接——链接指针不在块内而在FAT表中
- 文件最大容量计算是408大题常见内容（混合索引各级能存多少块）
-- 「[2012-大题46] [2016-大题46」`},{id:`os-4-2-1`,chapterId:`os-4`,title:`文件系统实现`,keyConcepts:[`文件分配表`,`FAT`,`位示图`,`空闲链表`,`成组链接`],relatedPoints:[`os-4-1-1`],content:`## 空闲空间管理

| 方法 | 原理 | 优缺点 |
|------|------|--------|
| **空闲表** | 记录每个空闲区 | 简单，适合连续分配 |
| **空闲链表** | 空闲块链在一起 | 分配回收简单 |
| **位示图** | 每位对应一块 | 空间小，易找连续区 |
| **成组链接** | 分组记录（Unix采用） | 适合大型文件系统 |

---

## FAT（文件分配表）

> FAT 本质是**显式链接分配**——将所有文件的链指针统一存在 FAT 表中。

- FAT 表项 = 下一块号或结束标记
- FAT 放在磁盘固定位置
- 支持随机存取（先读 FAT 找到块链）

---

## 考试辨析
- 位示图空间开销小，适合查找连续空闲区
- FAT 表的大小 = 块数 × 每项位数
- 磁盘格式化时建立 FAT`},{id:`os-4-2-2`,chapterId:`os-4`,title:`文件存储空间管理`,keyConcepts:[`空闲表`,`空闲链表`,`位示图`,`成组链接`,`超级块`],relatedPoints:[`os-4-2-1`],content:`## 四种管理方法
| 方法 | 原理 | 适用 |
|------|------|------|
| **空闲表** | 记录连续空闲区(始块+长度) | 连续分配 |
| **空闲链表** | 空闲块/区链成链表 | 离散分配 |
| **位示图** | 每位表示一块(0空/1用) | **最常用** |
| **成组链接** | 空闲块分组+超级块索引 | UNIX |

---
## 位示图法（高频考点⭐）
> 用一位表示一个盘块：0=空闲，1=已分配.
### 核心公式（行号列号从0开始）
盘块号 → 字号/位号：$i = b / n$，$j = b \\% n$
字号/位号 → 盘块号：$b = i \\times n + j$
位示图占用空间 = 磁盘总块数 / 8 字节

### 特点
- 位示图很小，可**常驻内存**，分配快
- 占用空间与**总块数**有关，与空闲块数**无关**
- 容易找到连续空闲块

---
## 成组链接法（UNIX）
> 空闲块分组，每组最后一块记录下一组信息。超级块=第一组索引。
### 分配
从超级块栈顶弹出空闲块——若弹出栈底 → 将下一组信息压入超级块
### 回收
栈未满 → 压入栈；栈已满 → 当前栈复制到回收块 → 回收块成为新组

---
## 考试辨析
- **位示图占用空间与空闲块数无关**——2024年408真题考点
- 成组链接=空闲表+空闲链表的结合
- 超级块在系统启动时读入内存
- 位示图适合快速找连续空闲区`},{id:`os-4-3-1`,chapterId:`os-4`,title:`磁盘组织与管理`,keyConcepts:[`磁盘`,`磁道`,`扇区`,`寻道`,`旋转延迟`,`SCAN`,`C-SCAN`,`SSTF`,`磁盘调度`],relatedPoints:[],content:`## 磁盘访问时间

$$T_{access} = T_{seek} + T_{rotation} + T_{transfer}$$

- **寻道时间 $T_{seek}$**：磁头移动到目标磁道——最耗时
- **旋转延迟 $T_{rotation}$**：扇区转到磁头下——平均值 = 半圈时间
- **传输时间 $T_{transfer}$**：数据读写

---

## 磁盘调度算法

| 算法 | 策略 | 特点 |
|------|------|------|
| **FCFS** | 按请求顺序 | 公平但可能慢 |
| **SSTF** | 最近磁道先服务 | 快但可能饥饿 |
| **SCAN（电梯）** | 单向扫描到底再折返 | 实际常用 |
| **C-SCAN** | 单向到底，快速归位 | 更公平 |
| **LOOK / C-LOOK** | 到最远请求即折返 | 优化版 |

---

## 考试辨析
- 磁盘调度主要减少的是**寻道时间**（最主要的时间开销）
- SCAN = 电梯算法——走到头才折返
- C-SCAN 只有单向服务，归位时不服务`},{id:`os-4-3-2`,chapterId:`os-4`,title:`磁盘调度算法`,keyConcepts:[`FCFS`,`SSTF`,`SCAN`,`LOOK`,`C-SCAN`,`C-LOOK`,`寻道时间`,`饥饿`],relatedPoints:[`os-4-3-1`],content:`## 磁盘访问时间
$$T_a = T_s + T_r + T_t = T_s + \\frac{1}{2r} + \\frac{b}{rN}$$
- $T_s$ = 寻道时间（OS可优化），$T_r$ = 旋转延迟，$T_t$ = 传输时间

---
## 六种调度算法
| 算法 | 策略 | 饥饿 | 说明 |
|------|------|:--:|------|
| **FCFS** | 按请求顺序 | ❌ | 公平但效率低 |
| **SSTF** | 优先最近磁道 | ⚠️会 | 贪心，可能远处请求永远等不到 |
| **SCAN** | 单向到头再折返 | ❌ | 电梯算法 |
| **LOOK** | 无请求即折返 | ❌ | SCAN改进版(默认) |
| **C-SCAN** | 只单向服务，返回不服务 | ❌ | 响应频率更均匀 |
| **C-LOOK** | 返回到最小请求即停 | ❌ | C-SCAN改进版(默认) |

---
## 手算示例
磁头在100#，请求序列=55,58,39,18,90,160,150,184，方向增大。
| 算法 | 访问顺序 | 总寻道 |
|------|---------|--------|
| FCFS | 55→58→39→...→184 | ~498 |
| SSTF | 90→58→55→39→38→18→150→160→184 | 248 |
| SCAN | 150→160→184→90→58→55→39→18 | 250 |
| C-SCAN | 150→160→184→0→18→38→39→55→58→90 | 390 |
| C-LOOK | 150→160→184→18→38→39→55→58→90 | 322 |
> SSTF 总寻道最短但可能饥饿；SCAN 系列不会饥饿。

---
## 考试辨析
- OS 唯一能优化的是**寻道时间**——旋转延迟和传输时间由硬件决定
- 若无特别说明，SCAN=LOOK，C-SCAN=C-LOOK
- SSTF 可能饥饿，SCAN/C-SCAN 不会
- [[2009-大题46] [2015-大题46] [2020-大题46]]`},{id:`os-5-1-1`,chapterId:`os-5`,title:`I/O管理概述`,keyConcepts:[`I/O`,`设备独立性`,`逻辑设备`,`物理设备`,`SPOOLing`],relatedPoints:[`os-5-2-1`],content:`## I/O 设备分类

| 按传输速率 | 按信息交换单位 | 按共享属性 |
|-----------|-------------|-----------|
| 低速：键盘鼠标 | **块设备**：磁盘 | 独占设备 |
| 中速：打印机 | **字符设备**：键盘 | 共享设备 |
| 高速：磁盘 | | 虚拟设备 |

---

## 设备独立性

> 用户程序使用**逻辑设备名**——OS 将其映射到**物理设备**。

好处：程序与具体物理设备解耦，可重定向。

---

## SPOOLing 技术（假脱机）

> 用磁盘（高速共享设备）模拟独占设备。

- 输入/输出井 + 输入/输出进程
- 可将独占设备（如打印机）变成**共享设备**

---

## 考试辨析
- SPOOLing 使"虚拟设备"成为可能
- 设备独立性通过 LUT（逻辑设备表）实现`},{id:`os-5-1-2`,chapterId:`os-5`,title:`I/O控制方式`,keyConcepts:[`程序查询`,`中断驱动`,`DMA`,`通道控制`],relatedPoints:[`os-5-1-1`,`co-7-2-1`,`co-7-3-1`,`co-7-4-1`],content:`## 四种I/O控制方式对比
| | 程序查询 | 中断驱动 | DMA | 通道控制 |
|------|----------|----------|-----|----------|
| **数据传送单位** | 字 | 字 | **块** | 一组块 |
| **CPU干预** | 全程 | 每字中断 | 开始+结束 | 开始+结束 |
| **并行性** | CPU与I/O串行 | CPU与I/O部分并行 | **CPU与I/O高度并行** | 最高 |
| **适用** | 慢速字符设备 | 中速 | **高速块设备(磁盘)** | 大型机 |

---
## DMA 方式详解
### DMA 控制器组成
- DR（数据寄存器）：暂存数据
- MAR（内存地址寄存器）：存放目标地址
- DC（数据计数器）：剩余字节数
- CR（控制寄存器）：存放命令

### DMA 工作过程
1. **预处理**：CPU 设置 MAR/DC/CR → 启动 DMA
2. **数据传送**：DMA 接管总线，逐字传送（每次窃取一个总线周期）
3. **后处理**：传送完成 → DMA 发中断 → CPU 处理

---
## 考试辨析
- DMA与中断的关键区别：DMA只有开始+结束两次中断，中断驱动每字中断一次
- DMA 的"周期窃取"——窃取的是总线周期，不是CPU时钟周期
-- 「[2010-选择28] [2013-选择31] [2017-大题44] [2021-选择28」`},{id:`os-5-2-1`,chapterId:`os-5`,title:`I/O核心子系统`,keyConcepts:[`I/O调度`,`缓冲区`,`单缓冲`,`双缓冲`,`循环缓冲`,`设备驱动`],relatedPoints:[`os-5-1-1`],content:`## I/O 软件层次

\`\`\`
用户层 I/O 软件
    ↓
设备独立性软件
    ↓
设备驱动程序
    ↓
中断处理程序
    ↓
硬件
\`\`\`

---

## 缓冲区

### 单缓冲
- 并行性：CPU 处理前一块 + I/O 读入下一块 → 时间缩短

### 双缓冲
- 进一步并行：一边读入一边写出
- 可实现连续数据流

### 循环缓冲
- 多个缓冲区循环使用——适合高速持续 I/O

---

## 考试辨析
- 缓冲的目的是**缓和 CPU 与 I/O 设备速度不匹配**
- 双缓冲可消除生产者-消费者间的等待
- 缓冲在内存中分配——由 OS 管理`},{id:`os-5-2-2`,chapterId:`os-5`,title:`SPOOLing技术与缓冲区管理`,keyConcepts:[`SPOOLing`,`假脱机`,`输入井`,`输出井`,`单缓冲`,`双缓冲`,`循环缓冲`],relatedPoints:[`os-5-2-1`,`os-5-1-1`],content:`## SPOOLing（假脱机技术）
> 用磁盘(共享设备)模拟独占设备——将独占设备改造成可共享的虚拟设备。

### 组成
- **输入井/输出井**：磁盘上的缓冲区
- **输入进程(SPi)**：将用户数据从输入设备预读到输入井
- **输出进程(SPo)**：将输出井数据送到输出设备
- **井管理程序**：控制作业进入/调出

### 效果
- 独占设备 → **逻辑共享设备**
- 用户进程不再直接操作I/O设备 → 由SPOOLing进程代理
- 例：共享打印机——多个用户"同时"打印

---
## 缓冲区管理
> 缓冲的目的：**缓和CPU与I/O设备速度不匹配的矛盾**。

### 单缓冲
设CPU处理时间=C，I/O传输时间=T，数据移入缓冲区时间=M：
处理一块数据总时间 = Max(C, T) + M

### 双缓冲
处理一块数据总时间 = Max(C+M, T) ——或—— Max(C, T+M)
> 双缓冲可实现连续数据流——一边读一边处理。

### 循环缓冲
- 多个缓冲区组成循环队列
- 适合高速持续I/O——如视频流

### 缓冲池
- 系统公用：空缓冲队列 + 输入队列 + 输出队列
- 四种工作方式：收容输入/提取输入/收容输出/提取输出

---
## 考试辨析
- SPOOLing需要**多道程序设计技术**支持——CPU可与I/O并行
- 缓冲区在**内存**中分配——不在磁盘
- 单/双缓冲时间计算是选择题常见题型
- [[2011-选择29] [2013-选择32] [2018-选择29]]`}],vr=[{id:`cn-1-1-1`,chapterId:`cn-1`,title:`计算机网络概述`,keyConcepts:[`计算机网络`,`组成`,`功能`,`分类`,`LAN`,`WAN`,`MAN`],relatedPoints:[],content:`## 计算机网络的定义
> 将分散的、具有独立功能的计算机系统，通过通信设备与线路连接起来，由网络软件实现资源共享和信息传递。

---

## 组成
- **硬件**：计算机、通信设备、传输介质
- **软件**：协议、网络操作系统
- **协议**：通信双方共同遵守的规则集合

---

## 分类
| 分类方式 | 类型 |
|----------|------|
| 范围 | LAN(局域网)、WAN(广域网)、MAN(城域网) |
| 传输技术 | 广播式、点对点 |
| 拓扑 | 星形、总线、环形、网状 |

---

## 考试辨析
- 408 计网 25 分，以选择题为主
- 协议三要素：语法、语义、同步`},{id:`cn-1-2-1`,chapterId:`cn-1`,title:`计算机网络体系结构与参考模型`,keyConcepts:[`OSI`,`TCP/IP`,`五层协议`,`分层`,`PDU`,`SDU`],relatedPoints:[],content:`## OSI 七层参考模型

\`\`\`
应用层        ← 应用进程间的通信
表示层        ← 数据格式转换/加密
会话层        ← 对话管理
传输层        ← 端到端可靠传输（TCP/UDP）
网络层        ← 路由选择（IP）
数据链路层    ← 帧传输/差错控制
物理层        ← 比特流传输
\`\`\`

---

## TCP/IP 四层模型

| TCP/IP | 对应 OSI | 典型协议 |
|--------|---------|----------|
| 应用层 | 应用+表示+会话 | HTTP/DNS/FTP/SMTP |
| 传输层 | 传输层 | TCP/UDP |
| 网际层 | 网络层 | **IP** |
| 网络接口层 | 数据链路+物理 | Ethernet/PPP |

---

## 五层教学模型（408 采用）

物理层 → 数据链路层 → 网络层 → 传输层 → 应用层

---

## 考试辨析
- 408 考查的是**五层模型**
- 传输层是**端到端**，网络层以下是**点到点**
- OSI 上层=端到端，下层=点到点`},{id:`cn-2-1-1`,chapterId:`cn-2`,title:`通信基础`,keyConcepts:[`信道`,`带宽`,`奈奎斯特`,`香农定理`,`编码`,`调制`],relatedPoints:[],content:`## 基本概念
| 术语 | 含义 |
|------|------|
| 信道 | 信号传输的通道 |
| 带宽 | 信道能通过的频率范围（Hz） |
| 数据率 | 单位时间传输的比特数（bps） |
| 码元 | 一个数字脉冲（信号单元） |

---

## 奈奎斯特定理（无噪声）
$$C_{max} = 2W \\log_2 V$$
$W$ = 带宽(Hz)，$V$ = 离散电平数

## 香农定理（有噪声）
$$C_{max} = W \\log_2(1 + S/N)$$
$S/N$ = 信噪比，$dB = 10 \\log_{10}(S/N)$

---

## 编码与调制
| 方式 | 用途 | 举例 |
|------|------|------|
| 数字→数字（编码） | 数字信号传输 | NRZ、曼彻斯特、差分曼彻斯特 |
| 数字→模拟（调制） | 模拟信道传数字 | ASK/FSK/PSK/QAM |
| 模拟→数字（编码） | PCM | 采样→量化→编码 |

---

## 考试辨析
- 奈奎斯特：无噪声时的**上限**
- 香农定理：有噪声时的**上限**——更接近实际`},{id:`cn-2-2-1`,chapterId:`cn-2`,title:`传输介质`,keyConcepts:[`双绞线`,`同轴电缆`,`光纤`,`无线电`],relatedPoints:[],content:`## 常见传输介质
| 介质 | 特点 | 适用 |
|------|------|------|
| **双绞线** | 便宜、易安装 | LAN（以太网） |
| **同轴电缆** | 抗干扰好 | 有线电视 |
| **光纤** | 带宽大、距离远、抗干扰 | 骨干网、WAN |
| 无线电 | 无需线缆 | WiFi、蜂窝网络 |

---

## 考试辨析
- 光纤使用**全反射**原理——多模/单模
- 双绞线通过**绞合**减少串扰`},{id:`cn-2-3-1`,chapterId:`cn-2`,title:`物理层设备`,keyConcepts:[`中继器`,`集线器`,`放大器`],relatedPoints:[],content:`## 物理层设备
| 设备 | 功能 |
|------|------|
| **中继器** | 信号再生放大，延长传输距离 |
| **集线器 (Hub)** | 多端口中继器，**半双工，共享带宽** |

---

## 考试辨析
- 中继器和集线器工作在**物理层**——只转发信号
- 不能连接不同协议的网段`},{id:`cn-3-1-1`,chapterId:`cn-3`,title:`数据链路层概述`,keyConcepts:[`数据链路层`,`帧`,`成帧`,`差错控制`,`流量控制`],relatedPoints:[],content:`## 数据链路层的功能
1. 为网络层提供服务接口
2. **成帧**：将比特流组装成帧
3. **差错控制**：检测/纠正误码
4. **流量控制**：协调发送方和接收方速率

---

## 成帧方法
| 方法 | 原理 |
|------|------|
| 字符计数 | 帧头标明长度 |
| 字符填充 | 特殊字符界定帧边界 |
| 零比特填充 | 5个连续1后插0（HDLC） |

---

## 考试辨析
- 数据链路层的传输单位是**帧**
- 零比特填充法：发送 0111110 → 01111100（5个1后插0）`},{id:`cn-3-2-1`,chapterId:`cn-3`,title:`组帧`,keyConcepts:[`组帧`,`字符计数`,`字符填充`,`零比特填充`,`HDLC`],relatedPoints:[`cn-3-1-1`],content:`## 组帧 (Framing)

> 将比特流划分为帧——数据链路层的核心功能。

---

## 四种组帧方法

| 方法 | 原理 | 优缺点 |
|------|------|--------|
| **字符计数** | 帧头部标明帧长度 | 简单，但计数出错则后续全乱 |
| **字符填充** | 用特殊字符（DLE STX/ETX）定界 | 需字符转义 |
| **零比特填充** | 5个连续1后插入一个0 | **HDLC/PPP 采用**，最常用 |
| **物理层编码违例** | 利用无效编码作为帧边界 | 如曼彻斯特编码的违例码 |

---

## 零比特填充法（高频考点）
发送：数据中出现 5 个连续 1 → 自动插入 1 个 0
接收：发现 5 个连续 1 → 检查下一位 → 0 则删除，1 则可能是帧尾

例：原始数据 01111110 → 传输 011111010（第5个1后插0）

---

## 考试辨析
- 零比特填充是 HDLC 协议的标准组帧方式
- 408 选择题常考"5个1后插0"的具体过程
`},{id:`cn-3-3-1`,chapterId:`cn-3`,title:`差错控制`,keyConcepts:[`差错控制`,`CRC`,`奇偶校验`,`海明码`,`纠错`,`检错`],relatedPoints:[],content:`## 差错控制技术

| 方法 | 类型 | 说明 |
|------|------|------|
| **奇偶校验** | 检错 | 增加一位使1的个数为奇/偶 |
| **CRC（循环冗余校验）** | 检错 | 除法求余，最常用 |
| **海明码** | **纠错** | 可定位并纠正单比特错误 |

---

## CRC 原理
1. 发送方：$M(x) \\cdot 2^k \\div G(x)$ → 余数 = 校验码
2. 接收方：收到的帧 $\\div G(x)$ → 余数为0则无误

---

## 考试辨析
- CRC 只能**检错**，不能纠错
- 海明码可以**纠错**（单比特）
- $n$ 位校验位最多检测 $n$ 位以内的错误`},{id:`cn-3-4-1`,chapterId:`cn-3`,title:`流量控制与可靠传输`,keyConcepts:[`停止等待`,`GBN`,`SR`,`滑动窗口`,`ARQ`,`ACK`],relatedPoints:[],content:`## 滑动窗口协议

| 协议 | 窗口大小(发送) | 窗口大小(接收) | 重传 |
|------|--------------|--------------|------|
| **停止-等待** | 1 | 1 | 超时 |
| **GBN (回退N)** | $2^n-1$ | 1 | **批量重传** |
| **SR (选择重传)** | $2^{n-1}$ | $2^{n-1}$ | **只重传错帧** |

---

## 三种协议对比
| | 停止-等待 | GBN | SR |
|------|----------|-----|-----|
| 效率 | 低 | 中 | 高 |
| 实现 | 最简单 | 简单 | 复杂 |
| 缓冲区 | 小 | 小 | 大 |

---

## 考试辨析
- GBN 接收方只接受**按序到达的帧**
- SR 接收方可缓存**乱序帧**
- 序号空间大小 $\\ge 窗口大小 \\times 2$（避免新旧帧混淆）`},{id:`cn-3-5-1`,chapterId:`cn-3`,title:`介质访问控制`,keyConcepts:[`CSMA/CD`,`CSMA/CA`,`MAC`,`ALOHA`,`碰撞`,`冲突域`],relatedPoints:[],content:`## 介质访问控制的分类

### 信道划分
- FDMA、TDMA、CDMA

### 随机访问
| 协议 | 说明 | 适用 |
|------|------|------|
| ALOHA | 想发就发 | — |
| CSMA | 先听后发 | — |
| **CSMA/CD** | 先听后发+边发边听+冲突停止 | **以太网** |
| **CSMA/CA** | 碰撞避免 | WiFi |

---

## CSMA/CD 核心
1. 先听后发
2. 边发边听
3. 冲突停止 → 发冲突加强信号
4. 二进制指数退避（随机等待后重试）

最小帧长 = 传播时延 × 数据率 × 2

---

## CSMA/CD vs CSMA/CA
| | CD | CA |
|------|-----|-----|
| 检测方式 | 碰撞检测 | 碰撞**避免** |
| 适用 | 有线（能检测） | 无线（无法同时收发） |

---

## 考试辨析
- 以太网使用 CSMA/CD（经典考点）
- 最小帧长的公式必须掌握
- 冲突域：CSMA/CD 环境中可能发生碰撞的计算机集合`},{id:`cn-3-6-1`,chapterId:`cn-3`,title:`局域网 (LAN)`,keyConcepts:[`以太网`,`MAC地址`,`VLAN`,`交换机`,`STP`],relatedPoints:[],content:`## 以太网 (Ethernet)

> 最经典的局域网技术——IEEE 802.3 标准。

- MAC 帧格式：目的地址 | 源地址 | 类型/长度 | 数据 | FCS
- MAC 地址 48 位（6 字节）
- 工作在**数据链路层**

---

## 交换机 (Switch)

| 特性 | 说明 |
|------|------|
| 工作层 | 数据链路层（转发帧） |
| 自学习 | 通过源 MAC 地址学习端口映射 |
| 转发 | 目的 MAC 不在表 → 洪泛 |
| 冲突域 | 每个端口独立冲突域 |

---

## VLAN

> 虚拟局域网——在交换机上将端口逻辑分组，隔离广播域。

---

## 考试辨析
- 交换机隔离**冲突域**——每端口一个冲突域
- 路由器隔离**广播域**——每端口一个广播域`},{id:`cn-3-7-1`,chapterId:`cn-3`,title:`广域网 (WAN)`,keyConcepts:[`广域网`,`PPP`,`HDLC`,`WAN`],relatedPoints:[`cn-3-6-1`],content:`## 广域网 vs 局域网

| | LAN | WAN |
|------|-----|-----|
| 范围 | 小 | 大（跨城市/国家） |
| 协议 | 以太网/IEEE 802 | PPP/HDLC/帧中继/ATM |
| 拓扑 | 广播 | 点对点 |

---

## PPP 协议
- Point-to-Point Protocol：点对点链路层协议
- 功能：成帧 + 链路控制(LCP) + 网络控制(NCP)
- 不提供可靠传输（序号/确认机制）
- 用于拨号上网、PPPoE

---

## 考试辨析
- PPP 是面向**字节**的协议，HDLC 是面向**比特**的
- 408 对 WAN 要求较低，了解 PPP 和 HDLC 的基本概念即可
`},{id:`cn-3-8-1`,chapterId:`cn-3`,title:`数据链路层设备`,keyConcepts:[`网桥`,`交换机`,`冲突域`,`广播域`],relatedPoints:[],content:`## 网桥 vs 交换机
| | 网桥 | 交换机 |
|------|------|--------|
| 端口数 | 少 | 多 |
| 转发 | 基于软件/存储转发 | 基于硬件 |
| 本质 | 交换机 = **多端口网桥** |

---

## 关键概念
| 概念 | 含义 |
|------|------|
| **冲突域** | 同一时刻只能一个设备发送数据的范围 |
| **广播域** | 能收到同一广播的范围 |

---

## 考试辨析
- 交换机/网桥隔离**冲突域**（不隔离广播域）
- 路由器隔离**冲突域 + 广播域**
- 中继器/集线器不隔离任何域`},{id:`cn-4-1-1`,chapterId:`cn-4`,title:`网络层功能与路由概述`,keyConcepts:[`网络层`,`路由`,`转发`,`虚电路`,`数据报`],relatedPoints:[],content:`## 网络层两大功能

1. **路由选择**：确定分组从源到目的地的路径
2. **分组转发**：路由器将分组从输入端口移到输出端口

---

## 虚电路 vs 数据报

| | 虚电路 | 数据报 |
|------|--------|--------|
| 连接建立 | 需要 | 不需要 |
| 路由确定 | 一次确定 | 每个分组独立决策 |
| 顺序 | 按序到达 | 可能乱序 |
| 典型 | ATM | **IP（互联网）** |

---

## 考试辨析
- 互联网采用**数据报**方式——无连接
- 路由算法是大题常考内容（RIP/OSPF/BGP）`},{id:`cn-4-2-1`,chapterId:`cn-4`,title:`IPv4`,keyConcepts:[`IPv4`,`IP地址`,`子网划分`,`CIDR`,`NAT`,`ARP`,`DHCP`],relatedPoints:[],content:`## IPv4 地址
- 32 位，点分十进制
- 分类：A(0~127)、B(128~191)、C(192~223)、D(组播)、E(保留)

---

## 子网划分与 CIDR

### 子网划分
- IP = 网络号 + 子网号 + 主机号
- 子网掩码：网络位全1，主机位全0

### CIDR（无类别域间路由）
- IP/前缀长度（如 192.168.1.0/24）
- 路由聚合：合并多个网络为一个超网

---

## 核心协议
| 协议 | 功能 |
|------|------|
| **ARP** | IP → MAC 地址映射 |
| **DHCP** | 自动分配 IP 地址 |
| **NAT** | 私有 IP ↔ 公网 IP 转换 |

---

## 考试辨析
- 子网划分计算是408必考题型
- ARP 在局域网内广播——找同一网段的 MAC
- NAT 使内网多设备共享一个公网 IP`},{id:`cn-4-3-1`,chapterId:`cn-4`,title:`IPv6`,keyConcepts:[`IPv6`,`地址格式`,`双冒号表示`,`IPv4兼容`,`隧道`],relatedPoints:[`cn-4-2-1`],content:`## IPv6 地址

- **128 位**（IPv4 仅 32 位）
- 冒号十六进制：如 \`2001:0db8:0000:0000:0000:ff00:0042:8329\`
- 简化：省略前导 0 + 双冒号压缩（一次）

---

## IPv6 vs IPv4

| | IPv4 | IPv6 |
|------|------|------|
| 地址长度 | 32 位 | **128 位** |
| 首部 | 变长(20~60B) | 固定 40B（扩展首部） |
| 校验和 | 有 | **无**（交给上层） |
| 分片 | 路由器可分片 | **只允许源结点分片** |
| NAT | 广泛使用 | 不需要 |
| 安全性 | 可选(IPSec) | **内置 IPSec** |

---

## IPv4 → IPv6 过渡
- **双协议栈**：同时支持 IPv4 和 IPv6
- **隧道技术**：IPv6 数据报封装在 IPv4 中穿过 IPv4 网络

---

## 考试辨析
- IPv6 地址 128 位——地址空间大到"每一粒沙子都能分配"
- IPv6 首部固定 40 字节——去掉了很多 IPv4 的字段（校验和/分片）
`},{id:`cn-4-4-1`,chapterId:`cn-4`,title:`路由算法与路由协议`,keyConcepts:[`RIP`,`OSPF`,`BGP`,`距离向量`,`链路状态`,`路径向量`],relatedPoints:[],content:`## 内部网关协议 (IGP) — 同一 AS 内

### RIP (Routing Information Protocol)
| 属性 | 说明 |
|------|------|
| 算法 | **距离向量 (Distance Vector)** —— Bellman-Ford |
| 度量 | **跳数**（最大 15 跳 = 不可达，16 = 无穷） |
| 更新 | 每 30 秒广播一次完整路由表 |
| 传输 | UDP 520 端口 |
| 收敛 | 慢——"好消息传得快，坏消息传得慢" |
| 问题 | **慢收敛** → 路由环路 → 计数到无穷 |
| 解决 | 水平分割、毒性反转、触发更新 |
| 适用 | 小型网络（< 16 跳） |

### OSPF (Open Shortest Path First)
| 属性 | 说明 |
|------|------|
| 算法 | **链路状态 (Link State)** —— Dijkstra SPF |
| 更新 | 链路状态发生变化时才发送 LSA（增量更新） |
| 传输 | **直接用 IP**（协议号 89），不需要 UDP/TCP |
| 设计 | 分 Area（Area 0 为骨干区），层次化 |
| 收敛 | **快**——基于全网拓扑，计算最短路径树 |
| 适用 | 大型企业网络 |

---
## 外部网关协议 (EGP) — 跨 AS

### BGP (Border Gateway Protocol)
| 属性 | 说明 |
|------|------|
| 算法 | **路径向量 (Path Vector)** |
| 传输 | TCP 179 端口（可靠传输） |
| 策略 | **基于策略路由**——不只看最短路径 |
| 更新 | 只发送变化的路由（增量） |
| 适用 | AS 之间——互联网核心路由协议 |

---
## 三种协议对比（必考）
| | RIP | OSPF | BGP |
|------|-----|------|-----|
| 算法类型 | DV | LS | PV |
| 范围 | AS 内 | AS 内 | AS 间 |
| 度量 | 跳数 | 开销(带宽) | 路径属性 |
| 传输层 | UDP 520 | IP 协议 89 | TCP 179 |
| 交换内容 | 路由表 | 链路状态 | 路径向量 |
| 更新方式 | 周期性广播 | 触发式洪泛 | 增量更新 |

---
## 考试辨析
- RIP/OSPF/BGP 是 408 计网的核心考点——几乎每年都有选择题
- RIP 16 跳不可达 → 限制了网络直径
- OSPF 用 Dijkstra 算法计算最短路径树（Sink Tree）
- BGP 是互联网的"邮政系统"——跨运营商路由必须用 BGP
- 区分"域内路由(IGP)"与"域间路由(EGP)"——选择题常见陷阱`},{id:`cn-4-6-1`,chapterId:`cn-4`,title:`移动 IP`,keyConcepts:[`移动IP`,`家乡代理`,`外地代理`,`转交地址`,`隧道`],relatedPoints:[],content:`## 移动 IP

> 移动主机在不同网络间移动时保持通信不中断的机制。

---

## 三个关键实体
| 实体 | 角色 |
|------|------|
| **家乡代理** | 主机在"家乡网络"的代理——截获发往移动主机的分组 |
| **外地代理** | 主机当前所在网络的代理 |
| **转交地址** | 移动主机在外地网络中的临时地址 |

---

## 基本流程
1. 移动主机到达外地网络 → 获取转交地址
2. 向外地代理和家乡代理注册
3. 通信对端发送分组 → 家乡代理截获 → 隧道封装 → 外地代理 → 移动主机
4. 移动主机发出的分组直接发送给通信对端

---

## 考试辨析
- 408 对移动 IP 要求较低
- 理解"三角路由"概念即可——家乡代理→外地网络多走了一段路
`},{id:`cn-4-5-1`,chapterId:`cn-4`,title:`IP 多播`,keyConcepts:[`多播`,`组播`,`IGMP`,`D类地址`],relatedPoints:[],content:`## IP 多播

> 一个源点发送，**一组**指定接收者接收——介于单播和广播之间。

---

## 多播地址
- IPv4：D 类地址 224.0.0.0 ~ 239.255.255.255
- 多播 MAC：01-00-5E-xx-xx-xx（IP 多播 → MAC 多播的映射）

---

## IGMP (Internet Group Management Protocol)
- 主机-路由器之间的多播组成员管理协议
- 主机通过 IGMP 告知路由器"我要加入/离开某多播组"

---

## 考试辨析
- 408 对多播要求较低，了解 D 类地址和 IGMP 基本概念即可
- 多播 MAC 地址的低 23 位 = 多播 IP 的低 23 位
`},{id:`cn-4-7-1`,chapterId:`cn-4`,title:`网络层设备`,keyConcepts:[`路由器`,`路由表`,`转发`,`默认网关`],relatedPoints:[],content:`## 路由器
> 工作在网络层的互联设备——根据 IP 地址转发分组。

- 每端口一个 IP 地址（在不同网络）
- 隔离冲突域，也隔离广播域
- 存储 IP 分组，查路由表转发

---

## 交换机 vs 路由器
| | 交换机 | 路由器 |
|------|--------|--------|
| 工作层 | 数据链路层 | **网络层** |
| 转发依据 | MAC 地址 | **IP 地址** |
| 隔离冲突域 | ✅ | ✅ |
| 隔离广播域 | ❌ | ✅ |

---

## 考试辨析
- 路由器是**网络层**设备——408 常考各设备对应层次`},{id:`cn-5-1-1`,chapterId:`cn-5`,title:`传输层概述`,keyConcepts:[`传输层`,`端口`,`复用`,`分用`,`TCP`,`UDP`],relatedPoints:[],content:`## 传输层的功能
1. 端到端通信（进程到进程）
2. 复用和分用（端口机制）
3. 差错控制（TCP）

---

## 端口号
| 类型 | 范围 | 举例 |
|------|------|------|
| 熟知端口 | 0~1023 | HTTP(80), DNS(53), FTP(21) |
| 注册端口 | 1024~49151 | — |
| 临时端口 | 49152~65535 | 客户端使用 |

---

## 考试辨析
- **传输层 = 端到端**——只看源和目的进程
- IP 定位到主机，端口定位到进程
- Socket (套接字) = IP + 端口`},{id:`cn-5-2-1`,chapterId:`cn-5`,title:`UDP协议`,keyConcepts:[`UDP`,`无连接`,`无确认`,`无流量控制`,`首部8字节`],relatedPoints:[`cn-5-1-1`],content:`## UDP 的特点

> User Datagram Protocol —— 无连接、尽最大努力交付。

| 特性 | 说明 |
|------|------|
| 无连接 | 不建立连接 |
| 无拥塞控制 | 想发就发 |
| 不可靠 | 不保证到达 |
| 首部开销小 | 仅 8 字节 |
| 支持广播/组播 | TCP 不支持 |

---

## UDP 首部格式
\`\`\`
源端口 | 目的端口 | 长度 | 校验和
   2    |    2     |  2   |   2  (字节)
\`\`\`

---

## UDP 适用场景
- DNS、DHCP、RIP（实时通信，丢包可重试）
- 视频直播、VoIP（少量丢包可接受，低延迟更重要）

---

## 考试辨析
- UDP 首部 8 字节，TCP 首部最少 20 字节
- UDP 没有拥塞控制——在高拥塞时可能导致网络崩溃`},{id:`cn-5-3-1`,chapterId:`cn-5`,title:`TCP协议`,keyConcepts:[`TCP`,`三次握手`,`四次挥手`,`滑动窗口`,`拥塞控制`,`慢开始`,`拥塞避免`,`快重传`,`快恢复`,`TIME_WAIT`],relatedPoints:[`cn-5-1-1`],content:`## TCP 的特点
> Transmission Control Protocol —— **面向连接、可靠、字节流**传输。
| 特性 | 说明 |
|------|------|
| 面向连接 | 通信前须建立连接（三次握手） |
| 可靠传输 | 确认 + 超时重传 + 滑动窗口 |
| 全双工 | 双方可同时收发数据 |
| 面向字节流 | 不保留报文边界（与 UDP 相反） |
| 流量控制 | 滑动窗口（接收方控制发送速率） |
| 拥塞控制 | 检测网络状态，主动调整发送速率 |

---
## TCP 首部格式（最少 20 字节）
| 字段 | 位数 | 说明 |
|------|------|------|
| 源端口 / 目的端口 | 各 16 位 | 标识进程 |
| 序号 (Seq) | 32 位 | 本报文段第一个字节的序号 |
| 确认号 (Ack) | 32 位 | 期望收到对方下一个字节的序号 |
| 数据偏移 | 4 位 | 首部长度（单位 4 字节） |
| 控制位 | URG/ACK/PSH/RST/SYN/FIN | 各 1 位 |
| 窗口 | 16 位 | 接收窗口大小（流量控制） |
| 校验和 | 16 位 | 加伪首部计算 |
| 紧急指针 | 16 位 | URG=1 时有效 |

---
## 三次握手（建立连接）
\`\`\`
客户端                    服务器
|                         |
|--- SYN=1, seq=x ------>|  ① 客户端请求连接
|                         |
|<-- SYN=1, ACK=1,       |  ② 服务器确认 + 请求
|    seq=y, ack=x+1 -----|
|                         |
|--- ACK=1, seq=x+1,     |  ③ 客户端确认
|    ack=y+1 ----------->|
|                         |
|      【连接建立】       |
\`\`\`
> **为什么是三次？** —— 防止已失效的连接请求到达服务器，导致服务器白白等待。

---
## 四次挥手（释放连接）
\`\`\`
客户端                    服务器
|--- FIN=1, seq=u ------>|  ① 客户端请求关闭
|<-- ACK=1, ack=u+1 -----|  ② 服务器确认
|                         |
|<-- FIN=1, seq=v --------|  ③ 服务器请求关闭
|--- ACK=1, ack=v+1 ---->|  ④ 客户端确认
|                         |
|    TIME_WAIT (2MSL)     |
\`\`\`
> **为什么是四次？** —— TCP 全双工，双方需独立关闭。
> **TIME_WAIT = 2MSL**：确保最后的 ACK 能到达服务器，让旧连接的报文在网络中消失。

---
## TCP 可靠传输机制
1. **确认 (ACK)**：接收方确认收到的字节
2. **超时重传 (RTO)**：自适应超时时间（基于 RTT 的加权平均）
3. **滑动窗口**：允许连续发送多个报文而不必等确认
4. **快重传**：收到 3 个重复 ACK → 立即重传（不等超时）

---
## TCP 拥塞控制（四大算法）
> 拥塞窗口 cwnd = 发送方可以发送的数据量。
| 算法 | 阶段 | cwnd 变化 | 触发条件 |
|------|------|-----------|----------|
| **慢开始** | 建连/超时后 | 指数增长（×2 每 RTT） | cwnd < ssthresh |
| **拥塞避免** | cwnd $\\ge$ ssthresh | 线性增长（+1 每 RTT） | 持续 |
| **快重传** | 收到 3 个重复 ACK | 不等超时，立即重传 | 3 dup ACK |
| **快恢复** | 快重传后 | cwnd = cwnd/2，ssthresh = cwnd/2 | 不降到 1 |

---
## 考试辨析
- TCP 是 **408 计网考大题的主要出题范围**
- **三次握手 vs 四次挥手**是永恒的选择题考点
- 拥塞控制算法的 cwnd 变化曲线图需要能手画
- SYN 洪泛攻击：伪造大量 SYN 不回复 ACK——用 SYN Cookie 防御
- TCP 首部 ACK 位和 ack 确认号是两个不同概念——前者是标志位，后者是序号`},{id:`cn-5-3-2`,chapterId:`cn-5`,title:`TCP拥塞控制详解`,keyConcepts:[`慢开始`,`拥塞避免`,`快重传`,`快恢复`,`ssthresh`,`cwnd`,`RTT`,`MSS`],relatedPoints:[`cn-5-3-1`],content:`## 拥塞控制四大算法
| 算法 | 触发 | cwnd变化 | ssthresh变化 |
|------|------|----------|------------|
| **慢开始** | 新建连接/超时 | **指数增长**(×2每RTT) | 不变 |
| **拥塞避免** | cwnd≥ssthresh | **线性增长**(+1每RTT) | 不变 |
| **快重传** | 3个重复ACK | 不等超时重传 | — |
| **快恢复** | 快重传后 | cwnd=ssthresh(不降到1) | ssthresh=cwnd/2 |

---
## 超时重传时的处理
> 超时 = 网络严重拥塞。处理：ssthresh = cwnd/2，cwnd = 1，重新慢开始。
> 收到3个重复ACK = 轻微拥塞。处理：快重传+快恢复（cwnd和ssthresh各减半）。

### cwnd变化曲线示例
假设初始cwnd=1, ssthresh=16：
cwnd: 1→2→4→8→16→17→18→...(线性) → [3个重复ACK] → ssthresh=9, cwnd=9→10→...

---
## 考试辨析
- **慢开始不慢**——cwnd指数增长，非常快
- 慢开始和拥塞避免是**不同阶段**——由ssthresh划分
- 超时=严重→重新慢开始；3个重复ACK=轻微→快恢复
- 408考过多次针对cwnd变化曲线的选择题
- [[2012-大题47] [2015-大题47] [2018-大题47] [2021-大题47]]`},{id:`cn-6-1-1`,chapterId:`cn-6`,title:`网络应用模型`,keyConcepts:[`C/S`,`P2P`],relatedPoints:[],content:`## C/S 模型（客户/服务器）
- 服务器：永久在线，被动等待请求
- 客户端：主动发起请求
- 典型：Web、FTP、Email

---

## P2P 模型（对等）
- 每个结点既是客户端也是服务器
- 优点：可扩展性强、成本低
- 典型：BitTorrent、区块链

---

## 考试辨析
- C/S 模型服务器是瓶颈——P2P 无中心，更可扩展`},{id:`cn-6-2-1`,chapterId:`cn-6`,title:`DNS系统`,keyConcepts:[`DNS`,`域名`,`域名解析`,`递归查询`,`迭代查询`,`根域名服务器`],relatedPoints:[],content:`## DNS (域名系统)
> 将域名转换为 IP 地址的分布式数据库系统。用 **UDP 53 端口**。

---

## 域名层次结构

根 → 顶级域名(.com/.cn/.org) → 二级域名 → 三级域名...

---

## 两种查询方式
| 方式 | 原理 | 负担 |
|------|------|------|
| **递归查询** | "你帮我去查" | 被查询端 |
| **迭代查询** | "我告诉你去找谁" | 查询端 |

主机→本地DNS：递归
本地DNS→根/顶级/权威：迭代

---

## 考试辨析
- DNS 用 UDP（因为数据量小，超时可重试）
- 域名服务器层次是常考结构`},{id:`cn-6-4-1`,chapterId:`cn-6`,title:`电子邮件`,keyConcepts:[`SMTP`,`POP3`,`IMAP`,`MIME`,`电子邮件`],relatedPoints:[`cn-6-1-1`,`cn-6-2-1`],content:`## 电子邮件系统

---

## 核心协议
| 协议 | 用途 | 传输 | 端口 |
|------|------|------|------|
| **SMTP** | 发送/中继邮件 | TCP | 25 |
| **POP3** | 从服务器下载邮件到本地 | TCP | 110 |
| **IMAP** | 在服务器上管理邮件（不下载） | TCP | 143 |
| **MIME** | 扩展 SMTP 支持多媒体（非文本） | — | — |

---

## 工作流程
1. 发送方用 SMTP 将邮件发送到发送方邮件服务器
2. 发送方服务器用 SMTP 将邮件中继到接收方服务器
3. 接收方用 POP3/IMAP 从服务器读取邮件

---

## POP3 vs IMAP
| | POP3 | IMAP |
|------|------|------|
| 邮件位置 | 下载到本地 | 保存在服务器 |
| 多设备 | 不同步 | **同步** |
| 离线 | ✅ | ❌ |

---

## 考试辨析
- SMTP 只能发 7 位 ASCII——MIME 弥补了此限制
- SMTP 用"推"（发送），POP3/IMAP 用"拉"（接收）
- 408 常考邮件收发涉及的协议组合
`},{id:`cn-6-3-1`,chapterId:`cn-6`,title:`FTP`,keyConcepts:[`FTP`,`文件传输`,`控制连接`,`数据连接`,`21`,`20`],relatedPoints:[`cn-6-1-1`],content:`## FTP (File Transfer Protocol)

> 在网络上进行文件传输的协议。用 **TCP**。

---

## 双连接机制（经典考点）
| 连接 | 端口 | 方向 | 说明 |
|------|------|------|------|
| **控制连接** | 21 | 客户端 → 服务器 | 传输命令和响应（始终保持） |
| **数据连接** | 20 | 服务器 → 客户端 | 传输文件数据（需要时建立） |

---

## 主动模式 vs 被动模式
| 模式 | 数据连接建立方 | 数据端口 | 防火墙友好 |
|------|--------------|----------|-----------|
| PORT (主动) | 服务器发起 | 20 | ❌ 差 |
| PASV (被动) | 客户端发起 | >1024 随机 | ✅ 好 |

---

## 考试辨析
- FTP 用两个 TCP 连接——这是其最鲜明的特征
- 控制连接全程保持，数据连接用完即关闭
- 端口 21 控制 + 20 数据 = FTP 标准模式
`},{id:`cn-6-5-1`,chapterId:`cn-6`,title:`万维网与HTTP`,keyConcepts:[`HTTP`,`HTTPS`,`URL`,`HTML`,`Cookie`,`GET`,`POST`,`状态码`],relatedPoints:[],content:`## HTTP

> 超文本传输协议——万维网的核心。用 **TCP 80 端口**。

---

## HTTP 报文

请求报文：方法 URL 版本 + 首部 + (实体)
响应报文：版本 状态码 短语 + 首部 + (实体)

---

## 常见状态码
| 状态码 | 含义 |
|--------|------|
| 200 | OK |
| 301 | 永久重定向 |
| 304 | 未修改（缓存有效） |
| 404 | 未找到 |
| 500 | 服务器内部错误 |

---

## HTTP 版本演进
| 版本 | 特点 |
|------|------|
| HTTP/1.0 | 每次请求新建TCP连接 |
| HTTP/1.1 | 持久连接、管道化 |
| HTTP/2 | 多路复用、头部压缩 |
| HTTP/3 | 基于QUIC(UDP) |

---

## HTTPS
- HTTP + TLS/SSL → 加密传输
- **TCP 443 端口**

---

## 考试辨析
- HTTP 是无状态协议——用 Cookie 弥补
- GET 是幂等的（重复请求不影响），POST 不是`}],yr=[...hr,...gr,..._r,...vr];function br(e){return yr.filter(t=>t.chapterId===e)}function xr(e){return yr.find(t=>t.id===e)}function Sr(e){let t=e.toLowerCase();return yr.filter(e=>e.title.toLowerCase().includes(t)||e.keyConcepts.some(e=>e.toLowerCase().includes(t)))}var Cr={layout:`_layout_1h7l1_1`,sidebar:`_sidebar_1h7l1_7`,logo:`_logo_1h7l1_18`,logoText:`_logoText_1h7l1_24`,nav:`_nav_1h7l1_31`,navItem:`_navItem_1h7l1_39`,navItemActive:`_navItemActive_1h7l1_40`,navIcon:`_navIcon_1h7l1_66`,navDot:`_navDot_1h7l1_72`,navDivider:`_navDivider_1h7l1_79`,searchWrap:`_searchWrap_1h7l1_85`,searchInput:`_searchInput_1h7l1_91`,searchDropdown:`_searchDropdown_1h7l1_108`,searchItem:`_searchItem_1h7l1_123`,searchItemTitle:`_searchItemTitle_1h7l1_146`,searchItemChapter:`_searchItemChapter_1h7l1_152`,main:`_main_1h7l1_157`,hamburger:`_hamburger_1h7l1_165`,overlay:`_overlay_1h7l1_194`,sidebarOpen:`_sidebarOpen_1h7l1_227`};function wr(){let[e,t]=(0,v.useState)(``),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(!1),o=mt(),s=(0,v.useRef)(null),c=e.trim()?Sr(e).slice(0,8):[];(0,v.useEffect)(()=>{function e(e){s.current&&!s.current.contains(e.target)&&r(!1)}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let l=e=>{let n=c.find(t=>t.id===e);n&&(t(``),r(!1),o(`/knowledge/ds/${n.chapterId}/${e}`))},u=()=>a(!1);return(0,A.jsxs)(`div`,{className:Cr.layout,children:[(0,A.jsxs)(`aside`,{className:`${Cr.sidebar} ${i?Cr.sidebarOpen:``}`,children:[(0,A.jsx)(`div`,{className:Cr.logo,children:(0,A.jsx)(`span`,{className:Cr.logoText,children:`408`})}),(0,A.jsxs)(`div`,{className:Cr.searchWrap,ref:s,children:[(0,A.jsx)(`input`,{type:`text`,className:Cr.searchInput,placeholder:`搜索知识点...`,value:e,onChange:e=>{t(e.target.value),r(!0)},onFocus:()=>r(!0)}),n&&c.length>0&&(0,A.jsx)(`div`,{className:Cr.searchDropdown,children:c.map(e=>(0,A.jsxs)(`button`,{className:Cr.searchItem,onClick:()=>{l(e.id),u()},children:[(0,A.jsx)(`span`,{className:Cr.searchItemTitle,children:e.title}),(0,A.jsxs)(`span`,{className:Cr.searchItemChapter,children:[fr.find(t=>t.chapters.some(t=>t.id===e.chapterId))?.name,` · `,e.keyConcepts.slice(0,2).join(`, `)]})]},e.id))})]}),(0,A.jsxs)(`nav`,{className:Cr.nav,children:[(0,A.jsxs)(zn,{to:`/`,end:!0,className:({isActive:e})=>e?Cr.navItemActive:Cr.navItem,children:[(0,A.jsx)(`span`,{className:Cr.navIcon,children:`⌂`}),(0,A.jsx)(`span`,{children:`总览`})]}),fr.map(e=>(0,A.jsxs)(zn,{to:`/knowledge/${e.id}`,className:({isActive:e})=>e?Cr.navItemActive:Cr.navItem,children:[(0,A.jsx)(`span`,{className:Cr.navDot,style:{background:e.color}}),(0,A.jsx)(`span`,{children:e.name})]},e.id)),(0,A.jsx)(`div`,{className:Cr.navDivider}),(0,A.jsxs)(zn,{to:`/quiz`,className:({isActive:e})=>e?Cr.navItemActive:Cr.navItem,children:[(0,A.jsx)(`span`,{className:Cr.navIcon,children:`✎`}),(0,A.jsx)(`span`,{children:`刷题`})]}),(0,A.jsxs)(zn,{to:`/errorbook`,className:({isActive:e})=>e?Cr.navItemActive:Cr.navItem,children:[(0,A.jsx)(`span`,{className:Cr.navIcon,children:`☗`}),(0,A.jsx)(`span`,{children:`错题本`})]}),(0,A.jsx)(`div`,{className:Cr.navDivider}),(0,A.jsxs)(zn,{to:`/knowledge-graph`,className:({isActive:e})=>e?Cr.navItemActive:Cr.navItem,children:[(0,A.jsx)(`span`,{className:Cr.navIcon,children:`◉`}),(0,A.jsx)(`span`,{children:`知识图谱`})]})]})]}),i&&(0,A.jsx)(`div`,{className:Cr.overlay,onClick:u}),(0,A.jsxs)(`main`,{className:Cr.main,onClick:u,children:[(0,A.jsxs)(`button`,{className:Cr.hamburger,onClick:()=>a(!i),"aria-label":`菜单`,children:[(0,A.jsx)(`span`,{}),(0,A.jsx)(`span`,{}),(0,A.jsx)(`span`,{})]}),(0,A.jsx)(Ht,{})]})]})}var Tr={dashboard:`_dashboard_1ihb9_1`,title:`_title_1ihb9_5`,statsGrid:`_statsGrid_1ihb9_12`,statCard:`_statCard_1ihb9_19`,statValue:`_statValue_1ihb9_27`,statLabel:`_statLabel_1ihb9_33`,sectionTitle:`_sectionTitle_1ihb9_39`,subjectList:`_subjectList_1ihb9_46`,subjectCard:`_subjectCard_1ihb9_53`,subjectHeader:`_subjectHeader_1ihb9_67`,subjectDot:`_subjectDot_1ihb9_74`,subjectName:`_subjectName_1ihb9_81`,subjectChapters:`_subjectChapters_1ihb9_88`,progressBar:`_progressBar_1ihb9_93`,progressFill:`_progressFill_1ihb9_100`,quickActions:`_quickActions_1ihb9_106`,actionButton:`_actionButton_1ihb9_111`,actionButtonSecondary:`_actionButtonSecondary_1ihb9_112`};function Er(){let{state:e,activeErrors:t}=dr(),{progress:n}=e,r=n.quizHistory.reduce((e,t)=>e+t.totalCount,0),i=n.quizHistory.reduce((e,t)=>e+t.correctCount,0),a=r>0?Math.round(i/r*100):0;return(0,A.jsxs)(`div`,{className:Tr.dashboard,children:[(0,A.jsx)(`h1`,{className:Tr.title,children:`学习总览`}),(0,A.jsxs)(`div`,{className:Tr.statsGrid,children:[(0,A.jsxs)(`div`,{className:Tr.statCard,children:[(0,A.jsx)(`div`,{className:Tr.statValue,children:n.completedPoints.length}),(0,A.jsx)(`div`,{className:Tr.statLabel,children:`已学知识点`})]}),(0,A.jsxs)(`div`,{className:Tr.statCard,children:[(0,A.jsx)(`div`,{className:Tr.statValue,children:r}),(0,A.jsx)(`div`,{className:Tr.statLabel,children:`累计刷题`})]}),(0,A.jsxs)(`div`,{className:Tr.statCard,children:[(0,A.jsxs)(`div`,{className:Tr.statValue,children:[a,`%`]}),(0,A.jsx)(`div`,{className:Tr.statLabel,children:`总正确率`})]}),(0,A.jsxs)(`div`,{className:Tr.statCard,children:[(0,A.jsx)(`div`,{className:Tr.statValue,children:t.length}),(0,A.jsx)(`div`,{className:Tr.statLabel,children:`待消灭错题`})]})]}),(0,A.jsx)(`h2`,{className:Tr.sectionTitle,children:`科目进度`}),(0,A.jsx)(`div`,{className:Tr.subjectList,children:fr.map(t=>{let n=t.chapters.reduce((e,t)=>e+t.sections.reduce((e,t)=>e+t.knowledgePointIds.length,0),0),r=t.chapters.reduce((t,n)=>t+n.sections.reduce((t,n)=>t+n.knowledgePointIds.filter(t=>e.progress.completedPoints.includes(t)).length,0),0),i=n>0?Math.round(r/n*100):0;return(0,A.jsxs)(Rn,{to:`/knowledge/${t.id}`,className:Tr.subjectCard,children:[(0,A.jsxs)(`div`,{className:Tr.subjectHeader,children:[(0,A.jsx)(`span`,{className:Tr.subjectDot,style:{background:t.color}}),(0,A.jsx)(`span`,{className:Tr.subjectName,children:t.fullName}),(0,A.jsxs)(`span`,{className:Tr.subjectChapters,children:[t.chapters.length,` 章`]})]}),(0,A.jsx)(`div`,{className:Tr.progressBar,children:(0,A.jsx)(`div`,{className:Tr.progressFill,style:{width:`${i}%`,background:t.color}})})]},t.id)})}),(0,A.jsxs)(`div`,{className:Tr.quickActions,children:[(0,A.jsx)(Rn,{to:`/quiz`,className:Tr.actionButton,children:`开始刷题`}),(0,A.jsx)(Rn,{to:`/errorbook`,className:Tr.actionButtonSecondary,children:`查看错题本`})]})]})}var Dr={container:`_container_1i1wv_1`,notFound:`_notFound_1i1wv_5`,breadcrumb:`_breadcrumb_1i1wv_11`,breadcrumbLink:`_breadcrumbLink_1i1wv_20`,breadcrumbSep:`_breadcrumbSep_1i1wv_29`,breadcrumbCurrent:`_breadcrumbCurrent_1i1wv_33`,title:`_title_1i1wv_37`,subtitle:`_subtitle_1i1wv_44`,chapterList:`_chapterList_1i1wv_50`,chapterCard:`_chapterCard_1i1wv_57`,chapterNum:`_chapterNum_1i1wv_73`,chapterTitle:`_chapterTitle_1i1wv_80`,chapterSections:`_chapterSections_1i1wv_87`,badgeDone:`_badgeDone_1i1wv_92`,badgeProgress:`_badgeProgress_1i1wv_93`,otherSubjects:`_otherSubjects_1i1wv_110`,otherTitle:`_otherTitle_1i1wv_115`,otherLinks:`_otherLinks_1i1wv_122`,otherLink:`_otherLink_1i1wv_122`,dot:`_dot_1i1wv_145`};function Or(){let{subject:e}=vt(),t=pr(e??``),{state:n}=dr();return t?(0,A.jsxs)(`div`,{className:Dr.container,children:[(0,A.jsxs)(`div`,{className:Dr.breadcrumb,children:[(0,A.jsx)(Rn,{to:`/`,className:Dr.breadcrumbLink,children:`总览`}),(0,A.jsx)(`span`,{className:Dr.breadcrumbSep,children:`/`}),(0,A.jsx)(`span`,{className:Dr.breadcrumbCurrent,children:t.fullName})]}),(0,A.jsx)(`h1`,{className:Dr.title,children:t.fullName}),(0,A.jsxs)(`p`,{className:Dr.subtitle,children:[t.chapters.length,` 章 · 408统考科目`]}),(0,A.jsx)(`div`,{className:Dr.chapterList,children:t.chapters.map(t=>{let r=t.sections.every(e=>e.knowledgePointIds.length>0&&e.knowledgePointIds.every(e=>n.progress.completedPoints.includes(e))),i=t.sections.some(e=>e.knowledgePointIds.some(e=>n.progress.completedPoints.includes(e)));return(0,A.jsxs)(Rn,{to:`/knowledge/${e}/${t.id}`,className:Dr.chapterCard,children:[(0,A.jsxs)(`div`,{className:Dr.chapterNum,children:[`第`,t.chapterNum,`章`]}),(0,A.jsx)(`div`,{className:Dr.chapterTitle,children:t.title}),(0,A.jsxs)(`div`,{className:Dr.chapterSections,children:[t.sections.length,` 节`]}),r&&(0,A.jsx)(`span`,{className:Dr.badgeDone,children:`已完成`}),i&&!r&&(0,A.jsx)(`span`,{className:Dr.badgeProgress,children:`进行中`})]},t.id)})}),(0,A.jsxs)(`div`,{className:Dr.otherSubjects,children:[(0,A.jsx)(`h3`,{className:Dr.otherTitle,children:`其他科目`}),(0,A.jsx)(`div`,{className:Dr.otherLinks,children:fr.filter(t=>t.id!==e).map(e=>(0,A.jsxs)(Rn,{to:`/knowledge/${e.id}`,className:Dr.otherLink,children:[(0,A.jsx)(`span`,{className:Dr.dot,style:{background:e.color}}),e.fullName]},e.id))})]})]}):(0,A.jsx)(`div`,{className:Dr.notFound,children:`科目不存在`})}var kr={container:`_container_9c4x3_1`,notFound:`_notFound_9c4x3_5`,breadcrumb:`_breadcrumb_9c4x3_11`,breadcrumbLink:`_breadcrumbLink_9c4x3_20`,breadcrumbSep:`_breadcrumbSep_9c4x3_29`,breadcrumbCurrent:`_breadcrumbCurrent_9c4x3_33`,title:`_title_9c4x3_37`,sectionList:`_sectionList_9c4x3_44`,sectionCard:`_sectionCard_9c4x3_51`,sectionHeader:`_sectionHeader_9c4x3_58`,sectionTitle:`_sectionTitle_9c4x3_65`,sectionProgress:`_sectionProgress_9c4x3_72`,emptyHint:`_emptyHint_9c4x3_80`,kpList:`_kpList_9c4x3_87`,kpItem:`_kpItem_9c4x3_93`,checkbox:`_checkbox_9c4x3_99`,kpLink:`_kpLink_9c4x3_107`,kpTitle:`_kpTitle_9c4x3_122`,kpTags:`_kpTags_9c4x3_129`,tag:`_tag_9c4x3_134`,actions:`_actions_9c4x3_143`,quizButton:`_quizButton_9c4x3_147`,mapButton:`_mapButton_9c4x3_163`};function Ar(){let{subject:e,chapterId:t}=vt(),n=mr(t??``),{state:r,dispatch:i}=dr();if(!n)return(0,A.jsx)(`div`,{className:kr.notFound,children:`章节不存在`});let{chapter:a,subject:o}=n,s=br(t??``);return(0,A.jsxs)(`div`,{className:kr.container,children:[(0,A.jsxs)(`div`,{className:kr.breadcrumb,children:[(0,A.jsx)(Rn,{to:`/`,className:kr.breadcrumbLink,children:`总览`}),(0,A.jsx)(`span`,{className:kr.breadcrumbSep,children:`/`}),(0,A.jsx)(Rn,{to:`/knowledge/${e}`,className:kr.breadcrumbLink,children:o.fullName}),(0,A.jsx)(`span`,{className:kr.breadcrumbSep,children:`/`}),(0,A.jsx)(`span`,{className:kr.breadcrumbCurrent,children:a.title})]}),(0,A.jsxs)(`h1`,{className:kr.title,children:[`第`,a.chapterNum,`章 `,a.title]}),(0,A.jsx)(`div`,{className:kr.sectionList,children:a.sections.map(n=>{let a=s.filter(e=>n.knowledgePointIds.includes(e.id)),o=a.filter(e=>r.progress.completedPoints.includes(e.id)).length;return(0,A.jsxs)(`div`,{className:kr.sectionCard,children:[(0,A.jsxs)(`div`,{className:kr.sectionHeader,children:[(0,A.jsx)(`h3`,{className:kr.sectionTitle,children:n.title}),a.length>0&&(0,A.jsxs)(`span`,{className:kr.sectionProgress,children:[o,`/`,a.length]})]}),a.length===0?(0,A.jsx)(`p`,{className:kr.emptyHint,children:`知识点内容将在后续版本中填充`}):(0,A.jsx)(`div`,{className:kr.kpList,children:a.map(n=>{let a=r.progress.completedPoints.includes(n.id);return(0,A.jsxs)(`div`,{className:kr.kpItem,children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:a,onChange:()=>i({type:`COMPLETE_POINT`,pointId:n.id}),className:kr.checkbox}),(0,A.jsxs)(Rn,{to:`/knowledge/${e}/${t}/${n.id}`,className:kr.kpLink,children:[(0,A.jsx)(`span`,{className:kr.kpTitle,children:n.title}),(0,A.jsx)(`span`,{className:kr.kpTags,children:n.keyConcepts.slice(0,3).map(e=>(0,A.jsx)(`span`,{className:kr.tag,children:e},e))})]})]},n.id)})})]},n.id)})}),(0,A.jsxs)(`div`,{className:kr.actions,children:[(0,A.jsx)(Rn,{to:`/knowledge/${e}/${t}/map`,className:kr.mapButton,children:`查看知识导图`}),(0,A.jsx)(Rn,{to:`/quiz?subject=${e}&chapter=${t}`,className:kr.quizButton,children:`刷本章题目`})]})]})}function jr(e){let t=[],n=String(e||``),r=n.indexOf(`,`),i=0,a=!1;for(;!a;){r===-1&&(r=n.length,a=!0);let e=n.slice(i,r).trim();(e||!a)&&t.push(e),i=r+1,r=n.indexOf(`,`,i)}return t}function Mr(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var Nr=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Pr=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Fr={};function Ir(e,t){return((t||Fr).jsx?Pr:Nr).test(e)}var Lr=/[ \t\n\f\r]/g;function Rr(e){return typeof e==`object`?e.type===`text`?zr(e.value):!1:zr(e)}function zr(e){return e.replace(Lr,``)===``}var Br=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};Br.prototype.normal={},Br.prototype.property={},Br.prototype.space=void 0;function Vr(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new Br(n,r,t)}function Hr(e){return e.toLowerCase()}var Ur=class{constructor(e,t){this.attribute=t,this.property=e}};Ur.prototype.attribute=``,Ur.prototype.booleanish=!1,Ur.prototype.boolean=!1,Ur.prototype.commaOrSpaceSeparated=!1,Ur.prototype.commaSeparated=!1,Ur.prototype.defined=!1,Ur.prototype.mustUseProperty=!1,Ur.prototype.number=!1,Ur.prototype.overloadedBoolean=!1,Ur.prototype.property=``,Ur.prototype.spaceSeparated=!1,Ur.prototype.space=void 0;var Wr=s({boolean:()=>j,booleanish:()=>Kr,commaOrSpaceSeparated:()=>Xr,commaSeparated:()=>Yr,number:()=>M,overloadedBoolean:()=>qr,spaceSeparated:()=>Jr}),Gr=0,j=Zr(),Kr=Zr(),qr=Zr(),M=Zr(),Jr=Zr(),Yr=Zr(),Xr=Zr();function Zr(){return 2**++Gr}var Qr=Object.keys(Wr),$r=class extends Ur{constructor(e,t,n,r){let i=-1;if(super(e,t),ei(this,`space`,r),typeof n==`number`)for(;++i<Qr.length;){let e=Qr[i];ei(this,Qr[i],(n&Wr[e])===Wr[e])}}};$r.prototype.defined=!0;function ei(e,t,n){n&&(e[t]=n)}function ti(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new $r(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Hr(r)]=r,n[Hr(a.attribute)]=r}return new Br(t,n,e.space)}var ni=ti({properties:{ariaActiveDescendant:null,ariaAtomic:Kr,ariaAutoComplete:null,ariaBusy:Kr,ariaChecked:Kr,ariaColCount:M,ariaColIndex:M,ariaColSpan:M,ariaControls:Jr,ariaCurrent:null,ariaDescribedBy:Jr,ariaDetails:null,ariaDisabled:Kr,ariaDropEffect:Jr,ariaErrorMessage:null,ariaExpanded:Kr,ariaFlowTo:Jr,ariaGrabbed:Kr,ariaHasPopup:null,ariaHidden:Kr,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Jr,ariaLevel:M,ariaLive:null,ariaModal:Kr,ariaMultiLine:Kr,ariaMultiSelectable:Kr,ariaOrientation:null,ariaOwns:Jr,ariaPlaceholder:null,ariaPosInSet:M,ariaPressed:Kr,ariaReadOnly:Kr,ariaRelevant:null,ariaRequired:Kr,ariaRoleDescription:Jr,ariaRowCount:M,ariaRowIndex:M,ariaRowSpan:M,ariaSelected:Kr,ariaSetSize:M,ariaSort:null,ariaValueMax:M,ariaValueMin:M,ariaValueNow:M,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function ri(e,t){return t in e?e[t]:t}function ii(e,t){return ri(e,t.toLowerCase())}var ai=ti({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:Yr,acceptCharset:Jr,accessKey:Jr,action:null,allow:null,allowFullScreen:j,allowPaymentRequest:j,allowUserMedia:j,alt:null,as:null,async:j,autoCapitalize:null,autoComplete:Jr,autoFocus:j,autoPlay:j,blocking:Jr,capture:null,charSet:null,checked:j,cite:null,className:Jr,cols:M,colSpan:null,content:null,contentEditable:Kr,controls:j,controlsList:Jr,coords:M|Yr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:j,defer:j,dir:null,dirName:null,disabled:j,download:qr,draggable:Kr,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:j,formTarget:null,headers:Jr,height:M,hidden:qr,high:M,href:null,hrefLang:null,htmlFor:Jr,httpEquiv:Jr,id:null,imageSizes:null,imageSrcSet:null,inert:j,inputMode:null,integrity:null,is:null,isMap:j,itemId:null,itemProp:Jr,itemRef:Jr,itemScope:j,itemType:Jr,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:j,low:M,manifest:null,max:null,maxLength:M,media:null,method:null,min:null,minLength:M,multiple:j,muted:j,name:null,nonce:null,noModule:j,noValidate:j,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:j,optimum:M,pattern:null,ping:Jr,placeholder:null,playsInline:j,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:j,referrerPolicy:null,rel:Jr,required:j,reversed:j,rows:M,rowSpan:M,sandbox:Jr,scope:null,scoped:j,seamless:j,selected:j,shadowRootClonable:j,shadowRootDelegatesFocus:j,shadowRootMode:null,shape:null,size:M,sizes:null,slot:null,span:M,spellCheck:Kr,src:null,srcDoc:null,srcLang:null,srcSet:null,start:M,step:null,style:null,tabIndex:M,target:null,title:null,translate:null,type:null,typeMustMatch:j,useMap:null,value:Kr,width:M,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Jr,axis:null,background:null,bgColor:null,border:M,borderColor:null,bottomMargin:M,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:j,declare:j,event:null,face:null,frame:null,frameBorder:null,hSpace:M,leftMargin:M,link:null,longDesc:null,lowSrc:null,marginHeight:M,marginWidth:M,noResize:j,noHref:j,noShade:j,noWrap:j,object:null,profile:null,prompt:null,rev:null,rightMargin:M,rules:null,scheme:null,scrolling:Kr,standby:null,summary:null,text:null,topMargin:M,valueType:null,version:null,vAlign:null,vLink:null,vSpace:M,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:j,disableRemotePlayback:j,prefix:null,property:null,results:M,security:null,unselectable:null},space:`html`,transform:ii}),oi=ti({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:Xr,accentHeight:M,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:M,amplitude:M,arabicForm:null,ascent:M,attributeName:null,attributeType:null,azimuth:M,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:M,by:null,calcMode:null,capHeight:M,className:Jr,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:M,diffuseConstant:M,direction:null,display:null,dur:null,divisor:M,dominantBaseline:null,download:j,dx:null,dy:null,edgeMode:null,editable:null,elevation:M,enableBackground:null,end:null,event:null,exponent:M,externalResourcesRequired:null,fill:null,fillOpacity:M,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Yr,g2:Yr,glyphName:Yr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:M,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:M,horizOriginX:M,horizOriginY:M,id:null,ideographic:M,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:M,k:M,k1:M,k2:M,k3:M,k4:M,kernelMatrix:Xr,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:M,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:M,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:M,overlineThickness:M,paintOrder:null,panose1:null,path:null,pathLength:M,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Jr,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:M,pointsAtY:M,pointsAtZ:M,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Xr,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Xr,rev:Xr,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Xr,requiredFeatures:Xr,requiredFonts:Xr,requiredFormats:Xr,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:M,specularExponent:M,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:M,strikethroughThickness:M,string:null,stroke:null,strokeDashArray:Xr,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:M,strokeOpacity:M,strokeWidth:null,style:null,surfaceScale:M,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Xr,tabIndex:M,tableValues:null,target:null,targetX:M,targetY:M,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Xr,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:M,underlineThickness:M,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:M,values:null,vAlphabetic:M,vMathematical:M,vectorEffect:null,vHanging:M,vIdeographic:M,version:null,vertAdvY:M,vertOriginX:M,vertOriginY:M,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:M,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:ri}),si=ti({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),ci=ti({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:ii}),li=ti({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),ui={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},di=/[A-Z]/g,fi=/-[a-z]/g,pi=/^data[-\w.:]+$/i;function mi(e,t){let n=Hr(t),r=t,i=Ur;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&pi.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(fi,gi);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!fi.test(e)){let n=e.replace(di,hi);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=$r}return new i(r,t)}function hi(e){return`-`+e.toLowerCase()}function gi(e){return e.charAt(1).toUpperCase()}var _i=Vr([ni,ai,si,ci,li],`html`),vi=Vr([ni,oi,si,ci,li],`svg`);function yi(e){let t=String(e||``).trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function bi(e){return e.join(` `).trim()}var xi=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,d=`/`,f=`*`,p=``,m=`comment`,h=`declaration`;function g(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,g=1;function v(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(u);g=~n?e.length-n:g+e.length}function y(){var e={line:l,column:g};return function(t){return t.position=new b(e),C(),t}}function b(e){this.start=e,this.end={line:l,column:g},this.source=t.source}b.prototype.content=e;function x(n){var r=Error(t.source+`:`+l+`:`+g+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=g,r.source=e,!t.silent)throw r}function S(t){var n=t.exec(e);if(n){var r=n[0];return v(r),e=e.slice(r.length),n}}function C(){S(i)}function w(e){var t;for(e||=[];t=T();)t!==!1&&e.push(t);return e}function T(){var t=y();if(!(d!=e.charAt(0)||f!=e.charAt(1))){for(var n=2;p!=e.charAt(n)&&(f!=e.charAt(n)||d!=e.charAt(n+1));)++n;if(n+=2,p===e.charAt(n-1))return x(`End of comment missing`);var r=e.slice(2,n-2);return g+=2,v(r),e=e.slice(n),g+=2,t({type:m,comment:r})}}function E(){var e=y(),t=S(a);if(t){if(T(),!S(o))return x(`property missing ':'`);var r=S(s),i=e({type:h,property:_(t[0].replace(n,p)),value:r?_(r[0].replace(n,p)):p});return S(c),i}}function D(){var e=[];w(e);for(var t;t=E();)t!==!1&&(e.push(t),w(e));return e}return C(),D()}function _(e){return e?e.replace(l,p):p}t.exports=g})),Si=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,`__esModule`,{value:!0}),e.default=r;var n=t(xi());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),Ci=o((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),wi=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(Si()),r=Ci();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Ti=Di(`end`),Ei=Di(`start`);function Di(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function Oi(e){let t=Ei(e),n=Ti(e);if(t&&n)return{start:t,end:n}}function ki(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?ji(e.position):`start`in e||`end`in e?ji(e):`line`in e||`column`in e?Ai(e):``}function Ai(e){return Mi(e&&e.line)+`:`+Mi(e&&e.column)}function ji(e){return Ai(e&&e.start)+`-`+Ai(e&&e.end)}function Mi(e){return e&&typeof e==`number`?e:1}var Ni=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=ki(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Ni.prototype.file=``,Ni.prototype.name=``,Ni.prototype.reason=``,Ni.prototype.message=``,Ni.prototype.stack=``,Ni.prototype.column=void 0,Ni.prototype.line=void 0,Ni.prototype.ancestors=void 0,Ni.prototype.cause=void 0,Ni.prototype.fatal=void 0,Ni.prototype.place=void 0,Ni.prototype.ruleId=void 0,Ni.prototype.source=void 0;var Pi=l(wi(),1),Fi={}.hasOwnProperty,Ii=new Map,Li=/[A-Z]/g,Ri=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),zi=new Set([`td`,`th`]),Bi=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function Vi(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=Qi(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=Zi(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?vi:_i,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Hi(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Hi(e,t,n){if(t.type===`element`)return Ui(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return Wi(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return Ki(e,t,n);if(t.type===`mdxjsEsm`)return Gi(e,t);if(t.type===`root`)return qi(e,t,n);if(t.type===`text`)return Ji(e,t)}function Ui(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=vi,e.schema=i),e.ancestors.push(t);let a=ia(e,t.tagName,!1),o=$i(e,t),s=ta(e,t);return Ri.has(t.tagName)&&(s=s.filter(function(e){return typeof e==`string`?!Rr(e):!0})),Yi(e,o,a,t),Xi(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Wi(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}aa(e,t.position)}function Gi(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);aa(e,t.position)}function Ki(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=vi,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:ia(e,t.name,!0),o=ea(e,t),s=ta(e,t);return Yi(e,o,a,t),Xi(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function qi(e,t,n){let r={};return Xi(r,ta(e,t)),e.create(t,e.Fragment,r,n)}function Ji(e,t){return t.value}function Yi(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Xi(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function Zi(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function Qi(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Ei(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function $i(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Fi.call(t.properties,i)){let a=na(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&zi.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function ea(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`)if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else aa(e,t.position);else{let i=r.name,a;if(r.value&&typeof r.value==`object`)if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else aa(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function ta(e,t){let n=[],r=-1,i=e.passKeys?new Map:Ii;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Hi(e,a,o);s!==void 0&&n.push(s)}return n}function na(e,t,n){let r=mi(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Mr(n):bi(n)),r.property===`style`){let t=typeof n==`object`?n:ra(e,String(n));return e.stylePropertyNameCase===`css`&&(t=oa(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?ui[r.property]||r.property:r.attribute,n]}}function ra(e,t){try{return(0,Pi.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Ni("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=Bi+`#cannot-parse-style-attribute`,r}}function ia(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=Ir(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=Ir(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Fi.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);aa(e)}function aa(e,t){let n=new Ni("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=Bi+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function oa(e){let t={},n;for(n in e)Fi.call(e,n)&&(t[sa(n)]=e[n]);return t}function sa(e){let t=e.replace(Li,ca);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function ca(e){return`-`+e.toLowerCase()}var la={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},ua={};function da(e,t){let n=t||ua;return fa(e,typeof n.includeImageAlt==`boolean`?n.includeImageAlt:!0,typeof n.includeHtml==`boolean`?n.includeHtml:!0)}function fa(e,t,n){if(ma(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return pa(e.children,t,n)}return Array.isArray(e)?pa(e,t,n):``}function pa(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=fa(e[i],t,n);return r.join(``)}function ma(e){return!!(e&&typeof e==`object`)}var ha=document.createElement(`i`);function ga(e){let t=`&`+e+`;`;ha.innerHTML=t;let n=ha.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`||n===t?!1:n}function _a(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function va(e,t){return e.length>0?(_a(e,e.length,0,t),e):t}var ya={}.hasOwnProperty;function ba(e){let t={},n=-1;for(;++n<e.length;)xa(t,e[n]);return t}function xa(e,t){let n;for(n in t){let r=(ya.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){ya.call(r,a)||(r[a]=[]);let e=i[a];Sa(r[a],Array.isArray(e)?e:e?[e]:[])}}}function Sa(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);_a(e,0,0,r)}function Ca(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function wa(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var Ta=Ia(/[A-Za-z]/),Ea=Ia(/[\dA-Za-z]/),Da=Ia(/[#-'*+\--9=?A-Z^-~]/);function Oa(e){return e!==null&&(e<32||e===127)}var ka=Ia(/\d/),Aa=Ia(/[\dA-Fa-f]/),ja=Ia(/[!-/:-@[-`{-~]/);function N(e){return e!==null&&e<-2}function Ma(e){return e!==null&&(e<0||e===32)}function Na(e){return e===-2||e===-1||e===32}var Pa=Ia(/\p{P}|\p{S}/u),Fa=Ia(/\s/);function Ia(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function La(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Ea(e.charCodeAt(n+1))&&Ea(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function P(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return Na(r)?(e.enter(n),s(r)):t(r)}function s(r){return Na(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var Ra={tokenize:za};function za(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),P(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return N(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Ba={tokenize:Ha},Va={tokenize:Ua};function Ha(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return _a(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Va,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Va,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return N(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;_a(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-- >r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Ua(e,t,n){return P(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function Wa(e){if(e===null||Ma(e)||Fa(e))return 1;if(Pa(e))return 2}function Ga(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Ka={name:`attention`,resolveAll:qa,tokenize:Ja};function qa(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};Ya(d,-c),Ya(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=va(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=va(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=va(l,Ga(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=va(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=va(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,_a(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Ja(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Wa(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=Wa(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Ya(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Xa={name:`autolink`,tokenize:Za};function Za(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return Ta(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Ea(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Ea(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Oa(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Da(t)?(e.consume(t),l):n(t)}function u(e){return Ea(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Ea(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var Qa={partial:!0,tokenize:$a};function $a(e,t,n){return r;function r(t){return Na(t)?P(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||N(e)?t(e):n(e)}}var eo={continuation:{tokenize:no},exit:ro,name:`blockQuote`,tokenize:to};function to(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return Na(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function no(e,t,n){let r=this;return i;function i(t){return Na(t)?P(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(eo,t,n)(r)}}function ro(e){e.exit(`blockQuote`)}var io={name:`characterEscape`,tokenize:ao};function ao(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return ja(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var oo={name:`characterReference`,tokenize:so};function so(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Ea,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Aa,u):(e.enter(`characterReferenceValue`),a=7,o=ka,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Ea&&!ga(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var co={partial:!0,tokenize:fo},lo={concrete:!0,name:`codeFenced`,tokenize:uo};function uo(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),Na(t)?P(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||N(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(co,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||N(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):Na(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),P(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||N(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||N(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&Na(t)?P(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||N(t)?e.check(co,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||N(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),Na(t)?P(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),Na(t)?P(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||N(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function fo(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var po={name:`codeIndented`,tokenize:ho},mo={partial:!0,tokenize:go};function ho(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),P(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):N(t)?e.attempt(mo,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||N(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function go(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):N(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):P(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):N(e)?i(e):n(e)}}var _o={name:`codeText`,previous:F,resolve:vo,tokenize:yo};function vo(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function F(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function yo(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):N(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||N(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var bo=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&xo(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),xo(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),xo(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let t=this.left.splice(e,1/0);xo(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);xo(this.left,t.reverse())}}};function xo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function So(e){let t={},n=-1,r,i,a,o,s,c,l,u=new bo(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,Co(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(!(o[1].type===`linePrefix`||o[1].type===`listItemIndent`))break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return _a(e,0,1/0,u.slice(0)),!l}function Co(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var wo={resolve:Eo,tokenize:Do},To={partial:!0,tokenize:Oo};function Eo(e){return So(e),e}function Do(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):N(t)?e.check(To,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function Oo(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),P(e,a,`linePrefix`)}function a(i){if(i===null||N(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function ko(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Oa(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||N(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||Ma(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Oa(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Ao(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):N(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||N(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!Na(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function jo(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):N(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),P(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||N(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Mo(e,t){let n;return r;function r(i){return N(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):Na(i)?P(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var No={name:`definition`,tokenize:Fo},Po={partial:!0,tokenize:Io};function Fo(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Ao.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=wa(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return Ma(t)?Mo(e,l)(t):l(t)}function l(t){return ko(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(Po,d,d)(t)}function d(t){return Na(t)?P(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||N(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function Io(e,t,n){return r;function r(t){return Ma(t)?Mo(e,i)(t):n(t)}function i(t){return jo(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return Na(t)?P(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||N(e)?t(e):n(e)}}var Lo={name:`hardBreakEscape`,tokenize:Ro};function Ro(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return N(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var zo={name:`headingAtx`,resolve:Bo,tokenize:Vo};function Bo(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},_a(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function Vo(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||Ma(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||N(n)?(e.exit(`atxHeading`),t(n)):Na(n)?P(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||Ma(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Ho=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Uo=[`pre`,`script`,`style`,`textarea`],Wo={concrete:!0,name:`htmlFlow`,resolveTo:qo,tokenize:Jo},Go={partial:!0,tokenize:Xo},Ko={partial:!0,tokenize:Yo};function qo(e){let t=e.length;for(;t--&&!(e[t][0]===`enter`&&e[t][1].type===`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Jo(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:k):Ta(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):Ta(a)?(e.consume(a),i=4,r.interrupt?t:k):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:k):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:O:m):n(i)}function h(t){return Ta(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||Ma(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&Uo.includes(l)?(i=1,r.interrupt?t(s):O(s)):Ho.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):O(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Ea(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:O):n(i)}function v(t){return Na(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||Ta(t)?(e.consume(t),b):Na(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||Ea(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):Na(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):Na(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||N(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||Ma(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||Na(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),D):n(t)}function D(t){return t===null||N(t)?O(t):Na(t)?(e.consume(t),D):n(t)}function O(t){return t===45&&i===2?(e.consume(t),re):t===60&&i===1?(e.consume(t),ie):t===62&&i===4?(e.consume(t),se):t===63&&i===3?(e.consume(t),k):t===93&&i===5?(e.consume(t),oe):N(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(Go,ce,ee)(t)):t===null||N(t)?(e.exit(`htmlFlowData`),ee(t)):(e.consume(t),O)}function ee(t){return e.check(Ko,te,ce)(t)}function te(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ne}function ne(t){return t===null||N(t)?ee(t):(e.enter(`htmlFlowData`),O(t))}function re(t){return t===45?(e.consume(t),k):O(t)}function ie(t){return t===47?(e.consume(t),o=``,ae):O(t)}function ae(t){if(t===62){let n=o.toLowerCase();return Uo.includes(n)?(e.consume(t),se):O(t)}return Ta(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),ae):O(t)}function oe(t){return t===93?(e.consume(t),k):O(t)}function k(t){return t===62?(e.consume(t),se):t===45&&i===2?(e.consume(t),k):O(t)}function se(t){return t===null||N(t)?(e.exit(`htmlFlowData`),ce(t)):(e.consume(t),se)}function ce(n){return e.exit(`htmlFlow`),t(n)}}function Yo(e,t,n){let r=this;return i;function i(t){return N(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Xo(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(Qa,t,n)}}var Zo={name:`htmlText`,tokenize:Qo};function Qo(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):Ta(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):Ta(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):N(t)?(o=d,ie(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?re(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):N(t)?(o=h,ie(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?re(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?re(t):N(t)?(o=v,ie(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):N(t)?(o=y,ie(t)):(e.consume(t),y)}function b(e){return e===62?re(e):y(e)}function x(t){return Ta(t)?(e.consume(t),S):n(t)}function S(t){return t===45||Ea(t)?(e.consume(t),S):C(t)}function C(t){return N(t)?(o=C,ie(t)):Na(t)?(e.consume(t),C):re(t)}function w(t){return t===45||Ea(t)?(e.consume(t),w):t===47||t===62||Ma(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),re):t===58||t===95||Ta(t)?(e.consume(t),E):N(t)?(o=T,ie(t)):Na(t)?(e.consume(t),T):re(t)}function E(t){return t===45||t===46||t===58||t===95||Ea(t)?(e.consume(t),E):D(t)}function D(t){return t===61?(e.consume(t),O):N(t)?(o=D,ie(t)):Na(t)?(e.consume(t),D):T(t)}function O(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,ee):N(t)?(o=O,ie(t)):Na(t)?(e.consume(t),O):(e.consume(t),te)}function ee(t){return t===i?(e.consume(t),i=void 0,ne):t===null?n(t):N(t)?(o=ee,ie(t)):(e.consume(t),ee)}function te(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||Ma(t)?T(t):(e.consume(t),te)}function ne(e){return e===47||e===62||Ma(e)?T(e):n(e)}function re(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function ie(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ae}function ae(t){return Na(t)?P(e,oe,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):oe(t)}function oe(t){return e.enter(`htmlTextData`),o(t)}}var $o={name:`labelEnd`,resolveAll:rs,resolveTo:is,tokenize:as},es={tokenize:os},ts={tokenize:ss},ns={tokenize:cs};function rs(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&_a(e,0,e.length,n),e}function is(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=va(s,e.slice(a+1,a+r+3)),s=va(s,[[`enter`,u,t]]),s=va(s,Ga(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=va(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=va(s,e.slice(o+1)),s=va(s,[[`exit`,c,t]]),_a(e,a,e.length,s),e}function as(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(wa(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(es,u,o?u:d)(t):t===91?e.attempt(ts,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(ns,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function os(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return Ma(t)?Mo(e,a)(t):a(t)}function a(t){return t===41?u(t):ko(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return Ma(t)?Mo(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?jo(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return Ma(t)?Mo(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function ss(e,t,n){let r=this;return i;function i(t){return Ao.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(wa(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function cs(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var ls={name:`labelStartImage`,resolveAll:$o.resolveAll,tokenize:us};function us(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var ds={name:`labelStartLink`,resolveAll:$o.resolveAll,tokenize:fs};function fs(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var ps={name:`lineEnding`,tokenize:ms};function ms(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),P(e,t,`linePrefix`)}}var hs={name:`thematicBreak`,tokenize:gs};function gs(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||N(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),Na(t)?P(e,s,`whitespace`)(t):s(t))}}var _s={continuation:{tokenize:xs},exit:Cs,name:`list`,tokenize:bs},vs={partial:!0,tokenize:ws},ys={partial:!0,tokenize:Ss};function bs(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:ka(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(hs,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return ka(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(Qa,r.interrupt?n:u,e.attempt(vs,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return Na(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function xs(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Qa,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,P(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!Na(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(ys,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,P(e,e.attempt(_s,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function Ss(e,t,n){let r=this;return P(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Cs(e){e.exit(this.containerState.type)}function ws(e,t,n){let r=this;return P(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!Na(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Ts={name:`setextUnderline`,resolveTo:Es,tokenize:Ds};function Es(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function Ds(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),Na(t)?P(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||N(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Os={tokenize:ks};function ks(e){let t=this,n=e.attempt(Qa,r,e.attempt(this.parser.constructs.flowInitial,i,P(e,e.attempt(this.parser.constructs.flow,i,e.attempt(wo,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var As={resolveAll:Ps()},js=Ns(`string`),Ms=Ns(`text`);function Ns(e){return{resolveAll:Ps(e===`text`?Fs:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Ps(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Fs(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var Is=s({attentionMarkers:()=>Ws,contentInitial:()=>Rs,disable:()=>Gs,document:()=>Ls,flow:()=>Bs,flowInitial:()=>zs,insideSpan:()=>Us,string:()=>Vs,text:()=>Hs}),Ls={42:_s,43:_s,45:_s,48:_s,49:_s,50:_s,51:_s,52:_s,53:_s,54:_s,55:_s,56:_s,57:_s,62:eo},Rs={91:No},zs={[-2]:po,[-1]:po,32:po},Bs={35:zo,42:hs,45:[Ts,hs],60:Wo,61:Ts,95:hs,96:lo,126:lo},Vs={38:oo,92:io},Hs={[-5]:ps,[-4]:ps,[-3]:ps,33:ls,38:oo,42:Ka,60:[Xa,Zo],91:ds,92:[Lo,io],93:$o,95:Ka,96:_o},Us={null:[Ka,As]},Ws={null:[42,95]},Gs={null:[]};function Ks(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=va(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=Ga(a,l.events,l),l.events):[]}function f(e,t){return Js(p(e),t)}function p(e){return qs(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){N(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&_a(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function qs(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Js(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function Ys(e){let t={constructs:ba([Is,...(e||{}).extensions||[]]),content:n(Ra),defined:[],document:n(Ba),flow:n(Os),lazy:{},string:n(js),text:n(Ms)};return t;function n(e){return n;function n(n){return Ks(t,e,n)}}}function Xs(e){for(;!So(e););return e}var Zs=/[\0\t\n\r]/g;function Qs(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(Zs.lastIndex=u,c=Zs.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var $s=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ec(e){return e.replace($s,tc)}function tc(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return Ca(n.slice(t?2:1),t?16:10)}return ga(n)||e}var nc={}.hasOwnProperty;function rc(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),ic(n)(Xs(Ys(n).document().write(Qs()(e,t,!0))))}function ic(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(Te),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(xe),blockQuote:a(ge),characterEscape:T,characterReference:T,codeFenced:a(_e),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(_e,o),codeText:a(ve,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(ye),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(be),hardBreakEscape:a(Se),hardBreakTrailing:a(Se),htmlFlow:a(Ce,o),htmlFlowData:T,htmlText:a(Ce,o),htmlTextData:T,image:a(we),label:o,link:a(Te),listItem:a(De),listItemValue:f,listOrdered:a(Ee,d),listUnordered:a(Ee),paragraph:a(Oe),reference:le,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(xe),strong:a(ke),thematicBreak:a(je)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:he,autolinkProtocol:me,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:de,characterReferenceMarkerNumeric:de,characterReferenceValue:fe,characterReference:pe,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(ne),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(O),hardBreakTrailing:c(O),htmlFlow:c(ee),htmlFlowData:E,htmlText:c(te),htmlTextData:E,image:c(ie),label:oe,labelText:ae,lineEnding:D,link:c(re),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ue,resourceDestinationString:k,resourceTitleString:se,resource:ce,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};oc(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];nc.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||cc).call(a,void 0,e[0])}for(r.position={start:ac(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:ac(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(!(t[1].type===`linePrefix`||t[1].type===`blockQuotePrefix`||t[1].type===`blockQuotePrefixWhitespace`||t[1].type===`blockQuoteMarker`||t[1].type===`listItemIndent`))break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:ac(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||cc).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+ki({start:e.start,end:e.end})+`): it’s not open`);n.position.end=ac(e.end)}function u(){return da(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=wa(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Ae(),n.position={start:ac(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=ac(e.end)}function D(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=ac(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function O(){this.data.atHardBreak=!0}function ee(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ie(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ae(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=ec(t),n.identifier=wa(t).toLowerCase()}function oe(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function k(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function se(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function ce(){this.data.inReference=void 0}function le(){this.data.referenceType=`collapsed`}function ue(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=wa(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function de(e){this.data.characterReferenceType=e.type}function fe(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=Ca(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=ga(t);let i=this.stack[this.stack.length-1];i.value+=r}function pe(e){let t=this.stack.pop();t.position.end=ac(e.end)}function me(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function he(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function ge(){return{type:`blockquote`,children:[]}}function _e(){return{type:`code`,lang:null,meta:null,value:``}}function ve(){return{type:`inlineCode`,value:``}}function ye(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function be(){return{type:`emphasis`,children:[]}}function xe(){return{type:`heading`,depth:0,children:[]}}function Se(){return{type:`break`}}function Ce(){return{type:`html`,value:``}}function we(){return{type:`image`,title:null,url:``,alt:null}}function Te(){return{type:`link`,title:null,url:``,children:[]}}function Ee(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function De(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Oe(){return{type:`paragraph`,children:[]}}function ke(){return{type:`strong`,children:[]}}function Ae(){return{type:`text`,value:``}}function je(){return{type:`thematicBreak`}}}function ac(e){return{line:e.line,column:e.column,offset:e.offset}}function oc(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?oc(e,r):sc(e,r)}}function sc(e,t){let n;for(n in t)if(nc.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function cc(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+ki({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ki({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+ki({start:t.start,end:t.end})+`) is still open`)}function lc(e){let t=this;t.parser=n;function n(n){return rc(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function uc(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function dc(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function fc(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function pc(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function mc(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function hc(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=La(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function gc(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function _c(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function vc(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function yc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return vc(e,t);let i={src:La(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function bc(e,t){let n={src:La(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function xc(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Sc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return vc(e,t);let i={href:La(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Cc(e,t){let n={href:La(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function wc(e,t,n){let r=e.all(t),i=n?Tc(n):Ec(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Tc(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Ec(n[r])}return t}function Ec(e){return e.spread??e.children.length>1}function Dc(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Oc(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kc(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Ac(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function jc(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Ei(t.children[1]),o=Ti(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Mc(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Nc(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Pc=9,Fc=32;function Ic(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Lc(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Lc(t.slice(i),i>0,!1)),a.join(``)}function Lc(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Pc||t===Fc;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Pc||t===Fc;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Rc(e,t){let n={type:`text`,value:Ic(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function zc(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Bc={blockquote:uc,break:dc,code:fc,delete:pc,emphasis:mc,footnoteReference:hc,heading:gc,html:_c,imageReference:yc,image:bc,inlineCode:xc,linkReference:Sc,link:Cc,listItem:wc,list:Dc,paragraph:Oc,root:kc,strong:Ac,table:jc,tableCell:Nc,tableRow:Mc,text:Rc,thematicBreak:zc,toml:Vc,yaml:Vc,definition:Vc,footnoteDefinition:Vc};function Vc(){}var Hc=typeof self==`object`?self:globalThis,Uc=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Hc[e](t)},Wc=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(Uc(e,t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(Uc(a,o),i)};return r},Gc=e=>Wc(new Map,e)(0),Kc=``,{toString:qc}={},{keys:Jc}=Object,Yc=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=qc.call(e).slice(8,-1);switch(n){case`Array`:return[1,Kc];case`Object`:return[2,Kc];case`Date`:return[3,Kc];case`RegExp`:return[4,Kc];case`Map`:return[5,Kc];case`Set`:return[6,Kc];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:n.includes(`Error`)?[7,n]:[2,n]},Xc=([e,t])=>e===0&&(t===`function`||t===`symbol`),Zc=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=Yc(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of Jc(r))(e||!Xc(Yc(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(Xc(Yc(n))||Xc(Yc(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!Xc(Yc(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},Qc=(e,{json:t,lossy:n}={})=>{let r=[];return Zc(!(t||n),!!t,new Map,r)(e),r},$c=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?Gc(Qc(e,t)):structuredClone(e):(e,t)=>Gc(Qc(e,t));function el(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function tl(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function nl(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||el,r=e.options.footnoteBackLabel||tl,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=La(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...$c(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var rl=(function(e){if(e==null)return cl;if(typeof e==`function`)return sl(e);if(typeof e==`object`)return Array.isArray(e)?il(e):al(e);if(typeof e==`string`)return ol(e);throw Error(`Expected function, string, or object as test`)});function il(e){let t=[],n=-1;for(;++n<e.length;)t[n]=rl(e[n]);return sl(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function al(e){let t=e;return sl(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function ol(e){return sl(t);function t(t){return t&&t.type===e}}function sl(e){return t;function t(t,n,r){return!!(ll(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function cl(){return!0}function ll(e){return typeof e==`object`&&!!e&&`type`in e}function ul(e){return e}var dl=[],fl=`skip`;function pl(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=rl(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,`name`,{value:`node (`+ul(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=dl,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=ml(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function ml(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?dl:[e]}function hl(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),pl(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var gl={}.hasOwnProperty,_l={};function vl(e,t){let n=t||_l,r=new Map,i=new Map,a={all:s,applyData:bl,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...Bc,...n.handlers},one:o,options:n,patch:yl,wrap:Sl};return hl(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(gl.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=$c(n);return r.children=a.all(e),r}return $c(e)}return(a.options.unknownHandler||xl)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=Cl(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=Cl(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function yl(e,t){e.position&&(t.position=Oi(e))}function bl(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,$c(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function xl(e,t){let n=t.data||{},r=`value`in t&&!(gl.call(n,`hProperties`)||gl.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Sl(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Cl(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function wl(e,t){let n=vl(e,t),r=n.one(e,void 0),i=nl(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function Tl(e,t){return e&&`run`in e?async function(n,r){let i=wl(n,{file:r,...t});await e.run(i,r)}:function(n,r){return wl(n,{file:r,...e||t})}}function El(e){if(e)throw e}var Dl=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function Ol(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function kl(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?Al(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function Al(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var jl={basename:Ml,dirname:Nl,extname:Pl,join:Fl,sep:`/`};function Ml(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);Rl(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function Nl(e){if(Rl(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function Pl(e){Rl(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function Fl(...e){let t=-1,n;for(;++t<e.length;)Rl(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Il(n)}function Il(e){Rl(e);let t=e.codePointAt(0)===47,n=Ll(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function Ll(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Rl(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var zl={cwd:Bl};function Bl(){return`/`}function Vl(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function Hl(e){if(typeof e==`string`)e=new URL(e);else if(!Vl(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return Ul(e)}function Ul(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Wl=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],Gl=class{constructor(e){let t;t=e?Vl(e)?{path:e}:typeof e==`string`||Yl(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:zl.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Wl.length;){let e=Wl[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Wl.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?jl.basename(this.path):void 0}set basename(e){ql(e,`basename`),Kl(e,`basename`),this.path=jl.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?jl.dirname(this.path):void 0}set dirname(e){Jl(this.basename,`dirname`),this.path=jl.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?jl.extname(this.path):void 0}set extname(e){if(Kl(e,`extname`),Jl(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=jl.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Vl(e)&&(e=Hl(e)),ql(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?jl.basename(this.path,this.extname):void 0}set stem(e){ql(e,`stem`),Kl(e,`stem`),this.path=jl.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Ni(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Kl(e,t){if(e&&e.includes(jl.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+jl.sep+"`")}function ql(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Jl(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function Yl(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Xl=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),Zl=l(Dl(),1),Ql={}.hasOwnProperty,$l=new class e extends Xl{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=kl()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,Zl.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(nu(`data`,this.frozen),this.namespace[e]=t,this):Ql.call(this.namespace,e)&&this.namespace[e]||void 0:e?(nu(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=au(e),n=this.parser||this.Parser;return eu(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),eu(`process`,this.parser||this.Parser),tu(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=au(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);su(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),eu(`processSync`,this.parser||this.Parser),tu(`processSync`,this.compiler||this.Compiler),this.process(e,r),iu(`processSync`,`process`,t),n;function r(e,r){t=!0,El(e),n=r}}run(e,t,n){ru(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=au(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),iu(`runSync`,`run`,n),r;function i(e,t){El(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=au(t),r=this.compiler||this.Compiler;return tu(`stringify`,r),ru(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(nu(`use`,this.frozen),e!=null)if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e);else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,Zl.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null)if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];Ol(o)&&Ol(r)&&(r=(0,Zl.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function eu(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function tu(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function nu(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ru(e){if(!Ol(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function iu(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function au(e){return ou(e)?e:new Gl(e)}function ou(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function su(e){return typeof e==`string`||cu(e)}function cu(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var lu=[],uu={allowDangerousHtml:!0},du=/^(https?|ircs?|mailto|xmpp)$/i,fu=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function pu(e){let t=mu(e),n=hu(e);return gu(t.runSync(t.parse(n),n),e)}function mu(e){let t=e.rehypePlugins||lu,n=e.remarkPlugins||lu,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...uu}:uu;return $l().use(lc).use(n).use(Tl,r).use(t)}function hu(e){let t=e.children||``,n=new Gl;return typeof t==`string`?n.value=t:``+t,n}function gu(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||_u;for(let e of fu)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return hl(e,l),Vi(e,{Fragment:A.Fragment,components:i,ignoreInvalidStyle:!0,jsx:A.jsx,jsxs:A.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in la)if(Object.hasOwn(la,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=la[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function _u(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||du.test(e.slice(0,t))?e:``}function vu(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function yu(){return{enter:{mathFlow:e,mathFlowFenceMeta:t,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:s,mathText:o,mathTextData:s}};function e(e){this.enter({type:`math`,meta:null,value:``,data:{hName:`pre`,hChildren:[{type:`element`,tagName:`code`,properties:{className:[`language-math`,`math-display`]},children:[]}]}},e)}function t(){this.buffer()}function n(){let e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.meta=e}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(e){let t=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),n=this.stack[this.stack.length-1];n.type,this.exit(e),n.value=t;let r=n.data.hChildren[0];r.type,r.tagName,r.children.push({type:`text`,value:t}),this.data.mathFlowInside=void 0}function a(e){this.enter({type:`inlineMath`,value:``,data:{hName:`code`,hProperties:{className:[`language-math`,`math-inline`]},hChildren:[]}},e),this.buffer()}function o(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,this.exit(e),n.value=t,n.data.hChildren.push({type:`text`,value:t})}function s(e){this.config.enter.data.call(this,e),this.config.exit.data.call(this,e)}}function bu(e){let t=(e||{}).singleDollarTextMath;return t??=!0,r.peek=i,{unsafe:[{character:`\r`,inConstruct:`mathFlowMeta`},{character:`
`,inConstruct:`mathFlowMeta`},{character:`$`,after:t?void 0:`\\$`,inConstruct:`phrasing`},{character:`$`,inConstruct:`mathFlowMeta`},{atBreak:!0,character:`$`,after:`\\$`}],handlers:{math:n,inlineMath:r}};function n(e,t,n,r){let i=e.value||``,a=n.createTracker(r),o=`$`.repeat(Math.max(vu(i,`$`)+1,2)),s=n.enter(`mathFlow`),c=a.move(o);if(e.meta){let t=n.enter(`mathFlowMeta`);c+=a.move(n.safe(e.meta,{after:`
`,before:c,encode:[`$`],...a.current()})),t()}return c+=a.move(`
`),i&&(c+=a.move(i+`
`)),c+=a.move(o),s(),c}function r(e,n,r){let i=e.value||``,a=1;for(t||a++;RegExp(`(^|[^$])`+`\\$`.repeat(a)+`([^$]|$)`).test(i);)a++;let o=`$`.repeat(a);/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^\$|\$$/.test(i))&&(i=` `+i+` `);let s=-1;for(;++s<r.unsafe.length;){let e=r.unsafe[s];if(!e.atBreak)continue;let t=r.compilePattern(e),n;for(;n=t.exec(i);){let e=n.index;i.codePointAt(e)===10&&i.codePointAt(e-1)===13&&e--,i=i.slice(0,e)+` `+i.slice(n.index+1)}}return o+i+o}function i(){return`$`}}var xu={tokenize:Cu,concrete:!0,name:`mathFlow`},Su={tokenize:wu,partial:!0};function Cu(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){return e.enter(`mathFlow`),e.enter(`mathFlowFence`),e.enter(`mathFlowFenceSequence`),c(t)}function c(t){return t===36?(e.consume(t),o++,c):o<2?n(t):(e.exit(`mathFlowFenceSequence`),P(e,l,`whitespace`)(t))}function l(t){return t===null||N(t)?d(t):(e.enter(`mathFlowFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===null||N(t)?(e.exit(`chunkString`),e.exit(`mathFlowFenceMeta`),d(t)):t===36?n(t):(e.consume(t),u)}function d(n){return e.exit(`mathFlowFence`),r.interrupt?t(n):e.attempt(Su,f,g)(n)}function f(t){return e.attempt({tokenize:_,partial:!0},g,p)(t)}function p(t){return(a?P(e,m,`linePrefix`,a+1):m)(t)}function m(t){return t===null?g(t):N(t)?e.attempt(Su,f,g)(t):(e.enter(`mathFlowValue`),h(t))}function h(t){return t===null||N(t)?(e.exit(`mathFlowValue`),m(t)):(e.consume(t),h)}function g(n){return e.exit(`mathFlow`),t(n)}function _(e,t,n){let i=0;return P(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4);function a(t){return e.enter(`mathFlowFence`),e.enter(`mathFlowFenceSequence`),s(t)}function s(t){return t===36?(i++,e.consume(t),s):i<o?n(t):(e.exit(`mathFlowFenceSequence`),P(e,c,`whitespace`)(t))}function c(r){return r===null||N(r)?(e.exit(`mathFlowFence`),t(r)):n(r)}}}function wu(e,t,n){let r=this;return i;function i(n){return n===null?t(n):(e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Tu(e){let t=(e||{}).singleDollarTextMath;return t??=!0,{tokenize:n,resolve:Eu,previous:Du,name:`mathText`};function n(e,n,r){let i=0,a,o;return s;function s(t){return e.enter(`mathText`),e.enter(`mathTextSequence`),c(t)}function c(n){return n===36?(e.consume(n),i++,c):i<2&&!t?r(n):(e.exit(`mathTextSequence`),l(n))}function l(t){return t===null?r(t):t===36?(o=e.enter(`mathTextSequence`),a=0,d(t)):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),l):N(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),l):(e.enter(`mathTextData`),u(t))}function u(t){return t===null||t===32||t===36||N(t)?(e.exit(`mathTextData`),l(t)):(e.consume(t),u)}function d(t){return t===36?(e.consume(t),a++,d):a===i?(e.exit(`mathTextSequence`),e.exit(`mathText`),n(t)):(o.type=`mathTextData`,u(t))}}}function Eu(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`mathTextData`){e[t][1].type=`mathTextPadding`,e[n][1].type=`mathTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`mathTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Du(e){return e!==36||this.events[this.events.length-1][1].type===`characterEscape`}function Ou(e){return{flow:{36:xu},text:{36:Tu(e)}}}var I=class e extends Error{constructor(t,n){var r=`KaTeX parse error: `+t,i,a,o=n&&n.loc;if(o&&o.start<=o.end){var s=o.lexer.input;i=o.start,a=o.end,i===s.length?r+=` at end of input: `:r+=` at position `+(i+1)+`: `;var c=s.slice(i,a).replace(/[^]/g,`$&̲`),l=i>15?`…`+s.slice(i-15,i):s.slice(0,i),u=a+15<s.length?s.slice(a,a+15)+`…`:s.slice(a);r+=l+c+u}super(r),this.name=`ParseError`,this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,e.prototype),this.position=i,i!=null&&a!=null&&(this.length=a-i),this.rawMessage=t}},ku=/([A-Z])/g,Au=e=>e.replace(ku,`-$1`).toLowerCase(),ju={"&":`&amp;`,">":`&gt;`,"<":`&lt;`,'"':`&quot;`,"'":`&#x27;`},Mu=/[&><"']/g,Nu=e=>String(e).replace(Mu,e=>ju[e]),Pu=e=>e.type===`ordgroup`||e.type===`color`?e.body.length===1?Pu(e.body[0]):e:e.type===`font`?Pu(e.body):e,Fu=new Set([`mathord`,`textord`,`atom`]),Iu=e=>Fu.has(Pu(e).type),Lu=e=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==`:`||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():`_relative`},Ru={displayMode:{type:`boolean`,description:`Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.`,cli:`-d, --display-mode`},output:{type:{enum:[`htmlAndMathml`,`html`,`mathml`]},description:`Determines the markup language of the output.`,cli:`-F, --format <type>`},leqno:{type:`boolean`,description:`Render display math in leqno style (left-justified tags).`},fleqn:{type:`boolean`,description:`Render display math flush left.`},throwOnError:{type:`boolean`,default:!0,cli:`-t, --no-throw-on-error`,cliDescription:`Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.`},errorColor:{type:`string`,default:`#cc0000`,cli:`-c, --error-color <color>`,cliDescription:`A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.`,cliProcessor:e=>`#`+e},macros:{type:`object`,cli:`-m, --macro <def>`,cliDescription:`Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).`,cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:`number`,description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:`--min-rule-thickness <size>`,cliProcessor:parseFloat},colorIsTextColor:{type:`boolean`,description:`Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.`,cli:`-b, --color-is-text-color`},strict:{type:[{enum:[`warn`,`ignore`,`error`]},`boolean`,`function`],description:`Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.`,cli:`-S, --strict`,cliDefault:!1},trust:{type:[`boolean`,`function`],description:`Trust the input, enabling all HTML features such as \\url.`,cli:`-T, --trust`},maxSize:{type:`number`,default:1/0,description:`If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large`,processor:e=>Math.max(0,e),cli:`-s, --max-size <n>`,cliProcessor:parseInt},maxExpand:{type:`number`,default:1e3,description:`Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.`,processor:e=>Math.max(0,e),cli:`-e, --max-expand <n>`,cliProcessor:e=>e===`Infinity`?1/0:parseInt(e)},globalGroup:{type:`boolean`,cli:!1}};function zu(e){if(typeof e!=`string`)return e.enum[0];switch(e){case`boolean`:return!1;case`string`:return``;case`number`:return 0;case`object`:return{};default:throw Error(`Unexpected schema type; settings must declare an explicit default.`)}}function Bu(e){return e.default===void 0?zu(Array.isArray(e.type)?e.type[0]:e.type):e.default}function Vu(e,t,n,r){var i=n[t];e[t]=i===void 0?Bu(r):r.processor?r.processor(i):i}var Hu=class{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e||={};for(var t of Object.keys(Ru)){var n=Ru[t];n&&Vu(this,t,e,n)}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r==`function`&&(r=r(e,t,n)),!(!r||r===`ignore`)){if(r===!0||r===`error`)throw new I(`LaTeX-incompatible input and strict mode is set to 'error': `+(t+` [`+e+`]`),n);r===`warn`?typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(t+` [`+e+`]`)):typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to `+(`unrecognized '`+r+`': `+t+` [`+e+`]`))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r==`function`)try{r=r(e,t,n)}catch{r=`error`}return!r||r===`ignore`?!1:r===!0||r===`error`?!0:r===`warn`?(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(t+` [`+e+`]`)),!1):(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to `+(`unrecognized '`+r+`': `+t+` [`+e+`]`)),!1)}isTrusted(e){if(`url`in e&&e.url&&!e.protocol){var t=Lu(e.url);if(t==null)return!1;e.protocol=t}return!!(typeof this.trust==`function`?this.trust(e):this.trust)}},Uu=class{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return Qu[$u[this.id]]}sub(){return Qu[ed[this.id]]}fracNum(){return Qu[td[this.id]]}fracDen(){return Qu[nd[this.id]]}cramp(){return Qu[rd[this.id]]}text(){return Qu[id[this.id]]}isTight(){return this.size>=2}},Wu=0,Gu=1,Ku=2,qu=3,Ju=4,Yu=5,Xu=6,Zu=7,Qu=[new Uu(Wu,0,!1),new Uu(Gu,0,!0),new Uu(Ku,1,!1),new Uu(qu,1,!0),new Uu(Ju,2,!1),new Uu(Yu,2,!0),new Uu(Xu,3,!1),new Uu(Zu,3,!0)],$u=[Ju,Yu,Ju,Yu,Xu,Zu,Xu,Zu],ed=[Yu,Yu,Yu,Yu,Zu,Zu,Zu,Zu],td=[Ku,qu,Ju,Yu,Xu,Zu,Xu,Zu],nd=[qu,qu,Yu,Yu,Zu,Zu,Zu,Zu],rd=[Gu,Gu,qu,qu,Yu,Yu,Zu,Zu],id=[Wu,Gu,Ku,qu,Ku,qu,Ku,qu],L={DISPLAY:Qu[Wu],TEXT:Qu[Ku],SCRIPT:Qu[Ju],SCRIPTSCRIPT:Qu[Xu]},ad=[{name:`latin`,blocks:[[256,591],[768,879]]},{name:`cyrillic`,blocks:[[1024,1279]]},{name:`armenian`,blocks:[[1328,1423]]},{name:`brahmic`,blocks:[[2304,4255]]},{name:`georgian`,blocks:[[4256,4351]]},{name:`cjk`,blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:`hangul`,blocks:[[44032,55215]]}];function od(e){for(var t=0;t<ad.length;t++)for(var n=ad[t],r=0;r<n.blocks.length;r++){var i=n.blocks[r];if(e>=i[0]&&e<=i[1])return n.name}return null}var sd=[];ad.forEach(e=>e.blocks.forEach(e=>sd.push(...e)));function cd(e){for(var t=0;t<sd.length;t+=2)if(e>=sd[t]&&e<=sd[t+1])return!0;return!1}var ld=e=>e+` `+e,ud=80,dd=function(e,t){return`M95,`+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+` -`+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},fd=function(e,t){return`M263,`+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+` -`+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},pd=function(e,t){return`M983 `+(10+e+t)+`
l`+e/3.13+` -`+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},md=function(e,t){return`M424,`+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+` -`+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+` `+t+`
h400000v`+(40+e)+`h-400000z`},hd=function(e,t){return`M473,`+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+` -`+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+` `+t+`h400000v`+(40+e)+`H1017.7z`},gd=function(e){var t=e/2;return`M400000 `+e+` H0 L`+t+` 0 l65 45 L145 `+(e-80)+` H400000z`},_d=function(e,t,n){var r=n-54-t-e;return`M702 `+(e+t)+`H400000`+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+`H400000v`+(40+e)+`H742z`},vd=function(e,t,n){t=1e3*t;var r=``;switch(e){case`sqrtMain`:r=dd(t,ud);break;case`sqrtSize1`:r=fd(t,ud);break;case`sqrtSize2`:r=pd(t,ud);break;case`sqrtSize3`:r=md(t,ud);break;case`sqrtSize4`:r=hd(t,ud);break;case`sqrtTall`:r=_d(t,ud,n)}return r},yd=function(e,t){switch(e){case`⎜`:return ld(`M291 0 H417 V`+t+` H291z`);case`∣`:return ld(`M145 0 H188 V`+t+` H145z`);case`∥`:return ld(`M145 0 H188 V`+t+` H145z`)+ld(`M367 0 H410 V`+t+` H367z`);case`⎟`:return ld(`M457 0 H583 V`+t+` H457z`);case`⎢`:return ld(`M319 0 H403 V`+t+` H319z`);case`⎥`:return ld(`M263 0 H347 V`+t+` H263z`);case`⎪`:return ld(`M384 0 H504 V`+t+` H384z`);case`⏐`:return ld(`M312 0 H355 V`+t+` H312z`);case`‖`:return ld(`M257 0 H300 V`+t+` H257z`)+ld(`M478 0 H521 V`+t+` H478z`);default:return``}},bd={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:ld(`M40 281 V428 H0 V94 H40 V241 H400000 v40z`),leftbracketunder:ld(`M0 0 h120 V290 H399995 v120 H0z`),leftbracketover:ld(`M0 440 h120 V150 H399995 v-120 H0z`),leftmapsto:ld(`M40 281 V448H0V74H40V241H400000v40z`),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:ld(`M0 50 h400000 v40H0z m0 194h40000v40H0z`),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:ld(`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`),rightbracketunder:ld(`M399995 0 h-120 V290 H0 v120 H400000z`),rightbracketover:ld(`M399995 440 h-120 V150 H0 v-120 H399995z`),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},xd=function(e,t){switch(e){case`lbrack`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+` v1759 v84 h84z`;case`rbrack`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+` v1759 h84z`;case`vert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z`;case`doublevert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+` v585 h43z`;case`lfloor`:return`M319 602 V0 H403 V602 v`+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`rfloor`:return`M319 602 V0 H403 V602 v`+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`lceil`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+` v602 h84z`;case`rceil`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+` v602 h84z`;case`lparen`:return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case`rparen`:return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw Error(`Unknown stretchy delimiter.`)}};function Sd(e){return`toText`in e}var Cd=class{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e=``,t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(Sd(e))return e.toText();throw Error(`Expected MathDomNode with toText, got `+e.constructor.name)}).join(``)}},wd={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Td={ex:!0,em:!0,mu:!0},Ed=function(e){return typeof e!=`string`&&(e=e.unit),e in wd||e in Td||e===`ex`},Dd=function(e,t){var n;if(e.unit in wd)n=wd[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit===`mu`)n=t.fontMetrics().cssEmPerMu;else{var r=t.style.isTight()?t.havingStyle(t.style.text()):t;if(e.unit===`ex`)n=r.fontMetrics().xHeight;else if(e.unit===`em`)n=r.fontMetrics().quad;else throw new I(`Invalid unit: '`+e.unit+`'`);r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},R=function(e){return+e.toFixed(4)+`em`},Od=function(e){return e.filter(e=>e).join(` `)},kd=function(e){var t=``;for(var n of Object.keys(e)){var r=e[n];r!==void 0&&(t+=Au(n)+`:`+r+`;`)}return t},Ad=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push(`mtight`);var r=t.getColor();r&&(this.style.color=r)}},jd=function(e){var t=document.createElement(e);t.className=Od(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},Md=/[\s"'>/=\x00-\x1f]/,Nd=function(e){var t=`<`+e;this.classes.length&&(t+=` class="`+Nu(Od(this.classes))+`"`);var n=kd(this.style);n&&(t+=` style="`+Nu(n)+`"`);for(var r of Object.keys(this.attributes)){if(Md.test(r))throw new I(`Invalid attribute name '`+r+`'`);t+=` `+r+`="`+Nu(this.attributes[r])+`"`}t+=`>`;for(var i=0;i<this.children.length;i++)t+=this.children[i].toMarkup();return t+=`</`+e+`>`,t},Pd=class{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,Ad.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return jd.call(this,`span`)}toMarkup(){return Nd.call(this,`span`)}},Fd=class{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Ad.call(this,t,r),this.children=n||[],this.setAttribute(`href`,e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return jd.call(this,`a`)}toMarkup(){return Nd.call(this,`a`)}},Id=class{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=[`mord`],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement(`img`);return e.src=this.src,e.alt=this.alt,e.className=`mord`,Object.assign(e.style,this.style),e}toMarkup(){var e=`<img src="`+Nu(this.src)+`"`+(` alt="`+Nu(this.alt)+`"`),t=kd(this.style);return t&&(e+=` style="`+Nu(t)+`"`),e+=`'/>`,e}},Ld={î:`ı̂`,ï:`ı̈`,í:`ı́`,ì:`ı̀`},Rd=class{constructor(e,t,n,r,i,a,o,s){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=i||0,this.width=a||0,this.classes=o||[],this.style=s||{},this.maxFontSize=0;var c=od(this.text.charCodeAt(0));c&&this.classes.push(c+`_fallback`),/[îïíì]/.test(this.text)&&(this.text=Ld[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement(`span`),t.style.marginRight=R(this.italic)),this.classes.length>0&&(t||=document.createElement(`span`),t.className=Od(this.classes)),Object.keys(this.style).length>0&&(t||=document.createElement(`span`),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t=`<span`;this.classes.length&&(e=!0,t+=` class="`,t+=Nu(Od(this.classes)),t+=`"`);var n=``;this.italic>0&&(n+=`margin-right:`+R(this.italic)+`;`),n+=kd(this.style),n&&(e=!0,t+=` style="`+Nu(n)+`"`);var r=Nu(this.text);return e?(t+=`>`,t+=r,t+=`</span>`,t):r}},zd=class{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);for(var t of Object.keys(this.attributes))e.setAttribute(t,this.attributes[t]);for(var n=0;n<this.children.length;n++)e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<svg xmlns="http://www.w3.org/2000/svg"`;for(var t of Object.keys(this.attributes))e+=` `+t+`="`+Nu(this.attributes[t])+`"`;e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</svg>`,e}},Bd=class{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return this.alternate?e.setAttribute(`d`,this.alternate):e.setAttribute(`d`,bd[this.pathName]),e}toMarkup(){return this.alternate?`<path d="`+Nu(this.alternate)+`"/>`:`<path d="`+Nu(bd[this.pathName])+`"/>`}},Vd=class{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);for(var t of Object.keys(this.attributes))e.setAttribute(t,this.attributes[t]);return e}toMarkup(){var e=`<line`;for(var t of Object.keys(this.attributes))e+=` `+t+`="`+Nu(this.attributes[t])+`"`;return e+=`/>`,e}};function Hd(e){if(e instanceof Rd)return e;throw Error(`Expected symbolNode but got `+String(e)+`.`)}function Ud(e){if(e instanceof Pd)return e;throw Error(`Expected span<HtmlDomNode> but got `+String(e)+`.`)}var Wd=e=>e instanceof Pd||e instanceof Fd||e instanceof Cd,Gd={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Kd={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},qd={Å:`A`,Ð:`D`,Þ:`o`,å:`a`,ð:`d`,þ:`o`,А:`A`,Б:`B`,В:`B`,Г:`F`,Д:`A`,Е:`E`,Ж:`K`,З:`3`,И:`N`,Й:`N`,К:`K`,Л:`N`,М:`M`,Н:`H`,О:`O`,П:`N`,Р:`P`,С:`C`,Т:`T`,У:`y`,Ф:`O`,Х:`X`,Ц:`U`,Ч:`h`,Ш:`W`,Щ:`W`,Ъ:`B`,Ы:`X`,Ь:`B`,Э:`3`,Ю:`X`,Я:`R`,а:`a`,б:`b`,в:`a`,г:`r`,д:`y`,е:`e`,ж:`m`,з:`e`,и:`n`,й:`n`,к:`n`,л:`n`,м:`m`,н:`n`,о:`o`,п:`n`,р:`p`,с:`c`,т:`o`,у:`y`,ф:`b`,х:`x`,ц:`n`,ч:`n`,ш:`w`,щ:`w`,ъ:`a`,ы:`m`,ь:`a`,э:`e`,ю:`m`,я:`r`};function Jd(e,t){Gd[e]=t}function Yd(e,t,n){if(!Gd[t])throw Error(`Font metrics not found for font: `+t+`.`);var r=e.charCodeAt(0),i=Gd[t][r];if(!i&&e[0]in qd&&(r=qd[e[0]].charCodeAt(0),i=Gd[t][r]),!i&&n===`text`&&cd(r)&&(i=Gd[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var Xd={};function Zd(e){var t=e>=5?0:e>=3?1:2;if(!Xd[t]){var n=Xd[t]={cssEmPerMu:Kd.quad[t]/18};for(var r in Kd)Kd.hasOwnProperty(r)&&(n[r]=Kd[r][t])}return Xd[t]}var Qd={math:{},text:{}};function z(e,t,n,r,i,a){Qd[e][i]={font:t,group:n,replace:r},a&&r&&(Qd[e][r]=Qd[e][i])}var B=`math`,V=`text`,H=`main`,U=`ams`,$d=`accent-token`,W=`bin`,ef=`close`,tf=`inner`,G=`mathord`,nf=`op-token`,rf=`open`,af=`punct`,K=`rel`,of=`spacing`,q=`textord`;z(B,H,K,`≡`,`\\equiv`,!0),z(B,H,K,`≺`,`\\prec`,!0),z(B,H,K,`≻`,`\\succ`,!0),z(B,H,K,`∼`,`\\sim`,!0),z(B,H,K,`⊥`,`\\perp`),z(B,H,K,`⪯`,`\\preceq`,!0),z(B,H,K,`⪰`,`\\succeq`,!0),z(B,H,K,`≃`,`\\simeq`,!0),z(B,H,K,`∣`,`\\mid`,!0),z(B,H,K,`≪`,`\\ll`,!0),z(B,H,K,`≫`,`\\gg`,!0),z(B,H,K,`≍`,`\\asymp`,!0),z(B,H,K,`∥`,`\\parallel`),z(B,H,K,`⋈`,`\\bowtie`,!0),z(B,H,K,`⌣`,`\\smile`,!0),z(B,H,K,`⊑`,`\\sqsubseteq`,!0),z(B,H,K,`⊒`,`\\sqsupseteq`,!0),z(B,H,K,`≐`,`\\doteq`,!0),z(B,H,K,`⌢`,`\\frown`,!0),z(B,H,K,`∋`,`\\ni`,!0),z(B,H,K,`∝`,`\\propto`,!0),z(B,H,K,`⊢`,`\\vdash`,!0),z(B,H,K,`⊣`,`\\dashv`,!0),z(B,H,K,`∋`,`\\owns`),z(B,H,af,`.`,`\\ldotp`),z(B,H,af,`⋅`,`\\cdotp`),z(B,H,af,`⋅`,`·`),z(V,H,q,`⋅`,`·`),z(B,H,q,`#`,`\\#`),z(V,H,q,`#`,`\\#`),z(B,H,q,`&`,`\\&`),z(V,H,q,`&`,`\\&`),z(B,H,q,`ℵ`,`\\aleph`,!0),z(B,H,q,`∀`,`\\forall`,!0),z(B,H,q,`ℏ`,`\\hbar`,!0),z(B,H,q,`∃`,`\\exists`,!0),z(B,H,q,`∇`,`\\nabla`,!0),z(B,H,q,`♭`,`\\flat`,!0),z(B,H,q,`ℓ`,`\\ell`,!0),z(B,H,q,`♮`,`\\natural`,!0),z(B,H,q,`♣`,`\\clubsuit`,!0),z(B,H,q,`℘`,`\\wp`,!0),z(B,H,q,`♯`,`\\sharp`,!0),z(B,H,q,`♢`,`\\diamondsuit`,!0),z(B,H,q,`ℜ`,`\\Re`,!0),z(B,H,q,`♡`,`\\heartsuit`,!0),z(B,H,q,`ℑ`,`\\Im`,!0),z(B,H,q,`♠`,`\\spadesuit`,!0),z(B,H,q,`§`,`\\S`,!0),z(V,H,q,`§`,`\\S`),z(B,H,q,`¶`,`\\P`,!0),z(V,H,q,`¶`,`\\P`),z(B,H,q,`†`,`\\dag`),z(V,H,q,`†`,`\\dag`),z(V,H,q,`†`,`\\textdagger`),z(B,H,q,`‡`,`\\ddag`),z(V,H,q,`‡`,`\\ddag`),z(V,H,q,`‡`,`\\textdaggerdbl`),z(B,H,ef,`⎱`,`\\rmoustache`,!0),z(B,H,rf,`⎰`,`\\lmoustache`,!0),z(B,H,ef,`⟯`,`\\rgroup`,!0),z(B,H,rf,`⟮`,`\\lgroup`,!0),z(B,H,W,`∓`,`\\mp`,!0),z(B,H,W,`⊖`,`\\ominus`,!0),z(B,H,W,`⊎`,`\\uplus`,!0),z(B,H,W,`⊓`,`\\sqcap`,!0),z(B,H,W,`∗`,`\\ast`),z(B,H,W,`⊔`,`\\sqcup`,!0),z(B,H,W,`◯`,`\\bigcirc`,!0),z(B,H,W,`∙`,`\\bullet`,!0),z(B,H,W,`‡`,`\\ddagger`),z(B,H,W,`≀`,`\\wr`,!0),z(B,H,W,`⨿`,`\\amalg`),z(B,H,W,`&`,`\\And`),z(B,H,K,`⟵`,`\\longleftarrow`,!0),z(B,H,K,`⇐`,`\\Leftarrow`,!0),z(B,H,K,`⟸`,`\\Longleftarrow`,!0),z(B,H,K,`⟶`,`\\longrightarrow`,!0),z(B,H,K,`⇒`,`\\Rightarrow`,!0),z(B,H,K,`⟹`,`\\Longrightarrow`,!0),z(B,H,K,`↔`,`\\leftrightarrow`,!0),z(B,H,K,`⟷`,`\\longleftrightarrow`,!0),z(B,H,K,`⇔`,`\\Leftrightarrow`,!0),z(B,H,K,`⟺`,`\\Longleftrightarrow`,!0),z(B,H,K,`↦`,`\\mapsto`,!0),z(B,H,K,`⟼`,`\\longmapsto`,!0),z(B,H,K,`↗`,`\\nearrow`,!0),z(B,H,K,`↩`,`\\hookleftarrow`,!0),z(B,H,K,`↪`,`\\hookrightarrow`,!0),z(B,H,K,`↘`,`\\searrow`,!0),z(B,H,K,`↼`,`\\leftharpoonup`,!0),z(B,H,K,`⇀`,`\\rightharpoonup`,!0),z(B,H,K,`↙`,`\\swarrow`,!0),z(B,H,K,`↽`,`\\leftharpoondown`,!0),z(B,H,K,`⇁`,`\\rightharpoondown`,!0),z(B,H,K,`↖`,`\\nwarrow`,!0),z(B,H,K,`⇌`,`\\rightleftharpoons`,!0),z(B,U,K,`≮`,`\\nless`,!0),z(B,U,K,``,`\\@nleqslant`),z(B,U,K,``,`\\@nleqq`),z(B,U,K,`⪇`,`\\lneq`,!0),z(B,U,K,`≨`,`\\lneqq`,!0),z(B,U,K,``,`\\@lvertneqq`),z(B,U,K,`⋦`,`\\lnsim`,!0),z(B,U,K,`⪉`,`\\lnapprox`,!0),z(B,U,K,`⊀`,`\\nprec`,!0),z(B,U,K,`⋠`,`\\npreceq`,!0),z(B,U,K,`⋨`,`\\precnsim`,!0),z(B,U,K,`⪹`,`\\precnapprox`,!0),z(B,U,K,`≁`,`\\nsim`,!0),z(B,U,K,``,`\\@nshortmid`),z(B,U,K,`∤`,`\\nmid`,!0),z(B,U,K,`⊬`,`\\nvdash`,!0),z(B,U,K,`⊭`,`\\nvDash`,!0),z(B,U,K,`⋪`,`\\ntriangleleft`),z(B,U,K,`⋬`,`\\ntrianglelefteq`,!0),z(B,U,K,`⊊`,`\\subsetneq`,!0),z(B,U,K,``,`\\@varsubsetneq`),z(B,U,K,`⫋`,`\\subsetneqq`,!0),z(B,U,K,``,`\\@varsubsetneqq`),z(B,U,K,`≯`,`\\ngtr`,!0),z(B,U,K,``,`\\@ngeqslant`),z(B,U,K,``,`\\@ngeqq`),z(B,U,K,`⪈`,`\\gneq`,!0),z(B,U,K,`≩`,`\\gneqq`,!0),z(B,U,K,``,`\\@gvertneqq`),z(B,U,K,`⋧`,`\\gnsim`,!0),z(B,U,K,`⪊`,`\\gnapprox`,!0),z(B,U,K,`⊁`,`\\nsucc`,!0),z(B,U,K,`⋡`,`\\nsucceq`,!0),z(B,U,K,`⋩`,`\\succnsim`,!0),z(B,U,K,`⪺`,`\\succnapprox`,!0),z(B,U,K,`≆`,`\\ncong`,!0),z(B,U,K,``,`\\@nshortparallel`),z(B,U,K,`∦`,`\\nparallel`,!0),z(B,U,K,`⊯`,`\\nVDash`,!0),z(B,U,K,`⋫`,`\\ntriangleright`),z(B,U,K,`⋭`,`\\ntrianglerighteq`,!0),z(B,U,K,``,`\\@nsupseteqq`),z(B,U,K,`⊋`,`\\supsetneq`,!0),z(B,U,K,``,`\\@varsupsetneq`),z(B,U,K,`⫌`,`\\supsetneqq`,!0),z(B,U,K,``,`\\@varsupsetneqq`),z(B,U,K,`⊮`,`\\nVdash`,!0),z(B,U,K,`⪵`,`\\precneqq`,!0),z(B,U,K,`⪶`,`\\succneqq`,!0),z(B,U,K,``,`\\@nsubseteqq`),z(B,U,W,`⊴`,`\\unlhd`),z(B,U,W,`⊵`,`\\unrhd`),z(B,U,K,`↚`,`\\nleftarrow`,!0),z(B,U,K,`↛`,`\\nrightarrow`,!0),z(B,U,K,`⇍`,`\\nLeftarrow`,!0),z(B,U,K,`⇏`,`\\nRightarrow`,!0),z(B,U,K,`↮`,`\\nleftrightarrow`,!0),z(B,U,K,`⇎`,`\\nLeftrightarrow`,!0),z(B,U,K,`△`,`\\vartriangle`),z(B,U,q,`ℏ`,`\\hslash`),z(B,U,q,`▽`,`\\triangledown`),z(B,U,q,`◊`,`\\lozenge`),z(B,U,q,`Ⓢ`,`\\circledS`),z(B,U,q,`®`,`\\circledR`),z(V,U,q,`®`,`\\circledR`),z(B,U,q,`∡`,`\\measuredangle`,!0),z(B,U,q,`∄`,`\\nexists`),z(B,U,q,`℧`,`\\mho`),z(B,U,q,`Ⅎ`,`\\Finv`,!0),z(B,U,q,`⅁`,`\\Game`,!0),z(B,U,q,`‵`,`\\backprime`),z(B,U,q,`▲`,`\\blacktriangle`),z(B,U,q,`▼`,`\\blacktriangledown`),z(B,U,q,`■`,`\\blacksquare`),z(B,U,q,`⧫`,`\\blacklozenge`),z(B,U,q,`★`,`\\bigstar`),z(B,U,q,`∢`,`\\sphericalangle`,!0),z(B,U,q,`∁`,`\\complement`,!0),z(B,U,q,`ð`,`\\eth`,!0),z(V,H,q,`ð`,`ð`),z(B,U,q,`╱`,`\\diagup`),z(B,U,q,`╲`,`\\diagdown`),z(B,U,q,`□`,`\\square`),z(B,U,q,`□`,`\\Box`),z(B,U,q,`◊`,`\\Diamond`),z(B,U,q,`¥`,`\\yen`,!0),z(V,U,q,`¥`,`\\yen`,!0),z(B,U,q,`✓`,`\\checkmark`,!0),z(V,U,q,`✓`,`\\checkmark`),z(B,U,q,`ℶ`,`\\beth`,!0),z(B,U,q,`ℸ`,`\\daleth`,!0),z(B,U,q,`ℷ`,`\\gimel`,!0),z(B,U,q,`ϝ`,`\\digamma`,!0),z(B,U,q,`ϰ`,`\\varkappa`),z(B,U,rf,`┌`,`\\@ulcorner`,!0),z(B,U,ef,`┐`,`\\@urcorner`,!0),z(B,U,rf,`└`,`\\@llcorner`,!0),z(B,U,ef,`┘`,`\\@lrcorner`,!0),z(B,U,K,`≦`,`\\leqq`,!0),z(B,U,K,`⩽`,`\\leqslant`,!0),z(B,U,K,`⪕`,`\\eqslantless`,!0),z(B,U,K,`≲`,`\\lesssim`,!0),z(B,U,K,`⪅`,`\\lessapprox`,!0),z(B,U,K,`≊`,`\\approxeq`,!0),z(B,U,W,`⋖`,`\\lessdot`),z(B,U,K,`⋘`,`\\lll`,!0),z(B,U,K,`≶`,`\\lessgtr`,!0),z(B,U,K,`⋚`,`\\lesseqgtr`,!0),z(B,U,K,`⪋`,`\\lesseqqgtr`,!0),z(B,U,K,`≑`,`\\doteqdot`),z(B,U,K,`≓`,`\\risingdotseq`,!0),z(B,U,K,`≒`,`\\fallingdotseq`,!0),z(B,U,K,`∽`,`\\backsim`,!0),z(B,U,K,`⋍`,`\\backsimeq`,!0),z(B,U,K,`⫅`,`\\subseteqq`,!0),z(B,U,K,`⋐`,`\\Subset`,!0),z(B,U,K,`⊏`,`\\sqsubset`,!0),z(B,U,K,`≼`,`\\preccurlyeq`,!0),z(B,U,K,`⋞`,`\\curlyeqprec`,!0),z(B,U,K,`≾`,`\\precsim`,!0),z(B,U,K,`⪷`,`\\precapprox`,!0),z(B,U,K,`⊲`,`\\vartriangleleft`),z(B,U,K,`⊴`,`\\trianglelefteq`),z(B,U,K,`⊨`,`\\vDash`,!0),z(B,U,K,`⊪`,`\\Vvdash`,!0),z(B,U,K,`⌣`,`\\smallsmile`),z(B,U,K,`⌢`,`\\smallfrown`),z(B,U,K,`≏`,`\\bumpeq`,!0),z(B,U,K,`≎`,`\\Bumpeq`,!0),z(B,U,K,`≧`,`\\geqq`,!0),z(B,U,K,`⩾`,`\\geqslant`,!0),z(B,U,K,`⪖`,`\\eqslantgtr`,!0),z(B,U,K,`≳`,`\\gtrsim`,!0),z(B,U,K,`⪆`,`\\gtrapprox`,!0),z(B,U,W,`⋗`,`\\gtrdot`),z(B,U,K,`⋙`,`\\ggg`,!0),z(B,U,K,`≷`,`\\gtrless`,!0),z(B,U,K,`⋛`,`\\gtreqless`,!0),z(B,U,K,`⪌`,`\\gtreqqless`,!0),z(B,U,K,`≖`,`\\eqcirc`,!0),z(B,U,K,`≗`,`\\circeq`,!0),z(B,U,K,`≜`,`\\triangleq`,!0),z(B,U,K,`∼`,`\\thicksim`),z(B,U,K,`≈`,`\\thickapprox`),z(B,U,K,`⫆`,`\\supseteqq`,!0),z(B,U,K,`⋑`,`\\Supset`,!0),z(B,U,K,`⊐`,`\\sqsupset`,!0),z(B,U,K,`≽`,`\\succcurlyeq`,!0),z(B,U,K,`⋟`,`\\curlyeqsucc`,!0),z(B,U,K,`≿`,`\\succsim`,!0),z(B,U,K,`⪸`,`\\succapprox`,!0),z(B,U,K,`⊳`,`\\vartriangleright`),z(B,U,K,`⊵`,`\\trianglerighteq`),z(B,U,K,`⊩`,`\\Vdash`,!0),z(B,U,K,`∣`,`\\shortmid`),z(B,U,K,`∥`,`\\shortparallel`),z(B,U,K,`≬`,`\\between`,!0),z(B,U,K,`⋔`,`\\pitchfork`,!0),z(B,U,K,`∝`,`\\varpropto`),z(B,U,K,`◀`,`\\blacktriangleleft`),z(B,U,K,`∴`,`\\therefore`,!0),z(B,U,K,`∍`,`\\backepsilon`),z(B,U,K,`▶`,`\\blacktriangleright`),z(B,U,K,`∵`,`\\because`,!0),z(B,U,K,`⋘`,`\\llless`),z(B,U,K,`⋙`,`\\gggtr`),z(B,U,W,`⊲`,`\\lhd`),z(B,U,W,`⊳`,`\\rhd`),z(B,U,K,`≂`,`\\eqsim`,!0),z(B,H,K,`⋈`,`\\Join`),z(B,U,K,`≑`,`\\Doteq`,!0),z(B,U,W,`∔`,`\\dotplus`,!0),z(B,U,W,`∖`,`\\smallsetminus`),z(B,U,W,`⋒`,`\\Cap`,!0),z(B,U,W,`⋓`,`\\Cup`,!0),z(B,U,W,`⩞`,`\\doublebarwedge`,!0),z(B,U,W,`⊟`,`\\boxminus`,!0),z(B,U,W,`⊞`,`\\boxplus`,!0),z(B,U,W,`⋇`,`\\divideontimes`,!0),z(B,U,W,`⋉`,`\\ltimes`,!0),z(B,U,W,`⋊`,`\\rtimes`,!0),z(B,U,W,`⋋`,`\\leftthreetimes`,!0),z(B,U,W,`⋌`,`\\rightthreetimes`,!0),z(B,U,W,`⋏`,`\\curlywedge`,!0),z(B,U,W,`⋎`,`\\curlyvee`,!0),z(B,U,W,`⊝`,`\\circleddash`,!0),z(B,U,W,`⊛`,`\\circledast`,!0),z(B,U,W,`⋅`,`\\centerdot`),z(B,U,W,`⊺`,`\\intercal`,!0),z(B,U,W,`⋒`,`\\doublecap`),z(B,U,W,`⋓`,`\\doublecup`),z(B,U,W,`⊠`,`\\boxtimes`,!0),z(B,U,K,`⇢`,`\\dashrightarrow`,!0),z(B,U,K,`⇠`,`\\dashleftarrow`,!0),z(B,U,K,`⇇`,`\\leftleftarrows`,!0),z(B,U,K,`⇆`,`\\leftrightarrows`,!0),z(B,U,K,`⇚`,`\\Lleftarrow`,!0),z(B,U,K,`↞`,`\\twoheadleftarrow`,!0),z(B,U,K,`↢`,`\\leftarrowtail`,!0),z(B,U,K,`↫`,`\\looparrowleft`,!0),z(B,U,K,`⇋`,`\\leftrightharpoons`,!0),z(B,U,K,`↶`,`\\curvearrowleft`,!0),z(B,U,K,`↺`,`\\circlearrowleft`,!0),z(B,U,K,`↰`,`\\Lsh`,!0),z(B,U,K,`⇈`,`\\upuparrows`,!0),z(B,U,K,`↿`,`\\upharpoonleft`,!0),z(B,U,K,`⇃`,`\\downharpoonleft`,!0),z(B,H,K,`⊶`,`\\origof`,!0),z(B,H,K,`⊷`,`\\imageof`,!0),z(B,U,K,`⊸`,`\\multimap`,!0),z(B,U,K,`↭`,`\\leftrightsquigarrow`,!0),z(B,U,K,`⇉`,`\\rightrightarrows`,!0),z(B,U,K,`⇄`,`\\rightleftarrows`,!0),z(B,U,K,`↠`,`\\twoheadrightarrow`,!0),z(B,U,K,`↣`,`\\rightarrowtail`,!0),z(B,U,K,`↬`,`\\looparrowright`,!0),z(B,U,K,`↷`,`\\curvearrowright`,!0),z(B,U,K,`↻`,`\\circlearrowright`,!0),z(B,U,K,`↱`,`\\Rsh`,!0),z(B,U,K,`⇊`,`\\downdownarrows`,!0),z(B,U,K,`↾`,`\\upharpoonright`,!0),z(B,U,K,`⇂`,`\\downharpoonright`,!0),z(B,U,K,`⇝`,`\\rightsquigarrow`,!0),z(B,U,K,`⇝`,`\\leadsto`),z(B,U,K,`⇛`,`\\Rrightarrow`,!0),z(B,U,K,`↾`,`\\restriction`),z(B,H,q,`‘`,"`"),z(B,H,q,`$`,`\\$`),z(V,H,q,`$`,`\\$`),z(V,H,q,`$`,`\\textdollar`),z(B,H,q,`%`,`\\%`),z(V,H,q,`%`,`\\%`),z(B,H,q,`_`,`\\_`),z(V,H,q,`_`,`\\_`),z(V,H,q,`_`,`\\textunderscore`),z(B,H,q,`∠`,`\\angle`,!0),z(B,H,q,`∞`,`\\infty`,!0),z(B,H,q,`′`,`\\prime`),z(B,H,q,`△`,`\\triangle`),z(B,H,q,`Γ`,`\\Gamma`,!0),z(B,H,q,`Δ`,`\\Delta`,!0),z(B,H,q,`Θ`,`\\Theta`,!0),z(B,H,q,`Λ`,`\\Lambda`,!0),z(B,H,q,`Ξ`,`\\Xi`,!0),z(B,H,q,`Π`,`\\Pi`,!0),z(B,H,q,`Σ`,`\\Sigma`,!0),z(B,H,q,`Υ`,`\\Upsilon`,!0),z(B,H,q,`Φ`,`\\Phi`,!0),z(B,H,q,`Ψ`,`\\Psi`,!0),z(B,H,q,`Ω`,`\\Omega`,!0),z(B,H,q,`A`,`Α`),z(B,H,q,`B`,`Β`),z(B,H,q,`E`,`Ε`),z(B,H,q,`Z`,`Ζ`),z(B,H,q,`H`,`Η`),z(B,H,q,`I`,`Ι`),z(B,H,q,`K`,`Κ`),z(B,H,q,`M`,`Μ`),z(B,H,q,`N`,`Ν`),z(B,H,q,`O`,`Ο`),z(B,H,q,`P`,`Ρ`),z(B,H,q,`T`,`Τ`),z(B,H,q,`X`,`Χ`),z(B,H,q,`¬`,`\\neg`,!0),z(B,H,q,`¬`,`\\lnot`),z(B,H,q,`⊤`,`\\top`),z(B,H,q,`⊥`,`\\bot`),z(B,H,q,`∅`,`\\emptyset`),z(B,U,q,`∅`,`\\varnothing`),z(B,H,G,`α`,`\\alpha`,!0),z(B,H,G,`β`,`\\beta`,!0),z(B,H,G,`γ`,`\\gamma`,!0),z(B,H,G,`δ`,`\\delta`,!0),z(B,H,G,`ϵ`,`\\epsilon`,!0),z(B,H,G,`ζ`,`\\zeta`,!0),z(B,H,G,`η`,`\\eta`,!0),z(B,H,G,`θ`,`\\theta`,!0),z(B,H,G,`ι`,`\\iota`,!0),z(B,H,G,`κ`,`\\kappa`,!0),z(B,H,G,`λ`,`\\lambda`,!0),z(B,H,G,`μ`,`\\mu`,!0),z(B,H,G,`ν`,`\\nu`,!0),z(B,H,G,`ξ`,`\\xi`,!0),z(B,H,G,`ο`,`\\omicron`,!0),z(B,H,G,`π`,`\\pi`,!0),z(B,H,G,`ρ`,`\\rho`,!0),z(B,H,G,`σ`,`\\sigma`,!0),z(B,H,G,`τ`,`\\tau`,!0),z(B,H,G,`υ`,`\\upsilon`,!0),z(B,H,G,`ϕ`,`\\phi`,!0),z(B,H,G,`χ`,`\\chi`,!0),z(B,H,G,`ψ`,`\\psi`,!0),z(B,H,G,`ω`,`\\omega`,!0),z(B,H,G,`ε`,`\\varepsilon`,!0),z(B,H,G,`ϑ`,`\\vartheta`,!0),z(B,H,G,`ϖ`,`\\varpi`,!0),z(B,H,G,`ϱ`,`\\varrho`,!0),z(B,H,G,`ς`,`\\varsigma`,!0),z(B,H,G,`φ`,`\\varphi`,!0),z(B,H,W,`∗`,`*`,!0),z(B,H,W,`+`,`+`),z(B,H,W,`−`,`-`,!0),z(B,H,W,`⋅`,`\\cdot`,!0),z(B,H,W,`∘`,`\\circ`,!0),z(B,H,W,`÷`,`\\div`,!0),z(B,H,W,`±`,`\\pm`,!0),z(B,H,W,`×`,`\\times`,!0),z(B,H,W,`∩`,`\\cap`,!0),z(B,H,W,`∪`,`\\cup`,!0),z(B,H,W,`∖`,`\\setminus`,!0),z(B,H,W,`∧`,`\\land`),z(B,H,W,`∨`,`\\lor`),z(B,H,W,`∧`,`\\wedge`,!0),z(B,H,W,`∨`,`\\vee`,!0),z(B,H,q,`√`,`\\surd`),z(B,H,rf,`⟨`,`\\langle`,!0),z(B,H,rf,`∣`,`\\lvert`),z(B,H,rf,`∥`,`\\lVert`),z(B,H,ef,`?`,`?`),z(B,H,ef,`!`,`!`),z(B,H,ef,`⟩`,`\\rangle`,!0),z(B,H,ef,`∣`,`\\rvert`),z(B,H,ef,`∥`,`\\rVert`),z(B,H,K,`=`,`=`),z(B,H,K,`:`,`:`),z(B,H,K,`≈`,`\\approx`,!0),z(B,H,K,`≅`,`\\cong`,!0),z(B,H,K,`≥`,`\\ge`),z(B,H,K,`≥`,`\\geq`,!0),z(B,H,K,`←`,`\\gets`),z(B,H,K,`>`,`\\gt`,!0),z(B,H,K,`∈`,`\\in`,!0),z(B,H,K,``,`\\@not`),z(B,H,K,`⊂`,`\\subset`,!0),z(B,H,K,`⊃`,`\\supset`,!0),z(B,H,K,`⊆`,`\\subseteq`,!0),z(B,H,K,`⊇`,`\\supseteq`,!0),z(B,U,K,`⊈`,`\\nsubseteq`,!0),z(B,U,K,`⊉`,`\\nsupseteq`,!0),z(B,H,K,`⊨`,`\\models`),z(B,H,K,`←`,`\\leftarrow`,!0),z(B,H,K,`≤`,`\\le`),z(B,H,K,`≤`,`\\leq`,!0),z(B,H,K,`<`,`\\lt`,!0),z(B,H,K,`→`,`\\rightarrow`,!0),z(B,H,K,`→`,`\\to`),z(B,U,K,`≱`,`\\ngeq`,!0),z(B,U,K,`≰`,`\\nleq`,!0),z(B,H,of,`\xA0`,`\\ `),z(B,H,of,`\xA0`,`\\space`),z(B,H,of,`\xA0`,`\\nobreakspace`),z(V,H,of,`\xA0`,`\\ `),z(V,H,of,`\xA0`,` `),z(V,H,of,`\xA0`,`\\space`),z(V,H,of,`\xA0`,`\\nobreakspace`),z(B,H,of,``,`\\nobreak`),z(B,H,of,``,`\\allowbreak`),z(B,H,af,`,`,`,`),z(B,H,af,`;`,`;`),z(B,U,W,`⊼`,`\\barwedge`,!0),z(B,U,W,`⊻`,`\\veebar`,!0),z(B,H,W,`⊙`,`\\odot`,!0),z(B,H,W,`⊕`,`\\oplus`,!0),z(B,H,W,`⊗`,`\\otimes`,!0),z(B,H,q,`∂`,`\\partial`,!0),z(B,H,W,`⊘`,`\\oslash`,!0),z(B,U,W,`⊚`,`\\circledcirc`,!0),z(B,U,W,`⊡`,`\\boxdot`,!0),z(B,H,W,`△`,`\\bigtriangleup`),z(B,H,W,`▽`,`\\bigtriangledown`),z(B,H,W,`†`,`\\dagger`),z(B,H,W,`⋄`,`\\diamond`),z(B,H,W,`⋆`,`\\star`),z(B,H,W,`◃`,`\\triangleleft`),z(B,H,W,`▹`,`\\triangleright`),z(B,H,rf,`{`,`\\{`),z(V,H,q,`{`,`\\{`),z(V,H,q,`{`,`\\textbraceleft`),z(B,H,ef,`}`,`\\}`),z(V,H,q,`}`,`\\}`),z(V,H,q,`}`,`\\textbraceright`),z(B,H,rf,`{`,`\\lbrace`),z(B,H,ef,`}`,`\\rbrace`),z(B,H,rf,`[`,`\\lbrack`,!0),z(V,H,q,`[`,`\\lbrack`,!0),z(B,H,ef,`]`,`\\rbrack`,!0),z(V,H,q,`]`,`\\rbrack`,!0),z(B,H,rf,`(`,`\\lparen`,!0),z(B,H,ef,`)`,`\\rparen`,!0),z(V,H,q,`<`,`\\textless`,!0),z(V,H,q,`>`,`\\textgreater`,!0),z(B,H,rf,`⌊`,`\\lfloor`,!0),z(B,H,ef,`⌋`,`\\rfloor`,!0),z(B,H,rf,`⌈`,`\\lceil`,!0),z(B,H,ef,`⌉`,`\\rceil`,!0),z(B,H,q,`\\`,`\\backslash`),z(B,H,q,`∣`,`|`),z(B,H,q,`∣`,`\\vert`),z(V,H,q,`|`,`\\textbar`,!0),z(B,H,q,`∥`,`\\|`),z(B,H,q,`∥`,`\\Vert`),z(V,H,q,`∥`,`\\textbardbl`),z(V,H,q,`~`,`\\textasciitilde`),z(V,H,q,`\\`,`\\textbackslash`),z(V,H,q,`^`,`\\textasciicircum`),z(B,H,K,`↑`,`\\uparrow`,!0),z(B,H,K,`⇑`,`\\Uparrow`,!0),z(B,H,K,`↓`,`\\downarrow`,!0),z(B,H,K,`⇓`,`\\Downarrow`,!0),z(B,H,K,`↕`,`\\updownarrow`,!0),z(B,H,K,`⇕`,`\\Updownarrow`,!0),z(B,H,nf,`∐`,`\\coprod`),z(B,H,nf,`⋁`,`\\bigvee`),z(B,H,nf,`⋀`,`\\bigwedge`),z(B,H,nf,`⨄`,`\\biguplus`),z(B,H,nf,`⋂`,`\\bigcap`),z(B,H,nf,`⋃`,`\\bigcup`),z(B,H,nf,`∫`,`\\int`),z(B,H,nf,`∫`,`\\intop`),z(B,H,nf,`∬`,`\\iint`),z(B,H,nf,`∭`,`\\iiint`),z(B,H,nf,`∏`,`\\prod`),z(B,H,nf,`∑`,`\\sum`),z(B,H,nf,`⨂`,`\\bigotimes`),z(B,H,nf,`⨁`,`\\bigoplus`),z(B,H,nf,`⨀`,`\\bigodot`),z(B,H,nf,`∮`,`\\oint`),z(B,H,nf,`∯`,`\\oiint`),z(B,H,nf,`∰`,`\\oiiint`),z(B,H,nf,`⨆`,`\\bigsqcup`),z(B,H,nf,`∫`,`\\smallint`),z(V,H,tf,`…`,`\\textellipsis`),z(B,H,tf,`…`,`\\mathellipsis`),z(V,H,tf,`…`,`\\ldots`,!0),z(B,H,tf,`…`,`\\ldots`,!0),z(B,H,tf,`⋯`,`\\@cdots`,!0),z(B,H,tf,`⋱`,`\\ddots`,!0),z(B,H,q,`⋮`,`\\varvdots`),z(V,H,q,`⋮`,`\\varvdots`),z(B,H,$d,`ˊ`,`\\acute`),z(B,H,$d,`ˋ`,`\\grave`),z(B,H,$d,`¨`,`\\ddot`),z(B,H,$d,`~`,`\\tilde`),z(B,H,$d,`ˉ`,`\\bar`),z(B,H,$d,`˘`,`\\breve`),z(B,H,$d,`ˇ`,`\\check`),z(B,H,$d,`^`,`\\hat`),z(B,H,$d,`⃗`,`\\vec`),z(B,H,$d,`˙`,`\\dot`),z(B,H,$d,`˚`,`\\mathring`),z(B,H,G,``,`\\@imath`),z(B,H,G,``,`\\@jmath`),z(B,H,q,`ı`,`ı`),z(B,H,q,`ȷ`,`ȷ`),z(V,H,q,`ı`,`\\i`,!0),z(V,H,q,`ȷ`,`\\j`,!0),z(V,H,q,`ß`,`\\ss`,!0),z(V,H,q,`æ`,`\\ae`,!0),z(V,H,q,`œ`,`\\oe`,!0),z(V,H,q,`ø`,`\\o`,!0),z(V,H,q,`Æ`,`\\AE`,!0),z(V,H,q,`Œ`,`\\OE`,!0),z(V,H,q,`Ø`,`\\O`,!0),z(V,H,$d,`ˊ`,`\\'`),z(V,H,$d,`ˋ`,"\\`"),z(V,H,$d,`ˆ`,`\\^`),z(V,H,$d,`˜`,`\\~`),z(V,H,$d,`ˉ`,`\\=`),z(V,H,$d,`˘`,`\\u`),z(V,H,$d,`˙`,`\\.`),z(V,H,$d,`¸`,`\\c`),z(V,H,$d,`˚`,`\\r`),z(V,H,$d,`ˇ`,`\\v`),z(V,H,$d,`¨`,`\\"`),z(V,H,$d,`˝`,`\\H`),z(V,H,$d,`◯`,`\\textcircled`);var sf={"--":!0,"---":!0,"``":!0,"''":!0};z(V,H,q,`–`,`--`,!0),z(V,H,q,`–`,`\\textendash`),z(V,H,q,`—`,`---`,!0),z(V,H,q,`—`,`\\textemdash`),z(V,H,q,`‘`,"`",!0),z(V,H,q,`‘`,`\\textquoteleft`),z(V,H,q,`’`,`'`,!0),z(V,H,q,`’`,`\\textquoteright`),z(V,H,q,`“`,"``",!0),z(V,H,q,`“`,`\\textquotedblleft`),z(V,H,q,`”`,`''`,!0),z(V,H,q,`”`,`\\textquotedblright`),z(B,H,q,`°`,`\\degree`,!0),z(V,H,q,`°`,`\\degree`),z(V,H,q,`°`,`\\textdegree`,!0),z(B,H,q,`£`,`\\pounds`),z(B,H,q,`£`,`\\mathsterling`,!0),z(V,H,q,`£`,`\\pounds`),z(V,H,q,`£`,`\\textsterling`,!0),z(B,U,q,`✠`,`\\maltese`),z(V,U,q,`✠`,`\\maltese`);for(var cf=`0123456789/@."`,lf=0;lf<cf.length;lf++){var uf=cf.charAt(lf);z(B,H,q,uf,uf)}for(var df=`0123456789!@*()-=+";:?/.,`,ff=0;ff<df.length;ff++){var pf=df.charAt(ff);z(V,H,q,pf,pf)}for(var mf=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,hf=0;hf<mf.length;hf++){var gf=mf.charAt(hf);z(B,H,G,gf,gf),z(V,H,q,gf,gf)}z(B,U,q,`C`,`ℂ`),z(V,U,q,`C`,`ℂ`),z(B,U,q,`H`,`ℍ`),z(V,U,q,`H`,`ℍ`),z(B,U,q,`N`,`ℕ`),z(V,U,q,`N`,`ℕ`),z(B,U,q,`P`,`ℙ`),z(V,U,q,`P`,`ℙ`),z(B,U,q,`Q`,`ℚ`),z(V,U,q,`Q`,`ℚ`),z(B,U,q,`R`,`ℝ`),z(V,U,q,`R`,`ℝ`),z(B,U,q,`Z`,`ℤ`),z(V,U,q,`Z`,`ℤ`),z(B,H,G,`h`,`ℎ`),z(V,H,G,`h`,`ℎ`);for(var J,_f=0;_f<mf.length;_f++){var vf=mf.charAt(_f);J=String.fromCharCode(55349,56320+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56372+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56424+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56580+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56684+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56736+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56788+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56840+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56944+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),_f<26&&(J=String.fromCharCode(55349,56632+_f),z(B,H,G,vf,J),z(V,H,q,vf,J),J=String.fromCharCode(55349,56476+_f),z(B,H,G,vf,J),z(V,H,q,vf,J))}J=String.fromCharCode(55349,56668),z(B,H,G,`k`,J),z(V,H,q,`k`,J);for(var yf=0;yf<10;yf++){var bf=yf.toString();J=String.fromCharCode(55349,57294+yf),z(B,H,G,bf,J),z(V,H,q,bf,J),J=String.fromCharCode(55349,57314+yf),z(B,H,G,bf,J),z(V,H,q,bf,J),J=String.fromCharCode(55349,57324+yf),z(B,H,G,bf,J),z(V,H,q,bf,J),J=String.fromCharCode(55349,57334+yf),z(B,H,G,bf,J),z(V,H,q,bf,J)}for(var xf=`ÐÞþ`,Sf=0;Sf<xf.length;Sf++){var Cf=xf.charAt(Sf);z(B,H,G,Cf,Cf),z(V,H,q,Cf,Cf)}var wf={mathClass:`mathbf`,textClass:`textbf`,font:`Main-Bold`},Tf={mathClass:`mathnormal`,textClass:`textit`,font:`Math-Italic`},Ef={mathClass:`boldsymbol`,textClass:`boldsymbol`,font:`Main-BoldItalic`},Df={mathClass:`mathscr`,textClass:`textscr`,font:`Script-Regular`},Of={mathClass:``,textClass:``,font:``},kf={mathClass:`mathfrak`,textClass:`textfrak`,font:`Fraktur-Regular`},Af={mathClass:`mathbb`,textClass:`textbb`,font:`AMS-Regular`},jf={mathClass:`mathboldfrak`,textClass:`textboldfrak`,font:`Fraktur-Regular`},Mf={mathClass:`mathsf`,textClass:`textsf`,font:`SansSerif-Regular`},Nf={mathClass:`mathboldsf`,textClass:`textboldsf`,font:`SansSerif-Bold`},Pf={mathClass:`mathitsf`,textClass:`textitsf`,font:`SansSerif-Italic`},Ff={mathClass:`mathtt`,textClass:`texttt`,font:`Typewriter-Regular`},If=[wf,wf,Tf,Tf,Ef,Ef,Df,Of,Of,Of,kf,kf,Af,Af,jf,jf,Mf,Mf,Nf,Nf,Pf,Pf,Of,Of,Ff,Ff],Lf=[wf,Of,Mf,Nf,Ff],Rf=e=>{var t=e.charCodeAt(0),n=e.charCodeAt(1),r=(t-55296)*1024+(n-56320)+65536;if(119808<=r&&r<120484)return If[Math.floor((r-119808)/26)];if(120782<=r&&r<=120831)return Lf[Math.floor((r-120782)/10)];if(r===120485||r===120486)return If[0];if(120486<r&&r<120782)return Of;throw new I(`Unsupported character: `+e)},zf=function(e,t,n){if(Qd[n][e]){var r=Qd[n][e].replace;r&&(e=r)}return{value:e,metrics:Yd(e,t,n)}},Bf=function(e,t,n,r,i){var a=zf(e,t,n),o=a.metrics;e=a.value;var s;if(o){var c=o.italic;(n===`text`||r&&r.font===`mathit`)&&(c=0),s=new Rd(e,o.height,o.depth,c,o.skew,o.width,i)}else typeof console<`u`&&console.warn(`No character metrics `+(`for '`+e+`' in style '`+t+`' and mode '`+n+`'`)),s=new Rd(e,0,0,0,0,0,i);if(r){s.maxFontSize=r.sizeMultiplier,r.style.isTight()&&s.classes.push(`mtight`);var l=r.getColor();l&&(s.style.color=l)}return s},Vf=function(e,t,n,r){return r===void 0&&(r=[]),n.font===`boldsymbol`&&zf(e,`Main-Bold`,t).metrics?Bf(e,`Main-Bold`,t,n,r.concat([`mathbf`])):e===`\\`||Qd[t][e].font===`main`?Bf(e,`Main-Regular`,t,n,r):Bf(e,`AMS-Regular`,t,n,r.concat([`amsrm`]))},Hf=function(e,t,n){return n!==`textord`&&zf(e,`Math-BoldItalic`,t).metrics?{fontName:`Math-BoldItalic`,fontClass:`boldsymbol`}:{fontName:`Main-Bold`,fontClass:`mathbf`}},Uf=function(e,t,n){var r=e.mode,i=e.text,a=[`mord`],{font:o,fontFamily:s,fontWeight:c,fontShape:l}=t,u=r===`math`||r===`text`&&!!o,d=u?o:s,f=``,p=``;if(i.charCodeAt(0)===55349){var m=Rf(i);f=m.font,p=m[r+`Class`]}if(f)return Bf(i,f,r,t,a.concat(p));if(d){var h,g;if(d===`boldsymbol`){var _=Hf(i,r,n);h=_.fontName,g=[_.fontClass]}else u?(h=np[o].fontName,g=[o]):(h=tp(s,c,l),g=[s,c,l]);if(zf(i,h,r).metrics)return Bf(i,h,r,t,a.concat(g));if(sf.hasOwnProperty(i)&&h.slice(0,10)===`Typewriter`){for(var v=[],y=0;y<i.length;y++)v.push(Bf(i[y],h,r,t,a.concat(g)));return Xf(v)}}if(n===`mathord`)return Bf(i,`Math-Italic`,r,t,a.concat([`mathnormal`]));if(n===`textord`){var b=Qd[r][i]&&Qd[r][i].font;if(b===`ams`)return Bf(i,tp(`amsrm`,c,l),r,t,a.concat(`amsrm`,c,l));if(b===`main`||!b)return Bf(i,tp(`textrm`,c,l),r,t,a.concat(c,l));var x=tp(b,c,l);return Bf(i,x,r,t,a.concat(x,c,l))}else throw Error(`unexpected type: `+n+` in makeOrd`)},Wf=(e,t)=>{if(Od(e.classes)!==Od(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize||e.italic!==0&&e.hasClass(`mathnormal`))return!1;if(e.classes.length===1){var n=e.classes[0];if(n===`mbin`||n===`mord`)return!1}for(var r of Object.keys(e.style))if(e.style[r]!==t.style[r])return!1;for(var i of Object.keys(t.style))if(e.style[i]!==t.style[i])return!1;return!0},Gf=e=>{for(var t=0;t<e.length-1;t++){var n=e[t],r=e[t+1];n instanceof Rd&&r instanceof Rd&&Wf(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,e.splice(t+1,1),t--)}return e},Kf=function(e){for(var t=0,n=0,r=0,i=0;i<e.children.length;i++){var a=e.children[i];a.height>t&&(t=a.height),a.depth>n&&(n=a.depth),a.maxFontSize>r&&(r=a.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},Y=function(e,t,n,r){var i=new Pd(e,t,n,r);return Kf(i),i},qf=(e,t,n,r)=>new Pd(e,t,n,r),Jf=function(e,t,n){var r=Y([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=R(r.height),r.maxFontSize=1,r},Yf=function(e,t,n,r){var i=new Fd(e,t,n,r);return Kf(i),i},Xf=function(e){var t=new Cd(e);return Kf(t),t},Zf=function(e,t){return e instanceof Cd?Y([],[e],t):e},Qf=function(e){if(e.positionType===`individualShift`){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,i=r,a=1;a<t.length;a++){var o=-t[a].shift-i-t[a].elem.depth,s=o-(t[a-1].elem.height+t[a-1].elem.depth);i+=o,n.push({type:`kern`,size:s}),n.push(t[a])}return{children:n,depth:r}}var c;if(e.positionType===`top`){for(var l=e.positionData,u=0;u<e.children.length;u++){var d=e.children[u];l-=d.type===`kern`?d.size:d.elem.height+d.elem.depth}c=l}else if(e.positionType===`bottom`)c=-e.positionData;else{var f=e.children[0];if(f.type!==`elem`)throw Error(`First child must have type "elem".`);if(e.positionType===`shift`)c=-f.elem.depth-e.positionData;else if(e.positionType===`firstBaseline`)c=-f.elem.depth;else throw Error(`Invalid positionType `+e.positionType+`.`)}return{children:e.children,depth:c}},$f=function(e,t){for(var{children:n,depth:r}=Qf(e),i=0,a=0;a<n.length;a++){var o=n[a];if(o.type===`elem`){var s=o.elem;i=Math.max(i,s.maxFontSize,s.height)}}i+=2;var c=Y([`pstrut`],[]);c.style.height=R(i);for(var l=[],u=r,d=r,f=r,p=0;p<n.length;p++){var m=n[p];if(m.type===`kern`)f+=m.size;else{var h=m.elem,g=m.wrapperClasses||[],_=m.wrapperStyle||{},v=Y(g,[c,h],void 0,_);v.style.top=R(-i-f-h.depth),m.marginLeft&&(v.style.marginLeft=m.marginLeft),m.marginRight&&(v.style.marginRight=m.marginRight),l.push(v),f+=h.height+h.depth}u=Math.min(u,f),d=Math.max(d,f)}var y=Y([`vlist`],l);y.style.height=R(d);var b;if(u<0){var x=Y([`vlist`],[Y([],[])]);x.style.height=R(-u),b=[Y([`vlist-r`],[y,Y([`vlist-s`],[new Rd(`​`)])]),Y([`vlist-r`],[x])]}else b=[Y([`vlist-r`],[y])];var S=Y([`vlist-t`],b);return b.length===2&&S.classes.push(`vlist-t2`),S.height=d,S.depth=-u,S},ep=(e,t)=>{var n=Y([`mspace`],[],t),r=Dd(e,t);return n.style.marginRight=R(r),n},tp=(e,t,n)=>{var r,i;switch(e){case`amsrm`:r=`AMS`;break;case`textrm`:r=`Main`;break;case`textsf`:r=`SansSerif`;break;case`texttt`:r=`Typewriter`;break;default:r=e}return i=t===`textbf`&&n===`textit`?`BoldItalic`:t===`textbf`?`Bold`:n===`textit`?`Italic`:`Regular`,r+`-`+i},np={mathbf:{variant:`bold`,fontName:`Main-Bold`},mathrm:{variant:`normal`,fontName:`Main-Regular`},textit:{variant:`italic`,fontName:`Main-Italic`},mathit:{variant:`italic`,fontName:`Main-Italic`},mathnormal:{variant:`italic`,fontName:`Math-Italic`},mathsfit:{variant:`sans-serif-italic`,fontName:`SansSerif-Italic`},mathbb:{variant:`double-struck`,fontName:`AMS-Regular`},mathcal:{variant:`script`,fontName:`Caligraphic-Regular`},mathfrak:{variant:`fraktur`,fontName:`Fraktur-Regular`},mathscr:{variant:`script`,fontName:`Script-Regular`},mathsf:{variant:`sans-serif`,fontName:`SansSerif-Regular`},mathtt:{variant:`monospace`,fontName:`Typewriter-Regular`}},rp={vec:[`vec`,.471,.714],oiintSize1:[`oiintSize1`,.957,.499],oiintSize2:[`oiintSize2`,1.472,.659],oiiintSize1:[`oiiintSize1`,1.304,.499],oiiintSize2:[`oiiintSize2`,1.98,.659]},ip=function(e,t){var[n,r,i]=rp[e],a=qf([`overlay`],[new zd([new Bd(n)],{width:R(r),height:R(i),style:`width:`+R(r),viewBox:`0 0 `+1e3*r+` `+1e3*i,preserveAspectRatio:`xMinYMin`})],t);return a.height=i,a.style.height=R(i),a.style.width=R(r),a},ap={number:3,unit:`mu`},op={number:4,unit:`mu`},sp={number:5,unit:`mu`},cp={mord:{mop:ap,mbin:op,mrel:sp,minner:ap},mop:{mord:ap,mop:ap,mrel:sp,minner:ap},mbin:{mord:op,mop:op,mopen:op,minner:op},mrel:{mord:sp,mop:sp,mopen:sp,minner:sp},mopen:{},mclose:{mop:ap,mbin:op,mrel:sp,minner:ap},mpunct:{mord:ap,mop:ap,mrel:sp,mopen:ap,mclose:ap,mpunct:ap,minner:ap},minner:{mord:ap,mop:ap,mbin:op,mrel:sp,mopen:ap,mpunct:ap,minner:ap}},lp={mord:{mop:ap},mop:{mord:ap,mop:ap},mbin:{},mrel:{},mopen:{},mclose:{mop:ap},mpunct:{},minner:{mop:ap}},up={},dp={},fp={};function X(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,s={type:t,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:i},c=0;c<n.length;++c)up[n[c]]=s;t&&(a&&(dp[t]=a),o&&(fp[t]=o))}function pp(e){var{type:t,htmlBuilder:n,mathmlBuilder:r}=e;X({type:t,names:[],props:{numArgs:0},handler(){throw Error(`Should never be called.`)},htmlBuilder:n,mathmlBuilder:r})}var mp=function(e){return e.type===`ordgroup`&&e.body.length===1?e.body[0]:e},hp=function(e){return e.type===`ordgroup`?e.body:[e]},gp=new Set([`leftmost`,`mbin`,`mopen`,`mrel`,`mop`,`mpunct`]),_p=new Set([`rightmost`,`mrel`,`mclose`,`mpunct`]),vp={display:L.DISPLAY,text:L.TEXT,script:L.SCRIPT,scriptscript:L.SCRIPTSCRIPT},yp={mord:`mord`,mop:`mop`,mbin:`mbin`,mrel:`mrel`,mopen:`mopen`,mclose:`mclose`,mpunct:`mpunct`,minner:`minner`},bp=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var i=[],a=0;a<e.length;a++){var o=Ep(e[a],t);if(o instanceof Cd){var s=o.children;i.push(...s)}else i.push(o)}if(Gf(i),!n)return i;var c=t;if(e.length===1){var l=e[0];l.type===`sizing`?c=t.havingSize(l.size):l.type===`styling`&&(c=t.havingStyle(vp[l.style]))}var u=Y([r[0]||`leftmost`],[],t),d=Y([r[1]||`rightmost`],[],t),f=n===`root`;return xp(i,(e,t)=>{var n=t.classes[0],r=e.classes[0];n===`mbin`&&_p.has(r)?t.classes[0]=`mord`:r===`mbin`&&gp.has(n)&&(e.classes[0]=`mord`)},{node:u},d,f),xp(i,(e,t)=>{var n=wp(t),r=wp(e),i=n&&r?e.hasClass(`mtight`)?lp[n]?.[r]:cp[n]?.[r]:null;if(i)return ep(i,c)},{node:u},d,f),i},xp=function(e,t,n,r,i){r&&e.push(r);for(var a=0;a<e.length;a++){var o=e[a],s=Sp(o);if(s){xp(s.children,t,n,null,i);continue}var c=!o.hasClass(`mspace`);if(c){var l=t(o,n.node);l&&(n.insertAfter?n.insertAfter(l):(e.unshift(l),a++))}c?n.node=o:i&&o.hasClass(`newline`)&&(n.node=Y([`leftmost`])),n.insertAfter=(t=>n=>{e.splice(t+1,0,n),a++})(a)}r&&e.pop()},Sp=function(e){return e instanceof Cd||e instanceof Fd||e instanceof Pd&&e.hasClass(`enclosing`)?e:null},Cp=function(e,t){var n=Sp(e);if(n){var r=n.children;if(r.length){if(t===`right`)return Cp(r[r.length-1],`right`);if(t===`left`)return Cp(r[0],`left`)}}return e},wp=function(e,t){return e?(t&&(e=Cp(e,t)),yp[e.classes[0]]||null):null},Tp=function(e,t){var n=[`nulldelimiter`].concat(e.baseSizingClasses());return Y(t.concat(n))},Ep=function(e,t,n){if(!e)return Y();if(dp[e.type]){var r=dp[e.type](e,t);if(n&&t.size!==n.size){r=Y(t.sizingClasses(n),[r],t);var i=t.sizeMultiplier/n.sizeMultiplier;r.height*=i,r.depth*=i}return r}else throw new I(`Got group of unknown type: '`+e.type+`'`)};function Dp(e,t){var n=Y([`base`],e,t),r=Y([`strut`]);return r.style.height=R(n.height+n.depth),n.depth&&(r.style.verticalAlign=R(-n.depth)),n.children.unshift(r),n}function Op(e,t){var n=null;e.length===1&&e[0].type===`tag`&&(n=e[0].tag,e=e[0].body);var r=bp(e,t,`root`),i;r.length===2&&r[1].hasClass(`tag`)&&(i=r.pop());for(var a=[],o=[],s=0;s<r.length;s++)if(o.push(r[s]),r[s].hasClass(`mbin`)||r[s].hasClass(`mrel`)||r[s].hasClass(`allowbreak`)){for(var c=!1;s<r.length-1&&r[s+1].hasClass(`mspace`)&&!r[s+1].hasClass(`newline`);)s++,o.push(r[s]),r[s].hasClass(`nobreak`)&&(c=!0);c||(a.push(Dp(o,t)),o=[])}else r[s].hasClass(`newline`)&&(o.pop(),o.length>0&&(a.push(Dp(o,t)),o=[]),a.push(r[s]));o.length>0&&a.push(Dp(o,t));var l;n?(l=Dp(bp(n,t,!0),t),l.classes=[`tag`],a.push(l)):i&&a.push(i);var u=Y([`katex-html`],a);if(u.setAttribute(`aria-hidden`,`true`),l){var d=l.children[0];d.style.height=R(u.height+u.depth),u.depth&&(d.style.verticalAlign=R(-u.depth))}return u}function kp(e){return new Cd(e)}var Z=class{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Od(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Ap&&this.children[n+1]instanceof Ap){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Ap;)r+=this.children[++n].toText();e.appendChild(new Ap(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<`+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=` `+t+`="`,e+=Nu(this.attributes[t]),e+=`"`);this.classes.length>0&&(e+=` class ="`+Nu(Od(this.classes))+`"`),e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</`+this.type+`>`,e}toText(){return this.children.map(e=>e.toText()).join(``)}},Ap=class{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return Nu(this.toText())}toText(){return this.text}},jp=class{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=` `:e>=.1666&&e<=.1667?this.character=` `:e>=.2222&&e<=.2223?this.character=` `:e>=.2777&&e<=.2778?this.character=`  `:e>=-.05556&&e<=-.05555?this.character=` ⁣`:e>=-.1667&&e<=-.1666?this.character=` ⁣`:e>=-.2223&&e<=-.2222?this.character=` ⁣`:e>=-.2778&&e<=-.2777?this.character=` ⁣`:this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`mspace`);return e.setAttribute(`width`,R(this.width)),e}toMarkup(){return this.character?`<mtext>`+this.character+`</mtext>`:`<mspace width="`+R(this.width)+`"/>`}toText(){return this.character?this.character:` `}},Mp=new Set([`\\imath`,`\\jmath`]),Np=new Set([`mrow`,`mtable`]),Pp=function(e,t,n){return Qd[t][e]&&Qd[t][e].replace&&e.charCodeAt(0)!==55349&&!(sf.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)===`tt`||n.font&&n.font.slice(4,6)===`tt`))&&(e=Qd[t][e].replace),new Ap(e)},Fp=function(e){return e.length===1?e[0]:new Z(`mrow`,e)},Ip={mathit:`italic`,boldsymbol:e=>e.type===`textord`?`bold`:`bold-italic`,mathbf:`bold`,mathbb:`double-struck`,mathsfit:`sans-serif-italic`,mathfrak:`fraktur`,mathscr:`script`,mathcal:`script`,mathsf:`sans-serif`,mathtt:`monospace`},Lp=(e,t)=>{if(e.mode===`text`){if(t.fontFamily===`texttt`)return`monospace`;if(t.fontFamily===`textsf`)return t.fontShape===`textit`&&t.fontWeight===`textbf`?`sans-serif-bold-italic`:t.fontShape===`textit`?`sans-serif-italic`:t.fontWeight===`textbf`?`bold-sans-serif`:`sans-serif`;if(t.fontShape===`textit`&&t.fontWeight===`textbf`)return`bold-italic`;if(t.fontShape===`textit`)return`italic`;if(t.fontWeight===`textbf`)return`bold`}var n=t.font;if(!n||n===`mathnormal`)return null;var r=e.mode,i=Ip[n];if(i)return typeof i==`function`?i(e):i;var a=e.text;if(Mp.has(a))return null;if(Qd[r][a]){var o=Qd[r][a].replace;o&&(a=o)}var s=np[n].fontName;return Yd(a,s,r)?np[n].variant:null};function Rp(e){if(!e)return!1;if(e.type===`mi`&&e.children.length===1){var t=e.children[0];return t instanceof Ap&&t.text===`.`}else if(e.type===`mo`&&e.children.length===1&&e.getAttribute(`separator`)===`true`&&e.getAttribute(`lspace`)===`0em`&&e.getAttribute(`rspace`)===`0em`){var n=e.children[0];return n instanceof Ap&&n.text===`,`}else return!1}var zp=function(e,t,n){if(e.length===1){var r=Vp(e[0],t);return n&&r instanceof Z&&r.type===`mo`&&(r.setAttribute(`lspace`,`0em`),r.setAttribute(`rspace`,`0em`)),[r]}for(var i=[],a,o=0;o<e.length;o++){var s=Vp(e[o],t);if(s instanceof Z&&a instanceof Z){if(s.type===`mtext`&&a.type===`mtext`&&s.getAttribute(`mathvariant`)===a.getAttribute(`mathvariant`)){a.children.push(...s.children);continue}else if(s.type===`mn`&&a.type===`mn`){a.children.push(...s.children);continue}else if(Rp(s)&&a.type===`mn`){a.children.push(...s.children);continue}else if(s.type===`mn`&&Rp(a))s.children=[...a.children,...s.children],i.pop();else if((s.type===`msup`||s.type===`msub`)&&s.children.length>=1&&(a.type===`mn`||Rp(a))){var c=s.children[0];c instanceof Z&&c.type===`mn`&&(c.children=[...a.children,...c.children],i.pop())}else if(a.type===`mi`&&a.children.length===1){var l=a.children[0];if(l instanceof Ap&&l.text===`̸`&&(s.type===`mo`||s.type===`mi`||s.type===`mn`)){var u=s.children[0];u instanceof Ap&&u.text.length>0&&(u.text=u.text.slice(0,1)+`̸`+u.text.slice(1),i.pop())}}}i.push(s),a=s}return i},Bp=function(e,t,n){return Fp(zp(e,t,n))},Vp=function(e,t){if(!e)return new Z(`mrow`);if(fp[e.type])return fp[e.type](e,t);throw new I(`Got group of unknown type: '`+e.type+`'`)};function Hp(e,t,n,r,i){var a=zp(e,n),o=a.length===1&&a[0]instanceof Z&&Np.has(a[0].type)?a[0]:new Z(`mrow`,a),s=new Z(`annotation`,[new Ap(t)]);s.setAttribute(`encoding`,`application/x-tex`);var c=new Z(`math`,[new Z(`semantics`,[o,s])]);return c.setAttribute(`xmlns`,`http://www.w3.org/1998/Math/MathML`),r&&c.setAttribute(`display`,`block`),Y([i?`katex`:`katex-mathml`],[c])}var Up=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Wp=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Gp=function(e,t){return t.size<2?e:Up[e-1][t.size-1]},Kp=class e{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||e.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||``,this.fontFamily=t.fontFamily||``,this.fontWeight=t.fontWeight||``,this.fontShape=t.fontShape||``,this.sizeMultiplier=Wp[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(n,t),new e(n)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Gp(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Wp[e-1]})}havingBaseStyle(t){t||=this.style.text();var n=Gp(e.BASESIZE,t);return this.size===n&&this.textSize===e.BASESIZE&&this.style===t?this:this.extend({style:t,size:n})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:``})}withTextFontWeight(e){return this.extend({fontWeight:e,font:``})}withTextFontShape(e){return this.extend({fontShape:e,font:``})}sizingClasses(e){return e.size===this.size?[]:[`sizing`,`reset-size`+e.size,`size`+this.size]}baseSizingClasses(){return this.size===e.BASESIZE?[]:[`sizing`,`reset-size`+this.size,`size`+e.BASESIZE]}fontMetrics(){return this._fontMetrics||=Zd(this.size),this._fontMetrics}getColor(){return this.phantom?`transparent`:this.color}};Kp.BASESIZE=6;var qp=function(e){return new Kp({style:e.displayMode?L.DISPLAY:L.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},Jp=function(e,t){if(t.displayMode){var n=[`katex-display`];t.leqno&&n.push(`leqno`),t.fleqn&&n.push(`fleqn`),e=Y(n,[e])}return e},Yp=function(e,t,n){var r=qp(n),i;return n.output===`mathml`?Hp(e,t,r,n.displayMode,!0):(i=n.output===`html`?Y([`katex`],[Op(e,r)]):Y([`katex`],[Hp(e,t,r,n.displayMode,!1),Op(e,r)]),Jp(i,n))},Xp=function(e,t,n){return Jp(Y([`katex`],[Op(e,qp(n))]),n)},Zp={widehat:`^`,widecheck:`ˇ`,widetilde:`~`,utilde:`~`,overleftarrow:`←`,underleftarrow:`←`,xleftarrow:`←`,overrightarrow:`→`,underrightarrow:`→`,xrightarrow:`→`,underbrace:`⏟`,overbrace:`⏞`,underbracket:`⎵`,overbracket:`⎴`,overgroup:`⏠`,undergroup:`⏡`,overleftrightarrow:`↔`,underleftrightarrow:`↔`,xleftrightarrow:`↔`,Overrightarrow:`⇒`,xRightarrow:`⇒`,overleftharpoon:`↼`,xleftharpoonup:`↼`,overrightharpoon:`⇀`,xrightharpoonup:`⇀`,xLeftarrow:`⇐`,xLeftrightarrow:`⇔`,xhookleftarrow:`↩`,xhookrightarrow:`↪`,xmapsto:`↦`,xrightharpoondown:`⇁`,xleftharpoondown:`↽`,xrightleftharpoons:`⇌`,xleftrightharpoons:`⇋`,xtwoheadleftarrow:`↞`,xtwoheadrightarrow:`↠`,xlongequal:`=`,xtofrom:`⇄`,xrightleftarrows:`⇄`,xrightequilibrium:`⇌`,xleftequilibrium:`⇋`,"\\cdrightarrow":`→`,"\\cdleftarrow":`←`,"\\cdlongequal":`=`},Qp=function(e){var t=new Z(`mo`,[new Ap(Zp[e.replace(/^\\/,``)])]);return t.setAttribute(`stretchy`,`true`),t},$p={overrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],overleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],underrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],underleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],xrightarrow:[[`rightarrow`],1.469,522,`xMaxYMin`],"\\cdrightarrow":[[`rightarrow`],3,522,`xMaxYMin`],xleftarrow:[[`leftarrow`],1.469,522,`xMinYMin`],"\\cdleftarrow":[[`leftarrow`],3,522,`xMinYMin`],Overrightarrow:[[`doublerightarrow`],.888,560,`xMaxYMin`],xRightarrow:[[`doublerightarrow`],1.526,560,`xMaxYMin`],xLeftarrow:[[`doubleleftarrow`],1.526,560,`xMinYMin`],overleftharpoon:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoonup:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoondown:[[`leftharpoondown`],.888,522,`xMinYMin`],overrightharpoon:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoonup:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoondown:[[`rightharpoondown`],.888,522,`xMaxYMin`],xlongequal:[[`longequal`],.888,334,`xMinYMin`],"\\cdlongequal":[[`longequal`],3,334,`xMinYMin`],xtwoheadleftarrow:[[`twoheadleftarrow`],.888,334,`xMinYMin`],xtwoheadrightarrow:[[`twoheadrightarrow`],.888,334,`xMaxYMin`],overleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],overbrace:[[`leftbrace`,`midbrace`,`rightbrace`],1.6,548],underbrace:[[`leftbraceunder`,`midbraceunder`,`rightbraceunder`],1.6,548],underleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],xleftrightarrow:[[`leftarrow`,`rightarrow`],1.75,522],xLeftrightarrow:[[`doubleleftarrow`,`doublerightarrow`],1.75,560],xrightleftharpoons:[[`leftharpoondownplus`,`rightharpoonplus`],1.75,716],xleftrightharpoons:[[`leftharpoonplus`,`rightharpoondownplus`],1.75,716],xhookleftarrow:[[`leftarrow`,`righthook`],1.08,522],xhookrightarrow:[[`lefthook`,`rightarrow`],1.08,522],overlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],underlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],overbracket:[[`leftbracketover`,`rightbracketover`],1.6,440],underbracket:[[`leftbracketunder`,`rightbracketunder`],1.6,410],overgroup:[[`leftgroup`,`rightgroup`],.888,342],undergroup:[[`leftgroupunder`,`rightgroupunder`],.888,342],xmapsto:[[`leftmapsto`,`rightarrow`],1.5,522],xtofrom:[[`leftToFrom`,`rightToFrom`],1.75,528],xrightleftarrows:[[`baraboveleftarrow`,`rightarrowabovebar`],1.75,901],xrightequilibrium:[[`baraboveshortleftharpoon`,`rightharpoonaboveshortbar`],1.75,716],xleftequilibrium:[[`shortbaraboveleftharpoon`,`shortrightharpoonabovebar`],1.75,716]},em=new Set([`widehat`,`widecheck`,`widetilde`,`utilde`]),tm=function(e,t){function n(){var n=4e5,r=e.label.slice(1);if(em.has(r)&&`base`in e){var i=e.base.type===`ordgroup`?e.base.body.length:1,a,o,s;if(i>5)r===`widehat`||r===`widecheck`?(a=420,n=2364,s=.42,o=r+`4`):(a=312,n=2340,s=.34,o=`tilde4`);else{var c=[1,1,2,2,3,3][i];r===`widehat`||r===`widecheck`?(n=[0,1062,2364,2364,2364][c],a=[0,239,300,360,420][c],s=[0,.24,.3,.3,.36,.42][c],o=r+c):(n=[0,600,1033,2339,2340][c],a=[0,260,286,306,312][c],s=[0,.26,.286,.3,.306,.34][c],o=`tilde`+c)}return{span:qf([],[new zd([new Bd(o)],{width:`100%`,height:R(s),viewBox:`0 0 `+n+` `+a,preserveAspectRatio:`none`})],t),minWidth:0,height:s}}else{var l=[],u=$p[r];if(!u)throw Error(`No SVG data for "`+r+`".`);var[d,f,p]=u,m=p/1e3,h=d.length,g,_;if(h===1){if(u.length!==4)throw Error(`Expected 4-tuple for single-path SVG data "`+r+`".`);g=[`hide-tail`],_=[u[3]]}else if(h===2)g=[`halfarrow-left`,`halfarrow-right`],_=[`xMinYMin`,`xMaxYMin`];else if(h===3)g=[`brace-left`,`brace-center`,`brace-right`],_=[`xMinYMin`,`xMidYMin`,`xMaxYMin`];else throw Error(`Correct katexImagesData or update code here to support
                    `+h+` children.`);for(var v=0;v<h;v++){var y=new zd([new Bd(d[v])],{width:`400em`,height:R(m),viewBox:`0 0 `+n+` `+p,preserveAspectRatio:_[v]+` slice`}),b=qf([g[v]],[y],t);if(h===1)return{span:b,minWidth:f,height:m};b.style.height=R(m),l.push(b)}return{span:Y([`stretchy`],l,t),minWidth:f,height:m}}}var{span:r,minWidth:i,height:a}=n();return r.height=a,r.style.height=R(a),i>0&&(r.style.minWidth=R(i)),r},nm=function(e,t,n,r,i){var a,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(a=Y([`stretchy`,t],[],i),t===`fbox`){var s=i.color&&i.getColor();s&&(a.style.borderColor=s)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new Vd({x1:`0`,y1:`0`,x2:`100%`,y2:`100%`,"stroke-width":`0.046em`})),/^x?cancel$/.test(t)&&c.push(new Vd({x1:`0`,y1:`100%`,x2:`100%`,y2:`0`,"stroke-width":`0.046em`})),a=qf([],[new zd(c,{width:`100%`,height:R(o)})],i)}return a.height=o,a.style.height=R(o),a},rm={bin:1,close:1,inner:1,open:1,punct:1,rel:1},im={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function am(e){return e in rm}function Q(e,t){if(!e||e.type!==t)throw Error(`Expected node of type `+t+`, but got `+(e?`node of type `+e.type:String(e)));return e}function om(e){var t=sm(e);if(!t)throw Error(`Expected node of symbol group type, but got `+(e?`node of type `+e.type:String(e)));return t}function sm(e){return e&&(e.type===`atom`||im.hasOwnProperty(e.type))?e:null}var cm=e=>{if(e instanceof Rd)return e;if(Wd(e)&&e.children.length===1)return cm(e.children[0])},lm=(e,t)=>{var n,r,i;e&&e.type===`supsub`?(r=Q(e.base,`accent`),n=r.base,e.base=n,i=Ud(Ep(e,t)),e.base=r):(r=Q(e,`accent`),n=r.base);var a=Ep(n,t.havingCrampedStyle()),o=r.isShifty&&Iu(n),s=0;o&&(s=cm(a)?.skew??0);var c=r.label===`\\c`,l=c?a.height+a.depth:Math.min(a.height,t.fontMetrics().xHeight),u;if(r.isStretchy)u=tm(r,t),u=$f({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`elem`,elem:u,wrapperClasses:[`svg-align`],wrapperStyle:s>0?{width:`calc(100% - `+R(2*s)+`)`,marginLeft:R(2*s)}:void 0}]});else{var d,f;r.label===`\\vec`?(d=ip(`vec`,t),f=rp.vec[1]):(d=Uf({type:`textord`,mode:r.mode,text:r.label},t,`textord`),d=Hd(d),d.italic=0,f=d.width,c&&(l+=d.depth)),u=Y([`accent-body`],[d]);var p=r.label===`\\textcircled`;p&&(u.classes.push(`accent-full`),l=a.height);var m=s;p||(m-=f/2),u.style.left=R(m),r.label===`\\textcircled`&&(u.style.top=`.2em`),u=$f({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:-l},{type:`elem`,elem:u}]})}var h=Y([`mord`,`accent`],[u],t);return i?(i.children[0]=h,i.height=Math.max(h.height,i.height),i.classes[0]=`mord`,i):h},um=(e,t)=>{var n=e.isStretchy?Qp(e.label):new Z(`mo`,[Pp(e.label,e.mode)]),r=new Z(`mover`,[Vp(e.base,t),n]);return r.setAttribute(`accent`,`true`),r},dm=new RegExp([`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`].map(e=>`\\`+e).join(`|`));X({type:`accent`,names:[`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`,`\\widecheck`,`\\widehat`,`\\widetilde`,`\\overrightarrow`,`\\overleftarrow`,`\\Overrightarrow`,`\\overleftrightarrow`,`\\overgroup`,`\\overlinesegment`,`\\overleftharpoon`,`\\overrightharpoon`],props:{numArgs:1},handler:(e,t)=>{var n=mp(t[0]),r=!dm.test(e.funcName),i=!r||e.funcName===`\\widehat`||e.funcName===`\\widetilde`||e.funcName===`\\widecheck`;return{type:`accent`,mode:e.parser.mode,label:e.funcName,isStretchy:r,isShifty:i,base:n}},htmlBuilder:lm,mathmlBuilder:um}),X({type:`accent`,names:[`\\'`,"\\`",`\\^`,`\\~`,`\\=`,`\\u`,`\\.`,`\\"`,`\\c`,`\\r`,`\\H`,`\\v`,`\\textcircled`],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`primitive`]},handler:(e,t)=>{var n=t[0],r=e.parser.mode;return r===`math`&&(e.parser.settings.reportNonstrict(`mathVsTextAccents`,`LaTeX's accent `+e.funcName+` works only in text mode`),r=`text`),{type:`accent`,mode:r,label:e.funcName,isStretchy:!1,isShifty:!0,base:n}},htmlBuilder:lm,mathmlBuilder:um}),X({type:`accentUnder`,names:[`\\underleftarrow`,`\\underrightarrow`,`\\underleftrightarrow`,`\\undergroup`,`\\underlinesegment`,`\\utilde`],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`accentUnder`,mode:n.mode,label:r,base:i}},htmlBuilder:(e,t)=>{var n=Ep(e.base,t),r=tm(e,t),i=e.label===`\\utilde`?.12:0;return Y([`mord`,`accentunder`],[$f({positionType:`top`,positionData:n.height,children:[{type:`elem`,elem:r,wrapperClasses:[`svg-align`]},{type:`kern`,size:i},{type:`elem`,elem:n}]})],t)},mathmlBuilder:(e,t)=>{var n=Qp(e.label),r=new Z(`munder`,[Vp(e.base,t),n]);return r.setAttribute(`accentunder`,`true`),r}});var fm=e=>{var t=new Z(`mpadded`,e?[e]:[]);return t.setAttribute(`width`,`+0.6em`),t.setAttribute(`lspace`,`0.3em`),t};X({type:`xArrow`,names:[`\\xleftarrow`,`\\xrightarrow`,`\\xLeftarrow`,`\\xRightarrow`,`\\xleftrightarrow`,`\\xLeftrightarrow`,`\\xhookleftarrow`,`\\xhookrightarrow`,`\\xmapsto`,`\\xrightharpoondown`,`\\xrightharpoonup`,`\\xleftharpoondown`,`\\xleftharpoonup`,`\\xrightleftharpoons`,`\\xleftrightharpoons`,`\\xlongequal`,`\\xtwoheadrightarrow`,`\\xtwoheadleftarrow`,`\\xtofrom`,`\\xrightleftarrows`,`\\xrightequilibrium`,`\\xleftequilibrium`,`\\\\cdrightarrow`,`\\\\cdleftarrow`,`\\\\cdlongequal`],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r,funcName:i}=e;return{type:`xArrow`,mode:r.mode,label:i,body:t[0],below:n[0]}},htmlBuilder(e,t){var n=t.style,r=t.havingStyle(n.sup()),i=Zf(Ep(e.body,r,t),t),a=e.label.slice(0,2)===`\\x`?`x`:`cd`;i.classes.push(a+`-arrow-pad`);var o;e.below&&(r=t.havingStyle(n.sub()),o=Zf(Ep(e.below,r,t),t),o.classes.push(a+`-arrow-pad`));var s=tm(e,t),c=-t.fontMetrics().axisHeight+.5*s.height,l=-t.fontMetrics().axisHeight-.5*s.height-.111;(i.depth>.25||e.label===`\\xleftequilibrium`)&&(l-=i.depth);var u;if(o){var d=-t.fontMetrics().axisHeight+o.height+.5*s.height+.111;u=$f({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c,wrapperClasses:[`svg-align`]},{type:`elem`,elem:o,shift:d}]})}else u=$f({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c,wrapperClasses:[`svg-align`]}]});return Y([`mrel`,`x-arrow`],[u],t)},mathmlBuilder(e,t){var n=Qp(e.label);n.setAttribute(`minsize`,e.label.charAt(0)===`x`?`1.75em`:`3.0em`);var r;if(e.body){var i=fm(Vp(e.body,t));r=e.below?new Z(`munderover`,[n,fm(Vp(e.below,t)),i]):new Z(`mover`,[n,i])}else e.below?r=new Z(`munder`,[n,fm(Vp(e.below,t))]):(r=fm(),r=new Z(`mover`,[n,r]));return r}});function pm(e,t){var n=bp(e.body,t,!0);return Y([e.mclass],n,t)}function mm(e,t){var n,r=zp(e.body,t);return e.mclass===`minner`?n=new Z(`mpadded`,r):e.mclass===`mord`?e.isCharacterBox?(n=r[0],n.type=`mi`):n=new Z(`mi`,r):(e.isCharacterBox?(n=r[0],n.type=`mo`):n=new Z(`mo`,r),e.mclass===`mbin`?(n.attributes.lspace=`0.22em`,n.attributes.rspace=`0.22em`):e.mclass===`mpunct`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0.17em`):e.mclass===`mopen`||e.mclass===`mclose`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0em`):e.mclass===`minner`&&(n.attributes.lspace=`0.0556em`,n.attributes.width=`+0.1111em`)),n}X({type:`mclass`,names:[`\\mathord`,`\\mathbin`,`\\mathrel`,`\\mathopen`,`\\mathclose`,`\\mathpunct`,`\\mathinner`],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`mclass`,mode:n.mode,mclass:`m`+r.slice(5),body:hp(i),isCharacterBox:Iu(i)}},htmlBuilder:pm,mathmlBuilder:mm});var hm=e=>{var t=e.type===`ordgroup`&&e.body.length?e.body[0]:e;return t.type===`atom`&&(t.family===`bin`||t.family===`rel`)?`m`+t.family:`mord`};X({type:`mclass`,names:[`\\@binrel`],props:{numArgs:2},handler(e,t){var{parser:n}=e;return{type:`mclass`,mode:n.mode,mclass:hm(t[0]),body:hp(t[1]),isCharacterBox:Iu(t[1])}}}),X({type:`mclass`,names:[`\\stackrel`,`\\overset`,`\\underset`],props:{numArgs:2},handler(e,t){var{parser:n,funcName:r}=e,i=t[1],a=t[0],o=r===`\\stackrel`?`mrel`:hm(i),s={type:`op`,mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!==`\\stackrel`,body:hp(i)},c={type:`supsub`,mode:a.mode,base:s,sup:r===`\\underset`?null:a,sub:r===`\\underset`?a:null};return{type:`mclass`,mode:n.mode,mclass:o,body:[c],isCharacterBox:Iu(c)}},htmlBuilder:pm,mathmlBuilder:mm}),X({type:`pmb`,names:[`\\pmb`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`pmb`,mode:n.mode,mclass:hm(t[0]),body:hp(t[0])}},htmlBuilder(e,t){var n=bp(e.body,t,!0),r=Y([e.mclass],n,t);return r.style.textShadow=`0.02em 0.01em 0.04px`,r},mathmlBuilder(e,t){var n=new Z(`mstyle`,zp(e.body,t));return n.setAttribute(`style`,`text-shadow: 0.02em 0.01em 0.04px`),n}});var gm={">":`\\\\cdrightarrow`,"<":`\\\\cdleftarrow`,"=":`\\\\cdlongequal`,A:`\\uparrow`,V:`\\downarrow`,"|":`\\Vert`,".":`no arrow`},_m=()=>({type:`styling`,body:[],mode:`math`,style:`display`,resetFont:!0}),vm=e=>e.type===`textord`&&e.text===`@`,ym=(e,t)=>(e.type===`mathord`||e.type===`atom`)&&e.text===t;function bm(e,t,n){var r=gm[e];switch(r){case`\\\\cdrightarrow`:case`\\\\cdleftarrow`:return n.callFunction(r,[t[0]],[t[1]]);case`\\uparrow`:case`\\downarrow`:var i=n.callFunction(`\\\\cdleft`,[t[0]],[]),a={type:`atom`,text:r,mode:`math`,family:`rel`},o={type:`ordgroup`,mode:`math`,body:[i,n.callFunction(`\\Big`,[a],[]),n.callFunction(`\\\\cdright`,[t[1]],[])]};return n.callFunction(`\\\\cdparent`,[o],[]);case`\\\\cdlongequal`:return n.callFunction(`\\\\cdlongequal`,[],[]);case`\\Vert`:return n.callFunction(`\\Big`,[{type:`textord`,text:`\\Vert`,mode:`math`}],[]);default:return{type:`textord`,text:` `,mode:`math`}}}function xm(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set(`\\cr`,`\\\\\\relax`),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,`\\\\`)),e.gullet.endGroup(),e.gullet.beginGroup();var n=e.fetch().text;if(n===`&`||n===`\\\\`)e.consume();else if(n===`\\end`){t[t.length-1].length===0&&t.pop();break}else throw new I(`Expected \\\\ or \\cr or \\end`,e.nextToken)}for(var r=[],i=[r],a=0;a<t.length;a++){for(var o=t[a],s=_m(),c=0;c<o.length;c++)if(!vm(o[c]))s.body.push(o[c]);else{r.push(s),c+=1;var l=om(o[c]).text,u=[,,];if(u[0]={type:`ordgroup`,mode:`math`,body:[]},u[1]={type:`ordgroup`,mode:`math`,body:[]},!`=|.`.includes(l))if(`<>AV`.includes(l))for(var d=0;d<2;d++){for(var f=!0,p=c+1;p<o.length;p++){if(ym(o[p],l)){f=!1,c=p;break}if(vm(o[p]))throw new I(`Missing a `+l+` character to complete a CD arrow.`,o[p]);u[d].body.push(o[p])}if(f)throw new I(`Missing a `+l+` character to complete a CD arrow.`,o[c])}else throw new I(`Expected one of "<>AV=|." after @`,o[c]);var m={type:`styling`,body:[bm(l,u,e)],mode:`math`,style:`display`,resetFont:!0};r.push(m),s=_m()}a%2==0?r.push(s):r.shift(),r=[],i.push(r)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:`math`,body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:Array(i[0].length).fill({type:`align`,align:`c`,pregap:.25,postgap:.25}),colSeparationType:`CD`,hLinesBeforeRow:Array(i.length+1).fill([])}}X({type:`cdlabel`,names:[`\\\\cdleft`,`\\\\cdright`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:`cdlabel`,mode:n.mode,side:r.slice(4),label:t[0]}},htmlBuilder(e,t){var n=t.havingStyle(t.style.sup()),r=Zf(Ep(e.label,n,t),t);return r.classes.push(`cd-label-`+e.side),r.style.bottom=R(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(e,t){var n=new Z(`mrow`,[Vp(e.label,t)]);return n=new Z(`mpadded`,[n]),n.setAttribute(`width`,`0`),e.side===`left`&&n.setAttribute(`lspace`,`-1width`),n.setAttribute(`voffset`,`0.7em`),n=new Z(`mstyle`,[n]),n.setAttribute(`displaystyle`,`false`),n.setAttribute(`scriptlevel`,`1`),n}}),X({type:`cdlabelparent`,names:[`\\\\cdparent`],props:{numArgs:1},handler(e,t){var{parser:n}=e;return{type:`cdlabelparent`,mode:n.mode,fragment:t[0]}},htmlBuilder(e,t){var n=Zf(Ep(e.fragment,t),t);return n.classes.push(`cd-vert-arrow`),n},mathmlBuilder(e,t){return new Z(`mrow`,[Vp(e.fragment,t)])}}),X({type:`textord`,names:[`\\@char`],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:n}=e,r=Q(t[0],`ordgroup`).body,i=``,a=0;a<r.length;a++){var o=Q(r[a],`textord`);i+=o.text}var s=parseInt(i),c;if(isNaN(s))throw new I(`\\@char has non-numeric argument `+i);if(s<0||s>=1114111)throw new I(`\\@char with invalid code point `+i);return s<=65535?c=String.fromCharCode(s):(s-=65536,c=String.fromCharCode((s>>10)+55296,(s&1023)+56320)),{type:`textord`,mode:n.mode,text:c}}});var Sm=(e,t)=>Xf(bp(e.body,t.withColor(e.color),!1)),Cm=(e,t)=>{var n=new Z(`mstyle`,zp(e.body,t.withColor(e.color)));return n.setAttribute(`mathcolor`,e.color),n};X({type:`color`,names:[`\\textcolor`],props:{numArgs:2,allowedInText:!0,argTypes:[`color`,`original`]},handler(e,t){var{parser:n}=e,r=Q(t[0],`color-token`).color,i=t[1];return{type:`color`,mode:n.mode,color:r,body:hp(i)}},htmlBuilder:Sm,mathmlBuilder:Cm}),X({type:`color`,names:[`\\color`],props:{numArgs:1,allowedInText:!0,argTypes:[`color`]},handler(e,t){var{parser:n,breakOnTokenText:r}=e,i=Q(t[0],`color-token`).color;n.gullet.macros.set(`\\current@color`,i);var a=n.parseExpression(!0,r);return{type:`color`,mode:n.mode,color:i,body:a}},htmlBuilder:Sm,mathmlBuilder:Cm}),X({type:`cr`,names:[`\\\\`],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,n){var{parser:r}=e,i=r.gullet.future().text===`[`?r.parseSizeGroup(!0):null,a=!r.settings.displayMode||!r.settings.useStrictBehavior(`newLineInDisplayMode`,`In LaTeX, \\\\ or \\newline does nothing in display mode`);return{type:`cr`,mode:r.mode,newLine:a,size:i&&Q(i,`size`).value}},htmlBuilder(e,t){var n=Y([`mspace`],[],t);return e.newLine&&(n.classes.push(`newline`),e.size&&(n.style.marginTop=R(Dd(e.size,t)))),n},mathmlBuilder(e,t){var n=new Z(`mspace`);return e.newLine&&(n.setAttribute(`linebreak`,`newline`),e.size&&n.setAttribute(`height`,R(Dd(e.size,t)))),n}});var wm={"\\global":`\\global`,"\\long":`\\\\globallong`,"\\\\globallong":`\\\\globallong`,"\\def":`\\gdef`,"\\gdef":`\\gdef`,"\\edef":`\\xdef`,"\\xdef":`\\xdef`,"\\let":`\\\\globallet`,"\\futurelet":`\\\\globalfuture`},Tm=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new I(`Expected a control sequence`,e);return t},Em=e=>{var t=e.gullet.popToken();return t.text===`=`&&(t=e.gullet.popToken(),t.text===` `&&(t=e.gullet.popToken())),t},Dm=(e,t,n,r)=>{var i=e.gullet.macros.get(n.text);i??=(n.noexpand=!0,{tokens:[n],numArgs:0,unexpandable:!e.gullet.isExpandable(n.text)}),e.gullet.macros.set(t,i,r)};X({type:`internal`,names:[`\\global`,`\\long`,`\\\\globallong`],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:n}=e;t.consumeSpaces();var r=t.fetch();if(wm[r.text])return(n===`\\global`||n===`\\\\globallong`)&&(r.text=wm[r.text]),Q(t.parseFunction(),`internal`);throw new I(`Invalid token after macro prefix`,r)}}),X({type:`internal`,names:[`\\def`,`\\gdef`,`\\edef`,`\\xdef`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=t.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new I(`Expected a control sequence`,r);for(var a=0,o,s=[[]];t.gullet.future().text!==`{`;)if(r=t.gullet.popToken(),r.text===`#`){if(t.gullet.future().text===`{`){o=t.gullet.future(),s[a].push(`{`);break}if(r=t.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new I(`Invalid argument number "`+r.text+`"`);if(parseInt(r.text)!==a+1)throw new I(`Argument number "`+r.text+`" out of order`);a++,s.push([])}else if(r.text===`EOF`)throw new I(`Expected a macro definition`);else s[a].push(r.text);var{tokens:c}=t.gullet.consumeArg();return o&&c.unshift(o),(n===`\\edef`||n===`\\xdef`)&&(c=t.gullet.expandTokens(c),c.reverse()),t.gullet.macros.set(i,{tokens:c,numArgs:a,delimiters:s},n===wm[n]),{type:`internal`,mode:t.mode}}}),X({type:`internal`,names:[`\\let`,`\\\\globallet`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Tm(t.gullet.popToken());return t.gullet.consumeSpaces(),Dm(t,r,Em(t),n===`\\\\globallet`),{type:`internal`,mode:t.mode}}}),X({type:`internal`,names:[`\\futurelet`,`\\\\globalfuture`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:n}=e,r=Tm(t.gullet.popToken()),i=t.gullet.popToken(),a=t.gullet.popToken();return Dm(t,r,a,n===`\\\\globalfuture`),t.gullet.pushToken(a),t.gullet.pushToken(i),{type:`internal`,mode:t.mode}}});var Om=function(e,t,n){var r=Yd(Qd.math[e]&&Qd.math[e].replace||e,t,n);if(!r)throw Error(`Unsupported symbol `+e+` and font size `+t+`.`);return r},km=function(e,t,n,r){var i=n.havingBaseStyle(t),a=Y(r.concat(i.sizingClasses(n)),[e],n),o=i.sizeMultiplier/n.sizeMultiplier;return a.height*=o,a.depth*=o,a.maxFontSize=i.sizeMultiplier,a},Am=function(e,t,n){var r=t.havingBaseStyle(n),i=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push(`delimcenter`),e.style.top=R(i),e.height-=i,e.depth+=i},jm=function(e,t,n,r,i,a){var o=km(Bf(e,`Main-Regular`,i,r),t,r,a);return n&&Am(o,r,t),o},Mm=function(e,t,n,r){return Bf(e,`Size`+t+`-Regular`,n,r)},Nm=function(e,t,n,r,i,a){var o=Mm(e,t,i,r),s=km(Y([`delimsizing`,`size`+t],[o],r),L.TEXT,r,a);return n&&Am(s,r,L.TEXT),s},Pm=function(e,t,n){return{type:`elem`,elem:Y([`delimsizinginner`,t===`Size1-Regular`?`delim-size1`:`delim-size4`],[Y([],[Bf(e,t,n)])])}},Fm=function(e,t,n){var r=Gd[`Size4-Regular`][e.charCodeAt(0)]?Gd[`Size4-Regular`][e.charCodeAt(0)][4]:Gd[`Size1-Regular`][e.charCodeAt(0)][4],i=qf([],[new zd([new Bd(`inner`,yd(e,Math.round(1e3*t)))],{width:R(r),height:R(t),style:`width:`+R(r),viewBox:`0 0 `+1e3*r+` `+Math.round(1e3*t),preserveAspectRatio:`xMinYMin`})],n);return i.height=t,i.style.height=R(t),i.style.width=R(r),{type:`elem`,elem:i}},Im=.008,Lm={type:`kern`,size:-1*Im},Rm=new Set([`|`,`\\lvert`,`\\rvert`,`\\vert`]),zm=new Set([`\\|`,`\\lVert`,`\\rVert`,`\\Vert`]),Bm=function(e,t,n,r,i,a){var o,s,c,l,u=``,d=0;o=c=l=e,s=null;var f=`Size1-Regular`;e===`\\uparrow`?c=l=`⏐`:e===`\\Uparrow`?c=l=`‖`:e===`\\downarrow`?o=c=`⏐`:e===`\\Downarrow`?o=c=`‖`:e===`\\updownarrow`?(o=`\\uparrow`,c=`⏐`,l=`\\downarrow`):e===`\\Updownarrow`?(o=`\\Uparrow`,c=`‖`,l=`\\Downarrow`):Rm.has(e)?(c=`∣`,u=`vert`,d=333):zm.has(e)?(c=`∥`,u=`doublevert`,d=556):e===`[`||e===`\\lbrack`?(o=`⎡`,c=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lbrack`,d=667):e===`]`||e===`\\rbrack`?(o=`⎤`,c=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rbrack`,d=667):e===`\\lfloor`||e===`⌊`?(c=o=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lfloor`,d=667):e===`\\lceil`||e===`⌈`?(o=`⎡`,c=l=`⎢`,f=`Size4-Regular`,u=`lceil`,d=667):e===`\\rfloor`||e===`⌋`?(c=o=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rfloor`,d=667):e===`\\rceil`||e===`⌉`?(o=`⎤`,c=l=`⎥`,f=`Size4-Regular`,u=`rceil`,d=667):e===`(`||e===`\\lparen`?(o=`⎛`,c=`⎜`,l=`⎝`,f=`Size4-Regular`,u=`lparen`,d=875):e===`)`||e===`\\rparen`?(o=`⎞`,c=`⎟`,l=`⎠`,f=`Size4-Regular`,u=`rparen`,d=875):e===`\\{`||e===`\\lbrace`?(o=`⎧`,s=`⎨`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\}`||e===`\\rbrace`?(o=`⎫`,s=`⎬`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lgroup`||e===`⟮`?(o=`⎧`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\rgroup`||e===`⟯`?(o=`⎫`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lmoustache`||e===`⎰`?(o=`⎧`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):(e===`\\rmoustache`||e===`⎱`)&&(o=`⎫`,l=`⎩`,c=`⎪`,f=`Size4-Regular`);var p=Om(o,f,i),m=p.height+p.depth,h=Om(c,f,i),g=h.height+h.depth,_=Om(l,f,i),v=_.height+_.depth,y=0,b=1;if(s!==null){var x=Om(s,f,i);y=x.height+x.depth,b=2}var S=m+v+y,C=S+Math.max(0,Math.ceil((t-S)/(b*g)))*b*g,w=r.fontMetrics().axisHeight;n&&(w*=r.sizeMultiplier);var T=C/2-w,E=[];if(u.length>0){var D=C-m-v,O=Math.round(C*1e3),ee=xd(u,Math.round(D*1e3)),te=new Bd(u,ee),ne=R(d/1e3),re=R(O/1e3),ie=qf([],[new zd([te],{width:ne,height:re,viewBox:`0 0 `+d+` `+O})],r);ie.height=O/1e3,ie.style.width=ne,ie.style.height=re,E.push({type:`elem`,elem:ie})}else{if(E.push(Pm(l,f,i)),E.push(Lm),s===null){var ae=C-m-v+2*Im;E.push(Fm(c,ae,r))}else{var oe=(C-m-v-y)/2+2*Im;E.push(Fm(c,oe,r)),E.push(Lm),E.push(Pm(s,f,i)),E.push(Lm),E.push(Fm(c,oe,r))}E.push(Lm),E.push(Pm(o,f,i))}var k=r.havingBaseStyle(L.TEXT);return km(Y([`delimsizing`,`mult`],[$f({positionType:`bottom`,positionData:T,children:E})],k),L.TEXT,r,a)},Vm=80,Hm=.08,Um=function(e,t,n,r,i){return qf([`hide-tail`],[new zd([new Bd(e,vd(e,r,n))],{width:`400em`,height:R(t),viewBox:`0 0 400000 `+n,preserveAspectRatio:`xMinYMin slice`})],i)},Wm=function(e,t){var n=t.havingBaseSizing(),r=eh(`\\surd`,e*n.sizeMultiplier,Qm,n),i=n.sizeMultiplier,a=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,s,c,l,u;return r.type===`small`?(l=1e3+1e3*a+Vm,e<1?i=1:e<1.4&&(i=.7),s=(1+a+Hm)/i,c=(1+a)/i,o=Um(`sqrtMain`,s,l,a,t),o.style.minWidth=`0.853em`,u=.833/i):r.type===`large`?(l=(1e3+Vm)*Jm[r.size],c=(Jm[r.size]+a)/i,s=(Jm[r.size]+a+Hm)/i,o=Um(`sqrtSize`+r.size,s,l,a,t),o.style.minWidth=`1.02em`,u=1/i):(s=e+a+Hm,c=e+a,l=Math.floor(1e3*e+a)+Vm,o=Um(`sqrtTall`,s,l,a,t),o.style.minWidth=`0.742em`,u=1.056),o.height=c,o.style.height=R(s),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+a)*i}},Gm=new Set([`(`,`\\lparen`,`)`,`\\rparen`,`[`,`\\lbrack`,`]`,`\\rbrack`,`\\{`,`\\lbrace`,`\\}`,`\\rbrace`,`\\lfloor`,`\\rfloor`,`⌊`,`⌋`,`\\lceil`,`\\rceil`,`⌈`,`⌉`,`\\surd`]),Km=new Set([`\\uparrow`,`\\downarrow`,`\\updownarrow`,`\\Uparrow`,`\\Downarrow`,`\\Updownarrow`,`|`,`\\|`,`\\vert`,`\\Vert`,`\\lvert`,`\\rvert`,`\\lVert`,`\\rVert`,`\\lgroup`,`\\rgroup`,`⟮`,`⟯`,`\\lmoustache`,`\\rmoustache`,`⎰`,`⎱`]),qm=new Set([`<`,`>`,`\\langle`,`\\rangle`,`/`,`\\backslash`,`\\lt`,`\\gt`]),Jm=[0,1.2,1.8,2.4,3],Ym=function(e,t,n,r,i){if(e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`),Gm.has(e)||qm.has(e))return Nm(e,t,!1,n,r,i);if(Km.has(e))return Bm(e,Jm[t],!1,n,r,i);throw new I(`Illegal delimiter: '`+e+`'`)},Xm=[{type:`small`,style:L.SCRIPTSCRIPT},{type:`small`,style:L.SCRIPT},{type:`small`,style:L.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4}],Zm=[{type:`small`,style:L.SCRIPTSCRIPT},{type:`small`,style:L.SCRIPT},{type:`small`,style:L.TEXT},{type:`stack`}],Qm=[{type:`small`,style:L.SCRIPTSCRIPT},{type:`small`,style:L.SCRIPT},{type:`small`,style:L.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4},{type:`stack`}],$m=function(e){if(e.type===`small`)return`Main-Regular`;if(e.type===`large`)return`Size`+e.size+`-Regular`;if(e.type===`stack`)return`Size4-Regular`;var t=e.type;throw Error(`Add support for delim type '`+t+`' here.`)},eh=function(e,t,n,r){for(var i=Math.min(2,3-r.style.size);i<n.length;i++){var a=n[i];if(a.type===`stack`)break;var o=Om(e,$m(a),`math`),s=o.height+o.depth;if(a.type===`small`){var c=r.havingBaseStyle(a.style);s*=c.sizeMultiplier}if(s>t)return a}return n[n.length-1]},th=function(e,t,n,r,i,a){e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`);var o=qm.has(e)?Xm:Gm.has(e)?Qm:Zm,s=eh(e,t,o,r);return s.type===`small`?jm(e,s.style,n,r,i,a):s.type===`large`?Nm(e,s.size,n,r,i,a):Bm(e,t,n,r,i,a)},nh=function(e,t,n,r,i,a){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,s=901,c=5/r.fontMetrics().ptPerEm,l=Math.max(t-o,n+o);return th(e,Math.max(l/500*s,2*l-c),!0,r,i,a)},rh={"\\bigl":{mclass:`mopen`,size:1},"\\Bigl":{mclass:`mopen`,size:2},"\\biggl":{mclass:`mopen`,size:3},"\\Biggl":{mclass:`mopen`,size:4},"\\bigr":{mclass:`mclose`,size:1},"\\Bigr":{mclass:`mclose`,size:2},"\\biggr":{mclass:`mclose`,size:3},"\\Biggr":{mclass:`mclose`,size:4},"\\bigm":{mclass:`mrel`,size:1},"\\Bigm":{mclass:`mrel`,size:2},"\\biggm":{mclass:`mrel`,size:3},"\\Biggm":{mclass:`mrel`,size:4},"\\big":{mclass:`mord`,size:1},"\\Big":{mclass:`mord`,size:2},"\\bigg":{mclass:`mord`,size:3},"\\Bigg":{mclass:`mord`,size:4}},ih=new Set(`(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,⌊,⌋,\\lceil,\\rceil,⌈,⌉,<,>,\\langle,⟨,\\rangle,⟩,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,⟮,⟯,\\lmoustache,\\rmoustache,⎰,⎱,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.`.split(`,`));function ah(e){return`isMiddle`in e}function oh(e,t){var n=sm(e);if(n&&ih.has(n.text))return n;throw n?new I(`Invalid delimiter '`+n.text+`' after '`+t.funcName+`'`,e):new I(`Invalid delimiter type '`+e.type+`'`,e)}X({type:`delimsizing`,names:[`\\bigl`,`\\Bigl`,`\\biggl`,`\\Biggl`,`\\bigr`,`\\Bigr`,`\\biggr`,`\\Biggr`,`\\bigm`,`\\Bigm`,`\\biggm`,`\\Biggm`,`\\big`,`\\Big`,`\\bigg`,`\\Bigg`],props:{numArgs:1,argTypes:[`primitive`]},handler:(e,t)=>{var n=oh(t[0],e);return{type:`delimsizing`,mode:e.parser.mode,size:rh[e.funcName].size,mclass:rh[e.funcName].mclass,delim:n.text}},htmlBuilder:(e,t)=>e.delim===`.`?Y([e.mclass]):Ym(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!==`.`&&t.push(Pp(e.delim,e.mode));var n=new Z(`mo`,t);e.mclass===`mopen`||e.mclass===`mclose`?n.setAttribute(`fence`,`true`):n.setAttribute(`fence`,`false`),n.setAttribute(`stretchy`,`true`);var r=R(Jm[e.size]);return n.setAttribute(`minsize`,r),n.setAttribute(`maxsize`,r),n}});function sh(e){if(!e.body)throw Error(`Bug: The leftright ParseNode wasn't fully parsed.`)}X({type:`leftright-right`,names:[`\\right`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=e.parser.gullet.macros.get(`\\current@color`);if(n&&typeof n!=`string`)throw new I(`\\current@color set to non-string in \\right`);return{type:`leftright-right`,mode:e.parser.mode,delim:oh(t[0],e).text,color:n}}}),X({type:`leftright`,names:[`\\left`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=oh(t[0],e),r=e.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect(`\\right`,!1);var a=Q(r.parseFunction(),`leftright-right`);return{type:`leftright`,mode:r.mode,body:i,left:n.text,right:a.delim,rightColor:a.color}},htmlBuilder:(e,t)=>{sh(e);for(var n=bp(e.body,t,!0,[`mopen`,`mclose`]),r=0,i=0,a=!1,o=0;o<n.length;o++){var s=n[o];ah(s)?a=!0:(r=Math.max(n[o].height,r),i=Math.max(n[o].depth,i))}r*=t.sizeMultiplier,i*=t.sizeMultiplier;var c=e.left===`.`?Tp(t,[`mopen`]):nh(e.left,r,i,t,e.mode,[`mopen`]);if(n.unshift(c),a)for(var l=1;l<n.length;l++){var u=n[l];if(ah(u)){var d=u.isMiddle;n[l]=nh(d.delim,r,i,d.options,e.mode,[])}}var f;if(e.right===`.`)f=Tp(t,[`mclose`]);else{var p=e.rightColor?t.withColor(e.rightColor):t;f=nh(e.right,r,i,p,e.mode,[`mclose`])}return n.push(f),Y([`minner`],n,t)},mathmlBuilder:(e,t)=>{sh(e);var n=zp(e.body,t);if(e.left!==`.`){var r=new Z(`mo`,[Pp(e.left,e.mode)]);r.setAttribute(`fence`,`true`),n.unshift(r)}if(e.right!==`.`){var i=new Z(`mo`,[Pp(e.right,e.mode)]);i.setAttribute(`fence`,`true`),e.rightColor&&i.setAttribute(`mathcolor`,e.rightColor),n.push(i)}return Fp(n)}}),X({type:`middle`,names:[`\\middle`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var n=oh(t[0],e);if(!e.parser.leftrightDepth)throw new I(`\\middle without preceding \\left`,n);return{type:`middle`,mode:e.parser.mode,delim:n.text}},htmlBuilder:(e,t)=>{var n;return e.delim===`.`?n=Tp(t,[]):(n=Ym(e.delim,1,t,e.mode,[]),n.isMiddle={delim:e.delim,options:t}),n},mathmlBuilder:(e,t)=>{var n=new Z(`mo`,[e.delim===`\\vert`||e.delim===`|`?Pp(`|`,`text`):Pp(e.delim,e.mode)]);return n.setAttribute(`fence`,`true`),n.setAttribute(`lspace`,`0.05em`),n.setAttribute(`rspace`,`0.05em`),n}});var ch=(e,t)=>{var n=Zf(Ep(e.body,t),t),r=e.label.slice(1),i=t.sizeMultiplier,a,o,s=Iu(e.body);if(r===`sout`)a=Y([`stretchy`,`sout`]),a.height=t.fontMetrics().defaultRuleThickness/i,o=-.5*t.fontMetrics().xHeight;else if(r===`phase`){var c=Dd({number:.6,unit:`pt`},t),l=Dd({number:.35,unit:`ex`},t),u=t.havingBaseSizing();i/=u.sizeMultiplier;var d=n.height+n.depth+c+l;n.style.paddingLeft=R(d/2+c);var f=Math.floor(1e3*d*i);a=qf([`hide-tail`],[new zd([new Bd(`phase`,gd(f))],{width:`400em`,height:R(f/1e3),viewBox:`0 0 400000 `+f,preserveAspectRatio:`xMinYMin slice`})],t),a.style.height=R(d),o=n.depth+c+l}else{/cancel/.test(r)?s||n.classes.push(`cancel-pad`):r===`angl`?n.classes.push(`anglpad`):n.classes.push(`boxpad`);var p,m,h=0;/box/.test(r)?(h=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),p=t.fontMetrics().fboxsep+(r===`colorbox`?0:h),m=p):r===`angl`?(h=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),p=4*h,m=Math.max(0,.25-n.depth)):(p=s?.2:0,m=p),a=nm(n,r,p,m,t),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle=`solid`,a.style.borderWidth=R(h)):r===`angl`&&h!==.049&&(a.style.borderTopWidth=R(h),a.style.borderRightWidth=R(h)),o=n.depth+m,e.backgroundColor&&(a.style.backgroundColor=e.backgroundColor,e.borderColor&&(a.style.borderColor=e.borderColor))}var g;if(e.backgroundColor)g=$f({positionType:`individualShift`,children:[{type:`elem`,elem:a,shift:o},{type:`elem`,elem:n,shift:0}]});else{var _=/cancel|phase/.test(r)?[`svg-align`]:[];g=$f({positionType:`individualShift`,children:[{type:`elem`,elem:n,shift:0},{type:`elem`,elem:a,shift:o,wrapperClasses:_}]})}return/cancel/.test(r)&&(g.height=n.height,g.depth=n.depth),/cancel/.test(r)&&!s?Y([`mord`,`cancel-lap`],[g],t):Y([`mord`],[g],t)},lh=(e,t)=>{var n,r=new Z(e.label.includes(`colorbox`)?`mpadded`:`menclose`,[Vp(e.body,t)]);switch(e.label){case`\\cancel`:r.setAttribute(`notation`,`updiagonalstrike`);break;case`\\bcancel`:r.setAttribute(`notation`,`downdiagonalstrike`);break;case`\\phase`:r.setAttribute(`notation`,`phasorangle`);break;case`\\sout`:r.setAttribute(`notation`,`horizontalstrike`);break;case`\\fbox`:r.setAttribute(`notation`,`box`);break;case`\\angl`:r.setAttribute(`notation`,`actuarial`);break;case`\\fcolorbox`:case`\\colorbox`:if(n=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,r.setAttribute(`width`,`+`+2*n+`pt`),r.setAttribute(`height`,`+`+2*n+`pt`),r.setAttribute(`lspace`,n+`pt`),r.setAttribute(`voffset`,n+`pt`),e.label===`\\fcolorbox`){var i=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);r.setAttribute(`style`,`border: `+R(i)+` solid `+e.borderColor)}break;case`\\xcancel`:r.setAttribute(`notation`,`updiagonalstrike downdiagonalstrike`);break}return e.backgroundColor&&r.setAttribute(`mathbackground`,e.backgroundColor),r};X({type:`enclose`,names:[`\\colorbox`],props:{numArgs:2,allowedInText:!0,argTypes:[`color`,`hbox`]},handler(e,t,n){var{parser:r,funcName:i}=e,a=Q(t[0],`color-token`).color,o=t[1];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:a,body:o}},htmlBuilder:ch,mathmlBuilder:lh}),X({type:`enclose`,names:[`\\fcolorbox`],props:{numArgs:3,allowedInText:!0,argTypes:[`color`,`color`,`hbox`]},handler(e,t,n){var{parser:r,funcName:i}=e,a=Q(t[0],`color-token`).color,o=Q(t[1],`color-token`).color,s=t[2];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:o,borderColor:a,body:s}},htmlBuilder:ch,mathmlBuilder:lh}),X({type:`enclose`,names:[`\\fbox`],props:{numArgs:1,argTypes:[`hbox`],allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`enclose`,mode:n.mode,label:`\\fbox`,body:t[0]}}}),X({type:`enclose`,names:[`\\cancel`,`\\bcancel`,`\\xcancel`,`\\phase`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}},htmlBuilder:ch,mathmlBuilder:lh}),X({type:`enclose`,names:[`\\sout`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e;n.mode===`math`&&n.settings.reportNonstrict(`mathVsSout`,`LaTeX's \\sout works only in text mode`);var i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}},htmlBuilder:ch,mathmlBuilder:lh}),X({type:`enclose`,names:[`\\angl`],props:{numArgs:1,argTypes:[`hbox`],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:`enclose`,mode:n.mode,label:`\\angl`,body:t[0]}}});var uh={};function dh(e){for(var{type:t,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=e,s={type:t,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},c=0;c<n.length;++c)uh[n[c]]=s;a&&(dp[t]=a),o&&(fp[t]=o)}var fh={};function $(e,t){fh[e]=t}var ph=class e{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(t,n){return n?!t||!t.loc||!n.loc||t.loc.lexer!==n.loc.lexer?null:new e(t.loc.lexer,t.loc.start,n.loc.end):t&&t.loc}},mh=class e{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(t,n){return new e(n,ph.range(this,t))}};function hh(e){var t=[];e.consumeSpaces();var n=e.fetch().text;for(n===`\\relax`&&(e.consume(),e.consumeSpaces(),n=e.fetch().text);n===`\\hline`||n===`\\hdashline`;)e.consume(),t.push(n===`\\hdashline`),e.consumeSpaces(),n=e.fetch().text;return t}var gh=e=>{if(!e.parser.settings.displayMode)throw new I(`{`+e.envName+`} can be used only in display mode.`)},_h=new Set([`gather`,`gather*`]);function vh(e){if(!e.includes(`ed`))return!e.includes(`*`)}function yh(e,t,n){var{hskipBeforeAndAfter:r,addJot:i,cols:a,arraystretch:o,colSeparationType:s,autoTag:c,singleRow:l,emptySingleRow:u,maxNumCols:d,leqno:f}=t;if(e.gullet.beginGroup(),l||e.gullet.macros.set(`\\cr`,`\\\\\\relax`),!o){var p=e.gullet.expandMacroAsText(`\\arraystretch`);if(p==null)o=1;else if(o=parseFloat(p),!o||o<0)throw new I(`Invalid \\arraystretch: `+p)}e.gullet.beginGroup();var m=[],h=[m],g=[],_=[],v=c==null?void 0:[];function y(){c&&e.gullet.macros.set(`\\@eqnsw`,`1`,!0)}function b(){v&&(e.gullet.macros.get(`\\df@tag`)?(v.push(e.subparse([new mh(`\\df@tag`)])),e.gullet.macros.set(`\\df@tag`,void 0,!0)):v.push(!!c&&e.gullet.macros.get(`\\@eqnsw`)===`1`))}for(y(),_.push(hh(e));;){var x=e.parseExpression(!1,l?`\\end`:`\\\\`);e.gullet.endGroup(),e.gullet.beginGroup();var S={type:`ordgroup`,mode:e.mode,body:x};n&&(S={type:`styling`,mode:e.mode,style:n,resetFont:!0,body:[S]}),m.push(S);var C=e.fetch().text;if(C===`&`){if(d&&m.length===d){if(l||s)throw new I(`Too many tab characters: &`,e.nextToken);e.settings.reportNonstrict(`textEnv`,`Too few columns specified in the {array} column argument.`)}e.consume()}else if(C===`\\end`){b(),m.length===1&&S.type===`styling`&&S.body.length===1&&S.body[0].type===`ordgroup`&&S.body[0].body.length===0&&(h.length>1||!u)&&h.pop(),_.length<h.length+1&&_.push([]);break}else if(C===`\\\\`){e.consume();var w=void 0;e.gullet.future().text!==` `&&(w=e.parseSizeGroup(!0)),g.push(w?w.value:null),b(),_.push(hh(e)),m=[],h.push(m),y()}else throw new I(`Expected & or \\\\ or \\cr or \\end`,e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:e.mode,addJot:i,arraystretch:o,body:h,cols:a,rowGaps:g,hskipBeforeAndAfter:r,hLinesBeforeRow:_,colSeparationType:s,tags:v,leqno:f}}function bh(e){return e.slice(0,1)===`d`?`display`:`text`}var xh=function(e,t){var n,r,i=e.body.length,a=e.hLinesBeforeRow,o=0,s=Array(i),c=[],l=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,d=5*u;e.colSeparationType&&e.colSeparationType===`small`&&(d=.2778*(t.havingStyle(L.SCRIPT).sizeMultiplier/t.sizeMultiplier));var f=e.colSeparationType===`CD`?Dd({number:3,unit:`ex`},t):12*u,p=3*u,m=e.arraystretch*f,h=.7*m,g=.3*m,_=0;function v(e){for(var t=0;t<e.length;++t)t>0&&(_+=.25),c.push({pos:_,isDashed:e[t]})}for(v(a[0]),n=0;n<e.body.length;++n){var y=e.body[n],b=h,x=g;o<y.length&&(o=y.length);var S={cells:Array(y.length),height:0,depth:0,pos:0};for(r=0;r<y.length;++r){var C=Ep(y[r],t);x<C.depth&&(x=C.depth),b<C.height&&(b=C.height),S.cells[r]=C}var w=e.rowGaps[n],T=0;w&&(T=Dd(w,t),T>0&&(T+=g,x<T&&(x=T),T=0)),e.addJot&&n<e.body.length-1&&(x+=p),S.height=b,S.depth=x,_+=b,S.pos=_,_+=x+T,s[n]=S,v(a[n+1])}var E=_/2+t.fontMetrics().axisHeight,D=e.cols||[],O=[],ee,te,ne=[];if(e.tags&&e.tags.some(e=>e))for(n=0;n<i;++n){var re=s[n],ie=re.pos-E,ae=e.tags[n],oe=void 0;oe=ae===!0?Y([`eqn-num`],[],t):ae===!1?Y([],[],t):Y([],bp(ae,t,!0),t),oe.depth=re.depth,oe.height=re.height,ne.push({type:`elem`,elem:oe,shift:ie})}for(r=0,te=0;r<o||te<D.length;++r,++te){for(var k=D[te],se=!0;(ce=k)?.type===`separator`;){var ce;if(se||(ee=Y([`arraycolsep`],[]),ee.style.width=R(t.fontMetrics().doubleRuleSep),O.push(ee)),k.separator===`|`||k.separator===`:`){var le=k.separator===`|`?`solid`:`dashed`,ue=Y([`vertical-separator`],[],t);ue.style.height=R(_),ue.style.borderRightWidth=R(l),ue.style.borderRightStyle=le,ue.style.margin=`0 `+R(-l/2);var de=_-E;de&&(ue.style.verticalAlign=R(-de)),O.push(ue)}else throw new I(`Invalid separator type: `+k.separator);te++,k=D[te],se=!1}if(!(r>=o)){var fe=void 0;(r>0||e.hskipBeforeAndAfter)&&(fe=k?.pregap??d,fe!==0&&(ee=Y([`arraycolsep`],[]),ee.style.width=R(fe),O.push(ee)));var pe=[];for(n=0;n<i;++n){var me=s[n],he=me.cells[r];if(he){var ge=me.pos-E;he.depth=me.depth,he.height=me.height,pe.push({type:`elem`,elem:he,shift:ge})}}var _e=$f({positionType:`individualShift`,children:pe}),ve=Y([`col-align-`+(k?.align||`c`)],[_e]);O.push(ve),(r<o-1||e.hskipBeforeAndAfter)&&(fe=k?.postgap??d,fe!==0&&(ee=Y([`arraycolsep`],[]),ee.style.width=R(fe),O.push(ee)))}}var ye=Y([`mtable`],O);if(c.length>0){for(var be=Jf(`hline`,t,l),xe=Jf(`hdashline`,t,l),Se=[{type:`elem`,elem:ye,shift:0}];c.length>0;){var Ce=c.pop(),we=Ce.pos-E;Ce.isDashed?Se.push({type:`elem`,elem:xe,shift:we}):Se.push({type:`elem`,elem:be,shift:we})}ye=$f({positionType:`individualShift`,children:Se})}if(ne.length===0)return Y([`mord`],[ye],t);var Te=Y([`tag`],[$f({positionType:`individualShift`,children:ne})],t);return Xf([ye,Te])},Sh={c:`center `,l:`left `,r:`right `},Ch=function(e,t){for(var n=[],r=new Z(`mtd`,[],[`mtr-glue`]),i=new Z(`mtd`,[],[`mml-eqn-num`]),a=0;a<e.body.length;a++){for(var o=e.body[a],s=[],c=0;c<o.length;c++)s.push(new Z(`mtd`,[Vp(o[c],t)]));e.tags&&e.tags[a]&&(s.unshift(r),s.push(r),e.leqno?s.unshift(i):s.push(i)),n.push(new Z(`mtr`,s))}var l=new Z(`mtable`,n),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);l.setAttribute(`rowspacing`,R(u));var d=``,f=``;if(e.cols&&e.cols.length>0){var p=e.cols,m=``,h=!1,g=0,_=p.length;p[0].type===`separator`&&(d+=`top `,g=1),p[p.length-1].type===`separator`&&(d+=`bottom `,--_);for(var v=g;v<_;v++){var y=p[v];y.type===`align`?(f+=Sh[y.align],h&&(m+=`none `),h=!0):y.type===`separator`&&(h&&=(m+=y.separator===`|`?`solid `:`dashed `,!1))}l.setAttribute(`columnalign`,f.trim()),/[sd]/.test(m)&&l.setAttribute(`columnlines`,m.trim())}if(e.colSeparationType===`align`){for(var b=e.cols||[],x=``,S=1;S<b.length;S++)x+=S%2?`0em `:`1em `;l.setAttribute(`columnspacing`,x.trim())}else e.colSeparationType===`alignat`||e.colSeparationType===`gather`?l.setAttribute(`columnspacing`,`0em`):e.colSeparationType===`small`?l.setAttribute(`columnspacing`,`0.2778em`):e.colSeparationType===`CD`?l.setAttribute(`columnspacing`,`0.5em`):l.setAttribute(`columnspacing`,`1em`);var C=``,w=e.hLinesBeforeRow;d+=w[0].length>0?`left `:``,d+=w[w.length-1].length>0?`right `:``;for(var T=1;T<w.length-1;T++)C+=w[T].length===0?`none `:w[T][0]?`dashed `:`solid `;return/[sd]/.test(C)&&l.setAttribute(`rowlines`,C.trim()),d!==``&&(l=new Z(`menclose`,[l]),l.setAttribute(`notation`,d.trim())),e.arraystretch&&e.arraystretch<1&&(l=new Z(`mstyle`,[l]),l.setAttribute(`scriptlevel`,`1`)),l},wh=function(e,t){e.envName.includes(`ed`)||gh(e);var n=[],r=e.envName.includes(`at`)?`alignat`:`align`,i=e.envName===`split`,a=yh(e.parser,{cols:n,addJot:!0,autoTag:i?void 0:vh(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:i?2:void 0,leqno:e.parser.settings.leqno},`display`),o=0,s=0,c={type:`ordgroup`,mode:e.mode,body:[]};if(t[0]&&t[0].type===`ordgroup`){for(var l=``,u=0;u<t[0].body.length;u++){var d=Q(t[0].body[u],`textord`);l+=d.text}o=Number(l),s=o*2}var f=!s;a.body.forEach(function(e){for(var t=1;t<e.length;t+=2)Q(Q(e[t],`styling`).body[0],`ordgroup`).body.unshift(c);if(f)s<e.length&&(s=e.length);else{var n=e.length/2;if(o<n)throw new I(`Too many math in a row: `+(`expected `+o+`, but got `+n),e[0])}});for(var p=0;p<s;++p){var m=`r`,h=0;p%2==1?m=`l`:p>0&&f&&(h=1),n[p]={type:`align`,align:m,pregap:h,postgap:0}}return a.colSeparationType=f?`align`:`alignat`,a};dh({type:`array`,names:[`array`,`darray`],props:{numArgs:1},handler(e,t){var n=(sm(t[0])?[t[0]]:Q(t[0],`ordgroup`).body).map(function(e){var t=om(e).text;if(`lcr`.includes(t))return{type:`align`,align:t};if(t===`|`)return{type:`separator`,separator:`|`};if(t===`:`)return{type:`separator`,separator:`:`};throw new I(`Unknown column alignment: `+t,e)}),r={cols:n,hskipBeforeAndAfter:!0,maxNumCols:n.length};return yh(e.parser,r,bh(e.envName))},htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`matrix`,`pmatrix`,`bmatrix`,`Bmatrix`,`vmatrix`,`Vmatrix`,`matrix*`,`pmatrix*`,`bmatrix*`,`Bmatrix*`,`vmatrix*`,`Vmatrix*`],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:[`(`,`)`],bmatrix:[`[`,`]`],Bmatrix:[`\\{`,`\\}`],vmatrix:[`|`,`|`],Vmatrix:[`\\Vert`,`\\Vert`]}[e.envName.replace(`*`,``)],n=`c`,r={hskipBeforeAndAfter:!1,cols:[{type:`align`,align:n}]};if(e.envName.charAt(e.envName.length-1)===`*`){var i=e.parser;if(i.consumeSpaces(),i.fetch().text===`[`){if(i.consume(),i.consumeSpaces(),n=i.fetch().text,!`lcr`.includes(n))throw new I(`Expected l or c or r`,i.nextToken);i.consume(),i.consumeSpaces(),i.expect(`]`),i.consume(),r.cols=[{type:`align`,align:n}]}}var a=yh(e.parser,r,bh(e.envName)),o=Math.max(0,...a.body.map(e=>e.length));return a.cols=Array(o).fill({type:`align`,align:n}),t?{type:`leftright`,mode:e.mode,body:[a],left:t[0],right:t[1],rightColor:void 0}:a},htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`smallmatrix`],props:{numArgs:0},handler(e){var t=yh(e.parser,{arraystretch:.5},`script`);return t.colSeparationType=`small`,t},htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`subarray`],props:{numArgs:1},handler(e,t){var n=(sm(t[0])?[t[0]]:Q(t[0],`ordgroup`).body).map(function(e){var t=om(e).text;if(`lc`.includes(t))return{type:`align`,align:t};throw new I(`Unknown column alignment: `+t,e)});if(n.length>1)throw new I(`{subarray} can contain only one column`);var r={cols:n,hskipBeforeAndAfter:!1,arraystretch:.5},i=yh(e.parser,r,`script`);if(i.body.length>0&&i.body[0].length>1)throw new I(`{subarray} can contain only one column`);return i},htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`cases`,`dcases`,`rcases`,`drcases`],props:{numArgs:0},handler(e){var t=yh(e.parser,{arraystretch:1.2,cols:[{type:`align`,align:`l`,pregap:0,postgap:1},{type:`align`,align:`l`,pregap:0,postgap:0}]},bh(e.envName));return{type:`leftright`,mode:e.mode,body:[t],left:e.envName.includes(`r`)?`.`:`\\{`,right:e.envName.includes(`r`)?`\\}`:`.`,rightColor:void 0}},htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`align`,`align*`,`aligned`,`split`],props:{numArgs:0},handler:wh,htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`gathered`,`gather`,`gather*`],props:{numArgs:0},handler(e){_h.has(e.envName)&&gh(e);var t={cols:[{type:`align`,align:`c`}],addJot:!0,colSeparationType:`gather`,autoTag:vh(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return yh(e.parser,t,`display`)},htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`alignat`,`alignat*`,`alignedat`],props:{numArgs:1},handler:wh,htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`equation`,`equation*`],props:{numArgs:0},handler(e){gh(e);var t={autoTag:vh(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return yh(e.parser,t,`display`)},htmlBuilder:xh,mathmlBuilder:Ch}),dh({type:`array`,names:[`CD`],props:{numArgs:0},handler(e){return gh(e),xm(e.parser)},htmlBuilder:xh,mathmlBuilder:Ch}),$(`\\nonumber`,`\\gdef\\@eqnsw{0}`),$(`\\notag`,`\\nonumber`),X({type:`text`,names:[`\\hline`,`\\hdashline`],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new I(e.funcName+` valid only within array environment`)}});var Th=uh;X({type:`environment`,names:[`\\begin`,`\\end`],props:{numArgs:1,argTypes:[`text`]},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];if(i.type!==`ordgroup`)throw new I(`Invalid environment name`,i);for(var a=``,o=0;o<i.body.length;++o)a+=Q(i.body[o],`textord`).text;if(r===`\\begin`){if(!Th.hasOwnProperty(a))throw new I(`No such environment: `+a,i);var s=Th[a],{args:c,optArgs:l}=n.parseArguments(`\\begin{`+a+`}`,s),u={mode:n.mode,envName:a,parser:n},d=s.handler(u,c,l);n.expect(`\\end`,!1);var f=n.nextToken,p=Q(n.parseFunction(),`environment`);if(p.name!==a)throw new I(`Mismatch: \\begin{`+a+`} matched by \\end{`+p.name+`}`,f);return d}return{type:`environment`,mode:n.mode,name:a,nameGroup:i}}});var Eh=(e,t)=>{var n=e.font,r=t.withFont(n);return Ep(e.body,r)},Dh=(e,t)=>{var n=e.font,r=t.withFont(n);return Vp(e.body,r)},Oh={"\\Bbb":`\\mathbb`,"\\bold":`\\mathbf`,"\\frak":`\\mathfrak`};X({type:`font`,names:[`\\mathrm`,`\\mathit`,`\\mathbf`,`\\mathnormal`,`\\mathsfit`,`\\mathbb`,`\\mathcal`,`\\mathfrak`,`\\mathscr`,`\\mathsf`,`\\mathtt`,`\\Bbb`,`\\bold`,`\\frak`],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=mp(t[0]),a=r;return a in Oh&&(a=Oh[a]),{type:`font`,mode:n.mode,font:a.slice(1),body:i}},htmlBuilder:Eh,mathmlBuilder:Dh}),X({type:`mclass`,names:[`\\boldsymbol`,`\\bm`],props:{numArgs:1},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`mclass`,mode:n.mode,mclass:hm(r),body:[{type:`font`,mode:n.mode,font:`boldsymbol`,body:r}],isCharacterBox:Iu(r)}}}),X({type:`font`,names:[`\\rm`,`\\sf`,`\\tt`,`\\bf`,`\\it`,`\\cal`],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,breakOnTokenText:i}=e,{mode:a}=n,o=n.parseExpression(!0,i);return{type:`font`,mode:a,font:`math`+r.slice(1),body:{type:`ordgroup`,mode:n.mode,body:o}}},htmlBuilder:Eh,mathmlBuilder:Dh});var kh=(e,t)=>{var n=t.style,r=n.fracNum(),i=n.fracDen(),a=t.havingStyle(r),o=Ep(e.numer,a,t);if(e.continued){var s=8.5/t.fontMetrics().ptPerEm,c=3.5/t.fontMetrics().ptPerEm;o.height=o.height<s?s:o.height,o.depth=o.depth<c?c:o.depth}a=t.havingStyle(i);var l=Ep(e.denom,a,t),u,d,f;e.hasBarLine?(e.barSize?(d=Dd(e.barSize,t),u=Jf(`frac-line`,t,d)):u=Jf(`frac-line`,t),d=u.height,f=u.height):(u=null,d=0,f=t.fontMetrics().defaultRuleThickness);var p,m,h;n.size===L.DISPLAY.size?(p=t.fontMetrics().num1,m=d>0?3*f:7*f,h=t.fontMetrics().denom1):(d>0?(p=t.fontMetrics().num2,m=f):(p=t.fontMetrics().num3,m=3*f),h=t.fontMetrics().denom2);var g;if(u){var _=t.fontMetrics().axisHeight;p-o.depth-(_+.5*d)<m&&(p+=m-(p-o.depth-(_+.5*d))),_-.5*d-(l.height-h)<m&&(h+=m-(_-.5*d-(l.height-h)));var v=-(_-.5*d);g=$f({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:u,shift:v},{type:`elem`,elem:o,shift:-p}]})}else{var y=p-o.depth-(l.height-h);y<m&&(p+=.5*(m-y),h+=.5*(m-y)),g=$f({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:o,shift:-p}]})}a=t.havingStyle(n),g.height*=a.sizeMultiplier/t.sizeMultiplier,g.depth*=a.sizeMultiplier/t.sizeMultiplier;var b=n.size===L.DISPLAY.size?t.fontMetrics().delim1:n.size===L.SCRIPTSCRIPT.size?t.havingStyle(L.SCRIPT).fontMetrics().delim2:t.fontMetrics().delim2,x=e.leftDelim==null?Tp(t,[`mopen`]):th(e.leftDelim,b,!0,t.havingStyle(n),e.mode,[`mopen`]),S=e.continued?Y([]):e.rightDelim==null?Tp(t,[`mclose`]):th(e.rightDelim,b,!0,t.havingStyle(n),e.mode,[`mclose`]);return Y([`mord`].concat(a.sizingClasses(t)),[x,Y([`mfrac`],[g]),S],t)},Ah=(e,t)=>{var n=new Z(`mfrac`,[Vp(e.numer,t),Vp(e.denom,t)]);if(!e.hasBarLine)n.setAttribute(`linethickness`,`0px`);else if(e.barSize){var r=Dd(e.barSize,t);n.setAttribute(`linethickness`,R(r))}if(e.leftDelim!=null||e.rightDelim!=null){var i=[];if(e.leftDelim!=null){var a=new Z(`mo`,[new Ap(e.leftDelim.replace(`\\`,``))]);a.setAttribute(`fence`,`true`),i.push(a)}if(i.push(n),e.rightDelim!=null){var o=new Z(`mo`,[new Ap(e.rightDelim.replace(`\\`,``))]);o.setAttribute(`fence`,`true`),i.push(o)}return Fp(i)}return n},jh=(e,t)=>t?{type:`styling`,mode:e.mode,style:t,body:[e]}:e;X({type:`genfrac`,names:[`\\cfrac`,`\\dfrac`,`\\frac`,`\\tfrac`,`\\dbinom`,`\\binom`,`\\tbinom`,`\\\\atopfrac`,`\\\\bracefrac`,`\\\\brackfrac`],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=t[1],o,s=null,c=null;switch(r){case`\\cfrac`:case`\\dfrac`:case`\\frac`:case`\\tfrac`:o=!0;break;case`\\\\atopfrac`:o=!1;break;case`\\dbinom`:case`\\binom`:case`\\tbinom`:o=!1,s=`(`,c=`)`;break;case`\\\\bracefrac`:o=!1,s=`\\{`,c=`\\}`;break;case`\\\\brackfrac`:o=!1,s=`[`,c=`]`;break;default:throw Error(`Unrecognized genfrac command`)}var l=r===`\\cfrac`,u=null;return l||r.startsWith(`\\d`)?u=`display`:r.startsWith(`\\t`)&&(u=`text`),jh({type:`genfrac`,mode:n.mode,numer:i,denom:a,continued:l,hasBarLine:o,leftDelim:s,rightDelim:c,barSize:null},u)},htmlBuilder:kh,mathmlBuilder:Ah}),X({type:`infix`,names:[`\\over`,`\\choose`,`\\atop`,`\\brace`,`\\brack`],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:n,token:r}=e,i;switch(n){case`\\over`:i=`\\frac`;break;case`\\choose`:i=`\\binom`;break;case`\\atop`:i=`\\\\atopfrac`;break;case`\\brace`:i=`\\\\bracefrac`;break;case`\\brack`:i=`\\\\brackfrac`;break;default:throw Error(`Unrecognized infix genfrac command`)}return{type:`infix`,mode:t.mode,replaceWith:i,token:r}}});var Mh=[`display`,`text`,`script`,`scriptscript`],Nh=function(e){var t=null;return e.length>0&&(t=e,t=t===`.`?null:t),t};X({type:`genfrac`,names:[`\\genfrac`],props:{numArgs:6,allowedInArgument:!0,argTypes:[`math`,`math`,`size`,`text`,`math`,`math`]},handler(e,t){var{parser:n}=e,r=t[4],i=t[5],a=mp(t[0]),o=a.type===`atom`&&a.family===`open`?Nh(a.text):null,s=mp(t[1]),c=s.type===`atom`&&s.family===`close`?Nh(s.text):null,l=Q(t[2],`size`),u,d=null;l.isBlank?u=!0:(d=l.value,u=d.number>0);var f=null,p=t[3];if(p.type===`ordgroup`){if(p.body.length>0){var m=Q(p.body[0],`textord`);f=Mh[Number(m.text)]}}else p=Q(p,`textord`),f=Mh[Number(p.text)];return jh({type:`genfrac`,mode:n.mode,numer:r,denom:i,continued:!1,hasBarLine:u,barSize:d,leftDelim:o,rightDelim:c},f)}}),X({type:`infix`,names:[`\\above`],props:{numArgs:1,argTypes:[`size`],infix:!0},handler(e,t){var{parser:n,funcName:r,token:i}=e;return{type:`infix`,mode:n.mode,replaceWith:`\\\\abovefrac`,size:Q(t[0],`size`).value,token:i}}}),X({type:`genfrac`,names:[`\\\\abovefrac`],props:{numArgs:3,argTypes:[`math`,`size`,`math`]},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0],a=Q(t[1],`infix`).size;if(!a)throw Error(`\\\\abovefrac expected size, but got `+String(a));var o=t[2],s=a.number>0;return{type:`genfrac`,mode:n.mode,numer:i,denom:o,continued:!1,hasBarLine:s,barSize:a,leftDelim:null,rightDelim:null}}});var Ph=(e,t)=>{var n=t.style,r,i;e.type===`supsub`?(r=e.sup?Ep(e.sup,t.havingStyle(n.sup()),t):Ep(e.sub,t.havingStyle(n.sub()),t),i=Q(e.base,`horizBrace`)):i=Q(e,`horizBrace`);var a=Ep(i.base,t.havingBaseStyle(L.DISPLAY)),o=tm(i,t),s=i.isOver?$f({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:.1},{type:`elem`,elem:o,wrapperClasses:[`svg-align`]}]}):$f({positionType:`bottom`,positionData:a.depth+.1+o.height,children:[{type:`elem`,elem:o,wrapperClasses:[`svg-align`]},{type:`kern`,size:.1},{type:`elem`,elem:a}]});if(r){var c=Y([`minner`,i.isOver?`mover`:`munder`],[s],t);s=i.isOver?$f({positionType:`firstBaseline`,children:[{type:`elem`,elem:c},{type:`kern`,size:.2},{type:`elem`,elem:r}]}):$f({positionType:`bottom`,positionData:c.depth+.2+r.height+r.depth,children:[{type:`elem`,elem:r},{type:`kern`,size:.2},{type:`elem`,elem:c}]})}return Y([`minner`,i.isOver?`mover`:`munder`],[s],t)};X({type:`horizBrace`,names:[`\\overbrace`,`\\underbrace`,`\\overbracket`,`\\underbracket`],props:{numArgs:1},handler(e,t){var{parser:n,funcName:r}=e;return{type:`horizBrace`,mode:n.mode,label:r,isOver:r.includes(`\\over`),base:t[0]}},htmlBuilder:Ph,mathmlBuilder:(e,t)=>{var n=Qp(e.label);return new Z(e.isOver?`mover`:`munder`,[Vp(e.base,t),n])}}),X({type:`href`,names:[`\\href`],props:{numArgs:2,argTypes:[`url`,`original`],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[1],i=Q(t[0],`url`).url;return n.settings.isTrusted({command:`\\href`,url:i})?{type:`href`,mode:n.mode,href:i,body:hp(r)}:n.formatUnsupportedCmd(`\\href`)},htmlBuilder:(e,t)=>{var n=bp(e.body,t,!1);return Yf(e.href,[],n,t)},mathmlBuilder:(e,t)=>{var n=Bp(e.body,t);return n instanceof Z||(n=new Z(`mrow`,[n])),n.setAttribute(`href`,e.href),n}}),X({type:`href`,names:[`\\url`],props:{numArgs:1,argTypes:[`url`],allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=Q(t[0],`url`).url;if(!n.settings.isTrusted({command:`\\url`,url:r}))return n.formatUnsupportedCmd(`\\url`);for(var i=[],a=0;a<r.length;a++){var o=r[a];o===`~`&&(o=`\\textasciitilde`),i.push({type:`textord`,mode:`text`,text:o})}var s={type:`text`,mode:n.mode,font:`\\texttt`,body:i};return{type:`href`,mode:n.mode,href:r,body:hp(s)}}}),X({type:`hbox`,names:[`\\hbox`],props:{numArgs:1,argTypes:[`text`],allowedInText:!0,primitive:!0},handler(e,t){var{parser:n}=e;return{type:`hbox`,mode:n.mode,body:hp(t[0])}},htmlBuilder(e,t){return Xf(bp(e.body,t.withFont(``),!1))},mathmlBuilder(e,t){return new Z(`mrow`,zp(e.body,t.withFont(``)))}}),X({type:`html`,names:[`\\htmlClass`,`\\htmlId`,`\\htmlStyle`,`\\htmlData`],props:{numArgs:2,argTypes:[`raw`,`original`],allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r,token:i}=e,a=Q(t[0],`raw`).string,o=t[1];n.settings.strict&&n.settings.reportNonstrict(`htmlExtension`,`HTML extension is disabled on strict mode`);var s,c={};switch(r){case`\\htmlClass`:c.class=a,s={command:`\\htmlClass`,class:a};break;case`\\htmlId`:c.id=a,s={command:`\\htmlId`,id:a};break;case`\\htmlStyle`:c.style=a,s={command:`\\htmlStyle`,style:a};break;case`\\htmlData`:for(var l=a.split(`,`),u=0;u<l.length;u++){var d=l[u],f=d.indexOf(`=`);if(f<0)throw new I(`\\htmlData key/value '`+d+`' missing equals sign`);var p=d.slice(0,f),m=d.slice(f+1);c[`data-`+p.trim()]=m}s={command:`\\htmlData`,attributes:c};break;default:throw Error(`Unrecognized html command`)}return n.settings.isTrusted(s)?{type:`html`,mode:n.mode,attributes:c,body:hp(o)}:n.formatUnsupportedCmd(r)},htmlBuilder:(e,t)=>{var n=bp(e.body,t,!1),r=[`enclosing`];e.attributes.class&&r.push(...e.attributes.class.trim().split(/\s+/));var i=Y(r,n,t);for(var a in e.attributes)a!==`class`&&e.attributes.hasOwnProperty(a)&&i.setAttribute(a,e.attributes[a]);return i},mathmlBuilder:(e,t)=>Bp(e.body,t)}),X({type:`htmlmathml`,names:[`\\html@mathml`],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e;return{type:`htmlmathml`,mode:n.mode,html:hp(t[0]),mathml:hp(t[1])}},htmlBuilder:(e,t)=>Xf(bp(e.html,t,!1)),mathmlBuilder:(e,t)=>Bp(e.mathml,t)});var Fh=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:`bp`};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new I(`Invalid size: '`+e+`' in \\includegraphics`);var n={number:+(t[1]+t[2]),unit:t[3]};if(!Ed(n))throw new I(`Invalid unit: '`+n.unit+`' in \\includegraphics.`);return n};X({type:`includegraphics`,names:[`\\includegraphics`],props:{numArgs:1,numOptionalArgs:1,argTypes:[`raw`,`url`],allowedInText:!1},handler:(e,t,n)=>{var{parser:r}=e,i={number:0,unit:`em`},a={number:.9,unit:`em`},o={number:0,unit:`em`},s=``;if(n[0])for(var c=Q(n[0],`raw`).string.split(`,`),l=0;l<c.length;l++){var u=c[l].split(`=`);if(u.length===2){var d=u[1].trim();switch(u[0].trim()){case`alt`:s=d;break;case`width`:i=Fh(d);break;case`height`:a=Fh(d);break;case`totalheight`:o=Fh(d);break;default:throw new I(`Invalid key: '`+u[0]+`' in \\includegraphics.`)}}}var f=Q(t[0],`url`).url;return s===``&&(s=f,s=s.replace(/^.*[\\/]/,``),s=s.substring(0,s.lastIndexOf(`.`))),r.settings.isTrusted({command:`\\includegraphics`,url:f})?{type:`includegraphics`,mode:r.mode,alt:s,width:i,height:a,totalheight:o,src:f}:r.formatUnsupportedCmd(`\\includegraphics`)},htmlBuilder:(e,t)=>{var n=Dd(e.height,t),r=0;e.totalheight.number>0&&(r=Dd(e.totalheight,t)-n);var i=0;e.width.number>0&&(i=Dd(e.width,t));var a={height:R(n+r)};i>0&&(a.width=R(i)),r>0&&(a.verticalAlign=R(-r));var o=new Id(e.src,e.alt,a);return o.height=n,o.depth=r,o},mathmlBuilder:(e,t)=>{var n=new Z(`mglyph`,[]);n.setAttribute(`alt`,e.alt);var r=Dd(e.height,t),i=0;if(e.totalheight.number>0&&(i=Dd(e.totalheight,t)-r,n.setAttribute(`valign`,R(-i))),n.setAttribute(`height`,R(r+i)),e.width.number>0){var a=Dd(e.width,t);n.setAttribute(`width`,R(a))}return n.setAttribute(`src`,e.src),n}}),X({type:`kern`,names:[`\\kern`,`\\mkern`,`\\hskip`,`\\mskip`],props:{numArgs:1,argTypes:[`size`],primitive:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=Q(t[0],`size`);if(n.settings.strict){var a=r[1]===`m`,o=i.value.unit===`mu`;a?(o||n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` supports only mu units, `+(`not `+i.value.unit+` units`)),n.mode!==`math`&&n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` works only in math mode`)):o&&n.settings.reportNonstrict(`mathVsTextUnits`,`LaTeX's `+r+` doesn't support mu units`)}return{type:`kern`,mode:n.mode,dimension:i.value}},htmlBuilder(e,t){return ep(e.dimension,t)},mathmlBuilder(e,t){return new jp(Dd(e.dimension,t))}}),X({type:`lap`,names:[`\\mathllap`,`\\mathrlap`,`\\mathclap`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`lap`,mode:n.mode,alignment:r.slice(5),body:i}},htmlBuilder:(e,t)=>{var n;e.alignment===`clap`?(n=Y([],[Ep(e.body,t)]),n=Y([`inner`],[n],t)):n=Y([`inner`],[Ep(e.body,t)]);var r=Y([`fix`],[]),i=Y([e.alignment],[n,r],t),a=Y([`strut`]);return a.style.height=R(i.height+i.depth),i.depth&&(a.style.verticalAlign=R(-i.depth)),i.children.unshift(a),i=Y([`thinbox`],[i],t),Y([`mord`,`vbox`],[i],t)},mathmlBuilder:(e,t)=>{var n=new Z(`mpadded`,[Vp(e.body,t)]);if(e.alignment!==`rlap`){var r=e.alignment===`llap`?`-1`:`-0.5`;n.setAttribute(`lspace`,r+`width`)}return n.setAttribute(`width`,`0px`),n}}),X({type:`styling`,names:[`\\(`,`$`],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:n,parser:r}=e,i=r.mode;r.switchMode(`math`);var a=n===`\\(`?`\\)`:`$`,o=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:`styling`,mode:r.mode,style:`text`,resetFont:!0,body:o}}}),X({type:`text`,names:[`\\)`,`\\]`],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new I(`Mismatched `+e.funcName)}});var Ih=(e,t)=>{switch(t.style.size){case L.DISPLAY.size:return e.display;case L.TEXT.size:return e.text;case L.SCRIPT.size:return e.script;case L.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};X({type:`mathchoice`,names:[`\\mathchoice`],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:n}=e;return{type:`mathchoice`,mode:n.mode,display:hp(t[0]),text:hp(t[1]),script:hp(t[2]),scriptscript:hp(t[3])}},htmlBuilder:(e,t)=>Xf(bp(Ih(e,t),t,!1)),mathmlBuilder:(e,t)=>Bp(Ih(e,t),t)});var Lh=(e,t,n,r,i,a,o)=>{e=Y([],[e]);var s=n&&Iu(n),c,l;if(t){var u=Ep(t,r.havingStyle(i.sup()),r);l={elem:u,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-u.depth)}}if(n){var d=Ep(n,r.havingStyle(i.sub()),r);c={elem:d,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-d.height)}}var f;if(l&&c)f=$f({positionType:`bottom`,positionData:r.fontMetrics().bigOpSpacing5+c.elem.height+c.elem.depth+c.kern+e.depth+o,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:R(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:R(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]});else if(c)f=$f({positionType:`top`,positionData:e.height-o,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:R(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e}]});else if(l)f=$f({positionType:`bottom`,positionData:e.depth+o,children:[{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:R(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]});else return e;var p=[f];if(c&&a!==0&&!s){var m=Y([`mspace`],[],r);m.style.marginRight=R(a),p.unshift(m)}return Y([`mop`,`op-limits`],p,r)},Rh=new Set([`\\smallint`]),zh=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=Q(e.base,`op`),i=!0):a=Q(e,`op`);var o=t.style,s=!1;o.size===L.DISPLAY.size&&a.symbol&&!Rh.has(a.name)&&(s=!0);var c,l;if(a.symbol){var u=s?`Size2-Regular`:`Size1-Regular`,d=``;if((a.name===`\\oiint`||a.name===`\\oiiint`)&&(d=a.name.slice(1),a.name=d===`oiint`?`\\iint`:`\\iiint`),c=Bf(a.name,u,`math`,t,[`mop`,`op-symbol`,s?`large-op`:`small-op`]),l=c.italic,d.length>0){var f=ip(d+`Size`+(s?`2`:`1`),t);c=$f({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:0},{type:`elem`,elem:f,shift:s?.08:0}]}),a.name=`\\`+d,c.classes.unshift(`mop`),c.italic=l}}else if(a.body){var p=bp(a.body,t,!0);p.length===1&&p[0]instanceof Rd?(c=p[0],c.classes[0]=`mop`):c=Y([`mop`],p,t)}else{for(var m=[],h=1;h<a.name.length;h++)m.push(Vf(a.name[h],a.mode,t));c=Y([`mop`],m,t)}var g=0,_=0;return(c instanceof Rd||a.name===`\\oiint`||a.name===`\\oiiint`)&&!a.suppressBaseShift&&(g=(c.height-c.depth)/2-t.fontMetrics().axisHeight,_=c.italic??0),i?Lh(c,n,r,t,o,_,g):(g&&(c.style.position=`relative`,c.style.top=R(g)),c)},Bh=(e,t)=>{var n;if(e.symbol)n=new Z(`mo`,[Pp(e.name,e.mode)]),Rh.has(e.name)&&n.setAttribute(`largeop`,`false`);else if(e.body)n=new Z(`mo`,zp(e.body,t));else{n=new Z(`mi`,[new Ap(e.name.slice(1))]);var r=new Z(`mo`,[Pp(`⁡`,`text`)]);n=e.parentIsSupSub?new Z(`mrow`,[n,r]):kp([n,r])}return n},Vh={"∏":`\\prod`,"∐":`\\coprod`,"∑":`\\sum`,"⋀":`\\bigwedge`,"⋁":`\\bigvee`,"⋂":`\\bigcap`,"⋃":`\\bigcup`,"⨀":`\\bigodot`,"⨁":`\\bigoplus`,"⨂":`\\bigotimes`,"⨄":`\\biguplus`,"⨆":`\\bigsqcup`};X({type:`op`,names:`\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.∏.∐.∑.⋀.⋁.⋂.⋃.⨀.⨁.⨂.⨄.⨆`.split(`.`),props:{numArgs:0},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=r;return i.length===1&&(i=Vh[i]),{type:`op`,mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:zh,mathmlBuilder:Bh}),X({type:`op`,names:[`\\mathop`],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`op`,mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:hp(r)}},htmlBuilder:zh,mathmlBuilder:Bh});var Hh={"∫":`\\int`,"∬":`\\iint`,"∭":`\\iiint`,"∮":`\\oint`,"∯":`\\oiint`,"∰":`\\oiiint`};X({type:`op`,names:`\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th`.split(`.`),props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:zh,mathmlBuilder:Bh}),X({type:`op`,names:[`\\det`,`\\gcd`,`\\inf`,`\\lim`,`\\max`,`\\min`,`\\Pr`,`\\sup`],props:{numArgs:0},handler(e){var{parser:t,funcName:n}=e;return{type:`op`,mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:zh,mathmlBuilder:Bh}),X({type:`op`,names:[`\\int`,`\\iint`,`\\iiint`,`\\oint`,`\\oiint`,`\\oiiint`,`∫`,`∬`,`∭`,`∮`,`∯`,`∰`],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:n}=e,r=n;return r.length===1&&(r=Hh[r]),{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:zh,mathmlBuilder:Bh});var Uh=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=Q(e.base,`operatorname`),i=!0):a=Q(e,`operatorname`);var o;if(a.body.length>0){for(var s=bp(a.body.map(e=>{var t=`text`in e?e.text:void 0;return typeof t==`string`?{type:`textord`,mode:e.mode,text:t}:e}),t.withFont(`mathrm`),!0),c=0;c<s.length;c++){var l=s[c];l instanceof Rd&&(l.text=l.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`))}o=Y([`mop`],s,t)}else o=Y([`mop`],[],t);return i?Lh(o,n,r,t,t.style,0,0):o};X({type:`operatorname`,names:[`\\operatorname@`,`\\operatornamewithlimits`],props:{numArgs:1},handler:(e,t)=>{var{parser:n,funcName:r}=e,i=t[0];return{type:`operatorname`,mode:n.mode,body:hp(i),alwaysHandleSupSub:r===`\\operatornamewithlimits`,limits:!1,parentIsSupSub:!1}},htmlBuilder:Uh,mathmlBuilder:(e,t)=>{for(var n=zp(e.body,t.withFont(`mathrm`)),r=!0,i=0;i<n.length;i++){var a=n[i];if(!(a instanceof jp))if(a instanceof Z)switch(a.type){case`mi`:case`mn`:case`mspace`:case`mtext`:break;case`mo`:var o=a.children[0];a.children.length===1&&o instanceof Ap?o.text=o.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`):r=!1;break;default:r=!1}else r=!1}r&&(n=[new Ap(n.map(e=>e.toText()).join(``))]);var s=new Z(`mi`,n);s.setAttribute(`mathvariant`,`normal`);var c=new Z(`mo`,[Pp(`⁡`,`text`)]);return e.parentIsSupSub?new Z(`mrow`,[s,c]):kp([s,c])}}),$(`\\operatorname`,`\\@ifstar\\operatornamewithlimits\\operatorname@`),pp({type:`ordgroup`,htmlBuilder(e,t){return e.semisimple?Xf(bp(e.body,t,!1)):Y([`mord`],bp(e.body,t,!0),t)},mathmlBuilder(e,t){return Bp(e.body,t,!0)}}),X({type:`overline`,names:[`\\overline`],props:{numArgs:1},handler(e,t){var{parser:n}=e,r=t[0];return{type:`overline`,mode:n.mode,body:r}},htmlBuilder(e,t){var n=Ep(e.body,t.havingCrampedStyle()),r=Jf(`overline-line`,t),i=t.fontMetrics().defaultRuleThickness;return Y([`mord`,`overline`],[$f({positionType:`firstBaseline`,children:[{type:`elem`,elem:n},{type:`kern`,size:3*i},{type:`elem`,elem:r},{type:`kern`,size:i}]})],t)},mathmlBuilder(e,t){var n=new Z(`mo`,[new Ap(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new Z(`mover`,[Vp(e.body,t),n]);return r.setAttribute(`accent`,`true`),r}}),X({type:`phantom`,names:[`\\phantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`phantom`,mode:n.mode,body:hp(r)}},htmlBuilder:(e,t)=>Xf(bp(e.body,t.withPhantom(),!1)),mathmlBuilder:(e,t)=>new Z(`mphantom`,zp(e.body,t))}),$(`\\hphantom`,`\\smash{\\phantom{#1}}`),X({type:`vphantom`,names:[`\\vphantom`],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:n}=e,r=t[0];return{type:`vphantom`,mode:n.mode,body:r}},htmlBuilder:(e,t)=>Y([`mord`,`rlap`],[Y([`inner`],[Ep(e.body,t.withPhantom())]),Y([`fix`],[])],t),mathmlBuilder:(e,t)=>{var n=new Z(`mpadded`,[new Z(`mphantom`,zp(hp(e.body),t))]);return n.setAttribute(`width`,`0px`),n}}),X({type:`raisebox`,names:[`\\raisebox`],props:{numArgs:2,argTypes:[`size`,`hbox`],allowedInText:!0},handler(e,t){var{parser:n}=e,r=Q(t[0],`size`).value,i=t[1];return{type:`raisebox`,mode:n.mode,dy:r,body:i}},htmlBuilder(e,t){var n=Ep(e.body,t);return $f({positionType:`shift`,positionData:-Dd(e.dy,t),children:[{type:`elem`,elem:n}]})},mathmlBuilder(e,t){var n=new Z(`mpadded`,[Vp(e.body,t)]),r=e.dy.number+e.dy.unit;return n.setAttribute(`voffset`,r),n}}),X({type:`internal`,names:[`\\relax`],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:`internal`,mode:t.mode}}}),X({type:`rule`,names:[`\\rule`],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`size`,`size`,`size`]},handler(e,t,n){var{parser:r}=e,i=n[0],a=Q(t[0],`size`),o=Q(t[1],`size`);return{type:`rule`,mode:r.mode,shift:i&&Q(i,`size`).value,width:a.value,height:o.value}},htmlBuilder(e,t){var n=Y([`mord`,`rule`],[],t),r=Dd(e.width,t),i=Dd(e.height,t),a=e.shift?Dd(e.shift,t):0;return n.style.borderRightWidth=R(r),n.style.borderTopWidth=R(i),n.style.bottom=R(a),n.width=r,n.height=i+a,n.depth=-a,n.maxFontSize=i*1.125*t.sizeMultiplier,n},mathmlBuilder(e,t){var n=Dd(e.width,t),r=Dd(e.height,t),i=e.shift?Dd(e.shift,t):0,a=t.color&&t.getColor()||`black`,o=new Z(`mspace`);o.setAttribute(`mathbackground`,a),o.setAttribute(`width`,R(n)),o.setAttribute(`height`,R(r));var s=new Z(`mpadded`,[o]);return i>=0?s.setAttribute(`height`,R(i)):(s.setAttribute(`height`,R(i)),s.setAttribute(`depth`,R(-i))),s.setAttribute(`voffset`,R(i)),s}});function Wh(e,t,n){for(var r=bp(e,t,!1),i=t.sizeMultiplier/n.sizeMultiplier,a=0;a<r.length;a++){var o=r[a].classes.indexOf(`sizing`);o<0?Array.prototype.push.apply(r[a].classes,t.sizingClasses(n)):r[a].classes[o+1]===`reset-size`+t.size&&(r[a].classes[o+1]=`reset-size`+n.size),r[a].height*=i,r[a].depth*=i}return Xf(r)}var Gh=[`\\tiny`,`\\sixptsize`,`\\scriptsize`,`\\footnotesize`,`\\small`,`\\normalsize`,`\\large`,`\\Large`,`\\LARGE`,`\\huge`,`\\Huge`];X({type:`sizing`,names:Gh,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!1,n);return{type:`sizing`,mode:i.mode,size:Gh.indexOf(r)+1,body:a}},htmlBuilder:(e,t)=>{var n=t.havingSize(e.size);return Wh(e.body,n,t)},mathmlBuilder:(e,t)=>{var n=t.havingSize(e.size),r=new Z(`mstyle`,zp(e.body,n));return r.setAttribute(`mathsize`,R(n.sizeMultiplier)),r}}),X({type:`smash`,names:[`\\smash`],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,n)=>{var{parser:r}=e,i=!1,a=!1,o=n[0]&&Q(n[0],`ordgroup`);if(o)for(var s,c=0;c<o.body.length;++c){var l=o.body[c];if(s=om(l).text,s===`t`)i=!0;else if(s===`b`)a=!0;else{i=!1,a=!1;break}}else i=!0,a=!0;var u=t[0];return{type:`smash`,mode:r.mode,body:u,smashHeight:i,smashDepth:a}},htmlBuilder:(e,t)=>{var n=Y([],[Ep(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return n;if(e.smashHeight&&(n.height=0),e.smashDepth&&(n.depth=0),e.smashHeight&&e.smashDepth)return Y([`mord`,`smash`],[n],t);if(n.children)for(var r=0;r<n.children.length;r++)e.smashHeight&&(n.children[r].height=0),e.smashDepth&&(n.children[r].depth=0);return Y([`mord`],[$f({positionType:`firstBaseline`,children:[{type:`elem`,elem:n}]})],t)},mathmlBuilder:(e,t)=>{var n=new Z(`mpadded`,[Vp(e.body,t)]);return e.smashHeight&&n.setAttribute(`height`,`0px`),e.smashDepth&&n.setAttribute(`depth`,`0px`),n}}),X({type:`sqrt`,names:[`\\sqrt`],props:{numArgs:1,numOptionalArgs:1},handler(e,t,n){var{parser:r}=e,i=n[0],a=t[0];return{type:`sqrt`,mode:r.mode,body:a,index:i}},htmlBuilder(e,t){var n=Ep(e.body,t.havingCrampedStyle());n.height===0&&(n.height=t.fontMetrics().xHeight),n=Zf(n,t);var r=t.fontMetrics().defaultRuleThickness,i=r;t.style.id<L.TEXT.id&&(i=t.fontMetrics().xHeight);var a=r+i/4,{span:o,ruleWidth:s,advanceWidth:c}=Wm(n.height+n.depth+a+r,t),l=o.height-s;l>n.height+n.depth+a&&(a=(a+l-n.height-n.depth)/2);var u=o.height-n.height-a-s;n.style.paddingLeft=R(c);var d=$f({positionType:`firstBaseline`,children:[{type:`elem`,elem:n,wrapperClasses:[`svg-align`]},{type:`kern`,size:-(n.height+u)},{type:`elem`,elem:o},{type:`kern`,size:s}]});if(e.index){var f=t.havingStyle(L.SCRIPTSCRIPT),p=Ep(e.index,f,t);return Y([`mord`,`sqrt`],[Y([`root`],[$f({positionType:`shift`,positionData:-(.6*(d.height-d.depth)),children:[{type:`elem`,elem:p}]})]),d],t)}else return Y([`mord`,`sqrt`],[d],t)},mathmlBuilder(e,t){var{body:n,index:r}=e;return r?new Z(`mroot`,[Vp(n,t),Vp(r,t)]):new Z(`msqrt`,[Vp(n,t)])}});var Kh={display:L.DISPLAY,text:L.TEXT,script:L.SCRIPT,scriptscript:L.SCRIPTSCRIPT};function qh(e){return e in Kh}X({type:`styling`,names:[`\\displaystyle`,`\\textstyle`,`\\scriptstyle`,`\\scriptscriptstyle`],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:n,funcName:r,parser:i}=e,a=i.parseExpression(!0,n),o=r.slice(1,r.length-5);if(!qh(o))throw Error(`Unknown style: `+o);return{type:`styling`,mode:i.mode,style:o,body:a}},htmlBuilder(e,t){var n=Kh[e.style],r=t.havingStyle(n);return e.resetFont&&(r=r.withFont(``)),Wh(e.body,r,t)},mathmlBuilder(e,t){var n=Kh[e.style],r=t.havingStyle(n);e.resetFont&&(r=r.withFont(``));var i=new Z(`mstyle`,zp(e.body,r)),a={display:[`0`,`true`],text:[`0`,`false`],script:[`1`,`false`],scriptscript:[`2`,`false`]}[e.style];return i.setAttribute(`scriptlevel`,a[0]),i.setAttribute(`displaystyle`,a[1]),i}});var Jh=function(e,t){var n=e.base;return n?n.type===`op`?n.limits&&(t.style.size===L.DISPLAY.size||n.alwaysHandleSupSub)?zh:null:n.type===`operatorname`?n.alwaysHandleSupSub&&(t.style.size===L.DISPLAY.size||n.limits)?Uh:null:n.type===`accent`?Iu(n.base)?lm:null:n.type===`horizBrace`&&!e.sub===n.isOver?Ph:null:null};pp({type:`supsub`,htmlBuilder(e,t){var n=Jh(e,t);if(n)return n(e,t);var{base:r,sup:i,sub:a}=e,o=Ep(r,t),s,c,l=t.fontMetrics(),u=0,d=0,f=r&&Iu(r);if(i){var p=t.havingStyle(t.style.sup());s=Ep(i,p,t),f||(u=o.height-p.fontMetrics().supDrop*p.sizeMultiplier/t.sizeMultiplier)}if(a){var m=t.havingStyle(t.style.sub());c=Ep(a,m,t),f||(d=o.depth+m.fontMetrics().subDrop*m.sizeMultiplier/t.sizeMultiplier)}var h=t.style===L.DISPLAY?l.sup1:t.style.cramped?l.sup3:l.sup2,g=t.sizeMultiplier,_=R(.5/l.ptPerEm/g),v=null;if(c){var y=e.base&&e.base.type===`op`&&e.base.name&&(e.base.name===`\\oiint`||e.base.name===`\\oiiint`);(o instanceof Rd||y)&&(v=R(-(o.italic??0)))}var b;if(s&&c){u=Math.max(u,h,s.depth+.25*l.xHeight),d=Math.max(d,l.sub2);var x=4*l.defaultRuleThickness;if(u-s.depth-(c.height-d)<x){d=x-(u-s.depth)+c.height;var S=.8*l.xHeight-(u-s.depth);S>0&&(u+=S,d-=S)}b=$f({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:d,marginRight:_,marginLeft:v},{type:`elem`,elem:s,shift:-u,marginRight:_}]})}else if(c)d=Math.max(d,l.sub1,c.height-.8*l.xHeight),b=$f({positionType:`shift`,positionData:d,children:[{type:`elem`,elem:c,marginLeft:v,marginRight:_}]});else if(s)u=Math.max(u,h,s.depth+.25*l.xHeight),b=$f({positionType:`shift`,positionData:-u,children:[{type:`elem`,elem:s,marginRight:_}]});else throw Error(`supsub must have either sup or sub.`);return Y([wp(o,`right`)||`mord`],[o,Y([`msupsub`],[b])],t)},mathmlBuilder(e,t){var n=!1,r,i;e.base&&e.base.type===`horizBrace`&&(i=!!e.sup,i===e.base.isOver&&(n=!0,r=e.base.isOver)),e.base&&(e.base.type===`op`||e.base.type===`operatorname`)&&(e.base.parentIsSupSub=!0);var a=[Vp(e.base,t)];e.sub&&a.push(Vp(e.sub,t)),e.sup&&a.push(Vp(e.sup,t));var o;if(n)o=r?`mover`:`munder`;else if(!e.sub){var s=e.base;o=s&&s.type===`op`&&s.limits&&(t.style===L.DISPLAY||s.alwaysHandleSupSub)||s&&s.type===`operatorname`&&s.alwaysHandleSupSub&&(s.limits||t.style===L.DISPLAY)?`mover`:`msup`}else if(e.sup){var c=e.base;o=c&&c.type===`op`&&c.limits&&t.style===L.DISPLAY||c&&c.type===`operatorname`&&c.alwaysHandleSupSub&&(t.style===L.DISPLAY||c.limits)?`munderover`:`msubsup`}else{var l=e.base;o=l&&l.type===`op`&&l.limits&&(t.style===L.DISPLAY||l.alwaysHandleSupSub)||l&&l.type===`operatorname`&&l.alwaysHandleSupSub&&(l.limits||t.style===L.DISPLAY)?`munder`:`msub`}return new Z(o,a)}}),pp({type:`atom`,htmlBuilder(e,t){return Vf(e.text,e.mode,t,[`m`+e.family])},mathmlBuilder(e,t){var n=new Z(`mo`,[Pp(e.text,e.mode)]);if(e.family===`bin`){var r=Lp(e,t);r===`bold-italic`&&n.setAttribute(`mathvariant`,r)}else e.family===`punct`?n.setAttribute(`separator`,`true`):(e.family===`open`||e.family===`close`)&&n.setAttribute(`stretchy`,`false`);return n}});var Yh={mi:`italic`,mn:`normal`,mtext:`normal`};pp({type:`mathord`,htmlBuilder(e,t){return Uf(e,t,`mathord`)},mathmlBuilder(e,t){var n=new Z(`mi`,[Pp(e.text,e.mode,t)]),r=Lp(e,t)||`italic`;return r!==Yh[n.type]&&n.setAttribute(`mathvariant`,r),n}}),pp({type:`textord`,htmlBuilder(e,t){return Uf(e,t,`textord`)},mathmlBuilder(e,t){var n=Pp(e.text,e.mode,t),r=Lp(e,t)||`normal`,i=e.mode===`text`?new Z(`mtext`,[n]):/[0-9]/.test(e.text)?new Z(`mn`,[n]):e.text===`\\prime`?new Z(`mo`,[n]):new Z(`mi`,[n]);return r!==Yh[i.type]&&i.setAttribute(`mathvariant`,r),i}});var Xh={"\\nobreak":`nobreak`,"\\allowbreak":`allowbreak`},Zh={" ":{},"\\ ":{},"~":{className:`nobreak`},"\\space":{},"\\nobreakspace":{className:`nobreak`}};pp({type:`spacing`,htmlBuilder(e,t){if(Zh.hasOwnProperty(e.text)){var n=Zh[e.text].className||``;if(e.mode===`text`){var r=Uf(e,t,`textord`);return r.classes.push(n),r}else return Y([`mspace`,n],[Vf(e.text,e.mode,t)],t)}else if(Xh.hasOwnProperty(e.text))return Y([`mspace`,Xh[e.text]],[],t);else throw new I(`Unknown type of space "`+e.text+`"`)},mathmlBuilder(e,t){var n;if(Zh.hasOwnProperty(e.text))n=new Z(`mtext`,[new Ap(`\xA0`)]);else if(Xh.hasOwnProperty(e.text))return new Z(`mspace`);else throw new I(`Unknown type of space "`+e.text+`"`);return n}});var Qh=()=>{var e=new Z(`mtd`,[]);return e.setAttribute(`width`,`50%`),e};pp({type:`tag`,mathmlBuilder(e,t){var n=new Z(`mtable`,[new Z(`mtr`,[Qh(),new Z(`mtd`,[Bp(e.body,t)]),Qh(),new Z(`mtd`,[Bp(e.tag,t)])])]);return n.setAttribute(`width`,`100%`),n}});var $h={"\\text":void 0,"\\textrm":`textrm`,"\\textsf":`textsf`,"\\texttt":`texttt`,"\\textnormal":`textrm`},eg={"\\textbf":`textbf`,"\\textmd":`textmd`},tg={"\\textit":`textit`,"\\textup":`textup`},ng=(e,t)=>{var n=e.font;return n?$h[n]?t.withTextFontFamily($h[n]):eg[n]?t.withTextFontWeight(eg[n]):n===`\\emph`?t.fontShape===`textit`?t.withTextFontShape(`textup`):t.withTextFontShape(`textit`):t.withTextFontShape(tg[n]):t};X({type:`text`,names:[`\\text`,`\\textrm`,`\\textsf`,`\\texttt`,`\\textnormal`,`\\textbf`,`\\textmd`,`\\textit`,`\\textup`,`\\emph`],props:{numArgs:1,argTypes:[`text`],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:n,funcName:r}=e,i=t[0];return{type:`text`,mode:n.mode,body:hp(i),font:r}},htmlBuilder(e,t){var n=ng(e,t);return Y([`mord`,`text`],bp(e.body,n,!0),n)},mathmlBuilder(e,t){var n=ng(e,t);return Bp(e.body,n)}}),X({type:`underline`,names:[`\\underline`],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:n}=e;return{type:`underline`,mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=Ep(e.body,t),r=Jf(`underline-line`,t),i=t.fontMetrics().defaultRuleThickness;return Y([`mord`,`underline`],[$f({positionType:`top`,positionData:n.height,children:[{type:`kern`,size:i},{type:`elem`,elem:r},{type:`kern`,size:3*i},{type:`elem`,elem:n}]})],t)},mathmlBuilder(e,t){var n=new Z(`mo`,[new Ap(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new Z(`munder`,[Vp(e.body,t),n]);return r.setAttribute(`accentunder`,`true`),r}}),X({type:`vcenter`,names:[`\\vcenter`],props:{numArgs:1,argTypes:[`original`],allowedInText:!1},handler(e,t){var{parser:n}=e;return{type:`vcenter`,mode:n.mode,body:t[0]}},htmlBuilder(e,t){var n=Ep(e.body,t),r=t.fontMetrics().axisHeight;return $f({positionType:`shift`,positionData:.5*(n.height-r-(n.depth+r)),children:[{type:`elem`,elem:n}]})},mathmlBuilder(e,t){return new Z(`mrow`,[new Z(`mpadded`,[Vp(e.body,t)],[`vcenter`])])}}),X({type:`verb`,names:[`\\verb`],props:{numArgs:0,allowedInText:!0},handler(e,t,n){throw new I(`\\verb ended by end of line instead of matching delimiter`)},htmlBuilder(e,t){for(var n=rg(e),r=[],i=t.havingStyle(t.style.text()),a=0;a<n.length;a++){var o=n[a];o===`~`&&(o=`\\textasciitilde`),r.push(Bf(o,`Typewriter-Regular`,e.mode,i,[`mord`,`texttt`]))}return Y([`mord`,`text`].concat(i.sizingClasses(t)),Gf(r),i)},mathmlBuilder(e,t){var n=new Z(`mtext`,[new Ap(rg(e))]);return n.setAttribute(`mathvariant`,`monospace`),n}});var rg=e=>e.body.replace(/ /g,e.star?`␣`:`\xA0`),ig=up,ag=`[ \r
	]`,og=`\\\\[a-zA-Z@]+`,sg=`\\\\[^\ud800-\udfff]`,cg=`(`+og+`)`+ag+`*`,lg=`\\\\(
|[ \r	]+
?)[ \r	]*`,ug=`[̀-ͯ]`,dg=RegExp(ug+`+$`),fg=`(`+ag+`+)|`+(lg+`|`)+`([!-\\[\\]-‧‪-퟿豈-￿]`+(ug+`*`)+`|[\ud800-\udbff][\udc00-\udfff]`+(ug+`*`)+`|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5`+(`|`+cg)+(`|`+sg+`)`),pg=class{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(fg,`g`),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new mh(`EOF`,new ph(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new I(`Unexpected character: '`+e[t]+`'`,new mh(e[t],new ph(this,t,t+1)));var r=n[6]||n[3]||(n[2]?`\\ `:` `);if(this.catcodes[r]===14){var i=e.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict(`commentAtEnd`,`% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)`)):this.tokenRegex.lastIndex=i+1,this.lex()}return new mh(r,new ph(this,t,this.tokenRegex.lastIndex))}},mg=class{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new I(`Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug`);var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(e)&&(i[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}},hg=fh;$(`\\noexpand`,function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}}),$(`\\expandafter`,function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}}),$(`\\@firstoftwo`,function(e){return{tokens:e.consumeArgs(2)[0],numArgs:0}}),$(`\\@secondoftwo`,function(e){return{tokens:e.consumeArgs(2)[1],numArgs:0}}),$(`\\@ifnextchar`,function(e){var t=e.consumeArgs(3);e.consumeSpaces();var n=e.future();return t[0].length===1&&t[0][0].text===n.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}}),$(`\\@ifstar`,`\\@ifnextchar *{\\@firstoftwo{#1}}`),$(`\\TextOrMath`,function(e){var t=e.consumeArgs(2);return e.mode===`text`?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var gg={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};$(`\\char`,function(e){var t=e.popToken(),n,r=0;if(t.text===`'`)n=8,t=e.popToken();else if(t.text===`"`)n=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]===`\\`)r=t.text.charCodeAt(1);else if(t.text===`EOF`)throw new I("\\char` missing argument");else r=t.text.charCodeAt(0);else n=10;if(n){if(r=gg[t.text],r==null||r>=n)throw new I(`Invalid base-`+n+` digit `+t.text);for(var i;(i=gg[e.future().text])!=null&&i<n;)r*=n,r+=i,e.popToken()}return`\\@char{`+r+`}`});var _g=(e,t,n,r)=>{var i=e.consumeArg().tokens;if(i.length!==1)throw new I(`\\newcommand's first argument must be a macro name`);var a=i[0].text,o=e.isDefined(a);if(o&&!t)throw new I(`\\newcommand{`+a+`} attempting to redefine `+(a+`; use \\renewcommand`));if(!o&&!n)throw new I(`\\renewcommand{`+a+`} when command `+a+` does not yet exist; use \\newcommand`);var s=0;if(i=e.consumeArg().tokens,i.length===1&&i[0].text===`[`){for(var c=``,l=e.expandNextToken();l.text!==`]`&&l.text!==`EOF`;)c+=l.text,l=e.expandNextToken();if(!c.match(/^\s*[0-9]+\s*$/))throw new I(`Invalid number of arguments: `+c);s=parseInt(c),i=e.consumeArg().tokens}return o&&r||e.macros.set(a,{tokens:i,numArgs:s}),``};$(`\\newcommand`,e=>_g(e,!1,!0,!1)),$(`\\renewcommand`,e=>_g(e,!0,!1,!1)),$(`\\providecommand`,e=>_g(e,!0,!0,!0)),$(`\\message`,e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(e=>e.text).join(``)),``}),$(`\\errmessage`,e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(e=>e.text).join(``)),``}),$(`\\show`,e=>{var t=e.popToken(),n=t.text;return console.log(t,e.macros.get(n),ig[n],Qd.math[n],Qd.text[n]),``}),$(`\\bgroup`,`{`),$(`\\egroup`,`}`),$(`~`,`\\nobreakspace`),$(`\\lq`,"`"),$(`\\rq`,`'`),$(`\\aa`,`\\r a`),$(`\\AA`,`\\r A`),$(`\\textcopyright`,"\\html@mathml{\\textcircled{c}}{\\char`©}"),$(`\\copyright`,`\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}`),$(`\\textregistered`,"\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),$(`ℬ`,`\\mathscr{B}`),$(`ℰ`,`\\mathscr{E}`),$(`ℱ`,`\\mathscr{F}`),$(`ℋ`,`\\mathscr{H}`),$(`ℐ`,`\\mathscr{I}`),$(`ℒ`,`\\mathscr{L}`),$(`ℳ`,`\\mathscr{M}`),$(`ℛ`,`\\mathscr{R}`),$(`ℭ`,`\\mathfrak{C}`),$(`ℌ`,`\\mathfrak{H}`),$(`ℨ`,`\\mathfrak{Z}`),$(`\\Bbbk`,`\\Bbb{k}`),$(`\\llap`,`\\mathllap{\\textrm{#1}}`),$(`\\rlap`,`\\mathrlap{\\textrm{#1}}`),$(`\\clap`,`\\mathclap{\\textrm{#1}}`),$(`\\mathstrut`,`\\vphantom{(}`),$(`\\underbar`,`\\underline{\\text{#1}}`),$(`\\not`,`\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}`),$(`\\neq`,"\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),$(`\\ne`,`\\neq`),$(`≠`,`\\neq`),$(`\\notin`,"\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),$(`∉`,`\\notin`),$(`≘`,"\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),$(`≙`,"\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),$(`≚`,"\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),$(`≛`,"\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),$(`≝`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),$(`≞`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),$(`≟`,"\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),$(`⟂`,`\\perp`),$(`‼`,`\\mathclose{!\\mkern-0.8mu!}`),$(`∌`,`\\notni`),$(`⌜`,`\\ulcorner`),$(`⌝`,`\\urcorner`),$(`⌞`,`\\llcorner`),$(`⌟`,`\\lrcorner`),$(`©`,`\\copyright`),$(`®`,`\\textregistered`),$(`\\ulcorner`,`\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}`),$(`\\urcorner`,`\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}`),$(`\\llcorner`,`\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}`),$(`\\lrcorner`,`\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}`),$(`\\vdots`,`{\\varvdots\\rule{0pt}{15pt}}`),$(`⋮`,`\\vdots`),$(`\\varGamma`,`\\mathit{\\Gamma}`),$(`\\varDelta`,`\\mathit{\\Delta}`),$(`\\varTheta`,`\\mathit{\\Theta}`),$(`\\varLambda`,`\\mathit{\\Lambda}`),$(`\\varXi`,`\\mathit{\\Xi}`),$(`\\varPi`,`\\mathit{\\Pi}`),$(`\\varSigma`,`\\mathit{\\Sigma}`),$(`\\varUpsilon`,`\\mathit{\\Upsilon}`),$(`\\varPhi`,`\\mathit{\\Phi}`),$(`\\varPsi`,`\\mathit{\\Psi}`),$(`\\varOmega`,`\\mathit{\\Omega}`),$(`\\substack`,`\\begin{subarray}{c}#1\\end{subarray}`),$(`\\colon`,`\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax`),$(`\\boxed`,`\\fbox{$\\displaystyle{#1}$}`),$(`\\iff`,`\\DOTSB\\;\\Longleftrightarrow\\;`),$(`\\implies`,`\\DOTSB\\;\\Longrightarrow\\;`),$(`\\impliedby`,`\\DOTSB\\;\\Longleftarrow\\;`),$(`\\dddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}`),$(`\\ddddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}`);var vg={",":`\\dotsc`,"\\not":`\\dotsb`,"+":`\\dotsb`,"=":`\\dotsb`,"<":`\\dotsb`,">":`\\dotsb`,"-":`\\dotsb`,"*":`\\dotsb`,":":`\\dotsb`,"\\DOTSB":`\\dotsb`,"\\coprod":`\\dotsb`,"\\bigvee":`\\dotsb`,"\\bigwedge":`\\dotsb`,"\\biguplus":`\\dotsb`,"\\bigcap":`\\dotsb`,"\\bigcup":`\\dotsb`,"\\prod":`\\dotsb`,"\\sum":`\\dotsb`,"\\bigotimes":`\\dotsb`,"\\bigoplus":`\\dotsb`,"\\bigodot":`\\dotsb`,"\\bigsqcup":`\\dotsb`,"\\And":`\\dotsb`,"\\longrightarrow":`\\dotsb`,"\\Longrightarrow":`\\dotsb`,"\\longleftarrow":`\\dotsb`,"\\Longleftarrow":`\\dotsb`,"\\longleftrightarrow":`\\dotsb`,"\\Longleftrightarrow":`\\dotsb`,"\\mapsto":`\\dotsb`,"\\longmapsto":`\\dotsb`,"\\hookrightarrow":`\\dotsb`,"\\doteq":`\\dotsb`,"\\mathbin":`\\dotsb`,"\\mathrel":`\\dotsb`,"\\relbar":`\\dotsb`,"\\Relbar":`\\dotsb`,"\\xrightarrow":`\\dotsb`,"\\xleftarrow":`\\dotsb`,"\\DOTSI":`\\dotsi`,"\\int":`\\dotsi`,"\\oint":`\\dotsi`,"\\iint":`\\dotsi`,"\\iiint":`\\dotsi`,"\\iiiint":`\\dotsi`,"\\idotsint":`\\dotsi`,"\\DOTSX":`\\dotsx`},yg=new Set([`bin`,`rel`]);$(`\\dots`,function(e){var t=`\\dotso`,n=e.expandAfterFuture().text;return n in vg?t=vg[n]:(n.slice(0,4)===`\\not`||n in Qd.math&&yg.has(Qd.math[n].group))&&(t=`\\dotsb`),t});var bg={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};$(`\\dotso`,function(e){return e.future().text in bg?`\\ldots\\,`:`\\ldots`}),$(`\\dotsc`,function(e){var t=e.future().text;return t in bg&&t!==`,`?`\\ldots\\,`:`\\ldots`}),$(`\\cdots`,function(e){return e.future().text in bg?`\\@cdots\\,`:`\\@cdots`}),$(`\\dotsb`,`\\cdots`),$(`\\dotsm`,`\\cdots`),$(`\\dotsi`,`\\!\\cdots`),$(`\\dotsx`,`\\ldots\\,`),$(`\\DOTSI`,`\\relax`),$(`\\DOTSB`,`\\relax`),$(`\\DOTSX`,`\\relax`),$(`\\tmspace`,`\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax`),$(`\\,`,`\\tmspace+{3mu}{.1667em}`),$(`\\thinspace`,`\\,`),$(`\\>`,`\\mskip{4mu}`),$(`\\:`,`\\tmspace+{4mu}{.2222em}`),$(`\\medspace`,`\\:`),$(`\\;`,`\\tmspace+{5mu}{.2777em}`),$(`\\thickspace`,`\\;`),$(`\\!`,`\\tmspace-{3mu}{.1667em}`),$(`\\negthinspace`,`\\!`),$(`\\negmedspace`,`\\tmspace-{4mu}{.2222em}`),$(`\\negthickspace`,`\\tmspace-{5mu}{.277em}`),$(`\\enspace`,`\\kern.5em `),$(`\\enskip`,`\\hskip.5em\\relax`),$(`\\quad`,`\\hskip1em\\relax`),$(`\\qquad`,`\\hskip2em\\relax`),$(`\\tag`,`\\@ifstar\\tag@literal\\tag@paren`),$(`\\tag@paren`,`\\tag@literal{({#1})}`),$(`\\tag@literal`,e=>{if(e.macros.get(`\\df@tag`))throw new I(`Multiple \\tag`);return`\\gdef\\df@tag{\\text{#1}}`}),$(`\\bmod`,`\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}`),$(`\\pod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)`),$(`\\pmod`,`\\pod{{\\rm mod}\\mkern6mu#1}`),$(`\\mod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1`),$(`\\newline`,`\\\\\\relax`),$(`\\TeX`,`\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}`);var xg=R(Gd[`Main-Regular`][84][1]-.7*Gd[`Main-Regular`][65][1]);$(`\\LaTeX`,`\\textrm{\\html@mathml{`+(`L\\kern-.36em\\raisebox{`+xg+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{LaTeX}}`),$(`\\KaTeX`,`\\textrm{\\html@mathml{`+(`K\\kern-.17em\\raisebox{`+xg+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{KaTeX}}`),$(`\\hspace`,`\\@ifstar\\@hspacer\\@hspace`),$(`\\@hspace`,`\\hskip #1\\relax`),$(`\\@hspacer`,`\\rule{0pt}{0pt}\\hskip #1\\relax`),$(`\\ordinarycolon`,`:`),$(`\\vcentcolon`,`\\mathrel{\\mathop\\ordinarycolon}`),$(`\\dblcolon`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}`),$(`\\coloneqq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}`),$(`\\Coloneqq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}`),$(`\\coloneq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}`),$(`\\Coloneq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}`),$(`\\eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}`),$(`\\Eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}`),$(`\\eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}`),$(`\\Eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}`),$(`\\colonapprox`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}`),$(`\\Colonapprox`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}`),$(`\\colonsim`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}`),$(`\\Colonsim`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}`),$(`∷`,`\\dblcolon`),$(`∹`,`\\eqcolon`),$(`≔`,`\\coloneqq`),$(`≕`,`\\eqqcolon`),$(`⩴`,`\\Coloneqq`),$(`\\ratio`,`\\vcentcolon`),$(`\\coloncolon`,`\\dblcolon`),$(`\\colonequals`,`\\coloneqq`),$(`\\coloncolonequals`,`\\Coloneqq`),$(`\\equalscolon`,`\\eqqcolon`),$(`\\equalscoloncolon`,`\\Eqqcolon`),$(`\\colonminus`,`\\coloneq`),$(`\\coloncolonminus`,`\\Coloneq`),$(`\\minuscolon`,`\\eqcolon`),$(`\\minuscoloncolon`,`\\Eqcolon`),$(`\\coloncolonapprox`,`\\Colonapprox`),$(`\\coloncolonsim`,`\\Colonsim`),$(`\\simcolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),$(`\\simcoloncolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}`),$(`\\approxcolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),$(`\\approxcoloncolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}`),$(`\\notni`,"\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),$(`\\limsup`,`\\DOTSB\\operatorname*{lim\\,sup}`),$(`\\liminf`,`\\DOTSB\\operatorname*{lim\\,inf}`),$(`\\injlim`,`\\DOTSB\\operatorname*{inj\\,lim}`),$(`\\projlim`,`\\DOTSB\\operatorname*{proj\\,lim}`),$(`\\varlimsup`,`\\DOTSB\\operatorname*{\\overline{lim}}`),$(`\\varliminf`,`\\DOTSB\\operatorname*{\\underline{lim}}`),$(`\\varinjlim`,`\\DOTSB\\operatorname*{\\underrightarrow{lim}}`),$(`\\varprojlim`,`\\DOTSB\\operatorname*{\\underleftarrow{lim}}`),$(`\\gvertneqq`,`\\html@mathml{\\@gvertneqq}{≩}`),$(`\\lvertneqq`,`\\html@mathml{\\@lvertneqq}{≨}`),$(`\\ngeqq`,`\\html@mathml{\\@ngeqq}{≱}`),$(`\\ngeqslant`,`\\html@mathml{\\@ngeqslant}{≱}`),$(`\\nleqq`,`\\html@mathml{\\@nleqq}{≰}`),$(`\\nleqslant`,`\\html@mathml{\\@nleqslant}{≰}`),$(`\\nshortmid`,`\\html@mathml{\\@nshortmid}{∤}`),$(`\\nshortparallel`,`\\html@mathml{\\@nshortparallel}{∦}`),$(`\\nsubseteqq`,`\\html@mathml{\\@nsubseteqq}{⊈}`),$(`\\nsupseteqq`,`\\html@mathml{\\@nsupseteqq}{⊉}`),$(`\\varsubsetneq`,`\\html@mathml{\\@varsubsetneq}{⊊}`),$(`\\varsubsetneqq`,`\\html@mathml{\\@varsubsetneqq}{⫋}`),$(`\\varsupsetneq`,`\\html@mathml{\\@varsupsetneq}{⊋}`),$(`\\varsupsetneqq`,`\\html@mathml{\\@varsupsetneqq}{⫌}`),$(`\\imath`,`\\html@mathml{\\@imath}{ı}`),$(`\\jmath`,`\\html@mathml{\\@jmath}{ȷ}`),$(`\\llbracket`,"\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"),$(`\\rrbracket`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"),$(`⟦`,`\\llbracket`),$(`⟧`,`\\rrbracket`),$(`\\lBrace`,"\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"),$(`\\rBrace`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"),$(`⦃`,`\\lBrace`),$(`⦄`,`\\rBrace`),$(`\\minuso`,"\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"),$(`⦵`,`\\minuso`),$(`\\darr`,`\\downarrow`),$(`\\dArr`,`\\Downarrow`),$(`\\Darr`,`\\Downarrow`),$(`\\lang`,`\\langle`),$(`\\rang`,`\\rangle`),$(`\\uarr`,`\\uparrow`),$(`\\uArr`,`\\Uparrow`),$(`\\Uarr`,`\\Uparrow`),$(`\\N`,`\\mathbb{N}`),$(`\\R`,`\\mathbb{R}`),$(`\\Z`,`\\mathbb{Z}`),$(`\\alef`,`\\aleph`),$(`\\alefsym`,`\\aleph`),$(`\\Alpha`,`\\mathrm{A}`),$(`\\Beta`,`\\mathrm{B}`),$(`\\bull`,`\\bullet`),$(`\\Chi`,`\\mathrm{X}`),$(`\\clubs`,`\\clubsuit`),$(`\\cnums`,`\\mathbb{C}`),$(`\\Complex`,`\\mathbb{C}`),$(`\\Dagger`,`\\ddagger`),$(`\\diamonds`,`\\diamondsuit`),$(`\\empty`,`\\emptyset`),$(`\\Epsilon`,`\\mathrm{E}`),$(`\\Eta`,`\\mathrm{H}`),$(`\\exist`,`\\exists`),$(`\\harr`,`\\leftrightarrow`),$(`\\hArr`,`\\Leftrightarrow`),$(`\\Harr`,`\\Leftrightarrow`),$(`\\hearts`,`\\heartsuit`),$(`\\image`,`\\Im`),$(`\\infin`,`\\infty`),$(`\\Iota`,`\\mathrm{I}`),$(`\\isin`,`\\in`),$(`\\Kappa`,`\\mathrm{K}`),$(`\\larr`,`\\leftarrow`),$(`\\lArr`,`\\Leftarrow`),$(`\\Larr`,`\\Leftarrow`),$(`\\lrarr`,`\\leftrightarrow`),$(`\\lrArr`,`\\Leftrightarrow`),$(`\\Lrarr`,`\\Leftrightarrow`),$(`\\Mu`,`\\mathrm{M}`),$(`\\natnums`,`\\mathbb{N}`),$(`\\Nu`,`\\mathrm{N}`),$(`\\Omicron`,`\\mathrm{O}`),$(`\\plusmn`,`\\pm`),$(`\\rarr`,`\\rightarrow`),$(`\\rArr`,`\\Rightarrow`),$(`\\Rarr`,`\\Rightarrow`),$(`\\real`,`\\Re`),$(`\\reals`,`\\mathbb{R}`),$(`\\Reals`,`\\mathbb{R}`),$(`\\Rho`,`\\mathrm{P}`),$(`\\sdot`,`\\cdot`),$(`\\sect`,`\\S`),$(`\\spades`,`\\spadesuit`),$(`\\sub`,`\\subset`),$(`\\sube`,`\\subseteq`),$(`\\supe`,`\\supseteq`),$(`\\Tau`,`\\mathrm{T}`),$(`\\thetasym`,`\\vartheta`),$(`\\weierp`,`\\wp`),$(`\\Zeta`,`\\mathrm{Z}`),$(`\\argmin`,`\\DOTSB\\operatorname*{arg\\,min}`),$(`\\argmax`,`\\DOTSB\\operatorname*{arg\\,max}`),$(`\\plim`,`\\DOTSB\\mathop{\\operatorname{plim}}\\limits`),$(`\\bra`,`\\mathinner{\\langle{#1}|}`),$(`\\ket`,`\\mathinner{|{#1}\\rangle}`),$(`\\braket`,`\\mathinner{\\langle{#1}\\rangle}`),$(`\\Bra`,`\\left\\langle#1\\right|`),$(`\\Ket`,`\\left|#1\\right\\rangle`);var Sg=e=>t=>{var n=t.consumeArg().tokens,r=t.consumeArg().tokens,i=t.consumeArg().tokens,a=t.consumeArg().tokens,o=t.macros.get(`|`),s=t.macros.get(`\\|`);t.macros.beginGroup();var c=t=>n=>{e&&(n.macros.set(`|`,o),i.length&&n.macros.set(`\\|`,s));var a=t;return!t&&i.length&&n.future().text===`|`&&(n.popToken(),a=!0),{tokens:a?i:r,numArgs:0}};t.macros.set(`|`,c(!1)),i.length&&t.macros.set(`\\|`,c(!0));var l=t.consumeArg().tokens,u=t.expandTokens([...a,...l,...n]);return t.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};$(`\\bra@ket`,Sg(!1)),$(`\\bra@set`,Sg(!0)),$(`\\Braket`,`\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}`),$(`\\Set`,`\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}`),$(`\\set`,`\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}`),$(`\\angln`,`{\\angl n}`),$(`\\blue`,`\\textcolor{##6495ed}{#1}`),$(`\\orange`,`\\textcolor{##ffa500}{#1}`),$(`\\pink`,`\\textcolor{##ff00af}{#1}`),$(`\\red`,`\\textcolor{##df0030}{#1}`),$(`\\green`,`\\textcolor{##28ae7b}{#1}`),$(`\\gray`,`\\textcolor{gray}{#1}`),$(`\\purple`,`\\textcolor{##9d38bd}{#1}`),$(`\\blueA`,`\\textcolor{##ccfaff}{#1}`),$(`\\blueB`,`\\textcolor{##80f6ff}{#1}`),$(`\\blueC`,`\\textcolor{##63d9ea}{#1}`),$(`\\blueD`,`\\textcolor{##11accd}{#1}`),$(`\\blueE`,`\\textcolor{##0c7f99}{#1}`),$(`\\tealA`,`\\textcolor{##94fff5}{#1}`),$(`\\tealB`,`\\textcolor{##26edd5}{#1}`),$(`\\tealC`,`\\textcolor{##01d1c1}{#1}`),$(`\\tealD`,`\\textcolor{##01a995}{#1}`),$(`\\tealE`,`\\textcolor{##208170}{#1}`),$(`\\greenA`,`\\textcolor{##b6ffb0}{#1}`),$(`\\greenB`,`\\textcolor{##8af281}{#1}`),$(`\\greenC`,`\\textcolor{##74cf70}{#1}`),$(`\\greenD`,`\\textcolor{##1fab54}{#1}`),$(`\\greenE`,`\\textcolor{##0d923f}{#1}`),$(`\\goldA`,`\\textcolor{##ffd0a9}{#1}`),$(`\\goldB`,`\\textcolor{##ffbb71}{#1}`),$(`\\goldC`,`\\textcolor{##ff9c39}{#1}`),$(`\\goldD`,`\\textcolor{##e07d10}{#1}`),$(`\\goldE`,`\\textcolor{##a75a05}{#1}`),$(`\\redA`,`\\textcolor{##fca9a9}{#1}`),$(`\\redB`,`\\textcolor{##ff8482}{#1}`),$(`\\redC`,`\\textcolor{##f9685d}{#1}`),$(`\\redD`,`\\textcolor{##e84d39}{#1}`),$(`\\redE`,`\\textcolor{##bc2612}{#1}`),$(`\\maroonA`,`\\textcolor{##ffbde0}{#1}`),$(`\\maroonB`,`\\textcolor{##ff92c6}{#1}`),$(`\\maroonC`,`\\textcolor{##ed5fa6}{#1}`),$(`\\maroonD`,`\\textcolor{##ca337c}{#1}`),$(`\\maroonE`,`\\textcolor{##9e034e}{#1}`),$(`\\purpleA`,`\\textcolor{##ddd7ff}{#1}`),$(`\\purpleB`,`\\textcolor{##c6b9fc}{#1}`),$(`\\purpleC`,`\\textcolor{##aa87ff}{#1}`),$(`\\purpleD`,`\\textcolor{##7854ab}{#1}`),$(`\\purpleE`,`\\textcolor{##543b78}{#1}`),$(`\\mintA`,`\\textcolor{##f5f9e8}{#1}`),$(`\\mintB`,`\\textcolor{##edf2df}{#1}`),$(`\\mintC`,`\\textcolor{##e0e5cc}{#1}`),$(`\\grayA`,`\\textcolor{##f6f7f7}{#1}`),$(`\\grayB`,`\\textcolor{##f0f1f2}{#1}`),$(`\\grayC`,`\\textcolor{##e3e5e6}{#1}`),$(`\\grayD`,`\\textcolor{##d6d8da}{#1}`),$(`\\grayE`,`\\textcolor{##babec2}{#1}`),$(`\\grayF`,`\\textcolor{##888d93}{#1}`),$(`\\grayG`,`\\textcolor{##626569}{#1}`),$(`\\grayH`,`\\textcolor{##3b3e40}{#1}`),$(`\\grayI`,`\\textcolor{##21242c}{#1}`),$(`\\kaBlue`,`\\textcolor{##314453}{#1}`),$(`\\kaGreen`,`\\textcolor{##71B307}{#1}`);var Cg={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0},wg=class{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new mg(hg,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new pg(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!==`[`)return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg([`]`])}else ({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new mh(`EOF`,n.loc)),this.pushTokens(r),new mh(``,ph.range(t,n))}consumeSpaces(){for(;this.future().text===` `;)this.stack.pop()}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),i,a=0,o=0;do{if(i=this.popToken(),t.push(i),i.text===`{`)++a;else if(i.text===`}`){if(--a,a===-1)throw new I(`Extra }`,i)}else if(i.text===`EOF`)throw new I(`Unexpected end of input in a macro argument, expected '`+(e&&n?e[o]:`}`)+`'`,i);if(e&&n)if((a===0||a===1&&e[o]===`{`)&&i.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(a!==0||n);return r.text===`{`&&t[t.length-1].text===`}`&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:i}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new I(`The length of delimiters doesn't match the number of args!`);for(var n=t[0],r=0;r<n.length;r++){var i=this.popToken();if(n[r]!==i.text)throw new I(`Use of the macro doesn't match its definition`,i)}}for(var a=[],o=0;o<e;o++)a.push(this.consumeArg(t&&t[o+1]).tokens);return a}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new I(`Too many expansions: infinite loop or need to increase maxExpand setting`)}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]===`\\`&&!this.isDefined(n))throw new I(`Undefined control sequence: `+n);return this.pushToken(t),!1}this.countExpansion(1);var i=r.tokens,a=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){i=i.slice();for(var o=i.length-1;o>=0;--o){var s=i[o];if(s.text===`#`){if(o===0)throw new I(`Incomplete placeholder at end of macro body`,s);if(s=i[--o],s.text===`#`)i.splice(o+1,1);else if(/^[1-9]$/.test(s.text))i.splice(o,2,...a[s.text-1]);else throw new I(`Not a valid argument number`,s)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text=`\\relax`),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new mh(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&=(r.noexpand=!1,!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(e=>e.text).join(``)}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t==`function`?t(this):t;if(typeof r==`string`){var i=0;if(r.includes(`#`))for(var a=r.replace(/##/g,``);a.includes(`#`+(i+1));)++i;for(var o=new pg(r,this.settings),s=[],c=o.lex();c.text!==`EOF`;)s.push(c),c=o.lex();return s.reverse(),{tokens:s,numArgs:i}}return r}isDefined(e){return this.macros.has(e)||ig.hasOwnProperty(e)||Qd.math.hasOwnProperty(e)||Qd.text.hasOwnProperty(e)||Cg.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t==null?ig.hasOwnProperty(e)&&!ig[e].primitive:typeof t==`string`||typeof t==`function`||!t.unexpandable}},Tg=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Eg=Object.freeze({"₊":`+`,"₋":`-`,"₌":`=`,"₍":`(`,"₎":`)`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,ₐ:`a`,ₑ:`e`,ₕ:`h`,ᵢ:`i`,ⱼ:`j`,ₖ:`k`,ₗ:`l`,ₘ:`m`,ₙ:`n`,ₒ:`o`,ₚ:`p`,ᵣ:`r`,ₛ:`s`,ₜ:`t`,ᵤ:`u`,ᵥ:`v`,ₓ:`x`,ᵦ:`β`,ᵧ:`γ`,ᵨ:`ρ`,ᵩ:`ϕ`,ᵪ:`χ`,"⁺":`+`,"⁻":`-`,"⁼":`=`,"⁽":`(`,"⁾":`)`,"⁰":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,ᴬ:`A`,ᴮ:`B`,ᴰ:`D`,ᴱ:`E`,ᴳ:`G`,ᴴ:`H`,ᴵ:`I`,ᴶ:`J`,ᴷ:`K`,ᴸ:`L`,ᴹ:`M`,ᴺ:`N`,ᴼ:`O`,ᴾ:`P`,ᴿ:`R`,ᵀ:`T`,ᵁ:`U`,ⱽ:`V`,ᵂ:`W`,ᵃ:`a`,ᵇ:`b`,ᶜ:`c`,ᵈ:`d`,ᵉ:`e`,ᶠ:`f`,ᵍ:`g`,ʰ:`h`,ⁱ:`i`,ʲ:`j`,ᵏ:`k`,ˡ:`l`,ᵐ:`m`,ⁿ:`n`,ᵒ:`o`,ᵖ:`p`,ʳ:`r`,ˢ:`s`,ᵗ:`t`,ᵘ:`u`,ᵛ:`v`,ʷ:`w`,ˣ:`x`,ʸ:`y`,ᶻ:`z`,ᵝ:`β`,ᵞ:`γ`,ᵟ:`δ`,ᵠ:`ϕ`,ᵡ:`χ`,ᶿ:`θ`}),Dg={"́":{text:`\\'`,math:`\\acute`},"̀":{text:"\\`",math:`\\grave`},"̈":{text:`\\"`,math:`\\ddot`},"̃":{text:`\\~`,math:`\\tilde`},"̄":{text:`\\=`,math:`\\bar`},"̆":{text:`\\u`,math:`\\breve`},"̌":{text:`\\v`,math:`\\check`},"̂":{text:`\\^`,math:`\\hat`},"̇":{text:`\\.`,math:`\\dot`},"̊":{text:`\\r`,math:`\\mathring`},"̋":{text:`\\H`},"̧":{text:`\\c`}},Og={á:`á`,à:`à`,ä:`ä`,ǟ:`ǟ`,ã:`ã`,ā:`ā`,ă:`ă`,ắ:`ắ`,ằ:`ằ`,ẵ:`ẵ`,ǎ:`ǎ`,â:`â`,ấ:`ấ`,ầ:`ầ`,ẫ:`ẫ`,ȧ:`ȧ`,ǡ:`ǡ`,å:`å`,ǻ:`ǻ`,ḃ:`ḃ`,ć:`ć`,ḉ:`ḉ`,č:`č`,ĉ:`ĉ`,ċ:`ċ`,ç:`ç`,ď:`ď`,ḋ:`ḋ`,ḑ:`ḑ`,é:`é`,è:`è`,ë:`ë`,ẽ:`ẽ`,ē:`ē`,ḗ:`ḗ`,ḕ:`ḕ`,ĕ:`ĕ`,ḝ:`ḝ`,ě:`ě`,ê:`ê`,ế:`ế`,ề:`ề`,ễ:`ễ`,ė:`ė`,ȩ:`ȩ`,ḟ:`ḟ`,ǵ:`ǵ`,ḡ:`ḡ`,ğ:`ğ`,ǧ:`ǧ`,ĝ:`ĝ`,ġ:`ġ`,ģ:`ģ`,ḧ:`ḧ`,ȟ:`ȟ`,ĥ:`ĥ`,ḣ:`ḣ`,ḩ:`ḩ`,í:`í`,ì:`ì`,ï:`ï`,ḯ:`ḯ`,ĩ:`ĩ`,ī:`ī`,ĭ:`ĭ`,ǐ:`ǐ`,î:`î`,ǰ:`ǰ`,ĵ:`ĵ`,ḱ:`ḱ`,ǩ:`ǩ`,ķ:`ķ`,ĺ:`ĺ`,ľ:`ľ`,ļ:`ļ`,ḿ:`ḿ`,ṁ:`ṁ`,ń:`ń`,ǹ:`ǹ`,ñ:`ñ`,ň:`ň`,ṅ:`ṅ`,ņ:`ņ`,ó:`ó`,ò:`ò`,ö:`ö`,ȫ:`ȫ`,õ:`õ`,ṍ:`ṍ`,ṏ:`ṏ`,ȭ:`ȭ`,ō:`ō`,ṓ:`ṓ`,ṑ:`ṑ`,ŏ:`ŏ`,ǒ:`ǒ`,ô:`ô`,ố:`ố`,ồ:`ồ`,ỗ:`ỗ`,ȯ:`ȯ`,ȱ:`ȱ`,ő:`ő`,ṕ:`ṕ`,ṗ:`ṗ`,ŕ:`ŕ`,ř:`ř`,ṙ:`ṙ`,ŗ:`ŗ`,ś:`ś`,ṥ:`ṥ`,š:`š`,ṧ:`ṧ`,ŝ:`ŝ`,ṡ:`ṡ`,ş:`ş`,ẗ:`ẗ`,ť:`ť`,ṫ:`ṫ`,ţ:`ţ`,ú:`ú`,ù:`ù`,ü:`ü`,ǘ:`ǘ`,ǜ:`ǜ`,ǖ:`ǖ`,ǚ:`ǚ`,ũ:`ũ`,ṹ:`ṹ`,ū:`ū`,ṻ:`ṻ`,ŭ:`ŭ`,ǔ:`ǔ`,û:`û`,ů:`ů`,ű:`ű`,ṽ:`ṽ`,ẃ:`ẃ`,ẁ:`ẁ`,ẅ:`ẅ`,ŵ:`ŵ`,ẇ:`ẇ`,ẘ:`ẘ`,ẍ:`ẍ`,ẋ:`ẋ`,ý:`ý`,ỳ:`ỳ`,ÿ:`ÿ`,ỹ:`ỹ`,ȳ:`ȳ`,ŷ:`ŷ`,ẏ:`ẏ`,ẙ:`ẙ`,ź:`ź`,ž:`ž`,ẑ:`ẑ`,ż:`ż`,Á:`Á`,À:`À`,Ä:`Ä`,Ǟ:`Ǟ`,Ã:`Ã`,Ā:`Ā`,Ă:`Ă`,Ắ:`Ắ`,Ằ:`Ằ`,Ẵ:`Ẵ`,Ǎ:`Ǎ`,Â:`Â`,Ấ:`Ấ`,Ầ:`Ầ`,Ẫ:`Ẫ`,Ȧ:`Ȧ`,Ǡ:`Ǡ`,Å:`Å`,Ǻ:`Ǻ`,Ḃ:`Ḃ`,Ć:`Ć`,Ḉ:`Ḉ`,Č:`Č`,Ĉ:`Ĉ`,Ċ:`Ċ`,Ç:`Ç`,Ď:`Ď`,Ḋ:`Ḋ`,Ḑ:`Ḑ`,É:`É`,È:`È`,Ë:`Ë`,Ẽ:`Ẽ`,Ē:`Ē`,Ḗ:`Ḗ`,Ḕ:`Ḕ`,Ĕ:`Ĕ`,Ḝ:`Ḝ`,Ě:`Ě`,Ê:`Ê`,Ế:`Ế`,Ề:`Ề`,Ễ:`Ễ`,Ė:`Ė`,Ȩ:`Ȩ`,Ḟ:`Ḟ`,Ǵ:`Ǵ`,Ḡ:`Ḡ`,Ğ:`Ğ`,Ǧ:`Ǧ`,Ĝ:`Ĝ`,Ġ:`Ġ`,Ģ:`Ģ`,Ḧ:`Ḧ`,Ȟ:`Ȟ`,Ĥ:`Ĥ`,Ḣ:`Ḣ`,Ḩ:`Ḩ`,Í:`Í`,Ì:`Ì`,Ï:`Ï`,Ḯ:`Ḯ`,Ĩ:`Ĩ`,Ī:`Ī`,Ĭ:`Ĭ`,Ǐ:`Ǐ`,Î:`Î`,İ:`İ`,Ĵ:`Ĵ`,Ḱ:`Ḱ`,Ǩ:`Ǩ`,Ķ:`Ķ`,Ĺ:`Ĺ`,Ľ:`Ľ`,Ļ:`Ļ`,Ḿ:`Ḿ`,Ṁ:`Ṁ`,Ń:`Ń`,Ǹ:`Ǹ`,Ñ:`Ñ`,Ň:`Ň`,Ṅ:`Ṅ`,Ņ:`Ņ`,Ó:`Ó`,Ò:`Ò`,Ö:`Ö`,Ȫ:`Ȫ`,Õ:`Õ`,Ṍ:`Ṍ`,Ṏ:`Ṏ`,Ȭ:`Ȭ`,Ō:`Ō`,Ṓ:`Ṓ`,Ṑ:`Ṑ`,Ŏ:`Ŏ`,Ǒ:`Ǒ`,Ô:`Ô`,Ố:`Ố`,Ồ:`Ồ`,Ỗ:`Ỗ`,Ȯ:`Ȯ`,Ȱ:`Ȱ`,Ő:`Ő`,Ṕ:`Ṕ`,Ṗ:`Ṗ`,Ŕ:`Ŕ`,Ř:`Ř`,Ṙ:`Ṙ`,Ŗ:`Ŗ`,Ś:`Ś`,Ṥ:`Ṥ`,Š:`Š`,Ṧ:`Ṧ`,Ŝ:`Ŝ`,Ṡ:`Ṡ`,Ş:`Ş`,Ť:`Ť`,Ṫ:`Ṫ`,Ţ:`Ţ`,Ú:`Ú`,Ù:`Ù`,Ü:`Ü`,Ǘ:`Ǘ`,Ǜ:`Ǜ`,Ǖ:`Ǖ`,Ǚ:`Ǚ`,Ũ:`Ũ`,Ṹ:`Ṹ`,Ū:`Ū`,Ṻ:`Ṻ`,Ŭ:`Ŭ`,Ǔ:`Ǔ`,Û:`Û`,Ů:`Ů`,Ű:`Ű`,Ṽ:`Ṽ`,Ẃ:`Ẃ`,Ẁ:`Ẁ`,Ẅ:`Ẅ`,Ŵ:`Ŵ`,Ẇ:`Ẇ`,Ẍ:`Ẍ`,Ẋ:`Ẋ`,Ý:`Ý`,Ỳ:`Ỳ`,Ÿ:`Ÿ`,Ỹ:`Ỹ`,Ȳ:`Ȳ`,Ŷ:`Ŷ`,Ẏ:`Ẏ`,Ź:`Ź`,Ž:`Ž`,Ẑ:`Ẑ`,Ż:`Ż`,ά:`ά`,ὰ:`ὰ`,ᾱ:`ᾱ`,ᾰ:`ᾰ`,έ:`έ`,ὲ:`ὲ`,ή:`ή`,ὴ:`ὴ`,ί:`ί`,ὶ:`ὶ`,ϊ:`ϊ`,ΐ:`ΐ`,ῒ:`ῒ`,ῑ:`ῑ`,ῐ:`ῐ`,ό:`ό`,ὸ:`ὸ`,ύ:`ύ`,ὺ:`ὺ`,ϋ:`ϋ`,ΰ:`ΰ`,ῢ:`ῢ`,ῡ:`ῡ`,ῠ:`ῠ`,ώ:`ώ`,ὼ:`ὼ`,Ύ:`Ύ`,Ὺ:`Ὺ`,Ϋ:`Ϋ`,Ῡ:`Ῡ`,Ῠ:`Ῠ`,Ώ:`Ώ`,Ὼ:`Ὼ`},kg=class e{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode=`math`,this.gullet=new wg(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new I(`Expected '`+e+`', got '`+this.fetch().text+`'`,this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken??=this.gullet.expandNextToken(),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set(`\\color`,`\\textcolor`);try{var e=this.parseExpression(!1);return this.expect(`EOF`),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new mh(`}`)),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect(`}`),this.nextToken=t,n}parseExpression(t,n){for(var r=[];;){this.mode===`math`&&this.consumeSpaces();var i=this.fetch();if(e.endOfExpression.has(i.text)||n&&i.text===n||t&&ig[i.text]&&ig[i.text].infix)break;var a=this.parseAtom(n);if(!a)break;a.type!==`internal`&&r.push(a)}return this.mode===`text`&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++){var i=e[r];if(i.type===`infix`){if(t!==-1)throw new I(`only one infix operator per group`,i.token);t=r,n=i.replaceWith}}if(t!==-1&&n){var a,o,s=e.slice(0,t),c=e.slice(t+1);return a=s.length===1&&s[0].type===`ordgroup`?s[0]:{type:`ordgroup`,mode:this.mode,body:s},o=c.length===1&&c[0].type===`ordgroup`?c[0]:{type:`ordgroup`,mode:this.mode,body:c},[n===`\\\\abovefrac`?this.callFunction(n,[a,e[t],o],[]):this.callFunction(n,[a,o],[])]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do r=this.parseGroup(e);while(r?.type===`internal`);if(!r)throw new I(`Expected group after '`+n+`'`,t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:`textord`,mode:`text`,text:e[n]});var r={type:`text`,mode:this.mode,body:t};return{type:`color`,mode:this.mode,color:this.settings.errorColor,body:[r]}}parseAtom(e){var t=this.parseGroup(`atom`,e);if(t?.type===`internal`||this.mode===`text`)return t;for(var n,r;;){this.consumeSpaces();var i=this.fetch();if(i.text===`\\limits`||i.text===`\\nolimits`){if(t&&t.type===`op`)t.limits=i.text===`\\limits`,t.alwaysHandleSupSub=!0;else if(t&&t.type===`operatorname`)t.alwaysHandleSupSub&&(t.limits=i.text===`\\limits`);else throw new I(`Limit controls must follow a math operator`,i);this.consume()}else if(i.text===`^`){if(n)throw new I(`Double superscript`,i);n=this.handleSupSubscript(`superscript`)}else if(i.text===`_`){if(r)throw new I(`Double subscript`,i);r=this.handleSupSubscript(`subscript`)}else if(i.text===`'`){if(n)throw new I(`Double superscript`,i);var a={type:`textord`,mode:this.mode,text:`\\prime`},o=[a];for(this.consume();this.fetch().text===`'`;)o.push(a),this.consume();this.fetch().text===`^`&&o.push(this.handleSupSubscript(`superscript`)),n={type:`ordgroup`,mode:this.mode,body:o}}else if(Eg[i.text]){var s=Tg.test(i.text),c=[];for(c.push(new mh(Eg[i.text])),this.consume();;){var l=this.fetch().text;if(!Eg[l]||Tg.test(l)!==s)break;c.unshift(new mh(Eg[l])),this.consume()}var u=this.subparse(c);s?r={type:`ordgroup`,mode:`math`,body:u}:n={type:`ordgroup`,mode:`math`,body:u}}else break}return n||r?{type:`supsub`,mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,i=ig[r];if(!i)return null;if(this.consume(),t&&t!==`atom`&&!i.allowedInArgument)throw new I(`Got function '`+r+`' with no arguments`+(t?` as `+t:``),n);if(this.mode===`text`&&!i.allowedInText)throw new I(`Can't use function '`+r+`' in text mode`,n);if(this.mode===`math`&&i.allowedInMath===!1)throw new I(`Can't use function '`+r+`' in math mode`,n);var{args:a,optArgs:o}=this.parseArguments(r,i);return this.callFunction(r,a,o,n,e)}callFunction(e,t,n,r,i){var a={funcName:e,parser:this,token:r,breakOnTokenText:i},o=ig[e];if(o&&o.handler)return o.handler(a,t,n);throw new I(`No function handler for `+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],i=[],a=0;a<n;a++){var o=t.argTypes&&t.argTypes[a],s=a<t.numOptionalArgs;(`primitive`in t&&t.primitive&&o==null||t.type===`sqrt`&&a===1&&i[0]==null)&&(o=`primitive`);var c=this.parseGroupOfType(`argument to '`+e+`'`,o,s);if(s)i.push(c);else if(c!=null)r.push(c);else throw new I(`Null argument, please report this as a bug`)}return{args:r,optArgs:i}}parseGroupOfType(e,t,n){switch(t){case`color`:return this.parseColorGroup(n);case`size`:return this.parseSizeGroup(n);case`url`:return this.parseUrlGroup(n);case`math`:case`text`:return this.parseArgumentGroup(n,t);case`hbox`:var r=this.parseArgumentGroup(n,`text`);return r==null?null:{type:`styling`,mode:r.mode,body:[r],style:`text`,resetFont:!0};case`raw`:var i=this.parseStringGroup(`raw`,n);return i==null?null:{type:`raw`,mode:`text`,string:i.text};case`primitive`:if(n)throw new I(`A primitive argument cannot be optional`);var a=this.parseGroup(e);if(a==null)throw new I(`Expected group as `+e,this.fetch());return a;case`original`:case null:case void 0:return this.parseArgumentGroup(n);default:throw new I(`Unknown group type as `+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===` `;)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r=``,i;(i=this.fetch()).text!==`EOF`;)r+=i.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,i=``,a;(a=this.fetch()).text!==`EOF`&&e.test(i+a.text);)r=a,i+=r.text,this.consume();if(i===``)throw new I(`Invalid `+t+`: '`+n.text+`'`,n);return n.range(r,i)}parseColorGroup(e){var t=this.parseStringGroup(`color`,e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new I(`Invalid color: '`+t.text+`'`,t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r=`#`+r),{type:`color-token`,mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),t=!e&&this.gullet.future().text!==`{`?this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,`size`):this.parseStringGroup(`size`,e),!t)return null;!e&&t.text.length===0&&(t.text=`0pt`,n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new I(`Invalid size: '`+t.text+`'`,t);var i={number:+(r[1]+r[2]),unit:r[3]};if(!Ed(i))throw new I(`Invalid unit: '`+i.unit+`'`,t);return{type:`size`,mode:this.mode,value:i,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode(`%`,13),this.gullet.lexer.setCatcode(`~`,12);var t=this.parseStringGroup(`url`,e);if(this.gullet.lexer.setCatcode(`%`,14),this.gullet.lexer.setCatcode(`~`,13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,`$1`);return{type:`url`,mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var i=this.parseExpression(!1,`EOF`);this.expect(`EOF`),this.gullet.endGroup();var a={type:`ordgroup`,mode:this.mode,loc:n.loc,body:i};return t&&this.switchMode(r),a}parseGroup(e,t){var n=this.fetch(),r=n.text,i;if(r===`{`||r===`\\begingroup`){this.consume();var a=r===`{`?`}`:`\\endgroup`;this.gullet.beginGroup();var o=this.parseExpression(!1,a),s=this.fetch();this.expect(a),this.gullet.endGroup(),i={type:`ordgroup`,mode:this.mode,loc:ph.range(n,s),body:o,semisimple:r===`\\begingroup`||void 0}}else if(i=this.parseFunction(t,e)||this.parseSymbol(),i==null&&r[0]===`\\`&&!Cg.hasOwnProperty(r)){if(this.settings.throwOnError)throw new I(`Undefined control sequence: `+r,n);i=this.formatUnsupportedCmd(r),this.consume()}return i}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n];if(r.type===`textord`){var i=r.text,a=e[n+1];if(!(!a||a.type!==`textord`)){if(i===`-`&&a.text===`-`){var o=e[n+2];n+1<t&&o&&o.type===`textord`&&o.text===`-`?(e.splice(n,3,{type:`textord`,mode:`text`,loc:ph.range(r,o),text:`---`}),t-=2):(e.splice(n,2,{type:`textord`,mode:`text`,loc:ph.range(r,a),text:`--`}),--t)}(i===`'`||i==="`")&&a.text===i&&(e.splice(n,2,{type:`textord`,mode:`text`,loc:ph.range(r,a),text:i+i}),--t)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)===`*`;if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new I(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:`verb`,mode:`text`,body:n,star:r}}Og.hasOwnProperty(t[0])&&!Qd[this.mode][t[0]]&&(this.settings.strict&&this.mode===`math`&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Accented Unicode text character "`+t[0]+`" used in math mode`,e),t=Og[t[0]]+t.slice(1));var i=dg.exec(t);i&&(t=t.substring(0,i.index),t===`i`?t=`ı`:t===`j`&&(t=`ȷ`));var a;if(Qd[this.mode][t]){this.settings.strict&&this.mode===`math`&&xf.includes(t)&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Latin-1/Unicode text character "`+t[0]+`" used in math mode`,e);var o=Qd[this.mode][t].group,s=ph.range(e);a=am(o)?{type:`atom`,mode:this.mode,family:o,loc:s,text:t}:{type:o,mode:this.mode,loc:s,text:t}}else if(t.charCodeAt(0)>=128)this.settings.strict&&(cd(t.charCodeAt(0))?this.mode===`math`&&this.settings.reportNonstrict(`unicodeTextInMathMode`,`Unicode text character "`+t[0]+`" used in math mode`,e):this.settings.reportNonstrict(`unknownSymbol`,`Unrecognized Unicode character "`+t[0]+`"`+(` (`+t.charCodeAt(0)+`)`),e)),a={type:`textord`,mode:`text`,loc:ph.range(e),text:t};else return null;if(this.consume(),i)for(var c=0;c<i[0].length;c++){var l=i[0][c];if(!Dg[l])throw new I(`Unknown accent ' `+l+`'`,e);var u=Dg[l][this.mode]||Dg[l].text;if(!u)throw new I(`Accent `+l+` unsupported in `+this.mode+` mode`,e);a={type:`accent`,mode:this.mode,loc:ph.range(e),label:u,isStretchy:!1,isShifty:!0,base:a}}return a}};kg.endOfExpression=new Set([`}`,`\\endgroup`,`\\end`,`\\right`,`&`]);var Ag=function(e,t){if(!(typeof e==`string`||e instanceof String))throw TypeError(`KaTeX can only parse string typed expression`);var n=new kg(e,t);delete n.gullet.macros.current[`\\df@tag`];var r=n.parse();if(delete n.gullet.macros.current[`\\current@color`],delete n.gullet.macros.current[`\\color`],n.gullet.macros.get(`\\df@tag`)){if(!t.displayMode)throw new I(`\\tag works only in display equations`);r=[{type:`tag`,mode:`text`,body:r,tag:n.subparse([new mh(`\\df@tag`)])}]}return r},jg=function(e,t,n){t.textContent=``;var r=Fg(e,n).toNode();t.appendChild(r)};typeof document<`u`&&document.compatMode!==`CSS1Compat`&&(typeof console<`u`&&console.warn(`Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.`),jg=function(){throw new I(`KaTeX doesn't work in quirks mode.`)});var Mg=function(e,t){return Fg(e,t).toMarkup()},Ng=function(e,t){return Ag(e,new Hu(t))},Pg=function(e,t,n){if(n.throwOnError||!(e instanceof I))throw e;var r=Y([`katex-error`],[new Rd(t)]);return r.setAttribute(`title`,e.toString()),r.setAttribute(`style`,`color:`+n.errorColor),r},Fg=function(e,t){var n=new Hu(t);try{return Yp(Ag(e,n),e,n)}catch(t){return Pg(t,e,n)}},Ig={version:`0.16.47`,render:jg,renderToString:Mg,ParseError:I,SETTINGS_SCHEMA:Ru,__parse:Ng,__renderToDomTree:Fg,__renderToHTMLTree:function(e,t){var n=new Hu(t);try{return Xp(Ag(e,n),e,n)}catch(t){return Pg(t,e,n)}},__setFontMetrics:Jd,__defineSymbol:z,__defineFunction:X,__defineMacro:$,__domTree:{Span:Pd,Anchor:Fd,SymbolNode:Rd,SvgNode:zd,PathNode:Bd,LineNode:Vd}},Lg={};function Rg(e){let t=this,n=e||Lg,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(Ou(n)),a.push(yu()),o.push(bu(n))}function zg(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Bg(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function Vg(e,t,n){let r=rl((n||{}).ignore||[]),i=Hg(t),a=-1;for(;++a<i.length;)pl(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function Hg(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Ug(e[0]),Wg(e[1])])}return t}function Ug(e){return typeof e==`string`?new RegExp(Bg(e),`g`):e}function Wg(e){return typeof e==`function`?e:function(){return e}}var Gg=`phrasing`,Kg=[`autolink`,`link`,`image`,`label`];function qg(){return{transforms:[t_],enter:{literalAutolink:Yg,literalAutolinkEmail:Xg,literalAutolinkHttp:Xg,literalAutolinkWww:Xg},exit:{literalAutolink:e_,literalAutolinkEmail:$g,literalAutolinkHttp:Zg,literalAutolinkWww:Qg}}}function Jg(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Gg,notInConstruct:Kg},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Gg,notInConstruct:Kg},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Gg,notInConstruct:Kg}]}}function Yg(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function Xg(e){this.config.enter.autolinkProtocol.call(this,e)}function Zg(e){this.config.exit.autolinkProtocol.call(this,e)}function Qg(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function $g(e){this.config.exit.autolinkEmail.call(this,e)}function e_(e){this.exit(e)}function t_(e){Vg(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,n_],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,r_]],{ignore:[`link`,`linkReference`]})}function n_(e,t,n,r,i){let a=``;if(!o_(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!i_(n)))return!1;let o=a_(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function r_(e,t,n,r){return!o_(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function i_(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function a_(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=zg(e,`(`),a=zg(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function o_(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Fa(n)||Pa(n))&&(!t||n!==47)}g_.peek=h_;function s_(){this.buffer()}function c_(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function l_(){this.buffer()}function u_(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function d_(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=wa(this.sliceSerialize(e)).toLowerCase(),n.label=t}function f_(e){this.exit(e)}function p_(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=wa(this.sliceSerialize(e)).toLowerCase(),n.label=t}function m_(e){this.exit(e)}function h_(){return`[`}function g_(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function __(){return{enter:{gfmFootnoteCallString:s_,gfmFootnoteCall:c_,gfmFootnoteDefinitionLabelString:l_,gfmFootnoteDefinition:u_},exit:{gfmFootnoteCallString:d_,gfmFootnoteCall:f_,gfmFootnoteDefinitionLabelString:p_,gfmFootnoteDefinition:m_}}}function v_(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:g_},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?b_:y_))),s(),o}}function y_(e,t,n){return t===0?e:b_(e,t,n)}function b_(e,t,n){return(n?``:`    `)+e}var x_=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];E_.peek=D_;function S_(){return{canContainEols:[`delete`],enter:{strikethrough:w_},exit:{strikethrough:T_}}}function C_(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:x_}],handlers:{delete:E_}}}function w_(e){this.enter({type:`delete`,children:[]},e)}function T_(e){this.exit(e)}function E_(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function D_(){return`~`}function O_(e){return e.length}function k_(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||O_,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=A_(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=j_(r[d]);else{let e=j_(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&!(n.alignDelimiters===!1&&i===``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function A_(e){return e==null?``:String(e)}function j_(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function M_(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),N_);return i(),o}function N_(e,t,n){return`>`+(n?``:` `)+e}function P_(e,t){return F_(e,t.inConstruct,!0)&&!F_(e,t.notInConstruct,!1)}function F_(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function I_(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&P_(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function L_(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function R_(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function z_(e,t,n,r){let i=R_(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(L_(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,B_);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(vu(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function B_(e,t,n){return(n?``:`    `)+e}function V_(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function H_(e,t,n,r){let i=V_(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function U_(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function W_(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function G_(e,t,n){let r=Wa(e),i=Wa(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}K_.peek=q_;function K_(e,t,n,r){let i=U_(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=G_(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=W_(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=G_(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+W_(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function q_(e,t,n){return n.options.emphasis||`*`}function J_(e,t){let n=!1;return hl(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&da(e)&&(t.options.setext||n))}function Y_(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(J_(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=W_(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}X_.peek=Z_;function X_(e){return e.value||``}function Z_(){return`<`}Q_.peek=$_;function Q_(e,t,n,r){let i=V_(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function $_(){return`!`}ev.peek=tv;function ev(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function tv(){return`!`}nv.peek=rv;function nv(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function rv(){return"`"}function iv(e,t){let n=da(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}av.peek=ov;function av(e,t,n,r){let i=V_(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(iv(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function ov(e,t,n){return iv(e,n)?`<`:`[`}sv.peek=cv;function sv(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function cv(){return`[`}function lv(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function uv(e){let t=lv(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function dv(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function fv(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function pv(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?dv(n):lv(n),s=e.ordered?o===`.`?`)`:`.`:uv(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),fv(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function mv(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function hv(e,t,n,r){let i=mv(n),a=n.bulletCurrent||lv(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function gv(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var _v=rl([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function vv(e,t,n,r){return(e.children.some(function(e){return _v(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function yv(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}bv.peek=xv;function bv(e,t,n,r){let i=yv(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=G_(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=W_(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=G_(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+W_(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function xv(e,t,n){return n.options.strong||`*`}function Sv(e,t,n,r){return n.safe(e.value,r)}function Cv(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function wv(e,t,n){let r=(fv(n)+(n.options.ruleSpaces?` `:``)).repeat(Cv(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Tv={blockquote:M_,break:I_,code:z_,definition:H_,emphasis:K_,hardBreak:I_,heading:Y_,html:X_,image:Q_,imageReference:ev,inlineCode:nv,link:av,linkReference:sv,list:pv,listItem:hv,paragraph:gv,root:vv,strong:bv,text:Sv,thematicBreak:wv};function Ev(){return{enter:{table:Dv,tableData:jv,tableHeader:jv,tableRow:kv},exit:{codeText:Mv,table:Ov,tableData:Av,tableHeader:Av,tableRow:Av}}}function Dv(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function Ov(e){this.exit(e),this.data.inTable=void 0}function kv(e){this.enter({type:`tableRow`,children:[]},e)}function Av(e){this.exit(e)}function jv(e){this.enter({type:`tableCell`,children:[]},e)}function Mv(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Nv));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Nv(e,t){return t===`|`?t:e}function Pv(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return k_(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Tv.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function Fv(){return{exit:{taskListCheckValueChecked:Lv,taskListCheckValueUnchecked:Lv,paragraph:Rv}}}function Iv(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:zv}}}function Lv(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function Rv(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function zv(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Tv.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function Bv(){return[qg(),__(),S_(),Ev(),Fv()]}function Vv(e){return{extensions:[Jg(),v_(e),C_(),Pv(e),Iv()]}}var Hv={tokenize:ny,partial:!0},Uv={tokenize:ry,partial:!0},Wv={tokenize:iy,partial:!0},Gv={tokenize:ay,partial:!0},Kv={tokenize:oy,partial:!0},qv={name:`wwwAutolink`,tokenize:ey,previous:sy},Jv={name:`protocolAutolink`,tokenize:ty,previous:cy},Yv={name:`emailAutolink`,tokenize:$v,previous:ly},Xv={};function Zv(){return{text:Xv}}for(var Qv=48;Qv<123;)Xv[Qv]=Yv,Qv++,Qv===58?Qv=65:Qv===91&&(Qv=97);Xv[43]=Yv,Xv[45]=Yv,Xv[46]=Yv,Xv[95]=Yv,Xv[72]=[Yv,Jv],Xv[104]=[Yv,Jv],Xv[87]=[Yv,qv],Xv[119]=[Yv,qv];function $v(e,t,n){let r=this,i,a;return o;function o(t){return!uy(t)||!ly.call(r,r.previous)||dy(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return uy(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(Kv,u,l)(t):t===45||t===95||Ea(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&Ta(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function ey(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!sy.call(r,r.previous)||dy(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(Hv,e.attempt(Uv,e.attempt(Wv,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function ty(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&cy.call(r,r.previous)&&!dy(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(Ta(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||Oa(t)||Ma(t)||Fa(t)||Pa(t)?n(t):e.attempt(Uv,e.attempt(Wv,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function ny(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function ry(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(Gv,c,s)(t):t===null||Ma(t)||Fa(t)||t!==45&&Pa(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function iy(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Gv,t,a)(o):o===null||Ma(o)||Fa(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function ay(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||Ma(o)||Fa(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||Ma(e)||Fa(e)?t(e):r(e)}function a(e){return Ta(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):Ta(t)?(e.consume(t),o):n(t)}}function oy(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return Ea(e)?n(e):t(e)}}function sy(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Ma(e)}function cy(e){return!Ta(e)}function ly(e){return!(e===47||uy(e))}function uy(e){return e===43||e===45||e===46||e===95||Ea(e)}function dy(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var fy={tokenize:by,partial:!0};function py(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:_y,continuation:{tokenize:vy},exit:yy}},text:{91:{name:`gfmFootnoteCall`,tokenize:gy},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:my,resolveTo:hy}}}}function my(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=wa(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function hy(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function gy(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||Ma(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(wa(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return Ma(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function _y(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||Ma(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=wa(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return Ma(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),P(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function vy(e,t,n){return e.check(Qa,t,e.attempt(fy,t,n))}function yy(e){e.exit(`gfmFootnoteDefinition`)}function by(e,t,n){let r=this;return P(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function xy(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&_a(o,o.length,0,Ga(s,e.slice(r+1,n),t)),_a(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),_a(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=Wa(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=Wa(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var Sy=class{constructor(){this.map=[]}add(e,t,n){Cy(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function Cy(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function wy(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function Ty(){return{flow:{null:{name:`table`,tokenize:Ey,resolveAll:Dy}}}}function Ey(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):N(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):Na(t)?P(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||Ma(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,Na(t)?P(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return Na(t)?P(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||N(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return Na(t)?P(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||N(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||N(n)?(e.exit(`tableRow`),t(n)):Na(n)?P(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||Ma(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function Dy(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new Sy;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(ky(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=Oy(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=Oy(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=Oy(f,t,o,i,n,d)):(o[0]=o[1],d=Oy(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&ky(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=wy(t.events,n))}return e}function Oy(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},Ay(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=Ay(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=Ay(t.events,n[2]),a=Ay(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},Ay(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function ky(e,t,n,r,i){let a=[],o=Ay(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function Ay(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var jy={name:`tasklistCheck`,tokenize:Ny};function My(){return{text:{91:jy}}}function Ny(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return Ma(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return N(r)?t(r):Na(r)?e.check({tokenize:Py},t,n)(r):n(r)}}function Py(e,t,n){return P(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function Fy(e){return ba([Zv(),py(),xy(e),Ty(),My()])}var Iy={};function Ly(e){let t=this,n=e||Iy,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(Fy(n)),a.push(Bv()),o.push(Vv(n))}var Ry=/[#.]/g;function zy(e,t){let n=e||``,r={},i=0,a,o;for(;i<n.length;){Ry.lastIndex=i;let e=Ry.exec(n),t=n.slice(i,e?e.index:n.length);t&&(a?a===`#`?r.id=t:Array.isArray(r.className)?r.className.push(t):r.className=[t]:o=t,i+=t.length),e&&(a=e[0],i++)}return{type:`element`,tagName:o||t||`div`,properties:r,children:[]}}function By(e,t,n){let r=n?Ky(n):void 0;function i(n,i,...a){let o;if(n==null){o={type:`root`,children:[]};let e=i;a.unshift(e)}else{o=zy(n,t);let s=o.tagName.toLowerCase(),c=r?r.get(s):void 0;if(o.tagName=c||s,Vy(i))a.unshift(i);else for(let[t,n]of Object.entries(i))Hy(e,o.properties,t,n)}for(let e of a)Uy(o.children,e);return o.type===`element`&&o.tagName===`template`&&(o.content={type:`root`,children:o.children},o.children=[]),o}return i}function Vy(e){if(typeof e!=`object`||!e||Array.isArray(e))return!0;if(typeof e.type!=`string`)return!1;let t=e,n=Object.keys(e);for(let e of n){let n=t[e];if(n&&typeof n==`object`){if(!Array.isArray(n))return!0;let e=n;for(let t of e)if(typeof t!=`number`&&typeof t!=`string`)return!0}}return!!(`children`in e&&Array.isArray(e.children))}function Hy(e,t,n,r){let i=mi(e,n),a;if(r!=null){if(typeof r==`number`){if(Number.isNaN(r))return;a=r}else a=typeof r==`boolean`?r:typeof r==`string`?i.spaceSeparated?yi(r):i.commaSeparated?jr(r):i.commaOrSpaceSeparated?yi(jr(r).join(` `)):Wy(i,i.property,r):Array.isArray(r)?[...r]:i.property===`style`?Gy(r):String(r);if(Array.isArray(a)){let e=[];for(let t of a)e.push(Wy(i,i.property,t));a=e}i.property===`className`&&Array.isArray(t.className)&&(a=t.className.concat(a)),t[i.property]=a}}function Uy(e,t){if(t!=null)if(typeof t==`number`||typeof t==`string`)e.push({type:`text`,value:String(t)});else if(Array.isArray(t))for(let n of t)Uy(e,n);else if(typeof t==`object`&&`type`in t)t.type===`root`?Uy(e,t.children):e.push(t);else throw Error("Expected node, nodes, or string, got `"+t+"`")}function Wy(e,t,n){if(typeof n==`string`){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===``||Hr(n)===Hr(t)))return!0}return n}function Gy(e){let t=[];for(let[n,r]of Object.entries(e))t.push([n,r].join(`: `));return t.join(`; `)}function Ky(e){let t=new Map;for(let n of e)t.set(n.toLowerCase(),n);return t}var qy=`altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath`.split(`.`),Jy=By(_i,`div`),Yy=By(vi,`g`,qy),Xy={html:`http://www.w3.org/1999/xhtml`,mathml:`http://www.w3.org/1998/Math/MathML`,svg:`http://www.w3.org/2000/svg`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function Zy(e,t){return Qy(e,t||{})||{type:`root`,children:[]}}function Qy(e,t){let n=$y(e,t);return n&&t.afterTransform&&t.afterTransform(e,n),n}function $y(e,t){switch(e.nodeType){case 1:return ib(e,t);case 3:return nb(e);case 8:return rb(e);case 9:return eb(e,t);case 10:return tb();case 11:return eb(e,t);default:return}}function eb(e,t){return{type:`root`,children:ab(e,t)}}function tb(){return{type:`doctype`}}function nb(e){return{type:`text`,value:e.nodeValue||``}}function rb(e){return{type:`comment`,value:e.nodeValue||``}}function ib(e,t){let n=e.namespaceURI,r=n===Xy.svg?Yy:Jy,i=n===Xy.html?e.tagName.toLowerCase():e.tagName,a=n===Xy.html&&i===`template`?e.content:e,o=e.getAttributeNames(),s={},c=-1;for(;++c<o.length;)s[o[c]]=e.getAttribute(o[c])||``;return r(i,s,ab(a,t))}function ab(e,t){let n=e.childNodes,r=[],i=-1;for(;++i<n.length;){let e=Qy(n[i],t);e!==void 0&&r.push(e)}return r}var ob=new DOMParser;function sb(e,t){return Zy(t?.fragment?cb(e):ob.parseFromString(e,`text/html`))}function cb(e){let t=document.createElement(`template`);return t.innerHTML=e,t.content}var lb=(function(e,t,n){let r=rl(n);if(!e||!e.type||!e.children)throw Error(`Expected parent node`);if(typeof t==`number`){if(t<0||t===1/0)throw Error(`Expected positive finite number as index`)}else if(t=e.children.indexOf(t),t<0)throw Error(`Expected child node or index`);for(;++t<e.children.length;)if(r(e.children[t],t,e))return e.children[t]}),ub=(function(e){if(e==null)return mb;if(typeof e==`string`)return fb(e);if(typeof e==`object`)return db(e);if(typeof e==`function`)return pb(e);throw Error("Expected function, string, or array as `test`")});function db(e){let t=[],n=-1;for(;++n<e.length;)t[n]=ub(e[n]);return pb(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function fb(e){return pb(t);function t(t){return t.tagName===e}}function pb(e){return t;function t(t,n,r){return!!(hb(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function mb(e){return!!(e&&typeof e==`object`&&`type`in e&&e.type===`element`&&`tagName`in e&&typeof e.tagName==`string`)}function hb(e){return typeof e==`object`&&!!e&&`type`in e&&`tagName`in e}var gb=/\n/g,_b=/[\t ]+/g,vb=ub(`br`),yb=ub(Mb),bb=ub(`p`),xb=ub(`tr`),Sb=ub([`datalist`,`head`,`noembed`,`noframes`,`noscript`,`rp`,`script`,`style`,`template`,`title`,jb,Nb]),Cb=ub(`address.article.aside.blockquote.body.caption.center.dd.dialog.dir.dl.dt.div.figure.figcaption.footer.form,.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.legend.li.listing.main.menu.nav.ol.p.plaintext.pre.section.ul.xmp`.split(`.`));function wb(e,t){let n=t||{},r=`children`in e?e.children:[],i=Cb(e),a=Ab(e,{whitespace:n.whitespace||`normal`,breakBefore:!1,breakAfter:!1}),o=[];(e.type===`text`||e.type===`comment`)&&o.push(...Db(e,{whitespace:a,breakBefore:!0,breakAfter:!0}));let s=-1;for(;++s<r.length;)o.push(...Tb(r[s],e,{whitespace:a,breakBefore:s?void 0:i,breakAfter:s<r.length-1?vb(r[s+1]):i}));let c=[],l;for(s=-1;++s<o.length;){let e=o[s];typeof e==`number`?l!==void 0&&e>l&&(l=e):e&&(l!==void 0&&l>-1&&c.push(`
`.repeat(l)||` `),l=-1,c.push(e))}return c.join(``)}function Tb(e,t,n){return e.type===`element`?Eb(e,t,n):e.type===`text`?n.whitespace===`normal`?Db(e,n):Ob(e):[]}function Eb(e,t,n){let r=Ab(e,n),i=e.children||[],a=-1,o=[];if(Sb(e))return o;let s,c;for(vb(e)||xb(e)&&lb(t,e,xb)?c=`
`:bb(e)?(s=2,c=2):Cb(e)&&(s=1,c=1);++a<i.length;)o=o.concat(Tb(i[a],e,{whitespace:r,breakBefore:a?void 0:s,breakAfter:a<i.length-1?vb(i[a+1]):c}));return yb(e)&&lb(t,e,yb)&&o.push(`	`),s&&o.unshift(s),c&&o.push(c),o}function Db(e,t){let n=String(e.value),r=[],i=[],a=0;for(;a<=n.length;){gb.lastIndex=a;let e=gb.exec(n),i=e&&`index`in e?e.index:n.length;r.push(kb(n.slice(a,i).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,``),a===0?t.breakBefore:!0,i===n.length?t.breakAfter:!0)),a=i+1}let o=-1,s;for(;++o<r.length;)r[o].charCodeAt(r[o].length-1)===8203||o<r.length-1&&r[o+1].charCodeAt(0)===8203?(i.push(r[o]),s=void 0):r[o]?(typeof s==`number`&&i.push(s),i.push(r[o]),s=0):(o===0||o===r.length-1)&&i.push(0);return i}function Ob(e){return[String(e.value)]}function kb(e,t,n){let r=[],i=0,a;for(;i<e.length;){_b.lastIndex=i;let n=_b.exec(e);a=n?n.index:e.length,!i&&!a&&n&&!t&&r.push(``),i!==a&&r.push(e.slice(i,a)),i=n?a+n[0].length:a}return i!==a&&!n&&r.push(``),r.join(` `)}function Ab(e,t){if(e.type===`element`){let n=e.properties||{};switch(e.tagName){case`listing`:case`plaintext`:case`xmp`:return`pre`;case`nobr`:return`nowrap`;case`pre`:return n.wrap?`pre-wrap`:`pre`;case`td`:case`th`:return n.noWrap?`nowrap`:t.whitespace;case`textarea`:return`pre-wrap`;default:}}return t.whitespace}function jb(e){return!!(e.properties||{}).hidden}function Mb(e){return e.tagName===`td`||e.tagName===`th`}function Nb(e){return e.tagName===`dialog`&&!(e.properties||{}).open}var Pb={},Fb=[];function Ib(e){let t=e||Pb;return function(e,n){pl(e,`element`,function(e,r){let i=Array.isArray(e.properties.className)?e.properties.className:Fb,a=i.includes(`language-math`),o=i.includes(`math-display`),s=i.includes(`math-inline`),c=o;if(!a&&!o&&!s)return;let l=r[r.length-1],u=e;if(e.tagName===`code`&&a&&l&&l.type===`element`&&l.tagName===`pre`&&(u=l,l=r[r.length-2],c=!0),!l)return;let d=wb(u,{whitespace:`pre`}),f;try{f=Ig.renderToString(d,{...t,displayMode:c,throwOnError:!0})}catch(i){let a=i,o=a.name.toLowerCase();n.message(`Could not render math with KaTeX`,{ancestors:[...r,e],cause:a,place:e.position,ruleId:o,source:`rehype-katex`});try{f=Ig.renderToString(d,{...t,displayMode:c,strict:`ignore`,throwOnError:!1})}catch{f=[{type:`element`,tagName:`span`,properties:{className:[`katex-error`],style:`color:`+(t.errorColor||`#cc0000`),title:String(i)},children:[{type:`text`,value:d}]}]}}typeof f==`string`&&(f=sb(f,{fragment:!0}).children);let p=l.children.indexOf(u);return l.children.splice(p,1,...f),fl})}}var Lb={markdown:`_markdown_1y0c0_1`};function Rb({content:e}){return(0,A.jsx)(`div`,{className:Lb.markdown,children:(0,A.jsx)(pu,{remarkPlugins:[Rg,Ly],rehypePlugins:[Ib],children:e})})}var zb={container:`_container_1by5x_1`,notFound:`_notFound_1by5x_5`,backLink:`_backLink_1by5x_10`,breadcrumb:`_breadcrumb_1by5x_15`,breadcrumbLink:`_breadcrumbLink_1by5x_25`,breadcrumbSep:`_breadcrumbSep_1by5x_34`,breadcrumbCurrent:`_breadcrumbCurrent_1by5x_38`,header:`_header_1by5x_42`,title:`_title_1by5x_50`,completeToggle:`_completeToggle_1by5x_57`,checkbox:`_checkbox_1by5x_76`,tags:`_tags_1by5x_82`,tag:`_tag_1by5x_82`,content:`_content_1by5x_98`,footer:`_footer_1by5x_106`,backButton:`_backButton_1by5x_110`,headerActions:`_headerActions_1by5x_127`,mapLink:`_mapLink_1by5x_133`,relatedSection:`_relatedSection_1by5x_149`,relatedTitle:`_relatedTitle_1by5x_153`,relatedGrid:`_relatedGrid_1by5x_160`,relatedCard:`_relatedCard_1by5x_166`,relatedSubject:`_relatedSubject_1by5x_182`,relatedName:`_relatedName_1by5x_189`,relatedChapter:`_relatedChapter_1by5x_195`,navRow:`_navRow_1by5x_201`,navPrev:`_navPrev_1by5x_208`,navNext:`_navNext_1by5x_209`};function Bb(){let{subject:e,chapterId:t,kpId:n}=vt(),r=xr(n??``),i=mr(t??``),{state:a,dispatch:o}=dr();if(!r)return(0,A.jsxs)(`div`,{className:zb.container,children:[(0,A.jsx)(`p`,{className:zb.notFound,children:`知识点不存在`}),(0,A.jsx)(Rn,{to:`/knowledge/${e}/${t}`,className:zb.backLink,children:`返回章节`})]});let s=a.progress.completedPoints.includes(r.id),c=i?.chapter,l=i?.subject,u=r.relatedPoints.map(e=>xr(e)).filter(Boolean),d=br(t??``),f=d.findIndex(e=>e.id===r.id),p=f>0?d[f-1]:null,m=f<d.length-1?d[f+1]:null,h=e=>e.split(`-`)[0];return(0,A.jsxs)(`div`,{className:zb.container,children:[(0,A.jsxs)(`div`,{className:zb.breadcrumb,children:[(0,A.jsx)(Rn,{to:`/`,className:zb.breadcrumbLink,children:`总览`}),(0,A.jsx)(`span`,{className:zb.breadcrumbSep,children:`/`}),(0,A.jsx)(Rn,{to:`/knowledge/${e}`,className:zb.breadcrumbLink,children:l?.fullName}),(0,A.jsx)(`span`,{className:zb.breadcrumbSep,children:`/`}),(0,A.jsxs)(Rn,{to:`/knowledge/${e}/${t}`,className:zb.breadcrumbLink,children:[`第`,c?.chapterNum,`章 `,c?.title]}),(0,A.jsx)(`span`,{className:zb.breadcrumbSep,children:`/`}),(0,A.jsx)(`span`,{className:zb.breadcrumbCurrent,children:r.title})]}),(0,A.jsxs)(`div`,{className:zb.header,children:[(0,A.jsx)(`h1`,{className:zb.title,children:r.title}),(0,A.jsxs)(`div`,{className:zb.headerActions,children:[(0,A.jsx)(Rn,{to:`/knowledge/${e}/${t}/map`,className:zb.mapLink,children:`查看导图`}),(0,A.jsxs)(`label`,{className:zb.completeToggle,children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:s,onChange:()=>o({type:`COMPLETE_POINT`,pointId:r.id}),className:zb.checkbox}),s?`已掌握`:`标记为已掌握`]})]})]}),(0,A.jsx)(`div`,{className:zb.tags,children:r.keyConcepts.map(e=>(0,A.jsx)(`span`,{className:zb.tag,children:e},e))}),(0,A.jsx)(`div`,{className:zb.content,children:(0,A.jsx)(Rb,{content:r.content})}),u.length>0&&(0,A.jsxs)(`div`,{className:zb.relatedSection,children:[(0,A.jsx)(`h3`,{className:zb.relatedTitle,children:`相关知识点`}),(0,A.jsx)(`div`,{className:zb.relatedGrid,children:u.map(e=>{let t=h(e.id),n=mr(e.chapterId);return(0,A.jsxs)(Rn,{to:`/knowledge/${t}/${e.chapterId}/${e.id}`,className:zb.relatedCard,children:[(0,A.jsx)(`span`,{className:zb.relatedSubject,children:t.toUpperCase()}),(0,A.jsx)(`span`,{className:zb.relatedName,children:e.title}),n&&(0,A.jsxs)(`span`,{className:zb.relatedChapter,children:[`第`,n.chapter.chapterNum,`章`]})]},e.id)})})]}),(0,A.jsxs)(`div`,{className:zb.navRow,children:[p?(0,A.jsxs)(Rn,{to:`/knowledge/${e}/${t}/${p.id}`,className:zb.navPrev,children:[`← `,p.title]}):(0,A.jsx)(`span`,{}),m?(0,A.jsxs)(Rn,{to:`/knowledge/${e}/${t}/${m.id}`,className:zb.navNext,children:[m.title,` →`]}):(0,A.jsx)(`span`,{})]}),(0,A.jsx)(`div`,{className:zb.footer,children:(0,A.jsx)(Rn,{to:`/knowledge/${e}/${t}`,className:zb.backButton,children:`← 返回章节`})})]})}var Vb={container:`_container_z1x2r_1`,title:`_title_z1x2r_5`,section:`_section_z1x2r_12`,sectionTitle:`_sectionTitle_z1x2r_16`,chipGroup:`_chipGroup_z1x2r_23`,chip:`_chip_z1x2r_23`,chipActive:`_chipActive_z1x2r_30`,chipDot:`_chipDot_z1x2r_60`,numberInput:`_numberInput_z1x2r_66`,startButton:`_startButton_z1x2r_82`},Hb=[{value:`single-choice`,label:`单选题`},{value:`multi-choice`,label:`多选题`},{value:`comprehensive`,label:`综合题`}],Ub=[{value:1,label:`简单`},{value:2,label:`中等`},{value:3,label:`困难`}];function Wb(){let e=mt(),[t,n]=(0,v.useState)({subjects:[],chapterIds:[],types:[`single-choice`],difficulty:[1,2],count:10,timed:!1,timeLimit:30}),r=e=>{n(t=>({...t,subjects:t.subjects.includes(e)?t.subjects.filter(t=>t!==e):[...t.subjects,e]}))},i=e=>{n(t=>({...t,types:t.types.includes(e)?t.types.filter(t=>t!==e):[...t.types,e]}))},a=e=>{n(t=>({...t,difficulty:t.difficulty.includes(e)?t.difficulty.filter(t=>t!==e):[...t.difficulty,e]}))};return(0,A.jsxs)(`div`,{className:Vb.container,children:[(0,A.jsx)(`h1`,{className:Vb.title,children:`刷题配置`}),(0,A.jsxs)(`div`,{className:Vb.section,children:[(0,A.jsx)(`h3`,{className:Vb.sectionTitle,children:`选择科目`}),(0,A.jsx)(`div`,{className:Vb.chipGroup,children:fr.map(e=>(0,A.jsxs)(`button`,{className:t.subjects.includes(e.id)?Vb.chipActive:Vb.chip,onClick:()=>r(e.id),children:[(0,A.jsx)(`span`,{className:Vb.chipDot,style:{background:e.color}}),e.name]},e.id))})]}),(0,A.jsxs)(`div`,{className:Vb.section,children:[(0,A.jsx)(`h3`,{className:Vb.sectionTitle,children:`题目类型`}),(0,A.jsx)(`div`,{className:Vb.chipGroup,children:Hb.map(e=>(0,A.jsx)(`button`,{className:t.types.includes(e.value)?Vb.chipActive:Vb.chip,onClick:()=>i(e.value),children:e.label},e.value))})]}),(0,A.jsxs)(`div`,{className:Vb.section,children:[(0,A.jsx)(`h3`,{className:Vb.sectionTitle,children:`难度`}),(0,A.jsx)(`div`,{className:Vb.chipGroup,children:Ub.map(e=>(0,A.jsx)(`button`,{className:t.difficulty.includes(e.value)?Vb.chipActive:Vb.chip,onClick:()=>a(e.value),children:e.label},e.value))})]}),(0,A.jsxs)(`div`,{className:Vb.section,children:[(0,A.jsx)(`h3`,{className:Vb.sectionTitle,children:`题目数量`}),(0,A.jsx)(`input`,{type:`number`,min:1,max:50,value:t.count,onChange:e=>n(t=>({...t,count:Number(e.target.value)||10})),className:Vb.numberInput})]}),(0,A.jsx)(`button`,{className:Vb.startButton,onClick:()=>{let n=new URLSearchParams;t.subjects.length>0&&n.set(`subjects`,t.subjects.join(`,`)),t.types.length>0&&n.set(`types`,t.types.join(`,`)),t.difficulty.length>0&&n.set(`difficulty`,t.difficulty.join(`,`)),n.set(`count`,String(t.count)),n.set(`timed`,String(t.timed)),t.timed&&t.timeLimit&&n.set(`timeLimit`,String(t.timeLimit)),e(`/quiz/session?${n.toString()}`)},children:`开始答题`})]})}function Gb(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Kb(e,t){let n=e.filter(e=>!(t.subjects.length>0&&!t.subjects.includes(e.subject)||t.chapterIds.length>0&&!t.chapterIds.includes(e.chapterId)||t.types.length>0&&!t.types.includes(e.type)||t.difficulty.length>0&&!t.difficulty.includes(e.difficulty)));return n=Gb([...n]),t.count>0&&t.count<n.length&&(n=n.slice(0,t.count)),n}function qb(){return`quiz-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}var Jb=[{id:`ds-q-1-001`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:1,stem:`以下关于数据结构的说法中，正确的是（ ）。`,options:[`数据的存储结构独立于其逻辑结构`,`数据的逻辑结构唯一决定了其存储结构`,`同一个逻辑结构可以采用不同的存储结构实现`,`数据的逻辑结构依赖于其在计算机中的存储方式`],answer:`C`,explanation:`**C 正确。** 逻辑结构独立于存储结构。同一个逻辑结构（如线性表）既可以用顺序表实现，也可以用链表实现。

A 错误：存储结构是逻辑结构在计算机中的实现，不能独立于逻辑结构。
B 错误：逻辑结构不唯一决定存储结构，同一个逻辑结构可以有多种存储实现。
D 错误：逻辑结构是数据元素之间的逻辑关系，与计算机存储无关。`,tags:[`数据结构三要素`,`逻辑结构`,`存储结构`],source:`王道-第1章课后习题`},{id:`ds-q-1-002`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:1,stem:`组成数据的基本单位是（ ）。`,options:[`数据项`,`数据元素`,`数据对象`,`数据结构`],answer:`B`,explanation:`**B 正确。** 数据元素是数据的基本单位，通常作为一个整体进行考虑和处理。

A 错误：数据项是构成数据元素的不可分割的最小单位，是数据的最小单位而非基本单位。
C 错误：数据对象是具有相同性质的数据元素的集合。
D 错误：数据结构是相互之间存在特定关系的数据元素的集合。

关键辨析：数据元素 = 基本单位，数据项 = 最小单位。`,tags:[`数据元素`,`数据项`,`基本概念`],source:`408-2009-1 改编`},{id:`ds-q-1-003`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:2,stem:`【2011年408真题】设 $n$ 是描述问题规模的非负整数，下面程序片段的时间复杂度是（ ）。

\`\`\`c
x = 2;
while (x < n/2)
    x = 2 * x;
\`\`\``,options:[`$O(\\log_2 n)$`,`$O(n)$`,`$O(n\\log_2 n)$`,`$O(n^2)$`],answer:`A`,explanation:`**A 正确。** 设循环执行 $t$ 次，每执行一次 $x$ 翻倍。

初始 $x = 2$，第 $t$ 次执行后 $x = 2 \\times 2^t = 2^{t+1}$。

循环条件：$2^{t+1} < n/2$，即 $2^{t+2} < n$，解得 $t < \\log_2 n - 2$。

故 $T(n) = O(\\log n)$。

**技巧**：循环变量每次翻倍（指数增长）→ 时间复杂度为对数阶。`,tags:[`时间复杂度`,`对数阶`,`循环分析`],source:`408-2011-1`},{id:`ds-q-1-004`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:2,stem:`【2012年408真题】求整数 $n$（$n \\ge 0$）阶乘的算法如下，其时间复杂度是（ ）。

\`\`\`c
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
\`\`\``,options:[`$O(\\log_2 n)$`,`$O(n)$`,`$O(n\\log_2 n)$`,`$O(n^2)$`],answer:`B`,explanation:`**B 正确。** 设 $T(n)$ 为求 $n!$ 的时间复杂度。

递推式：$T(n) = T(n-1) + O(1)$，其中 $O(1)$ 为一次乘法和一次减法。

展开：$T(n) = T(n-1) + 1 = T(n-2) + 2 = \\cdots = T(1) + (n-1)$

由于 $T(1) = O(1)$，故 $T(n) = O(n)$。

**技巧**：递归深度为 $n$，每层操作 $O(1)$ → 总复杂度 $O(n)$。`,tags:[`时间复杂度`,`递归分析`,`递推式`],source:`408-2012-1`},{id:`ds-q-1-005`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:1,stem:`算法必须具备输入、输出和（ ）等五个特性。`,options:[`可行性、可移植性和可扩充性`,`可行性、确定性和有穷性`,`确定性、有穷性和稳定性`,`易读性、稳定性和安全性`],answer:`B`,explanation:`**B 正确。** 算法的五大特性：**有穷性**、**确定性**、**可行性**、输入、输出。

A/C/D 中的可移植性、可扩充性、稳定性、易读性、安全性均不属于算法必须满足的五大特性。

好算法的目标包括：正确性、可读性、健壮性、高效率与低存储量，但不能与算法的五大特性混淆。`,tags:[`算法特性`,`五大特性`,`有穷性`,`确定性`,`可行性`],source:`王道-第1章课后习题`},{id:`ds-q-1-006`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:2,stem:`以下算法的时间复杂度是（ ）。

\`\`\`c
void func(int n) {
    int i, j;
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            printf("%d", i + j);
}
\`\`\``,options:[`$O(n)$`,`$O(n\\log n)$`,`$O(n^2)$`,`$O(n^3)$`],answer:`C`,explanation:`**C 正确。** 外层循环执行 $n$ 次，内层循环每次也执行 $n$ 次。

总执行次数 $= n \\times n = n^2$。

乘法规则：$T(n) = O(n) \\times O(n) = O(n^2)$。`,tags:[`时间复杂度`,`嵌套循环`,`乘法规则`],source:`王道-第1章例题`},{id:`ds-q-1-007`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:2,stem:`以下程序段的时间复杂度是（ ）。

\`\`\`c
int i = 1;
while (i <= n)
    i = i * 3;
\`\`\``,options:[`$O(n)$`,`$O(\\log_3 n)$`,`$O(n^3)$`,`$O(3^n)$`],answer:`B`,explanation:`**B 正确。** 设执行 $t$ 次后循环结束，则有 $3^t > n$。

取对数：$t > \\log_3 n$，故时间复杂度为 $O(\\log_3 n)$。

由于换底公式 $\\log_3 n = \\frac{\\log_2 n}{\\log_2 3}$，常数因子可省略，也可记为 $O(\\log n)$。

**技巧**：循环变量指数增长 → 复杂度为对数阶，底数不重要。`,tags:[`时间复杂度`,`对数阶`,`指数增长`],source:`王道-第1章例题改编`},{id:`ds-q-1-008`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:3,stem:`下列程序段的时间复杂度是（ ）。

\`\`\`c
int s = 0;
for (int i = 1; i <= n; i++)
    for (int j = 1; j <= i; j++)
        s++;
\`\`\``,options:[`$O(n)$`,`$O(n\\log n)$`,`$O(n^2)$`,`$O(n^3)$`],answer:`C`,explanation:`**C 正确。** 这是内层循环依赖于外层循环变量的情况，需要累加求和。

总执行次数：$\\sum_{i=1}^{n}\\sum_{j=1}^{i} 1 = \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$

$\\frac{n(n+1)}{2} = \\frac{1}{2}n^2 + \\frac{1}{2}n$，最高阶为 $n^2$，故 $T(n) = O(n^2)$。

**注意**：当内外循环相关时，不能直接相乘，需要用累加公式计算总次数。`,tags:[`时间复杂度`,`嵌套循环`,`累加法`,`内外相关`],source:`王道-第1章例题`},{id:`ds-q-1-009`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:2,stem:`一个算法应该是（ ）。`,options:[`程序`,`问题求解步骤的描述`,`要满足五个基本特性`,`B 和 C`],answer:`D`,explanation:`**D 正确。** 算法是对特定问题求解步骤的描述，是指令的有限序列，且必须满足有穷性、确定性、可行性、输入、输出五个基本特性。

A 错误：程序 ≠ 算法。程序可以不满足有穷性（如操作系统是一个程序，但不是算法）。
B 正确但不够完整。
C 正确但不够完整。

严格来说，算法 = 问题求解步骤的描述 + 满足五个基本特性。`,tags:[`算法定义`,`算法特性`,`程序与算法`],source:`408-2012-1 改编`},{id:`ds-q-1-010`,subject:`ds`,chapterId:`ds-1`,type:`single-choice`,difficulty:2,stem:`以下关于算法复杂度的说法中，错误的是（ ）。`,options:[`算法的时间复杂度是指算法运行时间的渐近增长率`,`算法原地工作的含义是指不需要任何额外的辅助空间`,`同一个算法，实现语言的级别越高，执行效率不一定越高`,`空间复杂度通常只计入辅助空间，不计入输入数据占用的空间`],answer:`B`,explanation:`**B 错误**（本题选错误项）。「算法原地工作」是指算法所需的辅助空间为常量（即 $O(1)$），而不是不需要任何额外的辅助空间。

A 正确：时间复杂度是渐近增长率，用大 O 记号表示。
C 正确：高级语言需要编译/解释，执行效率不一定更高（通常汇编/C 的执行效率更高）。
D 正确：空间复杂度只计入额外辅助空间（工作空间），不计入存储输入数据本身所需的空间。`,tags:[`时间复杂度`,`空间复杂度`,`原地工作`,`辨析`],source:`王道-第1章课后习题改编`}];function Yb(e){return Jb.find(t=>t.id===e)}var Xb={container:`_container_b0x6v_1`,progress:`_progress_b0x6v_5`,progressBar:`_progressBar_b0x6v_14`,progressFill:`_progressFill_b0x6v_22`,questionCard:`_questionCard_b0x6v_29`,questionMeta:`_questionMeta_b0x6v_36`,questionTag:`_questionTag_b0x6v_42`,stem:`_stem_b0x6v_50`,options:`_options_b0x6v_57`,option:`_option_b0x6v_57`,optionSelected:`_optionSelected_b0x6v_64`,optionCorrect:`_optionCorrect_b0x6v_65`,optionWrong:`_optionWrong_b0x6v_66`,optionLabel:`_optionLabel_b0x6v_107`,optionText:`_optionText_b0x6v_121`,explanation:`_explanation_b0x6v_134`,explanationTitle:`_explanationTitle_b0x6v_145`,nextButton:`_nextButton_b0x6v_150`,finishedCard:`_finishedCard_b0x6v_168`,finishedActions:`_finishedActions_b0x6v_187`,btnPrimary:`_btnPrimary_b0x6v_193`,btnSecondary:`_btnSecondary_b0x6v_194`,emptyHint:`_emptyHint_b0x6v_215`};function Zb(){let e=mt(),[t]=Kn(),{dispatch:n}=dr(),[r,i]=(0,v.useState)([]),[a,o]=(0,v.useState)(0),[s,c]=(0,v.useState)({}),[l]=(0,v.useState)(qb),[u]=(0,v.useState)(Date.now()),[d,f]=(0,v.useState)(!1),[p,m]=(0,v.useState)(!1),[h,g]=(0,v.useState)(null);(0,v.useEffect)(()=>{i(Kb(Jb,{subjects:t.get(`subjects`)?.split(`,`).filter(Boolean)??[],chapterIds:[],types:t.get(`types`)?.split(`,`).filter(Boolean)??[`single-choice`],difficulty:t.get(`difficulty`)?.split(`,`).filter(Boolean).map(Number)??[1,2,3],count:Number(t.get(`count`))||10,timed:t.get(`timed`)===`true`,timeLimit:Number(t.get(`timeLimit`))||30}))},[t]);let _=r[a],y=a>=r.length-1,b=(0,v.useCallback)(e=>{p||(g(e),c(t=>({...t,[_.id]:e})),m(!0))},[_,p]),x=(0,v.useCallback)(()=>{if(p&&h!==_.answer&&n({type:`ADD_ERROR_ITEM`,questionId:_.id,userAnswer:h??``}),y){let e=r.filter(e=>(s[e.id]??``)===e.answer).length;n({type:`ADD_QUIZ_RESULT`,result:{sessionId:l,totalCount:r.length,correctCount:e,wrongCount:r.length-e,skippedCount:0,score:Math.round(e/r.length*100),timeUsed:Math.round((Date.now()-u)/1e3),details:r.map(e=>({questionId:e.id,userAnswer:s[e.id]??``,correct:s[e.id]===e.answer,answeredAt:Date.now()})),completedAt:new Date().toISOString()}}),f(!0)}else o(e=>e+1),m(!1),g(null)},[p,y,_,h,r,s,l,u,n]);return d?(0,A.jsx)(`div`,{className:Xb.container,children:(0,A.jsxs)(`div`,{className:Xb.finishedCard,children:[(0,A.jsx)(`h2`,{children:`答题完成!`}),(0,A.jsx)(`p`,{children:`结果已保存，可前往错题本查看`}),(0,A.jsxs)(`div`,{className:Xb.finishedActions,children:[(0,A.jsx)(`button`,{className:Xb.btnPrimary,onClick:()=>e(`/quiz/result/`+l),children:`查看结果`}),(0,A.jsx)(`button`,{className:Xb.btnSecondary,onClick:()=>e(`/quiz`),children:`再来一组`})]})]})}):r.length===0?(0,A.jsxs)(`div`,{className:Xb.container,children:[(0,A.jsx)(`p`,{className:Xb.emptyHint,children:`题库中暂无匹配题目，请调整筛选条件后重试。`}),(0,A.jsx)(`button`,{className:Xb.btnSecondary,onClick:()=>e(`/quiz`),children:`返回配置`})]}):_?(0,A.jsxs)(`div`,{className:Xb.container,children:[(0,A.jsxs)(`div`,{className:Xb.progress,children:[(0,A.jsxs)(`span`,{children:[a+1,` / `,r.length]}),(0,A.jsx)(`div`,{className:Xb.progressBar,children:(0,A.jsx)(`div`,{className:Xb.progressFill,style:{width:`${(a+1)/r.length*100}%`}})})]}),(0,A.jsxs)(`div`,{className:Xb.questionCard,children:[(0,A.jsxs)(`div`,{className:Xb.questionMeta,children:[(0,A.jsx)(`span`,{className:Xb.questionTag,children:_.subject.toUpperCase()}),(0,A.jsx)(`span`,{className:Xb.questionTag,children:_.difficulty===1?`简单`:_.difficulty===2?`中等`:`困难`}),_.source&&(0,A.jsx)(`span`,{className:Xb.questionTag,children:_.source})]}),(0,A.jsx)(`div`,{className:Xb.stem,children:(0,A.jsx)(Rb,{content:_.stem})}),_.options&&(0,A.jsx)(`div`,{className:Xb.options,children:_.options.map((e,t)=>{let n=String.fromCharCode(65+t),r=h===n,i=n===_.answer,a=Xb.option;return p?i?a=Xb.optionCorrect:r&&!i&&(a=Xb.optionWrong):r&&(a=Xb.optionSelected),(0,A.jsxs)(`button`,{className:a,onClick:()=>b(n),disabled:p,children:[(0,A.jsx)(`span`,{className:Xb.optionLabel,children:n}),(0,A.jsx)(`span`,{className:Xb.optionText,children:(0,A.jsx)(Rb,{content:e})})]},n)})}),p&&(0,A.jsxs)(`div`,{className:Xb.explanation,children:[(0,A.jsx)(`div`,{className:Xb.explanationTitle,children:`解析`}),(0,A.jsx)(Rb,{content:_.explanation})]})]}),p&&(0,A.jsx)(`button`,{className:Xb.nextButton,onClick:x,children:y?`完成`:`下一题`})]}):null}var Qb={container:`_container_z9xs6_1`,notFound:`_notFound_z9xs6_5`,backLink:`_backLink_z9xs6_10`,title:`_title_z9xs6_15`,scoreCard:`_scoreCard_z9xs6_22`,scoreCircle:`_scoreCircle_z9xs6_31`,scoreNum:`_scoreNum_z9xs6_44`,scoreUnit:`_scoreUnit_z9xs6_51`,scoreDetails:`_scoreDetails_z9xs6_56`,detailItem:`_detailItem_z9xs6_62`,detailValue:`_detailValue_z9xs6_69`,detailLabel:`_detailLabel_z9xs6_75`,actions:`_actions_z9xs6_80`,btnPrimary:`_btnPrimary_z9xs6_86`,btnSecondary:`_btnSecondary_z9xs6_87`};function $b(){let{sessionId:e}=vt(),{state:t}=dr(),n=t.progress.quizHistory.find(t=>t.sessionId===e);return n?(0,A.jsxs)(`div`,{className:Qb.container,children:[(0,A.jsx)(`h1`,{className:Qb.title,children:`答题结果`}),(0,A.jsxs)(`div`,{className:Qb.scoreCard,children:[(0,A.jsxs)(`div`,{className:Qb.scoreCircle,children:[(0,A.jsx)(`span`,{className:Qb.scoreNum,children:n.score}),(0,A.jsx)(`span`,{className:Qb.scoreUnit,children:`分`})]}),(0,A.jsxs)(`div`,{className:Qb.scoreDetails,children:[(0,A.jsxs)(`div`,{className:Qb.detailItem,children:[(0,A.jsx)(`span`,{className:Qb.detailValue,children:n.totalCount}),(0,A.jsx)(`span`,{className:Qb.detailLabel,children:`总题数`})]}),(0,A.jsxs)(`div`,{className:Qb.detailItem,children:[(0,A.jsx)(`span`,{className:Qb.detailValue,style:{color:`#16a34a`},children:n.correctCount}),(0,A.jsx)(`span`,{className:Qb.detailLabel,children:`正确`})]}),(0,A.jsxs)(`div`,{className:Qb.detailItem,children:[(0,A.jsx)(`span`,{className:Qb.detailValue,style:{color:`#dc2626`},children:n.wrongCount}),(0,A.jsx)(`span`,{className:Qb.detailLabel,children:`错误`})]}),(0,A.jsxs)(`div`,{className:Qb.detailItem,children:[(0,A.jsxs)(`span`,{className:Qb.detailValue,children:[Math.round(n.timeUsed/60),`分`,n.timeUsed%60,`秒`]}),(0,A.jsx)(`span`,{className:Qb.detailLabel,children:`用时`})]})]})]}),(0,A.jsxs)(`div`,{className:Qb.actions,children:[(0,A.jsx)(Rn,{to:`/quiz`,className:Qb.btnPrimary,children:`再来一组`}),(0,A.jsx)(Rn,{to:`/errorbook`,className:Qb.btnSecondary,children:`查看错题`})]})]}):(0,A.jsxs)(`div`,{className:Qb.container,children:[(0,A.jsx)(`p`,{className:Qb.notFound,children:`未找到答题记录`}),(0,A.jsx)(Rn,{to:`/quiz`,className:Qb.backLink,children:`返回刷题`})]})}var ex={container:`_container_y7riy_1`,title:`_title_y7riy_5`,subtitle:`_subtitle_y7riy_12`,subjectBreakdown:`_subjectBreakdown_y7riy_18`,badge:`_badge_y7riy_25`,dot:`_dot_y7riy_36`,empty:`_empty_y7riy_42`,emptyText:`_emptyText_y7riy_50`,startLink:`_startLink_y7riy_56`,errorList:`_errorList_y7riy_67`,errorCard:`_errorCard_y7riy_73`,errorHeader:`_errorHeader_y7riy_80`,errorSource:`_errorSource_y7riy_87`,errorCount:`_errorCount_y7riy_92`,errorStem:`_errorStem_y7riy_101`,missing:`_missing_y7riy_106`,answerRow:`_answerRow_y7riy_111`,answerLabel:`_answerLabel_y7riy_123`,answerWrong:`_answerWrong_y7riy_127`,answerCorrect:`_answerCorrect_y7riy_133`,explanationToggle:`_explanationToggle_y7riy_138`,explanationContent:`_explanationContent_y7riy_151`,masterButton:`_masterButton_y7riy_162`,masteredSection:`_masteredSection_y7riy_177`,masteredToggle:`_masteredToggle_y7riy_185`,masteredList:`_masteredList_y7riy_193`,masteredItem:`_masteredItem_y7riy_199`,masteredId:`_masteredId_y7riy_207`,masteredTitle:`_masteredTitle_y7riy_214`};function tx(){let{activeErrors:e,errorBook:t,dispatch:n}=dr(),r={};for(let t of e){let e=t.questionId.split(`-`)[0];r[e]=(r[e]??0)+1}let i=t.filter(e=>e.mastered);return(0,A.jsxs)(`div`,{className:ex.container,children:[(0,A.jsx)(`h1`,{className:ex.title,children:`错题本`}),(0,A.jsxs)(`p`,{className:ex.subtitle,children:[`共 `,(0,A.jsx)(`strong`,{children:e.length}),` 道待消灭错题`]}),Object.keys(r).length>0&&(0,A.jsx)(`div`,{className:ex.subjectBreakdown,children:fr.filter(e=>r[e.id]).map(e=>(0,A.jsxs)(`span`,{className:ex.badge,children:[(0,A.jsx)(`span`,{className:ex.dot,style:{background:e.color}}),e.name,`: `,r[e.id],` 题`]},e.id))}),e.length===0?(0,A.jsxs)(`div`,{className:ex.empty,children:[(0,A.jsx)(`p`,{className:ex.emptyText,children:`暂无错题，继续保持!`}),(0,A.jsx)(Rn,{to:`/quiz`,className:ex.startLink,children:`去刷题`})]}):(0,A.jsx)(`div`,{className:ex.errorList,children:e.map(e=>{let t=Yb(e.questionId),r=e.userAnswers[e.userAnswers.length-1];return(0,A.jsxs)(`div`,{className:ex.errorCard,children:[(0,A.jsxs)(`div`,{className:ex.errorHeader,children:[(0,A.jsx)(`span`,{className:ex.errorSource,children:t?.source??e.questionId}),(0,A.jsxs)(`span`,{className:ex.errorCount,children:[`错 `,e.wrongCount,` 次`]})]}),(0,A.jsx)(`div`,{className:ex.errorStem,children:t?(0,A.jsx)(Rb,{content:t.stem}):(0,A.jsxs)(`span`,{className:ex.missing,children:[`题目加载失败 (`,e.questionId,`)`]})}),t&&r&&(0,A.jsxs)(`div`,{className:ex.answerRow,children:[(0,A.jsx)(`span`,{className:ex.answerLabel,children:`你的答案：`}),(0,A.jsx)(`span`,{className:ex.answerWrong,children:r}),(0,A.jsx)(`span`,{className:ex.answerLabel,children:`正确答案：`}),(0,A.jsx)(`span`,{className:ex.answerCorrect,children:t.answer})]}),t&&(0,A.jsxs)(`details`,{className:ex.explanationToggle,children:[(0,A.jsx)(`summary`,{children:`查看解析`}),(0,A.jsx)(`div`,{className:ex.explanationContent,children:(0,A.jsx)(Rb,{content:t.explanation})})]}),(0,A.jsx)(`button`,{className:ex.masterButton,onClick:()=>n({type:`MASTER_ERROR`,questionId:e.questionId}),children:`标记为已掌握`})]},e.questionId)})}),i.length>0&&(0,A.jsxs)(`details`,{className:ex.masteredSection,children:[(0,A.jsxs)(`summary`,{className:ex.masteredToggle,children:[`已掌握 (`,i.length,`)`]}),(0,A.jsx)(`div`,{className:ex.masteredList,children:i.map(e=>{let t=Yb(e.questionId);return(0,A.jsxs)(`div`,{className:ex.masteredItem,children:[(0,A.jsx)(`span`,{className:ex.masteredId,children:e.questionId}),(0,A.jsxs)(`span`,{className:ex.masteredTitle,children:[t?.stem.slice(0,50)??`题目已移除`,`...`]})]},e.questionId)})})]})]})}var nx={container:`_container_1teen_1`,notFound:`_notFound_1teen_3`,chapterTitle:`_chapterTitle_1teen_5`,sectionBlock:`_sectionBlock_1teen_11`,sectionHeader:`_sectionHeader_1teen_13`,sectionTitle:`_sectionTitle_1teen_18`,sectionProgress:`_sectionProgress_1teen_19`,kpList:`_kpList_1teen_21`,kpCard:`_kpCard_1teen_23`,kpCompleted:`_kpCompleted_1teen_33`,kpLeft:`_kpLeft_1teen_35`,kpDot:`_kpDot_1teen_36`,kpRight:`_kpRight_1teen_41`,kpTitleRow:`_kpTitleRow_1teen_43`,kpTitle:`_kpTitle_1teen_43`,doneBadge:`_doneBadge_1teen_45`,kpConcepts:`_kpConcepts_1teen_52`,conceptTag:`_conceptTag_1teen_53`,kpPreview:`_kpPreview_1teen_58`,emptySection:`_emptySection_1teen_64`};function rx({subject:e,chapterId:t}){let n=mt(),{state:r}=dr(),i=mr(t);if(!i)return(0,A.jsx)(`div`,{className:nx.notFound,children:`章节不存在`});let a=br(t),o=fr.find(e=>e.chapters.some(e=>e.id===t));return(0,A.jsxs)(`div`,{className:nx.container,children:[(0,A.jsxs)(`div`,{className:nx.chapterTitle,style:{borderLeftColor:o?.color??`#4f46e5`},children:[`第`,i.chapter.chapterNum,`章 `,i.chapter.title]}),i.chapter.sections.map(i=>{let s=i.knowledgePointIds.map(e=>a.find(t=>t.id===e)).filter(Boolean),c=i.knowledgePointIds.filter(e=>r.progress.completedPoints.includes(e)).length;return(0,A.jsxs)(`div`,{className:nx.sectionBlock,children:[(0,A.jsxs)(`div`,{className:nx.sectionHeader,children:[(0,A.jsx)(`span`,{className:nx.sectionTitle,children:i.title}),(0,A.jsxs)(`span`,{className:nx.sectionProgress,children:[c,`/`,i.knowledgePointIds.length]})]}),s.length>0?(0,A.jsx)(`div`,{className:nx.kpList,children:s.map(i=>{if(!i)return null;let a=r.progress.completedPoints.includes(i.id);return(0,A.jsxs)(`div`,{className:`${nx.kpCard} ${a?nx.kpCompleted:``}`,onClick:()=>n(`/knowledge/${e}/${t}/${i.id}`),children:[(0,A.jsx)(`div`,{className:nx.kpLeft,children:(0,A.jsx)(`span`,{className:nx.kpDot,style:{background:a?`#16a34a`:o?.color??`#4f46e5`}})}),(0,A.jsxs)(`div`,{className:nx.kpRight,children:[(0,A.jsxs)(`div`,{className:nx.kpTitleRow,children:[(0,A.jsx)(`span`,{className:nx.kpTitle,children:i.title}),a&&(0,A.jsx)(`span`,{className:nx.doneBadge,children:`✓`})]}),(0,A.jsx)(`div`,{className:nx.kpConcepts,children:i.keyConcepts.slice(0,4).map(e=>(0,A.jsx)(`span`,{className:nx.conceptTag,children:e},e))}),i.content&&(0,A.jsxs)(`div`,{className:nx.kpPreview,children:[i.content.slice(0,120).replace(/[#*`|>\-$\\\n]/g,` `).trim(),`...`]})]})]},i.id)})}):(0,A.jsx)(`div`,{className:nx.emptySection,children:`本节知识点待补充`})]},i.id)})]})}var ix={container:`_container_3hxcc_1`,notFound:`_notFound_3hxcc_6`,breadcrumb:`_breadcrumb_3hxcc_12`,link:`_link_3hxcc_20`,sep:`_sep_3hxcc_27`,current:`_current_3hxcc_31`,title:`_title_3hxcc_35`,hint:`_hint_3hxcc_40`,backRow:`_backRow_3hxcc_46`,backButton:`_backButton_3hxcc_50`};function ax(){let{subject:e,chapterId:t}=vt(),n=mr(t??``);if(!n)return(0,A.jsx)(`div`,{className:ix.notFound,children:`章节不存在`});let{chapter:r,subject:i}=n;return(0,A.jsxs)(`div`,{className:ix.container,children:[(0,A.jsxs)(`div`,{className:ix.breadcrumb,children:[(0,A.jsx)(Rn,{to:`/`,className:ix.link,children:`总览`}),(0,A.jsx)(`span`,{className:ix.sep,children:`/`}),(0,A.jsx)(Rn,{to:`/knowledge/${e}`,className:ix.link,children:i.fullName}),(0,A.jsx)(`span`,{className:ix.sep,children:`/`}),(0,A.jsx)(Rn,{to:`/knowledge/${e}/${t}`,className:ix.link,children:r.title}),(0,A.jsx)(`span`,{className:ix.sep,children:`/`}),(0,A.jsx)(`span`,{className:ix.current,children:`知识导图`})]}),(0,A.jsxs)(`h1`,{className:ix.title,children:[`第`,r.chapterNum,`章 `,r.title,` — 知识导图`]}),(0,A.jsx)(`p`,{className:ix.hint,children:`点击节点可跳转到对应知识点。绿色 = 已标记掌握。`}),(0,A.jsx)(rx,{subject:e,chapterId:t}),(0,A.jsx)(`div`,{className:ix.backRow,children:(0,A.jsx)(Rn,{to:`/knowledge/${e}/${t}`,className:ix.backButton,children:`← 返回章节`})})]})}var ox={container:`_container_1a96x_1`,toolbar:`_toolbar_1a96x_3`,label:`_label_1a96x_6`,chip:`_chip_1a96x_7`,chipActive:`_chipActive_1a96x_13 _chip_1a96x_7`,dot:`_dot_1a96x_14`,count:`_count_1a96x_15`,mainArea:`_mainArea_1a96x_17`,treePanel:`_treePanel_1a96x_18`,detailPanel:`_detailPanel_1a96x_23`,subjectBlock:`_subjectBlock_1a96x_30`,subjectHeader:`_subjectHeader_1a96x_31`,subjectDot:`_subjectDot_1a96x_38`,subjectName:`_subjectName_1a96x_39`,badge:`_badge_1a96x_40`,arrow:`_arrow_1a96x_41`,chapterBlock:`_chapterBlock_1a96x_43`,chapterHeader:`_chapterHeader_1a96x_44`,chapterName:`_chapterName_1a96x_50`,sectionBlock:`_sectionBlock_1a96x_52`,sectionHeader:`_sectionHeader_1a96x_53`,sectionName:`_sectionName_1a96x_59`,kpCount:`_kpCount_1a96x_60`,kpItem:`_kpItem_1a96x_65`,kpSelected:`_kpSelected_1a96x_71`,kpCompleted:`_kpCompleted_1a96x_72`,kpDot:`_kpDot_1a96x_73`,kpTitle:`_kpTitle_1a96x_74`,kpTags:`_kpTags_1a96x_75`,miniTag:`_miniTag_1a96x_76`,detailHeader:`_detailHeader_1a96x_82`,detailTitle:`_detailTitle_1a96x_83`,detailTags:`_detailTags_1a96x_84`,tag:`_tag_1a96x_85`,detailBtn:`_detailBtn_1a96x_89`,detailContent:`_detailContent_1a96x_94`,emptyHint:`_emptyHint_1a96x_96`};function sx(){let e=mt(),{state:t}=dr(),[n,r]=(0,v.useState)(new Set),[i,a]=(0,v.useState)(null),[o,s]=(0,v.useState)(`all`),c=o===`all`?fr:fr.filter(e=>e.id===o),l=e=>{r(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},u=i?xr(i):null;return(0,A.jsxs)(`div`,{className:ox.container,children:[(0,A.jsxs)(`div`,{className:ox.toolbar,children:[(0,A.jsx)(`span`,{className:ox.label,children:`筛选科目：`}),(0,A.jsx)(`button`,{className:o===`all`?ox.chipActive:ox.chip,onClick:()=>s(`all`),children:`全部`}),fr.map(e=>(0,A.jsxs)(`button`,{className:o===e.id?ox.chipActive:ox.chip,onClick:()=>s(e.id),style:o===e.id?{background:e.color,borderColor:e.color}:{},children:[(0,A.jsx)(`span`,{className:ox.dot,style:{background:e.color}}),e.name]},e.id)),(0,A.jsxs)(`span`,{className:ox.count,children:[yr.filter(e=>o===`all`||e.id.startsWith(o)).length,` 个知识点`]})]}),(0,A.jsxs)(`div`,{className:ox.mainArea,children:[(0,A.jsx)(`div`,{className:ox.treePanel,children:c.map(e=>(0,A.jsxs)(`div`,{className:ox.subjectBlock,children:[(0,A.jsxs)(`div`,{className:ox.subjectHeader,onClick:()=>l(e.id),style:{borderLeftColor:e.color},children:[(0,A.jsx)(`span`,{className:ox.arrow,children:n.has(e.id)?`▼`:`▶`}),(0,A.jsx)(`span`,{className:ox.subjectDot,style:{background:e.color}}),(0,A.jsx)(`span`,{className:ox.subjectName,children:e.fullName}),(0,A.jsxs)(`span`,{className:ox.badge,children:[e.chapters.reduce((e,n)=>e+n.sections.reduce((e,n)=>e+n.knowledgePointIds.filter(e=>t.progress.completedPoints.includes(e)).length,0),0),`/`,e.chapters.reduce((e,t)=>e+t.sections.reduce((e,t)=>e+t.knowledgePointIds.length,0),0)]})]}),n.has(e.id)&&e.chapters.map(r=>(0,A.jsxs)(`div`,{className:ox.chapterBlock,children:[(0,A.jsxs)(`div`,{className:ox.chapterHeader,onClick:()=>l(r.id),children:[(0,A.jsx)(`span`,{className:ox.arrow,children:n.has(r.id)?`▼`:`▶`}),(0,A.jsxs)(`span`,{className:ox.chapterName,children:[`第`,r.chapterNum,`章 `,r.title]})]}),n.has(r.id)&&r.sections.map(r=>(0,A.jsxs)(`div`,{className:ox.sectionBlock,children:[(0,A.jsxs)(`div`,{className:ox.sectionHeader,onClick:()=>l(r.id),children:[(0,A.jsx)(`span`,{className:ox.arrow,children:n.has(r.id)?`▼`:`▶`}),(0,A.jsx)(`span`,{className:ox.sectionName,children:r.title}),(0,A.jsx)(`span`,{className:ox.kpCount,children:r.knowledgePointIds.length})]}),n.has(r.id)&&r.knowledgePointIds.map(n=>{let r=yr.find(e=>e.id===n),o=t.progress.completedPoints.includes(n);return(0,A.jsxs)(`div`,{className:`${ox.kpItem} ${i===n?ox.kpSelected:``} ${o?ox.kpCompleted:``}`,onClick:()=>a(n),children:[(0,A.jsx)(`span`,{className:ox.kpDot,style:{background:o?`#16a34a`:e.color,opacity:o?1:.5}}),(0,A.jsx)(`span`,{className:ox.kpTitle,children:r?.title??n}),(0,A.jsx)(`span`,{className:ox.kpTags,children:r?.keyConcepts.slice(0,2).map(e=>(0,A.jsx)(`span`,{className:ox.miniTag,children:e},e))})]},n)})]},r.id))]},r.id))]},e.id))}),(0,A.jsx)(`div`,{className:ox.detailPanel,children:u?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:ox.detailHeader,children:[(0,A.jsx)(`h3`,{className:ox.detailTitle,children:u.title}),(0,A.jsx)(`div`,{className:ox.detailTags,children:u.keyConcepts.map(e=>(0,A.jsx)(`span`,{className:ox.tag,children:e},e))}),(0,A.jsx)(`button`,{className:ox.detailBtn,onClick:()=>{let t=u.id.split(`-`)[0];e(`/knowledge/${t}/${u.chapterId}/${u.id}`)},children:`进入完整页面 →`})]}),(0,A.jsx)(`div`,{className:ox.detailContent,children:(0,A.jsx)(Rb,{content:u.content})})]}):(0,A.jsxs)(`div`,{className:ox.emptyHint,children:[(0,A.jsx)(`p`,{children:`← 点击左侧知识点查看详情`}),(0,A.jsx)(`p`,{children:`展开科目 → 章节 → 节 → 知识点`}),(0,A.jsx)(`p`,{children:`绿色 = 已标记掌握`})]})})]})]})}var cx={container:`_container_eo0n5_1`,breadcrumb:`_breadcrumb_eo0n5_6`,link:`_link_eo0n5_14`,sep:`_sep_eo0n5_21`,current:`_current_eo0n5_25`,title:`_title_eo0n5_29`,hint:`_hint_eo0n5_34`};function lx(){return(0,A.jsxs)(`div`,{className:cx.container,children:[(0,A.jsxs)(`div`,{className:cx.breadcrumb,children:[(0,A.jsx)(Rn,{to:`/`,className:cx.link,children:`总览`}),(0,A.jsx)(`span`,{className:cx.sep,children:`/`}),(0,A.jsx)(`span`,{className:cx.current,children:`知识图谱`})]}),(0,A.jsx)(`h1`,{className:cx.title,children:`全局知识图谱`}),(0,A.jsx)(`p`,{className:cx.hint,children:`展示全部知识点之间的关联关系。绿色节点 = 已标记掌握。拖拽节点可重新布局，点击跳转到详情。`}),(0,A.jsx)(sx,{})]})}function ux(){return(0,A.jsx)(Fn,{basename:`/408-exam-prep/`.replace(/\/$/,``),children:(0,A.jsx)(ur,{children:(0,A.jsx)(Gt,{children:(0,A.jsxs)(Ut,{element:(0,A.jsx)(wr,{}),children:[(0,A.jsx)(Ut,{path:`/`,element:(0,A.jsx)(Er,{})}),(0,A.jsx)(Ut,{path:`/knowledge/:subject`,element:(0,A.jsx)(Or,{})}),(0,A.jsx)(Ut,{path:`/knowledge/:subject/:chapterId`,element:(0,A.jsx)(Ar,{})}),(0,A.jsx)(Ut,{path:`/knowledge/:subject/:chapterId/:kpId`,element:(0,A.jsx)(Bb,{})}),(0,A.jsx)(Ut,{path:`/quiz`,element:(0,A.jsx)(Wb,{})}),(0,A.jsx)(Ut,{path:`/quiz/session`,element:(0,A.jsx)(Zb,{})}),(0,A.jsx)(Ut,{path:`/quiz/result/:sessionId`,element:(0,A.jsx)($b,{})}),(0,A.jsx)(Ut,{path:`/errorbook`,element:(0,A.jsx)(tx,{})}),(0,A.jsx)(Ut,{path:`/knowledge/:subject/:chapterId/map`,element:(0,A.jsx)(ax,{})}),(0,A.jsx)(Ut,{path:`/knowledge-graph`,element:(0,A.jsx)(lx,{})})]})})})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(v.StrictMode,{children:(0,A.jsx)(ux,{})}));