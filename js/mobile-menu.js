const burger = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mobile__menu');
const header = document.querySelector('.header__wrapper');

let headerBlockHeight = header.offsetHeight;

const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    const newHeight = entry.contentRect.height;

    headerBlockHeight = newHeight;

    mobMenu.style.top = `${headerBlockHeight}px`;
  }
});

resizeObserver.observe(header);

burger.addEventListener('click', () => {
  burger.classList.toggle('is-open');

  mobMenu.style.top = `${headerBlockHeight}px`;

  mobMenu.classList.toggle('menu-open');
});
