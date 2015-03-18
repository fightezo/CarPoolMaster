<?php

  $latlng = urlencode(htmlspecialchars($_REQUEST['latlng']));
  
  $json = json_decode(file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?latlng='.$latlng));
  if(is_null($json))
  {
  	echo "Something went wrong when querying goecode-latlng api";
  	exit();
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>