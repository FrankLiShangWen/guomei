<?php
header("Content-Type:application/json;charset=utf-8");
@$uid = $_REQUEST['uid'] or die("{'code':3,'uid':'required'}");
@$pid = $_REQUEST['pid'] or die("{'code':4,'pid':'required'}");

require("0_init.php");
$sql = "SELECT * FROM gm_car WHERE userId = '$uid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);

if($row!=null){
	$cid = $row[0];
}else{
	$sql = "INSERT INTO gm_car VALUES(NULL,'$uid')";
	mysqli_query($conn,$sql);
	$cid = mysqli_insert_id($conn);
}

$sql = "SELECT * FROM gm_car_detail WHERE carId = '$cid' AND productId = '$pid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

if($row!=null){
	$count = intval($row['count']);
	$count++;
	$did=$row['did'];
	$sql = "UPDATE gm_car_detail SET count ='$count' WHERE did='$did'";
	mysqli_query($conn,$sql);
	
}else{
	$sql = "INSERT INTO gm_car_detail VALUES(NULL,'$cid','$pid',1)";
	mysqli_query($conn,$sql);
	$did=1;
	$count = 1;
}
$arr = [
	'code'=>1,
	'did'=>$did,
	'count'=>$count
];
echo json_encode($arr);
