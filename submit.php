<?php
    $body="From: $_POST['name'] \n Message: $_POST['message']";
    $body .= "\n\n\nCompany: ".$_POST['company']."\nTelephone: ".$['telephone'];
    $subject = "Message sent from the Appwayr website call back form";
    $headers = 'From: "'. $_POST['name']. '" <'.$_POST['email'].">";
    $headers.= "\n".'Content-Type: text/plain; charset="UTF-8"';

    mail("hello@appwayr.com", $subject, $body, $headers) or die("Error!");
?>
