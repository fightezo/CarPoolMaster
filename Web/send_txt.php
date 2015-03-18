<?php

$phone_number = $_REQUEST['phone_number'];
$body = $_REQUEST['body'];

if(!isset($phone_number))
{
  echo "No Phone Number Given";
  exit();
}
if(!isset($body))
{
  echo "No body Provided";
  exit();
}

// this line loads the library 
require('twilio-php/Services/Twilio.php');
echo 'Current PHP version: ' . phpversion();
 
$account_sid = 'ACc2237e7ebfe690ed5e9ac49712261db9'; 
$auth_token = 'b24815f973e84cc731ee262d65618839'; 
$client = new Services_Twilio($account_sid, $auth_token);
$message = $client->account->messages->sendMessage(
  '+16475607890', // From a valid Twilio number
  $phone_number, // Text this number
  $body
);

echo 'Current PHP version: ' . phpversion();
print $message->sid;



?>