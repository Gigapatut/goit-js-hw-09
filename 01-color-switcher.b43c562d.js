const t=()=>`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e=document.querySelector("body"),d=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");let l=null;a.disabled=!0,d.addEventListener("click",()=>{a.disabled=!1,d.disabled=!0,l=setInterval(()=>{let d=t();e.style.backgroundColor=d},1e3)}),a.addEventListener("click",()=>{clearInterval(l),d.disabled=!1,a.disabled=!0});
//# sourceMappingURL=01-color-switcher.b43c562d.js.map