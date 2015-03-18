<?php




$json = json_decode(file_get_contents('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC&destinations=San+Francisco&mode=driving&language=en-EN'));
$jsonstring = json_encode($json);
echo $jsonstring;
?>