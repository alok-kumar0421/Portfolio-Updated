// scroll fade-in
  const els = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
  },{threshold:0.12});
  els.forEach(el=>obs.observe(el));

  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.photo-ring').forEach(r=>r.style.animation='none');
    document.querySelectorAll('.fade-up').forEach(el=>el.classList.add('in'));
  }