// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-finite@v0.2.1-esm/index.mjs";var a=1e-50;function j(j){var p,v,h,f,b,c,g,x,u,w;if(!t(j))throw new TypeError(n("0e93w",j));if(v={iter:1e308,tol:s},arguments.length>1&&(h=function(t,e){return o(e)?m(e,"iter")&&(t.iter=e.iter,!d(e.iter))?new TypeError(n("0e92t"),"iter",e.iter):m(e,"tol")&&(t.tol=e.tol,!l(e.tol)||e.tol<=0)?new TypeError(n("0e94R","tol",e.tol)):null:new TypeError(n("0e92V",e))}(v,arguments[1]),h))throw h;if((b=j.next()).done)return null;if(f=b.value,!i(f)||r(f))return f;for(0===(x=f)&&(x=a),c=x,g=0,w=1;w<v.iter&&!(b=j.next()).done;){if(w+=1,u=b.value,!i(u)||r(u)){x=NaN;break}if(0===(g+=u)&&(g=a),0===(c=u+1/c)&&(c=a),x*=p=c*(g=1/g),e(p-1)<=v.tol)break}return w<=1?f:x}export{j as default};
//# sourceMappingURL=index.mjs.map
