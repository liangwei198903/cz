<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: http://127.0.0.1:8080');
header('Access-Control-Allow-Credentials:true');
session_start();
@$username=$_SESSION["username"];
echo $username;