(()=>{"use strict";const e=document.querySelector(".weather"),t=document.querySelector(".weather"),n=document.querySelector("form"),s=document.querySelector("input");s.focus(),n.addEventListener("submit",(n=>{n.preventDefault(),""!==s.value&&(t.classList.contains("hidden")||t.classList.add("hidden"),t.classList.contains("hidden")&&(t.textContent="",async function(t){const n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&&units=metric&appid=a41036db70430c9e27ed10e198f89e50`;try{const t=await fetch(n,{mode:"cors"}),s=await t.json();!function(t,n,s,c,o){const a=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div"),u=document.createElement("div");a.setAttribute("class","search-name"),i.setAttribute("class","temp"),d.setAttribute("class","w-info"),r.setAttribute("class","w-info"),u.setAttribute("class","w-info"),a.textContent=t,i.textContent=`${n} °C`,d.textContent=`Feels like: ${s} °C`,r.textContent=`Humidity: ${c} %`,u.textContent=`Wind: ${o} Km/h`,e.append(a,i,d,r,u)}(s.name,s.main.temp,s.main.feels_like,s.main.humidity,s.wind.speed),console.log(s)}catch(n){n&&function(t){const n=document.createElement("div");n.setAttribute("class","search-error"),n.textContent=`${t}: Data not found`,e.appendChild(n)}(t),console.error(n)}}(s.value),s.value="",s.focus(),t.classList.remove("hidden")))}))})();