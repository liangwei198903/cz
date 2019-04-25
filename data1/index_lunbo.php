<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin:http://127.0.0.1:8080');
header('Access-Control-Allow-Credentials:true');
require_once("init.php");
$sql="SELECT * FROM `cz_index_carousel`";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));