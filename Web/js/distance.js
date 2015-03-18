var lat;
var lon;
var duration;
var distance;

var url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC&destinations=San+Francisco&mode=driving&language=en-EN"

function getJSON(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var result = JSON.parse(xmlhttp.responseText);
        parseJSON(result);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function parseJSON(result){
    var rowsArray = result.rows;
    var firstObject = rowsArray[0];
    var elementsArray = firstObject.elements;
    var tripOjbect = elementsArray[0];
    var distanceObject = tripObject.distance;
    this.distance = distanceObject.value;
    var durationObject = tripObject.duration;
    this.duration = durationObject.value;
    
}

function parseLatLon(result){
    var resultsArray = result.results;
    var geometryObject = resultsArray[2];
    var locationObject = geometryObject.location;
    this.lat = locationObject.lat;
    this.lon = locationObject.lng;
}

function getLat(){
    return lat;
}

function getLon(){
    return lon;
}

function getDuration(){
    return duration;
}

function getDistance(){
    return distance;
}

