!function(){var e=document.querySelector(".user__actions"),n=document.querySelector(".nav-select-icon"),t=document.querySelector(".user-actions__drop-down--list"),o=document.querySelectorAll(".user-actions__drop-down--item"),c=document.querySelector(".header__menu"),r=!1;function s(){t.classList.toggle("active__drop-down"),n.classList.toggle("active__drop-down"),r=!!t.classList.contains("active__drop-down")}e.addEventListener("click",s),t.addEventListener("click",(function(){r&&s()})),o.forEach((function(e){return e.addEventListener("click",(function(){c.classList.contains("open-menu")&&v()}))})),document.addEventListener("keydown",(function(e){r&&"Escape"===e.code&&s()}));var d=document.querySelector(".burger-menu"),i=document.querySelector(".header__menu"),a=document.querySelector(".header__wrapper"),l=document.querySelectorAll(".header__nav-item"),u=document.querySelectorAll(".nav__drop-down--item"),m=document.querySelector(".user-actions__drop-down--list"),v=function(){d.classList.remove("is-open"),i.classList.remove("open-menu"),a.classList.remove("open-menu"),document.body.style.overflow=""};d.addEventListener("click",(function(){d.classList.value.includes("is-open")?v():(m.classList.contains("active__drop-down")&&s(),d.classList.add("is-open"),i.classList.add("open-menu"),a.classList.add("open-menu"),document.body.style.overflow="hidden")})),l.forEach((function(e){return e.addEventListener("click",(function(){d.classList.value.includes("is-open")&&v()}))})),u.forEach((function(e){return e.addEventListener("click",(function(){d.classList.value.includes("is-open")&&v()}))})),window.matchMedia("(min-width: 910px)").addEventListener("change",(function(e){e.matches&&(m.classList.contains("active__drop-down")&&s(),v())}));var _=document.querySelector(".header__message");document.querySelector(".message__btn--close").addEventListener("click",(function(){_.classList.add("display-none")}));var y=document.querySelector(".backdrop"),L=(document.querySelector(".modal"),document.querySelectorAll(".js-modal")),f=document.querySelector(".modal__close");function p(){y.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",w)}function h(){y.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function w(e){"Escape"===e.code&&h()}L.forEach((function(e){e.addEventListener("click",p)})),y.addEventListener("click",(function(e){e.currentTarget===e.target&&h()})),f.addEventListener("click",h);var S=document.querySelector(".header__wrapper"),q=document.querySelector(".hero"),E=S.offsetHeight;new ResizeObserver((function(e){var n=!0,t=!1,o=void 0;try{for(var c,r=e[Symbol.iterator]();!(n=(c=r.next()).done);n=!0){var s=c.value.contentRect.height;E=s,q.style.paddingTop="calc(".concat(E,"px + clamp(2rem, 1.591rem + 2.05vw, 3.125rem))")}}catch(e){t=!0,o=e}finally{try{n||null==r.return||r.return()}finally{if(t)throw o}}})).observe(S)}();
//# sourceMappingURL=index.a3dc6ca9.js.map