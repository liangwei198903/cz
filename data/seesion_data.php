<?php
/**
* ���ص�ǰ��¼�û�����Ϣ��
* �磺{"uid":10, "uname":"dingding"}
*/
session_start();
@$output['uid'] = $_SESSION['uid'];
@$output['uname'] = $_SESSION['uname'];

echo json_encode($output);