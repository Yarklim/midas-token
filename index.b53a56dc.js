const e=document.querySelector(".header"),t=document.querySelector(".hero"),c=document.querySelector("[data-select-list]"),o=document.querySelectorAll("[data-select-item]");let n=e.offsetHeight;new ResizeObserver((e=>{for(const c of e){const e=c.contentRect.height;n=e,t.style.paddingTop=`calc(${n}px + clamp(2rem, 1.591rem + 2.05vw, 3.125rem))`}})).observe(e);let r=window.scrollY;window.onscroll=()=>{let t=window.scrollY;e.style.top=r>t?"0":"-100%",r=t};const a=document.querySelectorAll(".header__nav-link"),s=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(a.forEach((t=>{t.getAttribute("href").replace("#","")===e.target.id&&d(t)})),o.forEach((t=>{t.getAttribute("href").replace("#","")===e.target.id&&(d(t),c.textContent=t.textContent,c.classList.add("active__select-list")),"buy"!==e.target.id&&"stake"!==e.target.id&&"metrics"!==e.target.id&&"main"!==e.target.id||(c.textContent="Other",c.classList.remove("active__select-list"))})))}))}),{threshold:.3});function d(e){const t=document.querySelector(".active__nav-link");t&&t.classList.remove("active__nav-link"),e.classList.add("active__nav-link")}document.querySelectorAll("[data-js-observer]").forEach((e=>{s.observe(e)})),a.forEach((e=>{e.addEventListener("click",(()=>d(e)))})),o.forEach((e=>{e.addEventListener("click",(()=>{d(e),c.textContent=e.textContent,c.classList.add("active__select-list")}))}));const l=document.querySelector(".user__actions"),i=document.querySelector(".nav-select-icon"),u=document.querySelector(".user-actions__drop-down--list"),m=document.querySelectorAll(".user-actions__drop-down--item"),h=document.querySelectorAll("section"),v=document.querySelector(".header__menu");let y=!1;function _(){u.classList.toggle("active__drop-down"),i.classList.toggle("active__drop-down"),y=!!u.classList.contains("active__drop-down"),document.addEventListener("keydown",(e=>{y&&"Escape"===e.code&&_()})),h.forEach((e=>{e.addEventListener("click",(e=>{y&&e.currentTarget!==l&&_()}))}))}l.addEventListener("click",_),u.addEventListener("click",(()=>{y&&_()})),m.forEach((e=>e.addEventListener("click",(()=>{v.classList.contains("open-menu")&&b()}))));const g=document.querySelector(".burger-menu"),L=document.querySelector(".header__menu"),q=document.querySelector(".header__wrapper"),p=document.querySelectorAll(".header__nav-item"),S=document.querySelectorAll(".nav__drop-down--item"),k=document.querySelector(".user-actions__drop-down--list"),b=()=>{g.classList.remove("is-open"),L.classList.remove("open-menu"),q.classList.remove("open-menu"),document.body.style.overflow=""};g.addEventListener("click",(()=>{g.classList.value.includes("is-open")?b():(k.classList.contains("active__drop-down")&&_(),g.classList.add("is-open"),L.classList.add("open-menu"),q.classList.add("open-menu"),document.body.style.overflow="hidden")})),p.forEach((e=>e.addEventListener("click",(()=>{g.classList.value.includes("is-open")&&b()})))),S.forEach((e=>e.addEventListener("click",(()=>{g.classList.value.includes("is-open")&&b()})))),window.matchMedia("(min-width: 910px)").addEventListener("change",(e=>{e.matches&&(k.classList.contains("active__drop-down")&&_(),b())}));const E=document.querySelector(".header__message");document.querySelector(".message__btn--close").addEventListener("click",(function(){E.classList.add("display-none")}));const f=document.querySelector(".backdrop"),w=(document.querySelector(".modal"),document.querySelectorAll(".js-modal")),A=document.querySelector(".modal__close");function x(){f.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",C)}function I(){f.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function C(e){"Escape"===e.code&&I()}w.forEach((e=>{e.addEventListener("click",x)})),f.addEventListener("click",(e=>{e.currentTarget===e.target&&I()})),A.addEventListener("click",I);const $=document.querySelector(".item-graph__check"),O=document.querySelector(".hero__card-item--second");$.addEventListener("click",(()=>{$.toggleAttribute("checked"),""===$.getAttribute("checked")?O.classList.add("checkedBg"):O.classList.remove("checkedBg")}));const B=(e,t,c,o,n)=>{let r=0,a=t,s=Math.floor(o/a),d=new Intl.NumberFormat(...n),l=setInterval((()=>{r+=c,e.textContent=`$${d.format(r)}`,r>=a&&(e.textContent=`$${d.format(a)}`,clearInterval(l))}),s)};window.onload=()=>{const e=document.querySelectorAll(".item-grah--column"),t=document.querySelector("#grah-check"),c=document.querySelector(".hero__card-item--second"),o=document.querySelector("[data-count-volume]"),n=document.querySelector("[data-count-market]"),r=document.querySelector("[data-count-supply]"),a=document.querySelector("[data-count-price]"),s=document.querySelector("[data-count-stake]"),d=document.querySelector("[data-count-users]"),l=document.querySelector("[data-count-total]"),i=document.querySelector("[data-count-liquidity]"),u=document.querySelector("[data-count-back]"),m=new IntersectionObserver(((m,h)=>{m.forEach((m=>{if(m.isIntersecting){m.target.hasAttribute("data-column")&&e.forEach((e=>e.classList.add("animated-column"))),m.target.hasAttribute("data-check")&&(t.setAttribute("checked",!0),c.classList.add("checkedBg")),m.target.hasAttribute("data-count-volume")&&B(o,185246,1123,2e3,["en"]),m.target.hasAttribute("data-count-market")&&B(n,47572397,151232,2e3,["en"]),m.target.hasAttribute("data-count-supply")&&B(r,2575183,10178,2e3,["en"]),m.target.hasAttribute("data-count-price")&&B(a,19.24,1.38,2e3,["en-IN"]),m.target.hasAttribute("data-count-stake")&&B(s,30,1,2e3,["en"]),m.target.hasAttribute("data-count-users")&&B(d,2600,5,2e3,["en"]),m.target.hasAttribute("data-count-total")&&B(l,18e5,5245,2e3,["en"]),m.target.hasAttribute("data-count-liquidity")&&B(i,4824884,10123,2e3,["en"]),m.target.hasAttribute("data-count-back")&&B(u,63844,213,5e3,["en"]);const v=m.target;h.unobserve(v)}}))}),{root:null,rootMargin:"0px",threshold:1});document.querySelectorAll("[data-observer-target]").forEach((e=>{m.observe(e)}))};
//# sourceMappingURL=index.b53a56dc.js.map
