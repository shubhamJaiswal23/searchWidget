const btn = document.querySelector('.btn');

function onSearchClick() {
  const container = document.querySelector('.search');
  const input = document.querySelector('.input');
  container.classList.toggle('active');
  input.focus();
}

btn.addEventListener('click', onSearchClick);
