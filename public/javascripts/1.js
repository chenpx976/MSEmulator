(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{494:function(n,t,r){"use strict";var u={};r.r(u),r.d(u,"EPSILON",function(){return s}),r.d(u,"ARRAY_TYPE",function(){return h}),r.d(u,"RANDOM",function(){return M}),r.d(u,"setMatrixArrayType",function(){}),r.d(u,"toRadian",function(){}),r.d(u,"equals",function(){});var o={};r.r(o),r.d(o,"create",function(){return l}),r.d(o,"clone",function(){return m}),r.d(o,"copy",function(){return b}),r.d(o,"identity",function(){return p}),r.d(o,"fromValues",function(){return q}),r.d(o,"set",function(){return w}),r.d(o,"invert",function(){return x}),r.d(o,"determinant",function(){return y}),r.d(o,"multiply",function(){return v}),r.d(o,"rotate",function(){return g}),r.d(o,"scale",function(){return A}),r.d(o,"translate",function(){return P}),r.d(o,"fromRotation",function(){return I}),r.d(o,"fromScaling",function(){return R}),r.d(o,"fromTranslation",function(){return E}),r.d(o,"str",function(){return S}),r.d(o,"frob",function(){return F}),r.d(o,"add",function(){return D}),r.d(o,"subtract",function(){return T}),r.d(o,"multiplyScalar",function(){return L}),r.d(o,"multiplyScalarAndAdd",function(){return V}),r.d(o,"exactEquals",function(){return Y}),r.d(o,"equals",function(){return z}),r.d(o,"mul",function(){return Q}),r.d(o,"sub",function(){return j});var e={};r.r(e),r.d(e,"create",function(){return O}),r.d(e,"clone",function(){return X}),r.d(e,"copy",function(){return Z}),r.d(e,"fromValues",function(){return k}),r.d(e,"set",function(){return J}),r.d(e,"identity",function(){return N}),r.d(e,"transpose",function(){return W}),r.d(e,"invert",function(){return _}),r.d(e,"adjoint",function(){return B}),r.d(e,"determinant",function(){return C}),r.d(e,"multiply",function(){return G}),r.d(e,"translate",function(){return H}),r.d(e,"scale",function(){return K}),r.d(e,"rotate",function(){return U}),r.d(e,"rotateX",function(){return $}),r.d(e,"rotateY",function(){return nn}),r.d(e,"rotateZ",function(){return tn}),r.d(e,"fromTranslation",function(){return rn}),r.d(e,"fromScaling",function(){return un}),r.d(e,"fromRotation",function(){return on}),r.d(e,"fromXRotation",function(){return en}),r.d(e,"fromYRotation",function(){return an}),r.d(e,"fromZRotation",function(){return cn}),r.d(e,"fromRotationTranslation",function(){return fn}),r.d(e,"fromQuat2",function(){return dn}),r.d(e,"getTranslation",function(){return sn}),r.d(e,"getScaling",function(){return hn}),r.d(e,"getRotation",function(){return Mn}),r.d(e,"fromRotationTranslationScale",function(){return ln}),r.d(e,"fromRotationTranslationScaleOrigin",function(){return mn}),r.d(e,"fromQuat",function(){return bn}),r.d(e,"frustum",function(){return pn}),r.d(e,"perspective",function(){return qn}),r.d(e,"perspectiveFromFieldOfView",function(){return wn}),r.d(e,"ortho",function(){return xn}),r.d(e,"lookAt",function(){return yn}),r.d(e,"targetTo",function(){return vn}),r.d(e,"str",function(){return gn}),r.d(e,"frob",function(){return An}),r.d(e,"add",function(){return Pn}),r.d(e,"subtract",function(){return In}),r.d(e,"multiplyScalar",function(){return Rn}),r.d(e,"multiplyScalarAndAdd",function(){return En}),r.d(e,"exactEquals",function(){return Sn}),r.d(e,"equals",function(){return Fn}),r.d(e,"mul",function(){return Dn}),r.d(e,"sub",function(){return Tn});var a={};r.r(a),r.d(a,"create",function(){return Ln}),r.d(a,"fromMat4",function(){}),r.d(a,"clone",function(){}),r.d(a,"copy",function(){}),r.d(a,"fromValues",function(){}),r.d(a,"set",function(){}),r.d(a,"identity",function(){}),r.d(a,"transpose",function(){}),r.d(a,"invert",function(){}),r.d(a,"adjoint",function(){}),r.d(a,"determinant",function(){}),r.d(a,"multiply",function(){}),r.d(a,"translate",function(){}),r.d(a,"rotate",function(){}),r.d(a,"scale",function(){}),r.d(a,"fromTranslation",function(){}),r.d(a,"fromRotation",function(){}),r.d(a,"fromScaling",function(){}),r.d(a,"fromMat2d",function(){}),r.d(a,"fromQuat",function(){}),r.d(a,"normalFromMat4",function(){}),r.d(a,"projection",function(){}),r.d(a,"str",function(){}),r.d(a,"frob",function(){}),r.d(a,"add",function(){}),r.d(a,"subtract",function(){}),r.d(a,"multiplyScalar",function(){}),r.d(a,"multiplyScalarAndAdd",function(){}),r.d(a,"exactEquals",function(){}),r.d(a,"equals",function(){}),r.d(a,"mul",function(){}),r.d(a,"sub",function(){});var i={};r.r(i),r.d(i,"create",function(){return Vn}),r.d(i,"clone",function(){}),r.d(i,"length",function(){}),r.d(i,"fromValues",function(){return Yn}),r.d(i,"copy",function(){}),r.d(i,"set",function(){}),r.d(i,"add",function(){}),r.d(i,"subtract",function(){}),r.d(i,"multiply",function(){}),r.d(i,"divide",function(){}),r.d(i,"ceil",function(){}),r.d(i,"floor",function(){}),r.d(i,"min",function(){}),r.d(i,"max",function(){}),r.d(i,"round",function(){}),r.d(i,"scale",function(){}),r.d(i,"scaleAndAdd",function(){}),r.d(i,"distance",function(){}),r.d(i,"squaredDistance",function(){}),r.d(i,"squaredLength",function(){}),r.d(i,"negate",function(){}),r.d(i,"inverse",function(){}),r.d(i,"normalize",function(){return zn}),r.d(i,"dot",function(){return Qn}),r.d(i,"cross",function(){return jn}),r.d(i,"lerp",function(){}),r.d(i,"hermite",function(){}),r.d(i,"bezier",function(){}),r.d(i,"random",function(){}),r.d(i,"transformMat4",function(){}),r.d(i,"transformMat3",function(){}),r.d(i,"transformQuat",function(){}),r.d(i,"rotateX",function(){}),r.d(i,"rotateY",function(){}),r.d(i,"rotateZ",function(){}),r.d(i,"angle",function(){}),r.d(i,"str",function(){}),r.d(i,"exactEquals",function(){}),r.d(i,"equals",function(){}),r.d(i,"sub",function(){}),r.d(i,"mul",function(){}),r.d(i,"div",function(){}),r.d(i,"dist",function(){}),r.d(i,"sqrDist",function(){}),r.d(i,"len",function(){return On}),r.d(i,"sqrLen",function(){}),r.d(i,"forEach",function(){});var c={};r.r(c),r.d(c,"create",function(){}),r.d(c,"clone",function(){return Xn}),r.d(c,"fromValues",function(){return Zn}),r.d(c,"copy",function(){return kn}),r.d(c,"set",function(){return Jn}),r.d(c,"add",function(){return Nn}),r.d(c,"subtract",function(){}),r.d(c,"multiply",function(){}),r.d(c,"divide",function(){}),r.d(c,"ceil",function(){}),r.d(c,"floor",function(){}),r.d(c,"min",function(){}),r.d(c,"max",function(){}),r.d(c,"round",function(){}),r.d(c,"scale",function(){return Wn}),r.d(c,"scaleAndAdd",function(){}),r.d(c,"distance",function(){}),r.d(c,"squaredDistance",function(){}),r.d(c,"length",function(){return _n}),r.d(c,"squaredLength",function(){return Bn}),r.d(c,"negate",function(){}),r.d(c,"inverse",function(){}),r.d(c,"normalize",function(){return Cn}),r.d(c,"dot",function(){return Gn}),r.d(c,"lerp",function(){return Hn}),r.d(c,"random",function(){}),r.d(c,"transformMat4",function(){}),r.d(c,"transformQuat",function(){}),r.d(c,"str",function(){}),r.d(c,"exactEquals",function(){return Kn}),r.d(c,"equals",function(){return Un}),r.d(c,"sub",function(){}),r.d(c,"mul",function(){}),r.d(c,"div",function(){}),r.d(c,"dist",function(){}),r.d(c,"sqrDist",function(){}),r.d(c,"len",function(){}),r.d(c,"sqrLen",function(){}),r.d(c,"forEach",function(){});var f={};r.r(f),r.d(f,"create",function(){return $n}),r.d(f,"identity",function(){return nt}),r.d(f,"setAxisAngle",function(){return tt}),r.d(f,"getAxisAngle",function(){return rt}),r.d(f,"multiply",function(){return ut}),r.d(f,"rotateX",function(){return ot}),r.d(f,"rotateY",function(){return et}),r.d(f,"rotateZ",function(){return at}),r.d(f,"calculateW",function(){return it}),r.d(f,"slerp",function(){return ct}),r.d(f,"random",function(){return ft}),r.d(f,"invert",function(){return dt}),r.d(f,"conjugate",function(){return st}),r.d(f,"fromMat3",function(){return ht}),r.d(f,"fromEuler",function(){return Mt}),r.d(f,"str",function(){return lt}),r.d(f,"clone",function(){return mt}),r.d(f,"fromValues",function(){return bt}),r.d(f,"copy",function(){return pt}),r.d(f,"set",function(){return qt}),r.d(f,"add",function(){return wt}),r.d(f,"mul",function(){return xt}),r.d(f,"scale",function(){return yt}),r.d(f,"dot",function(){return vt}),r.d(f,"lerp",function(){return gt}),r.d(f,"length",function(){return At}),r.d(f,"len",function(){return Pt}),r.d(f,"squaredLength",function(){return It}),r.d(f,"sqrLen",function(){return Rt}),r.d(f,"normalize",function(){return Et}),r.d(f,"exactEquals",function(){return St}),r.d(f,"equals",function(){return Ft}),r.d(f,"rotationTo",function(){return Dt}),r.d(f,"sqlerp",function(){return Tt}),r.d(f,"setAxes",function(){return Lt});var d={};r.r(d),r.d(d,"create",function(){return Vt}),r.d(d,"clone",function(){return Yt}),r.d(d,"fromValues",function(){return zt}),r.d(d,"copy",function(){return Qt}),r.d(d,"set",function(){return jt}),r.d(d,"add",function(){return Ot}),r.d(d,"subtract",function(){return Xt}),r.d(d,"multiply",function(){return Zt}),r.d(d,"divide",function(){return kt}),r.d(d,"ceil",function(){return Jt}),r.d(d,"floor",function(){return Nt}),r.d(d,"min",function(){return Wt}),r.d(d,"max",function(){return _t}),r.d(d,"round",function(){return Bt}),r.d(d,"scale",function(){return Ct}),r.d(d,"scaleAndAdd",function(){return Gt}),r.d(d,"distance",function(){return Ht}),r.d(d,"squaredDistance",function(){return Kt}),r.d(d,"length",function(){return Ut}),r.d(d,"squaredLength",function(){return $t}),r.d(d,"negate",function(){return nr}),r.d(d,"inverse",function(){return tr}),r.d(d,"normalize",function(){return rr}),r.d(d,"dot",function(){return ur}),r.d(d,"cross",function(){return or}),r.d(d,"lerp",function(){return er}),r.d(d,"random",function(){return ar}),r.d(d,"transformMat2",function(){return ir}),r.d(d,"transformMat2d",function(){return cr}),r.d(d,"transformMat3",function(){return fr}),r.d(d,"transformMat4",function(){return dr}),r.d(d,"rotate",function(){return sr}),r.d(d,"angle",function(){return hr}),r.d(d,"str",function(){return Mr}),r.d(d,"exactEquals",function(){return lr}),r.d(d,"equals",function(){return mr}),r.d(d,"len",function(){return br}),r.d(d,"sub",function(){return pr}),r.d(d,"mul",function(){return qr}),r.d(d,"div",function(){return wr}),r.d(d,"dist",function(){return xr}),r.d(d,"sqrDist",function(){return yr}),r.d(d,"sqrLen",function(){return vr}),r.d(d,"forEach",function(){return gr});const s=1e-6;let h="undefined"!=typeof Float32Array?Float32Array:Array;const M=Math.random;Math.PI;function l(){let n=new h(6);return h!=Float32Array&&(n[1]=0,n[2]=0,n[4]=0,n[5]=0),n[0]=1,n[3]=1,n}function m(n){let t=new h(6);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function b(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function p(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n[4]=0,n[5]=0,n}function q(n,t,r,u,o,e){let a=new h(6);return a[0]=n,a[1]=t,a[2]=r,a[3]=u,a[4]=o,a[5]=e,a}function w(n,t,r,u,o,e,a){return n[0]=t,n[1]=r,n[2]=u,n[3]=o,n[4]=e,n[5]=a,n}function x(n,t){let r=t[0],u=t[1],o=t[2],e=t[3],a=t[4],i=t[5],c=r*e-u*o;return c?(c=1/c,n[0]=e*c,n[1]=-u*c,n[2]=-o*c,n[3]=r*c,n[4]=(o*i-e*a)*c,n[5]=(u*a-r*i)*c,n):null}function y(n){return n[0]*n[3]-n[1]*n[2]}function v(n,t,r){let u=t[0],o=t[1],e=t[2],a=t[3],i=t[4],c=t[5],f=r[0],d=r[1],s=r[2],h=r[3],M=r[4],l=r[5];return n[0]=u*f+e*d,n[1]=o*f+a*d,n[2]=u*s+e*h,n[3]=o*s+a*h,n[4]=u*M+e*l+i,n[5]=o*M+a*l+c,n}function g(n,t,r){let u=t[0],o=t[1],e=t[2],a=t[3],i=t[4],c=t[5],f=Math.sin(r),d=Math.cos(r);return n[0]=u*d+e*f,n[1]=o*d+a*f,n[2]=u*-f+e*d,n[3]=o*-f+a*d,n[4]=i,n[5]=c,n}function A(n,t,r){let u=t[0],o=t[1],e=t[2],a=t[3],i=t[4],c=t[5],f=r[0],d=r[1];return n[0]=u*f,n[1]=o*f,n[2]=e*d,n[3]=a*d,n[4]=i,n[5]=c,n}function P(n,t,r){let u=t[0],o=t[1],e=t[2],a=t[3],i=t[4],c=t[5],f=r[0],d=r[1];return n[0]=u,n[1]=o,n[2]=e,n[3]=a,n[4]=u*f+e*d+i,n[5]=o*f+a*d+c,n}function I(n,t){let r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=r,n[2]=-r,n[3]=u,n[4]=0,n[5]=0,n}function R(n,t){return n[0]=t[0],n[1]=0,n[2]=0,n[3]=t[1],n[4]=0,n[5]=0,n}function E(n,t){return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n[4]=t[0],n[5]=t[1],n}function S(n){return"mat2d("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+", "+n[4]+", "+n[5]+")"}function F(n){return Math.sqrt(Math.pow(n[0],2)+Math.pow(n[1],2)+Math.pow(n[2],2)+Math.pow(n[3],2)+Math.pow(n[4],2)+Math.pow(n[5],2)+1)}function D(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n[4]=t[4]+r[4],n[5]=t[5]+r[5],n}function T(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n[4]=t[4]-r[4],n[5]=t[5]-r[5],n}function L(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n[4]=t[4]*r,n[5]=t[5]*r,n}function V(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n[3]=t[3]+r[3]*u,n[4]=t[4]+r[4]*u,n[5]=t[5]+r[5]*u,n}function Y(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]&&n[4]===t[4]&&n[5]===t[5]}function z(n,t){let r=n[0],u=n[1],o=n[2],e=n[3],a=n[4],i=n[5],c=t[0],f=t[1],d=t[2],h=t[3],M=t[4],l=t[5];return Math.abs(r-c)<=s*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-f)<=s*Math.max(1,Math.abs(u),Math.abs(f))&&Math.abs(o-d)<=s*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(e-h)<=s*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(a-M)<=s*Math.max(1,Math.abs(a),Math.abs(M))&&Math.abs(i-l)<=s*Math.max(1,Math.abs(i),Math.abs(l))}const Q=v,j=T;function O(){let n=new h(16);return h!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function X(n){let t=new h(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function Z(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function k(n,t,r,u,o,e,a,i,c,f,d,s,M,l,m,b){let p=new h(16);return p[0]=n,p[1]=t,p[2]=r,p[3]=u,p[4]=o,p[5]=e,p[6]=a,p[7]=i,p[8]=c,p[9]=f,p[10]=d,p[11]=s,p[12]=M,p[13]=l,p[14]=m,p[15]=b,p}function J(n,t,r,u,o,e,a,i,c,f,d,s,h,M,l,m,b){return n[0]=t,n[1]=r,n[2]=u,n[3]=o,n[4]=e,n[5]=a,n[6]=i,n[7]=c,n[8]=f,n[9]=d,n[10]=s,n[11]=h,n[12]=M,n[13]=l,n[14]=m,n[15]=b,n}function N(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function W(n,t){if(n===t){let r=t[1],u=t[2],o=t[3],e=t[6],a=t[7],i=t[11];n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=r,n[6]=t[9],n[7]=t[13],n[8]=u,n[9]=e,n[11]=t[14],n[12]=o,n[13]=a,n[14]=i}else n[0]=t[0],n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=t[1],n[5]=t[5],n[6]=t[9],n[7]=t[13],n[8]=t[2],n[9]=t[6],n[10]=t[10],n[11]=t[14],n[12]=t[3],n[13]=t[7],n[14]=t[11],n[15]=t[15];return n}function _(n,t){let r=t[0],u=t[1],o=t[2],e=t[3],a=t[4],i=t[5],c=t[6],f=t[7],d=t[8],s=t[9],h=t[10],M=t[11],l=t[12],m=t[13],b=t[14],p=t[15],q=r*i-u*a,w=r*c-o*a,x=r*f-e*a,y=u*c-o*i,v=u*f-e*i,g=o*f-e*c,A=d*m-s*l,P=d*b-h*l,I=d*p-M*l,R=s*b-h*m,E=s*p-M*m,S=h*p-M*b,F=q*S-w*E+x*R+y*I-v*P+g*A;return F?(F=1/F,n[0]=(i*S-c*E+f*R)*F,n[1]=(o*E-u*S-e*R)*F,n[2]=(m*g-b*v+p*y)*F,n[3]=(h*v-s*g-M*y)*F,n[4]=(c*I-a*S-f*P)*F,n[5]=(r*S-o*I+e*P)*F,n[6]=(b*x-l*g-p*w)*F,n[7]=(d*g-h*x+M*w)*F,n[8]=(a*E-i*I+f*A)*F,n[9]=(u*I-r*E-e*A)*F,n[10]=(l*v-m*x+p*q)*F,n[11]=(s*x-d*v-M*q)*F,n[12]=(i*P-a*R-c*A)*F,n[13]=(r*R-u*P+o*A)*F,n[14]=(m*w-l*y-b*q)*F,n[15]=(d*y-s*w+h*q)*F,n):null}function B(n,t){let r=t[0],u=t[1],o=t[2],e=t[3],a=t[4],i=t[5],c=t[6],f=t[7],d=t[8],s=t[9],h=t[10],M=t[11],l=t[12],m=t[13],b=t[14],p=t[15];return n[0]=i*(h*p-M*b)-s*(c*p-f*b)+m*(c*M-f*h),n[1]=-(u*(h*p-M*b)-s*(o*p-e*b)+m*(o*M-e*h)),n[2]=u*(c*p-f*b)-i*(o*p-e*b)+m*(o*f-e*c),n[3]=-(u*(c*M-f*h)-i*(o*M-e*h)+s*(o*f-e*c)),n[4]=-(a*(h*p-M*b)-d*(c*p-f*b)+l*(c*M-f*h)),n[5]=r*(h*p-M*b)-d*(o*p-e*b)+l*(o*M-e*h),n[6]=-(r*(c*p-f*b)-a*(o*p-e*b)+l*(o*f-e*c)),n[7]=r*(c*M-f*h)-a*(o*M-e*h)+d*(o*f-e*c),n[8]=a*(s*p-M*m)-d*(i*p-f*m)+l*(i*M-f*s),n[9]=-(r*(s*p-M*m)-d*(u*p-e*m)+l*(u*M-e*s)),n[10]=r*(i*p-f*m)-a*(u*p-e*m)+l*(u*f-e*i),n[11]=-(r*(i*M-f*s)-a*(u*M-e*s)+d*(u*f-e*i)),n[12]=-(a*(s*b-h*m)-d*(i*b-c*m)+l*(i*h-c*s)),n[13]=r*(s*b-h*m)-d*(u*b-o*m)+l*(u*h-o*s),n[14]=-(r*(i*b-c*m)-a*(u*b-o*m)+l*(u*c-o*i)),n[15]=r*(i*h-c*s)-a*(u*h-o*s)+d*(u*c-o*i),n}function C(n){let t=n[0],r=n[1],u=n[2],o=n[3],e=n[4],a=n[5],i=n[6],c=n[7],f=n[8],d=n[9],s=n[10],h=n[11],M=n[12],l=n[13],m=n[14],b=n[15];return(t*a-r*e)*(s*b-h*m)-(t*i-u*e)*(d*b-h*l)+(t*c-o*e)*(d*m-s*l)+(r*i-u*a)*(f*b-h*M)-(r*c-o*a)*(f*m-s*M)+(u*c-o*i)*(f*l-d*M)}function G(n,t,r){let u=t[0],o=t[1],e=t[2],a=t[3],i=t[4],c=t[5],f=t[6],d=t[7],s=t[8],h=t[9],M=t[10],l=t[11],m=t[12],b=t[13],p=t[14],q=t[15],w=r[0],x=r[1],y=r[2],v=r[3];return n[0]=w*u+x*i+y*s+v*m,n[1]=w*o+x*c+y*h+v*b,n[2]=w*e+x*f+y*M+v*p,n[3]=w*a+x*d+y*l+v*q,w=r[4],x=r[5],y=r[6],v=r[7],n[4]=w*u+x*i+y*s+v*m,n[5]=w*o+x*c+y*h+v*b,n[6]=w*e+x*f+y*M+v*p,n[7]=w*a+x*d+y*l+v*q,w=r[8],x=r[9],y=r[10],v=r[11],n[8]=w*u+x*i+y*s+v*m,n[9]=w*o+x*c+y*h+v*b,n[10]=w*e+x*f+y*M+v*p,n[11]=w*a+x*d+y*l+v*q,w=r[12],x=r[13],y=r[14],v=r[15],n[12]=w*u+x*i+y*s+v*m,n[13]=w*o+x*c+y*h+v*b,n[14]=w*e+x*f+y*M+v*p,n[15]=w*a+x*d+y*l+v*q,n}function H(n,t,r){let u,o,e,a,i,c,f,d,s,h,M,l,m=r[0],b=r[1],p=r[2];return t===n?(n[12]=t[0]*m+t[4]*b+t[8]*p+t[12],n[13]=t[1]*m+t[5]*b+t[9]*p+t[13],n[14]=t[2]*m+t[6]*b+t[10]*p+t[14],n[15]=t[3]*m+t[7]*b+t[11]*p+t[15]):(u=t[0],o=t[1],e=t[2],a=t[3],i=t[4],c=t[5],f=t[6],d=t[7],s=t[8],h=t[9],M=t[10],l=t[11],n[0]=u,n[1]=o,n[2]=e,n[3]=a,n[4]=i,n[5]=c,n[6]=f,n[7]=d,n[8]=s,n[9]=h,n[10]=M,n[11]=l,n[12]=u*m+i*b+s*p+t[12],n[13]=o*m+c*b+h*p+t[13],n[14]=e*m+f*b+M*p+t[14],n[15]=a*m+d*b+l*p+t[15]),n}function K(n,t,r){let u=r[0],o=r[1],e=r[2];return n[0]=t[0]*u,n[1]=t[1]*u,n[2]=t[2]*u,n[3]=t[3]*u,n[4]=t[4]*o,n[5]=t[5]*o,n[6]=t[6]*o,n[7]=t[7]*o,n[8]=t[8]*e,n[9]=t[9]*e,n[10]=t[10]*e,n[11]=t[11]*e,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function U(n,t,r,u){let o,e,a,i,c,f,d,h,M,l,m,b,p,q,w,x,y,v,g,A,P,I,R,E,S=u[0],F=u[1],D=u[2],T=Math.sqrt(S*S+F*F+D*D);return T<s?null:(S*=T=1/T,F*=T,D*=T,o=Math.sin(r),a=1-(e=Math.cos(r)),i=t[0],c=t[1],f=t[2],d=t[3],h=t[4],M=t[5],l=t[6],m=t[7],b=t[8],p=t[9],q=t[10],w=t[11],x=S*S*a+e,y=F*S*a+D*o,v=D*S*a-F*o,g=S*F*a-D*o,A=F*F*a+e,P=D*F*a+S*o,I=S*D*a+F*o,R=F*D*a-S*o,E=D*D*a+e,n[0]=i*x+h*y+b*v,n[1]=c*x+M*y+p*v,n[2]=f*x+l*y+q*v,n[3]=d*x+m*y+w*v,n[4]=i*g+h*A+b*P,n[5]=c*g+M*A+p*P,n[6]=f*g+l*A+q*P,n[7]=d*g+m*A+w*P,n[8]=i*I+h*R+b*E,n[9]=c*I+M*R+p*E,n[10]=f*I+l*R+q*E,n[11]=d*I+m*R+w*E,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n)}function $(n,t,r){let u=Math.sin(r),o=Math.cos(r),e=t[4],a=t[5],i=t[6],c=t[7],f=t[8],d=t[9],s=t[10],h=t[11];return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[4]=e*o+f*u,n[5]=a*o+d*u,n[6]=i*o+s*u,n[7]=c*o+h*u,n[8]=f*o-e*u,n[9]=d*o-a*u,n[10]=s*o-i*u,n[11]=h*o-c*u,n}function nn(n,t,r){let u=Math.sin(r),o=Math.cos(r),e=t[0],a=t[1],i=t[2],c=t[3],f=t[8],d=t[9],s=t[10],h=t[11];return t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=e*o-f*u,n[1]=a*o-d*u,n[2]=i*o-s*u,n[3]=c*o-h*u,n[8]=e*u+f*o,n[9]=a*u+d*o,n[10]=i*u+s*o,n[11]=c*u+h*o,n}function tn(n,t,r){let u=Math.sin(r),o=Math.cos(r),e=t[0],a=t[1],i=t[2],c=t[3],f=t[4],d=t[5],s=t[6],h=t[7];return t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=e*o+f*u,n[1]=a*o+d*u,n[2]=i*o+s*u,n[3]=c*o+h*u,n[4]=f*o-e*u,n[5]=d*o-a*u,n[6]=s*o-i*u,n[7]=h*o-c*u,n}function rn(n,t){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function un(n,t){return n[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function on(n,t,r){let u,o,e,a=r[0],i=r[1],c=r[2],f=Math.sqrt(a*a+i*i+c*c);return f<s?null:(a*=f=1/f,i*=f,c*=f,u=Math.sin(t),e=1-(o=Math.cos(t)),n[0]=a*a*e+o,n[1]=i*a*e+c*u,n[2]=c*a*e-i*u,n[3]=0,n[4]=a*i*e-c*u,n[5]=i*i*e+o,n[6]=c*i*e+a*u,n[7]=0,n[8]=a*c*e+i*u,n[9]=i*c*e-a*u,n[10]=c*c*e+o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n)}function en(n,t){let r=Math.sin(t),u=Math.cos(t);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=u,n[6]=r,n[7]=0,n[8]=0,n[9]=-r,n[10]=u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function an(n,t){let r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=0,n[2]=-r,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=r,n[9]=0,n[10]=u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function cn(n,t){let r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=r,n[2]=0,n[3]=0,n[4]=-r,n[5]=u,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function fn(n,t,r){let u=t[0],o=t[1],e=t[2],a=t[3],i=u+u,c=o+o,f=e+e,d=u*i,s=u*c,h=u*f,M=o*c,l=o*f,m=e*f,b=a*i,p=a*c,q=a*f;return n[0]=1-(M+m),n[1]=s+q,n[2]=h-p,n[3]=0,n[4]=s-q,n[5]=1-(d+m),n[6]=l+b,n[7]=0,n[8]=h+p,n[9]=l-b,n[10]=1-(d+M),n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function dn(n,t){let r=new h(3),u=-t[0],o=-t[1],e=-t[2],a=t[3],i=t[4],c=t[5],f=t[6],d=t[7],s=u*u+o*o+e*e+a*a;return s>0?(r[0]=2*(i*a+d*u+c*e-f*o)/s,r[1]=2*(c*a+d*o+f*u-i*e)/s,r[2]=2*(f*a+d*e+i*o-c*u)/s):(r[0]=2*(i*a+d*u+c*e-f*o),r[1]=2*(c*a+d*o+f*u-i*e),r[2]=2*(f*a+d*e+i*o-c*u)),fn(n,t,r),n}function sn(n,t){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function hn(n,t){let r=t[0],u=t[1],o=t[2],e=t[4],a=t[5],i=t[6],c=t[8],f=t[9],d=t[10];return n[0]=Math.sqrt(r*r+u*u+o*o),n[1]=Math.sqrt(e*e+a*a+i*i),n[2]=Math.sqrt(c*c+f*f+d*d),n}function Mn(n,t){let r=t[0]+t[5]+t[10],u=0;return r>0?(u=2*Math.sqrt(r+1),n[3]=.25*u,n[0]=(t[6]-t[9])/u,n[1]=(t[8]-t[2])/u,n[2]=(t[1]-t[4])/u):t[0]>t[5]&&t[0]>t[10]?(u=2*Math.sqrt(1+t[0]-t[5]-t[10]),n[3]=(t[6]-t[9])/u,n[0]=.25*u,n[1]=(t[1]+t[4])/u,n[2]=(t[8]+t[2])/u):t[5]>t[10]?(u=2*Math.sqrt(1+t[5]-t[0]-t[10]),n[3]=(t[8]-t[2])/u,n[0]=(t[1]+t[4])/u,n[1]=.25*u,n[2]=(t[6]+t[9])/u):(u=2*Math.sqrt(1+t[10]-t[0]-t[5]),n[3]=(t[1]-t[4])/u,n[0]=(t[8]+t[2])/u,n[1]=(t[6]+t[9])/u,n[2]=.25*u),n}function ln(n,t,r,u){let o=t[0],e=t[1],a=t[2],i=t[3],c=o+o,f=e+e,d=a+a,s=o*c,h=o*f,M=o*d,l=e*f,m=e*d,b=a*d,p=i*c,q=i*f,w=i*d,x=u[0],y=u[1],v=u[2];return n[0]=(1-(l+b))*x,n[1]=(h+w)*x,n[2]=(M-q)*x,n[3]=0,n[4]=(h-w)*y,n[5]=(1-(s+b))*y,n[6]=(m+p)*y,n[7]=0,n[8]=(M+q)*v,n[9]=(m-p)*v,n[10]=(1-(s+l))*v,n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function mn(n,t,r,u,o){let e=t[0],a=t[1],i=t[2],c=t[3],f=e+e,d=a+a,s=i+i,h=e*f,M=e*d,l=e*s,m=a*d,b=a*s,p=i*s,q=c*f,w=c*d,x=c*s,y=u[0],v=u[1],g=u[2],A=o[0],P=o[1],I=o[2],R=(1-(m+p))*y,E=(M+x)*y,S=(l-w)*y,F=(M-x)*v,D=(1-(h+p))*v,T=(b+q)*v,L=(l+w)*g,V=(b-q)*g,Y=(1-(h+m))*g;return n[0]=R,n[1]=E,n[2]=S,n[3]=0,n[4]=F,n[5]=D,n[6]=T,n[7]=0,n[8]=L,n[9]=V,n[10]=Y,n[11]=0,n[12]=r[0]+A-(R*A+F*P+L*I),n[13]=r[1]+P-(E*A+D*P+V*I),n[14]=r[2]+I-(S*A+T*P+Y*I),n[15]=1,n}function bn(n,t){let r=t[0],u=t[1],o=t[2],e=t[3],a=r+r,i=u+u,c=o+o,f=r*a,d=u*a,s=u*i,h=o*a,M=o*i,l=o*c,m=e*a,b=e*i,p=e*c;return n[0]=1-s-l,n[1]=d+p,n[2]=h-b,n[3]=0,n[4]=d-p,n[5]=1-f-l,n[6]=M+m,n[7]=0,n[8]=h+b,n[9]=M-m,n[10]=1-f-s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function pn(n,t,r,u,o,e,a){let i=1/(r-t),c=1/(o-u),f=1/(e-a);return n[0]=2*e*i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=2*e*c,n[6]=0,n[7]=0,n[8]=(r+t)*i,n[9]=(o+u)*c,n[10]=(a+e)*f,n[11]=-1,n[12]=0,n[13]=0,n[14]=a*e*2*f,n[15]=0,n}function qn(n,t,r,u,o){let e,a=1/Math.tan(t/2);return n[0]=a/r,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=a,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,null!=o&&o!==1/0?(e=1/(u-o),n[10]=(o+u)*e,n[14]=2*o*u*e):(n[10]=-1,n[14]=-2*u),n}function wn(n,t,r,u){let o=Math.tan(t.upDegrees*Math.PI/180),e=Math.tan(t.downDegrees*Math.PI/180),a=Math.tan(t.leftDegrees*Math.PI/180),i=Math.tan(t.rightDegrees*Math.PI/180),c=2/(a+i),f=2/(o+e);return n[0]=c,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=f,n[6]=0,n[7]=0,n[8]=-(a-i)*c*.5,n[9]=(o-e)*f*.5,n[10]=u/(r-u),n[11]=-1,n[12]=0,n[13]=0,n[14]=u*r/(r-u),n[15]=0,n}function xn(n,t,r,u,o,e,a){let i=1/(t-r),c=1/(u-o),f=1/(e-a);return n[0]=-2*i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*f,n[11]=0,n[12]=(t+r)*i,n[13]=(o+u)*c,n[14]=(a+e)*f,n[15]=1,n}function yn(n,t,r,u){let o,e,a,i,c,f,d,h,M,l,m=t[0],b=t[1],p=t[2],q=u[0],w=u[1],x=u[2],y=r[0],v=r[1],g=r[2];return Math.abs(m-y)<s&&Math.abs(b-v)<s&&Math.abs(p-g)<s?N(n):(d=m-y,h=b-v,M=p-g,o=w*(M*=l=1/Math.sqrt(d*d+h*h+M*M))-x*(h*=l),e=x*(d*=l)-q*M,a=q*h-w*d,(l=Math.sqrt(o*o+e*e+a*a))?(o*=l=1/l,e*=l,a*=l):(o=0,e=0,a=0),i=h*a-M*e,c=M*o-d*a,f=d*e-h*o,(l=Math.sqrt(i*i+c*c+f*f))?(i*=l=1/l,c*=l,f*=l):(i=0,c=0,f=0),n[0]=o,n[1]=i,n[2]=d,n[3]=0,n[4]=e,n[5]=c,n[6]=h,n[7]=0,n[8]=a,n[9]=f,n[10]=M,n[11]=0,n[12]=-(o*m+e*b+a*p),n[13]=-(i*m+c*b+f*p),n[14]=-(d*m+h*b+M*p),n[15]=1,n)}function vn(n,t,r,u){let o=t[0],e=t[1],a=t[2],i=u[0],c=u[1],f=u[2],d=o-r[0],s=e-r[1],h=a-r[2],M=d*d+s*s+h*h;M>0&&(d*=M=1/Math.sqrt(M),s*=M,h*=M);let l=c*h-f*s,m=f*d-i*h,b=i*s-c*d;return(M=l*l+m*m+b*b)>0&&(l*=M=1/Math.sqrt(M),m*=M,b*=M),n[0]=l,n[1]=m,n[2]=b,n[3]=0,n[4]=s*b-h*m,n[5]=h*l-d*b,n[6]=d*m-s*l,n[7]=0,n[8]=d,n[9]=s,n[10]=h,n[11]=0,n[12]=o,n[13]=e,n[14]=a,n[15]=1,n}function gn(n){return"mat4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+", "+n[4]+", "+n[5]+", "+n[6]+", "+n[7]+", "+n[8]+", "+n[9]+", "+n[10]+", "+n[11]+", "+n[12]+", "+n[13]+", "+n[14]+", "+n[15]+")"}function An(n){return Math.sqrt(Math.pow(n[0],2)+Math.pow(n[1],2)+Math.pow(n[2],2)+Math.pow(n[3],2)+Math.pow(n[4],2)+Math.pow(n[5],2)+Math.pow(n[6],2)+Math.pow(n[7],2)+Math.pow(n[8],2)+Math.pow(n[9],2)+Math.pow(n[10],2)+Math.pow(n[11],2)+Math.pow(n[12],2)+Math.pow(n[13],2)+Math.pow(n[14],2)+Math.pow(n[15],2))}function Pn(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n[4]=t[4]+r[4],n[5]=t[5]+r[5],n[6]=t[6]+r[6],n[7]=t[7]+r[7],n[8]=t[8]+r[8],n[9]=t[9]+r[9],n[10]=t[10]+r[10],n[11]=t[11]+r[11],n[12]=t[12]+r[12],n[13]=t[13]+r[13],n[14]=t[14]+r[14],n[15]=t[15]+r[15],n}function In(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n[4]=t[4]-r[4],n[5]=t[5]-r[5],n[6]=t[6]-r[6],n[7]=t[7]-r[7],n[8]=t[8]-r[8],n[9]=t[9]-r[9],n[10]=t[10]-r[10],n[11]=t[11]-r[11],n[12]=t[12]-r[12],n[13]=t[13]-r[13],n[14]=t[14]-r[14],n[15]=t[15]-r[15],n}function Rn(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n[4]=t[4]*r,n[5]=t[5]*r,n[6]=t[6]*r,n[7]=t[7]*r,n[8]=t[8]*r,n[9]=t[9]*r,n[10]=t[10]*r,n[11]=t[11]*r,n[12]=t[12]*r,n[13]=t[13]*r,n[14]=t[14]*r,n[15]=t[15]*r,n}function En(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n[3]=t[3]+r[3]*u,n[4]=t[4]+r[4]*u,n[5]=t[5]+r[5]*u,n[6]=t[6]+r[6]*u,n[7]=t[7]+r[7]*u,n[8]=t[8]+r[8]*u,n[9]=t[9]+r[9]*u,n[10]=t[10]+r[10]*u,n[11]=t[11]+r[11]*u,n[12]=t[12]+r[12]*u,n[13]=t[13]+r[13]*u,n[14]=t[14]+r[14]*u,n[15]=t[15]+r[15]*u,n}function Sn(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]&&n[4]===t[4]&&n[5]===t[5]&&n[6]===t[6]&&n[7]===t[7]&&n[8]===t[8]&&n[9]===t[9]&&n[10]===t[10]&&n[11]===t[11]&&n[12]===t[12]&&n[13]===t[13]&&n[14]===t[14]&&n[15]===t[15]}function Fn(n,t){let r=n[0],u=n[1],o=n[2],e=n[3],a=n[4],i=n[5],c=n[6],f=n[7],d=n[8],h=n[9],M=n[10],l=n[11],m=n[12],b=n[13],p=n[14],q=n[15],w=t[0],x=t[1],y=t[2],v=t[3],g=t[4],A=t[5],P=t[6],I=t[7],R=t[8],E=t[9],S=t[10],F=t[11],D=t[12],T=t[13],L=t[14],V=t[15];return Math.abs(r-w)<=s*Math.max(1,Math.abs(r),Math.abs(w))&&Math.abs(u-x)<=s*Math.max(1,Math.abs(u),Math.abs(x))&&Math.abs(o-y)<=s*Math.max(1,Math.abs(o),Math.abs(y))&&Math.abs(e-v)<=s*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(a-g)<=s*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(i-A)<=s*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(c-P)<=s*Math.max(1,Math.abs(c),Math.abs(P))&&Math.abs(f-I)<=s*Math.max(1,Math.abs(f),Math.abs(I))&&Math.abs(d-R)<=s*Math.max(1,Math.abs(d),Math.abs(R))&&Math.abs(h-E)<=s*Math.max(1,Math.abs(h),Math.abs(E))&&Math.abs(M-S)<=s*Math.max(1,Math.abs(M),Math.abs(S))&&Math.abs(l-F)<=s*Math.max(1,Math.abs(l),Math.abs(F))&&Math.abs(m-D)<=s*Math.max(1,Math.abs(m),Math.abs(D))&&Math.abs(b-T)<=s*Math.max(1,Math.abs(b),Math.abs(T))&&Math.abs(p-L)<=s*Math.max(1,Math.abs(p),Math.abs(L))&&Math.abs(q-V)<=s*Math.max(1,Math.abs(q),Math.abs(V))}const Dn=G,Tn=In;function Ln(){let n=new h(9);return h!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[5]=0,n[6]=0,n[7]=0),n[0]=1,n[4]=1,n[8]=1,n}function Vn(){let n=new h(3);return h!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function Yn(n,t,r){let u=new h(3);return u[0]=n,u[1]=t,u[2]=r,u}function zn(n,t){let r=t[0],u=t[1],o=t[2],e=r*r+u*u+o*o;return e>0&&(e=1/Math.sqrt(e),n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e),n}function Qn(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function jn(n,t,r){let u=t[0],o=t[1],e=t[2],a=r[0],i=r[1],c=r[2];return n[0]=o*c-e*i,n[1]=e*a-u*c,n[2]=u*i-o*a,n}const On=function(n){let t=n[0],r=n[1],u=n[2];return Math.sqrt(t*t+r*r+u*u)};!function(){let n=Vn()}();function Xn(n){let t=new h(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Zn(n,t,r,u){let o=new h(4);return o[0]=n,o[1]=t,o[2]=r,o[3]=u,o}function kn(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Jn(n,t,r,u,o){return n[0]=t,n[1]=r,n[2]=u,n[3]=o,n}function Nn(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n}function Wn(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n}function _n(n){let t=n[0],r=n[1],u=n[2],o=n[3];return Math.sqrt(t*t+r*r+u*u+o*o)}function Bn(n){let t=n[0],r=n[1],u=n[2],o=n[3];return t*t+r*r+u*u+o*o}function Cn(n,t){let r=t[0],u=t[1],o=t[2],e=t[3],a=r*r+u*u+o*o+e*e;return a>0&&(a=1/Math.sqrt(a),n[0]=r*a,n[1]=u*a,n[2]=o*a,n[3]=e*a),n}function Gn(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Hn(n,t,r,u){let o=t[0],e=t[1],a=t[2],i=t[3];return n[0]=o+u*(r[0]-o),n[1]=e+u*(r[1]-e),n[2]=a+u*(r[2]-a),n[3]=i+u*(r[3]-i),n}function Kn(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]}function Un(n,t){let r=n[0],u=n[1],o=n[2],e=n[3],a=t[0],i=t[1],c=t[2],f=t[3];return Math.abs(r-a)<=s*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(u-i)<=s*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(o-c)<=s*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(e-f)<=s*Math.max(1,Math.abs(e),Math.abs(f))}!function(){let n=function(){let n=new h(4);return h!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}()}();function $n(){let n=new h(4);return h!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n[3]=1,n}function nt(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function tt(n,t,r){r*=.5;let u=Math.sin(r);return n[0]=u*t[0],n[1]=u*t[1],n[2]=u*t[2],n[3]=Math.cos(r),n}function rt(n,t){let r=2*Math.acos(t[3]),u=Math.sin(r/2);return u>s?(n[0]=t[0]/u,n[1]=t[1]/u,n[2]=t[2]/u):(n[0]=1,n[1]=0,n[2]=0),r}function ut(n,t,r){let u=t[0],o=t[1],e=t[2],a=t[3],i=r[0],c=r[1],f=r[2],d=r[3];return n[0]=u*d+a*i+o*f-e*c,n[1]=o*d+a*c+e*i-u*f,n[2]=e*d+a*f+u*c-o*i,n[3]=a*d-u*i-o*c-e*f,n}function ot(n,t,r){r*=.5;let u=t[0],o=t[1],e=t[2],a=t[3],i=Math.sin(r),c=Math.cos(r);return n[0]=u*c+a*i,n[1]=o*c+e*i,n[2]=e*c-o*i,n[3]=a*c-u*i,n}function et(n,t,r){r*=.5;let u=t[0],o=t[1],e=t[2],a=t[3],i=Math.sin(r),c=Math.cos(r);return n[0]=u*c-e*i,n[1]=o*c+a*i,n[2]=e*c+u*i,n[3]=a*c-o*i,n}function at(n,t,r){r*=.5;let u=t[0],o=t[1],e=t[2],a=t[3],i=Math.sin(r),c=Math.cos(r);return n[0]=u*c+o*i,n[1]=o*c-u*i,n[2]=e*c+a*i,n[3]=a*c-e*i,n}function it(n,t){let r=t[0],u=t[1],o=t[2];return n[0]=r,n[1]=u,n[2]=o,n[3]=Math.sqrt(Math.abs(1-r*r-u*u-o*o)),n}function ct(n,t,r,u){let o,e,a,i,c,f=t[0],d=t[1],h=t[2],M=t[3],l=r[0],m=r[1],b=r[2],p=r[3];return(e=f*l+d*m+h*b+M*p)<0&&(e=-e,l=-l,m=-m,b=-b,p=-p),1-e>s?(o=Math.acos(e),a=Math.sin(o),i=Math.sin((1-u)*o)/a,c=Math.sin(u*o)/a):(i=1-u,c=u),n[0]=i*f+c*l,n[1]=i*d+c*m,n[2]=i*h+c*b,n[3]=i*M+c*p,n}function ft(n){let t=M(),r=M(),u=M(),o=Math.sqrt(1-t),e=Math.sqrt(t);return n[0]=o*Math.sin(2*Math.PI*r),n[1]=o*Math.cos(2*Math.PI*r),n[2]=e*Math.sin(2*Math.PI*u),n[3]=e*Math.cos(2*Math.PI*u),n}function dt(n,t){let r=t[0],u=t[1],o=t[2],e=t[3],a=r*r+u*u+o*o+e*e,i=a?1/a:0;return n[0]=-r*i,n[1]=-u*i,n[2]=-o*i,n[3]=e*i,n}function st(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=t[3],n}function ht(n,t){let r,u=t[0]+t[4]+t[8];if(u>0)r=Math.sqrt(u+1),n[3]=.5*r,r=.5/r,n[0]=(t[5]-t[7])*r,n[1]=(t[6]-t[2])*r,n[2]=(t[1]-t[3])*r;else{let u=0;t[4]>t[0]&&(u=1),t[8]>t[3*u+u]&&(u=2);let o=(u+1)%3,e=(u+2)%3;r=Math.sqrt(t[3*u+u]-t[3*o+o]-t[3*e+e]+1),n[u]=.5*r,r=.5/r,n[3]=(t[3*o+e]-t[3*e+o])*r,n[o]=(t[3*o+u]+t[3*u+o])*r,n[e]=(t[3*e+u]+t[3*u+e])*r}return n}function Mt(n,t,r,u){let o=.5*Math.PI/180;t*=o,r*=o,u*=o;let e=Math.sin(t),a=Math.cos(t),i=Math.sin(r),c=Math.cos(r),f=Math.sin(u),d=Math.cos(u);return n[0]=e*c*d-a*i*f,n[1]=a*i*d+e*c*f,n[2]=a*c*f-e*i*d,n[3]=a*c*d+e*i*f,n}function lt(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const mt=Xn,bt=Zn,pt=kn,qt=Jn,wt=Nn,xt=ut,yt=Wn,vt=Gn,gt=Hn,At=_n,Pt=At,It=Bn,Rt=It,Et=Cn,St=Kn,Ft=Un,Dt=function(){let n=Vn(),t=Yn(1,0,0),r=Yn(0,1,0);return function(u,o,e){let a=Qn(o,e);return a<-.999999?(jn(n,t,o),On(n)<1e-6&&jn(n,r,o),zn(n,n),tt(u,n,Math.PI),u):a>.999999?(u[0]=0,u[1]=0,u[2]=0,u[3]=1,u):(jn(n,o,e),u[0]=n[0],u[1]=n[1],u[2]=n[2],u[3]=1+a,Et(u,u))}}(),Tt=function(){let n=$n(),t=$n();return function(r,u,o,e,a,i){return ct(n,u,a,i),ct(t,o,e,i),ct(r,n,t,2*i*(1-i)),r}}(),Lt=function(){let n=Ln();return function(t,r,u,o){return n[0]=u[0],n[3]=u[1],n[6]=u[2],n[1]=o[0],n[4]=o[1],n[7]=o[2],n[2]=-r[0],n[5]=-r[1],n[8]=-r[2],Et(t,ht(t,n))}}();function Vt(){let n=new h(2);return h!=Float32Array&&(n[0]=0,n[1]=0),n}function Yt(n){let t=new h(2);return t[0]=n[0],t[1]=n[1],t}function zt(n,t){let r=new h(2);return r[0]=n,r[1]=t,r}function Qt(n,t){return n[0]=t[0],n[1]=t[1],n}function jt(n,t,r){return n[0]=t,n[1]=r,n}function Ot(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n}function Xt(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n}function Zt(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n}function kt(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n}function Jt(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function Nt(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function Wt(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n}function _t(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n}function Bt(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function Ct(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n}function Gt(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n}function Ht(n,t){var r=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(r*r+u*u)}function Kt(n,t){var r=t[0]-n[0],u=t[1]-n[1];return r*r+u*u}function Ut(n){var t=n[0],r=n[1];return Math.sqrt(t*t+r*r)}function $t(n){var t=n[0],r=n[1];return t*t+r*r}function nr(n,t){return n[0]=-t[0],n[1]=-t[1],n}function tr(n,t){return n[0]=1/t[0],n[1]=1/t[1],n}function rr(n,t){var r=t[0],u=t[1],o=r*r+u*u;return o>0&&(o=1/Math.sqrt(o),n[0]=t[0]*o,n[1]=t[1]*o),n}function ur(n,t){return n[0]*t[0]+n[1]*t[1]}function or(n,t,r){var u=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=u,n}function er(n,t,r,u){var o=t[0],e=t[1];return n[0]=o+u*(r[0]-o),n[1]=e+u*(r[1]-e),n}function ar(n,t){t=t||1;var r=2*M()*Math.PI;return n[0]=Math.cos(r)*t,n[1]=Math.sin(r)*t,n}function ir(n,t,r){var u=t[0],o=t[1];return n[0]=r[0]*u+r[2]*o,n[1]=r[1]*u+r[3]*o,n}function cr(n,t,r){var u=t[0],o=t[1];return n[0]=r[0]*u+r[2]*o+r[4],n[1]=r[1]*u+r[3]*o+r[5],n}function fr(n,t,r){var u=t[0],o=t[1];return n[0]=r[0]*u+r[3]*o+r[6],n[1]=r[1]*u+r[4]*o+r[7],n}function dr(n,t,r){let u=t[0],o=t[1];return n[0]=r[0]*u+r[4]*o+r[12],n[1]=r[1]*u+r[5]*o+r[13],n}function sr(n,t,r,u){let o=t[0]-r[0],e=t[1]-r[1],a=Math.sin(u),i=Math.cos(u);return n[0]=o*i-e*a+r[0],n[1]=o*a+e*i+r[1],n}function hr(n,t){let r=n[0],u=n[1],o=t[0],e=t[1],a=r*r+u*u;a>0&&(a=1/Math.sqrt(a));let i=o*o+e*e;i>0&&(i=1/Math.sqrt(i));let c=(r*o+u*e)*a*i;return c>1?0:c<-1?Math.PI:Math.acos(c)}function Mr(n){return"vec2("+n[0]+", "+n[1]+")"}function lr(n,t){return n[0]===t[0]&&n[1]===t[1]}function mr(n,t){let r=n[0],u=n[1],o=t[0],e=t[1];return Math.abs(r-o)<=s*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-e)<=s*Math.max(1,Math.abs(u),Math.abs(e))}const br=Ut,pr=Xt,qr=Zt,wr=kt,xr=Ht,yr=Kt,vr=$t,gr=function(){let n=Vt();return function(t,r,u,o,e,a){let i,c;for(r||(r=2),u||(u=0),c=o?Math.min(o*r+u,t.length):t.length,i=u;i<c;i+=r)n[0]=t[i],n[1]=t[i+1],e(n,n,a),t[i]=n[0],t[i+1]=n[1];return t}}();r.d(t,!1,function(){return u}),r.d(t,"a",function(){return o}),r.d(t,!1,function(){return a}),r.d(t,"b",function(){return e}),r.d(t,"c",function(){return f}),r.d(t,"d",function(){return d}),r.d(t,!1,function(){return i}),r.d(t,!1,function(){return c})}}]);
//# sourceMappingURL=1.js.map