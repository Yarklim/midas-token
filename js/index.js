import './mobile-menu';
import './hide-block';
import './modal';

const headerNav = document.querySelector('.header__wrapper');
const heroSection = document.querySelector('.hero');

let bodyTopPadding = headerNav.offsetHeight;

const resizeBody = new ResizeObserver(entries => {
  for (const entry of entries) {
    const newHeight = entry.contentRect.height;

    bodyTopPadding = newHeight;

    heroSection.style.paddingTop = `calc(${bodyTopPadding}px + clamp(2rem, 1.591rem + 2.05vw, 3.125rem))`;
  }
});

resizeBody.observe(headerNav);
