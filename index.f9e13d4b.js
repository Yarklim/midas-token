!function(){var e=document.querySelector(".header"),t=document.querySelector(".hero"),n=e.offsetHeight;new ResizeObserver((function(e){var c=!0,o=!1,r=void 0;try{for(var d,s=e[Symbol.iterator]();!(c=(d=s.next()).done);c=!0){var i=d.value.contentRect.height;n=i,t.style.paddingTop="calc(".concat(n,"px + clamp(2rem, 1.591rem + 2.05vw, 3.125rem))")}}catch(e){o=!0,r=e}finally{try{c||null==s.return||s.return()}finally{if(o)throw r}}})).observe(e);var c=window.scrollY;window.onscroll=function(){var t=window.scrollY;e.style.top=c>t?"0":"-100%",c=t};var o=document.querySelector(".user__actions"),r=document.querySelector(".nav-select-icon"),d=document.querySelector(".user-actions__drop-down--list"),s=document.querySelectorAll(".user-actions__drop-down--item"),i=document.querySelector(".header__menu"),a=!1;function l(){d.classList.toggle("active__drop-down"),r.classList.toggle("active__drop-down"),a=!!d.classList.contains("active__drop-down"),document.addEventListener("keydown",(function(e){a&&"Escape"===e.code&&l()}))}o.addEventListener("click",l),d.addEventListener("click",(function(){a&&l()})),s.forEach((function(e){return e.addEventListener("click",(function(){i.classList.contains("open-menu")&&f()}))}));var u=document.querySelector(".burger-menu"),m=document.querySelector(".header__menu"),v=document.querySelector(".header__wrapper"),_=document.querySelectorAll(".header__nav-item"),y=document.querySelectorAll(".nav__drop-down--item"),L=document.querySelector(".user-actions__drop-down--list"),f=function(){u.classList.remove("is-open"),m.classList.remove("open-menu"),v.classList.remove("open-menu"),document.body.style.overflow=""};u.addEventListener("click",(function(){u.classList.value.includes("is-open")?f():(L.classList.contains("active__drop-down")&&l(),u.classList.add("is-open"),m.classList.add("open-menu"),v.classList.add("open-menu"),document.body.style.overflow="hidden")})),_.forEach((function(e){return e.addEventListener("click",(function(){u.classList.value.includes("is-open")&&f()}))})),y.forEach((function(e){return e.addEventListener("click",(function(){u.classList.value.includes("is-open")&&f()}))})),window.matchMedia("(min-width: 910px)").addEventListener("change",(function(e){e.matches&&(L.classList.contains("active__drop-down")&&l(),f())}));var p=document.querySelector(".header__message");document.querySelector(".message__btn--close").addEventListener("click",(function(){p.classList.add("display-none")}));var h=document.querySelector(".backdrop"),w=(document.querySelector(".modal"),document.querySelectorAll(".js-modal")),S=document.querySelector(".modal__close");function g(){h.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",k)}function q(){h.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function k(e){"Escape"===e.code&&q()}w.forEach((function(e){e.addEventListener("click",g)})),h.addEventListener("click",(function(e){e.currentTarget===e.target&&q()})),S.addEventListener("click",q);var E=document.querySelector(".item-graph__check"),b=document.querySelector(".hero__card-item--second");E.addEventListener("click",(function(){E.toggleAttribute("checked"),""===E.getAttribute("checked")?b.classList.add("checkedBg"):b.classList.remove("checkedBg"),console.log(E.getAttribute("checked"))}))}();
//# sourceMappingURL=index.f9e13d4b.js.map
