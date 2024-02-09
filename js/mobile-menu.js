import { toggleUserMenu } from './user-actions';

const burgerEl = document.querySelector('.burger-menu');
const menuEl = document.querySelector('.header__menu');
const wrapperEl = document.querySelector('.header__wrapper');
const menuItemsEl = document.querySelectorAll('.header__nav-item');
const dropDownEl = document.querySelectorAll('.nav__drop-down--item');
const userMenuEl = document.querySelector('.user-actions__drop-down--list');

const menuOpen = () => {
  if (userMenuEl.classList.contains('active__drop-down')) {
    toggleUserMenu();
  }

  burgerEl.classList.add('is-open');
  menuEl.classList.add('open-menu');
  wrapperEl.classList.add('open-menu');

  document.body.style.overflow = 'hidden';
};

export const menuClose = () => {
  burgerEl.classList.remove('is-open');
  menuEl.classList.remove('open-menu');
  wrapperEl.classList.remove('open-menu');

  document.body.style.overflow = '';
};

burgerEl.addEventListener('click', () => {
  if (burgerEl.classList.value.includes('is-open')) {
    menuClose();
  } else {
    menuOpen();
  }
});

menuItemsEl.forEach(item =>
  item.addEventListener('click', () => {
    if (burgerEl.classList.value.includes('is-open')) {
      menuClose();
    } else {
      return;
    }
  })
);

dropDownEl.forEach(item =>
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

  if (userMenuEl.classList.contains('active__drop-down')) {
    toggleUserMenu();
  }

  menuClose();
});
