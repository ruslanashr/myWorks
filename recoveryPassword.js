!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=12)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),f="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(f," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(i).concat([o]).join("\n")}var a,s,f;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),f=null,c=0,u=[],l=e(2);function p(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(x(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(x(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function b(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return v(t,n.attrs),h(n,t),t}function v(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function x(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=c++;e=f||(f=b(t)),r=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){m(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return p(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}n&&p(d(n,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete i[s.id]}}}};var g,y=(g=[],function(n,t){return g[n]=t,g.filter(Boolean).join("\n")});function w(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,t,e){var r=e(4);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"html {\n  background-color: #F9FAFC; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\na {\n  text-decoration: none; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 137px 20px 141px;\n  font-family: 'Roboto', sans-serif; }\n\n.header__logo img {\n  height: 35px;\n  width: 138px; }\n\n.header__text {\n  margin-left: auto;\n  margin-right: 5px;\n  font-weight: 300; }\n\n.header__link {\n  font-weight: bold;\n  color: #2A74DB; }\n",""])},function(n,t,e){var r=e(6);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,".window {\n  background-color: #fff;\n  padding: 72px 115px 81px 115px;\n  width: 30%;\n  align-self: center;\n  box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);\n  border-radius: 10px; }\n",""])},function(n,t,e){var r=e(8);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'.form {\n  display: flex;\n  flex-direction: column;\n  font-family: \'Exo 2\', sans-serif; }\n  .form__title {\n    font-weight: 600;\n    font-size: 28px;\n    color: #002396;\n    margin-bottom: 35px; }\n  .form__input {\n    font-family: Roboto, sans-serif;\n    font-size: 14px;\n    height: 40px;\n    width: 100%;\n    background: #FCFCFC;\n    border: 2px solid #F2F2F2;\n    border-radius: 2px;\n    padding-left: 15px;\n    box-sizing: border-box; }\n  .form__input::placeholder {\n    color: rgba(135, 144, 167, 0.57);\n    letter-spacing: 0.28px; }\n  .form__input::active {\n    background-color: red; }\n  .form__input + .form__input {\n    margin-top: 25px; }\n  .form__name {\n    width: 47%;\n    margin-top: 0 !important; }\n  .form__forgot {\n    font-size: 12px;\n    margin-top: 14px;\n    align-self: flex-end;\n    color: #222428; }\n  .form__button {\n    margin-top: 40px;\n    font-family: \'Exo 2\', sans-serif;\n    font-size: 16px;\n    font-weight: 600;\n    letter-spacing: 0.4px;\n    height: 43px;\n    background-color: #0AD69C;\n    width: 44%;\n    align-self: flex-end;\n    color: #fff;\n    cursor: pointer; }\n\ninput[type="text"]:focus, input[type="password"]:focus {\n  outline: none;\n  background: #FFFFFF;\n  box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);\n  border-left: 2px solid #2A74DB; }\n\ninput[type="submit"]:focus {\n  outline: none; }\n\n.name {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 20px; }\n',""])},,,,function(n,t,e){"use strict";e.r(t);e(3),e(5),e(7)}]);