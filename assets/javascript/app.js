//Landing Page Animation
$(document).ready(function () {
	setTimeout(function () {
		$("#main").removeClass("is-loading");
	}, 100)
});

// Materialize CSS Code for Floating Links on Landing Page

$(document).ready(function () {
	$('.fixed-action-btn').floatingActionButton();
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init(elems, {
		direction: 'left'
	});
});

// About Me Typewriter Effect
// var i = 0;
// var txt = 'WELCOME TO MY WEBSITE';
// var speed = 50;

// function typeWriter() {
// 	if (i < txt.length) {
// 		document.getElementById("about-me").innerHTML += txt.charAt(i);
// 		i++;
// 		setTimeout(typeWriter, speed);
// 	}
// }

// About Me Moving Letters Effect - Adapted from: http://tobiasahlin.com/moving-letters/
// Wrap every letter in a span
$('.ml2').each(function () {
	$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({ loop: false })
	.add({
		targets: '.ml2 .letter',
		scale: [4, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 950,
		delay: function (el, i) {
			return 70 * i;
		}
	}).add({
		targets: '.ml2',
		opacity: 1,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
	});
//    SourceTHURSDAY
//    SourceSunny mornings


// Materialize Sidenav
$(document).ready(function () {
	$('.sidenav').sidenav();
});

// Animsition
// $(document).ready(function () {
// 	$(".animsition").animsition({
// 		inClass: 'fade-in',
// 		outClass: 'fade-out',
// 		inDuration: 1500,
// 		outDuration: 800,
// 		linkElement: '.animsition-link',
// 		// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
// 		loading: true,
// 		loadingParentElement: 'body', //animsition wrapper element
// 		loadingClass: 'animsition-loading',
// 		loadingInner: '', // e.g '<img src="loading.svg" />'
// 		timeout: false,
// 		timeoutCountdown: 5000,
// 		onLoadEvent: true,
// 		browser: ['animation-duration', '-webkit-animation-duration'],
// 		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
// 		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
// 		overlay: false,
// 		overlayClass: 'animsition-overlay-slide',
// 		overlayParentElement: 'body',
// 		transition: function (url) { window.location.href = url; }
// 	});
// });


// $(document).ready(function () {
// 	$(".animsition").animsition({
// 		inClass: 'flip-in-y',
// 		outClass: 'flip-out-y',
// 		inDuration: 1500,
// 		outDuration: 800,
// 		linkElement: '.animsition-link',
// 		// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
// 		loading: true,
// 		loadingParentElement: 'body', //animsition wrapper element
// 		loadingClass: 'animsition-loading',
// 		loadingInner: '', // e.g '<img src="loading.svg" />'
// 		timeout: false,
// 		timeoutCountdown: 5000,
// 		onLoadEvent: true,
// 		browser: ['animation-duration', '-webkit-animation-duration'],
// 		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
// 		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
// 		overlay: false,
// 		overlayClass: 'animsition-overlay-slide',
// 		overlayParentElement: 'body',
// 		transition: function (url) { window.location.href = url; }
// 	});
// });


// Materialize Parallax
$(document).ready(function () {
	$('.parallax').parallax();
});


// Back-to-top-button
var btn = $('#button');

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '300');
});

