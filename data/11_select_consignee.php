<?php
header("Content-Type:application/json;charset=utf-8");
$uid = @$_REQUEST['uid'] or die('{"uid":"requierd"}');
require("0_init.php");
$sql = "SELECT * FROM consignee_message WHERE consigneeId='$uid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
if(!$row){
	echo '{"msg":"err"}';
}else{
	echo json_encode($row);
}


