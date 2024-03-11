import { doCount } from './numbersCount';

window.onload = () => {
  const firstGraph = document.querySelectorAll('.item-grah--column');
  const inputCheck = document.querySelector('#grah-check');
  const inputCheckBg = document.querySelector('.hero__card-item--second');
  const countVolume = document.querySelector('[data-count-volume]');
  const countMarket = document.querySelector('[data-count-market]');
  const countSupply = document.querySelector('[data-count-supply]');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.hasAttribute('data-column')) {
          firstGraph.forEach(el => el.classList.add('animated-column'));
        }
        if (entry.target.hasAttribute('data-check')) {
          inputCheck.setAttribute('checked', true);
          inputCheckBg.classList.add('checkedBg');
        }
        if (entry.target.hasAttribute('data-count-volume')) {
          doCount(countVolume, 185246, 1000, 2000, 'en');
        }
        if (entry.target.hasAttribute('data-count-market')) {
          doCount(countMarket, 47572397, 150000, 2000, 'en');
        }
        if (entry.target.hasAttribute('data-count-supply')) {
          doCount(countSupply, 2575183, 10000, 2000, 'en');
        }

        const entryEl = entry.target;

        observer.unobserve(entryEl);
      }
    });
  }, options);

  const arr = document.querySelectorAll('[data-observer-target]');
  arr.forEach(i => {
    observer.observe(i);
  });
};
