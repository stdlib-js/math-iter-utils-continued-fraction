"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var g=m(function(V,d){
var P=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,x=require('@stdlib/assert-is-finite/dist').isPrimitive,q=require('@stdlib/error-tools-fmtprodmsg/dist');function E(e,r){return P(r)?b(r,"iter")&&(e.iter=r.iter,!h(r.iter))?new TypeError(y('0e92t'),"iter",r.iter):b(r,"tol")&&(e.tol=r.tol,!x(r.tol)||r.tol<=0)?new TypeError(q('0e94R',"tol",r.tol)):null:new TypeError(q('0e92V',r));}d.exports=E
});var N=m(function(D,p){
var O=require('@stdlib/assert-is-iterator-like/dist'),T=require('@stdlib/math-base-special-abs/dist'),k=require('@stdlib/constants-float64-eps/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/assert-is-number/dist').isPrimitive,y=require('@stdlib/error-tools-fmtprodmsg/dist'),I=g(),o=1e-50;function j(e){var r,l,f,a,n,u,i,t,v,s;if(!O(e))throw new TypeError(y('0e93w',e));if(l={iter:1e308,tol:k},arguments.length>1&&(f=I(l,arguments[1]),f))throw f;if(n=e.next(),n.done)return null;if(a=n.value,!w(a)||c(a))return a;for(t=a,t===0&&(t=o),u=t,i=0,s=1;s<l.iter&&(n=e.next(),!n.done);){if(s+=1,v=n.value,!w(v)||c(v)){t=NaN;break}if(i+=v,i===0&&(i=o),u=v+1/u,u===0&&(u=o),i=1/i,r=u*i,t*=r,T(r-1)<=l.tol)break}return s<=1?a:t}p.exports=j
});var C=N();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
