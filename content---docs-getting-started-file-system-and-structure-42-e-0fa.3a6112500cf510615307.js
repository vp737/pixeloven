/*! For license information please see content---docs-getting-started-file-system-and-structure-42-e-0fa.3a6112500cf510615307.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return f}));r(58),r(172),r(31),r(22),r(23),r(59),r(173);var n=r(171);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u={id:"file-system-and-structure",title:"File System and Structure"},c=[],a={rightToc:c},i="wrapper";function f(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["components"]);return Object(n.b)(i,o({},a,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Show what is generated content and what it means"))}f.isMDXComponent=!0},170:function(e,t,r){"use strict";var n=r(12);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n),u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},a=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)};var i="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,a=e.parentName,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),l=c(r),s=n,p=l[a+"."+s]||l[s]||f[s]||u;return r?o.a.createElement(p,Object.assign({},{ref:t},i,{components:r})):o.a.createElement(p,Object.assign({},{ref:t},i))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,c=new Array(u);c[0]=l;var a={};for(var f in t)hasOwnProperty.call(t,f)&&(a[f]=t[f]);a.originalType=e,a[i]="string"==typeof e?e:n,c[1]=a;for(var s=2;s<u;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},172:function(e,t,r){"use strict";var n=r(9),o=r(60)(!1),u=[].indexOf,c=!!u&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(c||!r(170)(u)),"Array",{indexOf:function(e){return c?u.apply(this,arguments)||0:o(this,e,arguments[1])}})},173:function(e,t,r){"use strict";e.exports=r(174)},174:function(e,t,r){"use strict";var n=r(175),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||b}function O(){}function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=w.prototype;var j=S.prototype=new O;j.constructor=S,n(j,w.prototype),j.isPureReactComponent=!0;var x={current:null},_={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var f=Array(i),l=0;l<i;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:c,ref:a,props:o,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,R=[];function T(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var i=!1;if(null===t)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case u:case c:i=!0}}if(i)return n(o,t,""===r?"."+F(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var l=r+F(a=t[f],f);i+=e(a,l,n,o)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=v&&t[v]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),f=0;!(a=t.next()).done;)i+=e(a=a.value,l=r+F(a,f++),n,o);else if("object"===a)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return i}(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),M(e,N,t=T(t,u,n,o)),A(t)}function D(){var e=x.current;if(null===e)throw Error(h(321));return e}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,I,t=T(null,null,t,r)),A(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:w,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,r){return D().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,r){return D().useReducer(e,t,r)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:a,Profiler:f,StrictMode:i,Suspense:y,createElement:C,cloneElement:function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=_.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)k.call(t,l)&&!E.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:u,type:e.type,key:c,ref:a,props:o,_owner:i}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n}},L={default:U},V=L&&U||L;e.exports=V.default||V},175:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,a,i=c(e),f=1;f<arguments.length;f++){for(var l in r=Object(arguments[f]))o.call(r,l)&&(i[l]=r[l]);if(n){a=n(r);for(var s=0;s<a.length;s++)u.call(r,a[s])&&(i[a[s]]=r[a[s]])}}return i}}}]);