
document.querySelectorAll('.accordion-btn').forEach(btn=>{
 btn.addEventListener('click',()=>{
   const p=btn.nextElementSibling;
   p.style.display=p.style.display==='block'?'none':'block';
 })
});
