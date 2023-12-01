const message = document.querySelector('.header__message');
const messageClose = document.querySelector('.message__btn--close');

messageClose.addEventListener('click', hideBlock);

function hideBlock() {
  message.classList.add('display-none');
}
