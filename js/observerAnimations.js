import { doCount } from './numbersCount';

window.onload = () => {
  const firstGraph = document.querySelectorAll('.item-grah--column');
  const inputCheck = document.querySelector('#grah-check');
  const inputCheckBg = document.querySelector('.hero__card-item--second');
  const countVolume = document.querySelector('[data-count-volume]');
  const countMarket = document.querySelector('[data-count-market]');
  const countSupply = document.querySelector('[data-count-supply]');
  const countPrice = document.querySelector('[data-count-price]');
  const countStake = document.querySelector('[data-count-stake]');
  const countUsers = document.querySelector('[data-count-users]');
  const countTotal = document.querySelector('[data-count-total]');
  const countLiquidity = document.querySelector('[data-count-liquidity]');
  const countBack = document.querySelector('[data-count-back]');
  const metricsBg = document.querySelector('.metrics__bg');

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
          doCount(countVolume, 185246, 1123, 2000, ['en'], '$');
        }
        if (entry.target.hasAttribute('data-count-market')) {
          doCount(countMarket, 47572397, 151232, 2000, ['en'], '$');
        }
        if (entry.target.hasAttribute('data-count-supply')) {
          doCount(countSupply, 2575183, 10178, 2000, ['en']);
        }
        if (entry.target.hasAttribute('data-count-price')) {
          doCount(countPrice, 19.24, 1.38, 2000, ['en-IN'], '$');
        }
        if (entry.target.hasAttribute('data-count-stake')) {
          doCount(countStake, 30, 1, 2000, ['en'], '$');
        }
        if (entry.target.hasAttribute('data-count-users')) {
          doCount(countUsers, 2600, 5, 2000, ['en']);
        }
        if (entry.target.hasAttribute('data-count-total')) {
          doCount(countTotal, 1800000, 5245, 2000, ['en']);
        }
        if (entry.target.hasAttribute('data-count-liquidity')) {
          doCount(countLiquidity, 4824884, 10123, 2000, ['en'], '$');
        }
        if (entry.target.hasAttribute('data-count-back')) {
          doCount(countBack, 63844, 213, 5000, ['en']);
        }
        if (entry.target.hasAttribute('data-metrics-bg')) {
          metricsBg.classList.add('metrics__bg--animated');
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
