<?php
require_once("init.php");
$output=[
	"count"=>0,//
	"pageSize"=>6,//
	"pageCount"=>0,//
	"pageNo"=>0,//
	"products"=>[]//
];
$pno=$_REQUEST["pno"];
$sql="select * from  cz_fenye_products";
$result=mysqli_query($conn,$sql);
$count=count(mysqli_fetch_all($result,1));
$pageCount=ceil($count/$output["pageSize"]);//���ݹؼ��ֲ��ҵ����ݰ�ÿҳ6��������ʾ����ҳ
$output["count"]=$count;
$output["pageCount"]=$pageCount;
$sql="select * from  cz_fenye_products limit ".($pno-1)*$output["pageSize"]." , ".$output["pageSize"];
$output["pageNo"]=$pno;
$result=mysqli_query($conn,$sql);
$output["products"]=mysqli_fetch_all($result,1);
echo json_encode($output);