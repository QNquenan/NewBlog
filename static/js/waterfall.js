function arrangeItems(t,e){var a=document.querySelector(t),n=document.querySelectorAll(e);if(a&&0!==n.length){var r=a.clientWidth,o=3;r<=768?o=1:r<=1e3&&(o=2);var i=Array(o).fill(0),s=r/o;n.forEach((t=>{var e=t.offsetHeight,a=Math.min(...i),n=i.indexOf(a),r=n===o-1;t.style.transform=`translate(${n*s}px, ${a}px)`,t.style.width=r?s+"px":s-20+"px",i[n]+=e+20})),a.style.height=Math.max(...i)+"px"}}function todo(){location.pathname.startsWith("/talk")?(arrangeItems("#talk-container",".talk-wrapper"),window.addEventListener("scroll",(()=>arrangeItems("#talk-container",".talk-wrapper"))),window.addEventListener("resize",(()=>arrangeItems("#talk-container",".talk-wrapper")))):location.pathname.startsWith("/todo")&&(arrangeItems("#todolist",".list_item"),window.addEventListener("scroll",(()=>arrangeItems("#todolist",".list_item"))),window.addEventListener("resize",(()=>arrangeItems("#todolist",".list_item"))))}document.addEventListener("pjax:complete",todo),document.addEventListener("DOMContentLoaded",todo);