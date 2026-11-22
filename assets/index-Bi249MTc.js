(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var Jc={exports:{}},bi={},eu={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),Jm=Symbol.for("react.portal"),ep=Symbol.for("react.fragment"),tp=Symbol.for("react.strict_mode"),np=Symbol.for("react.profiler"),rp=Symbol.for("react.provider"),ap=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),op=Symbol.for("react.memo"),lp=Symbol.for("react.lazy"),Fd=Symbol.iterator;function dp(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nu=Object.assign,ru={};function zr(e,t,r){this.props=e,this.context=t,this.refs=ru,this.updater=r||tu}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function au(){}au.prototype=zr.prototype;function kl(e,t,r){this.props=e,this.context=t,this.refs=ru,this.updater=r||tu}var Nl=kl.prototype=new au;Nl.constructor=kl;nu(Nl,zr.prototype);Nl.isPureReactComponent=!0;var Ld=Array.isArray,su=Object.prototype.hasOwnProperty,Sl={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,t,r){var a,s={},i=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)su.call(t,a)&&!iu.hasOwnProperty(a)&&(s[a]=t[a]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];s.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)s[a]===void 0&&(s[a]=l[a]);return{$$typeof:Qa,type:e,key:i,ref:o,props:s,_owner:Sl.current}}function cp(e,t){return{$$typeof:Qa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qa}function up(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Od=/\/+/g;function $i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?up(""+e.key):t.toString(36)}function ws(e,t,r,a,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qa:case Jm:o=!0}}if(o)return o=e,s=s(o),e=a===""?"."+$i(o,0):a,Ld(s)?(r="",e!=null&&(r=e.replace(Od,"$&/")+"/"),ws(s,t,r,"",function(u){return u})):s!=null&&(Cl(s)&&(s=cp(s,r+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Od,"$&/")+"/")+e)),t.push(s)),1;if(o=0,a=a===""?".":a+":",Ld(e))for(var l=0;l<e.length;l++){i=e[l];var d=a+$i(i,l);o+=ws(i,t,r,d,s)}else if(d=dp(e),typeof d=="function")for(e=d.call(e),l=0;!(i=e.next()).done;)i=i.value,d=a+$i(i,l++),o+=ws(i,t,r,d,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rs(e,t,r){if(e==null)return e;var a=[],s=0;return ws(e,a,"","",function(i){return t.call(r,i,s++)}),a}function hp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ut={current:null},js={transition:null},mp={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:js,ReactCurrentOwner:Sl};function lu(){throw Error("act(...) is not supported in production builds of React.")}Se.Children={map:rs,forEach:function(e,t,r){rs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return rs(e,function(){t++}),t},toArray:function(e){return rs(e,function(t){return t})||[]},only:function(e){if(!Cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Se.Component=zr;Se.Fragment=ep;Se.Profiler=np;Se.PureComponent=kl;Se.StrictMode=tp;Se.Suspense=ip;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;Se.act=lu;Se.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=nu({},e.props),s=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Sl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)su.call(t,d)&&!iu.hasOwnProperty(d)&&(a[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)a.children=r;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:Qa,type:e.type,key:s,ref:i,props:a,_owner:o}};Se.createContext=function(e){return e={$$typeof:ap,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rp,_context:e},e.Consumer=e};Se.createElement=ou;Se.createFactory=function(e){var t=ou.bind(null,e);return t.type=e,t};Se.createRef=function(){return{current:null}};Se.forwardRef=function(e){return{$$typeof:sp,render:e}};Se.isValidElement=Cl;Se.lazy=function(e){return{$$typeof:lp,_payload:{_status:-1,_result:e},_init:hp}};Se.memo=function(e,t){return{$$typeof:op,type:e,compare:t===void 0?null:t}};Se.startTransition=function(e){var t=js.transition;js.transition={};try{e()}finally{js.transition=t}};Se.unstable_act=lu;Se.useCallback=function(e,t){return ut.current.useCallback(e,t)};Se.useContext=function(e){return ut.current.useContext(e)};Se.useDebugValue=function(){};Se.useDeferredValue=function(e){return ut.current.useDeferredValue(e)};Se.useEffect=function(e,t){return ut.current.useEffect(e,t)};Se.useId=function(){return ut.current.useId()};Se.useImperativeHandle=function(e,t,r){return ut.current.useImperativeHandle(e,t,r)};Se.useInsertionEffect=function(e,t){return ut.current.useInsertionEffect(e,t)};Se.useLayoutEffect=function(e,t){return ut.current.useLayoutEffect(e,t)};Se.useMemo=function(e,t){return ut.current.useMemo(e,t)};Se.useReducer=function(e,t,r){return ut.current.useReducer(e,t,r)};Se.useRef=function(e){return ut.current.useRef(e)};Se.useState=function(e){return ut.current.useState(e)};Se.useSyncExternalStore=function(e,t,r){return ut.current.useSyncExternalStore(e,t,r)};Se.useTransition=function(){return ut.current.useTransition()};Se.version="18.3.1";eu.exports=Se;var E=eu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=E,gp=Symbol.for("react.element"),fp=Symbol.for("react.fragment"),xp=Object.prototype.hasOwnProperty,bp=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yp={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,r){var a,s={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)xp.call(t,a)&&!yp.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)s[a]===void 0&&(s[a]=t[a]);return{$$typeof:gp,type:e,key:i,ref:o,props:s,_owner:bp.current}}bi.Fragment=fp;bi.jsx=du;bi.jsxs=du;Jc.exports=bi;var n=Jc.exports,cu={exports:{}},jt={},uu={exports:{}},hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,R){var f=A.length;A.push(R);e:for(;0<f;){var L=f-1>>>1,v=A[L];if(0<s(v,R))A[L]=R,A[f]=v,f=L;else break e}}function r(A){return A.length===0?null:A[0]}function a(A){if(A.length===0)return null;var R=A[0],f=A.pop();if(f!==R){A[0]=f;e:for(var L=0,v=A.length,x=v>>>1;L<x;){var j=2*(L+1)-1,G=A[j],V=j+1,W=A[V];if(0>s(G,f))V<v&&0>s(W,G)?(A[L]=W,A[V]=f,L=V):(A[L]=G,A[j]=f,L=j);else if(V<v&&0>s(W,f))A[L]=W,A[V]=f,L=V;else break e}}return R}function s(A,R){var f=A.sortIndex-R.sortIndex;return f!==0?f:A.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var d=[],u=[],g=1,p=null,w=3,N=!1,c=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(A){for(var R=r(u);R!==null;){if(R.callback===null)a(u);else if(R.startTime<=A)a(u),R.sortIndex=R.expirationTime,t(d,R);else break;R=r(u)}}function P(A){if(k=!1,S(A),!c)if(r(d)!==null)c=!0,ee(O);else{var R=r(u);R!==null&&T(P,R.startTime-A)}}function O(A,R){c=!1,k&&(k=!1,h($),$=-1),N=!0;var f=w;try{for(S(R),p=r(d);p!==null&&(!(p.expirationTime>R)||A&&!J());){var L=p.callback;if(typeof L=="function"){p.callback=null,w=p.priorityLevel;var v=L(p.expirationTime<=R);R=e.unstable_now(),typeof v=="function"?p.callback=v:p===r(d)&&a(d),S(R)}else a(d);p=r(d)}if(p!==null)var x=!0;else{var j=r(u);j!==null&&T(P,j.startTime-R),x=!1}return x}finally{p=null,w=f,N=!1}}var F=!1,M=null,$=-1,D=5,U=-1;function J(){return!(e.unstable_now()-U<D)}function se(){if(M!==null){var A=e.unstable_now();U=A;var R=!0;try{R=M(!0,A)}finally{R?re():(F=!1,M=null)}}else F=!1}var re;if(typeof m=="function")re=function(){m(se)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ce=X.port2;X.port1.onmessage=se,re=function(){ce.postMessage(null)}}else re=function(){C(se,0)};function ee(A){M=A,F||(F=!0,re())}function T(A,R){$=C(function(){A(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){c||N||(c=!0,ee(O))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(A){switch(w){case 1:case 2:case 3:var R=3;break;default:R=w}var f=w;w=R;try{return A()}finally{w=f}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var f=w;w=A;try{return R()}finally{w=f}},e.unstable_scheduleCallback=function(A,R,f){var L=e.unstable_now();switch(typeof f=="object"&&f!==null?(f=f.delay,f=typeof f=="number"&&0<f?L+f:L):f=L,A){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=f+v,A={id:g++,callback:R,priorityLevel:A,startTime:f,expirationTime:v,sortIndex:-1},f>L?(A.sortIndex=f,t(u,A),r(d)===null&&A===r(u)&&(k?(h($),$=-1):k=!0,T(P,f-L))):(A.sortIndex=v,t(d,A),c||N||(c=!0,ee(O))),A},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(A){var R=w;return function(){var f=w;w=R;try{return A.apply(this,arguments)}finally{w=f}}}})(hu);uu.exports=hu;var vp=uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=E,wt=vp;function oe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mu=new Set,ka={};function or(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(ka[e]=t,e=0;e<t.length;e++)mu.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=Object.prototype.hasOwnProperty,Np=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vd={},_d={};function Sp(e){return bo.call(_d,e)?!0:bo.call(Vd,e)?!1:Np.test(e)?_d[e]=!0:(Vd[e]=!0,!1)}function Cp(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wp(e,t,r,a){if(t===null||typeof t>"u"||Cp(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,r,a,s,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wl,jl);nt[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wl,jl);nt[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wl,jl);nt[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tl(e,t,r,a){var s=nt.hasOwnProperty(t)?nt[t]:null;(s!==null?s.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wp(t,r,s,a)&&(r=null),a||s===null?Sp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,a=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var bn=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,as=Symbol.for("react.element"),pr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),Al=Symbol.for("react.strict_mode"),yo=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),Pl=Symbol.for("react.forward_ref"),vo=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),El=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),fu=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=Gd&&e[Gd]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,Ui;function ia(e){if(Ui===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ui=t&&t[1]||""}return`
`+Ui+e}var zi=!1;function Ki(e,t){if(!e||zi)return"";zi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var a=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){a=u}e.call(t.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=a.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=l);break}}}finally{zi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ia(e):""}function jp(e){switch(e.tag){case 5:return ia(e.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return e=Ki(e.type,!1),e;case 11:return e=Ki(e.type.render,!1),e;case 1:return e=Ki(e.type,!0),e;default:return""}}function No(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case pr:return"Portal";case yo:return"Profiler";case Al:return"StrictMode";case vo:return"Suspense";case ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gu:return(e.displayName||"Context")+".Consumer";case pu:return(e._context.displayName||"Context")+".Provider";case Pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case El:return t=e.displayName||null,t!==null?t:No(e.type)||"Memo";case Sn:t=e._payload,e=e._init;try{return No(e(t))}catch{}}return null}function Tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return No(t);case 8:return t===Al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ap(e){var t=xu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ss(e){e._valueTracker||(e._valueTracker=Ap(e))}function bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=xu(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function So(e,t){var r=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Hd(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=On(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yu(e,t){t=t.checked,t!=null&&Tl(e,"checked",t,!1)}function Co(e,t){yu(e,t);var r=On(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wo(e,t.type,r):t.hasOwnProperty("defaultValue")&&wo(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $d(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function wo(e,t,r){(t!=="number"||Vs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var oa=Array.isArray;function Tr(e,t,r,a){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&a&&(e[r].defaultSelected=!0)}else{for(r=""+On(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function jo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ud(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(oe(92));if(oa(r)){if(1<r.length)throw Error(oe(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:On(r)}}function vu(e,t){var r=On(t.value),a=On(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function zd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function To(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ku(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Na(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pp=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(e){Pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ca[t]=ca[e]})});function Su(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ca.hasOwnProperty(e)&&ca[e]?(""+t).trim():t+"px"}function Cu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,s=Su(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,s):e[r]=s}}var Ep=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(Ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(oe(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(oe(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(oe(61))}if(t.style!=null&&typeof t.style!="object")throw Error(oe(62))}}function Po(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eo=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Do=null,Ar=null,Pr=null;function Kd(e){if(e=Ya(e)){if(typeof Do!="function")throw Error(oe(280));var t=e.stateNode;t&&(t=Si(t),Do(e.stateNode,e.type,t))}}function wu(e){Ar?Pr?Pr.push(e):Pr=[e]:Ar=e}function ju(){if(Ar){var e=Ar,t=Pr;if(Pr=Ar=null,Kd(e),t)for(e=0;e<t.length;e++)Kd(t[e])}}function Tu(e,t){return e(t)}function Au(){}var qi=!1;function Pu(e,t,r){if(qi)return e(t,r);qi=!0;try{return Tu(e,t,r)}finally{qi=!1,(Ar!==null||Pr!==null)&&(Au(),ju())}}function Sa(e,t){var r=e.stateNode;if(r===null)return null;var a=Si(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(oe(231,t,typeof r));return r}var Ro=!1;if(mn)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Ro=!1}function Dp(e,t,r,a,s,i,o,l,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(g){this.onError(g)}}var ua=!1,_s=null,Gs=!1,Mo=null,Rp={onError:function(e){ua=!0,_s=e}};function Mp(e,t,r,a,s,i,o,l,d){ua=!1,_s=null,Dp.apply(Rp,arguments)}function Ip(e,t,r,a,s,i,o,l,d){if(Mp.apply(this,arguments),ua){if(ua){var u=_s;ua=!1,_s=null}else throw Error(oe(198));Gs||(Gs=!0,Mo=u)}}function lr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qd(e){if(lr(e)!==e)throw Error(oe(188))}function Bp(e){var t=e.alternate;if(!t){if(t=lr(e),t===null)throw Error(oe(188));return t!==e?null:e}for(var r=e,a=t;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(a=s.return,a!==null){r=a;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return qd(s),e;if(i===a)return qd(s),t;i=i.sibling}throw Error(oe(188))}if(r.return!==a.return)r=s,a=i;else{for(var o=!1,l=s.child;l;){if(l===r){o=!0,r=s,a=i;break}if(l===a){o=!0,a=s,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,a=s;break}if(l===a){o=!0,a=i,r=s;break}l=l.sibling}if(!o)throw Error(oe(189))}}if(r.alternate!==a)throw Error(oe(190))}if(r.tag!==3)throw Error(oe(188));return r.stateNode.current===r?e:t}function Du(e){return e=Bp(e),e!==null?Ru(e):null}function Ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ru(e);if(t!==null)return t;e=e.sibling}return null}var Mu=wt.unstable_scheduleCallback,Wd=wt.unstable_cancelCallback,Fp=wt.unstable_shouldYield,Lp=wt.unstable_requestPaint,Ue=wt.unstable_now,Op=wt.unstable_getCurrentPriorityLevel,Rl=wt.unstable_ImmediatePriority,Iu=wt.unstable_UserBlockingPriority,Hs=wt.unstable_NormalPriority,Vp=wt.unstable_LowPriority,Bu=wt.unstable_IdlePriority,yi=null,tn=null;function _p(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:$p,Gp=Math.log,Hp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(Gp(e)/Hp|0)|0}var os=64,ls=4194304;function la(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $s(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,s=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~s;l!==0?a=la(l):(i&=o,i!==0&&(a=la(i)))}else o=r&~s,o!==0?a=la(o):i!==0&&(a=la(i));if(a===0)return 0;if(t!==0&&t!==a&&!(t&s)&&(s=a&-a,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(a&4&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-$t(t),s=1<<r,a|=e[r],t&=~s;return a}function Up(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zp(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-$t(i),l=1<<o,d=s[o];d===-1?(!(l&r)||l&a)&&(s[o]=Up(l,t)):d<=t&&(e.expiredLanes|=l),i&=~l}}function Io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fu(){var e=os;return os<<=1,!(os&4194240)&&(os=64),e}function Wi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Xa(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=r}function Kp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-$t(r),i=1<<s;t[s]=0,a[s]=-1,e[s]=-1,r&=~i}}function Ml(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-$t(r),s=1<<a;s&t|e[a]&t&&(e[a]|=t),r&=~s}}var Te=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ou,Il,Vu,_u,Gu,Bo=!1,ds=[],Pn=null,En=null,Dn=null,Ca=new Map,wa=new Map,wn=[],qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Ca.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(t.pointerId)}}function Yr(e,t,r,a,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Ya(t),t!==null&&Il(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Wp(e,t,r,a,s){switch(t){case"focusin":return Pn=Yr(Pn,e,t,r,a,s),!0;case"dragenter":return En=Yr(En,e,t,r,a,s),!0;case"mouseover":return Dn=Yr(Dn,e,t,r,a,s),!0;case"pointerover":var i=s.pointerId;return Ca.set(i,Yr(Ca.get(i)||null,e,t,r,a,s)),!0;case"gotpointercapture":return i=s.pointerId,wa.set(i,Yr(wa.get(i)||null,e,t,r,a,s)),!0}return!1}function Hu(e){var t=Qn(e.target);if(t!==null){var r=lr(t);if(r!==null){if(t=r.tag,t===13){if(t=Eu(r),t!==null){e.blockedOn=t,Gu(e.priority,function(){Vu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Eo=a,r.target.dispatchEvent(a),Eo=null}else return t=Ya(r),t!==null&&Il(t),e.blockedOn=r,!1;t.shift()}return!0}function Xd(e,t,r){Ts(e)&&r.delete(t)}function Qp(){Bo=!1,Pn!==null&&Ts(Pn)&&(Pn=null),En!==null&&Ts(En)&&(En=null),Dn!==null&&Ts(Dn)&&(Dn=null),Ca.forEach(Xd),wa.forEach(Xd)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bo||(Bo=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,Qp)))}function ja(e){function t(s){return Jr(s,e)}if(0<ds.length){Jr(ds[0],e);for(var r=1;r<ds.length;r++){var a=ds[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Pn!==null&&Jr(Pn,e),En!==null&&Jr(En,e),Dn!==null&&Jr(Dn,e),Ca.forEach(t),wa.forEach(t),r=0;r<wn.length;r++)a=wn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<wn.length&&(r=wn[0],r.blockedOn===null);)Hu(r),r.blockedOn===null&&wn.shift()}var Er=bn.ReactCurrentBatchConfig,Us=!0;function Xp(e,t,r,a){var s=Te,i=Er.transition;Er.transition=null;try{Te=1,Bl(e,t,r,a)}finally{Te=s,Er.transition=i}}function Zp(e,t,r,a){var s=Te,i=Er.transition;Er.transition=null;try{Te=4,Bl(e,t,r,a)}finally{Te=s,Er.transition=i}}function Bl(e,t,r,a){if(Us){var s=Fo(e,t,r,a);if(s===null)ao(e,t,a,zs,r),Qd(e,a);else if(Wp(s,e,t,r,a))a.stopPropagation();else if(Qd(e,a),t&4&&-1<qp.indexOf(e)){for(;s!==null;){var i=Ya(s);if(i!==null&&Ou(i),i=Fo(e,t,r,a),i===null&&ao(e,t,a,zs,r),i===s)break;s=i}s!==null&&a.stopPropagation()}else ao(e,t,a,null,r)}}var zs=null;function Fo(e,t,r,a){if(zs=null,e=Dl(a),e=Qn(e),e!==null)if(t=lr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Eu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zs=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Op()){case Rl:return 1;case Iu:return 4;case Hs:case Vp:return 16;case Bu:return 536870912;default:return 16}default:return 16}}var Tn=null,Fl=null,As=null;function Uu(){if(As)return As;var e,t=Fl,r=t.length,a,s="value"in Tn?Tn.value:Tn.textContent,i=s.length;for(e=0;e<r&&t[e]===s[e];e++);var o=r-e;for(a=1;a<=o&&t[r-a]===s[i-a];a++);return As=s.slice(e,1<a?1-a:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function Zd(){return!1}function Tt(e){function t(r,a,s,i,o){this._reactName=r,this._targetInst=s,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cs:Zd,this.isPropagationStopped=Zd,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),t}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Tt(Kr),Za=Ge({},Kr,{view:0,detail:0}),Yp=Tt(Za),Qi,Xi,ea,vi=Ge({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ea&&(ea&&e.type==="mousemove"?(Qi=e.screenX-ea.screenX,Xi=e.screenY-ea.screenY):Xi=Qi=0,ea=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Yd=Tt(vi),Jp=Ge({},vi,{dataTransfer:0}),eg=Tt(Jp),tg=Ge({},Za,{relatedTarget:0}),Zi=Tt(tg),ng=Ge({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Tt(ng),ag=Ge({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=Tt(ag),ig=Ge({},Kr,{data:0}),Jd=Tt(ig),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dg[e])?!!t[e]:!1}function Ol(){return cg}var ug=Ge({},Za,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ol,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hg=Tt(ug),mg=Ge({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=Tt(mg),pg=Ge({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ol}),gg=Tt(pg),fg=Ge({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Tt(fg),bg=Ge({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Tt(bg),vg=[9,13,27,32],Vl=mn&&"CompositionEvent"in window,ha=null;mn&&"documentMode"in document&&(ha=document.documentMode);var kg=mn&&"TextEvent"in window&&!ha,zu=mn&&(!Vl||ha&&8<ha&&11>=ha),tc=" ",nc=!1;function Ku(e,t){switch(e){case"keyup":return vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function Ng(e,t){switch(e){case"compositionend":return qu(t);case"keypress":return t.which!==32?null:(nc=!0,tc);case"textInput":return e=t.data,e===tc&&nc?null:e;default:return null}}function Sg(e,t){if(fr)return e==="compositionend"||!Vl&&Ku(e,t)?(e=Uu(),As=Fl=Tn=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zu&&t.locale!=="ko"?null:t.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cg[e.type]:t==="textarea"}function Wu(e,t,r,a){wu(a),t=Ks(t,"onChange"),0<t.length&&(r=new Ll("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var ma=null,Ta=null;function wg(e){sh(e,0)}function ki(e){var t=yr(e);if(bu(t))return e}function jg(e,t){if(e==="change")return t}var Qu=!1;if(mn){var Yi;if(mn){var Ji="oninput"in document;if(!Ji){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),Ji=typeof ac.oninput=="function"}Yi=Ji}else Yi=!1;Qu=Yi&&(!document.documentMode||9<document.documentMode)}function sc(){ma&&(ma.detachEvent("onpropertychange",Xu),Ta=ma=null)}function Xu(e){if(e.propertyName==="value"&&ki(Ta)){var t=[];Wu(t,Ta,e,Dl(e)),Pu(wg,t)}}function Tg(e,t,r){e==="focusin"?(sc(),ma=t,Ta=r,ma.attachEvent("onpropertychange",Xu)):e==="focusout"&&sc()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Ta)}function Pg(e,t){if(e==="click")return ki(t)}function Eg(e,t){if(e==="input"||e==="change")return ki(t)}function Dg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Dg;function Aa(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var s=r[a];if(!bo.call(t,s)||!zt(e[s],t[s]))return!1}return!0}function ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oc(e,t){var r=ic(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ic(r)}}function Zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yu(){for(var e=window,t=Vs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Vs(e.document)}return t}function _l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rg(e){var t=Yu(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Zu(r.ownerDocument.documentElement,r)){if(a!==null&&_l(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,i=Math.min(a.start,s);a=a.end===void 0?i:Math.min(a.end,s),!e.extend&&i>a&&(s=a,a=i,i=s),s=oc(r,i);var o=oc(r,a);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mg=mn&&"documentMode"in document&&11>=document.documentMode,xr=null,Lo=null,pa=null,Oo=!1;function lc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Oo||xr==null||xr!==Vs(a)||(a=xr,"selectionStart"in a&&_l(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),pa&&Aa(pa,a)||(pa=a,a=Ks(Lo,"onSelect"),0<a.length&&(t=new Ll("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=xr)))}function us(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var br={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},eo={},Ju={};mn&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Ni(e){if(eo[e])return eo[e];if(!br[e])return e;var t=br[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ju)return eo[e]=t[r];return e}var eh=Ni("animationend"),th=Ni("animationiteration"),nh=Ni("animationstart"),rh=Ni("transitionend"),ah=new Map,dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){ah.set(e,t),or(t,[e])}for(var to=0;to<dc.length;to++){var no=dc[to],Ig=no.toLowerCase(),Bg=no[0].toUpperCase()+no.slice(1);$n(Ig,"on"+Bg)}$n(eh,"onAnimationEnd");$n(th,"onAnimationIteration");$n(nh,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(rh,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function cc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,Ip(a,t,void 0,e),e.currentTarget=null}function sh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],s=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==i&&s.isPropagationStopped())break e;cc(s,l,u),i=d}else for(o=0;o<a.length;o++){if(l=a[o],d=l.instance,u=l.currentTarget,l=l.listener,d!==i&&s.isPropagationStopped())break e;cc(s,l,u),i=d}}}if(Gs)throw e=Mo,Gs=!1,Mo=null,e}function Ie(e,t){var r=t[$o];r===void 0&&(r=t[$o]=new Set);var a=e+"__bubble";r.has(a)||(ih(t,e,2,!1),r.add(a))}function ro(e,t,r){var a=0;t&&(a|=4),ih(r,e,a,t)}var hs="_reactListening"+Math.random().toString(36).slice(2);function Pa(e){if(!e[hs]){e[hs]=!0,mu.forEach(function(r){r!=="selectionchange"&&(Fg.has(r)||ro(r,!1,e),ro(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hs]||(t[hs]=!0,ro("selectionchange",!1,t))}}function ih(e,t,r,a){switch($u(t)){case 1:var s=Xp;break;case 4:s=Zp;break;default:s=Bl}r=s.bind(null,t,r,e),s=void 0,!Ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function ao(e,t,r,a,s){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=a.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Qn(l),o===null)return;if(d=o.tag,d===5||d===6){a=i=o;continue e}l=l.parentNode}}a=a.return}Pu(function(){var u=i,g=Dl(r),p=[];e:{var w=ah.get(e);if(w!==void 0){var N=Ll,c=e;switch(e){case"keypress":if(Ps(r)===0)break e;case"keydown":case"keyup":N=hg;break;case"focusin":c="focus",N=Zi;break;case"focusout":c="blur",N=Zi;break;case"beforeblur":case"afterblur":N=Zi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=gg;break;case eh:case th:case nh:N=rg;break;case rh:N=xg;break;case"scroll":N=Yp;break;case"wheel":N=yg;break;case"copy":case"cut":case"paste":N=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ec}var k=(t&4)!==0,C=!k&&e==="scroll",h=k?w!==null?w+"Capture":null:w;k=[];for(var m=u,S;m!==null;){S=m;var P=S.stateNode;if(S.tag===5&&P!==null&&(S=P,h!==null&&(P=Sa(m,h),P!=null&&k.push(Ea(m,P,S)))),C)break;m=m.return}0<k.length&&(w=new N(w,c,null,r,g),p.push({event:w,listeners:k}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",w&&r!==Eo&&(c=r.relatedTarget||r.fromElement)&&(Qn(c)||c[pn]))break e;if((N||w)&&(w=g.window===g?g:(w=g.ownerDocument)?w.defaultView||w.parentWindow:window,N?(c=r.relatedTarget||r.toElement,N=u,c=c?Qn(c):null,c!==null&&(C=lr(c),c!==C||c.tag!==5&&c.tag!==6)&&(c=null)):(N=null,c=u),N!==c)){if(k=Yd,P="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=ec,P="onPointerLeave",h="onPointerEnter",m="pointer"),C=N==null?w:yr(N),S=c==null?w:yr(c),w=new k(P,m+"leave",N,r,g),w.target=C,w.relatedTarget=S,P=null,Qn(g)===u&&(k=new k(h,m+"enter",c,r,g),k.target=S,k.relatedTarget=C,P=k),C=P,N&&c)t:{for(k=N,h=c,m=0,S=k;S;S=ur(S))m++;for(S=0,P=h;P;P=ur(P))S++;for(;0<m-S;)k=ur(k),m--;for(;0<S-m;)h=ur(h),S--;for(;m--;){if(k===h||h!==null&&k===h.alternate)break t;k=ur(k),h=ur(h)}k=null}else k=null;N!==null&&uc(p,w,N,k,!1),c!==null&&C!==null&&uc(p,C,c,k,!0)}}e:{if(w=u?yr(u):window,N=w.nodeName&&w.nodeName.toLowerCase(),N==="select"||N==="input"&&w.type==="file")var O=jg;else if(rc(w))if(Qu)O=Eg;else{O=Ag;var F=Tg}else(N=w.nodeName)&&N.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(O=Pg);if(O&&(O=O(e,u))){Wu(p,O,r,g);break e}F&&F(e,w,u),e==="focusout"&&(F=w._wrapperState)&&F.controlled&&w.type==="number"&&wo(w,"number",w.value)}switch(F=u?yr(u):window,e){case"focusin":(rc(F)||F.contentEditable==="true")&&(xr=F,Lo=u,pa=null);break;case"focusout":pa=Lo=xr=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,lc(p,r,g);break;case"selectionchange":if(Mg)break;case"keydown":case"keyup":lc(p,r,g)}var M;if(Vl)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else fr?Ku(e,r)&&($="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(zu&&r.locale!=="ko"&&(fr||$!=="onCompositionStart"?$==="onCompositionEnd"&&fr&&(M=Uu()):(Tn=g,Fl="value"in Tn?Tn.value:Tn.textContent,fr=!0)),F=Ks(u,$),0<F.length&&($=new Jd($,e,null,r,g),p.push({event:$,listeners:F}),M?$.data=M:(M=qu(r),M!==null&&($.data=M)))),(M=kg?Ng(e,r):Sg(e,r))&&(u=Ks(u,"onBeforeInput"),0<u.length&&(g=new Jd("onBeforeInput","beforeinput",null,r,g),p.push({event:g,listeners:u}),g.data=M))}sh(p,t)})}function Ea(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ks(e,t){for(var r=t+"Capture",a=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Sa(e,r),i!=null&&a.unshift(Ea(e,i,s)),i=Sa(e,t),i!=null&&a.push(Ea(e,i,s))),e=e.return}return a}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uc(e,t,r,a,s){for(var i=t._reactName,o=[];r!==null&&r!==a;){var l=r,d=l.alternate,u=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&u!==null&&(l=u,s?(d=Sa(r,i),d!=null&&o.unshift(Ea(r,d,l))):s||(d=Sa(r,i),d!=null&&o.push(Ea(r,d,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Lg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function hc(e){return(typeof e=="string"?e:""+e).replace(Lg,`
`).replace(Og,"")}function ms(e,t,r){if(t=hc(t),hc(e)!==t&&r)throw Error(oe(425))}function qs(){}var Vo=null,_o=null;function Go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,mc=typeof Promise=="function"?Promise:void 0,_g=typeof queueMicrotask=="function"?queueMicrotask:typeof mc<"u"?function(e){return mc.resolve(null).then(e).catch(Gg)}:Ho;function Gg(e){setTimeout(function(){throw e})}function so(e,t){var r=t,a=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(a===0){e.removeChild(s),ja(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=s}while(r);ja(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+qr,Da="__reactProps$"+qr,pn="__reactContainer$"+qr,$o="__reactEvents$"+qr,Hg="__reactListeners$"+qr,$g="__reactHandles$"+qr;function Qn(e){var t=e[Jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[pn]||r[Jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pc(e);e!==null;){if(r=e[Jt])return r;e=pc(e)}return t}e=r,r=e.parentNode}return null}function Ya(e){return e=e[Jt]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(oe(33))}function Si(e){return e[Da]||null}var Uo=[],vr=-1;function Un(e){return{current:e}}function Fe(e){0>vr||(e.current=Uo[vr],Uo[vr]=null,vr--)}function Re(e,t){vr++,Uo[vr]=e.current,e.current=t}var Vn={},ot=Un(Vn),bt=Un(!1),tr=Vn;function Fr(e,t){var r=e.type.contextTypes;if(!r)return Vn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function yt(e){return e=e.childContextTypes,e!=null}function Ws(){Fe(bt),Fe(ot)}function gc(e,t,r){if(ot.current!==Vn)throw Error(oe(168));Re(ot,t),Re(bt,r)}function oh(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var s in a)if(!(s in t))throw Error(oe(108,Tp(e)||"Unknown",s));return Ge({},r,a)}function Qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vn,tr=ot.current,Re(ot,e),Re(bt,bt.current),!0}function fc(e,t,r){var a=e.stateNode;if(!a)throw Error(oe(169));r?(e=oh(e,t,tr),a.__reactInternalMemoizedMergedChildContext=e,Fe(bt),Fe(ot),Re(ot,e)):Fe(bt),Re(bt,r)}var dn=null,Ci=!1,io=!1;function lh(e){dn===null?dn=[e]:dn.push(e)}function Ug(e){Ci=!0,lh(e)}function zn(){if(!io&&dn!==null){io=!0;var e=0,t=Te;try{var r=dn;for(Te=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}dn=null,Ci=!1}catch(s){throw dn!==null&&(dn=dn.slice(e+1)),Mu(Rl,zn),s}finally{Te=t,io=!1}}return null}var kr=[],Nr=0,Xs=null,Zs=0,At=[],Pt=0,nr=null,cn=1,un="";function qn(e,t){kr[Nr++]=Zs,kr[Nr++]=Xs,Xs=e,Zs=t}function dh(e,t,r){At[Pt++]=cn,At[Pt++]=un,At[Pt++]=nr,nr=e;var a=cn;e=un;var s=32-$t(a)-1;a&=~(1<<s),r+=1;var i=32-$t(t)+s;if(30<i){var o=s-s%5;i=(a&(1<<o)-1).toString(32),a>>=o,s-=o,cn=1<<32-$t(t)+s|r<<s|a,un=i+e}else cn=1<<i|r<<s|a,un=e}function Gl(e){e.return!==null&&(qn(e,1),dh(e,1,0))}function Hl(e){for(;e===Xs;)Xs=kr[--Nr],kr[Nr]=null,Zs=kr[--Nr],kr[Nr]=null;for(;e===nr;)nr=At[--Pt],At[Pt]=null,un=At[--Pt],At[Pt]=null,cn=At[--Pt],At[Pt]=null}var Ct=null,St=null,Oe=!1,Ht=null;function ch(e,t){var r=Rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function xc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,St=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,St=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=nr!==null?{id:cn,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ct=e,St=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ko(e){if(Oe){var t=St;if(t){var r=t;if(!xc(e,t)){if(zo(e))throw Error(oe(418));t=Rn(r.nextSibling);var a=Ct;t&&xc(e,t)?ch(a,r):(e.flags=e.flags&-4097|2,Oe=!1,Ct=e)}}else{if(zo(e))throw Error(oe(418));e.flags=e.flags&-4097|2,Oe=!1,Ct=e}}}function bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function ps(e){if(e!==Ct)return!1;if(!Oe)return bc(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Go(e.type,e.memoizedProps)),t&&(t=St)){if(zo(e))throw uh(),Error(oe(418));for(;t;)ch(e,t),t=Rn(t.nextSibling)}if(bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(oe(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){St=Rn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}St=null}}else St=Ct?Rn(e.stateNode.nextSibling):null;return!0}function uh(){for(var e=St;e;)e=Rn(e.nextSibling)}function Lr(){St=Ct=null,Oe=!1}function $l(e){Ht===null?Ht=[e]:Ht.push(e)}var zg=bn.ReactCurrentBatchConfig;function ta(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(oe(309));var a=r.stateNode}if(!a)throw Error(oe(147,e));var s=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(oe(284));if(!r._owner)throw Error(oe(290,e))}return e}function gs(e,t){throw e=Object.prototype.toString.call(t),Error(oe(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yc(e){var t=e._init;return t(e._payload)}function hh(e){function t(h,m){if(e){var S=h.deletions;S===null?(h.deletions=[m],h.flags|=16):S.push(m)}}function r(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function a(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function s(h,m){return h=Fn(h,m),h.index=0,h.sibling=null,h}function i(h,m,S){return h.index=S,e?(S=h.alternate,S!==null?(S=S.index,S<m?(h.flags|=2,m):S):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,m,S,P){return m===null||m.tag!==6?(m=po(S,h.mode,P),m.return=h,m):(m=s(m,S),m.return=h,m)}function d(h,m,S,P){var O=S.type;return O===gr?g(h,m,S.props.children,P,S.key):m!==null&&(m.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Sn&&yc(O)===m.type)?(P=s(m,S.props),P.ref=ta(h,m,S),P.return=h,P):(P=Fs(S.type,S.key,S.props,null,h.mode,P),P.ref=ta(h,m,S),P.return=h,P)}function u(h,m,S,P){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=go(S,h.mode,P),m.return=h,m):(m=s(m,S.children||[]),m.return=h,m)}function g(h,m,S,P,O){return m===null||m.tag!==7?(m=er(S,h.mode,P,O),m.return=h,m):(m=s(m,S),m.return=h,m)}function p(h,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return m=po(""+m,h.mode,S),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case as:return S=Fs(m.type,m.key,m.props,null,h.mode,S),S.ref=ta(h,null,m),S.return=h,S;case pr:return m=go(m,h.mode,S),m.return=h,m;case Sn:var P=m._init;return p(h,P(m._payload),S)}if(oa(m)||Xr(m))return m=er(m,h.mode,S,null),m.return=h,m;gs(h,m)}return null}function w(h,m,S,P){var O=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:l(h,m,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case as:return S.key===O?d(h,m,S,P):null;case pr:return S.key===O?u(h,m,S,P):null;case Sn:return O=S._init,w(h,m,O(S._payload),P)}if(oa(S)||Xr(S))return O!==null?null:g(h,m,S,P,null);gs(h,S)}return null}function N(h,m,S,P,O){if(typeof P=="string"&&P!==""||typeof P=="number")return h=h.get(S)||null,l(m,h,""+P,O);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case as:return h=h.get(P.key===null?S:P.key)||null,d(m,h,P,O);case pr:return h=h.get(P.key===null?S:P.key)||null,u(m,h,P,O);case Sn:var F=P._init;return N(h,m,S,F(P._payload),O)}if(oa(P)||Xr(P))return h=h.get(S)||null,g(m,h,P,O,null);gs(m,P)}return null}function c(h,m,S,P){for(var O=null,F=null,M=m,$=m=0,D=null;M!==null&&$<S.length;$++){M.index>$?(D=M,M=null):D=M.sibling;var U=w(h,M,S[$],P);if(U===null){M===null&&(M=D);break}e&&M&&U.alternate===null&&t(h,M),m=i(U,m,$),F===null?O=U:F.sibling=U,F=U,M=D}if($===S.length)return r(h,M),Oe&&qn(h,$),O;if(M===null){for(;$<S.length;$++)M=p(h,S[$],P),M!==null&&(m=i(M,m,$),F===null?O=M:F.sibling=M,F=M);return Oe&&qn(h,$),O}for(M=a(h,M);$<S.length;$++)D=N(M,h,$,S[$],P),D!==null&&(e&&D.alternate!==null&&M.delete(D.key===null?$:D.key),m=i(D,m,$),F===null?O=D:F.sibling=D,F=D);return e&&M.forEach(function(J){return t(h,J)}),Oe&&qn(h,$),O}function k(h,m,S,P){var O=Xr(S);if(typeof O!="function")throw Error(oe(150));if(S=O.call(S),S==null)throw Error(oe(151));for(var F=O=null,M=m,$=m=0,D=null,U=S.next();M!==null&&!U.done;$++,U=S.next()){M.index>$?(D=M,M=null):D=M.sibling;var J=w(h,M,U.value,P);if(J===null){M===null&&(M=D);break}e&&M&&J.alternate===null&&t(h,M),m=i(J,m,$),F===null?O=J:F.sibling=J,F=J,M=D}if(U.done)return r(h,M),Oe&&qn(h,$),O;if(M===null){for(;!U.done;$++,U=S.next())U=p(h,U.value,P),U!==null&&(m=i(U,m,$),F===null?O=U:F.sibling=U,F=U);return Oe&&qn(h,$),O}for(M=a(h,M);!U.done;$++,U=S.next())U=N(M,h,$,U.value,P),U!==null&&(e&&U.alternate!==null&&M.delete(U.key===null?$:U.key),m=i(U,m,$),F===null?O=U:F.sibling=U,F=U);return e&&M.forEach(function(se){return t(h,se)}),Oe&&qn(h,$),O}function C(h,m,S,P){if(typeof S=="object"&&S!==null&&S.type===gr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case as:e:{for(var O=S.key,F=m;F!==null;){if(F.key===O){if(O=S.type,O===gr){if(F.tag===7){r(h,F.sibling),m=s(F,S.props.children),m.return=h,h=m;break e}}else if(F.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Sn&&yc(O)===F.type){r(h,F.sibling),m=s(F,S.props),m.ref=ta(h,F,S),m.return=h,h=m;break e}r(h,F);break}else t(h,F);F=F.sibling}S.type===gr?(m=er(S.props.children,h.mode,P,S.key),m.return=h,h=m):(P=Fs(S.type,S.key,S.props,null,h.mode,P),P.ref=ta(h,m,S),P.return=h,h=P)}return o(h);case pr:e:{for(F=S.key;m!==null;){if(m.key===F)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){r(h,m.sibling),m=s(m,S.children||[]),m.return=h,h=m;break e}else{r(h,m);break}else t(h,m);m=m.sibling}m=go(S,h.mode,P),m.return=h,h=m}return o(h);case Sn:return F=S._init,C(h,m,F(S._payload),P)}if(oa(S))return c(h,m,S,P);if(Xr(S))return k(h,m,S,P);gs(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,m!==null&&m.tag===6?(r(h,m.sibling),m=s(m,S),m.return=h,h=m):(r(h,m),m=po(S,h.mode,P),m.return=h,h=m),o(h)):r(h,m)}return C}var Or=hh(!0),mh=hh(!1),Ys=Un(null),Js=null,Sr=null,Ul=null;function zl(){Ul=Sr=Js=null}function Kl(e){var t=Ys.current;Fe(Ys),e._currentValue=t}function qo(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function Dr(e,t){Js=e,Ul=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(Js===null)throw Error(oe(308));Sr=e,Js.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Xn=null;function ql(e){Xn===null?Xn=[e]:Xn.push(e)}function ph(e,t,r,a){var s=t.interleaved;return s===null?(r.next=r,ql(t)):(r.next=s.next,s.next=r),t.interleaved=r,gn(e,a)}function gn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Cn=!1;function Wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,je&2){var s=a.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),a.pending=t,gn(e,r)}return s=a.interleaved,s===null?(t.next=t,ql(a)):(t.next=s.next,s.next=t),a.interleaved=t,gn(e,r)}function Es(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Ml(e,r)}}function vc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?s=i=t:i=i.next=t}else s=i=t;r={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ei(e,t,r,a){var s=e.updateQueue;Cn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var d=l,u=d.next;d.next=null,o===null?i=u:o.next=u,o=d;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==o&&(l===null?g.firstBaseUpdate=u:l.next=u,g.lastBaseUpdate=d))}if(i!==null){var p=s.baseState;o=0,g=u=d=null,l=i;do{var w=l.lane,N=l.eventTime;if((a&w)===w){g!==null&&(g=g.next={eventTime:N,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var c=e,k=l;switch(w=t,N=r,k.tag){case 1:if(c=k.payload,typeof c=="function"){p=c.call(N,p,w);break e}p=c;break e;case 3:c.flags=c.flags&-65537|128;case 0:if(c=k.payload,w=typeof c=="function"?c.call(N,p,w):c,w==null)break e;p=Ge({},p,w);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,w=s.effects,w===null?s.effects=[l]:w.push(l))}else N={eventTime:N,lane:w,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(u=g=N,d=p):g=g.next=N,o|=w;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;w=l,l=w.next,w.next=null,s.lastBaseUpdate=w,s.shared.pending=null}}while(!0);if(g===null&&(d=p),s.baseState=d,s.firstBaseUpdate=u,s.lastBaseUpdate=g,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);ar|=o,e.lanes=o,e.memoizedState=p}}function kc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],s=a.callback;if(s!==null){if(a.callback=null,a=r,typeof s!="function")throw Error(oe(191,s));s.call(a)}}}var Ja={},nn=Un(Ja),Ra=Un(Ja),Ma=Un(Ja);function Zn(e){if(e===Ja)throw Error(oe(174));return e}function Ql(e,t){switch(Re(Ma,t),Re(Ra,e),Re(nn,Ja),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:To(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=To(t,e)}Fe(nn),Re(nn,t)}function Vr(){Fe(nn),Fe(Ra),Fe(Ma)}function fh(e){Zn(Ma.current);var t=Zn(nn.current),r=To(t,e.type);t!==r&&(Re(Ra,e),Re(nn,r))}function Xl(e){Ra.current===e&&(Fe(nn),Fe(Ra))}var Ve=Un(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oo=[];function Zl(){for(var e=0;e<oo.length;e++)oo[e]._workInProgressVersionPrimary=null;oo.length=0}var Ds=bn.ReactCurrentDispatcher,lo=bn.ReactCurrentBatchConfig,rr=0,_e=null,qe=null,Qe=null,ni=!1,ga=!1,Ia=0,Kg=0;function rt(){throw Error(oe(321))}function Yl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!zt(e[r],t[r]))return!1;return!0}function Jl(e,t,r,a,s,i){if(rr=i,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=e===null||e.memoizedState===null?Xg:Zg,e=r(a,s),ga){i=0;do{if(ga=!1,Ia=0,25<=i)throw Error(oe(301));i+=1,Qe=qe=null,t.updateQueue=null,Ds.current=Yg,e=r(a,s)}while(ga)}if(Ds.current=ri,t=qe!==null&&qe.next!==null,rr=0,Qe=qe=_e=null,ni=!1,t)throw Error(oe(300));return e}function ed(){var e=Ia!==0;return Ia=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?_e.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Lt(){if(qe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Qe===null?_e.memoizedState:Qe.next;if(t!==null)Qe=t,qe=e;else{if(e===null)throw Error(oe(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Qe===null?_e.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Ba(e,t){return typeof t=="function"?t(e):t}function co(e){var t=Lt(),r=t.queue;if(r===null)throw Error(oe(311));r.lastRenderedReducer=e;var a=qe,s=a.baseQueue,i=r.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}a.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,a=a.baseState;var l=o=null,d=null,u=i;do{var g=u.lane;if((rr&g)===g)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var p={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=p,o=a):d=d.next=p,_e.lanes|=g,ar|=g}u=u.next}while(u!==null&&u!==i);d===null?o=a:d.next=l,zt(a,t.memoizedState)||(ft=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=d,r.lastRenderedState=a}if(e=r.interleaved,e!==null){s=e;do i=s.lane,_e.lanes|=i,ar|=i,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function uo(e){var t=Lt(),r=t.queue;if(r===null)throw Error(oe(311));r.lastRenderedReducer=e;var a=r.dispatch,s=r.pending,i=t.memoizedState;if(s!==null){r.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);zt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,a]}function xh(){}function bh(e,t){var r=_e,a=Lt(),s=t(),i=!zt(a.memoizedState,s);if(i&&(a.memoizedState=s,ft=!0),a=a.queue,td(kh.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||Qe!==null&&Qe.memoizedState.tag&1){if(r.flags|=2048,Fa(9,vh.bind(null,r,a,s,t),void 0,null),Ze===null)throw Error(oe(349));rr&30||yh(r,t,s)}return s}function yh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function vh(e,t,r,a){t.value=r,t.getSnapshot=a,Nh(t)&&Sh(e)}function kh(e,t,r){return r(function(){Nh(t)&&Sh(e)})}function Nh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!zt(e,r)}catch{return!0}}function Sh(e){var t=gn(e,1);t!==null&&Ut(t,e,1,-1)}function Nc(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Qg.bind(null,_e,e),[t.memoizedState,e]}function Fa(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Ch(){return Lt().memoizedState}function Rs(e,t,r,a){var s=Zt();_e.flags|=e,s.memoizedState=Fa(1|t,r,void 0,a===void 0?null:a)}function wi(e,t,r,a){var s=Lt();a=a===void 0?null:a;var i=void 0;if(qe!==null){var o=qe.memoizedState;if(i=o.destroy,a!==null&&Yl(a,o.deps)){s.memoizedState=Fa(t,r,i,a);return}}_e.flags|=e,s.memoizedState=Fa(1|t,r,i,a)}function Sc(e,t){return Rs(8390656,8,e,t)}function td(e,t){return wi(2048,8,e,t)}function wh(e,t){return wi(4,2,e,t)}function jh(e,t){return wi(4,4,e,t)}function Th(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ah(e,t,r){return r=r!=null?r.concat([e]):null,wi(4,4,Th.bind(null,t,e),r)}function nd(){}function Ph(e,t){var r=Lt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Yl(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Eh(e,t){var r=Lt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Yl(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Dh(e,t,r){return rr&21?(zt(r,t)||(r=Fu(),_e.lanes|=r,ar|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=r)}function qg(e,t){var r=Te;Te=r!==0&&4>r?r:4,e(!0);var a=lo.transition;lo.transition={};try{e(!1),t()}finally{Te=r,lo.transition=a}}function Rh(){return Lt().memoizedState}function Wg(e,t,r){var a=Bn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Mh(e))Ih(t,r);else if(r=ph(e,t,r,a),r!==null){var s=ct();Ut(r,e,a,s),Bh(r,t,a)}}function Qg(e,t,r){var a=Bn(e),s={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mh(e))Ih(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(s.hasEagerState=!0,s.eagerState=l,zt(l,o)){var d=t.interleaved;d===null?(s.next=s,ql(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}r=ph(e,t,s,a),r!==null&&(s=ct(),Ut(r,e,a,s),Bh(r,t,a))}}function Mh(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Ih(e,t){ga=ni=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bh(e,t,r){if(r&4194240){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Ml(e,r)}}var ri={readContext:Ft,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Xg={readContext:Ft,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:Sc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Rs(4194308,4,Th.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rs(4,2,e,t)},useMemo:function(e,t){var r=Zt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Zt();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Wg.bind(null,_e,e),[a.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:Nc,useDebugValue:nd,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=Nc(!1),t=e[0];return e=qg.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=_e,s=Zt();if(Oe){if(r===void 0)throw Error(oe(407));r=r()}else{if(r=t(),Ze===null)throw Error(oe(349));rr&30||yh(a,t,r)}s.memoizedState=r;var i={value:r,getSnapshot:t};return s.queue=i,Sc(kh.bind(null,a,i,e),[e]),a.flags|=2048,Fa(9,vh.bind(null,a,i,r,t),void 0,null),r},useId:function(){var e=Zt(),t=Ze.identifierPrefix;if(Oe){var r=un,a=cn;r=(a&~(1<<32-$t(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ia++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Kg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zg={readContext:Ft,useCallback:Ph,useContext:Ft,useEffect:td,useImperativeHandle:Ah,useInsertionEffect:wh,useLayoutEffect:jh,useMemo:Eh,useReducer:co,useRef:Ch,useState:function(){return co(Ba)},useDebugValue:nd,useDeferredValue:function(e){var t=Lt();return Dh(t,qe.memoizedState,e)},useTransition:function(){var e=co(Ba)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:bh,useId:Rh,unstable_isNewReconciler:!1},Yg={readContext:Ft,useCallback:Ph,useContext:Ft,useEffect:td,useImperativeHandle:Ah,useInsertionEffect:wh,useLayoutEffect:jh,useMemo:Eh,useReducer:uo,useRef:Ch,useState:function(){return uo(Ba)},useDebugValue:nd,useDeferredValue:function(e){var t=Lt();return qe===null?t.memoizedState=e:Dh(t,qe.memoizedState,e)},useTransition:function(){var e=uo(Ba)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:bh,useId:Rh,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Wo(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:Ge({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ji={isMounted:function(e){return(e=e._reactInternals)?lr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=ct(),s=Bn(e),i=hn(a,s);i.payload=t,r!=null&&(i.callback=r),t=Mn(e,i,s),t!==null&&(Ut(t,e,s,a),Es(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=ct(),s=Bn(e),i=hn(a,s);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Mn(e,i,s),t!==null&&(Ut(t,e,s,a),Es(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ct(),a=Bn(e),s=hn(r,a);s.tag=2,t!=null&&(s.callback=t),t=Mn(e,s,a),t!==null&&(Ut(t,e,a,r),Es(t,e,a))}};function Cc(e,t,r,a,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!Aa(r,a)||!Aa(s,i):!0}function Fh(e,t,r){var a=!1,s=Vn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ft(i):(s=yt(t)?tr:ot.current,a=t.contextTypes,i=(a=a!=null)?Fr(e,s):Vn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ji,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function wc(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&ji.enqueueReplaceState(t,t.state,null)}function Qo(e,t,r,a){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Wl(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Ft(i):(i=yt(t)?tr:ot.current,s.context=Fr(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Wo(e,t,i,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ji.enqueueReplaceState(s,s.state,null),ei(e,r,s,a),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t){try{var r="",a=t;do r+=jp(a),a=a.return;while(a);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function ho(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Xo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Jg=typeof WeakMap=="function"?WeakMap:Map;function Lh(e,t,r){r=hn(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){si||(si=!0,il=a),Xo(e,t)},r}function Oh(e,t,r){r=hn(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=t.value;r.payload=function(){return a(s)},r.callback=function(){Xo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Xo(e,t),typeof a!="function"&&(In===null?In=new Set([this]):In.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function jc(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Jg;var s=new Set;a.set(t,s)}else s=a.get(t),s===void 0&&(s=new Set,a.set(t,s));s.has(r)||(s.add(r),e=m0.bind(null,e,t,r),t.then(e,e))}function Tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ac(e,t,r,a,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=hn(-1,1),t.tag=2,Mn(r,t,1))),r.lanes|=1),e)}var e0=bn.ReactCurrentOwner,ft=!1;function lt(e,t,r,a){t.child=e===null?mh(t,null,r,a):Or(t,e.child,r,a)}function Pc(e,t,r,a,s){r=r.render;var i=t.ref;return Dr(t,s),a=Jl(e,t,r,a,i,s),r=ed(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,fn(e,t,s)):(Oe&&r&&Gl(t),t.flags|=1,lt(e,t,a,s),t.child)}function Ec(e,t,r,a,s){if(e===null){var i=r.type;return typeof i=="function"&&!cd(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Vh(e,t,i,a,s)):(e=Fs(r.type,null,a,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Aa,r(o,a)&&e.ref===t.ref)return fn(e,t,s)}return t.flags|=1,e=Fn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Vh(e,t,r,a,s){if(e!==null){var i=e.memoizedProps;if(Aa(i,a)&&e.ref===t.ref)if(ft=!1,t.pendingProps=a=i,(e.lanes&s)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,fn(e,t,s)}return Zo(e,t,r,a,s)}function _h(e,t,r){var a=t.pendingProps,s=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(wr,Nt),Nt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(wr,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:r,Re(wr,Nt),Nt|=a}else i!==null?(a=i.baseLanes|r,t.memoizedState=null):a=r,Re(wr,Nt),Nt|=a;return lt(e,t,s,r),t.child}function Gh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Zo(e,t,r,a,s){var i=yt(r)?tr:ot.current;return i=Fr(t,i),Dr(t,s),r=Jl(e,t,r,a,i,s),a=ed(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,fn(e,t,s)):(Oe&&a&&Gl(t),t.flags|=1,lt(e,t,r,s),t.child)}function Dc(e,t,r,a,s){if(yt(r)){var i=!0;Qs(t)}else i=!1;if(Dr(t,s),t.stateNode===null)Ms(e,t),Fh(t,r,a),Qo(t,r,a,s),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var d=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=yt(r)?tr:ot.current,u=Fr(t,u));var g=r.getDerivedStateFromProps,p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||d!==u)&&wc(t,o,a,u),Cn=!1;var w=t.memoizedState;o.state=w,ei(t,a,o,s),d=t.memoizedState,l!==a||w!==d||bt.current||Cn?(typeof g=="function"&&(Wo(t,r,g,a),d=t.memoizedState),(l=Cn||Cc(t,r,l,a,w,d,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),o.props=a,o.state=d,o.context=u,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,gh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:_t(t.type,l),o.props=u,p=t.pendingProps,w=o.context,d=r.contextType,typeof d=="object"&&d!==null?d=Ft(d):(d=yt(r)?tr:ot.current,d=Fr(t,d));var N=r.getDerivedStateFromProps;(g=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||w!==d)&&wc(t,o,a,d),Cn=!1,w=t.memoizedState,o.state=w,ei(t,a,o,s);var c=t.memoizedState;l!==p||w!==c||bt.current||Cn?(typeof N=="function"&&(Wo(t,r,N,a),c=t.memoizedState),(u=Cn||Cc(t,r,u,a,w,c,d)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,c,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,c,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=c),o.props=a,o.state=c,o.context=d,a=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),a=!1)}return Yo(e,t,r,a,i,s)}function Yo(e,t,r,a,s,i){Gh(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return s&&fc(t,r,!1),fn(e,t,i);a=t.stateNode,e0.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=Or(t,e.child,null,i),t.child=Or(t,null,l,i)):lt(e,t,l,i),t.memoizedState=a.state,s&&fc(t,r,!0),t.child}function Hh(e){var t=e.stateNode;t.pendingContext?gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gc(e,t.context,!1),Ql(e,t.containerInfo)}function Rc(e,t,r,a,s){return Lr(),$l(s),t.flags|=256,lt(e,t,r,a),t.child}var Jo={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function $h(e,t,r){var a=t.pendingProps,s=Ve.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Re(Ve,s&1),e===null)return Ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,i?(a=t.mode,i=t.child,o={mode:"hidden",children:o},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Pi(o,a,0,null),e=er(e,a,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=el(r),t.memoizedState=Jo,e):rd(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return t0(e,t,o,a,l,s,r);if(i){i=a.fallback,o=t.mode,s=e.child,l=s.sibling;var d={mode:"hidden",children:a.children};return!(o&1)&&t.child!==s?(a=t.child,a.childLanes=0,a.pendingProps=d,t.deletions=null):(a=Fn(s,d),a.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Fn(l,i):(i=er(i,o,r,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,o=e.child.memoizedState,o=o===null?el(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=Jo,a}return i=e.child,e=i.sibling,a=Fn(i,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function rd(e,t){return t=Pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fs(e,t,r,a){return a!==null&&$l(a),Or(t,e.child,null,r),e=rd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function t0(e,t,r,a,s,i,o){if(r)return t.flags&256?(t.flags&=-257,a=ho(Error(oe(422))),fs(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,s=t.mode,a=Pi({mode:"visible",children:a.children},s,0,null),i=er(i,s,o,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,t.mode&1&&Or(t,e.child,null,o),t.child.memoizedState=el(o),t.memoizedState=Jo,i);if(!(t.mode&1))return fs(e,t,o,null);if(s.data==="$!"){if(a=s.nextSibling&&s.nextSibling.dataset,a)var l=a.dgst;return a=l,i=Error(oe(419)),a=ho(i,a,void 0),fs(e,t,o,a)}if(l=(o&e.childLanes)!==0,ft||l){if(a=Ze,a!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(a.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,gn(e,s),Ut(a,e,s,-1))}return dd(),a=ho(Error(oe(421))),fs(e,t,o,a)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=p0.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,St=Rn(s.nextSibling),Ct=t,Oe=!0,Ht=null,e!==null&&(At[Pt++]=cn,At[Pt++]=un,At[Pt++]=nr,cn=e.id,un=e.overflow,nr=t),t=rd(t,a.children),t.flags|=4096,t)}function Mc(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),qo(e.return,t,r)}function mo(e,t,r,a,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=r,i.tailMode=s)}function Uh(e,t,r){var a=t.pendingProps,s=a.revealOrder,i=a.tail;if(lt(e,t,a.children,r),a=Ve.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mc(e,r,t);else if(e.tag===19)Mc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Re(Ve,a),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&ti(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),mo(t,!1,s,r,i);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ti(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}mo(t,!0,r,null,i);break;case"together":mo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(oe(153));if(t.child!==null){for(e=t.child,r=Fn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Fn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function n0(e,t,r){switch(t.tag){case 3:Hh(t),Lr();break;case 5:fh(t);break;case 1:yt(t.type)&&Qs(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,s=t.memoizedProps.value;Re(Ys,a._currentValue),a._currentValue=s;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Re(Ve,Ve.current&1),t.flags|=128,null):r&t.child.childLanes?$h(e,t,r):(Re(Ve,Ve.current&1),e=fn(e,t,r),e!==null?e.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(a=(r&t.childLanes)!==0,e.flags&128){if(a)return Uh(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Re(Ve,Ve.current),a)break;return null;case 22:case 23:return t.lanes=0,_h(e,t,r)}return fn(e,t,r)}var zh,tl,Kh,qh;zh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};tl=function(){};Kh=function(e,t,r,a){var s=e.memoizedProps;if(s!==a){e=t.stateNode,Zn(nn.current);var i=null;switch(r){case"input":s=So(e,s),a=So(e,a),i=[];break;case"select":s=Ge({},s,{value:void 0}),a=Ge({},a,{value:void 0}),i=[];break;case"textarea":s=jo(e,s),a=jo(e,a),i=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=qs)}Ao(r,a);var o;r=null;for(u in s)if(!a.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ka.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in a){var d=a[u];if(l=s!=null?s[u]:void 0,a.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in d)d.hasOwnProperty(o)&&l[o]!==d[o]&&(r||(r={}),r[o]=d[o])}else r||(i||(i=[]),i.push(u,r)),r=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(i=i||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ka.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&Ie("scroll",e),i||l===d||(i=[])):(i=i||[]).push(u,d))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};qh=function(e,t,r,a){r!==a&&(t.flags|=4)};function na(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,a|=s.subtreeFlags&14680064,a|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function r0(e,t,r){var a=t.pendingProps;switch(Hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return yt(t.type)&&Ws(),at(t),null;case 3:return a=t.stateNode,Vr(),Fe(bt),Fe(ot),Zl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(dl(Ht),Ht=null))),tl(e,t),at(t),null;case 5:Xl(t);var s=Zn(Ma.current);if(r=t.type,e!==null&&t.stateNode!=null)Kh(e,t,r,a,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(oe(166));return at(t),null}if(e=Zn(nn.current),ps(t)){a=t.stateNode,r=t.type;var i=t.memoizedProps;switch(a[Jt]=t,a[Da]=i,e=(t.mode&1)!==0,r){case"dialog":Ie("cancel",a),Ie("close",a);break;case"iframe":case"object":case"embed":Ie("load",a);break;case"video":case"audio":for(s=0;s<da.length;s++)Ie(da[s],a);break;case"source":Ie("error",a);break;case"img":case"image":case"link":Ie("error",a),Ie("load",a);break;case"details":Ie("toggle",a);break;case"input":Hd(a,i),Ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},Ie("invalid",a);break;case"textarea":Ud(a,i),Ie("invalid",a)}Ao(r,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?a.textContent!==l&&(i.suppressHydrationWarning!==!0&&ms(a.textContent,l,e),s=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ms(a.textContent,l,e),s=["children",""+l]):ka.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",a)}switch(r){case"input":ss(a),$d(a,i,!0);break;case"textarea":ss(a),zd(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=qs)}a=s,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ku(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(r,{is:a.is}):(e=o.createElement(r),r==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,r),e[Jt]=t,e[Da]=a,zh(e,t,!1,!1),t.stateNode=e;e:{switch(o=Po(r,a),r){case"dialog":Ie("cancel",e),Ie("close",e),s=a;break;case"iframe":case"object":case"embed":Ie("load",e),s=a;break;case"video":case"audio":for(s=0;s<da.length;s++)Ie(da[s],e);s=a;break;case"source":Ie("error",e),s=a;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),s=a;break;case"details":Ie("toggle",e),s=a;break;case"input":Hd(e,a),s=So(e,a),Ie("invalid",e);break;case"option":s=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},s=Ge({},a,{value:void 0}),Ie("invalid",e);break;case"textarea":Ud(e,a),s=jo(e,a),Ie("invalid",e);break;default:s=a}Ao(r,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var d=l[i];i==="style"?Cu(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Nu(e,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Na(e,d):typeof d=="number"&&Na(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ka.hasOwnProperty(i)?d!=null&&i==="onScroll"&&Ie("scroll",e):d!=null&&Tl(e,i,d,o))}switch(r){case"input":ss(e),$d(e,a,!1);break;case"textarea":ss(e),zd(e);break;case"option":a.value!=null&&e.setAttribute("value",""+On(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Tr(e,!!a.multiple,i,!1):a.defaultValue!=null&&Tr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=qs)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)qh(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(oe(166));if(r=Zn(Ma.current),Zn(nn.current),ps(t)){if(a=t.stateNode,r=t.memoizedProps,a[Jt]=t,(i=a.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:ms(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ms(a.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Jt]=t,t.stateNode=a}return at(t),null;case 13:if(Fe(Ve),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&St!==null&&t.mode&1&&!(t.flags&128))uh(),Lr(),t.flags|=98560,i=!1;else if(i=ps(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(oe(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(oe(317));i[Jt]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),i=!1}else Ht!==null&&(dl(Ht),Ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Ve.current&1?We===0&&(We=3):dd())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return Vr(),tl(e,t),e===null&&Pa(t.stateNode.containerInfo),at(t),null;case 10:return Kl(t.type._context),at(t),null;case 17:return yt(t.type)&&Ws(),at(t),null;case 19:if(Fe(Ve),i=t.memoizedState,i===null)return at(t),null;if(a=(t.flags&128)!==0,o=i.rendering,o===null)if(a)na(i,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ti(e),o!==null){for(t.flags|=128,na(i,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)i=r,e=a,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Re(Ve,Ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ue()>Gr&&(t.flags|=128,a=!0,na(i,!1),t.lanes=4194304)}else{if(!a)if(e=ti(o),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),na(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Oe)return at(t),null}else 2*Ue()-i.renderingStartTime>Gr&&r!==1073741824&&(t.flags|=128,a=!0,na(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ue(),t.sibling=null,r=Ve.current,Re(Ve,a?r&1|2:r&1),t):(at(t),null);case 22:case 23:return ld(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Nt&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(oe(156,t.tag))}function a0(e,t){switch(Hl(t),t.tag){case 1:return yt(t.type)&&Ws(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),Fe(bt),Fe(ot),Zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xl(t),null;case 13:if(Fe(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(oe(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Ve),null;case 4:return Vr(),null;case 10:return Kl(t.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var xs=!1,st=!1,s0=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Cr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){He(e,t,a)}else r.current=null}function nl(e,t,r){try{r()}catch(a){He(e,t,a)}}var Ic=!1;function i0(e,t){if(Vo=Us,e=Yu(),_l(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var s=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,d=-1,u=0,g=0,p=e,w=null;t:for(;;){for(var N;p!==r||s!==0&&p.nodeType!==3||(l=o+s),p!==i||a!==0&&p.nodeType!==3||(d=o+a),p.nodeType===3&&(o+=p.nodeValue.length),(N=p.firstChild)!==null;)w=p,p=N;for(;;){if(p===e)break t;if(w===r&&++u===s&&(l=o),w===i&&++g===a&&(d=o),(N=p.nextSibling)!==null)break;p=w,w=p.parentNode}p=N}r=l===-1||d===-1?null:{start:l,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(_o={focusedElem:e,selectionRange:r},Us=!1,ge=t;ge!==null;)if(t=ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ge=e;else for(;ge!==null;){t=ge;try{var c=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(c!==null){var k=c.memoizedProps,C=c.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?k:_t(t.type,k),C);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(P){He(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,ge=e;break}ge=t.return}return c=Ic,Ic=!1,c}function fa(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&nl(t,r,i)}s=s.next}while(s!==a)}}function Ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function rl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Wh(e){var t=e.alternate;t!==null&&(e.alternate=null,Wh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[Da],delete t[$o],delete t[Hg],delete t[$g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qh(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=qs));else if(a!==4&&(e=e.child,e!==null))for(al(e,t,r),e=e.sibling;e!==null;)al(e,t,r),e=e.sibling}function sl(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(sl(e,t,r),e=e.sibling;e!==null;)sl(e,t,r),e=e.sibling}var et=null,Gt=!1;function vn(e,t,r){for(r=r.child;r!==null;)Xh(e,t,r),r=r.sibling}function Xh(e,t,r){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(yi,r)}catch{}switch(r.tag){case 5:st||Cr(r,t);case 6:var a=et,s=Gt;et=null,vn(e,t,r),et=a,Gt=s,et!==null&&(Gt?(e=et,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):et.removeChild(r.stateNode));break;case 18:et!==null&&(Gt?(e=et,r=r.stateNode,e.nodeType===8?so(e.parentNode,r):e.nodeType===1&&so(e,r),ja(e)):so(et,r.stateNode));break;case 4:a=et,s=Gt,et=r.stateNode.containerInfo,Gt=!0,vn(e,t,r),et=a,Gt=s;break;case 0:case 11:case 14:case 15:if(!st&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){s=a=a.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&nl(r,t,o),s=s.next}while(s!==a)}vn(e,t,r);break;case 1:if(!st&&(Cr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(l){He(r,t,l)}vn(e,t,r);break;case 21:vn(e,t,r);break;case 22:r.mode&1?(st=(a=st)||r.memoizedState!==null,vn(e,t,r),st=a):vn(e,t,r);break;default:vn(e,t,r)}}function Fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new s0),t.forEach(function(a){var s=g0.bind(null,e,a);r.has(a)||(r.add(a),a.then(s,s))})}}function Vt(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var s=r[a];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,Gt=!1;break e;case 3:et=l.stateNode.containerInfo,Gt=!0;break e;case 4:et=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(et===null)throw Error(oe(160));Xh(i,o,s),et=null,Gt=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(u){He(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zh(t,e),t=t.sibling}function Zh(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),Qt(e),a&4){try{fa(3,e,e.return),Ti(3,e)}catch(k){He(e,e.return,k)}try{fa(5,e,e.return)}catch(k){He(e,e.return,k)}}break;case 1:Vt(t,e),Qt(e),a&512&&r!==null&&Cr(r,r.return);break;case 5:if(Vt(t,e),Qt(e),a&512&&r!==null&&Cr(r,r.return),e.flags&32){var s=e.stateNode;try{Na(s,"")}catch(k){He(e,e.return,k)}}if(a&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&yu(s,i),Po(l,o);var u=Po(l,i);for(o=0;o<d.length;o+=2){var g=d[o],p=d[o+1];g==="style"?Cu(s,p):g==="dangerouslySetInnerHTML"?Nu(s,p):g==="children"?Na(s,p):Tl(s,g,p,u)}switch(l){case"input":Co(s,i);break;case"textarea":vu(s,i);break;case"select":var w=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?Tr(s,!!i.multiple,N,!1):w!==!!i.multiple&&(i.defaultValue!=null?Tr(s,!!i.multiple,i.defaultValue,!0):Tr(s,!!i.multiple,i.multiple?[]:"",!1))}s[Da]=i}catch(k){He(e,e.return,k)}}break;case 6:if(Vt(t,e),Qt(e),a&4){if(e.stateNode===null)throw Error(oe(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(k){He(e,e.return,k)}}break;case 3:if(Vt(t,e),Qt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{ja(t.containerInfo)}catch(k){He(e,e.return,k)}break;case 4:Vt(t,e),Qt(e);break;case 13:Vt(t,e),Qt(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(id=Ue())),a&4&&Fc(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(st=(u=st)||g,Vt(t,e),st=u):Vt(t,e),Qt(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(ge=e,g=e.child;g!==null;){for(p=ge=g;ge!==null;){switch(w=ge,N=w.child,w.tag){case 0:case 11:case 14:case 15:fa(4,w,w.return);break;case 1:Cr(w,w.return);var c=w.stateNode;if(typeof c.componentWillUnmount=="function"){a=w,r=w.return;try{t=a,c.props=t.memoizedProps,c.state=t.memoizedState,c.componentWillUnmount()}catch(k){He(a,r,k)}}break;case 5:Cr(w,w.return);break;case 22:if(w.memoizedState!==null){Oc(p);continue}}N!==null?(N.return=w,ge=N):Oc(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{s=p.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,d=p.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Su("display",o))}catch(k){He(e,e.return,k)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(k){He(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vt(t,e),Qt(e),a&4&&Fc(e);break;case 21:break;default:Vt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Qh(r)){var a=r;break e}r=r.return}throw Error(oe(160))}switch(a.tag){case 5:var s=a.stateNode;a.flags&32&&(Na(s,""),a.flags&=-33);var i=Bc(e);sl(e,i,s);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Bc(e);al(e,l,o);break;default:throw Error(oe(161))}}catch(d){He(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function o0(e,t,r){ge=e,Yh(e)}function Yh(e,t,r){for(var a=(e.mode&1)!==0;ge!==null;){var s=ge,i=s.child;if(s.tag===22&&a){var o=s.memoizedState!==null||xs;if(!o){var l=s.alternate,d=l!==null&&l.memoizedState!==null||st;l=xs;var u=st;if(xs=o,(st=d)&&!u)for(ge=s;ge!==null;)o=ge,d=o.child,o.tag===22&&o.memoizedState!==null?Vc(s):d!==null?(d.return=o,ge=d):Vc(s);for(;i!==null;)ge=i,Yh(i),i=i.sibling;ge=s,xs=l,st=u}Lc(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,ge=i):Lc(e)}}function Lc(e){for(;ge!==null;){var t=ge;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||Ti(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!st)if(r===null)a.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:_t(t.type,r.memoizedProps);a.componentDidUpdate(s,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&kc(t,i,a);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}kc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&ja(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}st||t.flags&512&&rl(t)}catch(w){He(t,t.return,w)}}if(t===e){ge=null;break}if(r=t.sibling,r!==null){r.return=t.return,ge=r;break}ge=t.return}}function Oc(e){for(;ge!==null;){var t=ge;if(t===e){ge=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ge=r;break}ge=t.return}}function Vc(e){for(;ge!==null;){var t=ge;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ti(4,t)}catch(d){He(t,r,d)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var s=t.return;try{a.componentDidMount()}catch(d){He(t,s,d)}}var i=t.return;try{rl(t)}catch(d){He(t,i,d)}break;case 5:var o=t.return;try{rl(t)}catch(d){He(t,o,d)}}}catch(d){He(t,t.return,d)}if(t===e){ge=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ge=l;break}ge=t.return}}var l0=Math.ceil,ai=bn.ReactCurrentDispatcher,ad=bn.ReactCurrentOwner,Bt=bn.ReactCurrentBatchConfig,je=0,Ze=null,Ke=null,tt=0,Nt=0,wr=Un(0),We=0,La=null,ar=0,Ai=0,sd=0,xa=null,gt=null,id=0,Gr=1/0,ln=null,si=!1,il=null,In=null,bs=!1,An=null,ii=0,ba=0,ol=null,Is=-1,Bs=0;function ct(){return je&6?Ue():Is!==-1?Is:Is=Ue()}function Bn(e){return e.mode&1?je&2&&tt!==0?tt&-tt:zg.transition!==null?(Bs===0&&(Bs=Fu()),Bs):(e=Te,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function Ut(e,t,r,a){if(50<ba)throw ba=0,ol=null,Error(oe(185));Xa(e,r,a),(!(je&2)||e!==Ze)&&(e===Ze&&(!(je&2)&&(Ai|=r),We===4&&jn(e,tt)),vt(e,a),r===1&&je===0&&!(t.mode&1)&&(Gr=Ue()+500,Ci&&zn()))}function vt(e,t){var r=e.callbackNode;zp(e,t);var a=$s(e,e===Ze?tt:0);if(a===0)r!==null&&Wd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Wd(r),t===1)e.tag===0?Ug(_c.bind(null,e)):lh(_c.bind(null,e)),_g(function(){!(je&6)&&zn()}),r=null;else{switch(Lu(a)){case 1:r=Rl;break;case 4:r=Iu;break;case 16:r=Hs;break;case 536870912:r=Bu;break;default:r=Hs}r=im(r,Jh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Jh(e,t){if(Is=-1,Bs=0,je&6)throw Error(oe(327));var r=e.callbackNode;if(Rr()&&e.callbackNode!==r)return null;var a=$s(e,e===Ze?tt:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=oi(e,a);else{t=a;var s=je;je|=2;var i=tm();(Ze!==e||tt!==t)&&(ln=null,Gr=Ue()+500,Jn(e,t));do try{u0();break}catch(l){em(e,l)}while(!0);zl(),ai.current=i,je=s,Ke!==null?t=0:(Ze=null,tt=0,t=We)}if(t!==0){if(t===2&&(s=Io(e),s!==0&&(a=s,t=ll(e,s))),t===1)throw r=La,Jn(e,0),jn(e,a),vt(e,Ue()),r;if(t===6)jn(e,a);else{if(s=e.current.alternate,!(a&30)&&!d0(s)&&(t=oi(e,a),t===2&&(i=Io(e),i!==0&&(a=i,t=ll(e,i))),t===1))throw r=La,Jn(e,0),jn(e,a),vt(e,Ue()),r;switch(e.finishedWork=s,e.finishedLanes=a,t){case 0:case 1:throw Error(oe(345));case 2:Wn(e,gt,ln);break;case 3:if(jn(e,a),(a&130023424)===a&&(t=id+500-Ue(),10<t)){if($s(e,0)!==0)break;if(s=e.suspendedLanes,(s&a)!==a){ct(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ho(Wn.bind(null,e,gt,ln),t);break}Wn(e,gt,ln);break;case 4:if(jn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,s=-1;0<a;){var o=31-$t(a);i=1<<o,o=t[o],o>s&&(s=o),a&=~i}if(a=s,a=Ue()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*l0(a/1960))-a,10<a){e.timeoutHandle=Ho(Wn.bind(null,e,gt,ln),a);break}Wn(e,gt,ln);break;case 5:Wn(e,gt,ln);break;default:throw Error(oe(329))}}}return vt(e,Ue()),e.callbackNode===r?Jh.bind(null,e):null}function ll(e,t){var r=xa;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=oi(e,t),e!==2&&(t=gt,gt=r,t!==null&&dl(t)),e}function dl(e){gt===null?gt=e:gt.push.apply(gt,e)}function d0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var s=r[a],i=s.getSnapshot;s=s.value;try{if(!zt(i(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~sd,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-$t(t),a=1<<r;e[r]=-1,t&=~a}}function _c(e){if(je&6)throw Error(oe(327));Rr();var t=$s(e,0);if(!(t&1))return vt(e,Ue()),null;var r=oi(e,t);if(e.tag!==0&&r===2){var a=Io(e);a!==0&&(t=a,r=ll(e,a))}if(r===1)throw r=La,Jn(e,0),jn(e,t),vt(e,Ue()),r;if(r===6)throw Error(oe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,gt,ln),vt(e,Ue()),null}function od(e,t){var r=je;je|=1;try{return e(t)}finally{je=r,je===0&&(Gr=Ue()+500,Ci&&zn())}}function sr(e){An!==null&&An.tag===0&&!(je&6)&&Rr();var t=je;je|=1;var r=Bt.transition,a=Te;try{if(Bt.transition=null,Te=1,e)return e()}finally{Te=a,Bt.transition=r,je=t,!(je&6)&&zn()}}function ld(){Nt=wr.current,Fe(wr)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Vg(r)),Ke!==null)for(r=Ke.return;r!==null;){var a=r;switch(Hl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ws();break;case 3:Vr(),Fe(bt),Fe(ot),Zl();break;case 5:Xl(a);break;case 4:Vr();break;case 13:Fe(Ve);break;case 19:Fe(Ve);break;case 10:Kl(a.type._context);break;case 22:case 23:ld()}r=r.return}if(Ze=e,Ke=e=Fn(e.current,null),tt=Nt=t,We=0,La=null,sd=Ai=ar=0,gt=xa=null,Xn!==null){for(t=0;t<Xn.length;t++)if(r=Xn[t],a=r.interleaved,a!==null){r.interleaved=null;var s=a.next,i=r.pending;if(i!==null){var o=i.next;i.next=s,a.next=o}r.pending=a}Xn=null}return e}function em(e,t){do{var r=Ke;try{if(zl(),Ds.current=ri,ni){for(var a=_e.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}ni=!1}if(rr=0,Qe=qe=_e=null,ga=!1,Ia=0,ad.current=null,r===null||r.return===null){We=1,La=t,Ke=null;break}e:{var i=e,o=r.return,l=r,d=t;if(t=tt,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,g=l,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var w=g.alternate;w?(g.updateQueue=w.updateQueue,g.memoizedState=w.memoizedState,g.lanes=w.lanes):(g.updateQueue=null,g.memoizedState=null)}var N=Tc(o);if(N!==null){N.flags&=-257,Ac(N,o,l,i,t),N.mode&1&&jc(i,u,t),t=N,d=u;var c=t.updateQueue;if(c===null){var k=new Set;k.add(d),t.updateQueue=k}else c.add(d);break e}else{if(!(t&1)){jc(i,u,t),dd();break e}d=Error(oe(426))}}else if(Oe&&l.mode&1){var C=Tc(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ac(C,o,l,i,t),$l(_r(d,l));break e}}i=d=_r(d,l),We!==4&&(We=2),xa===null?xa=[i]:xa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Lh(i,d,t);vc(i,h);break e;case 1:l=d;var m=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(In===null||!In.has(S)))){i.flags|=65536,t&=-t,i.lanes|=t;var P=Oh(i,l,t);vc(i,P);break e}}i=i.return}while(i!==null)}rm(r)}catch(O){t=O,Ke===r&&r!==null&&(Ke=r=r.return);continue}break}while(!0)}function tm(){var e=ai.current;return ai.current=ri,e===null?ri:e}function dd(){(We===0||We===3||We===2)&&(We=4),Ze===null||!(ar&268435455)&&!(Ai&268435455)||jn(Ze,tt)}function oi(e,t){var r=je;je|=2;var a=tm();(Ze!==e||tt!==t)&&(ln=null,Jn(e,t));do try{c0();break}catch(s){em(e,s)}while(!0);if(zl(),je=r,ai.current=a,Ke!==null)throw Error(oe(261));return Ze=null,tt=0,We}function c0(){for(;Ke!==null;)nm(Ke)}function u0(){for(;Ke!==null&&!Fp();)nm(Ke)}function nm(e){var t=sm(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?rm(e):Ke=t,ad.current=null}function rm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=a0(r,t),r!==null){r.flags&=32767,Ke=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ke=null;return}}else if(r=r0(r,t,Nt),r!==null){Ke=r;return}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);We===0&&(We=5)}function Wn(e,t,r){var a=Te,s=Bt.transition;try{Bt.transition=null,Te=1,h0(e,t,r,a)}finally{Bt.transition=s,Te=a}return null}function h0(e,t,r,a){do Rr();while(An!==null);if(je&6)throw Error(oe(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(oe(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Kp(e,i),e===Ze&&(Ke=Ze=null,tt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||bs||(bs=!0,im(Hs,function(){return Rr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Bt.transition,Bt.transition=null;var o=Te;Te=1;var l=je;je|=4,ad.current=null,i0(e,r),Zh(r,e),Rg(_o),Us=!!Vo,_o=Vo=null,e.current=r,o0(r),Lp(),je=l,Te=o,Bt.transition=i}else e.current=r;if(bs&&(bs=!1,An=e,ii=s),i=e.pendingLanes,i===0&&(In=null),_p(r.stateNode),vt(e,Ue()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],a(s.value,{componentStack:s.stack,digest:s.digest});if(si)throw si=!1,e=il,il=null,e;return ii&1&&e.tag!==0&&Rr(),i=e.pendingLanes,i&1?e===ol?ba++:(ba=0,ol=e):ba=0,zn(),null}function Rr(){if(An!==null){var e=Lu(ii),t=Bt.transition,r=Te;try{if(Bt.transition=null,Te=16>e?16:e,An===null)var a=!1;else{if(e=An,An=null,ii=0,je&6)throw Error(oe(331));var s=je;for(je|=4,ge=e.current;ge!==null;){var i=ge,o=i.child;if(ge.flags&16){var l=i.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(ge=u;ge!==null;){var g=ge;switch(g.tag){case 0:case 11:case 15:fa(8,g,i)}var p=g.child;if(p!==null)p.return=g,ge=p;else for(;ge!==null;){g=ge;var w=g.sibling,N=g.return;if(Wh(g),g===u){ge=null;break}if(w!==null){w.return=N,ge=w;break}ge=N}}}var c=i.alternate;if(c!==null){var k=c.child;if(k!==null){c.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}ge=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,ge=o;else e:for(;ge!==null;){if(i=ge,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fa(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,ge=h;break e}ge=i.return}}var m=e.current;for(ge=m;ge!==null;){o=ge;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,ge=S;else e:for(o=m;ge!==null;){if(l=ge,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ti(9,l)}}catch(O){He(l,l.return,O)}if(l===o){ge=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,ge=P;break e}ge=l.return}}if(je=s,zn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(yi,e)}catch{}a=!0}return a}finally{Te=r,Bt.transition=t}}return!1}function Gc(e,t,r){t=_r(r,t),t=Lh(e,t,1),e=Mn(e,t,1),t=ct(),e!==null&&(Xa(e,1,t),vt(e,t))}function He(e,t,r){if(e.tag===3)Gc(e,e,r);else for(;t!==null;){if(t.tag===3){Gc(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(In===null||!In.has(a))){e=_r(r,e),e=Oh(t,e,1),t=Mn(t,e,1),e=ct(),t!==null&&(Xa(t,1,e),vt(t,e));break}}t=t.return}}function m0(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&r,Ze===e&&(tt&r)===r&&(We===4||We===3&&(tt&130023424)===tt&&500>Ue()-id?Jn(e,0):sd|=r),vt(e,t)}function am(e,t){t===0&&(e.mode&1?(t=ls,ls<<=1,!(ls&130023424)&&(ls=4194304)):t=1);var r=ct();e=gn(e,t),e!==null&&(Xa(e,t,r),vt(e,r))}function p0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),am(e,r)}function g0(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(oe(314))}a!==null&&a.delete(t),am(e,r)}var sm;sm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)ft=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ft=!1,n0(e,t,r);ft=!!(e.flags&131072)}else ft=!1,Oe&&t.flags&1048576&&dh(t,Zs,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Ms(e,t),e=t.pendingProps;var s=Fr(t,ot.current);Dr(t,r),s=Jl(null,t,a,e,s,r);var i=ed();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(a)?(i=!0,Qs(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Wl(t),s.updater=ji,t.stateNode=s,s._reactInternals=t,Qo(t,a,e,r),t=Yo(null,t,a,!0,i,r)):(t.tag=0,Oe&&i&&Gl(t),lt(null,t,s,r),t=t.child),t;case 16:a=t.elementType;e:{switch(Ms(e,t),e=t.pendingProps,s=a._init,a=s(a._payload),t.type=a,s=t.tag=x0(a),e=_t(a,e),s){case 0:t=Zo(null,t,a,e,r);break e;case 1:t=Dc(null,t,a,e,r);break e;case 11:t=Pc(null,t,a,e,r);break e;case 14:t=Ec(null,t,a,_t(a.type,e),r);break e}throw Error(oe(306,a,""))}return t;case 0:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:_t(a,s),Zo(e,t,a,s,r);case 1:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:_t(a,s),Dc(e,t,a,s,r);case 3:e:{if(Hh(t),e===null)throw Error(oe(387));a=t.pendingProps,i=t.memoizedState,s=i.element,gh(e,t),ei(t,a,null,r);var o=t.memoizedState;if(a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=_r(Error(oe(423)),t),t=Rc(e,t,a,r,s);break e}else if(a!==s){s=_r(Error(oe(424)),t),t=Rc(e,t,a,r,s);break e}else for(St=Rn(t.stateNode.containerInfo.firstChild),Ct=t,Oe=!0,Ht=null,r=mh(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lr(),a===s){t=fn(e,t,r);break e}lt(e,t,a,r)}t=t.child}return t;case 5:return fh(t),e===null&&Ko(t),a=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,o=s.children,Go(a,s)?o=null:i!==null&&Go(a,i)&&(t.flags|=32),Gh(e,t),lt(e,t,o,r),t.child;case 6:return e===null&&Ko(t),null;case 13:return $h(e,t,r);case 4:return Ql(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Or(t,null,a,r):lt(e,t,a,r),t.child;case 11:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:_t(a,s),Pc(e,t,a,s,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,s=t.pendingProps,i=t.memoizedProps,o=s.value,Re(Ys,a._currentValue),a._currentValue=o,i!==null)if(zt(i.value,o)){if(i.children===s.children&&!bt.current){t=fn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(i.tag===1){d=hn(-1,r&-r),d.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?d.next=d:(d.next=g.next,g.next=d),u.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),qo(i.return,r,t),l.lanes|=r;break}d=d.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(oe(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),qo(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}lt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,a=t.pendingProps.children,Dr(t,r),s=Ft(s),a=a(s),t.flags|=1,lt(e,t,a,r),t.child;case 14:return a=t.type,s=_t(a,t.pendingProps),s=_t(a.type,s),Ec(e,t,a,s,r);case 15:return Vh(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:_t(a,s),Ms(e,t),t.tag=1,yt(a)?(e=!0,Qs(t)):e=!1,Dr(t,r),Fh(t,a,s),Qo(t,a,s,r),Yo(null,t,a,!0,e,r);case 19:return Uh(e,t,r);case 22:return _h(e,t,r)}throw Error(oe(156,t.tag))};function im(e,t){return Mu(e,t)}function f0(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,r,a){return new f0(e,t,r,a)}function cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x0(e){if(typeof e=="function")return cd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pl)return 11;if(e===El)return 14}return 2}function Fn(e,t){var r=e.alternate;return r===null?(r=Rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Fs(e,t,r,a,s,i){var o=2;if(a=e,typeof e=="function")cd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case gr:return er(r.children,s,i,t);case Al:o=8,s|=8;break;case yo:return e=Rt(12,r,t,s|2),e.elementType=yo,e.lanes=i,e;case vo:return e=Rt(13,r,t,s),e.elementType=vo,e.lanes=i,e;case ko:return e=Rt(19,r,t,s),e.elementType=ko,e.lanes=i,e;case fu:return Pi(r,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pu:o=10;break e;case gu:o=9;break e;case Pl:o=11;break e;case El:o=14;break e;case Sn:o=16,a=null;break e}throw Error(oe(130,e==null?e:typeof e,""))}return t=Rt(o,r,t,s),t.elementType=e,t.type=a,t.lanes=i,t}function er(e,t,r,a){return e=Rt(7,e,a,t),e.lanes=r,e}function Pi(e,t,r,a){return e=Rt(22,e,a,t),e.elementType=fu,e.lanes=r,e.stateNode={isHidden:!1},e}function po(e,t,r){return e=Rt(6,e,null,t),e.lanes=r,e}function go(e,t,r){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b0(e,t,r,a,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=a,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ud(e,t,r,a,s,i,o,l,d){return e=new b0(e,t,r,l,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wl(i),e}function y0(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function om(e){if(!e)return Vn;e=e._reactInternals;e:{if(lr(e)!==e||e.tag!==1)throw Error(oe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(oe(171))}if(e.tag===1){var r=e.type;if(yt(r))return oh(e,r,t)}return t}function lm(e,t,r,a,s,i,o,l,d){return e=ud(r,a,!0,e,s,i,o,l,d),e.context=om(null),r=e.current,a=ct(),s=Bn(r),i=hn(a,s),i.callback=t??null,Mn(r,i,s),e.current.lanes=s,Xa(e,s,a),vt(e,a),e}function Ei(e,t,r,a){var s=t.current,i=ct(),o=Bn(s);return r=om(r),t.context===null?t.context=r:t.pendingContext=r,t=hn(i,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Mn(s,t,o),e!==null&&(Ut(e,s,o,i),Es(e,s,o)),o}function li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function hd(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}function v0(){return null}var dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function md(e){this._internalRoot=e}Di.prototype.render=md.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(oe(409));Ei(e,t,null,null)};Di.prototype.unmount=md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){Ei(null,e,null,null)}),t[pn]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=_u();e={blockedOn:null,target:e,priority:t};for(var r=0;r<wn.length&&t!==0&&t<wn[r].priority;r++);wn.splice(r,0,e),r===0&&Hu(e)}};function pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function k0(e,t,r,a,s){if(s){if(typeof a=="function"){var i=a;a=function(){var u=li(o);i.call(u)}}var o=lm(t,a,e,0,null,!1,!1,"",$c);return e._reactRootContainer=o,e[pn]=o.current,Pa(e.nodeType===8?e.parentNode:e),sr(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof a=="function"){var l=a;a=function(){var u=li(d);l.call(u)}}var d=ud(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=d,e[pn]=d.current,Pa(e.nodeType===8?e.parentNode:e),sr(function(){Ei(t,d,r,a)}),d}function Mi(e,t,r,a,s){var i=r._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var d=li(o);l.call(d)}}Ei(t,o,e,s)}else o=k0(r,t,e,s,a);return li(o)}Ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=la(t.pendingLanes);r!==0&&(Ml(t,r|1),vt(t,Ue()),!(je&6)&&(Gr=Ue()+500,zn()))}break;case 13:sr(function(){var a=gn(e,1);if(a!==null){var s=ct();Ut(a,e,1,s)}}),hd(e,1)}};Il=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var r=ct();Ut(t,e,134217728,r)}hd(e,134217728)}};Vu=function(e){if(e.tag===13){var t=Bn(e),r=gn(e,t);if(r!==null){var a=ct();Ut(r,e,t,a)}hd(e,t)}};_u=function(){return Te};Gu=function(e,t){var r=Te;try{return Te=e,t()}finally{Te=r}};Do=function(e,t,r){switch(t){case"input":if(Co(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var s=Si(a);if(!s)throw Error(oe(90));bu(a),Co(a,s)}}}break;case"textarea":vu(e,r);break;case"select":t=r.value,t!=null&&Tr(e,!!r.multiple,t,!1)}};Tu=od;Au=sr;var N0={usingClientEntryPoint:!1,Events:[Ya,yr,Si,wu,ju,od]},ra={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S0={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||v0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{yi=ys.inject(S0),tn=ys}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0;jt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(t))throw Error(oe(200));return y0(e,t,null,r)};jt.createRoot=function(e,t){if(!pd(e))throw Error(oe(299));var r=!1,a="",s=dm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ud(e,1,!1,null,null,r,!1,a,s),e[pn]=t.current,Pa(e.nodeType===8?e.parentNode:e),new md(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(oe(188)):(e=Object.keys(e).join(","),Error(oe(268,e)));return e=Du(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return sr(e)};jt.hydrate=function(e,t,r){if(!Ri(t))throw Error(oe(200));return Mi(null,e,t,!0,r)};jt.hydrateRoot=function(e,t,r){if(!pd(e))throw Error(oe(405));var a=r!=null&&r.hydratedSources||null,s=!1,i="",o=dm;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=lm(t,null,e,1,r??null,s,!1,i,o),e[pn]=t.current,Pa(e),a)for(e=0;e<a.length;e++)r=a[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Di(t)};jt.render=function(e,t,r){if(!Ri(t))throw Error(oe(200));return Mi(null,e,t,!1,r)};jt.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(oe(40));return e._reactRootContainer?(sr(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};jt.unstable_batchedUpdates=od;jt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Ri(r))throw Error(oe(200));if(e==null||e._reactInternals===void 0)throw Error(oe(38));return Mi(e,t,r,!1,a)};jt.version="18.3.1-next-f1338f8080-20240426";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(e){console.error(e)}}cm(),cu.exports=jt;var C0=cu.exports,um,Uc=C0;um=Uc.createRoot,Uc.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hm=(...e)=>e.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=E.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:s="",children:i,iconNode:o,...l},d)=>E.createElement("svg",{ref:d,...j0,width:t,height:t,stroke:e,strokeWidth:a?Number(r)*24/Number(t):r,className:hm("lucide",s),...l},[...o.map(([u,g])=>E.createElement(u,g)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(e,t)=>{const r=E.forwardRef(({className:a,...s},i)=>E.createElement(T0,{ref:i,iconNode:t,className:hm(`lucide-${w0(e)}`,a),...s}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=he("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=he("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=he("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=he("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=he("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=he("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=he("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=he("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=he("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=he("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=he("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=he("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=he("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=he("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=he("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=he("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=he("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=he("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=he("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=he("FlipHorizontal2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=he("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=he("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=he("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=he("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=he("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=he("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=he("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=he("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=he("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=he("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=he("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=he("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=he("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=he("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=he("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=he("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=he("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=he("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=he("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=he("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=he("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=he("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=he("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=he("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=he("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=he("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=he("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=he("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=he("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=he("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=he("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=he("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=he("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=he("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=he("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=he("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=he("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=he("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=he("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=he("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=he("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),it={printerModel:"Creality Khổ Lớn 800×800 (0.4 nozzle)",nozzleMm:.4,layerHeightMm:.2,wallLoops:3,topBottomLayers:4,infillPercent:20,supportEnabled:!0,maxBuildX:800,maxBuildY:800,maxBuildZ:800,defaultShopCommissionPercent:25},va=[{code:"MB",name:"MB Bank (Quân Đội)"},{code:"VCB",name:"Vietcombank"},{code:"TCB",name:"Techcombank"},{code:"BIDV",name:"BIDV"},{code:"ICB",name:"VietinBank"},{code:"ACB",name:"ACB (Á Châu)"},{code:"VPB",name:"VPBank"},{code:"TPB",name:"TPBank"},{code:"STB",name:"Sacombank"},{code:"VIB",name:"VIB"},{code:"MSB",name:"MSB (Hàng Hải)"},{code:"OCB",name:"OCB (Phương Đông)"},{code:"SHB",name:"SHB"},{code:"HDB",name:"HDBank"},{code:"VBA",name:"Agribank"},{code:"LPB",name:"LPBank"},{code:"EIB",name:"Eximbank"},{code:"OTHER",name:"Ngân hàng khác..."}],$e=[{id:"pla",name:"PLA",pricePerGram:800,costPricePerGram:250,baseFee:0,note:"Đẹp, cứng, vỏ hộp & mô hình"},{id:"petg",name:"PETG",pricePerGram:400,costPricePerGram:200,baseFee:0,note:"Chịu lực & chịu nhiệt tốt"},{id:"abs",name:"ABS",pricePerGram:1300,costPricePerGram:300,baseFee:0,note:"Cơ khí chịu nhiệt cao"},{id:"tpu",name:"TPU",pricePerGram:1600,costPricePerGram:450,baseFee:0,note:"Đàn hồi, giảm chấn"},{id:"carbon-cf",name:"Cacbon CF",pricePerGram:3e4,costPricePerGram:1500,baseFee:0,note:"Sợi carbon kỹ thuật siêu cứng"}];function ne(e,t="vi"){return!e||e<=0?t==="vi"?"Liên hệ báo giá":"Contact for Quote":`${e.toLocaleString("vi-VN")} ₫`}const sf={name:"TeeBi & Robot",brandName:"TBX Electrics",logoMonogram:"TBX",logoImageUrl:"",heroImageUrl:"./images/hero-chip-robot.jpg",docCode:"TBX-2026.11",topNotice:{vi:"Giao hàng toàn quốc COD · Kiểm tra & Test mạch 100% trước khi gửi",en:"Nationwide COD Shipping · 100% Load-Tested Before Dispatch"},role:{vi:"Mạch Điều Khiển Động Cơ · Bo Robot STM32 · Động Cơ & Bánh Xe Mecanum",en:"Motor Drivers · STM32 Robot Controllers · Motors & Mecanum Parts"},tagline:{vi:"",en:""},availabilityBadge:{vi:"TBX ELECTRICS · TEEBI & ROBOT",en:"TBX ELECTRICS · TEEBI & ROBOT"},policyBadges:[{vi:"Giao hàng COD toàn quốc",en:"Nationwide COD Shipping"},{vi:"Test tải 100% trước khi gửi",en:"100% Load-Tested Before Dispatch"},{vi:"Kèm sơ đồ chân cắm & tập lệnh",en:"Includes Pinout & Command Docs"},{vi:"Hỗ trợ kỹ thuật trực tiếp Zalo",en:"Direct Zalo Tech Support"}],catalogEyebrow:{vi:"Kho hàng trực tuyến — Sẵn hàng giao ngay",en:"Online Hardware Store — In Stock"},catalogTitle:{vi:"Danh mục sản phẩm trưng bày & đang bán",en:"Featured Boards & Robotics Components"},tabAllLabel:{vi:"Tất cả sản phẩm",en:"All Products"},tabSelfMadeLabel:{vi:"Mạch điều khiển & Module",en:"Control Boards & Modules"},tabCommercialLabel:{vi:"Động cơ & Phụ kiện",en:"Motors & Accessories"},tabProjectLabel:{vi:"Sản phẩm Đồ án & NCKH",en:"Project & Research Kits"},servicesEyebrow:{vi:"Hỗ trợ Đồ án Kỹ thuật · Nghiên cứu Khoa học (NCKH)",en:"Engineering Projects & Academic Research Support"},servicesTitle:{vi:"Nhận Hỗ trợ Đồ án Môn học, Đồ án Tốt nghiệp & Đề tài NCKH",en:"Custom Hardware, Prototypes & Lab Systems for Engineering Projects & Research"},servicesSubtitle:{vi:"Đồng hành cùng sinh viên, học viên cao học và nhóm nghiên cứu: từ thiết kế mạch, lắp mô hình thực tế, đo đạc thực nghiệm lấy số liệu biểu đồ đến bàn giao trọn bộ kèm tài liệu nguyên lý phục vụ bảo vệ.",en:"Supporting students and R&D teams from schematic & prototype assembly to experimental data logging and technical defense documentation."},buyingStepsTitle:{vi:"Quy trình Đặt hàng — Kiểm tra — Bảo hành tại Shop",en:"Store Buying, Testing & Warranty Process"},buyingSteps:[{step:"01",title:{vi:"Chọn sản phẩm vào giỏ",en:"Add Items to Cart"},desc:{vi:"Thêm mạch hoặc phụ kiện vào giỏ và gửi thông tin nhận hàng trong 30 giây.",en:"Add boards or parts and submit delivery info in 30 seconds."}},{step:"02",title:{vi:"Xác nhận & gửi ảnh test mạch",en:"Test Proof Before Dispatch"},desc:{vi:"Shop nạp sẵn firmware, test tải thực tế và gửi ảnh/video qua Zalo trước khi đóng gói.",en:"Every board is pre-flashed and load-tested with proof shared on Zalo."}},{step:"03",title:{vi:"Giao hàng COD toàn quốc",en:"Nationwide COD Delivery"},desc:{vi:"Đóng gói chống tĩnh điện, kèm phiếu sơ đồ chân cắm; nhận hàng kiểm tra rồi thanh toán.",en:"ESD-safe packaging with printed pinout guide and nationwide COD."}},{step:"04",title:{vi:"Hỗ trợ đấu nối 1-1",en:"1-1 Technical Support"},desc:{vi:"Hướng dẫn cấp nguồn, nối động cơ và gửi tập lệnh điều khiển trực tiếp qua Zalo.",en:"Direct wiring assistance and command setup over Zalo."}}],contactEyebrow:{vi:"Báo giá sỉ & Hỗ trợ kỹ thuật",en:"Wholesale & Technical Support"},contactTitle:{vi:"Đặt hàng số lượng, thiết kế mạch hoặc hỗ trợ đấu nối",en:"Bulk Orders, Custom PCB Design & Technical Support"},contactSubtitle:{vi:"Khách hàng đặt số lượng lớn, đặt thiết kế mạch riêng hoặc cần hỗ trợ bảo hành / đấu nối vui lòng gọi / nhắn Zalo 0789044703, email tranbach9805@gmail.com hoặc gửi yêu cầu bên dưới.",en:"For volume pricing, custom board design, or wiring support, call/Zalo 0789044703, email tranbach9805@gmail.com, or submit your request below."},location:{vi:"Việt Nam (Làm việc trực tiếp & Giao hàng toàn quốc)",en:"Vietnam (On-site & Nationwide Delivery)"},email:"tranbach9805@gmail.com",phone:"0789044703",zaloLink:"https://zalo.me/0789044703",githubUrl:"https://github.com/trbach777",linkedinUrl:"https://linkedin.com/in/tran-xuan-bach-embedded",bankInfo:"Techcombank · STK: 9909088888888 · Chủ TK: TRAN XUAN BACH",bankId:"TCB",bankAccountNo:"9909088888888",bankAccountName:"TRAN XUAN BACH",paymentCheckUrl:"https://script.google.com/macros/s/AKfycbwvLtYkTYuDmQEfvb-OpqganV1v9N6OCdduxEqA8LesWfG9CtRSpwKUcIo3R0T5jMYL/exec",orderWebhookUrl:"https://script.google.com/macros/s/AKfycbwvLtYkTYuDmQEfvb-OpqganV1v9N6OCdduxEqA8LesWfG9CtRSpwKUcIo3R0T5jMYL/exec",telegramBotToken:"9191769650:AAE5DftTFGtz7HGoZznGS_dz5Ov50i-7kDo",telegramChatId:"8516660009",telegramLastUpdateId:0,telegramAutoSync:!0,buyerEmailEnabled:!0,buyerEmailSenderName:"TeeBi & Robot — TBX Electrics",buyerEmailReplyTo:"tranbach9805@gmail.com",buyerEmailFooterNote:"Cần hỗ trợ sơ đồ đấu nối, tập lệnh điều khiển hoặc bảo hành kỹ thuật, vui lòng nhắn trực tiếp Zalo 0789044703.",footerAbout:{vi:"Chuyên cung cấp bo mạch điều khiển STM32 nạp sẵn firmware, driver động cơ BLDC/Servo công suất, phụ kiện robot Mecanum và nhận thiết kế mạch theo yêu cầu.",en:"Supplying pre-flashed STM32 robot controllers, BLDC/Servo motor drivers, Mecanum robotics parts, and custom PCB engineering."},footerPolicyTitle:{vi:"Chính sách Giao hàng & Bảo hành",en:"Shipping & Warranty Policy"},footerPolicyItems:[{vi:"Test tải & đo kiểm 100% bo mạch trước khi đóng gói giao khách.",en:"100% functional & load testing before packaging."},{vi:"Giao hàng COD toàn quốc — cho phép kiểm tra hàng trước khi thanh toán.",en:"Nationwide COD delivery with package inspection."},{vi:"Đóng gói kèm sơ đồ đấu nối & tài liệu tập lệnh, hỗ trợ kỹ thuật 1-1 qua Zalo.",en:"Supplied with wiring manual & command docs + 1-1 Zalo support."}],experienceYears:"3+ năm thực hành mạch & điều khiển",summary:{vi:"Tôi làm chuyên sâu về mạch điều khiển động cơ (DC Servo Encoder, BLDC công suất) và bộ điều khiển trung tâm cho robot di động dùng STM32H743 / STM32F4. Thế mạnh nằm ở việc hiểu đồng thời cả phần cứng công suất lẫn phần mềm điều khiển thời gian thực: tự xử lý được nhiễu cầu H, trôi góc cảm biến, cân chỉnh Fuzzy PID thích nghi theo tải và đóng gói sản phẩm kèm tài liệu hướng dẫn đấu nối dễ dùng cho người vận hành.",en:"Hardware and firmware engineer focused on closed-loop motor drivers (DC Servo, high-power BLDC) and STM32H743/F4 mobile robot controllers. Bridges power electronics debugging (H-bridge EMI, hall commutation) with deterministic closed-loop motion control, delivering locked production boards and clear integration guides."},specsSummary:[{key:{vi:"Nền tảng phần cứng",en:"Hardware Base"},value:"STM32H743 / F4 / F1"},{key:{vi:"Công nghệ điều khiển",en:"Control Core"},value:"Fuzzy PID / Servo PID / BLDC"},{key:{vi:"Chuẩn giao tiếp ngoài",en:"External Bus"},value:"FDCAN / UART / RS485 / BLE"},{key:{vi:"Hình thức bàn giao",en:"Delivery"},value:"Mạch nạp sẵn FW + User Guide"}],education:[{school:{vi:"Chuyên ngành Kỹ thuật Điều khiển & Tự động hóa / Điện - Điện tử",en:"Control Engineering, Automation & Embedded Electronics"},degree:{vi:"Hướng nghiên cứu: Robot tự hành & Driver công suất",en:"Focus: Mobile Robotics & Motor Power Drivers"},period:"2022 – 2026",highlights:{vi:"Trực tiếp thiết kế, chạy thử nghiệm trên cơ khí thật bộ điều khiển STM32H743 và loạt mạch driver PIDSM v2.2 / PID_BLDC.",en:"Designed and bench-tested STM32H743 master controllers alongside PIDSM v2.2 and PID_BLDC motor driver series."}}],toolsAndBench:[{vi:"Lập trình & Biên dịch nhúng: Keil MDK-ARM, STM32CubeIDE, STM32CubeMX",en:"Embedded Toolchains: Keil MDK-ARM, STM32CubeIDE, STM32CubeMX"},{vi:"Thiết kế phần cứng: Altium Designer / KiCad (Mạch 2–4 lớp, đường dòng lớn, tách mass)",en:"PCB CAD: Altium Designer / KiCad (2–4 layer mixed-signal & power routing)"},{vi:"Đo kiểm trên bàn lab: Oscilloscope soi PWM/nhiễu nguồn, Logic Analyzer bắt gói UART/CAN",en:"Lab Equipment: Oscilloscope (PWM/ripple), Logic Analyzer (CAN/UART decode)"}]},Ga=[{id:"stm32h743-robot-controller",code:"H743ZIT6R1",revision:"REV 3.0",originType:"self-made",category:"robot-controller",categoryLabel:{vi:"Bo Điều khiển Robot",en:"Robot Master"},status:{vi:"Nạp sẵn FW khóa bảo mật · Cắm là chạy",en:"Pre-Flashed Locked MCU"},supplyForm:{vi:"Cung cấp bo mạch hoàn chỉnh + Hướng dẫn đấu nối & tập lệnh",en:"Turnkey Flashed Board + User Manual"},price:245e4,costPrice:145e4,stock:4,minStockAlert:2,unit:"Bộ",showTechnicalGuide:!0,name:{vi:"Bo Điều khiển Trung tâm Robot Mecanum STM32H743",en:"STM32H743 Mecanum Autonomous Robot Controller"},subtitle:{vi:"Điều khiển 7 trục động cơ · 3 cổng Laser + IMU · Màn hình HMI + Tay cầm không dây",en:"7-Axis Motor Bus · 3x Laser + IMU Inputs · HMI Port + Wireless Gamepad"},description:{vi:"Bộ điều khiển trung tâm đóng gói sẵn cho xe tự hành hoặc robot 4 bánh Mecanum có cơ cấu nâng hạ và tay gắp. Người dùng chỉ cần cấp nguồn, cắm dây cảm biến Laser, IMU và dây bus động cơ theo sơ đồ chân, sau đó vận hành ngay bằng tay cầm hoặc gửi lệnh tọa độ từ HMI/PC.",en:"Turnkey master controller for 4-wheel Mecanum mobile robots with lift and gripper mechanisms. Simply wire power, Laser sensors, IMU, and motor bus cables per pinout, then operate via wireless gamepad or send target commands from HMI/host."},engineeringNotes:{vi:["Bo mạch xuất xưởng đã nạp sẵn Firmware hoàn chỉnh (khóa đọc chip bảo vệ bản quyền), hỗ trợ chạy ngay 3 chế độ: Tự động bám điểm Laser, Bán tự động theo bước và Lái tay.","Hỗ trợ đồng thời 4 kênh bánh xe Mecanum (DC1–DC4), 1 kênh tay gắp (DC5) và 2 kênh nâng hạ X/Y (DC6–DC7).","Có sẵn bộ điều chỉnh gia tốc êm giúp robot nặng không bị trượt bánh khi khởi động hoặc phanh tại vị trí Laser.","Cho phép người dùng tinh chỉnh trực tiếp mục tiêu khoảng cách (mm) và góc quay trên màn hình HMI mà không cần nạp lại code."],en:["Ships pre-flashed with locked production firmware supporting 3 ready-to-use modes: Laser Auto-Positioning, Semi-Auto Stepper, and Manual Gamepad.","Simultaneously commands 4 Mecanum drive wheels (DC1–DC4), 1 gripper channel (DC5), and 2 lift axes (DC6–DC7).","Smooth ramp profiling prevents wheel slip under heavy payloads during start/stop maneuvers.","Target Laser distances (mm) and heading angles can be adjusted directly via HMI without reflashing firmware."]},techStack:["24V -> 5V/3.3V","7 Motor Channels","FDCAN / UART","Laser 0-5V","IMU HWT901B","HMI + Gamepad"],specs:[{label:{vi:"Nguồn cấp vào",en:"Power Input"},value:"12V – 24V DC (Tích hợp hạ áp bảo vệ ngược cực)"},{label:{vi:"Ngõ ra điều khiển motor",en:"Motor Bus Out"},value:"7 kênh (DC1–4 Mecanum, DC5 Gắp, DC6–7 Nâng) qua FDCAN/UART"},{label:{vi:"Cổng cảm biến đầu vào",en:"Sensor Ports"},value:"3x Laser Analog, 1x IMU RS232/TTL, Limit Switch 24V"},{label:{vi:"Giao diện vận hành",en:"Operator UI"},value:"Cổng màn hình HMI UART + Cổng tay cầm PS2 / BLE"},{label:{vi:"Chế độ hoạt động",en:"Run Modes"},value:"Tự động (Auto) / Bán tự động / Điều khiển tay (Manual)"},{label:{vi:"Bảo mật Firmware",en:"Firmware Policy"},value:"Nạp sẵn & Khóa Readout Protection (Chỉ cấp tài liệu dùng)"}],architectureDiagram:`┌───────────────────────── SƠ ĐỒ ĐẤU NỐI NGOÀI ─────────────────────────┐
│ [Nguồn 24V] ──► J_PWR (+/-)                                           │
│ [3x Laser]  ──► J_LZR (Front / Left / Right + 5V/GND)                 │
│ [IMU 9-Trục]──► J_IMU (TX/RX 115200bps)                               │
│ [Màn HMI]   ──► J_HMI (USART2 TX/RX) ◄──► Cài đặt điểm & Chế độ chạy  │
│ [Tay cầm]   ──► J_PAD (PS2 / BLE Receiver)                            │
│ [Bus Motor] ──► J_CAN / J_DRV ──► Driver DC1..DC4 (Bánh) + DC5..7     │
└───────────────────────────────────────────────────────────────────────┘`,codeSnippetTitle:"Hướng dẫn Khởi động nhanh & Ví dụ Gửi lệnh từ HMI / Máy tính",codeSnippet:`# QUY TRÌNH ĐẤU NỐI & VẬN HÀNH NHANH (H743ZIT6R1)
1. Kiểm tra nguồn 24V đúng cực (+/-) trước khi cắm giắc J_PWR.
2. Nối dây Bus điều khiển từ cổng J_DRV tới các Driver (ID 1..7).
3. Cấp nguồn -> Đèn LED_RUN nháy đều (1Hz) báo hệ thống sẵn sàng.

# VÍ DỤ GÓI LỆNH ĐIỀU KHIỂN TỪ HMI / HOST QUA UART (115200 bps, 8N1)
- Chạy tới tọa độ Laser (Trước=450mm, Trái=300mm, Góc=0°):
  TX -> $LOC,450,300,0*CS\r


- Chạy vận tốc trực tiếp (Vx=60%, Vy=0%, Quay=0%):
  TX -> $VEL,60,0,0*CS\r


- Dừng khẩn cấp toàn bộ trục:
  TX -> $STOP*CS\r
`,visualType:"h743-robot"},{id:"smart-servo-pid-driver",code:"PIDSM-V2.2",revision:"REV 2.2",originType:"self-made",category:"motor-driver",categoryLabel:{vi:"Driver Động cơ",en:"Motor Driver"},status:{vi:"Hàng có sẵn · Đấu dây là chạy",en:"In Stock · Plug & Run"},supplyForm:{vi:"Mạch Driver hoàn chỉnh (Đã nạp FW) + Tài liệu giao thức",en:"Pre-Flashed Driver + Protocol Sheet"},price:49e4,costPrice:27e4,stock:15,minStockAlert:4,unit:"Mạch",showTechnicalGuide:!0,name:{vi:"Mạch Driver Động cơ DC Servo Encoder (PIDSM v2.2)",en:"Closed-Loop DC Servo PID Driver (PIDSM v2.2)"},subtitle:{vi:"Cắm DC Motor + Encoder A/B · Đặt ID nối chuỗi CAN/UART · Tự giữ vị trí",en:"DC Motor + A/B Encoder Terminals · Selectable Node ID · Closed-Loop Hold"},description:{vi:"Bộ driver công suất điều khiển động cơ DC có gắn Encoder. Khách hàng chỉ cần nối 2 dây nguồn, 2 dây động cơ, 4 dây Encoder (5V, GND, A, B) và chọn ID mạch. Gửi góc quay hoặc tốc độ qua UART/CAN là động cơ tự chạy mượt và giữ cứng vị trí.",en:"Ready-to-use closed-loop DC Servo power driver. Simply connect supply power, motor leads, 4-wire quadrature encoder (5V, GND, A, B), and set the Node ID. Send target position or speed over UART/CAN and the drive handles closed-loop tracking."},engineeringNotes:{vi:["Tích hợp sẵn bộ lọc chống nhiễu đầu vào Encoder và mạch bảo vệ quá dòng cầu H (tự khóa ngắt khi kẹt cơ khí).","Hỗ trợ mắc nối tiếp nhiều Driver trên cùng 1 đường dây truyền thông từ PLC, Arduino, Raspberry Pi hoặc STM32.","Cho phép người dùng chỉnh lại 3 hệ số Kp, Ki, Kd bằng lệnh truyền thông khi thay đổi tải trọng cơ khí khác nhau."],en:["Built-in encoder input noise filtering and automatic H-bridge fault cut-off on mechanical jam.","Daisy-chain multiple drivers on a single bus controlled from PLC, Arduino, Raspberry Pi, or STM32.","Users can adjust Kp/Ki/Kd gains over serial/CAN commands for different mechanical inertia without touching MCU firmware."]},techStack:["12V - 36V DC","Encoder A/B 5V","UART / CAN ID","Auto Hold","Stall Lock"],specs:[{label:{vi:"Điện áp cấp công suất",en:"Power Supply"},value:"12V – 36V DC (Có cầu chì & bảo vệ ngược cực)"},{label:{vi:"Đầu vào cảm biến",en:"Encoder Port"},value:"5V / GND / Phase A / Phase B (NPN hoặc Push-Pull)"},{label:{vi:"Chuẩn nhận lệnh",en:"Command Bus"},value:"UART TTL (115200 bps) hoặc CAN Bus (Chọn Node ID)"},{label:{vi:"Chế độ điều khiển",en:"User Modes"},value:"Chạy vị trí (Xung) / Chạy tốc độ (RPM) / Thả trôi"},{label:{vi:"Bảo vệ an toàn",en:"Safety"},value:"Tự ngắt cầu H khi kẹt trục hoặc mất dây Encoder"}],architectureDiagram:`┌─────────── SƠ ĐỒ ĐẤU CHÂN MẠCH PIDSM V2.2 ───────────┐
│  [1] PWR_IN (+24V / GND)  ──► Nguồn tổ ong / Pin 24V │
│  [2] MOTOR (M+ / M-)      ──► Ra 2 dây động cơ DC    │
│  [3] ENC (5V/GND/A/B)     ──► Về Encoder sau trục    │
│  [4] COMM (TX/RX hoặc CAN)──► Nối về Bộ điều khiển   │
└──────────────────────────────────────────────────────┘`,codeSnippetTitle:"Ví dụ Code Arduino / STM32 / Python gửi lệnh tới Driver PIDSM v2.2",codeSnippet:`// Ví dụ phía Host (Arduino / Vi điều khiển của bạn) gửi lệnh qua Serial tới PIDSM
// Cấu trúc khung: [0xAA] [ID_Mạch] [Chế_độ] [Giá_trị_H] [Giá_trị_L] [Checksum]

void PIDSM_SetSpeed(uint8_t node_id, int16_t speed_pwm) {
    uint8_t frame[6];
    frame[0] = 0xAA;                     // Byte bắt đầu
    frame[1] = node_id;                  // Địa chỉ mạch (1..16)
    frame[2] = (speed_pwm >= 0) ? 1 : 0; // 1: Quay thuận, 0: Quay nghịch
    uint16_t mag = abs(speed_pwm);
    frame[3] = (mag >> 8) & 0xFF;
    frame[4] = mag & 0xFF;
    frame[5] = frame[1] ^ frame[2] ^ frame[3] ^ frame[4];
    Serial1.write(frame, 6);
}`,visualType:"servo-pid"},{id:"bldc-high-power-driver",code:"PID-BLDC",revision:"REV 1.4",originType:"self-made",category:"motor-driver",categoryLabel:{vi:"Driver Công suất",en:"Power Driver"},status:{vi:"Đã test tải nặng · Sẵn sàng giao",en:"Load Tested · Ready"},supplyForm:{vi:"Bo Driver BLDC nạp sẵn FW + Hướng dẫn đấu dây Hall/Pha",en:"Flashed BLDC Board + Wiring Guide"},price:89e4,costPrice:52e4,stock:8,minStockAlert:3,unit:"Mạch",showTechnicalGuide:!0,name:{vi:"Bộ Điều khiển Động cơ Không chổi than Công suất Cao (PID_BLDC)",en:"High-Power Sensored BLDC Speed Controller (PID_BLDC)"},subtitle:{vi:"Đấu 3 pha U/V/W + 5 dây Hall · Điều khiển bằng chiết áp, Analog 0-5V hoặc UART",en:"3-Phase U/V/W + 5-Wire Hall · Potentiometer / 0-5V Analog / UART Control"},description:{vi:"Bộ điều khiển động cơ BLDC công suất lớn chuyên dùng cho bánh xe hub, xe đẩy hàng tự hành AGV và băng tải. Đấu nối đơn giản như driver công nghiệp: cấp nguồn 24–48V, nối 3 dây pha, cắm giắc Hall và chọn tốc độ bằng biến trở 0–5V hoặc lệnh UART.",en:"Industrial BLDC motor drive for hub wheels, AGVs, and conveyors. Simple field wiring: connect 24–48V supply, 3-phase motor wires, 5-pin Hall sensor connector, and command speed via 0–5V analog input, PWM, or UART."},engineeringNotes:{vi:["Tự động giữ ổn định tốc độ đặt (RPM) ngay cả khi xe lên dốc hoặc chất thêm tải nặng.","Có chân kích hoạt (EN), chân đảo chiều (DIR) và chân phanh an toàn (BRK) đấu thẳng với công tắc hoặc PLC.","Khởi động mềm hạn chế sụt áp bình ắc quy khi khởi động tải lớn."],en:["Maintains constant RPM automatically when climbing ramps or carrying heavy payloads.","Dedicated digital terminals for Enable (EN), Direction (DIR), and Brake (BRK) wired straight to switches or PLC.","Built-in soft-start ramp protects battery packs from inrush current spikes."]},techStack:["24V - 48V DC","3-Phase U/V/W","Hall 5-Pin","0-5V / PWM / UART","DIR / BRK Pins"],specs:[{label:{vi:"Nguồn cấp động lực",en:"DC Bus"},value:"24V – 48V DC (Ắc quy / Pin Lithium / Nguồn tổ ong)"},{label:{vi:"Kết nối động cơ",en:"Motor Wiring"},value:"3 cọc pha U, V, W + Giắc 5 chân Hall (5V, Ha, Hb, Hc, GND)"},{label:{vi:"Ngõ điều khiển tốc độ",en:"Speed Input"},value:"Chiết áp 0–5V / Xung PWM / Giao tiếp UART"},{label:{vi:"Chân điều khiển logic",en:"Logic I/O"},value:"EN (Chạy/Dừng), DIR (Đảo chiều), BRK (Phanh)"},{label:{vi:"Cơ chế bảo vệ",en:"Protection"},value:"Bảo vệ quá dòng tải, khởi động mềm, tản nhiệt nhôm"}],architectureDiagram:`┌─────────── HƯỚNG DẪN ĐẤU DÂY DRIVER PID_BLDC ───────────┐
│  [Pin/Nguồn 24-48V] ──► Domino V+ / GND                 │
│  [Động cơ BLDC]     ──► 3 Pha U, V, W + Giắc Hall 5 dây │
│  [Tốc độ vào]       ──► Chân VR (0-5V) hoặc UART TX/RX  │
│  [Công tắc ngoài]   ──► Chân DIR (Đảo chiều), BRK (Dừng)│
└─────────────────────────────────────────────────────────┘`,codeSnippetTitle:"Hướng dẫn Cài đặt Công tắc & Gửi lệnh tốc độ RPM cho PID_BLDC",codeSnippet:`# CÁCH 1: DÙNG ĐỘC LẬP KHÔNG CẦN CODE (ĐẤU CHIẾT ÁP / PLC)
- Nối chân EN xuống GND để cho phép chạy.
- Nối chân DIR để hở = Quay thuận | Nối GND = Quay nghịch.
- Cấp điện áp 0V .. 5V vào chân VR để chỉnh tốc độ từ 0 -> 100% RPM.

# CÁCH 2: ĐIỀU KHIỂN TỪ VI ĐIỀU KHIỂN QUA UART (115200 bps)
TX -> "SPD:1500
"   // Đặt tốc độ mục tiêu 1500 RPM (giữ tốc độ theo tải)
TX -> "DIR:1
"      // Đặt chiều quay (1: Thuận, 0: Nghịch)
TX -> "BRK:1
"      // Kích hoạt phanh dừng`,visualType:"bldc-driver"},{id:"imu-industrial-9axis",code:"IMU-STMV2",revision:"REV 2.0",originType:"self-made",category:"sensor-hmi",categoryLabel:{vi:"Cảm biến & Xử lý góc",en:"IMU Module"},status:{vi:"Xuất góc liên tục · Độ trễ thấp",en:"Clean Continuous Output"},supplyForm:{vi:"Module đã nạp sẵn FW lọc góc + Tài liệu đọc gói tin",en:"Pre-Flashed Module + Packet Guide"},price:55e4,costPrice:31e4,stock:7,minStockAlert:3,unit:"Bộ",showTechnicalGuide:!0,name:{vi:"Module Xử lý Cảm biến Quán tính 9 trục Chống nhảy góc (IMU_STMv2)",en:"9-Axis IMU Acquisition & Continuous-Yaw Module (IMU_STMv2)"},subtitle:{vi:"Cấp 5V là xuất góc Roll/Pitch/Yaw liên tục · Không nhảy ±180° · Hỗ trợ nút Reset 0°",en:"5V Plug-and-Play · Continuous Unwrapped Yaw · Hardware Zero-Reset Pin"},description:{vi:"Module trung gian giúp bạn đọc góc nghiêng và góc xoay từ cảm biến quán tính công nghiệp (HWT901B/MPU) một cách sạch sẽ, đã lọc rung cơ khí và xử lý sẵn lỗi nhảy cóc qua ngưỡng ±180°. Thiết bị chính của bạn chỉ việc đọc giá trị góc float gửi ra mỗi 10ms.",en:"Dedicated sensor-conditioning module that filters chassis vibration and eliminates ±180° yaw wrap glitches from HWT901B/MPU sensors. Your main controller simply reads clean unwrapped angle packets every 10ms without wasting CPU cycles."},engineeringNotes:{vi:["Tích hợp nút nhấn phần cứng / chân kích mức thấp để đặt lại góc Yaw = 0.0° bất kỳ lúc nào khi căn chỉnh robot.","Đầu ra chuẩn hóa sẵn thành góc liên tục (ví dụ xoay 2 vòng là +720° chứ không bị nhảy về -180°).","Có đèn LED báo trạng thái ổn định cảm biến ngay sau khi bật nguồn."],en:["Includes a physical button / logic pin to zero the Yaw heading (0.0°) before a robot run.","Outputs continuous unwrapped angles (e.g., 2 full turns = +720.0°) with zero ±180° discontinuity.","Onboard status LED confirms sensor calibration lock after power-up."]},techStack:["5V Input","UART 115200","CAN Output","Zero-Reset Pin","100Hz Clean Data"],specs:[{label:{vi:"Nguồn cấp",en:"Supply"},value:"5V DC (Giắc cắm 4 chân chuẩn công nghiệp)"},{label:{vi:"Tốc độ xuất dữ liệu",en:"Output Rate"},value:"100 Hz (Mỗi 10ms gửi 1 gói góc đã lọc)"},{label:{vi:"Định dạng góc Yaw",en:"Yaw Format"},value:"Góc liên tục (-32768° đến +32768°), sai số < 0.2°"},{label:{vi:"Chân tiện ích",en:"Utility Pin"},value:"Chân ZERO (Kéo GND 100ms để reset góc hướng về 0°)"}],architectureDiagram:`[Nguồn 5V] ──► [Module IMU_STMv2] ──(UART / CAN)──► [PLC / STM32 / Arduino]
                      ▲
               [Nút ZERO về 0°]`,codeSnippetTitle:"Hướng dẫn Đọc góc từ Module IMU_STMv2 trên Arduino / STM32",codeSnippet:`// Định dạng gói dữ liệu Module IMU_STMv2 tự động gửi ra UART (115200 bps):
// Gói ASCII dễ đọc: "$IMU,<Roll>,<Pitch>,<Continuous_Yaw>*CS\r
"

// Ví dụ phía thiết bị nhận (Python / Arduino / PC):
// Nhận chuỗi: "$IMU,0.12,-0.45,368.50*4A"
// -> Roll = 0.12°, Pitch = -0.45°, Yaw = 368.50° (đã quay hơn 1 vòng mượt mà)

// Lệnh gửi xuống module từ thiết bị chính:
// "$RST_YAW\r
"  -> Đặt lại góc Yaw hiện tại về 0.00°`,visualType:"imu-sensor"},{id:"wireless-gamepad-ble",code:"GAMEPAD-BLE",revision:"REV 1.2",originType:"self-made",category:"wireless",categoryLabel:{vi:"Điều khiển Không dây",en:"Wireless Control"},status:{vi:"Cắm là lái · Tự dừng khi mất sóng",en:"Plug & Drive · Fail-Safe"},supplyForm:{vi:"Tay cầm + Mạch thu nạp sẵn FW + Bảng ánh xạ phím",en:"Handheld + Receiver + Keymap Guide"},price:62e4,costPrice:36e4,stock:10,minStockAlert:3,unit:"Bộ",showTechnicalGuide:!0,name:{vi:"Bộ Thu Phát Tay cầm Điều khiển Robot Không dây (GamepadBLE)",en:"Industrial Wireless Gamepad & BLE Receiver (GamepadBLE)"},subtitle:{vi:"Tự động ghép nối BLE/PS2 · Xuất tọa độ Joystick sạch · An toàn tự dừng khi mất kết nối",en:"Auto-Pairing BLE/PS2 · Filtered Stick Output · Auto-Zero on Signal Loss"},description:{vi:"Giải pháp tay cầm không dây hoàn chỉnh dùng để lái xe tự hành, điều khiển tay máy hoặc test cơ khí trong nhà xưởng. Mạch thu đã xử lý sẵn lọc rung cần analog và tự xuất giá trị về 0 nếu tay cầm đi quá xa hoặc hết pin.",en:"Complete wireless remote kit for workshop testing, manual AGV driving, and robotic arm jogging. The receiver filters stick deadzones automatically and outputs zero velocity commands within 150ms if radio signal drops."},engineeringNotes:{vi:["Tự động kết nối lại ngay khi bật nguồn tay cầm mà không cần thao tác cài đặt phức tạp.","Đèn LED trên mạch thu báo rõ trạng thái: Nháy chậm = Chờ kết nối, Sáng đứng = Đã kết nối ổn định.","Nếu mất sóng quá 150ms, mạch thu tự động phát tín hiệu dừng (0, 0, 0) bảo vệ an toàn cho người và máy."],en:["Auto-pairs immediately upon powering up the handheld controller.","Onboard status LED indicates link state: slow blink = searching, solid = active link.","Automatic 150ms loss-of-signal failsafe forces all speed outputs to zero to protect operators."]},techStack:["5V Supply","BLE / PS2 RF","UART 115200","150ms Fail-Safe","Auto Pair"],specs:[{label:{vi:"Khoảng cách điều khiển",en:"Range"},value:"15m – 30m trong môi trường nhà xưởng"},{label:{vi:"Tần số cập nhật",en:"Packet Rate"},value:"50 Hz – 100 Hz (Độ trễ < 15ms)"},{label:{vi:"An toàn mất sóng",en:"Safety Timeout"},value:"Tự trả vận tốc về 0 sau 150ms mất tín hiệu"},{label:{vi:"Ngõ ra mạch thu",en:"Receiver Port"},value:"UART TTL 4 chân (5V, GND, TX, RX)"}],architectureDiagram:`[Tay cầm BLE/PS2] ~~~(Sóng 2.4GHz)~~~► [Mạch thu GamepadBLE] ──(UART)──► [Bo Robot / PLC]
                                                │
                                      [Đèn báo LINK / Mất sóng]`,codeSnippetTitle:"Bảng Giải mã Gói tin từ Mạch thu GamepadBLE gửi ra UART",codeSnippet:`// Mỗi 20ms, Mạch thu gửi 1 gói 8-byte ra chân TX (115200 bps):
// [0x55] [LX] [LY] [RX] [RY] [BTN_L] [BTN_H] [Checksum]
//  - LX, LY, RX, RY: Giá trị từ -100 .. +100 (Đã lọc deadzone ở giữa = 0)
//  - BTN_L, BTN_H  : Trạng thái 16 nút nhấn (bit 1 = đang nhấn)
//  - Khi mất sóng  : Mạch tự gửi liên tục LX=0, LY=0, RX=0, RY=0, BTN=0

// Ví dụ đọc bằng code người dùng:
if (rx_buf[0] == 0x55 && check_crc(rx_buf)) {
    int8_t move_x = (int8_t)rx_buf[1]; // Tiến / Lùi (-100..100)
    int8_t move_y = (int8_t)rx_buf[2]; // Trượt ngang (-100..100)
}`,visualType:"gamepad-ble"},{id:"multi-sensor-io-encoder",code:"INPUT-F4-IO",revision:"REV 1.1",originType:"self-made",category:"sensor-hmi",categoryLabel:{vi:"Board Thu thập I/O",en:"DAQ & I/O Board"},status:{vi:"Cách ly quang 24V · Chống nhiễu",en:"24V Opto-Isolated"},supplyForm:{vi:"Board I/O nạp sẵn FW + Tài liệu đọc kênh CAN/UART",en:"Pre-Flashed I/O Board + Register Map"},price:42e4,costPrice:24e4,stock:9,minStockAlert:3,unit:"Mạch",showTechnicalGuide:!0,name:{vi:"Board Đọc Cảm biến Laser & Công tắc hành trình Cách ly 24V (INPUT_CODE)",en:"Isolated 24V Limit-Switch & Laser Sensor Hub (INPUT_CODE)"},subtitle:{vi:"Gom 4-8 cảm biến Laser + 16 ngõ vào 24V Opto về 1 đường dây CAN / RS485",en:"Aggregates 4-8 Analog Lasers + 16x 24V Opto Inputs onto 1 CAN/RS485 Bus"},description:{vi:"Giúp giảm dây dẫn lằng nhằng trên thân robot và bảo vệ bộ điều khiển chính khỏi nhiễu điện áp 24V. Cắm toàn bộ cảm biến tiệm cận, công tắc hành trình và cảm biến khoảng cách Laser vào board này, sau đó chỉ kéo 2 dây truyền thông CAN/RS485 về máy tính hoặc bo chủ.",en:"Reduces wiring clutter across robot frames and isolates the main controller from 24V inductive spikes. Plug all proximity switches, limit sensors, and analog Lasers into this hub and run just one 2-wire CAN/RS485 bus back to your host."},engineeringNotes:{vi:["Tất cả ngõ vào công tắc hành trình hỗ trợ nguồn cảm biến công nghiệp 12V–24V (NPN/PNP) có LED báo trạng thái ngay trên từng chân.","Tín hiệu khoảng cách Laser được làm mượt sẵn trước khi gửi về trung tâm để không bị nhảy số do rung động.","Đấu nối bằng Domino bắt vít chắc chắn, dễ thay thế cảm biến ngoài hiện trường."],en:["All digital limit inputs accept 12V–24V industrial sensors with per-channel indicator LEDs.","Laser analog readings are pre-smoothed onboard to eliminate mechanical jitter before transmission.","Industrial screw terminals simplify field sensor swaps and maintenance."]},techStack:["12V - 24V Opto","4-8x Laser Analog","CAN / RS485 Out","LED Status/Pin","Screw Terminals"],specs:[{label:{vi:"Nguồn nuôi mạch",en:"Board Power"},value:"12V – 24V DC"},{label:{vi:"Kênh Analog Laser",en:"Laser Channels"},value:"4 – 8 kênh 0-5V (Xuất sẵn giá trị mm)"},{label:{vi:"Ngõ vào Số cách ly",en:"Digital Inputs"},value:"8 – 16 kênh Opto 24V (Có LED báo từng kênh)"},{label:{vi:"Ngõ ra truyền thông",en:"Host Output"},value:"CAN Bus / UART RS485 (Polling hoặc Auto-Send)"}],architectureDiagram:`[4-8x Cảm biến Laser] ──► [Cổng AI 1..8]  ──┐
[8-16x Công tắc 24V]  ──► [Cổng Opto IN]  ──┼──► [Board INPUT-F4-IO] ──(CAN/RS485)──► [Host]`,codeSnippetTitle:"Ví dụ Hỏi trạng thái Cảm biến & Công tắc qua RS485 / UART",codeSnippet:`# LỆNH HỎI DỮ LIỆU TỪ HOST (115200 bps):
TX -> "?IO,ALL\r
"

# PHẢN HỒI TỪ BOARD INPUT-F4-IO:
RX <- "!IO,D:0x00A4,L1:425,L2:310,L3:890,L4:120\r
"
// Giải thích:
// - D:0x00A4 : Bitmask 16 ngõ vào số (kênh nào có vật cản = 1)
// - L1..L4   : Khoảng cách đọc từ 4 cảm biến Laser (đơn vị: mm)`,visualType:"io-encoder"},{id:"mecanum-wheel-set-152",code:"MECANUM-AL152",revision:"Hàng nhập",originType:"commercial",category:"mechanics-parts",categoryLabel:{vi:"Động cơ & Cơ khí",en:"Mechanics & Motors"},status:{vi:"Hàng có sẵn tại kho",en:"In Stock"},supplyForm:{vi:"Bộ 4 bánh (2 Trái + 2 Phải) kèm Hub nối trục",en:"Set of 4 Wheels (2L + 2R) + Hubs"},price:285e4,costPrice:215e4,stock:6,minStockAlert:2,unit:"Bộ 4 bánh",showTechnicalGuide:!1,name:{vi:"Bộ 4 Bánh xe Mecanum Hợp kim Nhôm Đúc 152mm Tải nặng",en:"152mm Heavy-Duty Aluminum Mecanum Wheel Set (4 pcs)"},subtitle:{vi:"Chịu tải 120kg / bộ · Con lăn Polyurethane bạc đạn đôi · Khớp lục giác / Keyway",en:"120kg Load Capacity · Dual-Bearing PU Rollers · CNC Aluminum Hub"},description:{vi:"Bộ bánh xe đa hướng Mecanum đường kính 152mm khung nhôm đúc nguyên khối, chuyên dùng cho xe tự hành AGV và robot vận chuyển hàng tải lớn. Mỗi con lăn gắn 2 vòng bi giúp lăn êm, ít rơ lắc và chịu va đập tốt.",en:"Heavy-duty 152mm cast-aluminum Mecanum wheel set designed for mobile robots and AGVs. Each roller features dual ball bearings and wear-resistant PU sleeves for smooth omnidirectional travel."},engineeringNotes:{vi:["Tương thích trực tiếp với động học 4 bánh trên bộ điều khiển H743ZIT6R1.","Độ cứng con lăn PU bám nền epoxy nhà xưởng và sàn bê tông tốt, không để lại vệt đen.","Có sẵn tùy chọn khớp nối trục động cơ (8mm, 10mm, 12mm, 14mm) theo yêu cầu."],en:["Direct mechanical match for the H743ZIT6R1 omnidirectional controller.","High-grip PU rollers run quietly on epoxy workshop floors without marking.","Optional shaft coupling hubs available (8mm, 10mm, 12mm, 14mm)."]},techStack:["Đường kính 152mm","Tải 120kg","Khung nhôm","9 con lăn / bánh"],specs:[{label:{vi:"Đường kính ngoài",en:"Diameter"},value:"152 mm (6 inch)"},{label:{vi:"Tải trọng khuyến nghị",en:"Payload Rating"},value:"120 kg / bộ 4 bánh"},{label:{vi:"Vật liệu khung & con lăn",en:"Materials"},value:"Hợp kim nhôm + Con lăn PU bọc lõi bi"},{label:{vi:"Quy cách đóng gói",en:"Package"},value:"2 bánh Trái + 2 bánh Phải"}],architectureDiagram:`Gắn theo hình chữ X nhìn từ trên xuống:
  [Bánh Trái] ──┐   ┌── [Bánh Phải]
                │   │
  [Bánh Phải] ──┘   └── [Bánh Trái]`,codeSnippetTitle:"Lưu ý lắp đặt cơ khí khi nhận hàng",codeSnippet:`1. Lắp đúng 2 bánh L (Trái) và 2 bánh R (Phải) sao cho hướng con lăn tạo thành chữ X khi nhìn từ trên xuống.
2. Siết chặt ốc hãm khóa trục kèm keo khóa ren nhẹ để tránh lỏng chốt khi đảo chiều liên tục.`,visualType:"h743-robot"},{id:"dc-servo-motor-24v-enc",code:"MOTOR-24V-ENC",revision:"Hàng nhập",originType:"commercial",category:"mechanics-parts",categoryLabel:{vi:"Động cơ & Cơ khí",en:"Mechanics & Motors"},status:{vi:"Hàng có sẵn tại kho",en:"In Stock"},supplyForm:{vi:"Động cơ kèm giắc cắm Encoder 2 kênh A/B",en:"Motor + A/B Encoder Harness"},price:78e4,costPrice:54e4,stock:14,minStockAlert:4,unit:"Chiếc",showTechnicalGuide:!1,name:{vi:"Động cơ Giảm tốc 24V DC Mô-men cao Tích hợp Encoder",en:"24V High-Torque Geared DC Motor with Dual-Channel Encoder"},subtitle:{vi:"24V DC · Hộp số kim loại · Encoder 2 kênh A/B đọc vị trí & tốc độ chính xác",en:"24V DC · All-Metal Gearbox · Integrated Dual-Channel Quadrature Encoder"},description:{vi:"Động cơ giảm tốc bánh răng kim loại bền bỉ chạy nguồn 24V, tích hợp sẵn bộ mã hóa vòng quay Encoder 2 pha A/B ở đuôi trục. Cắm chạy trực tiếp với Driver PIDSM v2.2 rất ổn định cho cơ cấu nâng, băng tải hoặc bánh xe robot.",en:"Rugged 24V all-metal geared DC motor equipped with a rear A/B quadrature encoder. Pairs cleanly with the PIDSM v2.2 driver for closed-loop speed and position control."},engineeringNotes:{vi:["Tặng kèm dây nối giắc 6 chân tương thích thẳng với cổng Encoder trên mạch PIDSM v2.2.","Hộp số thép tôi cứng chịu đảo chiều nhanh liên tục."],en:["Includes 6-pin encoder pigtail cable compatible with PIDSM v2.2.","Hardened steel gearbox built for frequent bidirectional reversals."]},techStack:["24V DC","Hộp số kim loại","Encoder A/B 5V","Trục chữ D"],specs:[{label:{vi:"Điện áp định mức",en:"Rated Voltage"},value:"24V DC"},{label:{vi:"Tốc độ sau hộp số",en:"Output Speed"},value:"150 – 300 RPM (tùy chọn tỉ số truyền)"},{label:{vi:"Cảm biến đuôi trục",en:"Encoder"},value:"Hall / Quang 2 kênh A/B (5V)"}],architectureDiagram:`[2 dây lớn M+/M-] ──► Cổng Motor Driver
[4 dây nhỏ 5V/GND/A/B] ──► Cổng Encoder Driver`,codeSnippetTitle:"Thứ tự màu dây Encoder chuẩn",codeSnippet:`- Đỏ / Đen: Nguồn nuôi Motor (24V DC)
- Xanh dương: +5V cấp cho mạch Encoder
- Xanh lá: GND (Mass Encoder)
- Vàng / Trắng: Tín hiệu Xung A / B`,visualType:"servo-pid"},{id:"laser-distance-sensor-05v",code:"LZR-IND-05V",revision:"Hàng phân phối",originType:"commercial",category:"sensor-hmi",categoryLabel:{vi:"Cảm biến & I/O",en:"Sensors & I/O"},status:{vi:"Hàng có sẵn tại kho",en:"In Stock"},supplyForm:{vi:"Cảm biến nguyên hộp + Dây tín hiệu 2m",en:"Boxed Sensor + 2m Cable"},price:65e4,costPrice:43e4,stock:9,minStockAlert:3,unit:"Chiếc",showTechnicalGuide:!1,name:{vi:"Cảm biến Đo khoảng cách Laser Công nghiệp Ngõ ra 0–5V",en:"Industrial Laser Distance Sensor (0–5V Analog Output)"},subtitle:{vi:"Dải đo 50mm – 3000mm · Độ lặp lại cao · Ngõ ra Analog tuyến tính 0-5V",en:"50mm – 3000mm Range · Linear 0–5V Output · IP65 Enclosure"},description:{vi:"Cảm biến đo khoảng cách bằng tia Laser đỏ chuyên dụng cho robot tự hành bám tường và dây chuyền tự động hóa. Ngõ ra điện áp tuyến tính 0–5V ít bị nhiễu bởi ánh sáng đèn nhà xưởng hơn so với cảm biến siêu âm.",en:"Industrial red-beam Laser distance sensor outputting linear 0–5V analog voltage. Far superior immunity to factory lighting and acoustic reflections compared to ultrasonic sensors."},engineeringNotes:{vi:["Cắm trực tiếp vào cổng Laser của bo chủ H743ZIT6R1 hoặc board INPUT-F4-IO.","Vỏ bảo vệ chống bụi công nghiệp, có ốc chỉnh gá lắp dễ dàng."],en:["Plugs straight into the H743ZIT6R1 or INPUT-F4-IO analog Laser channels.","Rugged housing with mounting bracket slots."]},techStack:["Nguồn 12-24V","Ngõ ra 0-5V","Dải đo 3m","Chống bụi IP65"],specs:[{label:{vi:"Nguồn cấp",en:"Power"},value:"12V – 24V DC"},{label:{vi:"Tầm đo hiệu dụng",en:"Range"},value:"50 mm – 3,000 mm"},{label:{vi:"Tín hiệu ra",en:"Output"},value:"Analog tuyến tính 0 – 5V DC"}],architectureDiagram:"Dây Nâu (+12..24V) | Dây Xanh (GND) | Dây Đen (Analog Out 0-5V)",codeSnippetTitle:"Quy đổi điện áp ra khoảng cách mm",codeSnippet:"Khoảng cách (mm) = 50 + (Điện áp đọc được / 5.0) * 2950",visualType:"io-encoder"},{id:"kit-agv-mecanum-4wd",code:"KIT-AGV-MEC4",revision:"Đồ án / NCKH",originType:"project-kit",category:"project-research",categoryLabel:{vi:"Đồ án & Mô hình NCKH",en:"Project & Research Kit"},status:{vi:"Nhận lắp ráp theo cấu hình · Có sẵn kit mẫu",en:"Built to Order · Sample Kit Ready"},supplyForm:{vi:"Khung xe + 4 Động cơ Encoder + Mạch H743 + Tài liệu nguyên lý & Bảng tập lệnh",en:"Full Chassis + Controller + Test Docs"},price:485e4,costPrice:34e5,stock:4,minStockAlert:1,unit:"Bộ",showTechnicalGuide:!0,name:{vi:"Bộ Mô hình Xe Robot Tự Hành AGV 4 Bánh Mecanum Bám Điểm Laser & IMU (Full Kit Đồ Án / NCKH)",en:"4WD Omnidirectional AGV Robot Kit with Laser & IMU (Thesis / R&D Edition)"},subtitle:{vi:"Chạy sẵn 3 chế độ Auto / Bán tự động / Tay cầm · Xuất số liệu vị trí & vận tốc làm báo cáo NCKH",en:"Pre-configured Auto / Semi-Auto / Manual Modes · Real-Time Telemetry Logging"},description:{vi:"Mô hình hoàn chỉnh phục vụ đồ án tốt nghiệp Tự động hóa / Cơ điện tử và đề tài NCKH về điều khiển quỹ đạo xe đa hướng. Khung nhôm CNC lắp sẵn 4 động cơ Encoder, 4 bánh Mecanum, bo chủ STM32H743 kèm cảm biến IMU + Laser, sẵn sàng chạy thử và xuất bảng dữ liệu sai số cho chương thực nghiệm.",en:"Complete bench-ready AGV platform for automation theses and omnidirectional control research. Features aluminum chassis, 4 encoder motors, Mecanum wheels, STM32H743 controller, and IMU/Laser sensors ready for telemetry logging."},engineeringNotes:{vi:["Chạy ổn định ngay khi cấp nguồn 24V, có nút dừng khẩn và màn hình hiển thị thông số trực tiếp.","Cho phép đọc log sai số vị trí X/Y/Góc Yaw và tốc độ 4 bánh qua UART về máy tính để vẽ đồ thị.","Kèm sơ đồ khối hệ thống, bảng nối dây chi tiết và hướng dẫn giải thích nguyên lý khi bảo vệ."],en:["Operates out-of-the-box on 24V DC with emergency stop and onboard telemetry display.","Streams X/Y/Yaw tracking errors and 4-wheel RPM telemetry over UART for MATLAB/Python plotting.","Includes full block diagram, wiring schematic, and defense preparation guide."]},techStack:["Full Khung AGV","STM32H743 + HMI","IMU + Laser","Log đồ thị PC"],specs:[{label:{vi:"Kích thước khung xe",en:"Chassis Footprint"},value:"420 × 340 mm (Nhôm định hình + Tấm phíp)"},{label:{vi:"Cơ cấu truyền động",en:"Drivetrain"},value:"4x Động cơ Encoder 24V + 4 Bánh Mecanum"},{label:{vi:"Thu thập dữ liệu NCKH",en:"Research Logging"},value:"Xuất CSV tọa độ & vận tốc 50Hz qua UART/USB"},{label:{vi:"Tài liệu bàn giao",en:"Handover Docs"},value:"Sơ đồ nguyên lý khối + Bảng tập lệnh + Hướng dẫn test"}],architectureDiagram:`[Tay cầm / PC MATLAB] ──(UART/BLE)──► [Bo chủ H743ZIT6R1]
                                          ├──► 4x Bánh Mecanum (PIDSM)
                                          └──◄ [IMU 9 trục + 3x Laser]`,codeSnippetTitle:"Lệnh thu thập bảng số liệu thực nghiệm về PC / MATLAB",codeSnippet:`// Bật chế độ xuất dữ liệu thí nghiệm 50Hz:
$LOG,ON\r

// Dữ liệu nhận được để vẽ đồ thị trong báo cáo:
// "DATA,t_ms,X_set,X_real,Y_set,Y_real,Yaw_deg,RPM1,RPM2,RPM3,RPM4"`,visualType:"h743-robot"},{id:"kit-servo-pid-lab",code:"KIT-SERVO-LAB",revision:"Đồ án / Lab",originType:"project-kit",category:"project-research",categoryLabel:{vi:"Đồ án & Mô hình NCKH",en:"Project & Research Kit"},status:{vi:"Sẵn hàng tại kho",en:"In Stock"},supplyForm:{vi:"Mạch PIDSM + Động cơ Encoder + Đế gá + Phần mềm vẽ đáp ứng",en:"Driver + Motor + Stand + Plotter Tool"},price:165e4,costPrice:112e4,stock:5,minStockAlert:2,unit:"Bộ",showTechnicalGuide:!0,name:{vi:"Bộ Kit Thực Hành Điều Khiển Động Cơ DC Servo PID & Thu Thập Đáp Ứng Thời Gian Thực (Đồ Án / NCKH)",en:"DC Servo PID Control & Step-Response Experimental Bench Kit (Thesis / Lab)"},subtitle:{vi:"Thay đổi hệ số Kp, Ki, Kd trực tiếp qua UART · Vẽ biểu đồ vọt lố / xác lập cho báo cáo khoa học",en:"Live Kp/Ki/Kd Tuning via UART · Step-Response CSV Capture for Research Papers"},description:{vi:"Giải pháp gọn nhẹ dành cho sinh viên và nhóm nghiên cứu làm đề tài về Lý thuyết Điều khiển tự động, so sánh PID kinh điển với Fuzzy PID hoặc khảo sát ảnh hưởng tải trọng. Cắm nguồn và cáp USB-UART là có thể nạp góc đặt, chỉnh hệ số và xuất ngay số liệu đáp ứng quá độ.",en:"Turnkey experimental setup for control-theory theses comparing classical PID vs. Fuzzy PID under varying loads. Connect USB-UART to adjust gains and export transient step-response curves."},engineeringNotes:{vi:["Gá sẵn động cơ DC Encoder lên đế mica/nhôm có đĩa chia độ quan sát góc quay trực quan.","Cho phép đổi trực tiếp Kp, Ki, Kd, góc đặt hoặc vận tốc đặt ngay khi mô hình đang chạy.","Tặng kèm file mẫu Python / MATLAB đọc cổng COM và xuất đồ thị độ phân giải cao."],en:["Pre-mounted Encoder DC motor on rigid stand with visual degree dial.","Live tuning of Kp, Ki, Kd, position, and speed targets during operation.","Includes ready-to-run Python / MATLAB plotting script for high-DPI thesis charts."]},techStack:["PID / Fuzzy PID","Đế đĩa chia độ","USB-UART Plotter","Kèm Script đồ thị"],specs:[{label:{vi:"Thành phần bộ Kit",en:"Kit Contents"},value:"1x PIDSM v2.2 + 1x Motor 24V Encoder + Đế chia độ + Cáp UART"},{label:{vi:"Chế độ khảo sát",en:"Experiment Modes"},value:"Đáp ứng bậc thang Vị trí & Vận tốc, thử nhiễu tải"},{label:{vi:"Tần số lấy mẫu",en:"Sampling Rate"},value:"200 Hz (Xuất chuẩn thời gian thực mỗi 5ms)"}],architectureDiagram:"[PC / MATLAB / Python] ◄──(USB-UART 115200)──► [PIDSM v2.2] ──► [Motor + Đĩa chia độ]",codeSnippetTitle:"Tập lệnh thay đổi thông số PID để chụp nhiều đường đáp ứng so sánh",codeSnippet:`$PID,12.5,0.4,1.8\r
   // Đặt Kp=12.5, Ki=0.4, Kd=1.8
$STEP,180\r
          // Ra lệnh quay góc bậc thang 180 độ & tự ghi log 3 giây`,visualType:"servo-pid"},{id:"kit-conveyor-sorting",code:"KIT-SORT-ARM",revision:"Đồ án Kỹ thuật",originType:"project-kit",category:"project-research",categoryLabel:{vi:"Đồ án & Mô hình NCKH",en:"Project & Research Kit"},status:{vi:"Nhận làm theo yêu cầu & Bán bộ mẫu",en:"Custom Built & Sample Ready"},supplyForm:{vi:"Mô hình băng tải + Cảm biến + Gạt phân loại + Bo điều khiển nạp sẵn",en:"Conveyor + Sensors + Diverter + Controller"},price:235e4,costPrice:162e4,stock:3,minStockAlert:1,unit:"Bộ",showTechnicalGuide:!0,name:{vi:"Mô Hình Băng Tải & Cơ Cấu Phân Loại Sản Phẩm Tự Động Dùng Cảm Biến & Vi Điều Khiển (Đồ Án Kỹ Thuật)",en:"Automated Conveyor & Sensor-Based Product Sorting Trainer Model (Engineering Project)"},subtitle:{vi:"Phân loại theo chiều cao (Laser) hoặc kim loại / màu sắc · Đếm sản phẩm qua màn hình HMI / LCD",en:"Height / Metal / Color Sorting · Live Product Counter Display · Ready to Present"},description:{vi:"Mô hình thực tế phục vụ đồ án môn học Thiết kế hệ thống nhúng, Tự động hóa quá trình sản xuất và Cơ điện tử. Băng tải nhôm chạy êm, có cảm biến phát hiện đầu vào, cảm biến phân loại, cơ cấu tay gạt Servo/Solenoid và bộ đếm hiển thị số lượng từng loại rõ ràng.",en:"Ready-to-present automated sorting conveyor built for embedded and mechatronics coursework. Features quiet aluminum conveyor frame, optical/Laser detection, diverter actuator, and real-time counter display."},engineeringNotes:{vi:["Tùy biến được tiêu chí phân loại theo đề bài của từng nhóm (chiều cao, kim loại, QR hoặc màu).","Hệ thống dây điện bọc gen gọn gàng, có công tắc nguồn tổng và nút Test từng khâu riêng lẻ.","Hỗ trợ hướng dẫn chi tiết giải thích sơ đồ mạch và lưu đồ giải thuật để tự tin bảo vệ trước hội đồng."],en:["Sorting criteria customizable to your project brief (height, metal, barcode, or color).","Cleanly harnessed industrial wiring with main power switch and manual per-stage test buttons.","Includes clear circuit explanation and flowchart guide for committee defense."]},techStack:["Băng tải nhôm","Cảm biến Laser/Tiệm cận","Đếm tự động","Bản vẽ & Lưu đồ"],specs:[{label:{vi:"Chiều dài băng tải",en:"Conveyor Length"},value:"600 mm (Bản rộng dây PVC 100mm)"},{label:{vi:"Nguồn cấp toàn mô hình",en:"Input Power"},value:"Adapter 12V / 24V (Đã tích hợp sẵn giắc cắm an toàn)"},{label:{vi:"Ngõ ra điều khiển",en:"Actuators"},value:"1x Motor Băng tải + 2x Cơ cấu gạt + Bộ đếm 3 khay"}],architectureDiagram:`[Cảm biến Laser/Quang] ──► [Bo điều khiển] ──► [Động cơ Băng tải + Tay gạt phân loại]
                                   └──► [Màn hình đếm Khay A / B / C]`,codeSnippetTitle:"Tập lệnh đọc số lượng sản phẩm đã phân loại qua UART",codeSnippet:`?COUNT\r

// Phản hồi: "!CNT,A:12,B:08,C:05,STATE:RUN"`,visualType:"io-encoder"},{id:"custom-3d-printing-service",code:"IN3D-REQ",revision:"PLA · PETG · ABS · TPU · Cacbon CF",originType:"commercial",category:"mechanics-parts",categoryLabel:{vi:"In 3D & Cơ khí",en:"Custom 3D Printing"},status:{vi:"Nhận in theo file 3D (.STL / .STEP / .OBJ) & Vẽ mẫu",en:"Custom Print from STL / STEP / OBJ"},supplyForm:{vi:"In lẻ từ 1 chi tiết · Xử lý bavia & đóng gói chống sốc",en:"Single-part to batch printing · Deburred & packed"},price:0,costPrice:0,stock:50,minStockAlert:5,unit:"Yêu cầu",showTechnicalGuide:!0,name:{vi:"Nhận In 3D Chi tiết Cơ khí, Vỏ Hộp Mạch Điện tử & Mô hình Đồ án theo Yêu cầu",en:"On-Demand 3D Printing for Mechanical Parts, PCB Enclosures & Project Models"},subtitle:{vi:"Vật liệu PLA, PETG, ABS, TPU, Cacbon CF chịu lực · Nhận file .STL / .STEP hoặc hỗ trợ dựng 3D theo kích thước",en:"PLA, PETG, ABS, TPU, Carbon CF · Print from .STL / .STEP or custom CAD modeling"},description:{vi:"Dịch vụ gia công in 3D độ chính xác cao chuyên phục vụ gá cảm biến Laser/Encoder, vỏ hộp bảo vệ bo mạch STM32, khớp nối tay máy robot, bánh răng và chi tiết mô hình đồ án / NCKH. Nhận in lẻ từ 1 chi tiết hoặc sản xuất số lượng theo yêu cầu.",en:"High-precision FDM 3D printing for sensor brackets, STM32 PCB enclosures, robotic arm joints, custom gears, and thesis prototypes. Available from single prototypes to small batches."},engineeringNotes:{vi:["Báo giá nhanh theo khối lượng nhựa thực tế và thời gian in; ưu đãi cho sinh viên làm đồ án.","Khuyên dùng PETG, ABS hoặc Cacbon CF cho giá đỡ động cơ chịu nhiệt và cơ cấu chịu tải robot.","Hỗ trợ kiểm tra dung sai lỗ ốc, ren đồng ép nhiệt (heat-set insert) và bo góc chịu lực."],en:["Fast quote by filament weight and print time; special discounts for engineering student projects.","PETG / ABS / Carbon CF recommended for heat-resistant motor mounts and load-bearing robot brackets.","Supports tolerance checks, M3/M4 brass heat-set inserts, and structural fillets."]},techStack:["PLA / PETG / ABS / TPU / Cacbon CF","Khổ 800×800","Nhận STL / STEP","Auto Support"],specs:[{label:{vi:"Công nghệ & Khổ in",en:"Process & Build Size"},value:"FDM Khổ lớn độ chính xác cao · Tối đa 800 × 800 × 800 mm"},{label:{vi:"Vật liệu phổ biến",en:"Materials"},value:"PLA, PETG, ABS, TPU, Cacbon CF (Chịu lực / Chịu nhiệt)"},{label:{vi:"Định dạng file nhận",en:"Accepted Formats"},value:".STL, .STEP, .OBJ hoặc bản vẽ phác tay kèm kích thước"},{label:{vi:"Đơn giá tham khảo",en:"Reference Price"},value:"Từ 50.000đ / chi tiết nhỏ (Tính chuẩn theo gram & giờ in)"}],architectureDiagram:"[File 3D (.STL / .STEP) hoặc Bản vẽ kích thước] ──► [Cắt lớp tối ưu chịu lực] ──► [In 3D + Gỡ support] ──► [Giao hàng tận nơi]",codeSnippetTitle:"Quy cách gửi file báo giá in 3D qua Zalo / Ghi chú đơn",codeSnippet:`1. Gửi file .STL / .STEP (hoặc ảnh kích thước dài x rộng x cao mm)
2. Chọn vật liệu (PLA+ đẹp/cứng, PETG chịu lực/nhiệt, TPU dẻo)
3. Chọn độ đặc Infill (20% vỏ hộp thường · 60-100% chi tiết chịu tải) & số lượng cần in`,visualType:"io-encoder"}],of=[{id:"project-graduation-support",sectionCode:"DA-01",badge:{vi:"Đồ án Môn học · Tốt nghiệp",en:"Course & Graduation Thesis"},title:{vi:"Hỗ trợ Đồ án Môn học & Đồ án Tốt nghiệp (Điện - Điện tử · Tự động hóa · Cơ điện tử)",en:"Engineering Coursework & Graduation Thesis Hardware/Firmware Support"},description:{vi:"Nhận tư vấn đề tài, thiết kế sơ đồ nguyên lý, lắp ráp phần cứng hoàn chỉnh và lập trình hệ thống nhúng STM32 / ESP32 / PLC / Robot chạy ổn định đúng yêu cầu đề bài của trường.",en:"End-to-end assistance with topic scoping, schematic design, hardware assembly, and stable STM32/ESP32/Robot control implementation tailored to university grading criteria."},deliverables:{vi:["Mô hình phần cứng hoặc bộ mạch chạy ổn định, đi dây gọn đẹp sẵn sàng trình chiếu bảo vệ","Hướng dẫn 1-1 giải thích chi tiết sơ đồ mạch, lưu đồ thuật toán và các câu hỏi phản biện","Bảo hành xử lý lỗi kỹ thuật cho tới ngày hoàn tất nghiệm thu bảo vệ đồ án"],en:["Working, neatly wired hardware prototype ready for live thesis demonstration","1-1 walkthrough covering circuit operation, flowcharts, and Q&A defense preparation","Technical support right through your final defense date"]},turnaround:{vi:"1 – 3 tuần tùy quy mô đề tài",en:"1 – 3 weeks"},pricingNote:{vi:"Báo giá hợp lý cho sinh viên",en:"Student-Friendly Pricing"}},{id:"research-nc-experiment",sectionCode:"DA-02",badge:{vi:"Nghiên cứu Khoa học (NCKH)",en:"Scientific Research (R&D)"},title:{vi:"Thực hiện Phần cứng Thực nghiệm & Thu thập Dữ liệu cho Đề tài Nghiên cứu Khoa học",en:"Experimental Testbeds & Telemetry Systems for Scientific Research"},description:{vi:"Xây dựng bàn thí nghiệm thực tế, hệ thống cảm biến đo đạc chính xác và xuất file số liệu CSV thời gian thực để so sánh thuật toán (PID, Fuzzy PID, LQR, tối ưu quỹ đạo) cho bài báo & đề tài NCKH.",en:"Build precision experimental rigs and high-rate telemetry loggers exporting CSV datasets to benchmark control algorithms (PID, Fuzzy PID, trajectory tracking) for research papers."},deliverables:{vi:["Bàn thí nghiệm phần cứng đồng bộ, ít nhiễu, độ lặp lại cao phục vụ chạy nhiều kịch bản thử nghiệm","Công cụ ghi log tự động xuất dữ liệu (CSV / MATLAB / Python) để vẽ biểu đồ so sánh sắc nét","Hỗ trợ hiệu chỉnh thông số thực nghiệm theo góp ý của giảng viên hướng dẫn"],en:["Low-noise, repeatable physical testbed built for multi-scenario experimentation","Automated CSV/MATLAB/Python logging scripts for publication-ready response charts","Iterative experimental tuning aligned with advisor feedback"]},turnaround:{vi:"2 – 4 tuần kèm chạy thử nghiệm",en:"2 – 4 weeks"},pricingNote:{vi:"Theo hạng mục thí nghiệm & thiết bị",en:"By Testbed Scope"}},{id:"project-rescue-hardware",sectionCode:"DA-03",badge:{vi:"Sửa lỗi & Cứu tiến độ gấp",en:"Debug & Rescue Project"},title:{vi:"Xử lý Mạch Nhiễu, Sửa Lỗi Mô hình Đang Làm Dở & Nâng cấp Chạy Ổn định",en:"EMI Debugging, Reset Fixing & Fast Rescue for In-Progress Prototypes"},description:{vi:"Nhận kiểm tra và cứu nhanh các mô hình đồ án sắp tới hạn bảo vệ nhưng gặp sự cố: chip bị reset khi động cơ quay, sai xung Encoder, sai góc IMU, PID rung lắc hoặc chưa kịp hoàn thiện phần điện.",en:"Fast troubleshooting for near-deadline student/research models suffering from motor-induced resets, noisy encoder readings, IMU drift, unstable PID tuning, or incomplete wiring."},deliverables:{vi:["Đo kiểm bằng Oscilloscope & Logic Analyzer tìm đúng nguyên nhân lỗi trong 24–48 giờ","Thay thế / bổ sung mạch driver chuẩn công nghiệp và tối ưu chống nhiễu nguồn – mass","Chạy test liên tục không treo trước khi bàn giao lại cho nhóm"],en:["Oscilloscope & Logic Analyzer root-cause audit within 24–48 hours","Power isolation, grounding cleanup, and reliable driver stage retrofit","Continuous soak-testing prior to handover"]},turnaround:{vi:"Ưu tiên nhanh 2 – 5 ngày",en:"Fast-Track 2 – 5 days"},pricingNote:{vi:"Báo chi phí sau khi kiểm tra lỗi",en:"Quoted After Triage"}},{id:"project-ready-kit-combo",sectionCode:"DA-04",badge:{vi:"Combo Kit + Hướng dẫn",en:"Turnkey Kit + Guide"},title:{vi:"Cung cấp Trọn bộ Kit Mô hình Đồ án Nạp sẵn & Tài liệu Trình bày Nguyên lý",en:"Pre-Built Educational & Research Model Kits with Complete Principles Guide"},description:{vi:"Tiết kiệm thời gian tự mua lẻ từng món dễ sai chuẩn: cung cấp trọn bộ khung cơ khí, động cơ, cảm biến, mạch nguồn và bo điều khiển đã căn chỉnh sẵn — nhận về cắm điện là chạy kiểm tra được ngay.",en:"Avoid mismatched components and fried boards: order complete, calibrated kits (mechanics, motors, sensors, and pre-tuned controllers) that run right out of the box."},deliverables:{vi:["Đầy đủ linh kiện đồng bộ đã test tải chạy mượt toàn hệ thống trước khi giao","Kèm bản vẽ sơ đồ kết nối, danh mục linh kiện và kịch bản demo mẫu","Hỗ trợ qua Zalo trong suốt quá trình nhóm quay video báo cáo và bảo vệ"],en:["Fully matched and load-tested kit hardware ready to demonstrate","Includes block/pinout schematics, BOM list, and demo sequence guide","Live Zalo support during video recording and final presentation"]},turnaround:{vi:"Có sẵn mẫu hoặc lắp 3 – 5 ngày",en:"3 – 5 business days"},pricingNote:{vi:"Trọn gói theo từng cấu hình Kit",en:"Fixed Kit Pricing"}}],Xe={products:{eyebrow:{vi:"Kho hàng trực tuyến — Sẵn hàng giao ngay",en:"Online Hardware Store — In Stock"},title:{vi:"Danh mục sản phẩm trưng bày & đang bán",en:"Featured Boards & Robotics Components"},searchPlaceholder:{vi:"Tìm tên mạch, động cơ, bánh xe, cảm biến...",en:"Search boards, motors, wheels, sensors..."},categories:[{id:"all",label:{vi:"Tất cả",en:"All"}},{id:"robot-controller",label:{vi:"Bo điều khiển Robot",en:"Robot Master"}},{id:"motor-driver",label:{vi:"Driver Động cơ",en:"Motor Drivers"}},{id:"sensor-hmi",label:{vi:"Cảm biến & I/O",en:"Sensors & I/O"}},{id:"wireless",label:{vi:"Không dây",en:"Wireless"}},{id:"mechanics-parts",label:{vi:"Động cơ & Cơ khí",en:"Motors & Mechanics"}},{id:"project-research",label:{vi:"Đồ án & NCKH",en:"Projects & R&D"}},{id:"other-goods",label:{vi:"Mặt hàng khác",en:"Other Goods"}}],viewDetail:{vi:"Chi tiết",en:"Details"},addToCart:{vi:"Thêm vào giỏ",en:"Add to Cart"},buyNow:{vi:"Mua ngay",en:"Buy Now"},orderQuote:{vi:"Đặt hàng / Hỏi giá",en:"Order / Quote"},emptyResult:{vi:"Không tìm thấy sản phẩm phù hợp với từ khóa.",en:"No matching products found."}},services:{eyebrow:{vi:"Hỗ trợ Đồ án Kỹ thuật · Nghiên cứu Khoa học (NCKH)",en:"Engineering Projects & Research Support"},title:{vi:"Nhận Hỗ trợ Đồ án Môn học, Đồ án Tốt nghiệp & Đề tài NCKH",en:"Custom Hardware, Prototypes & Lab Systems for Engineering Projects & Research"},subtitle:{vi:"Đồng hành cùng sinh viên, học viên cao học và nhóm nghiên cứu: từ thiết kế mạch, lắp mô hình thực tế, đo đạc thực nghiệm lấy số liệu biểu đồ đến bàn giao trọn bộ kèm tài liệu nguyên lý phục vụ bảo vệ.",en:"Supporting students and R&D teams from schematic & prototype assembly to experimental data logging and technical defense documentation."},ctaButton:{vi:"Đăng ký tư vấn & Nhận báo giá",en:"Request Project Support"}},contact:{eyebrow:{vi:"Báo giá sỉ & Hỗ trợ kỹ thuật",en:"Wholesale & Technical Support"},title:{vi:"Đặt hàng số lượng, thiết kế mạch hoặc hỗ trợ đấu nối",en:"Bulk Orders, Custom PCB Design & Technical Support"},subtitle:{vi:"Khách hàng đặt số lượng lớn, đặt thiết kế mạch riêng hoặc cần hỗ trợ bảo hành / đấu nối vui lòng gọi / nhắn Zalo 0789044703, email tranbach9805@gmail.com hoặc gửi yêu cầu bên dưới.",en:"For volume pricing, custom board design, or wiring support, call/Zalo 0789044703, email tranbach9805@gmail.com, or submit your request below."}}};var zc={},lf=function(e,t,r,a,s){var i=new Worker(zc[t]||(zc[t]=URL.createObjectURL(new Blob([e+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return i.onmessage=function(o){var l=o.data,d=l.$e$;if(d){var u=new Error(d[0]);u.code=d[1],u.stack=d[2],s(u,null)}else s(null,l)},i.postMessage(r,a),i},Ot=Uint8Array,xt=Uint16Array,Fi=Int32Array,Li=new Ot([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Oi=new Ot([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ul=new Ot([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tm=function(e,t){for(var r=new xt(31),a=0;a<31;++a)r[a]=t+=1<<e[a-1];for(var s=new Fi(r[30]),a=1;a<30;++a)for(var i=r[a];i<r[a+1];++i)s[i]=i-r[a]<<5|a;return{b:r,r:s}},Am=Tm(Li,2),df=Am.b,ui=Am.r;df[28]=258,ui[258]=28;var cf=Tm(Oi,0),hl=cf.r,hi=new xt(32768);for(var Be=0;Be<32768;++Be){var kn=(Be&43690)>>1|(Be&21845)<<1;kn=(kn&52428)>>2|(kn&13107)<<2,kn=(kn&61680)>>4|(kn&3855)<<4,hi[Be]=((kn&65280)>>8|(kn&255)<<8)>>1}var Ir=function(e,t,r){for(var a=e.length,s=0,i=new xt(t);s<a;++s)e[s]&&++i[e[s]-1];var o=new xt(t);for(s=1;s<t;++s)o[s]=o[s-1]+i[s-1]<<1;var l;if(r){l=new xt(1<<t);var d=15-t;for(s=0;s<a;++s)if(e[s])for(var u=s<<4|e[s],g=t-e[s],p=o[e[s]-1]++<<g,w=p|(1<<g)-1;p<=w;++p)l[hi[p]>>d]=u}else for(l=new xt(a),s=0;s<a;++s)e[s]&&(l[s]=hi[o[e[s]-1]++]>>15-e[s]);return l},Hn=new Ot(288);for(var Be=0;Be<144;++Be)Hn[Be]=8;for(var Be=144;Be<256;++Be)Hn[Be]=9;for(var Be=256;Be<280;++Be)Hn[Be]=7;for(var Be=280;Be<288;++Be)Hn[Be]=8;var Ha=new Ot(32);for(var Be=0;Be<32;++Be)Ha[Be]=5;var Pm=Ir(Hn,9,0),Em=Ir(Ha,5,0),kd=function(e){return(e+7)/8|0},Dm=function(e,t,r){return(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length),new Ot(e.subarray(t,r))},uf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Rm=function(e,t,r){var a=new Error(t||uf[e]);if(a.code=e,Error.captureStackTrace&&Error.captureStackTrace(a,Rm),!r)throw a;return a},Xt=function(e,t,r){r<<=t&7;var a=t/8|0;e[a]|=r,e[a+1]|=r>>8},hr=function(e,t,r){r<<=t&7;var a=t/8|0;e[a]|=r,e[a+1]|=r>>8,e[a+2]|=r>>16},Ls=function(e,t){for(var r=[],a=0;a<e.length;++a)e[a]&&r.push({s:a,f:e[a]});var s=r.length,i=r.slice();if(!s)return{t:Sd,l:0};if(s==1){var o=new Ot(r[0].s+1);return o[r[0].s]=1,{t:o,l:1}}r.sort(function(O,F){return O.f-F.f}),r.push({s:-1,f:25001});var l=r[0],d=r[1],u=0,g=1,p=2;for(r[0]={s:-1,f:l.f+d.f,l,r:d};g!=s-1;)l=r[r[u].f<r[p].f?u++:p++],d=r[u!=g&&r[u].f<r[p].f?u++:p++],r[g++]={s:-1,f:l.f+d.f,l,r:d};for(var w=i[0].s,a=1;a<s;++a)i[a].s>w&&(w=i[a].s);var N=new xt(w+1),c=mi(r[g-1],N,0);if(c>t){var a=0,k=0,C=c-t,h=1<<C;for(i.sort(function(F,M){return N[M.s]-N[F.s]||F.f-M.f});a<s;++a){var m=i[a].s;if(N[m]>t)k+=h-(1<<c-N[m]),N[m]=t;else break}for(k>>=C;k>0;){var S=i[a].s;N[S]<t?k-=1<<t-N[S]++-1:++a}for(;a>=0&&k;--a){var P=i[a].s;N[P]==t&&(--N[P],++k)}c=t}return{t:new Ot(N),l:c}},mi=function(e,t,r){return e.s==-1?Math.max(mi(e.l,t,r+1),mi(e.r,t,r+1)):t[e.s]=r},ml=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new xt(++t),a=0,s=e[0],i=1,o=function(d){r[a++]=d},l=1;l<=t;++l)if(e[l]==s&&l!=t)++i;else{if(!s&&i>2){for(;i>138;i-=138)o(32754);i>2&&(o(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(o(s),--i;i>6;i-=6)o(8304);i>2&&(o(i-3<<5|8208),i=0)}for(;i--;)o(s);i=1,s=e[l]}return{c:r.subarray(0,a),n:t}},mr=function(e,t){for(var r=0,a=0;a<t.length;++a)r+=e[a]*t[a];return r},Nd=function(e,t,r){var a=r.length,s=kd(t+2);e[s]=a&255,e[s+1]=a>>8,e[s+2]=e[s]^255,e[s+3]=e[s+1]^255;for(var i=0;i<a;++i)e[s+i+4]=r[i];return(s+4+a)*8},pl=function(e,t,r,a,s,i,o,l,d,u,g){Xt(t,g++,r),++s[256];for(var p=Ls(s,15),w=p.t,N=p.l,c=Ls(i,15),k=c.t,C=c.l,h=ml(w),m=h.c,S=h.n,P=ml(k),O=P.c,F=P.n,M=new xt(19),$=0;$<m.length;++$)++M[m[$]&31];for(var $=0;$<O.length;++$)++M[O[$]&31];for(var D=Ls(M,7),U=D.t,J=D.l,se=19;se>4&&!U[ul[se-1]];--se);var re=u+5<<3,X=mr(s,Hn)+mr(i,Ha)+o,ce=mr(s,w)+mr(i,k)+o+14+3*se+mr(M,U)+2*M[16]+3*M[17]+7*M[18];if(d>=0&&re<=X&&re<=ce)return Nd(t,g,e.subarray(d,d+u));var ee,T,A,R;if(Xt(t,g,1+(ce<X)),g+=2,ce<X){ee=Ir(w,N,0),T=w,A=Ir(k,C,0),R=k;var f=Ir(U,J,0);Xt(t,g,S-257),Xt(t,g+5,F-1),Xt(t,g+10,se-4),g+=14;for(var $=0;$<se;++$)Xt(t,g+3*$,U[ul[$]]);g+=3*se;for(var L=[m,O],v=0;v<2;++v)for(var x=L[v],$=0;$<x.length;++$){var j=x[$]&31;Xt(t,g,f[j]),g+=U[j],j>15&&(Xt(t,g,x[$]>>5&127),g+=x[$]>>12)}}else ee=Pm,T=Hn,A=Em,R=Ha;for(var $=0;$<l;++$){var G=a[$];if(G>255){var j=G>>18&31;hr(t,g,ee[j+257]),g+=T[j+257],j>7&&(Xt(t,g,G>>23&31),g+=Li[j]);var V=G&31;hr(t,g,A[V]),g+=R[V],V>3&&(hr(t,g,G>>5&8191),g+=Oi[V])}else hr(t,g,ee[G]),g+=T[G]}return hr(t,g,ee[256]),g+T[256]},Mm=new Fi([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Sd=new Ot(0),Im=function(e,t,r,a,s,i){var o=i.z||e.length,l=new Ot(a+o+5*(1+Math.ceil(o/7e3))+s),d=l.subarray(a,l.length-s),u=i.l,g=(i.r||0)&7;if(t){g&&(d[0]=i.r>>3);for(var p=Mm[t-1],w=p>>13,N=p&8191,c=(1<<r)-1,k=i.p||new xt(32768),C=i.h||new xt(c+1),h=Math.ceil(r/3),m=2*h,S=function(K){return(e[K]^e[K+1]<<h^e[K+2]<<m)&c},P=new Fi(25e3),O=new xt(288),F=new xt(32),M=0,$=0,D=i.i||0,U=0,J=i.w||0,se=0;D+2<o;++D){var re=S(D),X=D&32767,ce=C[re];if(k[X]=ce,C[re]=X,J<=D){var ee=o-D;if((M>7e3||U>24576)&&(ee>423||!u)){g=pl(e,d,0,P,O,F,$,U,se,D-se,g),U=M=$=0,se=D;for(var T=0;T<286;++T)O[T]=0;for(var T=0;T<30;++T)F[T]=0}var A=2,R=0,f=N,L=X-ce&32767;if(ee>2&&re==S(D-L))for(var v=Math.min(w,ee)-1,x=Math.min(32767,D),j=Math.min(258,ee);L<=x&&--f&&X!=ce;){if(e[D+A]==e[D+A-L]){for(var G=0;G<j&&e[D+G]==e[D+G-L];++G);if(G>A){if(A=G,R=L,G>v)break;for(var V=Math.min(L,G-2),W=0,T=0;T<V;++T){var _=D-L+T&32767,Q=k[_],te=_-Q&32767;te>W&&(W=te,ce=_)}}}X=ce,ce=k[X],L+=X-ce&32767}if(R){P[U++]=268435456|ui[A]<<18|hl[R];var Z=ui[A]&31,ke=hl[R]&31;$+=Li[Z]+Oi[ke],++O[257+Z],++F[ke],J=D+A,++M}else P[U++]=e[D],++O[e[D]]}}for(D=Math.max(D,J);D<o;++D)P[U++]=e[D],++O[e[D]];g=pl(e,d,u,P,O,F,$,U,se,D-se,g),u||(i.r=g&7|d[g/8|0]<<3,g-=7,i.h=C,i.p=k,i.i=D,i.w=J)}else{for(var D=i.w||0;D<o+u;D+=65535){var I=D+65535;I>=o&&(d[g/8|0]=u,I=o),g=Nd(d,g+1,e.subarray(D,I))}i.i=o}return Dm(l,0,a+kd(g)+s)},Bm=function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var r=t,a=9;--a;)r=(r&1&&-306674912)^r>>>1;e[t]=r}return e}(),Fm=function(){var e=-1;return{p:function(t){for(var r=e,a=0;a<t.length;++a)r=Bm[r&255^t[a]]^r>>>8;e=r},d:function(){return~e}}},Cd=function(e,t,r,a,s){if(!s&&(s={l:1},t.dictionary)){var i=t.dictionary.subarray(-32768),o=new Ot(i.length+e.length);o.set(i),o.set(e,i.length),e=o,s.w=i.length}return Im(e,t.level==null?6:t.level,t.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,a,s)},hf=function(e,t){var r={};for(var a in e)r[a]=e[a];for(var a in t)r[a]=t[a];return r},Kc=function(e,t,r){for(var a=e(),s=e.toString(),i=s.slice(s.indexOf("[")+1,s.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<a.length;++o){var l=a[o],d=i[o];if(typeof l=="function"){t+=";"+d+"=";var u=l.toString();if(l.prototype)if(u.indexOf("[native code]")!=-1){var g=u.indexOf(" ",8)+1;t+=u.slice(g,u.indexOf("(",g))}else{t+=u;for(var p in l.prototype)t+=";"+d+".prototype."+p+"="+l.prototype[p].toString()}else t+=u}else r[d]=l}return t},vs=[],mf=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},pf=function(e,t,r,a){if(!vs[r]){for(var s="",i={},o=e.length-1,l=0;l<o;++l)s=Kc(e[l],s,i);vs[r]={c:Kc(e[o],s,i),e:i}}var d=hf({},vs[r].e);return lf(vs[r].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,d,mf(d),a)},gf=function(){return[Ot,xt,Fi,Li,Oi,ul,ui,hl,Pm,Hn,Em,Ha,hi,Mm,Sd,Ir,Xt,hr,Ls,mi,ml,mr,Nd,pl,kd,Dm,Im,Cd,bf,Lm]},ff=function(){return[Om,Vm,pi,Fm,Bm]},Lm=function(e){return postMessage(e,[e.buffer])},xf=function(e,t,r,a,s,i){var o=pf(r,a,s,function(l,d){o.terminate(),i(l,d)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}},pi=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},Om=function(e,t){var r=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:t.level==9?2:0,e[9]=3,t.mtime!=0&&pi(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),r){e[3]=8;for(var a=0;a<=r.length;++a)e[a+10]=r.charCodeAt(a)}},Vm=function(e){return 10+(e.filename?e.filename.length+1:0)};function bf(e,t){return Cd(e,t||{},0,0)}function yf(e,t,r){return r||(r=t,t={}),typeof r!="function"&&Rm(7),xf(e,t,[gf,ff,function(){return[qc]}],function(a){return Lm(qc(a.data[0],a.data[1]))},2,r)}function qc(e,t){t||(t={});var r=Fm(),a=e.length;r.p(e);var s=Cd(e,t,Vm(t),8),i=s.length;return Om(s,t),pi(s,i-8,r.d()),pi(s,i-4,a),s}var vf=typeof TextDecoder<"u"&&new TextDecoder,kf=0;try{vf.decode(Sd,{stream:!0}),kf=1}catch{}const dr="teebi_robot_cms_v4";function Vi(){return{profile:structuredClone(sf),products:structuredClone(Ga),services:structuredClone(of),orders:[],stockHistory:[],print3dMaterials:structuredClone($e),print3dOrders:[],print3dCollaborators:[],print3dSetup:structuredClone(it)}}function Nf(e,t){const r=Ga[t]??Ga[0],a=e.id==="custom-3d-printing-service"&&e.price===5e4;return{...r,...e,originType:e.originType==="commercial"||e.originType==="self-made"||e.originType==="project-kit"?e.originType:r.originType,price:a?0:typeof e.price=="number"?e.price:r.price,costPrice:a?0:typeof e.costPrice=="number"?e.costPrice:r.costPrice,stock:typeof e.stock=="number"?e.stock:r.stock,minStockAlert:typeof e.minStockAlert=="number"?e.minStockAlert:3,unit:a?"Yêu cầu":typeof e.unit=="string"&&e.unit.trim()?e.unit:"Cái",showTechnicalGuide:typeof e.showTechnicalGuide=="boolean"?e.showTechnicalGuide:!0}}function xo(e){var p,w,N,c,k,C,h;const t=Vi();if(!e||typeof e!="object")return t;const r=e.profile?{...t.profile,...e.profile,specsSummary:Array.isArray(e.profile.specsSummary)?e.profile.specsSummary:t.profile.specsSummary,policyBadges:Array.isArray(e.profile.policyBadges)&&e.profile.policyBadges.length>0?e.profile.policyBadges:t.profile.policyBadges,buyingSteps:Array.isArray(e.profile.buyingSteps)&&e.profile.buyingSteps.length>0?e.profile.buyingSteps:t.profile.buyingSteps}:t.profile;(r.name==="Trần Xuân Bách"||r.name==="ROBOTICS & CONTROL")&&(r.name=t.profile.name,r.brandName=t.profile.brandName,r.logoMonogram=t.profile.logoMonogram,r.role=t.profile.role,r.tagline=t.profile.tagline,r.availabilityBadge=t.profile.availabilityBadge),(p=r.telegramChatId)!=null&&p.trim()||(r.telegramChatId=t.profile.telegramChatId),(w=r.telegramBotToken)!=null&&w.trim()||(r.telegramBotToken=t.profile.telegramBotToken);const a="AKfycbxa_3lFWocgawZDiOvrktx3L0hswM1xwEWVHrJSvGYuE1Zrp22RXOg2FM06gMYaLdyn";(!((N=r.paymentCheckUrl)!=null&&N.trim())||r.paymentCheckUrl==="/api/cms/payment-check"||r.paymentCheckUrl.includes(a))&&(r.paymentCheckUrl=t.profile.paymentCheckUrl),(!((c=r.orderWebhookUrl)!=null&&c.trim())||r.orderWebhookUrl.includes(a))&&(r.orderWebhookUrl=t.profile.orderWebhookUrl);const s=Array.isArray(e.products)?e.products.map((m,S)=>Nf(m,S)):t.products,i=new Set(s.map(m=>m.id)),o=s.some(m=>m.originType==="project-kit")?[]:Ga.filter(m=>m.originType==="project-kit"&&!i.has(m.id)),l=i.has("custom-3d-printing-service")?[]:Ga.filter(m=>m.id==="custom-3d-printing-service"),d=[...o,...l],u=d.length>0?[...s,...d]:s,g=!Array.isArray(e.services)||e.services.length===0||((k=e.services[0])==null?void 0:k.id)==="commercial-modules";return{profile:r,products:u,services:g?t.services:e.services,orders:Array.isArray(e.orders)?e.orders:[],stockHistory:Array.isArray(e.stockHistory)?e.stockHistory:[],print3dMaterials:Array.isArray(e.print3dMaterials)&&e.print3dMaterials.length>0&&!e.print3dMaterials.some(m=>m.id==="resin")&&e.print3dMaterials.some(m=>m.id==="carbon-cf")?e.print3dMaterials.map(m=>{const S=$e.find(P=>P.id===m.id||P.name.toLowerCase()===m.name.trim().toLowerCase());return typeof m.costPricePerGram=="number"&&Number.isFinite(m.costPricePerGram)?m:{...m,costPricePerGram:(S==null?void 0:S.costPricePerGram)??250}}):t.print3dMaterials,print3dOrders:Array.isArray(e.print3dOrders)?e.print3dOrders:[],print3dCollaborators:Array.isArray(e.print3dCollaborators)?e.print3dCollaborators:[],print3dSetup:e.print3dSetup&&typeof e.print3dSetup.maxBuildX=="number"?{...it,...e.print3dSetup,defaultShopCommissionPercent:typeof e.print3dSetup.defaultShopCommissionPercent=="number"?e.print3dSetup.defaultShopCommissionPercent===20&&!((C=e.print3dMaterials)!=null&&C.some(m=>typeof m.costPricePerGram=="number"))?25:e.print3dSetup.defaultShopCommissionPercent:it.defaultShopCommissionPercent,supportEnabled:!0}:{...it,...e.print3dSetup??{},printerModel:it.printerModel,defaultShopCommissionPercent:((h=e.print3dSetup)==null?void 0:h.defaultShopCommissionPercent)??it.defaultShopCommissionPercent,supportEnabled:!0,maxBuildX:800,maxBuildY:800,maxBuildZ:800}}}async function Sf(){try{const e=await fetch("/api/cms/data",{cache:"no-store"});if(e.ok){const t=await e.json();if(t&&!t.empty&&t.data)return{state:xo(t.data),source:"file"}}}catch{}try{const e=await fetch("./cms-data.json",{cache:"no-store"});if(e.ok){const t=await e.text();if(t.trim().startsWith("{"))return{state:xo(JSON.parse(t)),source:"file"}}}catch{}try{const e=localStorage.getItem(dr);if(e)return{state:xo(JSON.parse(e)),source:"localStorage"}}catch{}return{state:Vi(),source:"default"}}async function Ln(e){let t=!1,r=!1;try{localStorage.setItem(dr,JSON.stringify(e)),t=!0}catch{t=!1}try{const a=await fetch("/api/cms/data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(a.ok){const s=await a.json();r=!!(s!=null&&s.ok)}}catch{r=!1}return{savedToFile:r,savedToStorage:t}}function Cf(){try{localStorage.removeItem(dr)}catch{}}function wf(e){return new Promise((t,r)=>{const a=new FileReader;a.onload=()=>{typeof a.result=="string"?t(a.result):r(new Error("Failed to read file"))},a.onerror=()=>r(new Error("File read error")),a.readAsDataURL(e)})}async function ks(e){const t=await wf(e);try{const r=await fetch("/api/cms/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:e.name,dataUrl:t})});if(r.ok){const a=await r.json();if(a!=null&&a.ok&&typeof a.url=="string")return{url:a.url,storedOnDisk:!0}}}catch{}return{url:t,storedOnDisk:!1}}async function jf(e){try{localStorage.setItem(dr,JSON.stringify(e))}catch{}try{const t=await fetch("/api/cms/publish",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();return t.ok&&(r!=null&&r.ok)?{ok:!0,url:r.url}:{ok:!1,error:(r==null?void 0:r.error)||"Không thể đẩy lên GitHub Pages."}}catch{return{ok:!1,error:'Chức năng "Đẩy lên Web Online" chỉ chạy khi bạn mở Admin từ máy tính (http://localhost:5173/#admin).'}}}function $a(e,t,r,a){if(r===0)return e;const s=new Date().toISOString();let i=null;const o=e.products.map(l=>{if(l.id!==t)return l;const d=Math.max(0,l.stock+r);return i={id:`STK-${Date.now()}-${Math.floor(Math.random()*1e3)}`,timestamp:s,productId:l.id,productCode:l.code,productName:l.name.vi,change:d-l.stock,stockAfter:d,reason:a},{...l,stock:d}});return i?{...e,products:o,stockHistory:[i,...e.stockHistory].slice(0,200)}:e}function Ua(e,t,r){const a=(e.bankId||"").trim(),s=(e.bankAccountNo||"").replace(/\s+/g,"");if(!a||!s)return"";const i=new URLSearchParams;return t>0&&i.set("amount",String(Math.round(t))),r&&i.set("addInfo",r),e.bankAccountName&&i.set("accountName",e.bankAccountName.trim()),`https://img.vietqr.io/image/${encodeURIComponent(a)}-${encodeURIComponent(s)}-compact2.png?${i.toString()}`}const gi="teebi_verified_transfers_v1";function Tf(e){try{const t=localStorage.getItem(gi);if(!t)return!1;const r=JSON.parse(t);if(!Array.isArray(r))return!1;const a=r.map(s=>String(s||"").trim().toUpperCase()).filter(Boolean);if(a.includes(e))return!0;if(a.includes("ALL_TEST")){const s=a.filter(i=>i!=="ALL_TEST");return s.push(e),localStorage.setItem(gi,JSON.stringify(s.slice(-30))),!0}}catch{}return!1}async function fi(e,t,r){const a=t.trim().toUpperCase();if(a&&Tf(a))return{configured:!0,verified:!0};const s=(e.paymentCheckUrl||"").trim(),i=(e.telegramBotToken||"").trim(),o=(e.telegramChatId||"").trim();let l;if(s)try{const d=s.includes("?")?"&":"?",u=`${s}${d}code=${encodeURIComponent(t)}&amount=${encodeURIComponent(String(Math.round(r)))}`,g=new AbortController,p=setTimeout(()=>g.abort(),5e3),w=await fetch(u,{cache:"no-store",signal:g.signal});if(clearTimeout(p),w.ok){if((w.headers.get("content-type")||"").includes("application/json")||s.startsWith("http")){const c=await w.json();if((c==null?void 0:c.verified)===!0||(c==null?void 0:c.paid)===!0||(c==null?void 0:c.status)==="paid"||(c==null?void 0:c.status)==="verified")return{configured:!0,verified:!0}}}else l=`HTTP ${w.status}`}catch(d){l=d instanceof Error?d.message:"Network error"}if(i&&a)try{const d=new AbortController,u=setTimeout(()=>d.abort(),5e3),g=await fetch(`https://api.telegram.org/bot${i}/getUpdates?limit=20&allowed_updates=${encodeURIComponent(JSON.stringify(["message","channel_post","callback_query"]))}`,{cache:"no-store",signal:d.signal});if(clearTimeout(u),g.ok){const p=await g.json();if(p!=null&&p.ok&&Array.isArray(p.result)&&p.result.some(N=>{var C;const c=N.message||N.channel_post;if(!(c!=null&&c.text))return!1;const k=String(((C=c.chat)==null?void 0:C.id)??"");return o&&k!==o?!1:c.text.toUpperCase().includes(a)}))return{configured:!0,verified:!0}}}catch(d){l=l||(d instanceof Error?d.message:"Telegram error")}return{configured:!!(s||i),verified:!1,reason:l}}async function Af(e="ALL_TEST",t=0){const r=e.trim().toUpperCase()||"ALL_TEST";try{const a=localStorage.getItem(gi),s=a?JSON.parse(a):[],i=Array.isArray(s)?s.map(o=>String(o||"").trim().toUpperCase()).filter(o=>o&&o!==r):[];i.push(r),localStorage.setItem(gi,JSON.stringify(i.slice(-30)))}catch{}try{await fetch("/api/cms/payment-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:r,amount:t})})}catch{}}const xi={pending:"⏳ Chờ duyệt",preparing:"🔧 Đang chuẩn bị",packed:"📦 Đã đóng gói",dispatched:"📮 Đã gửi vận chuyển",shipping:"🚚 Đang giao hàng",completed:"✅ Đã giao / Hoàn thành",cancelled:"❌ Đã hủy (Hoàn kho)"};function za(e,t){const r=t.depositAmount??0,a=t.remainingAmount??Math.max(0,t.totalAmount-r),s=t.paymentMethod==="cod"?r>0?`✅ ĐÃ CỌC ${r.toLocaleString("vi-VN")}₫ · Thu COD ${a.toLocaleString("vi-VN")}₫`:"COD (Thu hộ khi nhận)":t.paymentStatus==="qr_verified"?`✅ ĐÃ NHẬN TIỀN QR (${t.transferCode||""})`:`⏳ Chờ kiểm tra CK (${t.transferCode||""})`,i=t.id.startsWith("3D-")&&t.paymentMethod==="cod"&&!(r>0),o=[`🛒 ĐƠN HÀNG #${t.id} — ${e.name}`,`📌 Trạng thái: ${xi[t.status]||t.status}`,`💳 Thanh toán: ${s}`,`👤 Khách: ${t.customerName} | SĐT: ${t.customerPhone}${t.customerEmail?` | ✉️ ${t.customerEmail}`:""}`,`📍 Địa chỉ: ${t.shippingAddress}`,`💰 Tổng tiền: ${t.totalAmount.toLocaleString("vi-VN")} ₫${r>0||t.id.startsWith("3D-")&&a>0?` | Đã cọc: ${r.toLocaleString("vi-VN")}₫ | Còn thiếu (COD): ${a.toLocaleString("vi-VN")}₫`:""}`,"--- Mặt hàng ---",...t.items.map(d=>`• ${d.code} × ${d.quantity} ${d.unit} (${d.name})`),t.note?`📝 Ghi chú: ${t.note}`:"",`🕒 Cập nhật: ${new Date().toLocaleTimeString("vi-VN")}`].filter(Boolean).join(`
`),l=[[...t.paymentMethod==="transfer"&&t.paymentStatus!=="qr_verified"?[{text:"✅ Xác nhận Đã nhận tiền",callback_data:`pay_ok:${t.id}`}]:[],...i?[{text:"💰 Đã nhận cọc 30%",callback_data:`dep_ok:${t.id}`}]:[],{text:"🔧 Duyệt · Đang chuẩn bị",callback_data:`st:preparing:${t.id}`}],[{text:"📦 Đã đóng gói",callback_data:`st:packed:${t.id}`},{text:"📮 Đã gửi hàng",callback_data:`st:dispatched:${t.id}`}],[{text:"🚚 Đang giao",callback_data:`st:shipping:${t.id}`},{text:"🎉 Hoàn thành",callback_data:`st:completed:${t.id}`},{text:"❌ Hủy đơn",callback_data:`st:cancelled:${t.id}`}]];return{text:o,reply_markup:{inline_keyboard:l}}}async function _i(e,t){var s,i,o;const r=(s=e.telegramBotToken)==null?void 0:s.trim(),a=(i=e.telegramChatId)==null?void 0:i.trim();if(!r||!a)return{ok:!1,error:"Chưa nhập Telegram Bot Token hoặc Chat ID"};try{const l=za(e,t),d=await fetch(`https://api.telegram.org/bot${r}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:a,...l})}),u=await d.json();return!d.ok||!(u!=null&&u.ok)?{ok:!1,error:(u==null?void 0:u.description)||`HTTP ${d.status}`}:{ok:!0,messageId:(o=u.result)==null?void 0:o.message_id}}catch(l){return{ok:!1,error:l instanceof Error?l.message:"Network error"}}}async function Pf(e,t){var i,o;const r=(i=e.telegramBotToken)==null?void 0:i.trim(),a=(o=e.telegramChatId)==null?void 0:o.trim();if(!r||!a)return{ok:!1,error:"Chưa cấu hình Bot Telegram"};const s=za(e,t);if(t.telegramMessageId)try{const l=await fetch(`https://api.telegram.org/bot${r}/editMessageText`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:a,message_id:t.telegramMessageId,...s})}),d=await l.json();if(l.ok&&(d!=null&&d.ok))return{ok:!0,messageId:t.telegramMessageId}}catch{}return _i(e,t)}async function Ef(e,t){const r=t??{id:"DH-TEST-BOT",createdAt:new Date().toISOString(),customerName:"Khách Test Telegram Bot",customerPhone:e.phone||"0789044703",shippingAddress:"Kiểm tra nút duyệt đơn trên Telegram",paymentMethod:"transfer",transferCode:"TBX888888",paymentStatus:"qr_reported",note:"Thử bấm Đang chuẩn bị / Đã đóng gói / Đã gửi / Đang giao trực tiếp trên Telegram!",status:"pending",items:[{productId:"pidsm-dc-servo",code:"PIDSM-V2.2",name:"Mạch Driver Động cơ DC Servo Encoder PIDSM v2.2",unitPrice:49e4,costPrice:26e4,quantity:1,unit:"Mạch"}],totalAmount:49e4,stockDeducted:!1};return _i(e,r)}async function _m(e){var a,s,i,o,l,d,u,g;const t=(a=e.profile.telegramBotToken)==null?void 0:a.trim(),r=(s=e.profile.telegramChatId)==null?void 0:s.trim();if(!t)return{changed:!1,nextState:e,processedCount:0,error:"Chưa có Bot Token"};try{const p=(e.profile.telegramLastUpdateId??0)+1,w=await fetch(`https://api.telegram.org/bot${t}/getUpdates?offset=${p}&timeout=0&allowed_updates=${encodeURIComponent(JSON.stringify(["message","channel_post","callback_query"]))}`,{cache:"no-store"}),N=await w.json();if(!w.ok||!(N!=null&&N.ok)||!Array.isArray(N.result))return{changed:!1,nextState:e,processedCount:0,error:(N==null?void 0:N.description)||`HTTP ${w.status}`};if(N.result.length===0)return{changed:!1,nextState:e,processedCount:0};let c=e,k=e.profile.telegramLastUpdateId??0,C=0;for(const m of N.result){if(typeof m.update_id=="number"&&m.update_id>k&&(k=m.update_id),m.callback_query){const S=m.callback_query,P=String(((o=(i=S.message)==null?void 0:i.chat)==null?void 0:o.id)??"");if(r&&P!==r)continue;const O=String(S.data||"");let F="Đã cập nhật!",M="";if(O.startsWith("pay_ok:"))M=O.slice(7),c={...c,orders:c.orders.map(D=>{var U;return D.id===M?{...D,paymentStatus:"qr_verified",depositAmount:D.totalAmount,remainingAmount:0,status:D.status==="pending"?"preparing":D.status,telegramMessageId:((U=S.message)==null?void 0:U.message_id)??D.telegramMessageId}:D})},F=`Đã xác nhận tiền đơn #${M}`,C++;else if(O.startsWith("dep_ok:"))M=O.slice(7),c={...c,orders:c.orders.map(D=>{var J;if(D.id!==M)return D;const U=D.depositAmount&&D.depositAmount>0?D.depositAmount:Math.round(D.totalAmount*.3);return{...D,paymentStatus:"qr_verified",depositAmount:U,remainingAmount:Math.max(0,D.totalAmount-U),status:D.status==="pending"?"preparing":D.status,telegramMessageId:((J=S.message)==null?void 0:J.message_id)??D.telegramMessageId}})},F=`Đã nhận cọc 30% đơn #${M}`,C++;else if(O.startsWith("st:")){const D=O.split(":"),U=D[1];M=D.slice(2).join(":"),U&&xi[U]&&(c=$m(c,M,U),(l=S.message)!=null&&l.message_id&&(c={...c,orders:c.orders.map(J=>J.id===M?{...J,telegramMessageId:S.message.message_id}:J)}),F=`${xi[U]} (#${M})`,C++)}fetch(`https://api.telegram.org/bot${t}/answerCallbackQuery`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({callback_query_id:S.id,text:F})}).catch(()=>{});const $=c.orders.find(D=>D.id===M);if($&&(Yn(c.profile,$,O.startsWith("pay_ok:")||O.startsWith("dep_ok:")?"payment_confirmed":"status_update").catch(()=>{}),(d=S.message)!=null&&d.message_id&&P)){const D=za(c.profile,$);fetch(`https://api.telegram.org/bot${t}/editMessageText`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:P,message_id:S.message.message_id,...D})}).catch(()=>{})}}if((u=m.message)!=null&&u.text){const S=m.message,P=String(((g=S.chat)==null?void 0:g.id)??"");if(r&&P!==r)continue;const O=String(S.text).trim().toLowerCase();if(O.startsWith("/don")||O.startsWith("/orders")){const F=c.orders.filter(M=>M.status!=="completed"&&M.status!=="cancelled");if(F.length===0)fetch(`https://api.telegram.org/bot${t}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:P,text:`✅ Hiện không có đơn nào đang chờ xử lý (Tổng lịch sử: ${c.orders.length} đơn).`})}).catch(()=>{});else for(const M of F.slice(0,5)){const $=za(c.profile,M);fetch(`https://api.telegram.org/bot${t}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:P,...$})}).catch(()=>{})}C++}else if(O.startsWith("/kho")||O.startsWith("/stock")){const F=c.products.map(M=>`${M.stock<=M.minStockAlert?"⚠️":"✅"} ${M.code}: còn ${M.stock} ${M.unit} (${M.price.toLocaleString("vi-VN")}₫)`);fetch(`https://api.telegram.org/bot${t}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:P,text:`📦 TỒN KHO HIỆN TẠI — ${c.profile.name}

${F.join(`
`)}`})}).catch(()=>{}),C++}}}return{changed:!0,nextState:{...c,profile:{...c.profile,telegramLastUpdateId:k}},processedCount:C}}catch(p){return{changed:!1,nextState:e,processedCount:0,error:p instanceof Error?p.message:"Network error"}}}async function Yn(e,t,r="status_update"){var l,d,u,g,p;const a=((l=e.paymentCheckUrl)==null?void 0:l.trim())||"",s=((d=e.orderWebhookUrl)==null?void 0:d.trim())||(a.startsWith("https://script.google.com/")?a:"");if(!s)return;const i=za(e,t),o=e.buyerEmailEnabled!==!1&&!(r==="new_order"&&t.paymentStatus!=="qr_verified")&&!(t.status==="pending"&&r!=="payment_confirmed"&&t.id!=="DH-TEST-GMAIL");await fetch(s,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({...t,event:r,statusLabel:xi[t.status]||t.status,shop:e.name,shopPhone:e.phone,buyerEmailEnabled:o,senderName:((u=e.buyerEmailSenderName)==null?void 0:u.trim())||`${e.name} — ${e.brandName}`,replyTo:((g=e.buyerEmailReplyTo)==null?void 0:g.trim())||e.email,emailFooter:((p=e.buyerEmailFooterNote)==null?void 0:p.trim())||`Cần hỗ trợ sơ đồ đấu nối hoặc bảo hành, vui lòng nhắn trực tiếp Zalo ${e.phone}.`,order:t,messageText:i.text})})}async function Df(e,t,r="preparing"){var l,d;const a=Wa(t);if(!a.valid)return{ok:!1,error:"Địa chỉ Gmail nhận thử chưa hợp lệ."};const s=((l=e.paymentCheckUrl)==null?void 0:l.trim())||"";if(!(((d=e.orderWebhookUrl)==null?void 0:d.trim())||(s.startsWith("https://script.google.com/")?s:"")))return{ok:!1,error:"Chưa cấu hình Webhook URL (Google Apps Script /exec) ở Mục 5 phía trên."};const o={id:"DH-TEST-GMAIL",createdAt:new Date().toISOString(),customerName:"Khách Test Gmail Tự Động",customerPhone:e.phone||"0789044703",customerEmail:a.normalized,shippingAddress:"Số 15 Tạ Quang Bửu, P. Bách Khoa, Q. Hai Bà Trưng, Hà Nội",paymentMethod:r==="payment_confirmed"?"transfer":"cod",transferCode:r==="payment_confirmed"?"TBX686868":void 0,paymentStatus:r==="payment_confirmed"?"qr_verified":"cod_unpaid",note:"Email mẫu kiểm tra hệ thống tự động báo trạng thái đơn",status:r==="payment_confirmed"?"preparing":r,items:[{productId:"pidsm-dc-servo",code:"PIDSM-V2.2",name:"Mạch Driver Động cơ DC Servo Encoder (PIDSM v2.2)",unitPrice:49e4,costPrice:26e4,quantity:1,unit:"Mạch"}],totalAmount:49e4,stockDeducted:!1};try{return await Yn({...e,buyerEmailEnabled:!0},o,r==="payment_confirmed"?"payment_confirmed":"status_update"),{ok:!0}}catch(u){return{ok:!1,error:u instanceof Error?u.message:"Lỗi gửi request sang Apps Script"}}}async function Rf(e){var a,s;const t=((a=e.profile.paymentCheckUrl)==null?void 0:a.trim())||"",r=((s=e.profile.orderWebhookUrl)==null?void 0:s.trim())||(t.startsWith("https://script.google.com/")?t:"");if(!r)return{changed:!1,nextState:e,importedCount:0,updatedCount:0,error:"Chưa cấu hình Google Apps Script /exec"};try{const i=r.includes("?")?"&":"?",o=await fetch(`${r}${i}action=list_orders`,{cache:"no-store"}),l=await o.json();if(!o.ok||!(l!=null&&l.ok)||!Array.isArray(l.orders))return{changed:!1,nextState:e,importedCount:0,updatedCount:0,error:(l==null?void 0:l.error)||"Apps Script chưa hỗ trợ ?action=list_orders (hãy Deploy bản mới nhất)"};const d=new Map;e.orders.forEach(c=>d.set(c.id,c));let u=!1,g=0,p=0;for(const c of l.orders){const k=String((c==null?void 0:c.id)||"").trim();if(!k)continue;const C=c.status||"pending",h=c.paymentStatus||"cod_unpaid",m=c.customerEmail?String(c.customerEmail).trim():void 0,S=Number(c.totalAmount||0),P=typeof c.depositAmount=="number"&&Number.isFinite(c.depositAmount)?c.depositAmount:void 0,O=typeof c.remainingAmount=="number"&&Number.isFinite(c.remainingAmount)?c.remainingAmount:P!==void 0?Math.max(0,S-P):void 0,F=d.get(k);if(F)(F.status!==C||F.paymentStatus!==h||P!==void 0&&(F.depositAmount??0)!==P||O!==void 0&&(F.remainingAmount??0)!==O||!F.customerEmail&&m)&&(d.set(k,{...F,status:C,paymentStatus:h,depositAmount:P??F.depositAmount,remainingAmount:O??F.remainingAmount,customerEmail:F.customerEmail||m}),p+=1,u=!0);else{const M=Array.isArray(c.items)?c.items.map($=>({productId:"sheet-sync",code:String($.code||"ĐƠN HÀNG"),name:String($.name||"Sản phẩm"),unitPrice:Number($.unitPrice||0),costPrice:0,quantity:Number($.quantity||1),unit:"Mạch"})):[];d.set(k,{id:k,createdAt:c.createdAt?String(c.createdAt):new Date().toISOString(),customerName:String(c.customerName||"Khách hàng"),customerPhone:String(c.customerPhone||""),customerEmail:m,shippingAddress:String(c.shippingAddress||""),paymentMethod:c.paymentMethod==="transfer"?"transfer":"cod",transferCode:c.transferCode?String(c.transferCode):void 0,paymentStatus:h,note:"",status:C,items:M,totalAmount:S,depositAmount:P,remainingAmount:O,stockDeducted:!1}),g+=1,u=!0}}if(!u)return{changed:!1,nextState:e,importedCount:0,updatedCount:0};const w=Array.from(d.values()).sort((c,k)=>new Date(k.createdAt).getTime()-new Date(c.createdAt).getTime()),N={...e,orders:w};try{localStorage.setItem(dr,JSON.stringify(N))}catch{}return{changed:!0,nextState:N,importedCount:g,updatedCount:p}}catch(i){return{changed:!1,nextState:e,importedCount:0,updatedCount:0,error:i instanceof Error?i.message:"Lỗi kết nối Google Sheet"}}}async function Wc(e,t){var s,i;const r=((s=e.paymentCheckUrl)==null?void 0:s.trim())||"",a=((i=e.orderWebhookUrl)==null?void 0:i.trim())||(r.startsWith("https://script.google.com/")?r:"");if(!a)return{ok:!1,error:"Chưa cấu hình Google Apps Script /exec"};try{return await fetch(a,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({type:"support_request",...t})}),{ok:!0}}catch(o){return{ok:!1,error:o instanceof Error?o.message:"Lỗi ghi yêu cầu lên Google Sheet"}}}function Dt(e=0,t=new Date){const r=new Date(t.getFullYear(),t.getMonth(),t.getDate()+e),a=r.getFullYear(),s=String(r.getMonth()+1).padStart(2,"0"),i=String(r.getDate()).padStart(2,"0");return`${a}-${s}-${i}`}function Mf(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());return t?`${t[3]}/${t[2]}/${t[1]}`:String(e||"").trim()}function Hr(e,t=new Date){const r=String(e||"").trim(),a=/^(\d{4})-(\d{2})-(\d{2})$/.exec(r);if(!a)return{deadlineYmd:"",daysRemaining:null,surchargePercent:0,tierCode:"standard",shortLabel:"Tiêu chuẩn 2–7 ngày (Miễn phí)",displayText:"Tiêu chuẩn 2–7 ngày (Miễn phí)"};const s=new Date(Number(a[1]),Number(a[2])-1,Number(a[3])),i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),o=Math.round((s.getTime()-i.getTime())/864e5);let l=0,d="standard",u="Hạn 2–7 ngày (Miễn phí)";return o<=0?(l=15,d="same_day",u="In gấp trong ngày (+15%)"):o===1?(l=6,d="next_day",u="Hạn sau 1 ngày (+6%)"):o>7&&(l=0,d="standard",u="Tiêu chuẩn >7 ngày (Miễn phí)"),{deadlineYmd:r,daysRemaining:o,surchargePercent:l,tierCode:d,shortLabel:u,displayText:`${Mf(r)} · ${u}`}}function It(e,t,r,a=1,s=0){const i=e&&e.length>0?e:$e,o=i.find(N=>N.name.toLowerCase()===t.trim().toLowerCase())??i[0],l=Math.max(0,Number(r)||0),d=Math.max(1,Math.round(Number(a)||1)),u=l>0?Math.round(l*o.pricePerGram+o.baseFee*d):0,g=Math.max(0,Number(s)||0),p=u>0&&g>0?Math.round(u*g/100):0,w=u+p;return{unitPricePerGram:o.pricePerGram,baseFee:o.baseFee,subtotalAmount:u,rushSurchargePercent:g,rushFeeAmount:p,totalAmount:w}}function ir(e=new Date){const t=Number.isNaN(e.getTime())?new Date:e,r=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=r.getDay()||7;r.setDate(r.getDate()+4-a);const s=r.getFullYear(),i=new Date(s,0,1),o=Math.ceil(((r.getTime()-i.getTime())/864e5+1)/7);return`${s}-W${String(o).padStart(2,"0")}`}function Os(e){const t=/^(\d{4})-W(\d{2})$/.exec(String(e||"").trim());if(!t)return{startLabel:"",endLabel:"",sundayLabel:"",displayRange:e||"Hiện tại"};const r=Number(t[1]),a=Number(t[2]),i=new Date(r,0,4).getDay()||7,o=new Date(r,0,4-(i-1)+(a-1)*7),l=new Date(o.getFullYear(),o.getMonth(),o.getDate()+6),d=p=>String(p).padStart(2,"0"),u=`${d(o.getDate())}/${d(o.getMonth()+1)}`,g=`${d(l.getDate())}/${d(l.getMonth()+1)}/${l.getFullYear()}`;return{startLabel:u,endLabel:g,sundayLabel:g,displayRange:`${u} – ${g}`}}function gl(e,t){const r=e&&e.length>0?e:$e,a=String(t||"").trim().toLowerCase();if(!a)return r[0]||$e[0];const s=r.find(i=>i.name.trim().toLowerCase()===a||i.id.trim().toLowerCase()===a);return s||(a.includes("petg")?r.find(i=>i.id==="petg"||i.name.toLowerCase().includes("petg"))||$e[1]:a.includes("abs")?r.find(i=>i.id==="abs"||i.name.toLowerCase().includes("abs"))||$e[2]:a.includes("tpu")?r.find(i=>i.id==="tpu"||i.name.toLowerCase().includes("tpu"))||$e[3]:a.includes("carbon")||a.includes("cacbon")||/\bcf\b/.test(a)?r.find(i=>i.id==="carbon-cf"||i.name.toLowerCase().includes("carbon")||i.name.toLowerCase().includes("cacbon"))||$e[4]:a.includes("pla")?r.find(i=>i.id==="pla"||i.name.toLowerCase().includes("pla"))||$e[0]:r[0]||$e[0])}function If(e,t,r){if(typeof r=="number"&&Number.isFinite(r)&&r>0)return Math.round(r);const a=gl(e,t);if(a&&typeof a.costPricePerGram=="number"&&Number.isFinite(a.costPricePerGram)&&a.costPricePerGram>=0)return Math.round(a.costPricePerGram);const s=gl($e,t);return Math.max(0,Math.round((s==null?void 0:s.costPricePerGram)??250))}function dt(e,t,r=25){const a=Math.max(0,Number(t.actualWeightGrams||0)),s=Math.max(0,Number(t.weightGrams||0)),i=a>0?a:s,o=Math.max(1,Number(t.quantity||1)),l=Math.max(0,Number(t.rushSurchargePercent||0));let d=0;Number(t.totalAmount||0)>0?d=Math.round(Number(t.totalAmount||0)):i>0&&(d=It(e,t.material,i,o,l).totalAmount);const u=If(e,t.material,t.materialCostPerGram),g=i>0&&u>0?Math.round(i*u):0,p=Math.max(0,d-g),w=typeof t.shopCommissionPercent=="number"&&Number.isFinite(t.shopCommissionPercent)?t.shopCommissionPercent:r,N=Math.min(100,Math.max(0,Number(w)||0)),c=p>0?Math.round(p*N/100):0,k=Math.max(0,p-c),C=k+g;return{effectiveWeightGrams:i,baseAmount:d,materialCostPerGram:u,materialCostAmount:g,netAfterMaterialAmount:p,shopCommissionPercent:N,shopFeeAmount:c,printerWorkAmount:k,printerPayoutAmount:C}}function Gm(e,t,r,a=25,s="unpaid_all"){const i=new Map;for(const o of e){if(o.adminConfirmed!==!0)continue;const l=(o.printerName||"").trim(),d=(o.printerId||"").trim();if(!l&&!d)continue;const u=(o.payoutWeekKey||"").trim()||ir(o.createdAt?new Date(o.createdAt):new Date);if(s==="unpaid_all"){if(o.payoutStatus==="paid")continue}else if(s!=="all"&&u!==s)continue;const g=t.find(m=>d&&m.id===d)??t.find(m=>l&&m.name.trim().toLowerCase()===l.toLowerCase())??null,p=g?g.id:d||l.toLowerCase(),w=(g==null?void 0:g.id)||d||"",N=(g==null?void 0:g.name)||l||d,c=(g==null?void 0:g.phone)||"",k=s==="unpaid_all"?p:`${u}::${p}`,C=dt(r,o,a),h=i.get(k);h?(h.orders.push(o),u>h.weekKey&&(h.weekKey=u),h.totalActualWeightGrams=Number((h.totalActualWeightGrams+C.effectiveWeightGrams).toFixed(2)),h.totalBaseAmount+=C.baseAmount,h.totalMaterialCost+=C.materialCostAmount,h.totalShopFee+=C.shopFeeAmount,h.totalPrinterPayout+=C.printerPayoutAmount,h.allPaid=h.allPaid&&o.payoutStatus==="paid"):i.set(k,{groupKey:k,weekKey:u,collaboratorKey:p,collaboratorId:w,collaboratorName:N,collaboratorPhone:c,collaborator:g,orders:[o],totalActualWeightGrams:Number(C.effectiveWeightGrams.toFixed(2)),totalBaseAmount:C.baseAmount,totalMaterialCost:C.materialCostAmount,totalShopFee:C.shopFeeAmount,totalPrinterPayout:C.printerPayoutAmount,allPaid:o.payoutStatus==="paid"})}return Array.from(i.values()).sort((o,l)=>o.weekKey!==l.weekKey?l.weekKey.localeCompare(o.weekKey):l.totalPrinterPayout-o.totalPrinterPayout)}const $r=250,Ka=$r*1024*1024;function aa(e){return/\.(zip|rar|7z|gz|tgz|bz2|xz|3mf)$/i.test(e)}function fl(e){return new Promise((t,r)=>{const a=new FileReader;a.onload=()=>{const s=typeof a.result=="string"?a.result:"",i=s.indexOf(",");t(i>=0?s.slice(i+1):s)},a.onerror=()=>r(new Error("Không đọc được dữ liệu file 3D.")),a.readAsDataURL(e)})}function Ns(e){return fl(e).then(t=>({base64:t,mimeType:e.type||"application/octet-stream"}))}function xl(e){return new Promise((t,r)=>{try{yf(e,{level:1,mem:8},(a,s)=>{a?r(a):t(s)})}catch(a){r(a)}})}async function Ss(e){try{const t=new Uint8Array(await e.arrayBuffer()),r=await xl(t),a=new Blob([r],{type:"application/x-gzip"});return{base64:await fl(a),compressedSize:r.byteLength}}catch{try{const t=globalThis.CompressionStream;if(!t||typeof e.stream!="function")return null;const r=e.stream().pipeThrough(new t("gzip")),a=await new Response(r).arrayBuffer(),s=new Blob([a],{type:"application/x-gzip"});return{base64:await fl(s),compressedSize:a.byteLength}}catch{return null}}}function Bf(e,t,r,a){return typeof XMLHttpRequest>"u"?fetch(e,{method:"PUT",headers:{"Content-Type":r},body:t}).then(async s=>{if(!s.ok)return{ok:!1,error:`Drive PUT HTTP ${s.status}`};const i=await s.json();return i!=null&&i.id?{ok:!0,driveFileId:String(i.id)}:{ok:!1,error:"Drive không trả về File ID"}}):new Promise(s=>{const i=new XMLHttpRequest;i.open("PUT",e,!0),i.setRequestHeader("Content-Type",r),i.upload.onprogress=o=>{if(o.lengthComputable&&o.total>0){const l=Math.min(99,Math.round(o.loaded/o.total*100));a==null||a(`Đang tải ${t.name} lên Drive ${l}%...`)}},i.onload=()=>{if(i.status<200||i.status>=300){s({ok:!1,error:`Drive PUT HTTP ${i.status}`});return}try{const o=JSON.parse(i.responseText||"{}");if(!(o!=null&&o.id)){s({ok:!1,error:"Drive không trả về File ID"});return}s({ok:!0,driveFileId:String(o.id)})}catch{s({ok:!1,error:"Drive trả về JSON không hợp lệ"})}},i.onerror=()=>s({ok:!1,error:"Lỗi mạng khi tải file lên Drive"}),i.send(t)})}async function Cs(e,t,r,a,s){if(t.size>Ka)return{ok:!1,error:`File vượt quá giới hạn ${$r}MB`};if(!e)return{ok:!1,error:"Chưa cấu hình Webhook /exec"};const i=t.type||"application/octet-stream";try{s==null||s(`Đang khởi tạo phiên tải ${t.name}...`);const o=await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({type:"print3d_init_upload",fileName:r,subfolderName:a||"",mimeType:i,fileSize:t.size,origin:typeof window<"u"?window.location.origin:""})});if(!o.ok)return{ok:!1,error:`Init HTTP ${o.status}`};const l=await o.json();return!(l!=null&&l.ok)||!l.uploadUrl?{ok:!1,error:(l==null?void 0:l.error)||"Apps Script chưa bật print3d_init_upload"}:await Bf(String(l.uploadUrl),t,i,s)}catch(o){return{ok:!1,error:o instanceof Error?o.message:"Lỗi upload thẳng lên Drive"}}}async function bl(e,t,r){var o,l;const a=((o=e.paymentCheckUrl)==null?void 0:o.trim())||"",s=((l=e.orderWebhookUrl)==null?void 0:l.trim())||(a.startsWith("https://script.google.com/")?a:"");if(!s)return{ok:!1,error:"Chưa cấu hình Google Apps Script /exec để quét link."};const i=It(t,r.material,1,r.quantity);try{const d=await fetch(s,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({type:"scan_drive_stl",fileUrl:r.fileUrl.trim(),material:r.material,quantity:r.quantity,unitPricePerGram:i.unitPricePerGram,baseFee:i.baseFee,printerModel:r.setup.printerModel,nozzleMm:r.setup.nozzleMm,layerHeightMm:r.setup.layerHeightMm,wallLoops:r.setup.wallLoops,topBottomLayers:r.setup.topBottomLayers,infillPercent:r.setup.infillPercent||20,uiInfillPercent:r.setup.infillPercent||20,supportEnabled:!0})}),u=await d.json();if(!d.ok||!(u!=null&&u.ok))return{ok:!1,error:(u==null?void 0:u.error)||"Không đọc được file từ link."};const g=Array.isArray(u.files)?u.files.map(p=>({fileName:String(p.fileName||"model.stl"),fileId:p.fileId?String(p.fileId):void 0,fileSize:typeof p.fileSize=="number"?p.fileSize:void 0,perPartWeightGrams:Number(p.perPartWeightGrams||0),dimensions:p.dimensions?String(p.dimensions):void 0,printTime:p.printTime?String(p.printTime):void 0,volumeCm3:typeof p.volumeCm3=="number"?p.volumeCm3:void 0})):void 0;return{ok:!0,isFolder:!!u.isFolder,folderName:u.folderName?String(u.folderName):void 0,fileName:u.fileName?String(u.fileName):void 0,perPartWeightGrams:Number(u.perPartWeightGrams||0),totalWeightGrams:Number(u.totalWeightGrams||0),totalAmount:Number(u.totalAmount||0),dimensions:u.dimensions?String(u.dimensions):void 0,printTime:u.printTime?String(u.printTime):void 0,volumeCm3:Number(u.volumeCm3||0),source:u.source?String(u.source):"drive",files:g}}catch(d){return{ok:!1,error:d instanceof Error?d.message:"Lỗi quét link Drive (hãy chắc chắn đã Deploy Apps Script mới nhất & bật chia sẻ Bất kỳ ai có liên kết)."}}}async function wd(e,t,r){var G,V,W,_,Q,te,Z,ke;const a=new Date,s=String(a.getFullYear()).slice(-2),i=String(a.getMonth()+1).padStart(2,"0"),o=String(a.getDate()).padStart(2,"0"),l=String(Math.floor(100+Math.random()*900)),d=`3D-${s}${i}${o}-${l}`,u=r.multiFiles&&r.multiFiles.length>0?r.multiFiles:r.file?[{file:r.file,quantity:r.quantity}]:[],g=u[0],p=u.length>1?`${u.length} files (${u.map(I=>`${I.quantity}x ${I.file.name}`).join(", ")})`:(g==null?void 0:g.file.name)||"model-3d.stl",w=((g==null?void 0:g.file.name)||"model-3d.stl").replace(/[^\w.\-()]+/g,"_"),N=u.length>1?d:u.length===1?`${d}_x${g.quantity}_${w}`:`${d}_model-3d.stl`,c=Hr(r.deliveryDeadline),k=It(t,r.material,r.weightGrams,r.quantity,c.surchargePercent),C=((G=e.paymentCheckUrl)==null?void 0:G.trim())||"",h=((V=e.orderWebhookUrl)==null?void 0:V.trim())||(C.startsWith("https://script.google.com/")?C:"");let m="",S="application/octet-stream",P=!1,O="";const F=[],M=[],$=[],D=r.onProgress;for(const I of u)if(I.file.size>Ka)throw new Error(`File "${I.file.name}" vượt quá giới hạn tối đa ${$r}MB.`);if(u.length===1&&g){const I=g.file;if(I.size<=10*1024*1024){if(!aa(I.name)&&I.size>2*1024*1024){D==null||D("Đang nén nhanh file...");const K=await Ss(I);K&&K.compressedSize<I.size*.92&&(m=K.base64,S=I.type||"application/octet-stream",P=!0)}if(!m){const K=await Ns(I);m=K.base64,S=K.mimeType}}else{const K=h?await Cs(h,I,N,void 0,D):{ok:!1};if(K.ok&&K.driveFileId)O=K.driveFileId;else if(aa(I.name))if(I.size<=15*1024*1024){const pe=await Ns(I);m=pe.base64,S=pe.mimeType}else $.push(`File ${(I.size/(1024*1024)).toFixed(1)}MB quá lớn (cần Deploy Apps Script mới).`);else{let pe=!1;if(h&&I.size>95*1024*1024){D==null||D("Đang nén nhanh để đẩy file lớn lên Drive...");try{const ye=await xl(new Uint8Array(await I.arrayBuffer())),Y=new File([ye],`${N}.gz`,{type:"application/gzip"}),xe=await Cs(h,Y,`${N}.gz`,void 0,D);xe.ok&&xe.driveFileId&&(O=xe.driveFileId,pe=!0)}catch{}}if(!pe){D==null||D("Đang nén siêu nhanh (level 1)...");const ye=await Ss(I);if(ye&&ye.compressedSize<=32*1024*1024)m=ye.base64,S=I.type||"application/octet-stream",P=!0;else if(I.size<=15*1024*1024){const Y=await Ns(I);m=Y.base64,S=Y.mimeType}else $.push(`File ${(I.size/(1024*1024)).toFixed(1)}MB quá lớn (cần Deploy Apps Script mới).`)}}}}else if(u.length>1){let I=18874368;const K=[],pe=[];for(const Y of u){const xe=Y.file.name.replace(/[^\w.\-()]+/g,"_"),q=`x${Y.quantity}_${xe}`;Y.file.size>10*1024*1024?K.push({item:Y,prefixedName:q}):pe.push({item:Y,prefixedName:q})}const ye=[...pe];for(let Y=0;Y<K.length;Y+=2){const xe=K.slice(Y,Y+2),q=await Promise.all(xe.map(async ie=>({entry:ie,res:h?await Cs(h,ie.item.file,ie.prefixedName,d,D):{ok:!1,error:"Chưa có Webhook"}})));for(const{entry:ie,res:be}of q)if(be.ok&&be.driveFileId)F.push({driveFileId:be.driveFileId,fileName:ie.prefixedName,quantity:ie.item.quantity});else if(h&&ie.item.file.size>95*1024*1024&&!aa(ie.item.file.name)){let me=!1;try{D==null||D(`Đang nén nhanh ${ie.item.file.name} để đẩy lên Drive...`);const fe=await xl(new Uint8Array(await ie.item.file.arrayBuffer())),mt=`${ie.prefixedName}.gz`,B=new File([fe],mt,{type:"application/gzip"}),de=await Cs(h,B,mt,d,D);de.ok&&de.driveFileId&&(F.push({driveFileId:de.driveFileId,fileName:mt,quantity:ie.item.quantity}),me=!0)}catch{}me||ye.push(ie)}else ye.push(ie)}for(const{item:Y,prefixedName:xe}of ye)if(Y.file.size<=10*1024*1024&&Y.file.size<=I){if(!aa(Y.file.name)&&Y.file.size>2*1024*1024){D==null||D(`Đang nén nhanh ${Y.file.name}...`);const ie=await Ss(Y.file);if(ie&&ie.compressedSize<Y.file.size*.92&&ie.compressedSize<=I){M.push({fileName:xe,quantity:Y.quantity,mimeType:Y.file.type||"application/octet-stream",fileBase64:ie.base64,fileIsGzipped:!0}),I-=ie.compressedSize;continue}}const q=await Ns(Y.file);M.push({fileName:xe,quantity:Y.quantity,mimeType:q.mimeType,fileBase64:q.base64,fileIsGzipped:!1}),I-=Y.file.size}else if(aa(Y.file.name))$.push(`File ${Y.file.name} quá lớn chưa đẩy được.`);else{D==null||D(`Đang nén siêu nhanh ${Y.file.name}...`);const q=await Ss(Y.file);q&&q.compressedSize<=I?(M.push({fileName:xe,quantity:Y.quantity,mimeType:Y.file.type||"application/octet-stream",fileBase64:q.base64,fileIsGzipped:!0}),I-=q.compressedSize):$.push(`File ${Y.file.name} quá lớn chưa đẩy được.`)}}D==null||D("Đang ghi Google Sheet & gửi báo giá...");const U=$.join(" ");let J=((W=r.externalFileUrl)==null?void 0:W.trim())||"",se="",re=r.weightGrams,X=k.totalAmount,ce=r.dimensions||"",ee=r.printTime||"",T=!1;const A=[((_=r.note)==null?void 0:_.trim())||"",U].filter(Boolean).join(" · "),R={...r.setup??it,supportEnabled:!0},f={type:"print3d_order",id:d,customerName:r.customerName.trim(),customerPhone:r.customerPhone.trim(),customerEmail:((Q=r.customerEmail)==null?void 0:Q.trim())||"",material:r.material,infill:r.infill,color:((te=r.color)==null?void 0:te.trim())||"",weightGrams:r.weightGrams,quantity:r.quantity,unitPricePerGram:k.unitPricePerGram,baseFee:k.baseFee,totalAmount:k.totalAmount,fileName:p,fileSummary:r.fileSummary||"",driveFileCode:N,driveFileUrl:J,uploadedDriveFileId:O,fileIsGzipped:P,fileBase64:m,fileMimeType:S,multiFileFolder:u.length>1,uploadedDriveFiles:F,extraFiles:M,dimensions:ce,printTime:ee,gcodeText:r.gcodeText||"",setup:R,autoQuoteEmail:r.autoQuoteEmail!==!1,deliveryDeadline:c.deadlineYmd,deliveryLabel:c.displayText,subtotalAmount:k.subtotalAmount,rushSurchargePercent:c.surchargePercent,rushFeeAmount:k.rushFeeAmount,shippingMethod:r.shippingMethod||"delivery",shippingAddress:((Z=r.shippingAddress)==null?void 0:Z.trim())||"",paymentMethod:r.paymentMethod||"cod",transferCode:((ke=r.transferCode)==null?void 0:ke.trim())||"",paymentStatus:r.paymentStatus||(r.paymentMethod==="transfer"?"qr_reported":"cod_unpaid"),depositAmount:(r.paymentMethod||"cod")==="cod"?r.depositAmount??Math.round(k.totalAmount*.3):0,codRemainingAmount:(r.paymentMethod||"cod")==="cod"?r.codRemainingAmount??Math.max(0,k.totalAmount-(r.depositAmount??Math.round(k.totalAmount*.3))):0,approvedByAdmin:!!r.approvedByAdmin,claimedByPrinter:!1,note:A};let L=U||void 0,v=!1,x=!r.approvedByAdmin;if(h){try{const I=await fetch(h,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(f)});if(I.ok){const K=await I.json();if((K==null?void 0:K.ok)===!1)return{ok:!1,order:{id:d,createdAt:a.toISOString(),customerName:f.customerName,customerPhone:f.customerPhone,material:f.material,infill:f.infill,weightGrams:re,quantity:f.quantity,unitPricePerGram:k.unitPricePerGram,baseFee:k.baseFee,totalAmount:X,fileName:p,driveFileCode:N,shippingMethod:f.shippingMethod,shippingAddress:f.shippingAddress||void 0,paymentMethod:f.paymentMethod,transferCode:f.transferCode||void 0,paymentStatus:f.paymentStatus,depositAmount:f.depositAmount,codRemainingAmount:f.codRemainingAmount,claimedByPrinter:!1,printStatus:"waiting"},error:String(K.error||"Đơn In 3D chứa file không hợp lệ.")};K!=null&&K.driveUrl&&(J=String(K.driveUrl)),K!=null&&K.gcodeDriveUrl&&(se=String(K.gcodeDriveUrl)),typeof(K==null?void 0:K.weightGrams)=="number"&&K.weightGrams>0&&(re=K.weightGrams),typeof(K==null?void 0:K.totalAmount)=="number"&&K.totalAmount>0&&(X=K.totalAmount),K!=null&&K.dimensions&&(ce=String(K.dimensions)),K!=null&&K.printTime&&(ee=String(K.printTime)),typeof(K==null?void 0:K.quotedByEmail)=="boolean"&&(T=K.quotedByEmail),(K==null?void 0:K.syncedToDonHang)===!0&&(v=!0),typeof(K==null?void 0:K.pendingApproval)=="boolean"&&(x=K.pendingApproval)}}catch{try{await fetch(h,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(f)}),f.autoQuoteEmail&&f.customerEmail&&X>0&&(T=!0)}catch(I){L=I instanceof Error?I.message:"Lỗi gửi đơn In 3D"}}if(!v&&!L){const I=f.shippingMethod==="pickup"?"Nhận trực tiếp tại xưởng":f.shippingAddress||"Chưa cung cấp địa chỉ",K=f.paymentMethod==="cod"?f.depositAmount||Math.round(X*.3):0,pe=f.paymentMethod==="cod"?Math.max(0,X-K):0,ye=f.paymentStatus==="qr_verified"?f.paymentMethod==="transfer"?X:K:0,Y=Math.max(0,X-ye),xe=f.paymentMethod==="cod"&&K>0?` · Cọc 30%: ${ne(K)} · Thu COD: ${ne(pe)}`:"",q=`[In 3D] ${f.material} (${re}g · ${f.fileSummary||p}${f.deliveryLabel?` · Hạn: ${f.deliveryLabel}`:""}${xe})`,ie={event:"new_order",buyerEmailEnabled:!1,shop:e.name,shopPhone:e.phone,order:{id:d,createdAt:a.toISOString(),customerName:f.customerName,customerPhone:f.customerPhone,customerEmail:f.customerEmail||"",shippingAddress:I,paymentMethod:f.paymentMethod,transferCode:f.transferCode||"",paymentStatus:f.paymentStatus,status:"pending",totalAmount:X,depositAmount:ye,remainingAmount:Y,items:[{code:q,name:q,quantity:f.quantity,unitPrice:X}]}};try{await fetch(h,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(ie)})}catch{try{await fetch(h,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(ie)})}catch{}}}}const j={id:d,createdAt:a.toISOString(),customerName:f.customerName,customerPhone:f.customerPhone,customerEmail:f.customerEmail||void 0,material:f.material,infill:f.infill,color:f.color||void 0,weightGrams:re,quantity:f.quantity,unitPricePerGram:k.unitPricePerGram,baseFee:k.baseFee,totalAmount:X,fileName:p,fileSummary:r.fileSummary||void 0,driveFileCode:N,driveFileUrl:J||void 0,gcodeDriveUrl:se||void 0,dimensions:ce||void 0,printTime:ee||void 0,quotedByEmail:T,shippingMethod:f.shippingMethod,shippingAddress:f.shippingAddress||void 0,paymentMethod:f.paymentMethod,transferCode:f.transferCode||void 0,paymentStatus:f.paymentStatus,depositAmount:f.depositAmount,codRemainingAmount:f.codRemainingAmount,claimedByPrinter:!1,printStatus:"waiting",deliveryDeadline:c.deadlineYmd||void 0,deliveryLabel:c.displayText,subtotalAmount:k.subtotalAmount,rushSurchargePercent:c.surchargePercent,rushFeeAmount:k.rushFeeAmount,pendingAdminApproval:x,note:f.note||void 0};return{ok:!L,order:j,error:L}}async function jd(e,t){var s,i;const r=((s=e.paymentCheckUrl)==null?void 0:s.trim())||"",a=((i=e.orderWebhookUrl)==null?void 0:i.trim())||(r.startsWith("https://script.google.com/")?r:"");if(a)try{await fetch(a,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({type:"print3d_update",id:t.id,material:t.material||"",weightGrams:t.weightGrams,quantity:t.quantity,totalAmount:t.totalAmount,claimedByPrinter:t.claimedByPrinter,printerId:t.printerId||"",printerName:t.printerName||"",printStatus:t.printStatus,actualWeightGrams:t.actualWeightGrams??0,materialCostPerGram:t.materialCostPerGram??0,materialCostAmount:t.materialCostAmount??0,netAfterMaterialAmount:t.netAfterMaterialAmount??0,shopCommissionPercent:t.shopCommissionPercent,settlementBaseAmount:t.settlementBaseAmount??0,shopFeeAmount:t.shopFeeAmount??0,printerPayoutAmount:t.printerPayoutAmount??0,adminConfirmed:!!t.adminConfirmed,payoutWeekKey:t.payoutWeekKey||"",payoutStatus:t.payoutStatus||"unpaid"})})}catch{}}async function qa(e){var a,s;const t=((a=e.profile.paymentCheckUrl)==null?void 0:a.trim())||"",r=((s=e.profile.orderWebhookUrl)==null?void 0:s.trim())||(t.startsWith("https://script.google.com/")?t:"");if(!r)return{changed:!1,nextState:e,count:0,error:"Chưa có Webhook /exec"};try{const i=r.includes("?")?"&":"?",o=await fetch(`${r}${i}action=list_3d_orders`,{cache:"no-store"}),l=await o.json();if(!o.ok||!(l!=null&&l.ok)||!Array.isArray(l.orders))return{changed:!1,nextState:e,count:0,error:"Apps Script chưa bật ?action=list_3d_orders (hãy Deploy bản mới nhất)"};const d=new Map;(e.print3dOrders??[]).forEach(c=>d.set(c.id,c));let u=!1;for(const c of l.orders){const k=String((c==null?void 0:c.id)||"").trim();if(!k)continue;const C=d.get(k),h=Number(c.actualWeightGrams||0),m=Number(c.materialCostPerGram||0),S=Number(c.materialCostAmount||0),P=Number(c.netAfterMaterialAmount||0),O=typeof c.shopCommissionPercent=="number"&&Number.isFinite(c.shopCommissionPercent)?c.shopCommissionPercent:void 0,F=Number(c.shopFeeAmount||0),M=Number(c.printerPayoutAmount||0),$=!!c.adminConfirmed,D=c.payoutWeekKey?String(c.payoutWeekKey):void 0,U=c.payoutStatus==="paid"?"paid":c.payoutStatus==="unpaid"?"unpaid":void 0,J=c.shippingMethod==="pickup"?"pickup":c.shippingMethod==="delivery"?"delivery":void 0,se=c.shippingAddress?String(c.shippingAddress):void 0,re=c.paymentMethod==="transfer"?"transfer":c.paymentMethod==="cod"?"cod":void 0,X=c.transferCode?String(c.transferCode):void 0,ce=c.paymentStatus==="qr_verified"||c.paymentStatus==="qr_reported"||c.paymentStatus==="cod_unpaid"?c.paymentStatus:void 0,ee=typeof c.depositAmount=="number"&&Number.isFinite(c.depositAmount)?c.depositAmount:void 0,T=typeof c.codRemainingAmount=="number"&&Number.isFinite(c.codRemainingAmount)?c.codRemainingAmount:void 0;C?(C.claimedByPrinter!==!!c.claimedByPrinter||C.printStatus!==c.printStatus||C.weightGrams!==Number(c.weightGrams||0)||C.totalAmount!==Number(c.totalAmount||0)||c.printerName&&C.printerName!==String(c.printerName)||h>0&&(C.actualWeightGrams||0)!==h||m>0&&(C.materialCostPerGram||0)!==m||S>0&&(C.materialCostAmount||0)!==S||P>0&&(C.netAfterMaterialAmount||0)!==P||O!==void 0&&C.shopCommissionPercent!==O||$&&!C.adminConfirmed||U==="paid"&&C.payoutStatus!=="paid"||!C.deliveryLabel&&c.deliveryLabel||!C.driveFileUrl&&c.driveFileUrl||J&&C.shippingMethod!==J||!C.shippingAddress&&se||re&&C.paymentMethod!==re||ce&&C.paymentStatus!==ce||ee!==void 0&&C.depositAmount!==ee)&&(d.set(k,{...C,weightGrams:Number(c.weightGrams||C.weightGrams),quantity:Number(c.quantity||C.quantity),totalAmount:Number(c.totalAmount||C.totalAmount),driveFileUrl:C.driveFileUrl||(c.driveFileUrl?String(c.driveFileUrl):void 0),claimedByPrinter:!!c.claimedByPrinter,printerId:c.printerId?String(c.printerId):C.printerId,printerName:c.printerName?String(c.printerName):C.printerName,printStatus:c.printStatus||C.printStatus,actualWeightGrams:h>0?h:C.actualWeightGrams,materialCostPerGram:m>0?m:C.materialCostPerGram,materialCostAmount:S>0?S:C.materialCostAmount,netAfterMaterialAmount:P>0?P:C.netAfterMaterialAmount,shopCommissionPercent:O??C.shopCommissionPercent,shopFeeAmount:F>0?F:C.shopFeeAmount,printerPayoutAmount:M>0?M:C.printerPayoutAmount,adminConfirmed:$||C.adminConfirmed,payoutWeekKey:D||C.payoutWeekKey,payoutStatus:U||C.payoutStatus,deliveryLabel:c.deliveryLabel?String(c.deliveryLabel):C.deliveryLabel,rushSurchargePercent:typeof c.rushSurchargePercent=="number"?c.rushSurchargePercent:C.rushSurchargePercent,shippingMethod:J||C.shippingMethod,shippingAddress:se||C.shippingAddress,paymentMethod:re||C.paymentMethod,transferCode:X||C.transferCode,paymentStatus:ce||C.paymentStatus,depositAmount:ee??C.depositAmount,codRemainingAmount:T??C.codRemainingAmount}),u=!0):(d.set(k,{id:k,createdAt:c.createdAt?String(c.createdAt):new Date().toISOString(),customerName:String(c.customerName||"Khách In 3D"),customerPhone:String(c.customerPhone||""),customerEmail:c.customerEmail?String(c.customerEmail):void 0,material:String(c.material||"PLA+"),infill:String(c.infill||"20%"),weightGrams:Number(c.weightGrams||0),quantity:Number(c.quantity||1),unitPricePerGram:0,baseFee:0,totalAmount:Number(c.totalAmount||0),fileName:String(c.driveFileCode||`${k}.stl`),driveFileCode:String(c.driveFileCode||k),driveFileUrl:c.driveFileUrl?String(c.driveFileUrl):void 0,claimedByPrinter:!!c.claimedByPrinter,printerId:c.printerId?String(c.printerId):void 0,printerName:c.printerName?String(c.printerName):void 0,printStatus:c.printStatus||"waiting",actualWeightGrams:h>0?h:void 0,materialCostPerGram:m>0?m:void 0,materialCostAmount:S>0?S:void 0,netAfterMaterialAmount:P>0?P:void 0,shopCommissionPercent:O,shopFeeAmount:F>0?F:void 0,printerPayoutAmount:M>0?M:void 0,adminConfirmed:$||void 0,payoutWeekKey:D,payoutStatus:U,deliveryLabel:c.deliveryLabel?String(c.deliveryLabel):void 0,rushSurchargePercent:typeof c.rushSurchargePercent=="number"?c.rushSurchargePercent:void 0,shippingMethod:J,shippingAddress:se,paymentMethod:re,transferCode:X,paymentStatus:ce,depositAmount:ee,codRemainingAmount:T,note:c.note?String(c.note):void 0}),u=!0)}const g=typeof l.publicCtvSheetUrl=="string"&&l.publicCtvSheetUrl.trim()?l.publicCtvSheetUrl.trim():void 0,p=typeof l.pendingApprovalCount=="number"&&Number.isFinite(l.pendingApprovalCount)?l.pendingApprovalCount:void 0;if(!u)return{changed:!1,nextState:e,count:l.orders.length,publicCtvSheetUrl:g,pendingApprovalCount:p};const w=Array.from(d.values()).sort((c,k)=>new Date(k.createdAt).getTime()-new Date(c.createdAt).getTime()),N={...e,print3dOrders:w};try{localStorage.setItem(dr,JSON.stringify(N))}catch{}return{changed:!0,nextState:N,count:l.orders.length,publicCtvSheetUrl:g,pendingApprovalCount:p}}catch(i){return{changed:!1,nextState:e,count:0,error:i instanceof Error?i.message:"Lỗi kết nối DonIn3D"}}}function Gi(e){var r,a;const t=((r=e.paymentCheckUrl)==null?void 0:r.trim())||"";return((a=e.orderWebhookUrl)==null?void 0:a.trim())||(t.startsWith("https://script.google.com/")?t:"")}async function Ur(e){const t=Gi(e.profile),r=e.print3dCollaborators??[];if(!t)return{changed:!1,collaborators:r,nextState:e,error:"Chưa có Webhook /exec"};try{const a=t.includes("?")?"&":"?",s=await fetch(`${t}${a}action=list_3d_collaborators`,{cache:"no-store"}),i=await s.json();if(!s.ok||!(i!=null&&i.ok)||!Array.isArray(i.collaborators))return{changed:!1,collaborators:r,nextState:e,error:"Apps Script chưa bật ?action=list_3d_collaborators (hãy Deploy bản mới nhất)"};const o=i.collaborators.map(p=>({id:String((p==null?void 0:p.id)||"").trim(),name:String((p==null?void 0:p.name)||"").trim(),phone:String((p==null?void 0:p.phone)||"").trim(),bankName:String((p==null?void 0:p.bankName)||"").trim(),bankId:String((p==null?void 0:p.bankId)||"").trim(),bankAccountNo:String((p==null?void 0:p.bankAccountNo)||"").trim(),bankAccountName:p!=null&&p.bankAccountName?String(p.bankAccountName).trim():"",note:p!=null&&p.note?String(p.note).trim():"",createdAt:p!=null&&p.createdAt?String(p.createdAt):new Date().toISOString()})).filter(p=>p.id&&p.name),l=JSON.stringify(r),d=JSON.stringify(o);if(!(l!==d))return{changed:!1,collaborators:r,nextState:e};const g={...e,print3dCollaborators:o};try{localStorage.setItem(dr,JSON.stringify(g))}catch{}return{changed:!0,collaborators:o,nextState:g}}catch(a){return{changed:!1,collaborators:r,nextState:e,error:a instanceof Error?a.message:"Lỗi kết nối CongTacVienIn3D"}}}async function Hm(e,t){const r=Gi(e);if(!r)return{ok:!1,error:"Chưa có Webhook /exec"};const a={type:"ctv3d_upsert",...t};try{return(await fetch(r,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(a)})).ok?{ok:!0}:{ok:!0}}catch{try{return await fetch(r,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(a)}),{ok:!0}}catch(s){return{ok:!1,error:s instanceof Error?s.message:"Lỗi lưu CTV"}}}}async function Ff(e,t){const r=Gi(e);if(!(!r||!t))try{await fetch(r,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({type:"ctv3d_delete",id:t})})}catch{}}async function Lf(e,t){const r=Gi(e);if(!r)return{ok:!1,error:"Chưa có Webhook /exec"};const a=JSON.stringify({type:"ctv3d_mark_paid",...t});try{return await fetch(r,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:a}),{ok:!0}}catch{try{return await fetch(r,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:a}),{ok:!0}}catch(s){return{ok:!1,error:s instanceof Error?s.message:"Lỗi ghi thanh toán CTV"}}}}async function Of(e,t){var i,o;const r=Wa(t.customerEmail);if(!r.valid)return{ok:!1,error:"Gmail khách hàng chưa hợp lệ."};const a=((i=e.paymentCheckUrl)==null?void 0:i.trim())||"",s=((o=e.orderWebhookUrl)==null?void 0:o.trim())||(a.startsWith("https://script.google.com/")?a:"");if(!s)return{ok:!1,error:"Chưa cấu hình Google Apps Script /exec"};try{const l=await fetch(s,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({type:"print3d_quote",...t,customerEmail:r.normalized})});if(l.ok){const d=await l.json();return{ok:!0,emailed:!!(d!=null&&d.emailed)}}return{ok:!0}}catch{try{return await fetch(s,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({type:"print3d_quote",...t,customerEmail:r.normalized})}),{ok:!0}}catch(l){return{ok:!1,error:l instanceof Error?l.message:"Lỗi gửi báo giá In 3D"}}}}async function Vf(e,t){var s,i;const r=[Yn(e,t,"new_order")];let a;return(s=e.telegramBotToken)!=null&&s.trim()&&((i=e.telegramChatId)!=null&&i.trim())&&r.push(_i(e,t).then(o=>{o.ok&&o.messageId&&(a=o.messageId)})),r.length>0&&await Promise.allSettled(r),a}function _f(e,t){var g;const r=new Date,a=p=>String(p).padStart(2,"0"),s=`DH-${String(r.getFullYear()).slice(-2)}${a(r.getMonth()+1)}${a(r.getDate())}-${Math.floor(100+Math.random()*900)}`,i=t.items.reduce((p,w)=>p+w.unitPrice*w.quantity,0),o=t.initialStatus??"pending",l=o!=="cancelled";let d=e;if(l)for(const p of t.items)d=$a(d,p.productId,-Math.abs(p.quantity),`Xuất bán đơn #${s} (${t.customerName})`);const u={id:s,createdAt:r.toISOString(),customerName:t.customerName,customerPhone:t.customerPhone,customerEmail:((g=t.customerEmail)==null?void 0:g.trim())||void 0,shippingAddress:t.shippingAddress,paymentMethod:t.paymentMethod,transferCode:t.transferCode,paymentStatus:t.paymentStatus??(t.paymentMethod==="cod"?"cod_unpaid":"qr_reported"),note:t.note,status:o,items:t.items,totalAmount:i,stockDeducted:l};return{order:u,nextState:{...d,orders:[u,...d.orders]}}}function $m(e,t,r){const a=e.orders.find(o=>o.id===t);if(!a||a.status===r)return e;let s=e,i=a.stockDeducted;if(r==="cancelled"&&a.stockDeducted){for(const o of a.items)s=$a(s,o.productId,Math.abs(o.quantity),`Hoàn kho do hủy đơn #${t}`);i=!1}else if(r!=="cancelled"&&!a.stockDeducted){for(const o of a.items)s=$a(s,o.productId,-Math.abs(o.quantity),`Xuất lại kho khi khôi phục đơn #${t}`);i=!0}return{...s,orders:s.orders.map(o=>o.id===t?{...o,status:r,stockDeducted:i}:o)}}async function Td(e,t){const{nextState:r,order:a}=_f(e,t),s=await Vf(e.profile,a),i=s?{...a,telegramMessageId:s}:a,o=s?{...r,orders:r.orders.map(d=>d.id===a.id?i:d)}:r,l=await Ln(o);return{order:i,nextState:o,savedToDisk:l.savedToFile}}function Gf(e){const t=e.trim().replace(/\s+/g," ");return t.length<3||!/[a-zA-ZÀ-ỹ]/.test(t)||/^(.)\1{2,}$/i.test(t)?{valid:!1,normalized:t,error:"Vui lòng nhập họ tên người nhận hợp lệ (tối thiểu 3 ký tự)."}:{valid:!0,normalized:t}}function Wa(e){const t=e.trim().toLowerCase();return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)?{valid:!0,normalized:t}:{valid:!1,normalized:t,error:"Email không hợp lệ (VD: tenban@gmail.com)."}}function Wr(e){const t=e.replace(/[\s.-]/g,"");return/^0\d{9}$/.test(t)?!/^0[235789]\d{8}$/.test(t)||/^0(\d)\1{8}$/.test(t)||t==="0123456789"||t==="0987654321"||/(\d)\1{6,}$/.test(t)?{valid:!1,normalized:t,error:"Đầu số điện thoại không hợp lệ hoặc là số ảo (chỉ nhận đầu số 02, 03, 05, 07, 08, 09)."}:{valid:!0,normalized:t}:{valid:!1,normalized:t,error:"Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng số 0 (VD: 0912345678)."}}function Ad(e){const t=e.trim().replace(/\s+/g," ");if(t.length<15)return{valid:!1,normalized:t,error:"Địa chỉ quá ngắn (tối thiểu 15 ký tự). Vui lòng ghi rõ Số nhà/Đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành."};if(/(.)\1{4,}/i.test(t)||t.split(" ").filter(Boolean).length<4||!/[a-zA-ZÀ-ỹ]/.test(t))return{valid:!1,normalized:t,error:"Địa chỉ không hợp lệ. Vui lòng nhập địa chỉ thật gồm Số nhà/Thôn, Xã/Phường, Quận/Huyện, Tỉnh/Thành."};const r=t.split(/[,\-–/]/).map(s=>s.trim()).filter(s=>s.length>=2),a=t.match(/(?:^|[\s,./-])(?:số|ngõ|ngách|hẻm|đường|phố|thôn|ấp|xóm|khu|tổ|phường|xã|thị trấn|quận|huyện|thị xã|thành phố|tỉnh|tp\.?|q\.?|p\.?|h\.?)(?=$|[\s,./-])/gi)||[];return r.length<2&&a.length<2?{valid:!1,normalized:t,error:"Vui lòng ghi đầy đủ các cấp địa chỉ ngăn cách bằng dấu phẩy (VD: Số 12 Đại Cồ Việt, Hai Bà Trưng, Hà Nội)."}:{valid:!0,normalized:t}}const Um=({name:e,brandName:t,monogram:r="TBX",logoImageUrl:a})=>{const s=(r||"TBX").trim().slice(0,4).toUpperCase();return n.jsxs("div",{className:"flex items-center gap-2.5 shrink-0 whitespace-nowrap group",children:[n.jsx("div",{className:"relative flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/50 bg-[#0A1428] overflow-hidden shadow-inner shadow-sky-500/20 transition-transform duration-300 group-hover:scale-105",children:a?n.jsx("img",{src:a,alt:t||e,className:"h-full w-full object-cover"}):n.jsxs("svg",{viewBox:"0 0 40 40",className:"h-9 w-9",fill:"none",children:[n.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"6",stroke:"#F59E0B",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"20",y1:"2",x2:"20",y2:"6",stroke:"#F59E0B",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"28",y1:"2",x2:"28",y2:"6",stroke:"#F59E0B",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"12",y1:"34",x2:"12",y2:"38",stroke:"#F59E0B",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"20",y1:"34",x2:"20",y2:"38",stroke:"#F59E0B",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"28",y1:"34",x2:"28",y2:"38",stroke:"#F59E0B",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"2",y1:"14",x2:"6",y2:"14",stroke:"#38BDF8",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"2",y1:"26",x2:"6",y2:"26",stroke:"#38BDF8",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"34",y1:"14",x2:"38",y2:"14",stroke:"#38BDF8",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("line",{x1:"34",y1:"26",x2:"38",y2:"26",stroke:"#38BDF8",strokeWidth:"1.6",strokeLinecap:"round"}),n.jsx("rect",{x:"6",y:"6",width:"28",height:"28",rx:"5",fill:"#0D1C38",stroke:"#38BDF8",strokeWidth:"1.4"}),n.jsx("text",{x:"20",y:"22.5",textAnchor:"middle",fill:"#F8FAFC",fontSize:s.length>3?"8.5":"10.5",fontWeight:"800",fontFamily:"monospace",letterSpacing:"0.5",children:s}),n.jsx("path",{d:"M10 28 H22 L25 25 H30",stroke:"#10B981",strokeWidth:"1.4",strokeLinecap:"round"}),n.jsx("circle",{cx:"30",cy:"25",r:"1.4",fill:"#F59E0B"})]})}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white leading-none",children:e}),n.jsx("div",{className:"mt-1 font-mono text-[11px] font-bold tracking-wide text-sky-600 dark:text-sky-400",children:t})]})]})},Hf=({profile:e,lang:t,setLang:r,darkMode:a,setDarkMode:s,cartCount:i,cartTotal:o,onOpenCart:l,searchQuery:d,onSearchChange:u,onSelectOriginFilter:g,showAdmin:p=!1,inlineEditMode:w=!1,onToggleInlineEdit:N,onUpdateProfile:c,onOpenAdmin:k})=>{var D;const[C,h]=E.useState(!1),[m,S]=E.useState(!1);E.useEffect(()=>{const U=()=>S(window.scrollY>12);return window.addEventListener("scroll",U,{passive:!0}),()=>window.removeEventListener("scroll",U)},[]);const P=U=>{g(U),h(!1);const J=document.getElementById("products");J&&J.scrollIntoView({behavior:"smooth"})},O=U=>{u(U)},F=U=>{U.preventDefault();const J=document.getElementById("products");J&&J.scrollIntoView({behavior:"smooth"}),h(!1)},M=[{label:t==="vi"?"Sản phẩm":"Products",action:()=>P("all")},{label:t==="vi"?"Mạch ĐK":"Control Boards",action:()=>P("self-made")},{label:t==="vi"?"SP Đồ án":"Project Kits",action:()=>P("project-kit")},{label:t==="vi"?"Động cơ & PK":"Motors & Parts",action:()=>P("commercial")},{href:"#projects-support",label:t==="vi"?"Hỗ trợ Đồ án":"Projects & R&D"},{href:"#contact",label:t==="vi"?"Liên hệ":"Contact"}],$=((D=e.topNotice)==null?void 0:D[t])||(t==="vi"?"Giao hàng toàn quốc COD · Kiểm tra & Test mạch 100% trước khi gửi":"Nationwide COD Shipping · 100% Load-Tested Before Dispatch");return n.jsxs("header",{className:`sticky top-0 z-40 w-full transition-all duration-300 no-print ${m?"bg-white/95 dark:bg-[#080D1A]/95 shadow-md shadow-sky-950/10 backdrop-blur-md border-b border-slate-200 dark:border-[#1E325C]":"bg-white dark:bg-[#0B1324] border-b border-slate-200 dark:border-[#1E325C]"}`,children:[n.jsx("div",{className:"border-b border-slate-200 dark:border-[#162340] bg-slate-100 dark:bg-[#060A14] px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"mx-auto flex h-8 max-w-7xl items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400",children:[n.jsxs("div",{className:"flex items-center gap-1.5 min-w-0 flex-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400",children:[n.jsx(Bi,{className:"h-3.5 w-3.5 shrink-0"}),w&&c?n.jsx("input",{type:"text",value:$,onChange:U=>c(J=>{var se,re;return{...J,topNotice:{vi:t==="vi"?U.target.value:((se=J.topNotice)==null?void 0:se.vi)||$,en:t==="en"?U.target.value:((re=J.topNotice)==null?void 0:re.en)||$}}}),className:"w-full max-w-md rounded border border-dashed border-sky-400 bg-slate-900/90 px-2 py-0.5 text-[11px] text-emerald-300 focus:outline-none"}):n.jsx("span",{className:"truncate",children:$})]}),n.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[n.jsxs("a",{href:`tel:${e.phone}`,className:"inline-flex items-center gap-1.5 font-mono font-semibold text-sky-600 dark:text-sky-400 hover:underline transition-colors",children:[n.jsx(Oa,{className:"h-3 w-3"}),n.jsxs("span",{children:["Hotline/Zalo: ",e.phone]})]}),n.jsxs("a",{href:`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(e.email)}`,target:"_blank",rel:"noopener noreferrer",className:"hidden md:inline-flex items-center gap-1.5 font-mono hover:text-sky-500 transition-colors",children:[n.jsx(Ii,{className:"h-3 w-3"}),n.jsx("span",{children:e.email})]}),p&&N&&n.jsxs("button",{type:"button",onClick:N,className:`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-semibold transition-colors ${w?"bg-amber-500 text-slate-950 shadow-sm":"border border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20"}`,children:[n.jsx(km,{className:"h-3 w-3"}),n.jsx("span",{children:w?"Đang sửa trên trang":"Sửa trực tiếp"})]}),p&&n.jsxs("button",{type:"button",onClick:k,className:"inline-flex items-center gap-1 rounded border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#111C33] px-2 py-0.5 text-[11px] font-semibold text-sky-600 dark:text-sky-400 hover:border-sky-400 transition-colors",children:[n.jsx(wm,{className:"h-3 w-3"}),n.jsx("span",{children:t==="vi"?"Quản trị Kho & Shop":"Store Admin"})]})]})]})}),n.jsxs("div",{className:"mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8",children:[n.jsx("a",{href:"#",className:"shrink-0",children:n.jsx(Um,{name:e.name,brandName:e.brandName,monogram:e.logoMonogram,logoImageUrl:e.logoImageUrl})}),n.jsx("nav",{className:"hidden xl:flex items-center gap-3.5",children:M.map(U=>U.action?n.jsx("button",{type:"button",onClick:U.action,className:"nav-underline whitespace-nowrap py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors",children:U.label},U.label):n.jsx("a",{href:U.href,className:"nav-underline whitespace-nowrap py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors",children:U.label},U.label))}),n.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[n.jsxs("form",{onSubmit:F,className:"hidden lg:block relative w-40",children:[n.jsx(di,{className:"pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"}),n.jsx("input",{type:"text",value:d,onChange:U=>O(U.target.value),placeholder:t==="vi"?"Tìm mã mạch, động cơ...":"Search board, motor...",className:"w-full rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] py-1.5 pl-8 pr-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"})]}),n.jsx("button",{type:"button",onClick:()=>r(t==="vi"?"en":"vi"),className:"whitespace-nowrap select-none rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 font-mono text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-sky-400 transition-colors",children:t==="vi"?"VI":"EN"}),n.jsx("button",{type:"button",onClick:()=>s(!a),"aria-label":"Đổi nền Sáng/Tối",className:"inline-flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] text-slate-700 dark:text-amber-400 hover:border-sky-400 transition-colors",children:a?n.jsx(ef,{className:"h-4 w-4"}):n.jsx(W0,{className:"h-4 w-4"})}),n.jsxs("button",{type:"button",onClick:l,className:"inline-flex shrink-0 whitespace-nowrap select-none items-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm shadow-sky-500/25 transition-colors",children:[n.jsx(ci,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:t==="vi"?"Giỏ hàng":"Cart"}),n.jsx("span",{className:"rounded-full bg-white/20 px-1.5 py-0.2 font-mono text-[11px] font-bold",children:i}),o>0&&n.jsx("span",{className:"hidden sm:inline font-mono text-[11px] text-amber-200 border-l border-white/25 pl-1.5",children:ne(o,t)})]}),n.jsx("button",{type:"button",onClick:()=>h(!C),"aria-label":"Mở menu",className:"inline-flex xl:hidden h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg border border-slate-300 dark:border-[#1E325C]",children:C?n.jsx(Gn,{className:"h-4 w-4"}):n.jsx(U0,{className:"h-4 w-4"})})]})]}),C&&n.jsxs("div",{className:"xl:hidden border-t border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-4 py-3 space-y-2 animate-backdrop",children:[n.jsxs("form",{onSubmit:F,className:"relative",children:[n.jsx(di,{className:"pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"}),n.jsx("input",{type:"text",value:d,onChange:U=>O(U.target.value),placeholder:Xe.products.searchPlaceholder[t],className:"w-full rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] py-2 pl-8 pr-3 text-xs text-slate-900 dark:text-white focus:border-sky-400 focus:outline-none"})]}),n.jsx("div",{className:"space-y-1",children:M.map(U=>U.action?n.jsx("button",{type:"button",onClick:U.action,className:"block w-full text-left py-2 text-sm font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-[#162340]",children:U.label},U.label):n.jsx("a",{href:U.href,onClick:()=>h(!1),className:"block py-2 text-sm font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-[#162340]",children:U.label},U.label))})]})]})},Qc=[Bi,yd,es,G0],$f=({profile:e,lang:t,inlineEditMode:r=!1,onUpdateProfile:a})=>{var p,w,N,c;const s=[{vi:"Giao hàng COD toàn quốc",en:"Nationwide COD Shipping"},{vi:"Test tải 100% trước khi gửi",en:"100% Load-Tested Before Dispatch"},{vi:"Kèm sơ đồ chân cắm & tập lệnh",en:"Includes Pinout & Command Docs"},{vi:"Hỗ trợ kỹ thuật trực tiếp Zalo",en:"Direct Zalo Tech Support"}],i=e.policyBadges&&e.policyBadges.length>0?e.policyBadges:s,o=((p=e.availabilityBadge)==null?void 0:p[t])||"TBX ELECTRICS · TEEBI & ROBOT",l=((w=e.role)==null?void 0:w[t])||"",d=((N=e.tagline)==null?void 0:N[t])||"",u=((c=e.heroImageUrl)==null?void 0:c.trim())||"./images/hero-chip-robot.jpg",g=(k,C)=>{a&&a(h=>{const m=h.policyBadges&&h.policyBadges.length>0?[...h.policyBadges]:[...s],S=m[k]||{vi:"",en:""};return m[k]={...S,[t]:C},{...h,policyBadges:m}})};return n.jsxs("section",{className:"relative overflow-hidden border-b border-slate-200 dark:border-[#1E325C] bg-circuit-grid",children:[n.jsx("div",{className:"pointer-events-none absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-65 transition-opacity",style:{backgroundImage:`url('${u}')`}}),n.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F1F5F9]/95 via-[#F1F5F9]/85 to-[#F1F5F9]/65 dark:from-[#080D1A]/85 dark:via-[#080D1A]/60 dark:to-[#080D1A]/40"}),n.jsxs("div",{className:"relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 space-y-5",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[n.jsx("div",{className:"space-y-1.5 flex-1",children:r&&a?n.jsxs("div",{className:"space-y-2 max-w-3xl",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 rounded border border-dashed border-sky-400 bg-slate-900/90 px-2.5 py-1",children:[n.jsx(es,{className:"h-3.5 w-3.5 text-sky-400 shrink-0"}),n.jsx("input",{type:"text",value:o,onChange:k=>a(C=>({...C,availabilityBadge:{...C.availabilityBadge,[t]:k.target.value}})),className:"w-64 bg-transparent font-mono text-[11px] font-bold text-sky-300 focus:outline-none"})]}),n.jsx("input",{type:"text",value:l,onChange:k=>a(C=>({...C,role:{...C.role,[t]:k.target.value}})),placeholder:"Nhập tiêu đề chính Banner...",className:"w-full rounded border border-dashed border-sky-400 bg-slate-900/90 px-3 py-1.5 text-base sm:text-xl font-bold text-white focus:outline-none"}),n.jsx("input",{type:"text",value:d,onChange:k=>a(C=>({...C,tagline:{...C.tagline,[t]:k.target.value}})),placeholder:"Ghi chú / khẩu hiệu phụ dưới tiêu đề (để trống nếu muốn ẩn)...",className:"w-full rounded border border-dashed border-slate-500 bg-slate-900/80 px-3 py-1 text-xs text-slate-300 focus:border-sky-400 focus:outline-none"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:o}),n.jsx("div",{className:"text-base sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white",children:l}),d&&n.jsx("p",{className:"text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl",children:d})]})}),n.jsxs("a",{href:"#products",className:"inline-flex shrink-0 self-start sm:self-auto select-none items-center gap-2 rounded-md bg-sky-600 hover:bg-sky-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors",children:[n.jsx("span",{children:t==="vi"?"Xem danh mục sản phẩm":"Browse Catalog"}),n.jsx(mm,{className:"h-4 w-4"})]})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-[#1E325C] rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white/90 dark:bg-[#0B1324]/90",children:i.map((k,C)=>{const h=Qc[C%Qc.length];return n.jsxs("div",{className:"flex items-center gap-2.5 px-3.5 py-2.5",children:[n.jsx(h,{className:"h-4 w-4 shrink-0 text-sky-500"}),r&&a?n.jsx("input",{type:"text",value:k[t],onChange:m=>g(C,m.target.value),className:"w-full rounded border border-dashed border-sky-400 bg-slate-900/85 px-1.5 py-0.5 text-xs font-semibold text-white focus:outline-none"}):n.jsx("span",{className:"text-xs font-semibold text-slate-800 dark:text-slate-100",children:k[t]})]},C)})})]})]})},Et=({children:e,className:t="",delayMs:r=0})=>{const a=E.useRef(null),[s,i]=E.useState(!1);return E.useEffect(()=>{const o=a.current;if(!o)return;const l=new IntersectionObserver(d=>{d.forEach(u=>{u.isIntersecting&&(i(!0),l.unobserve(u.target))})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});return l.observe(o),()=>l.disconnect()},[]),n.jsx("div",{ref:a,style:r>0?{transitionDelay:`${r}ms`}:void 0,className:`reveal ${s?"reveal-visible":""} ${t}`,children:e})},Uf=({product:e,lang:t})=>n.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-lg border border-sky-500/35 bg-[#071426] p-3.5 flex flex-col justify-between text-left select-none",children:[n.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-15",style:{backgroundImage:"linear-gradient(to right, rgba(56,189,248,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.22) 1px, transparent 1px)",backgroundSize:"18px 18px"}}),n.jsxs("div",{className:"relative z-10 flex items-center justify-between border-b border-sky-500/25 pb-1.5",children:[n.jsxs("span",{className:"font-mono text-[10px] font-bold text-sky-400",children:[e.code," · ",t==="vi"?"THÔNG SỐ KỸ THUẬT":"SPECIFICATIONS"]}),n.jsx("span",{className:"font-mono text-[10px] font-semibold text-amber-400",children:e.revision})]}),n.jsx("div",{className:"relative z-10 my-auto space-y-1.5 py-1",children:e.specs.slice(0,3).map((r,a)=>n.jsxs("div",{className:"flex items-center justify-between gap-2 rounded bg-[#0C1D36]/90 px-2.5 py-1 border border-slate-700/60 text-[11px]",children:[n.jsx("span",{className:"font-semibold text-slate-300 truncate max-w-[44%]",children:r.label[t]}),n.jsx("span",{className:"font-mono font-bold text-sky-300 truncate text-right max-w-[54%]",children:r.value})]},a))}),n.jsxs("div",{className:"relative z-10 flex items-center justify-between text-[10px] font-mono text-emerald-400",children:[n.jsx("span",{children:e.status[t]}),n.jsx("span",{children:"TBX ELECTRICS"})]})]}),zf=({product:e,lang:t})=>n.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-lg border border-emerald-500/35 bg-[#041517] p-3.5 flex flex-col justify-between text-left select-none",children:[n.jsxs("div",{className:"relative z-10 flex items-center justify-between border-b border-emerald-500/25 pb-1.5",children:[n.jsxs("span",{className:"font-mono text-[10px] font-bold text-emerald-400",children:[e.code," · ",t==="vi"?"SƠ ĐỒ ĐẤU NỐI":"WIRING BLOCK"]}),n.jsx("span",{className:"font-mono text-[10px] text-amber-300",children:"PLUG & RUN"})]}),n.jsx("pre",{className:"relative z-10 my-auto overflow-hidden whitespace-pre-wrap font-mono text-[10px] leading-snug text-sky-200 bg-[#071F24]/90 rounded p-2 border border-emerald-500/20 max-h-[96px]",children:e.architectureDiagram}),n.jsx("div",{className:"relative z-10 flex flex-wrap gap-1.5",children:e.techStack.slice(0,3).map(r=>n.jsx("span",{className:"rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300",children:r},r))})]}),zm=({product:e,lang:t,variant:r="card",onClickDetail:a})=>{const[s,i]=E.useState(0),o=Array.from(new Set([...e.imageUrl?[e.imageUrl]:[],...e.backImageUrl?[e.backImageUrl]:[],...e.galleryUrls??[]].filter(c=>typeof c=="string"&&c.trim()!==""))),l=o.map((c,k)=>({kind:"photo",id:`photo-${k}`,label:t==="vi"?`Ảnh ${k+1}`:`Photo ${k+1}`,url:c}));o.length===0&&l.push({kind:"front-pcb",id:"front-pcb",label:t==="vi"?"Mặt trước":"Front"}),l.length<3&&l.push({kind:"specs-sheet",id:"specs-sheet",label:t==="vi"?"Thông số":"Specs"}),l.length<3&&l.push({kind:"wiring-diagram",id:"wiring-diagram",label:t==="vi"?"Đấu nối":"Wiring"}),E.useEffect(()=>{i(0)},[e.id,o.length]);const d=Math.min(s,l.length-1),u=l[d],g=c=>{c.stopPropagation(),i(k=>(k-1+l.length)%l.length)},p=c=>{c.stopPropagation(),i(k=>(k+1)%l.length)},w=(c,k=!1)=>c.kind==="photo"?n.jsx("img",{src:c.url,alt:`${e.name[t]} - ${c.label}`,className:"h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"}):c.kind==="front-pcb"?n.jsx("div",{className:k?"h-full w-full pointer-events-none scale-[0.55] origin-center":"h-full w-full [&>div]:h-full",children:n.jsx(Km,{visualType:e.visualType,code:e.code,revision:e.revision})}):c.kind==="specs-sheet"?k?n.jsxs("div",{className:"h-full w-full bg-[#071426] flex flex-col items-center justify-center p-1 text-center",children:[n.jsx("span",{className:"font-mono text-[9px] font-bold text-sky-400",children:"THÔNG SỐ"}),n.jsx("span",{className:"font-mono text-[8px] text-slate-300 truncate max-w-full",children:e.code})]}):n.jsx(Uf,{product:e,lang:t}):k?n.jsxs("div",{className:"h-full w-full bg-[#041517] flex flex-col items-center justify-center p-1 text-center",children:[n.jsx("span",{className:"font-mono text-[9px] font-bold text-emerald-400",children:"ĐẤU NỐI"}),n.jsx("span",{className:"font-mono text-[8px] text-slate-300 truncate max-w-full",children:e.code})]}):n.jsx(zf,{product:e,lang:t}),N=r==="studio"?"h-56 sm:h-64":"h-44";return n.jsxs("div",{className:"space-y-2.5",children:[n.jsxs("div",{onClick:r==="card"?a:void 0,className:`relative ${N} w-full overflow-hidden rounded-lg border border-slate-200 dark:border-[#1E325C] bg-[#0A1428] ${r==="card"?"cursor-pointer":""}`,children:[w(u),n.jsx("div",{className:"pointer-events-none absolute left-2 top-2 z-10 rounded bg-slate-950/80 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300 border border-amber-400/30 backdrop-blur-sm",children:u.label}),n.jsxs("div",{className:"pointer-events-none absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded bg-slate-950/80 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300 border border-sky-400/30 backdrop-blur-sm",children:[n.jsx(H0,{className:"h-3 w-3"}),n.jsxs("span",{children:[d+1,"/",l.length]})]}),l.length>1&&n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:g,"aria-label":t==="vi"?"Ảnh trước":"Previous image",className:"absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/40 bg-slate-950/80 text-white hover:bg-sky-500 transition-colors shadow",children:n.jsx(R0,{className:"h-4 w-4"})}),n.jsx("button",{type:"button",onClick:p,"aria-label":t==="vi"?"Ảnh tiếp theo":"Next image",className:"absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/40 bg-slate-950/80 text-white hover:bg-sky-500 transition-colors shadow",children:n.jsx(M0,{className:"h-4 w-4"})})]}),r==="card"&&l.length>1&&n.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-slate-950/75 px-2.5 py-1 backdrop-blur-sm",children:l.map((c,k)=>n.jsx("button",{type:"button","aria-label":`${t==="vi"?"Xem":"View"} ${c.label}`,onClick:C=>{C.stopPropagation(),i(k)},className:`h-1.5 rounded-full transition-all ${k===d?"w-4 bg-sky-400":"w-1.5 bg-slate-400/70 hover:bg-white"}`},c.id))})]}),r==="studio"&&l.length>1&&n.jsx("div",{className:"flex flex-wrap gap-2",children:l.map((c,k)=>{const C=k===d;return n.jsx("button",{type:"button",onClick:()=>i(k),className:`relative h-14 w-20 overflow-hidden rounded-lg border transition-all ${C?"border-2 border-sky-500 ring-2 ring-sky-500/30":"border-slate-300 dark:border-[#1E325C] opacity-75 hover:opacity-100"}`,children:w(c,!0)},c.id)})})]})},Km=({visualType:e,code:t,revision:r})=>n.jsxs("div",{className:"relative h-44 w-full overflow-hidden rounded-lg border border-slate-700/70 bg-[#0A1428] flex items-center justify-center",children:[n.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:"linear-gradient(to right, rgba(56,189,248,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.18) 1px, transparent 1px)",backgroundSize:"18px 18px"}}),["left-2.5 top-2.5","right-2.5 top-2.5","left-2.5 bottom-2.5","right-2.5 bottom-2.5"].map((a,s)=>n.jsx("span",{className:`absolute ${a} h-2 w-2 rounded-full border border-amber-400 bg-[#060C18]`},s)),n.jsxs("div",{className:"absolute left-6 top-2.5 font-mono text-[11px] font-bold tracking-wider text-sky-300",children:[t," ",n.jsxs("span",{className:"text-amber-400",children:["· ",r]})]}),n.jsxs("svg",{viewBox:"0 0 260 124",className:"relative h-32 w-60 hover-zoom-img",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e==="h743-robot"&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"78",y:"20",width:"104",height:"84",rx:"5",stroke:"#38BDF8",strokeWidth:"1.5",fill:"#0D1B35"}),n.jsx("rect",{x:"58",y:"24",width:"13",height:"26",rx:"2",stroke:"#F59E0B",strokeWidth:"1.4",fill:"#080D1A"}),n.jsx("rect",{x:"189",y:"24",width:"13",height:"26",rx:"2",stroke:"#F59E0B",strokeWidth:"1.4",fill:"#080D1A"}),n.jsx("rect",{x:"58",y:"74",width:"13",height:"26",rx:"2",stroke:"#F59E0B",strokeWidth:"1.4",fill:"#080D1A"}),n.jsx("rect",{x:"189",y:"74",width:"13",height:"26",rx:"2",stroke:"#F59E0B",strokeWidth:"1.4",fill:"#080D1A"}),n.jsx("rect",{x:"110",y:"42",width:"40",height:"40",rx:"4",stroke:"#E2E8F0",strokeWidth:"1.4",fill:"#060C18"}),n.jsx("circle",{cx:"116",cy:"48",r:"1.5",fill:"#F59E0B"}),n.jsx("text",{x:"130",y:"61",textAnchor:"middle",fill:"#38BDF8",fontSize:"8",fontFamily:"monospace",fontWeight:"bold",children:"H743"}),n.jsx("text",{x:"130",y:"72",textAnchor:"middle",fill:"#F59E0B",fontSize:"6.5",fontFamily:"monospace",children:"24V IN"}),n.jsx("line",{x1:"130",y1:"20",x2:"130",y2:"5",stroke:"#10B981",strokeWidth:"1.5",strokeDasharray:"3 2"}),n.jsx("line",{x1:"78",y1:"62",x2:"26",y2:"62",stroke:"#10B981",strokeWidth:"1.5",strokeDasharray:"3 2"}),n.jsx("line",{x1:"182",y1:"62",x2:"234",y2:"62",stroke:"#10B981",strokeWidth:"1.5",strokeDasharray:"3 2"})]}),e==="servo-pid"&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"34",y:"22",width:"112",height:"80",rx:"5",stroke:"#38BDF8",strokeWidth:"1.5",fill:"#0D1B35"}),n.jsx("rect",{x:"48",y:"36",width:"32",height:"32",rx:"3",stroke:"#E2E8F0",strokeWidth:"1.3",fill:"#060C18"}),n.jsx("text",{x:"64",y:"55",textAnchor:"middle",fill:"#38BDF8",fontSize:"8",fontFamily:"monospace",fontWeight:"bold",children:"PID"}),n.jsx("rect",{x:"94",y:"34",width:"38",height:"22",rx:"2",stroke:"#F59E0B",strokeWidth:"1.2",fill:"#060C18"}),n.jsx("rect",{x:"94",y:"66",width:"38",height:"22",rx:"2",stroke:"#F59E0B",strokeWidth:"1.2",fill:"#060C18"}),n.jsx("text",{x:"113",y:"48",textAnchor:"middle",fill:"#F59E0B",fontSize:"7",fontFamily:"monospace",children:"M+"}),n.jsx("text",{x:"113",y:"80",textAnchor:"middle",fill:"#F59E0B",fontSize:"7",fontFamily:"monospace",children:"M-"}),n.jsx("circle",{cx:"198",cy:"62",r:"27",stroke:"#38BDF8",strokeWidth:"1.5",fill:"#060C18"}),n.jsx("circle",{cx:"198",cy:"62",r:"13",stroke:"#10B981",strokeWidth:"1.2",strokeDasharray:"3 2"}),n.jsx("line",{x1:"146",y1:"48",x2:"172",y2:"48",stroke:"#F59E0B",strokeWidth:"1.8"}),n.jsx("line",{x1:"146",y1:"76",x2:"172",y2:"76",stroke:"#10B981",strokeWidth:"1.4",strokeDasharray:"3 2"}),n.jsx("text",{x:"198",y:"65",textAnchor:"middle",fill:"#E2E8F0",fontSize:"7.5",fontFamily:"monospace",children:"ENC A/B"})]}),e==="bldc-driver"&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"30",y:"22",width:"118",height:"80",rx:"5",stroke:"#38BDF8",strokeWidth:"1.5",fill:"#0D1B35"}),[0,1,2].map(a=>n.jsxs("g",{children:[n.jsx("rect",{x:44+a*34,y:"34",width:"22",height:"22",rx:"2",stroke:"#F59E0B",strokeWidth:"1.2",fill:"#060C18"}),n.jsx("rect",{x:44+a*34,y:"66",width:"22",height:"22",rx:"2",stroke:"#F59E0B",strokeWidth:"1.2",fill:"#060C18"})]},a)),n.jsx("line",{x1:"148",y1:"42",x2:"180",y2:"42",stroke:"#F59E0B",strokeWidth:"2"}),n.jsx("line",{x1:"148",y1:"62",x2:"180",y2:"62",stroke:"#38BDF8",strokeWidth:"2"}),n.jsx("line",{x1:"148",y1:"82",x2:"180",y2:"82",stroke:"#10B981",strokeWidth:"2"}),n.jsx("circle",{cx:"206",cy:"62",r:"26",stroke:"#38BDF8",strokeWidth:"1.5",fill:"#060C18"}),n.jsx("text",{x:"206",y:"64",textAnchor:"middle",fill:"#F59E0B",fontSize:"8",fontFamily:"monospace",fontWeight:"bold",children:"BLDC"}),n.jsx("text",{x:"206",y:"102",textAnchor:"middle",fill:"#94A3B8",fontSize:"7",fontFamily:"monospace",children:"U / V / W + HALL"})]}),e==="imu-sensor"&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"44",y:"22",width:"172",height:"80",rx:"5",stroke:"#38BDF8",strokeWidth:"1.5",fill:"#0D1B35"}),n.jsx("circle",{cx:"96",cy:"62",r:"24",stroke:"#38BDF8",strokeWidth:"1.3",fill:"#060C18"}),n.jsx("line",{x1:"96",y1:"30",x2:"96",y2:"94",stroke:"#10B981",strokeWidth:"1.2"}),n.jsx("line",{x1:"64",y1:"62",x2:"128",y2:"62",stroke:"#10B981",strokeWidth:"1.2"}),n.jsx("text",{x:"96",y:"65",textAnchor:"middle",fill:"#E2E8F0",fontSize:"7.5",fontFamily:"monospace",children:"9-AXIS"}),n.jsx("rect",{x:"142",y:"38",width:"56",height:"48",rx:"3",stroke:"#F59E0B",strokeWidth:"1.3",fill:"#060C18"}),n.jsx("text",{x:"170",y:"59",textAnchor:"middle",fill:"#38BDF8",fontSize:"7",fontFamily:"monospace",children:"UART/CAN"}),n.jsx("text",{x:"170",y:"72",textAnchor:"middle",fill:"#10B981",fontSize:"6.5",fontFamily:"monospace",children:"100Hz OUT"}),n.jsx("line",{x1:"120",y1:"62",x2:"142",y2:"62",stroke:"#F59E0B",strokeWidth:"1.6"})]}),e==="gamepad-ble"&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"44",y:"34",width:"90",height:"58",rx:"8",stroke:"#38BDF8",strokeWidth:"1.5",fill:"#0D1B35"}),n.jsx("text",{x:"89",y:"59",textAnchor:"middle",fill:"#E2E8F0",fontSize:"7.5",fontFamily:"monospace",children:"BLE / PS2"}),n.jsx("text",{x:"89",y:"73",textAnchor:"middle",fill:"#38BDF8",fontSize:"6.5",fontFamily:"monospace",children:"HANDHELD"}),n.jsx("line",{x1:"134",y1:"63",x2:"158",y2:"63",stroke:"#10B981",strokeWidth:"1.6",strokeDasharray:"3 2"}),n.jsx("rect",{x:"158",y:"34",width:"66",height:"58",rx:"4",stroke:"#F59E0B",strokeWidth:"1.4",fill:"#060C18"}),n.jsx("text",{x:"191",y:"58",textAnchor:"middle",fill:"#E2E8F0",fontSize:"7.5",fontFamily:"monospace",children:"RECEIVER"}),n.jsx("text",{x:"191",y:"72",textAnchor:"middle",fill:"#10B981",fontSize:"6.5",fontFamily:"monospace",children:"150ms SAFE"})]}),e==="io-encoder"&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:"38",y:"22",width:"184",height:"80",rx:"5",stroke:"#38BDF8",strokeWidth:"1.5",fill:"#0D1B35"}),[0,1,2,3].map(a=>n.jsxs("g",{children:[n.jsx("rect",{x:54+a*40,y:"34",width:"26",height:"16",rx:"2",stroke:"#F59E0B",strokeWidth:"1.2",fill:"#060C18"}),n.jsx("text",{x:67+a*40,y:"45",textAnchor:"middle",fill:"#E2E8F0",fontSize:"6.5",fontFamily:"monospace",children:"24V"})]},a)),n.jsx("path",{d:"M54 82 L82 82 L92 64 L106 88 L118 72 L134 82 L202 82",stroke:"#10B981",strokeWidth:"1.8"}),n.jsx("text",{x:"130",y:"96",textAnchor:"middle",fill:"#38BDF8",fontSize:"7",fontFamily:"monospace",children:"OPTO 24V + LASER ADC"})]})]})]}),Kf=({profile:e,products:t,lang:r,selectedOrigin:a,onSelectOrigin:s,searchQuery:i,onSearchChange:o,inlineEditMode:l=!1,onUpdateProfile:d,onQuickEditProduct:u,onSelectProduct:g,onAddToCart:p,onBuyNow:w,onRequestQuote:N})=>{var ce,ee,T,A,R,f,L;const[c,k]=E.useState("all"),[C,h]=E.useState("default"),[m,S]=E.useState("cards"),P=((ce=e.catalogEyebrow)==null?void 0:ce[r])||Xe.products.eyebrow[r],O=((ee=e.catalogTitle)==null?void 0:ee[r])||Xe.products.title[r],F=((T=e.tabAllLabel)==null?void 0:T[r])||(r==="vi"?"Tất cả sản phẩm":"All Products"),M=((A=e.tabSelfMadeLabel)==null?void 0:A[r])||(r==="vi"?"Mạch điều khiển & Module":"Control Boards & Modules"),$=((R=e.tabCommercialLabel)==null?void 0:R[r])||(r==="vi"?"Động cơ & Phụ kiện":"Motors & Accessories"),D=((f=e.tabProjectLabel)==null?void 0:f[r])||(r==="vi"?"Sản phẩm Đồ án & NCKH":"Project & Research Kits"),U=((L=e.buyingStepsTitle)==null?void 0:L[r])||(r==="vi"?"Quy trình Đặt hàng — Kiểm tra — Bảo hành tại Shop":"Store Buying, Testing & Warranty Process"),J=[{step:"01",title:{vi:"Chọn sản phẩm vào giỏ",en:"Add Items to Cart"},desc:{vi:"Thêm mạch hoặc phụ kiện vào giỏ và gửi thông tin nhận hàng trong 30 giây.",en:"Add boards or parts and submit delivery info in 30 seconds."}},{step:"02",title:{vi:"Xác nhận & gửi ảnh test mạch",en:"Test Proof Before Dispatch"},desc:{vi:"Shop nạp sẵn firmware, test tải thực tế và gửi ảnh/video qua Zalo trước khi đóng gói.",en:"Every board is pre-flashed and load-tested with proof shared on Zalo."}},{step:"03",title:{vi:"Giao hàng COD toàn quốc",en:"Nationwide COD Delivery"},desc:{vi:"Đóng gói chống tĩnh điện, kèm phiếu sơ đồ chân cắm; nhận hàng kiểm tra rồi thanh toán.",en:"ESD-safe packaging with printed pinout guide and nationwide COD."}},{step:"04",title:{vi:"Hỗ trợ đấu nối 1-1",en:"1-1 Technical Support"},desc:{vi:"Hướng dẫn cấp nguồn, nối động cơ và gửi tập lệnh điều khiển trực tiếp qua Zalo.",en:"Direct wiring assistance and command setup over Zalo."}}],se=e.buyingSteps&&e.buyingSteps.length>0?e.buyingSteps:J,re=(v,x,j)=>{d&&d(G=>{const V=G.buyingSteps&&G.buyingSteps.length>0?[...G.buyingSteps]:[...J],W=V[v]||J[v];return V[v]={...W,[x]:{...W[x],[r]:j}},{...G,buyingSteps:V}})},X=E.useMemo(()=>{const v=i.trim().toLowerCase(),x=t.filter(j=>!(a==="all"||j.originType===a)||!(c==="all"||j.category===c)?!1:v?[j.code,j.name[r],j.subtitle[r],j.description[r],j.customCategoryName||"",...j.techStack].join(" ").toLowerCase().includes(v):!0);return C==="price-asc"?[...x].sort((j,G)=>j.price-G.price):C==="price-desc"?[...x].sort((j,G)=>G.price-j.price):C==="in-stock"?[...x].sort((j,G)=>G.stock-j.stock):x},[t,a,c,i,C,r]);return n.jsx("section",{id:"products",className:"py-10 sm:py-14 bg-white dark:bg-[#0B1324] border-b border-slate-200 dark:border-[#1E325C]",children:n.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[n.jsx(Et,{children:n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsx("div",{className:"flex-1 min-w-[260px]",children:l&&d?n.jsxs("div",{className:"space-y-1.5 max-w-xl",children:[n.jsx("input",{type:"text",value:P,onChange:v=>d(x=>{var j,G;return{...x,catalogEyebrow:{vi:r==="vi"?v.target.value:((j=x.catalogEyebrow)==null?void 0:j.vi)||P,en:r==="en"?v.target.value:((G=x.catalogEyebrow)==null?void 0:G.en)||P}}}),className:"w-full rounded border border-dashed border-sky-400 bg-slate-900 px-2 py-0.5 font-mono text-[11px] font-bold uppercase text-sky-300 focus:outline-none"}),n.jsx("input",{type:"text",value:O,onChange:v=>d(x=>{var j,G;return{...x,catalogTitle:{vi:r==="vi"?v.target.value:((j=x.catalogTitle)==null?void 0:j.vi)||O,en:r==="en"?v.target.value:((G=x.catalogTitle)==null?void 0:G.en)||O}}}),className:"w-full rounded border border-dashed border-sky-400 bg-slate-900 px-2.5 py-1 text-xl font-bold text-white sm:text-2xl focus:outline-none"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"font-mono text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:P}),n.jsx("h2",{className:"mt-0.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl",children:O})]})}),n.jsxs("div",{className:"font-mono text-xs font-semibold text-slate-500 dark:text-slate-400",children:[X.length," ",r==="vi"?"sản phẩm hiển thị":"products"]})]})}),n.jsx(Et,{delayMs:40,children:n.jsxs("div",{className:"mt-5 space-y-2.5",children:[n.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"all",label:`${F} (${t.length})`},{id:"self-made",label:`${M} (${t.filter(v=>v.originType==="self-made").length})`},{id:"project-kit",label:`${D} (${t.filter(v=>v.originType==="project-kit").length})`},{id:"commercial",label:`${$} (${t.filter(v=>v.originType==="commercial").length})`}].map(v=>n.jsx("button",{type:"button",onClick:()=>s(v.id),className:`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${a===v.id?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] text-slate-700 dark:text-slate-200 hover:border-sky-400"}`,children:v.label},v.id))}),l&&d&&n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 rounded-xl border border-dashed border-sky-400/70 bg-slate-900/70 p-2.5 text-xs",children:[n.jsx("input",{type:"text",value:F,onChange:v=>d(x=>{var j,G;return{...x,tabAllLabel:{vi:r==="vi"?v.target.value:((j=x.tabAllLabel)==null?void 0:j.vi)||F,en:r==="en"?v.target.value:((G=x.tabAllLabel)==null?void 0:G.en)||F}}}),placeholder:"Tên tab Tất cả",className:"rounded border border-slate-600 bg-[#080D1A] px-2 py-1 text-slate-100 focus:border-sky-400 focus:outline-none"}),n.jsx("input",{type:"text",value:M,onChange:v=>d(x=>{var j,G;return{...x,tabSelfMadeLabel:{vi:r==="vi"?v.target.value:((j=x.tabSelfMadeLabel)==null?void 0:j.vi)||M,en:r==="en"?v.target.value:((G=x.tabSelfMadeLabel)==null?void 0:G.en)||M}}}),placeholder:"Tên tab Mạch ĐK",className:"rounded border border-slate-600 bg-[#080D1A] px-2 py-1 text-slate-100 focus:border-sky-400 focus:outline-none"}),n.jsx("input",{type:"text",value:D,onChange:v=>d(x=>{var j,G;return{...x,tabProjectLabel:{vi:r==="vi"?v.target.value:((j=x.tabProjectLabel)==null?void 0:j.vi)||D,en:r==="en"?v.target.value:((G=x.tabProjectLabel)==null?void 0:G.en)||D}}}),placeholder:"Tên tab SP Đồ án & NCKH",className:"rounded border border-slate-600 bg-[#080D1A] px-2 py-1 text-slate-100 focus:border-sky-400 focus:outline-none"}),n.jsx("input",{type:"text",value:$,onChange:v=>d(x=>{var j,G;return{...x,tabCommercialLabel:{vi:r==="vi"?v.target.value:((j=x.tabCommercialLabel)==null?void 0:j.vi)||$,en:r==="en"?v.target.value:((G=x.tabCommercialLabel)==null?void 0:G.en)||$}}}),placeholder:"Tên tab Động cơ & PK",className:"rounded border border-slate-600 bg-[#080D1A] px-2 py-1 text-slate-100 focus:border-sky-400 focus:outline-none"})]})]})}),n.jsx(Et,{delayMs:80,children:n.jsxs("div",{className:"mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between border-y border-slate-200 dark:border-[#1E325C] py-3.5",children:[n.jsx("div",{className:"flex flex-wrap gap-2",children:Xe.products.categories.map(v=>{const x=c===v.id;return n.jsx("button",{type:"button",onClick:()=>k(v.id),className:`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${x?"bg-slate-900 text-white dark:bg-sky-500/20 dark:text-sky-300 dark:border dark:border-sky-400/50":"border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] text-slate-600 dark:text-slate-300 hover:border-sky-400"}`,children:v.label[r]},v.id)})}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("div",{className:"relative flex-1 sm:w-52",children:[n.jsx(di,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),n.jsx("input",{type:"text",value:i,onChange:v=>o(v.target.value),placeholder:Xe.products.searchPlaceholder[r],className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] py-1.5 pl-9 pr-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none transition-colors"})]}),n.jsxs("select",{"aria-label":r==="vi"?"Sắp xếp sản phẩm":"Sort products",value:C,onChange:v=>h(v.target.value),className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:border-sky-400 focus:outline-none",children:[n.jsx("option",{value:"default",children:r==="vi"?"Sắp xếp: Mặc định":"Sort: Default"}),n.jsx("option",{value:"price-asc",children:r==="vi"?"Giá: Thấp → Cao":"Price: Low → High"}),n.jsx("option",{value:"price-desc",children:r==="vi"?"Giá: Cao → Thấp":"Price: High → Low"}),n.jsx("option",{value:"in-stock",children:r==="vi"?"Ưu tiên còn hàng":"In Stock First"})]}),n.jsxs("div",{className:"inline-flex rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] overflow-hidden",children:[n.jsxs("button",{type:"button",onClick:()=>S("cards"),className:`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-colors ${m==="cards"?"bg-sky-500 text-white":"text-slate-600 dark:text-slate-300"}`,children:[n.jsx($0,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:r==="vi"?"Thẻ":"Cards"})]}),n.jsxs("button",{type:"button",onClick:()=>S("table"),className:`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-colors ${m==="table"?"bg-sky-500 text-white":"text-slate-600 dark:text-slate-300"}`,children:[n.jsx(tf,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:r==="vi"?"Bảng":"Table"})]})]})]})]})}),X.length===0?n.jsx("div",{className:"mt-10 rounded-xl border border-dashed border-slate-300 dark:border-[#1E325C] p-12 text-center text-sm text-slate-500",children:Xe.products.emptyResult[r]}):m==="cards"?n.jsx("div",{className:"mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",children:X.map((v,x)=>n.jsx(Et,{delayMs:Math.min(x*60,240),children:n.jsxs("article",{className:"group hover-lift flex h-full flex-col rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#111C33] p-4",children:[n.jsxs("div",{className:"mb-3 flex items-center justify-between gap-2 text-xs",children:[n.jsxs("span",{className:"inline-flex items-center gap-1.5 font-mono font-bold text-sky-600 dark:text-sky-400",children:[n.jsx("span",{className:"rounded bg-sky-500/15 px-1.5 py-0.5 text-[10px]",children:v.code}),n.jsx("span",{className:"text-[11px] font-normal text-slate-500 dark:text-slate-400 truncate max-w-[140px]",children:v.customCategoryName||v.categoryLabel[r]})]}),n.jsx("span",{className:`font-mono text-[11px] font-semibold shrink-0 ${v.price<=0?"text-sky-600 dark:text-sky-400":v.stock>0?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`,children:v.price<=0?r==="vi"?"Nhận theo yêu cầu":"Custom Quote":v.stock>0?`${r==="vi"?"Còn":"Stock:"} ${v.stock} ${v.unit}`:r==="vi"?"Tạm hết":"Out"})]}),n.jsx(zm,{product:v,lang:r,variant:"card",onClickDetail:()=>g(v)}),n.jsxs("div",{className:"mt-3.5 flex-1 space-y-1.5",children:[n.jsxs("div",{className:"flex items-baseline gap-1.5 pt-0.5",children:[n.jsx("span",{className:"font-mono text-lg font-bold text-amber-600 dark:text-amber-400",children:ne(v.price,r)}),v.price>0&&n.jsxs("span",{className:"font-mono text-xs text-slate-500 dark:text-slate-400",children:["/ ",v.unit]})]}),n.jsx("h3",{onClick:()=>g(v),className:"cursor-pointer text-base font-bold leading-snug text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors",children:v.name[r]}),n.jsx("p",{className:"font-mono text-[11px] text-slate-500 dark:text-slate-400",children:v.subtitle[r]}),n.jsx("p",{className:"text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2",children:v.description[r]})]}),n.jsx("div",{className:"mt-3 border-y border-slate-200 dark:border-[#1E325C] py-2 space-y-1 text-xs",children:v.specs.slice(0,2).map((j,G)=>n.jsxs("div",{className:"grid grid-cols-12 gap-2",children:[n.jsx("span",{className:"col-span-5 font-semibold text-slate-500 dark:text-slate-400 truncate",children:j.label[r]}),n.jsx("span",{className:"col-span-7 font-mono text-slate-800 dark:text-slate-200 truncate text-right",children:j.value})]},G))}),n.jsxs("div",{className:"mt-4 flex items-center gap-1.5 pt-1",children:[n.jsxs("button",{type:"button",onClick:()=>g(v),className:"inline-flex select-none items-center justify-center gap-1 rounded-lg border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] px-2.5 py-2 text-xs font-bold text-slate-800 dark:text-slate-100 hover:border-sky-400 hover:text-sky-500 transition-all duration-200 whitespace-nowrap",children:[n.jsx("span",{children:Xe.products.viewDetail[r]}),n.jsx(A0,{className:"h-3.5 w-3.5"})]}),v.price<=0?n.jsx("button",{type:"button",onClick:()=>N(v),className:"flex-1 select-none rounded-lg bg-sky-600 hover:bg-sky-500 px-3 py-2 text-xs font-bold text-white transition-colors whitespace-nowrap",children:r==="vi"?"Đăng ký tư vấn & Báo giá":"Request Consultation & Quote"}):v.stock>0?n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",onClick:()=>p(v),className:"flex-1 inline-flex select-none items-center justify-center gap-1 rounded-lg border border-sky-500/50 bg-sky-500/10 hover:bg-sky-500/20 px-2.5 py-2 text-xs font-bold text-sky-700 dark:text-sky-300 transition-colors whitespace-nowrap",children:[n.jsx(jm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:r==="vi"?"+ Giỏ":"+ Cart"})]}),n.jsxs("button",{type:"button",onClick:()=>w(v),className:"flex-1 inline-flex select-none items-center justify-center gap-1 rounded-lg bg-sky-500 hover:bg-sky-600 px-2.5 py-2 text-xs font-bold text-white shadow-sm transition-colors whitespace-nowrap",children:[n.jsx(af,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:Xe.products.buyNow[r]})]})]}):n.jsx("button",{type:"button",onClick:()=>N(v),className:"flex-1 select-none rounded-lg bg-amber-600 hover:bg-amber-700 px-3 py-2 text-xs font-bold text-white transition-colors",children:r==="vi"?"Đặt trước / Báo giá":"Pre-order / Quote"}),l&&u&&n.jsxs("button",{type:"button",onClick:()=>u(v.id),title:"Sửa thông tin & giá sản phẩm này",className:"inline-flex select-none items-center gap-1 rounded-lg border border-amber-400/60 bg-amber-500/15 px-2 py-2 text-xs font-bold text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition-colors whitespace-nowrap",children:[n.jsx(km,{className:"h-3 w-3"}),n.jsx("span",{children:"Sửa SP"})]})]})]})},v.id))}):n.jsx(Et,{children:n.jsx("div",{className:"mt-8 overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#111C33]",children:n.jsxs("table",{className:"w-full text-left border-collapse",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"border-b border-slate-200 dark:border-[#1E325C] bg-slate-100 dark:bg-[#0B1324] font-mono text-xs uppercase text-slate-600 dark:text-slate-400",children:[n.jsx("th",{className:"px-4 py-3 font-bold",children:"Mã hàng"}),n.jsx("th",{className:"px-4 py-3 font-bold",children:r==="vi"?"Tên sản phẩm":"Product Name"}),n.jsx("th",{className:"px-4 py-3 font-bold",children:r==="vi"?"Giá bán":"Price"}),n.jsx("th",{className:"px-4 py-3 font-bold",children:r==="vi"?"Tồn kho":"Stock"}),n.jsx("th",{className:"px-4 py-3 font-bold text-right",children:r==="vi"?"Mua / Xem":"Action"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200 dark:divide-[#1E325C] text-sm",children:X.map(v=>n.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-[#162340] transition-colors",children:[n.jsxs("td",{className:"px-4 py-3.5 font-mono font-bold text-sky-600 dark:text-sky-400 whitespace-nowrap",children:[v.code,n.jsx("div",{className:"text-[11px] text-slate-500 font-normal",children:v.customCategoryName||v.categoryLabel[r]})]}),n.jsx("td",{className:"px-4 py-3.5",children:n.jsx("button",{type:"button",onClick:()=>g(v),className:"font-bold text-left text-slate-900 dark:text-white hover:text-sky-400",children:v.name[r]})}),n.jsxs("td",{className:"px-4 py-3.5 font-mono font-bold text-amber-600 dark:text-amber-400 whitespace-nowrap",children:[ne(v.price,r),v.price>0?` / ${v.unit}`:""]}),n.jsx("td",{className:"px-4 py-3.5 font-mono text-xs font-semibold whitespace-nowrap",children:n.jsx("span",{className:v.price<=0?"text-sky-600 dark:text-sky-400":v.stock>0?"text-emerald-600 dark:text-emerald-400":"text-rose-500",children:v.price<=0?r==="vi"?"Theo yêu cầu":"On Demand":v.stock>0?`${v.stock} ${v.unit}`:"Hết hàng"})}),n.jsxs("td",{className:"px-4 py-3.5 text-right whitespace-nowrap space-x-2",children:[n.jsx("button",{type:"button",onClick:()=>g(v),className:"rounded-lg border border-slate-300 dark:border-[#243B6B] px-2.5 py-1 text-xs font-semibold hover:border-sky-400",children:r==="vi"?"Chi tiết":"Details"}),v.price<=0?n.jsx("button",{type:"button",onClick:()=>N(v),className:"rounded-lg bg-sky-600 hover:bg-sky-500 px-2.5 py-1 text-xs font-bold text-white",children:r==="vi"?"Đăng ký tư vấn & Báo giá":"Request Quote"}):v.stock>0?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:()=>p(v),className:"rounded-lg border border-sky-500/40 bg-sky-500/10 px-2.5 py-1 text-xs font-bold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20",children:r==="vi"?"+ Giỏ":"+ Cart"}),n.jsx("button",{type:"button",onClick:()=>w(v),className:"rounded-lg bg-sky-500 px-2.5 py-1 text-xs font-bold text-white hover:bg-sky-600",children:Xe.products.buyNow[r]})]}):n.jsx("button",{type:"button",onClick:()=>N(v),className:"rounded-lg bg-amber-600 px-2.5 py-1 text-xs font-bold text-white",children:r==="vi"?"Đặt trước":"Pre-order"})]})]},v.id))})]})})}),n.jsx(Et,{delayMs:120,children:n.jsxs("div",{id:"policy",className:"mt-10 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#080D1A]",children:[n.jsx("div",{className:"border-b border-slate-200 dark:border-[#1E325C] px-5 py-3",children:l&&d?n.jsx("input",{type:"text",value:U,onChange:v=>d(x=>{var j,G;return{...x,buyingStepsTitle:{vi:r==="vi"?v.target.value:((j=x.buyingStepsTitle)==null?void 0:j.vi)||U,en:r==="en"?v.target.value:((G=x.buyingStepsTitle)==null?void 0:G.en)||U}}}),className:"w-full max-w-xl rounded border border-dashed border-sky-400 bg-slate-900 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-sky-300 focus:outline-none"}):n.jsx("div",{className:"font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:U})}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-[#1E325C] bg-white dark:bg-[#111C33]",children:se.map((v,x)=>n.jsxs("div",{className:"p-4 sm:p-5 space-y-1.5",children:[n.jsx("div",{className:"font-mono text-sm font-extrabold text-amber-500",children:v.step}),l&&d?n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("input",{type:"text",value:v.title[r],onChange:j=>re(x,"title",j.target.value),className:"w-full rounded border border-dashed border-sky-400 bg-slate-900 px-2 py-1 text-xs font-bold text-white focus:outline-none"}),n.jsx("textarea",{rows:3,value:v.desc[r],onChange:j=>re(x,"desc",j.target.value),className:"w-full rounded border border-dashed border-slate-500 bg-slate-900 px-2 py-1 text-xs text-slate-300 focus:border-sky-400 focus:outline-none"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-sm font-bold text-slate-900 dark:text-white",children:v.title[r]}),n.jsx("p",{className:"text-xs leading-relaxed text-slate-600 dark:text-slate-300",children:v.desc[r]})]})]},v.step||x))})]})})]})})},qf=({product:e,lang:t,onClose:r,onAddToCart:a,onOrderProduct:s})=>{const[i,o]=E.useState("overview"),[l,d]=E.useState(!1);if(E.useEffect(()=>{o("overview"),d(!1)},[e]),!e)return null;const u=()=>{navigator.clipboard.writeText(e.codeSnippet),d(!0),setTimeout(()=>d(!1),1800)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm animate-backdrop no-print",onClick:r,children:n.jsxs("div",{className:"animate-modal relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] shadow-2xl",onClick:g=>g.stopPropagation(),children:[n.jsxs("div",{className:"flex items-start justify-between gap-4 border-b border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#080D1A] px-6 py-4",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 text-xs",children:[n.jsx("span",{className:"rounded bg-sky-500 text-white px-2.5 py-0.5 font-mono font-bold",children:e.code}),n.jsx("span",{className:"font-mono text-slate-500 dark:text-slate-400",children:e.revision}),n.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:e.status[t]})]}),n.jsx("h3",{className:"mt-2 text-xl font-bold text-slate-900 dark:text-white",children:e.name[t]}),n.jsx("p",{className:"font-mono text-xs text-slate-500 dark:text-slate-400",children:e.subtitle[t]})]}),n.jsx("button",{type:"button",onClick:r,"aria-label":"Đóng",className:"rounded-lg border border-slate-300 dark:border-[#1E325C] p-2 text-slate-500 hover:border-sky-400 hover:text-sky-400 transition-colors",children:n.jsx(Gn,{className:"h-4 w-4"})})]}),n.jsx("div",{className:"flex border-b border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#080D1A]/80 text-xs sm:text-sm",children:[{id:"overview",label:t==="vi"?"Tổng quan & Tính năng":"Overview & Features"},{id:"specs",label:t==="vi"?"Thông số Kỹ thuật":"Specifications"},...e.showTechnicalGuide!==!1?[{id:"architecture",label:t==="vi"?"Sơ đồ Đấu nối & Hướng dẫn dùng":"Wiring & User Guide"}]:[]].map(g=>{const p=i===g.id;return n.jsx("button",{type:"button",onClick:()=>o(g.id),className:`px-5 py-3 font-semibold transition-all duration-200 border-b-2 ${p?"border-sky-500 bg-white dark:bg-[#0B1324] text-sky-600 dark:text-sky-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,children:g.label},g.id)})}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[i==="overview"&&n.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-12 animate-modal",children:[n.jsxs("div",{className:"md:col-span-5 space-y-4",children:[n.jsx(zm,{product:e,lang:t,variant:"studio"}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-4 space-y-2",children:[n.jsxs("div",{className:"flex items-baseline justify-between border-b border-slate-200 dark:border-[#1E325C] pb-2",children:[n.jsx("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:t==="vi"?"Giá bán":"Price"}),n.jsxs("span",{className:"font-mono text-lg font-bold text-amber-600 dark:text-amber-400",children:[ne(e.price,t),e.price>0?` / ${e.unit}`:""]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:t==="vi"?"Kho hàng":"Stock"}),n.jsx("span",{className:e.price<=0?"font-bold text-sky-600 dark:text-sky-400":e.stock>0?"font-bold text-emerald-600 dark:text-emerald-400":"font-bold text-rose-500",children:e.price<=0?t==="vi"?"Nhận gia công theo yêu cầu":"Custom On-Demand":e.stock>0?`Còn ${e.stock} ${e.unit}`:"Tạm hết hàng"})]}),n.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400 pt-1",children:e.supplyForm[t]})]}),n.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.techStack.map(g=>n.jsx("span",{className:"rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-0.5 font-mono text-[11px] text-sky-700 dark:text-sky-300",children:g},g))})]}),n.jsxs("div",{className:"md:col-span-7 space-y-5",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:t==="vi"?"Mô tả sản phẩm":"Product Overview"}),n.jsx("p",{className:"mt-2 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300",children:e.description[t]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:t==="vi"?"Ưu điểm khi đưa vào sử dụng thực tế":"Practical Advantages"}),n.jsx("ul",{className:"mt-2.5 space-y-2 border-l-2 border-sky-500 pl-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300",children:e.engineeringNotes[t].map((g,p)=>n.jsx("li",{children:g},p))})]})]})]}),i==="specs"&&n.jsx("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] overflow-hidden animate-modal",children:n.jsxs("table",{className:"w-full text-left text-sm",children:[n.jsx("thead",{className:"bg-slate-100 dark:bg-[#111C33] font-mono text-xs uppercase text-slate-500 dark:text-slate-400",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-4 py-3 border-b border-slate-200 dark:border-[#1E325C] w-1/3",children:t==="vi"?"Thông số":"Parameter"}),n.jsx("th",{className:"px-4 py-3 border-b border-slate-200 dark:border-[#1E325C]",children:t==="vi"?"Chi tiết":"Specification"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200 dark:divide-[#1E325C] bg-white dark:bg-[#0B1324]",children:e.specs.map((g,p)=>n.jsxs("tr",{children:[n.jsx("td",{className:"px-4 py-3 font-semibold text-slate-800 dark:text-slate-200",children:g.label[t]}),n.jsx("td",{className:"px-4 py-3 font-mono text-xs sm:text-sm text-sky-700 dark:text-sky-300",children:g.value})]},p))})]})}),i==="architecture"&&n.jsxs("div",{className:"space-y-5 animate-modal",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2",children:t==="vi"?"Sơ đồ Đấu nối & Ghép nối Thiết bị ngoài":"External Wiring Diagram"}),n.jsx("pre",{className:"overflow-x-auto rounded-xl border border-[#1E325C] bg-[#060C18] p-4 font-mono text-xs leading-relaxed text-sky-200",children:e.architectureDiagram})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("h4",{className:"font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:e.codeSnippetTitle}),n.jsx("button",{type:"button",onClick:u,className:"inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-[#1E325C] px-3 py-1 text-xs font-semibold hover:border-sky-400 transition-colors",children:l?n.jsxs(n.Fragment,{children:[n.jsx(Kt,{className:"h-3.5 w-3.5 text-emerald-500"}),n.jsx("span",{children:t==="vi"?"Đã sao chép":"Copied"})]}):n.jsxs(n.Fragment,{children:[n.jsx(xn,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:t==="vi"?"Chép hướng dẫn":"Copy Guide"})]})})]}),n.jsx("pre",{className:"overflow-x-auto rounded-xl border border-[#1E325C] bg-[#060C18] p-4 font-mono text-xs leading-relaxed text-emerald-300",children:e.codeSnippet})]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#080D1A] px-6 py-4",children:[n.jsx("div",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400",children:t==="vi"?"Cần đặt số lượng lớn hoặc tùy chỉnh theo thông số riêng?":"Need bulk pricing or custom specifications?"}),n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsxs("button",{type:"button",onClick:()=>{s(e),r()},className:`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors ${e.price<=0?"bg-sky-500 hover:bg-sky-600 text-white shadow-sm":"border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#111C33] text-slate-800 dark:text-slate-100 hover:border-sky-400"}`,children:[n.jsx("span",{children:e.price<=0?t==="vi"?"Đăng ký tư vấn & Nhận báo giá":"Request Consultation & Quote":Xe.products.orderQuote[t]}),n.jsx(gm,{className:"h-4 w-4"})]}),e.price>0&&e.stock>0&&n.jsxs("button",{type:"button",onClick:()=>{a(e),r()},className:"inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-colors",children:[n.jsx(jm,{className:"h-4 w-4"}),n.jsx("span",{children:Xe.products.addToCart[t]})]})]})]})]})})},Wf=({profile:e,services:t,lang:r,inlineEditMode:a=!1,onUpdateProfile:s,onSelectService:i,onBrowseProjectKits:o})=>{var p,w,N;const l=((p=e.servicesEyebrow)==null?void 0:p[r])||Xe.services.eyebrow[r],d=((w=e.servicesTitle)==null?void 0:w[r])||Xe.services.title[r],u=((N=e.servicesSubtitle)==null?void 0:N[r])||Xe.services.subtitle[r],g=[{step:"01",title:r==="vi"?"Tiếp nhận đề tài & yêu cầu":"Topic & Requirement Review",desc:r==="vi"?"Xem đề cương đồ án / bài toán NCKH, chốt linh kiện tối ưu chi phí và thời gian hoàn thành.":"Review thesis outline or R&D specs to lock optimal hardware and milestone schedule."},{step:"02",title:r==="vi"?"Thiết kế mạch & dựng mô hình":"Circuit & Prototype Assembly",desc:r==="vi"?"Gia công phần điện – cơ khí gọn đẹp, chống nhiễu động cơ và lập trình chức năng đúng đề bài.":"Build clean, EMI-safe electronics & mechanics programmed to meet project objectives."},{step:"03",title:r==="vi"?"Đo đạc thực nghiệm & xuất số liệu":"Testing & Telemetry Capture",desc:r==="vi"?"Chạy thử nghiệm thực tế, xuất log dữ liệu / đồ thị đáp ứng phục vụ chương thực nghiệm báo cáo.":"Run physical benchmarks and log CSV response curves for research charts and results."},{step:"04",title:r==="vi"?"Bàn giao & hướng dẫn bảo vệ":"Handover & Defense Prep",desc:r==="vi"?"Giao mô hình hoàn chỉnh kèm tài liệu giải thích sơ đồ khối, tập lệnh và hỗ trợ tới ngày bảo vệ.":"Deliver complete kit with wiring guides, principle notes, and defense Q&A support."}];return n.jsx("section",{id:"projects-support",className:"py-14 sm:py-20 bg-slate-50 dark:bg-[#080D1A] border-b border-slate-200 dark:border-[#1E325C]",children:n.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[n.jsx(Et,{children:n.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",children:[n.jsx("div",{className:"max-w-3xl space-y-2.5",children:a&&s?n.jsxs("div",{className:"space-y-2",children:[n.jsx("input",{type:"text",value:l,onChange:c=>s(k=>{var C,h;return{...k,servicesEyebrow:{vi:r==="vi"?c.target.value:((C=k.servicesEyebrow)==null?void 0:C.vi)||l,en:r==="en"?c.target.value:((h=k.servicesEyebrow)==null?void 0:h.en)||l}}}),className:"w-full rounded border border-dashed border-sky-400 bg-slate-900 px-2.5 py-1 font-mono text-xs font-bold uppercase text-sky-300 focus:outline-none"}),n.jsx("input",{type:"text",value:d,onChange:c=>s(k=>{var C,h;return{...k,servicesTitle:{vi:r==="vi"?c.target.value:((C=k.servicesTitle)==null?void 0:C.vi)||d,en:r==="en"?c.target.value:((h=k.servicesTitle)==null?void 0:h.en)||d}}}),className:"w-full rounded border border-dashed border-sky-400 bg-slate-900 px-3 py-1.5 text-xl sm:text-2xl font-bold text-white focus:outline-none"}),n.jsx("textarea",{rows:2,value:u,onChange:c=>s(k=>{var C,h;return{...k,servicesSubtitle:{vi:r==="vi"?c.target.value:((C=k.servicesSubtitle)==null?void 0:C.vi)||u,en:r==="en"?c.target.value:((h=k.servicesSubtitle)==null?void 0:h.en)||u}}}),className:"w-full rounded border border-dashed border-slate-500 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 focus:border-sky-400 focus:outline-none"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:l}),n.jsx("h2",{className:"text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl",children:d}),n.jsx("p",{className:"text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300",children:u})]})}),n.jsxs("button",{type:"button",onClick:o,className:"inline-flex shrink-0 self-start items-center gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors",children:[n.jsx("span",{children:r==="vi"?"Xem Bộ Kit & Mô hình Đồ án bán sẵn":"Browse Ready Project Kits"}),n.jsx(fm,{className:"h-3.5 w-3.5"})]})]})}),n.jsx("div",{className:"mt-8 grid grid-cols-1 gap-5 md:grid-cols-2",children:t.map((c,k)=>n.jsx(Et,{delayMs:k*70,children:n.jsxs("div",{className:"hover-lift flex h-full flex-col justify-between rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-slate-200 dark:border-[#1E325C] pb-2.5 text-xs",children:[n.jsxs("span",{className:"font-mono font-bold text-sky-600 dark:text-sky-400",children:[c.sectionCode," · ",c.badge[r]]}),n.jsx("span",{className:"font-mono text-slate-500 dark:text-slate-400",children:c.turnaround[r]})]}),n.jsx("h3",{className:"mt-3 text-lg font-bold text-slate-900 dark:text-white",children:c.title[r]}),n.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300",children:c.description[r]}),n.jsx("ul",{className:"mt-3.5 list-disc space-y-1.5 pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200",children:c.deliverables[r].map((C,h)=>n.jsx("li",{children:C},h))})]}),n.jsxs("div",{className:"mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-[#1E325C] pt-3.5",children:[n.jsx("div",{className:"text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400",children:c.pricingNote[r]}),n.jsxs("button",{type:"button",onClick:()=>i(c),className:"inline-flex select-none items-center gap-1.5 rounded-md border border-sky-500/40 bg-sky-500/10 px-3.5 py-2 text-xs font-bold text-sky-700 dark:text-sky-300 hover:bg-sky-500 hover:text-white transition-colors",children:[n.jsx("span",{children:Xe.services.ctaButton[r]}),n.jsx(gm,{className:"h-3.5 w-3.5"})]})]})]})},c.id))}),n.jsx(Et,{delayMs:100,children:n.jsxs("div",{className:"mt-8 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324]",children:[n.jsx("div",{className:"border-b border-slate-200 dark:border-[#1E325C] px-5 py-3",children:n.jsx("h3",{className:"font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:r==="vi"?"Quy trình tiếp nhận & hỗ trợ Đồ án — NCKH":"Engineering Project & Research Workflow"})}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-[#1E325C]",children:g.map(c=>n.jsxs("div",{className:"p-4 sm:p-5 space-y-1.5",children:[n.jsx("div",{className:"font-mono text-sm font-extrabold text-amber-500",children:c.step}),n.jsx("h4",{className:"text-sm font-bold text-slate-900 dark:text-white",children:c.title}),n.jsx("p",{className:"text-xs leading-relaxed text-slate-600 dark:text-slate-400",children:c.desc})]},c.step))})]})})]})})},Qf=({profile:e,lang:t,contactMode:r,setContactMode:a,prefilledSubject:s,inlineEditMode:i=!1,onUpdateProfile:o})=>{var A,R,f;const l=((A=e.contactEyebrow)==null?void 0:A[t])||Xe.contact.eyebrow[t],d=((R=e.contactTitle)==null?void 0:R[t])||Xe.contact.title[t],u=((f=e.contactSubtitle)==null?void 0:f[t])||Xe.contact.subtitle[t],[g,p]=E.useState(""),[w,N]=E.useState(""),[c,k]=E.useState(""),[C,h]=E.useState(""),[m,S]=E.useState(s),[P,O]=E.useState(""),[F,M]=E.useState(""),[$,D]=E.useState(!1),[U,J]=E.useState(!1),[se,re]=E.useState("");E.useEffect(()=>{s&&S(s)},[s]);const X=()=>[`[${r==="business"?t==="vi"?"Đặt hàng / Báo giá sỉ":"Bulk Order / Custom Design":r==="project"?t==="vi"?"Hỗ trợ Đồ án Kỹ thuật / NCKH":"Engineering Project / R&D Support":t==="vi"?"Hỗ trợ kỹ thuật / Bảo hành":"Technical Support / Warranty"}]`,`${t==="vi"?"Người gửi":"From"}: ${g||"(Chưa nhập)"}`,`${t==="vi"?"Trường / Khoa / Đơn vị":"Org / School"}: ${w||"-"}`,`${t==="vi"?"Số điện thoại / Zalo":"Phone / Zalo"}: ${c||"-"}`,`${t==="vi"?"Email liên hệ":"Email"}: ${C||"-"}`,`${t==="vi"?"Đề tài / Sản phẩm":"Topic / Item"}: ${m||"-"}`,"",P||(r==="project"?t==="vi"?"Chào shop, nhóm mình cần tư vấn / hỗ trợ đồ án kỹ thuật hoặc mô hình NCKH...":"Hello, I need engineering thesis / research prototype support...":t==="vi"?"Chào shop, tôi muốn đặt hàng số lượng / nhờ hỗ trợ đấu nối mạch...":"Hello, I would like a bulk quote or technical support for my board...")].join(`
`),ce=L=>{L.preventDefault();const v=Wr(c);if(!v.valid){M(v.error||"SĐT Zalo phải gồm đúng 10 số bắt đầu bằng số 0.");return}M("");const x=r==="business"?"Đặt mạch / Báo giá sỉ":r==="project"?"Hỗ trợ Đồ án / NCKH":"Kỹ thuật / Bảo hành",j=[v.normalized,C.trim()].filter(Boolean).join(" | ");Wc(e,{categoryLabel:x,senderName:g.trim()||"Khách hàng",senderCompany:w.trim(),senderContact:j,subject:m.trim(),message:P.trim()}).then(Q=>{Q.ok&&(re(t==="vi"?"✓ Đã tự động ghi yêu cầu của bạn lên Google Sheet & báo Shop!":"✓ Logged your request to Shop Google Sheet!"),setTimeout(()=>re(""),5e3))});const G=encodeURIComponent(m||(r==="business"?`[Đặt mạch / Báo giá] Từ ${g||"Khách hàng"}`:r==="project"?`[Hỗ trợ Đồ án / NCKH] Từ ${g||"Sinh viên / Nhóm NCKH"}`:`[Hỗ trợ kỹ thuật / Bảo hành] Từ ${w||g||"Khách hàng"}`)),V=encodeURIComponent(X()),W=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(e.email)}&su=${G}&body=${V}`;window.open(W,"_blank","noopener,noreferrer")||(window.location.href=W)},ee=()=>{if(navigator.clipboard.writeText(X()),J(!0),setTimeout(()=>J(!1),2e3),g.trim()||c.trim()||C.trim()||P.trim()){const L=r==="business"?"Đặt mạch / Báo giá sỉ":r==="project"?"Hỗ trợ Đồ án / NCKH":"Kỹ thuật / Bảo hành",v=[c.trim(),C.trim()].filter(Boolean).join(" | ");Wc(e,{categoryLabel:L,senderName:g.trim()||"Khách hàng",senderCompany:w.trim(),senderContact:v,subject:m.trim(),message:P.trim()})}},T=()=>{navigator.clipboard.writeText(`${e.name} | SĐT/Zalo: ${e.phone} | Email: ${e.email}`),D(!0),setTimeout(()=>D(!1),2e3)};return n.jsx("section",{id:"contact",className:"py-16 sm:py-24 bg-circuit-grid",children:n.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[n.jsx(Et,{children:n.jsx("div",{className:"max-w-3xl space-y-2.5",children:i&&o?n.jsxs("div",{className:"space-y-2",children:[n.jsx("input",{type:"text",value:l,onChange:L=>o(v=>{var x,j;return{...v,contactEyebrow:{vi:t==="vi"?L.target.value:((x=v.contactEyebrow)==null?void 0:x.vi)||l,en:t==="en"?L.target.value:((j=v.contactEyebrow)==null?void 0:j.en)||l}}}),className:"w-full rounded border border-dashed border-sky-400 bg-slate-900 px-2.5 py-1 font-mono text-xs font-bold uppercase text-sky-300 focus:outline-none"}),n.jsx("input",{type:"text",value:d,onChange:L=>o(v=>{var x,j;return{...v,contactTitle:{vi:t==="vi"?L.target.value:((x=v.contactTitle)==null?void 0:x.vi)||d,en:t==="en"?L.target.value:((j=v.contactTitle)==null?void 0:j.en)||d}}}),className:"w-full rounded border border-dashed border-sky-400 bg-slate-900 px-3 py-1.5 text-2xl font-bold text-white focus:outline-none"}),n.jsx("textarea",{rows:2,value:u,onChange:L=>o(v=>{var x,j;return{...v,contactSubtitle:{vi:t==="vi"?L.target.value:((x=v.contactSubtitle)==null?void 0:x.vi)||u,en:t==="en"?L.target.value:((j=v.contactSubtitle)==null?void 0:j.en)||u}}}),className:"w-full rounded border border-dashed border-slate-500 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 focus:border-sky-400 focus:outline-none"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:l}),n.jsx("h2",{className:"text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl",children:d}),n.jsx("p",{className:"text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300",children:u})]})})}),n.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12",children:[n.jsx(Et,{className:"lg:col-span-5",delayMs:60,children:n.jsxs("div",{className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#111C33] p-5 space-y-4 h-full",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 dark:border-[#1E325C] pb-3",children:[n.jsx("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:t==="vi"?"Kênh liên hệ trực tiếp":"Direct Channels"}),n.jsx("button",{type:"button",onClick:T,className:"inline-flex items-center gap-1 rounded-md border border-slate-300 dark:border-[#243B6B] bg-slate-50 dark:bg-[#0B1324] px-2.5 py-1 text-xs font-semibold hover:border-sky-400 transition-colors",children:$?n.jsxs(n.Fragment,{children:[n.jsx(Kt,{className:"h-3 w-3 text-emerald-500"}),n.jsx("span",{children:t==="vi"?"Đã chép":"Copied"})]}):n.jsxs(n.Fragment,{children:[n.jsx(xn,{className:"h-3 w-3"}),n.jsx("span",{children:t==="vi"?"Chép nhanh":"Copy Info"})]})})]}),n.jsxs("div",{className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#0B1324] divide-y divide-slate-200 dark:divide-[#1E325C]",children:[n.jsxs("a",{href:e.zaloLink,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between p-3.5 hover:bg-slate-100/70 dark:hover:bg-[#14203B] transition-colors",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(Oa,{className:"h-4 w-4 text-sky-500"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Zalo / Điện thoại"}),n.jsx("div",{className:"font-mono text-sm font-bold text-slate-900 dark:text-white",children:e.phone})]})]}),n.jsx(Mt,{className:"h-3.5 w-3.5 text-slate-400"})]}),n.jsxs("a",{href:`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(e.email)}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-3.5 hover:bg-slate-100/70 dark:hover:bg-[#14203B] transition-colors",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(Ii,{className:"h-4 w-4 text-sky-500"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Email"}),n.jsx("div",{className:"font-mono text-sm font-bold text-slate-900 dark:text-white break-all",children:e.email})]})]}),n.jsx(Mt,{className:"h-3.5 w-3.5 text-slate-400"})]}),n.jsxs("div",{className:"flex items-center gap-3 p-3.5",children:[n.jsx(xd,{className:"h-4 w-4 text-emerald-500"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:t==="vi"?"Khu vực làm việc":"Location"}),n.jsx("div",{className:"text-sm font-semibold text-slate-900 dark:text-white",children:e.location[t]})]})]})]}),n.jsxs("div",{className:"flex flex-wrap gap-2 pt-1 text-xs",children:[n.jsxs("a",{href:`tel:${e.phone}`,className:"inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700 transition-colors",children:[n.jsx(Oa,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:t==="vi"?"Gọi trực tiếp Hotline":"Call Hotline"})]}),n.jsxs("a",{href:e.zaloLink,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1.5 rounded-md border border-sky-500/40 bg-sky-500/10 px-4 py-2 font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-500/20 transition-colors",children:[n.jsx("span",{children:t==="vi"?"Nhắn Zalo Shop":"Chat on Zalo"}),n.jsx(Mt,{className:"h-3 w-3"})]})]})]})}),n.jsx(Et,{className:"lg:col-span-7",delayMs:120,children:n.jsxs("form",{onSubmit:ce,className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#111C33] p-5 space-y-4",children:[n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-1 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-100 dark:bg-[#0B1324] p-1 text-xs",children:[n.jsx("button",{type:"button",onClick:()=>a("business"),className:`rounded-lg py-2 px-2 font-bold transition-all duration-200 ${r==="business"?"bg-sky-500 text-white shadow-sm":"text-slate-600 dark:text-slate-400"}`,children:t==="vi"?"Đặt mạch / Báo giá sỉ":"Bulk Order / PCB"}),n.jsx("button",{type:"button",onClick:()=>a("project"),className:`rounded-lg py-2 px-2 font-bold transition-all duration-200 ${r==="project"?"bg-sky-500 text-white shadow-sm":"text-slate-600 dark:text-slate-400"}`,children:t==="vi"?"Hỗ trợ Đồ án / NCKH":"Project / R&D Help"}),n.jsx("button",{type:"button",onClick:()=>a("support"),className:`rounded-lg py-2 px-2 font-bold transition-all duration-200 ${r==="support"?"bg-sky-500 text-white shadow-sm":"text-slate-600 dark:text-slate-400"}`,children:t==="vi"?"Kỹ thuật / Bảo hành":"Support / Warranty"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",children:t==="vi"?"Họ tên *":"Name *"}),n.jsx("input",{type:"text",required:!0,value:g,onChange:L=>p(L.target.value),placeholder:t==="vi"?"Anh Minh / Chị Lan...":"Your name",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#0B1324] px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-sky-400 focus:outline-none transition-colors"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",children:r==="project"?t==="vi"?"Trường / Khoa / Nhóm":"University / Faculty / Team":t==="vi"?"Đơn vị / Xưởng / Công ty":"Workshop / Company"}),n.jsx("input",{type:"text",value:w,onChange:L=>N(L.target.value),placeholder:r==="business"?t==="vi"?"Xưởng cơ khí / Nhóm R&D...":"Automation / R&D team...":r==="project"?t==="vi"?"VD: ĐH Bách Khoa · Khoa Tự động hóa...":"University / Research Lab...":t==="vi"?"Mã đơn hàng hoặc tên công ty...":"Order ID or Company...",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#0B1324] px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-sky-400 focus:outline-none transition-colors"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",children:t==="vi"?"Số điện thoại / Zalo *":"Phone / Zalo *"}),n.jsx("input",{type:"tel",inputMode:"numeric",required:!0,value:c,onChange:L=>{k(L.target.value),M("")},placeholder:"0912345678 (10 số, bắt đầu bằng 0)",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#0B1324] px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-sky-400 focus:outline-none transition-colors"}),F&&n.jsx("p",{className:"mt-1 text-[11px] font-medium text-rose-600 dark:text-rose-400",children:F})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",children:t==="vi"?"Email liên hệ":"Contact Email"}),n.jsx("input",{type:"email",value:C,onChange:L=>h(L.target.value),placeholder:"tenban@gmail.com",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#0B1324] px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-sky-400 focus:outline-none transition-colors"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",children:r==="project"?t==="vi"?"Tên đề tài / Deadline dự kiến":"Project Topic / Target Deadline":t==="vi"?"Sản phẩm / Mã đơn hàng":"Product / Order ID"}),n.jsx("input",{type:"text",value:m,onChange:L=>S(L.target.value),placeholder:r==="business"?"PIDSM v2.2 / Bo H743ZIT6R1...":r==="project"?"Xe AGV Mecanum / Băng tải phân loại...":"Cần hỗ trợ đấu dây / bảo hành mạch...",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#0B1324] px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-sky-400 focus:outline-none transition-colors"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",children:t==="vi"?"Nội dung yêu cầu":"Inquiry Details"}),n.jsx("textarea",{rows:4,value:P,onChange:L=>O(L.target.value),placeholder:r==="business"?t==="vi"?"Ví dụ: Cần đặt 5 mạch PIDSM v2.2 kèm 4 bánh Mecanum 100mm, báo giá sỉ và thời gian giao hàng...":"e.g. Need bulk quote for 5x PIDSM v2.2 + 4x Mecanum wheels...":r==="project"?t==="vi"?"Mô tả yêu cầu đề tài đồ án / NCKH, thiết bị hiện có (nếu có), mục tiêu thực nghiệm và ngày cần hoàn thành...":"Describe your thesis/R&D scope, target hardware, experiments, and defense deadline...":t==="vi"?"Mô tả nguồn cấp, động cơ đang đấu nối hoặc vấn đề kỹ thuật cần hỗ trợ...":"Describe your motor power supply, wiring question, or warranty request...",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#0B1324] px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-sky-400 focus:outline-none transition-colors"})]}),se&&n.jsx("div",{className:"rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-300",children:se}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-1",children:[n.jsxs("button",{type:"submit",className:"inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors",children:[n.jsx(_a,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:t==="vi"?"Gửi qua Email":"Send via Email"})]}),n.jsx("button",{type:"button",onClick:ee,className:"inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-[#243B6B] bg-slate-50 dark:bg-[#0B1324] px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 hover:border-sky-400 transition-colors",children:U?n.jsxs(n.Fragment,{children:[n.jsx(Kt,{className:"h-3.5 w-3.5 text-emerald-500"}),n.jsx("span",{children:t==="vi"?"Đã chép nội dung để dán Zalo!":"Copied for Zalo!"})]}):n.jsxs(n.Fragment,{children:[n.jsx(xn,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:t==="vi"?"Chép nội dung gửi Zalo":"Copy for Zalo"})]})})]})]})})]})]})})},Xf=({profile:e,lang:t,onSelectOriginFilter:r,showAdmin:a=!1,onOpenAdmin:s})=>{var p,w;const i=N=>{r(N);const c=document.getElementById("products");c&&c.scrollIntoView({behavior:"smooth"})},o=((p=e.footerAbout)==null?void 0:p[t])??(t==="vi"?"Chuyên cung cấp bo mạch điều khiển STM32 nạp sẵn firmware, driver động cơ BLDC/Servo công suất, phụ kiện robot Mecanum và nhận thiết kế mạch theo yêu cầu.":"Supplying pre-flashed STM32 robot controllers, BLDC/Servo motor drivers, Mecanum robotics parts, and custom PCB engineering."),l=((w=e.footerPolicyTitle)==null?void 0:w[t])??(t==="vi"?"Chính sách Giao hàng & Bảo hành":"Shipping & Warranty Policy"),d=[{vi:"Test tải & đo kiểm 100% bo mạch trước khi đóng gói giao khách.",en:"100% functional & load testing before packaging."},{vi:"Giao hàng COD toàn quốc — cho phép kiểm tra hàng trước khi thanh toán.",en:"Nationwide COD delivery with package inspection."},{vi:"Đóng gói kèm sơ đồ đấu nối & tài liệu tập lệnh, hỗ trợ kỹ thuật 1-1 qua Zalo.",en:"Supplied with wiring manual & command docs + 1-1 Zalo support."}],u=(e.footerPolicyItems&&e.footerPolicyItems.length>0?e.footerPolicyItems:d).map(N=>{var c;return((c=N==null?void 0:N[t])==null?void 0:c.trim())??""}).filter(Boolean),g=[n.jsx(yd,{className:"h-4 w-4 shrink-0 text-emerald-500 mt-0.5"},"shield"),n.jsx(Bi,{className:"h-4 w-4 shrink-0 text-sky-500 mt-0.5"},"truck"),n.jsx(es,{className:"h-4 w-4 shrink-0 text-amber-500 mt-0.5"},"cpu")];return n.jsx("footer",{className:"border-t border-slate-200 dark:border-[#1E325C] bg-slate-100 dark:bg-[#060A14] py-12 no-print",children:n.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-12",children:[n.jsxs("div",{className:"md:col-span-5 space-y-3",children:[n.jsx(Um,{name:e.name,brandName:e.brandName,monogram:e.logoMonogram,logoImageUrl:e.logoImageUrl}),o.trim()&&n.jsx("p",{className:"text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400",children:o}),n.jsxs("div",{className:"space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-mono",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Oa,{className:"h-3.5 w-3.5 text-sky-500"}),n.jsxs("span",{children:["Zalo / Hotline: ",e.phone]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Ii,{className:"h-3.5 w-3.5 text-sky-500"}),n.jsx("span",{children:e.email})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(xd,{className:"h-3.5 w-3.5 text-emerald-500"}),n.jsx("span",{children:e.location[t]})]})]})]}),n.jsxs("div",{className:"md:col-span-3 space-y-3",children:[n.jsx("h3",{className:"font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white",children:t==="vi"?"Danh mục sản phẩm":"Product Catalog"}),n.jsxs("ul",{className:"space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400",children:[n.jsx("li",{children:n.jsx("button",{type:"button",onClick:()=>i("all"),className:"hover:text-sky-500 transition-colors",children:t==="vi"?"Tất cả sản phẩm đang bán":"All Products"})}),n.jsx("li",{children:n.jsx("button",{type:"button",onClick:()=>i("self-made"),className:"hover:text-sky-500 transition-colors",children:t==="vi"?"Bo mạch điều khiển & Module":"Control Boards & Modules"})}),n.jsx("li",{children:n.jsx("button",{type:"button",onClick:()=>i("project-kit"),className:"hover:text-sky-500 transition-colors",children:t==="vi"?"Bộ Kit & Mô hình Đồ án NCKH":"Project & Research Kits"})}),n.jsx("li",{children:n.jsx("button",{type:"button",onClick:()=>i("commercial"),className:"hover:text-sky-500 transition-colors",children:t==="vi"?"Động cơ, Bánh xe & Cảm biến":"Motors, Wheels & Sensors"})}),n.jsx("li",{children:n.jsx("a",{href:"#projects-support",className:"hover:text-sky-500 transition-colors",children:t==="vi"?"Hỗ trợ Đồ án & Đề tài NCKH":"Project & R&D Support"})}),n.jsx("li",{children:n.jsx("a",{href:"#policy",className:"hover:text-sky-500 transition-colors",children:t==="vi"?"Chính sách mua hàng & Bảo hành":"Store & Warranty Policy"})}),n.jsx("li",{children:n.jsx("a",{href:"#contact",className:"hover:text-sky-500 transition-colors",children:t==="vi"?"Báo giá sỉ & Hỗ trợ kỹ thuật":"Wholesale Quote & Support"})})]})]}),n.jsxs("div",{className:"md:col-span-4 space-y-3",children:[n.jsx("h3",{className:"font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white",children:l}),n.jsx("ul",{className:"space-y-2 text-xs text-slate-600 dark:text-slate-400",children:u.map((N,c)=>n.jsxs("li",{className:"flex items-start gap-2",children:[g[c%g.length],n.jsx("span",{children:N})]},c))}),a&&n.jsx("div",{className:"pt-2",children:n.jsx("button",{type:"button",onClick:s,className:"inline-flex items-center rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 transition-colors",children:t==="vi"?"Mở trang Quản trị Kho & Shop":"Open Store Admin"})})]})]}),n.jsx("div",{className:"mt-8 border-t border-slate-200 dark:border-[#1E325C] pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400",children:n.jsxs("span",{children:["© ",new Date().getFullYear()," ",e.name," — ",e.brandName]})})]})})},Zf=`/**
 * TeeBi & Robot (TBX Electrics) — Hệ thống 2 Chiều Tự Động 24/7:
 * Website <-> Google Sheets <-> Bot Telegram <-> Gmail Khách Hàng
 *
 * HƯỚNG DẪN CÀI ĐẶT 1 LẦN DUY NHẤT:
 * 1. Dán toàn bộ code này vào Mã.gs rồi bấm Lưu (Ctrl + S).
 * 2. Chọn hàm "khoiTaoBangLocDon" trên thanh công cụ rồi bấm "Chạy" (Run) -> Cấp quyền cho Google.
 *    (Sẽ tự động tạo sheet DonHang + BienDongSoDu, cài trigger sửa Sheet tự gửi Gmail, và cài trigger 1 phút/lần đồng bộ nút bấm Telegram 24/7 kể cả khi tắt máy tính!).
 * 3. Bấm "Triển khai" -> "Quản lý nội dung triển khai" -> Chỉnh sửa (bút chì) -> Phiên bản mới -> Triển khai.
 */

var TELEGRAM_BOT_TOKEN = "9191769650:AAE5DftTFGtz7HGoZznGS_dz5Ov50i-7kDo";
var TELEGRAM_CHAT_ID = "8516660009";
var BANK_ACCOUNT = "9909088888888";

var ORDER_STATUS_MAP = {
  pending: "Chờ duyệt",
  preparing: "Đang chuẩn bị",
  packed: "Đã đóng gói",
  dispatched: "Đã gửi hàng",
  shipping: "Đang giao",
  completed: "Hoàn thành",
  cancelled: "Đã hủy"
};

var REVERSE_STATUS_MAP = {
  "Chờ duyệt": "pending",
  "Đang chuẩn bị": "preparing",
  "Đã đóng gói": "packed",
  "Đã gửi hàng": "dispatched",
  "Đang giao": "shipping",
  "Hoàn thành": "completed",
  "Đã hủy": "cancelled"
};

function escHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getOrCreate3DFolderGas() {
  var folderName = "TBX_In3D_Files";
  var folders = DriveApp.getFoldersByName(folderName);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
}

function getOrCreate3DSubfolderGas(parentFolder, subName) {
  if (!parentFolder || !subName) return parentFolder;
  var existing = parentFolder.getFoldersByName(subName);
  var sub = existing.hasNext() ? existing.next() : parentFolder.createFolder(subName);
  try {
    sub.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (e) {
    Logger.log("Subfolder share warning: " + e);
  }
  return sub;
}

function extractGoogleDriveFileId(url) {
  var s = String(url || "").trim();
  if (!s) return "";
  if (/\\/folders\\//i.test(s)) return "";
  var m1 = s.match(/\\/d\\/([a-zA-Z0-9_-]{15,})/);
  if (m1) return m1[1];
  var m2 = s.match(/[?&]id=([a-zA-Z0-9_-]{15,})/);
  if (m2) return m2[1];
  return "";
}

function extractGoogleDriveFolderId(url) {
  var s = String(url || "").trim();
  if (!s) return "";
  var m = s.match(/(?:\\/folders\\/|folderview\\?[^#]*\\bid=)([a-zA-Z0-9_-]{15,})/i);
  return m ? m[1] : "";
}

function isAllowedStlFileNameGas(name) {
  var lower = String(name || "").trim().toLowerCase();
  return lower.length > 4 && lower.slice(-4) === ".stl";
}

function isAllowedZipFileNameGas(name) {
  var lower = String(name || "").trim().toLowerCase();
  return lower.length > 4 && lower.slice(-4) === ".zip";
}

function isIgnoredArchiveEntryGas(rawName) {
  var s = String(rawName || "").replace(/\\\\/g, "/").trim();
  if (!s) return true;
  if (s.slice(-1) === "/") return true;
  var lower = s.toLowerCase();
  if (lower.indexOf("__macosx/") === 0 || lower.indexOf("/__macosx/") !== -1) return true;
  var base = lower.split("/").pop() || "";
  if (!base) return true;
  if (base === ".ds_store" || base.indexOf("._") === 0 || base === "thumbs.db" || base === "desktop.ini") {
    return true;
  }
  return false;
}

function extractValidStlBlobsFromZipGas(zipBlob, zipName) {
  var unzipped;
  try {
    unzipped = Utilities.unzip(zipBlob);
  } catch (eUnzip) {
    throw new Error("Không đọc được file.");
  }
  if (!unzipped || unzipped.length === 0) {
    throw new Error("Không tìm thấy file .STL nào trong file .ZIP.");
  }

  var invalidNames = [];
  var stlEntries = [];
  for (var i = 0; i < unzipped.length; i++) {
    var entryBlob = unzipped[i];
    if (!entryBlob) continue;
    var rawName = entryBlob.getName ? String(entryBlob.getName() || "") : "";
    if (isIgnoredArchiveEntryGas(rawName)) continue;
    var baseName = rawName.replace(/\\\\/g, "/").split("/").pop() || "";
    if (!baseName) continue;
    if (isAllowedStlFileNameGas(baseName)) {
      stlEntries.push({ name: baseName, blob: entryBlob });
    } else {
      invalidNames.push(baseName);
    }
  }

  if (invalidNames.length > 0) {
    throw new Error(buildUnsupportedFileErrorGas(invalidNames));
  }
  if (stlEntries.length === 0) {
    throw new Error("Không tìm thấy file .STL nào trong file .ZIP.");
  }
  if (stlEntries.length > 20) {
    throw new Error("File .ZIP chứa quá 20 file .STL — vui lòng chia nhỏ hoặc tải lên trực tiếp.");
  }

  var maxSingleBytes = 15 * 1024 * 1024;
  var maxTotalBytes = 40 * 1024 * 1024;
  var totalBytes = 0;
  var out = [];
  for (var j = 0; j < stlEntries.length; j++) {
    var eBytes = stlEntries[j].blob.getBytes();
    if (!eBytes || eBytes.length < 84) {
      throw new Error("Không đọc được file.");
    }
    if (eBytes.length > maxSingleBytes) {
      throw new Error("File '" + stlEntries[j].name + "' trong file .ZIP nặng hơn 15MB — vui lòng tách riêng hoặc tải trực tiếp từ máy.");
    }
    totalBytes += eBytes.length;
    if (totalBytes > maxTotalBytes) {
      throw new Error("Tổng dung lượng giải nén file .ZIP vượt quá 40MB để quét tự động qua Apps Script — vui lòng tải trực tiếp từ máy.");
    }
    out.push({
      name: stlEntries[j].name,
      blob: stlEntries[j].blob,
      bytes: eBytes
    });
  }
  return out;
}

function buildUnsupportedFileErrorGas(invalidNames) {
  var list = Array.isArray(invalidNames) ? invalidNames : [String(invalidNames || "")];
  var hasGcode = false;
  var has3mf = false;
  for (var i = 0; i < list.length; i++) {
    var lw = String(list[i] || "").toLowerCase();
    if (lw.slice(-6) === ".gcode") hasGcode = true;
    if (lw.slice(-4) === ".3mf") has3mf = true;
  }
  var preview = list.slice(0, 5).join(", ") + (list.length > 5 ? " (và " + (list.length - 5) + " file khác)" : "");
  var reasons = [];
  if (has3mf) reasons.push("file .3mf");
  if (hasGcode) reasons.push("file .gcode cắt lớp sẵn");
  if (!has3mf && !hasGcode) reasons.push("định dạng không phải .STL");
  return "Chỉ hỗ trợ file .STL — không nhận " + reasons.join(" / ") + ": " + preview + ". Vui lòng xóa/chuyển sang file .STL rồi thử lại.";
}

function collectFolderFilesGas(folder, depth, acc, maxEntries) {
  if (!folder || acc.length >= maxEntries) return false;
  var truncated = false;
  var filesIt = folder.getFiles();
  while (filesIt.hasNext()) {
    if (acc.length >= maxEntries) {
      truncated = true;
      break;
    }
    var f = filesIt.next();
    acc.push({
      file: f,
      name: String(f.getName() || "model.stl"),
      pathName: String(f.getName() || "model.stl")
    });
  }
  if (!truncated && depth < 2 && folder.getFolders) {
    var subIt = folder.getFolders();
    while (subIt.hasNext()) {
      if (acc.length >= maxEntries) {
        truncated = true;
        break;
      }
      var subF = subIt.next();
      if (collectFolderFilesGas(subF, depth + 1, acc, maxEntries)) {
        truncated = true;
        break;
      }
    }
  }
  return truncated;
}

function validateDriveLinkExtensionsOnlyGas(fileUrl) {
  var urlStr = String(fileUrl || "").trim();
  if (!urlStr) return;
  var folderId = extractGoogleDriveFolderId(urlStr);
  if (folderId) {
    var folderObj;
    try {
      folderObj = DriveApp.getFolderById(folderId);
    } catch (eFolder) {
      throw new Error("Không mở được thư mục Google Drive — khách hãy bật quyền 'Bất kỳ ai có đường liên kết' (Anyone with the link).");
    }
    var acc = [];
    var truncated = collectFolderFilesGas(folderObj, 0, acc, 30);
    if (acc.length === 0) {
      throw new Error("Không tìm thấy file nào trong thư mục Google Drive này (hãy kiểm tra quyền chia sẻ).");
    }
    var invalid = [];
    for (var i = 0; i < acc.length; i++) {
      if (!isAllowedStlFileNameGas(acc[i].name)) invalid.push(acc[i].name);
    }
    if (invalid.length > 0) {
      throw new Error(buildUnsupportedFileErrorGas(invalid));
    }
    if (truncated || acc.length > 20) {
      throw new Error("Thư mục chứa quá 20 file .STL — vui lòng chia nhỏ thư mục hoặc tải lên trực tiếp.");
    }
    return;
  }
  var driveId = extractGoogleDriveFileId(urlStr);
  if (driveId) {
    var fObj;
    try {
      fObj = DriveApp.getFileById(driveId);
    } catch (eFile) {
      throw new Error("Không mở được link Google Drive — khách hãy bật quyền 'Bất kỳ ai có đường liên kết' (Anyone with the link).");
    }
    var fName = String(fObj.getName() || "");
    if (isAllowedZipFileNameGas(fName)) {
      if (fObj.getSize() > 15 * 1024 * 1024) {
        throw new Error("File .ZIP trên Drive nặng hơn 15MB — vui lòng tải các file .STL trực tiếp từ máy.");
      }
      extractValidStlBlobsFromZipGas(fObj.getBlob(), fName);
      return;
    }
    if (!isAllowedStlFileNameGas(fName)) {
      throw new Error(buildUnsupportedFileErrorGas([fName || "file"]));
    }
    return;
  }
  if (/^https?:\\/\\//i.test(urlStr)) {
    var cleanPath = urlStr.split("?")[0].split("/").pop() || "";
    if (cleanPath && cleanPath.indexOf(".") !== -1 && !isAllowedStlFileNameGas(cleanPath) && !isAllowedZipFileNameGas(cleanPath)) {
      throw new Error(buildUnsupportedFileErrorGas([cleanPath]));
    }
  }
}

function getMaterialDensityGas(_material) {
  return 1.27;
}

function getSupportMultiplierGas(_material) {
  return 1.3;
}

function getHiddenWeightMultiplierGas(_material) {
  return 1.2;
}

function resolveGcodeInfillPercentGas(uiInfillPercent) {
  var n = Number(uiInfillPercent);
  var clamped = isFinite(n) ? Math.min(100, Math.max(20, n)) : 20;
  return Math.round((70 + ((clamped - 20) / 80) * 30) * 10) / 10;
}

function getInfillWeightMultiplierGas(uiInfillPercent) {
  var n = Number(uiInfillPercent);
  var clamped = isFinite(n) ? Math.min(100, Math.max(20, n)) : 20;
  return 1 + ((clamped - 20) / 80) * 1.5;
}

function roundWeightGramsGas(grams) {
  var w = Math.max(0, Number(grams) || 0);
  if (w === 0) return 0;
  return Number(w.toFixed(w < 10 ? 2 : 1));
}

function calculateDeliveryUrgencyGas(deadlineYmd, todayYmdOverride) {
  var trimmed = String(deadlineYmd || "").trim();
  var m = /^(\\d{4})-(\\d{2})-(\\d{2})$/.exec(trimmed);
  if (!m) {
    return {
      deadlineYmd: "",
      daysRemaining: null,
      surchargePercent: 0,
      label: "Tiêu chuẩn 2–7 ngày (Miễn phí)"
    };
  }
  var todayYmd = todayYmdOverride
    ? String(todayYmdOverride).trim()
    : Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "yyyy-MM-dd");
  var tm = /^(\\d{4})-(\\d{2})-(\\d{2})$/.exec(todayYmd);
  var nowDate = new Date();
  var todayUtc = tm
    ? Date.UTC(Number(tm[1]), Number(tm[2]) - 1, Number(tm[3]))
    : Date.UTC(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
  var targetUtc = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  var diffDays = Math.round((targetUtc - todayUtc) / 86400000);
  var vnDate = m[3] + "/" + m[2] + "/" + m[1];
  var surchargePercent = 0;
  var shortDesc = "Hạn 2–7 ngày (Miễn phí)";
  if (diffDays <= 0) {
    surchargePercent = 15;
    shortDesc = "In gấp trong ngày (+15%)";
  } else if (diffDays === 1) {
    surchargePercent = 6;
    shortDesc = "Hạn sau 1 ngày (+6%)";
  } else if (diffDays > 7) {
    surchargePercent = 0;
    shortDesc = "Tiêu chuẩn >7 ngày (Miễn phí)";
  }
  return {
    deadlineYmd: trimmed,
    daysRemaining: diffDays,
    surchargePercent: surchargePercent,
    label: vnDate + " · " + shortDesc
  };
}

function getIsoWeekKeyGas(dateObj) {
  var d = dateObj || new Date();
  var localYmd = Utilities.formatDate(d, "Asia/Ho_Chi_Minh", "yyyy-MM-dd");
  var parts = localYmd.split("-");
  var dt = new Date(Date.UTC(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])));
  var dayNum = dt.getUTCDay() || 7;
  dt.setUTCDate(dt.getUTCDate() + 4 - dayNum);
  var isoYear = dt.getUTCFullYear();
  var yearStart = new Date(Date.UTC(isoYear, 0, 1));
  var weekNo = Math.ceil((((dt.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return isoYear + "-W" + (weekNo < 10 ? "0" + weekNo : String(weekNo));
}

function buildDonIn3DRowFormulasGas(rowNum) {
  var r = String(rowNum);
  var baseExpr =
    "IF(N" + r + ">0," +
      "IF(AND(G" + r + ">0,I" + r + ">0)," +
        "ROUND(I" + r + "*N" + r + "/G" + r + ")," +
        "ROUND(N" + r + "*IF(REGEXMATCH(LOWER(F" + r + "),\\"petg\\"),400,IF(REGEXMATCH(LOWER(F" + r + "),\\"abs\\"),1300,IF(REGEXMATCH(LOWER(F" + r + "),\\"tpu\\"),1600,IF(REGEXMATCH(LOWER(F" + r + "),\\"cf|cacbon\\"),30000,800)))))" +
      ")," +
      "N(I" + r + ")" +
    ")";
  return {
    shopFormula: "=IF(B" + r + "=\\"\\",\\"\\",ROUND((" + baseExpr + ")*(IF(O" + r + "=\\"\\",20,O" + r + ")/100)))",
    payoutFormula: "=IF(B" + r + "=\\"\\",\\"\\",MAX(0,(" + baseExpr + ")-P" + r + "))"
  };
}

function formatPrintDurationGas(totalMinutes) {
  var mins = Math.max(1, Math.round(totalMinutes));
  var h = Math.floor(mins / 60);
  var m = mins % 60;
  return h > 0 ? h + "h " + m + "m" : m + "m";
}

function parseGcodeTextGas(gcodeText) {
  var weightGrams = 0;
  var printTime = "";
  var wPatterns = [
    /;\\s*total filament weight\\s*\\[g\\]\\s*[:=]\\s*([\\d.]+)/i,
    /;\\s*filament used\\s*\\[g\\]\\s*[:=]\\s*([\\d.]+)/i,
    /;\\s*Filament weight\\s*[:=]\\s*([\\d.]+)\\s*g/i
  ];
  for (var i = 0; i < wPatterns.length; i++) {
    var wm = gcodeText.match(wPatterns[i]);
    if (wm && Number(wm[1]) > 0) {
      weightGrams = Number(Number(wm[1]).toFixed(2));
      break;
    }
  }
  var tPatterns = [
    /;\\s*estimated printing time\\s*\\([^)]*\\)\\s*[:=]\\s*([^\\r\\n]+)/i,
    /;\\s*model printing time\\s*[:=]\\s*([^\\r\\n]+)/i,
    /;\\s*total estimated time\\s*[:=]\\s*([^\\r\\n]+)/i
  ];
  for (var j = 0; j < tPatterns.length; j++) {
    var tm = gcodeText.match(tPatterns[j]);
    if (tm && tm[1]) {
      printTime = tm[1].trim();
      break;
    }
  }
  if (!printTime) {
    var secM = gcodeText.match(/;\\s*TIME\\s*:\\s*(\\d+)/i);
    if (secM) printTime = formatPrintDurationGas(Number(secM[1]) / 60);
  }
  return { weightGrams: weightGrams, printTime: printTime };
}

function parseStlBytesGas(signedBytes, setup) {
  if (!signedBytes || signedBytes.length < 84) {
    throw new Error("Không đọc được file.");
  }
  if (signedBytes.length > 15 * 1024 * 1024) {
    throw new Error("Không đọc được file.");
  }

  var len = signedBytes.length;
  var ab = new ArrayBuffer(len);
  var u8 = new Uint8Array(ab);
  for (var i = 0; i < len; i++) {
    u8[i] = signedBytes[i] & 0xFF;
  }
  var dv = new DataView(ab);

  var headSnippet = "";
  try {
    headSnippet = Utilities.newBlob(signedBytes.slice(0, Math.min(1024, len))).getDataAsString("UTF-8");
  } catch (eHead) {
    headSnippet = "";
  }
  if (/^\\s*(?:<!doctype\\s+html|<html\\b)/i.test(headSnippet)) {
    throw new Error("Không đọc được file.");
  }

  var minX = Infinity, minY = Infinity, minZ = Infinity;
  var maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  var vol6 = 0;
  var area2 = 0;
  var triangles = 0;

  function resetStatsGas() {
    minX = Infinity; minY = Infinity; minZ = Infinity;
    maxX = -Infinity; maxY = -Infinity; maxZ = -Infinity;
    vol6 = 0; area2 = 0; triangles = 0;
  }

  function accumTriGas(ax, ay, az, bx, by, bz, cx, cy, cz) {
    if (
      !isFinite(ax) || !isFinite(ay) || !isFinite(az) ||
      !isFinite(bx) || !isFinite(by) || !isFinite(bz) ||
      !isFinite(cx) || !isFinite(cy) || !isFinite(cz)
    ) {
      return;
    }
    if (ax < minX) minX = ax; if (bx < minX) minX = bx; if (cx < minX) minX = cx;
    if (ay < minY) minY = ay; if (by < minY) minY = by; if (cy < minY) minY = cy;
    if (az < minZ) minZ = az; if (bz < minZ) minZ = bz; if (cz < minZ) minZ = cz;
    if (ax > maxX) maxX = ax; if (bx > maxX) maxX = bx; if (cx > maxX) maxX = cx;
    if (ay > maxY) maxY = ay; if (by > maxY) maxY = by; if (cy > maxY) maxY = cy;
    if (az > maxZ) maxZ = az; if (bz > maxZ) maxZ = bz; if (cz > maxZ) maxZ = cz;

    vol6 += (-cx * by * az) + (bx * cy * az) + (cx * ay * bz) - (ax * cy * bz) - (bx * ay * cz) + (ax * by * cz);
    var ux = bx - ax, uy = by - ay, uz = bz - az;
    var vx = cx - ax, vy = cy - ay, vz = cz - az;
    var nx = uy * vz - uz * vy;
    var ny = uz * vx - ux * vz;
    var nz = ux * vy - uy * vx;
    area2 += Math.sqrt(nx * nx + ny * ny + nz * nz);
    triangles++;
  }

  function tryParseBinaryGas(count) {
    if (count <= 0) return false;
    resetStatsGas();
    for (var t = 0; t < count; t++) {
      var off = 84 + t * 50;
      if (off + 48 > len) break;
      accumTriGas(
        dv.getFloat32(off + 12, true), dv.getFloat32(off + 16, true), dv.getFloat32(off + 20, true),
        dv.getFloat32(off + 24, true), dv.getFloat32(off + 28, true), dv.getFloat32(off + 32, true),
        dv.getFloat32(off + 36, true), dv.getFloat32(off + 40, true), dv.getFloat32(off + 44, true)
      );
    }
    return (
      triangles > 0 &&
      isFinite(minX) &&
      Math.max(
        Math.abs(minX), Math.abs(maxX),
        Math.abs(minY), Math.abs(maxY),
        Math.abs(minZ), Math.abs(maxZ)
      ) < 1e7
    );
  }

  function tryParseAsciiGas() {
    resetStatsGas();
    var charset = (u8[0] === 0xFF && u8[1] === 0xFE) ? "UTF-16LE" : ((u8[0] === 0xFE && u8[1] === 0xFF) ? "UTF-16BE" : "UTF-8");
    var asciiText = Utilities.newBlob(signedBytes).getDataAsString(charset);
    var re = /vertex\\s+([-+]?(?:\\d+(?:[.,]\\d*)?|[.,]\\d+)(?:[eE][-+]?\\d+)?)\\s+([-+]?(?:\\d+(?:[.,]\\d*)?|[.,]\\d+)(?:[eE][-+]?\\d+)?)\\s+([-+]?(?:\\d+(?:[.,]\\d*)?|[.,]\\d+)(?:[eE][-+]?\\d+)?)/gi;
    var coords = [];
    var m;
    while ((m = re.exec(asciiText)) !== null) {
      coords.push(
        Number(m[1].replace(",", ".")),
        Number(m[2].replace(",", ".")),
        Number(m[3].replace(",", "."))
      );
      if (coords.length === 9) {
        accumTriGas(coords[0], coords[1], coords[2], coords[3], coords[4], coords[5], coords[6], coords[7], coords[8]);
        coords.length = 0;
      }
    }
    return triangles > 0 && isFinite(minX);
  }

  var possibleCount = dv.getUint32(80, true);
  var expectedSize = 84 + possibleCount * 50;
  var looksAsciiStl = /facet\\s+normal/i.test(headSnippet) && /outer\\s+loop/i.test(headSnippet);
  var parsedOk = false;

  if (!looksAsciiStl && possibleCount > 0 && expectedSize >= 134 && expectedSize <= len + 4) {
    parsedOk = tryParseBinaryGas(possibleCount);
  }
  if (!parsedOk) {
    parsedOk = tryParseAsciiGas();
  }
  if (!parsedOk && !looksAsciiStl && len >= 134 && (len - 84) % 50 === 0) {
    parsedOk = tryParseBinaryGas((len - 84) / 50);
  }

  if (!parsedOk || triangles === 0 || !isFinite(minX)) {
    throw new Error("Không đọc được file.");
  }

  var sizeX = Number((maxX - minX).toFixed(1));
  var sizeY = Number((maxY - minY).toFixed(1));
  var sizeZ = Number((maxZ - minZ).toFixed(1));
  var volumeCm3 = Number((Math.abs(vol6) / 6 / 1000).toFixed(2));
  var surfaceAreaCm2 = Number(((area2 / 2) / 100).toFixed(2));

  var wallLoops = Number(setup.wallLoops || 3);
  var nozzleMm = Number(setup.nozzleMm || 0.4);
  var layerH = Number(setup.layerHeightMm || 0.2);
  var material = String(setup.material || "PLA");

  var shellThicknessCm = (wallLoops * nozzleMm) / 10;
  var shellVol = Math.min(volumeCm3 * 0.65, surfaceAreaCm2 * shellThicknessCm * 0.85);
  var innerVol = Math.max(0, volumeCm3 - shellVol);
  var baseEffectiveVol = shellVol + innerVol * 0.7;
  var infillFactor = getInfillWeightMultiplierGas(setup.infillPercent);
  var supportFactor = getSupportMultiplierGas(material);
  var hiddenMaterialFactor = getHiddenWeightMultiplierGas(material);
  var density = getMaterialDensityGas(material);
  var estimatedWeightGrams = roundWeightGramsGas(Math.max(0.5, baseEffectiveVol * infillFactor * supportFactor * hiddenMaterialFactor * density));
  var speedGPerMin = 0.24 * (layerH / 0.2);
  var estimatedMinutes = Math.max(5, estimatedWeightGrams / Math.max(0.08, speedGPerMin));

  return {
    triangles: triangles,
    dimensions: sizeX + " x " + sizeY + " x " + sizeZ + " mm",
    volumeCm3: volumeCm3,
    perPartWeightGrams: estimatedWeightGrams,
    printTime: formatPrintDurationGas(estimatedMinutes)
  };
}

function fetchAndScan3DLinkGas(fileUrl, setup) {
  var urlStr = String(fileUrl || "").trim();
  if (!urlStr) throw new Error("Chưa có link file hoặc thư mục để quét.");

  var folderId = extractGoogleDriveFolderId(urlStr);
  if (folderId) {
    var srcFolder;
    var folderName = "Thu muc Drive";
    try {
      srcFolder = DriveApp.getFolderById(folderId);
      folderName = srcFolder.getName ? (String(srcFolder.getName() || "").trim() || folderName) : folderName;
    } catch (ef) {
      throw new Error("Không mở được thư mục Google Drive — khách hãy bật quyền 'Bất kỳ ai có đường liên kết' (Anyone with the link).");
    }

    var allEntries = [];
    var truncated = collectFolderFilesGas(srcFolder, 0, allEntries, 30);
    if (allEntries.length === 0) {
      throw new Error("Không tìm thấy file nào trong thư mục Google Drive (hãy kiểm tra lại quyền chia sẻ hoặc thư mục rỗng).");
    }

    var invalidNames = [];
    var stlEntries = [];
    for (var i = 0; i < allEntries.length; i++) {
      if (isAllowedStlFileNameGas(allEntries[i].name)) {
        stlEntries.push(allEntries[i]);
      } else {
        invalidNames.push(allEntries[i].name);
      }
    }

    if (invalidNames.length > 0) {
      throw new Error(buildUnsupportedFileErrorGas(invalidNames));
    }
    if (stlEntries.length === 0) {
      throw new Error("Không tìm thấy file .STL nào trong thư mục Google Drive này.");
    }
    if (truncated || stlEntries.length > 20) {
      throw new Error("Thư mục có quá nhiều file (tối đa 20 file .STL mỗi link để quét tự động). Vui lòng chia nhỏ thư mục hoặc tải lên trực tiếp.");
    }

    var maxSingleBytes = 15 * 1024 * 1024;
    var maxTotalBytes = 40 * 1024 * 1024;
    var totalFolderBytes = 0;
    for (var sIdx = 0; sIdx < stlEntries.length; sIdx++) {
      var fSize = stlEntries[sIdx].file.getSize();
      if (fSize > maxSingleBytes) {
        throw new Error("File '" + stlEntries[sIdx].name + "' trong thư mục nặng hơn 15MB — vui lòng tách riêng hoặc tải trực tiếp từ máy.");
      }
      totalFolderBytes += fSize;
      if (totalFolderBytes > maxTotalBytes) {
        throw new Error("Tổng dung lượng các file .STL trong thư mục vượt quá 40MB để quét tự động qua Apps Script — vui lòng tải trực tiếp từ máy hoặc chia nhỏ thư mục.");
      }
    }

    var scannedFiles = [];
    var sumWeight = 0;
    var sumVol = 0;
    var dimLabels = [];
    for (var k = 0; k < stlEntries.length; k++) {
      var fItem = stlEntries[k].file;
      var fName = String(fItem.getName() || "model.stl");
      var fBytes = fItem.getBlob().getBytes();
      var stlParsed = parseStlBytesGas(fBytes, setup);
      sumWeight += stlParsed.perPartWeightGrams;
      sumVol += stlParsed.volumeCm3;
      if (stlParsed.dimensions) dimLabels.push(fName + ": " + stlParsed.dimensions);
      scannedFiles.push({
        fileName: fName,
        fileId: fItem.getId ? String(fItem.getId()) : "",
        fileSize: fItem.getSize ? Number(fItem.getSize()) : fBytes.length,
        perPartWeightGrams: stlParsed.perPartWeightGrams,
        dimensions: stlParsed.dimensions,
        printTime: stlParsed.printTime,
        volumeCm3: stlParsed.volumeCm3
      });
    }

    var totalPerPart = roundWeightGramsGas(sumWeight);
    var layerHF = Number((setup && setup.layerHeightMm) || 0.2);
    var speedF = 0.24 * (layerHF / 0.2);
    var totalEstMin = Math.max(5, totalPerPart / Math.max(0.08, speedF));

    return {
      ok: true,
      isFolder: true,
      folderName: folderName,
      fileName: folderName + " (" + scannedFiles.length + " file .STL)",
      perPartWeightGrams: totalPerPart,
      dimensions: dimLabels.join(" | "),
      printTime: formatPrintDurationGas(totalEstMin),
      volumeCm3: Number(sumVol.toFixed(2)),
      source: "drive-folder-stl",
      files: scannedFiles,
      blob: null
    };
  }

  var fileName = "model.stl";
  var blob = null;
  var driveId = extractGoogleDriveFileId(urlStr);

  if (driveId) {
    try {
      var dFile = DriveApp.getFileById(driveId);
      fileName = dFile.getName() || "drive-model.stl";
      if (!isAllowedStlFileNameGas(fileName) && !isAllowedZipFileNameGas(fileName)) {
        throw new Error(buildUnsupportedFileErrorGas([fileName]));
      }
      if (dFile.getSize() > 15 * 1024 * 1024) {
        throw new Error("File trên Drive nặng hơn 15MB — hãy chọn file trực tiếp từ máy để web tự quét & đẩy lên Drive (hỗ trợ tới 250MB), hoặc xưởng sẽ báo giá thủ công.");
      }
      blob = dFile.getBlob();
    } catch (e) {
      var errMsgDrive = e && e.message ? String(e.message) : "";
      if (
        errMsgDrive.indexOf("15MB") !== -1 ||
        errMsgDrive.indexOf("40MB") !== -1 ||
        errMsgDrive.indexOf("20 file") !== -1 ||
        errMsgDrive.indexOf("Chỉ hỗ trợ file .STL") !== -1 ||
        errMsgDrive.indexOf("Không tìm thấy file .STL") !== -1 ||
        errMsgDrive.indexOf(".ZIP") !== -1 ||
        errMsgDrive.indexOf("Không đọc được file") !== -1
      ) {
        throw e;
      }
      throw new Error("Không mở được link Google Drive — khách hãy bật quyền 'Bất kỳ ai có đường liên kết' (Anyone with the link).");
    }
  } else if (/^https?:\\/\\//i.test(urlStr)) {
    if (/drive\\.google\\.com/i.test(urlStr)) {
      throw new Error("Không đọc được file.");
    }
    var parts = urlStr.split("?")[0].split("/");
    fileName = parts[parts.length - 1] || "remote-model.stl";
    if (!isAllowedStlFileNameGas(fileName) && !isAllowedZipFileNameGas(fileName)) {
      throw new Error(buildUnsupportedFileErrorGas([fileName]));
    }
    var resp = UrlFetchApp.fetch(urlStr, { muteHttpExceptions: true, followRedirects: true });
    if (resp.getResponseCode() >= 400) {
      throw new Error("Không đọc được file.");
    }
    blob = resp.getBlob();
    var respCt = String(blob.getContentType ? (blob.getContentType() || "") : "").toLowerCase();
    if (respCt.indexOf("text/html") !== -1) {
      throw new Error("Không đọc được file.");
    }
    if (blob.getBytes().length > 15 * 1024 * 1024) {
      throw new Error("File từ link nặng hơn 15MB — vui lòng tải trực tiếp từ máy.");
    }
  } else {
    throw new Error("Không đọc được file.");
  }

  if (isAllowedZipFileNameGas(fileName)) {
    var zipEntries = extractValidStlBlobsFromZipGas(blob, fileName);
    var zipScannedFiles = [];
    var zipUnzippedBlobs = [];
    var zipSumWeight = 0;
    var zipSumVol = 0;
    var zipDimLabels = [];
    for (var zIdx = 0; zIdx < zipEntries.length; zIdx++) {
      var zItem = zipEntries[zIdx];
      var zParsed = parseStlBytesGas(zItem.bytes, setup);
      zipSumWeight += zParsed.perPartWeightGrams;
      zipSumVol += zParsed.volumeCm3;
      if (zParsed.dimensions) zipDimLabels.push(zItem.name + ": " + zParsed.dimensions);
      zipScannedFiles.push({
        fileName: zItem.name,
        fileId: "",
        fileSize: zItem.bytes.length,
        perPartWeightGrams: zParsed.perPartWeightGrams,
        dimensions: zParsed.dimensions,
        printTime: zParsed.printTime,
        volumeCm3: zParsed.volumeCm3
      });
      zipUnzippedBlobs.push({
        fileName: zItem.name,
        blob: zItem.blob
      });
    }
    var zipTotalPerPart = roundWeightGramsGas(zipSumWeight);
    var zipLayerH = Number((setup && setup.layerHeightMm) || 0.2);
    var zipSpeedF = 0.24 * (zipLayerH / 0.2);
    var zipTotalEstMin = Math.max(5, zipTotalPerPart / Math.max(0.08, zipSpeedF));
    return {
      ok: true,
      isFolder: true,
      folderName: fileName,
      fileName: fileName + " (" + zipScannedFiles.length + " file .STL)",
      perPartWeightGrams: zipTotalPerPart,
      dimensions: zipDimLabels.join(" | "),
      printTime: formatPrintDurationGas(zipTotalEstMin),
      volumeCm3: Number(zipSumVol.toFixed(2)),
      source: driveId ? "drive-zip-stl" : "url-zip-stl",
      files: zipScannedFiles,
      unzippedBlobs: zipUnzippedBlobs,
      blob: null
    };
  }

  var bytes = blob.getBytes();
  var stlRes = parseStlBytesGas(bytes, setup);
  return {
    ok: true,
    isFolder: false,
    folderName: "",
    fileName: fileName,
    perPartWeightGrams: stlRes.perPartWeightGrams,
    dimensions: stlRes.dimensions,
    printTime: stlRes.printTime,
    volumeCm3: stlRes.volumeCm3,
    source: driveId ? "drive-stl" : "url-stl",
    files: [
      {
        fileName: fileName,
        fileId: driveId || "",
        fileSize: bytes.length,
        perPartWeightGrams: stlRes.perPartWeightGrams,
        dimensions: stlRes.dimensions,
        printTime: stlRes.printTime,
        volumeCm3: stlRes.volumeCm3
      }
    ],
    blob: blob
  };
}

function sendPrint3DQuoteEmailDirect(qObj) {
  var qEmail = String(qObj.customerEmail || "").trim();
  if (!qEmail || qEmail.indexOf("@") === -1) return false;

  var qId = String(qObj.id || "").trim();
  var qName = String(qObj.customerName || "Quý khách").trim();
  var qMat = String(qObj.material || "PLA+").trim();
  var qWeight = Number(qObj.weightGrams || 0);
  var qQty = Number(qObj.quantity || 1);
  var qTotal = Number(qObj.totalAmount || 0);
  var qTime = String(qObj.printTime || "").trim();
  var qDim = String(qObj.dimensions || "").trim();
  var qFiles = String(qObj.fileSummary || "").trim();
  var qDelivery = String(qObj.deliveryLabel || "").trim();
  var qSubtotal = Number(qObj.subtotalAmount || 0);
  var qRushPct = Number(qObj.rushSurchargePercent || 0);
  var qRushFee = Number(qObj.rushFeeAmount || 0);
  var qShip = String(qObj.shippingLabel || "").trim();
  var qPay = String(qObj.paymentLabel || "").trim();

  var qSubject = "[TeeBi & Robot] Báo giá In 3D đơn #" + qId + " — " + qTotal.toLocaleString("vi-VN") + " đ";
  var qHtml =
    '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;background:#ffffff;">' +
      '<div style="background:#0B1324;color:#ffffff;padding:16px 20px;">' +
        '<div style="font-size:11px;color:#38bdf8;font-weight:bold;text-transform:uppercase;">TeeBi & Robot — Báo Giá In 3D Tự Động</div>' +
        '<div style="font-size:17px;font-weight:bold;margin-top:4px;">Báo giá Chi tiết Đơn #' + escHtml(qId) + '</div>' +
      '</div>' +
      '<div style="padding:18px 20px;color:#1e293b;font-size:14px;line-height:1.6;">' +
        '<p style="margin-top:0;">Xin chào <b>' + escHtml(qName) + '</b>,</p>' +
        '<p>Hệ thống In 3D đã tự động quét file của bạn theo thông số kỹ thuật chuẩn (GenCode Infill 70% + Auto Support) và gửi bạn báo giá chi tiết như sau:</p>' +
        '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 14px;font-size:13px;">' +
          '<div><b>Vật liệu in:</b> ' + escHtml(qMat) + '</div>' +
          (qFiles ? '<div><b>Danh sách file &amp; SL:</b> ' + escHtml(qFiles) + '</div>' : '') +
          (qDim ? '<div><b>Kích thước mô hình:</b> ' + escHtml(qDim) + '</div>' : '') +
          '<div><b>Khối lượng tổng (đã gồm support/infill):</b> <b>' + qWeight + ' g</b> (SL: ' + qQty + ')</div>' +
          (qTime ? '<div><b>Thời gian in dự kiến:</b> ' + escHtml(qTime) + '</div>' : '') +
          (qDelivery ? '<div><b>Hạn phải giao:</b> ' + escHtml(qDelivery) + '</div>' : '') +
          (qShip ? '<div><b>Giao nhận hàng:</b> ' + escHtml(qShip) + '</div>' : '') +
          (qPay ? '<div><b>Thanh toán:</b> ' + escHtml(qPay) + '</div>' : '') +
          (qRushPct > 0 && qRushFee > 0 ? '<div><b>Giá in gốc:</b> ' + (qSubtotal > 0 ? qSubtotal : Math.max(0, qTotal - qRushFee)).toLocaleString("vi-VN") + ' đ · <b>Phụ phí giao gấp (+' + qRushPct + '%):</b> +' + qRushFee.toLocaleString("vi-VN") + ' đ</div>' : '') +
          '<div style="margin-top:8px;font-size:16px;color:#0284c7;"><b>Tổng chi phí báo giá: ' + qTotal.toLocaleString("vi-VN") + ' đ</b></div>' +
        '</div>' +
        '<p style="margin-top:14px;">Nếu bạn đồng ý mức báo giá trên, vui lòng phản hồi lại email này hoặc nhắn Zalo <b>0789044703</b> để xưởng tiến hành đưa vào máy in ngay nhé!</p>' +
      '</div>' +
    '</div>';

  try {
    MailApp.sendEmail({
      to: qEmail,
      subject: qSubject,
      htmlBody: qHtml,
      name: "TeeBi & Robot — Xưởng In 3D"
    });
    return true;
  } catch (qErr) {
    Logger.log("sendPrint3DQuoteEmailDirect error: " + qErr);
    return false;
  }
}

var DON_HANG_HEADERS = [
  "Thời gian",
  "Mã đơn",
  "Khách hàng",
  "SĐT / Zalo",
  "Địa chỉ giao hàng",
  "Chi tiết mặt hàng",
  "Tổng tiền (VND)",
  "Hình thức TT",
  "Mã CK",
  "Trạng thái đơn",
  "Email khách",
  "Tiền đã cọc (VND)",
  "Tiền còn thiếu (VND)"
];

var DON_HANG_PAY_OPTIONS = [
  "COD",
  "Chuyển khoản QR",
  "Đã cọc 30% QR",
  "Đã nhận tiền QR"
];

var DON_IN_3D_HEADERS = [
  "Thời gian",
  "Mã đơn in",
  "Khách hàng",
  "SĐT",
  "Email",
  "Vật liệu & Infill",
  "Khối lượng (g)",
  "SL",
  "Thành tiền (VND)",
  "Link File Google Drive",
  "Đã nhận in",
  "Người in / Ghi chú",
  "Người in (CTV)"
];

var CHO_DUYET_IN_3D_HEADERS = [
  "Thời gian",
  "Mã đơn in",
  "Khách hàng",
  "SĐT",
  "Email",
  "Vật liệu & Infill",
  "Khối lượng (g)",
  "SL",
  "Thành tiền (VND)",
  "Link File Google Drive",
  "Đã nhận in",
  "Người in / Ghi chú",
  "Người in (CTV)",
  "Trạng thái duyệt",
  "ShopPct"
];

var PUBLIC_CTV_SHEET_ID_PROP = "PUBLIC_CTV_3D_SHEET_ID";
var PUBLIC_CTV_SHEET_URL_PROP = "PUBLIC_CTV_3D_SHEET_URL";
var PUBLIC_CTV_SYNC_MAP_PROP = "PUBLIC_CTV_3D_SYNC_MAP";

function normalizeMaterialKeyGas(matStr) {
  var s = String(matStr || "").toLowerCase();
  if (s.indexOf("petg") !== -1) return "PETG";
  if (s.indexOf("abs") !== -1) return "ABS";
  if (s.indexOf("tpu") !== -1) return "TPU";
  if (s.indexOf("cacbon") !== -1 || s.indexOf("carbon") !== -1 || /\\bcf\\b/.test(s)) return "Cacbon CF";
  return "PLA";
}

function buildDonHangRemainingFormulaGas(rowNum, sep) {
  var r = Number(rowNum);
  var S = sep || ";";
  return "=IF(B" + r + "=\\"\\"" + S + "\\"\\"" + S + "MAX(0" + S + "IFERROR(G" + r + "*1" + S + "0)-IFERROR(L" + r + "*1" + S + "0)))";
}

function applyDonHangRowFormulaGas(sheet, rowNum, sep) {
  if (!sheet || rowNum < 2) return;
  var S = sep || detectFormulaSepGas(sheet);
  var formula = buildDonHangRemainingFormulaGas(rowNum, S);
  var mCell = sheet.getRange(rowNum, 13);
  if (mCell.setFormulas) {
    mCell.setFormulas([[formula]]);
  } else {
    mCell.setValue(formula);
  }
  if (sheet.getRange(rowNum, 7).setNumberFormat) {
    sheet.getRange(rowNum, 7).setNumberFormat("#,##0");
    sheet.getRange(rowNum, 12, 1, 2).setNumberFormat("#,##0");
  }
}

function ensureDonHangHeadersGas(sheet, refreshAllRows) {
  if (!sheet) return;
  var totalCols = DON_HANG_HEADERS.length;
  var maxCols = sheet.getMaxColumns ? sheet.getMaxColumns() : totalCols;
  if (maxCols < totalCols && sheet.insertColumnsAfter) {
    sheet.insertColumnsAfter(maxCols, totalCols - maxCols);
  }

  var isEmpty = sheet.getLastRow() === 0;
  var row1 = isEmpty ? [] : sheet.getRange(1, 1, 1, totalCols).getValues()[0];
  var needsHeaderUpdate = isEmpty;
  var addedDepositCols = false;
  if (!needsHeaderUpdate) {
    if (!String(row1[11] || "").trim() || !String(row1[12] || "").trim()) {
      addedDepositCols = true;
    }
    for (var c = 0; c < totalCols; c++) {
      if (String(row1[c] || "").trim() !== DON_HANG_HEADERS[c]) {
        needsHeaderUpdate = true;
        break;
      }
    }
  }
  if (needsHeaderUpdate) {
    sheet.getRange(1, 1, 1, totalCols).setValues([DON_HANG_HEADERS]);
    sheet.setFrozenRows(1);
    sheet
      .getRange(1, 1, 1, totalCols)
      .setBackground("#0B1324")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold");
  }

  if (typeof SpreadsheetApp !== "undefined" && SpreadsheetApp.newDataValidation) {
    try {
      var payRule = SpreadsheetApp.newDataValidation()
        .requireValueInList(DON_HANG_PAY_OPTIONS, true)
        .setAllowInvalid(true)
        .build();
      sheet.getRange("H2:H500").setDataValidation(payRule);

      var statusRule = SpreadsheetApp.newDataValidation()
        .requireValueInList(
          ["Chờ duyệt", "Đang chuẩn bị", "Đã đóng gói", "Đã gửi hàng", "Đang giao", "Hoàn thành", "Đã hủy"],
          true
        )
        .setAllowInvalid(true)
        .build();
      sheet.getRange("J2:J500").setDataValidation(statusRule);
    } catch (dhDvErr) {
      Logger.log("ensureDonHangHeadersGas DataValidation note: " + dhDvErr);
    }
  }

  if (refreshAllRows || addedDepositCols) {
    var lastRow = sheet.getLastRow();
    if (lastRow >= 2) {
      var sep = detectFormulaSepGas(sheet);
      var rowsData = sheet.getRange(2, 1, lastRow - 1, totalCols).getValues();
      var formulasM = sheet.getRange(2, 13, lastRow - 1, 1).getFormulas
        ? sheet.getRange(2, 13, lastRow - 1, 1).getFormulas()
        : null;
      for (var i = 0; i < rowsData.length; i++) {
        var rowNum = 2 + i;
        var ordId = String(rowsData[i][1] || "").trim();
        if (!ordId) continue;
        var totalV = Number(rowsData[i][6] || 0);
        var payStr = String(rowsData[i][7] || "").trim();
        var curDep = rowsData[i][11];
        if (curDep === "" || curDep === null || curDep === undefined) {
          var initDep = payStr === "Đã nhận tiền QR"
            ? totalV
            : payStr === "Đã cọc 30% QR"
              ? Math.round(totalV * 0.3)
              : 0;
          sheet.getRange(rowNum, 12).setValue(initDep);
        }
        var existingF = formulasM ? String(formulasM[i][0] || "") : "";
        var wrongSep = existingF
          ? (sep === ";" ? existingF.indexOf(",") !== -1 : existingF.indexOf(";") !== -1)
          : true;
        if (refreshAllRows || !existingF || wrongSep) {
          applyDonHangRowFormulaGas(sheet, rowNum, sep);
        }
      }
      if (sheet.getRange(2, 7, lastRow - 1, 1).setNumberFormat) {
        sheet.getRange(2, 7, lastRow - 1, 1).setNumberFormat("#,##0");
        sheet.getRange(2, 12, lastRow - 1, 2).setNumberFormat("#,##0");
      }
    }
  }
}

function ensureChoDuyetIn3DHeadersGas(sheet) {
  if (!sheet) return;
  var totalCols = CHO_DUYET_IN_3D_HEADERS.length;
  var maxCols = sheet.getMaxColumns ? sheet.getMaxColumns() : totalCols;
  if (maxCols < totalCols && sheet.insertColumnsAfter) {
    sheet.insertColumnsAfter(maxCols, totalCols - maxCols);
  }
  var isEmpty = sheet.getLastRow() === 0;
  var row1 = isEmpty ? [] : sheet.getRange(1, 1, 1, totalCols).getValues()[0];
  var needsUpdate = isEmpty;
  if (!needsUpdate) {
    for (var c = 0; c < totalCols; c++) {
      if (String(row1[c] || "").trim() !== CHO_DUYET_IN_3D_HEADERS[c]) {
        needsUpdate = true;
        break;
      }
    }
  }
  if (needsUpdate) {
    sheet.getRange(1, 1, 1, totalCols).setValues([CHO_DUYET_IN_3D_HEADERS]);
    sheet.setFrozenRows(1);
    sheet
      .getRange(1, 1, 1, totalCols)
      .setBackground("#1E293B")
      .setFontColor("#FDE68A")
      .setFontWeight("bold");
  }
  try {
    if (sheet.hideSheet && (!sheet.isSheetHidden || !sheet.isSheetHidden())) {
      sheet.hideSheet();
    }
  } catch (hideErr) {
    Logger.log("Hide ChoDuyetIn3D note: " + hideErr);
  }
}

function stagePendingPrint3DOrderGas(row13, defaultShopPct) {
  if (!row13 || !row13[1]) return -1;
  var orderId = String(row13[1]).trim();
  var choSheet = getOrCreateSheet("ChoDuyetIn3D");
  ensureChoDuyetIn3DHeadersGas(choSheet);

  var fullRow = row13.slice(0, DON_IN_3D_HEADERS.length);
  while (fullRow.length < DON_IN_3D_HEADERS.length) fullRow.push("");
  fullRow[10] = Boolean(fullRow[10]);
  fullRow.push("Chờ duyệt");
  fullRow.push(Number(defaultShopPct || 25));

  var lastRow = choSheet.getLastRow();
  if (lastRow >= 2) {
    var ids = choSheet.getRange(2, 2, lastRow - 1, 1).getValues();
    for (var i = ids.length - 1; i >= 0; i--) {
      if (String(ids[i][0] || "").trim() === orderId) {
        var rIdx = 2 + i;
        choSheet.getRange(rIdx, 1, 1, fullRow.length).setValues([fullRow]);
        return rIdx;
      }
    }
  }
  var newRow = Math.max(2, lastRow + 1);
  choSheet.getRange(newRow, 1, 1, fullRow.length).setValues([fullRow]);
  return newRow;
}

function countPendingPrint3DOrdersGas() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var choSheet = ss.getSheetByName("ChoDuyetIn3D");
    if (!choSheet || choSheet.getLastRow() < 2) return 0;
    var rows = choSheet.getRange(2, 1, choSheet.getLastRow() - 1, CHO_DUYET_IN_3D_HEADERS.length).getValues();
    var cnt = 0;
    for (var i = 0; i < rows.length; i++) {
      if (String(rows[i][1] || "").trim() && String(rows[i][13] || "").trim() !== "Đã đẩy DonIn3D") {
        cnt++;
      }
    }
    return cnt;
  } catch (err) {
    return 0;
  }
}

function buildUpdatedPrint3DNotePaymentTagGas(noteStr, donHangCtx) {
  var raw = String(noteStr || "");
  if (!donHangCtx) return raw;
  var totalAmt = Number(donHangCtx.totalAmount || 0);
  var depAmt = Number(donHangCtx.depositAmount || 0);
  var remAmt = Math.max(0, totalAmt - depAmt);
  var payCol = String(donHangCtx.payCol || "").trim();
  var transferCode = String(donHangCtx.transferCode || "").trim();
  var codeTag = transferCode ? " (" + transferCode + ")" : "";

  var newPayTag = "";
  if (payCol === "Đã nhận tiền QR" || (totalAmt > 0 && depAmt >= totalAmt)) {
    newPayTag = "TT: Đã CK VietQR 100%" + codeTag;
  } else if (depAmt > 0) {
    newPayTag =
      "TT: COD · Đã cọc " + depAmt.toLocaleString("vi-VN") + "đ · Thu COD " + remAmt.toLocaleString("vi-VN") + "đ" + codeTag;
  } else {
    return raw;
  }

  var segs = raw ? raw.split("|") : [];
  var out = [];
  var replaced = false;
  for (var i = 0; i < segs.length; i++) {
    var s = segs[i].trim();
    if (!s) continue;
    if (s.indexOf("TT:") === 0) {
      out.push(newPayTag);
      replaced = true;
    } else {
      out.push(s);
    }
  }
  if (!replaced) {
    if (out.length > 0) {
      var tail = out.pop();
      out.push(newPayTag);
      out.push(tail);
    } else {
      out.push(newPayTag);
    }
  }
  return out.join(" | ");
}

function promotePendingPrint3DOrderGas(orderId, donHangCtx) {
  var targetId = String(orderId || "").trim();
  if (!targetId) return { ok: false, promoted: false, reason: "empty_id" };

  var p3dSheet = getOrCreateSheet("DonIn3D");
  ensureDonIn3DHeadersGas(p3dSheet);
  var p3dLast = p3dSheet.getLastRow();
  var existingP3dRow = -1;
  if (p3dLast >= 2) {
    var p3dIds = p3dSheet.getRange(2, 2, p3dLast - 1, 1).getValues();
    for (var p = p3dIds.length - 1; p >= 0; p--) {
      if (String(p3dIds[p][0] || "").trim() === targetId) {
        existingP3dRow = 2 + p;
        break;
      }
    }
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var choSheet = ss.getSheetByName("ChoDuyetIn3D");
  var choRowIdx = -1;
  var choRowVals = null;
  if (choSheet && choSheet.getLastRow() >= 2) {
    var choRows = choSheet.getRange(2, 1, choSheet.getLastRow() - 1, CHO_DUYET_IN_3D_HEADERS.length).getValues();
    for (var c = choRows.length - 1; c >= 0; c--) {
      if (String(choRows[c][1] || "").trim() === targetId) {
        choRowIdx = 2 + c;
        choRowVals = choRows[c];
        break;
      }
    }
  }

  if (existingP3dRow !== -1) {
    if (donHangCtx) {
      var curNote = String(p3dSheet.getRange(existingP3dRow, 12).getValue() || "");
      var updatedNote = buildUpdatedPrint3DNotePaymentTagGas(curNote, donHangCtx);
      if (updatedNote !== curNote) {
        p3dSheet.getRange(existingP3dRow, 12).setValue(updatedNote);
      }
    }
    if (choSheet && choRowIdx !== -1) {
      choSheet.getRange(choRowIdx, 14).setValue("Đã đẩy DonIn3D");
    }
    try { syncDonIn3DToPublicCtvSheetGas(); } catch (syncExErr) { Logger.log("syncDonIn3DToPublicCtvSheetGas note: " + syncExErr); }
    return { ok: true, promoted: false, alreadyExists: true };
  }

  if (!choRowVals) {
    return { ok: false, promoted: false, notFound: true };
  }

  var row13 = choRowVals.slice(0, DON_IN_3D_HEADERS.length);
  while (row13.length < DON_IN_3D_HEADERS.length) row13.push("");
  row13[10] = row13[10] === true || String(row13[10]).toUpperCase() === "TRUE";
  if (donHangCtx) {
    row13[11] = buildUpdatedPrint3DNotePaymentTagGas(row13[11], donHangCtx);
    if (Number(donHangCtx.totalAmount || 0) > 0 && Number(row13[8] || 0) <= 0) {
      row13[8] = Number(donHangCtx.totalAmount);
    }
  }
  var shopPct = Number(choRowVals[14] || 25);

  writePrint3DRowGas(p3dSheet, row13);
  var btSheet = getOrCreateSheet("BangTinhTienCTV");
  upsertOrderInBangTinhTienGas(btSheet, {
    id: targetId,
    material: String(row13[5] || "PLA"),
    weightGrams: Number(row13[6] || 0),
    printerName: String(row13[12] || ""),
    actualWeightGrams: Number(row13[6] || 0),
    shopCommissionPercent: shopPct,
    adminConfirmed: false,
    payoutWeekKey: getIsoWeekKeyGas(),
    payoutStatus: "unpaid"
  });

  if (choSheet && choRowIdx !== -1) {
    choSheet.getRange(choRowIdx, 14).setValue("Đã đẩy DonIn3D");
  }

  try {
    syncDonIn3DToPublicCtvSheetGas();
  } catch (syncPubErr) {
    Logger.log("promote sync public CTV note: " + syncPubErr);
  }

  var pubUrlMsg = getPublicCtvDonIn3DUrlGas();
  sendTelegramNotice(
    "🚀 <b>ĐÃ DUYỆT ĐƠN IN 3D #" + escHtml(targetId) + " — ĐÃ ĐẨY SANG DonIn3D</b>\\n" +
    "👤 Khách: <b>" + escHtml(String(row13[2] || "")) + "</b> · 🧱 " + escHtml(String(row13[5] || "")) + " (" + Number(row13[6] || 0) + "g)\\n" +
    "📁 File Drive: " + escHtml(String(row13[9] || "")) + "\\n" +
    (pubUrlMsg ? "📋 Sheet CTV công khai đã cập nhật: " + pubUrlMsg : "📋 CTV đã có thể vào DonIn3D nhận đơn in.")
  );

  return { ok: true, promoted: true };
}

function getPublicCtvDonIn3DUrlGas() {
  try {
    return String(PropertiesService.getScriptProperties().getProperty(PUBLIC_CTV_SHEET_URL_PROP) || "").trim();
  } catch (err) {
    return "";
  }
}

function protectSheetAdminOnlyGas(sheet, description, unprotectedA1List) {
  if (!sheet || !sheet.protect) return;
  try {
    var existingProts = sheet.getProtections ? sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET) : [];
    var prot = existingProts && existingProts.length > 0 ? existingProts[0] : sheet.protect();
    if (prot.setDescription) prot.setDescription(description || "Chỉ Admin xem & sửa");
    if (prot.setWarningOnly) prot.setWarningOnly(false);
    try {
      var me = typeof Session !== "undefined" && Session.getEffectiveUser ? Session.getEffectiveUser() : null;
      if (me && prot.addEditor) prot.addEditor(me);
      if (prot.getEditors && prot.removeEditors) {
        var editors = prot.getEditors() || [];
        var meEmail = me && me.getEmail ? String(me.getEmail()).toLowerCase() : "";
        var toRemove = [];
        for (var i = 0; i < editors.length; i++) {
          var eMail = editors[i] && editors[i].getEmail ? String(editors[i].getEmail()).toLowerCase() : "";
          if (!meEmail || eMail !== meEmail) {
            toRemove.push(editors[i]);
          }
        }
        if (toRemove.length > 0) prot.removeEditors(toRemove);
      }
      if (prot.canDomainEdit && prot.canDomainEdit() && prot.setDomainEdit) {
        prot.setDomainEdit(false);
      }
    } catch (edErr) {
      Logger.log("protectSheetAdminOnlyGas editors note: " + edErr);
    }
    if (Array.isArray(unprotectedA1List) && unprotectedA1List.length > 0 && prot.setUnprotectedRanges) {
      var ranges = [];
      for (var r = 0; r < unprotectedA1List.length; r++) {
        ranges.push(sheet.getRange(unprotectedA1List[r]));
      }
      prot.setUnprotectedRanges(ranges);
    } else if (prot.setUnprotectedRanges) {
      prot.setUnprotectedRanges([]);
    }
  } catch (err) {
    Logger.log("protectSheetAdminOnlyGas warning on " + (sheet.getName ? sheet.getName() : "?") + ": " + err);
  }
}

function applyAdminSheetProtectionsGas() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return;

  // 1. Giữ file Google Sheet chính ở chế độ RIÊNG TƯ (chỉ Admin xem & sửa được)
  try {
    if (typeof DriveApp !== "undefined" && DriveApp.getFileById && ss.getId) {
      DriveApp.getFileById(ss.getId()).setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE);
    }
  } catch (sharePrivErr) {
    Logger.log("Set Main Spreadsheet PRIVATE note: " + sharePrivErr);
  }

  // 2. Bảo vệ toàn bộ các sheet nội bộ Admin-only & chỉ mở vùng K2:M500 trên DonIn3D
  var adminOnlyNames = [
    "DonHang",
    "BienDongSoDu",
    "YeuCauHoTro",
    "CongTacVienIn3D",
    "BangTinhTienCTV",
    "ThanhToanCTVIn3D",
    "ChoDuyetIn3D"
  ];
  for (var i = 0; i < adminOnlyNames.length; i++) {
    var sh = ss.getSheetByName(adminOnlyNames[i]);
    if (sh) {
      protectSheetAdminOnlyGas(sh, "Chỉ Admin xem & sửa (" + adminOnlyNames[i] + ")", []);
      if (adminOnlyNames[i] === "ChoDuyetIn3D") {
        try {
          if (sh.hideSheet && (!sh.isSheetHidden || !sh.isSheetHidden())) sh.hideSheet();
        } catch (hErr) {}
      }
    }
  }

  var donIn3d = ss.getSheetByName("DonIn3D");
  if (donIn3d) {
    protectSheetAdminOnlyGas(donIn3d, "Khóa thông tin đơn — chỉ mở cột K:M cho CTV chọn đơn", ["K2:M500"]);
  }
}

function ensurePublicCtvOnEditTriggerGas(pubSs) {
  if (!pubSs || typeof ScriptApp === "undefined" || !ScriptApp.getProjectTriggers) return;
  try {
    var pubId = pubSs.getId ? String(pubSs.getId()) : "";
    var triggers = ScriptApp.getProjectTriggers() || [];
    for (var i = 0; i < triggers.length; i++) {
      if (
        triggers[i].getHandlerFunction() === "dongBoTuSheetCongKhaiCTV" &&
        (!triggers[i].getTriggerSourceId || !pubId || String(triggers[i].getTriggerSourceId()) === pubId)
      ) {
        return;
      }
    }
    ScriptApp.newTrigger("dongBoTuSheetCongKhaiCTV")
      .forSpreadsheet(pubSs)
      .onEdit()
      .create();
  } catch (trigErr) {
    Logger.log("ensurePublicCtvOnEditTriggerGas note: " + trigErr);
  }
}

function syncCtvNamesToPublicSheetGas(pubInfo) {
  try {
    var info = pubInfo || getOrCreatePublicCtvDonIn3DSpreadsheetGas();
    if (!info || !info.ctvSheet || !info.sheet) return;
    var mainCtv = getOrCreateSheet("CongTacVienIn3D");
    var names = [];
    var ctvLast = mainCtv.getLastRow();
    if (ctvLast >= 2) {
      var vals = mainCtv.getRange(2, 2, ctvLast - 1, 1).getValues();
      for (var i = 0; i < vals.length; i++) {
        var n = String(vals[i][0] || "").trim();
        if (n) names.push([n]);
      }
    }
    var pubCtv = info.ctvSheet;
    pubCtv.getRange(1, 1).setValue("Danh sách CTV (Chỉ tên)");
    var prevLast = Math.max(pubCtv.getLastRow(), 2);
    if (prevLast >= 2) {
      pubCtv.getRange(2, 1, prevLast - 1, 1).clearContent();
    }
    if (names.length > 0) {
      pubCtv.getRange(2, 1, names.length, 1).setValues(names);
    }
    if (typeof SpreadsheetApp !== "undefined" && SpreadsheetApp.newDataValidation) {
      var rule = SpreadsheetApp.newDataValidation()
        .requireValueInRange(pubCtv.getRange("A2:A200"), true)
        .setAllowInvalid(true)
        .build();
      info.sheet.getRange("M2:M500").setDataValidation(rule);
    }
  } catch (err) {
    Logger.log("syncCtvNamesToPublicSheetGas note: " + err);
  }
}

function getOrCreatePublicCtvDonIn3DSpreadsheetGas() {
  var props = PropertiesService.getScriptProperties();
  var savedId = String(props.getProperty(PUBLIC_CTV_SHEET_ID_PROP) || "").trim();
  var pubSs = null;

  if (savedId) {
    try {
      pubSs = SpreadsheetApp.openById(savedId);
    } catch (openErr) {
      Logger.log("Re-creating public CTV sheet because openById failed: " + openErr);
      pubSs = null;
    }
  }

  if (!pubSs) {
    pubSs = SpreadsheetApp.create("TBX_DonIn3D_CTV — Bảng Nhận Đơn In 3D (Công khai CTV)");
    savedId = pubSs.getId();
    props.setProperty(PUBLIC_CTV_SHEET_ID_PROP, savedId);
  }
  var pubUrl = pubSs.getUrl ? pubSs.getUrl() : "";
  if (pubUrl) {
    props.setProperty(PUBLIC_CTV_SHEET_URL_PROP, pubUrl);
  }

  // Mở công khai quyền XEM & SỬA với mọi người có link cho file DonIn3D dành riêng cho CTV
  try {
    if (typeof DriveApp !== "undefined" && DriveApp.getFileById) {
      DriveApp.getFileById(savedId).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
    }
  } catch (shareErr) {
    Logger.log("Public CTV sheet sharing warning: " + shareErr);
  }

  var pubSheet = pubSs.getSheetByName("DonIn3D");
  if (!pubSheet) {
    var allSheets = pubSs.getSheets ? pubSs.getSheets() : [];
    if (allSheets.length > 0 && allSheets[0].getName() !== "DanhSachCTV") {
      pubSheet = allSheets[0];
      pubSheet.setName("DonIn3D");
    } else {
      pubSheet = pubSs.insertSheet("DonIn3D");
    }
  }

  var pubCtvSheet = pubSs.getSheetByName("DanhSachCTV");
  if (!pubCtvSheet) {
    pubCtvSheet = pubSs.insertSheet("DanhSachCTV");
  }

  try {
    var sheetsList = pubSs.getSheets ? pubSs.getSheets() : [];
    for (var s = 0; s < sheetsList.length; s++) {
      var sName = sheetsList[s].getName();
      if (sName !== "DonIn3D" && sName !== "DanhSachCTV" && pubSs.deleteSheet) {
        pubSs.deleteSheet(sheetsList[s]);
      }
    }
  } catch (cleanTabErr) {}

  var totalCols = DON_IN_3D_HEADERS.length;
  var maxCols = pubSheet.getMaxColumns ? pubSheet.getMaxColumns() : totalCols;
  if (maxCols < totalCols && pubSheet.insertColumnsAfter) {
    pubSheet.insertColumnsAfter(maxCols, totalCols - maxCols);
  }
  var pubRow1 = pubSheet.getLastRow() === 0 ? [] : pubSheet.getRange(1, 1, 1, totalCols).getValues()[0];
  var needHdr = pubSheet.getLastRow() === 0;
  if (!needHdr) {
    for (var hc = 0; hc < totalCols; hc++) {
      if (String(pubRow1[hc] || "").trim() !== DON_IN_3D_HEADERS[hc]) {
        needHdr = true;
        break;
      }
    }
  }
  if (needHdr) {
    pubSheet.getRange(1, 1, 1, totalCols).setValues([DON_IN_3D_HEADERS]);
    pubSheet.setFrozenRows(1);
    pubSheet
      .getRange(1, 1, 1, totalCols)
      .setBackground("#0B1324")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold");
  }

  // Khóa A1:J500 (thông tin đơn, giá, link Drive) & chỉ mở K2:M500 cho CTV tick nhận in + chọn tên
  protectSheetAdminOnlyGas(pubSheet, "Khóa thông tin đơn — CTV chỉ sửa cột K:M (Đã nhận in / Ghi chú / Người in)", ["K2:M500"]);
  protectSheetAdminOnlyGas(pubCtvSheet, "Danh sách tên CTV (chỉ Admin sửa)", []);
  try {
    if (pubCtvSheet.hideSheet && (!pubCtvSheet.isSheetHidden || !pubCtvSheet.isSheetHidden())) {
      pubCtvSheet.hideSheet();
    }
  } catch (hideCtvErr) {}

  ensurePublicCtvOnEditTriggerGas(pubSs);

  return { ss: pubSs, sheet: pubSheet, ctvSheet: pubCtvSheet, url: pubUrl, id: savedId };
}

function pullCtvClaimsFromPublicSheetGas() {
  var props = PropertiesService.getScriptProperties();
  var savedId = String(props.getProperty(PUBLIC_CTV_SHEET_ID_PROP) || "").trim();
  if (!savedId) return { ok: true, pulled: 0 };

  var lock = null;
  try {
    if (typeof LockService !== "undefined" && LockService.getScriptLock) {
      lock = LockService.getScriptLock();
      if (!lock.tryLock(8000)) return { ok: false, pulled: 0, locked: true };
    }

    var pubSs;
    try {
      pubSs = SpreadsheetApp.openById(savedId);
    } catch (openErr) {
      return { ok: false, pulled: 0, error: String(openErr) };
    }
    var pubSheet = pubSs.getSheetByName("DonIn3D");
    if (!pubSheet || pubSheet.getLastRow() < 2) return { ok: true, pulled: 0 };

    var totalCols = DON_IN_3D_HEADERS.length;
    var pubRows = pubSheet.getRange(2, 1, pubSheet.getLastRow() - 1, totalCols).getValues();
    var mainSheet = getOrCreateSheet("DonIn3D");
    ensureDonIn3DHeadersGas(mainSheet);
    if (mainSheet.getLastRow() < 2) return { ok: true, pulled: 0 };
    var mainRows = mainSheet.getRange(2, 1, mainSheet.getLastRow() - 1, totalCols).getValues();

    var mainRowIdxById = {};
    for (var m = 0; m < mainRows.length; m++) {
      var mId = String(mainRows[m][1] || "").trim();
      if (mId) mainRowIdxById[mId] = m;
    }

    var lastMap = {};
    try {
      lastMap = JSON.parse(props.getProperty(PUBLIC_CTV_SYNC_MAP_PROP) || "{}") || {};
    } catch (parseErr) {
      lastMap = {};
    }

    var pulledCount = 0;
    var btSheet = null;
    for (var p = 0; p < pubRows.length; p++) {
      var pr = pubRows[p];
      var ordId = String(pr[1] || "").trim();
      if (!ordId || mainRowIdxById[ordId] === undefined) continue;

      var mIdx = mainRowIdxById[ordId];
      var mr = mainRows[mIdx];

      var pubClaimed = pr[10] === true || String(pr[10]).toUpperCase() === "TRUE";
      var pubNote = String(pr[11] || "").trim();
      var pubPrinter = String(pr[12] || "").trim();

      var mainClaimed = mr[10] === true || String(mr[10]).toUpperCase() === "TRUE";
      var mainNote = String(mr[11] || "").trim();
      var mainPrinter = String(mr[12] || "").trim();

      var prevSnap = lastMap[ordId] || null;
      var pubChangedFromSnap = prevSnap
        ? (Boolean(prevSnap[0]) !== pubClaimed || String(prevSnap[1] || "") !== pubNote || String(prevSnap[2] || "") !== pubPrinter)
        : ((!mainClaimed && pubClaimed) || (!mainPrinter && Boolean(pubPrinter)));

      if (!pubChangedFromSnap) continue;
      if (mainClaimed === pubClaimed && mainNote === pubNote && mainPrinter === pubPrinter) continue;

      var targetRow = 2 + mIdx;
      var finalPrinter = pubPrinter || mainPrinter;
      var finalClaimed = finalPrinter ? true : pubClaimed;

      var tagParts = [];
      var baseSegs = mainNote.split("|");
      for (var sg = 0; sg < baseSegs.length; sg++) {
        var sTrim = baseSegs[sg].trim();
        if (
          sTrim.indexOf("Hạn giao:") === 0 ||
          sTrim.indexOf("Ship:") === 0 ||
          sTrim.indexOf("TT:") === 0 ||
          sTrim.indexOf("Files:") === 0
        ) {
          tagParts.push(sTrim);
        }
      }

      var finalNote = pubNote || mainNote;
      if (finalPrinter) {
        var statusTail = finalNote.indexOf("In xong") !== -1 ? "In xong" : "Đang in";
        finalNote = (tagParts.length > 0 ? tagParts.join(" | ") + " | " : "") + finalPrinter + " · " + statusTail;
      } else if (finalClaimed) {
        if (!finalNote || finalNote === "Chờ in") finalNote = "Đang in";
        else if (/Chờ in$/.test(finalNote)) finalNote = finalNote.replace(/Chờ in$/, "Đang in");
      }

      mainSheet.getRange(targetRow, 11).setValue(finalClaimed);
      mainSheet.getRange(targetRow, 11).insertCheckboxes();
      mainSheet.getRange(targetRow, 12).setValue(finalNote);
      mainSheet.getRange(targetRow, 13).setValue(finalPrinter);

      if (finalPrinter !== mainPrinter || (finalPrinter && !mainClaimed)) {
        if (!btSheet) btSheet = getOrCreateSheet("BangTinhTienCTV");
        upsertOrderInBangTinhTienGas(btSheet, {
          id: ordId,
          material: String(mr[5] || "PLA"),
          weightGrams: Number(mr[6] || 0),
          printerName: finalPrinter
        });
      }

      var updatedRowVals = mr.slice(0, totalCols);
      updatedRowVals[10] = finalClaimed;
      updatedRowVals[11] = finalNote;
      updatedRowVals[12] = finalPrinter;

      if (!mainClaimed && finalClaimed) {
        sendPrint3DEmail(updatedRowVals, "printing");
        sendTelegramNotice(
          "🧑‍🔧 <b>[Sheet CTV Công Khai]</b> Đơn In 3D <b>#" + escHtml(ordId) + "</b> đã được <b>" +
          escHtml(finalPrinter || "CTV") + "</b> nhận in &amp; đồng bộ về BangTinhTienCTV!"
        );
      } else if (finalPrinter && finalPrinter !== mainPrinter) {
        sendTelegramNotice(
          "🧑‍🔧 <b>[Sheet CTV Công Khai]</b> Đơn In 3D <b>#" + escHtml(ordId) + "</b> đổi người in sang <b>" +
          escHtml(finalPrinter) + "</b> (đã cập nhật BangTinhTienCTV)."
        );
      }

      lastMap[ordId] = [finalClaimed, finalNote, finalPrinter];
      pulledCount++;
    }

    if (pulledCount > 0) {
      props.setProperty(PUBLIC_CTV_SYNC_MAP_PROP, JSON.stringify(lastMap));
    }
    return { ok: true, pulled: pulledCount };
  } catch (err) {
    Logger.log("pullCtvClaimsFromPublicSheetGas error: " + err);
    return { ok: false, pulled: 0, error: String(err) };
  } finally {
    if (lock && lock.releaseLock) {
      try { lock.releaseLock(); } catch (relErr) {}
    }
  }
}

function syncDonIn3DToPublicCtvSheetGas() {
  pullCtvClaimsFromPublicSheetGas();

  var lock = null;
  try {
    if (typeof LockService !== "undefined" && LockService.getScriptLock) {
      lock = LockService.getScriptLock();
      if (!lock.tryLock(8000)) return { ok: false, locked: true };
    }

    var pubInfo = getOrCreatePublicCtvDonIn3DSpreadsheetGas();
    if (!pubInfo || !pubInfo.sheet) return { ok: false };
    syncCtvNamesToPublicSheetGas(pubInfo);

    var mainSheet = getOrCreateSheet("DonIn3D");
    ensureDonIn3DHeadersGas(mainSheet);
    var totalCols = DON_IN_3D_HEADERS.length;
    var mainLast = mainSheet.getLastRow();
    var rowsToPush = [];
    var nextSnap = {};

    if (mainLast >= 2) {
      var vals = mainSheet.getRange(2, 1, mainLast - 1, totalCols).getValues();
      for (var i = 0; i < vals.length; i++) {
        if (!isReal3DOrderRowGas(vals[i])) continue;
        var rowCopy = vals[i].slice(0, totalCols);
        while (rowCopy.length < totalCols) rowCopy.push("");
        rowCopy[10] = rowCopy[10] === true || String(rowCopy[10]).toUpperCase() === "TRUE";
        rowsToPush.push(rowCopy);
        var oId = String(rowCopy[1] || "").trim();
        if (oId) {
          nextSnap[oId] = [rowCopy[10], String(rowCopy[11] || "").trim(), String(rowCopy[12] || "").trim()];
        }
      }
    }

    var pubSheet = pubInfo.sheet;
    var pubPrevLast = pubSheet.getLastRow();
    if (rowsToPush.length > 0) {
      pubSheet.getRange(2, 1, rowsToPush.length, totalCols).setValues(rowsToPush);
      pubSheet.getRange(2, 11, rowsToPush.length, 1).insertCheckboxes();
      if (pubSheet.getRange(2, 7, rowsToPush.length, 1).setNumberFormat) {
        pubSheet.getRange(2, 7, rowsToPush.length, 1).setNumberFormat("#,##0.##");
        pubSheet.getRange(2, 9, rowsToPush.length, 1).setNumberFormat("#,##0");
      }
    }
    var clearStart = 2 + rowsToPush.length;
    if (pubPrevLast >= clearStart) {
      var extraRange = pubSheet.getRange(clearStart, 1, pubPrevLast - clearStart + 1, totalCols);
      if (extraRange.removeCheckboxes) extraRange.removeCheckboxes();
      extraRange.clearContent();
    }

    var snapKeys = Object.keys(nextSnap);
    if (snapKeys.length > 150) {
      var trimmed = {};
      for (var k = snapKeys.length - 150; k < snapKeys.length; k++) {
        trimmed[snapKeys[k]] = nextSnap[snapKeys[k]];
      }
      nextSnap = trimmed;
    }
    PropertiesService.getScriptProperties().setProperty(PUBLIC_CTV_SYNC_MAP_PROP, JSON.stringify(nextSnap));

    return { ok: true, count: rowsToPush.length, url: pubInfo.url };
  } catch (err) {
    Logger.log("syncDonIn3DToPublicCtvSheetGas error: " + err);
    return { ok: false, error: String(err) };
  } finally {
    if (lock && lock.releaseLock) {
      try { lock.releaseLock(); } catch (relErr) {}
    }
  }
}

function dongBoTuSheetCongKhaiCTV(e) {
  try {
    if (e && e.range) {
      var sh = e.range.getSheet();
      if (!sh || sh.getName() !== "DonIn3D") return;
      if (e.range.getRow() < 2) return;
      var col = e.range.getColumn();
      if (col < 11 || col > 13) return;
    }
    var res = pullCtvClaimsFromPublicSheetGas();
    if (res && res.pulled > 0) {
      syncDonIn3DToPublicCtvSheetGas();
    }
  } catch (err) {
    Logger.log("dongBoTuSheetCongKhaiCTV error: " + err);
  }
}

function upsertPrint3DOrderInDonHangGas(donHangSheet, info) {
  if (!donHangSheet || !info || !info.id) return;
  ensureDonHangHeadersGas(donHangSheet, false);
  var targetId = String(info.id).trim();
  if (!targetId) return;

  var totalVal = Number(info.totalAmount || 0);
  var depositTarget = Number(info.depositTargetAmount || 0);
  var hasExplicitDeposit = typeof info.depositPaidAmount === "number" && isFinite(info.depositPaidAmount);
  var depositPaid = hasExplicitDeposit
    ? Math.max(0, Number(info.depositPaidAmount))
    : info.paymentStatus === "qr_verified"
      ? (info.paymentMethod === "transfer" ? totalVal : (depositTarget > 0 ? depositTarget : Math.round(totalVal * 0.3)))
      : 0;

  var payText =
    info.paymentMethod === "transfer"
      ? (info.paymentStatus === "qr_verified" || (totalVal > 0 && depositPaid >= totalVal) ? "Đã nhận tiền QR" : "Chuyển khoản QR")
      : depositPaid > 0
        ? (totalVal > 0 && depositPaid >= totalVal ? "Đã nhận tiền QR" : "Đã cọc 30% QR")
        : "COD";

  var addrText = String(info.shippingAddress || "Nhận trực tiếp tại xưởng").trim() || "Nhận trực tiếp tại xưởng";
  var emailText = String(info.customerEmail || "").trim();
  var itemsText = String(info.itemsSummary || "[In 3D]").trim();
  var transferVal = String(info.transferCode || "").trim();
  var initStatus = String(info.statusLabel || "Chờ duyệt").trim() || "Chờ duyệt";

  var lastRow = donHangSheet.getLastRow();
  if (lastRow >= 2) {
    var existingIds = donHangSheet.getRange(2, 2, lastRow - 1, 1).getValues();
    for (var i = existingIds.length - 1; i >= 0; i--) {
      if (String(existingIds[i][0] || "").trim() === targetId) {
        var rIdx = i + 2;
        if (addrText) donHangSheet.getRange(rIdx, 5).setValue(addrText);
        if (itemsText) donHangSheet.getRange(rIdx, 6).setValue(itemsText);
        if (totalVal > 0) donHangSheet.getRange(rIdx, 7).setValue(totalVal);
        if (payText === "Đã nhận tiền QR" || payText === "Đã cọc 30% QR") {
          donHangSheet.getRange(rIdx, 8).setValue(payText);
        }
        if (transferVal) donHangSheet.getRange(rIdx, 9).setValue(transferVal);
        if (emailText) donHangSheet.getRange(rIdx, 11).setValue(emailText);
        if (depositPaid > 0) donHangSheet.getRange(rIdx, 12).setValue(depositPaid);
        applyDonHangRowFormulaGas(donHangSheet, rIdx);
        return;
      }
    }
  }

  var targetRow = Math.max(2, lastRow + 1);
  donHangSheet.getRange(targetRow, 1, 1, DON_HANG_HEADERS.length).setValues([[
    new Date(),
    targetId,
    String(info.customerName || "Khách hàng"),
    String(info.customerPhone || ""),
    addrText,
    itemsText,
    totalVal,
    payText,
    transferVal,
    initStatus,
    emailText,
    depositPaid,
    Math.max(0, totalVal - depositPaid)
  ]]);
  applyDonHangRowFormulaGas(donHangSheet, targetRow);
}

function getDefaultMaterialCostPerGramGas(matName) {
  var key = normalizeMaterialKeyGas(matName);
  if (key === "PETG") return 200;
  if (key === "ABS") return 300;
  if (key === "TPU") return 450;
  if (key === "Cacbon CF") return 1500;
  return 250;
}

function clearLegacyDonIn3DSettlementColsGas(sheet) {
  if (!sheet) return;
  var maxCols = sheet.getMaxColumns ? sheet.getMaxColumns() : 13;
  if (maxCols <= DON_IN_3D_HEADERS.length) return;
  var extraCols = maxCols - DON_IN_3D_HEADERS.length;
  var clearRows = Math.max(sheet.getLastRow(), sheet.getMaxRows ? sheet.getMaxRows() : 500, 2);
  var extraRange = sheet.getRange(1, DON_IN_3D_HEADERS.length + 1, clearRows, extraCols);
  if (extraRange.removeCheckboxes) extraRange.removeCheckboxes();
  if (extraRange.clearDataValidations) extraRange.clearDataValidations();
  if (extraRange.clearContent) extraRange.clearContent();
  if (extraRange.clearFormat) extraRange.clearFormat();
}

function extractLegacyDonIn3DSettlementRowsGas(sheet) {
  var list = [];
  if (!sheet) return list;
  var maxCols = sheet.getMaxColumns ? sheet.getMaxColumns() : 13;
  var lastRow = sheet.getLastRow();
  if (maxCols < 14 || lastRow < 2) return list;
  var h14 = String(sheet.getRange(1, 14).getValue() || "").trim();
  if (!h14) return list;
  var readCols = Math.min(maxCols, 20);
  var vals = sheet.getRange(2, 1, lastRow - 1, readCols).getValues();
  for (var i = 0; i < vals.length; i++) {
    var r = vals[i];
    var orderId = String(r[1] || "").trim();
    if (!orderId) continue;
    var noteStr = String(r[11] || "");
    var tailSeg = noteStr.split("|").pop().trim();
    var parsedPrinter = tailSeg.indexOf("·") !== -1 ? tailSeg.split("·")[0].trim() : "";
    var confirmed = readCols >= 18 && (r[17] === true || String(r[17]).toUpperCase() === "TRUE");
    var paidRaw = readCols >= 20 ? String(r[19] || "").trim() : "";
    var shopPctLegacy = readCols >= 15 && r[14] !== "" && r[14] !== null && isFinite(Number(r[14]))
      ? Number(r[14])
      : 25;
    if (!confirmed && paidRaw.indexOf("Đã chuyển") === -1 && shopPctLegacy === 20) {
      shopPctLegacy = 25;
    }
    list.push({
      id: orderId,
      material: String(r[5] || "PLA"),
      weightGrams: Number(r[6] || 0),
      printerName: String(r[12] || "").trim() || parsedPrinter,
      actualWeightGrams: readCols >= 14 ? Number(r[13] || 0) : 0,
      shopCommissionPercent: shopPctLegacy,
      adminConfirmed: confirmed,
      payoutWeekKey: (readCols >= 19 ? String(r[18] || "").trim() : "") || getIsoWeekKeyGas(),
      payoutStatus: paidRaw.indexOf("Đã chuyển") !== -1 ? "paid" : "unpaid",
      payoutStatusLabel: paidRaw || "Chưa chuyển"
    });
  }
  return list;
}

function ensureDonIn3DHeadersGas(sheet) {
  if (!sheet) return;
  var totalCols = DON_IN_3D_HEADERS.length;
  var maxCols = sheet.getMaxColumns ? sheet.getMaxColumns() : totalCols;
  if (maxCols < totalCols && sheet.insertColumnsAfter) {
    sheet.insertColumnsAfter(maxCols, totalCols - maxCols);
  }

  var legacyRows = extractLegacyDonIn3DSettlementRowsGas(sheet);
  var hadOldExtraHeader = maxCols > totalCols && String(sheet.getRange(1, totalCols + 1).getValue() || "").trim() !== "";

  var activeFilter = sheet.getFilter ? sheet.getFilter() : null;
  if (activeFilter && hadOldExtraHeader) {
    activeFilter.remove();
  }

  if (hadOldExtraHeader) {
    clearLegacyDonIn3DSettlementColsGas(sheet);
  }

  var row1 = sheet.getRange(1, 1, 1, totalCols).getValues()[0];
  var needsHeaderUpdate = sheet.getLastRow() === 0;
  if (!needsHeaderUpdate) {
    for (var c = 0; c < totalCols; c++) {
      if (String(row1[c] || "").trim() !== DON_IN_3D_HEADERS[c]) {
        needsHeaderUpdate = true;
        break;
      }
    }
  }
  if (needsHeaderUpdate) {
    sheet.getRange(1, 1, 1, totalCols).setValues([DON_IN_3D_HEADERS]);
    sheet.setFrozenRows(1);
    sheet
      .getRange(1, 1, 1, totalCols)
      .setBackground("#0B1324")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold");
  }

  if (legacyRows.length > 0) {
    var btSheetLegacy = getOrCreateSheet("BangTinhTienCTV");
    for (var lr = 0; lr < legacyRows.length; lr++) {
      upsertOrderInBangTinhTienGas(btSheetLegacy, legacyRows[lr]);
    }
  }
}

function applyDonIn3DLinksAndFormulasGas(p3dSheet, populatedRowCount) {
  if (!p3dSheet) return;
  var ctvSheet = getOrCreateSheet("CongTacVienIn3D");

  if (typeof SpreadsheetApp !== "undefined" && SpreadsheetApp.newDataValidation) {
    try {
      var printerRule = SpreadsheetApp.newDataValidation()
        .requireValueInRange(ctvSheet.getRange("B2:B200"), true)
        .setAllowInvalid(true)
        .build();
      p3dSheet.getRange("M2:M500").setDataValidation(printerRule);
    } catch (dvErr) {
      Logger.log("applyDonIn3DLinksAndFormulasGas DataValidation note: " + dvErr);
    }
  }

  var count = Math.max(0, Number(populatedRowCount || 0));
  if (count > 0) {
    p3dSheet.getRange(2, 11, count, 1).insertCheckboxes();
    if (p3dSheet.getRange(2, 7, count, 1).setNumberFormat) {
      p3dSheet.getRange(2, 7, count, 1).setNumberFormat("#,##0.##");
      p3dSheet.getRange(2, 9, count, 1).setNumberFormat("#,##0");
    }
  }
}

var _CACHED_FORMULA_SEP_GAS = null;

function detectFormulaSepGas(btSheet) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var localeStr = ss && ss.getSpreadsheetLocale ? String(ss.getSpreadsheetLocale() || "") : "en_US";
  if (_CACHED_FORMULA_SEP_GAS && _CACHED_FORMULA_SEP_GAS.locale === localeStr) {
    return _CACHED_FORMULA_SEP_GAS.sep;
  }

  var prefix = localeStr.split("_")[0].split("-")[0].toLowerCase();
  var semicolonPrefixes = {
    vi: true, de: true, fr: true, es: true, it: true, pt: true, ru: true,
    pl: true, nl: true, sv: true, da: true, fi: true, no: true, nb: true,
    cs: true, sk: true, hu: true, ro: true, bg: true, hr: true, sl: true,
    el: true, tr: true, uk: true, id: true, ar: true
  };
  var candidates = semicolonPrefixes[prefix] ? [";", ","] : [",", ";"];
  var chosen = candidates[0];

  var probeSheet = btSheet;
  if (probeSheet && probeSheet.getName && probeSheet.getName() !== "BangTinhTienCTV") {
    probeSheet = ss && ss.getSheetByName ? ss.getSheetByName("BangTinhTienCTV") : null;
  }

  if (probeSheet) {
    var maxCols = probeSheet.getMaxColumns ? probeSheet.getMaxColumns() : 17;
    if (maxCols < 17 && probeSheet.insertColumnsAfter) {
      probeSheet.insertColumnsAfter(maxCols, 17 - maxCols);
    }
    var probeCell = probeSheet.getRange(1, 17); // Q1 scratch probe cell
    var useVlookup = String(probeSheet.getRange(3, 1).getValue() || "").trim() === "PLA";
    try {
      for (var i = 0; i < candidates.length; i++) {
        var sep = candidates[i];
        var vlookupProbe =
          "=IF(1=1" + sep +
          "ROUND(MAX(0" + sep + "IFERROR(VLOOKUP(\\"PLA\\"" + sep + "$A$3:$B$7" + sep + "2" + sep + "FALSE)" + sep + "0))" + sep + "0)" +
          sep + "0)";
        var simpleProbe = "=IF(1=1" + sep + "123" + sep + "0)";
        var testFormula = useVlookup ? vlookupProbe : simpleProbe;
        if (probeCell.setFormulas) probeCell.setFormulas([[testFormula]]);
        else probeCell.setValue(testFormula);
        if (typeof SpreadsheetApp !== "undefined" && SpreadsheetApp.flush) {
          SpreadsheetApp.flush();
        }
        var probeVal = probeCell.getValue();
        probeCell.clearContent();
        if (typeof probeVal === "number" && probeVal > 0) {
          chosen = sep;
          break;
        }
      }
    } catch (probeErr) {
      try { probeCell.clearContent(); } catch (ignoreProbeErr) {}
    }
    try { probeCell.clearContent(); } catch (ignoreClearErr) {}
  }

  _CACHED_FORMULA_SEP_GAS = { locale: localeStr, sep: chosen };
  return chosen;
}

function buildBangTinhTienOrderRowFormulasGas(rowNum, sep) {
  var r = Number(rowNum);
  var S = sep || ";";
  var vMat = "VLOOKUP(A" + r + S + "DonIn3D!$B$2:$M$500" + S + "5" + S + "FALSE)";
  var fMatClean =
    "=IF(A" + r + "=\\"\\"" + S + "\\"\\"" + S + "IFERROR(" +
      "IF(ISNUMBER(SEARCH(\\"PETG\\"" + S + vMat + "))" + S + "\\"PETG\\"" + S +
      "IF(ISNUMBER(SEARCH(\\"ABS\\"" + S + vMat + "))" + S + "\\"ABS\\"" + S +
      "IF(ISNUMBER(SEARCH(\\"TPU\\"" + S + vMat + "))" + S + "\\"TPU\\"" + S +
      "IF(OR(ISNUMBER(SEARCH(\\"CF\\"" + S + vMat + "))" + S + "ISNUMBER(SEARCH(\\"CARBON\\"" + S + vMat + "))" + S + "ISNUMBER(SEARCH(\\"CACBON\\"" + S + vMat + ")))" + S + "\\"Cacbon CF\\"" + S + "\\"PLA\\"))))" + S +
    "\\"PLA\\"))";
  return {
    bCustomer: "=IF(A" + r + "=\\"\\"" + S + "\\"\\"" + S + "IFERROR(VLOOKUP(A" + r + S + "DonIn3D!$B$2:$M$500" + S + "2" + S + "FALSE)" + S + "\\"\\"))",
    cMaterial: fMatClean,
    dCustomerAmount: "=IF(A" + r + "=\\"\\"" + S + "\\"\\"" + S + "IFERROR(VLOOKUP(A" + r + S + "DonIn3D!$B$2:$M$500" + S + "8" + S + "FALSE)*1" + S + "0))",
    gCostPerGram: "=IF(A" + r + "=\\"\\"" + S + "\\"\\"" + S + "IFERROR(VLOOKUP(C" + r + S + "$A$3:$B$7" + S + "2" + S + "FALSE)*1" + S + "0))",
    hMaterialCost: "=IF(A" + r + "=\\"\\"" + S + "\\"\\"" + S + "ROUND(IF(IFERROR(F" + r + "*1" + S + "0)>0" + S + "F" + r + "*1" + S + "IFERROR(VLOOKUP(A" + r + S + "DonIn3D!$B$2:$M$500" + S + "6" + S + "FALSE)*1" + S + "0))*IFERROR(G" + r + "*1" + S + "0)" + S + "0))",
    iRemaining: "=IF(A" + r + "=\\"\\"" + S + "\\"\\"" + S + "MAX(0" + S + "IFERROR(D" + r + "*1" + S + "0)-IFERROR(H" + r + "*1" + S + "0)))",
    kShopFee: "=IF(A" + r + "=\\"\\"" + S + "\\"\\"" + S + "ROUND(IFERROR(I" + r + "*1" + S + "0)*(IF(J" + r + "=\\"\\"" + S + "$C$3" + S + "IFERROR(J" + r + "*1" + S + "$C$3))/100)" + S + "0))",
    lCtvPayout: "=IF(A" + r + "=\\"\\"" + S + "\\"\\"" + S + "MAX(0" + S + "IFERROR(I" + r + "*1" + S + "0)-IFERROR(K" + r + "*1" + S + "0))+IFERROR(H" + r + "*1" + S + "0))"
  };
}

function applyBangTinhTienOrderRowFormulasGas(btSheet, rowNum, sep) {
  if (!btSheet || rowNum < 35) return;
  var S = sep || detectFormulaSepGas(btSheet);
  var fObj = buildBangTinhTienOrderRowFormulasGas(rowNum, S);
  var bcd = btSheet.getRange(rowNum, 2, 1, 3);
  var ghi = btSheet.getRange(rowNum, 7, 1, 3);
  var kl = btSheet.getRange(rowNum, 11, 1, 2);
  if (bcd.setFormulas) {
    bcd.setFormulas([[fObj.bCustomer, fObj.cMaterial, fObj.dCustomerAmount]]);
    ghi.setFormulas([[fObj.gCostPerGram, fObj.hMaterialCost, fObj.iRemaining]]);
    kl.setFormulas([[fObj.kShopFee, fObj.lCtvPayout]]);
  } else {
    bcd.setValues([[fObj.bCustomer, fObj.cMaterial, fObj.dCustomerAmount]]);
    ghi.setValues([[fObj.gCostPerGram, fObj.hMaterialCost, fObj.iRemaining]]);
    kl.setValues([[fObj.kShopFee, fObj.lCtvPayout]]);
  }
  if (btSheet.getRange(rowNum, 4, 1, 1).setNumberFormat) {
    btSheet.getRange(rowNum, 4, 1, 1).setNumberFormat("#,##0");
    btSheet.getRange(rowNum, 6, 1, 1).setNumberFormat("#,##0.##");
    btSheet.getRange(rowNum, 7, 1, 3).setNumberFormat("#,##0");
    btSheet.getRange(rowNum, 11, 1, 2).setNumberFormat("#,##0");
  }
}

function applyBangTinhTienValidationsGas(btSheet) {
  if (!btSheet || typeof SpreadsheetApp === "undefined" || !SpreadsheetApp.newDataValidation) return;
  try {
    var clearRows = Math.max(btSheet.getMaxRows ? btSheet.getMaxRows() : 500, 500);
    var clearCols = Math.max(btSheet.getMaxColumns ? btSheet.getMaxColumns() : 20, 20);
    btSheet.getRange(1, 1, clearRows, clearCols).clearDataValidations();

    var ctvSheet = getOrCreateSheet("CongTacVienIn3D");
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var p3dSheet = ss.getSheetByName("DonIn3D");

    var payActionRule = SpreadsheetApp.newDataValidation()
      .requireValueInList(["Chưa chuyển", "Đã chuyển"], true)
      .setAllowInvalid(true)
      .build();
    btSheet.getRange("O35:O500").setDataValidation(payActionRule);

    var ctvRule = SpreadsheetApp.newDataValidation()
      .requireValueInRange(ctvSheet.getRange("B2:B200"), true)
      .setAllowInvalid(true)
      .build();
    btSheet.getRange("E35:E500").setDataValidation(ctvRule);

    if (p3dSheet) {
      var orderRule = SpreadsheetApp.newDataValidation()
        .requireValueInRange(p3dSheet.getRange("B2:B500"), true)
        .setAllowInvalid(true)
        .build();
      btSheet.getRange("A35:A500").setDataValidation(orderRule);
    }

    var btLastRow = Math.max(btSheet.getLastRow(), 35);
    if (btLastRow >= 35) {
      var colA = btSheet.getRange(35, 1, btLastRow - 34, 1).getValues();
      var colM = btSheet.getRange(35, 13, btLastRow - 34, 1).getValues();
      for (var ci = 0; ci < colA.length; ci++) {
        if (String(colA[ci][0] || "").trim()) {
          var mRange = btSheet.getRange(35 + ci, 13);
          var mVal = colM[ci][0];
          if (mVal === "" || mVal === null || mVal === undefined) {
            mRange.setValue(false);
          } else {
            mRange.setValue(mVal === true || String(mVal).toUpperCase() === "TRUE");
          }
          mRange.insertCheckboxes();
        }
      }
    }
  } catch (btDvErr) {
    Logger.log("BangTinhTienCTV DataValidation note: " + btDvErr);
  }
}

function applyBangTinhTienAllFormulasGas(sheet) {
  if (!sheet) return;
  var curFilter = sheet.getFilter ? sheet.getFilter() : null;
  if (curFilter) curFilter.remove();

  var S = detectFormulaSepGas(sheet);

  sheet.getRange(3, 6).setValue("Tiền CTV thực nhận = (Tiền khách đặt - Tiền nhựa - Tiền cho Shop) + Tiền nhựa (hoàn tiền nhựa CTV tự mua)");
  sheet.getRange(11, 12).setValue("TT chuyển (tích ở ThanhToanCTVIn3D)");
  sheet.getRange(34, 12).setValue("Tiền CTV thực nhận (đ)");
  var t1SumRange = sheet.getRange(10, 6, 1, 6);
  var t1SumFormulas = [[
    "=SUM(F12:F31)",
    "=SUM(G12:G31)",
    "=SUM(H12:H31)",
    "=SUM(I12:I31)",
    "=SUM(J12:J31)",
    "=SUM(K12:K31)"
  ]];
  if (t1SumRange.setFormulas) t1SumRange.setFormulas(t1SumFormulas);
  else t1SumRange.setValues(t1SumFormulas);

  var t1Rows = [];
  for (var r1 = 12; r1 <= 31; r1++) {
    var ctvRow = r1 - 10; // CongTacVienIn3D rows 2..21
    var critAll = "$E$35:$E$500" + S + "A" + r1 + S + "$M$35:$M$500" + S + "TRUE" + S + "$O$35:$O$500" + S + "\\"<>Đã chuyển*\\"";
    var critWeek = "$E$35:$E$500" + S + "A" + r1 + S + "$M$35:$M$500" + S + "TRUE" + S + "$N$35:$N$500" + S + "$D$3" + S + "$O$35:$O$500" + S + "\\"<>Đã chuyển*\\"";
    t1Rows.push([
      "=IF(CongTacVienIn3D!B" + ctvRow + "=\\"\\"" + S + "\\"\\"" + S + "CongTacVienIn3D!B" + ctvRow + ")",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "CongTacVienIn3D!C" + ctvRow + ")",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "CongTacVienIn3D!D" + ctvRow + ")",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "CongTacVienIn3D!F" + ctvRow + ")",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "CongTacVienIn3D!G" + ctvRow + ")",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "IF($D$3=\\"\\"" + S + "COUNTIFS(" + critAll + ")" + S + "COUNTIFS(" + critWeek + ")))",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "IF($D$3=\\"\\"" + S + "SUMIFS($F$35:$F$500" + S + critAll + ")" + S + "SUMIFS($F$35:$F$500" + S + critWeek + ")))",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "IF($D$3=\\"\\"" + S + "SUMIFS($D$35:$D$500" + S + critAll + ")" + S + "SUMIFS($D$35:$D$500" + S + critWeek + ")))",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "IF($D$3=\\"\\"" + S + "SUMIFS($H$35:$H$500" + S + critAll + ")" + S + "SUMIFS($H$35:$H$500" + S + critWeek + ")))",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "IF($D$3=\\"\\"" + S + "SUMIFS($K$35:$K$500" + S + critAll + ")" + S + "SUMIFS($K$35:$K$500" + S + critWeek + ")))",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "IF($D$3=\\"\\"" + S + "SUMIFS($L$35:$L$500" + S + critAll + ")" + S + "SUMIFS($L$35:$L$500" + S + critWeek + ")))",
      "=IF(A" + r1 + "=\\"\\"" + S + "\\"\\"" + S + "IF(K" + r1 + ">0" + S + "\\"Chờ tích ở ThanhToanCTVIn3D\\"" + S + "\\"Đã chốt / 0đ\\"))"
    ]);
  }
  var t1BodyRange = sheet.getRange(12, 1, t1Rows.length, 12);
  if (t1BodyRange.setFormulas) t1BodyRange.setFormulas(t1Rows);
  else t1BodyRange.setValues(t1Rows);
  if (sheet.getRange(12, 8, t1Rows.length, 4).setNumberFormat) {
    sheet.getRange(10, 7, 1, 1).setNumberFormat("#,##0.##");
    sheet.getRange(10, 8, 1, 4).setNumberFormat("#,##0");
    sheet.getRange(12, 7, t1Rows.length, 1).setNumberFormat("#,##0.##");
    sheet.getRange(12, 8, t1Rows.length, 4).setNumberFormat("#,##0");
  }

  var maxRowT2 = Math.max(200, sheet.getLastRow());
  var t2Bcd = [];
  var t2Ghi = [];
  var t2Kl = [];
  for (var r2 = 35; r2 <= maxRowT2; r2++) {
    var rf = buildBangTinhTienOrderRowFormulasGas(r2, S);
    t2Bcd.push([rf.bCustomer, rf.cMaterial, rf.dCustomerAmount]);
    t2Ghi.push([rf.gCostPerGram, rf.hMaterialCost, rf.iRemaining]);
    t2Kl.push([rf.kShopFee, rf.lCtvPayout]);
  }
  if (sheet.getRange(35, 2, t2Bcd.length, 3).setFormulas) {
    sheet.getRange(35, 2, t2Bcd.length, 3).setFormulas(t2Bcd);
    sheet.getRange(35, 7, t2Ghi.length, 3).setFormulas(t2Ghi);
    sheet.getRange(35, 11, t2Kl.length, 2).setFormulas(t2Kl);
  } else {
    sheet.getRange(35, 2, t2Bcd.length, 3).setValues(t2Bcd);
    sheet.getRange(35, 7, t2Ghi.length, 3).setValues(t2Ghi);
    sheet.getRange(35, 11, t2Kl.length, 2).setValues(t2Kl);
  }
  if (sheet.getRange(35, 4, t2Bcd.length, 1).setNumberFormat) {
    sheet.getRange(35, 4, t2Bcd.length, 1).setNumberFormat("#,##0");
    sheet.getRange(35, 6, t2Bcd.length, 1).setNumberFormat("#,##0.##");
    sheet.getRange(35, 7, t2Bcd.length, 3).setNumberFormat("#,##0");
    sheet.getRange(35, 11, t2Bcd.length, 2).setNumberFormat("#,##0");
  }
}

function ensureBangTinhTienCTVGas(sheet, forceRefresh) {
  if (!sheet) return;
  getOrCreateSheet("CongTacVienIn3D");
  var totalCols = 15;
  var curWeek = getIsoWeekKeyGas();
  var headerCheck = String(sheet.getRange(34, 1).getValue() || "").trim();
  var matHeaderCheck = String(sheet.getRange(2, 1).getValue() || "").trim();

  if (headerCheck !== "Mã đơn" || matHeaderCheck !== "Loại nhựa") {
    var maxCols = sheet.getMaxColumns ? sheet.getMaxColumns() : totalCols;
    if (maxCols < totalCols && sheet.insertColumnsAfter) {
      sheet.insertColumnsAfter(maxCols, totalCols - maxCols);
    }
    var curFilter = sheet.getFilter ? sheet.getFilter() : null;
    if (curFilter) curFilter.remove();
    var clrRows = Math.max(sheet.getMaxRows ? sheet.getMaxRows() : 500, 500);
    var clrCols = Math.max(sheet.getMaxColumns ? sheet.getMaxColumns() : 20, 20);
    sheet.getRange(1, 1, clrRows, clrCols).clearDataValidations();
    if (sheet.clear) sheet.clear();

    // Zone 1: Rows 1..7 - Config & Editable Filament Base Costs
    var row1 = ["BẢNG TÍNH TIỀN & CHUYỂN KHOẢN CTV IN 3D (THEO MÃ ĐƠN & LOẠI NHỰA · ĐỊNH KỲ 1 TUẦN/LẦN)"];
    while (row1.length < totalCols) row1.push("");
    sheet.getRange(1, 1, 1, totalCols).setValues([row1]);
    sheet.getRange(1, 1, 1, totalCols).setBackground("#0B1324").setFontColor("#38BDF8").setFontWeight("bold");

    sheet.getRange(2, 1, 1, 8).setValues([[
      "Loại nhựa",
      "Giá gốc nhựa (đ/g)",
      "% Shop mặc định",
      "Tuần đối soát (trống = tất cả chưa CK)",
      "Tuần hiện tại",
      "Công thức tiền CTV nhận",
      "",
      ""
    ]]);
    sheet.getRange(2, 1, 1, totalCols).setBackground("#E2E8F0").setFontWeight("bold");

    var matCostRows = [
      ["PLA", 250, 25, "", curWeek, "Tiền CTV thực nhận = (Tiền khách đặt - Tiền nhựa - Tiền cho Shop) + Tiền nhựa (hoàn tiền nhựa CTV tự mua)"],
      ["PETG", 200, "Chu kỳ chuyển:", "Chủ nhật hàng tuần (1 tuần/lần)", "", "Tiền nhựa = KL thực tế (g) * Giá gốc nhựa (đ/g) (tra theo bảng A3:B7)"],
      ["ABS", 300, "", "", "", ""],
      ["TPU", 450, "", "", "", ""],
      ["Cacbon CF", 1500, "", "", "", ""]
    ];
    sheet.getRange(3, 1, matCostRows.length, 6).setValues(matCostRows);
    sheet.getRange(3, 1, 5, 2).setBackground("#F0FDF4").setFontWeight("bold");
    sheet.getRange(3, 3, 1, 3).setBackground("#FFFBEB").setFontWeight("bold");
    if (sheet.getRange(3, 2, 5, 1).setNumberFormat) {
      sheet.getRange(3, 2, 5, 1).setNumberFormat("#,##0");
    }

    // Zone 2: Rows 9..31 - Table I: Weekly CTV Summary
    var sec1Row = ["I. BẢNG TỔNG HỢP CHUYỂN KHOẢN THEO CỘNG TÁC VIÊN (HÀNG TUẦN)"];
    while (sec1Row.length < 12) sec1Row.push("");
    sheet.getRange(9, 1, 1, 12).setValues([sec1Row]);
    sheet.getRange(9, 1, 1, 12).setBackground("#1E293B").setFontColor("#38BDF8").setFontWeight("bold");

    sheet.getRange(10, 1, 1, 5).setValues([["TỔNG CỘNG ĐỢT ĐỐI SOÁT", "", "", "", ""]]);
    sheet.getRange(10, 1, 1, 12).setBackground("#ECFDF5").setFontWeight("bold");

    var t1Headers = [
      "Họ tên CTV (Người in)",
      "SĐT / Zalo",
      "Ngân hàng",
      "Số tài khoản (STK)",
      "Chủ tài khoản",
      "Số đơn Admin duyệt",
      "Tổng KL thực tế (g)",
      "Tổng tiền khách (đ)",
      "Tổng tiền nhựa (đ)",
      "Tiền cho Shop (đ)",
      "Cần chuyển CTV (đ)",
      "TT chuyển (tích ở ThanhToanCTVIn3D)"
    ];
    sheet.getRange(11, 1, 1, t1Headers.length).setValues([t1Headers]);
    sheet.getRange(11, 1, 1, t1Headers.length).setBackground("#0B1324").setFontColor("#FFFFFF").setFontWeight("bold");

    // Zone 3: Row 33+ - Table II: Per-order Settlement by Mã đơn
    var sec2Row = ["II. CHI TIẾT TÍNH TIỀN CTV TỪNG ĐƠN (TRA THEO MÃ ĐƠN & LOẠI NHỰA)"];
    while (sec2Row.length < totalCols) sec2Row.push("");
    sheet.getRange(33, 1, 1, totalCols).setValues([sec2Row]);
    sheet.getRange(33, 1, 1, totalCols).setBackground("#1E293B").setFontColor("#38BDF8").setFontWeight("bold");

    var t2Headers = [
      "Mã đơn",
      "Khách hàng",
      "Loại nhựa",
      "Tiền khách đặt (đ)",
      "Người in (CTV)",
      "KL thực tế (g)",
      "Giá gốc nhựa (đ/g)",
      "Tiền nhựa (đ)",
      "Còn lại (Khách - Nhựa)",
      "% Shop",
      "Tiền cho Shop (đ)",
      "Tiền CTV thực nhận (đ)",
      "Admin xác nhận",
      "Tuần đối soát",
      "TT chuyển CTV"
    ];
    sheet.getRange(34, 1, 1, t2Headers.length).setValues([t2Headers]);
    sheet.getRange(34, 1, 1, t2Headers.length).setBackground("#0B1324").setFontColor("#FFFFFF").setFontWeight("bold");

    applyBangTinhTienAllFormulasGas(sheet);
    applyBangTinhTienValidationsGas(sheet);
  } else {
    sheet.getRange(3, 5).setValue(curWeek);
    var liveSep = detectFormulaSepGas(sheet);
    var headerL11 = String(sheet.getRange(11, 12).getValue() || "").trim();
    var b35Val = String(sheet.getRange(35, 2).getValue() || "").trim();
    var b37Val = String(sheet.getRange(37, 2).getValue() || "").trim();
    var b35Formula = sheet.getRange(35, 2).getFormula ? String(sheet.getRange(35, 2).getFormula() || "") : "";
    var wrongSep = b35Formula ? (liveSep === ";" ? b35Formula.indexOf(",") !== -1 : b35Formula.indexOf(";") !== -1) : false;
    var hasFormulaErr = b35Val.indexOf("#ERROR") !== -1 || b37Val.indexOf("#ERROR") !== -1 || wrongSep;

    if (forceRefresh || hasFormulaErr || headerL11 !== "TT chuyển (tích ở ThanhToanCTVIn3D)") {
      applyBangTinhTienAllFormulasGas(sheet);
      applyBangTinhTienValidationsGas(sheet);
    } else {
      applyBangTinhTienValidationsGas(sheet);
    }
  }
}

function findOrderRowInBangTinhTienGas(btSheet, orderId) {
  if (!btSheet || !orderId) return { existingRow: -1, firstEmptyRow: 35 };
  var lastRow = Math.max(btSheet.getLastRow(), 35);
  var scanCount = lastRow - 34;
  var colA = scanCount > 0 ? btSheet.getRange(35, 1, scanCount, 1).getValues() : [];
  var firstEmptyRow = -1;
  for (var i = 0; i < colA.length; i++) {
    var val = String(colA[i][0] || "").trim();
    if (val === orderId) {
      return { existingRow: 35 + i, firstEmptyRow: 35 + i };
    }
    if (!val && firstEmptyRow === -1) {
      firstEmptyRow = 35 + i;
    }
  }
  if (firstEmptyRow === -1) firstEmptyRow = 35 + colA.length;
  return { existingRow: -1, firstEmptyRow: firstEmptyRow };
}

function upsertOrderInBangTinhTienGas(btSheet, orderData) {
  if (!btSheet || !orderData || !orderData.id) return -1;
  ensureBangTinhTienCTVGas(btSheet);
  var orderId = String(orderData.id || "").trim();
  if (!orderId) return -1;

  var found = findOrderRowInBangTinhTienGas(btSheet, orderId);
  var rowNum = found.existingRow !== -1 ? found.existingRow : found.firstEmptyRow;
  var defaultPct = Number(btSheet.getRange(3, 3).getValue() || 25);

  if (found.existingRow === -1) {
    btSheet.getRange(rowNum, 1).setValue(orderId);
  }

  var existingVals = btSheet.getRange(rowNum, 1, 1, 15).getValues()[0];
  if (typeof orderData.printerName === "string") {
    if (orderData.printerName || found.existingRow !== -1) {
      btSheet.getRange(rowNum, 5).setValue(orderData.printerName);
    }
  }

  if (typeof orderData.actualWeightGrams === "number" && orderData.actualWeightGrams > 0) {
    btSheet.getRange(rowNum, 6).setValue(orderData.actualWeightGrams);
  } else if (!(Number(existingVals[5] || 0) > 0) && Number(orderData.weightGrams || 0) > 0) {
    btSheet.getRange(rowNum, 6).setValue(Number(orderData.weightGrams));
  }

  if (typeof orderData.shopCommissionPercent === "number" && isFinite(orderData.shopCommissionPercent)) {
    btSheet.getRange(rowNum, 10).setValue(orderData.shopCommissionPercent);
  } else if (existingVals[9] === "" || existingVals[9] === null || existingVals[9] === undefined) {
    btSheet.getRange(rowNum, 10).setValue(defaultPct);
  }

  if (typeof orderData.adminConfirmed === "boolean") {
    btSheet.getRange(rowNum, 13).setValue(orderData.adminConfirmed);
  } else if (found.existingRow === -1) {
    btSheet.getRange(rowNum, 13).setValue(false);
  }
  btSheet.getRange(rowNum, 13).insertCheckboxes();

  if (typeof orderData.payoutWeekKey === "string" && orderData.payoutWeekKey.trim()) {
    btSheet.getRange(rowNum, 14).setValue(orderData.payoutWeekKey.trim());
  } else if (!String(existingVals[13] || "").trim()) {
    btSheet.getRange(rowNum, 14).setValue(getIsoWeekKeyGas());
  }

  if (typeof orderData.payoutStatusLabel === "string" && orderData.payoutStatusLabel.trim()) {
    btSheet.getRange(rowNum, 15).setValue(orderData.payoutStatusLabel.trim());
  } else if (orderData.payoutStatus === "paid") {
    var curPaidLabel = String(existingVals[14] || "");
    if (curPaidLabel.indexOf("Đã chuyển") === -1) {
      btSheet.getRange(rowNum, 15).setValue("Đã chuyển");
    }
  } else if (orderData.payoutStatus === "unpaid" || !String(existingVals[14] || "").trim()) {
    btSheet.getRange(rowNum, 15).setValue("Chưa chuyển");
  }

  applyBangTinhTienOrderRowFormulasGas(btSheet, rowNum);
  return rowNum;
}

function syncAllOrdersToBangTinhTienGas(p3dSheet, btSheet) {
  if (!p3dSheet || !btSheet) return;
  ensureBangTinhTienCTVGas(btSheet);
  var lastRow = p3dSheet.getLastRow();
  if (lastRow < 2) return;
  var p3dRows = p3dSheet.getRange(2, 1, lastRow - 1, DON_IN_3D_HEADERS.length).getValues();
  for (var i = 0; i < p3dRows.length; i++) {
    var r = p3dRows[i];
    var orderId = String(r[1] || "").trim();
    if (!orderId) continue;
    var noteStr = String(r[11] || "");
    var tailSeg = noteStr.split("|").pop().trim();
    var parsedPrinter = tailSeg.indexOf("·") !== -1 ? tailSeg.split("·")[0].trim() : "";
    var printerName = String(r[12] || "").trim() || parsedPrinter;
    var found = findOrderRowInBangTinhTienGas(btSheet, orderId);
    if (found.existingRow === -1) {
      upsertOrderInBangTinhTienGas(btSheet, {
        id: orderId,
        material: String(r[5] || "PLA"),
        weightGrams: Number(r[6] || 0),
        printerName: printerName,
        payoutWeekKey: getIsoWeekKeyGas(),
        payoutStatus: "unpaid"
      });
    } else if (printerName) {
      var curBtPrinter = String(btSheet.getRange(found.existingRow, 5).getValue() || "").trim();
      if (!curBtPrinter) btSheet.getRange(found.existingRow, 5).setValue(printerName);
      applyBangTinhTienOrderRowFormulasGas(btSheet, found.existingRow);
    }
  }
}

function getOrCreateSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  var isNew = false;

  if (!sheet) {
    sheet = ss.insertSheet(name);
    isNew = true;
  }

  if (name === "DonHang") {
    ensureDonHangHeadersGas(sheet, false);
    if (!sheet.getFilter() && sheet.getLastRow() >= 1) {
      sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 2), DON_HANG_HEADERS.length).createFilter();
    }
  } else if (name === "BienDongSoDu" && (isNew || sheet.getLastRow() === 0)) {
    var bankHeaders = ["Thời gian", "Nội dung CK", "Số tiền (VND)", "Mã tham chiếu", "Ngân hàng"];
    sheet.getRange(1, 1, 1, bankHeaders.length).setValues([bankHeaders]);
    sheet.setFrozenRows(1);
    sheet
      .getRange(1, 1, 1, bankHeaders.length)
      .setBackground("#0B1324")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold");

    if (!sheet.getFilter()) {
      sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 2), bankHeaders.length).createFilter();
    }
  } else if (name === "YeuCauHoTro" && (isNew || sheet.getLastRow() === 0)) {
    var supportHeaders = [
      "Thời gian",
      "Loại yêu cầu",
      "Họ tên",
      "Trường / Công ty",
      "SĐT Zalo / Email",
      "Tiêu đề / Đề tài",
      "Nội dung chi tiết",
      "Trạng thái"
    ];
    sheet.getRange(1, 1, 1, supportHeaders.length).setValues([supportHeaders]);
    sheet.setFrozenRows(1);
    sheet
      .getRange(1, 1, 1, supportHeaders.length)
      .setBackground("#0B1324")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold");

    if (!sheet.getFilter()) {
      sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 2), supportHeaders.length).createFilter();
    }

    var supportStatusRule = SpreadsheetApp.newDataValidation()
      .requireValueInList(["Mới tiếp nhận", "Đang tư vấn", "Đã báo giá", "Hoàn thành", "Đã đóng"], true)
      .build();
    sheet.getRange("H2:H500").setDataValidation(supportStatusRule);
  } else if (name === "DonIn3D") {
    ensureDonIn3DHeadersGas(sheet);
  } else if (name === "ChoDuyetIn3D") {
    ensureChoDuyetIn3DHeadersGas(sheet);
  } else if (name === "CongTacVienIn3D" && (isNew || sheet.getLastRow() === 0)) {
    var ctvHeaders = [
      "Mã CTV",
      "Họ tên CTV",
      "SĐT / Zalo",
      "Ngân hàng",
      "Mã Bank (VietQR)",
      "Số tài khoản",
      "Chủ tài khoản",
      "Ghi chú"
    ];
    sheet.getRange(1, 1, 1, ctvHeaders.length).setValues([ctvHeaders]);
    sheet.setFrozenRows(1);
    sheet
      .getRange(1, 1, 1, ctvHeaders.length)
      .setBackground("#0B1324")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold");
  } else if (name === "ThanhToanCTVIn3D") {
    ensureThanhToanCTVHeadersGas(sheet);
  } else if (name === "BangTinhTienCTV") {
    ensureBangTinhTienCTVGas(sheet);
  }

  return sheet;
}

var THANH_TOAN_CTV_HEADERS = [
  "Thời gian chuyển",
  "Tuần đối soát",
  "Mã CTV",
  "Tên CTV",
  "SĐT",
  "Ngân hàng & STK",
  "Số đơn & Mã đơn",
  "Tổng KL thực tế (g)",
  "Tiền nhựa (VND)",
  "Tiền Shop (VND)",
  "Cần chuyển CTV (VND)",
  "Admin đã chuyển",
  "Trạng thái"
];

function getWeekRangeLabelGas(weekKey) {
  var m = /^(\\d{4})-W(\\d{2})$/.exec(String(weekKey || "").trim());
  if (!m) return String(weekKey || "");
  var year = Number(m[1]);
  var week = Number(m[2]);
  var jan4 = new Date(year, 0, 4);
  var jan4Day = jan4.getDay() || 7;
  var monday = new Date(year, 0, 4 - (jan4Day - 1) + (week - 1) * 7);
  var sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);
  var p2 = function (n) { return (n < 10 ? "0" : "") + n; };
  return p2(monday.getDate()) + "/" + p2(monday.getMonth() + 1) + "-" + p2(sunday.getDate()) + "/" + p2(sunday.getMonth() + 1);
}

function ensureThanhToanCTVHeadersGas(sheet) {
  if (!sheet) return;
  var totalCols = THANH_TOAN_CTV_HEADERS.length;
  var maxCols = sheet.getMaxColumns ? sheet.getMaxColumns() : totalCols;
  if (maxCols < totalCols && sheet.insertColumnsAfter) {
    sheet.insertColumnsAfter(maxCols, totalCols - maxCols);
  }
  var isEmpty = sheet.getLastRow() === 0;
  var row1 = isEmpty ? [] : sheet.getRange(1, 1, 1, totalCols).getValues()[0];
  var needsUpdate = isEmpty;
  if (!needsUpdate) {
    for (var c = 0; c < totalCols; c++) {
      if (String(row1[c] || "").trim() !== THANH_TOAN_CTV_HEADERS[c]) {
        needsUpdate = true;
        break;
      }
    }
  }
  if (needsUpdate) {
    sheet.getRange(1, 1, 1, totalCols).setValues([THANH_TOAN_CTV_HEADERS]);
    sheet.setFrozenRows(1);
    sheet
      .getRange(1, 1, 1, totalCols)
      .setBackground("#0B1324")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold");
  }
  var ttLastRow = sheet.getLastRow();
  if (ttLastRow >= 2) {
    var colD = sheet.getRange(2, 4, ttLastRow - 1, 1).getValues();
    var colL = sheet.getRange(2, 12, ttLastRow - 1, 1).getValues();
    for (var ri = 0; ri < colD.length; ri++) {
      if (String(colD[ri][0] || "").trim()) {
        var lRange = sheet.getRange(2 + ri, 12);
        var lVal = colL[ri][0];
        if (lVal === "" || lVal === null || lVal === undefined) {
          lRange.setValue(false);
        } else {
          lRange.setValue(lVal === true || String(lVal).toUpperCase() === "TRUE");
        }
        lRange.insertCheckboxes();
      }
    }
  }
}

function capNhatThanhToanCTV7NgayGas(sendTelegramReminder) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var btSheet = ss.getSheetByName("BangTinhTienCTV") || getOrCreateSheet("BangTinhTienCTV");
  ensureBangTinhTienCTVGas(btSheet);
  var ttSheet = ss.getSheetByName("ThanhToanCTVIn3D") || getOrCreateSheet("ThanhToanCTVIn3D");
  ensureThanhToanCTVHeadersGas(ttSheet);
  var ctvSheet = ss.getSheetByName("CongTacVienIn3D") || getOrCreateSheet("CongTacVienIn3D");
  var donSheet = ss.getSheetByName("DonIn3D");

  // Map CTV directory by lower name
  var ctvByName = {};
  var ctvLast = ctvSheet.getLastRow();
  if (ctvLast >= 2) {
    var ctvRows = ctvSheet.getRange(2, 1, ctvLast - 1, 8).getValues();
    for (var ci = 0; ci < ctvRows.length; ci++) {
      var cName = String(ctvRows[ci][1] || "").trim();
      if (!cName) continue;
      ctvByName[cName.toLowerCase()] = {
        id: String(ctvRows[ci][0] || "").trim(),
        name: cName,
        phone: String(ctvRows[ci][2] || "").trim(),
        bankSummary:
          String(ctvRows[ci][3] || "").trim() +
          (ctvRows[ci][4] ? " (" + String(ctvRows[ci][4]).trim() + ")" : "") +
          " - " +
          String(ctvRows[ci][5] || "").trim() +
          (ctvRows[ci][6] ? " - " + String(ctvRows[ci][6]).trim() : "")
      };
    }
  }

  // Fallback order map from DonIn3D
  var donById = {};
  if (donSheet && donSheet.getLastRow() >= 2) {
    var dRows = donSheet.getRange(2, 1, donSheet.getLastRow() - 1, Math.min(donSheet.getMaxColumns(), 13)).getValues();
    for (var di = 0; di < dRows.length; di++) {
      var dId = String(dRows[di][1] || "").trim();
      if (!dId) continue;
      donById[dId] = {
        material: String(dRows[di][5] || "PLA"),
        weightGrams: Number(dRows[di][6] || 0),
        totalAmount: Number(dRows[di][8] || 0)
      };
    }
  }

  // Read live filament cost table A3:B7 & default % Shop C3
  var matCostMap = {};
  var costRows = btSheet.getRange(3, 1, 5, 2).getValues();
  for (var mi = 0; mi < costRows.length; mi++) {
    var mk = normalizeMaterialKeyGas(String(costRows[mi][0] || ""));
    if (isFinite(Number(costRows[mi][1])) && Number(costRows[mi][1]) > 0) {
      matCostMap[mk] = Number(costRows[mi][1]);
    }
  }
  var defaultShopPct = Number(btSheet.getRange(3, 3).getValue() || 25);
  var curWeek = getIsoWeekKeyGas();

  // Group unpaid confirmed orders in BangTinhTienCTV Table II (row 35+) by (weekKey :: ctvNameLower)
  var groups = {};
  var groupKeys = [];
  var btLast = Math.max(btSheet.getLastRow(), 35);
  var btRows = btSheet.getRange(35, 1, btLast - 34, 15).getValues();
  for (var bi = 0; bi < btRows.length; bi++) {
    var br = btRows[bi];
    var orderId = String(br[0] || "").trim();
    if (!orderId) continue;
    var confirmed = br[12] === true || String(br[12]).toUpperCase() === "TRUE";
    if (!confirmed) continue;
    var printerName = String(br[4] || "").trim();
    if (!printerName) continue;
    var paidStatus = String(br[14] || "").trim();
    if (paidStatus.indexOf("Đã chuyển") !== -1) continue;

    var weekKey = String(br[13] || "").trim() || curWeek;
    var dInfo = donById[orderId] || { material: "PLA", weightGrams: 0, totalAmount: 0 };
    var actualG = Number(br[5] || 0) > 0 ? Number(br[5]) : dInfo.weightGrams;
    var custTotal = typeof br[3] === "number" && br[3] > 0 ? Number(br[3]) : dInfo.totalAmount;
    var rawMatCell = String(br[2] || "").trim();
    var matKey =
      rawMatCell && rawMatCell.charAt(0) !== "="
        ? normalizeMaterialKeyGas(rawMatCell)
        : normalizeMaterialKeyGas(dInfo.material);
    var unitCost =
      typeof br[6] === "number" && br[6] > 0
        ? Number(br[6])
        : matCostMap[matKey] !== undefined
          ? matCostMap[matKey]
          : getDefaultMaterialCostPerGramGas(matKey);
    var matCost =
      typeof br[7] === "number" && br[7] >= 0
        ? Number(br[7])
        : Math.round(actualG * unitCost);
    var remaining = Math.max(0, custTotal - matCost);
    var shopPct =
      br[9] !== "" && br[9] !== null && br[9] !== undefined && isFinite(Number(br[9]))
        ? Number(br[9])
        : defaultShopPct;
    var shopFee =
      typeof br[10] === "number" && br[10] >= 0
        ? Number(br[10])
        : Math.round((remaining * shopPct) / 100);
    var ctvPayout =
      typeof br[11] === "number" && br[11] >= 0
        ? Number(br[11])
        : Math.max(0, remaining - shopFee) + matCost;

    var gKey = weekKey + "::" + printerName.toLowerCase();
    if (!groups[gKey]) {
      var ctvInfo = ctvByName[printerName.toLowerCase()] || null;
      groups[gKey] = {
        key: gKey,
        weekKey: weekKey,
        ctvId: ctvInfo ? ctvInfo.id : "",
        ctvName: ctvInfo ? ctvInfo.name : printerName,
        ctvPhone: ctvInfo ? ctvInfo.phone : "",
        bankSummary: ctvInfo ? ctvInfo.bankSummary : printerName,
        orderIds: [],
        totalActualWeight: 0,
        totalMaterialCost: 0,
        totalShopFee: 0,
        totalCtvPayout: 0
      };
      groupKeys.push(gKey);
    }
    groups[gKey].orderIds.push(orderId);
    groups[gKey].totalActualWeight = Number((groups[gKey].totalActualWeight + actualG).toFixed(2));
    groups[gKey].totalMaterialCost += matCost;
    groups[gKey].totalShopFee += shopFee;
    groups[gKey].totalCtvPayout += ctvPayout;
  }

  // Reconcile against existing rows in ThanhToanCTVIn3D
  var ttLast = ttSheet.getLastRow();
  var pendingRowByKey = {};
  var stalePendingRows = [];
  if (ttLast >= 2) {
    var existingTt = ttSheet.getRange(2, 1, ttLast - 1, THANH_TOAN_CTV_HEADERS.length).getValues();
    for (var ti = 0; ti < existingTt.length; ti++) {
      var trow = existingTt[ti];
      var tWeek = String(trow[1] || "").trim();
      var tCtv = String(trow[3] || "").trim();
      var tChecked = trow[11] === true || String(trow[11]).toUpperCase() === "TRUE";
      var tStatus = String(trow[12] || "").trim();
      if (!tChecked && tStatus.indexOf("Đã chuyển") === -1 && tWeek && tCtv) {
        var rKey = tWeek + "::" + tCtv.toLowerCase();
        if (groups[rKey] && pendingRowByKey[rKey] === undefined) {
          pendingRowByKey[rKey] = 2 + ti;
        } else {
          stalePendingRows.push(2 + ti);
        }
      }
    }
  }

  // Clean up duplicate/obsolete unpaid pending rows (bottom-up) without touching paid history
  for (var sr = stalePendingRows.length - 1; sr >= 0; sr--) {
    if (ttSheet.deleteRow) {
      ttSheet.deleteRow(stalePendingRows[sr]);
    } else {
      ttSheet.getRange(stalePendingRows[sr], 7, 1, 5).setValues([["0 đơn", 0, 0, 0, 0]]);
    }
  }

  // Upsert pending 7-day settlement rows
  var telegramLines = [];
  for (var gk = 0; gk < groupKeys.length; gk++) {
    var grp = groups[groupKeys[gk]];
    var periodLabel = "Kỳ " + getWeekRangeLabelGas(grp.weekKey) + " (Chờ CK)";
    var rowValues = [
      periodLabel,
      grp.weekKey,
      grp.ctvId,
      grp.ctvName,
      grp.ctvPhone,
      grp.bankSummary,
      grp.orderIds.length + " đơn: " + grp.orderIds.join(", "),
      grp.totalActualWeight,
      grp.totalMaterialCost,
      grp.totalShopFee,
      grp.totalCtvPayout,
      false,
      "Chờ chuyển"
    ];
    var targetRow = pendingRowByKey[grp.key];
    if (!targetRow) {
      targetRow = Math.max(2, ttSheet.getLastRow() + 1);
    }
    ttSheet.getRange(targetRow, 1, 1, rowValues.length).setValues([rowValues]);
    ttSheet.getRange(targetRow, 12).insertCheckboxes();
    if (ttSheet.getRange(targetRow, 8, 1, 1).setNumberFormat) {
      ttSheet.getRange(targetRow, 8, 1, 1).setNumberFormat("#,##0.##");
      ttSheet.getRange(targetRow, 9, 1, 3).setNumberFormat("#,##0");
    }
    telegramLines.push(
      "• <b>" + escHtml(grp.ctvName) + "</b> (" + escHtml(grp.weekKey) + "): " +
      grp.orderIds.length + " đơn · <b>" + grp.totalCtvPayout.toLocaleString("vi-VN") + "đ</b>"
    );
  }

  if (sendTelegramReminder && telegramLines.length > 0) {
    sendTelegramNotice(
      "📅 <b>CHỐT TỔNG CTV IN 3D ĐỊNH KỲ 7 NGÀY</b>\\n" +
      telegramLines.join("\\n") +
      "\\n👉 Vào sheet <b>ThanhToanCTVIn3D</b> kiểm tra &amp; tích ô <b>Admin đã chuyển</b> sau khi CK."
    );
  }

  return { ok: true, pendingCount: groupKeys.length };
}

function tuDongChotThanhToanCTV7Ngay() {
  return capNhatThanhToanCTV7NgayGas(true);
}

function isReal3DOrderRowGas(row) {
  if (!row) return false;
  for (var c = 0; c <= 3; c++) {
    if (String(row[c] === null || row[c] === undefined ? "" : row[c]).trim() !== "") {
      return true;
    }
  }
  return false;
}

function compactDonIn3DSheetGas(sheet) {
  ensureDonIn3DHeadersGas(sheet);
  var totalCols = DON_IN_3D_HEADERS.length;
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    applyDonIn3DLinksAndFormulasGas(sheet, 0);
    return 1;
  }

  var numRows = lastRow - 1;
  var vals = sheet.getRange(2, 1, numRows, totalCols).getValues();
  var realRows = [];
  for (var i = 0; i < vals.length; i++) {
    if (isReal3DOrderRowGas(vals[i])) {
      var rowCopy = vals[i].slice(0, totalCols);
      while (rowCopy.length < totalCols) rowCopy.push("");
      rowCopy[10] = rowCopy[10] === true || String(rowCopy[10]).toUpperCase() === "TRUE";
      realRows.push(rowCopy);
    }
  }

  var hasBlankRow = realRows.length !== vals.length;
  if (!hasBlankRow) {
    applyDonIn3DLinksAndFormulasGas(sheet, realRows.length);
    return 1 + realRows.length;
  }

  var activeFilter = sheet.getFilter();
  if (activeFilter) {
    activeFilter.remove();
  }

  var clearRange = sheet.getRange(2, 1, numRows, totalCols);
  clearRange.clearContent();
  clearRange.clearDataValidations();

  if (realRows.length > 0) {
    sheet.getRange(2, 1, realRows.length, totalCols).setValues(realRows);
  }
  applyDonIn3DLinksAndFormulasGas(sheet, realRows.length);

  SpreadsheetApp.flush();
  return 1 + realRows.length;
}

function writePrint3DRowGas(sheet, rowValues) {
  var totalCols = DON_IN_3D_HEADERS.length;
  var lastRealRow = compactDonIn3DSheetGas(sheet);
  var targetRow = lastRealRow + 1;
  var normalized = rowValues.slice(0, totalCols);
  while (normalized.length < totalCols) normalized.push("");
  normalized[10] = Boolean(normalized[10]);

  sheet.getRange(targetRow, 1, 1, totalCols).setValues([normalized]);
  applyDonIn3DLinksAndFormulasGas(sheet, targetRow - 1);
  SpreadsheetApp.flush();
  return targetRow;
}

function suaLoiBangDonIn3D() {
  var p3dSheet = getOrCreateSheet("DonIn3D");
  var lastRealRow = compactDonIn3DSheetGas(p3dSheet);
  var btSheet = getOrCreateSheet("BangTinhTienCTV");
  ensureBangTinhTienCTVGas(btSheet, true);
  syncAllOrdersToBangTinhTienGas(p3dSheet, btSheet);
  getOrCreateSheet("ThanhToanCTVIn3D");
  capNhatThanhToanCTV7NgayGas(false);
  var count = Math.max(0, lastRealRow - 1);
  Logger.log("DonIn3D compacted cleanly: " + count + " order(s), lastRealRow=" + lastRealRow);
  return { ok: true, ordersCount: count, lastRealRow: lastRealRow };
}

function caiDatTriggerTuDongGuiMailKhiSuaSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var triggers = ScriptApp.getProjectTriggers();
  var hasEditTrigger = false;
  var hasTgTrigger = false;
  var hasWeeklyCtvTrigger = false;

  for (var i = 0; i < triggers.length; i++) {
    var fn = triggers[i].getHandlerFunction();
    if (fn === "xuLyKhiDoiTrangThaiSheet") hasEditTrigger = true;
    if (fn === "dongBoTelegramTuDong") hasTgTrigger = true;
    if (fn === "tuDongChotThanhToanCTV7Ngay") hasWeeklyCtvTrigger = true;
  }

  if (!hasEditTrigger) {
    ScriptApp.newTrigger("xuLyKhiDoiTrangThaiSheet")
      .forSpreadsheet(ss)
      .onEdit()
      .create();
  }
  if (!hasTgTrigger) {
    ScriptApp.newTrigger("dongBoTelegramTuDong")
      .timeBased()
      .everyMinutes(1)
      .create();
  }
  if (!hasWeeklyCtvTrigger) {
    ScriptApp.newTrigger("tuDongChotThanhToanCTV7Ngay")
      .timeBased()
      .everyWeeks(1)
      .onWeekDay(ScriptApp.WeekDay.SUNDAY)
      .atHour(20)
      .create();
  }
}

function khoiTaoBangLocDon() {
  var donHang = getOrCreateSheet("DonHang");
  ensureDonHangHeadersGas(donHang, true);
  var bienDong = getOrCreateSheet("BienDongSoDu");
  getOrCreateSheet("YeuCauHoTro");
  getOrCreateSheet("CongTacVienIn3D");
  getOrCreateSheet("ChoDuyetIn3D");
  var btSheet = getOrCreateSheet("BangTinhTienCTV");
  ensureBangTinhTienCTVGas(btSheet, true);
  var donIn3d = getOrCreateSheet("DonIn3D");
  compactDonIn3DSheetGas(donIn3d);
  syncAllOrdersToBangTinhTienGas(donIn3d, btSheet);
  getOrCreateSheet("ThanhToanCTVIn3D");
  capNhatThanhToanCTV7NgayGas(false);

  if (donHang.getLastRow() >= 1) {
    var dhFilter = donHang.getFilter ? donHang.getFilter() : null;
    if (dhFilter && dhFilter.getRange && dhFilter.getRange().getNumColumns() < DON_HANG_HEADERS.length) {
      dhFilter.remove();
      dhFilter = null;
    }
    if (!dhFilter) {
      donHang.getRange(1, 1, Math.max(donHang.getLastRow(), 2), DON_HANG_HEADERS.length).createFilter();
    }
    donHang.autoResizeColumns(1, DON_HANG_HEADERS.length);
  }

  if (bienDong.getLastRow() >= 1) {
    bienDong.setFrozenRows(1);
    bienDong
      .getRange(1, 1, 1, 5)
      .setBackground("#0B1324")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold");
    if (!bienDong.getFilter()) {
      bienDong.getRange(1, 1, Math.max(bienDong.getLastRow(), 2), 5).createFilter();
    }
    bienDong.autoResizeColumns(1, 5);
  }

  applyAdminSheetProtectionsGas();
  var pubSyncRes = syncDonIn3DToPublicCtvSheetGas();
  var pubUrl = (pubSyncRes && pubSyncRes.url) || getPublicCtvDonIn3DUrlGas();
  if (pubUrl && donIn3d.getRange(1, 11).setNote) {
    try {
      donIn3d.getRange(1, 11).setNote("Link Sheet Công Khai cho CTV xem & chọn đơn: " + pubUrl);
    } catch (noteErr) {}
  }

  caiDatTriggerTuDongGuiMailKhiSuaSheet();

  var quota = MailApp.getRemainingDailyQuota();
  Logger.log("Đã khởi tạo 2 chiều Telegram + Sheet + Gmail! Hạn mức Gmail còn: " + quota);
  if (pubUrl) {
    Logger.log("LINK SHEET DonIn3D CÔNG KHAI CHO CTV XEM & CHỌN ĐƠN: " + pubUrl);
    sendTelegramNotice(
      "🔐 <b>ĐÃ KHÓA SHEET ADMIN &amp; MỞ BẢNG DonIn3D CÔNG KHAI CHO CTV</b>\\n" +
      "• Sheet chính (<code>DonHang</code>, <code>BangTinhTienCTV</code>, <code>BienDongSoDu</code>...) đã đặt RIÊNG TƯ chỉ Admin xem &amp; sửa.\\n" +
      "• Đơn In 3D khách chuyển khoản / cọc 30% sẽ dừng ở <code>DonHang</code> chờ Admin duyệt rồi mới nhảy sang <code>DonIn3D</code>.\\n" +
      "• Link Sheet <code>DonIn3D</code> công khai cho CTV xem &amp; chọn đơn (khóa A:J, mở K:M):\\n" + pubUrl
    );
  }
  return "OK (Gmail quota: " + quota + (pubUrl ? " | CTV Sheet: " + pubUrl : "") + ")";
}

function rowValuesToOrderObj(rowVals) {
  var orderId = String(rowVals[1] || "").trim();
  var customerName = String(rowVals[2] || "").trim();
  var customerPhone = String(rowVals[3] || "").trim();
  var shippingAddress = String(rowVals[4] || "").trim();
  var itemsSummary = String(rowVals[5] || "").trim();
  var totalAmount = Number(rowVals[6] || 0);
  var payCol = String(rowVals[7] || "");
  var transferCode = String(rowVals[8] || "").trim();
  var statusVi = String(rowVals[9] || "").trim();
  var customerEmail = String(rowVals[10] || "").trim();

  var rawDep = rowVals.length > 11 ? rowVals[11] : undefined;
  var hasDepNum = rawDep !== "" && rawDep !== null && rawDep !== undefined && isFinite(Number(rawDep));
  var isFullQrPaid = payCol.indexOf("Đã nhận tiền") !== -1;
  var isPartialDep = payCol.indexOf("Đã cọc") !== -1;
  var isQrMethod = payCol.indexOf("QR") !== -1 && !isPartialDep;
  var depositAmount = hasDepNum
    ? Math.max(0, Number(rawDep))
    : isFullQrPaid
      ? totalAmount
      : isPartialDep
        ? Math.round(totalAmount * 0.3)
        : 0;
  var rawRem = rowVals.length > 12 ? rowVals[12] : undefined;
  var remainingAmount =
    rawRem !== "" && rawRem !== null && rawRem !== undefined && isFinite(Number(rawRem))
      ? Math.max(0, Number(rawRem))
      : Math.max(0, totalAmount - depositAmount);

  var paymentMethod = isQrMethod ? "transfer" : "cod";
  var paymentStatus = isFullQrPaid || isPartialDep || depositAmount > 0
    ? "qr_verified"
    : isQrMethod
      ? "qr_reported"
      : "cod_unpaid";

  var stKey = REVERSE_STATUS_MAP[statusVi] || "pending";
  return {
    id: orderId,
    customerName: customerName,
    customerPhone: customerPhone,
    customerEmail: customerEmail,
    shippingAddress: shippingAddress,
    totalAmount: totalAmount,
    depositAmount: depositAmount,
    remainingAmount: remainingAmount,
    paymentMethod: paymentMethod,
    paymentStatus: paymentStatus,
    transferCode: transferCode,
    status: stKey,
    items: itemsSummary
      ? [{ code: "ĐƠN HÀNG", name: itemsSummary, quantity: 1, unitPrice: totalAmount }]
      : []
  };
}

function sendPrint3DEmail(rowVals, statusMode) {
  var toEmail = String(rowVals[4] || "").trim();
  if (!toEmail || toEmail.indexOf("@") === -1) return;

  var p3dId = String(rowVals[1] || "").trim();
  var custName = String(rowVals[2] || "Quý khách").trim();
  var matInfo = String(rowVals[5] || "PLA+").trim();
  var weightG = Number(rowVals[6] || 0);
  var qty = Number(rowVals[7] || 1);
  var totalVnd = Number(rowVals[8] || 0);
  var noteInfo = String(rowVals[11] || "").trim();

  var isDone = statusMode === "done";
  var subject = isDone
    ? "[TeeBi & Robot] Đơn In 3D #" + p3dId + " đã in xong!"
    : "[TeeBi & Robot] Đơn In 3D #" + p3dId + " đã có kỹ thuật viên nhận & bắt đầu in";

  var intro = isDone
    ? "Đơn In 3D <b>#" + escHtml(p3dId) + "</b> của bạn đã hoàn tất in ấn, gỡ support và đang chuẩn bị bàn giao."
    : "Đơn In 3D <b>#" + escHtml(p3dId) + "</b> của bạn đã có người nhận file và <b>bắt đầu đưa vào máy in</b>!";

  var htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;background:#ffffff;">' +
      '<div style="background:#0B1324;color:#ffffff;padding:16px 20px;">' +
        '<div style="font-size:11px;color:#38bdf8;font-weight:bold;text-transform:uppercase;">TeeBi & Robot — Xưởng In 3D</div>' +
        '<div style="font-size:17px;font-weight:bold;margin-top:4px;">Cập nhật Đơn In 3D #' + escHtml(p3dId) + '</div>' +
      '</div>' +
      '<div style="padding:18px 20px;color:#1e293b;font-size:14px;line-height:1.6;">' +
        '<p style="margin-top:0;">Xin chào <b>' + escHtml(custName) + '</b>,</p>' +
        '<p>' + intro + '</p>' +
        '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 14px;font-size:13px;">' +
          '<div><b>Vật liệu &amp; Quy cách:</b> ' + escHtml(matInfo) + '</div>' +
          '<div><b>Số lượng:</b> ' + qty + (weightG > 0 ? ' · <b>Khối lượng:</b> ' + weightG + 'g' : '') + '</div>' +
          '<div><b>Thành tiền:</b> ' + (totalVnd > 0 ? totalVnd.toLocaleString("vi-VN") + ' đ' : 'Theo báo giá') + '</div>' +
          (noteInfo ? '<div><b>Ghi chú xưởng in:</b> ' + escHtml(noteInfo) + '</div>' : '') +
        '</div>' +
        '<p style="margin-top:16px;font-size:12px;color:#475569;">Cần hỗ trợ thêm vui lòng nhắn Zalo Shop: <b>0789044703</b>.</p>' +
      '</div>' +
    '</div>';

  try {
    MailApp.sendEmail({
      to: toEmail,
      subject: subject,
      htmlBody: htmlBody,
      name: "TeeBi & Robot — Xưởng In 3D"
    });
  } catch (err) {
    Logger.log("sendPrint3DEmail error: " + err);
  }
}

function xuLyKhiDoiTrangThaiSheet(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  if (!sheet) return;
  var sheetName = sheet.getName();
  var row = e.range.getRow();
  var col = e.range.getColumn();
  if (row < 2) return;

  if (sheetName === "CongTacVienIn3D") {
    if (col === 2) {
      var ctvNameVal = String(sheet.getRange(row, 2).getValue() || "").trim();
      var curCtvId = String(sheet.getRange(row, 1).getValue() || "").trim();
      if (ctvNameVal && !curCtvId) {
        sheet.getRange(row, 1).setValue("CTV-" + String(Date.now()).slice(-6));
      }
    }
    try { syncCtvNamesToPublicSheetGas(); } catch (ctvSyncErr) {}
    return;
  }

  if (sheetName === "ThanhToanCTVIn3D") {
    ensureThanhToanCTVHeadersGas(sheet);
    if (row < 2 || col !== 12) return;
    var checkedPaid = e.range.getValue() === true || String(e.range.getValue()).toUpperCase() === "TRUE";
    if (!checkedPaid) return;

    var curStatusTt = String(sheet.getRange(row, 13).getValue() || "").trim();
    if (curStatusTt.indexOf("Đã chuyển") !== -1) return;

    var rowValsTt = sheet.getRange(row, 1, 1, THANH_TOAN_CTV_HEADERS.length).getValues()[0];
    var weekKeyTt = String(rowValsTt[1] || "").trim();
    var ctvNameTt = String(rowValsTt[3] || "").trim();
    if (!ctvNameTt) return;
    var ctvPhoneTt = String(rowValsTt[4] || "").trim();
    var bankInfoTt = String(rowValsTt[5] || "").trim();
    var orderSummaryTt = String(rowValsTt[6] || "").trim();
    var totalWeightTt = Number(rowValsTt[7] || 0);
    var totalMatTt = Number(rowValsTt[8] || 0);
    var totalShopTt = Number(rowValsTt[9] || 0);
    var totalCtvTt = Number(rowValsTt[10] || 0);

    var dateShortTt = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy");
    var timeFullTt = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");

    var btMarkSheet = getOrCreateSheet("BangTinhTienCTV");
    var btLastMark = Math.max(btMarkSheet.getLastRow(), 35);
    var btMarkData = btMarkSheet.getRange(35, 1, btLastMark - 34, 15).getValues();
    var markedOrderIds = [];
    for (var mi2 = 0; mi2 < btMarkData.length; mi2++) {
      var mOrdId = String(btMarkData[mi2][0] || "").trim();
      var mPrinter = String(btMarkData[mi2][4] || "").trim();
      var mConf = btMarkData[mi2][12] === true || String(btMarkData[mi2][12]).toUpperCase() === "TRUE";
      var mWeek = String(btMarkData[mi2][13] || "").trim();
      var mPaid = String(btMarkData[mi2][14] || "").trim();
      if (
        mOrdId &&
        mPrinter.toLowerCase() === ctvNameTt.toLowerCase() &&
        mConf &&
        mPaid.indexOf("Đã chuyển") === -1 &&
        (!weekKeyTt || !mWeek || mWeek === weekKeyTt)
      ) {
        btMarkSheet.getRange(35 + mi2, 15).setValue("Đã chuyển (" + dateShortTt + ")");
        markedOrderIds.push(mOrdId);
      }
    }

    sheet.getRange(row, 1).setValue(timeFullTt);
    sheet.getRange(row, 12).setValue(true);
    sheet.getRange(row, 12).insertCheckboxes();
    sheet.getRange(row, 13).setValue("Đã chuyển (" + dateShortTt + ")");
    if (sheet.getRange(row, 1, 1, THANH_TOAN_CTV_HEADERS.length).setBackground) {
      sheet.getRange(row, 1, 1, THANH_TOAN_CTV_HEADERS.length).setBackground("#ECFDF5");
    }

    sendTelegramNotice(
      "💸 <b>[ThanhToanCTVIn3D] ADMIN ĐÃ CHUYỂN TIỀN CTV IN 3D</b>\\n" +
      "📅 Tuần: <code>" + escHtml(weekKeyTt) + "</code>\\n" +
      "🧑‍🔧 Người in: <b>" + escHtml(ctvNameTt) + "</b>" + (ctvPhoneTt ? " (" + escHtml(ctvPhoneTt) + ")" : "") + "\\n" +
      "🏦 STK: " + escHtml(bankInfoTt) + "\\n" +
      "📦 Đơn: <code>" + escHtml(markedOrderIds.length > 0 ? markedOrderIds.join(", ") : orderSummaryTt) + "</code> (" + totalWeightTt + "g)\\n" +
      "🧵 Tiền nhựa: <b>" + totalMatTt.toLocaleString("vi-VN") + "đ</b> · 🏪 Tiền Shop: <b>" + totalShopTt.toLocaleString("vi-VN") + "đ</b>\\n" +
      "✅ <b>Đã chuyển CTV: " + totalCtvTt.toLocaleString("vi-VN") + "đ</b>"
    );
    return;
  }

  if (sheetName === "BangTinhTienCTV") {
    ensureBangTinhTienCTVGas(sheet);
    var defaultShopPctBt = Number(sheet.getRange(3, 3).getValue() || 25);

    // Zone 3 Table II (row >= 35)
    if (row >= 35) {
      var btOrderId = String(sheet.getRange(row, 1).getValue() || "").trim();
      if (!btOrderId) return;

      if (col === 1) {
        applyBangTinhTienOrderRowFormulasGas(sheet, row);
        sheet.getRange(row, 13).insertCheckboxes();
        var donS = getOrCreateSheet("DonIn3D");
        var donRows = donS.getDataRange().getValues();
        for (var dr = 1; dr < donRows.length; dr++) {
          if (String(donRows[dr][1] || "").trim() === btOrderId) {
            if (!String(sheet.getRange(row, 5).getValue() || "").trim() && String(donRows[dr][12] || "").trim()) {
              sheet.getRange(row, 5).setValue(String(donRows[dr][12]).trim());
            }
            if (!(Number(sheet.getRange(row, 6).getValue() || 0) > 0) && Number(donRows[dr][6] || 0) > 0) {
              sheet.getRange(row, 6).setValue(Number(donRows[dr][6]));
            }
            break;
          }
        }
        var curPctA = sheet.getRange(row, 10).getValue();
        if (curPctA === "" || curPctA === null || curPctA === undefined) {
          sheet.getRange(row, 10).setValue(defaultShopPctBt);
        }
        if (!String(sheet.getRange(row, 14).getValue() || "").trim()) {
          sheet.getRange(row, 14).setValue(getIsoWeekKeyGas());
        }
        if (!String(sheet.getRange(row, 15).getValue() || "").trim()) {
          sheet.getRange(row, 15).setValue("Chưa chuyển");
        }
        return;
      }

      if (col === 5) {
        var newBtPrinter = String(sheet.getRange(row, 5).getValue() || "").trim();
        var p3dSync = getOrCreateSheet("DonIn3D");
        ensureDonIn3DHeadersGas(p3dSync);
        var p3dSyncRows = p3dSync.getDataRange().getValues();
        for (var sr = 1; sr < p3dSyncRows.length; sr++) {
          if (String(p3dSyncRows[sr][1] || "").trim() === btOrderId) {
            p3dSync.getRange(sr + 1, 13).setValue(newBtPrinter);
            if (newBtPrinter) {
              p3dSync.getRange(sr + 1, 11).setValue(true);
              p3dSync.getRange(sr + 1, 11).insertCheckboxes();
            }
            break;
          }
        }
        applyBangTinhTienOrderRowFormulasGas(sheet, row);
        capNhatThanhToanCTV7NgayGas(false);
        return;
      }

      if (col === 6 || col === 10) {
        var curPctEdit = sheet.getRange(row, 10).getValue();
        if (curPctEdit === "" || curPctEdit === null || curPctEdit === undefined) {
          sheet.getRange(row, 10).setValue(defaultShopPctBt);
        }
        applyBangTinhTienOrderRowFormulasGas(sheet, row);
        SpreadsheetApp.flush();
        capNhatThanhToanCTV7NgayGas(false);
        return;
      }

      if (col === 13) {
        var isConfBt = sheet.getRange(row, 13).getValue() === true || String(sheet.getRange(row, 13).getValue()).toUpperCase() === "TRUE";
        if (!isConfBt) {
          capNhatThanhToanCTV7NgayGas(false);
          return;
        }
        if (!(Number(sheet.getRange(row, 6).getValue() || 0) > 0)) {
          var p3dConfS = getOrCreateSheet("DonIn3D");
          var p3dConfRows = p3dConfS.getDataRange().getValues();
          for (var cr = 1; cr < p3dConfRows.length; cr++) {
            if (String(p3dConfRows[cr][1] || "").trim() === btOrderId && Number(p3dConfRows[cr][6] || 0) > 0) {
              sheet.getRange(row, 6).setValue(Number(p3dConfRows[cr][6]));
              break;
            }
          }
        }
        var curPctM = sheet.getRange(row, 10).getValue();
        if (curPctM === "" || curPctM === null || curPctM === undefined) {
          sheet.getRange(row, 10).setValue(defaultShopPctBt);
        }
        if (!String(sheet.getRange(row, 14).getValue() || "").trim()) {
          sheet.getRange(row, 14).setValue(getIsoWeekKeyGas());
        }
        if (!String(sheet.getRange(row, 15).getValue() || "").trim()) {
          sheet.getRange(row, 15).setValue("Chưa chuyển");
        }
        applyBangTinhTienOrderRowFormulasGas(sheet, row);
        SpreadsheetApp.flush();
        capNhatThanhToanCTV7NgayGas(false);
        var freshBt = sheet.getRange(row, 1, 1, 15).getValues()[0];
        sendTelegramNotice(
          "✅ <b>[BangTinhTienCTV] ADMIN XÁC NHẬN ĐƠN #" + escHtml(btOrderId) + "</b>\\n" +
          "🧑‍🔧 Người in: <b>" + escHtml(String(freshBt[4] || "Chưa chọn")) + "</b> · Nhựa: <b>" + escHtml(String(freshBt[2] || "PLA")) + "</b>\\n" +
          "⚖️ KL thực tế: <b>" + Number(freshBt[5] || 0) + "g</b> · Tiền nhựa: <b>" + Number(freshBt[7] || 0).toLocaleString("vi-VN") + "đ</b>\\n" +
          "🏪 Tiền Shop (" + Number(freshBt[9] || defaultShopPctBt) + "%): <b>" + Number(freshBt[10] || 0).toLocaleString("vi-VN") + "đ</b> · 💸 Chuyển CTV: <b>" + Number(freshBt[11] || 0).toLocaleString("vi-VN") + "đ</b>\\n" +
          "📅 Tuần: <code>" + escHtml(String(freshBt[13] || "")) + "</code>"
        );
      }
    }
    return;
  }

  if (sheetName === "DonIn3D") {
    ensureDonIn3DHeadersGas(sheet);
    var p3dVals = sheet.getRange(row, 1, 1, DON_IN_3D_HEADERS.length).getValues()[0];
    if (!String(p3dVals[1] || "").trim()) return;

    // 1. Chọn Người in (Cột M = 13) -> tự tick Đã nhận in, cập nhật ghi chú & đồng bộ sang BangTinhTienCTV
    if (col === 13) {
      var selectedPrinter = String(p3dVals[12] || "").trim();
      var btSheetM = getOrCreateSheet("BangTinhTienCTV");
      upsertOrderInBangTinhTienGas(btSheetM, {
        id: String(p3dVals[1] || "").trim(),
        material: String(p3dVals[5] || "PLA"),
        weightGrams: Number(p3dVals[6] || 0),
        printerName: selectedPrinter
      });

      if (selectedPrinter) {
        sheet.getRange(row, 11).setValue(true);
        sheet.getRange(row, 11).insertCheckboxes();

        var curNoteM = String(p3dVals[11] || "");
        var tagParts = [];
        var segs = curNoteM.split("|");
        for (var sg = 0; sg < segs.length; sg++) {
          var sTrim = segs[sg].trim();
          if (
            sTrim.indexOf("Hạn giao:") === 0 ||
            sTrim.indexOf("Ship:") === 0 ||
            sTrim.indexOf("TT:") === 0 ||
            sTrim.indexOf("Files:") === 0
          ) {
            tagParts.push(sTrim);
          }
        }
        var statusTail = curNoteM.indexOf("In xong") !== -1 ? "In xong" : "Đang in";
        var nextNoteM = (tagParts.length > 0 ? tagParts.join(" | ") + " | " : "") + selectedPrinter + " · " + statusTail;
        sheet.getRange(row, 12).setValue(nextNoteM);

        p3dVals[10] = true;
        p3dVals[11] = nextNoteM;
        sendPrint3DEmail(p3dVals, "printing");
        sendTelegramNotice(
          "🧑‍🔧 <b>[Google Sheet]</b> Đơn In 3D <b>#" + escHtml(String(p3dVals[1])) + "</b> đã giao cho <b>" + escHtml(selectedPrinter) + "</b> (đã liên kết BangTinhTienCTV)!"
        );
      }
      try { syncDonIn3DToPublicCtvSheetGas(); } catch (syncM3Err) {}
      return;
    }

    // 2. Tích Đã nhận in (Cột K = 11)
    if (col !== 11) return;
    var isClaimed = p3dVals[10] === true || String(p3dVals[10]).toUpperCase() === "TRUE";
    if (!isClaimed) {
      try { syncDonIn3DToPublicCtvSheetGas(); } catch (syncUnErr) {}
      return;
    }

    var curNote = String(p3dVals[11] || "");
    if (!curNote || curNote === "Chờ in") {
      sheet.getRange(row, 12).setValue("Đang in");
      p3dVals[11] = "Đang in";
    } else if (/Chờ in$/.test(curNote)) {
      var updatedCurNote = curNote.replace(/Chờ in$/, "Đang in");
      sheet.getRange(row, 12).setValue(updatedCurNote);
      p3dVals[11] = updatedCurNote;
    }
    sendPrint3DEmail(p3dVals, "printing");
    sendTelegramNotice(
      "🖨️ <b>[Google Sheet]</b> Đơn In 3D <b>#" +
      escHtml(String(p3dVals[1])) +
      "</b> (" +
      escHtml(String(p3dVals[2])) +
      ") đã có người tích nhận &amp; <b>bắt đầu in</b>" +
      (p3dVals[4] ? " — đã gửi Gmail cho khách." : ".")
    );
    try { syncDonIn3DToPublicCtvSheetGas(); } catch (syncK3Err) {}
    return;
  }

  if (sheetName !== "DonHang") return;
  if (col !== 7 && col !== 8 && col !== 10 && col !== 12) return;

  ensureDonHangHeadersGas(sheet, false);
  var rowVals = sheet.getRange(row, 1, 1, DON_HANG_HEADERS.length).getValues()[0];
  var orderObj = rowValuesToOrderObj(rowVals);
  if (!orderObj.id) return;
  var is3dOrder = orderObj.id.indexOf("3D-") === 0;
  var totalVal = Number(rowVals[6] || 0);

  if (col === 7) {
    applyDonHangRowFormulaGas(sheet, row);
    return;
  }

  if (col === 8) {
    var newPay = String(rowVals[7] || "").trim();
    if (newPay === "Đã nhận tiền QR") {
      if (totalVal > 0 && Number(rowVals[11] || 0) < totalVal) {
        sheet.getRange(row, 12).setValue(totalVal);
        rowVals[11] = totalVal;
      }
      if (String(rowVals[9] || "").trim() === "Chờ duyệt") {
        sheet.getRange(row, 10).setValue("Đang chuẩn bị");
        rowVals[9] = "Đang chuẩn bị";
      }
      applyDonHangRowFormulaGas(sheet, row);
      orderObj = rowValuesToOrderObj(rowVals);
      orderObj.paymentStatus = "qr_verified";
      sendBuyerOrderEmail(orderObj, "payment_confirmed");
      if (is3dOrder) {
        promotePendingPrint3DOrderGas(orderObj.id, {
          payCol: newPay,
          totalAmount: totalVal,
          depositAmount: Number(rowVals[11] || 0),
          transferCode: orderObj.transferCode
        });
      }
      sendTelegramNotice(
        "✅ <b>[Google Sheet]</b> Đơn <b>#" +
        escHtml(orderObj.id) +
        "</b> (" +
        escHtml(orderObj.customerName) +
        ") đã được duyệt <b>Đã nhận tiền QR</b> (Cọc/TT: <b>" + Number(rowVals[11] || 0).toLocaleString("vi-VN") + "đ</b>)" +
        (orderObj.customerEmail ? " &amp; đã gửi Gmail cho khách." : ".")
      );
    } else if (newPay === "Đã cọc 30% QR") {
      if (!(Number(rowVals[11] || 0) > 0) && totalVal > 0) {
        var dep30Val = Math.round(totalVal * 0.3);
        sheet.getRange(row, 12).setValue(dep30Val);
        rowVals[11] = dep30Val;
      }
      if (String(rowVals[9] || "").trim() === "Chờ duyệt") {
        sheet.getRange(row, 10).setValue("Đang chuẩn bị");
        rowVals[9] = "Đang chuẩn bị";
      }
      applyDonHangRowFormulaGas(sheet, row);
      var depAmtH = Number(rowVals[11] || 0);
      var remAmtH = Math.max(0, totalVal - depAmtH);
      orderObj = rowValuesToOrderObj(rowVals);
      orderObj.paymentStatus = "qr_verified";
      sendBuyerOrderEmail(orderObj, "status_update");
      if (is3dOrder) {
        promotePendingPrint3DOrderGas(orderObj.id, {
          payCol: newPay,
          totalAmount: totalVal,
          depositAmount: depAmtH,
          transferCode: orderObj.transferCode
        });
      }
      sendTelegramNotice(
        "💰 <b>[Google Sheet]</b> Đơn <b>#" +
        escHtml(orderObj.id) +
        "</b> (" +
        escHtml(orderObj.customerName) +
        ") đã nhận cọc <b>" + depAmtH.toLocaleString("vi-VN") + "đ</b> · 📮 Thu COD còn thiếu: <b>" + remAmtH.toLocaleString("vi-VN") + "đ</b>."
      );
    } else {
      applyDonHangRowFormulaGas(sheet, row);
    }
    return;
  }

  if (col === 12) {
    var depEdited = Math.max(0, Number(rowVals[11] || 0));
    applyDonHangRowFormulaGas(sheet, row);
    if (depEdited > 0) {
      var nextPayCol = totalVal > 0 && depEdited >= totalVal ? "Đã nhận tiền QR" : "Đã cọc 30% QR";
      sheet.getRange(row, 8).setValue(nextPayCol);
      rowVals[7] = nextPayCol;
      if (String(rowVals[9] || "").trim() === "Chờ duyệt") {
        sheet.getRange(row, 10).setValue("Đang chuẩn bị");
        rowVals[9] = "Đang chuẩn bị";
      }
      orderObj = rowValuesToOrderObj(rowVals);
      if (nextPayCol === "Đã nhận tiền QR") {
        sendBuyerOrderEmail(orderObj, "payment_confirmed");
      } else {
        sendBuyerOrderEmail(orderObj, "status_update");
      }
      if (is3dOrder) {
        promotePendingPrint3DOrderGas(orderObj.id, {
          payCol: nextPayCol,
          totalAmount: totalVal,
          depositAmount: depEdited,
          transferCode: orderObj.transferCode
        });
      }
      var remEdited = Math.max(0, totalVal - depEdited);
      sendTelegramNotice(
        "💵 <b>[Google Sheet]</b> Đơn <b>#" +
        escHtml(orderObj.id) +
        "</b> đã cập nhật tiền cọc: <b>" + depEdited.toLocaleString("vi-VN") + "đ</b> · Thu COD còn thiếu: <b>" + remEdited.toLocaleString("vi-VN") + "đ</b>."
      );
    }
    return;
  }

  if (col === 10) {
    if (orderObj.status === "pending") return;
    var activePromote =
      is3dOrder &&
      (orderObj.status === "preparing" ||
        orderObj.status === "packed" ||
        orderObj.status === "dispatched" ||
        orderObj.status === "shipping" ||
        orderObj.status === "completed");
    if (activePromote) {
      promotePendingPrint3DOrderGas(orderObj.id, {
        payCol: String(rowVals[7] || ""),
        totalAmount: totalVal,
        depositAmount: Number(rowVals[11] || 0),
        transferCode: orderObj.transferCode
      });
    }
    var statusVi = ORDER_STATUS_MAP[orderObj.status] || String(rowVals[9] || "");
    sendBuyerOrderEmail(orderObj, "status_update");
    sendTelegramNotice(
      "📌 <b>[Google Sheet]</b> Đơn <b>#" +
      escHtml(orderObj.id) +
      "</b> (" +
      escHtml(orderObj.customerName) +
      ") đổi sang: <b>" +
      escHtml(statusVi) +
      "</b>" +
      (orderObj.customerEmail ? " (Đã gửi Gmail khách)" : "")
    );
  }
}

function buildTelegramKeyboardForOrder(orderObj) {
  var isPendingCod3d =
    String(orderObj.id || "").indexOf("3D-") === 0 &&
    orderObj.paymentMethod === "cod" &&
    !(Number(orderObj.depositAmount || 0) > 0);
  return {
    inline_keyboard: [
      [
        ...(orderObj.paymentMethod === "transfer" && orderObj.paymentStatus !== "qr_verified"
          ? [{ text: "✅ Xác nhận Đã nhận tiền", callback_data: "pay_ok:" + orderObj.id }]
          : []),
        ...(isPendingCod3d
          ? [{ text: "💰 Đã nhận cọc 30%", callback_data: "dep_ok:" + orderObj.id }]
          : []),
        { text: "🔧 Duyệt · Đang chuẩn bị", callback_data: "st:preparing:" + orderObj.id }
      ],
      [
        { text: "📦 Đã đóng gói", callback_data: "st:packed:" + orderObj.id },
        { text: "📮 Đã gửi hàng", callback_data: "st:dispatched:" + orderObj.id }
      ],
      [
        { text: "🚚 Đang giao", callback_data: "st:shipping:" + orderObj.id },
        { text: "🎉 Hoàn thành", callback_data: "st:completed:" + orderObj.id },
        { text: "❌ Hủy đơn", callback_data: "st:cancelled:" + orderObj.id }
      ]
    ]
  };
}

function buildTelegramTextForOrder(orderObj) {
  var statusVi = ORDER_STATUS_MAP[orderObj.status] || orderObj.status;
  var totalVal = Number(orderObj.totalAmount || 0);
  var depVal = Number(orderObj.depositAmount || 0);
  var remVal =
    typeof orderObj.remainingAmount === "number" && isFinite(orderObj.remainingAmount)
      ? Math.max(0, Number(orderObj.remainingAmount))
      : Math.max(0, totalVal - depVal);
  var payText =
    orderObj.paymentMethod === "cod"
      ? (depVal > 0
          ? "✅ ĐÃ CỌC " + depVal.toLocaleString("vi-VN") + "đ · Thu COD " + remVal.toLocaleString("vi-VN") + "đ"
          : "COD (Thu hộ khi nhận)")
      : orderObj.paymentStatus === "qr_verified"
        ? "✅ ĐÃ NHẬN TIỀN QR (" + (orderObj.transferCode || "") + ")"
        : "⏳ Chờ kiểm tra CK (" + (orderObj.transferCode || "") + ")";
  return [
    "🛒 ĐƠN HÀNG #" + orderObj.id + " — TeeBi & Robot",
    "📌 Trạng thái: " + statusVi,
    "💳 Thanh toán: " + payText,
    "👤 Khách: " +
      orderObj.customerName +
      " | SĐT: " +
      orderObj.customerPhone +
      (orderObj.customerEmail ? " | ✉️ " + orderObj.customerEmail : ""),
    "📍 Địa chỉ: " + orderObj.shippingAddress,
    "💰 Tổng tiền: " + totalVal.toLocaleString("vi-VN") + " ₫" +
      ((depVal > 0 || remVal > 0) ? " | Đã cọc: " + depVal.toLocaleString("vi-VN") + "đ | Còn thiếu (COD): " + remVal.toLocaleString("vi-VN") + "đ" : ""),
    "🕒 Đồng bộ 24/7: " + Utilities.formatDate(new Date(), "GMT+7", "HH:mm:ss")
  ].join("\\n");
}

function dongBoTelegramTuDong() {
  try {
    pullCtvClaimsFromPublicSheetGas();
  } catch (pullCronErr) {
    Logger.log("Cron pull CTV sheet note: " + pullCronErr);
  }

  if (!TELEGRAM_BOT_TOKEN) return;

  var props = PropertiesService.getScriptProperties();
  var lastId = Number(props.getProperty("TG_LAST_UPDATE_ID") || 0);
  var url =
    "https://api.telegram.org/bot" +
    TELEGRAM_BOT_TOKEN +
    "/getUpdates?limit=25" +
    (lastId > 0 ? "&offset=" + (lastId + 1) : "");

  try {
    var resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    var json = JSON.parse(resp.getContentText() || "{}");
    if (!json || !json.ok || !json.result || json.result.length === 0) return;

    var sheet = getOrCreateSheet("DonHang");
    ensureDonHangHeadersGas(sheet, false);
    var rows = sheet.getDataRange().getValues();
    var maxId = lastId;

    for (var u = 0; u < json.result.length; u++) {
      var upd = json.result[u];
      if (upd.update_id && upd.update_id > maxId) {
        maxId = upd.update_id;
      }

      if (!upd.callback_query) continue;
      var cb = upd.callback_query;
      var msgChatId = String((cb.message && cb.message.chat && cb.message.chat.id) || "");
      if (TELEGRAM_CHAT_ID && msgChatId !== String(TELEGRAM_CHAT_ID)) continue;

      var dataStr = String(cb.data || "");
      var targetOrderId = "";
      var isPayOk = false;
      var isDepOk = false;
      var nextStatusKey = "";

      if (dataStr.indexOf("pay_ok:") === 0) {
        isPayOk = true;
        targetOrderId = dataStr.slice("pay_ok:".length);
      } else if (dataStr.indexOf("dep_ok:") === 0) {
        isDepOk = true;
        targetOrderId = dataStr.slice("dep_ok:".length);
      } else if (dataStr.indexOf("st:") === 0) {
        var parts = dataStr.split(":");
        nextStatusKey = parts[1] || "";
        targetOrderId = parts.slice(2).join(":");
      }
      if (!targetOrderId) continue;

      var matchedOrder = null;
      for (var r = rows.length - 1; r >= 1; r--) {
        if (String(rows[r][1]).trim() === targetOrderId) {
          var rowNumTg = r + 1;
          var totalTg = Number(rows[r][6] || 0);
          while (rows[r].length < DON_HANG_HEADERS.length) rows[r].push("");
          if (isPayOk) {
            sheet.getRange(rowNumTg, 8).setValue("Đã nhận tiền QR");
            rows[r][7] = "Đã nhận tiền QR";
            sheet.getRange(rowNumTg, 12).setValue(totalTg);
            rows[r][11] = totalTg;
            rows[r][12] = 0;
            if (String(rows[r][9] || "").trim() === "Chờ duyệt") {
              sheet.getRange(rowNumTg, 10).setValue("Đang chuẩn bị");
              rows[r][9] = "Đang chuẩn bị";
            }
            applyDonHangRowFormulaGas(sheet, rowNumTg);
          } else if (isDepOk) {
            var curDepTg = Number(rows[r][11] || 0);
            var dep30Tg = curDepTg > 0 ? curDepTg : Math.round(totalTg * 0.3);
            var remTg = Math.max(0, totalTg - dep30Tg);
            sheet.getRange(rowNumTg, 8).setValue("Đã cọc 30% QR");
            rows[r][7] = "Đã cọc 30% QR";
            sheet.getRange(rowNumTg, 12).setValue(dep30Tg);
            rows[r][11] = dep30Tg;
            rows[r][12] = remTg;
            if (String(rows[r][9] || "").trim() === "Chờ duyệt") {
              sheet.getRange(rowNumTg, 10).setValue("Đang chuẩn bị");
              rows[r][9] = "Đang chuẩn bị";
            }
            applyDonHangRowFormulaGas(sheet, rowNumTg);
          } else if (nextStatusKey && ORDER_STATUS_MAP[nextStatusKey]) {
            var nextVi = ORDER_STATUS_MAP[nextStatusKey];
            sheet.getRange(rowNumTg, 10).setValue(nextVi);
            rows[r][9] = nextVi;
          }
          matchedOrder = rowValuesToOrderObj(rows[r]);
          break;
        }
      }

      var toastText = "Đã cập nhật đơn #" + targetOrderId;
      if (matchedOrder) {
        var is3dTg = targetOrderId.indexOf("3D-") === 0;
        if (isPayOk) {
          matchedOrder.paymentStatus = "qr_verified";
          sendBuyerOrderEmail(matchedOrder, "payment_confirmed");
          if (is3dTg) {
            promotePendingPrint3DOrderGas(targetOrderId, {
              payCol: "Đã nhận tiền QR",
              totalAmount: matchedOrder.totalAmount,
              depositAmount: matchedOrder.totalAmount,
              transferCode: matchedOrder.transferCode
            });
          }
          toastText = "✅ Đã nhận tiền" + (is3dTg ? " & đẩy DonIn3D" : " & gửi Gmail") + " #" + targetOrderId;
        } else if (isDepOk) {
          matchedOrder.paymentStatus = "qr_verified";
          sendBuyerOrderEmail(matchedOrder, "status_update");
          if (is3dTg) {
            promotePendingPrint3DOrderGas(targetOrderId, {
              payCol: "Đã cọc 30% QR",
              totalAmount: matchedOrder.totalAmount,
              depositAmount: matchedOrder.depositAmount,
              transferCode: matchedOrder.transferCode
            });
          }
          toastText = "💰 Đã nhận cọc " + Number(matchedOrder.depositAmount || 0).toLocaleString("vi-VN") + "đ (#" + targetOrderId + ")";
        } else if (nextStatusKey && ORDER_STATUS_MAP[nextStatusKey]) {
          matchedOrder.status = nextStatusKey;
          sendBuyerOrderEmail(matchedOrder, "status_update");
          if (
            is3dTg &&
            (nextStatusKey === "preparing" ||
              nextStatusKey === "packed" ||
              nextStatusKey === "dispatched" ||
              nextStatusKey === "shipping" ||
              nextStatusKey === "completed")
          ) {
            promotePendingPrint3DOrderGas(targetOrderId, {
              payCol: matchedOrder.paymentMethod === "transfer" ? "Đã nhận tiền QR" : "COD",
              totalAmount: matchedOrder.totalAmount,
              depositAmount: matchedOrder.depositAmount || 0,
              transferCode: matchedOrder.transferCode
            });
          }
          toastText = ORDER_STATUS_MAP[nextStatusKey] + " (#" + targetOrderId + ")";
        }

        if (cb.message && cb.message.message_id && msgChatId) {
          UrlFetchApp.fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/editMessageText", {
            method: "post",
            contentType: "application/json",
            payload: JSON.stringify({
              chat_id: msgChatId,
              message_id: cb.message.message_id,
              text: buildTelegramTextForOrder(matchedOrder),
              reply_markup: buildTelegramKeyboardForOrder(matchedOrder)
            }),
            muteHttpExceptions: true
          });
        }
      }

      UrlFetchApp.fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/answerCallbackQuery", {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify({
          callback_query_id: cb.id,
          text: toastText
        }),
        muteHttpExceptions: true
      });
    }

    if (maxId > lastId) {
      props.setProperty("TG_LAST_UPDATE_ID", String(maxId));
    }
  } catch (err) {
    Logger.log("dongBoTelegramTuDong error: " + err);
  }
}

function sendTelegramHtmlWithKeyboard(text, replyMarkup) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  try {
    var payloadObj = {
      chat_id: TELEGRAM_CHAT_ID,
      text: text,
      parse_mode: "HTML"
    };
    if (replyMarkup) payloadObj.reply_markup = replyMarkup;
    UrlFetchApp.fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage", {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payloadObj),
      muteHttpExceptions: true
    });
  } catch (err) {
    Logger.log("Telegram keyboard notify error: " + err);
  }
}

function sendTelegramNotice(text) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  try {
    UrlFetchApp.fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage", {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: "HTML"
      }),
      muteHttpExceptions: true
    });
  } catch (err) {
    Logger.log("Telegram notify error: " + err);
  }
}

function buildEmailProgressBarHtml(stKey) {
  if (stKey === "cancelled") {
    return (
      '<div style="background:#fff1f2;border:1px solid #fecdd3;color:#be123c;padding:10px 14px;border-radius:8px;font-weight:bold;text-align:center;margin:14px 0;">' +
      'Đơn hàng đã bị hủy — Vui lòng liên hệ Shop nếu cần hỗ trợ đặt lại' +
      '</div>'
    );
  }

  var stepIdx = 0;
  if (stKey === "preparing") stepIdx = 1;
  else if (stKey === "packed" || stKey === "dispatched") stepIdx = 2;
  else if (stKey === "shipping") stepIdx = 3;
  else if (stKey === "completed") stepIdx = 4;

  var labels = ["1. Tiếp nhận", "2. Chuẩn bị", "3. Đóng gói", "4. Đang giao", "5. Hoàn thành"];
  var cells = labels
    .map(function (lbl, idx) {
      var done = idx <= stepIdx;
      var bg = done ? "#0284c7" : "#e2e8f0";
      var color = done ? "#ffffff" : "#64748b";
      return (
        '<td style="width:20%;padding:3px;">' +
        '<div style="background:' + bg + ';color:' + color + ';font-size:11px;font-weight:bold;text-align:center;padding:6px 4px;border-radius:6px;">' +
        lbl +
        "</div></td>"
      );
    })
    .join("");

  return '<table style="width:100%;border-collapse:collapse;margin:14px 0;"><tr>' + cells + "</tr></table>";
}

function sendBuyerOrderEmail(orderData, eventType) {
  if (!orderData || orderData.buyerEmailEnabled === false || !orderData.customerEmail) return;
  var toEmail = String(orderData.customerEmail).trim();
  if (toEmail.indexOf("@") === -1) return;

  var isTestEmail = String(orderData.id) === "DH-TEST-GMAIL";
  var stKey = String(orderData.status || "pending");
  var isVerifiedQr =
    orderData.paymentMethod === "transfer" && orderData.paymentStatus === "qr_verified";

  if (!isTestEmail) {
    if (eventType === "new_order" && !isVerifiedQr) return;
    if (stKey === "pending" && eventType !== "payment_confirmed") return;
  }

  var senderName = String(orderData.senderName || orderData.shop || "TeeBi & Robot — TBX Electrics");
  var replyTo = String(orderData.replyTo || "").trim();
  var shopPhone = String(orderData.shopPhone || "0789044703");
  var footerNote = String(
    orderData.emailFooter ||
      ("Cần hỗ trợ sơ đồ đấu nối hoặc bảo hành kỹ thuật, vui lòng nhắn trực tiếp Zalo " + shopPhone + ".")
  );
  var orderId = String(orderData.id || "");
  var statusVi = ORDER_STATUS_MAP[stKey] || "Chờ duyệt";

  var subject = "";
  var intro = "";
  if (eventType === "payment_confirmed") {
    subject = "[" + senderName + "] Đã xác nhận nhận tiền & duyệt đơn hàng #" + orderId;
    intro =
      "Shop đã xác nhận nhận đủ khoản chuyển khoản cho đơn hàng <b>#" +
      escHtml(orderId) +
      "</b> và đang tiến hành chuẩn bị thiết bị cho bạn.";
  } else if (stKey === "preparing") {
    if (orderData.paymentMethod === "cod") {
      subject = "[" + senderName + "] Đơn hàng COD #" + orderId + " đã được duyệt & đang chuẩn bị";
      intro =
        "Đơn hàng COD <b>#" +
        escHtml(orderId) +
        "</b> của bạn đã được Shop xác nhận duyệt đơn và đang tiến hành chuẩn bị hàng.";
    } else {
      subject = "[" + senderName + "] Đơn hàng #" + orderId + " đã duyệt & đang chuẩn bị";
      intro =
        "Đơn hàng <b>#" +
        escHtml(orderId) +
        "</b> của bạn đã được Shop xác nhận duyệt và đang tiến hành kiểm tra / chuẩn bị hàng.";
    }
  } else if (stKey === "completed") {
    subject = "[" + senderName + "] Đơn hàng #" + orderId + " đã giao thành công";
    intro =
      "Đơn hàng <b>#" +
      escHtml(orderId) +
      "</b> đã hoàn thành. Rất cảm ơn bạn đã tin tưởng sử dụng sản phẩm kỹ thuật của Shop!";
  } else if (stKey === "cancelled") {
    subject = "[" + senderName + "] Thông báo hủy đơn hàng #" + orderId;
    intro =
      "Đơn hàng <b>#" +
      escHtml(orderId) +
      "</b> đã được cập nhật trạng thái <b>Đã hủy</b>. Nếu có nhầm lẫn, vui lòng liên hệ trực tiếp qua Zalo <b>" +
      escHtml(shopPhone) +
      "</b>.";
  } else {
    subject = "[" + senderName + "] Cập nhật đơn hàng #" + orderId + ": " + statusVi;
    intro =
      "Đơn hàng <b>#" +
      escHtml(orderId) +
      "</b> vừa được cập nhật tiến độ xử lý sang: <b>" +
      escHtml(statusVi) +
      "</b>.";
  }

  var itemRows = (orderData.items || [])
    .map(function (it) {
      var lineTotal = Number(it.unitPrice || 0) * Number(it.quantity || 1);
      var priceStr = lineTotal > 0 ? lineTotal.toLocaleString("vi-VN") + " đ" : "Báo giá";
      return (
        '<tr>' +
        '<td style="padding:8px;border-bottom:1px solid #e2e8f0;font-size:13px;"><b>' +
        escHtml(it.code) +
        "</b> · " +
        escHtml(it.name) +
        "</td>" +
        '<td style="padding:8px;border-bottom:1px solid #e2e8f0;font-size:13px;text-align:center;">×' +
        Number(it.quantity || 1) +
        "</td>" +
        '<td style="padding:8px;border-bottom:1px solid #e2e8f0;font-size:13px;text-align:right;font-weight:bold;">' +
        priceStr +
        "</td>" +
        "</tr>"
      );
    })
    .join("");

  var totalText =
    Number(orderData.totalAmount || 0) > 0
      ? Number(orderData.totalAmount).toLocaleString("vi-VN") + " đ"
      : "Theo báo giá thỏa thuận";

  var payMethodText =
    orderData.paymentMethod === "transfer"
      ? orderData.paymentStatus === "qr_verified"
        ? "Chuyển khoản (Đã xác nhận nhận tiền)"
        : "Chuyển khoản (" + escHtml(orderData.transferCode || "") + ")"
      : "Thanh toán khi nhận hàng (COD)";

  var htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;background:#ffffff;">' +
      '<div style="background:#0B1324;color:#ffffff;padding:18px 22px;">' +
        '<div style="font-size:11px;color:#38bdf8;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;">' +
        escHtml(senderName) +
        "</div>" +
        '<div style="font-size:18px;font-weight:bold;margin-top:4px;">Thông báo Đơn hàng #' +
        escHtml(orderId) +
        "</div>" +
      "</div>" +
      '<div style="padding:20px 22px;color:#1e293b;font-size:14px;line-height:1.6;">' +
        '<p style="margin-top:0;">Xin chào <b>' + escHtml(orderData.customerName) + "</b>,</p>" +
        "<p>" + intro + "</p>" +
        buildEmailProgressBarHtml(stKey) +
        '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;margin:14px 0;font-size:13px;">' +
          '<div><b>Trạng thái hiện tại:</b> <span style="color:#0284c7;font-weight:bold;">' + escHtml(statusVi) + "</span></div>" +
          "<div><b>Hình thức thanh toán:</b> " + payMethodText + "</div>" +
          "<div><b>Người nhận:</b> " + escHtml(orderData.customerName) + " — " + escHtml(orderData.customerPhone) + "</div>" +
          "<div><b>Địa chỉ giao hàng:</b> " + escHtml(orderData.shippingAddress) + "</div>" +
        "</div>" +
        '<table style="width:100%;border-collapse:collapse;margin-top:10px;">' +
          '<thead><tr style="background:#f1f5f9;"><th style="padding:8px;text-align:left;font-size:12px;">Sản phẩm</th><th style="padding:8px;text-align:center;font-size:12px;">SL</th><th style="padding:8px;text-align:right;font-size:12px;">Thành tiền</th></tr></thead>' +
          "<tbody>" + itemRows + "</tbody>" +
        "</table>" +
        '<div style="font-size:16px;font-weight:bold;color:#0f172a;text-align:right;padding-top:12px;">Tổng cộng: ' +
        totalText +
        "</div>" +
        '<div style="margin-top:20px;padding-top:14px;border-top:1px solid #e2e8f0;font-size:12px;color:#475569;">' +
          escHtml(footerNote) +
          '<div style="margin-top:4px;">Hotline / Zalo Shop: <b>' + escHtml(shopPhone) + "</b></div>" +
        "</div>" +
      "</div>" +
    "</div>";

  var mailOptions = {
    to: toEmail,
    subject: subject,
    htmlBody: htmlBody,
    name: senderName
  };
  if (replyTo) {
    mailOptions.replyTo = replyTo;
  }

  try {
    MailApp.sendEmail(mailOptions);
  } catch (err) {
    Logger.log("MailApp error: " + err);
  }
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      khoiTaoBangLocDon();
      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, message: "Initialized sheets" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var data = JSON.parse(e.postData.contents);
    if (data && data.type === "support_request") {
      var supportSheet = getOrCreateSheet("YeuCauHoTro");
      var reqTime = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");
      var reqCategory = String(data.categoryLabel || "Hỗ trợ / Liên hệ");
      var reqName = String(data.senderName || "Khách hàng");
      var reqCompany = String(data.senderCompany || "");
      var reqContact = String(data.senderContact || "");
      var reqSubject = String(data.subject || "");
      var reqMessage = String(data.message || "");

      supportSheet.appendRow([
        reqTime,
        reqCategory,
        reqName,
        reqCompany,
        reqContact,
        reqSubject,
        reqMessage,
        "Mới tiếp nhận"
      ]);

      sendTelegramNotice(
        "📩 <b>YÊU CẦU HỖ TRỢ MỚI</b>\\n" +
        "🏷 Loại: <b>" + escHtml(reqCategory) + "</b>\\n" +
        "👤 Khách: <b>" + escHtml(reqName) + "</b>" +
        (reqCompany ? " (" + escHtml(reqCompany) + ")" : "") + "\\n" +
        "📞 Liên hệ: <code>" + escHtml(reqContact) + "</code>\\n" +
        (reqSubject ? "📌 Đề tài / Chủ đề: " + escHtml(reqSubject) + "\\n" : "") +
        "📝 Nội dung: " + escHtml(reqMessage)
      );

      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, type: "support_request" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data && data.type === "scan_drive_stl") {
      try {
        var scanSetup = {
          material: String(data.material || "PLA+"),
          infillPercent: Number(data.infillPercent || 20),
          layerHeightMm: Number(data.layerHeightMm || 0.2),
          nozzleMm: Number(data.nozzleMm || 0.4),
          wallLoops: Number(data.wallLoops || 3),
          topBottomLayers: Number(data.topBottomLayers || 4),
          supportEnabled: Boolean(data.supportEnabled)
        };
        var scanned = fetchAndScan3DLinkGas(data.fileUrl, scanSetup);
        var scanQty = Math.max(1, Math.round(Number(data.quantity || 1)));
        var scanTotalWeight = roundWeightGramsGas(scanned.perPartWeightGrams * scanQty);
        var scanUnitRate = Number(data.unitPricePerGram || 800);
        var scanBaseFee = Number(data.baseFee || 10000);
        var scanTotalAmt = scanTotalWeight > 0 ? Math.round(scanTotalWeight * scanUnitRate + scanBaseFee * scanQty) : 0;
        return ContentService.createTextOutput(
          JSON.stringify({
            ok: true,
            type: "scan_drive_stl",
            isFolder: Boolean(scanned.isFolder),
            folderName: scanned.folderName || "",
            fileName: scanned.fileName,
            perPartWeightGrams: scanned.perPartWeightGrams,
            totalWeightGrams: scanTotalWeight,
            totalAmount: scanTotalAmt,
            dimensions: scanned.dimensions,
            printTime: scanned.printTime,
            volumeCm3: scanned.volumeCm3,
            source: scanned.source,
            files: scanned.files || []
          })
        ).setMimeType(ContentService.MimeType.JSON);
      } catch (scanErr) {
        return ContentService.createTextOutput(
          JSON.stringify({ ok: false, error: scanErr && scanErr.message ? scanErr.message : String(scanErr) })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    if (data && data.type === "print3d_init_upload") {
      try {
        var initFolder = getOrCreate3DFolderGas();
        if (data.subfolderName) {
          initFolder = getOrCreate3DSubfolderGas(initFolder, String(data.subfolderName));
        }
        var initName = String(data.fileName || ("3D-" + Date.now() + "_model.stl"));
        var initMime = String(data.mimeType || "application/octet-stream");
        var initSize = Number(data.fileSize || 0);
        if (initSize > 250 * 1024 * 1024) {
          return ContentService.createTextOutput(
            JSON.stringify({ ok: false, error: "File vượt quá giới hạn 250MB." })
          ).setMimeType(ContentService.MimeType.JSON);
        }
        var initHeaders = {
          "Authorization": "Bearer " + ScriptApp.getOAuthToken(),
          "X-Upload-Content-Type": initMime
        };
        if (initSize > 0) {
          initHeaders["X-Upload-Content-Length"] = String(initSize);
        }
        if (data.origin) {
          initHeaders["Origin"] = String(data.origin);
        }
        var initResp = UrlFetchApp.fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable", {
          method: "post",
          contentType: "application/json; charset=UTF-8",
          headers: initHeaders,
          payload: JSON.stringify({
            name: initName,
            parents: [initFolder.getId()]
          }),
          muteHttpExceptions: true
        });
        var respHeaders = initResp.getAllHeaders ? initResp.getAllHeaders() : initResp.getHeaders();
        var uploadUrl = respHeaders.Location || respHeaders.location || "";
        if (initResp.getResponseCode() >= 400 || !uploadUrl) {
          return ContentService.createTextOutput(
            JSON.stringify({
              ok: false,
              error: "Drive init HTTP " + initResp.getResponseCode() + ": " + initResp.getContentText()
            })
          ).setMimeType(ContentService.MimeType.JSON);
        }
        return ContentService.createTextOutput(
          JSON.stringify({ ok: true, uploadUrl: uploadUrl })
        ).setMimeType(ContentService.MimeType.JSON);
      } catch (initErr) {
        return ContentService.createTextOutput(
          JSON.stringify({ ok: false, error: String(initErr) })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    if (data && data.type === "print3d_order") {
      var p3dSheet = getOrCreateSheet("DonIn3D");
      var p3dTime = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");
      var p3dId = String(data.id || ("3D-" + Date.now()));
      var p3dFileName = String(data.fileName || "model.stl");
      var p3dDriveCode = String(data.driveFileCode || (p3dId + "_" + p3dFileName));
      var driveUrl = String(data.driveFileUrl || "");
      var gcodeDriveUrl = "";
      var folder = null;

      try {
        folder = getOrCreate3DFolderGas();
      } catch (fErr) {
        Logger.log("getOrCreate3DFolderGas error: " + fErr);
      }

      var targetFolder = folder;
      var hasMultiFiles = Boolean(data.multiFileFolder) ||
        (data.extraFiles && data.extraFiles.length > 0) ||
        (data.uploadedDriveFiles && data.uploadedDriveFiles.length > 0);
      if (folder && hasMultiFiles) {
        targetFolder = getOrCreate3DSubfolderGas(folder, p3dId);
        driveUrl = targetFolder.getUrl();
      }

      if (data.uploadedDriveFileId) {
        try {
          var directFile = DriveApp.getFileById(String(data.uploadedDriveFileId));
          directFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          driveUrl = directFile.getUrl();
        } catch (directErr) {
          Logger.log("uploadedDriveFileId error: " + directErr);
        }
      }

      if (data.uploadedDriveFiles && data.uploadedDriveFiles.length) {
        for (var ud = 0; ud < data.uploadedDriveFiles.length; ud++) {
          try {
            var uItem = data.uploadedDriveFiles[ud];
            if (uItem && uItem.driveFileId) {
              DriveApp.getFileById(String(uItem.driveFileId)).setSharing(
                DriveApp.Access.ANYONE_WITH_LINK,
                DriveApp.Permission.VIEW
              );
            }
          } catch (udErr) {
            Logger.log("uploadedDriveFiles item error: " + udErr);
          }
        }
      }

      if (data.extraFiles && data.extraFiles.length && targetFolder) {
        for (var ef = 0; ef < data.extraFiles.length; ef++) {
          try {
            var eItem = data.extraFiles[ef];
            if (!eItem || !eItem.fileBase64) continue;
            var eDecoded = Utilities.base64Decode(String(eItem.fileBase64));
            var eName = String(eItem.fileName || ("part_" + (ef + 1) + ".stl"));
            var eMime = String(eItem.mimeType || "application/octet-stream");
            var eBlob = eItem.fileIsGzipped === true
              ? Utilities.ungzip(Utilities.newBlob(eDecoded, "application/x-gzip", eName + ".gz")).setName(eName)
              : Utilities.newBlob(eDecoded, eMime, eName);
            var eDriveFile = targetFolder.createFile(eBlob);
            eDriveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          } catch (efErr) {
            Logger.log("extraFiles item error: " + efErr);
          }
        }
      }

      var rawBytes = null;
      if (data.fileBase64) {
        try {
          var decodedBytes = Utilities.base64Decode(String(data.fileBase64));
          var mimeType = String(data.fileMimeType || "application/octet-stream");
          var finalBlob = null;
          if (data.fileIsGzipped === true) {
            var gzBlob = Utilities.newBlob(decodedBytes, "application/x-gzip", p3dDriveCode + ".gz");
            finalBlob = Utilities.ungzip(gzBlob).setName(p3dDriveCode);
            rawBytes = finalBlob.getBytes();
          } else {
            rawBytes = decodedBytes;
            finalBlob = Utilities.newBlob(rawBytes, mimeType, p3dDriveCode);
          }
          if (targetFolder && finalBlob && !driveUrl) {
            var driveFile = targetFolder.createFile(finalBlob);
            driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
            driveUrl = driveFile.getUrl();
          }
        } catch (driveErr) {
          Logger.log("DriveApp error: " + driveErr);
        }
      }

      var qty3d = Math.max(1, Math.round(Number(data.quantity || 1)));
      var weightG = Number(data.weightGrams || 0);
      var total3d = Number(data.totalAmount || 0);
      var unitRate = Number(data.unitPricePerGram || 800);
      var baseFee3d = Number(data.baseFee || 0);
      var deliveryDeadline3d = String(data.deliveryDeadline || "").trim();
      var urgencyGas = calculateDeliveryUrgencyGas(deliveryDeadline3d);
      var rushPct3d = (typeof data.rushSurchargePercent === "number" && isFinite(data.rushSurchargePercent))
        ? Math.max(0, data.rushSurchargePercent)
        : urgencyGas.surchargePercent;
      var deliveryLabel3d = String(data.deliveryLabel || urgencyGas.label || "").trim();
      var subtotal3d = Number(data.subtotalAmount || 0);
      var rushFee3d = Number(data.rushFeeAmount || 0);
      var dims3d = String(data.dimensions || "");
      var estPrintTime = String(data.printTime || "");
      var gcodeSummary = String(data.gcodeText || "");
      var fileSummaryStr = String(data.fileSummary || "");
      var infillPctNum = parseInt(String(data.infill || "20"), 10) || 20;
      var setupObj = data.setup || {};
      var uiInfillNum = Number(setupObj.infillPercent || infillPctNum) || 20;
      var effectiveGcodeInfill = resolveGcodeInfillPercentGas(uiInfillNum);
      var setupForScan = {
        material: String(data.material || "PLA"),
        infillPercent: uiInfillNum,
        layerHeightMm: Number(setupObj.layerHeightMm || 0.2),
        nozzleMm: Number(setupObj.nozzleMm || 0.4),
        wallLoops: Number(setupObj.wallLoops || 3),
        topBottomLayers: Number(setupObj.topBottomLayers || 4),
        supportEnabled: true
      };

      if (rawBytes && !isAllowedStlFileNameGas(p3dFileName)) {
        return ContentService.createTextOutput(
          JSON.stringify({ ok: false, error: buildUnsupportedFileErrorGas([p3dFileName]) })
        ).setMimeType(ContentService.MimeType.JSON);
      }

      if (weightG <= 0) {
        try {
          if (rawBytes) {
            var stlParsed = parseStlBytesGas(rawBytes, setupForScan);
            weightG = roundWeightGramsGas(stlParsed.perPartWeightGrams * qty3d);
            dims3d = stlParsed.dimensions;
            estPrintTime = stlParsed.printTime;
          } else if (driveUrl) {
            var linkScanned = fetchAndScan3DLinkGas(driveUrl, setupForScan);
            p3dFileName = linkScanned.fileName || p3dFileName;
            p3dDriveCode = p3dId + "_" + p3dFileName.replace(/[^\\w.\\-()]+/g, "_");
            weightG = roundWeightGramsGas(linkScanned.perPartWeightGrams * qty3d);
            dims3d = linkScanned.dimensions || dims3d;
            estPrintTime = linkScanned.printTime || estPrintTime;
            if (linkScanned.isFolder && linkScanned.files && linkScanned.files.length > 0) {
              if (!fileSummaryStr) {
                fileSummaryStr = linkScanned.files.map(function (lf) {
                  return qty3d + "× " + lf.fileName + " (" + lf.perPartWeightGrams + "g)";
                }).join(", ");
              }
              if (folder) {
                try {
                  var linkSubFolder = getOrCreate3DSubfolderGas(folder, p3dId);
                  targetFolder = linkSubFolder;
                  if (linkScanned.unzippedBlobs && linkScanned.unzippedBlobs.length > 0) {
                    for (var uz = 0; uz < linkScanned.unzippedBlobs.length; uz++) {
                      var ub = linkScanned.unzippedBlobs[uz];
                      if (ub && ub.blob) {
                        var uzFile = linkSubFolder.createFile(ub.blob.setName(p3dId + "_" + ub.fileName));
                        uzFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
                      }
                    }
                  } else {
                    for (var cf = 0; cf < linkScanned.files.length; cf++) {
                      var lfId = linkScanned.files[cf].fileId;
                      if (lfId) {
                        var cpFile = DriveApp.getFileById(lfId).makeCopy(p3dId + "_" + linkScanned.files[cf].fileName, linkSubFolder);
                        cpFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
                      }
                    }
                  }
                  driveUrl = linkSubFolder.getUrl();
                } catch (copyFolderErr) {
                  Logger.log("Copy folder link warning: " + copyFolderErr);
                }
              }
            } else if (targetFolder && linkScanned.blob) {
              try {
                var driveIdCopy = extractGoogleDriveFileId(driveUrl);
                if (driveIdCopy) {
                  var copied = DriveApp.getFileById(driveIdCopy).makeCopy(p3dDriveCode, targetFolder);
                  copied.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
                  driveUrl = copied.getUrl();
                } else {
                  var savedBlobFile = targetFolder.createFile(linkScanned.blob.setName(p3dDriveCode));
                  savedBlobFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
                  driveUrl = savedBlobFile.getUrl();
                }
              } catch (copyErr) {
                Logger.log("Copy Drive link warning: " + copyErr);
              }
            }
          }
        } catch (autoScanErr) {
          var scanErrStr = autoScanErr && autoScanErr.message ? autoScanErr.message : String(autoScanErr);
          if (
            scanErrStr.indexOf("Chỉ hỗ trợ file .STL") !== -1 ||
            scanErrStr.indexOf("Không tìm thấy file .STL") !== -1 ||
            scanErrStr.indexOf(".ZIP") !== -1 ||
            scanErrStr.indexOf("Không đọc được file") !== -1
          ) {
            return ContentService.createTextOutput(
              JSON.stringify({ ok: false, error: scanErrStr })
            ).setMimeType(ContentService.MimeType.JSON);
          }
          Logger.log("Auto-scan 3D warning: " + scanErrStr);
        }
      } else if (driveUrl && !rawBytes && !hasMultiFiles && !data.uploadedDriveFileId) {
        try {
          validateDriveLinkExtensionsOnlyGas(driveUrl);
        } catch (extErr) {
          return ContentService.createTextOutput(
            JSON.stringify({ ok: false, error: extErr && extErr.message ? extErr.message : String(extErr) })
          ).setMimeType(ContentService.MimeType.JSON);
        }
      }

      if (total3d <= 0 && weightG > 0) {
        subtotal3d = Math.round(weightG * unitRate + baseFee3d * qty3d);
        rushFee3d = rushPct3d > 0 ? Math.round((subtotal3d * rushPct3d) / 100) : 0;
        total3d = subtotal3d + rushFee3d;
      } else if (subtotal3d <= 0 && total3d > 0) {
        subtotal3d = Math.max(0, total3d - rushFee3d);
      }

      if (!gcodeSummary && weightG > 0) {
        var maxBX = Number(setupObj.maxBuildX || 800);
        var maxBY = Number(setupObj.maxBuildY || 800);
        var maxBZ = Number(setupObj.maxBuildZ || 800);
        gcodeSummary = [
          "; generated by TeeBi & Robot Auto-Slicer (" + String(setupObj.printerModel || "Creality Khổ Lớn 800x800 (0.4 nozzle)") + ")",
          "; max_build_volume_mm = " + maxBX + " x " + maxBY + " x " + maxBZ,
          "; order_id = " + p3dId,
          "; source_model = " + p3dFileName,
          "; filament_type = " + setupForScan.material,
          "; layer_height = " + setupForScan.layerHeightMm,
          "; sparse_infill_density = " + effectiveGcodeInfill + "%",
          "; ui_infill_display = " + infillPctNum + "%",
          "; enable_support = 1",
          (deliveryLabel3d ? "; delivery_deadline = " + deliveryLabel3d : ""),
          (dims3d ? "; model_dimensions_mm = " + dims3d : "; model_dimensions_mm = N/A"),
          "; total filament weight [g] : " + weightG,
          (estPrintTime ? "; estimated printing time (normal mode) = " + estPrintTime : "")
        ].filter(Boolean).join("\\n");
      }

      if (gcodeSummary && targetFolder) {
        try {
          var gcodeName = p3dId + "_" + p3dFileName.replace(/\\.[^.]+$/, "").replace(/[^\\w.\\-()]+/g, "_").slice(0, 60) + "_Creality.gcode";
          var gFile = targetFolder.createFile(gcodeName, gcodeSummary, MimeType.PLAIN_TEXT);
          gFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          gcodeDriveUrl = gFile.getUrl();
        } catch (gSaveErr) {
          Logger.log("Save gcode summary error: " + gSaveErr);
        }
      }

      var shipMethod3d = String(data.shippingMethod || "delivery").trim().toLowerCase();
      var shipAddr3d = String(data.shippingAddress || "").trim();
      var shipLabel3d = shipMethod3d === "pickup" ? "Nhận trực tiếp tại xưởng" : shipAddr3d;
      var payMethod3d = String(data.paymentMethod || "cod").trim().toLowerCase();
      var payStatus3d = String(data.paymentStatus || (payMethod3d === "transfer" ? "qr_reported" : "cod_unpaid")).trim();
      var transferCode3d = String(data.transferCode || "").trim();
      var depositAmt3d = payMethod3d === "cod" ? (Number(data.depositAmount || 0) || Math.round(total3d * 0.3)) : 0;
      var codRemain3d = payMethod3d === "cod" ? Math.max(0, total3d - depositAmt3d) : 0;
      var payLabel3d = payMethod3d === "transfer"
        ? (payStatus3d === "qr_verified" ? "Đã CK VietQR 100%" : "Chuyển khoản VietQR 100%") + (transferCode3d ? " (" + transferCode3d + ")" : "")
        : depositAmt3d > 0
          ? (payStatus3d === "qr_verified" ? "COD · Đã cọc 30% (" : "COD · Cọc 30% (") + depositAmt3d.toLocaleString("vi-VN") + "đ) · Thu COD " + codRemain3d.toLocaleString("vi-VN") + "đ" + (transferCode3d ? " (" + transferCode3d + ")" : "")
          : "COD (Cọc 30% sau khi báo giá)";

      var matInfo = String(data.material || "PLA") + (data.infill ? " · Infill " + data.infill : "") + " · Auto Support" + (data.color ? " · " + data.color : "");
      var statusNote =
        (deliveryLabel3d ? "Hạn giao: " + deliveryLabel3d + " | " : "") +
        (shipLabel3d ? "Ship: " + shipLabel3d + " | " : "") +
        (payLabel3d ? "TT: " + payLabel3d + " | " : "") +
        (fileSummaryStr ? "Files: " + fileSummaryStr + " | " : "") +
        (data.printerName ? String(data.printerName) + " · " : "") +
        String(data.note || "Chờ in");

      var defaultShopPct3d = Number((setupObj && setupObj.defaultShopCommissionPercent) || 25);
      var isAdminDirect3d = data.approvedByAdmin === true;
      var pendingApproval3d = !isAdminDirect3d;
      var p3dRow13 = [
        p3dTime,
        p3dId,
        String(data.customerName || "Khách hàng"),
        String(data.customerPhone || ""),
        String(data.customerEmail || ""),
        matInfo,
        weightG,
        qty3d,
        total3d,
        driveUrl || p3dDriveCode,
        Boolean(data.claimedByPrinter),
        statusNote,
        String(data.printerName || "")
      ];

      var confirmedDeposit3d =
        payStatus3d === "qr_verified"
          ? (payMethod3d === "transfer" ? total3d : depositAmt3d)
          : 0;

      var donHangItemsSummary =
        "[In 3D] " + matInfo +
        (weightG > 0 ? " · " + weightG + "g" : "") +
        " · SL " + qty3d +
        (fileSummaryStr ? " · " + fileSummaryStr : (p3dFileName ? " · " + p3dFileName : "")) +
        (deliveryLabel3d ? " · Hạn giao: " + deliveryLabel3d : "") +
        (payMethod3d === "cod" && depositAmt3d > 0 ? " · Cọc 30%: " + depositAmt3d.toLocaleString("vi-VN") + "đ · Thu COD: " + codRemain3d.toLocaleString("vi-VN") + "đ" : "");
      upsertPrint3DOrderInDonHangGas(getOrCreateSheet("DonHang"), {
        id: p3dId,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail,
        shippingAddress: shipLabel3d || "Nhận trực tiếp tại xưởng",
        itemsSummary: donHangItemsSummary,
        totalAmount: total3d,
        paymentMethod: payMethod3d,
        paymentStatus: payStatus3d,
        transferCode: transferCode3d,
        depositPaidAmount: confirmedDeposit3d,
        depositTargetAmount: depositAmt3d,
        statusLabel: isAdminDirect3d ? "Đang chuẩn bị" : "Chờ duyệt"
      });

      if (isAdminDirect3d) {
        writePrint3DRowGas(p3dSheet, p3dRow13);
        var btSheetNew = getOrCreateSheet("BangTinhTienCTV");
        upsertOrderInBangTinhTienGas(btSheetNew, {
          id: p3dId,
          material: matInfo,
          weightGrams: weightG,
          printerName: String(data.printerName || ""),
          actualWeightGrams: weightG,
          shopCommissionPercent: defaultShopPct3d,
          adminConfirmed: false,
          payoutWeekKey: getIsoWeekKeyGas(),
          payoutStatus: "unpaid"
        });
        try { syncDonIn3DToPublicCtvSheetGas(); } catch (syncDirErr) {}
      } else {
        stagePendingPrint3DOrderGas(p3dRow13, defaultShopPct3d);
      }

      var quotedByEmail = false;
      if (data.autoQuoteEmail !== false && total3d > 0 && data.customerEmail) {
        quotedByEmail = sendPrint3DQuoteEmailDirect({
          id: p3dId,
          customerName: data.customerName || "Quý khách",
          customerEmail: data.customerEmail,
          material: matInfo,
          fileSummary: fileSummaryStr,
          weightGrams: weightG,
          quantity: qty3d,
          totalAmount: total3d,
          deliveryLabel: deliveryLabel3d,
          shippingLabel: shipLabel3d,
          paymentLabel: payLabel3d,
          subtotalAmount: subtotal3d,
          rushSurchargePercent: rushPct3d,
          rushFeeAmount: rushFee3d,
          printTime: estPrintTime,
          dimensions: dims3d
        });
      }

      var tgNew3dMsg =
        "🖨️ <b>ĐƠN IN 3D MỚI #" + escHtml(p3dId) + "</b>" +
        (pendingApproval3d ? " <i>(Chờ duyệt ở DonHang)</i>" : "") + "\\n" +
        "👤 Khách: <b>" + escHtml(data.customerName || "") + "</b> | SĐT: <code>" + escHtml(data.customerPhone || "") + "</code>\\n" +
        "🧱 Vật liệu: <b>" + escHtml(matInfo) + "</b> | Tổng SL: " + qty3d + "\\n" +
        (deliveryLabel3d ? "📅 Hạn giao: <b>" + escHtml(deliveryLabel3d) + "</b>\\n" : "") +
        (shipLabel3d ? "🚚 Giao nhận: <b>" + escHtml(shipLabel3d) + "</b>\\n" : "") +
        "💳 Thanh toán: <b>" + escHtml(payLabel3d) + "</b>\\n" +
        (confirmedDeposit3d > 0
          ? "💵 Đã cọc/TT: <b>" + confirmedDeposit3d.toLocaleString("vi-VN") + "đ</b> · Còn thiếu (COD): <b>" + Math.max(0, total3d - confirmedDeposit3d).toLocaleString("vi-VN") + "đ</b>\\n"
          : (total3d > 0 ? "💵 Đã cọc: <b>0đ</b> · Còn thiếu: <b>" + total3d.toLocaleString("vi-VN") + "đ</b>\\n" : "")) +
        (fileSummaryStr ? "📦 File: <code>" + escHtml(fileSummaryStr) + "</code>\\n" : "") +
        (dims3d ? "📐 Kích thước: <code>" + escHtml(dims3d) + "</code>\\n" : "") +
        "⚖️ Khối lượng tổng: <b>" + weightG + "g</b>" +
        (estPrintTime ? " · ⏱ " + escHtml(estPrintTime) : "") + "\\n" +
        (total3d > 0 ? "💰 Báo giá tự động: <b>" + total3d.toLocaleString("vi-VN") + "đ</b>\\n" : "💰 Chờ cân báo giá\\n") +
        "📁 File Drive: " + (driveUrl ? driveUrl : escHtml(p3dDriveCode)) + "\\n" +
        (gcodeDriveUrl ? "🧾 G-code tóm tắt: " + gcodeDriveUrl + "\\n" : "") +
        (quotedByEmail ? "📧 Đã tự động gửi Gmail báo giá cho khách.\\n" : "") +
        (pendingApproval3d ? "⏳ <b>Chờ Admin xác nhận tiền &amp; duyệt bên DonHang (hoặc bấm nút dưới) để đẩy sang DonIn3D cho CTV nhận in.</b>" : "");

      if (pendingApproval3d) {
        sendTelegramHtmlWithKeyboard(tgNew3dMsg, {
          inline_keyboard: [
            [
              { text: "✅ Đã nhận 100% · Đẩy DonIn3D", callback_data: "pay_ok:" + p3dId },
              { text: "💰 Đã nhận cọc 30% · Đẩy DonIn3D", callback_data: "dep_ok:" + p3dId }
            ],
            [
              { text: "🔧 Duyệt đơn · Đẩy DonIn3D", callback_data: "st:preparing:" + p3dId }
            ]
          ]
        });
      } else {
        sendTelegramNotice(tgNew3dMsg);
      }

      return ContentService.createTextOutput(
        JSON.stringify({
          ok: true,
          type: "print3d_order",
          id: p3dId,
          driveUrl: driveUrl,
          gcodeDriveUrl: gcodeDriveUrl,
          driveFileCode: p3dDriveCode,
          weightGrams: weightG,
          totalAmount: total3d,
          dimensions: dims3d,
          printTime: estPrintTime,
          quotedByEmail: quotedByEmail,
          syncedToDonHang: true,
          pendingApproval: pendingApproval3d
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data && data.type === "print3d_update") {
      var updSheet = getOrCreateSheet("DonIn3D");
      ensureDonIn3DHeadersGas(updSheet);
      var updRows = updSheet.getDataRange().getValues();
      var target3dId = String(data.id || "").trim();
      var btSheetUpd = getOrCreateSheet("BangTinhTienCTV");
      var existingBtFound = findOrderRowInBangTinhTienGas(btSheetUpd, target3dId);
      var wasConfirmed = existingBtFound.existingRow !== -1
        ? (btSheetUpd.getRange(existingBtFound.existingRow, 13).getValue() === true ||
           String(btSheetUpd.getRange(existingBtFound.existingRow, 13).getValue()).toUpperCase() === "TRUE")
        : false;
      var matchedWeightG = Number(data.weightGrams || 0);
      var matchedMatStr = String(data.material || "PLA");

      for (var r3 = updRows.length - 1; r3 >= 1; r3--) {
        if (String(updRows[r3][1]).trim() === target3dId) {
          var wasClaimed = updRows[r3][10] === true || String(updRows[r3][10]).toUpperCase() === "TRUE";
          var wasDone = String(updRows[r3][11] || "").indexOf("In xong") !== -1;
          matchedWeightG = typeof data.weightGrams === "number" ? data.weightGrams : Number(updRows[r3][6] || 0);
          matchedMatStr = String(updRows[r3][5] || data.material || "PLA");

          if (typeof data.weightGrams === "number") updSheet.getRange(r3 + 1, 7).setValue(data.weightGrams);
          if (typeof data.quantity === "number") updSheet.getRange(r3 + 1, 8).setValue(data.quantity);
          if (typeof data.totalAmount === "number") updSheet.getRange(r3 + 1, 9).setValue(data.totalAmount);
          if (typeof data.claimedByPrinter === "boolean") updSheet.getRange(r3 + 1, 11).setValue(data.claimedByPrinter);
          var existingNoteStr = String(updRows[r3][11] || "");
          var preservedTags = [];
          var existingParts = existingNoteStr.split("|");
          for (var ep = 0; ep < existingParts.length; ep++) {
            var seg = existingParts[ep].trim();
            if (seg.indexOf("Hạn giao:") === 0 || seg.indexOf("Ship:") === 0 || seg.indexOf("TT:") === 0 || seg.indexOf("Files:") === 0) {
              preservedTags.push(seg);
            }
          }
          var stLabel = data.printStatus === "done" ? "In xong" : data.printStatus === "printing" ? "Đang in" : "Chờ in";
          var noteCell = (preservedTags.length > 0 ? preservedTags.join(" | ") + " | " : "") + (data.printerName ? String(data.printerName) + " · " : "") + stLabel;
          updSheet.getRange(r3 + 1, 12).setValue(noteCell);

          if (typeof data.printerName === "string") updSheet.getRange(r3 + 1, 13).setValue(data.printerName);
          updSheet.getRange(r3 + 1, 11).insertCheckboxes();

          var updatedRowVals = updSheet.getRange(r3 + 1, 1, 1, DON_IN_3D_HEADERS.length).getValues()[0];
          if (!wasClaimed && data.claimedByPrinter === true) {
            sendPrint3DEmail(updatedRowVals, "printing");
          } else if (!wasDone && data.printStatus === "done") {
            sendPrint3DEmail(updatedRowVals, "done");
          }
          break;
        }
      }

      var btRowUpd = upsertOrderInBangTinhTienGas(btSheetUpd, {
        id: target3dId,
        material: matchedMatStr,
        weightGrams: matchedWeightG,
        printerName: typeof data.printerName === "string" ? data.printerName : undefined,
        actualWeightGrams: typeof data.actualWeightGrams === "number" ? data.actualWeightGrams : undefined,
        shopCommissionPercent: typeof data.shopCommissionPercent === "number" ? data.shopCommissionPercent : undefined,
        adminConfirmed: typeof data.adminConfirmed === "boolean" ? data.adminConfirmed : undefined,
        payoutWeekKey: typeof data.payoutWeekKey === "string" ? data.payoutWeekKey : undefined,
        payoutStatus: data.payoutStatus
      });
      if (typeof data.totalAmount === "number" && data.totalAmount > 0) {
        var dhUpdSheet = getOrCreateSheet("DonHang");
        var dhLast = dhUpdSheet.getLastRow();
        if (dhLast >= 2) {
          var dhVals = dhUpdSheet.getRange(2, 2, dhLast - 1, 9).getValues();
          for (var di = dhVals.length - 1; di >= 0; di--) {
            if (String(dhVals[di][0] || "").trim() === target3dId) {
              var dhStatus = String(dhVals[di][8] || "").trim();
              if (!dhStatus || dhStatus === "Chờ duyệt" || dhStatus === "Đang chuẩn bị") {
                dhUpdSheet.getRange(di + 2, 7).setValue(data.totalAmount);
                applyDonHangRowFormulaGas(dhUpdSheet, di + 2);
              }
              break;
            }
          }
        }
      }
      SpreadsheetApp.flush();
      if (
        data.adminConfirmed !== undefined ||
        data.actualWeightGrams !== undefined ||
        data.shopCommissionPercent !== undefined
      ) {
        capNhatThanhToanCTV7NgayGas(false);
      }

      if (!wasConfirmed && data.adminConfirmed === true) {
        var btRowArr = btRowUpd > 0 ? btSheetUpd.getRange(btRowUpd, 1, 1, 15).getValues()[0] : [];
        var tgActualW = Number(btRowArr[5] || data.actualWeightGrams || matchedWeightG || 0);
        var tgMatCost = Number(btRowArr[7] || data.materialCostAmount || 0);
        var tgShopPct = Number(btRowArr[9] || data.shopCommissionPercent || 25);
        var tgShopFee = Number(btRowArr[10] || data.shopFeeAmount || 0);
        var tgCtvPay = Number(btRowArr[11] || data.printerPayoutAmount || 0);
        sendTelegramNotice(
          "✅ <b>ADMIN XÁC NHẬN ĐƠN IN #" + escHtml(target3dId) + "</b>\\n" +
          "🧑‍🔧 Người in: <b>" + escHtml(String(data.printerName || btRowArr[4] || "")) + "</b>\\n" +
          "⚖️ KL thực tế: <b>" + tgActualW + "g</b> · Tiền nhựa: <b>" + tgMatCost.toLocaleString("vi-VN") + "đ</b> · % Shop: <b>" + tgShopPct + "%</b>\\n" +
          "🏪 Tiền Shop: <b>" + tgShopFee.toLocaleString("vi-VN") + "đ</b> · 💸 Chuyển CTV: <b>" + tgCtvPay.toLocaleString("vi-VN") + "đ</b>\\n" +
          "📅 Tuần chốt: <code>" + escHtml(String(data.payoutWeekKey || btRowArr[13] || "")) + "</code>"
        );
      }

      try { syncDonIn3DToPublicCtvSheetGas(); } catch (syncUpdPubErr) {}

      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, type: "print3d_update", id: target3dId })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data && data.type === "ctv3d_upsert") {
      var ctvSheet = getOrCreateSheet("CongTacVienIn3D");
      var ctvId = String(data.id || ("CTV-" + Date.now())).trim();
      var ctvRow = [
        ctvId,
        String(data.name || "").trim(),
        String(data.phone || "").trim(),
        String(data.bankName || "").trim(),
        String(data.bankId || "").trim(),
        String(data.bankAccountNo || "").trim(),
        String(data.bankAccountName || "").trim(),
        String(data.note || "").trim()
      ];
      var ctvRows = ctvSheet.getDataRange().getValues();
      var ctvUpdated = false;
      for (var rc = ctvRows.length - 1; rc >= 1; rc--) {
        if (String(ctvRows[rc][0] || "").trim() === ctvId) {
          ctvSheet.getRange(rc + 1, 1, 1, ctvRow.length).setValues([ctvRow]);
          ctvUpdated = true;
          break;
        }
      }
      if (!ctvUpdated) {
        ctvSheet.appendRow(ctvRow);
      }
      try { syncCtvNamesToPublicSheetGas(); } catch (syncCtvUpErr) {}
      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, type: "ctv3d_upsert", id: ctvId })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data && data.type === "ctv3d_delete") {
      var delCtvSheet = getOrCreateSheet("CongTacVienIn3D");
      var delId = String(data.id || "").trim();
      var delRows = delCtvSheet.getDataRange().getValues();
      for (var rd = delRows.length - 1; rd >= 1; rd--) {
        if (String(delRows[rd][0] || "").trim() === delId) {
          delCtvSheet.deleteRow(rd + 1);
          break;
        }
      }
      try { syncCtvNamesToPublicSheetGas(); } catch (syncCtvDelErr) {}
      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, type: "ctv3d_delete", id: delId })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data && data.type === "ctv3d_mark_paid") {
      var btPaidSheet = getOrCreateSheet("BangTinhTienCTV");
      ensureBangTinhTienCTVGas(btPaidSheet);
      var payLogSheet = getOrCreateSheet("ThanhToanCTVIn3D");
      ensureThanhToanCTVHeadersGas(payLogSheet);
      var paidTimeStr = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");
      var paidDateShort = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy");
      var paidWeek = String(data.weekKey || "").trim();
      var paidOrderIds = Array.isArray(data.orderIds) ? data.orderIds : [];
      var paidSet = {};
      for (var po = 0; po < paidOrderIds.length; po++) {
        paidSet[String(paidOrderIds[po] || "").trim()] = true;
      }
      var btLastPaid = Math.max(btPaidSheet.getLastRow(), 35);
      var btPaidRows = btPaidSheet.getRange(35, 1, btLastPaid - 34, 15).getValues();
      for (var rp = 0; rp < btPaidRows.length; rp++) {
        var pid = String(btPaidRows[rp][0] || "").trim();
        if (paidSet[pid]) {
          btPaidSheet.getRange(35 + rp, 13).setValue(true);
          btPaidSheet.getRange(35 + rp, 13).insertCheckboxes();
          if (paidWeek && !String(btPaidRows[rp][13] || "").trim()) {
            btPaidSheet.getRange(35 + rp, 14).setValue(paidWeek);
          }
          btPaidSheet.getRange(35 + rp, 15).setValue("Đã chuyển (" + paidDateShort + ")");
        }
      }

      var paidCtvName = String(data.collaboratorName || "").trim();
      var paidRowValues = [
        paidTimeStr,
        paidWeek,
        String(data.collaboratorId || ""),
        paidCtvName,
        String(data.collaboratorPhone || ""),
        String(data.bankSummary || ""),
        paidOrderIds.length + " đơn: " + paidOrderIds.join(", "),
        Number(data.totalActualWeightGrams || 0),
        Number(data.totalMaterialCost || 0),
        Number(data.totalShopFee || 0),
        Number(data.totalPrinterPayout || 0),
        true,
        "Đã chuyển (" + paidDateShort + ")"
      ];
      var matchedTtRow = -1;
      var ttPaidLast = payLogSheet.getLastRow();
      if (ttPaidLast >= 2 && paidCtvName) {
        var existingPaidScan = payLogSheet.getRange(2, 1, ttPaidLast - 1, THANH_TOAN_CTV_HEADERS.length).getValues();
        for (var ep = 0; ep < existingPaidScan.length; ep++) {
          var epWeek = String(existingPaidScan[ep][1] || "").trim();
          var epName = String(existingPaidScan[ep][3] || "").trim().toLowerCase();
          var epChecked = existingPaidScan[ep][11] === true || String(existingPaidScan[ep][11]).toUpperCase() === "TRUE";
          var epStatus = String(existingPaidScan[ep][12] || "").trim();
          if (
            epName === paidCtvName.toLowerCase() &&
            (!paidWeek || !epWeek || epWeek === paidWeek) &&
            !epChecked &&
            epStatus.indexOf("Đã chuyển") === -1
          ) {
            matchedTtRow = 2 + ep;
            break;
          }
        }
      }
      if (matchedTtRow === -1) {
        matchedTtRow = Math.max(2, ttPaidLast + 1);
      }
      payLogSheet.getRange(matchedTtRow, 1, 1, paidRowValues.length).setValues([paidRowValues]);
      payLogSheet.getRange(matchedTtRow, 12).insertCheckboxes();
      if (payLogSheet.getRange(matchedTtRow, 1, 1, THANH_TOAN_CTV_HEADERS.length).setBackground) {
        payLogSheet.getRange(matchedTtRow, 1, 1, THANH_TOAN_CTV_HEADERS.length).setBackground("#ECFDF5");
      }
      if (payLogSheet.getRange(matchedTtRow, 8, 1, 1).setNumberFormat) {
        payLogSheet.getRange(matchedTtRow, 8, 1, 1).setNumberFormat("#,##0.##");
        payLogSheet.getRange(matchedTtRow, 9, 1, 3).setNumberFormat("#,##0");
      }

      sendTelegramNotice(
        "💸 <b>ĐÃ CHUYỂN TIỀN CỘNG TÁC VIÊN IN 3D</b>\\n" +
        "📅 Tuần đối soát: <code>" + escHtml(paidWeek) + "</code>\\n" +
        "🧑‍🔧 Người in: <b>" + escHtml(String(data.collaboratorName || "")) + "</b> (" + escHtml(String(data.collaboratorPhone || "")) + ")\\n" +
        "🏦 Tài khoản: " + escHtml(String(data.bankSummary || "")) + "\\n" +
        "📦 Đơn (" + paidOrderIds.length + "): <code>" + escHtml(paidOrderIds.join(", ")) + "</code>\\n" +
        "💰 Tiền cho Shop: <b>" + Number(data.totalShopFee || 0).toLocaleString("vi-VN") + "đ</b>\\n" +
        "✅ <b>Đã chuyển CTV: " + Number(data.totalPrinterPayout || 0).toLocaleString("vi-VN") + "đ</b>"
      );
      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, type: "ctv3d_mark_paid", weekKey: paidWeek, count: paidOrderIds.length })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data && data.type === "print3d_quote") {
      var qSheet = getOrCreateSheet("DonIn3D");
      var qRows = qSheet.getDataRange().getValues();
      var qId = String(data.id || "").trim();
      var qWeight = Number(data.weightGrams || 0);
      var qQty = Number(data.quantity || 1);
      var qTotal = Number(data.totalAmount || 0);
      var qEmail = String(data.customerEmail || "").trim();
      var qName = String(data.customerName || "Quý khách").trim();
      var qMat = String(data.material || "PLA+").trim();
      var qTime = String(data.printTime || "").trim();
      var qDim = String(data.dimensions || "").trim();
      var qDeliveryLabel = String(data.deliveryLabel || "").trim();
      var qSubtotal = Number(data.subtotalAmount || 0);
      var qRushPct = Number(data.rushSurchargePercent || 0);
      var qRushFee = Number(data.rushFeeAmount || 0);

      for (var rq = qRows.length - 1; rq >= 1; rq--) {
        if (String(qRows[rq][1]).trim() === qId) {
          if (qWeight > 0) qSheet.getRange(rq + 1, 7).setValue(qWeight);
          if (qQty > 0) qSheet.getRange(rq + 1, 8).setValue(qQty);
          if (qTotal > 0) qSheet.getRange(rq + 1, 9).setValue(qTotal);
          if (!qEmail) qEmail = String(qRows[rq][4] || "").trim();
          if (!qName || qName === "Quý khách") qName = String(qRows[rq][2] || "Quý khách").trim();
          if (!qDeliveryLabel) {
            var qNoteMatch = String(qRows[rq][11] || "").match(/Hạn giao:\\s*([^|]+)/);
            if (qNoteMatch) qDeliveryLabel = qNoteMatch[1].trim();
          }
          break;
        }
      }

      var quoteSent = false;
      if (qEmail && qEmail.indexOf("@") !== -1) {
        quoteSent = sendPrint3DQuoteEmailDirect({
          id: qId,
          customerName: qName,
          customerEmail: qEmail,
          material: qMat,
          weightGrams: qWeight,
          quantity: qQty,
          totalAmount: qTotal,
          deliveryLabel: qDeliveryLabel,
          subtotalAmount: qSubtotal,
          rushSurchargePercent: qRushPct,
          rushFeeAmount: qRushFee,
          printTime: qTime,
          dimensions: qDim
        });
      }

      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, type: "print3d_quote", id: qId, emailed: quoteSent })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var orderData = (data && data.order && data.order.id) ? data.order : data;
    var eventType = String((data && data.event) || "new_order");

    if (orderData && orderData.id && orderData.customerName) {
      if (data.senderName) orderData.senderName = data.senderName;
      if (data.replyTo) orderData.replyTo = data.replyTo;
      if (data.emailFooter) orderData.emailFooter = data.emailFooter;
      if (data.shopPhone) orderData.shopPhone = data.shopPhone;
      if (typeof data.buyerEmailEnabled === "boolean") {
        orderData.buyerEmailEnabled = data.buyerEmailEnabled;
      }

      if (String(orderData.id) === "DH-TEST-GMAIL") {
        sendBuyerOrderEmail(orderData, eventType);
        return ContentService.createTextOutput(
          JSON.stringify({ ok: true, type: "test_email", emailed: Boolean(orderData.customerEmail) })
        ).setMimeType(ContentService.MimeType.JSON);
      }

      var orderSheet = getOrCreateSheet("DonHang");
      ensureDonHangHeadersGas(orderSheet, false);

      if (eventType === "status_update" || eventType === "payment_confirmed") {
        var rows = orderSheet.getDataRange().getValues();
        var nextStatusKey = String(orderData.status || "pending");
        var nextStatusVi = ORDER_STATUS_MAP[nextStatusKey] || "Chờ duyệt";
        var targetOrdId = String(orderData.id || "").trim();
        var is3dUpd = targetOrdId.indexOf("3D-") === 0;
        var hasPayConfirm = eventType === "payment_confirmed" || orderData.paymentStatus === "qr_verified";
        var reqDepAmt = typeof orderData.depositAmount === "number" && isFinite(orderData.depositAmount)
          ? Math.max(0, Number(orderData.depositAmount))
          : undefined;
        var matchedTotal = Number(orderData.totalAmount || 0);
        var matchedDep = reqDepAmt !== undefined ? reqDepAmt : 0;
        var matchedPayCol = "";

        for (var i = rows.length - 1; i >= 1; i--) {
          if (String(rows[i][1]).trim() === targetOrdId) {
            var rNumOrd = i + 1;
            var rowTotalOrd = Number(rows[i][6] || orderData.totalAmount || 0);
            matchedTotal = rowTotalOrd;
            if (hasPayConfirm) {
              var resolvedDep = reqDepAmt !== undefined
                ? reqDepAmt
                : (orderData.paymentMethod === "cod" ? Math.round(rowTotalOrd * 0.3) : rowTotalOrd);
              var resolvedPayCol =
                rowTotalOrd > 0 && resolvedDep > 0 && resolvedDep < rowTotalOrd
                  ? "Đã cọc 30% QR"
                  : "Đã nhận tiền QR";
              orderSheet.getRange(rNumOrd, 8).setValue(resolvedPayCol);
              orderSheet.getRange(rNumOrd, 12).setValue(resolvedDep);
              matchedDep = resolvedDep;
              matchedPayCol = resolvedPayCol;
              if (nextStatusVi === "Chờ duyệt") {
                nextStatusKey = "preparing";
                nextStatusVi = "Đang chuẩn bị";
              }
            } else if (reqDepAmt !== undefined && reqDepAmt > 0) {
              var partialCol = rowTotalOrd > 0 && reqDepAmt < rowTotalOrd ? "Đã cọc 30% QR" : "Đã nhận tiền QR";
              orderSheet.getRange(rNumOrd, 8).setValue(partialCol);
              orderSheet.getRange(rNumOrd, 12).setValue(reqDepAmt);
              matchedDep = reqDepAmt;
              matchedPayCol = partialCol;
            } else {
              matchedDep = Number(rows[i].length > 11 ? (rows[i][11] || 0) : 0);
              matchedPayCol = String(rows[i][7] || "");
            }
            orderSheet.getRange(rNumOrd, 10).setValue(nextStatusVi);
            if (orderData.customerEmail) {
              orderSheet.getRange(rNumOrd, 11).setValue(String(orderData.customerEmail));
            }
            applyDonHangRowFormulaGas(orderSheet, rNumOrd);
            break;
          }
        }

        if (
          is3dUpd &&
          (hasPayConfirm ||
            (reqDepAmt !== undefined && reqDepAmt > 0) ||
            nextStatusKey === "preparing" ||
            nextStatusKey === "packed" ||
            nextStatusKey === "dispatched" ||
            nextStatusKey === "shipping" ||
            nextStatusKey === "completed")
        ) {
          promotePendingPrint3DOrderGas(targetOrdId, {
            payCol: matchedPayCol || (orderData.paymentMethod === "cod" && matchedDep > 0 && matchedDep < matchedTotal ? "Đã cọc 30% QR" : "Đã nhận tiền QR"),
            totalAmount: matchedTotal,
            depositAmount: matchedDep,
            transferCode: orderData.transferCode
          });
        }

        sendBuyerOrderEmail(orderData, eventType);
        return ContentService.createTextOutput(
          JSON.stringify({ ok: true, type: "order_updated", emailed: Boolean(orderData.customerEmail) })
        ).setMimeType(ContentService.MimeType.JSON);
      }

      var existingOrdLast = orderSheet.getLastRow();
      if (existingOrdLast >= 2) {
        var existingOrdIds = orderSheet.getRange(2, 2, existingOrdLast - 1, 1).getValues();
        for (var oi = existingOrdIds.length - 1; oi >= 0; oi--) {
          if (String(existingOrdIds[oi][0] || "").trim() === String(orderData.id || "").trim()) {
            return ContentService.createTextOutput(
              JSON.stringify({ ok: true, type: "order", duplicated: true })
            ).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }

      var itemsSummary = (orderData.items || [])
        .map(function (it) { return it.code + " x" + it.quantity; })
        .join(", ");
      var totalOrdNew = Number(orderData.totalAmount || 0);
      var depOrdNew =
        typeof orderData.depositAmount === "number" && isFinite(orderData.depositAmount)
          ? Math.max(0, Number(orderData.depositAmount))
          : (orderData.paymentMethod === "transfer" && orderData.paymentStatus === "qr_verified" ? totalOrdNew : 0);
      var payTextNew =
        orderData.paymentMethod === "transfer"
          ? (orderData.paymentStatus === "qr_verified" ? "Đã nhận tiền QR" : "Chuyển khoản QR")
          : depOrdNew > 0
            ? (totalOrdNew > 0 && depOrdNew >= totalOrdNew ? "Đã nhận tiền QR" : "Đã cọc 30% QR")
            : "COD";
      var newOrdRow = Math.max(2, orderSheet.getLastRow() + 1);
      orderSheet.getRange(newOrdRow, 1, 1, DON_HANG_HEADERS.length).setValues([[
        new Date(),
        String(orderData.id),
        String(orderData.customerName),
        String(orderData.customerPhone || ""),
        String(orderData.shippingAddress || ""),
        itemsSummary,
        totalOrdNew,
        payTextNew,
        String(orderData.transferCode || ""),
        ORDER_STATUS_MAP[String(orderData.status || "pending")] || "Chờ duyệt",
        String(orderData.customerEmail || ""),
        depOrdNew,
        Math.max(0, totalOrdNew - depOrdNew)
      ]]);
      applyDonHangRowFormulaGas(orderSheet, newOrdRow);

      var emailed = false;
      if (orderData.paymentMethod === "transfer" && orderData.paymentStatus === "qr_verified") {
        sendBuyerOrderEmail(orderData, "payment_confirmed");
        emailed = Boolean(orderData.customerEmail);
      }

      if (data.notifyTelegram === true) {
        try {
          var newOrdRowVals = orderSheet.getRange(newOrdRow, 1, 1, DON_HANG_HEADERS.length).getValues()[0];
          var tgOrderObj = rowValuesToOrderObj(newOrdRowVals);
          sendTelegramHtmlWithKeyboard(buildTelegramTextForOrder(tgOrderObj), buildTelegramKeyboardForOrder(tgOrderObj));
        } catch (tgNewErr) {
          Logger.log("notifyTelegram new_order note: " + tgNewErr);
        }
      }

      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, type: "order", emailed: emailed })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var content = String(data.content || data.description || "").toUpperCase();
    var amount = Number(data.transferAmount || data.amount || 0);
    var refCode = String(data.referenceCode || data.id || "");
    var bankSheet = getOrCreateSheet("BienDongSoDu");
    bankSheet.appendRow([new Date(), content, amount, refCode, String(data.gateway || "MB Bank")]);

    if (amount > 0 && content) {
      sendTelegramNotice(
        "<b>TIỀN VỀ TÀI KHOẢN MB " + BANK_ACCOUNT + "</b>\\n" +
        "• Số tiền: <b>" + amount.toLocaleString("vi-VN") + "đ</b>\\n" +
        "• Nội dung: <code>" + content + "</code>"
      );
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true, verified: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  if (!e) {
    khoiTaoBangLocDon();
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, message: "Initialized sheets" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var params = e.parameter ? e.parameter : {};
  if (String(params.action || "") === "list_orders") {
    var orderSheet = getOrCreateSheet("DonHang");
    var orderRows = orderSheet.getDataRange().getValues();
    var list = [];
    for (var r = orderRows.length - 1; r >= 1; r--) {
      var obj = rowValuesToOrderObj(orderRows[r]);
      if (!obj.id || obj.id === "DH-TEST-GMAIL") continue;
      obj.createdAt = orderRows[r][0] ? String(orderRows[r][0]) : new Date().toISOString();
      list.push(obj);
    }
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, orders: list })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  if (String(params.action || "") === "list_3d_orders") {
    try { pullCtvClaimsFromPublicSheetGas(); } catch (getPullErr) {}
    var p3dSheet = getOrCreateSheet("DonIn3D");
    compactDonIn3DSheetGas(p3dSheet);
    var btListSheet = getOrCreateSheet("BangTinhTienCTV");
    var settlementById = {};
    var btLastList = Math.max(btListSheet.getLastRow(), 35);
    var btListRows = btListSheet.getRange(35, 1, btLastList - 34, 15).getValues();
    for (var bl = 0; bl < btListRows.length; bl++) {
      var bRow = btListRows[bl];
      var bOrderId = String(bRow[0] || "").trim();
      if (!bOrderId) continue;
      settlementById[bOrderId] = {
        printerName: String(bRow[4] || "").trim(),
        actualWeightGrams: Number(bRow[5] || 0),
        materialCostPerGram: Number(bRow[6] || 0),
        materialCostAmount: Number(bRow[7] || 0),
        netAfterMaterialAmount: Number(bRow[8] || 0),
        shopCommissionPercent:
          bRow[9] !== "" && bRow[9] !== null && bRow[9] !== undefined && isFinite(Number(bRow[9]))
            ? Number(bRow[9])
            : undefined,
        shopFeeAmount: Number(bRow[10] || 0),
        printerPayoutAmount: Number(bRow[11] || 0),
        adminConfirmed: bRow[12] === true || String(bRow[12]).toUpperCase() === "TRUE",
        payoutWeekKey: String(bRow[13] || "").trim(),
        payoutStatus: String(bRow[14] || "").indexOf("Đã chuyển") !== -1 ? "paid" : "unpaid"
      };
    }

    var p3dRows = p3dSheet.getDataRange().getValues();
    var p3dList = [];
    for (var j = p3dRows.length - 1; j >= 1; j--) {
      var row3 = p3dRows[j];
      var id3 = String(row3[1] || "").trim();
      if (!id3) continue;
      var matRaw = String(row3[5] || "PLA");
      var noteRaw = String(row3[11] || "");
      var printSt = noteRaw.indexOf("In xong") !== -1 ? "done" : noteRaw.indexOf("Đang in") !== -1 ? "printing" : "waiting";
      var deliveryMatch = noteRaw.match(/Hạn giao:\\s*([^|]+)/);
      var parsedDeliveryLabel = deliveryMatch ? deliveryMatch[1].trim() : "";
      var parsedRushPct = parsedDeliveryLabel.indexOf("+15%") !== -1 ? 15 : parsedDeliveryLabel.indexOf("+6%") !== -1 ? 6 : 0;
      var shipMatch = noteRaw.match(/Ship:\\s*([^|]+)/);
      var parsedShipAddr = shipMatch ? shipMatch[1].trim() : "";
      var parsedShipMethod = parsedShipAddr.indexOf("Nhận trực tiếp") !== -1 ? "pickup" : parsedShipAddr ? "delivery" : undefined;
      var payMatch = noteRaw.match(/TT:\\s*([^|]+)/);
      var parsedPayRaw = payMatch ? payMatch[1].trim() : "";
      var parsedPayMethod = parsedPayRaw ? (parsedPayRaw.indexOf("VietQR") !== -1 ? "transfer" : "cod") : undefined;
      var transferCodeMatch = parsedPayRaw.match(/\\(([A-Z][A-Z0-9_-]{4,})\\)/);
      var parsedTransferCode = transferCodeMatch ? transferCodeMatch[1] : "";
      var parsedPayStatus = parsedPayMethod === "transfer"
        ? (parsedPayRaw.indexOf("Đã CK") !== -1 ? "qr_verified" : "qr_reported")
        : parsedPayMethod === "cod"
          ? (parsedPayRaw.indexOf("Đã cọc") !== -1 ? "qr_verified" : (parsedPayRaw.indexOf("Cọc 30%") !== -1 ? "qr_reported" : "cod_unpaid"))
          : undefined;
      var totalVal3 = Number(row3[8] || 0);
      var parsedDepositAmt = parsedPayMethod === "cod" && totalVal3 > 0 ? Math.round(totalVal3 * 0.3) : 0;
      var parsedCodRemainAmt = parsedPayMethod === "cod" && totalVal3 > 0 ? Math.max(0, totalVal3 - parsedDepositAmt) : 0;
      var tailSeg = noteRaw.split("|").pop().trim();
      var parsedPrinter = tailSeg.indexOf("·") !== -1 ? tailSeg.split("·")[0].trim() : "";
      var col13Printer = String(row3[12] || "").trim();
      var stObj = settlementById[id3] || null;
      p3dList.push({
        id: id3,
        createdAt: row3[0] ? String(row3[0]) : new Date().toISOString(),
        customerName: String(row3[2] || ""),
        customerPhone: String(row3[3] || ""),
        customerEmail: String(row3[4] || ""),
        material: matRaw.split("·")[0].trim(),
        infill: "20%",
        weightGrams: Number(row3[6] || 0),
        quantity: Number(row3[7] || 1),
        totalAmount: totalVal3,
        driveFileUrl: String(row3[9] || "").indexOf("http") === 0 ? String(row3[9]) : "",
        driveFileCode: String(row3[9] || ""),
        claimedByPrinter: row3[10] === true || String(row3[10]).toUpperCase() === "TRUE",
        printerName: (stObj && stObj.printerName) || col13Printer || parsedPrinter,
        printStatus: printSt,
        actualWeightGrams: stObj && stObj.actualWeightGrams > 0 ? stObj.actualWeightGrams : 0,
        materialCostPerGram: stObj && stObj.materialCostPerGram > 0 ? stObj.materialCostPerGram : 0,
        materialCostAmount: stObj && stObj.materialCostAmount > 0 ? stObj.materialCostAmount : 0,
        netAfterMaterialAmount: stObj && stObj.netAfterMaterialAmount > 0 ? stObj.netAfterMaterialAmount : 0,
        shopCommissionPercent: stObj ? stObj.shopCommissionPercent : undefined,
        shopFeeAmount: stObj ? stObj.shopFeeAmount : 0,
        printerPayoutAmount: stObj ? stObj.printerPayoutAmount : 0,
        adminConfirmed: stObj ? stObj.adminConfirmed : false,
        payoutWeekKey: stObj ? stObj.payoutWeekKey : "",
        payoutStatus: stObj ? stObj.payoutStatus : "unpaid",
        deliveryLabel: parsedDeliveryLabel,
        rushSurchargePercent: parsedRushPct,
        shippingMethod: parsedShipMethod,
        shippingAddress: parsedShipAddr,
        paymentMethod: parsedPayMethod,
        transferCode: parsedTransferCode,
        paymentStatus: parsedPayStatus,
        depositAmount: parsedDepositAmt,
        codRemainingAmount: parsedCodRemainAmt,
        note: noteRaw
      });
    }
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: true,
        orders: p3dList,
        publicCtvSheetUrl: getPublicCtvDonIn3DUrlGas(),
        pendingApprovalCount: countPendingPrint3DOrdersGas()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  if (String(params.action || "") === "list_3d_collaborators") {
    var ctvSheet = getOrCreateSheet("CongTacVienIn3D");
    var ctvRows = ctvSheet.getDataRange().getValues();
    var ctvList = [];
    for (var jc = 1; jc < ctvRows.length; jc++) {
      var rCtv = ctvRows[jc];
      var cName = String(rCtv[1] || "").trim();
      if (!cName) continue;
      var cId = String(rCtv[0] || "").trim() || ("CTV-ROW-" + (jc + 1));
      ctvList.push({
        id: cId,
        name: cName,
        phone: String(rCtv[2] || "").trim(),
        bankName: String(rCtv[3] || "").trim(),
        bankId: String(rCtv[4] || "").trim(),
        bankAccountNo: String(rCtv[5] || "").trim(),
        bankAccountName: String(rCtv[6] || "").trim(),
        note: String(rCtv[7] || "").trim(),
        createdAt: new Date().toISOString()
      });
    }
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, collaborators: ctvList })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var code = String(params.code || "").trim().toUpperCase();
  var reqAmount = Number(params.amount || 0);

  if (!code) {
    return ContentService.createTextOutput(JSON.stringify({ ok: true, verified: false }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var sheet = getOrCreateSheet("BienDongSoDu");
  var rows = sheet.getDataRange().getValues();
  var verified = false;

  for (var i = rows.length - 1; i >= 1; i--) {
    var content = String(rows[i][1] || "").toUpperCase();
    var paidAmount = Number(rows[i][2] || 0);
    if (content.indexOf(code) !== -1 && (reqAmount <= 0 || paidAmount >= reqAmount)) {
      verified = true;
      break;
    }
  }

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, verified: verified, code: code, amount: reqAmount })
  ).setMimeType(ContentService.MimeType.JSON);
}
`,Xc={free:null,"1:1":1,"4:3":4/3,"16:9":16/9},Yf=({imageUrl:e,onCancel:t,onSave:r})=>{const a=E.useRef(null),[s,i]=E.useState(null),[o,l]=E.useState(""),[d,u]=E.useState(0),[g,p]=E.useState(0),[w,N]=E.useState(!1),[c,k]=E.useState("free"),[C,h]=E.useState({x:0,y:0,w:1,h:1}),[m,S]=E.useState(!1),P=E.useRef(null);E.useEffect(()=>{l(""),i(null);const A=new Image;/^https?:\/\//i.test(e)&&!e.startsWith(window.location.origin)&&(A.crossOrigin="anonymous"),A.onload=()=>{i(A),u(0),p(0),N(!1),k("free"),h({x:0,y:0,w:1,h:1})},A.onerror=()=>{l("Không thể tải ảnh để chỉnh sửa (ảnh ngoài có thể bị chặn CORS).")},A.src=e},[e]),E.useEffect(()=>{const A=R=>{R.key==="Escape"?(R.preventDefault(),C.x>.001||C.y>.001||C.w<.998||C.h<.998?(P.current=null,k("free"),h({x:0,y:0,w:1,h:1})):t()):R.key==="Enter"&&s&&!m&&(R.preventDefault(),X())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[C,t,s,m]);const F=(d+g)*Math.PI/180,M=s?{w:Math.max(1,Math.round(Math.abs(s.naturalWidth*Math.cos(F))+Math.abs(s.naturalHeight*Math.sin(F)))),h:Math.max(1,Math.round(Math.abs(s.naturalWidth*Math.sin(F))+Math.abs(s.naturalHeight*Math.cos(F))))}:{w:800,h:600};E.useEffect(()=>{const A=a.current;if(!A||!s)return;const L=Math.min(640/M.w,300/M.h,1),v=Math.max(1,Math.round(M.w*L)),x=Math.max(1,Math.round(M.h*L));A.width=v,A.height=x;const j=A.getContext("2d");if(!j)return;j.fillStyle="#0A1428",j.fillRect(0,0,v,x),j.save(),j.translate(v/2,x/2),j.rotate(F),j.scale(w?-1:1,1);const G=s.naturalWidth*L,V=s.naturalHeight*L;j.drawImage(s,-G/2,-V/2,G,V),j.restore()},[s,F,w,M.w,M.h]);const $=A=>{k(A);const R=Xc[A];if(!R){h({x:0,y:0,w:1,h:1});return}const f=M.w/M.h;let L=1,v=1;f>R?(v=1,L=R/f):(L=1,v=f/R),h({x:(1-L)/2,y:(1-v)/2,w:L,h:v})},D=A=>{u(R=>(R+A+360)%360),h({x:0,y:0,w:1,h:1}),k("free")},U=A=>{const R=A.currentTarget.getBoundingClientRect(),f=Math.min(1,Math.max(0,(A.clientX-R.left)/R.width)),L=Math.min(1,Math.max(0,(A.clientY-R.top)/R.height));return{x:f,y:L}},J=A=>{if(!s)return;A.currentTarget.setPointerCapture(A.pointerId);const R=U(A),f=C.w<.99||C.h<.99?R.x>=C.x&&R.x<=C.x+C.w&&R.y>=C.y&&R.y<=C.y+C.h:!1;P.current={mode:f?"move":"draw",startX:R.x,startY:R.y,origCrop:C}},se=A=>{if(!P.current)return;const R=U(A),{mode:f,startX:L,startY:v,origCrop:x}=P.current;if(f==="move"){const Q=R.x-L,te=R.y-v,Z=Math.min(1-x.w,Math.max(0,x.x+Q)),ke=Math.min(1-x.h,Math.max(0,x.y+te));h({x:Z,y:ke,w:x.w,h:x.h});return}let j=Math.min(L,R.x),G=Math.min(v,R.y),V=Math.abs(R.x-L),W=Math.abs(R.y-v);const _=Xc[c];if(_&&V>.02){const Q=M.w/M.h;W=V*Q/_,v>R.y?G=Math.max(0,v-W):G=v,G+W>1&&(W=1-G,V=W*_/Q,j=L>R.x?Math.max(0,L-V):L)}V>=.03&&W>=.03&&h({x:j,y:G,w:Math.min(1-j,V),h:Math.min(1-G,W)})},re=()=>{P.current=null},X=async()=>{if(!(!s||m)){S(!0);try{const A=document.createElement("canvas");A.width=M.w,A.height=M.h;const R=A.getContext("2d");if(!R)throw new Error("Canvas not supported");R.fillStyle="#0A1428",R.fillRect(0,0,M.w,M.h),R.save(),R.translate(M.w/2,M.h/2),R.rotate(F),R.scale(w?-1:1,1),R.drawImage(s,-s.naturalWidth/2,-s.naturalHeight/2,s.naturalWidth,s.naturalHeight),R.restore();const f=Math.max(0,Math.round(C.x*M.w)),L=Math.max(0,Math.round(C.y*M.h)),v=Math.max(1,Math.min(M.w-f,Math.round(C.w*M.w))),x=Math.max(1,Math.min(M.h-L,Math.round(C.h*M.h))),j=document.createElement("canvas");j.width=v,j.height=x;const G=j.getContext("2d");if(!G)throw new Error("Canvas not supported");G.drawImage(A,f,L,v,x,0,0,v,x);const V=await new Promise(_=>j.toBlob(Q=>_(Q),"image/jpeg",.92));if(!V)throw new Error("Không xuất được file ảnh");const W=new File([V],`edited-${Date.now()}.jpg`,{type:"image/jpeg"});await r(W)}catch(A){l(A instanceof Error?A.message:"Lỗi khi lưu ảnh đã chỉnh sửa.")}finally{S(!1)}}},ce=C.x>.001||C.y>.001||C.w<.998||C.h<.998,ee=Math.max(1,Math.round(C.w*M.w)),T=Math.max(1,Math.round(C.h*M.h));return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-4",children:n.jsxs("div",{className:"flex w-full max-w-3xl max-h-[92vh] flex-col rounded-2xl border border-slate-700 bg-[#0B1324] text-slate-100 shadow-2xl overflow-hidden",children:[n.jsxs("div",{className:"flex shrink-0 items-center justify-between border-b border-[#1E325C] px-5 py-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(bm,{className:"h-4 w-4 text-sky-400"}),n.jsx("h3",{className:"font-mono text-sm font-bold",children:"Chỉnh sửa ảnh sản phẩm (Cắt & Xoay góc nhỏ)"})]}),n.jsx("button",{type:"button",onClick:t,className:"rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white",children:n.jsx(Gn,{className:"h-4 w-4"})})]}),n.jsxs("div",{className:"shrink-0 space-y-2 border-b border-[#1E325C] bg-[#0F1930] px-5 py-2.5 text-xs",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>D(-90),className:"inline-flex items-center gap-1 rounded-md border border-[#1E325C] bg-[#162342] px-2.5 py-1.5 font-semibold hover:border-sky-500/50 hover:text-sky-300",children:[n.jsx(Nm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Xoay trái 90°"})]}),n.jsxs("button",{type:"button",onClick:()=>D(90),className:"inline-flex items-center gap-1 rounded-md border border-[#1E325C] bg-[#162342] px-2.5 py-1.5 font-semibold hover:border-sky-500/50 hover:text-sky-300",children:[n.jsx(X0,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Xoay phải 90°"})]}),n.jsxs("button",{type:"button",onClick:()=>N(A=>!A),className:`inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 font-semibold ${w?"border-sky-500 bg-sky-500/20 text-sky-300":"border-[#1E325C] bg-[#162342] hover:border-sky-500/50"}`,children:[n.jsx(V0,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Lật ngang"})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[n.jsx("span",{className:"text-slate-400 mr-1",children:"Tỷ lệ cắt:"}),["free","1:1","4:3","16:9"].map(A=>n.jsx("button",{type:"button",onClick:()=>$(A),className:`rounded-md border px-2 py-1 font-mono text-[11px] font-bold ${c===A?"border-sky-500 bg-sky-500 text-slate-950":"border-[#1E325C] bg-[#162342] text-slate-300 hover:border-sky-500/50"}`,children:A==="free"?"Tự do":A},A)),ce&&n.jsx("button",{type:"button",onClick:()=>{k("free"),h({x:0,y:0,w:1,h:1})},className:"rounded-md border border-rose-500/40 bg-rose-500/10 px-2 py-1 font-mono text-[11px] font-semibold text-rose-300 hover:bg-rose-500/20",children:"Hủy khung (Esc)"})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 pt-1 border-t border-[#1E325C]/70",children:[n.jsx("span",{className:"font-mono text-[11px] font-semibold text-slate-300 whitespace-nowrap",children:"Xoay góc nhỏ:"}),n.jsx("button",{type:"button",onClick:()=>p(A=>Math.max(-45,Number((A-1).toFixed(1)))),className:"rounded border border-[#1E325C] bg-[#162342] px-2 py-0.5 font-mono text-[11px] hover:border-sky-500/50",children:"-1°"}),n.jsx("input",{type:"range",min:-45,max:45,step:.5,value:g,onChange:A=>p(Number(A.target.value)),className:"flex-1 min-w-[140px] accent-sky-500 cursor-pointer"}),n.jsx("button",{type:"button",onClick:()=>p(A=>Math.min(45,Number((A+1).toFixed(1)))),className:"rounded border border-[#1E325C] bg-[#162342] px-2 py-0.5 font-mono text-[11px] hover:border-sky-500/50",children:"+1°"}),n.jsx("span",{className:"w-16 text-right font-mono text-[11px] font-bold text-sky-400",children:g>0?`+${g}°`:`${g}°`}),g!==0&&n.jsx("button",{type:"button",onClick:()=>p(0),className:"rounded border border-slate-700 px-2 py-0.5 text-[11px] text-slate-300 hover:text-white",children:"Về 0°"})]})]}),n.jsxs("div",{className:"flex-1 min-h-0 overflow-y-auto p-4 flex flex-col items-center justify-center bg-[#060A14]",children:[o?n.jsx("div",{className:"rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-xs text-rose-300",children:o}):s?n.jsxs("div",{onPointerDown:J,onPointerMove:se,onPointerUp:re,onPointerCancel:re,className:"relative inline-block overflow-hidden select-none touch-none cursor-crosshair border border-slate-700",children:[n.jsx("canvas",{ref:a,className:"block max-w-full"}),n.jsx("div",{style:{left:`${C.x*100}%`,top:`${C.y*100}%`,width:`${C.w*100}%`,height:`${C.h*100}%`,boxShadow:"0 0 0 9999px rgba(2, 6, 23, 0.62)"},className:"pointer-events-none absolute border-2 border-sky-400",children:n.jsxs("div",{className:"absolute -top-5 left-0 rounded bg-sky-500 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-950 whitespace-nowrap",children:[ee," × ",T," px"]})})]}):n.jsx("div",{className:"text-xs text-slate-400 font-mono",children:"Đang nạp ảnh..."}),n.jsxs("p",{className:"mt-2.5 text-[11px] text-slate-400 text-center",children:["Kéo chuột để khoanh/di chuyển vùng cắt. Nhấn ",n.jsx("kbd",{className:"rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-sky-300",children:"Esc"})," hủy khung cắt · ",n.jsx("kbd",{className:"rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-emerald-300",children:"Enter"})," để lưu ngay."]})]}),n.jsxs("div",{className:"flex shrink-0 items-center justify-between border-t border-[#1E325C] bg-[#0B1324] px-5 py-3",children:[n.jsx("button",{type:"button",onClick:()=>{u(0),p(0),N(!1),k("free"),h({x:0,y:0,w:1,h:1})},className:"text-xs font-semibold text-slate-400 hover:text-white",children:"Khôi phục ảnh gốc"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:t,className:"rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800",children:"Đóng"}),n.jsxs("button",{type:"button",disabled:!s||m,onClick:X,className:"inline-flex items-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-60 px-4 py-2 text-xs font-bold text-slate-950",children:[n.jsx(Kt,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:m?"Đang lưu...":"Áp dụng & Lưu ảnh (Enter)"})]})]})]})]})})},Jf=({cmsData:e,setCmsData:t,onGoTab:r})=>{const a=e.products.length,s=e.products.filter(k=>k.originType==="self-made").length,i=e.products.filter(k=>k.originType==="project-kit").length,o=e.products.filter(k=>k.originType==="commercial").length,l=e.products.reduce((k,C)=>k+C.stock,0),d=e.products.reduce((k,C)=>k+C.costPrice*C.stock,0),u=e.products.reduce((k,C)=>k+C.price*C.stock,0),g=e.products.filter(k=>k.stock<=k.minStockAlert),p=e.orders.filter(k=>k.status==="completed"),w=e.orders.filter(k=>k.status!=="completed"&&k.status!=="cancelled").length,N=p.reduce((k,C)=>k+C.totalAmount,0),c=p.reduce((k,C)=>k+C.items.reduce((h,m)=>h+Math.max(0,m.unitPrice-m.costPrice)*m.quantity,0),0);return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5",children:[n.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Tổng mặt hàng đang kinh doanh"}),n.jsxs("div",{className:"mt-1 text-2xl font-bold text-slate-900 dark:text-white",children:[a," mặt hàng"]}),n.jsxs("div",{className:"mt-1 font-mono text-xs text-sky-600 dark:text-sky-400",children:[s," mạch ĐK · ",i," SP đồ án · ",o," phụ kiện"]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5",children:[n.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Tổng tồn kho & Giá trị vốn"}),n.jsxs("div",{className:"mt-1 text-2xl font-bold text-slate-900 dark:text-white",children:[l," sản phẩm"]}),n.jsxs("div",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:["Vốn: ",ne(d)," · Bán: ",ne(u)]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5",children:[n.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Tình trạng đơn hàng"}),n.jsxs("div",{className:"mt-1 text-2xl font-bold text-slate-900 dark:text-white",children:[e.orders.length," đơn hàng"]}),n.jsxs("div",{className:"mt-1 font-mono text-xs text-sky-600 dark:text-sky-400",children:[w," đơn đang xử lý · ",p.length," hoàn thành"]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5",children:[n.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Doanh thu & Lợi nhuận (Đơn hoàn thành)"}),n.jsx("div",{className:"mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400",children:ne(N)}),n.jsxs("div",{className:"mt-1 text-xs text-emerald-600 dark:text-emerald-400",children:["Lợi nhuận gộp: ",ne(c)]})]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-6 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("h3",{className:"flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white",children:[n.jsx(nf,{className:"h-4 w-4 text-amber-500"}),n.jsxs("span",{children:["Cảnh báo mặt hàng sắp hết / hết kho (",g.length,")"]})]}),n.jsx("button",{type:"button",onClick:()=>r("inventory"),className:"text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline",children:"Mở bảng kho hàng →"})]}),g.length===0?n.jsxs("div",{className:"flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400",children:[n.jsx(rn,{className:"h-4 w-4"}),n.jsx("span",{children:"Tất cả mặt hàng trong kho đều đang đủ số lượng an toàn."})]}):n.jsx("div",{className:"divide-y divide-slate-200 dark:divide-[#1E325C]",children:g.map(k=>n.jsxs("div",{className:"py-2.5 flex flex-wrap items-center justify-between gap-3 text-sm",children:[n.jsxs("div",{children:[n.jsx("span",{className:"font-mono font-bold text-sky-600 dark:text-sky-400 mr-2",children:k.code}),n.jsx("span",{className:"font-semibold text-slate-900 dark:text-white",children:k.name.vi}),n.jsxs("span",{className:"ml-2 text-xs text-rose-500",children:["(Còn ",k.stock," ",k.unit," / Ngưỡng ",k.minStockAlert,")"]})]}),n.jsxs("button",{type:"button",onClick:()=>t(C=>$a(C,k.id,5,"Nhập bổ sung nhanh (+5)")),className:"inline-flex items-center gap-1 rounded border border-sky-500/40 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-500 hover:text-white transition-colors",children:[n.jsx(vm,{className:"h-3.5 w-3.5"}),n.jsxs("span",{children:["+ Nhập 5 ",k.unit]})]})]},k.id))})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-6 space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Lịch sử Nhập / Xuất kho gần đây"}),n.jsx("button",{type:"button",onClick:()=>r("orders"),className:"text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline",children:"Xem đơn hàng →"})]}),e.stockHistory.length===0?n.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"Chưa có biến động nhập/xuất kho nào được ghi nhận."}):n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full text-left text-xs",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"border-b border-slate-200 dark:border-[#1E325C] text-slate-500 dark:text-slate-400",children:[n.jsx("th",{className:"py-2 pr-3",children:"Thời gian"}),n.jsx("th",{className:"py-2 pr-3",children:"Mã SP"}),n.jsx("th",{className:"py-2 pr-3",children:"Biến động"}),n.jsx("th",{className:"py-2 pr-3",children:"Tồn sau"}),n.jsx("th",{className:"py-2",children:"Lý do"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200 dark:divide-[#1E325C]",children:e.stockHistory.slice(0,8).map(k=>n.jsxs("tr",{children:[n.jsx("td",{className:"py-2 pr-3 text-slate-500 dark:text-slate-400",children:new Date(k.timestamp).toLocaleString("vi-VN")}),n.jsx("td",{className:"py-2 pr-3 font-mono font-semibold text-sky-600 dark:text-sky-400",children:k.productCode}),n.jsx("td",{className:`py-2 pr-3 font-mono font-bold ${k.change>=0?"text-emerald-600 dark:text-emerald-400":"text-amber-500"}`,children:k.change>0?`+${k.change}`:k.change}),n.jsx("td",{className:"py-2 pr-3 font-mono font-semibold",children:k.stockAfter}),n.jsx("td",{className:"py-2",children:k.reason})]},k.id))})]})})]})]})},ex=({cmsData:e,setCmsData:t,onEditProductAt:r})=>{const[a,s]=E.useState("all"),[i,o]=E.useState(""),[l,d]=E.useState({}),[u,g]=E.useState({}),p=e.products.map((N,c)=>({p:N,idx:c})).filter(({p:N})=>{if(a==="self-made"&&N.originType!=="self-made"||a==="project-kit"&&N.originType!=="project-kit"||a==="commercial"&&N.originType!=="commercial"||a==="low"&&N.stock>N.minStockAlert)return!1;if(!i.trim())return!0;const c=i.toLowerCase();return N.code.toLowerCase().includes(c)||N.name.vi.toLowerCase().includes(c)||(N.customCategoryName||"").toLowerCase().includes(c)}),w=(N,c)=>{var h;const k=Math.max(1,Math.abs(l[N]||1)),C=((h=u[N])==null?void 0:h.trim())||(c>0?`Nhập thêm kho (+${k})`:`Xuất kho thủ công (-${k})`);t(m=>$a(m,N,c*k,C)),g(m=>({...m,[N]:""}))};return n.jsxs("div",{className:"space-y-5",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-4",children:[n.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"all",label:"Tất cả"},{id:"self-made",label:"Mạch ĐK"},{id:"project-kit",label:"Đồ án & NCKH"},{id:"commercial",label:"Động cơ & PK"},{id:"low",label:"Sắp hết / Hết kho"}].map(N=>n.jsx("button",{type:"button",onClick:()=>s(N.id),className:`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${a===N.id?"bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950":"border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] text-slate-700 dark:text-slate-200"}`,children:N.label},N.id))}),n.jsx("input",{type:"text",value:i,onChange:N=>o(N.target.value),placeholder:"Tìm mã hoặc tên mặt hàng...",className:"w-full sm:w-64 rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-1.5 text-sm text-slate-900 dark:text-white"})]}),n.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324]",children:n.jsxs("table",{className:"w-full text-left border-collapse text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"border-b border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] text-xs uppercase text-slate-500 dark:text-slate-400",children:[n.jsx("th",{className:"px-3 py-2.5",children:"Mã / Nguồn"}),n.jsx("th",{className:"px-3 py-2.5",children:"Tên mặt hàng"}),n.jsx("th",{className:"px-3 py-2.5",children:"Giá vốn (₫)"}),n.jsx("th",{className:"px-3 py-2.5",children:"Giá bán (₫)"}),n.jsx("th",{className:"px-3 py-2.5",children:"Tồn kho"}),n.jsx("th",{className:"px-3 py-2.5",children:"Nhập / Xuất kho"}),n.jsx("th",{className:"px-3 py-2.5 text-right",children:"Sửa"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200 dark:divide-[#1E325C]",children:p.map(({p:N,idx:c})=>{const k=N.stock<=N.minStockAlert;return n.jsxs("tr",{className:"hover:bg-slate-50/70 dark:hover:bg-[#111C33]/80",children:[n.jsxs("td",{className:"px-3 py-2.5 whitespace-nowrap",children:[n.jsx("div",{className:"font-mono font-bold text-sky-600 dark:text-sky-400",children:N.code}),n.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:N.originType==="self-made"?"Mạch ĐK":N.originType==="project-kit"?"Đồ án / NCKH":"Phụ kiện"})]}),n.jsxs("td",{className:"px-3 py-2.5 min-w-[165px]",children:[n.jsx("div",{className:"font-bold text-slate-900 dark:text-white",children:N.name.vi}),n.jsxs("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:["Đơn vị: ",N.unit]})]}),n.jsx("td",{className:"px-3 py-2.5",children:n.jsx("input",{type:"number",min:0,step:1e4,value:N.costPrice,onChange:C=>{const h=Math.max(0,Number(C.target.value));t(m=>({...m,products:m.products.map(S=>S.id===N.id?{...S,costPrice:h}:S)}))},className:"w-24 rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2 py-1 font-mono text-xs"})}),n.jsx("td",{className:"px-3 py-2.5",children:n.jsx("input",{type:"number",min:0,step:1e4,value:N.price,onChange:C=>{const h=Math.max(0,Number(C.target.value));t(m=>({...m,products:m.products.map(S=>S.id===N.id?{...S,price:h}:S)}))},className:"w-24 rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2 py-1 font-mono text-xs font-bold"})}),n.jsx("td",{className:"px-3 py-2.5 whitespace-nowrap",children:n.jsxs("span",{className:`inline-block rounded px-2 py-0.5 font-mono text-xs font-bold ${N.stock===0?"bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300":k?"bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300":"bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"}`,children:[N.stock," ",N.unit]})}),n.jsx("td",{className:"px-3 py-2.5",children:n.jsxs("div",{className:"flex flex-wrap items-center gap-1",children:[n.jsx("input",{type:"number",min:1,value:l[N.id]??1,onChange:C=>d(h=>({...h,[N.id]:Number(C.target.value)})),className:"w-12 rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-1 py-1 font-mono text-xs text-center"}),n.jsx("input",{type:"text",value:u[N.id]??"",onChange:C=>g(h=>({...h,[N.id]:C.target.value})),placeholder:"Lý do...",className:"w-20 rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-1.5 py-1 text-xs"}),n.jsx("button",{type:"button",onClick:()=>w(N.id,1),className:"rounded bg-emerald-600 hover:bg-emerald-500 px-2 py-1 text-xs font-semibold text-white whitespace-nowrap",children:"+ Nhập"}),n.jsx("button",{type:"button",onClick:()=>w(N.id,-1),className:"rounded bg-amber-600 hover:bg-amber-500 px-2 py-1 text-xs font-semibold text-white whitespace-nowrap",children:"- Xuất"})]})}),n.jsx("td",{className:"px-3 py-2.5 text-right whitespace-nowrap",children:n.jsx("button",{type:"button",onClick:()=>r(c),className:"text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline",children:"Chi tiết"})})]},N.id)})})]})})]})},sa={pending:{label:"Chờ duyệt",style:"bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"},preparing:{label:"Đang chuẩn bị",style:"bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300"},packed:{label:"Đã đóng gói",style:"bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300"},dispatched:{label:"Đã gửi hàng",style:"bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300"},shipping:{label:"Đang giao",style:"bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300"},completed:{label:"Hoàn thành",style:"bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"},cancelled:{label:"Đã hủy (Hoàn kho)",style:"bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300"}},tx=[{status:"pending",shortLabel:"Chờ duyệt"},{status:"preparing",shortLabel:"Đang chuẩn bị"},{status:"packed",shortLabel:"Đã đóng"},{status:"dispatched",shortLabel:"Đã gửi"},{status:"shipping",shortLabel:"Đang giao"},{status:"completed",shortLabel:"Hoàn thành"}],nx=({cmsData:e,setCmsData:t})=>{const[r,a]=E.useState("all"),[s,i]=E.useState(!1),[o,l]=E.useState(""),[d,u]=E.useState(!1),[g,p]=E.useState(""),[w,N]=E.useState(""),[c,k]=E.useState(""),[C,h]=E.useState(""),[m,S]=E.useState(""),[P,O]=E.useState("cod"),[F,M]=E.useState(""),[$,D]=E.useState(()=>e.products[0]?[{productId:e.products[0].id,quantity:1}]:[]),U=e.orders.filter(T=>r==="all"||T.status===r),J=async T=>{T.preventDefault();const A=Wr(c);if(!A.valid){re(A.error||"Số điện thoại không hợp lệ.");return}const R=Ad(m);if(!R.valid){re(R.error||"Địa chỉ giao hàng chưa đúng định dạng.");return}const f=[];for(const v of $){const x=e.products.find(j=>j.id===v.productId);!x||v.quantity<=0||f.push({productId:x.id,code:x.code,name:x.name.vi,unitPrice:x.price,costPrice:x.costPrice,quantity:v.quantity,unit:x.unit})}if(f.length===0)return;const L=await Td(e,{customerName:w.trim(),customerPhone:A.normalized,customerEmail:C.trim()||void 0,shippingAddress:R.normalized,paymentMethod:P,note:F,items:f,initialStatus:"pending"});t(L.nextState),re(`✓ Đã tạo đơn #${L.order.id} & đồng bộ sang Google Sheet / Telegram!`),N(""),k(""),h(""),S(""),M(""),i(!1)},se=T=>{const A=T.depositAmount??0,R=T.remainingAmount??(T.paymentMethod==="transfer"&&T.paymentStatus==="qr_verified"?0:Math.max(0,T.totalAmount-A)),f=[`PHIẾU ĐƠN HÀNG #${T.id} (${sa[T.status].label})`,`Khách hàng: ${T.customerName} — SĐT: ${T.customerPhone}`,`Địa chỉ: ${T.shippingAddress}`,`Thanh toán: ${T.paymentMethod==="cod"?"COD":"Chuyển khoản"}`,...T.items.map((L,v)=>`${v+1}. ${L.name} (${L.code}) x ${L.quantity} ${L.unit} = ${ne(L.unitPrice*L.quantity)}`),`Tổng cộng: ${ne(T.totalAmount)}`,...A>0||T.id.startsWith("3D-")&&R>0?[`Tiền đã cọc/TT: ${ne(A)}`,`Tiền còn thiếu (Thu hộ COD): ${ne(R)}`]:[]].join(`
`);navigator.clipboard.writeText(f),l(T.id),setTimeout(()=>l(""),1800)},re=T=>{p(T),setTimeout(()=>p(""),3500)},X=async()=>{u(!0);try{let T=e;const A=[],R=await Rf(T);R.changed?(T=R.nextState,A.push(`Google Sheet: +${R.importedCount} đơn mới, cập nhật ${R.updatedCount} đơn`)):R.error&&A.push(`Google Sheet: ${R.error}`);const f=await _m(T);f.changed?(T=f.nextState,A.push(`Telegram: ${f.processedCount} thao tác duyệt`)):f.error&&A.push(`Telegram: ${f.error}`),T!==e&&t(T),A.length>0?re(`✓ ${A.join(" · ")}`):re("Đã đồng bộ Google Sheet & Telegram: dữ liệu đang mới nhất.")}finally{u(!1)}},ce=async T=>{const A=await _i(e.profile,T);if(!A.ok){re(`Lỗi gửi Telegram: ${A.error}`);return}A.messageId&&t(R=>({...R,orders:R.orders.map(f=>f.id===T.id?{...f,telegramMessageId:A.messageId}:f)})),re(`✓ Đã gửi thẻ duyệt đơn #${T.id} sang Telegram Bot!`)},ee=async(T,A)=>{var f,L;const R={...T,status:A};if(t(v=>$m(v,T.id,A)),Yn(e.profile,R,"status_update").catch(()=>{}),(f=e.profile.telegramBotToken)!=null&&f.trim()&&((L=e.profile.telegramChatId)!=null&&L.trim())){const v=await Pf(e.profile,R);v.ok&&v.messageId&&t(x=>({...x,orders:x.orders.map(j=>j.id===T.id?{...j,telegramMessageId:v.messageId}:j)}))}};return n.jsxs("div",{className:"space-y-5",children:[n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-4 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsx("div",{className:"flex flex-wrap gap-1.5",children:["all","pending","preparing","packed","dispatched","shipping","completed","cancelled"].map(T=>n.jsx("button",{type:"button",onClick:()=>a(T),className:`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${r===T?"bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950":"border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] text-slate-700 dark:text-slate-200"}`,children:T==="all"?`Tất cả (${e.orders.length})`:sa[T].label},T))}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("button",{type:"button",onClick:X,disabled:d,className:"inline-flex items-center gap-1.5 rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20 disabled:opacity-60 transition-colors",children:[n.jsx(_n,{className:`h-3.5 w-3.5 ${d?"animate-spin":""}`}),n.jsx("span",{children:d?"Đang đồng bộ...":"Đồng bộ Sheet & Telegram"})]}),n.jsxs("button",{type:"button",onClick:()=>i(!s),className:"inline-flex items-center gap-1.5 rounded-md bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 px-4 py-2 text-xs font-semibold text-white transition-colors",children:[n.jsx(Yt,{className:"h-4 w-4"}),n.jsx("span",{children:s?"Đóng form tạo đơn":"Tạo đơn bán hàng (Zalo / SĐT)"})]})]})]}),g&&n.jsx("div",{className:"rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-xs font-semibold text-sky-700 dark:text-sky-300",children:g})]}),s&&n.jsxs("form",{onSubmit:J,className:"rounded-xl border border-sky-500/50 bg-white dark:bg-[#0B1324] p-6 space-y-4",children:[n.jsx("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Tạo đơn hàng mới (Tự động trừ số lượng trong kho)"}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsx("input",{type:"text",required:!0,value:w,onChange:T=>N(T.target.value),placeholder:"Tên khách hàng *",className:"rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"}),n.jsx("input",{type:"tel",inputMode:"numeric",maxLength:10,required:!0,value:c,onChange:T=>k(T.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"SĐT / Zalo * (10 số)",className:"rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono"}),n.jsxs("select",{value:P,onChange:T=>O(T.target.value),className:"rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm",children:[n.jsx("option",{value:"cod",children:"Thu hộ COD"}),n.jsx("option",{value:"transfer",children:"Chuyển khoản"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsx("input",{type:"text",required:!0,value:m,onChange:T=>S(T.target.value),placeholder:"Địa chỉ giao hàng *",className:"rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"}),n.jsx("input",{type:"email",value:C,onChange:T=>h(T.target.value),placeholder:"Gmail khách hàng (nhận TB tự động)",className:"rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"}),n.jsx("input",{type:"text",value:F,onChange:T=>M(T.target.value),placeholder:"Ghi chú đơn...",className:"rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[n.jsx("span",{children:"Chọn sản phẩm xuất bán:"}),n.jsx("button",{type:"button",onClick:()=>e.products[0]&&D(T=>[...T,{productId:e.products[0].id,quantity:1}]),className:"text-sky-600 dark:text-sky-400 hover:underline",children:"+ Thêm dòng hàng"})]}),$.map((T,A)=>n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("select",{value:T.productId,onChange:R=>D(f=>f.map((L,v)=>v===A?{...L,productId:R.target.value}:L)),className:"flex-1 rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm",children:e.products.map(R=>n.jsxs("option",{value:R.id,children:["[",R.code,"] ",R.name.vi," — ",ne(R.price)," (Kho: ",R.stock,")"]},R.id))}),n.jsx("input",{type:"number",min:1,value:T.quantity,onChange:R=>D(f=>f.map((L,v)=>v===A?{...L,quantity:Math.max(1,Number(R.target.value))}:L)),className:"w-20 rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2 py-2 font-mono text-sm text-center"}),$.length>1&&n.jsx("button",{type:"button",onClick:()=>D(R=>R.filter((f,L)=>L!==A)),className:"text-rose-600 p-1",children:n.jsx(an,{className:"h-4 w-4"})})]},A))]}),n.jsxs("div",{className:"flex justify-end gap-2",children:[n.jsx("button",{type:"button",onClick:()=>i(!1),className:"rounded-md border border-slate-200 dark:border-[#1E325C] px-4 py-2 text-xs font-semibold",children:"Hủy"}),n.jsx("button",{type:"submit",className:"rounded-md bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 px-5 py-2 text-xs font-semibold text-white",children:"Tạo đơn & Trừ kho"})]})]}),U.length===0?n.jsx("div",{className:"rounded-xl border border-dashed border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-10 text-center text-sm text-slate-500 dark:text-slate-400",children:"Chưa có đơn hàng nào trong mục này."}):n.jsx("div",{className:"space-y-4",children:U.map(T=>n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-[#1E325C] pb-3",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"font-mono text-base font-bold text-slate-900 dark:text-white",children:["#",T.id]}),n.jsx("span",{className:"ml-3 text-xs text-slate-500 dark:text-slate-400",children:new Date(T.createdAt).toLocaleString("vi-VN")}),n.jsx("span",{className:`ml-3 rounded px-2 py-0.5 text-xs font-bold ${sa[T.status].style}`,children:sa[T.status].label}),T.id.startsWith("3D-")&&T.status==="pending"&&n.jsx("span",{className:"ml-2 rounded bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-500",children:"⏳ Chờ duyệt đẩy DonIn3D"}),(T.paymentMethod==="transfer"||T.id.startsWith("3D-")&&(T.depositAmount??0)>0)&&n.jsx("span",{className:`ml-2 rounded px-2 py-0.5 font-mono text-[11px] font-bold ${T.paymentStatus==="qr_verified"?"bg-emerald-500/15 text-emerald-600 dark:text-emerald-300":"bg-sky-500/15 text-sky-600 dark:text-sky-300"}`,children:T.paymentStatus==="qr_verified"?T.paymentMethod==="cod"&&(T.depositAmount??0)>0?`✓ Đã cọc ${ne(T.depositAmount??0)}${T.transferCode?` (${T.transferCode})`:""}`:`✓ Đã nhận tiền QR${T.transferCode?` (${T.transferCode})`:""}`:`Chờ đối soát CK${T.transferCode?` · ${T.transferCode}`:""}`})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[T.paymentMethod==="transfer"&&T.paymentStatus!=="qr_verified"&&n.jsx("button",{type:"button",onClick:()=>{const A={...T,paymentStatus:"qr_verified",depositAmount:T.totalAmount,remainingAmount:0,status:T.status==="pending"?"preparing":T.status};t(R=>({...R,orders:R.orders.map(f=>f.id===T.id?A:f)})),Yn(e.profile,A,"payment_confirmed").catch(()=>{}),re(T.id.startsWith("3D-")?`✓ Đã duyệt tiền đơn #${T.id} & đẩy sang DonIn3D!`:`✓ Đã xác nhận tiền đơn #${T.id}`)},className:"rounded bg-emerald-600 hover:bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white",children:"✓ Đã nhận tiền"}),T.id.startsWith("3D-")&&T.paymentMethod==="cod"&&(T.depositAmount??0)<=0&&T.totalAmount>0&&n.jsx("button",{type:"button",onClick:()=>{const A=Math.round(T.totalAmount*.3),R=Math.max(0,T.totalAmount-A),f={...T,paymentStatus:"qr_verified",depositAmount:A,remainingAmount:R,status:T.status==="pending"?"preparing":T.status};t(L=>({...L,orders:L.orders.map(v=>v.id===T.id?f:v)})),Yn(e.profile,f,"payment_confirmed").catch(()=>{}),re(`✓ Đã nhận cọc ${ne(A)} (#${T.id}) · Thu COD: ${ne(R)} & đẩy sang DonIn3D!`)},className:"rounded bg-amber-600 hover:bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white",children:"✓ Đã nhận cọc 30%"}),n.jsxs("select",{value:T.status,onChange:A=>ee(T,A.target.value),className:"rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1 text-xs font-semibold",children:[n.jsx("option",{value:"pending",children:"Chờ duyệt"}),n.jsx("option",{value:"preparing",children:"Đang chuẩn bị"}),n.jsx("option",{value:"packed",children:"Đã đóng gói"}),n.jsx("option",{value:"dispatched",children:"Đã gửi hàng"}),n.jsx("option",{value:"shipping",children:"Đang giao hàng"}),n.jsx("option",{value:"completed",children:"Hoàn thành"}),n.jsx("option",{value:"cancelled",children:"Hủy đơn (Hoàn kho)"})]}),n.jsxs("button",{type:"button",onClick:()=>ce(T),className:"inline-flex items-center gap-1 rounded border border-sky-500/40 bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20",children:[n.jsx(_a,{className:"h-3 w-3"}),n.jsx("span",{children:"Gửi duyệt Telegram"})]}),T.customerEmail&&n.jsxs("button",{type:"button",onClick:async()=>{await Yn(e.profile,T,"status_update"),re(`✓ Đã gửi Gmail thông báo trạng thái "${sa[T.status].label}" tới ${T.customerEmail}`)},className:"inline-flex items-center gap-1 rounded border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/20",children:[n.jsx(_a,{className:"h-3 w-3"}),n.jsx("span",{children:"Gửi Gmail khách"})]}),n.jsxs("button",{type:"button",onClick:()=>se(T),className:"inline-flex items-center gap-1 rounded border border-slate-200 dark:border-[#1E325C] px-2.5 py-1 text-xs font-semibold hover:border-sky-500",children:[o===T.id?n.jsx(Kt,{className:"h-3 w-3 text-emerald-500"}):n.jsx(xn,{className:"h-3 w-3"}),n.jsx("span",{children:o===T.id?"Đã chép":"Chép phiếu"})]}),n.jsx("button",{type:"button",onClick:()=>{window.confirm(`Xóa đơn hàng #${T.id}?`)&&t(A=>({...A,orders:A.orders.filter(R=>R.id!==T.id)}))},className:"rounded border border-rose-300 dark:border-rose-800 p-1.5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30",children:n.jsx(an,{className:"h-3.5 w-3.5"})})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs",children:[n.jsx("span",{className:"font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 mr-1",children:"Duyệt bước:"}),tx.map(A=>{const R=T.status===A.status;return n.jsx("button",{type:"button",onClick:()=>ee(T,A.status),className:`rounded px-2.5 py-1 font-semibold transition-colors ${R?"bg-sky-500 text-white shadow-sm":"border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] text-slate-600 dark:text-slate-300 hover:border-sky-400"}`,children:A.shortLabel},A.status)})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-12 text-sm",children:[n.jsxs("div",{className:"md:col-span-5 space-y-1",children:[n.jsxs("div",{children:[n.jsx("span",{className:"font-semibold",children:"Khách hàng:"})," ",T.customerName," (",T.customerPhone,T.customerEmail?` · ${T.customerEmail}`:"",")"]}),n.jsxs("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:[n.jsx("span",{className:"font-semibold",children:"Địa chỉ:"})," ",T.shippingAddress]}),n.jsxs("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:[n.jsx("span",{className:"font-semibold",children:"Thanh toán:"})," ",T.paymentMethod==="cod"?"COD khi nhận hàng":T.paymentStatus==="qr_verified"?`Chuyển khoản QR Đã nhận tiền (${T.transferCode||"-"})`:`Chuyển khoản QR (${T.transferCode||"-"})`,T.note?` · Ghi chú: ${T.note}`:""]})]}),n.jsxs("div",{className:"md:col-span-7 space-y-1.5",children:[T.items.map((A,R)=>n.jsxs("div",{className:"flex justify-between text-xs border-b border-slate-100 dark:border-[#1E325C] pb-1",children:[n.jsxs("span",{children:[n.jsx("strong",{className:"font-mono text-sky-600 dark:text-sky-400",children:A.code})," · ",A.name," ×"," ",n.jsxs("strong",{children:[A.quantity," ",A.unit]})]}),n.jsx("span",{className:"font-mono font-semibold",children:ne(A.unitPrice*A.quantity)})]},R)),n.jsxs("div",{className:"flex justify-between pt-1 text-sm font-bold text-slate-900 dark:text-sky-400",children:[n.jsx("span",{children:"Tổng thanh toán:"}),n.jsx("span",{className:"font-mono",children:ne(T.totalAmount)})]}),(()=>{const A=T.depositAmount??(T.paymentMethod==="transfer"&&T.paymentStatus==="qr_verified"?T.totalAmount:0),R=T.remainingAmount??Math.max(0,T.totalAmount-A);return A<=0&&!T.id.startsWith("3D-")?null:n.jsxs("div",{className:"mt-1 flex flex-wrap items-center justify-between gap-2 rounded-md border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs",children:[n.jsxs("span",{children:[n.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:"Đã cọc/TT:"})," ",n.jsx("strong",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:ne(A)})]}),n.jsxs("span",{children:[n.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:"Còn thiếu (COD):"})," ",n.jsx("strong",{className:`font-mono ${R>0?"text-amber-600 dark:text-amber-300":"text-emerald-600 dark:text-emerald-400"}`,children:R>0?ne(R):"0 ₫ (Đã đủ)"})]})]})})()]})]})]},T.id))})]})},rx=1.27,ax=1.3,sx=1.2;function ix(e){const t=Number(e),r=Number.isFinite(t)?Math.min(100,Math.max(20,t)):20;return Math.round((70+(r-20)/80*30)*10)/10}function ox(e){const t=Number(e);return 1+((Number.isFinite(t)?Math.min(100,Math.max(20,t)):20)-20)/80*1.5}function en(e){const t=Math.max(0,Number(e)||0);return t===0?0:Number(t.toFixed(t<10?2:1))}function lx(e){return ax}function qm(e){return sx}function dx(e){return rx}function Wm(e){const t=Math.max(1,Math.round(e)),r=Math.floor(t/60),a=t%60;return r>0?`${r}h ${a}m`:`${a}m`}function cx(e){var p;let t=0,r="",a,s,i;const o=[/;\s*total filament weight\s*\[g\]\s*[:=]\s*([\d.]+)/i,/;\s*filament used\s*\[g\]\s*[:=]\s*([\d.]+)/i,/;\s*Filament weight\s*[:=]\s*([\d.]+)\s*g/i];for(const w of o){const N=e.match(w);if(N&&Number(N[1])>0){t=Number(Number(N[1]).toFixed(2));break}}const l=[/;\s*estimated printing time\s*\([^)]*\)\s*[:=]\s*([^\r\n]+)/i,/;\s*model printing time\s*[:=]\s*([^\r\n]+)/i,/;\s*total estimated time\s*[:=]\s*([^\r\n]+)/i];for(const w of l){const N=e.match(w);if(N&&((p=N[1])!=null&&p.trim())){r=N[1].trim();break}}if(!r){const w=e.match(/;\s*TIME\s*:\s*(\d+)/i);w&&(r=Wm(Number(w[1])/60))}const d=e.match(/;\s*filament_type\s*=\s*([^\r\n;]+)/i);d&&(a=d[1].trim());const u=e.match(/;\s*layer_height\s*=\s*([\d.]+)/i);u&&(s=`${u[1].trim()}mm`);const g=e.match(/;\s*sparse_infill_density\s*=\s*([^\r\n;]+)/i);return g&&(i=g[1].trim()),{weightGrams:t,printTime:r,material:a,layerHeight:s,infill:i}}function yl(e){const t=e.byteLength;if(t<84)throw new Error("Không đọc được hình học STL (chỉ hỗ trợ trực tiếp .STL Binary/ASCII).");const r=new Uint8Array(e);let a="utf-8";r[0]===255&&r[1]===254?a="utf-16le":r[0]===254&&r[1]===255&&(a="utf-16be");const s=new Uint8Array(e,0,Math.min(1024,t)),i=new TextDecoder("utf-8").decode(s),o=a==="utf-8"?i:new TextDecoder(a).decode(s);if(/^\s*(?:<!doctype\s+html|<html\b)/i.test(i)||/^\s*(?:<!doctype\s+html|<html\b)/i.test(o))throw new Error("Không đọc được hình học STL (chỉ hỗ trợ trực tiếp .STL Binary/ASCII).");const l=new DataView(e),d=l.getUint32(80,!0),u=84+d*50,g=/facet\s+normal/i.test(o)&&/outer\s+loop/i.test(o),p=c=>{if(c<=0)return null;let k=0,C=0,h=1/0,m=1/0,S=1/0,P=-1/0,O=-1/0,F=-1/0,M=0;for(let $=0;$<c;$++){const D=84+$*50;if(D+48>t)break;const U=l.getFloat32(D+12,!0),J=l.getFloat32(D+16,!0),se=l.getFloat32(D+20,!0),re=l.getFloat32(D+24,!0),X=l.getFloat32(D+28,!0),ce=l.getFloat32(D+32,!0),ee=l.getFloat32(D+36,!0),T=l.getFloat32(D+40,!0),A=l.getFloat32(D+44,!0);if(!Number.isFinite(U)||!Number.isFinite(J)||!Number.isFinite(se)||!Number.isFinite(re)||!Number.isFinite(X)||!Number.isFinite(ce)||!Number.isFinite(ee)||!Number.isFinite(T)||!Number.isFinite(A))continue;U<h&&(h=U),re<h&&(h=re),ee<h&&(h=ee),J<m&&(m=J),X<m&&(m=X),T<m&&(m=T),se<S&&(S=se),ce<S&&(S=ce),A<S&&(S=A),U>P&&(P=U),re>P&&(P=re),ee>P&&(P=ee),J>O&&(O=J),X>O&&(O=X),T>O&&(O=T),se>F&&(F=se),ce>F&&(F=ce),A>F&&(F=A),k+=-ee*X*se+re*T*se+ee*J*ce-U*T*ce-re*J*A+U*X*A;const R=re-U,f=X-J,L=ce-se,v=ee-U,x=T-J,j=A-se,G=f*j-L*x,V=L*v-R*j,W=R*x-f*v;C+=Math.sqrt(G*G+V*V+W*W),M+=1}return M===0||!Number.isFinite(h)||Math.max(Math.abs(h),Math.abs(P),Math.abs(m),Math.abs(O),Math.abs(S),Math.abs(F))>=1e7?null:{triangles:M,sizeX:Number((P-h).toFixed(1)),sizeY:Number((O-m).toFixed(1)),sizeZ:Number((F-S).toFixed(1)),volumeCm3:Number((Math.abs(k)/6/1e3).toFixed(2)),surfaceAreaCm2:Number((C/2/100).toFixed(2))}},w=()=>{let c=0,k=0,C=1/0,h=1/0,m=1/0,S=-1/0,P=-1/0,O=-1/0,F=0;const M=new TextDecoder(a).decode(r),$=/vertex\s+([-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][-+]?\d+)?)\s+([-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][-+]?\d+)?)\s+([-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][-+]?\d+)?)/gi,D=[];let U;for(;(U=$.exec(M))!==null;)if(D.push(Number(U[1].replace(",",".")),Number(U[2].replace(",",".")),Number(U[3].replace(",","."))),D.length===9){const J=D[0],se=D[1],re=D[2],X=D[3],ce=D[4],ee=D[5],T=D[6],A=D[7],R=D[8];if(D.length=0,!Number.isFinite(J)||!Number.isFinite(se)||!Number.isFinite(re)||!Number.isFinite(X)||!Number.isFinite(ce)||!Number.isFinite(ee)||!Number.isFinite(T)||!Number.isFinite(A)||!Number.isFinite(R))continue;J<C&&(C=J),X<C&&(C=X),T<C&&(C=T),se<h&&(h=se),ce<h&&(h=ce),A<h&&(h=A),re<m&&(m=re),ee<m&&(m=ee),R<m&&(m=R),J>S&&(S=J),X>S&&(S=X),T>S&&(S=T),se>P&&(P=se),ce>P&&(P=ce),A>P&&(P=A),re>O&&(O=re),ee>O&&(O=ee),R>O&&(O=R),c+=-T*ce*re+X*A*re+T*se*ee-J*A*ee-X*se*R+J*ce*R;const f=X-J,L=ce-se,v=ee-re,x=T-J,j=A-se,G=R-re,V=L*G-v*j,W=v*x-f*G,_=f*j-L*x;k+=Math.sqrt(V*V+W*W+_*_),F+=1}return F===0||!Number.isFinite(C)?null:{triangles:F,sizeX:Number((S-C).toFixed(1)),sizeY:Number((P-h).toFixed(1)),sizeZ:Number((O-m).toFixed(1)),volumeCm3:Number((Math.abs(c)/6/1e3).toFixed(2)),surfaceAreaCm2:Number((k/2/100).toFixed(2))}};if(!g&&d>0&&u>=134&&u<=t+4){const c=p(d);if(c)return c}const N=w();if(N)return N;if(!g&&t>=134&&(t-84)%50===0){const c=p((t-84)/50);if(c)return c}throw new Error("Không đọc được hình học STL (chỉ hỗ trợ trực tiếp .STL Binary/ASCII).")}function jr(e,t){const{triangles:r,sizeX:a,sizeY:s,sizeZ:i,volumeCm3:o,surfaceAreaCm2:l}=e,d=t.wallLoops*t.nozzleMm/10,u=Math.min(o*.65,l*d*.85),g=Math.max(0,o-u),p=u+g*.7,w=ox(t.infillPercent),N=lx(t.material),c=qm(t.material),k=dx(t.material),C=en(Math.max(.5,p*w*N*c*k)),h=.24*(t.layerHeightMm/.2),m=Math.max(5,C/Math.max(.08,h)),S=t.maxBuildX||800,P=t.maxBuildY||800,O=t.maxBuildZ||800,F=a>S||s>P||i>O,M=`${S} × ${P} × ${O} mm`;return{triangles:r,sizeX:a,sizeY:s,sizeZ:i,volumeCm3:o,surfaceAreaCm2:l,estimatedWeightGrams:C,estimatedPrintTime:Wm(m),exceedsBuildVolume:F,maxBuildLabel:M}}function vl(e,t,r,a){const s=r.maxBuildX||800,i=r.maxBuildY||800,o=r.maxBuildZ||800;return[`; generated by TeeBi & Robot Auto-Slicer (${r.printerModel})`,`; max_build_volume_mm = ${s} x ${i} x ${o}`,`; source_model = ${t}`,`; order_id = ${e}`,`; filament_type = ${r.material}`,`; nozzle_diameter = ${r.nozzleMm}`,`; layer_height = ${r.layerHeightMm}`,`; wall_loops = ${r.wallLoops}`,`; top_shell_layers = ${r.topBottomLayers}`,`; sparse_infill_density = ${ix(r.infillPercent)}%`,`; ui_infill_display = ${r.infillPercent}%`,"; enable_support = 1",`; model_dimensions_mm = ${a.sizeX} x ${a.sizeY} x ${a.sizeZ}`,`; model_volume_cm3 = ${a.volumeCm3}`,`; total filament weight [g] : ${a.estimatedWeightGrams}`,`; estimated printing time (normal mode) = ${a.estimatedPrintTime}`,"G90 ; use absolute coordinates","M83 ; extruder relative mode",`; --- Ready for ${r.printerModel} ---`].join(`
`)}const ux=({cmsData:e,setCmsData:t,onOpenSettlementTab:r})=>{var fe,mt;const a=e.print3dMaterials&&e.print3dMaterials.length>0?e.print3dMaterials:$e,s=e.print3dOrders??[],i=e.print3dCollaborators??[],[o,l]=E.useState(((fe=a[0])==null?void 0:fe.name)||"PLA+"),[d,u]=E.useState(50),[g,p]=E.useState(1),[w,N]=E.useState("20%"),[c,k]=E.useState(()=>Dt(2)),[C,h]=E.useState(""),[m,S]=E.useState(""),[P,O]=E.useState(""),[F,M]=E.useState(null),[$,D]=E.useState(!1),[U,J]=E.useState(!1),[se,re]=E.useState(""),[X,ce]=E.useState(()=>{try{return localStorage.getItem("teebi_public_ctv_sheet_url_v1")||""}catch{return""}}),[ee,T]=E.useState(0),A=e.print3dSetup??it,R=A.defaultShopCommissionPercent??it.defaultShopCommissionPercent??25,[f,L]=E.useState(((mt=a[0])==null?void 0:mt.name)||"PLA+"),v={...A,material:f},x=B=>{t(de=>({...de,print3dSetup:{...de.print3dSetup??it,...B}}))},[j,G]=E.useState(""),[V,W]=E.useState(null),[_,Q]=E.useState(null),[te,Z]=E.useState(!1);E.useEffect(()=>{if(_)try{const B=jr(_.geometry,v),de=en(B.estimatedWeightGrams*g),y=vl(j||"AUTO-QUOTE",_.fileName,v,B);W({fileName:_.fileName,perPartWeightGrams:B.estimatedWeightGrams,weightGrams:de,printTime:B.estimatedPrintTime,dimensions:`${B.sizeX} × ${B.sizeY} × ${B.sizeZ} mm`,gcodeText:y,source:"stl"}),u(de),l(v.material),N(`${v.infillPercent}%`)}catch{}},[_,f,v.infillPercent,v.layerHeightMm,v.nozzleMm,g]);const ke=Hr(c),I=It(a,o,d,g,ke.surchargePercent),K=B=>{re(B),setTimeout(()=>re(""),4e3)},pe=(B,de,y)=>{t(b=>{const ae=(b.print3dMaterials&&b.print3dMaterials.length>0?b.print3dMaterials:structuredClone($e)).map((z,ue)=>ue===B?{...z,[de]:Math.max(0,y)}:z);return{...b,print3dMaterials:ae}})},ye=async B=>{if(B.preventDefault(),d<=0){K("Vui lòng nhập khối lượng in (gram > 0).");return}D(!0);try{const de=await wd(e.profile,a,{customerName:C.trim()||"Khách In 3D (Admin)",customerPhone:m.trim()||"0789044703",customerEmail:P.trim()||void 0,material:o,infill:w,weightGrams:d,quantity:g,file:F,dimensions:V==null?void 0:V.dimensions,printTime:V==null?void 0:V.printTime,gcodeText:V==null?void 0:V.gcodeText,setup:v,deliveryDeadline:c,autoQuoteEmail:!!P.trim(),approvedByAdmin:!0});t(y=>({...y,print3dOrders:[de.order,...y.print3dOrders??[]]})),h(""),S(""),O(""),M(null),K(`✓ Đã tạo đơn #${de.order.id} (${ne(de.order.totalAmount)})${de.order.driveFileUrl?" & đẩy file lên Google Drive!":"."}`)}finally{D(!1)}},Y=async()=>{J(!0);try{const B=await Ur(e);let de=B.changed?B.nextState:e;const y=await qa(de);if(y.changed&&(de=y.nextState),(B.changed||y.changed)&&t(de),y.publicCtvSheetUrl){ce(y.publicCtvSheetUrl);try{localStorage.setItem("teebi_public_ctv_sheet_url_v1",y.publicCtvSheetUrl)}catch{}}typeof y.pendingApprovalCount=="number"&&T(y.pendingApprovalCount),y.error?K(y.error):K(`✓ Đã đồng bộ ${y.count} đơn In 3D (DonIn3D) & ${B.collaborators.length} CTV.`)}finally{J(!1)}};E.useEffect(()=>{(async()=>{const B=await Ur(e);let de=B.changed?B.nextState:e;const y=await qa(de);if(y.changed&&(de=y.nextState),(B.changed||y.changed)&&t(de),y.publicCtvSheetUrl){ce(y.publicCtvSheetUrl);try{localStorage.setItem("teebi_public_ctv_sheet_url_v1",y.publicCtvSheetUrl)}catch{}}typeof y.pendingApprovalCount=="number"&&T(y.pendingApprovalCount)})()},[]);const xe=(B,de)=>{let y=null;t(b=>({...b,print3dOrders:(b.print3dOrders??[]).map(H=>H.id!==B?H:(y=de(H),y))})),setTimeout(()=>{y&&jd(e.profile,y)},50)},q=s.filter(B=>!B.claimedByPrinter).length,ie=async B=>{var b;const de=(b=B.target.files)==null?void 0:b[0];if(!de)return;if(de.size>Ka){K(`File vượt quá giới hạn ${$r}MB.`),B.target.value="";return}const y=de.name.toLowerCase();try{if(y.endsWith(".gcode")){const H=await de.text(),ae=cx(H);if(ae.weightGrams<=0){K("Không tìm thấy dòng khối lượng (; total filament weight [g]) trong file .gcode.");return}const z=en(ae.weightGrams*qm(v.material)),ue=en(z*g);Q(null),W({fileName:de.name,perPartWeightGrams:z,weightGrams:ue,printTime:ae.printTime||"Theo G-code Creality",gcodeText:H,source:"gcode"}),u(ue),l(v.material),K(`✓ Đọc từ G-code Creality: ${ue}g (${ae.printTime||"OK"})`)}else if(y.endsWith(".stl")){const H=await de.arrayBuffer(),ae=yl(H),z=jr(ae,v),ue=en(z.estimatedWeightGrams*g),Ce=vl(j||"AUTO-QUOTE",de.name,v,z);Q({fileName:de.name,geometry:ae}),W({fileName:de.name,perPartWeightGrams:z.estimatedWeightGrams,weightGrams:ue,printTime:z.estimatedPrintTime,dimensions:`${z.sizeX} × ${z.sizeY} × ${z.sizeZ} mm`,gcodeText:Ce,source:"stl"}),u(ue),l(v.material),N(`${v.infillPercent}%`),M(de),z.exceedsBuildVolume?K(`⚠️ Mẫu (${z.sizeX}×${z.sizeY}×${z.sizeZ}mm) vượt khổ máy ${z.maxBuildLabel} — có thể cần chia nhỏ/scale. Khối lượng quét: ${ue}g.`):K(`✓ Đã GenCode theo thông số ${v.printerModel}: ${ue}g · ${z.estimatedPrintTime}`)}else K("Hãy chọn file .STL (để tự cắt lớp & GenCode) hoặc file .gcode xuất từ Creality Print.")}catch(H){K(H instanceof Error?H.message:"Lỗi phân tích file 3D.")}finally{B.target.value=""}},be=async()=>{const B=s.find(Pe=>Pe.id===j),de=((B==null?void 0:B.customerEmail)||P).trim(),y=((B==null?void 0:B.customerName)||C||"Quý khách").trim(),b=(B==null?void 0:B.quantity)||g,H=v.material,ae=(V==null?void 0:V.weightGrams)||d;if(ae<=0){K("Chưa có khối lượng tổng (gram) — hãy nạp file STL/G-code hoặc nhập gram.");return}const z=(B==null?void 0:B.rushSurchargePercent)??ke.surchargePercent,ue=(B==null?void 0:B.deliveryLabel)||ke.displayText,Ce=It(a,H,ae,b,z);if(B&&xe(B.id,Pe=>({...Pe,material:H,weightGrams:ae,subtotalAmount:Ce.subtotalAmount,rushSurchargePercent:Ce.rushSurchargePercent,rushFeeAmount:Ce.rushFeeAmount,totalAmount:Ce.totalAmount})),!de){K(`✓ Đã ghi nhận khối lượng ${ae}g (${ne(Ce.totalAmount)}). Hãy nhập Gmail khách để gửi báo giá.`);return}Z(!0);try{const Pe=await Of(e.profile,{id:(B==null?void 0:B.id)||`BG-${Date.now().toString().slice(-6)}`,customerName:y,customerEmail:de,material:H,weightGrams:ae,quantity:b,totalAmount:Ce.totalAmount,deliveryLabel:ue,subtotalAmount:Ce.subtotalAmount,rushSurchargePercent:Ce.rushSurchargePercent,rushFeeAmount:Ce.rushFeeAmount,printTime:V==null?void 0:V.printTime,dimensions:V==null?void 0:V.dimensions});Pe.ok?K(`✓ Đã ghi khối lượng ${ae}g (${ne(Ce.totalAmount)}) & gửi Gmail báo giá tới ${de}!`):K(Pe.error||"Lỗi gửi Gmail báo giá.")}finally{Z(!1)}},me=()=>{if(!(V!=null&&V.gcodeText))return;const B=new Blob([V.gcodeText],{type:"text/plain;charset=utf-8"}),de=URL.createObjectURL(B),y=document.createElement("a");y.href=de,y.download=`${V.fileName.replace(/\.[^.]+$/,"")}_${v.material}.gcode`,y.click(),URL.revokeObjectURL(de)};return n.jsxs("div",{className:"space-y-6",children:[se&&n.jsx("div",{className:"rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-2.5 text-xs font-semibold text-sky-700 dark:text-sky-300",children:se}),n.jsxs("div",{className:"rounded-xl border border-sky-500/40 bg-gradient-to-br from-sky-500/5 via-white to-white dark:from-sky-500/10 dark:via-[#0B1324] dark:to-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(es,{className:"h-5 w-5 text-sky-500"}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Tool Tự động GenCode Creality → Ghi Khối lượng & Gửi Mail Báo giá"}),n.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["Chọn thông số máy Creality cài sẵn, nạp file ",n.jsx("code",{children:".STL"})," (hoặc ",n.jsx("code",{children:".gcode"})," xuất từ Creality Print 7.1) để tính khối lượng tổng và gửi báo giá thẳng về Gmail khách."]})]})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-2",children:n.jsxs("a",{href:"#ctv-in3d",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/20",children:[n.jsx(vd,{className:"h-3.5 w-3.5"}),n.jsxs("span",{children:["Mở Cổng CTV (#ctv-in3d · ",i.length,")"]}),n.jsx(Mt,{className:"h-3 w-3"})]})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-6",children:[n.jsxs("div",{className:"col-span-2",children:[n.jsx("label",{className:"block text-[11px] font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Máy in Creality Setup sẵn"}),n.jsxs("select",{value:v.printerModel,onChange:B=>{const de=B.target.value,b={"Creality Khổ Lớn 800×800 (0.4 nozzle)":{nozzleMm:.4,maxBuildX:800,maxBuildY:800,maxBuildZ:800},"Creality Khổ Lớn 800×800 (0.6 nozzle)":{nozzleMm:.6,maxBuildX:800,maxBuildY:800,maxBuildZ:800},"Creality K1 Max 300×300 (0.4 nozzle)":{nozzleMm:.4,maxBuildX:300,maxBuildY:300,maxBuildZ:300},"Creality K1C 220×220 (0.4 nozzle)":{nozzleMm:.4,maxBuildX:220,maxBuildY:220,maxBuildZ:250},"Creality K1 SE 220×220 (0.4 nozzle)":{nozzleMm:.4,maxBuildX:220,maxBuildY:220,maxBuildZ:250}}[de]??{nozzleMm:.4,maxBuildX:800,maxBuildY:800,maxBuildZ:800};x({printerModel:de,...b})},className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs",children:[n.jsx("option",{value:"Creality Khổ Lớn 800×800 (0.4 nozzle)",children:"Creality Khổ Lớn 800×800 (0.4 nozzle)"}),n.jsx("option",{value:"Creality Khổ Lớn 800×800 (0.6 nozzle)",children:"Creality Khổ Lớn 800×800 (0.6 nozzle)"}),n.jsx("option",{value:"Creality K1 Max 300×300 (0.4 nozzle)",children:"Creality K1 Max 300×300 (0.4 nozzle)"}),n.jsx("option",{value:"Creality K1C 220×220 (0.4 nozzle)",children:"Creality K1C 220×220 (0.4 nozzle)"}),n.jsx("option",{value:"Creality K1 SE 220×220 (0.4 nozzle)",children:"Creality K1 SE 220×220 (0.4 nozzle)"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Vật liệu"}),n.jsx("select",{value:v.material,onChange:B=>{L(B.target.value),l(B.target.value)},className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs",children:a.map(B=>n.jsx("option",{value:B.name,children:B.name},B.id))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Layer Height"}),n.jsxs("select",{value:v.layerHeightMm,onChange:B=>x({layerHeightMm:Number(B.target.value)}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs font-mono",children:[n.jsx("option",{value:.12,children:"0.12 mm (Mịn)"}),n.jsx("option",{value:.16,children:"0.16 mm"}),n.jsx("option",{value:.2,children:"0.20 mm (Chuẩn)"}),n.jsx("option",{value:.24,children:"0.24 mm (Nhanh)"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Infill giao diện (%)"}),n.jsxs("select",{value:v.infillPercent,onChange:B=>x({infillPercent:Number(B.target.value)}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs font-mono",children:[n.jsx("option",{value:20,children:"20% (GenCode: 70%)"}),n.jsx("option",{value:40,children:"40% (GenCode: 77.5%)"}),n.jsx("option",{value:60,children:"60% (GenCode: 85%)"}),n.jsx("option",{value:80,children:"80% (GenCode: 92.5%)"}),n.jsx("option",{value:100,children:"100% (GenCode: 100%)"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"% cho Shop mặc định"}),n.jsx("input",{type:"number",min:0,max:100,value:R,onChange:B=>x({defaultShopCommissionPercent:Math.min(100,Math.max(0,Number(B.target.value)||0))}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs font-mono font-bold text-amber-500"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-12 items-center",children:[n.jsx("div",{className:"sm:col-span-4",children:n.jsxs("label",{className:"inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm",children:[n.jsx(cl,{className:"h-4 w-4"}),n.jsx("span",{children:"Nạp file .STL hoặc .gcode Creality"}),n.jsx("input",{type:"file",accept:".stl,.gcode",onChange:ie,className:"hidden"})]})}),n.jsx("div",{className:"sm:col-span-4",children:n.jsxs("select",{value:j,onChange:B=>G(B.target.value),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs",children:[n.jsx("option",{value:"",children:"-- Áp dụng vào form Tạo đơn mới / Hoặc chọn đơn khách --"}),s.map(B=>n.jsxs("option",{value:B.id,children:["#",B.id," · ",B.customerName," (",B.customerEmail||"chưa có Gmail",")"]},B.id))]})}),n.jsx("div",{className:"sm:col-span-4 flex items-center gap-2",children:n.jsxs("button",{type:"button",disabled:te,onClick:be,className:"flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 px-3.5 py-2.5 text-xs font-bold text-white",children:[n.jsx(Ii,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:te?"Đang gửi báo giá...":"Ghi Khối lượng & Gửi Mail Báo giá"})]})})]}),V&&n.jsxs("div",{className:"rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 flex flex-wrap items-center justify-between gap-2 text-xs",children:[n.jsxs("div",{className:"space-y-0.5",children:[n.jsxs("div",{className:"font-bold text-emerald-700 dark:text-emerald-300",children:["✓ ",V.fileName," (",V.source==="gcode"?"Từ G-code Creality":"Tự cắt lớp STL",")"]}),n.jsxs("div",{className:"font-mono text-slate-700 dark:text-slate-200",children:["Khối lượng tổng: ",n.jsxs("b",{children:[V.weightGrams," g"]})," · Thời gian dự kiến: ",n.jsx("b",{children:V.printTime}),V.dimensions?` · Kích thước: ${V.dimensions}`:""," · ","Tiền dự kiến:"," ",n.jsx("b",{className:"text-sky-500",children:ne(It(a,v.material,V.weightGrams,g,ke.surchargePercent).totalAmount)})]})]}),V.gcodeText&&n.jsxs("button",{type:"button",onClick:me,className:"inline-flex items-center gap-1.5 rounded-md border border-sky-500/40 bg-sky-500/15 px-3 py-1.5 text-xs font-bold text-sky-700 dark:text-sky-300 hover:bg-sky-500/25",children:[n.jsx(fd,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Tải file .gcode"})]})]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(P0,{className:"h-5 w-5 text-sky-500"}),n.jsx("h2",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Tính tiền In 3D theo Vật liệu & Khối lượng"})]}),n.jsxs("div",{className:"rounded-lg bg-sky-500/15 border border-sky-500/40 px-3.5 py-1.5 font-mono text-sm font-bold text-sky-600 dark:text-sky-300",children:["Thành tiền: ",ne(I.totalAmount),I.rushSurchargePercent>0?` (+${I.rushSurchargePercent}% gấp)`:""]})]}),n.jsxs("form",{onSubmit:ye,className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-6",children:[n.jsxs("div",{className:"sm:col-span-2",children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Loại vật liệu in"}),n.jsx("select",{value:o,onChange:B=>l(B.target.value),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm",children:a.map(B=>n.jsxs("option",{value:B.name,children:[B.name," — ",B.pricePerGram.toLocaleString("vi-VN"),"đ/g (+",B.baseFee.toLocaleString("vi-VN"),"đ nền)"]},B.id))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Khối lượng tổng (gram)"}),n.jsx("input",{type:"number",min:0,value:d,onChange:B=>u(Math.max(0,Number(B.target.value)||0)),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono font-bold text-sky-500"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Số lượng"}),n.jsx("input",{type:"number",min:1,value:g,onChange:B=>{const de=Math.max(1,Number(B.target.value)||1);if(p(de),V!=null&&V.perPartWeightGrams){const y=en(V.perPartWeightGrams*de);u(y),W(b=>b&&{...b,weightGrams:y})}},className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Infill"}),n.jsxs("select",{value:w,onChange:B=>{N(B.target.value);const de=parseInt(B.target.value,10);Number.isFinite(de)&&x({infillPercent:de})},className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm",children:[n.jsx("option",{value:"20%",children:"20%"}),n.jsx("option",{value:"40%",children:"40%"}),n.jsx("option",{value:"60%",children:"60%"}),n.jsx("option",{value:"80%",children:"80%"}),n.jsx("option",{value:"100%",children:"100%"})]})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:["Hạn phải giao"," ",n.jsxs("span",{className:ke.surchargePercent>0?"text-amber-500 font-bold":"text-emerald-500",children:["(",ke.surchargePercent>0?`+${ke.surchargePercent}%`:"0%",")"]})]}),n.jsx("input",{type:"date",min:Dt(0),value:c,onChange:B=>k(B.target.value),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-2 text-xs font-mono"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-5 items-end",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên khách hàng"}),n.jsx("input",{type:"text",value:C,onChange:B=>h(B.target.value),placeholder:"VD: Anh Hùng",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"SĐT khách"}),n.jsx("input",{type:"tel",value:m,onChange:B=>S(B.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"0912345678",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Gmail khách (báo khi in)"}),n.jsx("input",{type:"email",value:P,onChange:B=>O(B.target.value),placeholder:"khach@gmail.com",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs"})]}),n.jsx("div",{children:n.jsxs("label",{className:"inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20",children:[n.jsx(cl,{className:"h-3.5 w-3.5"}),n.jsx("span",{className:"truncate",children:F?F.name:"Đính kèm File 3D (Drive)"}),n.jsx("input",{type:"file",accept:".stl,.step,.stp,.obj,.3mf,.zip",onChange:B=>{var de;return M(((de=B.target.files)==null?void 0:de[0])??null)},className:"hidden"})]})}),n.jsxs("button",{type:"submit",disabled:$,className:"inline-flex items-center justify-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 disabled:opacity-60 px-4 py-2 text-xs font-bold text-white",children:[n.jsx(Va,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:$?"Đang lưu...":"Tạo đơn In 3D & Đẩy Drive"})]})]})]}),n.jsxs("div",{className:"pt-3 border-t border-slate-200 dark:border-[#1E325C]",children:[n.jsx("div",{className:"text-xs font-bold text-slate-600 dark:text-slate-300 mb-2",children:"Bảng đơn giá vật liệu (tự động áp dụng khi tính tiền):"}),n.jsx("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-5",children:a.map((B,de)=>n.jsxs("div",{className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-2.5 space-y-1.5",children:[n.jsx("div",{className:"font-mono text-xs font-bold text-sky-500",children:B.name}),n.jsxs("div",{className:"flex items-center justify-between gap-1 text-[11px]",children:[n.jsx("span",{className:"text-slate-500",children:"đ/gram:"}),n.jsx("input",{type:"number",min:0,step:100,value:B.pricePerGram,onChange:y=>pe(de,"pricePerGram",Number(y.target.value)||0),className:"w-20 rounded border border-slate-300 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-1.5 py-0.5 text-right font-mono text-xs"})]}),n.jsxs("div",{className:"flex items-center justify-between gap-1 text-[11px]",children:[n.jsx("span",{className:"text-emerald-500",children:"Giá gốc/g:"}),n.jsx("input",{type:"number",min:0,step:10,value:B.costPricePerGram??250,onChange:y=>pe(de,"costPricePerGram",Number(y.target.value)||0),className:"w-20 rounded border border-emerald-500/40 bg-white dark:bg-[#0B1324] px-1.5 py-0.5 text-right font-mono text-xs text-emerald-500"})]}),n.jsxs("div",{className:"flex items-center justify-between gap-1 text-[11px]",children:[n.jsx("span",{className:"text-slate-500",children:"Phí nền:"}),n.jsx("input",{type:"number",min:0,step:1e3,value:B.baseFee,onChange:y=>pe(de,"baseFee",Number(y.target.value)||0),className:"w-20 rounded border border-slate-300 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-1.5 py-0.5 text-right font-mono text-xs"})]})]},B.id))})]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:["Hàng đợi Đơn In 3D (",s.length," đơn · ",q," chưa có người nhận in)"]}),n.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["Thợ in bấm mở link Google Drive tải file theo mã đơn, sau đó tích vào ô ",n.jsx("strong",{children:"Đã nhận in"})," (tự động đồng bộ sang tab DonIn3D trên Google Sheet)."]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[X&&n.jsxs("a",{href:X,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/20",children:[n.jsx(Mt,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Mở Sheet DonIn3D (CTV)"})]}),X&&n.jsx("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(X),K("✓ Đã sao chép link Sheet DonIn3D công khai cho CTV!")},className:"inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-[#1E325C] px-3 py-2 text-xs font-semibold hover:border-sky-500",children:n.jsx("span",{children:"Chép link CTV"})}),n.jsxs("button",{type:"button",onClick:Y,disabled:U,className:"inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20 disabled:opacity-60",children:[n.jsx(_n,{className:`h-3.5 w-3.5 ${U?"animate-spin":""}`}),n.jsx("span",{children:U?"Đang đồng bộ...":"Đồng bộ Sheet (DonIn3D)"})]})]})]}),ee>0&&n.jsxs("div",{className:"rounded-lg border border-amber-500/40 bg-amber-500/10 px-3.5 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300",children:["⏳ Hiện có ",n.jsx("strong",{children:ee})," đơn In 3D đang chờ Admin xác nhận tiền / duyệt bên tab"," ",n.jsx("strong",{children:"Đơn hàng"})," (sheet ",n.jsx("code",{children:"DonHang"}),") trước khi đẩy vào hàng đợi ",n.jsx("code",{children:"DonIn3D"}),"."]}),s.length===0?n.jsx("div",{className:"rounded-xl border border-dashed border-slate-200 dark:border-[#1E325C] p-8 text-center text-xs text-slate-500",children:"Chưa có đơn In 3D nào. Khách gửi file từ trang chủ hoặc bạn tạo đơn ở trên sẽ hiện tại đây."}):n.jsx("div",{className:"space-y-3",children:s.map(B=>{const de=i.find(ue=>B.printerId&&ue.id===B.printerId)??i.find(ue=>B.printerName&&ue.name.trim().toLowerCase()===B.printerName.trim().toLowerCase())??null,y=dt(a,B,R),b=B.shopCommissionPercent??R,H=B.payoutWeekKey||ir(),ae=B.payoutStatus==="paid",z=(de==null?void 0:de.id)||(B.printerName?`__custom_${B.printerName}`:"");return n.jsxs("div",{className:`rounded-xl border p-4 space-y-3 ${ae?"border-emerald-500/50 bg-emerald-500/10":B.adminConfirmed?"border-sky-500/50 bg-sky-500/5":B.claimedByPrinter?"border-emerald-500/40 bg-emerald-500/5":"border-amber-500/40 bg-amber-500/5"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("span",{className:"font-mono text-xs font-bold text-sky-500",children:["#",B.id]}),n.jsx("span",{className:"text-xs font-bold text-slate-900 dark:text-white",children:B.customerName}),n.jsx("span",{className:"font-mono text-xs text-slate-500",children:B.customerPhone}),n.jsxs("span",{className:"rounded bg-slate-200 dark:bg-[#162342] px-2 py-0.5 font-mono text-[11px] font-semibold",children:[B.material," · ",B.infill," · SL ",B.quantity]}),B.dimensions&&n.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:B.dimensions}),B.fileSummary&&n.jsxs("span",{className:"font-mono text-[11px] text-sky-400",children:["[",B.fileSummary,"]"]}),B.deliveryLabel&&n.jsx("span",{className:`rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold ${(B.rushSurchargePercent??0)>0||B.deliveryLabel.includes("+15%")||B.deliveryLabel.includes("+6%")?"bg-amber-500/20 text-amber-400 border border-amber-500/40":"bg-slate-500/15 text-slate-400"}`,children:B.deliveryLabel}),B.quotedByEmail&&n.jsx("span",{className:"rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-500",children:"Đã gửi mail báo giá"}),B.paymentMethod&&(()=>{const ue=B.paymentMethod==="cod"?B.depositAmount??Math.round(B.totalAmount*.3):0;return n.jsx("span",{className:`rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold ${B.paymentStatus==="qr_verified"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":B.paymentMethod==="cod"&&ue>0?"bg-amber-500/20 text-amber-300 border border-amber-500/40":B.paymentMethod==="transfer"?"bg-sky-500/15 text-sky-400 border border-sky-500/30":"bg-slate-500/15 text-slate-300"}`,children:B.paymentMethod==="transfer"?B.paymentStatus==="qr_verified"?`Đã CK QR${B.transferCode?` (${B.transferCode})`:""}`:`CK QR${B.transferCode?` (${B.transferCode})`:""}`:B.paymentStatus==="qr_verified"?`COD · Đã cọc 30% (${ne(ue)})`:ue>0?`COD · Cọc 30% (${ne(ue)})`:"COD"})})(),(B.shippingMethod||B.shippingAddress)&&n.jsx("span",{className:"rounded bg-indigo-500/15 px-1.5 py-0.5 font-mono text-[10px] text-indigo-300 max-w-xs truncate",children:B.shippingMethod==="pickup"?"Nhận tại xưởng":`Ship: ${B.shippingAddress||"Giao tận nơi"}`}),ae?n.jsxs("span",{className:"rounded bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400",children:["✓ Đã CK CTV (",H,")"]}):B.adminConfirmed?n.jsxs("span",{className:"rounded bg-sky-500/20 border border-sky-500/40 px-1.5 py-0.5 font-mono text-[10px] font-bold text-sky-400",children:["✓ Admin đã xác nhận (",H,")"]}):null]}),n.jsxs("div",{className:"flex items-center gap-2",children:[B.gcodeDriveUrl&&n.jsxs("a",{href:B.gcodeDriveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-2 py-1 text-xs font-semibold text-sky-400 hover:bg-sky-500/20",children:[n.jsx("span",{children:".gcode"}),n.jsx(Mt,{className:"h-3 w-3"})]}),B.driveFileUrl?n.jsxs("a",{href:B.driveFileUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 rounded-md bg-sky-500 hover:bg-sky-400 px-2.5 py-1 text-xs font-bold text-slate-950",children:[n.jsx("span",{children:"Lấy file Drive"}),n.jsx(Mt,{className:"h-3 w-3"})]}):n.jsxs("span",{className:"font-mono text-[11px] text-slate-400",children:["Mã file: ",B.driveFileCode]}),n.jsx("button",{type:"button",onClick:()=>t(ue=>({...ue,print3dOrders:(ue.print3dOrders??[]).filter(Ce=>Ce.id!==B.id)})),title:"Xóa khỏi danh sách máy",className:"rounded p-1 text-slate-400 hover:text-rose-500",children:n.jsx(an,{className:"h-3.5 w-3.5"})})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-12 items-end pt-2 border-t border-slate-200/70 dark:border-[#1E325C]",children:[n.jsxs("div",{className:"sm:col-span-4",children:[n.jsx("label",{className:"block text-[10px] text-slate-500 mb-0.5",children:"Người in (kéo từ CTV In 3D)"}),n.jsxs("select",{disabled:ae,value:z,onChange:ue=>{const Ce=ue.target.value;if(!Ce){xe(B.id,Ae=>({...Ae,printerId:"",printerName:"",claimedByPrinter:!1,adminConfirmed:!1}));return}const Pe=i.find(Ae=>Ae.id===Ce);if(!Pe)return;const Ee=dt(a,{...B,shopCommissionPercent:b},R);xe(B.id,Ae=>({...Ae,printerId:Pe.id,printerName:Pe.name,claimedByPrinter:!0,printStatus:Ae.printStatus==="waiting"?"printing":Ae.printStatus,shopCommissionPercent:b,materialCostPerGram:Ee.materialCostPerGram,materialCostAmount:Ee.materialCostAmount,netAfterMaterialAmount:Ee.netAfterMaterialAmount,settlementBaseAmount:Ee.baseAmount,shopFeeAmount:Ee.shopFeeAmount,printerPayoutAmount:Ee.printerPayoutAmount,payoutWeekKey:Ae.payoutWeekKey||ir()}))},className:"w-full rounded border border-slate-300 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2 py-1.5 text-xs font-semibold disabled:opacity-60",children:[n.jsx("option",{value:"",children:"-- Chọn người in (CTV) --"}),!de&&B.printerName&&n.jsxs("option",{value:`__custom_${B.printerName}`,children:[B.printerName," (tên cũ)"]}),i.map(ue=>n.jsxs("option",{value:ue.id,children:[ue.name," · ",ue.phone," (",ue.bankId,")"]},ue.id))]}),de&&n.jsxs("div",{className:"mt-1 text-[10px] font-mono text-sky-500",children:["Bank: ",de.bankId," · ",de.bankAccountNo]})]}),n.jsxs("div",{className:"sm:col-span-3",children:[n.jsx("label",{className:"block text-[10px] text-slate-500 mb-0.5",children:"KL báo khách (g)"}),n.jsx("input",{type:"number",min:0,step:"0.1",value:B.weightGrams||"",placeholder:"0",onChange:ue=>{const Ce=Math.max(0,Number(ue.target.value)||0),Pe=It(a,B.material,Ce,B.quantity,B.rushSurchargePercent||0),Ee=dt(a,{...B,weightGrams:Ce,totalAmount:Pe.totalAmount},R);xe(B.id,Ae=>({...Ae,weightGrams:Ce,totalAmount:Pe.totalAmount,materialCostPerGram:Ee.materialCostPerGram,materialCostAmount:Ee.materialCostAmount,netAfterMaterialAmount:Ee.netAfterMaterialAmount,settlementBaseAmount:Ee.baseAmount,shopFeeAmount:Ee.shopFeeAmount,printerPayoutAmount:Ee.printerPayoutAmount}))},className:"w-full rounded border border-slate-300 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2 py-1.5 font-mono text-xs"})]}),n.jsxs("div",{className:"sm:col-span-3",children:[n.jsx("label",{className:"block text-[10px] text-slate-500 mb-0.5",children:"Trạng thái in"}),n.jsxs("select",{value:B.printStatus,onChange:ue=>{const Ce=ue.target.value;xe(B.id,Pe=>({...Pe,printStatus:Ce,claimedByPrinter:Ce!=="waiting"?!0:Pe.claimedByPrinter}))},className:"w-full rounded border border-slate-300 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2 py-1.5 text-xs",children:[n.jsx("option",{value:"waiting",children:"Chờ in"}),n.jsx("option",{value:"printing",children:"Đang in"}),n.jsx("option",{value:"done",children:"In xong"})]})]}),n.jsx("div",{className:"sm:col-span-2 flex items-center pb-1.5",children:n.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300",children:[n.jsx("input",{type:"checkbox",checked:B.claimedByPrinter,onChange:ue=>{const Ce=ue.target.checked;xe(B.id,Pe=>({...Pe,claimedByPrinter:Ce,printStatus:Ce&&Pe.printStatus==="waiting"?"printing":Pe.printStatus}))},className:"h-4 w-4 accent-emerald-500"}),n.jsx("span",{children:"Đã nhận in"})]})})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white/80 dark:bg-[#0B1324] px-3 py-2 text-xs",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-1 font-mono",children:[n.jsxs("span",{children:["Tiền khách đặt:"," ",n.jsx("b",{className:"text-slate-900 dark:text-white",children:ne(y.baseAmount)})]}),n.jsxs("span",{className:`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-semibold ${ae?"bg-emerald-500/15 text-emerald-500":B.adminConfirmed?"bg-sky-500/15 text-sky-500":"bg-slate-200/70 dark:bg-[#162342] text-slate-600 dark:text-slate-300"}`,children:[n.jsx(rn,{className:"h-3 w-3"}),ae?"Đã CK cho CTV":B.adminConfirmed?`Đã chốt CTV: ${ne(y.printerPayoutAmount)}`:"Tính tiền chi tiết ở Bảng Tính Tiền CTV"]})]}),r&&n.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/20 transition",children:[n.jsx(Mr,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Tính tiền ở Bảng CTV →"})]})]})]},B.id)})})]}),n.jsxs("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-500/5 px-5 py-4 flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300",children:[n.jsx(Mr,{className:"h-4 w-4 text-emerald-500 shrink-0"}),n.jsxs("span",{children:["Bảng tổng hợp đối soát & chuyển tiền cho Cộng tác viên hàng tuần nằm ở tab riêng ",n.jsx("strong",{children:"Tính tiền CTV In 3D (Tuần)"})," và sheet ",n.jsx("code",{children:"BangTinhTienCTV"})," trên Google Sheet."]})]}),r&&n.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white",children:[n.jsx(Mr,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Mở Bảng Tính Tiền CTV"})]})]})]})},hx=({cmsData:e,setCmsData:t})=>{var x;const r=e.print3dCollaborators??[],a=e.print3dOrders??[],s=e.print3dMaterials&&e.print3dMaterials.length>0?e.print3dMaterials:$e,i=((x=e.print3dSetup)==null?void 0:x.defaultShopCommissionPercent)??it.defaultShopCommissionPercent??20,[o,l]=E.useState(null),[d,u]=E.useState(""),[g,p]=E.useState(""),[w,N]=E.useState("MB"),[c,k]=E.useState(""),[C,h]=E.useState(""),[m,S]=E.useState(""),[P,O]=E.useState(""),[F,M]=E.useState(!1),[$,D]=E.useState(!1),[U,J]=E.useState(!1),[se,re]=E.useState(""),X=typeof window<"u"&&window.location.hostname==="localhost"?`${window.location.origin}/#ctv-in3d`:"https://trbach777.github.io/#ctv-in3d",ce="https://trbach777.github.io/#ctv-in3d",ee=j=>{re(j),setTimeout(()=>re(""),4e3)},T=async()=>{D(!0);try{const j=await Ur(e);let G=j.changed?j.nextState:e;const V=await qa(G);V.changed&&(G=V.nextState),(j.changed||V.changed)&&t(G),j.error?ee(j.error):ee(`✓ Đã đồng bộ ${j.collaborators.length} cộng tác viên (CongTacVienIn3D).`)}finally{D(!1)}};E.useEffect(()=>{Ur(e).then(j=>{j.changed&&t(j.nextState)})},[]);const A=()=>{l(null),u(""),p(""),N("MB"),k(""),h(""),S(""),O("")},R=j=>{const G=va.find(V=>V.code===j.bankId);l(j.id),u(j.name),p(j.phone),G&&G.code!=="OTHER"?(N(G.code),k("")):(N("OTHER"),k(j.bankName)),h(j.bankAccountNo),S(j.bankAccountName||""),O(j.note||"")},f=async j=>{var Z;j.preventDefault();const G=d.trim();if(!G){ee("Vui lòng nhập họ tên cộng tác viên in.");return}const V=Wr(g);if(!V.valid){ee(V.error||"Số điện thoại phải gồm 10 số.");return}const W=C.replace(/\s+/g,"");if(!W){ee("Vui lòng nhập số tài khoản ngân hàng (STK).");return}const _=va.find(ke=>ke.code===w),Q=w==="OTHER"?c.trim()||"Ngân hàng khác":(_==null?void 0:_.name)||w,te={id:o||`CTV-${Date.now().toString().slice(-6)}`,name:G,phone:V.normalized,bankName:Q,bankId:w==="OTHER"?c.trim().toUpperCase()||"OTHER":w,bankAccountNo:W,bankAccountName:m.trim()||G.toUpperCase(),note:P.trim(),createdAt:o?((Z=r.find(ke=>ke.id===o))==null?void 0:Z.createdAt)||new Date().toISOString():new Date().toISOString()};M(!0);try{t(I=>{const K=I.print3dCollaborators??[],pe=K.some(ye=>ye.id===te.id);return{...I,print3dCollaborators:pe?K.map(ye=>ye.id===te.id?te:ye):[te,...K]}});const ke=await Hm(e.profile,te);ee(ke.ok?`✓ Đã lưu CTV "${te.name}" (${te.bankId} · ${te.bankAccountNo}) lên Google Sheet!`:`✓ Đã lưu cục bộ (${ke.error||"kiểm tra Webhook"})`),A()}finally{M(!1)}},L=j=>{t(G=>({...G,print3dCollaborators:(G.print3dCollaborators??[]).filter(V=>V.id!==j.id)})),Ff(e.profile,j.id),o===j.id&&A(),ee(`✓ Đã xóa cộng tác viên "${j.name}".`)},v=async()=>{try{await navigator.clipboard.writeText(ce),J(!0),setTimeout(()=>J(!1),2200)}catch{ee(`Link CTV: ${ce}`)}};return n.jsxs("div",{className:"space-y-6",children:[se&&n.jsx("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-600 dark:text-emerald-300",children:se}),n.jsxs("div",{className:"rounded-xl border border-sky-500/30 bg-sky-500/5 p-5 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(vd,{className:"h-5 w-5 text-sky-500"}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-base font-bold text-slate-900 dark:text-white",children:["Trang Cộng tác viên In 3D (",r.length," người)"]}),n.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["Danh sách này tự động kéo vào mục ",n.jsx("strong",{children:"Người in"})," ở trang báo đơn in & tự tính tiền công chuyển hàng tuần (1 tuần / lần)."]})]})]}),n.jsxs("button",{type:"button",onClick:T,disabled:$,className:"inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20 disabled:opacity-60",children:[n.jsx(_n,{className:`h-3.5 w-3.5 ${$?"animate-spin":""}`}),n.jsx("span",{children:$?"Đang đồng bộ...":"Đồng bộ Sheet (CongTacVienIn3D)"})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-3 py-2 text-xs",children:[n.jsx("span",{className:"font-semibold text-slate-600 dark:text-slate-300",children:"Link gửi cho CTV vào chọn đơn / tự đăng ký:"}),n.jsx("code",{className:"font-mono font-bold text-sky-500",children:ce}),n.jsxs("button",{type:"button",onClick:v,className:"ml-auto inline-flex items-center gap-1 rounded-md border border-slate-300 dark:border-[#1E325C] px-2.5 py-1 font-semibold hover:bg-slate-100 dark:hover:bg-[#111C33]",children:[U?n.jsx(Kt,{className:"h-3.5 w-3.5 text-emerald-500"}):n.jsx(xn,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:U?"Đã copy link":"Copy link CTV"})]}),n.jsxs("a",{href:X,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 rounded-md bg-sky-500 px-2.5 py-1 font-bold text-slate-950 hover:bg-sky-400",children:[n.jsx("span",{children:"Mở trang CTV"}),n.jsx(Mt,{className:"h-3 w-3"})]})]})]}),n.jsxs("form",{onSubmit:f,className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("h3",{className:"inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white",children:[n.jsx(ya,{className:"h-4 w-4 text-sky-500"}),n.jsx("span",{children:o?"Sửa thông tin Cộng tác viên":"Thêm Cộng tác viên In 3D mới"})]}),o&&n.jsx("button",{type:"button",onClick:A,className:"text-xs font-semibold text-slate-500 hover:text-rose-500",children:"Hủy sửa"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên người in (CTV) *"}),n.jsx("input",{type:"text",required:!0,value:d,onChange:j=>u(j.target.value),placeholder:"VD: Nguyễn Văn A",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Số điện thoại / Zalo *"}),n.jsx("input",{type:"tel",inputMode:"numeric",required:!0,value:g,onChange:j=>p(j.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"0912345678",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Ngân hàng *"}),n.jsx("select",{value:w,onChange:j=>N(j.target.value),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs",children:va.map(j=>n.jsx("option",{value:j.code,children:j.code==="OTHER"?j.name:`${j.code} — ${j.name}`},j.code))})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-4 items-end",children:[w==="OTHER"&&n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên / Mã Ngân hàng *"}),n.jsx("input",{type:"text",required:!0,value:c,onChange:j=>k(j.target.value),placeholder:"VD: Cake / Timo...",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Số tài khoản (STK Bank) *"}),n.jsx("input",{type:"text",required:!0,value:C,onChange:j=>h(j.target.value.trim()),placeholder:"9909088888888",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono font-bold text-sky-500"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Chủ tài khoản (không dấu)"}),n.jsx("input",{type:"text",value:m,onChange:j=>S(j.target.value),placeholder:"NGUYEN VAN A",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Máy in / Ghi chú"}),n.jsx("input",{type:"text",value:P,onChange:j=>O(j.target.value),placeholder:"VD: K1 Max 300x300 · Hà Nội",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs"})]}),n.jsx("div",{children:n.jsxs("button",{type:"submit",disabled:F,className:"inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 disabled:opacity-60 px-4 py-2 text-xs font-bold text-white",children:[n.jsx(ya,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:F?"Đang lưu...":o?"Cập nhật CTV":"Thêm CTV"})]})})]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-3",children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 dark:text-white",children:["Danh sách Cộng tác viên In 3D (",r.length,")"]}),r.length===0?n.jsxs("div",{className:"rounded-xl border border-dashed border-slate-200 dark:border-[#1E325C] p-6 text-center text-xs text-slate-500",children:["Chưa có cộng tác viên nào. Hãy thêm CTV ở trên hoặc gửi link ",n.jsx("code",{children:ce})," để thợ in tự đăng ký."]}):n.jsx("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:r.map(j=>{const G=a.filter(Q=>Q.printerId===j.id||(Q.printerName||"").trim().toLowerCase()===j.name.trim().toLowerCase());let V=0,W=0,_=0;for(const Q of G){const te=dt(s,Q,i);Q.adminConfirmed?Q.payoutStatus==="paid"?W+=te.printerPayoutAmount:V+=te.printerPayoutAmount:_+=1}return n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-slate-50/70 dark:bg-[#111C33] p-4 space-y-2.5",children:[n.jsxs("div",{className:"flex items-start justify-between gap-2",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("span",{className:"text-sm font-bold text-slate-900 dark:text-white",children:j.name}),n.jsx("span",{className:"font-mono text-xs text-sky-500",children:j.phone}),n.jsx("span",{className:"rounded bg-slate-200 dark:bg-[#0B1324] px-1.5 py-0.5 font-mono text-[10px] text-slate-500",children:j.id})]}),j.note&&n.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",children:j.note})]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("button",{type:"button",onClick:()=>R(j),title:"Sửa CTV",className:"rounded p-1.5 text-slate-400 hover:bg-sky-500/15 hover:text-sky-500",children:n.jsx(Q0,{className:"h-3.5 w-3.5"})}),n.jsx("button",{type:"button",onClick:()=>L(j),title:"Xóa CTV",className:"rounded p-1.5 text-slate-400 hover:bg-rose-500/15 hover:text-rose-500",children:n.jsx(an,{className:"h-3.5 w-3.5"})})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-3 py-2 text-xs",children:[n.jsx(gd,{className:"h-3.5 w-3.5 text-sky-500 shrink-0"}),n.jsxs("span",{className:"font-semibold text-slate-700 dark:text-slate-200",children:[j.bankName," (",j.bankId,")"]}),n.jsx("span",{className:"font-mono font-bold text-sky-500",children:j.bankAccountNo}),j.bankAccountName&&n.jsxs("span",{className:"text-[11px] text-slate-500",children:["· ",j.bankAccountName]})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono pt-1",children:[n.jsxs("span",{className:"text-slate-500",children:["Đã nhận: ",n.jsx("b",{children:G.length})," đơn",_>0?` (${_} chờ Admin duyệt)`:""]}),n.jsxs("div",{className:"inline-flex items-center gap-3",children:[n.jsxs("span",{className:"inline-flex items-center gap-1 text-amber-500 font-bold",children:[n.jsx(Mr,{className:"h-3 w-3"}),"Chờ chuyển: ",ne(V)]}),W>0&&n.jsxs("span",{className:"text-emerald-500 font-semibold",children:["Đã CK: ",ne(W)]})]})]})]},j.id)})})]})]})},mx=({cmsData:e,setCmsData:t})=>{var R;const r=e.print3dMaterials&&e.print3dMaterials.length>0?e.print3dMaterials:$e,a=e.print3dOrders??[],s=e.print3dCollaborators??[],i=((R=e.print3dSetup)==null?void 0:R.defaultShopCommissionPercent)??it.defaultShopCommissionPercent??25,[o,l]=E.useState("unpaid_all"),[d,u]=E.useState("all"),[g,p]=E.useState(""),[w,N]=E.useState(null),[c,k]=E.useState(null),[C,h]=E.useState(!1),[m,S]=E.useState(""),P=f=>{S(f),setTimeout(()=>S(""),4200)},O=(f,L)=>{const v=a.find(j=>j.id===f),x=v?L(v):null;t(j=>({...j,print3dOrders:(j.print3dOrders??[]).map(G=>G.id===f?L(G):G)})),x&&jd(e.profile,x)},F=(f,L)=>{const v=Math.max(0,Math.round(Number(L)||0)),x=e.print3dMaterials&&e.print3dMaterials.length>0?e.print3dMaterials:structuredClone($e),j=x[f];if(!j)return;const G=x.map((V,W)=>W===f?{...V,costPricePerGram:v}:V);t(V=>({...V,print3dMaterials:G,print3dOrders:(V.print3dOrders??[]).map(W=>{if(W.payoutStatus==="paid")return W;const _=gl(G,W.material);if(!_||_.id!==j.id)return W;const Q={...W,materialCostPerGram:v},te=dt(G,Q,i);return{...W,materialCostPerGram:te.materialCostPerGram,materialCostAmount:te.materialCostAmount,netAfterMaterialAmount:te.netAfterMaterialAmount,settlementBaseAmount:te.baseAmount,shopFeeAmount:te.shopFeeAmount,printerPayoutAmount:te.printerPayoutAmount}})}))},M=f=>{const L=Math.min(100,Math.max(0,Number(f)||0));t(v=>({...v,print3dSetup:{...v.print3dSetup??it,defaultShopCommissionPercent:L}}))},$=async(f=!1)=>{h(!0);try{const L=await Ur(e);let v=L.changed?L.nextState:e;const x=await qa(v);x.changed&&(v=x.nextState),(L.changed||x.changed)&&t(v),f||(x.error?P(x.error):P(`✓ Đã đồng bộ ${x.count} đơn (DonIn3D) & ${L.collaborators.length} CTV (CongTacVienIn3D).`))}finally{h(!1)}};E.useEffect(()=>{$(!0)},[]);const D=ir(),U=Os(D),J=Array.from(new Set([D,...a.filter(f=>f.adminConfirmed&&f.payoutWeekKey).map(f=>f.payoutWeekKey)])).sort((f,L)=>L.localeCompare(f)),se=Gm(a,s,r,i,o),re=se.reduce((f,L)=>f+L.totalBaseAmount,0),X=se.reduce((f,L)=>f+L.totalMaterialCost,0),ce=se.reduce((f,L)=>f+L.totalShopFee,0),ee=se.filter(f=>!f.allPaid).reduce((f,L)=>f+L.totalPrinterPayout,0),T=g.trim().toLowerCase(),A=a.filter(f=>d==="pending_confirm"&&f.adminConfirmed||d==="confirmed_unpaid"&&(!f.adminConfirmed||f.payoutStatus==="paid")||d==="paid"&&f.payoutStatus!=="paid"?!1:T?f.id.toLowerCase().includes(T)||f.customerName.toLowerCase().includes(T)||(f.customerPhone||"").toLowerCase().includes(T)||(f.printerName||"").toLowerCase().includes(T)||(f.material||"").toLowerCase().includes(T):!0);return n.jsxs("div",{className:"space-y-5",children:[m&&n.jsx("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-600 dark:text-emerald-300",children:m}),n.jsxs("div",{className:"rounded-xl border border-emerald-500/40 bg-white dark:bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(Mr,{className:"h-5 w-5 text-emerald-500"}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Bảng Tính Tiền & Chuyển Khoản Người In 3D (Định kỳ 1 tuần / lần)"}),n.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400 inline-flex items-center gap-1.5",children:[n.jsx(xm,{className:"h-3.5 w-3.5 text-sky-500 shrink-0"}),n.jsxs("span",{children:["Tuần hiện tại ",n.jsx("b",{className:"font-mono",children:D})," (",U.displayRange,") · Tự động chốt tổng mỗi 7 ngày (",U.sundayLabel,") sang sheet ",n.jsx("code",{children:"ThanhToanCTVIn3D"})," (ô Admin tích ",n.jsx("b",{children:"Đã chuyển"})," nằm tại cột L sheet ",n.jsx("code",{children:"ThanhToanCTVIn3D"}),")."]})]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("select",{value:o,onChange:f=>l(f.target.value),className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono font-semibold",children:[n.jsx("option",{value:"unpaid_all",children:"Chưa chuyển khoản (tất cả tuần)"}),J.map(f=>n.jsxs("option",{value:f,children:["Tuần ",f," (",Os(f).displayRange,")"]},f)),n.jsx("option",{value:"all",children:"Tất cả đơn Admin đã xác nhận"})]}),n.jsxs("button",{type:"button",onClick:()=>void $(!1),disabled:C,className:"inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20 disabled:opacity-60",children:[n.jsx(_n,{className:`h-3.5 w-3.5 ${C?"animate-spin":""}`}),n.jsx("span",{children:C?"Đang đồng bộ...":"Đồng bộ Sheet"})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",children:[n.jsxs("div",{className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-3.5",children:[n.jsx("div",{className:"text-[11px] font-semibold text-slate-500",children:"Tổng tiền khách đặt (đã XN)"}),n.jsx("div",{className:"mt-1 font-mono text-lg font-bold text-slate-900 dark:text-white",children:ne(re)})]}),n.jsxs("div",{className:"rounded-lg border border-sky-500/30 bg-sky-500/5 p-3.5",children:[n.jsx("div",{className:"text-[11px] font-semibold text-sky-500",children:"Tổng tiền nhựa (hoàn CTV)"}),n.jsx("div",{className:"mt-1 font-mono text-lg font-bold text-sky-500",children:ne(X)})]}),n.jsxs("div",{className:"rounded-lg border border-amber-500/30 bg-amber-500/5 p-3.5",children:[n.jsxs("div",{className:"text-[11px] font-semibold text-amber-500",children:["Tổng tiền cho Shop (",i,"%)"]}),n.jsx("div",{className:"mt-1 font-mono text-lg font-bold text-amber-500",children:ne(ce)})]}),n.jsxs("div",{className:"rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3.5",children:[n.jsx("div",{className:"text-[11px] font-semibold text-emerald-500",children:"Cần chuyển Người in (chưa CK)"}),n.jsx("div",{className:"mt-1 font-mono text-lg font-bold text-emerald-500",children:ne(ee)})]})]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Z0,{className:"h-4 w-4 text-sky-500"}),n.jsx("h3",{className:"text-sm font-bold text-slate-900 dark:text-white",children:"Mục A · Giá gốc từng loại nhựa (đ/g) & % Shop mặc định"})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[n.jsx("span",{className:"font-semibold text-slate-600 dark:text-slate-300",children:"% Shop mặc định:"}),n.jsx("input",{type:"number",min:0,max:100,value:i,onChange:f=>M(Number(f.target.value)),className:"w-20 rounded-lg border border-amber-400/50 bg-slate-50 dark:bg-[#111C33] px-2.5 py-1 text-center font-mono text-xs font-bold text-amber-500"}),n.jsx("span",{className:"text-slate-400 font-mono",children:"%"})]})]}),n.jsxs("div",{className:"rounded-lg border border-sky-500/30 bg-sky-500/5 px-3.5 py-2 text-xs text-slate-600 dark:text-slate-300 font-mono",children:["Công thức: ",n.jsx("b",{children:"Tiền nhựa"})," = KL thực tế × Giá gốc ·"," ",n.jsx("b",{children:"Tiền cho Shop"})," = (Khách − Nhựa) × ",i,"% ·"," ",n.jsx("b",{className:"text-emerald-500",children:"Tiền CTV thực nhận"})," = (Khách − Nhựa − Tiền Shop) + Tiền nhựa (hoàn tiền nhựa CTV tự mua)"]}),n.jsx("div",{className:"grid grid-cols-2 gap-2.5 sm:grid-cols-5",children:r.map((f,L)=>n.jsxs("div",{className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-3 space-y-1.5",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"font-mono text-xs font-bold text-sky-500",children:f.name}),n.jsxs("span",{className:"font-mono text-[10px] text-slate-400",children:["Khách: ",ne(f.pricePerGram),"/g"]})]}),n.jsxs("div",{className:"flex items-center justify-between gap-1 text-[11px]",children:[n.jsx("span",{className:"text-slate-500",children:"Giá gốc/g:"}),n.jsx("input",{type:"number",min:0,step:10,value:f.costPricePerGram??250,onChange:v=>F(L,Number(v.target.value)),className:"w-20 rounded border border-emerald-500/40 bg-white dark:bg-[#0B1324] px-1.5 py-0.5 text-right font-mono text-xs font-bold text-emerald-500"})]})]},f.id))})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-3",children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 dark:text-white",children:["Mục B · Bảng I: Tổng hợp chuyển khoản từng Người in theo tuần (",se.length," khoản)"]}),se.length===0?n.jsxs("div",{className:"rounded-xl border border-dashed border-slate-200 dark:border-[#1E325C] p-6 text-center text-xs text-slate-500",children:["Chưa có khoản đối soát nào đã xác nhận trong bộ lọc này. Hãy chọn Người in, nhập KL thực tế và bấm ",n.jsx("strong",{children:"Admin xác nhận"})," ở Bảng II bên dưới."]}):n.jsx("div",{className:"space-y-3",children:se.map(f=>{const L=Os(f.weekKey),v=f.collaborator,x=`TT IN3D ${f.weekKey} ${f.collaboratorName}`,j=v&&v.bankId&&v.bankAccountNo&&v.bankId!=="OTHER"?Ua({bankId:v.bankId,bankAccountNo:v.bankAccountNo,bankAccountName:v.bankAccountName||v.name},f.totalPrinterPayout,x):"",G=w===f.groupKey;return n.jsxs("div",{className:`rounded-xl border p-4 space-y-3 ${f.allPaid?"border-emerald-500/40 bg-emerald-500/5":"border-sky-500/40 bg-sky-500/5"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("span",{className:"text-sm font-bold text-slate-900 dark:text-white",children:f.collaboratorName}),f.collaboratorPhone&&n.jsx("span",{className:"font-mono text-xs text-sky-500",children:f.collaboratorPhone}),n.jsxs("span",{className:"rounded bg-slate-200 dark:bg-[#162342] px-2 py-0.5 font-mono text-[11px] font-semibold",children:[f.weekKey," (",L.displayRange,")"]}),f.allPaid&&n.jsx("span",{className:"rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-500",children:"✓ Đã chuyển khoản"})]}),v?n.jsxs("div",{className:"inline-flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300",children:[n.jsx(gd,{className:"h-3.5 w-3.5 text-sky-500"}),n.jsxs("span",{children:[n.jsx("b",{children:v.bankName})," (",v.bankId,") · STK:"," ",n.jsx("b",{className:"font-mono text-sky-500",children:v.bankAccountNo}),v.bankAccountName?` · Chủ TK: ${v.bankAccountName}`:""]})]}):n.jsx("div",{className:"text-[11px] text-amber-500",children:"Chưa có thông tin Bank trong mục Cộng tác viên In 3D."}),n.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:f.orders.map(V=>{const W=dt(r,V,i);return n.jsxs("span",{className:"rounded border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2 py-0.5 font-mono text-[10px]",children:["#",V.id," (",V.material," · ",W.effectiveWeightGrams,"g · Nhựa +",ne(W.materialCostAmount)," · Shop -",ne(W.shopFeeAmount)," → CTV thực nhận ",ne(W.printerPayoutAmount),")"]},V.id)})})]}),n.jsxs("div",{className:"text-right font-mono space-y-1",children:[n.jsxs("div",{className:"text-[11px] text-slate-500",children:[f.orders.length," đơn · Tổng KL: ",n.jsxs("b",{children:[f.totalActualWeightGrams,"g"]})]}),n.jsxs("div",{className:"text-xs text-slate-600 dark:text-slate-300",children:["Khách: ",n.jsx("b",{children:ne(f.totalBaseAmount)})," · Nhựa (hoàn CTV):"," ",n.jsx("b",{className:"text-sky-500",children:ne(f.totalMaterialCost)})," · Shop giữ:"," ",n.jsxs("b",{className:"text-amber-500",children:["-",ne(f.totalShopFee)]})]}),n.jsxs("div",{className:"text-base font-bold text-emerald-500",children:["Chuyển CTV thực nhận: ",ne(f.totalPrinterPayout)]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-200/70 dark:border-[#1E325C]",children:[j&&n.jsxs("button",{type:"button",onClick:()=>N(G?null:f.groupKey),className:"inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-500 hover:bg-sky-500/20",children:[n.jsx(bd,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:G?"Ẩn mã QR Bank":"QR Chuyển khoản"})]}),!f.allPaid&&n.jsxs("button",{type:"button",disabled:c===f.groupKey,onClick:async()=>{k(f.groupKey);try{const V=new Set(f.orders.map(_=>_.id)),W=new Date().toISOString();t(_=>({..._,print3dOrders:(_.print3dOrders??[]).map(Q=>V.has(Q.id)?{...Q,payoutStatus:"paid",payoutPaidAt:W}:Q)})),await Lf(e.profile,{weekKey:f.weekKey,collaboratorId:f.collaboratorId,collaboratorName:f.collaboratorName,collaboratorPhone:f.collaboratorPhone,bankSummary:v?`${v.bankName} (${v.bankId}) - ${v.bankAccountNo} - ${v.bankAccountName||f.collaboratorName}`:f.collaboratorName,orderIds:f.orders.map(_=>_.id),totalActualWeightGrams:f.totalActualWeightGrams,totalMaterialCost:f.totalMaterialCost,totalShopFee:f.totalShopFee,totalPrinterPayout:f.totalPrinterPayout}),P(`✓ Đã xác nhận chuyển ${ne(f.totalPrinterPayout)} cho CTV "${f.collaboratorName}" (${f.weekKey})!`)}finally{k(null)}},className:"inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 px-3.5 py-1.5 text-xs font-bold text-white",children:[n.jsx(rn,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:c===f.groupKey?"Đang ghi nhận...":`Xác nhận Đã chuyển (${ne(f.totalPrinterPayout)})`})]})]}),G&&j&&n.jsxs("div",{className:"flex flex-wrap items-center gap-4 rounded-lg border border-sky-500/30 bg-white dark:bg-[#0B1324] p-3",children:[n.jsx("img",{src:j,alt:`QR chuyển khoản ${f.collaboratorName}`,className:"h-44 w-44 rounded-lg border border-slate-200 bg-white p-1 object-contain"}),n.jsxs("div",{className:"text-xs space-y-1 font-mono",children:[n.jsx("div",{className:"font-bold text-sky-500",children:"Quét VietQR để chuyển khoản cho CTV"}),n.jsxs("div",{children:["Ngân hàng: ",n.jsxs("b",{children:[v==null?void 0:v.bankName," (",v==null?void 0:v.bankId,")"]})]}),n.jsxs("div",{children:["Số TK: ",n.jsx("b",{children:v==null?void 0:v.bankAccountNo})]}),n.jsxs("div",{children:["Chủ TK: ",n.jsx("b",{children:(v==null?void 0:v.bankAccountName)||f.collaboratorName})]}),n.jsxs("div",{children:["Số tiền: ",n.jsx("b",{className:"text-emerald-500 text-sm",children:ne(f.totalPrinterPayout)})]}),n.jsxs("div",{children:["Nội dung CK: ",n.jsx("b",{children:x})]})]})]})]},f.groupKey)})})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsxs("h3",{className:"text-sm font-bold text-slate-900 dark:text-white",children:["Mục C · Bảng II: Tính tiền CTV từng đơn theo Mã đơn (",A.length,"/",a.length," đơn)"]}),n.jsxs("p",{className:"text-[11px] text-slate-500",children:["Tra theo Mã đơn & loại nhựa khách chọn → nhập KL thực tế, % Shop và bấm ",n.jsx("b",{children:"Admin xác nhận"})," để cộng vào Bảng I & đồng bộ sang sheet ",n.jsx("code",{children:"BangTinhTienCTV"}),"."]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("div",{className:"relative",children:[n.jsx(di,{className:"h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2"}),n.jsx("input",{type:"text",value:g,onChange:f=>p(f.target.value),placeholder:"Tìm mã đơn, khách, CTV...",className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] pl-8 pr-3 py-1.5 text-xs w-48"})]}),n.jsxs("select",{value:d,onChange:f=>u(f.target.value),className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs font-semibold",children:[n.jsxs("option",{value:"all",children:["Tất cả đơn (",a.length,")"]}),n.jsx("option",{value:"pending_confirm",children:"Chưa Admin xác nhận"}),n.jsx("option",{value:"confirmed_unpaid",children:"Đã xác nhận · Chưa CK"}),n.jsx("option",{value:"paid",children:"Đã chuyển khoản"})]})]})]}),A.length===0?n.jsx("div",{className:"rounded-xl border border-dashed border-slate-200 dark:border-[#1E325C] p-6 text-center text-xs text-slate-500",children:"Không có đơn hàng nào khớp bộ lọc."}):n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full min-w-[980px] text-left text-xs border-collapse",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"border-b border-slate-200 dark:border-[#1E325C] text-[11px] text-slate-500 font-semibold",children:[n.jsx("th",{className:"py-2 px-2",children:"Mã đơn / Khách"}),n.jsx("th",{className:"py-2 px-2",children:"Loại nhựa"}),n.jsx("th",{className:"py-2 px-2 text-right",children:"Tiền khách đặt"}),n.jsx("th",{className:"py-2 px-2",children:"Người in (CTV)"}),n.jsx("th",{className:"py-2 px-2 text-right",children:"KL thực tế (g)"}),n.jsx("th",{className:"py-2 px-2 text-right",children:"Tiền nhựa (hoàn)"}),n.jsx("th",{className:"py-2 px-2 text-right",children:"Còn lại"}),n.jsx("th",{className:"py-2 px-2 text-center",children:"% Shop"}),n.jsx("th",{className:"py-2 px-2 text-right",children:"Tiền Shop"}),n.jsx("th",{className:"py-2 px-2 text-right",children:"CTV thực nhận"}),n.jsx("th",{className:"py-2 px-2 text-right",children:"Xác nhận"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-200/70 dark:divide-[#1E325C]",children:A.map(f=>{const L=f.shopCommissionPercent??i,v=dt(r,{...f,shopCommissionPercent:L},i),x=f.payoutStatus==="paid",j=s.find(V=>f.printerId&&V.id===f.printerId)??s.find(V=>f.printerName&&V.name.trim().toLowerCase()===f.printerName.trim().toLowerCase()),G=(j==null?void 0:j.id)||(f.printerName?`__custom_${f.printerName}`:"");return n.jsxs("tr",{className:x?"bg-emerald-500/5":"",children:[n.jsxs("td",{className:"py-2.5 px-2 align-top",children:[n.jsxs("div",{className:"font-mono font-bold text-sky-500",children:["#",f.id]}),n.jsx("div",{className:"text-[11px] text-slate-600 dark:text-slate-300 truncate max-w-[140px]",children:f.customerName}),n.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:f.payoutWeekKey||ir(f.createdAt?new Date(f.createdAt):new Date)})]}),n.jsxs("td",{className:"py-2.5 px-2 align-top",children:[n.jsx("div",{className:"font-semibold text-slate-800 dark:text-slate-200",children:f.material}),n.jsxs("div",{className:"font-mono text-[10px] text-slate-400",children:["Gốc: ",ne(v.materialCostPerGram),"/g"]})]}),n.jsx("td",{className:"py-2.5 px-2 align-top text-right font-mono font-bold text-slate-900 dark:text-white",children:ne(v.baseAmount)}),n.jsx("td",{className:"py-2.5 px-2 align-top",children:n.jsxs("select",{disabled:x,value:G,onChange:V=>{const W=V.target.value;if(!W){O(f.id,te=>({...te,printerId:"",printerName:"",claimedByPrinter:!1,adminConfirmed:!1}));return}const _=s.find(te=>te.id===W);if(!_)return;const Q=dt(r,{...f,shopCommissionPercent:L},i);O(f.id,te=>({...te,printerId:_.id,printerName:_.name,claimedByPrinter:!0,printStatus:te.printStatus==="waiting"?"printing":te.printStatus,shopCommissionPercent:L,materialCostPerGram:Q.materialCostPerGram,materialCostAmount:Q.materialCostAmount,netAfterMaterialAmount:Q.netAfterMaterialAmount,settlementBaseAmount:Q.baseAmount,shopFeeAmount:Q.shopFeeAmount,printerPayoutAmount:Q.printerPayoutAmount,payoutWeekKey:te.payoutWeekKey||D}))},className:"w-36 rounded border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-1.5 py-1 text-[11px] font-semibold disabled:opacity-60",children:[n.jsx("option",{value:"",children:"-- Chọn CTV --"}),!j&&f.printerName&&n.jsx("option",{value:`__custom_${f.printerName}`,children:f.printerName}),s.map(V=>n.jsxs("option",{value:V.id,children:[V.name," (",V.bankId,")"]},V.id))]})}),n.jsxs("td",{className:"py-2.5 px-2 align-top text-right",children:[n.jsx("input",{type:"number",min:0,step:"0.1",disabled:x,value:f.actualWeightGrams??"",placeholder:String(f.weightGrams||0),onChange:V=>{const W=Math.max(0,Number(V.target.value)||0),_=dt(r,{...f,actualWeightGrams:W,shopCommissionPercent:L},i);O(f.id,Q=>({...Q,actualWeightGrams:W,shopCommissionPercent:L,materialCostPerGram:_.materialCostPerGram,materialCostAmount:_.materialCostAmount,netAfterMaterialAmount:_.netAfterMaterialAmount,settlementBaseAmount:_.baseAmount,shopFeeAmount:_.shopFeeAmount,printerPayoutAmount:_.printerPayoutAmount}))},className:"w-20 rounded border border-sky-400/50 bg-slate-50 dark:bg-[#111C33] px-1.5 py-1 text-right font-mono text-xs font-bold text-sky-500 disabled:opacity-60"}),n.jsxs("div",{className:"text-[10px] font-mono text-slate-400 mt-0.5",children:["Báo khách: ",f.weightGrams,"g"]})]}),n.jsx("td",{className:"py-2.5 px-2 align-top text-right font-mono text-sky-500",children:ne(v.materialCostAmount)}),n.jsx("td",{className:"py-2.5 px-2 align-top text-right font-mono text-slate-600 dark:text-slate-300",children:ne(v.netAfterMaterialAmount)}),n.jsx("td",{className:"py-2.5 px-2 align-top text-center",children:n.jsx("input",{type:"number",min:0,max:100,disabled:x,value:L,onChange:V=>{const W=Math.min(100,Math.max(0,Number(V.target.value)||0)),_=dt(r,{...f,shopCommissionPercent:W},i);O(f.id,Q=>({...Q,shopCommissionPercent:W,materialCostPerGram:_.materialCostPerGram,materialCostAmount:_.materialCostAmount,netAfterMaterialAmount:_.netAfterMaterialAmount,settlementBaseAmount:_.baseAmount,shopFeeAmount:_.shopFeeAmount,printerPayoutAmount:_.printerPayoutAmount}))},className:"w-14 rounded border border-amber-400/50 bg-slate-50 dark:bg-[#111C33] px-1 py-1 text-center font-mono text-xs font-bold text-amber-500 disabled:opacity-60"})}),n.jsx("td",{className:"py-2.5 px-2 align-top text-right font-mono text-amber-500",children:ne(v.shopFeeAmount)}),n.jsxs("td",{className:"py-2.5 px-2 align-top text-right font-mono",children:[n.jsx("div",{className:"font-bold text-emerald-500",children:ne(v.printerPayoutAmount)}),n.jsxs("div",{className:"text-[10px] text-slate-400",children:["Công ",ne(v.printerWorkAmount)," + Nhựa ",ne(v.materialCostAmount)]})]}),n.jsx("td",{className:"py-2.5 px-2 align-top text-right",children:n.jsxs("button",{type:"button",disabled:x,onClick:()=>{if(!f.printerName&&!j){P(`Hãy chọn Người in (CTV) cho đơn #${f.id} trước khi xác nhận!`);return}if(v.effectiveWeightGrams<=0){P(`Hãy nhập KL thực tế (g) cho đơn #${f.id} trước khi xác nhận!`);return}const V=!f.adminConfirmed;O(f.id,W=>({...W,printerId:(j==null?void 0:j.id)||W.printerId||"",printerName:(j==null?void 0:j.name)||W.printerName||"",claimedByPrinter:!0,shopCommissionPercent:v.shopCommissionPercent,materialCostPerGram:v.materialCostPerGram,materialCostAmount:v.materialCostAmount,netAfterMaterialAmount:v.netAfterMaterialAmount,settlementBaseAmount:v.baseAmount,shopFeeAmount:v.shopFeeAmount,printerPayoutAmount:v.printerPayoutAmount,adminConfirmed:V,adminConfirmedAt:V?new Date().toISOString():void 0,payoutWeekKey:W.payoutWeekKey||D,payoutStatus:W.payoutStatus||"unpaid"})),P(V?`✓ Đã xác nhận đơn #${f.id}: CTV "${(j==null?void 0:j.name)||f.printerName}" nhận ${ne(v.printerPayoutAmount)}`:`Đã bỏ xác nhận đơn #${f.id}.`)},className:`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition disabled:opacity-60 ${x?"bg-emerald-500/20 text-emerald-500 border border-emerald-500/40":f.adminConfirmed?"bg-sky-500 text-slate-950 hover:bg-sky-400":"border border-sky-500/50 bg-sky-500/15 text-sky-500 hover:bg-sky-500/25"}`,children:[n.jsx(rn,{className:"h-3 w-3"}),n.jsx("span",{children:x?"Đã CK":f.adminConfirmed?"✓ Đã xác nhận":"Admin xác nhận"})]})})]},f.id)})})]})})]})]})};function kt(e){return String(e||"").replace(/đ/g,"d").replace(/Đ/g,"D").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Kn(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function px(e){const t=String(e||"").replace(/\r\n/g,`
`).trim();if(!t)return[];if(/^\s*(?:===+|---+)\s*$/m.test(t))return t.split(/^\s*(?:===+|---+)\s*$/m).map(r=>r.trim()).filter(r=>r.length>0);if(/\n{2,}/.test(t)){const r=t.split(/\n{2,}/).map(a=>a.trim()).filter(a=>a.length>0);if(r.length>1)return r}return[t]}function gx(e,t,r){const a=String(e||"").replace(/\r\n/g,`
`).split(`
`),s=[];for(const i of a){const o=i.trim();if(!o)continue;const l=kt(o).toLowerCase();if(/^(?:shop|ban|admin|teebi|tbx|nguoi ban|seller|cua hang)\s*:/i.test(l))continue;const d=o.replace(/[\s.-]/g,"");if(t&&d.includes(t)&&/^(?:shop|lien he|zalo shop|hotline)/i.test(l)||r&&o.toLowerCase().includes(r)&&/^(?:shop|gmail shop|email shop)/i.test(l))continue;const u=o.replace(/^(?:\[(?:shopee|tiktok|zalo)\]\s*)?(?:khach(?:\s+hang)?|buyer|kh)\s*:\s*/i,"").trim();u&&s.push(u)}return s.join(`
`)}function fx(e,t){if(t&&t!=="auto")return t;const r=kt(e).toLowerCase();return/\bshopee\b|banhang\.shopee|shopee\.vn|shopee chat|spx/.test(r)?"shopee":/\btiktok\b|tiktokshop|tiktok shop|seller-vn\.tiktok/.test(r)?"tiktok":/\bzalo\b/.test(r)?"zalo":"other"}function xx(e,t){const r=e.match(/(?:\+?84|0)(?:[\s.\-]*\d){8,10}\b/g)||[],a=[];for(const s of r){let i=s.replace(/\D/g,"");i.startsWith("84")&&i.length>=10&&(i=`0${i.slice(2)}`),/^0[235789]\d{8}$/.test(i)&&(t&&i===t||/^0(\d)\1{8}$/.test(i)||i==="0123456789"||i==="0987654321"||a.includes(i)||a.push(i))}return a}function bx(e,t){const r=e.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)||[];for(const a of r){const s=a.toLowerCase();if(!(t&&s===t))return s}return""}function yx(e,t,r){const a=[/(?:^|\n)\s*(?:ho\s*ten|ten\s*khach(?:\s*hang)?|nguoi\s*nhan|ten)\s*[:\-]\s*([^\n,;|]+)/i],s=kt(e).split(`
`),i=e.split(`
`);for(let d=0;d<s.length;d++)for(const u of a){const g=u.exec(s[d]);if(g&&g[1]){const p=i[d]||"",w=p.search(/[:\-]/),N=(w!==-1?p.slice(w+1):g[1]).split(/[,;|]/)[0].trim();if(N.length>=2&&N.length<=60&&!/\d{6,}/.test(N))return N}}const o=/^\s*(?:\[(?:shopee|tiktok|zalo)\]\s*)?([^:\n]{2,45}):/i.exec(t);if(o&&o[1]){const d=o[1].trim(),u=kt(d).toLowerCase();if(!/^(?:shop|ban|admin|teebi|tbx|khach|khach hang|buyer|sdt|so dien thoai|dia chi|dc|email|ma don|link|http)/.test(u)&&!/\d{7,}/.test(d))return d}const l=String(r||"").trim();return l&&l.length>=2?l:"Khách chat"}function vx(e,t){const r=kt(e).toLowerCase();if(/(?:nhan|lay|den)\s*(?:truc tiep|tai xuong|o xuong|o shop|tai shop)|qua\s*lay|tu\s*qua/.test(r))return{shippingMethod:"pickup",shippingAddress:"Nhận trực tiếp tại xưởng"};const a=e.split(`
`);for(const s of a){const i=s.trim();if(!i)continue;const o=kt(i).toLowerCase();if(/^(?:dia\s*chi|d\/c|dc|noi\s*nhan|ship(?:\s*ve|\s*toi|\s*den)?|giao(?:\s*hang)?(?:\s*ve|\s*toi|\s*den)?)\s*[:\-]\s*(.+)$/i.exec(o)){const d=i.search(/[:\-]/),u=(d!==-1?i.slice(d+1):i).replace(t||"__NONE__","").replace(/^\s*[-–,;.]+\s*/,"").trim();if(u.length>=6)return{shippingMethod:"delivery",shippingAddress:u}}}for(const s of a){const i=s.trim();if(!i||/https?:\/\//i.test(i))continue;const l=kt(i).toLowerCase().match(/\b(?:so|ngo|ngach|hem|duong|pho|thon|ap|xom|phuong|xa|thi tran|quan|huyen|thanh pho|tp|tinh|ha noi|hcm|ho chi minh|sai gon|da nang|hai phong|can tho|binh duong|dong nai|bac ninh)\b/g)||[];if(i.length>=14&&(l.length>=2||l.length>=1&&i.includes(","))){const d=i.replace(/(?:sdt|dt|sđt)[:\s]*0\d{9}/gi,"").replace(/[,;\-|\s]+$/,"").trim();if(d.length>=10)return{shippingMethod:"delivery",shippingAddress:d}}}return{shippingMethod:"delivery",shippingAddress:""}}function kx(e){const t=/(?:ma\s*don(?:\s*hang)?|order(?:\s*id)?)\s*[:#]?\s*([A-Z0-9_-]{8,24})/i.exec(kt(e));return t?t[1].toUpperCase():""}const Nx={H743ZIT6:["h743","stm32h743","bo trung tam","mach trung tam","bo dieu khien trung tam","stm32 h7"],"PIDSM-V2.2":["pidsm","driver dc servo","driver servo","servo encoder","mach pid"],"IMU-STMV2":["imu","imustm","chong nhay goc","cam bien quan tinh","6 truc"],"GAMEPAD-BLE":["gamepad","tay cam","tay cam ble","tay cam khong day"],"INPUT-F4-IO":["input f4","input code","cach ly 24v","board doc cam bien","mach io"],"MECANUM-AL152":["mecanum","banh mecanum","banh xe mecanum","al152"],"MOTOR-24V-ENC":["dong co 24v","motor 24v","giam toc 24v","24v encoder","motor encoder"],"LZR-IND-05V":["laser","cam bien laser","lzr","0-5v"],"KIT-AGV-MEC4":["kit agv","xe agv","mo hinh agv","agv 4 banh"],"KIT-SERVO-LAB":["kit servo","thuc hanh servo","servo lab"],"KIT-SORT-ARM":["bang tai","phan loai san pham","sort arm"]},Sx=new Set(["bo","mach","dieu","khien","dong","co","cam","bien","mo","hinh","do","an","nckh","theo","yeu","cau","full","kit","cho","va","cua","gia","bao","nhieu","cai","chiec","24v","stm32"]);function Cx(e,t){const a=new RegExp(`(?:^|[\\s,;(+])(\\d{1,3})\\s*(?:bo|cai|chiec|mach|con|cay|module|cap|don)?\\s*(?:${t})\\b`,"i").exec(e);if(a&&a[1]){const o=parseInt(a[1],10);if(o>=1&&o<=200)return o}const i=new RegExp(`(?:${t})[^\\n.,;]{0,22}?(?:[x×*]|\\bsl\\b[:\\s]*|\\bso\\s*luong\\b[:\\s]*)(\\d{1,3})\\b`,"i").exec(e);if(i&&i[1]){const o=parseInt(i[1],10);if(o>=1&&o<=200)return o}return 1}function wx(e,t){const r=kt(e).toLowerCase(),a=[];for(const s of t){if(!s||s.code==="IN3D-REQ")continue;const i=kt(s.code).toLowerCase(),o=Nx[s.code.toUpperCase()]||[];let l=0,d=Kn(i);if(new RegExp(`\\b${Kn(i)}\\b`,"i").test(r))l=100,d=Kn(i);else for(const u of o)if(new RegExp(`\\b${Kn(u)}\\b`,"i").test(r)){l=Math.max(l,85),d=Kn(u);break}if(l===0){const g=kt(s.name.vi).toLowerCase().split(/[^a-z0-9]+/).filter(p=>p.length>=3&&!Sx.has(p)).filter(p=>new RegExp(`\\b${Kn(p)}\\b`,"i").test(r));g.length>=2&&(l=60+g.length*5,d=Kn(g[0]))}if(l>0){const u=Cx(r,d);a.push({productId:s.id,code:s.code,name:s.name.vi,unitPrice:s.price,costPrice:s.costPrice,stock:s.stock,unit:s.unit,quantity:u,matchScore:l})}}return a.sort((s,i)=>i.matchScore-s.matchScore)}function jx(e,t){var S;const r=kt(e).toLowerCase(),a=Array.from(new Set((e.match(/https?:\/\/(?:drive|docs)\.google\.com\/[^\s<>"')]+/gi)||[]).map(P=>P.replace(/[.,;!?]+$/,""))));if(!(a.length>0||/\bin\s*3d\b|\bin3d\b|\.stl\b|\.zip\b|\binfill\b|\bgcode\b|\bsupport\b|\bfilament\b|\bnhua\s*(?:pla|petg|abs|tpu|cf)\b|\b(?:pla|petg|abs|tpu)\b|\bcacbon\s*cf\b|\bvo\s*hop(?:\s*in\s*3d)?\b/.test(r)))return null;let i=((S=t[0])==null?void 0:S.name)||"PLA";/\bcacbon\b|\bcarbon\b|\bpetg[\s-]*cf\b|\bpla[\s-]*cf\b|\bcf\b/.test(r)?i="Cacbon CF":/\bpetg\b/.test(r)?i="PETG":/\btpu\b/.test(r)?i="TPU":/\babs\b/.test(r)?i="ABS":/\bpla\b/.test(r)&&(i="PLA");let o="20%";const l=/(?:infill\s*[:=]?\s*(\d{1,3})\s*%?|(\d{1,3})\s*%\s*infill)/i.exec(r);l&&(o=`${Math.min(100,Math.max(10,parseInt(l[1]||l[2],10)||20))}%`);let d=1;const u=/(?:so\s*luong|\bsl\b)\s*[:=]?\s*(\d{1,3})|\b(\d{1,3})\s*(?:cai|chiec|chi tiet|vo|hop|bo|part)\b|\bx\s*(\d{1,3})\b/i.exec(r);if(u){const P=parseInt(u[1]||u[2]||u[3],10);P>=1&&P<=200&&(d=P)}let g=0;const p=/(?:nang|khoi\s*luong|kl|tam|khoang)?\s*(\d+(?:[.,]\d+)?)\s*(kg|gram|gam|gr|g)\b/i.exec(r);if(p){const P=parseFloat(p[1].replace(",",".")),F=p[2].toLowerCase()==="kg"?P*1e3:P;if(Number.isFinite(F)&&F>0&&F<=5e4){const M=/(?:1\s*cai|moi\s*cai|moi\s*chiec|\/cai|\/chiec)/i.test(r);g=Math.round((M?F*d:F)*10)/10}}let w="";const N=/\bmau\s+(den|trang|xam|bac|do|xanh duong|xanh la|xanh|vang|cam|tim|hong|trong suot)\b/i.exec(r);N&&(w=N[1]);let c=Dt(3);if(/\b(?:hom\s*nay|trong\s*ngay|lay\s*lien|can\s*gap\s*hom\s*nay)\b/.test(r))c=Dt(0);else if(/\b(?:ngay\s*mai|mai\s*lay|mai\s*giao)\b/.test(r))c=Dt(1);else{const P=/(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/.exec(r);if(P){const O=Math.min(31,Math.max(1,parseInt(P[1],10))),F=Math.min(12,Math.max(1,parseInt(P[2],10))),M=new Date().getFullYear();c=`${P[3]?P[3].length===2?2e3+parseInt(P[3],10):parseInt(P[3],10):M}-${String(F).padStart(2,"0")}-${String(O).padStart(2,"0")}`}}const k=Hr(c),C=It(t,i,g,d,k.surchargePercent),h=C.totalAmount>0?Math.round(C.totalAmount*.3):0,m=Math.max(0,C.totalAmount-h);return{material:i,infill:o,weightGrams:g,quantity:d,color:w,driveUrls:a,deliveryDeadline:c,deliveryLabel:k.displayText,rushSurchargePercent:k.surchargePercent,subtotalAmount:C.subtotalAmount,rushFeeAmount:C.rushFeeAmount,totalAmount:C.totalAmount,depositAmount:h,codRemainingAmount:m}}function Tx(e,t,r,a,s){const i=kt(e).toLowerCase().trim();if(!i)return"noise";const o=/\b(?:chot|dat\s*don|dat\s*hang|lay\s*(?:minh|cho|luon)|gui\s*(?:cho|ve|giup)|ship\s*(?:cho|ve|den)|len\s*don|mua)\b/.test(i),l=/\b(?:bao\s*gia|gia(?:\s*bao\s*nhieu)?|bao\s*nhieu|bn\s*tien|may\s*tram|in\s*3d|stl|pla|petg|abs|tpu)\b/.test(i),d=/\b(?:huong\s*dan|dau\s*noi|code|firmware|bao\s*hanh|loi|khong\s*chay|tu\s*van|con\s*hang(?:\s*khong)?|giao\s*may\s*ngay)\b/.test(i);return(t||r)&&(a||s||o)?"ready_order":t||r||l?"quote_request":d?"support_inquiry":i.length<=28||/^(?:ok|oke|okay|da|vang|cam\s*on|tks|thanks|chao\s*shop|hi|hello|alo|shop\s*oi|tu\s*dong)\b/.test(i)?"noise":"support_inquiry"}function Qm(e,t){var o;const r=t!=null&&t.materials&&t.materials.length>0?t.materials:$e,a=e.customerName&&e.customerName!=="Khách chat"?e.customerName:"bạn",s=[];if(s.push(`Chào ${a}, TeeBi & Robot (TBX Electrics) xin gửi báo giá chi tiết cho mình ạ:`),e.matchedProducts.length>0){s.push(""),s.push("📦 Mạch & Linh kiện:");for(const l of e.matchedProducts){const d=l.unitPrice*l.quantity,u=l.stock>0?`sẵn kho ${l.stock}`:"liên hệ đặt trước";s.push(`• [${l.code}] ${l.name} × ${l.quantity} ${l.unit} = ${ne(d)} (${u})`)}}if(e.print3d){const l=e.print3d;if(s.push(""),l.weightGrams>0&&l.totalAmount>0)s.push("🖨️ Dịch vụ In 3D khổ lớn (800×800mm):"),s.push(`• Vật liệu: ${l.material} · Infill ${l.infill}${l.color?` · Màu ${l.color}`:""} · Tổng SL: ${l.quantity}`),s.push(`• Khối lượng ước tính/đo: ${l.weightGrams}g${l.printTime?` · Thời gian in ~ ${l.printTime}`:""}${l.dimensions?` · KT: ${l.dimensions}`:""}`),s.push(`• Thời hạn: ${l.deliveryLabel}${l.rushSurchargePercent>0?` (+${ne(l.rushFeeAmount)})`:""}`),s.push(`• Chi phí in 3D: ${ne(l.totalAmount)}`),l.depositAmount>0&&s.push(`• Hình thức TT: Cọc trước 30% (${ne(l.depositAmount)}) · Thu COD khi nhận 70% (${ne(l.codRemainingAmount)}) — hoặc CK 100% VietQR.`);else{const d=r.map(u=>`${u.name}: ${u.pricePerGram.toLocaleString("vi-VN")}đ/g`).join(" | ");s.push("🖨️ Báo giá In 3D theo yêu cầu (máy khổ lớn 800×800mm):"),s.push(`• Bảng giá nhựa hiện tại: ${d}`),s.push(`• Vật liệu dự kiến: ${l.material} · Infill ${l.infill} · SL: ${l.quantity}`),s.push("• Bạn gửi giúp mình link Google Drive chứa file .STL/.ZIP (hoặc thả file trực tiếp tại https://trbach777.github.io/ -> mục In 3D) để hệ thống cắt lớp & báo giá chính xác trong 5 giây nhé!")}}e.grandTotal>0&&(s.push(""),s.push(`💰 TỔNG CỘNG TẠM TÍNH: ${ne(e.grandTotal)}`)),e.missingFields.length>0?(s.push(""),s.push(`👉 Để Shop lên đơn ngay, bạn cho mình xin thêm ${e.missingFields.join(" & ")} nhé!`)):(e.matchedProducts.length>0||e.print3d&&e.print3d.totalAmount>0)&&(s.push(""),s.push("👉 Thông tin nhận hàng đã đầy đủ — bạn xác nhận OK để Shop chốt đơn và xử lý ngay nhé!")),e.intent==="support_inquiry"&&!e.print3d&&e.matchedProducts.length===0&&s.push("• Bạn cho Shop biết mã mạch/mô hình hoặc nhu cầu cụ thể để kỹ thuật viên kiểm tra kho và báo giá chính xác nhất ạ.");const i=((o=t==null?void 0:t.customFooterNote)==null?void 0:o.trim())||"Hỗ trợ kỹ thuật / gửi file lớn nhanh qua Zalo: 0789 044 703.";return s.push(i),s.join(`
`)}function Ax(e,t){const r=(t.shopPhone||"0789044703").replace(/\D/g,""),a=(t.shopEmail||"tranbach9805@gmail.com").trim().toLowerCase(),s=t.materials&&t.materials.length>0?t.materials:$e,i=fx(e,t.platformHint),o=gx(e,r,a)||e.trim(),d=xx(o,r)[0]||"",u=bx(o,a),g=yx(o,e,t.customerNameHint),{shippingMethod:p,shippingAddress:w}=vx(o,d),N=kx(e),c=wx(o,t.products||[]),k=jx(o,s),C=c.reduce((M,$)=>M+$.unitPrice*$.quantity,0),h=C+((k==null?void 0:k.totalAmount)||0),m=[];d||m.push("SĐT nhận hàng"),p==="delivery"&&!w&&m.push("địa chỉ giao hàng");const S=Tx(o,c.length>0,!!k,d,w),P=kt(o).toLowerCase(),O=/\b(?:chuyen\s*khoan|vietqr|\bck\b|banking)\b/.test(P)&&!/\bcod\b/.test(P)?"transfer":"cod",F={id:`CHAT-${Date.now()}-${Math.floor(100+Math.random()*900)}`,platform:i,rawText:e,customerText:o,intent:S,customerName:g,customerPhone:d,customerEmail:u,shippingMethod:p,shippingAddress:w,platformOrderCode:N,matchedProducts:c,print3d:k,hardwareTotal:C,grandTotal:h,paymentMethod:O,missingFields:m,createdAt:new Date().toISOString()};return{...F,suggestedReply:Qm(F,{materials:s,customFooterNote:t.customFooterNote})}}const Zc="teebi_social_chat_leads_v1",Px=`[Shopee] Minh Khoa:
Shop báo giá giúp mình in 3D hộp bảo vệ mạch này với ạ
https://drive.google.com/file/d/1txvT7ZIk7uK8GVkhGX8IlJEztlcsSGA_
Nhựa PETG, infill 30%, số lượng 2 cái, giao ngày mai giúp mình nha
Tên: Nguyễn Minh Khoa
SĐT: 0912.345.678
Địa chỉ: Số 45 Chùa Bộc, Đống Đa, Hà Nội`,Ex=`[TikTok] TechLab VN:
Shop ơi chốt cho mình 2 mạch PIDSM và 1 bo H743 nha, ship về:
Người nhận: Lê Hoàng Nam
SĐT: 0987 654 321
Đ/c: 120 Lý Thường Kiệt, Quận 10, TP.HCM`,Dx=`[Shopee] Trần Hùng:
In 3D nắp hộp PLA 120g màu đen, sl 1 cái, SĐT 0934567890, địa chỉ Số 8 Lê Lợi, Hà Đông, Hà Nội
---
[TikTok] Minh Anh:
Chào shop
---
[TikTok] Quốc Bảo:
Báo giá giúp mình bộ 4 bánh Mecanum và 4 động cơ 24V encoder nhé!`,Rx={shopee:{label:"Shopee",cls:"bg-orange-500/15 text-orange-400 border-orange-500/40"},tiktok:{label:"TikTok",cls:"bg-pink-500/15 text-pink-400 border-pink-500/40"},zalo:{label:"Zalo",cls:"bg-sky-500/15 text-sky-400 border-sky-500/40"},other:{label:"Khác",cls:"bg-slate-500/15 text-slate-300 border-slate-500/40"}},Mx={ready_order:{label:"Sẵn sàng lên đơn",cls:"bg-emerald-500/15 text-emerald-400 border-emerald-500/40"},quote_request:{label:"Cần báo giá",cls:"bg-sky-500/15 text-sky-400 border-sky-500/40"},support_inquiry:{label:"Hỏi kỹ thuật / kho",cls:"bg-amber-500/15 text-amber-400 border-amber-500/40"},noise:{label:"Tin xã giao / rác",cls:"bg-slate-500/15 text-slate-400 border-slate-500/30"}},Ix=({cmsData:e,setCmsData:t})=>{const r=e.print3dMaterials&&e.print3dMaterials.length>0?e.print3dMaterials:$e,a=e.print3dSetup??it,[s,i]=E.useState(""),[o,l]=E.useState("auto"),[d,u]=E.useState(!0),[g,p]=E.useState(""),[w,N]=E.useState(()=>{try{const x=localStorage.getItem(Zc);if(x){const j=JSON.parse(x);if(Array.isArray(j))return j}}catch{}return[]}),[c,k]=E.useState("all"),[C,h]=E.useState(!0),[m,S]=E.useState(!1),[P,O]=E.useState(""),[F,M]=E.useState(""),[$,D]=E.useState(""),[U,J]=E.useState(!1),[se,re]=E.useState(""),[X,ce]=E.useState({});E.useEffect(()=>{try{localStorage.setItem(Zc,JSON.stringify(w.slice(0,60)))}catch{}},[w]);const ee=x=>{re(x),setTimeout(()=>re(""),4e3)},T=(x,j=!0)=>{const G=x.matchedProducts.reduce((Q,te)=>Q+te.unitPrice*te.quantity,0);let V=x.print3d;if(V){const Q=Hr(V.deliveryDeadline),te=It(r,V.material,V.weightGrams,V.quantity,Q.surchargePercent),Z=te.totalAmount>0?Math.round(te.totalAmount*.3):0;V={...V,deliveryLabel:Q.displayText,rushSurchargePercent:Q.surchargePercent,subtotalAmount:te.subtotalAmount,rushFeeAmount:te.rushFeeAmount,totalAmount:te.totalAmount,depositAmount:Z,codRemainingAmount:Math.max(0,te.totalAmount-Z)}}const W=[];x.customerPhone.trim()||W.push("SĐT nhận hàng"),x.shippingMethod==="delivery"&&!x.shippingAddress.trim()&&W.push("địa chỉ giao hàng");const _={...x,print3d:V,hardwareTotal:G,grandTotal:G+((V==null?void 0:V.totalAmount)||0),missingFields:W};return j&&(_.suggestedReply=Qm(_,{materials:r,customFooterNote:g})),_},A=async()=>{const x=s.trim();if(!x){ee("Hãy dán tin nhắn Shopee / TikTok / Zalo vào ô phía trên trước nhé.");return}S(!0);try{const G=(d?px(x):[x]).map(W=>Ax(W,{products:e.products,materials:r,platformHint:o,shopPhone:e.profile.phone,shopEmail:e.profile.email,customFooterNote:g}));N(W=>[...G,...W].slice(0,60)),i("");const V=G.filter(W=>W.intent!=="noise").length;ee(`✓ Đã lọc ${G.length} đoạn chat (${V} tin hỏi giá / chốt đơn).`);for(const W of G)if(W.print3d&&W.print3d.driveUrls.length>0&&W.print3d.weightGrams<=0){const _=W.print3d.driveUrls[0],Q=await bl(e.profile,r,{fileUrl:_,material:W.print3d.material,quantity:W.print3d.quantity,setup:a});Q.ok&&Q.totalWeightGrams&&Q.totalWeightGrams>0&&N(te=>te.map(Z=>Z.id!==W.id||!Z.print3d?Z:T({...Z,print3d:{...Z.print3d,weightGrams:Q.totalWeightGrams||0,dimensions:Q.dimensions,printTime:Q.printTime,fileSummary:Q.fileName,scannedFromDrive:!0}},!0)))}}finally{S(!1)}},R=async x=>{var G,V;const j=(V=(G=x.print3d)==null?void 0:G.driveUrls[0])==null?void 0:V.trim();if(!x.print3d||!j){ee("Chưa có link Google Drive ở đơn này.");return}O(x.id);try{const W=await bl(e.profile,r,{fileUrl:j,material:x.print3d.material,quantity:x.print3d.quantity,setup:a});W.ok&&W.totalWeightGrams&&W.totalWeightGrams>0?(N(_=>_.map(Q=>Q.id===x.id&&Q.print3d?T({...Q,print3d:{...Q.print3d,weightGrams:W.totalWeightGrams||0,dimensions:W.dimensions,printTime:W.printTime,fileSummary:W.fileName,scannedFromDrive:!0}},!0):Q)),ee(`✓ Quét thành công file Drive: ${W.totalWeightGrams}g (${W.dimensions||"OK"})`)):ee(W.error||"Không quét được file từ link Drive này.")}finally{O("")}},f=async x=>{if(x.createdOrderId)return;if(x.matchedProducts.length===0&&!x.print3d){ee("Đoạn chat chưa có mặt hàng hoặc yêu cầu In 3D để tạo đơn.");return}M(x.id);const j=`[${x.platform.toUpperCase()}]`,G=[j,x.platformOrderCode?`Mã sàn: ${x.platformOrderCode}`:""].filter(Boolean).join(" · ");try{if(x.print3d&&x.matchedProducts.length===0){const _=await wd(e.profile,r,{customerName:x.customerName||"Khách chat",customerPhone:x.customerPhone||"Chờ bổ sung",customerEmail:x.customerEmail||void 0,material:x.print3d.material,infill:x.print3d.infill,color:x.print3d.color||void 0,weightGrams:x.print3d.weightGrams,quantity:x.print3d.quantity,externalFileUrl:x.print3d.driveUrls[0]||void 0,fileSummary:x.print3d.fileSummary,dimensions:x.print3d.dimensions,printTime:x.print3d.printTime,setup:a,deliveryDeadline:x.print3d.deliveryDeadline,shippingMethod:x.shippingMethod,shippingAddress:x.shippingAddress||"Chờ khách bổ sung địa chỉ",paymentMethod:x.paymentMethod,paymentStatus:x.paymentMethod==="transfer"?"qr_reported":"cod_unpaid",depositAmount:x.print3d.depositAmount,codRemainingAmount:x.print3d.codRemainingAmount,autoQuoteEmail:!!x.customerEmail,approvedByAdmin:!1,note:G}),Q={id:_.order.id,createdAt:_.order.createdAt,customerName:_.order.customerName,customerPhone:_.order.customerPhone,customerEmail:_.order.customerEmail,shippingAddress:_.order.shippingAddress||"Chờ bổ sung",paymentMethod:x.paymentMethod,paymentStatus:x.paymentMethod==="transfer"?"qr_reported":"cod_unpaid",note:G,status:"pending",items:[{productId:"custom-3d-printing-service",code:"IN3D",name:`In 3D ${_.order.material} (${_.order.weightGrams}g)`,unitPrice:_.order.totalAmount,costPrice:0,quantity:_.order.quantity,unit:"Chi tiết"}],totalAmount:_.order.totalAmount,depositAmount:0,remainingAmount:_.order.totalAmount,stockDeducted:!1};t(te=>({...te,orders:[Q,...te.orders]})),N(te=>te.map(Z=>Z.id===x.id?{...Z,createdOrderId:_.order.id}:Z)),ee(`✓ Đã đẩy đơn In 3D #${_.order.id} sang tab Đơn hàng / sheet DonHang (Chờ duyệt)!`);return}const V=x.matchedProducts.map(_=>({productId:_.productId,code:_.code,name:_.name,unitPrice:_.unitPrice,costPrice:_.costPrice,quantity:_.quantity,unit:_.unit}));x.print3d&&V.push({productId:"custom-3d-printing-service",code:"IN3D",name:`In 3D ${x.print3d.material} (${x.print3d.weightGrams}g · ${x.print3d.driveUrls[0]||"Theo yêu cầu"})`,unitPrice:x.print3d.totalAmount,costPrice:0,quantity:1,unit:"Đơn"});const W=await Td(e,{customerName:`${j} ${x.customerName||"Khách chat"}`,customerPhone:x.customerPhone||"0000000000",customerEmail:x.customerEmail||void 0,shippingAddress:x.shippingAddress||"Chờ bổ sung địa chỉ",paymentMethod:x.paymentMethod,note:G,items:V,initialStatus:"pending"});t(W.nextState),N(_=>_.map(Q=>Q.id===x.id?{...Q,createdOrderId:W.order.id}:Q)),ee(`✓ Đã tạo đơn #${W.order.id} (${ne(W.order.totalAmount)}) sang DonHang & Telegram!`)}finally{M("")}},L=w.filter(x=>C&&x.intent==="noise"?!1:c==="ready_order"?x.intent==="ready_order":c==="quote_request"?x.intent==="quote_request":c==="print3d"?!!x.print3d:c==="hardware"?x.matchedProducts.length>0:!0),v=w.filter(x=>x.intent!=="noise").length;return n.jsxs("div",{className:"space-y-5",children:[n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:[n.jsx(K0,{className:"h-5 w-5 text-sky-400"}),n.jsx("span",{children:"Lọc Tin Nhắn Shopee / TikTok — Bắt Đơn & Tự Động Báo Giá"})]}),n.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-1",children:["Dán đoạn chat từ Shopee / TikTok / Zalo (1 khách hoặc nhiều khách cùng lúc) để lọc tin cần báo giá, tính tự động giá In 3D / linh kiện và đẩy đơn về sheet ",n.jsx("code",{children:"DonHang"}),"."]})]}),n.jsxs("button",{type:"button",onClick:()=>J(x=>!x),className:"inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-bold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20",children:[n.jsx(B0,{className:"h-4 w-4"}),n.jsx("span",{children:U?"Ẩn hướng dẫn Chrome Extension":"Chrome Extension đọc trực tiếp Shopee/TikTok"})]})]}),U&&n.jsxs("div",{className:"rounded-xl border border-sky-500/30 bg-sky-500/5 p-4 text-xs space-y-2.5",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsx("strong",{className:"text-sky-400 text-sm",children:"Cài Chrome Extension TBX chạy nổi ngay trên Shopee Seller & TikTok Seller Chat"}),n.jsxs("a",{href:"/tbx-shopee-tiktok-extension.zip",download:"tbx-shopee-tiktok-extension.zip",className:"inline-flex items-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 px-3 py-1.5 text-xs font-bold text-slate-950",children:[n.jsx(fd,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Tải Extension (.ZIP)"})]})]}),n.jsxs("ol",{className:"list-decimal pl-4 space-y-1 text-slate-600 dark:text-slate-300",children:[n.jsxs("li",{children:["Mở Chrome/Edge → gõ ",n.jsx("code",{className:"font-mono text-sky-400",children:"chrome://extensions"})," → bật công tắc ",n.jsx("strong",{children:"Developer mode"})," (góc phải)."]}),n.jsxs("li",{children:["Bấm ",n.jsx("strong",{children:"Load unpacked"})," và chọn thư mục"," ",n.jsx("code",{className:"font-mono text-sky-400",children:"d:\\CodeDriverControl\\H743ZIT6R1\\portfolio-web\\chrome-extension"})," ","(hoặc giải nén file ",n.jsx("code",{children:"tbx-shopee-tiktok-extension.zip"})," vừa tải rồi chọn thư mục đó)."]}),n.jsxs("li",{children:["Mở trang Chat trên ",n.jsx("strong",{children:"Shopee Seller"})," hoặc ",n.jsx("strong",{children:"TikTok Seller"})," → bấm nút ",n.jsx("strong",{children:"🤖 TBX Báo Giá"})," ở góc phải màn hình để đọc tin, quét STL Drive, chèn câu báo giá và đẩy đơn!"]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[[{id:"auto",label:"Tự nhận diện"},{id:"shopee",label:"Shopee"},{id:"tiktok",label:"TikTok"},{id:"zalo",label:"Zalo"}].map(x=>n.jsx("button",{type:"button",onClick:()=>l(x.id),className:`rounded-md px-2.5 py-1 text-xs font-semibold ${o===x.id?"bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950":"border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] text-slate-600 dark:text-slate-300"}`,children:x.label},x.id)),n.jsxs("label",{className:"ml-2 inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer",children:[n.jsx("input",{type:"checkbox",checked:d,onChange:x=>u(x.target.checked),className:"rounded border-slate-400"}),n.jsx("span",{children:"Tách nhiều tin (ngăn bởi --- hoặc dòng trống)"})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[n.jsx("button",{type:"button",onClick:()=>{i(Px),l("shopee")},className:"rounded-md border border-slate-200 dark:border-[#1E325C] px-2.5 py-1 text-[11px] font-semibold hover:border-sky-500",children:"Thử mẫu Shopee In 3D"}),n.jsx("button",{type:"button",onClick:()=>{i(Ex),l("tiktok")},className:"rounded-md border border-slate-200 dark:border-[#1E325C] px-2.5 py-1 text-[11px] font-semibold hover:border-sky-500",children:"Thử mẫu TikTok Mạch ĐK"}),n.jsx("button",{type:"button",onClick:()=>{i(Dx),l("auto"),u(!0)},className:"rounded-md border border-slate-200 dark:border-[#1E325C] px-2.5 py-1 text-[11px] font-semibold hover:border-sky-500",children:"Thử lọc nhiều tin"})]})]}),n.jsx("textarea",{rows:5,value:s,onChange:x=>i(x.target.value),placeholder:"Dán tin nhắn khách Shopee / TikTok / Zalo vào đây... Hệ thống tự bỏ qua dòng của Shop, tách Tên/SĐT/Địa chỉ, nhận diện Mạch & Yêu cầu In 3D + Quét link Google Drive.",className:"w-full rounded-xl border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-3 text-xs sm:text-sm text-slate-900 dark:text-white font-mono"}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsx("input",{type:"text",value:g,onChange:x=>p(x.target.value),placeholder:"Câu kết tùy chỉnh cho báo giá (mặc định: Hỗ trợ kỹ thuật / gửi file lớn nhanh qua Zalo: 0789 044 703.)",className:"flex-1 min-w-[240px] rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs"}),n.jsxs("button",{type:"button",disabled:m||!s.trim(),onClick:A,className:"inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 disabled:opacity-50 px-5 py-2 text-xs font-bold text-white",children:[m?n.jsx(_n,{className:"h-4 w-4 animate-spin"}):n.jsx(Y0,{className:"h-4 w-4"}),n.jsx("span",{children:m?"Đang lọc & Quét Drive...":"Phân tích & Lọc tin + Tạo báo giá"})]})]}),se&&n.jsx("div",{className:"rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-300",children:se})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-4 py-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[n.jsx(O0,{className:"h-3.5 w-3.5 text-slate-400 mr-1"}),[{id:"all",label:`Tất cả (${w.length})`},{id:"ready_order",label:"Sẵn sàng lên đơn"},{id:"quote_request",label:"Cần báo giá"},{id:"print3d",label:"Đơn In 3D"},{id:"hardware",label:"Mạch & Linh kiện"}].map(x=>n.jsx("button",{type:"button",onClick:()=>k(x.id),className:`rounded-md px-2.5 py-1 text-xs font-semibold ${c===x.id?"bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950":"border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] text-slate-600 dark:text-slate-300"}`,children:x.label},x.id))]}),n.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[n.jsxs("span",{className:"text-slate-500 dark:text-slate-400",children:["Cần xử lý: ",n.jsx("strong",{className:"text-sky-400",children:v})," tin"]}),n.jsxs("label",{className:"inline-flex items-center gap-1.5 cursor-pointer",children:[n.jsx("input",{type:"checkbox",checked:C,onChange:x=>h(x.target.checked)}),n.jsx("span",{children:"Ẩn tin rác / xã giao"})]}),w.length>0&&n.jsx("button",{type:"button",onClick:()=>N([]),className:"text-rose-500 hover:underline font-semibold",children:"Xóa danh sách"})]})]}),L.length===0?n.jsx("div",{className:"rounded-xl border border-dashed border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-10 text-center text-xs text-slate-500",children:"Chưa có tin nhắn nào khớp bộ lọc. Hãy dán tin từ Shopee / TikTok ở trên hoặc bấm nút Thử mẫu để kiểm tra."}):n.jsx("div",{className:"space-y-4",children:L.map(x=>{var W;const j=Rx[x.platform],G=Mx[x.intent],V=X[x.id]||((W=e.products.find(_=>_.code!=="IN3D-REQ"))==null?void 0:W.id)||"";return n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-[#1E325C] pb-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("span",{className:`rounded border px-2 py-0.5 font-mono text-[11px] font-bold ${j.cls}`,children:j.label}),n.jsx("span",{className:`rounded border px-2 py-0.5 text-[11px] font-bold ${G.cls}`,children:G.label}),x.createdOrderId&&n.jsxs("span",{className:"rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-400",children:["✓ Đã tạo đơn #",x.createdOrderId]}),n.jsx("span",{className:"text-[11px] text-slate-400",children:new Date(x.createdAt).toLocaleString("vi-VN")})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"font-mono text-sm font-bold text-sky-500",children:["Tổng: ",ne(x.grandTotal)]}),n.jsx("button",{type:"button",onClick:()=>N(_=>_.filter(Q=>Q.id!==x.id)),className:"rounded p-1 text-slate-400 hover:text-rose-500",title:"Xóa thẻ này",children:n.jsx(an,{className:"h-4 w-4"})})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-12 text-xs",children:[n.jsxs("div",{className:"sm:col-span-3",children:[n.jsx("label",{className:"block text-[11px] text-slate-500 mb-1",children:"Khách hàng"}),n.jsx("input",{type:"text",value:x.customerName,onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id?T({...Z,customerName:Q}):Z))},className:"w-full rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 font-semibold"})]}),n.jsxs("div",{className:"sm:col-span-2",children:[n.jsx("label",{className:"block text-[11px] text-slate-500 mb-1",children:"SĐT (10 số)"}),n.jsx("input",{type:"text",value:x.customerPhone,placeholder:"Thiếu SĐT",onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id?T({...Z,customerPhone:Q}):Z))},className:"w-full rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 font-mono"})]}),n.jsxs("div",{className:"sm:col-span-5",children:[n.jsx("label",{className:"block text-[11px] text-slate-500 mb-1",children:"Địa chỉ giao hàng"}),n.jsx("input",{type:"text",value:x.shippingAddress,placeholder:"Thiếu địa chỉ giao",onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id?T({...Z,shippingAddress:Q}):Z))},className:"w-full rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5"})]}),n.jsxs("div",{className:"sm:col-span-2",children:[n.jsx("label",{className:"block text-[11px] text-slate-500 mb-1",children:"Thanh toán"}),n.jsxs("select",{value:x.paymentMethod,onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id?T({...Z,paymentMethod:Q}):Z))},className:"w-full rounded border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2 py-1.5 font-semibold",children:[n.jsx("option",{value:"cod",children:x.print3d?"COD (Cọc 30%)":"COD"}),n.jsx("option",{value:"transfer",children:"Chuyển khoản QR"})]})]})]}),n.jsxs("div",{className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50/70 dark:bg-[#111C33]/70 p-3 space-y-2 text-xs",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("span",{className:"font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5",children:[n.jsx(vm,{className:"h-3.5 w-3.5 text-sky-400"}),"Mạch & Linh kiện nhận diện (",x.matchedProducts.length,")"]}),n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("select",{value:V,onChange:_=>ce(Q=>({...Q,[x.id]:_.target.value})),className:"max-w-[230px] rounded border border-slate-200 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] px-2 py-1 text-xs",children:e.products.filter(_=>_.code!=="IN3D-REQ").map(_=>n.jsxs("option",{value:_.id,children:["[",_.code,"] ",_.name.vi," (",ne(_.price),")"]},_.id))}),n.jsxs("button",{type:"button",onClick:()=>{const _=e.products.find(te=>te.id===V);if(!_)return;const Q={productId:_.id,code:_.code,name:_.name.vi,unitPrice:_.price,costPrice:_.costPrice,stock:_.stock,unit:_.unit,quantity:1,matchScore:100};N(te=>te.map(Z=>{if(Z.id!==x.id)return Z;const I=Z.matchedProducts.some(K=>K.productId===_.id)?Z.matchedProducts.map(K=>K.productId===_.id?{...K,quantity:K.quantity+1}:K):[...Z.matchedProducts,Q];return T({...Z,matchedProducts:I})}))},className:"inline-flex items-center gap-1 rounded bg-sky-500 hover:bg-sky-400 px-2.5 py-1 text-[11px] font-bold text-slate-950",children:[n.jsx(Yt,{className:"h-3 w-3"}),n.jsx("span",{children:"Thêm SP"})]})]})]}),x.matchedProducts.map((_,Q)=>n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 rounded border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2.5 py-1.5",children:[n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsxs("strong",{className:"font-mono text-sky-500",children:["[",_.code,"]"]})," ",_.name," ·"," ",n.jsx("span",{className:"font-mono",children:ne(_.unitPrice)})," ",n.jsxs("span",{className:_.stock>0?"text-emerald-500":"text-rose-500",children:["(Kho: ",_.stock,")"]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"number",min:1,value:_.quantity,onChange:te=>{const Z=Math.max(1,Number(te.target.value)||1);N(ke=>ke.map(I=>{if(I.id!==x.id)return I;const K=I.matchedProducts.map((pe,ye)=>ye===Q?{...pe,quantity:Z}:pe);return T({...I,matchedProducts:K})}))},className:"w-14 rounded border border-slate-300 dark:border-[#243B6B] bg-slate-50 dark:bg-[#111C33] px-1.5 py-0.5 text-center font-mono font-bold"}),n.jsx("span",{className:"font-mono font-bold w-24 text-right",children:ne(_.unitPrice*_.quantity)}),n.jsx("button",{type:"button",onClick:()=>N(te=>te.map(Z=>Z.id===x.id?T({...Z,matchedProducts:Z.matchedProducts.filter((ke,I)=>I!==Q)}):Z)),className:"text-slate-400 hover:text-rose-500",children:n.jsx(an,{className:"h-3.5 w-3.5"})})]})]},`${_.productId}-${Q}`))]}),x.print3d?n.jsxs("div",{className:"rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 space-y-2.5 text-xs",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("span",{className:"font-bold text-amber-500 flex items-center gap-1.5",children:[n.jsx(Va,{className:"h-3.5 w-3.5"}),"Yêu cầu In 3D (Tự động tính giá theo bảng nhựa hiện tại)"]}),n.jsxs("div",{className:"flex items-center gap-2 font-mono",children:[n.jsx("strong",{className:"text-sky-400",children:ne(x.print3d.totalAmount)}),x.print3d.depositAmount>0&&n.jsxs("span",{className:"text-[11px] text-amber-400",children:["(Cọc 30%: ",ne(x.print3d.depositAmount)," · COD: ",ne(x.print3d.codRemainingAmount),")"]})]})]}),n.jsxs("div",{className:"flex flex-wrap gap-2",children:[n.jsx("input",{type:"url",value:x.print3d.driveUrls[0]||"",placeholder:"Link Google Drive file .STL / .ZIP (nếu có)...",onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id&&Z.print3d?T({...Z,print3d:{...Z.print3d,driveUrls:Q?[Q]:[]}}):Z))},className:"flex-1 min-w-[220px] rounded border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] px-2.5 py-1.5 font-mono text-xs"}),n.jsxs("button",{type:"button",disabled:P===x.id||!x.print3d.driveUrls[0],onClick:()=>R(x),className:"inline-flex items-center gap-1.5 rounded bg-amber-500 hover:bg-amber-400 disabled:opacity-50 px-3 py-1.5 text-xs font-bold text-slate-950",children:[P===x.id?n.jsx(_n,{className:"h-3.5 w-3.5 animate-spin"}):n.jsx(Cm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Quét STL Drive"})]}),x.print3d.driveUrls[0]&&n.jsx("a",{href:x.print3d.driveUrls[0],target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 rounded border border-slate-300 dark:border-[#243B6B] px-2.5 py-1.5 text-xs font-semibold hover:border-sky-500",children:n.jsx(Mt,{className:"h-3.5 w-3.5"})})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-[10px] text-slate-500",children:"Vật liệu"}),n.jsx("select",{value:x.print3d.material,onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id&&Z.print3d?T({...Z,print3d:{...Z.print3d,material:Q}}):Z))},className:"w-full rounded border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] px-2 py-1 text-xs font-semibold",children:r.map(_=>n.jsxs("option",{value:_.name,children:[_.name," (",_.pricePerGram,"đ/g)"]},_.id))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[10px] text-slate-500",children:"Infill"}),n.jsx("input",{type:"text",value:x.print3d.infill,onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id&&Z.print3d?T({...Z,print3d:{...Z.print3d,infill:Q}}):Z))},className:"w-full rounded border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] px-2 py-1 font-mono text-xs"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[10px] text-slate-500",children:"Tổng Gram (g)"}),n.jsx("input",{type:"number",min:0,value:x.print3d.weightGrams,onChange:_=>{const Q=Math.max(0,Number(_.target.value)||0);N(te=>te.map(Z=>Z.id===x.id&&Z.print3d?T({...Z,print3d:{...Z.print3d,weightGrams:Q}}):Z))},className:"w-full rounded border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] px-2 py-1 font-mono text-xs font-bold"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[10px] text-slate-500",children:"Số lượng"}),n.jsx("input",{type:"number",min:1,value:x.print3d.quantity,onChange:_=>{const Q=Math.max(1,Number(_.target.value)||1);N(te=>te.map(Z=>Z.id===x.id&&Z.print3d?T({...Z,print3d:{...Z.print3d,quantity:Q}}):Z))},className:"w-full rounded border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] px-2 py-1 font-mono text-xs font-bold"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[10px] text-slate-500",children:"Hạn giao"}),n.jsx("input",{type:"date",value:x.print3d.deliveryDeadline||Dt(3),onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id&&Z.print3d?T({...Z,print3d:{...Z.print3d,deliveryDeadline:Q}}):Z))},className:"w-full rounded border border-slate-300 dark:border-[#243B6B] bg-white dark:bg-[#0B1324] px-2 py-1 font-mono text-xs"})]})]})]}):n.jsxs("button",{type:"button",onClick:()=>N(_=>_.map(Q=>{var ke;if(Q.id!==x.id)return Q;const te=Dt(3),Z=Hr(te);return T({...Q,print3d:{material:((ke=r[0])==null?void 0:ke.name)||"PLA",infill:"20%",weightGrams:0,quantity:1,color:"",driveUrls:[],deliveryDeadline:te,deliveryLabel:Z.displayText,rushSurchargePercent:Z.surchargePercent,subtotalAmount:0,rushFeeAmount:0,totalAmount:0,depositAmount:0,codRemainingAmount:0}})})),className:"inline-flex items-center gap-1 text-xs font-semibold text-amber-500 hover:underline",children:[n.jsx(Yt,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"+ Gắn thêm mục In 3D cho khách này"})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700 dark:text-slate-200",children:"Câu trả lời báo giá tự động (dán thẳng sang Shopee / TikTok)"}),n.jsx("button",{type:"button",onClick:()=>N(_=>_.map(Q=>Q.id===x.id?T(Q,!0):Q)),className:"text-[11px] font-semibold text-sky-500 hover:underline",children:"🔄 Tạo lại theo số liệu đang chỉnh"})]}),n.jsx("textarea",{rows:5,value:x.suggestedReply,onChange:_=>{const Q=_.target.value;N(te=>te.map(Z=>Z.id===x.id?{...Z,suggestedReply:Q}:Z))},className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-3 text-xs text-slate-900 dark:text-slate-100 leading-relaxed"}),n.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-2",children:[n.jsxs("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(x.suggestedReply),D(x.id),setTimeout(()=>D(""),1800)},className:"inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-xs font-bold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20",children:[$===x.id?n.jsx(Kt,{className:"h-3.5 w-3.5 text-emerald-400"}):n.jsx(xn,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:$===x.id?"Đã chép báo giá!":"Copy câu báo giá"})]}),n.jsxs("button",{type:"button",disabled:!!x.createdOrderId||F===x.id,onClick:()=>f(x),className:"inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 px-4 py-2 text-xs font-bold text-white",children:[n.jsx(_a,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:x.createdOrderId?`Đã tạo đơn #${x.createdOrderId}`:F===x.id?"Đang tạo đơn...":"Tạo đơn → Sheet DonHang"})]})]})]})]},x.id)})})]})},Bx=({cmsData:e,setCmsData:t,initialTab:r="overview",initialProductIdx:a=0,onExitAdmin:s})=>{var te,Z,ke,I,K,pe,ye,Y,xe,q,ie,be,me,fe,mt,B,de;const[i,o]=E.useState(r),[l,d]=E.useState(a),[u,g]=E.useState(""),[p,w]=E.useState(""),[N,c]=E.useState(!1),[k,C]=E.useState(!1),[h,m]=E.useState(""),[S,P]=E.useState(""),[O,F]=E.useState(null),[M,$]=E.useState(e.profile.email||"tranbach9805@gmail.com"),[D,U]=E.useState("preparing"),[J,se]=E.useState(!1),re=E.useRef(null),X=e.products[l],ce=y=>Array.from(new Set([...y.imageUrl?[y.imageUrl]:[],...y.backImageUrl?[y.backImageUrl]:[],...y.galleryUrls??[]].filter(b=>typeof b=="string"&&b.trim()!==""))),ee=y=>{const b=Array.from(new Set(y.map(H=>H.trim()).filter(Boolean)));j(H=>({...H,imageUrl:b[0]??"",backImageUrl:"",galleryUrls:b.slice(1)}))},T=y=>{w(""),g(y),setTimeout(()=>g(""),3500)},A=y=>{g(""),w(y),setTimeout(()=>w(""),4e3)},R=async()=>{const y=await Ln(e);y.savedToFile?T("Đã lưu thành công vào file public/cms-data.json trên máy tính!"):y.savedToStorage?T('Đã lưu vào trình duyệt (localStorage). Hãy bấm "Xuất JSON" nếu muốn lưu thành file.'):A("Không thể lưu dữ liệu. Vui lòng kiểm tra dung lượng ảnh hoặc xuất file JSON.")},f=async()=>{C(!0),w(""),g("");try{const y=await jf(e);if(y.ok){const b=y.url||"https://trbach777.github.io/";m(b),T(`Đã đóng gói và đẩy lên GitHub Pages thành công (${b}). Chờ ~30 giây để web cập nhật!`)}else A(y.error||"Đẩy lên GitHub Pages thất bại.")}finally{C(!1)}},L=()=>{const y=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),b=URL.createObjectURL(y),H=document.createElement("a");H.href=b,H.download="cms-data.json",H.click(),URL.revokeObjectURL(b)},v=async y=>{var H;const b=(H=y.target.files)==null?void 0:H[0];if(b)try{const ae=await b.text(),z=JSON.parse(ae);if(!z.profile||!Array.isArray(z.products)){A("File JSON không đúng định dạng dữ liệu của website.");return}const ue={profile:z.profile,products:z.products,services:Array.isArray(z.services)?z.services:e.services,orders:Array.isArray(z.orders)?z.orders:e.orders,stockHistory:Array.isArray(z.stockHistory)?z.stockHistory:e.stockHistory};t(ue),d(0),await Ln(ue),T("Đã nhập dữ liệu từ file JSON và lưu thành công!")}catch{A("Không đọc được file JSON. Vui lòng kiểm tra lại.")}finally{re.current&&(re.current.value="")}},x=async()=>{if(!window.confirm("Khôi phục toàn bộ nội dung về mặc định ban đầu?"))return;Cf();const y=Vi();t(y),d(0),await Ln(y),T("Đã khôi phục toàn bộ nội dung mặc định.")},j=y=>{t(b=>{const H=[...b.products],ae=H[l];return ae?(H[l]=y(ae),{...b,products:H}):b})},G=(y="self-made")=>{const b=y==="commercial",H=y==="project-kit",ae={id:`item-${Date.now()}`,code:b?"MH-NEW-01":H?"KIT-DA-01":"BOARD-NEW-01",revision:b?"Hàng bán":H?"KIT ĐỒ ÁN":"REV 1.0",originType:y,category:b?"other-goods":H?"project-research":"motor-driver",categoryLabel:b?{vi:"Động cơ & Phụ kiện",en:"Motors & Accessories"}:H?{vi:"Đồ án & NCKH",en:"Engineering & Research Kits"}:{vi:"Bo điều khiển & Driver",en:"Control Boards & Drivers"},status:{vi:"Hàng có sẵn tại kho",en:"In Stock"},supplyForm:{vi:"Giao hàng toàn quốc",en:"Nationwide Delivery"},price:H?15e5:5e5,costPrice:H?9e5:3e5,stock:10,minStockAlert:3,unit:H?"Bộ":b?"Chiếc":"Mạch",showTechnicalGuide:!b,name:{vi:b?"Động cơ / Phụ kiện Mới":H?"Bộ Mô hình Đồ án / NCKH Mới":"Bo mạch / Sản phẩm tự làm Mới",en:b?"New Commercial Product":H?"New Project / Research Kit":"New Self-Made Hardware"},subtitle:{vi:"Mô tả ngắn đặc điểm chính của sản phẩm",en:"Short key specification summary"},description:{vi:"Nhập mô tả chi tiết công dụng, chất liệu, quy cách đóng gói và bảo hành.",en:"Enter detailed product overview and warranty info."},imageUrl:"",galleryUrls:[],engineeringNotes:{vi:["Hàng kiểm tra kỹ trước khi đóng gói giao khách."],en:["Inspected carefully prior to shipment."]},techStack:["Bảo hành kỹ thuật"],specs:[{label:{vi:"Quy cách",en:"Package"},value:"1 sản phẩm"}],architectureDiagram:"[Thông tin đấu nối hoặc lắp đặt]",codeSnippetTitle:"Hướng dẫn sử dụng / Lưu ý",codeSnippet:"// Nhập hướng dẫn sử dụng hoặc thông số lưu ý cho khách hàng",visualType:"servo-pid"};t(z=>{const ue=[...z.products,ae];return d(ue.length-1),{...z,products:ue}})},V=y=>{if(e.products.length<=1){A("Cần giữ lại ít nhất 1 sản phẩm trên trang.");return}window.confirm(`Xóa sản phẩm "${e.products[y].name.vi}"?`)&&t(b=>{const H=b.products.filter((ae,z)=>z!==y);return d(ae=>Math.min(ae,H.length-1)),{...b,products:H}})},W=(y,b)=>{const H=y+b;H<0||H>=e.products.length||(t(ae=>{const z=[...ae.products],ue=z[y];return z[y]=z[H],z[H]=ue,{...ae,products:z}}),d(H))},_=async y=>{const b=Array.from(y.target.files??[]);if(!(b.length===0||!X)){c(!0);try{const H=[];for(const ae of b){const z=await ks(ae);H.push(z.url)}ee([...ce(X),...H]),T(`Đã thêm ${H.length} ảnh cho sản phẩm. Nhớ bấm "Lưu trên máy" hoặc "Đẩy lên Web Online"!`)}catch{A("Lỗi khi tải ảnh lên.")}finally{c(!1),y.target.value=""}}},Q=()=>{const y={id:`service-${Date.now()}`,sectionCode:`DV-0${e.services.length+1}`,badge:{vi:"Dịch vụ mới",en:"New Service"},title:{vi:"Tên gói dịch vụ mới",en:"New Engineering Service"},description:{vi:"Mô tả chi tiết phạm vi công việc và lợi ích mang lại cho khách hàng.",en:"Describe scope and deliverables."},deliverables:{vi:["Bàn giao mạch & tài liệu hướng dẫn đấu nối"],en:["Hardware and wiring documentation"]},turnaround:{vi:"1 – 2 tuần",en:"1 – 2 weeks"},pricingNote:{vi:"Báo giá theo yêu cầu",en:"Custom Quote"}};t(b=>({...b,services:[...b.services,y]}))};return n.jsxs("div",{className:"min-h-screen bg-[#F1F5F9] dark:bg-[#080D1A] text-slate-900 dark:text-slate-100 font-sans",children:[n.jsxs("header",{className:"sticky top-0 z-40 border-b border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] shadow-sm",children:[n.jsxs("div",{className:"mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{type:"button",onClick:s,className:"inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-1.5 text-sm font-semibold text-slate-900 dark:text-white hover:border-sky-400 transition-colors",children:[n.jsx(pm,{className:"h-4 w-4"}),n.jsx("span",{children:"Xem trang khách"})]}),n.jsxs("div",{children:[n.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"Trang Quản trị Cửa hàng, Kho & Giao diện"}),n.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Mọi nội dung, logo, banner và ảnh tải lên sẽ lưu vào public/cms-data.json và public/uploads/"})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("input",{ref:re,type:"file",accept:"application/json",onChange:v,className:"hidden"}),n.jsxs("button",{type:"button",onClick:()=>{var y;return(y=re.current)==null?void 0:y.click()},className:"inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1E325C] px-3 py-1.5 text-xs font-semibold hover:border-sky-400",children:[n.jsx(rf,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Nhập JSON"})]}),n.jsxs("button",{type:"button",onClick:L,className:"inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1E325C] px-3 py-1.5 text-xs font-semibold hover:border-sky-400",children:[n.jsx(fd,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Xuất JSON"})]}),n.jsxs("button",{type:"button",onClick:x,className:"inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1E325C] px-3 py-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:border-rose-500",children:[n.jsx(Nm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Khôi phục gốc"})]}),n.jsxs("button",{type:"button",onClick:R,className:"inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-500/20 transition-colors",children:[n.jsx(Sm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Lưu trên máy"})]}),n.jsxs("button",{type:"button",onClick:f,disabled:k,className:"inline-flex items-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 px-4 py-1.5 text-sm font-bold text-white shadow-sm disabled:opacity-60 transition-colors",children:[n.jsx(_0,{className:"h-4 w-4"}),n.jsx("span",{children:k?"Đang đẩy lên Web...":"Đẩy lên Web Online"})]})]})]}),(u||p)&&n.jsx("div",{className:`border-t px-4 py-2 text-center text-sm font-medium ${p?"border-rose-300 bg-rose-50 text-rose-800 dark:bg-rose-950/50 dark:text-rose-200":"border-emerald-300 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"}`,children:n.jsxs("span",{className:"inline-flex flex-wrap items-center justify-center gap-2",children:[p?n.jsx(F0,{className:"h-4 w-4"}):n.jsx(rn,{className:"h-4 w-4"}),n.jsx("span",{children:p||u}),!p&&h&&n.jsxs("a",{href:h,target:"_blank",rel:"noreferrer",className:"underline font-bold",children:["Mở ",h]})]})}),n.jsx("div",{className:"mx-auto flex max-w-7xl overflow-x-auto gap-1 border-t border-slate-200 dark:border-[#1E325C] px-4 sm:px-6 lg:px-8",children:[{id:"overview",label:"Tổng quan & Doanh thu"},{id:"inventory",label:"Quản lý Kho hàng"},{id:"orders",label:`Đơn hàng (${e.orders.length})`},{id:"chat-filter",label:"Lọc Tin Shopee/TikTok"},{id:"print3d",label:`In 3D & Đơn in (${((te=e.print3dOrders)==null?void 0:te.length)??0})`},{id:"ctv3d",label:`Cộng tác viên In 3D (${((Z=e.print3dCollaborators)==null?void 0:Z.length)??0})`},{id:"payout3d",label:"Tính tiền CTV In 3D (Tuần)"},{id:"products",label:`Sản phẩm & Ảnh (${e.products.length})`},{id:"profile",label:"Thông tin Shop & Giao diện"},{id:"services",label:`Đồ án & NCKH (${e.services.length})`}].map(y=>n.jsx("button",{type:"button",onClick:()=>o(y.id),className:`whitespace-nowrap border-b-2 px-3.5 py-2.5 text-sm font-semibold transition-colors ${i===y.id?"border-sky-500 text-sky-600 dark:text-sky-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,children:y.label},y.id))})]}),n.jsxs("main",{className:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",children:[i==="overview"&&n.jsx(Jf,{cmsData:e,setCmsData:t,onGoTab:y=>o(y)}),i==="print3d"&&n.jsx(ux,{cmsData:e,setCmsData:t,onOpenSettlementTab:()=>o("payout3d")}),i==="ctv3d"&&n.jsx(hx,{cmsData:e,setCmsData:t}),i==="payout3d"&&n.jsx(mx,{cmsData:e,setCmsData:t}),i==="inventory"&&n.jsx(ex,{cmsData:e,setCmsData:t,onEditProductAt:y=>{d(y),o("products")}}),i==="orders"&&n.jsx(nx,{cmsData:e,setCmsData:t}),i==="chat-filter"&&n.jsx(Ix,{cmsData:e,setCmsData:t}),i==="products"&&n.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-12",children:[n.jsxs("aside",{className:"lg:col-span-4 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsx("h2",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Danh sách mặt hàng"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>G("self-made"),className:"inline-flex items-center gap-1 rounded-md bg-sky-600 px-2 py-1.5 text-[11px] font-semibold text-white hover:bg-sky-500",children:[n.jsx(Yt,{className:"h-3 w-3"}),n.jsx("span",{children:"+ Mạch ĐK"})]}),n.jsxs("button",{type:"button",onClick:()=>G("project-kit"),className:"inline-flex items-center gap-1 rounded-md bg-amber-600 px-2 py-1.5 text-[11px] font-semibold text-white hover:bg-amber-500",children:[n.jsx(Yt,{className:"h-3 w-3"}),n.jsx("span",{children:"+ SP Đồ án"})]}),n.jsxs("button",{type:"button",onClick:()=>G("commercial"),className:"inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-1.5 text-[11px] font-semibold text-white hover:bg-emerald-500",children:[n.jsx(Yt,{className:"h-3 w-3"}),n.jsx("span",{children:"+ Phụ kiện"})]})]})]}),n.jsx("div",{className:"space-y-2",children:e.products.map((y,b)=>{const H=b===l;return n.jsx("div",{onClick:()=>d(b),className:`cursor-pointer rounded-lg border p-3 transition-all ${H?"border-[#1E3A5F] dark:border-[#C59353] bg-white dark:bg-[#182030] shadow-sm":"border-[#E6E0D3] dark:border-[#242E42] bg-[#F3EFE6]/50 dark:bg-[#141B29] hover:bg-white dark:hover:bg-[#182030]"}`,children:n.jsxs("div",{className:"flex items-start justify-between gap-2",children:[n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsxs("div",{className:"text-xs font-bold text-[#9A6B32] dark:text-[#C59353]",children:[y.code," · ",y.revision]}),n.jsx("div",{className:"truncate text-sm font-bold text-[#1E3A5F] dark:text-[#EDE8DF]",children:y.name.vi}),n.jsx("div",{className:"mt-0.5 text-xs italic text-[#555B66] dark:text-[#98A2B3]",children:y.imageUrl?"Đã gắn ảnh thật":"Đang dùng hình sơ đồ mặc định"})]}),n.jsxs("div",{className:"flex items-center gap-1 shrink-0",onClick:ae=>ae.stopPropagation(),children:[n.jsx("button",{type:"button",onClick:()=>W(b,-1),disabled:b===0,title:"Lên",className:"rounded border border-[#D8D0C0] dark:border-[#2B374D] p-1 disabled:opacity-30",children:n.jsx(fm,{className:"h-3 w-3"})}),n.jsx("button",{type:"button",onClick:()=>W(b,1),disabled:b===e.products.length-1,title:"Xuống",className:"rounded border border-[#D8D0C0] dark:border-[#2B374D] p-1 disabled:opacity-30",children:n.jsx(mm,{className:"h-3 w-3"})}),n.jsx("button",{type:"button",onClick:()=>V(b),title:"Xóa sản phẩm",className:"rounded border border-rose-300 p-1 text-rose-700 hover:bg-rose-50",children:n.jsx(an,{className:"h-3 w-3"})})]})]})},y.id)})})]}),X&&n.jsxs("div",{className:"lg:col-span-8 rounded-xl border border-[#DFD7C8] dark:border-[#242E42] bg-white dark:bg-[#182030] p-6 space-y-6",children:[n.jsxs("div",{className:"border-b border-[#ECE6DA] dark:border-[#242E42] pb-3 flex items-center justify-between",children:[n.jsxs("h2",{className:"text-xl font-bold text-[#1E3A5F] dark:text-[#EDE8DF]",children:["Chỉnh sửa: ",X.name.vi]}),n.jsx("span",{className:"text-xs italic text-[#555B66] dark:text-[#A9B1C0]",children:"Mọi thay đổi tự động cập nhật ngay lên giao diện xem"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#0B1324] p-4 space-y-4",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("div",{children:[n.jsxs("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:["1. Bộ ảnh Sản phẩm (Nhiều ảnh trong 1 sản phẩm —"," ",ce(X).length," ảnh)"]}),n.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Khách hàng có thể bấm mũi tên trái/phải ngay trên thẻ hoặc bấm ảnh thu nhỏ để xem từng ảnh."})]}),N&&n.jsx("span",{className:"font-mono text-xs font-semibold text-sky-500",children:"Đang tải ảnh lên..."})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-2.5",children:[n.jsxs("label",{className:"inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors",children:[n.jsx(fo,{className:"h-4 w-4"}),n.jsx("span",{children:"+ Tải thêm nhiều ảnh từ máy tính"}),n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:_,className:"hidden"})]}),n.jsxs("div",{className:"flex flex-1 gap-2",children:[n.jsx("input",{type:"text",value:S,onChange:y=>P(y.target.value),placeholder:"Hoặc dán URL ảnh (https://... hoặc ./uploads/...) rồi bấm Thêm",className:"flex-1 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#111C33] px-3 py-1.5 text-xs sm:text-sm"}),n.jsxs("button",{type:"button",onClick:()=>{const y=S.trim();y&&(ee([...ce(X),y]),P(""),T("Đã thêm ảnh vào sản phẩm."))},className:"inline-flex items-center gap-1 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20",children:[n.jsx(Yt,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Thêm ảnh"})]})]})]}),ce(X).length===0?n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-12 items-center rounded-lg border border-dashed border-slate-300 dark:border-[#1E325C] p-4",children:[n.jsx("div",{className:"sm:col-span-5",children:n.jsx(Km,{visualType:X.visualType,code:X.code,revision:X.revision})}),n.jsxs("div",{className:"sm:col-span-7 text-xs text-slate-500 dark:text-slate-400 space-y-1",children:[n.jsx("div",{className:"font-semibold text-slate-700 dark:text-slate-200",children:"Chưa tải ảnh chụp thực tế (đang hiển thị 3 slide minh họa 2D mặc định)."}),n.jsxs("p",{children:["Hãy bấm ",n.jsx("strong",{children:"+ Tải thêm nhiều ảnh từ máy tính"})," và chọn cùng lúc nhiều ảnh (mặt trước, mặt sau, giắc cắm, ảnh thực tế...) để khách bấm chuyển xem ngay trên sản phẩm."]})]})]}):n.jsx("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",children:ce(X).map((y,b,H)=>n.jsxs("div",{className:"group relative overflow-hidden rounded-lg border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#111C33] p-1.5 space-y-1.5",children:[n.jsxs("div",{className:"relative h-28 w-full overflow-hidden rounded bg-[#0A1428]",children:[n.jsx("img",{src:y,alt:`Ảnh #${b+1}`,className:"h-full w-full object-cover"}),n.jsx("span",{className:`absolute left-1.5 top-1.5 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${b===0?"bg-sky-500 text-white":"bg-slate-950/80 text-slate-200"}`,children:b===0?"#1 Chính":`#${b+1}`}),n.jsx("button",{type:"button",onClick:()=>ee(H.filter((ae,z)=>z!==b)),title:"Xóa ảnh này",className:"absolute right-1.5 top-1.5 rounded bg-black/75 p-1 text-white hover:bg-rose-600",children:n.jsx(Gn,{className:"h-3 w-3"})})]}),n.jsxs("div",{className:"flex items-center justify-between gap-1 text-[11px]",children:[b>0?n.jsx("button",{type:"button",onClick:()=>{const ae=[y,...H.filter((z,ue)=>ue!==b)];ee(ae)},className:"flex-1 rounded border border-sky-500/40 bg-sky-500/10 py-1 px-1.5 font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20 truncate",children:"Đặt ảnh đầu"}):n.jsx("span",{className:"flex-1 text-center font-mono text-[10px] text-emerald-500 font-semibold py-1 truncate",children:"Ảnh chính"}),n.jsxs("button",{type:"button",onClick:()=>F({idx:b,url:y}),title:"Cắt / Xoay ảnh này",className:"inline-flex shrink-0 items-center gap-1 rounded border border-amber-500/40 bg-amber-500/10 px-2 py-1 font-semibold text-amber-600 dark:text-amber-300 hover:bg-amber-500/20",children:[n.jsx(bm,{className:"h-3 w-3"}),n.jsx("span",{children:"Cắt/Xoay"})]})]})]},`${y}-${b}`))}),O&&X&&n.jsx(Yf,{imageUrl:O.url,onCancel:()=>F(null),onSave:async y=>{c(!0);try{const b=await ks(y),ae=ce(X).map((z,ue)=>ue===O.idx?b.url:z);ee(ae),F(null),T('Đã lưu ảnh mới sau khi cắt/xoay! Nhớ bấm "Lưu trên máy" hoặc "Đẩy lên Web Online".')}finally{c(!1)}}})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsx("h3",{className:"text-base font-bold text-[#1E3A5F] dark:text-[#EDE8DF]",children:"2. Nguồn hàng, Giá bán & Tồn kho"}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Loại mặt hàng"}),n.jsxs("select",{value:X.originType,onChange:y=>j(b=>({...b,originType:y.target.value})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm font-semibold",children:[n.jsx("option",{value:"self-made",children:"Mạch điều khiển & Module"}),n.jsx("option",{value:"project-kit",children:"Sản phẩm Đồ án & NCKH"}),n.jsx("option",{value:"commercial",children:"Động cơ & Linh kiện khác"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Giá bán (VNĐ, 0 = Báo giá)"}),n.jsx("input",{type:"number",min:0,step:1e4,value:X.price,onChange:y=>j(b=>({...b,price:Math.max(0,Number(y.target.value))})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm font-bold text-[#9A6B32]"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Giá vốn nội bộ (VNĐ)"}),n.jsx("input",{type:"number",min:0,step:1e4,value:X.costPrice,onChange:y=>j(b=>({...b,costPrice:Math.max(0,Number(y.target.value))})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Tồn kho hiện tại"}),n.jsx("input",{type:"number",min:0,value:X.stock,onChange:y=>j(b=>({...b,stock:Math.max(0,Number(y.target.value))})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Đơn vị tính"}),n.jsx("input",{type:"text",value:X.unit,onChange:y=>j(b=>({...b,unit:y.target.value})),placeholder:"Mạch / Bộ / Chiếc...",className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsx("div",{className:"flex items-end pb-1.5",children:n.jsxs("label",{className:"inline-flex items-center gap-2 text-xs font-semibold cursor-pointer",children:[n.jsx("input",{type:"checkbox",checked:X.showTechnicalGuide!==!1,onChange:y=>j(b=>({...b,showTechnicalGuide:y.target.checked})),className:"h-4 w-4 accent-[#1E3A5F]"}),n.jsx("span",{children:"Hiển thị tab Sơ đồ đấu nối & Hướng dẫn"})]})})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Mã mạch / SKU"}),n.jsx("input",{type:"text",value:X.code,onChange:y=>j(b=>({...b,code:y.target.value})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Phiên bản / Nhãn"}),n.jsx("input",{type:"text",value:X.revision,onChange:y=>j(b=>({...b,revision:y.target.value})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Phân loại"}),n.jsxs("select",{value:X.category,onChange:y=>{const b=y.target.value,H={"robot-controller":{vi:"Bo Điều khiển Robot",en:"Robot Master"},"motor-driver":{vi:"Driver Động cơ",en:"Motor Driver"},"sensor-hmi":{vi:"Cảm biến & I/O",en:"Sensors & I/O"},wireless:{vi:"Điều khiển không dây",en:"Wireless"},"mechanics-parts":{vi:"Động cơ & Cơ khí",en:"Motors & Mechanics"},"project-research":{vi:"Đồ án & Mô hình NCKH",en:"Project & Research"},"other-goods":{vi:"Mặt hàng khác",en:"Other Goods"}};j(ae=>({...ae,category:b,categoryLabel:H[b]}))},className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm",children:[n.jsx("option",{value:"robot-controller",children:"Bo điều khiển Robot"}),n.jsx("option",{value:"motor-driver",children:"Driver Động cơ"}),n.jsx("option",{value:"sensor-hmi",children:"Cảm biến & I/O"}),n.jsx("option",{value:"wireless",children:"Điều khiển không dây"}),n.jsx("option",{value:"mechanics-parts",children:"Động cơ & Cơ khí"}),n.jsx("option",{value:"project-research",children:"Đồ án & Mô hình NCKH"}),n.jsx("option",{value:"other-goods",children:"Mặt hàng khác"})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Tên sản phẩm (Tiếng Việt)"}),n.jsx("input",{type:"text",value:X.name.vi,onChange:y=>j(b=>({...b,name:{...b.name,vi:y.target.value}})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Tên sản phẩm (English)"}),n.jsx("input",{type:"text",value:X.name.en,onChange:y=>j(b=>({...b,name:{...b.name,en:y.target.value}})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Tình trạng (VI)"}),n.jsx("input",{type:"text",value:X.status.vi,onChange:y=>j(b=>({...b,status:{...b.status,vi:y.target.value}})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Hình thức cung cấp (VI)"}),n.jsx("input",{type:"text",value:X.supplyForm.vi,onChange:y=>j(b=>({...b,supplyForm:{...b.supplyForm,vi:y.target.value}})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Dòng tóm tắt nổi bật (VI)"}),n.jsx("input",{type:"text",value:X.subtitle.vi,onChange:y=>j(b=>({...b,subtitle:{...b.subtitle,vi:y.target.value}})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Mô tả chi tiết (Tiếng Việt)"}),n.jsx("textarea",{rows:3,value:X.description.vi,onChange:y=>j(b=>({...b,description:{...b.description,vi:y.target.value}})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Ưu điểm thực tế (Mỗi dòng một ý — Tiếng Việt):"}),n.jsx("textarea",{rows:3,value:X.engineeringNotes.vi.join(`
`),onChange:y=>j(b=>({...b,engineeringNotes:{...b.engineeringNotes,vi:y.target.value.split(`
`).filter(H=>H.trim()!=="")}})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-2 text-sm"})]})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("h3",{className:"text-base font-bold text-[#1E3A5F] dark:text-[#EDE8DF]",children:"3. Bảng thông số kỹ thuật"}),n.jsxs("button",{type:"button",onClick:()=>j(y=>({...y,specs:[...y.specs,{label:{vi:"Thông số mới",en:"Parameter"},value:"Giá trị"}]})),className:"inline-flex items-center gap-1 rounded border border-[#1E3A5F] dark:border-[#C59353] px-2.5 py-1 text-xs font-semibold text-[#1E3A5F] dark:text-[#EDE8DF]",children:[n.jsx(Yt,{className:"h-3 w-3"}),n.jsx("span",{children:"Thêm dòng"})]})]}),n.jsx("div",{className:"space-y-2",children:X.specs.map((y,b)=>n.jsxs("div",{className:"grid grid-cols-12 gap-2 items-center",children:[n.jsx("input",{type:"text",value:y.label.vi,onChange:H=>j(ae=>{const z=[...ae.specs];return z[b]={...z[b],label:{...z[b].label,vi:H.target.value}},{...ae,specs:z}}),placeholder:"Tên thông số",className:"col-span-4 rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-2.5 py-1.5 text-sm"}),n.jsx("input",{type:"text",value:y.value,onChange:H=>j(ae=>{const z=[...ae.specs];return z[b]={...z[b],value:H.target.value},{...ae,specs:z}}),placeholder:"Giá trị",className:"col-span-7 rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-2.5 py-1.5 text-sm"}),n.jsx("button",{type:"button",onClick:()=>j(H=>({...H,specs:H.specs.filter((ae,z)=>z!==b)})),className:"col-span-1 flex justify-center text-rose-600 hover:text-rose-800",children:n.jsx(an,{className:"h-4 w-4"})})]},b))})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("h3",{className:"text-base font-bold text-[#1E3A5F] dark:text-[#EDE8DF]",children:"4. Sơ đồ đấu nối & Hướng dẫn sử dụng (Không mở firmware nội bộ)"}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Sơ đồ đấu dây ngoài:"}),n.jsx("textarea",{rows:5,value:X.architectureDiagram,onChange:y=>j(b=>({...b,architectureDiagram:y.target.value})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#121927] p-3 font-mono text-xs text-[#EDE8DF]"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Tiêu đề hướng dẫn:"}),n.jsx("input",{type:"text",value:X.codeSnippetTitle,onChange:y=>j(b=>({...b,codeSnippetTitle:y.target.value})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Hướng dẫn đấu nối / Ví dụ tập lệnh:"}),n.jsx("textarea",{rows:6,value:X.codeSnippet,onChange:y=>j(b=>({...b,codeSnippet:y.target.value})),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#121927] p-3 font-mono text-xs text-[#E2C28F]"})]})]})]})]}),i==="profile"&&n.jsxs("div",{className:"space-y-6 max-w-5xl",children:[n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-6 space-y-5",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-[#1E325C] pb-3",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"1. Tên Cửa hàng & Logo thương hiệu"}),n.jsx("span",{className:"font-mono text-xs text-sky-500",children:"Hiển thị trên Navbar & Footer"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên Cửa hàng"}),n.jsx("input",{type:"text",value:e.profile.name,onChange:y=>t(b=>({...b,profile:{...b.profile,name:y.target.value}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Chữ Logo / Thương hiệu"}),n.jsx("input",{type:"text",value:e.profile.brandName,onChange:y=>t(b=>({...b,profile:{...b.profile,brandName:y.target.value}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Ký tự trong Chip Logo (tối đa 4 ký tự)"}),n.jsx("input",{type:"text",maxLength:4,value:e.profile.logoMonogram??"TBX",onChange:y=>t(b=>({...b,profile:{...b.profile,logoMonogram:y.target.value.toUpperCase()}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono uppercase"})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-1",children:[n.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3.5 py-2 text-xs font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20 transition-colors",children:[n.jsx(fo,{className:"h-4 w-4"}),n.jsx("span",{children:N?"Đang tải...":"Tải ảnh Logo riêng (tùy chọn)"}),n.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:async y=>{var H;const b=(H=y.target.files)==null?void 0:H[0];if(b){c(!0);try{const ae=await ks(b);t(z=>({...z,profile:{...z.profile,logoImageUrl:ae.url}})),T('Đã cập nhật ảnh Logo! Nhớ bấm "Lưu trên máy" hoặc "Đẩy lên Web Online".')}catch{A("Tải ảnh Logo thất bại.")}finally{c(!1),y.target.value=""}}}})]}),e.profile.logoImageUrl&&n.jsxs("button",{type:"button",onClick:()=>t(y=>({...y,profile:{...y.profile,logoImageUrl:""}})),className:"inline-flex items-center gap-1 rounded-lg border border-slate-300 dark:border-[#1E325C] px-3 py-2 text-xs font-semibold text-rose-500 hover:border-rose-500",children:[n.jsx(Gn,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Dùng lại Chip Logo mặc định"})]})]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-6 space-y-4",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1E325C] pb-3",children:"2. Nội dung Banner & Cam kết Cửa hàng"}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Dòng thông báo giao hàng đầu trang (VI)"}),n.jsx("input",{type:"text",value:((ke=e.profile.topNotice)==null?void 0:ke.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,topNotice:{vi:y.target.value,en:((H=b.profile.topNotice)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Nhãn nhỏ trên Banner (VI)"}),n.jsx("input",{type:"text",value:e.profile.availabilityBadge.vi,onChange:y=>t(b=>({...b,profile:{...b.profile,availabilityBadge:{...b.profile.availabilityBadge,vi:y.target.value}}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tiêu đề chính Banner trang chủ (VI)"}),n.jsx("input",{type:"text",value:e.profile.role.vi,onChange:y=>t(b=>({...b,profile:{...b.profile,role:{...b.profile.role,vi:y.target.value}}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Mô tả phụ dưới Banner (để trống nếu không cần hiển thị)"}),n.jsx("textarea",{rows:2,value:e.profile.tagline.vi,onChange:y=>t(b=>({...b,profile:{...b.profile,tagline:{...b.profile.tagline,vi:y.target.value}}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[n.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3.5 py-2 text-xs font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-500/20",children:[n.jsx(fo,{className:"h-4 w-4"}),n.jsx("span",{children:N?"Đang tải...":"Đổi ảnh nền Banner mới"}),n.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:async y=>{var H;const b=(H=y.target.files)==null?void 0:H[0];if(b){c(!0);try{const ae=await ks(b);t(z=>({...z,profile:{...z.profile,heroImageUrl:ae.url}})),T('Đã đổi ảnh nền Banner! Nhớ bấm "Lưu trên máy" hoặc "Đẩy lên Web Online".')}catch{A("Tải ảnh nền Banner thất bại.")}finally{c(!1),y.target.value=""}}}})]}),n.jsx("button",{type:"button",onClick:()=>t(y=>({...y,profile:{...y.profile,heroImageUrl:"./images/hero-chip-robot.jpg"}})),className:"rounded-lg border border-slate-200 dark:border-[#1E325C] px-3 py-2 text-xs font-semibold hover:border-sky-400",children:"Dùng nền Chip & Robot mặc định"})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-1",children:(e.profile.policyBadges??[]).map((y,b)=>n.jsxs("div",{children:[n.jsxs("label",{className:"block text-[11px] font-semibold mb-1 text-slate-500",children:["Ô cam kết #",b+1]}),n.jsx("input",{type:"text",value:y.vi,onChange:H=>t(ae=>{const z=[...ae.profile.policyBadges??[]];return z[b]={...z[b],vi:H.target.value},{...ae,profile:{...ae.profile,policyBadges:z}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-2.5 py-1.5 text-xs"})]},b))})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-6 space-y-4",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1E325C] pb-3",children:"3. Tiêu đề Danh mục, Nhãn Tab lọc & Quy trình Mua hàng"}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Nhãn nhỏ Danh mục (VI)"}),n.jsx("input",{type:"text",value:((I=e.profile.catalogEyebrow)==null?void 0:I.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,catalogEyebrow:{vi:y.target.value,en:((H=b.profile.catalogEyebrow)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tiêu đề chính Danh mục sản phẩm (VI)"}),n.jsx("input",{type:"text",value:((K=e.profile.catalogTitle)==null?void 0:K.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,catalogTitle:{vi:y.target.value,en:((H=b.profile.catalogTitle)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên Tab Tất cả sản phẩm"}),n.jsx("input",{type:"text",value:((pe=e.profile.tabAllLabel)==null?void 0:pe.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,tabAllLabel:{vi:y.target.value,en:((H=b.profile.tabAllLabel)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên Tab Nhóm 1 (Mạch tự làm)"}),n.jsx("input",{type:"text",value:((ye=e.profile.tabSelfMadeLabel)==null?void 0:ye.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,tabSelfMadeLabel:{vi:y.target.value,en:((H=b.profile.tabSelfMadeLabel)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên Tab Nhóm 2 (Động cơ & Phụ kiện)"}),n.jsx("input",{type:"text",value:((Y=e.profile.tabCommercialLabel)==null?void 0:Y.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,tabCommercialLabel:{vi:y.target.value,en:((H=b.profile.tabCommercialLabel)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên Tab Nhóm SP Đồ án & NCKH"}),n.jsx("input",{type:"text",value:((xe=e.profile.tabProjectLabel)==null?void 0:xe.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,tabProjectLabel:{vi:y.target.value,en:((H=b.profile.tabProjectLabel)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]})]}),n.jsxs("div",{className:"pt-2 space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tiêu đề Quy trình Đặt hàng & Bảo hành"}),n.jsx("input",{type:"text",value:((q=e.profile.buyingStepsTitle)==null?void 0:q.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,buyingStepsTitle:{vi:y.target.value,en:((H=b.profile.buyingStepsTitle)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",children:(e.profile.buyingSteps??[]).map((y,b)=>n.jsxs("div",{className:"rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-3 space-y-2",children:[n.jsxs("div",{className:"font-mono text-[11px] font-bold text-emerald-500",children:["BƯỚC ",y.step]}),n.jsx("input",{type:"text",value:y.title.vi,onChange:H=>t(ae=>{const z=[...ae.profile.buyingSteps??[]];return z[b]={...z[b],title:{...z[b].title,vi:H.target.value}},{...ae,profile:{...ae.profile,buyingSteps:z}}}),className:"w-full rounded border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2 py-1 text-xs font-bold"}),n.jsx("textarea",{rows:2,value:y.desc.vi,onChange:H=>t(ae=>{const z=[...ae.profile.buyingSteps??[]];return z[b]={...z[b],desc:{...z[b].desc,vi:H.target.value}},{...ae,profile:{...ae.profile,buyingSteps:z}}}),className:"w-full rounded border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2 py-1 text-xs"})]},y.step||b))})]}),n.jsxs("div",{className:"pt-2 border-t border-slate-200 dark:border-[#1E325C] space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Nhãn mục Hỗ trợ Đồ án & NCKH (Eyebrow)"}),n.jsx("input",{type:"text",value:((ie=e.profile.servicesEyebrow)==null?void 0:ie.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,servicesEyebrow:{vi:y.target.value,en:((H=b.profile.servicesEyebrow)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tiêu đề mục Hỗ trợ Đồ án & NCKH"}),n.jsx("input",{type:"text",value:((be=e.profile.servicesTitle)==null?void 0:be.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,servicesTitle:{vi:y.target.value,en:((H=b.profile.servicesTitle)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Mô tả ngắn mục Hỗ trợ Đồ án & NCKH"}),n.jsx("textarea",{rows:2,value:((me=e.profile.servicesSubtitle)==null?void 0:me.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,servicesSubtitle:{vi:y.target.value,en:((H=b.profile.servicesSubtitle)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]})]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-6 space-y-4",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1E325C] pb-3",children:"4. Thông tin Liên hệ, Khu vực giao hàng & Chuyển khoản"}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Số điện thoại / Zalo"}),n.jsx("input",{type:"text",value:e.profile.phone,onChange:y=>t(b=>({...b,profile:{...b.profile,phone:y.target.value,zaloLink:`https://zalo.me/${y.target.value.replace(/\D/g,"")}`}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Link Telegram Shop (tùy chọn)"}),n.jsx("input",{type:"url",value:e.profile.telegramLink||"",onChange:y=>t(b=>({...b,profile:{...b.profile,telegramLink:y.target.value}})),placeholder:"https://t.me/username (để trống sẽ tự mở theo SĐT)",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Email cửa hàng"}),n.jsx("input",{type:"email",value:e.profile.email,onChange:y=>t(b=>({...b,profile:{...b.profile,email:y.target.value}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Khu vực / Giao hàng (VI)"}),n.jsx("input",{type:"text",value:e.profile.location.vi,onChange:y=>t(b=>({...b,profile:{...b.profile,location:{...b.profile.location,vi:y.target.value}}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tiêu đề mục Liên hệ (VI)"}),n.jsx("input",{type:"text",value:((fe=e.profile.contactTitle)==null?void 0:fe.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,contactTitle:{vi:y.target.value,en:((H=b.profile.contactTitle)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tài khoản ngân hàng (hiện khi chọn Chuyển khoản)"}),n.jsx("input",{type:"text",value:e.profile.bankInfo??"",onChange:y=>t(b=>({...b,profile:{...b.profile,bankInfo:y.target.value}})),placeholder:"Ngân hàng · Số tài khoản · Chủ tài khoản...",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Mô tả mục Liên hệ (VI)"}),n.jsx("textarea",{rows:2,value:((mt=e.profile.contactSubtitle)==null?void 0:mt.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,contactSubtitle:{vi:y.target.value,en:((H=b.profile.contactSubtitle)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{className:"pt-3 border-t border-slate-200 dark:border-[#1E325C] space-y-3",children:[n.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400",children:"Nội dung Chân trang (Footer cuối web)"}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Giới thiệu ngắn dưới Logo (Footer)"}),n.jsx("textarea",{rows:2,value:((B=e.profile.footerAbout)==null?void 0:B.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,footerAbout:{vi:y.target.value,en:((H=b.profile.footerAbout)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tiêu đề cột Chính sách (Footer phải)"}),n.jsx("input",{type:"text",value:((de=e.profile.footerPolicyTitle)==null?void 0:de.vi)??"",onChange:y=>t(b=>{var H;return{...b,profile:{...b.profile,footerPolicyTitle:{vi:y.target.value,en:((H=b.profile.footerPolicyTitle)==null?void 0:H.en)||y.target.value}}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-600 dark:text-slate-300",children:"3 dòng cam kết Giao hàng & Bảo hành (để trống nếu muốn ẩn dòng)"}),[0,1,2].map(y=>{var H;const b=e.profile.footerPolicyItems??[{vi:"",en:""},{vi:"",en:""},{vi:"",en:""}];return n.jsx("input",{type:"text",value:((H=b[y])==null?void 0:H.vi)??"",placeholder:`Dòng cam kết ${y+1}...`,onChange:ae=>t(z=>{const ue=[0,1,2].map(Ce=>{var Pe,Ee,Ae,cr;return{vi:((Ee=(Pe=z.profile.footerPolicyItems)==null?void 0:Pe[Ce])==null?void 0:Ee.vi)??"",en:((cr=(Ae=z.profile.footerPolicyItems)==null?void 0:Ae[Ce])==null?void 0:cr.en)??""}});return ue[y]={vi:ae.target.value,en:ue[y].en||ae.target.value},{...z,profile:{...z.profile,footerPolicyItems:ue}}}),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"},y)})]})]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-6 space-y-5",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-[#1E325C] pb-3",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"5. Thanh toán QR Tự động, Đối soát Ngân hàng & Báo đơn 24/7"}),n.jsx("span",{className:"font-mono text-xs text-emerald-500",children:"VietQR Napas 24/7"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-5 lg:grid-cols-12 items-start",children:[n.jsxs("div",{className:"lg:col-span-8 space-y-4",children:[n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Mã Ngân hàng VietQR"}),n.jsxs("select",{value:e.profile.bankId??"MB",onChange:y=>t(b=>({...b,profile:{...b.profile,bankId:y.target.value}})),className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono",children:[n.jsx("option",{value:"MB",children:"MB (MB Bank)"}),n.jsx("option",{value:"VCB",children:"VCB (Vietcombank)"}),n.jsx("option",{value:"TCB",children:"TCB (Techcombank)"}),n.jsx("option",{value:"ACB",children:"ACB"}),n.jsx("option",{value:"BIDV",children:"BIDV"}),n.jsx("option",{value:"ICB",children:"ICB (VietinBank)"}),n.jsx("option",{value:"VPB",children:"VPB (VPBank)"}),n.jsx("option",{value:"TPB",children:"TPB (TPBank)"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Số tài khoản nhận tiền"}),n.jsx("input",{type:"text",value:e.profile.bankAccountNo??"",onChange:y=>t(b=>({...b,profile:{...b.profile,bankAccountNo:y.target.value}})),placeholder:"0789044703",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên Chủ tài khoản (Không dấu)"}),n.jsx("input",{type:"text",value:e.profile.bankAccountName??"",onChange:y=>t(b=>({...b,profile:{...b.profile,bankAccountName:y.target.value.toUpperCase()}})),placeholder:"TRAN XUAN BACH",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono uppercase"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Telegram Bot Token (Báo đơn & Duyệt đơn 24/7)"}),n.jsx("input",{type:"text",value:e.profile.telegramBotToken??"",onChange:y=>t(b=>({...b,profile:{...b.profile,telegramBotToken:y.target.value}})),placeholder:"Tùy chọn: 712345:AAH...",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Telegram Chat ID (ID Telegram của Chủ Shop)"}),n.jsx("input",{type:"text",value:e.profile.telegramChatId??"",onChange:y=>t(b=>({...b,profile:{...b.profile,telegramChatId:y.target.value}})),placeholder:"Tùy chọn: 123456789",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono"})]})]}),n.jsxs("div",{className:"rounded-xl border border-sky-500/30 bg-sky-500/5 p-3.5 space-y-2.5 text-xs",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("label",{className:"inline-flex items-center gap-2 font-semibold cursor-pointer",children:[n.jsx("input",{type:"checkbox",checked:e.profile.telegramAutoSync!==!1,onChange:y=>t(b=>({...b,profile:{...b.profile,telegramAutoSync:y.target.checked}})),className:"h-4 w-4 accent-sky-500"}),n.jsx("span",{children:"Tự động đồng bộ nút bấm duyệt đơn từ Bot Telegram mỗi 4 giây"})]}),n.jsx("button",{type:"button",onClick:async()=>{const y=await Ef(e.profile,e.orders[0]);y.ok?T("✓ Đã gửi Thẻ Đơn có nút duyệt (Đang chuẩn bị / Đã đóng / Đã gửi / Đang giao) sang Telegram của bạn!"):A(`Không gửi được Telegram: ${y.error}`)},className:"rounded-lg bg-sky-500 hover:bg-sky-600 px-3 py-1.5 font-bold text-white transition-colors",children:"Gửi Đơn Mẫu sang Telegram để Test Nút Duyệt"})]}),n.jsxs("p",{className:"text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed",children:[n.jsx("strong",{children:"Quy trình kiểm soát & duyệt đơn bằng Bot Telegram:"})," Khi có đơn mới, Bot tự gửi kèm nút bấm trực tiếp trên Telegram:"," ",n.jsx("span",{className:"font-mono text-sky-400",children:"[Xác nhận Đã nhận tiền] · [Đang chuẩn bị] · [Đã đóng gói] · [Đã gửi hàng] · [Đang giao] · [Hoàn thành] · [Hủy đơn]"}),". Bạn cũng có thể nhắn lệnh ",n.jsx("code",{className:"font-mono text-amber-400",children:"/don"})," hoặc"," ",n.jsx("code",{className:"font-mono text-amber-400",children:"/kho"})," cho Bot để kiểm tra đơn chờ và tồn kho bất cứ lúc nào."]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Link API Kiểm tra Tiền về tự động (Google Apps Script / SePay Endpoint)"}),n.jsx("input",{type:"text",value:e.profile.paymentCheckUrl??"",onChange:y=>t(b=>({...b,profile:{...b.profile,paymentCheckUrl:y.target.value}})),placeholder:"/api/cms/payment-check hoặc https://script.google.com/macros/s/.../exec",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono"}),n.jsxs("div",{className:"mt-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 space-y-2",children:[n.jsxs("div",{className:"flex flex-wrap gap-2",children:[n.jsx("button",{type:"button",onClick:()=>{t(y=>({...y,profile:{...y.profile,paymentCheckUrl:"/api/cms/payment-check"}})),T("Đã gắn API kiểm tra tiền về nội bộ (/api/cms/payment-check) + Bot Telegram.")},className:"rounded-md border border-sky-500/40 bg-sky-500/15 hover:bg-sky-500/25 px-2.5 py-1.5 text-[11px] font-bold text-sky-700 dark:text-sky-300 transition-colors",children:"Dùng API nội bộ + Bot Telegram"}),n.jsx("button",{type:"button",onClick:async()=>{await Af("ALL_TEST"),T("Đã kích hoạt tín hiệu giả lập tiền về MB Bank — mở giỏ hàng chọn Chuyển khoản QR để test tự nhảy đơn.")},className:"rounded-md bg-emerald-600 hover:bg-emerald-500 px-2.5 py-1.5 text-[11px] font-bold text-white transition-colors",children:"Giả lập giao dịch MB Bank (Test QR)"}),n.jsx("button",{type:"button",onClick:async()=>{const y=ue=>ue.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r?\n/g,""),b=y((e.profile.telegramBotToken||"").trim()),H=y((e.profile.telegramChatId||"8516660009").trim()),ae=y((e.profile.bankAccountNo||"0789044703").trim()),z=Zf.replace(/var TELEGRAM_BOT_TOKEN = ".*?";/,()=>`var TELEGRAM_BOT_TOKEN = "${b}";`).replace(/var TELEGRAM_CHAT_ID = ".*?";/,()=>`var TELEGRAM_CHAT_ID = "${H}";`).replace(/var BANK_ACCOUNT = ".*?";/,()=>`var BANK_ACCOUNT = "${ae}";`);try{await navigator.clipboard.writeText(z),T(`Đã sao chép code Google Apps Script (gắn sẵn ID ${H}). Mở script.google.com để Deploy lấy URL /exec.`)}catch{A("Trình duyệt chặn Clipboard — hãy mở file scripts/google-apps-script-sepay.gs để copy.")}},className:"rounded-md border border-amber-500/40 bg-amber-500/15 hover:bg-amber-500/25 px-2.5 py-1.5 text-[11px] font-bold text-amber-700 dark:text-amber-300 transition-colors",children:"Sao chép Google Apps Script (ID 8516660009)"})]}),n.jsxs("p",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed",children:["Hỗ trợ 3 chế độ đối soát tự động: (1) Endpoint nội bộ"," ",n.jsx("code",{className:"font-mono text-sky-400",children:"/api/cms/payment-check"})," khi chạy máy shop, (2) Nhắn/chuyển tiếp mã ",n.jsx("code",{className:"font-mono text-sky-400",children:"TBXxxxxxx"})," vào Bot Telegram, hoặc (3) Deploy file ",n.jsx("code",{className:"font-mono text-amber-400",children:"scripts/google-apps-script-sepay.gs"})," gắn với SePay.vn chạy 24/7 trên Web Online."]})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Webhook URL Lưu đơn lên Google Sheets 24/7 (tùy chọn)"}),n.jsx("input",{type:"text",value:e.profile.orderWebhookUrl??"",onChange:y=>t(b=>({...b,profile:{...b.profile,orderWebhookUrl:y.target.value}})),placeholder:"Tùy chọn: https://script.google.com/macros/s/.../exec",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono"})]})]}),n.jsxs("div",{className:"lg:col-span-4 flex flex-col items-center rounded-xl border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-4 space-y-2 text-center",children:[n.jsx("span",{className:"font-mono text-[11px] font-bold text-sky-500",children:"MẪU MÃ VIETQR ĐỘNG (490.000₫)"}),Ua(e.profile,49e4,"TBX123456")?n.jsx("div",{className:"rounded-lg bg-white p-2 border border-slate-200",children:n.jsx("img",{src:Ua(e.profile,49e4,"TBX123456"),alt:"VietQR Preview",className:"h-40 w-40 object-contain"})}):n.jsx("div",{className:"h-40 w-40 rounded-lg border border-dashed flex items-center justify-center text-xs text-slate-400",children:"Nhập Mã Ngân hàng & STK"}),n.jsxs("div",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:["Mỗi đơn hàng tự sinh mã riêng dạng ",n.jsx("strong",{className:"font-mono text-sky-400",children:"TBXxxxxxx"})," để đối soát không nhầm đơn."]})]})]})]}),(()=>{const y=e.profile.buyerEmailSenderName||`${e.profile.name} — ${e.profile.brandName}`,b=e.profile.buyerEmailFooterNote||`Cần hỗ trợ sơ đồ đấu nối, tập lệnh điều khiển hoặc bảo hành kỹ thuật, vui lòng nhắn trực tiếp Zalo ${e.profile.phone}.`,H={pending:"Chờ duyệt (Tiếp nhận đơn mới)",payment_confirmed:"Đã xác nhận tiền QR",preparing:"Đang chuẩn bị hàng",packed:"Đã đóng gói",dispatched:"Đã gửi vận chuyển",shipping:"Đang giao hàng",completed:"Hoàn thành & Bảo hành",cancelled:"Đã hủy đơn"},ae=D==="payment_confirmed"||D==="preparing"?1:D==="packed"||D==="dispatched"?2:D==="shipping"?3:D==="completed"?4:0;return n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-6 space-y-5",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-[#1E325C] pb-3",children:[n.jsx("h2",{className:"text-lg font-bold text-slate-900 dark:text-white",children:"6. Thiết kế & Kiểm soát Tự động Gửi Gmail cho Khách hàng"}),n.jsx("span",{className:`font-mono text-xs font-semibold ${e.profile.buyerEmailEnabled!==!1?"text-emerald-500":"text-slate-400"}`,children:e.profile.buyerEmailEnabled!==!1?"Đang bật gửi Gmail tự động":"Đang tạm tắt"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-12 items-start",children:[n.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[n.jsxs("label",{className:"flex items-start gap-2.5 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-3 text-xs font-semibold cursor-pointer",children:[n.jsx("input",{type:"checkbox",checked:e.profile.buyerEmailEnabled!==!1,onChange:z=>t(ue=>({...ue,profile:{...ue.profile,buyerEmailEnabled:z.target.checked}})),className:"mt-0.5 h-4 w-4 accent-sky-500 shrink-0"}),n.jsx("span",{className:"text-slate-800 dark:text-slate-200 leading-relaxed",children:"Tự động gửi Gmail cho khách khi Shop duyệt đơn COD, xác nhận đã nhận tiền QR, đóng gói, giao hàng & hoàn thành (Không kèm mã QR)"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Tên thương hiệu gửi thư (Sender Name)"}),n.jsx("input",{type:"text",value:e.profile.buyerEmailSenderName??"",onChange:z=>t(ue=>({...ue,profile:{...ue.profile,buyerEmailSenderName:z.target.value}})),placeholder:"TeeBi & Robot — TBX Electrics",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Email nhận phản hồi (Reply-To)"}),n.jsx("input",{type:"email",value:e.profile.buyerEmailReplyTo??"",onChange:z=>t(ue=>({...ue,profile:{...ue.profile,buyerEmailReplyTo:z.target.value}})),placeholder:"tranbach9805@gmail.com",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs font-mono"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Lời nhắn hỗ trợ kỹ thuật / bảo hành cuối thư"}),n.jsx("textarea",{rows:2,value:e.profile.buyerEmailFooterNote??"",onChange:z=>t(ue=>({...ue,profile:{...ue.profile,buyerEmailFooterNote:z.target.value}})),placeholder:"Cần hỗ trợ sơ đồ đấu nối, tập lệnh điều khiển hoặc bảo hành kỹ thuật...",className:"w-full rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-xs"})]}),n.jsxs("div",{className:"rounded-lg border border-sky-500/30 bg-sky-500/5 p-4 space-y-3",children:[n.jsx("div",{className:"text-xs font-bold text-sky-700 dark:text-sky-300",children:"Gửi Thử Gmail Mẫu Trực Tiếp (Không lưu rác vào Sheet DonHang)"}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Gmail nhận thư test"}),n.jsx("input",{type:"email",value:M,onChange:z=>$(z.target.value),placeholder:"tenban@gmail.com",className:"w-full rounded-md border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2.5 py-1.5 text-xs font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-semibold mb-1 text-slate-600 dark:text-slate-300",children:"Trạng thái mẫu muốn test"}),n.jsxs("select",{value:D,onChange:z=>U(z.target.value),className:"w-full rounded-md border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] px-2.5 py-1.5 text-xs",children:[n.jsx("option",{value:"payment_confirmed",children:"Đơn CK: Đã duyệt nhận tiền QR"}),n.jsx("option",{value:"preparing",children:"Đơn COD / CK: Đã duyệt đơn & Đang chuẩn bị"}),n.jsx("option",{value:"packed",children:"Đã đóng gói"}),n.jsx("option",{value:"dispatched",children:"Đã gửi vận chuyển"}),n.jsx("option",{value:"shipping",children:"Đang giao hàng"}),n.jsx("option",{value:"completed",children:"Hoàn thành & Bảo hành"}),n.jsx("option",{value:"cancelled",children:"Hủy đơn"})]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsx("span",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:"Lưu ý: Hãy đảm bảo đã dán code mới nhất vào Mã.gs, bấm Chạy 1 lần và Deploy phiên bản mới."}),n.jsx("button",{type:"button",disabled:J,onClick:async()=>{se(!0);try{const z=await Df(e.profile,M,D);z.ok?T(`Đã gửi lệnh phát Gmail mẫu (${H[D]}) tới ${M}! Hãy kiểm tra Hộp thư đến / Thư rác.`):A(z.error||"Không gửi được Gmail test.")}finally{se(!1)}},className:"rounded-md bg-sky-600 hover:bg-sky-500 px-3.5 py-2 text-xs font-bold text-white disabled:opacity-60 transition-colors",children:J?"Đang gửi...":"Gửi Gmail Mẫu Thử Ngay"})]})]})]}),n.jsxs("div",{className:"lg:col-span-5 rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-100 dark:bg-[#080D1A] p-3 space-y-2",children:[n.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400",children:[n.jsx("span",{children:"XEM TRƯỚC MẪU GMAIL KHÁCH NHẬN"}),n.jsx("span",{children:"#DH-TEST-GMAIL"})]}),n.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white text-slate-800 overflow-hidden shadow-sm",children:[n.jsxs("div",{className:"bg-[#0B1324] px-4 py-3 text-white",children:[n.jsx("div",{className:"text-[10px] font-bold uppercase tracking-wider text-sky-400",children:y}),n.jsx("div",{className:"text-sm font-bold mt-0.5",children:"Thông báo Đơn hàng #DH-TEST-GMAIL"})]}),n.jsxs("div",{className:"p-4 space-y-3 text-xs leading-relaxed",children:[n.jsxs("p",{children:["Xin chào ",n.jsx("strong",{children:"Khách Hàng Test"})," — ",H[D],"."]}),D==="cancelled"?n.jsx("div",{className:"rounded border border-rose-200 bg-rose-50 px-3 py-2 text-center font-bold text-rose-700",children:"Đơn hàng đã bị hủy — Liên hệ Shop nếu cần đặt lại"}):n.jsx("div",{className:"grid grid-cols-5 gap-1",children:["1. Nhận","2. Soạn","3. Đóng","4. Giao","5. Xong"].map((z,ue)=>n.jsx("div",{className:`rounded py-1.5 text-center text-[10px] font-bold ${ue<=ae?"bg-sky-600 text-white":"bg-slate-200 text-slate-500"}`,children:z},z))}),n.jsxs("div",{className:"rounded border border-slate-200 bg-slate-50 p-2.5 space-y-1 text-[11px]",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Trạng thái:"})," ",n.jsx("span",{className:"font-bold text-sky-700",children:H[D]})]}),n.jsxs("div",{className:"flex justify-between border-t border-slate-200 pt-1 mt-1",children:[n.jsx("span",{children:"PIDSM-V2.2 × 1"}),n.jsx("strong",{children:"490.000 đ"})]})]}),n.jsx("div",{className:"border-t border-slate-200 pt-2 text-[11px] text-slate-500",children:b})]})]})]})]})]})})()]}),i==="services"&&n.jsxs("div",{className:"space-y-5 max-w-5xl",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white",children:"Quản lý Gói Hỗ trợ Đồ án Kỹ thuật & Nghiên cứu Khoa học (NCKH)"}),n.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Các gói này hiển thị trong mục Hỗ trợ Đồ án & NCKH trên trang chủ."})]}),n.jsxs("button",{type:"button",onClick:Q,className:"inline-flex items-center gap-1 rounded-lg bg-sky-500 hover:bg-sky-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors",children:[n.jsx(Yt,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Thêm gói hỗ trợ"})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-2",children:e.services.map((y,b)=>n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-white dark:bg-[#0B1324] p-5 space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-slate-200 dark:border-[#1E325C] pb-2",children:[n.jsxs("span",{className:"font-mono text-xs font-bold text-sky-500",children:["Gói #",b+1]}),n.jsx("button",{type:"button",onClick:()=>t(H=>({...H,services:H.services.filter((ae,z)=>z!==b)})),className:"text-xs font-semibold text-rose-500 hover:underline",children:"Xóa gói này"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Nhãn nhỏ (Badge VI)"}),n.jsx("input",{type:"text",value:y.badge.vi,onChange:H=>t(ae=>{const z=[...ae.services];return z[b]={...z[b],badge:{...z[b].badge,vi:H.target.value}},{...ae,services:z}}),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Tên dịch vụ (VI)"}),n.jsx("input",{type:"text",value:y.title.vi,onChange:H=>t(ae=>{const z=[...ae.services];return z[b]={...z[b],title:{...z[b].title,vi:H.target.value}},{...ae,services:z}}),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Mô tả dịch vụ (VI)"}),n.jsx("textarea",{rows:2,value:y.description.vi,onChange:H=>t(ae=>{const z=[...ae.services];return z[b]={...z[b],description:{...z[b].description,vi:H.target.value}},{...ae,services:z}}),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Hạng mục bàn giao (Mỗi dòng 1 ý):"}),n.jsx("textarea",{rows:3,value:y.deliverables.vi.join(`
`),onChange:H=>t(ae=>{const z=[...ae.services];return z[b]={...z[b],deliverables:{...z[b].deliverables,vi:H.target.value.split(`
`).filter(ue=>ue.trim()!=="")}},{...ae,services:z}}),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Thời gian"}),n.jsx("input",{type:"text",value:y.turnaround.vi,onChange:H=>t(ae=>{const z=[...ae.services];return z[b]={...z[b],turnaround:{...z[b].turnaround,vi:H.target.value}},{...ae,services:z}}),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Ghi chú giá"}),n.jsx("input",{type:"text",value:y.pricingNote.vi,onChange:H=>t(ae=>{const z=[...ae.services];return z[b]={...z[b],pricingNote:{...z[b].pricingNote,vi:H.target.value}},{...ae,services:z}}),className:"w-full rounded-md border border-[#D8D0C0] dark:border-[#2B374D] bg-[#FBF9F5] dark:bg-[#141B29] px-3 py-1.5 text-sm"})]})]})]},y.id))})]})]})]})};function Yc(){return`TBX${Math.floor(1e5+Math.random()*9e5)}`}const Fx=({open:e,lang:t,profile:r,cart:a,onClose:s,onUpdateQty:i,onRemoveItem:o,onSubmitOrder:l})=>{var pe,ye;const[d,u]=E.useState(""),[g,p]=E.useState(""),[w,N]=E.useState(""),[c,k]=E.useState(""),[C,h]=E.useState("cod"),[m,S]=E.useState(()=>Yc()),[P,O]=E.useState(!1),[F,M]=E.useState(""),[$,D]=E.useState(""),[U,J]=E.useState(!1),[se,re]=E.useState(!1),[X,ce]=E.useState(""),[ee,T]=E.useState(null),[A,R]=E.useState(!1),f=E.useRef(!1),L=a.reduce((Y,xe)=>Y+xe.product.price*xe.quantity,0),v=a.some(Y=>Y.product.price<=0),x=Gf(d),j=Wr(g),G=Wa(w),V=Ad(c),W=x.valid&&j.valid&&G.valid&&V.valid,_=Ua(r,L,m),Q=async Y=>{if(!(a.length===0||f.current)){f.current=!0,J(!0);try{const xe=await l({customerName:x.normalized||d.trim(),customerPhone:j.normalized||g.trim(),customerEmail:G.normalized||w.trim(),shippingAddress:V.normalized||c.trim(),paymentMethod:C,transferCode:C==="transfer"?m:void 0,paymentStatus:Y,note:F.trim()});T(xe),u(""),p(""),N(""),k(""),M(""),ce(""),S(Yc())}finally{f.current=!1,J(!1)}}};if(E.useEffect(()=>{var be,me;const Y=!!((be=r.paymentCheckUrl)!=null&&be.trim()||(me=r.telegramBotToken)!=null&&me.trim());if(!e||ee||a.length===0||C!=="transfer"||!Y)return;let xe=!1;const ie=setInterval(async()=>{if(xe||f.current)return;const fe=await fi(r,m,L);xe||fe.verified&&(W?(ce("✓ Ngân hàng đã báo nhận tiền! Đang tự động lên đơn..."),await Q("qr_verified")):ce("✓ Đã nhận tiền thành công! Hãy điền Họ tên, SĐT, Địa chỉ rồi bấm xác nhận để hoàn tất đơn."))},4e3);return()=>{xe=!0,clearInterval(ie)}},[e,ee,a.length,C,r.paymentCheckUrl,r.telegramBotToken,r.telegramChatId,m,L,W]),!e)return null;const te=Y=>{const xe=Y.items.map((ie,be)=>`${be+1}. ${ie.name} (${ie.code}) x ${ie.quantity} ${ie.unit} — ${ie.unitPrice>0?ne(ie.unitPrice*ie.quantity,t):"Báo giá"}`),q=Y.paymentMethod==="cod"?"Thanh toán khi nhận hàng (COD)":Y.paymentStatus==="qr_verified"?`Đã thanh toán VietQR — Đã xác nhận tự động (${Y.transferCode||""})`:`Chuyển khoản VietQR (${Y.transferCode||""})`;return[`ĐƠN ĐẶT HÀNG MỚI #${Y.id}`,`Khách hàng: ${Y.customerName}`,`SĐT/Zalo: ${Y.customerPhone}`,Y.customerEmail?`Gmail nhận thông báo: ${Y.customerEmail}`:"",`Địa chỉ: ${Y.shippingAddress}`,`Thanh toán: ${q}`,Y.note?`Ghi chú: ${Y.note}`:"","--- Chi tiết mặt hàng ---",...xe,`Tổng cộng: ${Y.totalAmount>0?ne(Y.totalAmount,t):"Báo giá theo thỏa thuận"}`].filter(Boolean).join(`
`)},Z=async Y=>{if(Y.preventDefault(),a.length!==0){if(!x.valid||!j.valid||!G.valid||!V.valid){D(!x.valid&&x.error||!j.valid&&j.error||!G.valid&&G.error||!V.valid&&V.error||"Thông tin nhận hàng chưa hợp lệ.");return}if(D(""),C==="cod"){await Q("cod_unpaid");return}re(!0);try{const xe=await fi(r,m,L);await Q(xe.verified?"qr_verified":"qr_reported")}finally{re(!1)}}},ke=()=>{navigator.clipboard.writeText(m),O(!0),setTimeout(()=>O(!1),1800)},I=()=>{ee&&(navigator.clipboard.writeText(te(ee)),R(!0),setTimeout(()=>R(!1),2e3))},K=()=>{T(null),s()};return n.jsx("div",{className:"fixed inset-0 z-50 flex justify-end bg-[#0B1220]/60 backdrop-blur-sm animate-backdrop no-print",onClick:K,children:n.jsxs("div",{className:"flex h-full w-full max-w-lg flex-col bg-white dark:bg-[#0B1324] border-l border-slate-200 dark:border-[#1E325C] shadow-2xl",onClick:Y=>Y.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#080D1A] px-5 py-4",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(ci,{className:"h-5 w-5 text-sky-500"}),n.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:t==="vi"?"Giỏ hàng & Thanh toán":"Cart & Checkout"})]}),n.jsx("button",{type:"button",onClick:K,"aria-label":"Đóng",className:"rounded-md border border-slate-200 dark:border-[#1E325C] p-1.5 text-slate-500 hover:border-sky-500",children:n.jsx(Gn,{className:"h-4 w-4"})})]}),n.jsx("div",{className:"flex-1 overflow-y-auto p-5 space-y-5",children:ee?n.jsxs("div",{className:"rounded-xl border border-emerald-400/50 dark:border-emerald-700 bg-white dark:bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-start gap-3 text-emerald-700 dark:text-emerald-400",children:[n.jsx(rn,{className:"h-6 w-6 shrink-0 mt-0.5"}),n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-300",children:[n.jsx(yd,{className:"h-3 w-3"}),n.jsx("span",{children:"ĐÃ LÊN ĐƠN TỰ ĐỘNG & TRỪ KHO"})]}),n.jsx("h4",{className:"text-base font-bold text-slate-900 dark:text-white",children:t==="vi"?`Đơn hàng #${ee.id}`:`Order #${ee.id}`}),n.jsx("div",{className:"text-xs font-semibold",children:ee.paymentStatus==="qr_verified"?n.jsxs("span",{className:"text-emerald-500",children:["✓ Ngân hàng đã xác nhận nhận tiền (",ee.transferCode,")"]}):ee.paymentMethod==="transfer"?n.jsxs("span",{className:"text-sky-500",children:["✓ Đã ghi nhận chuyển khoản QR (Mã ",ee.transferCode,")"]}):n.jsx("span",{className:"text-slate-500 dark:text-slate-300",children:"Thanh toán COD khi nhận hàng"})}),ee.customerEmail&&n.jsx("div",{className:"text-xs text-sky-600 dark:text-sky-400",children:ee.paymentStatus==="qr_verified"?n.jsxs(n.Fragment,{children:["Đã gửi email xác nhận đơn tới:"," ",n.jsx("strong",{className:"font-mono",children:ee.customerEmail})]}):n.jsxs(n.Fragment,{children:["Email xác nhận & tiến độ đơn sẽ tự động gửi tới"," ",n.jsx("strong",{className:"font-mono",children:ee.customerEmail})," ngay khi Shop duyệt đơn."]})})]})]}),n.jsx("pre",{className:"whitespace-pre-wrap rounded-lg border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-3 font-mono text-xs text-slate-800 dark:text-slate-200",children:te(ee)}),n.jsxs("div",{className:"flex flex-wrap gap-2",children:[n.jsxs("button",{type:"button",onClick:I,className:"inline-flex items-center gap-1.5 rounded-md bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 px-3.5 py-2 text-xs font-semibold text-white transition-colors",children:[A?n.jsx(Kt,{className:"h-3.5 w-3.5"}):n.jsx(xn,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:A?"Đã chép phiếu đơn!":"Sao chép đơn hàng"})]}),n.jsxs("a",{href:r.zaloLink,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1.5 rounded-md border border-sky-500/40 dark:border-sky-400/50 px-3.5 py-2 text-xs font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-colors",children:[n.jsx("span",{children:"Gửi qua Zalo"}),n.jsx(Mt,{className:"h-3 w-3"})]}),n.jsxs("a",{href:`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(r.email)}&su=${encodeURIComponent(`[Đơn hàng #${ee.id}] ${ee.customerName}`)}&body=${encodeURIComponent(te(ee))}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-[#1E325C] px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-sky-500 transition-colors",children:[n.jsx(_a,{className:"h-3 w-3"}),n.jsx("span",{children:"Gửi Email"})]})]})]}):a.length===0?n.jsxs("div",{className:"rounded-xl border border-dashed border-slate-200 dark:border-[#1E325C] p-10 text-center space-y-2",children:[n.jsx(ci,{className:"mx-auto h-8 w-8 text-sky-500 opacity-75"}),n.jsx("div",{className:"text-base font-semibold text-slate-900 dark:text-white",children:t==="vi"?"Giỏ hàng đang trống":"Your cart is empty"}),n.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:t==="vi"?"Hãy chọn các bo mạch hoặc linh kiện cần mua từ danh mục sản phẩm.":"Select boards or components from the product catalog."})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"space-y-3",children:a.map(({product:Y,quantity:xe})=>n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] p-3.5 flex items-start justify-between gap-3",children:[n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsx("div",{className:"font-mono text-xs font-bold text-sky-600 dark:text-sky-400",children:Y.code}),n.jsx("div",{className:"text-sm font-bold text-slate-900 dark:text-white",children:Y.name[t]}),n.jsxs("div",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:[ne(Y.price,t)," / ",Y.unit]}),n.jsxs("div",{className:"mt-2.5 flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>i(Y.id,-1),className:"rounded border border-slate-300 dark:border-[#243B6B] p-1 hover:border-sky-400",children:n.jsx(q0,{className:"h-3 w-3"})}),n.jsx("span",{className:"w-7 text-center font-mono text-sm font-bold",children:xe}),n.jsx("button",{type:"button",onClick:()=>i(Y.id,1),disabled:xe>=Y.stock,className:"rounded border border-slate-300 dark:border-[#243B6B] p-1 hover:border-sky-400 disabled:opacity-40",children:n.jsx(Yt,{className:"h-3 w-3"})}),n.jsxs("span",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:["(Kho còn ",Y.stock,")"]})]})]}),n.jsxs("div",{className:"text-right space-y-2 shrink-0",children:[n.jsx("div",{className:"font-mono text-sm font-bold text-amber-600 dark:text-amber-400",children:Y.price>0?ne(Y.price*xe,t):"Báo giá"}),n.jsxs("button",{type:"button",onClick:()=>o(Y.id),className:"inline-flex items-center gap-1 text-xs text-rose-500 hover:underline",children:[n.jsx(an,{className:"h-3 w-3"}),n.jsx("span",{children:"Xóa"})]})]})]},Y.id))}),n.jsxs("div",{className:"rounded-xl border border-slate-200 dark:border-[#1E325C] bg-slate-100 dark:bg-[#080D1A] p-4 flex items-center justify-between",children:[n.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:t==="vi"?"Tổng tiền thanh toán:":"Total Amount:"}),n.jsxs("span",{className:"font-mono text-xl font-bold text-sky-600 dark:text-sky-400",children:[ne(L,t),v&&L>0?" + món báo giá":""]})]}),n.jsxs("form",{onSubmit:Z,className:"space-y-3.5 border-t border-slate-200 dark:border-[#1E325C] pt-4",children:[n.jsx("h4",{className:"text-base font-bold text-slate-900 dark:text-white",children:t==="vi"?"Thông tin nhận hàng":"Shipping Information"}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Họ tên người nhận *"}),n.jsx("input",{type:"text",required:!0,value:d,onChange:Y=>{u(Y.target.value),D("")},placeholder:"Nguyễn Văn A",className:"w-full rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"SĐT / Zalo *"}),n.jsx("input",{type:"tel",inputMode:"numeric",maxLength:10,required:!0,value:g,onChange:Y=>{p(Y.target.value.replace(/\D/g,"").slice(0,10)),D("")},placeholder:"0912345678",className:"w-full rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm font-mono"}),g.length>0&&n.jsx("p",{className:`mt-1 text-[11px] font-medium ${j.valid?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`,children:j.valid?"SĐT hợp lệ":"SĐT lỗi"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Gmail nhận thông báo đơn *"}),n.jsx("input",{type:"email",required:!0,value:w,onChange:Y=>{N(Y.target.value),D("")},placeholder:"tenban@gmail.com",className:"w-full rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"}),w.trim().length>0&&n.jsx("p",{className:`mt-1 text-[11px] font-medium ${G.valid?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`,children:G.valid?"Email hợp lệ":"Email lỗi"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Địa chỉ giao hàng *"}),n.jsx("input",{type:"text",required:!0,value:c,onChange:Y=>{k(Y.target.value),D("")},placeholder:"Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành",className:"w-full rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"}),c.trim().length>0&&!V.valid&&n.jsx("p",{className:"mt-1 text-[11px] font-medium text-rose-600 dark:text-rose-400",children:V.error})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Hình thức thanh toán"}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[n.jsx("button",{type:"button",onClick:()=>h("cod"),className:`rounded-lg border py-2.5 font-semibold transition-colors ${C==="cod"?"border-sky-500 bg-sky-500 text-white":"border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33]"}`,children:"Nhận hàng trả tiền (COD)"}),n.jsxs("button",{type:"button",onClick:()=>h("transfer"),className:`inline-flex items-center justify-center gap-1 rounded-lg border py-2.5 font-semibold transition-colors ${C==="transfer"?"border-sky-500 bg-sky-500 text-white":"border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33]"}`,children:[n.jsx(bd,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Chuyển khoản QR tự động"})]})]}),C==="transfer"&&n.jsxs("div",{className:"mt-3 rounded-xl border border-sky-500/40 bg-slate-50 dark:bg-[#080D1A] p-4 space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 text-xs",children:[n.jsx("span",{className:"font-mono font-bold text-sky-600 dark:text-sky-400",children:"QUÉT MÃ VIETQR NAPAS 24/7"}),n.jsx("span",{className:"rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-300",children:"Tự điền số tiền & nội dung"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-12 gap-3 items-center",children:[n.jsx("div",{className:"sm:col-span-5 flex justify-center",children:_?n.jsx("div",{className:"rounded-lg bg-white p-2 border border-slate-200 shadow-sm",children:n.jsx("img",{src:_,alt:`VietQR ${m}`,className:"h-36 w-36 object-contain"})}):n.jsx("div",{className:"h-36 w-36 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-[11px] text-slate-400 text-center p-2",children:"Chưa cài đặt số tài khoản VietQR"})}),n.jsxs("div",{className:"sm:col-span-7 space-y-1.5 text-xs",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:"Ngân hàng:"})," ",n.jsx("strong",{className:"font-mono text-slate-900 dark:text-white",children:r.bankId||"MB"})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:"Số tài khoản:"})," ",n.jsx("strong",{className:"font-mono text-slate-900 dark:text-white",children:r.bankAccountNo||r.phone})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:"Chủ TK:"})," ",n.jsx("strong",{className:"text-slate-900 dark:text-white",children:r.bankAccountName||r.name})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:"Số tiền:"})," ",n.jsx("strong",{className:"font-mono text-amber-600 dark:text-amber-400",children:ne(L,t)})]}),n.jsxs("div",{className:"pt-1 flex items-center justify-between gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 px-2.5 py-1.5",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] text-slate-500 dark:text-slate-400",children:"Nội dung CK bắt buộc:"}),n.jsx("div",{className:"font-mono text-xs font-extrabold text-sky-600 dark:text-sky-300",children:m})]}),n.jsxs("button",{type:"button",onClick:ke,className:"inline-flex items-center gap-1 rounded bg-sky-500 px-2 py-1 text-[10px] font-bold text-white",children:[P?n.jsx(Kt,{className:"h-3 w-3"}):n.jsx(xn,{className:"h-3 w-3"}),n.jsx("span",{children:P?"Đã chép":"Chép mã"})]})]})]})]}),(pe=r.paymentCheckUrl)!=null&&pe.trim()||(ye=r.telegramBotToken)!=null&&ye.trim()?n.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-300",children:[n.jsx(ym,{className:"h-3.5 w-3.5 animate-spin shrink-0"}),n.jsx("span",{children:X||"Đang tự động chờ tín hiệu nhận tiền từ ngân hàng để tự lên đơn..."})]}):n.jsxs("p",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:["Sau khi quét mã chuyển khoản kèm mã ",n.jsx("strong",{children:m}),", bấm nút bên dưới để tự động tạo đơn & báo về Shop."]})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold mb-1",children:"Ghi chú thêm (nếu có)"}),n.jsx("input",{type:"text",value:F,onChange:Y=>M(Y.target.value),placeholder:"Ví dụ: Giao giờ hành chính, chọn trục 10mm...",className:"w-full rounded-lg border border-slate-300 dark:border-[#1E325C] bg-slate-50 dark:bg-[#111C33] px-3 py-2 text-sm"})]}),$&&n.jsx("div",{className:"rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-600 dark:text-rose-400",children:$}),n.jsx("button",{type:"submit",disabled:U||se,className:"w-full rounded-lg bg-sky-500 hover:bg-sky-600 py-3 text-sm font-bold text-white shadow-sm disabled:opacity-60 transition-colors",children:U||se?"Đang kiểm tra & lên đơn tự động...":C==="transfer"?"Tôi đã chuyển khoản — Xác nhận & Lên đơn ngay":t==="vi"?"Xác nhận Đặt hàng COD":"Place COD Order"})]})]})})]})})},Lx=101010256,Ox=33639248,Vx=67324752;function _x(e){const t=e.replace(/\\/g,"/").trim();if(!t||t.endsWith("/"))return!0;const r=t.toLowerCase();if(r.startsWith("__macosx/")||r.includes("/__macosx/"))return!0;const a=r.split("/").pop()||"";return a?a===".ds_store"||a.startsWith("._")||a==="thumbs.db"||a==="desktop.ini":!0}async function Gx(e){if(typeof DecompressionStream>"u")throw new Error("Browser does not support DecompressionStream");const t=new DecompressionStream("deflate-raw"),r=new Response(t.readable).arrayBuffer(),a=t.writable.getWriter(),s=new Uint8Array(e.byteLength);s.set(e);const i=a.write(s).then(()=>a.close()),[,o]=await Promise.all([i,r]);return o}async function Hx(e,t,r=20){var N;const a=e.byteLength;if(a<22)throw new Error("ZIP file too small");const s=new DataView(e),i=Math.max(0,a-65557);let o=-1;for(let c=a-22;c>=i;c--)if(s.getUint32(c,!0)===Lx){o=c;break}if(o<0)throw new Error("EOCD signature not found");const l=s.getUint16(o+10,!0),d=s.getUint32(o+12,!0),u=s.getUint32(o+16,!0);if(l===65535||u===4294967295||u+d>a)throw new Error("ZIP64 or out-of-bounds Central Directory");const g=new TextDecoder("utf-8"),p=[];let w=u;for(let c=0;c<l;c++){if(w+46>a||s.getUint32(w,!0)!==Ox)throw new Error("Invalid Central Directory entry");const k=s.getUint16(w+8,!0),C=s.getUint16(w+10,!0),h=s.getUint32(w+20,!0),m=s.getUint32(w+24,!0),S=s.getUint16(w+28,!0),P=s.getUint16(w+30,!0),O=s.getUint16(w+32,!0),F=s.getUint32(w+42,!0);if(w+46+S>a)throw new Error("Corrupt ZIP filename length");const M=g.decode(new Uint8Array(e,w+46,S));if(w+=46+S+P+O,k&1)throw new Error("Encrypted ZIP entry is not supported");if(_x(M))continue;const $=((N=M.replace(/\\/g,"/").split("/").pop())==null?void 0:N.trim())||"";if(!$.toLowerCase().endsWith(".stl"))throw new Error(`Unsupported file inside ZIP: ${$}`);if(m>t)throw new Error(`STL inside ZIP exceeds limit: ${$}`);if(p.length>=r)throw new Error("Too many STL files inside ZIP");if(F+30>a||s.getUint32(F,!0)!==Vx)throw new Error("Invalid local file header inside ZIP");const D=s.getUint16(F+26,!0),U=s.getUint16(F+28,!0),J=F+30+D+U;if(J+h>a)throw new Error("Compressed entry out of bounds");const se=new Uint8Array(e,J,h);let re;if(C===0)re=se.slice().buffer;else if(C===8)re=await Gx(se);else throw new Error(`Unsupported ZIP compression method: ${C}`);if(re.byteLength<84||re.byteLength>t)throw new Error(`Invalid extracted STL size: ${$}`);p.push({name:$,buffer:re})}if(p.length===0)throw new Error("No STL files found in ZIP");return p}const Nn="Không đọc được file.";function $x(){return`IN3D${Math.floor(1e5+Math.random()*9e5)}`}const Ux=({cmsData:e,onClose:t,onOrderCreated:r})=>{var Dd,Rd,Md,Id,Bd;const a=e.print3dMaterials&&e.print3dMaterials.length>0?e.print3dMaterials:$e,s=e.print3dSetup??it,[i,o]=E.useState(((Dd=a[0])==null?void 0:Dd.name)||"PLA"),[l,d]=E.useState("20%"),[u,g]=E.useState("Đen"),[p,w]=E.useState([]),[N,c]=E.useState(""),[k,C]=E.useState(1),[h,m]=E.useState(null),[S,P]=E.useState(!1),[O,F]=E.useState(""),[M,$]=E.useState(""),[D,U]=E.useState(""),[J,se]=E.useState(()=>Dt(2)),[re,X]=E.useState("delivery"),[ce,ee]=E.useState(""),[T,A]=E.useState("cod"),[R,f]=E.useState(()=>$x()),[L,v]=E.useState(!1),[x,j]=E.useState(""),[G,V]=E.useState(!1),[W,_]=E.useState(!1),[Q,te]=E.useState(""),[Z,ke]=E.useState(!1),[I,K]=E.useState(""),[pe,ye]=E.useState(!0),[Y,xe]=E.useState(!1),[q,ie]=E.useState(""),[be,me]=E.useState(""),[fe,mt]=E.useState(null),B=parseInt(l,10)||20,de={...s,infillPercent:B,supportEnabled:!0};E.useEffect(()=>{if(p.length>0){w(le=>le.map(Ne=>{if(!Ne.stlGeometry)return Ne;try{const De=jr(Ne.stlGeometry,{...de,material:i});return{...Ne,perPartWeightGrams:De.estimatedWeightGrams,dimensions:`${De.sizeX} × ${De.sizeY} × ${De.sizeZ} mm`,printTime:De.estimatedPrintTime,exceedsBuildVolume:De.exceedsBuildVolume}}catch{return Ne}}));return}h&&N.trim()&&ns()},[i,l]);const y=p.reduce((le,Ne)=>le+Ne.quantity,0),b=en(p.reduce((le,Ne)=>le+Ne.perPartWeightGrams*Ne.quantity,0)),H=h&&h.files.length>0?h.files.reduce((le,Ne)=>le+Ne.quantity,0):k,ae=h&&h.files.length>0?en(h.files.reduce((le,Ne)=>le+Ne.perPartWeightGrams*Ne.quantity,0)):0,z=p.length>0,ue=z?Math.max(1,y):H,Ce=z?b:ae,Pe=Dt(0),Ee=Hr(J),Ae=It(a,i,Ce,ue,Ee.surchargePercent),cr=D.trim()?Wa(D):null,Qr=Ad(ce),yn=Ae.totalAmount>0?Math.round(Ae.totalAmount*.3):0,ts=Math.max(0,Ae.totalAmount-yn),qt=T==="cod"?yn:Ae.totalAmount,Pd=qt>0?Ua(e.profile,qt,R):"";E.useEffect(()=>{var Me,Ye;const le=!!((Me=e.profile.paymentCheckUrl)!=null&&Me.trim()||(Ye=e.profile.telegramBotToken)!=null&&Ye.trim());if(fe||qt<=0||G||!le)return;let Ne=!1;const we=setInterval(async()=>{if(Ne)return;const Le=await fi(e.profile,R,qt);Ne||Le.verified&&(V(!0),j(T==="cod"?"✓ Ngân hàng đã xác nhận nhận cọc 30% thành công! Hãy bấm nút bên dưới để hoàn tất gửi file & lên đơn.":"✓ Ngân hàng đã xác nhận nhận tiền 100% thành công! Hãy bấm nút bên dưới để hoàn tất gửi file & lên đơn."))},4e3);return()=>{Ne=!0,clearInterval(we)}},[fe,T,qt,G,e.profile.paymentCheckUrl,e.profile.telegramBotToken,e.profile.telegramChatId,R]);const Ed=p.reduce((le,Ne)=>le+Ne.file.size,0),Xm=p.some(le=>le.exceedsBuildVolume)||!!(h!=null&&h.exceedsBuildVolume)||!!(h!=null&&h.files.some(le=>le.exceedsBuildVolume)),Zm=async le=>{const Ne=Array.from(le.target.files??[]);if(le.target.value="",Ne.length===0)return;me(""),K(""),P(!1),ke(!0),await new Promise(Me=>setTimeout(Me,0));const De=[];let we=!1;try{for(const Me of Ne){if(Me.size>Ka){console.warn("[Print3D] File too large:",Me.name,Me.size),we=!0;continue}const Ye=Me.name.trim(),Le=Ye.toLowerCase();if(Le.endsWith(".zip")){try{const pt=await Me.arrayBuffer(),Wt=await Hx(pt,Ka);for(const Je of Wt){const ze=yl(Je.buffer),ve=jr(ze,{...de,material:i}),on=new File([Je.buffer],Je.name,{type:"model/stl"}),Hi=`${Je.name}-${on.size}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`;De.push({uid:Hi,file:on,quantity:1,stlGeometry:ze,perPartWeightGrams:ve.estimatedWeightGrams,dimensions:`${ve.sizeX} × ${ve.sizeY} × ${ve.sizeZ} mm`,printTime:ve.estimatedPrintTime,exceedsBuildVolume:ve.exceedsBuildVolume,source:"stl"})}}catch(pt){console.warn("[Print3D] ZIP rejected:",Ye,pt),we=!0}continue}if(!Le.endsWith(".stl")){console.warn("[Print3D] Unsupported file rejected:",Ye),we=!0;continue}const sn=`${Ye}-${Me.size}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`;try{const pt=await Me.arrayBuffer(),Wt=yl(pt),Je=jr(Wt,{...de,material:i});De.push({uid:sn,file:Me,quantity:1,stlGeometry:Wt,perPartWeightGrams:Je.estimatedWeightGrams,dimensions:`${Je.sizeX} × ${Je.sizeY} × ${Je.sizeZ} mm`,printTime:Je.estimatedPrintTime,exceedsBuildVolume:Je.exceedsBuildVolume,source:"stl"})}catch(pt){console.warn("[Print3D] STL rejected:",Ye,pt),we=!0}}De.length>0&&(w(Me=>[...Me,...De]),c(""),m(null),P(!1)),we&&(K(Nn),ye(!0))}finally{ke(!1)}},ns=async le=>{var De;const Ne=(le??N).trim();if(!Ne)return K("Vui lòng dán link Google Drive."),!1;ke(!0),K(""),me("");try{const we=await bl(e.profile,a,{fileUrl:Ne,material:i,quantity:k,setup:de});if(!we.ok)return m(null),P(!0),K(Nn),ye(!0),!1;P(!1),w([]);const Me=de.maxBuildX||800,Ye=de.maxBuildY||800,Le=de.maxBuildZ||800,sn=ze=>{var on;const ve=((on=(ze||"").match(/[\d.]+/g))==null?void 0:on.map(Number))??[];return ve.length>=3&&(ve[0]>Me||ve[1]>Ye||ve[2]>Le)},pt=new Map;((h==null?void 0:h.files)??[]).forEach(ze=>pt.set(ze.fileName,ze.quantity));const Wt=we.files&&we.files.length>0?we.files:[{fileName:we.fileName||"drive-model.stl",perPartWeightGrams:we.perPartWeightGrams||0,dimensions:we.dimensions,printTime:we.printTime}],Je=Wt.map(ze=>({fileName:ze.fileName,fileSize:ze.fileSize,perPartWeightGrams:Number(ze.perPartWeightGrams||0),quantity:pt.get(ze.fileName)??(!we.isFolder&&Wt.length===1?k:1),dimensions:ze.dimensions,printTime:ze.printTime,exceedsBuildVolume:sn(ze.dimensions)}));return m({isFolder:!!we.isFolder,folderName:we.folderName,fileName:we.fileName||((De=Je[0])==null?void 0:De.fileName)||"drive-model.stl",perPartWeightGrams:we.perPartWeightGrams||0,dimensions:we.dimensions,printTime:we.printTime,exceedsBuildVolume:sn(we.dimensions),files:Je}),!0}catch{return m(null),P(!0),K(Nn),ye(!0),!1}finally{ke(!1)}};E.useEffect(()=>{const le=N.trim();if(!le||p.length>0||!(/drive\.google\.com\/(?:drive\/(?:u\/\d+\/)?folders\/|file\/d\/|open\?id=|uc\?id=|.*folderview\?)/i.test(le)||/\.(?:stl|zip)(\?|$)/i.test(le)))return;const De=setTimeout(()=>{ns(le)},600);return()=>clearTimeout(De)},[N]);const Ym=async le=>{var Ye;if(le.preventDefault(),!O.trim()){me("Vui lòng nhập họ tên.");return}const Ne=Wr(M);if(!Ne.valid){me(Ne.error||"Số điện thoại phải gồm 10 số, bắt đầu bằng 0.");return}const De=Wa(D);if(!De.valid){me(De.error||"Vui lòng nhập đúng Gmail để hệ thống gửi báo giá tự động.");return}if(p.length===0&&!N.trim()){me("Vui lòng chọn ít nhất 1 file .STL hoặc dán link Google Drive chứa file .STL.");return}if(p.length===0&&N.trim()){if(S){me(Nn);return}if(!h&&!await ns(N.trim())){me(Nn);return}}if(J&&J<Pe){me("Hạn phải giao không được nhỏ hơn ngày hôm nay.");return}if(re==="delivery"&&!Qr.valid){me(Qr.error||"Vui lòng nhập đầy đủ địa chỉ giao hàng.");return}let we="cod_unpaid";if(qt>0)if(G)we="qr_verified";else{_(!0);try{const Le=await fi(e.profile,R,qt);we=Le.verified?"qr_verified":"qr_reported",Le.verified&&V(!0)}finally{_(!1)}}const Me=re==="delivery"?Qr.normalized||ce.trim():((Ye=e.profile.location)==null?void 0:Ye.vi)||"Nhận trực tiếp tại xưởng";me(""),xe(!0);try{const Le=p.length>0?p.map(ve=>`${ve.quantity}× ${ve.file.name}${ve.perPartWeightGrams>0?` (${Number((ve.perPartWeightGrams*ve.quantity).toFixed(1))}g)`:""}`).join(", "):h&&h.files.length>0?h.files.map(ve=>`${ve.quantity}× ${ve.fileName}${ve.perPartWeightGrams>0?` (${Number((ve.perPartWeightGrams*ve.quantity).toFixed(1))}g)`:""}`).join(", "):"",sn=p.length===1?p[0].dimensions:p.length>1?p.filter(ve=>ve.dimensions).map(ve=>`${ve.file.name}: ${ve.dimensions} (×${ve.quantity})`).join(" | "):h&&h.files.length===1?h.files[0].dimensions:h&&h.files.length>1?h.files.filter(ve=>ve.dimensions).map(ve=>`${ve.fileName}: ${ve.dimensions} (×${ve.quantity})`).join(" | "):h==null?void 0:h.dimensions,pt=p.length===1?p[0].printTime:h==null?void 0:h.printTime;let Wt="";const Je=p.filter(ve=>ve.stlGeometry);if(Je.length>0){const ve=[];for(const on of Je){const Hi=jr(on.stlGeometry,{...de,material:i});ve.push(vl("AUTO",`${on.file.name} (x${on.quantity})`,{...de,material:i},Hi))}Wt=ve.join(`

`)}ie("Đang chuẩn bị tải file...");const ze=await wd(e.profile,a,{customerName:O.trim(),customerPhone:Ne.normalized,customerEmail:De.normalized,material:i,infill:l,color:u,weightGrams:Ce,quantity:ue,file:p.length===1?p[0].file:null,multiFiles:p.length>0?p.map(ve=>({file:ve.file,quantity:ve.quantity,perPartWeightGrams:ve.perPartWeightGrams,dimensions:ve.dimensions,printTime:ve.printTime})):void 0,fileSummary:Le,externalFileUrl:N.trim(),deliveryDeadline:J,shippingMethod:re,shippingAddress:Me,paymentMethod:T,transferCode:qt>0?R:void 0,paymentStatus:we,depositAmount:T==="cod"?yn:0,codRemainingAmount:T==="cod"?ts:0,note:Q,dimensions:sn,printTime:pt,gcodeText:Wt,setup:de,autoQuoteEmail:!0,onProgress:ie});if(!ze.ok&&ze.error&&p.length===0){me(Nn);return}r(ze.order),mt(ze.order)}catch(Le){Le instanceof Error&&/file|stl|3mf|gcode|drive/i.test(Le.message)?me(Nn):me("Lỗi gửi đơn In 3D.")}finally{ie(""),xe(!1)}};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-4",children:n.jsxs("div",{className:"flex w-full max-w-2xl max-h-[92vh] flex-col rounded-2xl border border-slate-700 bg-[#0B1324] text-slate-100 shadow-2xl overflow-hidden",children:[n.jsxs("div",{className:"flex shrink-0 items-center justify-between border-b border-[#1E325C] px-5 py-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Va,{className:"h-5 w-5 text-sky-400"}),n.jsx("h3",{className:"font-mono text-sm sm:text-base font-bold",children:"Gửi Nhiều File / Link In 3D — Quét GenCode & Báo Giá Tự Động"})]}),n.jsx("button",{type:"button",onClick:t,className:"rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white",children:n.jsx(Gn,{className:"h-4 w-4"})})]}),n.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto p-5",children:fe?n.jsxs("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-5 space-y-3 text-sm",children:[n.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-base",children:[n.jsx(rn,{className:"h-5 w-5"}),n.jsxs("span",{children:["Đã tiếp nhận đơn In 3D #",fe.id]})]}),n.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["File của bạn đã được gắn mã"," ",n.jsx("code",{className:"font-mono text-sky-300",children:fe.driveFileCode})," và lưu trên Google Drive (",s.printerModel,").",fe.pendingAdminApproval?n.jsxs(n.Fragment,{children:[" ","Đơn đã ghi nhận ở hệ thống ",n.jsx("strong",{children:"Quản lý đơn hàng"})," — sau khi Admin xác nhận tiền chuyển khoản / tiền cọc 30%, đơn sẽ tự động đẩy vào hàng đợi xưởng in (",n.jsx("code",{children:"DonIn3D"}),")."]}):n.jsx(n.Fragment,{children:" Đã chuyển vào hàng đợi xưởng in."})]}),n.jsxs("div",{className:"rounded-lg border border-sky-500/30 bg-[#0B1324] p-3.5 text-xs space-y-1",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Vật liệu & Quy cách:"})," ",n.jsxs("b",{className:"text-white",children:[fe.material," · Infill ",fe.infill," · Auto Support"]})]}),fe.fileSummary&&n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Danh sách file:"})," ",n.jsx("span",{className:"font-mono text-sky-200",children:fe.fileSummary})]}),fe.dimensions&&n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Kích thước:"})," ",n.jsx("span",{className:"font-mono text-sky-300",children:fe.dimensions})]}),n.jsxs("div",{children:[n.jsxs("span",{className:"text-slate-400",children:["Khối lượng tổng (",fe.quantity," chi tiết):"]})," ",n.jsx("b",{className:"font-mono text-white",children:fe.weightGrams>0?`${fe.weightGrams} g`:"Đang chờ xưởng quét"}),fe.printTime?` · Dự kiến in: ${fe.printTime}`:""]}),fe.deliveryLabel&&n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Hạn phải giao:"})," ",n.jsx("b",{className:(fe.rushSurchargePercent??0)>0?"text-amber-300":"text-emerald-300",children:fe.deliveryLabel}),(fe.rushSurchargePercent??0)>0&&(fe.rushFeeAmount??0)>0&&n.jsxs("span",{className:"text-slate-300",children:[" ","(Phụ phí +",fe.rushSurchargePercent,"%: +",ne(fe.rushFeeAmount??0),")"]})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Báo giá tự động:"})," ",n.jsx("b",{className:"font-mono text-base text-sky-400",children:fe.totalAmount>0?ne(fe.totalAmount):"Chờ kỹ thuật viên báo giá"})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Giao nhận hàng:"})," ",n.jsx("b",{className:"text-slate-100",children:fe.shippingMethod==="pickup"?`Nhận trực tiếp tại xưởng${fe.shippingAddress?` (${fe.shippingAddress})`:""}`:`Giao tận nơi: ${fe.shippingAddress||"-"}`})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Thanh toán:"})," ",fe.paymentMethod==="transfer"?fe.paymentStatus==="qr_verified"?n.jsxs("b",{className:"text-emerald-400",children:["✓ Đã xác nhận chuyển khoản VietQR (",fe.transferCode,")"]}):n.jsxs("b",{className:"text-sky-300",children:["Chuyển khoản VietQR (",fe.transferCode,")"]}):(fe.depositAmount??0)>0?n.jsxs("b",{className:"text-slate-100",children:["COD · Cọc trước 30%:"," ",n.jsx("span",{className:"text-amber-300",children:ne(fe.depositAmount??0)})," ","(",fe.paymentStatus==="qr_verified"?n.jsx("span",{className:"text-emerald-400",children:"✓ Đã xác nhận CK"}):n.jsx("span",{className:"text-sky-300",children:"Chờ đối soát CK"}),fe.transferCode?` · ${fe.transferCode}`:"",") · Thu hộ COD khi nhận hàng (70%):"," ",n.jsx("span",{className:"text-emerald-300",children:ne(fe.codRemainingAmount??Math.max(0,fe.totalAmount-(fe.depositAmount??0)))})]}):n.jsx("b",{className:"text-slate-100",children:"Thanh toán COD (Cọc 30% sau khi xưởng báo giá)"})]}),fe.customerEmail&&fe.totalAmount>0&&n.jsxs("div",{className:"pt-1 font-semibold text-emerald-400",children:["✓ Đã tự động gửi Gmail báo giá chi tiết tới ",fe.customerEmail]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[fe.driveFileUrl&&n.jsx("a",{href:fe.driveFileUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-3.5 py-2 text-xs font-bold text-slate-950 hover:bg-sky-400",children:"Xem thư mục / file trên Google Drive"}),fe.gcodeDriveUrl&&n.jsx("a",{href:fe.gcodeDriveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/15 px-3.5 py-2 text-xs font-bold text-sky-300 hover:bg-sky-500/25",children:"Tải file .gcode tóm tắt"}),n.jsx("button",{type:"button",onClick:t,className:"rounded-lg border border-slate-600 px-4 py-2 text-xs font-semibold hover:bg-slate-800",children:"Đóng"})]})]}):n.jsxs("form",{onSubmit:Ym,className:"space-y-4 text-xs sm:text-sm",children:[n.jsxs("div",{className:"rounded-xl border border-dashed border-sky-500/40 bg-[#0F1930] p-4 space-y-3",children:[n.jsx("div",{className:"flex flex-wrap items-center justify-between gap-2",children:n.jsxs("label",{className:"text-xs font-bold text-sky-300",children:["1. Tải lên 1 hoặc nhiều file .STL hoặc file nén .ZIP (tối đa ",$r,"MB/file) *"]})}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[n.jsxs("label",{className:"inline-flex cursor-pointer items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 px-4 py-2 text-xs font-bold text-slate-950",children:[n.jsx(cl,{className:"h-4 w-4"}),n.jsx("span",{children:p.length>0?"+ Thêm file .STL / .ZIP khác":"Chọn nhiều file .STL / .ZIP từ máy"}),n.jsx("input",{type:"file",multiple:!0,accept:".stl,.zip",onChange:Zm,className:"hidden"})]}),p.length>0&&n.jsxs("span",{className:"font-mono text-xs text-emerald-300",children:["✓ Đã chọn ",p.length," file · Tổng SL: ",y]}),Z&&n.jsxs("span",{className:"inline-flex items-center gap-1 font-mono text-xs text-sky-300",children:[n.jsx(_n,{className:"h-3.5 w-3.5 animate-spin"}),"Đang quét hình học & tính khối lượng..."]})]}),p.length>0&&n.jsx("div",{className:"space-y-2 pt-1",children:p.map(le=>{const Ne=en(le.perPartWeightGrams*le.quantity),De=It(a,i,Ne,le.quantity).totalAmount;return n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#1E325C] bg-[#0B1324] px-3 py-2 text-xs",children:[n.jsxs("div",{className:"min-w-0 flex-1 space-y-0.5",children:[n.jsxs("div",{className:"font-mono font-semibold text-slate-100 truncate",children:[le.file.name," ",n.jsxs("span",{className:"text-[11px] font-normal text-slate-400",children:["(",le.file.size>=1024*1024?`${(le.file.size/(1024*1024)).toFixed(1)} MB`:`${(le.file.size/1024).toFixed(0)} KB`,")"]})]}),n.jsx("div",{className:"font-mono text-[11px] text-slate-400",children:le.perPartWeightGrams>0?n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"text-sky-300",children:[le.perPartWeightGrams,"g/cái × ",le.quantity," = ",n.jsxs("b",{children:[Ne,"g"]})]}),le.dimensions?` · ${le.dimensions}`:""," · ",n.jsx("b",{className:"text-emerald-400",children:ne(De)})]}):n.jsx("span",{children:le.noteText||"Chờ xưởng báo giá"})})]}),n.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[n.jsx("label",{className:"text-[11px] font-semibold text-slate-300",children:"SL:"}),n.jsx("input",{type:"number",min:1,value:le.quantity,onChange:we=>{const Me=Math.max(1,Number(we.target.value)||1);w(Ye=>Ye.map(Le=>Le.uid===le.uid?{...Le,quantity:Me}:Le))},className:"w-16 rounded border border-sky-500/40 bg-[#0F1930] px-2 py-1 text-center font-mono text-xs font-bold text-white"}),n.jsx("button",{type:"button",onClick:()=>w(we=>we.filter(Me=>Me.uid!==le.uid)),title:"Xóa file này",className:"rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-rose-400",children:n.jsx(an,{className:"h-3.5 w-3.5"})})]})]},le.uid)})}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[n.jsx("input",{type:"url",value:N,onChange:le=>{c(le.target.value),m(null),P(!1),K(""),le.target.value.trim()&&w([])},placeholder:"Hoặc dán link File .STL / Thư mục Drive / File .ZIP (chỉ chứa .STL)...",className:"flex-1 rounded-lg border border-[#1E325C] bg-[#0B1324] px-3 py-2 text-xs text-slate-100"}),p.length===0&&N.trim()&&!(h&&h.files.length>0)&&n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"SL:"}),n.jsx("input",{type:"number",min:1,value:k,onChange:le=>C(Math.max(1,Number(le.target.value)||1)),className:"w-16 rounded-lg border border-[#1E325C] bg-[#0B1324] px-2 py-2 text-center font-mono text-xs"})]}),n.jsxs("button",{type:"button",disabled:Z||!N.trim(),onClick:()=>void ns(),className:"inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/15 hover:bg-sky-500/25 disabled:opacity-50 px-3 py-2 text-xs font-bold text-sky-300",children:[n.jsx(Cm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Quét link"})]})]}),p.length===0&&h&&h.files.length>0&&n.jsxs("div",{className:"space-y-2 pt-1",children:[h.isFolder&&n.jsx("div",{className:"font-mono text-[11px] text-emerald-300",children:(Rd=h.folderName)!=null&&Rd.toLowerCase().endsWith(".zip")?n.jsxs(n.Fragment,{children:["✓ File nén ",n.jsx("b",{children:h.folderName})," · Tìm thấy ",h.files.length," file .STL hợp lệ · Tổng SL: ",H]}):n.jsxs(n.Fragment,{children:["✓ Thư mục ",n.jsx("b",{children:h.folderName||"Google Drive"})," · Tìm thấy ",h.files.length," file .STL hợp lệ · Tổng SL: ",H]})}),h.files.map((le,Ne)=>{const De=en(le.perPartWeightGrams*le.quantity),we=It(a,i,De,le.quantity).totalAmount;return n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#1E325C] bg-[#0B1324] px-3 py-2 text-xs",children:[n.jsxs("div",{className:"min-w-0 flex-1 space-y-0.5",children:[n.jsxs("div",{className:"font-mono font-semibold text-slate-100 truncate",children:[le.fileName," ",le.fileSize?n.jsxs("span",{className:"text-[11px] font-normal text-slate-400",children:["(",le.fileSize>=1024*1024?`${(le.fileSize/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(le.fileSize/1024))} KB`,")"]}):null]}),n.jsxs("div",{className:"font-mono text-[11px] text-slate-400",children:[n.jsxs("span",{className:"text-sky-300",children:[le.perPartWeightGrams,"g/cái × ",le.quantity," = ",n.jsxs("b",{children:[De,"g"]})]}),le.dimensions?` · ${le.dimensions}`:""," · ",n.jsx("b",{className:"text-emerald-400",children:ne(we)})]})]}),n.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[n.jsx("label",{className:"text-[11px] font-semibold text-slate-300",children:"SL:"}),n.jsx("input",{type:"number",min:1,value:le.quantity,onChange:Me=>{const Ye=Math.max(1,Number(Me.target.value)||1);m(Le=>Le&&{...Le,files:Le.files.map((sn,pt)=>pt===Ne?{...sn,quantity:Ye}:sn)})},className:"w-16 rounded border border-sky-500/40 bg-[#0F1930] px-2 py-1 text-center font-mono text-xs font-bold text-white"})]})]},`${le.fileName}-${Ne}`)})]}),I&&n.jsx("p",{className:`text-[11px] leading-relaxed rounded-lg px-3 py-2 border ${S||I===Nn?"border-rose-500/40 bg-rose-500/10 text-rose-300 font-semibold":"border-amber-500/30 bg-amber-500/10 text-amber-300"}`,children:I}),n.jsxs("div",{className:"rounded-lg border border-[#1E325C] bg-[#0B1324]/90 overflow-hidden",children:[n.jsxs("button",{type:"button",onClick:()=>ye(le=>!le),className:"flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[11px] font-semibold text-sky-300 hover:bg-[#101C36]",children:[n.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[n.jsx(L0,{className:"h-3.5 w-3.5 shrink-0 text-sky-400"}),n.jsx("span",{children:"Hướng dẫn chuẩn bị file & nén lên Google Drive chuẩn"})]}),pe?n.jsx(I0,{className:"h-3.5 w-3.5 shrink-0 text-slate-400"}):n.jsx(D0,{className:"h-3.5 w-3.5 shrink-0 text-slate-400"})]}),pe&&n.jsxs("ul",{className:"border-t border-[#1E325C] px-3 py-2.5 space-y-1.5 text-[11px] leading-relaxed text-slate-300 list-disc pl-6",children:[n.jsxs("li",{children:[n.jsx("b",{className:"text-white",children:"Chỉ nhận file .STL:"})," Không để lẫn file ",n.jsx("code",{className:"font-mono text-rose-300",children:".3mf"}),", ",n.jsx("code",{className:"font-mono text-rose-300",children:".gcode"}),", ảnh hay PDF."]}),n.jsxs("li",{children:[n.jsxs("b",{className:"text-white",children:["Cách 1 — Tải trực tiếp từ máy (Khuyên dùng, tới ",$r,"MB/file):"]})," Bấm ",n.jsx("b",{className:"text-sky-300",children:"Chọn nhiều file .STL / .ZIP từ máy"}),", giữ ",n.jsx("code",{className:"font-mono text-sky-200",children:"Ctrl"})," chọn nhiều file ",n.jsx("code",{className:"font-mono text-emerald-300",children:".STL"})," cùng lúc hoặc chọn file ",n.jsx("code",{className:"font-mono text-emerald-300",children:".ZIP"})," chỉ chứa ",n.jsx("code",{className:"font-mono text-emerald-300",children:".STL"}),"."]}),n.jsxs("li",{children:[n.jsx("b",{className:"text-white",children:"Cách 2 — Gửi link Google Drive (chọn 1 trong 2 cách chuẩn):"}),n.jsxs("ul",{className:"mt-1 space-y-1 list-circle pl-4 text-slate-300",children:[n.jsxs("li",{children:[n.jsx("b",{children:"Tạo thư mục Drive (Khuyên dùng):"})," Tạo 1 thư mục trên Google Drive → tải thẳng các file ",n.jsx("code",{className:"font-mono text-emerald-300",children:".STL"})," vào bên trong (không lẫn file khác)."]}),n.jsxs("li",{children:[n.jsx("b",{children:"Hoặc nén chuẩn .ZIP:"})," Chọn các file ",n.jsx("code",{className:"font-mono text-emerald-300",children:".STL"})," → Chuột phải → ",n.jsx("b",{children:"Compress to ZIP file"})," ",n.jsx("i",{children:"(hoặc Send to → Compressed (zipped) folder)"})," → tải file ",n.jsx("code",{className:"font-mono text-emerald-300",children:".ZIP"})," lên Drive ",n.jsx("i",{children:"(không dùng .RAR/.7Z, không đặt mật khẩu, bên trong chỉ chứa .STL)"}),"."]})]})]}),n.jsxs("li",{children:[n.jsx("b",{className:"text-white",children:"Bắt buộc mở quyền xem công khai:"})," Chuột phải thư mục/file trên Drive → ",n.jsx("b",{children:"Chia sẻ (Share)"})," → ",n.jsx("b",{children:"Bất kỳ ai có đường liên kết (Anyone with the link)"})," → ",n.jsx("b",{children:"Người xem (Viewer)"})," → ",n.jsx("b",{children:"Sao chép đường liên kết"})," → dán vào ô trên."]}),n.jsxs("li",{children:[n.jsx("b",{className:"text-white",children:"Giới hạn quét tự động qua Drive:"})," Tối đa ",n.jsx("b",{children:"15MB/file"}),", tối đa ",n.jsx("b",{children:"20 file"})," (tổng ≤ 40MB). File nặng hơn 15MB vui lòng tải thẳng từ máy ở ",n.jsx("b",{children:"Cách 1"}),"."]})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Loại vật liệu in"}),n.jsx("select",{value:i,onChange:le=>o(le.target.value),className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs",children:a.map(le=>n.jsxs("option",{value:le.name,children:[le.name," (",le.pricePerGram.toLocaleString("vi-VN"),"đ/g)"]},le.id))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Độ đặc (Infill)"}),n.jsxs("select",{value:l,onChange:le=>d(le.target.value),className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs",children:[n.jsx("option",{value:"20%",children:"20% (Tiêu chuẩn)"}),n.jsx("option",{value:"40%",children:"40% (Cứng cáp)"}),n.jsx("option",{value:"60%",children:"60% (Chịu tải)"}),n.jsx("option",{value:"80%",children:"80% (Rất chắc)"}),n.jsx("option",{value:"100%",children:"100% (Đặc hoàn toàn)"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Màu sắc mong muốn"}),n.jsx("input",{type:"text",value:u,onChange:le=>g(le.target.value),placeholder:"Đen / Trắng / Xám...",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs"})]})]}),n.jsxs("div",{className:"rounded-xl border border-[#1E325C] bg-[#0F1930] p-3.5 space-y-2.5",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200",children:[n.jsx(E0,{className:"h-3.5 w-3.5 text-sky-400"}),n.jsx("span",{children:"Hạn phải giao hàng (tự động tính phụ phí in gấp)"})]}),n.jsx("span",{className:`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold ${Ee.tierCode==="same_day"?"bg-rose-500/20 text-rose-300 border border-rose-500/40":Ee.tierCode==="next_day"?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"}`,children:Ee.surchargePercent>0?`+${Ee.surchargePercent}% phụ phí`:"Miễn phí (+0%)"})]}),n.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center",children:[n.jsx("input",{type:"date",min:Pe,value:J,onChange:le=>se(le.target.value),className:"rounded-lg border border-[#1E325C] bg-[#0B1324] px-3 py-2 text-xs font-mono text-slate-100"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.jsx("button",{type:"button",onClick:()=>se(Dt(0)),className:`rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold transition ${Ee.tierCode==="same_day"?"border-rose-400 bg-rose-500/20 text-rose-200":"border-[#1E325C] bg-[#0B1324] text-slate-300 hover:border-rose-400/50"}`,children:"Trong ngày (+15%)"}),n.jsx("button",{type:"button",onClick:()=>se(Dt(1)),className:`rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold transition ${Ee.tierCode==="next_day"?"border-amber-400 bg-amber-500/20 text-amber-200":"border-[#1E325C] bg-[#0B1324] text-slate-300 hover:border-amber-400/50"}`,children:"Sau 1 ngày (+6%)"}),n.jsx("button",{type:"button",onClick:()=>se(Dt(2)),className:`rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold transition ${Ee.tierCode==="standard"?"border-emerald-400 bg-emerald-500/20 text-emerald-200":"border-[#1E325C] bg-[#0B1324] text-slate-300 hover:border-emerald-400/50"}`,children:"2–7 ngày (Miễn phí)"})]})]}),n.jsxs("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:["Quy tắc: In gấp trong ngày ",n.jsx("b",{className:"text-rose-300",children:"+15%"})," giá trị đơn · Hạn sau 1 ngày"," ",n.jsx("b",{className:"text-amber-300",children:"+6%"})," · Từ 2–7 ngày ",n.jsx("b",{className:"text-emerald-300",children:"Miễn phí"}),"."]})]}),Ce>0&&n.jsxs("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3.5 space-y-1.5 text-xs",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsxs("span",{className:"inline-flex items-center gap-1.5 font-bold text-emerald-300",children:[n.jsx(es,{className:"h-4 w-4"}),n.jsxs("span",{children:["Báo giá tự động (",s.printerModel," · Khổ ",de.maxBuildX||800,"×",de.maxBuildY||800,"mm)"]})]}),n.jsx("span",{className:"font-mono text-base font-bold text-sky-400",children:ne(Ae.totalAmount)})]}),n.jsxs("div",{className:"font-mono text-[11px] text-slate-200 flex flex-wrap gap-x-4 gap-y-1",children:[n.jsxs("span",{children:["Tổng SL: ",n.jsx("b",{children:ue})," chi tiết"]}),n.jsxs("span",{children:["Tổng khối lượng: ",n.jsxs("b",{children:[Ce," g"]})]}),n.jsxs("span",{children:["Hạn giao: ",n.jsx("b",{className:Ae.rushSurchargePercent>0?"text-amber-300":"text-emerald-300",children:Ee.displayText})]}),(h==null?void 0:h.dimensions)&&n.jsxs("span",{children:["Kích thước: ",h.dimensions]}),(h==null?void 0:h.printTime)&&n.jsxs("span",{children:["Dự kiến in: ",h.printTime]})]}),Ae.rushSurchargePercent>0&&n.jsxs("div",{className:"font-mono text-[11px] text-amber-300",children:["Giá in gốc: ",ne(Ae.subtotalAmount)," · Phụ phí giao gấp (+",Ae.rushSurchargePercent,"%): +",ne(Ae.rushFeeAmount)]}),Xm&&n.jsxs("div",{className:"text-[11px] font-medium text-amber-300 pt-1",children:["⚠️ Lưu ý: Có chi tiết vượt khổ máy ",de.maxBuildX||800,"×",de.maxBuildY||800,"mm — xưởng vẫn nhận đơn và hỗ trợ chia ghép hoặc thu tỷ lệ giúp bạn."]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3 pt-2 border-t border-[#1E325C]",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Họ tên *"}),n.jsx("input",{type:"text",required:!0,value:O,onChange:le=>F(le.target.value),placeholder:"Nguyễn Văn A",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Số điện thoại / Zalo *"}),n.jsx("input",{type:"tel",inputMode:"numeric",required:!0,value:M,onChange:le=>$(le.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"0912345678",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Gmail nhận báo giá *"}),n.jsx("input",{type:"email",required:!0,value:D,onChange:le=>U(le.target.value),placeholder:"tenban@gmail.com",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs"}),cr&&n.jsx("p",{className:`mt-1 text-[11px] font-semibold ${cr.valid?"text-emerald-400":"text-rose-400"}`,children:cr.valid?"Email hợp lệ":"Email lỗi"})]})]}),n.jsxs("div",{className:"rounded-xl border border-[#1E325C] bg-[#0F1930] p-3.5 space-y-2.5",children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-200",children:"Hình thức nhận hàng / Ship *"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[n.jsxs("button",{type:"button",onClick:()=>X("delivery"),className:`inline-flex items-center justify-center gap-1.5 rounded-lg border py-2.5 px-3 font-semibold transition-colors ${re==="delivery"?"border-sky-500 bg-sky-500 text-slate-950":"border-[#1E325C] bg-[#0B1324] text-slate-300 hover:border-sky-500/50"}`,children:[n.jsx(Bi,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Giao hàng tận nơi (Ship toàn quốc)"})]}),n.jsxs("button",{type:"button",onClick:()=>X("pickup"),className:`inline-flex items-center justify-center gap-1.5 rounded-lg border py-2.5 px-3 font-semibold transition-colors ${re==="pickup"?"border-sky-500 bg-sky-500 text-slate-950":"border-[#1E325C] bg-[#0B1324] text-slate-300 hover:border-sky-500/50"}`,children:[n.jsx(J0,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Nhận trực tiếp tại xưởng (Miễn phí ship)"})]})]}),re==="delivery"?n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300",children:"Địa chỉ nhận hàng *"}),n.jsx("input",{type:"text",required:!0,value:ce,onChange:le=>{ee(le.target.value),me("")},placeholder:"Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành",className:"w-full rounded-lg border border-[#1E325C] bg-[#0B1324] px-3 py-2 text-xs text-slate-100"}),ce.trim().length>0&&!Qr.valid&&n.jsx("p",{className:"text-[11px] font-medium text-rose-400",children:Qr.error}),n.jsx("p",{className:"text-[11px] text-slate-400",children:"Phí ship tính theo đơn vị vận chuyển (GHTK / GHN / Grab), shop báo rõ trước khi gửi hàng."})]}):n.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300",children:[n.jsx(xd,{className:"h-4 w-4 shrink-0"}),n.jsxs("span",{children:["Nhận trực tiếp tại xưởng: ",n.jsx("b",{className:"text-white",children:((Md=e.profile.location)==null?void 0:Md.vi)||"Đống Đa, Hà Nội"})]})]})]}),n.jsxs("div",{className:"rounded-xl border border-[#1E325C] bg-[#0F1930] p-3.5 space-y-2.5",children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-200",children:"Hình thức thanh toán *"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[n.jsx("button",{type:"button",onClick:()=>{A("cod"),V(!1),j("")},className:`rounded-lg border py-2.5 px-3 font-semibold transition-colors ${T==="cod"?"border-sky-500 bg-sky-500 text-slate-950":"border-[#1E325C] bg-[#0B1324] text-slate-300 hover:border-sky-500/50"}`,children:"Nhận hàng trả tiền (COD · Cọc 30%)"}),n.jsxs("button",{type:"button",onClick:()=>{A("transfer"),V(!1),j("")},className:`inline-flex items-center justify-center gap-1.5 rounded-lg border py-2.5 px-3 font-semibold transition-colors ${T==="transfer"?"border-sky-500 bg-sky-500 text-slate-950":"border-[#1E325C] bg-[#0B1324] text-slate-300 hover:border-sky-500/50"}`,children:[n.jsx(bd,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Chuyển khoản 100% (VietQR)"})]})]}),qt>0?n.jsxs("div",{className:"rounded-xl border border-sky-500/40 bg-[#080D1A] p-3.5 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 text-xs",children:[n.jsx("span",{className:"font-mono font-bold text-sky-400",children:T==="cod"?"YÊU CẦU CỌC TRƯỚC 30% ĐỂ XƯỞNG TIẾN HÀNH IN":"QUÉT MÃ VIETQR NAPAS 24/7 (THANH TOÁN 100%)"}),n.jsx("span",{className:`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${T==="cod"?"bg-amber-500/20 text-amber-300":"bg-emerald-500/15 text-emerald-300"}`,children:T==="cod"?"Cọc 30% · COD còn lại 70%":"Tự điền số tiền & nội dung"})]}),T==="cod"&&n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-[11px] font-mono",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-slate-400",children:"Tổng giá trị đơn"}),n.jsx("div",{className:"font-bold text-white",children:ne(Ae.totalAmount)})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-amber-300",children:"Cọc trước 30% (CK ngay)"}),n.jsx("div",{className:"font-extrabold text-amber-300 text-xs",children:ne(yn)})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-emerald-300",children:"COD khi nhận hàng (70%)"}),n.jsx("div",{className:"font-extrabold text-emerald-300 text-xs",children:ne(ts)})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-12 gap-3 items-center",children:[n.jsx("div",{className:"sm:col-span-5 flex justify-center",children:Pd?n.jsx("div",{className:"rounded-lg bg-white p-2 border border-slate-200 shadow-sm",children:n.jsx("img",{src:Pd,alt:`VietQR ${R}`,className:"h-36 w-36 object-contain"})}):n.jsx("div",{className:"h-36 w-36 rounded-lg border border-dashed border-slate-600 flex items-center justify-center text-[11px] text-slate-400 text-center p-2",children:"Chưa cài đặt số tài khoản VietQR"})}),n.jsxs("div",{className:"sm:col-span-7 space-y-1.5 text-xs",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Ngân hàng:"})," ",n.jsx("strong",{className:"font-mono text-white",children:e.profile.bankId||"TCB"})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Số tài khoản:"})," ",n.jsx("strong",{className:"font-mono text-white",children:e.profile.bankAccountNo||e.profile.phone})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:"Chủ TK:"})," ",n.jsx("strong",{className:"text-white",children:e.profile.bankAccountName||e.profile.name})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-slate-400",children:T==="cod"?"Số tiền cọc 30%:":"Số tiền:"})," ",n.jsx("strong",{className:"font-mono text-amber-400",children:ne(qt)})]}),n.jsxs("div",{className:"pt-1 flex items-center justify-between gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 px-2.5 py-1.5",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] text-slate-400",children:"Nội dung CK bắt buộc:"}),n.jsx("div",{className:"font-mono text-xs font-extrabold text-sky-300",children:R})]}),n.jsxs("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(R),v(!0),setTimeout(()=>v(!1),1800)},className:"inline-flex items-center gap-1 rounded bg-sky-500 px-2 py-1 text-[10px] font-bold text-slate-950 hover:bg-sky-400",children:[L?n.jsx(Kt,{className:"h-3 w-3"}):n.jsx(xn,{className:"h-3 w-3"}),n.jsx("span",{children:L?"Đã chép":"Chép mã"})]})]})]})]}),(Id=e.profile.paymentCheckUrl)!=null&&Id.trim()||(Bd=e.profile.telegramBotToken)!=null&&Bd.trim()?n.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-300",children:[G?n.jsx(rn,{className:"h-3.5 w-3.5 shrink-0 text-emerald-400"}):n.jsx(ym,{className:"h-3.5 w-3.5 animate-spin shrink-0"}),n.jsx("span",{children:x||(T==="cod"?"Đang tự động chờ tín hiệu cọc 30% từ ngân hàng...":"Đang tự động chờ tín hiệu nhận tiền từ ngân hàng...")})]}):n.jsx("p",{className:"text-[11px] text-slate-400",children:T==="cod"?n.jsxs(n.Fragment,{children:["Quét mã chuyển cọc 30% (",n.jsx("strong",{className:"text-amber-300",children:ne(yn)}),") kèm mã"," ",n.jsx("strong",{className:"text-sky-300",children:R}),", bấm nút đặt đơn bên dưới để xưởng tiến hành in & thu"," ",n.jsx("strong",{className:"text-emerald-300",children:ne(ts)})," khi nhận hàng."]}):n.jsxs(n.Fragment,{children:["Sau khi quét mã chuyển khoản kèm mã ",n.jsx("strong",{className:"text-sky-300",children:R}),", bấm nút Gửi bên dưới để hoàn tất đặt in."]})})]}):n.jsx("div",{className:"rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-[11px] text-amber-300",children:T==="cod"?"Đơn COD yêu cầu cọc trước 30%. Vui lòng tải lên file .STL / .ZIP hoặc dán link Drive để hệ thống tính tiền cọc và tạo mã VietQR.":"Vui lòng tải lên file .STL / .ZIP hoặc dán link Drive trước để hệ thống tự tính tiền và tạo mã VietQR."})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Ghi chú kỹ thuật (nếu có)"}),n.jsx("textarea",{rows:2,value:Q,onChange:le=>te(le.target.value),placeholder:"Yêu cầu độ chính xác lỗ ốc, chiều chịu lực...",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs"})]}),be&&n.jsx("div",{className:"rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-300",children:be}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-2",children:[n.jsx("button",{type:"button",onClick:t,className:"rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800",children:"Đóng"}),n.jsxs("button",{type:"submit",disabled:Y||Z||W,className:"inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-60 px-5 py-2 text-xs font-bold text-slate-950",children:[n.jsx(Va,{className:"h-4 w-4"}),n.jsx("span",{children:Y||W?q||(Ed>10*1024*1024?`Đang tải file (${(Ed/(1024*1024)).toFixed(1)} MB) lên Drive & gửi báo giá...`:"Đang kiểm tra & lên đơn In 3D..."):T==="transfer"?G?`✓ Đã CK — Gửi File & Đặt In (${ne(Ae.totalAmount)})`:Ae.totalAmount>0?`Tôi đã chuyển khoản — Đặt In (${ne(Ae.totalAmount)})`:"Tôi đã chuyển khoản — Gửi Đặt In 3D":G&&yn>0?`✓ Đã cọc 30% — Gửi File & Đặt In COD (Còn ${ne(ts)})`:yn>0?`Tôi đã chuyển cọc 30% (${ne(yn)}) — Đặt In COD`:"Gửi File / Link & Đặt In COD (Cọc 30%)"})]})]})]})})]})})},zx=({cmsData:e,setCmsData:t,onExit:r})=>{var ke;const a=e.print3dCollaborators??[],s=e.print3dOrders??[],i=e.print3dMaterials&&e.print3dMaterials.length>0?e.print3dMaterials:$e,o=((ke=e.print3dSetup)==null?void 0:ke.defaultShopCommissionPercent)??it.defaultShopCommissionPercent??25,[l,d]=E.useState("orders"),[u,g]=E.useState(""),[p,w]=E.useState("all"),[N,c]=E.useState({}),[k,C]=E.useState(!1),[h,m]=E.useState(""),[S,P]=E.useState(""),[O,F]=E.useState(""),[M,$]=E.useState("MB"),[D,U]=E.useState(""),[J,se]=E.useState(""),[re,X]=E.useState(""),[ce,ee]=E.useState(""),[T,A]=E.useState(!1),R=I=>{m(I),setTimeout(()=>m(""),4200)},f=async(I=!1)=>{C(!0);try{const K=await Ur(e);let pe=K.changed?K.nextState:e;const ye=await qa(pe);ye.changed&&(pe=ye.nextState),(K.changed||ye.changed)&&t(pe),I||(K.error&&ye.error?R(ye.error):R(`✓ Đã đồng bộ ${K.collaborators.length} CTV & ${ye.count} đơn In 3D mới nhất.`))}finally{C(!1)}};E.useEffect(()=>{f(!0)},[]);const L=(I,K)=>{let pe=null;t(ye=>{const Y={...ye,print3dOrders:(ye.print3dOrders??[]).map(xe=>xe.id!==I?xe:(pe=K(xe),pe))};return Ln(Y),Y}),setTimeout(()=>{pe&&jd(e.profile,pe)},40)},v=I=>{const K=N[I.id];if(K)return a.find(pe=>pe.id===K);if(I.printerId){const pe=a.find(ye=>ye.id===I.printerId);if(pe)return pe}if(I.printerName){const pe=a.find(ye=>ye.name.trim().toLowerCase()===I.printerName.trim().toLowerCase());if(pe)return pe}if(u&&!I.claimedByPrinter)return a.find(pe=>pe.id===u)},x=I=>{const K=v(I);if(!K){R("Vui lòng chọn tên người in trong danh sách CTV (hoặc thêm mới ở tab Cộng tác viên).");return}const pe=dt(i,I,o),ye=I.payoutWeekKey||ir();L(I.id,Y=>({...Y,claimedByPrinter:!0,printerId:K.id,printerName:K.name,printStatus:Y.printStatus==="waiting"?"printing":Y.printStatus,shopCommissionPercent:Y.shopCommissionPercent??o,materialCostPerGram:pe.materialCostPerGram,materialCostAmount:pe.materialCostAmount,netAfterMaterialAmount:pe.netAfterMaterialAmount,settlementBaseAmount:pe.baseAmount,shopFeeAmount:pe.shopFeeAmount,printerPayoutAmount:pe.printerPayoutAmount,payoutWeekKey:ye})),R(`✓ Đã xác nhận "${K.name}" nhận in đơn #${I.id}.`)},j=async I=>{I.preventDefault();const K=S.trim();if(!K){R("Vui lòng nhập họ tên.");return}const pe=Wr(O);if(!pe.valid){R(pe.error||"SĐT phải gồm 10 số.");return}const ye=J.replace(/\s+/g,"");if(!ye){R("Vui lòng nhập STK ngân hàng.");return}const Y=va.find(ie=>ie.code===M),xe=M==="OTHER"?D.trim()||"Ngân hàng khác":(Y==null?void 0:Y.name)||M,q={id:`CTV-${Date.now().toString().slice(-6)}`,name:K,phone:pe.normalized,bankName:xe,bankId:M==="OTHER"?D.trim().toUpperCase()||"OTHER":M,bankAccountNo:ye,bankAccountName:re.trim()||K.toUpperCase(),note:ce.trim(),createdAt:new Date().toISOString()};A(!0);try{t(ie=>{const be={...ie,print3dCollaborators:[q,...ie.print3dCollaborators??[]]};return Ln(be),be}),await Hm(e.profile,q),g(q.id),P(""),F(""),U(""),se(""),X(""),ee(""),d("orders"),R(`✓ Đã thêm "${q.name}" vào Cộng tác viên In 3D — tên bạn đã tự động hiện ở danh sách chọn Người in!`)}finally{A(!1)}},G=a.find(I=>I.id===u)??null,V=ir(),W=Os(V),_=s.filter(I=>{if(p==="unclaimed"&&I.claimedByPrinter||p==="printing"&&I.printStatus!=="printing"||p==="done"&&I.printStatus!=="done")return!1;if(G&&p!=="unclaimed"){const K=I.printerId===G.id||(I.printerName||"").trim().toLowerCase()===G.name.trim().toLowerCase();if(I.claimedByPrinter&&!K)return!1}return!0}),te=(G?Gm(s,a,i,o,"unpaid_all").filter(I=>I.collaboratorId===G.id||I.collaboratorName.trim().toLowerCase()===G.name.trim().toLowerCase()):[])[0]??null,Z=s.filter(I=>!I.claimedByPrinter).length;return n.jsxs("div",{className:"min-h-screen bg-[#080D1A] text-slate-100",children:[n.jsxs("header",{className:"sticky top-0 z-30 border-b border-[#1E325C] bg-[#0B1324]/95 backdrop-blur",children:[n.jsxs("div",{className:"mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center gap-1.5 rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-[#162342]",children:[n.jsx(pm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Trang chủ"})]}),n.jsxs("div",{children:[n.jsxs("h1",{className:"font-mono text-sm sm:text-base font-bold text-white flex items-center gap-2",children:[n.jsx(Va,{className:"h-4 w-4 text-sky-400"}),n.jsx("span",{children:"Cổng Cộng Tác Viên In 3D — TeeBi & Robot"})]}),n.jsxs("p",{className:"text-[11px] text-slate-400",children:["Nhận đơn · Cập nhật khối lượng thực tế · Đối soát thanh toán hàng tuần (",W.displayRange,")"]})]})]}),n.jsxs("button",{type:"button",onClick:()=>void f(!1),disabled:k,className:"inline-flex items-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-60 px-3.5 py-2 text-xs font-bold text-slate-950",children:[n.jsx(_n,{className:`h-3.5 w-3.5 ${k?"animate-spin":""}`}),n.jsx("span",{children:k?"Đang đồng bộ...":"Đồng bộ dữ liệu mới nhất"})]})]}),n.jsxs("div",{className:"mx-auto flex max-w-6xl gap-2 border-t border-[#1E325C] px-4 sm:px-6",children:[n.jsxs("button",{type:"button",onClick:()=>d("orders"),className:`border-b-2 px-3 py-2.5 text-xs sm:text-sm font-bold transition ${l==="orders"?"border-sky-400 text-sky-400":"border-transparent text-slate-400 hover:text-white"}`,children:["Nhận đơn In 3D (",s.length," đơn · ",Z," chưa nhận)"]}),n.jsxs("button",{type:"button",onClick:()=>d("register"),className:`border-b-2 px-3 py-2.5 text-xs sm:text-sm font-bold transition ${l==="register"?"border-sky-400 text-sky-400":"border-transparent text-slate-400 hover:text-white"}`,children:["Cộng tác viên In 3D (",a.length," CTV)"]})]})]}),n.jsxs("main",{className:"mx-auto max-w-6xl space-y-5 px-4 py-6 sm:px-6",children:[h&&n.jsx("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-300",children:h}),n.jsxs("div",{className:"rounded-xl border border-sky-500/30 bg-[#0B1324] px-4 py-3 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("div",{className:"inline-flex items-center gap-2",children:[n.jsx(xm,{className:"h-4 w-4 text-sky-400 shrink-0"}),n.jsxs("span",{children:["Định kỳ chuyển tiền công ",n.jsx("b",{children:"1 tuần / lần"})," (Chốt sổ & chuyển khoản Chủ nhật hàng tuần · Tuần hiện tại"," ",n.jsx("b",{className:"font-mono text-sky-300",children:V}),": ",W.displayRange,") sau khi Admin xác nhận đơn."]})]}),n.jsxs("span",{className:"font-mono text-[11px] text-amber-300",children:["Phí Shop mặc định: ",o,"%"]})]}),l==="orders"?n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-xl border border-[#1E325C] bg-[#0B1324] p-4 flex flex-wrap items-end justify-between gap-3",children:[n.jsxs("div",{className:"min-w-[240px] flex-1",children:[n.jsx("label",{className:"block text-[11px] font-semibold text-slate-400 mb-1",children:"Chọn tên bạn (tự kéo từ trang Cộng tác viên In 3D):"}),n.jsxs("div",{className:"flex flex-wrap gap-2",children:[n.jsxs("select",{value:u,onChange:I=>g(I.target.value),className:"flex-1 min-w-[220px] rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs font-semibold text-white",children:[n.jsx("option",{value:"",children:"— Xem tất cả đơn & CTV —"}),a.map(I=>n.jsxs("option",{value:I.id,children:[I.name," · ",I.phone," (",I.bankId," ",I.bankAccountNo,")"]},I.id))]}),n.jsxs("button",{type:"button",onClick:()=>d("register"),className:"inline-flex items-center gap-1 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-xs font-bold text-sky-300 hover:bg-sky-500/20",children:[n.jsx(ya,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"+ Thêm tên CTV mới"})]})]})]}),n.jsx("div",{className:"flex flex-wrap gap-1.5",children:[["all","Tất cả"],["unclaimed",`Chưa ai nhận (${Z})`],["printing","Đang in"],["done","In xong"]].map(([I,K])=>n.jsx("button",{type:"button",onClick:()=>w(I),className:`rounded-lg border px-3 py-2 text-xs font-semibold transition ${p===I?"border-sky-400 bg-sky-500/20 text-sky-300":"border-[#1E325C] bg-[#0F1930] text-slate-400 hover:text-white"}`,children:K},I))})]}),G&&n.jsxs("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 flex flex-wrap items-center justify-between gap-3 text-xs",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"font-bold text-emerald-300 flex items-center gap-1.5",children:[n.jsx(Mr,{className:"h-4 w-4"}),n.jsxs("span",{children:["Sổ công chờ thanh toán của ",G.name," (",G.bankId," · ",G.bankAccountNo,")"]})]}),n.jsx("div",{className:"font-mono text-slate-200",children:te?n.jsxs(n.Fragment,{children:[te.orders.length," đơn Admin đã xác nhận · Tổng KL:"," ",n.jsxs("b",{children:[te.totalActualWeightGrams,"g"]})," · Shop giữ:"," ",n.jsx("b",{children:ne(te.totalShopFee)})]}):n.jsx("span",{children:"Chưa có đơn mới được Admin xác nhận chờ chuyển tuần này."})})]}),n.jsxs("div",{className:"font-mono text-right",children:[n.jsx("div",{className:"text-[11px] text-slate-400",children:"Cần chuyển cho bạn:"}),n.jsx("div",{className:"text-lg font-bold text-emerald-300",children:ne((te==null?void 0:te.totalPrinterPayout)??0)})]})]}),_.length===0?n.jsx("div",{className:"rounded-xl border border-dashed border-[#1E325C] bg-[#0B1324] p-8 text-center text-xs text-slate-400",children:"Không có đơn phù hợp bộ lọc hiện tại."}):n.jsx("div",{className:"space-y-3",children:_.map(I=>{const K=v(I),pe=dt(i,I,o),ye=N[I.id]??(K==null?void 0:K.id)??"",Y=!!I.adminConfirmed;return n.jsxs("div",{className:`rounded-xl border p-4 space-y-3 ${I.payoutStatus==="paid"?"border-emerald-500/40 bg-emerald-500/5":I.adminConfirmed?"border-sky-500/40 bg-sky-500/5":I.claimedByPrinter?"border-emerald-500/30 bg-[#0B1324]":"border-amber-500/40 bg-amber-500/5"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("span",{className:"font-mono text-xs font-bold text-sky-400",children:["#",I.id]}),n.jsx("span",{className:"text-xs font-bold text-white",children:I.customerName}),n.jsxs("span",{className:"rounded bg-[#162342] px-2 py-0.5 font-mono text-[11px] font-semibold",children:[I.material," · Infill ",I.infill," · SL ",I.quantity]}),I.deliveryLabel&&n.jsx("span",{className:"rounded bg-amber-500/15 px-2 py-0.5 font-mono text-[11px] text-amber-300",children:I.deliveryLabel}),I.payoutStatus==="paid"?n.jsxs("span",{className:"rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300",children:["✓ Đã chuyển khoản (",I.payoutWeekKey||V,")"]}):I.adminConfirmed?n.jsxs("span",{className:"rounded bg-sky-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300",children:["✓ Admin đã xác nhận (",I.payoutWeekKey||V,")"]}):n.jsx("span",{className:"rounded bg-slate-700/60 px-2 py-0.5 font-mono text-[10px] text-slate-300",children:"Chờ Admin xác nhận"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[I.gcodeDriveUrl&&n.jsxs("a",{href:I.gcodeDriveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 rounded-md border border-sky-500/40 bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-300 hover:bg-sky-500/20",children:[n.jsx("span",{children:".gcode"}),n.jsx(Mt,{className:"h-3 w-3"})]}),I.driveFileUrl&&n.jsxs("a",{href:I.driveFileUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 rounded-md bg-sky-500 hover:bg-sky-400 px-3 py-1 text-xs font-bold text-slate-950",children:[n.jsx("span",{children:"Tải file Drive"}),n.jsx(Mt,{className:"h-3 w-3"})]})]})]}),(I.dimensions||I.fileSummary)&&n.jsxs("div",{className:"font-mono text-[11px] text-slate-400 flex flex-wrap gap-3",children:[I.fileSummary&&n.jsxs("span",{children:["Files: ",I.fileSummary]}),I.dimensions&&n.jsxs("span",{children:["KT: ",I.dimensions]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-12 items-end pt-2 border-t border-[#1E325C]",children:[n.jsxs("div",{className:"sm:col-span-4",children:[n.jsx("label",{className:"block text-[10px] text-slate-400 mb-1",children:"Người nhận in (CTV)"}),n.jsxs("select",{disabled:Y,value:ye,onChange:xe=>{const q=xe.target.value;c(be=>({...be,[I.id]:q}));const ie=a.find(be=>be.id===q);if(ie){const be=dt(i,I,o);L(I.id,me=>({...me,printerId:ie.id,printerName:ie.name,claimedByPrinter:!0,printStatus:me.printStatus==="waiting"?"printing":me.printStatus,shopCommissionPercent:me.shopCommissionPercent??o,materialCostPerGram:be.materialCostPerGram,materialCostAmount:be.materialCostAmount,netAfterMaterialAmount:be.netAfterMaterialAmount,settlementBaseAmount:be.baseAmount,shopFeeAmount:be.shopFeeAmount,printerPayoutAmount:be.printerPayoutAmount,payoutWeekKey:me.payoutWeekKey||V})),R(`✓ Đã chọn người in "${ie.name}" cho đơn #${I.id}`)}},className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-2.5 py-1.5 text-xs text-white disabled:opacity-60",children:[n.jsx("option",{value:"",children:"-- Chọn người in (CTV) --"}),!K&&I.printerName&&n.jsx("option",{value:`__legacy_${I.printerName}`,children:I.printerName}),a.map(xe=>n.jsxs("option",{value:xe.id,children:[xe.name," (",xe.phone,")"]},xe.id))]})]}),n.jsxs("div",{className:"sm:col-span-2",children:[n.jsxs("label",{className:"block text-[10px] text-slate-400 mb-1",children:["KL thực tế (g) ",n.jsxs("span",{className:"text-slate-500",children:["(dự kiến ",I.weightGrams,"g)"]})]}),n.jsx("input",{type:"number",min:0,step:"0.1",disabled:Y,value:I.actualWeightGrams??"",placeholder:String(I.weightGrams||0),onChange:xe=>{const q=Math.max(0,Number(xe.target.value)||0),ie={...I,actualWeightGrams:q},be=dt(i,ie,o);L(I.id,me=>({...me,actualWeightGrams:q,materialCostPerGram:be.materialCostPerGram,materialCostAmount:be.materialCostAmount,netAfterMaterialAmount:be.netAfterMaterialAmount,settlementBaseAmount:be.baseAmount,shopFeeAmount:be.shopFeeAmount,printerPayoutAmount:be.printerPayoutAmount}))},className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-2.5 py-1.5 font-mono text-xs text-sky-300 disabled:opacity-60"})]}),n.jsxs("div",{className:"sm:col-span-2",children:[n.jsx("label",{className:"block text-[10px] text-slate-400 mb-1",children:"Trạng thái in"}),n.jsxs("select",{disabled:Y,value:I.printStatus,onChange:xe=>{const q=xe.target.value;L(I.id,ie=>({...ie,printStatus:q,claimedByPrinter:q!=="waiting"?!0:ie.claimedByPrinter}))},className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-2.5 py-1.5 text-xs disabled:opacity-60",children:[n.jsx("option",{value:"waiting",children:"Chờ in"}),n.jsx("option",{value:"printing",children:"Đang in"}),n.jsx("option",{value:"done",children:"In xong"})]})]}),n.jsxs("div",{className:"sm:col-span-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-1.5 text-[11px] font-mono",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"text-slate-400",children:["Khách ",ne(pe.baseAmount)," · Shop ",pe.shopCommissionPercent,"%: -",ne(pe.shopFeeAmount)," (Công ",ne(pe.printerWorkAmount)," + Nhựa ",ne(pe.materialCostAmount),")"]}),n.jsxs("div",{className:"text-emerald-400 font-bold",children:["CTV thực nhận: ",ne(pe.printerPayoutAmount)]})]}),!I.claimedByPrinter&&n.jsxs("button",{type:"button",onClick:()=>x(I),className:"inline-flex items-center gap-1 rounded-md bg-emerald-500 hover:bg-emerald-400 px-2.5 py-1.5 text-[11px] font-bold text-slate-950",children:[n.jsx(rn,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Nhận in"})]})]})]})]},I.id)})})]}):n.jsxs("div",{className:"space-y-5",children:[n.jsxs("form",{onSubmit:j,className:"rounded-xl border border-[#1E325C] bg-[#0B1324] p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-white",children:[n.jsx(ya,{className:"h-4 w-4 text-sky-400"}),n.jsx("span",{children:"Đăng ký thông tin Cộng tác viên In 3D (để nhận đơn & nhận chuyển khoản)"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Họ tên người in *"}),n.jsx("input",{type:"text",required:!0,value:S,onChange:I=>P(I.target.value),placeholder:"Nguyễn Văn A",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Số điện thoại / Zalo *"}),n.jsx("input",{type:"tel",inputMode:"numeric",required:!0,value:O,onChange:I=>F(I.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"0912345678",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Ngân hàng *"}),n.jsx("select",{value:M,onChange:I=>$(I.target.value),className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs",children:va.map(I=>n.jsx("option",{value:I.code,children:I.code==="OTHER"?I.name:`${I.code} — ${I.name}`},I.code))})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-4 items-end",children:[M==="OTHER"&&n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Tên ngân hàng *"}),n.jsx("input",{type:"text",required:!0,value:D,onChange:I=>U(I.target.value),placeholder:"Cake / Timo...",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Số tài khoản (STK) *"}),n.jsx("input",{type:"text",required:!0,value:J,onChange:I=>se(I.target.value.trim()),placeholder:"9909088888888",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs font-mono font-bold text-sky-400"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Chủ tài khoản (không dấu)"}),n.jsx("input",{type:"text",value:re,onChange:I=>X(I.target.value),placeholder:"NGUYEN VAN A",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs font-mono"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Máy in / Ghi chú"}),n.jsx("input",{type:"text",value:ce,onChange:I=>ee(I.target.value),placeholder:"Bambu P1S / Khổ lớn...",className:"w-full rounded-lg border border-[#1E325C] bg-[#0F1930] px-3 py-2 text-xs"})]}),n.jsx("div",{children:n.jsxs("button",{type:"submit",disabled:T,className:"inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-60 px-4 py-2 text-xs font-bold text-slate-950",children:[n.jsx(ya,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:T?"Đang lưu...":"Lưu Cộng tác viên"})]})})]})]}),n.jsxs("div",{className:"rounded-xl border border-[#1E325C] bg-[#0B1324] p-5 space-y-3",children:[n.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-white",children:[n.jsx(vd,{className:"h-4 w-4 text-sky-400"}),n.jsxs("span",{children:["Danh sách Cộng tác viên hiện có (",a.length,")"]})]}),a.length===0?n.jsx("div",{className:"rounded-lg border border-dashed border-[#1E325C] p-6 text-center text-xs text-slate-400",children:"Chưa có cộng tác viên nào — hãy điền form ở trên để tham gia!"}):n.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:a.map(I=>n.jsxs("div",{className:"rounded-lg border border-[#1E325C] bg-[#0F1930] p-3.5 text-xs space-y-1.5",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx("span",{className:"font-bold text-white",children:I.name}),n.jsx("span",{className:"font-mono text-sky-400",children:I.phone})]}),n.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[n.jsx(gd,{className:"h-3.5 w-3.5 text-sky-400 shrink-0"}),n.jsxs("span",{children:[I.bankName," (",I.bankId,") · ",n.jsx("b",{className:"font-mono text-white",children:I.bankAccountNo})]})]}),I.note&&n.jsx("div",{className:"text-[11px] text-slate-400",children:I.note})]},I.id))})]})]})]})]})};function Kx(e){return e.length===10?`${e.slice(0,4)} ${e.slice(4,7)} ${e.slice(7)}`:e}const qx=({profile:e,lang:t})=>{var g,p,w;const[r,a]=E.useState(!0),s=(e.phone||"0789044703").replace(/\D/g,""),i=Kx(s||"0789044703"),o=((g=e.zaloLink)==null?void 0:g.trim())||(s?`https://zalo.me/${s}`:""),l=((p=e.telegramLink)==null?void 0:p.trim())||(s?`https://t.me/+84${s.replace(/^0/,"")}`:""),d=(w=e.email)!=null&&w.trim()?`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(e.email.trim())}`:"",u=s?`tel:${s}`:"";return n.jsxs("div",{className:"fixed bottom-5 right-4 sm:right-5 z-40 flex flex-col items-end gap-2.5 no-print",children:[r&&n.jsxs("div",{className:"flex flex-col items-end gap-2.5",children:[o&&n.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer",title:`Chat Zalo: ${i}`,"aria-label":`Chat Zalo ${i}`,className:"group relative flex items-center",children:[n.jsxs("span",{className:"hidden sm:inline-flex mr-2 rounded-lg border border-blue-400/40 bg-slate-950/90 px-2.5 py-1 text-[11px] font-semibold text-blue-200 shadow-lg opacity-0 translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0",children:["Chat Zalo · ",i]}),n.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg shadow-blue-600/35 ring-2 ring-white/20 transition-transform duration-150 group-hover:scale-110",children:n.jsxs("svg",{viewBox:"0 0 48 48",className:"h-6 w-6 fill-current","aria-hidden":"true",children:[n.jsx("path",{d:"M24 6C13.5 6 5 13.6 5 23c0 5 2.4 9.5 6.3 12.6L9.7 42l7-3.4c2.3.7 4.8 1.1 7.3 1.1 10.5 0 19-7.6 19-17S34.5 6 24 6z",fill:"currentColor",fillOpacity:"0.18"}),n.jsx("text",{x:"24",y:"28",textAnchor:"middle",fontSize:"14.5",fontWeight:"800",fontFamily:"Arial, sans-serif",fill:"#FFFFFF",children:"Zalo"})]})})]}),l&&n.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",title:"Chat Telegram Shop","aria-label":"Chat Telegram Shop",className:"group relative flex items-center",children:[n.jsx("span",{className:"hidden sm:inline-flex mr-2 rounded-lg border border-sky-400/40 bg-slate-950/90 px-2.5 py-1 text-[11px] font-semibold text-sky-200 shadow-lg opacity-0 translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0",children:"Telegram Shop"}),n.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg shadow-sky-500/35 ring-2 ring-white/20 transition-transform duration-150 group-hover:scale-110",children:n.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5 fill-current -ml-0.5","aria-hidden":"true",children:n.jsx("path",{d:"M21.9 4.2c.2-.8-.5-1.5-1.3-1.2L2.7 10c-.9.3-.9 1.6.1 1.9l4.5 1.4 1.7 5.4c.3.8 1.3 1 1.9.4l2.6-2.5 4.8 3.5c.7.5 1.7.1 1.9-.7l3.7-15.2zM9.4 13.7l8.2-5.1c.2-.1.4.2.2.3l-6.7 6.1-.3 2.9-1.4-4.2z"})})})]}),d&&n.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer",title:`Gửi Gmail: ${e.email}`,"aria-label":`Gửi Gmail ${e.email}`,className:"group relative flex items-center",children:[n.jsxs("span",{className:"hidden sm:inline-flex mr-2 rounded-lg border border-rose-400/40 bg-slate-950/90 px-2.5 py-1 text-[11px] font-semibold text-rose-200 shadow-lg opacity-0 translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0",children:["Gmail · ",e.email]}),n.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#EA4335] shadow-lg shadow-rose-500/30 ring-2 ring-[#EA4335]/80 transition-transform duration-150 group-hover:scale-110",children:n.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5","aria-hidden":"true",children:n.jsx("path",{fill:"#EA4335",d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"})})})]}),u&&n.jsxs("a",{href:u,title:`Gọi ngay: ${i}`,"aria-label":`Gọi ngay ${i}`,className:"group flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 pl-2 pr-2 sm:pl-3.5 sm:pr-1.5 py-1 text-white shadow-lg shadow-emerald-600/35 ring-2 ring-white/20 transition-all hover:scale-105",children:[n.jsx("span",{className:"hidden sm:inline font-mono text-xs font-extrabold tracking-tight whitespace-nowrap",children:i}),n.jsxs("span",{className:"relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500",children:[n.jsx("span",{className:"absolute inset-0 rounded-full bg-emerald-300/50 animate-ping"}),n.jsx(Oa,{className:"relative h-4 w-4 fill-current"})]})]})]}),n.jsx("button",{type:"button",onClick:()=>a(N=>!N),"aria-label":r?"Thu gọn liên hệ":"Liên hệ Shop",className:"inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-3 py-1.5 text-[11px] font-bold text-slate-200 shadow-lg backdrop-blur-md",children:r?n.jsxs(n.Fragment,{children:[n.jsx(Gn,{className:"h-3.5 w-3.5 text-slate-400"}),n.jsx("span",{children:t==="vi"?"Thu gọn":"Hide"})]}):n.jsxs(n.Fragment,{children:[n.jsx(z0,{className:"h-3.5 w-3.5 text-sky-400"}),n.jsx("span",{children:t==="vi"?"Liên hệ Shop":"Contact"})]})})]})};function Wx(){const e=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"),[t,r]=E.useState("vi"),[a,s]=E.useState(!0),[i,o]=E.useState(()=>Vi()),[l,d]=E.useState(()=>e&&window.location.hash==="#admin"),[u,g]=E.useState(()=>typeof window<"u"&&window.location.hash==="#ctv-in3d"),[p,w]=E.useState("overview"),[N,c]=E.useState(0),[k,C]=E.useState(!1),[h,m]=E.useState(!1),[S,P]=E.useState(null),[O,F]=E.useState(!1),[M,$]=E.useState(!1),[D,U]=E.useState([]),[J,se]=E.useState(""),[re,X]=E.useState("all"),[ce,ee]=E.useState(""),[T,A]=E.useState("business"),[R,f]=E.useState("");E.useEffect(()=>{Sf().then(({state:q})=>{o(q)})},[]),E.useEffect(()=>{typeof document<"u"&&(document.title=`${i.profile.name} — ${i.profile.brandName}`)},[i.profile.name,i.profile.brandName]),E.useEffect(()=>{const q=()=>{d(e&&window.location.hash==="#admin"),g(window.location.hash==="#ctv-in3d")};return window.addEventListener("hashchange",q),()=>window.removeEventListener("hashchange",q)},[e]),E.useEffect(()=>{const q=document.documentElement;a?q.classList.add("dark"):q.classList.remove("dark")},[a]),E.useEffect(()=>{if(!J)return;const q=setTimeout(()=>se(""),2800);return()=>clearTimeout(q)},[J]);const L=E.useRef(i);E.useEffect(()=>{L.current=i},[i]),E.useEffect(()=>{var be;if(!e||!((be=i.profile.telegramBotToken)!=null&&be.trim())||i.profile.telegramAutoSync===!1)return;let q=!1;const ie=setInterval(async()=>{if(q)return;const me=await _m(L.current);q||!me.changed||(o(me.nextState),await Ln(me.nextState),me.processedCount>0&&se(`✓ Đã đồng bộ ${me.processedCount} thao tác duyệt đơn từ Telegram Bot`))},4e3);return()=>{q=!0,clearInterval(ie)}},[e,i.profile.telegramBotToken,i.profile.telegramAutoSync]);const v=(q="overview",ie=0)=>{e&&(w(q),c(ie),window.location.hash="admin",d(!0),window.scrollTo({top:0,behavior:"smooth"}))},x=()=>{window.location.hash==="#admin"&&window.history.replaceState(null,"",window.location.pathname+window.location.search),d(!1),window.scrollTo({top:0,behavior:"smooth"})},j=q=>{o(ie=>({...ie,profile:q(ie.profile)}))},G=async()=>{m(!0);try{const q=await Ln(i);se(q.savedToFile?"Đã lưu nội dung vào máy tính (public/cms-data.json)!":"Đã lưu nội dung vào trình duyệt!")}finally{m(!1)}},V=q=>{const ie=i.products.findIndex(be=>be.id===q);v("products",ie>=0?ie:0)},W=(q,ie)=>{A(q),f(ie);const be=document.getElementById("contact");be&&be.scrollIntoView({behavior:"smooth"})},_=q=>{if(q.id==="custom-3d-printing-service"||q.code.toUpperCase().startsWith("IN3D")){P(null),$(!0);return}const ie=q.price<=0?t==="vi"?`Đăng ký tư vấn & Báo giá: ${q.code} (${q.name.vi})`:`Consultation & Quote: ${q.code} (${q.name.en})`:t==="vi"?`Hỏi giá sỉ / Đặt trước: ${q.code} (${q.name.vi})`:`Bulk Quote / Pre-order: ${q.code} (${q.name.en})`;W("business",ie)},Q=q=>{const ie=t==="vi"?`Hỗ trợ Đồ án / NCKH: ${q.title.vi}`:`Project / R&D Inquiry: ${q.title.en}`;W("project",ie)},te=()=>{X("project-kit");const q=document.getElementById("products");q&&q.scrollIntoView({behavior:"smooth"})},Z=q=>{U(ie=>ie.find(me=>me.product.id===q.id)?ie.map(me=>me.product.id===q.id?{...me,quantity:Math.min(q.stock,me.quantity+1)}:me):[...ie,{product:q,quantity:1}])},ke=q=>{q.stock<=0||(Z(q),se(t==="vi"?`Đã thêm "${q.code}" vào giỏ hàng`:`Added "${q.code}" to cart`))},I=q=>{q.stock<=0||(Z(q),F(!0))},K=(q,ie)=>{U(be=>be.map(me=>me.product.id===q?{...me,quantity:Math.min(me.product.stock,me.quantity+ie)}:me).filter(me=>me.quantity>0))},pe=q=>{U(ie=>ie.filter(be=>be.product.id!==q))},ye=async q=>{const ie=D.map(me=>({productId:me.product.id,code:me.product.code,name:me.product.name.vi,unitPrice:me.product.price,costPrice:me.product.costPrice,quantity:me.quantity,unit:me.product.unit})),be=await Td(i,{...q,items:ie,initialStatus:"pending"});return o(be.nextState),U([]),be.order},Y=D.reduce((q,ie)=>q+ie.quantity,0),xe=D.reduce((q,ie)=>q+ie.product.price*ie.quantity,0);return l&&e?n.jsx(Bx,{cmsData:i,setCmsData:o,initialTab:p,initialProductIdx:N,onExitAdmin:x}):u?n.jsx(zx,{cmsData:i,setCmsData:o,onExit:()=>{window.location.hash==="#ctv-in3d"&&window.history.replaceState(null,"",window.location.pathname+window.location.search),g(!1),window.scrollTo({top:0,behavior:"smooth"})}}):n.jsxs("div",{className:"min-h-screen bg-[#F1F5F9] text-slate-900 dark:bg-[#080D1A] dark:text-slate-100 font-sans",children:[n.jsx(Hf,{profile:i.profile,lang:t,setLang:r,darkMode:a,setDarkMode:s,cartCount:Y,cartTotal:xe,onOpenCart:()=>F(!0),searchQuery:ce,onSearchChange:ee,onSelectOriginFilter:X,showAdmin:e,inlineEditMode:k,onToggleInlineEdit:()=>C(q=>!q),onUpdateProfile:j,onOpenAdmin:()=>v("overview",0)}),J&&n.jsxs("div",{className:"fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-slate-900/95 px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-2xl backdrop-blur-md animate-modal",children:[n.jsx(rn,{className:"h-4 w-4 text-emerald-400 shrink-0"}),n.jsx("span",{children:J}),!k&&n.jsxs("button",{type:"button",onClick:()=>{se(""),F(!0)},className:"inline-flex items-center gap-1 rounded-lg bg-sky-500 hover:bg-sky-600 px-2.5 py-1 text-xs font-bold text-white",children:[n.jsx(ci,{className:"h-3 w-3"}),n.jsx("span",{children:t==="vi"?"Xem giỏ":"View Cart"})]})]}),k&&e&&n.jsxs("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-amber-400/60 bg-slate-950/95 px-4 py-2.5 text-xs text-white shadow-2xl backdrop-blur-md",children:[n.jsx("span",{className:"font-mono text-amber-300 font-semibold",children:"Chế độ sửa trực tiếp: bấm vào chữ có khung nét đứt để sửa"}),n.jsxs("button",{type:"button",onClick:()=>v("profile",0),className:"inline-flex items-center gap-1 rounded-lg border border-sky-400/50 bg-sky-500/15 px-3 py-1.5 font-semibold text-sky-300 hover:bg-sky-500/25",children:[n.jsx(wm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Mở Quản trị Logo / Ảnh / SP"})]}),n.jsxs("button",{type:"button",onClick:G,disabled:h,className:"inline-flex items-center gap-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 font-bold text-white disabled:opacity-60",children:[n.jsx(Sm,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:h?"Đang lưu...":"Lưu nội dung"})]}),n.jsxs("button",{type:"button",onClick:()=>C(!1),className:"inline-flex items-center gap-1 rounded-lg bg-slate-800 hover:bg-slate-700 px-3 py-1.5 font-semibold text-slate-200",children:[n.jsx(Kt,{className:"h-3.5 w-3.5"}),n.jsx("span",{children:"Hoàn tất"})]})]}),n.jsxs("main",{className:"no-print",children:[n.jsx($f,{profile:i.profile,lang:t,inlineEditMode:k,onUpdateProfile:j}),n.jsx(Kf,{profile:i.profile,products:i.products,lang:t,selectedOrigin:re,onSelectOrigin:X,searchQuery:ce,onSearchChange:ee,inlineEditMode:k,onUpdateProfile:j,onQuickEditProduct:V,onSelectProduct:q=>P(q),onAddToCart:ke,onBuyNow:I,onRequestQuote:_}),n.jsx(Wf,{profile:i.profile,services:i.services,lang:t,inlineEditMode:k,onUpdateProfile:j,onSelectService:Q,onBrowseProjectKits:te}),n.jsx(Qf,{profile:i.profile,lang:t,contactMode:T,setContactMode:A,prefilledSubject:R,inlineEditMode:k,onUpdateProfile:j})]}),n.jsx(Xf,{profile:i.profile,lang:t,onSelectOriginFilter:X,showAdmin:e,onOpenAdmin:()=>v("overview",0)}),n.jsx(qx,{profile:i.profile,lang:t}),n.jsx(qf,{product:S,lang:t,onClose:()=>P(null),onAddToCart:I,onOrderProduct:_}),n.jsx(Fx,{open:O,lang:t,profile:i.profile,cart:D,onClose:()=>F(!1),onUpdateQty:K,onRemoveItem:pe,onSubmitOrder:ye}),M&&n.jsx(Ux,{cmsData:i,onClose:()=>$(!1),onOrderCreated:q=>{o(ie=>{const be=ie.orders??[],me=q.totalAmount||0,fe=q.paymentMethod==="cod"?q.depositAmount??Math.round(me*.3):0,mt=q.paymentStatus==="qr_verified"?q.paymentMethod==="transfer"?me:fe:0,B=Math.max(0,me-mt),de=q.paymentMethod==="cod"?q.codRemainingAmount??Math.max(0,me-fe):0,b=[q.paymentMethod==="cod"&&fe>0?`Cọc 30%: ${ne(fe)} · Thu COD: ${ne(de)}`:"",q.note||""].filter(Boolean).join(" | "),H={id:q.id,createdAt:q.createdAt,customerName:q.customerName,customerPhone:q.customerPhone,customerEmail:q.customerEmail,shippingAddress:q.shippingMethod==="pickup"?"Nhận trực tiếp tại xưởng":q.shippingAddress||"",paymentMethod:q.paymentMethod||"cod",transferCode:q.transferCode,paymentStatus:q.paymentStatus||"cod_unpaid",note:b,status:"pending",items:[{productId:"custom-3d-printing-service",code:"IN3D",name:`In 3D ${q.material} (${q.weightGrams}g · ${q.fileSummary||q.fileName})`,unitPrice:q.totalAmount,costPrice:q.materialCostAmount||0,quantity:1,unit:"Đơn"}],totalAmount:me,depositAmount:mt,remainingAmount:B,stockDeducted:!1},ae=be.some(ue=>ue.id===q.id)?be:[H,...be],z=q.pendingAdminApproval?ie.print3dOrders??[]:[q,...ie.print3dOrders??[]];return{...ie,print3dOrders:z,orders:ae}})}})]})}um(document.getElementById("root")).render(n.jsx(E.StrictMode,{children:n.jsx(Wx,{})}));
