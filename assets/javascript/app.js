//Landing Page Animation
$(document).ready(function() {
  setTimeout(function() {
    $('#main').removeClass('is-loading');
  }, 1200);
});

// About Me Moving Letters Effect - Adapted from: http://tobiasahlin.com/moving-letters/
// Wrap every letter in a span
// $('.ml2').each(function () {
// 	$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
// });

// anime.timeline({ loop: false })
// 	.add({
// 		targets: '.ml2 .letter',
// 		scale: [4, 1],
// 		opacity: [0, 1],
// 		translateZ: 0,
// 		easing: "easeOutExpo",
// 		duration: 950,
// 		delay: function (el, i) {
// 			return 70 * i;
// 		}
// 	}).add({
// 		targets: '.ml2',
// 		opacity: 1,
// 		duration: 1000,
// 		easing: "easeOutExpo",
// 		delay: 1000
// 	});

// Materialize Sidenav
$(document).ready(function() {
  $('.sidenav').sidenav();
});

// Materialize Parallax
$(document).ready(function() {
  $('.parallax').parallax();
});

// Back-to-top-button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
