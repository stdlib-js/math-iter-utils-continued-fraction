// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-finite@esm/index.mjs";function j(t,e){return o(e)?m(e,"iter")&&(t.iter=e.iter,!d(e.iter))?new TypeError(n("0Jz35"),"iter",e.iter):m(e,"tol")&&(t.tol=e.tol,!l(e.tol)||e.tol<=0)?new TypeError(n("0Jz4e","tol",e.tol)):null:new TypeError(n("0Jz2h",e))}function p(o){var m,d,l,p,a,h,f,b,v,c;if(!t(o))throw new TypeError(n("0Jz49",o));if(d={iter:1e308,tol:s},arguments.length>1&&(l=j(d,arguments[1])))throw l;if((a=o.next()).done)return null;if(p=a.value,!i(p)||r(p))return p;for(0===(b=p)&&(b=1e-50),h=b,f=0,c=1;c<d.iter&&!(a=o.next()).done;){if(c+=1,v=a.value,!i(v)||r(v)){b=NaN;break}if(0===(f+=v)&&(f=1e-50),0===(h=v+1/h)&&(h=1e-50),b*=m=h*(f=1/f),e(m-1)<=d.tol)break}return c<=1?p:b}export{p as default};
//# sourceMappingURL=index.mjs.map
