$(function() {
  $('div.section').click(function() {
    $(this).switchClass('m s', 'l');
    $('div.section').not(this).switchClass('m l', 's');
  });

  $('.carousel').carousel();
});