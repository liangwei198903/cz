<?php
require_once("init.php");
@$iid=$_REQUEST["iid"];
@$count=$_REQUEST["count"];
if($iid!=null&&$count!=null){
	if($count>0)
		$sql="update cz_shoppingcart_item set count=$count where iid=$iid";
	else
		$sql="delete from cz_shoppingcart_item where iid=$iid";
	$result=mysqli_query($conn,$sql);
}