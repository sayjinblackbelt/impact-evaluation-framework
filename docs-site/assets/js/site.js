document.addEventListener('DOMContentLoaded',()=>{
  const progress=document.getElementById('reading-progress');
  const toggle=document.getElementById('menu-toggle');
  const sidebar=document.getElementById('sidebar');
  const update=()=>{if(!progress)return;const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?(window.scrollY/h)*100:0)+'%'};
  window.addEventListener('scroll',update,{passive:true});update();
  if(toggle&&sidebar){toggle.addEventListener('click',()=>sidebar.classList.toggle('open'));document.addEventListener('click',e=>{if(window.innerWidth<=900&&!sidebar.contains(e.target)&&e.target!==toggle)sidebar.classList.remove('open')})}
  const path=location.pathname;
  document.querySelectorAll('.sidebar a').forEach(a=>{if(a.pathname===path)a.classList.add('active')});
});
