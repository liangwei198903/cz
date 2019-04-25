<?php
require_once("init.php");
$output=[
	"count"=>0,//
	"pageSize"=>6,//
	"pageCount"=>0,//
	"pageNo"=>0,//
	"products"=>[]//
];
@$kw=$_REQUEST["kw"];
@$pno=$_REQUEST["pno"];
if($kw!=null&&$pno!=null){
	$kws=explode(" ",$kw);
	for($i=0;$i<count($kws);$i++){
		$kws[$i]=" title like '%".$kws[$i]."%' ";
	}
	$where=implode(" and ",$kws);
	$sql="select * from  cz_fenye_products where $where";
	$result=mysqli_query($conn,$sql);
	$count=count(mysqli_fetch_all($result,1));
	$pageCount=ceil($count/$output["pageSize"]);//根据关键字查找的数据按每页6条可以显示多少页
	$output["count"]=$count;
	$output["pageCount"]=$pageCount;
	$sql="select * from  cz_fenye_products where $where limit ".($pno-1)*$output["pageSize"]." , ".$output["pageSize"];
	$output["pageNo"]=$pno;
	$result=mysqli_query($conn,$sql);
	$output["products"]=mysqli_fetch_all($result,1);
}
echo json_encode($output);

/*http://127.0.0.1/chuizi/project_cz/data/getProductBykw.php?kw=机&pno=1

{
	"count":13,
	"pageSize":6,
	"pageCount":3,
	"pageNo":"1",
	"products":
		[{"pid":"16","title":"Smartisan \u534a\u5165\u8033\u5f0f\u8033\u673a \u5fc3\u52a8\u7248","subtitle":"\u54d1\u5149\u8868\u9762\u3001\u4e13\u4e1a\u7ea7\u8c03\u97f3 \u9002\u7528\u4e8e\u575a\u679c Pro \u7cfb\u5217","price":"299.00","pic":"imgs\/fenye\/gov_01.png","href":"detail.html?pid=16"},{"pid":"19","title":"Smartisan \u534a\u5165\u8033\u5f0f\u8033\u673a","subtitle":"\u7ecf\u5178\u914d\u8272\u3001\u4e13\u4e1a\u8c03\u97f3\u3001\u9ad8\u54c1\u8d28\u9ea6\u514b\u98ce","price":"599.00","pic":"imgs\/fenye\/gov_04.png","href":"detail.html?pid=19"},{"pid":"22","title":"ACIL E1 \u9888\u6302\u5f0f\u84dd\u7259\u8033\u673a","subtitle":"\u652f\u6301blueteeth4.0 \u53ef\u4e0e\u5404\u79cd\u8bbe\u5907\u5339\u914d \u65b9\u4fbf\u5feb\u6377","price":"799.00","pic":"imgs\/fenye\/gov_07.png","href":"detail.html?pid=22"},{"pid":"24","title":"\u9524\u5b50\u6302\u8033\u5f0f\u84dd\u7259\u8033\u673a","subtitle":"\u5916\u89c2\u65f6\u5c1a \u5546\u52a1\u4eba\u58eb\u5fc5\u5907\u4ea7\u54c1","price":"199.00","pic":"imgs\/fenye\/gov_09.png","href":"detail.html?pid=24"},{"pid":"25","title":"\u575a\u679c2\u624b\u673a\u540e\u58f3","subtitle":"pc\u8f6f\u8d28\u6750\u8d28 \u624b\u611f\u66f4\u597d \u989c\u8272\u4e30\u5bcc \u65f6\u5c1a\u524d\u6cbf","price":"69.00","pic":"imgs\/fenye\/gov_10.png","href":"detail.html?pid=25"},{"pid":"26","title":"\u9524\u5b50\u9879\u5708\u5f0f\u84dd\u7259\u8033\u673a","subtitle":"2000MAH \u8d85\u957f\u7eed\u822a \u652f\u6301blueteeth4.0 \u7acb\u4f53\u73af\u7ed5\u5e94","price":"699.00","pic":"imgs\/fenye\/gov_11.png","href":"detail.html?pid=26"}]
	}*/