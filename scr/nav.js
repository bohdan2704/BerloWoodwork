let wasActionBefore = true;
let lastScrollTop = 0;

window.onscroll = function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let navbar = document.querySelector('.navbar');
    let navbarBrand = document.querySelector('.navbar-brand');
    let layersTitle = document.querySelector('.layers__title');
    let layersMiddle = document.querySelector('.layers__middle');

    if (scrollTop > 0) {
        layersMiddle.style.opacity = "0";

    } else {
        layersMiddle.style.opacity = "1";
    }


        // layersMiddle.style.opacity = "100";
        // let num = scrollTop - 300;
        // if (num > 100) {
        //     num = 100;
        // }
        // console.log(num.toString());
        // layersMiddle.style.opacity = num.toString();

    if (scrollTop < 600) {
        navbar.classList.add('scrolled')
        navbarBrand.classList.add('scrolled');
        let currentOpacity = parseFloat(window.getComputedStyle(layersMiddle).opacity);
        let currentFontSize = parseFloat(window.getComputedStyle(layersTitle).fontSize);

        if (scrollTop > lastScrollTop) {
            wasActionBefore = true;
            // currentOpacity -= 0.05;
            // currentFontSize += 0.1;

        } else if (wasActionBefore) {
            // console.log(currentFontSize);
            // currentOpacity += 0.05;
            // currentFontSize -= 0.1;
        }
        console.log(currentOpacity);
        // layersMiddle.style.opacity = currentOpacity.toString();
        // layersTitle.style.fontSize = currentFontSize + 'px';
    } else {
        var classList = navbar.classList;
        if (classList.contains('scrolled')) {
            navbarBrand.classList.remove('scrolled')
            classList.remove('scrolled')
        }
        // layersMiddle.style.opacity = "1";
        // layersTitle.style = "";
        // wasActionBefore = false;
    }
    lastScrollTop = scrollTop;
};

