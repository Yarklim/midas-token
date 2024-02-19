const headerMenu = document.querySelector('.header');
const heroSection = document.querySelector('.hero');

// ================ Hero Section Position =================
let bodyTopPadding = headerMenu.offsetHeight;

const resizeBody = new ResizeObserver(entries => {
  for (const entry of entries) {
    const newHeight = entry.contentRect.height;

    bodyTopPadding = newHeight;

    heroSection.style.paddingTop = `calc(${bodyTopPadding}px + clamp(2rem, 1.591rem + 2.05vw, 3.125rem))`;
  }
});

resizeBody.observe(headerMenu);

// ================ Sticky Menu ===================
let prevScrollPos = window.scrollY;

window.onscroll = () => {
  let currentScrollPos = window.scrollY;

  prevScrollPos > currentScrollPos
    ? (headerMenu.style.top = '0')
    : (headerMenu.style.top = '-100%');

  prevScrollPos = currentScrollPos;
};

// ================ Active Link =================
const headerNavLink = document.querySelectorAll('.header__nav-link');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        headerNavLink.forEach(link => {
          const id = link.getAttribute('href').replace('#', '');

          if (id === entry.target.id) {
            onChangeLinkColor(link);
          }
        });
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('[data-js-observer]').forEach(section => {
  observer.observe(section);
});

headerNavLink.forEach(link => {
  link.addEventListener('click', () => onChangeLinkColor(link));
});

function onChangeLinkColor(link) {
  const currentActiveLink = document.querySelector('.active__nav-link');

  if (currentActiveLink) {
    currentActiveLink.classList.remove('active__nav-link');
  }
  link.classList.add('active__nav-link');
}