<!DOCTYPE HTML>
<html>

<body>
<script>

function convertTime(x){
  var formatted_time ="";
  var indexOfT = x.indexOf("T");
  var indexOfZ = x.indexOf("Z");
  formatted_time = x.substring(indexOfT+1, (indexOfZ-1));
  document.write(formatted_time);
}

function getJSON(address){
  var url = "geocode-address.php?address="+address;
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

function parseLatLon(result){
    var lat;
    var lon;
    var resultsArray = result.results;
    var firstObject = resultsArray[0];
    var geometryObject = firstObject.geometry;
    var locationObject = geometryObject.location;
    this.lat = locationObject.lat;
    this.lon = locationObject.lng;
    // document.write(this.lat + "," + this.lon);
    document.getElementById('address').innerHTML = document.getElementById('address').innerHTML + this.lat + "," + this.lon +"<br>";
}

<?php

  error_reporting(E_ALL);
  ini_set('display_errors',1);
  $target_dir = "uploads/";
  $target_file = $target_dir . 'cal.ics';
  $uploadOk = 1;
  $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
  // Check if file already exists
  if (file_exists($target_file)) {
      unlink($target_file);
  }
  // Check file size
  if ($_FILES["fileToUpload"]["size"] > 2000000) {
      echo "Sorry, your file is too large.";
      $uploadOk = 0;
  }
  // Allow certain file formats
  if($imageFileType != "ics" ) {
      echo "Sorry, only ICS files are allowed.";
      $uploadOk = 0;
  }
  // Check if $uploadOk is set to 0 by an error
  if ($uploadOk == 0) {
      echo "Sorry, your file was not uploaded.";
  // if everything is ok, try to upload file
  } else {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
          // echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
      } else {
          echo "Sorry, there was an error uploading your file.";
      }
  }

  require 'calendarparser.php';
  $ical   = new ICal('MyCal2.ics');

  $events = $ical->events();
  
  
  foreach ($events as $event) {
  if(!empty($event['LOCATION'])){
      
      echo 'document.write("DTSTART: ");';
      echo 'convertTime("';
      echo $event['DTSTART'];
      echo '")';
      echo ';';

      echo 'document.write("DTEND: ");';
      echo 'convertTime("';
      echo $event['DTEND'];
      echo '")';
      echo ';';

      echo 'document.write("LOCATION: ");';
      echo 'getJSON("';
      echo $event['LOCATION'];
      echo '")';
      echo ';';

  }
  }
?>

</script>
<div id="address"></div>
</body>
</html>