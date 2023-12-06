const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__menu');
const menuItems = document.querySelectorAll('.header__nav-item');

const menuOpen = () => {
  burger.classList.add('is-open');
  menu.classList.add('open-menu');
};

const menuClose = () => {
  burger.classList.remove('is-open');
  menu.classList.remove('open-menu');
};

burger.addEventListener('click', () => {
  if (burger.classList.value.includes('is-open')) {
    menuClose();
  } else {
    menuOpen();
  }
});

menuItems.forEach(item =>
  item.addEventListener('click', () => {
    if (burger.classList.value.includes('is-open')) {
      menuClose();
    } else {
      return;
    }
  })
);
