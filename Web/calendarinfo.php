<?php

  require 'calendarparser.php';
  $ical   = new ICal('MyCal.ics');
  $events = $ical->events();
  
  
  foreach ($events as $event) {
  if(!empty($event['LOCATION'])){
      
      echo "DTSTART: ".$event['DTSTART']." <br/>";
      echo "DTEND: ".$event['DTEND']."<br/>";
      echo "LOCATION: ".$event['LOCATION']."<br/>";
      echo "<hr/>";
  }
  }
?>