const userAcrtionEl = document.querySelector('.user__actions');
const userActionBtn = document.querySelector('.nav-select-icon');
const userMenu = document.querySelector('.user-actions__drop-down--list');

let isOpen = false;

userAcrtionEl.addEventListener('click', toggleUserMenu);

userMenu.addEventListener('click', () => {
  if (isOpen) closeUserMenu();
});

document.addEventListener('keydown', e => {
  if (isOpen && e.code === 'Escape') closeUserMenu();
});

function toggleUserMenu() {
  userMenu.classList.toggle('active__drop-down');
  userActionBtn.classList.toggle('active__drop-down');

  userMenu.classList.contains('active__drop-down')
    ? (isOpen = true)
    : (isOpen = false);
}

function closeUserMenu() {
  userMenu.classList.remove('active__drop-down');
  userActionBtn.classList.remove('active__drop-down');
}
