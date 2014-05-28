(function ($, window, document, undefined) {

  'use strict';
	
  $(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
      $('.navbar-fixed-top').addClass('top-nav-collapse');
      $('.navbar').addClass('navbar-scroll');
      $('.logo').addClass('logo-resize');
      $('.logo').attr('src', 'assets/img/logo-small.svg');
    } else {
      $('.navbar-fixed-top').removeClass('top-nav-collapse');
      $('.navbar').removeClass('navbar-scroll');
      $('.logo').removeClass('logo-resize');
      $('.logo').attr('src', 'assets/img/logo.svg');
    }
  });

})(jQuery, window, document);
