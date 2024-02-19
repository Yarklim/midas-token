import { menuClose } from './mobile-menu';

const userActionEl = document.querySelector('.user__actions');
const userActionBtnEl = document.querySelector('.nav-select-icon');
const userMenuEl = document.querySelector('.user-actions__drop-down--list');
const userMenuItemEl = document.querySelectorAll(
  '.user-actions__drop-down--item'
);
const sectionEl = document.querySelectorAll('section');
const mobileMenuEl = document.querySelector('.header__menu');

let isOpen = false;

userActionEl.addEventListener('click', toggleUserMenu);

userMenuEl.addEventListener('click', () => {
  isOpen && toggleUserMenu();
});

userMenuItemEl.forEach(item =>
  item.addEventListener('click', () => {
    if (mobileMenuEl.classList.contains('open-menu')) menuClose();
  })
);

export function toggleUserMenu() {
  userMenuEl.classList.toggle('active__drop-down');
  userActionBtnEl.classList.toggle('active__drop-down');

  if (userMenuEl.classList.contains('active__drop-down')) {
    isOpen = true;
  } else {
    isOpen = false;
  }

  document.addEventListener('keydown', e => {
    if (isOpen && e.code === 'Escape') toggleUserMenu();
  });

  sectionEl.forEach(el => {
    el.addEventListener('click', e => {
      isOpen && e.currentTarget !== userActionEl && toggleUserMenu();
    });
  });
}
