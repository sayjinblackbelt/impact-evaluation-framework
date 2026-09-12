document.addEventListener('DOMContentLoaded',()=>{
 const progress=document.getElementById('reading-progress'),toggle=document.getElementById('menu-toggle'),sidebar=document.getElementById('sidebar'),toc=document.getElementById('toc');
 const update=()=>{if(!progress)return;const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?Math.min(100,(window.scrollY/h)*100):0)+'%'};
 window.addEventListener('scroll',update,{passive:true});update();
 if(toggle&&sidebar){toggle.addEventListener('click',()=>sidebar.classList.toggle('open'));document.addEventListener('click',e=>{if(window.innerWidth<=900&&!sidebar.contains(e.target)&&e.target!==toggle)sidebar.classList.remove('open')})}
 const path=location.pathname;document.querySelectorAll('.sidebar a').forEach(a=>{if(a.pathname===path)a.classList.add('active')});
 if(toc){const headings=[...document.querySelectorAll('.content h2,.content h3')];if(headings.length>1){const title=document.createElement('strong');title.textContent='Nesta página';toc.appendChild(title);const list=document.createElement('ul');headings.forEach((h,i)=>{if(!h.id)h.id='section-'+(i+1);const li=document.createElement('li');if(h.tagName==='H3')li.className='toc-sub';const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;li.appendChild(a);list.appendChild(li)});toc.appendChild(list)}}
});
