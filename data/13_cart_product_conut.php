<?php
header("Content-Type:application/json;charset=utf-8");
@$uid = $_REQUEST['uid'] or die("{'code':3,'uid':'required'}");

require("0_init.php");
$sql = "SELECT * FROM gm_car WHERE userId = '$uid'";
$result = mysqli_query($conn,$sql);
$cid = mysqli_fetch_row($result)[0];

$sql = "SELECT COUNT(*) FROM gm_car_detail WHERE carId = '$cid'";
$result = mysqli_query($conn,$sql);
$row = intval(mysqli_fetch_row($result)[0]);
echo json_encode($row);