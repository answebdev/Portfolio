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

// Materialize Sidenav
$(document).ready(function () {
	$('.sidenav').sidenav();
});

// Animsition
$(document).ready(function () {
	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 1500,
		outDuration: 800,
		linkElement: '.animsition-link',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="loading.svg" />'
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration'],
		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		overlay: false,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body',
		transition: function (url) { window.location.href = url; }
	});
});


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



$(document).ready(function(){
    $('.parallax').parallax();
  });