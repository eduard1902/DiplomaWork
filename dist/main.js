!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{console.log("2")};var r=()=>{const e=document.querySelectorAll(".call-btn"),t=document.querySelector(".popup-call");e.forEach(e=>{e.addEventListener("click",()=>{event.preventDefault(),t.style.display="block",r()})}),t.addEventListener("click",e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-dialog"),n||(t.style.display="none"))});let n,o=0;const r=()=>{const e=document.querySelector(".popup-content");window.innerWidth>768&&(n=requestAnimationFrame(r),o+=5,o<100?e.style.top=o+"px":(cancelAnimationFrame(n),o=0))}};var l=()=>{console.log("4")};var c=()=>{console.log("5")};var u=()=>{console.log("6")};(()=>{console.log("1")})(),o(),r(),l(),c(),u()}]);