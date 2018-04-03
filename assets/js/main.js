$(document).ready(() => {
  /*$('body').scrollspy({ target: '#navbar-example' })*/
  
  $(window).scroll(function() {
    if ($('#navbar').offset().top > 800) {
      $('#navbar').addClass('navbar-light');
      $('#navbar').removeClass('navbar-dark');
    } else {
      $('#navbar').removeClass('navbar-light');
      $('#navbar').addClass('navbar-dark');
    }
  });
});
