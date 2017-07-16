<?php
header("Content-Type:application/json");
require("0_init.php");

@$uid = $_REQUEST['uid'] or die("{'code':3,'uid':'required'}");
$sql = "SELECT cid FROM gm_car WHERE userId='$uid'";
$result = mysqli_query($conn,$sql);
$cid = mysqli_fetch_row($result)[0];

$sql = "SELECT did,productId,count,pid,pname,price,pic FROM gm_car_detail,gm_product WHERE productId=pid AND carId ='$cid'";
$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result,1);
echo json_encode($list);