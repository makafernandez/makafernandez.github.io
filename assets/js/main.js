$(document).ready(() => {
  $('body').scrollspy({ target: '#navbar' });
  
  $(window).scroll(function() {
    if ($('#navbar').offset().top > 640) {
      $('#navbar').addClass('navbar-light');
      $('#navbar').removeClass('navbar-dark');
    } else {
      $('#navbar').removeClass('navbar-light');
      $('#navbar').addClass('navbar-dark');
    }
  });
});
