<?php
header("Content-Type:application/json");
require("0_init.php");
@$pageNum = $_REQUEST['pageNum'];

if($pageNum===null){
	$pageNum=1;
}else{
	$pageNum=intval($pageNum); //intval()将字符串转换成数字
}

$arr = [
	'pageNum'=>$pageNum,
	'pageSize'=>8,
	'recordCount'=>0,
	'pageCount'=>0,
	'data'=>[]
];
$sql = "SELECT COUNT(*) FROM gm_product";
$result = mysqli_query($conn,$sql);
$arr['recordCount'] = intval( mysqli_fetch_row($result)[0] );
$arr['pageCount'] = ceil( $arr['recordCount']/$arr['pageSize'] );//ceil()上取整

//查询指定页中的数据
//从哪里开始读取
$start = ($arr['pageNum']-1)*$arr['pageSize'];
//一次性最多读取的行
$count = $arr['pageSize'];

$sql = "SELECT * FROM gm_product LIMIT $start,$count";
$result  =mysqli_query($conn,$sql);
$arr['data'] = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($arr);
