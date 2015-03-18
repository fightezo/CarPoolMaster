$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize(49.265896,-123.2447741));

 

function initialize(lat, lng) {
  
  /* position Amsterdam */

  var latlng = new google.maps.LatLng(lat,lng);
  

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13
  };
  
  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);  marker.setMap(map);

}
/* end goo---------------------------------*/
});

function updateMap(lat, lng) {
    var latlng = new google.maps.LatLng(lat,lng);
  

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13
  };
  
  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);  marker.setMap(map);
}

