const userAcrtionEl = document.querySelector('.user__actions');
const userActionBtn = document.querySelector('.nav-select-icon');
const userMenu = document.querySelector('.user-actions__drop-down--list');

let isOpen = false;

userAcrtionEl.addEventListener('click', e => {
  toggleUserMenu();
  isOpen = true;

  console.log(e.target);
  console.log(e.currentTarget);
  console.log(isOpen);

  //   if (e.target !== e.currentTarget && isOpen) {
  //     closeUserMenu();
  //     isOpen = false;
  //   }
});

function toggleUserMenu() {
  userMenu.classList.toggle('active__drop-down');
  userActionBtn.classList.toggle('active__drop-down');
}

function closeUserMenu() {
  userMenu.classList.remove('active__drop-down');
  userActionBtn.classList.remove('active__drop-down');
}
