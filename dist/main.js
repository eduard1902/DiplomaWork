!function(e){var t={};function n(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(l,c,function(t){return e[t]}.bind(null,c));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelector("#accordion"),t=e.querySelectorAll(".panel-heading"),n=e.querySelectorAll(".collapse"),l=e.querySelectorAll(".construct-btn"),c=document.querySelector(".onoffswitch-checkbox"),o=document.getElementById("collapseTwo").children[0].children,r=document.querySelector("#calc-result"),a=document.querySelector("#myonoffswitch-two"),s=document.querySelector("#collapseFour").children[0].children[1],d=document.querySelector("#collapseFour").children[0].children[2];let u=0;t.forEach((e,t)=>{e.addEventListener("click",e=>{e.preventDefault(),n.forEach(e=>{e.classList.remove("in")}),n[t].classList.add("in")})}),l.forEach((e,t)=>{e.addEventListener("click",e=>{e.preventDefault(),n.forEach(e=>{e.classList.remove("in")}),3!==t&&n[t+1].classList.add("in")})}),e.addEventListener("click",()=>{if(c.checked){o[5].classList.add("hidden"),o[4].classList.add("hidden"),o[3].classList.add("hidden");let e=1e4;u=e,"2 метра"===o[1].children[1].value&&(u=e+.2*e),"2 штуки"===o[2].children[1].value?u+=.3*e:"3 штуки"===o[2].children[1].value&&(u+=.5*e),a.checked&&(u+=1e3)}else{o[5].classList.remove("hidden"),o[4].classList.remove("hidden"),o[3].classList.remove("hidden");let e=15e3;u=e,"2 метра"===o[1].children[1].value&&(u+=.2*e),"2 штуки"===o[2].children[1].value?u+=.3*e:"3 штуки"===o[2].children[1].value&&(u+=.5*e),"2 метра"===o[4].children[1].value&&(u+=.2*e),"2 штуки"===o[5].children[1].value?u+=.3*e:"3 штуки"===o[5].children[1].value&&(u+=.5*e),a.checked&&(u+=2e3)}r.value=u,""===s.value&&(d.disabled=!0),s.addEventListener("input",()=>{s.value=s.value.replace(/[^0-9]/,""),""===s.value?d.disabled=!0:d.disabled=!1})})};var c=()=>{const e=document.querySelectorAll(".call-btn"),t=document.querySelector(".popup-call"),n=document.querySelector(".popup-content"),l=document.querySelectorAll(".check-btn"),c=document.querySelector(".popup-check");e.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()}),e.addEventListener("click",()=>{t.style.display="block",a()})}),t.addEventListener("click",e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"),n||(t.style.display="none"))}),l.forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault()})),e.addEventListener("click",()=>{c.style.display="block",a()})}),c.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?c.style.display="none":(t=t.closest(".popup-content"),t||(c.style.display="none"))});let o,r=0;const a=()=>{window.innerWidth>768&&(o=requestAnimationFrame(a),r+=4,r<80?n.style.top=r+"px":(cancelAnimationFrame(o),r=0))}};var o=()=>{const e=document.querySelectorAll("form"),t=document.querySelector(".director-form"),n=document.getElementById("myonoffswitch"),l=document.getElementById("myonoffswitch-two"),c=document.getElementById("calc-result"),o=document.getElementById("collapseTwo"),r=document.getElementById("collapseFour"),a=o.querySelectorAll("select"),s=document.createElement("div");s.style.cssText="font-size: 2rem;";e.forEach(e=>{e.addEventListener("submit",o=>{o.preventDefault(),e.appendChild(s),s.innerHTML="идет отправка";const d=new FormData(e),u={};d.forEach((e,t)=>{u[t]=e}),e.closest(".popup-consultation")&&(u.message=t.querySelector("input").value),e.closest(".popup-call")&&(!0===n.checked?u["камер"]="одна":u["камер"]="две",!0===l.checked?u["колодец"]="есть":u["колодец"]="нет",u["расстояние до дома"]=r.querySelector("input").value+" метров",!1===n.checked&&(u["Второй колодец - Диаметр"]=a[2].value,u["Второй колодец - Количество колец"]=a[3].value),u["Первый колодец - Диаметр"]=a[0].value,u["Первый колодец - Количество колец"]=a[1].value,u["Итоговая цена"]=c.value),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(u).then(t=>{if(200!==t.status)throw new Error("Status network not 200");s.textContent="отправлено",setTimeout(()=>s.textContent="",5e3);document.querySelectorAll("input").forEach(e=>{e.value=""}),e.reset()}).catch(e=>{s.textContent="ошибка",console.error(e)})})})};var r=()=>{const e=document.querySelectorAll(".consultation-btn"),t=document.querySelector(".popup-consultation");e.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()}),e.addEventListener("click",()=>{t.style.display="block"})}),t.addEventListener("click",e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"),n||(t.style.display="none"))})};var a=()=>{const e=document.querySelectorAll(".discount-btn"),t=document.querySelector(".popup-discount");e.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()}),e.addEventListener("click",()=>{t.style.display="block"})}),t.addEventListener("click",e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"),n||(t.style.display="none"))})};var s=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelector(".sentence").querySelectorAll(".col-xs-12");e.addEventListener("click",n=>{t.forEach(e=>{e.classList.remove("visible-sm-block"),e.classList.remove("hidden")}),e.style.display="none"})};var d=()=>{const e=document.querySelectorAll(".phone-user"),t=document.getElementsByName("user_name"),n=document.getElementsByName("user_quest");e.forEach(e=>{e.addEventListener("input",e=>{e.target.value=e.target.value.replace(/[^0-9+]/g,"")})}),t.forEach(e=>{e.addEventListener("input",e=>{e.target.value=e.target.value.replace(/[^А-Я|а-я]/g,"")})}),n.forEach(e=>{e.addEventListener("input",e=>{e.target.value=e.target.value.replace(/\s[^А-Я|а-я]/g,"")})})};(()=>{const e=document.getElementById("accordion-two"),t=e.querySelectorAll(".panel"),n=document.querySelectorAll("#accordion-two .panel > .panel-collapse");e.addEventListener("click",e=>{e.preventDefault();let n=e.target;n=n.closest(".panel"),n&&t.forEach((e,t)=>{e===n&&l(t)})});const l=e=>{for(let t=0;t<n.length;t++)e===t?n[t].classList.add("in"):n[t].classList.remove("in")}})(),l(),c(),o(),r(),a(),s(),d()}]);