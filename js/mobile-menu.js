const burger = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mobile__menu');
const header = document.querySelector('.header__wrapper');

let headerBlockHeight = header.offsetHeight;

const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    const newHeight = entry.contentRect.height;

    headerBlockHeight = newHeight;

    if (burger.classList.value.includes('is-open')) {
      mobMenu.style.top = `${headerBlockHeight + window.scrollY}px`;
    } else {
      mobMenu.style.top = '-150%';
    }
  }
});

const menuOpen = () => {
  burger.classList.add('is-open');

  resizeObserver.observe(header);

  mobMenu.style.top = `${headerBlockHeight + window.scrollY}px`;
};

const menuClose = () => {
  burger.classList.remove('is-open');

  mobMenu.style.top = '-150%';
};

burger.addEventListener('click', () => {
  if (burger.classList.value.includes('is-open')) {
    menuClose();
  } else {
    menuOpen();
  }
});
