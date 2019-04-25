<?php
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
$cart=[];
if($uid!=null){
	$sql="select * from cz_shoppingcart_item inner join  cz_fenye_products where cz_shoppingcart_item.pid=cz_fenye_products.pid and uid=$uid";
	$result=mysqli_query($conn,$sql);
	$cart=mysqli_fetch_all($result,1);
}
echo json_encode($cart);