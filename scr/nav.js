window.onscroll = function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let navbar = document.querySelector('.navbar');
    let navbarBrand = document.querySelector('.navbar-brand');

    console.log(scrollTop);

    if (scrollTop === 0) {
        navbar.classList.add('scrolled')
        navbarBrand.classList.add('scrolled');

        console.log('User is at the top of the page');

    } else {
        var classList = navbar.classList;
        if (classList.contains('scrolled')) {
            navbarBrand.classList.remove('scrolled')
            classList.remove('scrolled')
        }
        console.log('User has scrolled down');
    }
};

