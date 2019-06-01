<?php
  if (isset($_POST['submit'] )) {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $msg=$_POST['message'];

    $to='nubliezrapat@gmail.com';
    $subject='Form Submission';
    $message="Nama : ".$name."\nNo. Handphone : ".$phone."\nPesan \n'".$msg."'";
    $headers="form : ".$email;

    mail($to,$subject,$message,$headers);
  }
?>