document.querySelectorAll(".collapsible").forEach((e=>{var t;e.addEventListener("click",(function(){const e=this.parentElement,o=e.querySelector(".content"),l=1e3*parseFloat(window.getComputedStyle(o).transitionDuration);e.hasAttribute("open")?(t&&clearTimeout(t),o.style.height=o.scrollHeight+"px",setTimeout((()=>{e.removeAttribute("open"),o.style.height="0px"}),1)):(e.setAttribute("open",""),o.style.height=o.scrollHeight+"px",t=setTimeout((()=>{o.style.height="auto"}),l))}))})),document.querySelectorAll(".details[open]").forEach((e=>{e.querySelector(".content").style.height="auto"}));