const userAcrtionEl = document.querySelector('.user__actions');
const userActionBtn = document.querySelector('.nav-select-icon');
const userMenu = document.querySelector('.user-actions__drop-down--list');

let isOpen = false;

userAcrtionEl.addEventListener('click', toggleUserMenu);

userMenu.addEventListener('click', () => {
  isOpen && toggleUserMenu();
});

document.addEventListener('keydown', e => {
  if (isOpen && e.code === 'Escape') toggleUserMenu();
});

function toggleUserMenu(e) {
  userMenu.classList.toggle('active__drop-down');
  userActionBtn.classList.toggle('active__drop-down');

  if (userMenu.classList.contains('active__drop-down')) {
    isOpen = true;
  } else {
    isOpen = false;
  }
}
