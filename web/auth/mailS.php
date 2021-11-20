<?php
include("connection.php");
include("functions.php");

if(isset($_POST["userData"])) {
    $data_received =  $_POST["userData"];
    echo json_encode(array('success' => 1));
}

else echo "Couldn't get the right data";
