function arrangeItems(t,e){t=document.querySelector(t),e=document.querySelectorAll(e);if(t&&e){var a=t.clientWidth,n=3;a<=768?n=1:a<=1e3&&(n=2);for(var r=Array(n).fill(0),o=a/n,i=e.length-1;i>=0;i--){var s=e[i],d=s.offsetHeight,l=Math.min(...r),m=r.indexOf(l),c=m===n-1;s.style.transform=`translate(${m*o}px, ${l}px)`,s.style.width=c?o+"px":o-20+"px",r[m]+=d+20}t.style.height=Math.max(...r)+"px"}}function todo(){location.pathname.startsWith("/talk")?(arrangeItems("#talk-container",".talk-wrapper"),window.addEventListener("scroll",arrangeItems("#talk-container",".talk-wrapper")),window.addEventListener("resize",arrangeItems("#talk-container",".talk-wrapper"))):location.pathname.startsWith("/todo")&&(arrangeItems("#todolist",".list_item"),window.addEventListener("scroll",arrangeItems("#todolist",".list_item")),window.addEventListener("resize",arrangeItems("#todolist",".list_item")))}document.addEventListener("pjax:complete",todo),document.addEventListener("DOMContentLoaded",todo);