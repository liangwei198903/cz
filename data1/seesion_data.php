<?php
/**
* ���ص�ǰ��¼�û�����Ϣ��
* �磺{"uid":10, "uname":"dingding"}
*/
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: http://127.0.0.1:8080');
header('Access-Control-Allow-Credentials:true');

session_start();
@$output['uid'] = $_SESSION['uid'];
@$output['uname'] = $_SESSION['uname'];

echo json_encode($output);