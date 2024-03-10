const inputEl = document.querySelector('.item-graph__check');
const cardBgEl = document.querySelector('.hero__card-item--second');

// ============ Hero Section - first card ============

// ====================================================

// ============ Hero Section - second card ============

inputEl.addEventListener('click', () => {
  inputEl.toggleAttribute('checked');

  if (inputEl.getAttribute('checked') === '') {
    cardBgEl.classList.add('checkedBg');
  } else {
    cardBgEl.classList.remove('checkedBg');
  }
});
// ===================================================
