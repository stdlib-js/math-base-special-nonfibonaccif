"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var t=s(function(b,f){
var o=require('@stdlib/math-base-assert-is-nanf/dist'),q=require('@stdlib/math-base-assert-is-integerf/dist'),i=require('@stdlib/math-base-special-lnf/dist'),c=require('@stdlib/math-base-special-floorf/dist'),n=require('@stdlib/constants-float32-phi/dist'),I=require('@stdlib/constants-float32-pinf/dist'),u=2.23606797749979,v=i(n);function N(r){var e,a;return o(r)||q(r)===!1||r<1||r===I?NaN:(r+=1,e=i(r*u)/v,a=i(u*(r+e)-5+3/r)/v,c(r+a-2))}f.exports=N
});var l=t();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
