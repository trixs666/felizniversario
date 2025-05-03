function abrirEnvelope() {
  const envelope = document.querySelector('.envelope');
  const cartinha = document.querySelector('.cartinha');
  
  document.querySelector('.tampa').style.transform = "rotateX(180deg)";
  
  envelope.style.opacity = "0";
  envelope.style.pointerEvents = "none";
  
  setTimeout(() => {
    cartinha.style.display = "block";
    setTimeout(() => {
      cartinha.classList.add('visivel');
    }, 50);
  }, 500);
}