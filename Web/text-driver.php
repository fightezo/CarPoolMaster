<?php

  error_reporting(E_ALL);
  ini_set('display_errors',1);

$phone_number = urlencode($_REQUEST['phone_number']);
$start = urlencode($_REQUEST['start']);
$dest = urlencode($_REQUEST['dest']);
$time = urlencode($_REQUEST['time']);
$payment = urlencode($_REQUEST['payment']);
$contact = urlencode($_REQUEST['contact']);

$body = "";
$body .= "phone_number=".$phone_number
."&start=".$start
."&dest=".$dest
."&time=".$time 
."&payment=".$payment 
."&contact=".$contact ;

if(!isset($phone_number))
{
  echo "No Phone Number Given";
  exit();
}
echo 'http://bosung.info/twilio/send_txt.php?'.$body;
file_get_contents('http://bosung.info/twilio/send_txt.php?'.$body);

?>