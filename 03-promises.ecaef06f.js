function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");l.addEventListener("submit",function(t){t.preventDefault();let o=Number(l.elements.delay.value),n=Number(l.elements.step.value),i=Number(l.elements.amount.value);for(let t=1;t<=i;t+=1)s(t,o).then(({position:t,delay:o})=>{e(r).Notify.success(`Fulfilled promise ${t} in ${o}ms`)}).catch(({position:t,delay:o})=>{e(r).Notify.failure(`Rejected promise ${t} in ${o}ms`)}),o+=n});const s=(e,t)=>new Promise((o,n)=>{setTimeout(()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})},t)});
//# sourceMappingURL=03-promises.ecaef06f.js.map
