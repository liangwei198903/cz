<?php
/**
* 返回当前登录用户的信息：
* 如：{"uid":10, "uname":"dingding"}
*/
session_start();
@$output['uid'] = $_SESSION['uid'];
@$output['uname'] = $_SESSION['uname'];

echo json_encode($output);