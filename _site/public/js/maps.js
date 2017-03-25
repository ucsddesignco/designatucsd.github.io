var map;
function initMap() {
  // Create center marker at UCSD
  // Create a map object and specify the DOM element for display.
  var hss_ltlg = {lat:32.8783906, lng:-117.2422482};
  var atkinson_ltlg = {lat:32.8824895, lng:-117.2368928};
 
  var center = {
    lat: (hss_ltlg.lat + atkinson_ltlg.lat) / 2,
    lng: (hss_ltlg.lng + atkinson_ltlg.lng) / 2,
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 15,
    scrollwheel: false,
  });

  var hss = new google.maps.Marker({
    position: hss_ltlg,
    map: map,
    title: 'Humanities and Social Sciences Building'
  });

  var atkinson = new google.maps.Marker({
    position: atkinson_ltlg,
    map: map,
    title: 'Atkinson Hall'
  });
}