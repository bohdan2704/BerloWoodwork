let wasActionBefore = true;
let lastScrollTop = 0;

window.onscroll = function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let navbar = document.querySelector('.navbar');
    let navbarBrand = document.querySelector('.navbar-brand');
    let layersTitle = document.querySelector('.layers__title');
    let layersMiddle = document.querySelector('.layers__middle');

    if (scrollTop > 0) {
        layersMiddle.style.transition = "opacity 0s"; // Adjust the duration as needed
        layersMiddle.style.opacity = "0";
    } else {
        layersMiddle.style.transition = "opacity 0.5s"; // Adjust the duration as needed
        layersMiddle.style.opacity = "1";
    }

    if (scrollTop < 600) {
        navbar.classList.add('scrolled')
        navbarBrand.classList.add('scrolled');

        if (scrollTop > lastScrollTop) {
            wasActionBefore = true;
        }
    } else {
        let classList = navbar.classList;
        if (classList.contains('scrolled')) {
            navbarBrand.classList.remove('scrolled')
            classList.remove('scrolled')
        }
    }
    lastScrollTop = scrollTop;
};

