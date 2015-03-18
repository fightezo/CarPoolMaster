var lat;
var lon;
var duration;
var distance;

var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=49.2655551,-123.2548647"

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
    
    var rowsArray = result.results;
    var firstObject = rowsArray[0];
    var elementsArray = firstObject.elements;
    var tripOjbect = elementsArray[0];
    var distanceObject = tripObject.distance;
    this.distance = distanceObject.value;
    var durationObject = tripObject.duration;
    this.duration = durationObject.value;
    
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