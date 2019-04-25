<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: *');
require_once("init.php");
$pid=$_REQUEST["pid"];
$output=[
	"product"=>[],
	"pics"=>[]
];
$sql="SELECT * FROM cz_pics where pid=$pid";
$result1=mysqli_query($conn,$sql);
$res1=mysqli_fetch_all($result1,1);
#echo json_encode( $res);
$output["pics"]=$res1;

$sql="SELECT * FROM `cz_products` where pid=$pid";
$result2=mysqli_query($conn,$sql);
$res2=mysqli_fetch_all($result2,1)[0];
#echo json_encode( $res);

$output["product"]=$res2;
echo json_encode($output);