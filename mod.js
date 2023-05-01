// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&j.call(t,r)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var m=s()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[_],r=d(t,_);try{t[_]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[_]=e:delete t[_],n}:function(t){return v.call(t)},w=Boolean.prototype.toString;var g=s();function O(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function h(t){return y(t)||O(t)}function E(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",O);var P="object"==typeof self?self:null,S="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof T?T:null;var N=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(S)return S;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),A=N.document&&N.document.childNodes,x=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",F);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function k(t){return null!==t&&"object"==typeof t}function z(t){var r,e,n,o;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return k(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(k,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(k));var C="function"==typeof t||"object"==typeof x||"function"==typeof A?function(t){return z(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?z(t).toLowerCase():r};function G(t){return"function"===C(t)}function J(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&G(t.next)}function M(t){return Math.abs(t)}function L(t){return t!=t}function R(t){return"number"==typeof t}var U=Number,Y=U.prototype.toString;var X=s();function q(t){return"object"==typeof t&&(t instanceof U||(X?function(t){try{return Y.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function D(t){return R(t)||q(t)}function H(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}p(D,"isPrimitive",R),p(D,"isObject",q);var K,Q=Object.getPrototypeOf;K=G(Object.getPrototypeOf)?Q:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var W=K;var Z=Object.prototype;function $(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),W(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&G(r.constructor)&&"[object Function]"===m(r.constructor)&&d(r,"isPrototypeOf")&&G(r.isPrototypeOf)&&(r===Z||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}var tt=Number.POSITIVE_INFINITY,rt=U.NEGATIVE_INFINITY,et=Math.floor;function nt(t){return t<tt&&t>rt&&et(r=t)===r;var r}function ot(t){return R(t)&&nt(t)}function ut(t){return q(t)&&nt(t.valueOf())}function it(t){return ot(t)||ut(t)}function ct(t){return ot(t)&&t>=0}function ft(t){return ut(t)&&t.valueOf()>=0}function lt(t){return ct(t)||ft(t)}function at(t){return t==t&&t>rt&&t<tt}function pt(t){return R(t)&&at(t)}function yt(t){return q(t)&&at(t.valueOf())}function bt(t){return pt(t)||yt(t)}function st(t,r){return $(r)?d(r,"iter")&&(t.iter=r.iter,!ct(r.iter))?new TypeError(H("0Jz35"),"iter",r.iter):d(r,"tol")&&(t.tol=r.tol,!pt(r.tol)||r.tol<=0)?new TypeError(H("0Jz4e","tol",r.tol)):null:new TypeError(H("0Jz2h",r))}p(it,"isPrimitive",ot),p(it,"isObject",ut),p(lt,"isPrimitive",ct),p(lt,"isObject",ft),p(bt,"isPrimitive",pt),p(bt,"isObject",yt);function vt(t){var r,e,n,o,u,i,c,f,l,a;if(!J(t))throw new TypeError(H("0Jz49",t));if(e={iter:1e308,tol:2220446049250313e-31},arguments.length>1&&(n=st(e,arguments[1])))throw n;if((u=t.next()).done)return null;if(!R(o=u.value)||L(o))return o;for(0===(f=o)&&(f=1e-50),i=f,c=0,a=1;a<e.iter&&!(u=t.next()).done;){if(a+=1,!R(l=u.value)||L(l)){f=NaN;break}if(0===(c+=l)&&(c=1e-50),0===(i=l+1/i)&&(i=1e-50),f*=r=i*(c=1/c),M(r-1)<=e.tol)break}return a<=1?o:f}export{vt as default};
//# sourceMappingURL=mod.js.map
