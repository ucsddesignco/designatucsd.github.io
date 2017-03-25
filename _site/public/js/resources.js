/**
 * Adds click handlers to resources page
 */
$(document).ready(function() {
  $(".du-card--resource-listener").click(function(e) {
    // Toggle hidden class in card content
    $(this).toggleClass('active');
    $(this.nextElementSibling).toggleClass('hidden');
  });
});
