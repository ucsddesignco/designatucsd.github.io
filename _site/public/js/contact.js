$(document).ready(function() {
  $('.du-contact--loading').hide().removeClass('hidden');
  $('.du-contact--form-success').hide().removeClass('hidden');
  // Handle form submit
  $('.du-contact--form form').submit(function() {
    // Preserve height of form
    $('.du-contact--form form').css('opacity', 0);
    $('.du-contact--loading').show(function() {
      setTimeout($('.du-contact--loading').fadeOut(function() {
        $('.du-contact--form-success').fadeIn();
      }), 300);
    });
    return false;
  });

  $('#du-contact--submit-another').click(function() {
    $('.du-contact--form-success').fadeOut();
    $('.du-contact--form form').find("input[type=text], textarea").val("");
    $('.du-contact--form form').animate({opacity: 1});
  });
});
