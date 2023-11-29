function scrollToOffersPart(element, i) {
    console.log(element);
    var documentHeight = window.innerHeight;

    let num = element.offsetTop;
    const scrollOptions = {
        top: documentHeight + num + i,
        behavior: 'smooth'
    };

    window.scrollTo(scrollOptions);
}

document.getElementById('offers_part_link').addEventListener('click', function(event) {
    console.log("Hi")
    event.preventDefault();
    var element = document.getElementById('offers_part');
    scrollToOffersPart(element, 0);
});


document.getElementById('about_us_part_link').addEventListener('click', function(event) {
    event.preventDefault();
    // Assuming 'element' is a reference to the DOM element you want to scroll to
    var element = document.getElementById('about_us_part');
    scrollToOffersPart(element, 0)

});

document.getElementById('contacts_part_link').addEventListener('click', function(event) {
    event.preventDefault();
    // Assuming 'element' is a reference to the DOM element you want to scroll to
    var element = document.getElementById('contacts_part');
    scrollToOffersPart(element, -900)

});

document.getElementById('price_part_link').addEventListener('click', function(event) {
    event.preventDefault();
    // Assuming 'element' is a reference to the DOM element you want to scroll to
    var element = document.getElementById('price_part');
    scrollToOffersPart(element, -950)

});

document.getElementById('gallery_part_link').addEventListener('click', function(event) {
    event.preventDefault();
    // Assuming 'element' is a reference to the DOM element you want to scroll to
    var element = document.getElementById('price_part');
    scrollToOffersPart(element, -2900)

});

