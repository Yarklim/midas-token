!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire1270;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},t.parcelRequire1270=o),o.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var c=document.querySelector(".header"),a=document.querySelector(".hero"),u=document.querySelector("[data-select-list]"),i=document.querySelectorAll("[data-select-item]"),s=c.offsetHeight;new ResizeObserver((function(e){var t=!0,r=!1,n=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var u=o.value.contentRect.height;s=u,a.style.paddingTop="calc(".concat(s,"px + clamp(2rem, 1.591rem + 2.05vw, 3.125rem))")}}catch(e){r=!0,n=e}finally{try{t||null==c.return||c.return()}finally{if(r)throw n}}})).observe(c);var l=window.scrollY;window.onscroll=function(){var e=window.scrollY;c.style.top=l>e?"0":"-100%",l=e};var d=document.querySelectorAll(".header__nav-link"),f=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(d.forEach((function(t){t.getAttribute("href").replace("#","")===e.target.id&&m(t)})),i.forEach((function(t){t.getAttribute("href").replace("#","")===e.target.id&&(m(t),u.textContent=t.textContent,u.classList.add("active__select-list")),"buy"!==e.target.id&&"stake"!==e.target.id&&"metrics"!==e.target.id&&"main"!==e.target.id||(u.textContent="Other",u.classList.remove("active__select-list"))})))}))}),{threshold:.3});function m(e){var t=document.querySelector(".active__nav-link");t&&t.classList.remove("active__nav-link"),e.classList.add("active__nav-link")}document.querySelectorAll("[data-js-observer]").forEach((function(e){f.observe(e)})),d.forEach((function(e){e.addEventListener("click",(function(){return m(e)}))})),i.forEach((function(e){e.addEventListener("click",(function(){m(e),u.textContent=e.textContent,u.classList.add("active__select-list")}))}));var v=document.querySelector(".user__actions"),p=document.querySelector(".nav-select-icon"),y=document.querySelector(".user-actions__drop-down--list"),_=document.querySelectorAll(".user-actions__drop-down--item"),h=document.querySelectorAll("section"),g=document.querySelector(".header__menu"),b=!1;function L(){y.classList.toggle("active__drop-down"),p.classList.toggle("active__drop-down"),b=!!y.classList.contains("active__drop-down"),document.addEventListener("keydown",(function(e){b&&"Escape"===e.code&&L()})),h.forEach((function(e){e.addEventListener("click",(function(e){b&&e.currentTarget!==v&&L()}))}))}v.addEventListener("click",L),y.addEventListener("click",(function(){b&&L()})),_.forEach((function(e){return e.addEventListener("click",(function(){g.classList.contains("open-menu")&&x()}))}));var S=document.querySelector(".burger-menu"),q=document.querySelector(".header__menu"),k=document.querySelector(".header__wrapper"),w=document.querySelectorAll(".header__nav-item"),A=document.querySelectorAll(".nav__drop-down--item"),E=document.querySelector(".user-actions__drop-down--list"),x=function(){S.classList.remove("is-open"),q.classList.remove("open-menu"),k.classList.remove("open-menu"),document.body.style.overflow=""};S.addEventListener("click",(function(){S.classList.value.includes("is-open")?x():(E.classList.contains("active__drop-down")&&L(),S.classList.add("is-open"),q.classList.add("open-menu"),k.classList.add("open-menu"))})),w.forEach((function(e){return e.addEventListener("click",(function(){S.classList.value.includes("is-open")&&x()}))})),A.forEach((function(e){return e.addEventListener("click",(function(){S.classList.value.includes("is-open")&&x()}))})),window.matchMedia("(min-width: 910px)").addEventListener("change",(function(e){e.matches&&(E.classList.contains("active__drop-down")&&L(),x())}));var M=document.querySelector(".header__message");document.querySelector(".message__btn--close").addEventListener("click",(function(){M.classList.add("display-none")}));var O=document.querySelector(".backdrop"),j=(document.querySelector(".modal"),document.querySelectorAll(".js-modal")),I=document.querySelector(".modal__close");function C(){O.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",R)}function P(){O.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function R(e){"Escape"===e.code&&P()}j.forEach((function(e){e.addEventListener("click",C)})),O.addEventListener("click",(function(e){e.currentTarget===e.target&&P()})),I.addEventListener("click",P);var D=document.querySelector(".item-graph__check"),N=document.querySelector(".hero__card-item--second");D.addEventListener("click",(function(){D.toggleAttribute("checked"),""===D.getAttribute("checked")?N.classList.add("checkedBg"):N.classList.remove("checkedBg")}));var T={};Object.defineProperty(T,"__esModule",{value:!0}),T.default=function(e,t,r){return F.apply(null,arguments)};var $,J=($=o("gD1JV"))&&$.__esModule?$:{default:$};function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function F(e,t,r){return(F=B()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&J.default(o,r.prototype),o}).apply(null,arguments)}var U={};Object.defineProperty(U,"__esModule",{value:!0}),U.default=function(e){return K.default(e)||Q.default(e)||W.default(e)||V.default()};var K=X(o("kMC0W")),Q=X(o("7AJDX")),V=X(o("8CtQK")),W=X(o("auk6i"));function X(e){return e&&e.__esModule?e:{default:e}}var Y=function(t,r,n,o,c){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=0,i=r,s=Math.floor(o/i),l=e(T)(Intl.NumberFormat,e(U)(c)),d=setInterval((function(){u+=n,t.textContent="".concat(a).concat(l.format(u)),u>=i&&(t.textContent="".concat(a).concat(l.format(i)),clearInterval(d))}),s)};window.onload=function(){var e=document.querySelectorAll(".item-grah--column"),t=document.querySelector("#grah-check"),r=document.querySelector(".hero__card-item--second"),n=document.querySelector("[data-count-volume]"),o=document.querySelector("[data-count-market]"),c=document.querySelector("[data-count-supply]"),a=document.querySelector("[data-count-price]"),u=document.querySelector("[data-count-stake]"),i=document.querySelector("[data-count-users]"),s=document.querySelector("[data-count-total]"),l=document.querySelector("[data-count-liquidity]"),d=document.querySelector("[data-count-back]"),f=document.querySelector(".metrics__bg"),m=new IntersectionObserver((function(m,v){m.forEach((function(m){if(m.isIntersecting){m.target.hasAttribute("data-column")&&e.forEach((function(e){return e.classList.add("animated-column")})),m.target.hasAttribute("data-check")&&(t.setAttribute("checked",!0),r.classList.add("checkedBg")),m.target.hasAttribute("data-count-volume")&&Y(n,185246,1123,2e3,["en"],"$"),m.target.hasAttribute("data-count-market")&&Y(o,47572397,151232,2e3,["en"],"$"),m.target.hasAttribute("data-count-supply")&&Y(c,2575183,10178,2e3,["en"]),m.target.hasAttribute("data-count-price")&&Y(a,19.24,1.38,2e3,["en-IN"],"$"),m.target.hasAttribute("data-count-stake")&&Y(u,30,1,2e3,["en"],"$"),m.target.hasAttribute("data-count-users")&&Y(i,2600,5,2e3,["en"]),m.target.hasAttribute("data-count-total")&&Y(s,18e5,5245,2e3,["en"]),m.target.hasAttribute("data-count-liquidity")&&Y(l,4824884,10123,2e3,["en"],"$"),m.target.hasAttribute("data-count-back")&&Y(d,63844,213,5e3,["en"]),m.target.hasAttribute("data-metrics-bg")&&f.classList.add("metrics__bg--animated");var p=m.target;v.unobserve(p)}}))}),{root:null,rootMargin:"0px",threshold:1});document.querySelectorAll("[data-observer-target]").forEach((function(e){m.observe(e)}))}}();
//# sourceMappingURL=index.4a8e2f23.js.map
