<?php

  $start = urlencode(htmlspecialchars($_REQUEST['start']));
  $dest = urlencode(htmlspecialchars($_REQUEST['dest']));
  
  $json = json_decode(file_get_contents('https://maps.googleapis.com/maps/api/distancematrix/json?origins='.$start.'&destinations='.$dest.'&mode=driving&language=en-EN'));
  if(is_null($json))
  {
  	echo "Something went wrong when querying google api";
  	exit();
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>