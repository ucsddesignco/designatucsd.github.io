/**
 * Adds click handlers to resources page
 */
$(document).ready(function() {
  $(".du-card--resource-listener").click(function(e) {
    // Toggle hidden class in card content
    $(e.target.parentNode).toggleClass('active');
    $(e.target.parentNode.nextElementSibling).toggleClass('hidden');
  });
});
