var map;
function initMap() {
  // Create center marker at UCSD
  var hss_ltlg = {lat:32.878527, lng:-117.241396};
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: hss_ltlg,
    zoom: 15,
    scrollwheel: false,
  });

  var marker = new google.maps.Marker({
    position: hss_ltlg,
    map: map,
    title: 'Humanities and Social Sciences Building'
  });
}