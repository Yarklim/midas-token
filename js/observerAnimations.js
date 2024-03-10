window.onload = () => {
  const inputCheck = document.querySelector('#grah-check');
  const inputCheckBg = document.querySelector('.hero__card-item--second');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        inputCheck.setAttribute('checked', true);
        inputCheckBg.classList.add('checkedBg');
        const lazyImg = entry.target;
        // выводим информацию в консоль - проверка работоспособности наблюдателя
        console.log(lazyImg);
        // меняем фон контейнера
        // lazyImg.style.background = 'deepskyblue'
        // прекращаем наблюдение
        observer.unobserve(lazyImg);
      }
    });
  }, options);

  // с помощью цикла следим за всеми img на странице
  const arr = document.querySelectorAll('[data-observer-target]');
  arr.forEach(i => {
    observer.observe(i);
  });
};
