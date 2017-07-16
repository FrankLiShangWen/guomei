<?php
header("Content-Type:text/plian;charset=utf-8");
@$uid = $_REQUEST['uid'] or die("uid:required");
@$pay = $_REQUEST['pay'] or die("pay:required");

require("0_init.php");
$sql = "SELECT cid FROM consignee_message WHERE consigneeId='$uid'";
$result = mysqli_query($conn,$sql);
$payId = mysqli_fetch_row($result)[0];

$sql = "SELECT * FROM pay_style WHERE payId='$payId'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
var_dump($row);
if($row==null){
	$sql = "INSERT INTO pay_style VALUES(NULL,'$payId','$pay')";
	$result = mysqli_query($conn,$sql);
	if($result===true){
		echo "insert succ";
	}else{
		echo "insert err";
	}
}else{
	$sql = "UPDATE pay_style SET pay='$pay' WHERE payId='$payId'";
	$result = mysqli_query($conn,$sql);
	if($result===true){
		echo "update succ";
	}else{
		echo "update err";
	}
}

