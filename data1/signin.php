<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: http://127.0.0.1:8080');
header('Access-Control-Allow-Credentials:true');
require_once("init.php");
@$phone=$_REQUEST["phone"];
@$upwd=$_REQUEST["upwd"];
if($phone!=null&&$upwd!=null){
	$sql="select * from cz_userlogin where phone='$phone' and upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row!==null){
		session_start();
		$_SESSION["uid"]=$row[0];
		$_SESSION["uname"]=$row[3];
		echo "登录成功!";
	}else{
		echo "用户名或密码错误!";
	}
}