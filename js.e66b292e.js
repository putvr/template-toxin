parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Koq2":[function(require,module,exports) {

},{"./../img/expand_more-black-18dp.svg":[["expand_more-black-18dp.854bec0d.svg","FVTG"],"FVTG"]}],"lqaz":[function(require,module,exports) {
$(function(){var e=$("#slider-range");e.slider({range:!0,min:0,max:3e4,values:[5e3,1e4],slide:function(e,a){$("#amount").val(a.values[0]+"₽ - "+a.values[1]+"₽")}}),$("#amount").val(e.slider("values",0)+"₽ -"+e.slider("values",1)+"₽")});
},{}],"Y5Mt":[function(require,module,exports) {
"use strict";require("../scss/main.scss"),require("../blocks/range/range"),module.hot&&module.hot.accept();
},{"../scss/main.scss":"Koq2","../blocks/range/range":"lqaz"}]},{},["Y5Mt"], null)
//# sourceMappingURL=/template-toxin/js.e66b292e.js.map