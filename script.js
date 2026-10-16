const els = document.querySelectorAll('.fade-up');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
},{threshold:0.12});
els.forEach(el=>obs.observe(el));

if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('.photo-ring').forEach(r=>r.style.animation='none');
  document.querySelectorAll('.card').forEach(c=>c.style.animation='none');
  document.querySelectorAll('.fade-up').forEach(el=>el.classList.add('in'));
}

const toggle = document.getElementById('navtoggle');
const links = document.getElementById('navlinks');
if(toggle && links){
  const setOpen = (open)=>{
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', ()=>setOpen(!links.classList.contains('open')));
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>setOpen(false)));
}