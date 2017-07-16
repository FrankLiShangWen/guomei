<?php
header("Content-Type:text/plian");
@$did = $_REQUEST['did'] or die("did required");
require("0_init.php");
$sql = "DELETE FROM gm_car_detail WHERE did='$did'";
$result = mysqli_query($conn,$sql);
if($result===false){
	echo 'delete err';
}else{
	echo "delete succ";
}