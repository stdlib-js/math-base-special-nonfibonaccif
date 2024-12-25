// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor,t="function"==typeof Math.fround?Math.fround:null;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;var f,u="function"==typeof Symbol?Symbol:void 0,i="function"==typeof u?u.toStringTag:"";f=o&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,o,f,u;if(null==r)return e.call(r);t=r[i],u=i,n=null!=(f=r)&&a.call(f,u);try{r[i]=void 0}catch(n){return e.call(r)}return o=e.call(r),n?r[i]=t:delete r[i],o}:function(r){return e.call(r)};var c=f,y="function"==typeof Float32Array;var l=Number.POSITIVE_INFINITY,v="function"==typeof Float32Array?Float32Array:null;var p="function"==typeof Float32Array?Float32Array:void 0;var b=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,5e40]),t=n,r=(y&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===l}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")},w=new b(1);var A="function"==typeof t?t:function(r){return w[0]=r,w[0]};var m="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null;var h="function"==typeof Uint32Array?Uint32Array:void 0;var S=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(m&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")},F=new b(1),N=new S(F.buffer);function U(r){return F[0]=r,N[0]}var s=new S(1),g=new b(s.buffer);var I=new b(1);new S(I.buffer)[0]=4286578688;var j=I[0],O=2139095040,T=127,E=8388607;var M=.69313812256,P=90580006145e-16,x=33554432,V=.3333333333333333;function Y(n){var t,o,e,a,f,u,i,c,y,l,v,p,b;return 0===n?j:r(n)||n<0?NaN:(f=0,(o=U(n=A(n)))<8388608&&(f-=25,o=U(n=A(n*x))),o>=O?A(n+n):(f=A(f+A((o>>23)-T)),b=(o&=E)|1065353216^(c=o+4913952&8388608),s[0]=b,n=g[0],f=A(f+(c>>23)),i=A(n-1),(E&A(32768+o))<49152?0===i?0===f?0:A(A(f*M)+A(f*P)):(u=A(A(i*i)*A(.5-A(V*i))),A(0===f?i-u:A(f*M)-A(A(u-A(f*P))-i))):(l=A(i/A(2+i)),p=A(l*l),c=o-3187664,v=A(p*p),y=3523208-o,a=A(v*A(function(r){return 0===r?.40000972152:.40000972152+.24279078841*r}(v))),e=A(p*A(function(r){return 0===r?.66666662693:.66666662693+.28498786688*r}(v))),c|=y,u=A(e+a),c>0?(t=A(.5*A(i*i)),A(0===f?i-A(t-A(l*A(t+u))):A(f*M)-A(A(t-A(l*A(t+u)+A(f*P)))-i))):A(0===f?i-A(l*A(i-u)):A(f*M)-A(A(A(l*A(i-u))-A(f*P))-i)))))}var _=A(1.618033988749895),k=new b(1);new S(k.buffer)[0]=2139095040;var q=k[0],z=2.23606797749979,B=Y(_);function C(t){var o,e,a;return r(t)||!1==(a=A(a=t),n(a)===a)||t<1||t===q?NaN:(o=Y((t+=1)*z)/B,e=Y(z*(t+o)-5+3/t)/B,n(t+e-2))}export{C as default};
//# sourceMappingURL=mod.js.map