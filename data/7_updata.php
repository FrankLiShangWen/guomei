<?php
header("Content-Type:application/json");
require("0_init.php");
@$uid = $_REQUEST['uid'] or die("{'code':3,'uid':'required'}");
@$productId = $_REQUEST['productId'] or die("{'code':4,'productId':'required'}");
@$add_delete = $_REQUEST["add_delete"];

$sql = "SELECT cid FROM gm_car WHERE userId='$uid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
$cid = $row[0];

$sql = "SELECT count FROM gm_car_detail WHERE carId='$cid' AND productId='$productId'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
$count = intval($row[0]);


if($add_delete==='add'){
	$count++;


}else if($add_delete==="delete"){
	$count--;
	if($count===0){//如果数量为 0 ,就删除当前产品
		$sql = "DELETE FROM gm_car_detail WHERE productId='$productId'";
		mysqli_query($conn,$sql);
	}

}
echo $count;
$sql = "UPDATE gm_car_detail SET count='$count' WHERE carId='$cid' AND productId='$productId'";
mysqli_query($conn,$sql);
