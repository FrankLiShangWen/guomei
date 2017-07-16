<?php
header("Content-Type:application/json");
@$uname = $_REQUEST["uname"] or die("{'code':4,'uname':'required'}");
@$upwd = $_REQUEST["upwd"] or die("{'code':3,'upwd':'required'}");
require("0_init.php");
$sql = "SELECT * FROM gm_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

if($row===null){
	$result = ['code'=>2,'msg'=>'用户名或者密码错误'];
}else{
	$result = ['code'=>1,'uname'=>$uname,'uid'=>$row['uid']];
}
echo json_encode($result);