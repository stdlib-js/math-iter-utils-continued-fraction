"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var g=m(function(V,d){"use strict";var P=require("@stdlib/assert-is-plain-object"),b=require("@stdlib/assert-has-own-property"),h=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,x=require("@stdlib/assert-is-finite").isPrimitive,q=require("@stdlib/string-format");function E(e,r){return P(r)?b(r,"iter")&&(e.iter=r.iter,!h(r.iter))?new TypeError("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter):b(r,"tol")&&(e.tol=r.tol,!x(r.tol)||r.tol<=0)?new TypeError(q("invalid option. `%s` option must be a positive finite number. Option: `%s`.","tol",r.tol)):null:new TypeError(q("invalid argument. Options argument must be an object. Value: `%s`.",r))}d.exports=E});var N=m(function(D,p){"use strict";var O=require("@stdlib/assert-is-iterator-like"),T=require("@stdlib/math-base-special-abs"),k=require("@stdlib/constants-float64-eps"),c=require("@stdlib/math-base-assert-is-nan"),w=require("@stdlib/assert-is-number").isPrimitive,y=require("@stdlib/string-format"),I=g(),o=1e-50;function j(e){var r,l,f,a,n,u,i,t,v,s;if(!O(e))throw new TypeError(y("invalid argument. Must provide an iterator. Value: `%s`.",e));if(l={iter:1e308,tol:k},arguments.length>1&&(f=I(l,arguments[1]),f))throw f;if(n=e.next(),n.done)return null;if(a=n.value,!w(a)||c(a))return a;for(t=a,t===0&&(t=o),u=t,i=0,s=1;s<l.iter&&(n=e.next(),!n.done);){if(s+=1,v=n.value,!w(v)||c(v)){t=NaN;break}if(i+=v,i===0&&(i=o),u=v+1/u,u===0&&(u=o),i=1/i,r=u*i,t*=r,T(r-1)<=l.tol)break}return s<=1?a:t}p.exports=j});var C=N();module.exports=C;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
