var map;
function initMap() {
  // Create center marker at UCSD
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: hss_ltlg,
    zoom: 15,
    scrollwheel: false,
  });

  var hss_ltlg = {lat:32.8784, lng:117.2422};
  var hss = new google.maps.Marker({
    position: hss_ltlg,
    map: map,
    title: 'Humanities and Social Sciences Building'
  });

  var atkinson_ltlg = {lat:32.8825, lng:-117.2369};
  var atkinson = new google.maps.Marker({
    position: atkinson_ltlg,
    map: map,
    title: 'Atkinson Hall'
  });
}