<?php
// include("connection.php");
// include("functions.php");

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if(isset($_POST["userData"])) {
    $data_received =  $_POST["userData"];
    echo json_encode(array('success' => $data_received));
}

else echo json_encode(array('success' => false, 'error' => array('message' => 'Server Error: Missing parameter *userData')));
