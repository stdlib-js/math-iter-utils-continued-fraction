// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,o=Object.prototype,a=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,s=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,e,t){var n,i,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(s.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,i&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,e,t.get),v&&c&&c.call(r,e,t.set),r},v=i,p=l,g=n()?v:p;var m=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=m;var b=function(r){return"boolean"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return h&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,j=w;var E=function(r){return j.call(r)},P=Object.prototype.hasOwnProperty;var O=function(r,e){return null!=r&&P.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=O,x=_,V=w;var S=E,k=function(r){var e,t,n;if(null==r)return V.call(r);t=r[x],e=T(r,x);try{r[x]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[x]=t:delete r[x],n},I=y()?k:S,A=Boolean.prototype.toString;var F=I,R=function(r){try{return A.call(r),!0}catch(r){return!1}},$=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?R(r):"[object Boolean]"===F(r)))},N=b,C=M;var B=d,G=function(r){return N(r)||C(r)},L=M;B(G,"isPrimitive",b),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=e,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;d(ir,"REGEXP",nr());var or=ir,ar=I;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===ar(r)},cr=ur;var sr=function(r){return null!==r&&"object"==typeof r};d(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var fr=sr;var lr=I,vr=or.REGEXP,pr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var gr=function(r){var e,t,n;if(("Object"===(t=lr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return pr(r)?"Buffer":t},mr=gr;var dr=gr;var br=function(r){var e;return null===r?"null":"object"===(e=typeof r)?mr(r).toLowerCase():e},hr=function(r){return dr(r).toLowerCase()},yr=tr()?hr:br;var wr=function(r){return"function"===yr(r)},jr=wr;var Er=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&jr(r.next)};var Pr=function(r){return Math.abs(r)};var Or=function(r){return r!=r};var _r=function(r){return"number"==typeof r},Tr=Number,xr=Tr.prototype.toString;var Vr=I,Sr=Tr,kr=function(r){try{return xr.call(r),!0}catch(r){return!1}},Ir=y();var Ar=function(r){return"object"==typeof r&&(r instanceof Sr||(Ir?kr(r):"[object Number]"===Vr(r)))},Fr=_r,Rr=Ar;var $r=d,Mr=function(r){return Fr(r)||Rr(r)},Nr=Ar;$r(Mr,"isPrimitive",_r),$r(Mr,"isObject",Nr);var Cr=Mr;var Br=function(r){return"string"==typeof r},Gr=String.prototype.valueOf;var Lr=I,Zr=function(r){try{return Gr.call(r),!0}catch(r){return!1}},Wr=y();var Xr=function(r){return"object"==typeof r&&(r instanceof String||(Wr?Zr(r):"[object String]"===Lr(r)))},zr=Br,Ur=Xr;var Yr=d,Dr=function(r){return zr(r)||Ur(r)},qr=Xr;Yr(Dr,"isPrimitive",Br),Yr(Dr,"isObject",qr);var Hr=Dr,Jr=Math.floor;var Kr=function(r){return Jr(r)===r},Qr=Kr;var re=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Qr(r.length)&&r.length>=0&&r.length<=9007199254740991},ee=Number.POSITIVE_INFINITY,te=Tr.NEGATIVE_INFINITY,ne=ee,ie=te,oe=Kr;var ae=function(r){return r<ne&&r>ie&&oe(r)},ue=Cr.isPrimitive,ce=ae;var se=function(r){return ue(r)&&ce(r)},fe=Cr.isObject,le=ae;var ve=function(r){return fe(r)&&le(r.valueOf())},pe=se,ge=ve;var me=d,de=function(r){return pe(r)||ge(r)},be=ve;me(de,"isPrimitive",se),me(de,"isObject",be);var he=de,ye=Cr.isPrimitive,we=Or;var je=function(r){return ye(r)&&we(r)},Ee=Cr.isObject,Pe=Or;var Oe=function(r){return Ee(r)&&Pe(r.valueOf())},_e=je,Te=Oe;var xe=d,Ve=function(r){return _e(r)||Te(r)},Se=Oe;xe(Ve,"isPrimitive",je),xe(Ve,"isObject",Se);var ke=re,Ie=he.isPrimitive,Ae=Hr.isPrimitive,Fe=Ve.isPrimitive;var Re=function(r,e,t){var n,i,o;if(!ke(r)&&!Ae(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ie(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ae(r)){if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Fe(e)){for(o=i;o<n;o++)if(Fe(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},$e=Hr.isPrimitive;var Me=function(r){if(!$e(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ne=Hr.isPrimitive;var Ce=function(r){if(!Ne(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Be=Me,Ge=Ce,Le=Hr.isPrimitive;var Ze=function(r){return Le(r)&&r===Ge(r)&&r!==Be(r)},We=ee,Xe=te;var ze=function(r){return r==r&&r>Xe&&r<We},Ue=he.isPrimitive;var Ye=function(r){return Ue(r)&&r>=0},De=he.isObject;var qe=function(r){return De(r)&&r.valueOf()>=0},He=Ye,Je=qe;var Ke=d,Qe=function(r){return He(r)||Je(r)},rt=qe;Ke(Qe,"isPrimitive",Ye),Ke(Qe,"isObject",rt);var et=Qe,tt=et.isPrimitive,nt=Hr.isPrimitive;var it=function(r,e){var t,n;if(!nt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!tt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ot=he.isPrimitive,at=Hr.isPrimitive;var ut=it,ct=function(r,e,t){var n,i;if(!at(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!at(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ot(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var st=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ct(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ut("0",i):ut("0",i)+r,n&&(r="-"+r)),r},ft=Ze,lt=Ce,vt=Me,pt=ze,gt=Cr.isPrimitive,mt=st;var dt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!pt(n)){if(!gt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=mt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=mt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=ft(r.specifier)?lt(t):vt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},bt=Hr.isPrimitive,ht=/[-\/\\^$*+?.()|[\]{}]/g;var yt=function(r){var e,t;if(!bt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(ht,"\\$&"):(e=(e=r.substring(1,t)).replace(ht,"\\$&"),r=r[0]+e+r.substring(t))},wt=RegExp.prototype.exec;var jt=I,Et=function(r){try{return wt.call(r),!0}catch(r){return!1}},Pt=y();var Ot=yt,_t=wr,Tt=Hr.isPrimitive,xt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Pt?Et(r):"[object RegExp]"===jt(r)))};var Vt=Ze,St=Ce,kt=Me,It=function(r,e,t){if(!Tt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Tt(e))e=Ot(e),e=new RegExp(e,"g");else if(!xt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Tt(t)&&!_t(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},At=ze,Ft=Cr.isPrimitive,Rt=Pr,$t=/e\+(\d)$/,Mt=/e-(\d)$/,Nt=/^(\d+)$/,Ct=/^(\d+)e/,Bt=/\.0$/,Gt=/\.0*e/,Lt=/(\..*[^0])0*e/;var Zt=function(r){var e,t,n=parseFloat(r.arg);if(!At(n)){if(!Ft(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Rt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=It(t,Lt,"$1e"),t=It(t,Gt,"e"),t=It(t,Bt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=It(t,$t,"e+0$1"),t=It(t,Mt,"e-0$1"),r.alternate&&(t=It(t,Nt,"$1."),t=It(t,Ct,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Vt(r.specifier)?St(t):kt(t)},Wt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Xt=it;var zt=Hr.isPrimitive,Ut=Re,Yt=Or,Dt=dt,qt=Zt,Ht=function(r){var e,t,n,i,o;for(e=0,n=[],o=Wt.exec(r);o;)(t=r.slice(e,Wt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Wt.lastIndex,o=Wt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Jt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Xt(" ",n):Xt(" ",n)+r},Kt=st,Qt=String.fromCharCode;var rn=function(r){var e,t,n,i,o,a,u,c,s;if(!zt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Ht(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],zt(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Ut(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Yt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Yt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Dt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Yt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Yt(o)?String(n.arg):Qt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=qt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Kt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Jt(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},en=ur;var tn=function(r){return"object"==typeof r&&null!==r&&!en(r)},nn=Object.getPrototypeOf;var on=function(r){return r.__proto__},an=I,un=on;var cn=function(r){var e=un(r);return e||null===e?e:"[object Function]"===an(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},sn=nn,fn=cn,ln=wr(Object.getPrototypeOf)?sn:fn;var vn=tn,pn=wr,gn=function(r){return null==r?null:(r=Object(r),ln(r))},mn=O,dn=I,bn=Object.prototype;var hn=function(r){var e;return!!vn(r)&&(!(e=gn(r))||!mn(r,"constructor")&&mn(e,"constructor")&&pn(e.constructor)&&"[object Function]"===dn(e.constructor)&&mn(e,"isPrototypeOf")&&pn(e.isPrototypeOf)&&(e===bn||function(r){var e;for(e in r)if(!mn(r,e))return!1;return!0}(r)))},yn=hn,wn=Cr.isPrimitive,jn=ze;var En=function(r){return wn(r)&&jn(r)},Pn=Cr.isObject,On=ze;var _n=function(r){return Pn(r)&&On(r.valueOf())},Tn=En,xn=_n;var Vn=d,Sn=function(r){return Tn(r)||xn(r)},kn=_n;Vn(Sn,"isPrimitive",En),Vn(Sn,"isObject",kn);var In=yn,An=O,Fn=et.isPrimitive,Rn=Sn.isPrimitive,$n=rn;var Mn=Er,Nn=Pr,Cn=2220446049250313e-31,Bn=Or,Gn=Cr.isPrimitive,Ln=rn,Zn=function(r,e){return In(e)?An(e,"iter")&&(r.iter=e.iter,!Fn(e.iter))?new TypeError("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter):An(e,"tol")&&(r.tol=e.tol,!Rn(e.tol)||e.tol<=0)?new TypeError($n("invalid option. `%s` option must be a positive finite number. Option: `%s`.","tol",e.tol)):null:new TypeError($n("invalid argument. Options argument must be an object. Value: `%s`.",e))};var Wn=function(r){var e,t,n,i,o,a,u,c,s,f;if(!Mn(r))throw new TypeError(Ln("invalid argument. Must provide an iterator. Value: `%s`.",r));if(t={iter:1e308,tol:Cn},arguments.length>1&&(n=Zn(t,arguments[1])))throw n;if((o=r.next()).done)return null;if(i=o.value,!Gn(i)||Bn(i))return i;for(0===(c=i)&&(c=1e-50),a=c,u=0,f=1;f<t.iter&&!(o=r.next()).done;){if(f+=1,s=o.value,!Gn(s)||Bn(s)){c=NaN;break}if(0===(u+=s)&&(u=1e-50),0===(a=s+1/a)&&(a=1e-50),c*=e=a*(u=1/u),Nn(e-1)<=t.tol)break}return f<=1?i:c},Xn=Wn;export{Xn as default};
//# sourceMappingURL=mod.js.map
