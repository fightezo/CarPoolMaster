(function($){
	$(document).ready(function(){
    $("#driver").click(function(){
      $('#loginbox').hide().delay(3000);
        $("#signupbox").delay(500).fadeIn(2000);
    });
    $("#rider").click(function(){
      $('#signupbox').hide().delay(3000);
        $("#loginbox").delay(500).fadeIn(2000);
    });
    $('.right').click(function(e) {
         e.preventDefault();
         $('#foo').css({ 'right': '', 'left': '-50%', 'transform': 'scaleX(1)' }).animate({
            'left' : '100%'
            },2000);                    
    });
    $('.left').click(function(e) {
         e.preventDefault();
         $('#foo').css({ 'right': '', 'left': '100%', 'transform': 'scaleX(-1)'}).animate({
            'left' : '-50%'
            },2000);                       
    });
    


    
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', getLocation);
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

});


document.getElementById("search").onclick = getAddress;

}); // End document ready]

var globals = {
    lat:0,
    lng:0
}
function showPosition(position) {
    
   
    globals.lat = position.coords.latitude;
    globals.lng = position.coords.longitude;
    
    var latlng = position.coords.latitude + "," + position.coords.longitude;
   
    getJSON(latlng);
}




function getJSON(latlng){
    
    var url = "geocode-latlng.php?latlng="+latlng;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var result = JSON.parse(xmlhttp.responseText);
        parseLatLon(result);
      }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var address = "";

function parseLatLon(result){
    var resultsArray = result.results;
    var firstObject = resultsArray[0];
    address = firstObject.formatted_address;
   
    
}

function getAddress() {
    
  document.getElementById("return").value = address;
  $.getScript("js/map.js", function(){

   
   if(typeof globals.lat != 'undefined' && typeof globals.lng != 'undefined') {
    updateMap(globals.lat, globals.lng);
   }else
    alert('not vaild lat lng' + globals.lat +  " " + globals.lng);

   // Use anything defined in the loaded script...
});
}


})(this.jQuery);

