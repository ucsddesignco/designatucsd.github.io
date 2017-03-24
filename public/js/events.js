$(document).ready(function() {
  $('.du-archive--table-event').click(function(e) {
    $($(e.target.parentNode.children).splice(1)).toggleClass('hidden-md').toggleClass('hidden-sm').toggleClass('hidden-xs');
  });
});
