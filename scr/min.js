if(window.addEventListener("scroll",(e=>{document.documentElement.style.setProperty("--scrollTop",`${this.scrollY}px`)})),gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollSmoother.create({wrapper:".wrapper",content:".content"}),gsap.registerPlugin(ScrollTrigger,ScrollSmoother),1!==ScrollTrigger.isTouch){ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0}),gsap.fromTo(".hero-section",{opacity:1},{opacity:0,scrollTrigger:{trigger:".hero-section",start:"center",end:"820",scrub:!0}}),gsap.utils.toArray(".gallery__left .gallery__item").forEach((e=>{gsap.fromTo(e,{opacity:0,x:-50},{opacity:1,x:0,scrollTrigger:{trigger:e,start:"-850",end:"-100",scrub:!0}})})),gsap.utils.toArray(".gallery__right .gallery__item").forEach((e=>{gsap.fromTo(e,{opacity:0,x:50},{opacity:1,x:0,scrollTrigger:{trigger:e,start:"-750",end:"top",scrub:!0}})}))}function scrollToOffersPart(e,t){console.log(e);const o={top:window.innerHeight+e.offsetTop+t,behavior:"smooth"};window.scrollTo(o)}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementsByClassName("hover-element");if(e.length>0){var t=e[0];t.addEventListener("mouseover",(function(){t.classList.add("fa-bounce")})),t.addEventListener("mouseout",(function(){t.classList.remove("fa-bounce")}))}else console.error("No element found with the class 'hover-element'")})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementsByClassName("hover-element");if(e.length>0){var t=e[0];t.addEventListener("mouseover",(function(){t.classList.add("fa-bounce")})),t.addEventListener("mouseout",(function(){t.classList.remove("fa-bounce")}))}else console.error("No element found with the class 'hover-element'")})),document.getElementById("offers_part_link").addEventListener("click",(function(e){console.log("Hi"),e.preventDefault(),scrollToOffersPart(document.getElementById("offers_part"),0)})),document.getElementById("about_us_part_link").addEventListener("click",(function(e){e.preventDefault(),scrollToOffersPart(document.getElementById("about_us_part"),0)})),document.getElementById("contacts_part_link").addEventListener("click",(function(e){e.preventDefault(),scrollToOffersPart(document.getElementById("contacts_part"),-900)})),document.getElementById("price_part_link").addEventListener("click",(function(e){e.preventDefault(),scrollToOffersPart(document.getElementById("price_part"),-950)})),document.getElementById("gallery_part_link").addEventListener("click",(function(e){e.preventDefault(),scrollToOffersPart(document.getElementById("price_part"),-2900)}));let wasActionBefore=!0,lastScrollTop=0;window.onscroll=function(){let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector(".navbar"),o=document.querySelector(".navbar-brand"),r=(document.querySelector(".layers__title"),document.querySelector(".layers__middle"));if(e>0?(r.style.transition="opacity 0s",r.style.opacity="0"):(r.style.transition="opacity 0.5s",r.style.opacity="1"),e<600)t.classList.add("scrolled"),o.classList.add("scrolled"),e>lastScrollTop&&(wasActionBefore=!0);else{let e=t.classList;e.contains("scrolled")&&(o.classList.remove("scrolled"),e.remove("scrolled"))}lastScrollTop=e};