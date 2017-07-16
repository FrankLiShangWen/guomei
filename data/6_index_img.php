<?php
header("Content-Type:application/json");
$arr = [
	'sj'=>[],
	'shihui_sub1'=>[],
	'shihui_sub2'=>[],
	'shihui_sub3_1'=>[],
	'shihui_sub3_2'=>[],
	'finance'=>[],
	'jiadian'=>[],
	'phone_right'=>[],
	'hot_product'=>[],
	'shaidan'=>[],
	'binner'=>[]
];

require("0_init.php");
$sql = "SELECT * FROM sj";
$result = mysqli_query($conn,$sql);
$arr['sj'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM shihui_sub1";
$result = mysqli_query($conn,$sql);
$arr['shihui_sub1'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM shihui_sub2";
$result = mysqli_query($conn,$sql);
$arr['shihui_sub2'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM shihui_sub3_1";
$result = mysqli_query($conn,$sql);
$arr['shihui_sub3_1'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM shihui_sub3_2";
$result = mysqli_query($conn,$sql);
$arr['shihui_sub3_2'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM finance";
$result = mysqli_query($conn,$sql);
$arr['finance'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM jiadian";
$result = mysqli_query($conn,$sql);
$arr['jiadian'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM phone_right";
$result = mysqli_query($conn,$sql);
$arr['phone_right'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM hot_product";
$result = mysqli_query($conn,$sql);
$arr['hot_product'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM shaidan";
$result = mysqli_query($conn,$sql);
$arr['shaidan'] = mysqli_fetch_all($result,1);

$sql = "SELECT * FROM binner";
$result = mysqli_query($conn,$sql);
$arr['binner'] = mysqli_fetch_all($result,1);

echo json_encode($arr);