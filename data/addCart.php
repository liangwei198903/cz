<?php
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
@$pid=$_REQUEST["pid"];
@$count=$_REQUEST["count"];
if($uid!=null&&$pid!=null&&$count!=null){
	$sql="select * from cz_shoppingcart_item where uid=$uid and pid=$pid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$iid=$row[0];
	if($row==null)
		$sql="insert into cz_shoppingcart_item values (null, $uid, $pid, $count,0)";
	else
		$sql="update cz_shoppingcart_item set count=count+$count where iid=$iid";
	$result=mysqli_query($conn,$sql);
}