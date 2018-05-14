$(document).ready(function() {
  $('#fullpage').fullpage({
    // navigation: true,
    // navigationTooltips: ['Home', 'About Me', 'Work', 'Contact', 'this'],
    // showActiveTooltip: true,
    // slidesNavigation: true,
    // responsiveWidth: 1024,
    // responsiveHeight: 100
    autoScrolling: false,
	  fitToSection: false
  });

  var typed = new Typed('.type', {
    strings: ['I\'m a web developer.', 'I\'m a musician.', 'I\'m a sportsman.', 'I\'m a lifelong learner.'],
    typeSpeed: 40,
    smartBackspace: true,
    loop: true
  });

  $('.envelope-button').on('click', function() {
    $('.contact-form').slideToggle('slow');
  });
});
