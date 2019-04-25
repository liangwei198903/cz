<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: http://127.0.0.1:8080');
header('Access-Control-Allow-Credentials:true');
require_once("init.php");
$sql="select * from cz_index_product";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));