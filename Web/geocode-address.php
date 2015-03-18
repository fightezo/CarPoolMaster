<?php

  $address = urlencode(htmlspecialchars($_REQUEST['address']));
  
  $json = json_decode(file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address='.$address));
  if(is_null($json))
  {
  	echo "Something went wrong when querying goecode api";
  	exit();
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>