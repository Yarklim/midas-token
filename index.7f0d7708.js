const e=document.querySelector(".user__actions"),t=document.querySelector(".nav-select-icon"),c=document.querySelector(".user-actions__drop-down--list"),o=document.querySelectorAll(".user-actions__drop-down--item"),n=document.querySelector(".header__menu");let s=!1;function d(){c.classList.toggle("active__drop-down"),t.classList.toggle("active__drop-down"),s=!!c.classList.contains("active__drop-down")}e.addEventListener("click",d),c.addEventListener("click",(()=>{s&&d()})),o.forEach((e=>e.addEventListener("click",(()=>{n.classList.contains("open-menu")&&_()})))),document.addEventListener("keydown",(e=>{s&&"Escape"===e.code&&d()}));const r=document.querySelector(".burger-menu"),i=document.querySelector(".header__menu"),a=document.querySelector(".header__wrapper"),l=document.querySelectorAll(".header__nav-item"),u=document.querySelectorAll(".nav__drop-down--item"),m=document.querySelector(".user-actions__drop-down--list"),_=()=>{r.classList.remove("is-open"),i.classList.remove("open-menu"),a.classList.remove("open-menu"),document.body.style.overflow=""};r.addEventListener("click",(()=>{r.classList.value.includes("is-open")?_():(m.classList.contains("active__drop-down")&&d(),r.classList.add("is-open"),i.classList.add("open-menu"),a.classList.add("open-menu"),document.body.style.overflow="hidden")})),l.forEach((e=>e.addEventListener("click",(()=>{r.classList.value.includes("is-open")&&_()})))),u.forEach((e=>e.addEventListener("click",(()=>{r.classList.value.includes("is-open")&&_()})))),window.matchMedia("(min-width: 910px)").addEventListener("change",(e=>{e.matches&&(m.classList.contains("active__drop-down")&&d(),_())}));const v=document.querySelector(".header__message");document.querySelector(".message__btn--close").addEventListener("click",(function(){v.classList.add("display-none")}));const L=document.querySelector(".backdrop"),p=(document.querySelector(".modal"),document.querySelectorAll(".js-modal")),y=document.querySelector(".modal__close");function w(){L.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",q)}function h(){L.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function q(e){"Escape"===e.code&&h()}p.forEach((e=>{e.addEventListener("click",w)})),L.addEventListener("click",(e=>{e.currentTarget===e.target&&h()})),y.addEventListener("click",h);const E=document.querySelector(".header__wrapper"),S=document.querySelector(".hero");let f=E.offsetHeight;new ResizeObserver((e=>{for(const t of e){const e=t.contentRect.height;f=e,S.style.paddingTop=`calc(${f}px + clamp(2rem, 1.591rem + 2.05vw, 3.125rem))`}})).observe(E);
//# sourceMappingURL=index.7f0d7708.js.map