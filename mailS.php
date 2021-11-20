<?php
include("connection.php");
include("functions.php");

if(isset($_POST["userData"])) {
    $data_received =  $_POST["userData"];
    print_r($data_received) ;
    exit(); 
}

else echo "Couldn't get the right data";
