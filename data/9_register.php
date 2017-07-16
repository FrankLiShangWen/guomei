<?php
header("Content-Type:application/json;charset=utf8");
@$uname = $_REQUEST["uname"] ;
@$upwd = $_REQUEST["upwd"] ;

$arr=[];
require("0_init.php");
$sql = "SELECT * FROM gm_user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_ASSOC($result);
if($row==null){	
	$arr["isReister"] = "succ";
}else{
	$arr["isReister"] = "err";
}
echo json_encode($arr);