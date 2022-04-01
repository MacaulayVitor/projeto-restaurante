const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
  if (event.type === 'touchstart') event.proventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  event.currentTarget.setAttribute('aria-expanded', 'true');
  const active = nav.classList.contains('active');
  if (active){
    event.currentTarget.setAttribute('aria-label', 'fechar Menu')
  }
  else{
    event.currentTarget.setAttribute('aria-label', 'abrir Menu')
  }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);