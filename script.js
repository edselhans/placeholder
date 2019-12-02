(function(){
  const heading = document.getElementById('heading');
  for (let i = 1; i <= 8; i++) {
    let div = document.createElement('div');
    div.classList.add('heading__title');
    div.classList.add('heading__title--' + i);
    div.innerHTML = '<span class="heading__sub">SUB</span><span class="heading__underscore">_</span>A<span class="heading__l">L</span>T';
    heading.appendChild(div);
  }
}());

window.onload = function() {
  let loadScreen = document.getElementById('load-screen');
  loadScreen.addEventListener('transitionend', function() {
    loadScreen.classList.add('remove-load');
  }, {once: true});
  window.requestAnimationFrame(function(){
    loadScreen.style.opacity = 0;
  });
};
