window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}


document.addEventListener("DOMContentLoaded", function() {
	var hoverElements = document.getElementsByClassName("hover-element");

	// Check if any elements with the specified class were found
	if (hoverElements.length > 0) {
		// For simplicity, assuming you want to add the event listeners to the first element with the class
		var hoverElement = hoverElements[0];

		hoverElement.addEventListener('mouseover', function() {
			// Code to be executed when the mouse is over the element
			hoverElement.classList.add("fa-bounce");
			// console.log("Hover is on");
		});

		hoverElement.addEventListener('mouseout', function() {
			// Code to be executed when the mouse leaves the element
			hoverElement.classList.remove("fa-bounce");
			// console.log("Hover is off");
		});
	} else {
		console.error("No element found with the class 'hover-element'");
	}
});



document.addEventListener("DOMContentLoaded", function() {
	var hoverElements = document.getElementsByClassName("hover-element");

	// Check if any elements with the specified class were found
	if (hoverElements.length > 0) {
		// For simplicity, assuming you want to add the event listeners to the first element with the class
		var hoverElement = hoverElements[0];

		hoverElement.addEventListener('mouseover', function() {
			// Code to be executed when the mouse is over the element
			hoverElement.classList.add("fa-bounce");
			// console.log("Hover is on");
		});

		hoverElement.addEventListener('mouseout', function() {
			// Code to be executed when the mouse leaves the element
			hoverElement.classList.remove("fa-bounce");
			// console.log("Hover is off");
		});
	} else {
		console.error("No element found with the class 'hover-element'");
	}
});


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

