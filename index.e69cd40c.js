!function(){var e=document.querySelector(".header"),t=document.querySelector(".hero"),n=e.offsetHeight;new ResizeObserver((function(e){var c=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(c=(i=s.next()).done);c=!0){var d=i.value.contentRect.height;n=d,t.style.paddingTop="calc(".concat(n,"px + clamp(2rem, 1.591rem + 2.05vw, 3.125rem))")}}catch(e){o=!0,r=e}finally{try{c||null==s.return||s.return()}finally{if(o)throw r}}})).observe(e);var c=window.scrollY;window.onscroll=function(){var t=window.scrollY;e.style.top=c>t?"0":"-100%",c=t};var o=document.querySelectorAll(".header__nav-link"),r=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&o.forEach((function(t){t.getAttribute("href").replace("#","")===e.target.id&&i(t)}))}))}),{threshold:.3});function i(e){var t=document.querySelector(".active__nav-link");t&&t.classList.remove("active__nav-link"),e.classList.add("active__nav-link")}document.querySelectorAll("[data-js-observer]").forEach((function(e){r.observe(e)})),o.forEach((function(e){e.addEventListener("click",(function(){return i(e)}))}));var s=document.querySelector(".user__actions"),d=document.querySelector(".nav-select-icon"),a=document.querySelector(".user-actions__drop-down--list"),l=document.querySelectorAll(".user-actions__drop-down--item"),u=document.querySelectorAll("section"),v=document.querySelector(".header__menu"),m=!1;function f(){a.classList.toggle("active__drop-down"),d.classList.toggle("active__drop-down"),m=!!a.classList.contains("active__drop-down"),document.addEventListener("keydown",(function(e){m&&"Escape"===e.code&&f()})),u.forEach((function(e){e.addEventListener("click",(function(e){m&&e.currentTarget!==s&&f()}))}))}s.addEventListener("click",f),a.addEventListener("click",(function(){m&&f()})),l.forEach((function(e){return e.addEventListener("click",(function(){v.classList.contains("open-menu")&&E()}))}));var _=document.querySelector(".burger-menu"),y=document.querySelector(".header__menu"),L=document.querySelector(".header__wrapper"),h=document.querySelectorAll(".header__nav-item"),p=document.querySelectorAll(".nav__drop-down--item"),w=document.querySelector(".user-actions__drop-down--list"),E=function(){_.classList.remove("is-open"),y.classList.remove("open-menu"),L.classList.remove("open-menu"),document.body.style.overflow=""};_.addEventListener("click",(function(){_.classList.value.includes("is-open")?E():(w.classList.contains("active__drop-down")&&f(),_.classList.add("is-open"),y.classList.add("open-menu"),L.classList.add("open-menu"),document.body.style.overflow="hidden")})),h.forEach((function(e){return e.addEventListener("click",(function(){_.classList.value.includes("is-open")&&E()}))})),p.forEach((function(e){return e.addEventListener("click",(function(){_.classList.value.includes("is-open")&&E()}))})),window.matchMedia("(min-width: 910px)").addEventListener("change",(function(e){e.matches&&(w.classList.contains("active__drop-down")&&f(),E())}));var S=document.querySelector(".header__message");document.querySelector(".message__btn--close").addEventListener("click",(function(){S.classList.add("display-none")}));var k=document.querySelector(".backdrop"),q=(document.querySelector(".modal"),document.querySelectorAll(".js-modal")),g=document.querySelector(".modal__close");function b(){k.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",x)}function A(){k.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function x(e){"Escape"===e.code&&A()}q.forEach((function(e){e.addEventListener("click",b)})),k.addEventListener("click",(function(e){e.currentTarget===e.target&&A()})),g.addEventListener("click",A);var T=document.querySelector(".item-graph__check"),j=document.querySelector(".hero__card-item--second");T.addEventListener("click",(function(){T.toggleAttribute("checked"),""===T.getAttribute("checked")?j.classList.add("checkedBg"):j.classList.remove("checkedBg")}))}();
//# sourceMappingURL=index.e69cd40c.js.map
