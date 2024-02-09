import { toggleUserMenu } from './user-actions';

const burgerEl = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__menu');
const wrapper = document.querySelector('.header__wrapper');
const menuItems = document.querySelectorAll('.header__nav-item');
const userMenu = document.querySelector('.user-actions__drop-down--list');

const menuOpen = () => {
  if (userMenu.classList.contains('active__drop-down')) {
    toggleUserMenu();
  }

  burgerEl.classList.add('is-open');
  menu.classList.add('open-menu');
  wrapper.classList.add('open-menu');

  document.body.style.overflow = 'hidden';
};

const menuClose = () => {
  burgerEl.classList.remove('is-open');
  menu.classList.remove('open-menu');
  wrapper.classList.remove('open-menu');

  document.body.style.overflow = '';
};

burgerEl.addEventListener('click', () => {
  if (burgerEl.classList.value.includes('is-open')) {
    menuClose();
  } else {
    menuOpen();
  }
});

menuItems.forEach(item =>
  item.addEventListener('click', () => {
    if (burgerEl.classList.value.includes('is-open')) {
      menuClose();
    } else {
      return;
    }
  })
);

window.matchMedia('(min-width: 910px)').addEventListener('change', e => {
  if (!e.matches) return;

  if (userMenu.classList.contains('active__drop-down')) {
    toggleUserMenu();
  }

  menuClose();
});
